import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import dns from 'dns';

try {
    dns.setServers(['8.8.8.8', '1.1.1.1']);
} catch (e) {}

const __dirname = dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: join(__dirname, '..', '.env') });

const MONGO_URI = process.env.MONGODB_ATLAS_URI || process.env.MONGO_URI;

async function upgrade() {
    try {
        await mongoose.connect(MONGO_URI);
        console.log('Connected to MongoDB');

        const User = (await import('../models/User.js')).default;
        const Subscription = (await import('../models/Subscription.js')).default;
        const Plan = (await import('../models/Plan.js')).default;
        const UserQuota = (await import('../models/UserQuota.js')).default;

        // 1. Find user yugamcteam@gmail.com
        const user = await User.findOne({ email: 'yugamcteam@gmail.com' });
        if (!user) {
            console.log('User yugamcteam@gmail.com not found.');
            await mongoose.disconnect();
            return;
        }
        console.log(`Found user: ${user.email} (${user._id})`);

        // 2. Find Startup plan (Plan_2)
        const plan = await Plan.findOne({ planId: 'Plan_2', isActive: true });
        if (!plan) {
            console.log('Startup plan (Plan_2) not found.');
            await mongoose.disconnect();
            return;
        }
        console.log(`Found Startup Plan: ${plan.planName} (${plan._id})`);

        // 3. Delete existing subscriptions for this user
        const deleteResult = await Subscription.deleteMany({ userId: user._id });
        console.log(`Deleted ${deleteResult.deletedCount} existing subscriptions.`);

        // 4. Create new active subscription for Startup plan
        let renewalDate = new Date();
        renewalDate.setMonth(renewalDate.getMonth() + 1);

        const newSubscription = await Subscription.create({
            userId: user._id,
            planId: plan._id,
            creditsRemaining: 0,
            billingCycle: 'monthly',
            subscriptionStart: new Date(),
            renewalDate,
            subscriptionStatus: 'active',
            paymentId: `manual_upgrade_${Date.now()}`
        });
        console.log(`Created new subscription:`, newSubscription);

        // 5. Reset user quota
        await UserQuota.findOneAndUpdate(
            { userId: user._id },
            {
                $set: {
                    imagesUsed: 0,
                    carouselsUsed: 0,
                    videosUsed: 0,
                    planActivatedAt: new Date(),
                }
            },
            { upsert: true, new: true }
        );
        console.log('Reset user quotas.');

        // 6. Reset founderStatus in user object just in case
        user.founderStatus = false;
        await user.save();
        console.log(`Reset user founderStatus to false.`);

        console.log('User successfully upgraded to Startup Plan!');
        await mongoose.disconnect();
    } catch (err) {
        console.error('Error during upgrade:', err);
    }
}

upgrade();
