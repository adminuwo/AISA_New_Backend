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

async function check() {
    await mongoose.connect(MONGO_URI);
    const Subscription = (await import('../models/Subscription.js')).default;
    const User = (await import('../models/User.js')).default;
    const Plan = (await import('../models/Plan.js')).default;
    
    const subs = await Subscription.find({}).sort({ createdAt: -1 }).limit(5).populate('planId').lean();
    console.log("Latest Subscriptions:");
    for (const sub of subs) {
        const user = await User.findById(sub.userId).select('email name').lean();
        console.log("-----------------------------------------");
        console.log(`Sub ID: ${sub._id}`);
        console.log(`User: ${user?.email} (${user?.name})`);
        console.log(`Plan Name: ${sub.planId?.planName} (planId: ${sub.planId?.planId})`);
        console.log(`Start: ${sub.subscriptionStart}`);
        console.log(`Renewal: ${sub.renewalDate}`);
        console.log(`Status: ${sub.subscriptionStatus}`);
        console.log(`Billing Cycle: ${sub.billingCycle}`);
        console.log(`Payment ID: ${sub.paymentId}`);
        console.log(`Payment Method: ${sub.paymentMethod}`);
        console.log(`Created At: ${sub.createdAt}`);
    }
    await mongoose.disconnect();
}

check().catch(console.error);
