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
    const User = (await import('../models/User.js')).default;
    const Subscription = (await import('../models/Subscription.js')).default;
    const UserQuota = (await import('../models/UserQuota.js')).default;
    
    // search for users with name or email containing 'gurumukh'
    const users = await User.find({
        $or: [
            { name: /gurumukh/i },
            { email: /gurumukh/i }
        ]
    }).lean();
    
    console.log("Found Users:", users.length);
    for (const user of users) {
        console.log("\n=================================");
        console.log("User Document:", JSON.stringify(user, null, 2));
        
        const userId = user._id;
        const subscriptions = await Subscription.find({ userId }).populate('planId').lean();
        console.log("Subscriptions found:", subscriptions.length);
        console.log(JSON.stringify(subscriptions, null, 2));
        
        const quota = await UserQuota.findOne({ userId }).lean();
        console.log("User Quota Document:", JSON.stringify(quota, null, 2));
        
        const { getUserPlan } = await import('../services/subscriptionService.js');
        const plan = await getUserPlan(userId);
        console.log("getUserPlan(userId) Output:", JSON.stringify(plan, null, 2));
    }
    
    await mongoose.disconnect();
}

check().catch(console.error);
