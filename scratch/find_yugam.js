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
    
    const email = 'yugamcteam@gmail.com';
    const u = await User.findOne({ email: email.toLowerCase() }).lean();
    
    if (!u) {
        console.log(`❌ User with email ${email} not found in database!`);
    } else {
        console.log(`👤 Found User:`);
        console.log(JSON.stringify(u, null, 2));
        
        const sub = await Subscription.findOne({ userId: u._id, subscriptionStatus: 'active' }).populate('planId').lean();
        if (sub) {
            console.log(`   └─ Active Sub: ${sub.planId?.planName} (${sub.planId?.planId}) | Status: ${sub.subscriptionStatus}`);
            
            const { getUserPlan } = await import('../services/subscriptionService.js');
            const plan = await getUserPlan(u._id);
            console.log(`   └─ getUserPlan resolved planKey: ${plan.planKey}`);
        } else {
            console.log(`   └─ No active subscription`);
        }
    }
    
    await mongoose.disconnect();
}

check().catch(console.error);
