import mongoose from 'mongoose';

const subscriptionSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    planId: { type: mongoose.Schema.Types.ObjectId, ref: 'Plan', required: true },
    creditsRemaining: { type: Number, required: true },
    subscriptionStart: { type: Date, default: Date.now },
    renewalDate: { type: Date },
    subscriptionStatus: {
        type: String,
        enum: ['active', 'cancelled', 'expired', 'past_due', 'grace_period', 'refunded', 'revoked'],
        default: 'active'
    },
    billingCycle: { type: String, enum: ['monthly', 'yearly'], default: 'monthly' },
    paymentId: { type: String },
    
    // Apple App Store verified fields (for production auditing & security validation)
    transactionId: { type: String, unique: true, sparse: true },
    originalTransactionId: { type: String, index: true },
    productId: { type: String },
    purchaseDate: { type: Date },
    expiresDate: { type: Date },
    environment: { type: String }, // 'Sandbox' or 'Production'
    autoRenewStatus: { type: Boolean },
    originalPurchaseDate: { type: Date }
}, { timestamps: true });

export default mongoose.model('Subscription', subscriptionSchema);
