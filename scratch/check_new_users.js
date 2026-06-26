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
    const Plan = (await import('../models/Plan.js')).default;
    
    console.log("Checking last 10 registered users:\n");
    const users = await User.find({}).sort({ createdAt: -1 }).limit(10).lean();
    
    for (const u of users) {
        const sub = await Subscription.findOne({ userId: u._id, subscriptionStatus: 'active' }).populate('planId').lean();
        console.log(`👤 Email: ${u.email} | ID: ${u._id} | Created: ${u.createdAt}`);
        if (sub) {
            console.log(`   └─ Active Sub: ${sub.planId?.planName} (${sub.planId?.planId}) | Status: ${sub.subscriptionStatus}`);
        } else {
            console.log(`   └─ No active subscription`);
        }
    }
    
    await mongoose.disconnect();
}

check().catch(console.error);
