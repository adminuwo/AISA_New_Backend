import Subscription from '../models/Subscription.js';
import Plan from '../models/Plan.js';
import User from '../models/User.js';
import UserQuota from '../models/UserQuota.js';
import axios from 'axios';

// Helper to delay execution for retries
const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// Apple IAP status code explanations
const APPLE_STATUS_ERRORS = {
    21000: 'The App Store could not read the JSON object you provided.',
    21002: 'The data in the receipt-data property was malformed or missing.',
    21003: 'The receipt could not be authenticated.',
    21004: 'The shared secret you provided does not match the shared secret on file for your account.',
    21005: 'The receipt server is not currently available.',
    21006: 'This receipt is valid but the subscription has expired.',
    21007: 'This receipt is from the test environment, but it was sent to the production environment.',
    21008: 'This receipt is from the production environment, but it was sent to the test environment.',
    21010: 'This receipt could not be authorized.'
};

/**
 * Call Apple receipt validation endpoint with retries and exponential backoff.
 */
async function verifyReceiptWithApple(receipt, requestData, isSandbox = false, retries = 3, delay = 1000) {
    const url = isSandbox 
        ? 'https://sandbox.itunes.apple.com/verifyReceipt' 
        : 'https://buy.itunes.apple.com/verifyReceipt';
        
    for (let attempt = 1; attempt <= retries; attempt++) {
        try {
            console.log(`[AppleStore IAP] Contacting Apple ${isSandbox ? 'Sandbox' : 'Production'} server (Attempt ${attempt}/${retries})...`);
            const response = await axios.post(url, requestData, {
                headers: { 'Content-Type': 'application/json' },
                timeout: 10000 // 10s timeout
            });
            return response.data;
        } catch (err) {
            console.error(`[AppleStore IAP] Network/HTTP error verifying receipt (Attempt ${attempt}/${retries}):`, err.message);
            if (attempt === retries) throw err;
            await sleep(delay * attempt); // exponential backoff
        }
    }
}

/**
 * POST /api/payment/verify/apple
 * Verifies an iOS App Store subscription receipt and activates/upgrades user plan.
 */
export const verifyAppleStoreSubscription = async (req, res) => {
    try {
        const { receipt, productId, transactionId } = req.body;
        const userId = req.user.id || req.user._id;

        console.log(`[AppleStore IAP] Request received. User: ${userId}, Request ProductId: ${productId}, TransactionId: ${transactionId}`);

        if (!receipt) {
            return res.status(400).json({ success: false, message: 'receipt is required.' });
        }

        // 1. Replay Attack & Duplicate Transaction Check
        if (transactionId) {
            const existingSub = await Subscription.findOne({ transactionId });
            if (existingSub) {
                console.log(`[AppleStore IAP] Transaction ${transactionId} already processed. Status: ${existingSub.subscriptionStatus}`);
                
                // If it is active or grace period, return success directly to complete the flow in mobile client
                if (['active', 'grace_period'].includes(existingSub.subscriptionStatus)) {
                    const plan = await Plan.findById(existingSub.planId);
                    return res.status(200).json({
                        success: true,
                        alreadyProcessed: true,
                        subscription: existingSub,
                        planKey: plan?.planId || 'Plan_0',
                        message: '✅ Purchase verified (already processed).'
                    });
                }
            }
        }

        // Determine simulation/bypass mode (explicit bypass token)
        let isSimulationMode = receipt === 'test_bypass_token';

        let resolvedProductId = productId;
        let resolvedTransactionId = transactionId || `ios_mock_${Date.now()}`;
        let resolvedOriginalTransactionId = transactionId || `ios_mock_${Date.now()}`;
        let resolvedPurchaseDate = new Date();
        let resolvedExpiresDate = new Date();
        let resolvedOriginalPurchaseDate = new Date();
        let resolvedEnvironment = 'Sandbox';
        let resolvedAutoRenewStatus = true;
        let resolvedSubscriptionStatus = 'active';

        // 2. Perform Receipt Verification
        if (!isSimulationMode) {
            try {
                const requestData = {
                    'receipt-data': receipt
                };
                
                if (process.env.APPLE_IAP_SHARED_SECRET) {
                    requestData.password = process.env.APPLE_IAP_SHARED_SECRET;
                }

                let appleResponse = await verifyReceiptWithApple(receipt, requestData, false);

                // Failover to Sandbox if receipt is for Sandbox environment
                if (appleResponse && appleResponse.status === 21007) {
                    console.log('[AppleStore IAP] Sandbox receipt detected in production. Retrying with Apple Sandbox server...');
                    appleResponse = await verifyReceiptWithApple(receipt, requestData, true);
                }

                if (!appleResponse) {
                    return res.status(400).json({ success: false, message: 'Could not connect to Apple Store verification servers.' });
                }

                // Apple status code checking (status 0 is success, status 21006 indicates expired subscription)
                if (appleResponse.status !== 0 && appleResponse.status !== 21006) {
                    const errorMsg = APPLE_STATUS_ERRORS[appleResponse.status] || `Status code: ${appleResponse.status}`;
                    console.error(`[AppleStore IAP] Apple receipt validation failed. Error: ${errorMsg}`);
                    return res.status(400).json({ success: false, message: `Apple validation failed: ${errorMsg}` });
                }

                // Bundle validation - verify this receipt belongs to our application
                const receiptBundleId = appleResponse.receipt ? appleResponse.receipt.bundle_id : null;
                const expectedBundleId = process.env.APPLE_BUNDLE_ID || 'com.uwo.aisa';
                if (receiptBundleId && receiptBundleId !== expectedBundleId && receiptBundleId !== 'com.aisa24.login') {
                    console.error(`[AppleStore IAP] Bundle ID mismatch! Receipt: ${receiptBundleId}, Expected: ${expectedBundleId}`);
                    return res.status(400).json({ success: false, message: 'Receipt verification failed: bundle ID mismatch.' });
                }

                // Parse transactions list
                const latestInfo = appleResponse.latest_receipt_info || [];
                const inAppInfo = (appleResponse.receipt && appleResponse.receipt.in_app) || [];
                const transactions = [...latestInfo, ...inAppInfo];

                if (transactions.length === 0) {
                    return res.status(400).json({ success: false, message: 'No transactions found in Apple purchase receipt.' });
                }

                // Sort by expiration date descending to get the latest subscription
                transactions.sort((a, b) => {
                    const timeA = parseInt(a.expires_date_ms || a.purchase_date_ms || 0);
                    const timeB = parseInt(b.expires_date_ms || b.purchase_date_ms || 0);
                    return timeB - timeA;
                });

                const activeItem = transactions[0];
                resolvedProductId = activeItem.product_id;
                resolvedTransactionId = activeItem.transaction_id;
                resolvedOriginalTransactionId = activeItem.original_transaction_id;
                resolvedPurchaseDate = new Date(parseInt(activeItem.purchase_date_ms));
                resolvedOriginalPurchaseDate = new Date(parseInt(activeItem.original_purchase_date_ms || activeItem.purchase_date_ms));
                resolvedEnvironment = appleResponse.environment || (appleResponse.status === 21007 || isSimulationMode ? 'Sandbox' : 'Production');
                resolvedAutoRenewStatus = appleResponse.pending_renewal_info && appleResponse.pending_renewal_info[0]
                    ? appleResponse.pending_renewal_info[0].auto_renew_status === '1'
                    : true;

                if (activeItem.expires_date_ms) {
                    resolvedExpiresDate = new Date(parseInt(activeItem.expires_date_ms));
                } else {
                    // Default to 1 month validity if no expiry date is found (should always exist for subscriptions)
                    resolvedExpiresDate = new Date(resolvedPurchaseDate.getTime() + (30 * 24 * 60 * 60 * 1000));
                }

                // Determine Subscription Status based on Apple parameters:
                if (activeItem.cancellation_date_ms) {
                    // User was refunded or revoked by Apple Customer Support
                    resolvedSubscriptionStatus = 'revoked';
                } else if (resolvedExpiresDate.getTime() < Date.now()) {
                    // Check if subscription has grace period
                    const pendingRenewal = appleResponse.pending_renewal_info ? appleResponse.pending_renewal_info[0] : null;
                    if (pendingRenewal && pendingRenewal.grace_period_expires_date_ms) {
                        const gracePeriodExpiry = parseInt(pendingRenewal.grace_period_expires_date_ms);
                        if (Date.now() < gracePeriodExpiry) {
                            resolvedSubscriptionStatus = 'grace_period';
                        } else {
                            resolvedSubscriptionStatus = 'expired';
                        }
                    } else if (pendingRenewal && pendingRenewal.is_in_billing_retry_period === '1') {
                        resolvedSubscriptionStatus = 'past_due';
                    } else {
                        resolvedSubscriptionStatus = 'expired';
                    }
                } else {
                    resolvedSubscriptionStatus = 'active';
                }

                console.log(`[AppleStore IAP] Successfully verified receipt natively. Product: ${resolvedProductId}, Status: ${resolvedSubscriptionStatus}`);

            } catch (err) {
                console.error('[AppleStore IAP] Native validation exception:', err.message);
                return res.status(400).json({ success: false, message: `Apple validation exception: ${err.message}` });
            }
        } else {
            console.log(`[AppleStore IAP] Simulation/Sandbox bypass mode. Skipping Apple verify Receipt call.`);
            resolvedExpiresDate = new Date();
            resolvedExpiresDate.setMonth(resolvedExpiresDate.getMonth() + 1); // 1 month validity
        }

        // 3. Map Subscription Product ID to DB Plan Keys
        let planIdKey = 'Plan_1'; // Default: Creator
        const cleanProductId = String(resolvedProductId).toLowerCase().trim();

        if (cleanProductId.includes('startup') || cleanProductId.includes('plan_2')) {
            planIdKey = 'Plan_2';
        } else if (cleanProductId.includes('enterprise') || cleanProductId.includes('plan_3')) {
            planIdKey = 'Plan_3';
        } else {
            planIdKey = 'Plan_1';
        }

        const plan = await Plan.findOne({ planId: planIdKey, isActive: true });
        if (!plan) {
            return res.status(404).json({ success: false, message: `Plan details for key '${planIdKey}' not found in database.` });
        }

        let billingCycle = cleanProductId.includes('yearly') || cleanProductId.includes('annual') ? 'yearly' : 'monthly';

        // 4. Update MongoDB user subscription atomically
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ success: false, message: 'User not found.' });
        }

        // Disable existing active subscriptions for this user
        await Subscription.updateMany(
            { userId, subscriptionStatus: { $in: ['active', 'grace_period'] } },
            { $set: { subscriptionStatus: 'cancelled' } }
        );

        // Create or update subscription entry based on originalTransactionId
        const updatedSubscription = await Subscription.findOneAndUpdate(
            { userId, originalTransactionId: resolvedOriginalOriginalTransactionIdOrFallback(resolvedOriginalTransactionId, resolvedTransactionId) },
            {
                $set: {
                    planId: plan._id,
                    creditsRemaining: 0,
                    billingCycle,
                    subscriptionStart: resolvedPurchaseDate,
                    renewalDate: resolvedExpiresDate,
                    subscriptionStatus: resolvedSubscriptionStatus,
                    paymentId: resolvedTransactionId,
                    transactionId: resolvedTransactionId,
                    originalTransactionId: resolvedOriginalTransactionId,
                    productId: resolvedProductId,
                    purchaseDate: resolvedPurchaseDate,
                    expiresDate: resolvedExpiresDate,
                    environment: resolvedEnvironment,
                    autoRenewStatus: resolvedAutoRenewStatus,
                    originalPurchaseDate: resolvedOriginalPurchaseDate
                }
            },
            { upsert: true, new: true }
        );

        // Reset Quota usage on plan upgrade (daily limits reset) if transaction is currently valid
        if (['active', 'grace_period'].includes(resolvedSubscriptionStatus)) {
            await UserQuota.findOneAndUpdate(
                { userId },
                {
                    $set: {
                        imagesUsed: 0,
                        carouselsUsed: 0,
                        videosUsed: 0,
                        planActivatedAt: new Date(),
                        planExpiresAt: resolvedExpiresDate
                    }
                },
                { upsert: true, new: true }
            );
        }

        console.log(`[AppleStore IAP] Successfully saved database records. User: ${userId}, Plan: ${plan.planName}, Status: ${resolvedSubscriptionStatus}`);

        return res.status(200).json({
            success: true,
            isSimulation: isSimulationMode,
            subscription: updatedSubscription,
            planKey: plan.planId || 'Plan_0',
            message: `✅ Subscription verified successfully. Plan '${plan.planName}' is ${resolvedSubscriptionStatus}.`
        });

    } catch (error) {
        console.error('[AppleStore IAP] verifyAppleStoreSubscription endpoint error:', error);
        return res.status(500).json({ success: false, message: error.message });
    }
};

// Helper for finding original transaction fallback
function resolvedOriginalOriginalTransactionIdOrFallback(origId, currentId) {
    return origId || currentId;
}

