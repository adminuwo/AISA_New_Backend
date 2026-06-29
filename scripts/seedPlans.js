/**
 * seedPlans.js — Seeds the 4 AISA plan tiers into MongoDB.
 *
 * Run with:  node scripts/seedPlans.js
 *
 * This script upserts the plan documents based on planId, so it is safe to run multiple times.
 */
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import dns from 'dns';

// Force Node.js to use public DNS resolvers (Google & Cloudflare) to bypass local DNS resolution errors (like querySrv ECONNREFUSED)
try {
    dns.setServers(['8.8.8.8', '1.1.1.1']);
} catch (e) {
    console.warn('⚠️ Failed to set custom DNS servers:', e.message);
}

const __dirname = dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: join(__dirname, '..', '.env') });

const MONGO_URI = process.env.MONGO_URI || process.env.MONGODB_URI || process.env.MONGO_URL || process.env.MONGODB_ATLAS_URI;
if (!MONGO_URI) {
    console.error('❌  No MongoDB URI found. Checked: MONGO_URI, MONGODB_URI, MONGO_URL, MONGODB_ATLAS_URI');
    process.exit(1);
}

const planSchema = new mongoose.Schema({
    planId: { type: String, required: true, unique: true },
    planName: { type: String, required: true },
    priceMonthly: { type: Number, required: true },
    priceYearly: { type: Number, required: true },
    priceYearlyPerMonth: { type: Number },
    chatLimit: { type: Number, default: 100 },
    chatScope: { type: String, default: 'total' },
    imageLimit: { type: Number, default: 0 },
    carouselLimit: { type: Number, default: 0 },
    videoLimit: { type: Number, default: 0 },
    editImageAllowed: { type: Boolean, default: false },
    cashflowAllowed: { type: Boolean, default: false },
    validityDays: { type: Number, default: 90 },
    credits: { type: Number, default: 0 },
    creditsYearly: { type: Number, default: 0 },
    validityMonthly: { type: Number, default: 1 },
    validityYearly: { type: Number, default: 12 },
    features: [String],
    badge: { type: String, default: '' },
    isPopular: { type: Boolean, default: false },
    isActive: { type: Boolean, default: true },
}, { timestamps: true });

const PLANS = [
    {
        planId: 'Plan_0',
        planName: 'Free',
        priceMonthly: 0,
        priceYearly: 0,
        chatLimit: 100,
        chatScope: 'total',
        imageLimit: 0,
        carouselLimit: 0,
        videoLimit: 0,
        editImageAllowed: false,
        cashflowAllowed: false,
        validityDays: 90,
        features: ['100 total AI messages', '3 months validity', 'Basic AI Chat'],
        badge: '',
        isPopular: false,
    },
    {
        planId: 'Plan_1',
        planName: 'Creator',
        priceMonthly: 499,
        priceYearly: 4990,
        priceYearlyPerMonth: 416,
        chatLimit: -1,
        chatScope: 'unlimited',
        imageLimit: 0,
        carouselLimit: 0,
        videoLimit: 0,
        editImageAllowed: false,
        cashflowAllowed: true,
        validityDays: 30,
        features: ['Unlimited AI Chat', 'CashFlow Explorer', 'Web & Deep Search', 'AI Legal™'],
        badge: '',
        isPopular: false,
    },
    {
        planId: 'Plan_2',
        planName: 'Startup',
        priceMonthly: 999,
        priceYearly: 9990,
        priceYearlyPerMonth: 832,
        chatLimit: -1,
        chatScope: 'unlimited',
        imageLimit: 5,
        carouselLimit: 1,
        videoLimit: 0,
        editImageAllowed: true,
        cashflowAllowed: true,
        validityDays: 30,
        features: ['Unlimited AI Chat', '5 Images/day (HD & Ultra)', 'Image Editing', '1 Carousel/day', 'AI Ads Agent', 'AI Legal™'],
        badge: 'Most Popular',
        isPopular: true,
    },
    {
        planId: 'Plan_3',
        planName: 'Enterprise',
        priceMonthly: 2499,
        priceYearly: 24990,
        priceYearlyPerMonth: 2082,
        chatLimit: -1,
        chatScope: 'unlimited',
        imageLimit: 10,
        carouselLimit: 5,
        videoLimit: 5,
        editImageAllowed: true,
        cashflowAllowed: true,
        validityDays: 30,
        features: ['Unlimited AI Chat', '10 Images/day', 'Image Editing', '5 Carousels/day', '5 Videos/day', 'AI Legal™', 'Priority Support'],
        badge: 'Enterprise',
        isPopular: false,
    }
];

async function seedPlans() {
    console.log('🌱 Seeding AISA plan documents...\n');
    await mongoose.connect(MONGO_URI);
    console.log('✅ Connected to MongoDB\n');

    const Plan = mongoose.model('Plan', planSchema);

    // In-place migration block to preserve _id of existing plans
    const migrations = [
        { old: 'free', new: 'Plan_0' },
        { old: 'starter', new: 'Plan_1' },
        { old: 'Creator', new: 'Plan_1' },
        { old: 'pro', new: 'Plan_2' },
        { old: 'business', new: 'Plan_3' }
    ];
    for (const m of migrations) {
        const migResult = await Plan.updateMany({ planId: m.old }, { $set: { planId: m.new } });
        if (migResult.modifiedCount > 0) {
            console.log(`  🔄 Migrated ${migResult.modifiedCount} plan documents from planId '${m.old}' to '${m.new}'`);
        }
    }

    for (const plan of PLANS) {
        await Plan.findOneAndUpdate(
            { planId: plan.planId },
            { $set: plan },
            { upsert: true, new: true }
        );
        console.log(`  ✅ ${plan.planName.padEnd(12)} (₹${plan.priceMonthly}/mo) — chat: ${plan.chatLimit === -1 ? '∞' : plan.chatLimit}, imgs: ${plan.imageLimit}/day, carousel: ${plan.carouselLimit}/day, video: ${plan.videoLimit}/day`);
    }

    // Deactivate any other plans in the database that are not part of the core 4 tiers
    const activePlanIds = PLANS.map(p => p.planId);
    const deactivateResult = await Plan.updateMany(
        { planId: { $nin: activePlanIds } },
        { $set: { isActive: false } }
    );
    console.log(`\n  Inactive legacy plans updated: ${deactivateResult.modifiedCount}`);

    // Remove legacy credits fields from all plan documents
    const unsetResult = await Plan.updateMany(
        {},
        { $unset: { credits: "", creditsYearly: "" } }
    );
    console.log(`  Removed legacy credits fields from ${unsetResult.modifiedCount} plan documents`);

    console.log('\n🎉 All plans seeded successfully!\n');
    await mongoose.disconnect();
    process.exit(0);
}

seedPlans().catch(err => {
    console.error('❌ Seed failed:', err.message);
    process.exit(1);
});
