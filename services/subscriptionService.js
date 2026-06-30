import User from '../models/User.js';
import Subscription from '../models/Subscription.js';
import UserQuota from '../models/UserQuota.js';
import Plan from '../models/Plan.js';

// ── PLAN QUOTA DEFAULTS (fallback if not found in DB) ─────────────────────────
// These match the seeded plan documents exactly.
const PLAN_QUOTA_DEFAULTS = {
    'Plan_0': { chatLimit: 100, chatScope: 'total',     imageLimit: 0,  carouselLimit: 0, videoLimit: 0, editImageAllowed: false, cashflowAllowed: false, validityDays: 90, aiLegalAllowed: false, aiAdsAllowed: false, voiceGenAllowed: false, webSearchAllowed: false, deepSearchAllowed: false, codeWriterAllowed: false, documentConvertAllowed: false },
    'Plan_1': { chatLimit: -1,  chatScope: 'unlimited', imageLimit: 0,  carouselLimit: 0, videoLimit: 0, editImageAllowed: true,  cashflowAllowed: true,  validityDays: 30, aiLegalAllowed: true,  aiAdsAllowed: false, voiceGenAllowed: true,  webSearchAllowed: true,  deepSearchAllowed: true,  codeWriterAllowed: true,  documentConvertAllowed: true  },
    'Plan_2': { chatLimit: -1,  chatScope: 'unlimited', imageLimit: 5,  carouselLimit: 1, videoLimit: 0, editImageAllowed: true,  cashflowAllowed: true,  validityDays: 30, aiLegalAllowed: true,  aiAdsAllowed: true,  voiceGenAllowed: true,  webSearchAllowed: true,  deepSearchAllowed: true,  codeWriterAllowed: true,  documentConvertAllowed: true  },
    'Plan_3': { chatLimit: -1,  chatScope: 'unlimited', imageLimit: 10, carouselLimit: 5, videoLimit: 5, editImageAllowed: true,  cashflowAllowed: true,  validityDays: 30, aiLegalAllowed: true,  aiAdsAllowed: true,  voiceGenAllowed: true,  webSearchAllowed: true,  deepSearchAllowed: true,  codeWriterAllowed: true,  documentConvertAllowed: true  },
};

/**
 * Fetch default plan configurations dynamically from the database.
 * Falls back to hardcoded defaults only if DB check fails.
 */
const getPlanDefaultsFromDb = async (planKey) => {
    try {
        const plan = await Plan.findOne({ planId: planKey, isActive: true }).lean();
        if (plan) {
            return {
                chatLimit: plan.chatLimit,
                chatScope: plan.chatScope,
                imageLimit: plan.imageLimit,
                carouselLimit: plan.carouselLimit,
                videoLimit: plan.videoLimit,
                editImageAllowed: plan.editImageAllowed,
                cashflowAllowed: plan.cashflowAllowed,
                validityDays: plan.validityDays,
                aiLegalAllowed: plan.aiLegalAllowed,
                aiAdsAllowed: plan.aiAdsAllowed,
                voiceGenAllowed: plan.voiceGenAllowed,
                webSearchAllowed: plan.webSearchAllowed,
                deepSearchAllowed: plan.deepSearchAllowed,
                codeWriterAllowed: plan.codeWriterAllowed,
                documentConvertAllowed: plan.documentConvertAllowed,
            };
        }
    } catch (err) {
        console.error(`[subscriptionService] Failed to load plan ${planKey} defaults from DB:`, err.message);
    }
    return PLAN_QUOTA_DEFAULTS[planKey] || PLAN_QUOTA_DEFAULTS['Plan_0'];
};

/**
 * Resolve today's date string (YYYY-MM-DD) in IST (UTC+5:30)
 */
const getTodayIST = () => {
    const now = new Date();
    const ist = new Date(now.getTime() + (5.5 * 60 * 60 * 1000));
    return ist.toISOString().split('T')[0];
};

/**
 * Get the active plan quota for a user.
 * Returns plan quotas merged from DB or fallback defaults.
 */
export const getUserPlan = async (userId) => {
    const user = await User.findById(userId).lean();
    if (!user) {
        const freeDefaults = await getPlanDefaultsFromDb('Plan_0');
        return { planKey: 'Plan_0', ...freeDefaults };
    }

    // Admins bypass all quota enforcement
    if (user.role === 'admin' || (user.email && user.email.toLowerCase() === 'admin@uwo24.com')) {
        return { planKey: 'admin', chatLimit: -1, chatScope: 'unlimited', imageLimit: 999, carouselLimit: 999, videoLimit: 999, editImageAllowed: true, cashflowAllowed: true, validityDays: 99999, aiLegalAllowed: true, aiAdsAllowed: true, voiceGenAllowed: true, webSearchAllowed: true, deepSearchAllowed: true, codeWriterAllowed: true, documentConvertAllowed: true };
    }

    // Founder status → treat as Business plan
    if (user.founderStatus) {
        const businessDefaults = await getPlanDefaultsFromDb('Plan_3');
        return { planKey: 'founder', ...businessDefaults, imageLimit: 999, carouselLimit: 999, videoLimit: 999 };
    }

    // Fetch active or grace period subscription
    const sub = await Subscription.findOne({
        userId,
        subscriptionStatus: { $in: ['active', 'grace_period'] }
    }).populate('planId').lean();

    if (!sub || !sub.planId) {
        const freeDefaults = await getPlanDefaultsFromDb('Plan_0');
        return { planKey: 'Plan_0', ...freeDefaults };
    }

    const plan = sub.planId;

    // Check if plan has expired
    if (sub.renewalDate && new Date(sub.renewalDate) < new Date()) {
        const freeDefaults = await getPlanDefaultsFromDb('Plan_0');
        return { planKey: 'Plan_0', ...freeDefaults };
    }

    // Match plan by planId string (case-insensitive) or by price
    const planIdStr = (plan.planId || plan.planName || '').toLowerCase();
    let planKey = 'Plan_0';
    if (planIdStr.includes('plan_3') || planIdStr.includes('business') || plan.priceMonthly >= 2499) planKey = 'Plan_3';
    else if (planIdStr.includes('plan_2') || planIdStr.includes('pro') || plan.priceMonthly >= 999) planKey = 'Plan_2';
    else if (planIdStr.includes('plan_1') || planIdStr.includes('starter') || plan.priceMonthly >= 499) planKey = 'Plan_1';
    else if (planIdStr.includes('founder')) planKey = 'Plan_3'; // Founder = Business level

    // Prefer DB quota fields, fallback to DB plan defaults
    const defaults = await getPlanDefaultsFromDb(planKey);
    return {
        planKey,
        subscriptionId: sub._id,
        renewalDate: sub.renewalDate,
        chatLimit:        plan.chatLimit        ?? defaults.chatLimit,
        chatScope:        plan.chatScope        ?? defaults.chatScope,
        imageLimit:       plan.imageLimit       ?? defaults.imageLimit,
        carouselLimit:    plan.carouselLimit    ?? defaults.carouselLimit,
        videoLimit:       plan.videoLimit       ?? defaults.videoLimit,
        editImageAllowed: plan.editImageAllowed ?? defaults.editImageAllowed,
        cashflowAllowed:  plan.cashflowAllowed  ?? defaults.cashflowAllowed,
        validityDays:     plan.validityDays     ?? defaults.validityDays,
        aiLegalAllowed:    plan.aiLegalAllowed    ?? defaults.aiLegalAllowed,
        aiAdsAllowed:      plan.aiAdsAllowed      ?? defaults.aiAdsAllowed,
        voiceGenAllowed:   plan.voiceGenAllowed   ?? defaults.voiceGenAllowed,
        webSearchAllowed:  plan.webSearchAllowed  ?? defaults.webSearchAllowed,
        deepSearchAllowed: plan.deepSearchAllowed ?? defaults.deepSearchAllowed,
        codeWriterAllowed: plan.codeWriterAllowed ?? defaults.codeWriterAllowed,
        documentConvertAllowed: plan.documentConvertAllowed ?? defaults.documentConvertAllowed,
    };
};

/**
 * Get or create the UserQuota document for a user.
 * Automatically resets daily counters if the stored date != today.
 */
export const getOrCreateUserQuota = async (userId) => {
    const today = getTodayIST();

    let quota = await UserQuota.findOne({ userId });

    if (!quota) {
        // First time — create with today's date and plan activation
        quota = await UserQuota.create({
            userId,
            date: today,
            imagesUsed: 0,
            carouselsUsed: 0,
            videosUsed: 0,
            chatUsed: 0,
            planActivatedAt: new Date(),
        });
    } else if (quota.date !== today) {
        // New day — reset daily counters atomically
        quota = await UserQuota.findOneAndUpdate(
            { userId },
            { $set: { date: today, imagesUsed: 0, carouselsUsed: 0, videosUsed: 0 } },
            { new: true }
        );
    }

    return quota;
};

/**
 * Check if a user can perform an action under their current plan quota.
 *
 * @param {string} userId
 * @param {string} action  - 'chat' | 'generate_image' | 'edit_image' | 'generate_carousel' | 'generate_video' | 'cashflow'
 * @returns {{ allowed: boolean, reason?: string, code?: string, planKey?: string }}
 */
export const checkQuota = async (userId, action) => {
    const plan = await getUserPlan(userId);

    // Admins always allowed
    if (plan.planKey === 'admin') return { allowed: true, planKey: 'admin' };

    // ── CHECK PLAN EXPIRY (Free plan: 90 days) ──────────────────────────────
    const quota = await getOrCreateUserQuota(userId);

    if (plan.planKey === 'Plan_0') {
        const activatedAt = quota.planActivatedAt || new Date();
        const expiryMs = activatedAt.getTime() + (plan.validityDays * 24 * 60 * 60 * 1000);
        if (Date.now() > expiryMs) {
            return {
                allowed: false,
                code: 'PLAN_EXPIRED',
                reason: 'Your free plan has expired. Please upgrade to continue using AISA.',
                planKey: plan.planKey
            };
        }
    }

    // ── ACTION-SPECIFIC CHECKS ────────────────────────────────────────────────
    switch (action) {

        case 'chat': {
            if (plan.chatScope === 'unlimited') return { allowed: true, planKey: plan.planKey };
            // Free plan: check total lifetime chat count
            if (plan.chatLimit !== -1 && quota.chatUsed >= plan.chatLimit) {
                return {
                    allowed: false,
                    code: 'QUOTA_EXCEEDED',
                    reason: `You've used all ${plan.chatLimit} messages on the Free plan. Upgrade to get unlimited conversations.`,
                    planKey: plan.planKey,
                    used: quota.chatUsed,
                    limit: plan.chatLimit
                };
            }
            return { allowed: true, planKey: plan.planKey };
        }

        case 'generate_image': {
            if (plan.imageLimit === 0) {
                return {
                    allowed: false,
                    code: 'PLAN_RESTRICTED',
                    reason: 'Image generation is not available on your current plan. Upgrade to Pro (₹999/mo) for 5 images per day.',
                    planKey: plan.planKey
                };
            }
            if (quota.imagesUsed >= plan.imageLimit) {
                return {
                    allowed: false,
                    code: 'QUOTA_EXCEEDED',
                    reason: `You've used your ${plan.imageLimit} image${plan.imageLimit > 1 ? 's' : ''} for today. Your limit resets tomorrow.`,
                    planKey: plan.planKey,
                    used: quota.imagesUsed,
                    limit: plan.imageLimit
                };
            }
            return { allowed: true, planKey: plan.planKey };
        }

        case 'edit_image': {
            if (!plan.editImageAllowed) {
                return {
                    allowed: false,
                    code: 'PLAN_RESTRICTED',
                    reason: 'Image editing is not available on the Free plan. Upgrade to Starter (₹499/mo) or higher to edit images.',
                    planKey: plan.planKey
                };
            }
            return { allowed: true, planKey: plan.planKey };
        }

        case 'generate_carousel': {
            if (plan.carouselLimit === 0) {
                return {
                    allowed: false,
                    code: 'PLAN_RESTRICTED',
                    reason: 'Carousel generation is not available on your current plan. Upgrade to Pro (₹999/mo) for 1 carousel per day.',
                    planKey: plan.planKey
                };
            }
            if (quota.carouselsUsed >= plan.carouselLimit) {
                return {
                    allowed: false,
                    code: 'QUOTA_EXCEEDED',
                    reason: `You've used your ${plan.carouselLimit} carousel${plan.carouselLimit > 1 ? 's' : ''} for today. Your limit resets tomorrow.`,
                    planKey: plan.planKey,
                    used: quota.carouselsUsed,
                    limit: plan.carouselLimit
                };
            }
            return { allowed: true, planKey: plan.planKey };
        }

        case 'generate_video': {
            if (plan.videoLimit === 0) {
                return {
                    allowed: false,
                    code: 'PLAN_RESTRICTED',
                    reason: 'Video generation is not available on your current plan. Upgrade to Business (₹2499/mo) for 5 videos per day.',
                    planKey: plan.planKey
                };
            }
            if (quota.videosUsed >= plan.videoLimit) {
                return {
                    allowed: false,
                    code: 'QUOTA_EXCEEDED',
                    reason: `You've used your ${plan.videoLimit} video${plan.videoLimit > 1 ? 's' : ''} for today. Your limit resets tomorrow.`,
                    planKey: plan.planKey,
                    used: quota.videosUsed,
                    limit: plan.videoLimit
                };
            }
            return { allowed: true, planKey: plan.planKey };
        }

        case 'cashflow': {
            if (!plan.cashflowAllowed) {
                return {
                    allowed: false,
                    code: 'PLAN_RESTRICTED',
                    reason: 'CashFlow Explorer is not available on the Free plan. Upgrade to Starter (₹499/mo) or higher to access stock insights.',
                    planKey: plan.planKey
                };
            }
            return { allowed: true, planKey: plan.planKey };
        }

        case 'ai_legal': {
            if (!plan.aiLegalAllowed) {
                return {
                    allowed: false,
                    code: 'PLAN_RESTRICTED',
                    reason: 'AI Legal™ Advisor is not available on your current plan. Please upgrade to access.',
                    planKey: plan.planKey
                };
            }
            return { allowed: true, planKey: plan.planKey };
        }

        case 'ai_ads': {
            if (!plan.aiAdsAllowed) {
                return {
                    allowed: false,
                    code: 'PLAN_RESTRICTED',
                    reason: 'AI Ads™ Agent is not available on your current plan. Please upgrade to access.',
                    planKey: plan.planKey
                };
            }
            return { allowed: true, planKey: plan.planKey };
        }

        case 'voice_gen': {
            if (!plan.voiceGenAllowed) {
                return {
                    allowed: false,
                    code: 'PLAN_RESTRICTED',
                    reason: 'Voice generation is not available on your current plan. Please upgrade to access.',
                    planKey: plan.planKey
                };
            }
            return { allowed: true, planKey: plan.planKey };
        }

        case 'web_search': {
            if (!plan.webSearchAllowed) {
                return {
                    allowed: false,
                    code: 'PLAN_RESTRICTED',
                    reason: 'Web Search is not available on your current plan. Please upgrade to access.',
                    planKey: plan.planKey
                };
            }
            return { allowed: true, planKey: plan.planKey };
        }

        case 'deep_search':
        case 'DEEP_SEARCH': {
            if (!plan.deepSearchAllowed) {
                return {
                    allowed: false,
                    code: 'PLAN_RESTRICTED',
                    reason: 'Deep Search is not available on your current plan. Please upgrade to access.',
                    planKey: plan.planKey
                };
            }
            return { allowed: true, planKey: plan.planKey };
        }

        case 'code_writer': {
            if (!plan.codeWriterAllowed) {
                return {
                    allowed: false,
                    code: 'PLAN_RESTRICTED',
                    reason: 'Code Writer is not available on your current plan. Please upgrade to access.',
                    planKey: plan.planKey
                };
            }
            return { allowed: true, planKey: plan.planKey };
        }

        case 'convert_document': {
            if (!plan.documentConvertAllowed) {
                return {
                    allowed: false,
                    code: 'PLAN_RESTRICTED',
                    reason: 'Document converter is not available on your current plan. Please upgrade to access.',
                    planKey: plan.planKey
                };
            }
            return { allowed: true, planKey: plan.planKey };
        }

        default:
            // All other actions are allowed on all plans
            return { allowed: true, planKey: plan.planKey };
    }
};

/**
 * Atomically increment a quota counter after a successful generation.
 *
 * @param {string} userId
 * @param {string} action  - 'chat' | 'generate_image' | 'generate_carousel' | 'generate_video'
 * @param {number} count   - how many to increment (default 1)
 */
export const incrementQuota = async (userId, action, count = 1) => {
    const today = getTodayIST();

    const fieldMap = {
        'chat':               'chatUsed',
        'generate_image':     'imagesUsed',
        'generate_carousel':  'carouselsUsed',
        'generate_video':     'videosUsed',
    };

    const field = fieldMap[action];
    if (!field) return; // unknown action, skip

    try {
        await UserQuota.findOneAndUpdate(
            { userId },
            {
                $inc: { [field]: count },
                $setOnInsert: { date: today, planActivatedAt: new Date() }
            },
            { upsert: true, new: true }
        );
    } catch (err) {
        console.error(`[QuotaSystem] Failed to increment ${field} for user ${userId}:`, err.message);
        // Non-fatal: don't throw, just log
    }
};

// ── LEGACY HELPERS (kept for backward compat with existing non-credit parts) ──

/** Returns true if user has no active paid subscription */
export const isFreeTierUser = async (userId) => {
    const plan = await getUserPlan(userId);
    return plan.planKey === 'Plan_0';
};

/** Returns true if user has any paid subscription or founder status */
export const checkPremiumAccess = async (userId) => {
    const plan = await getUserPlan(userId);
    return plan.planKey !== 'Plan_0';
};

/**
 * Legacy stub — credit deduction no longer happens.
 * Controllers that still reference subscriptionService.deductCredits will silently succeed.
 */
export const subscriptionService = {
    checkCredits: async () => true,
    deductCredits: async () => true,
    deductCreditsFromMeta: async () => true,
    checkLimit: async () => ({ usage: 0, usageKey: 'mock' }),
    incrementUsage: () => {},
    // New quota methods exposed here for convenience
    checkQuota,
    incrementQuota,
    getUserPlan,
};

// Stub for old code that imported getToolCost
export const getToolCost = () => 0;
export const refreshFeatureCostCache = async () => {};
