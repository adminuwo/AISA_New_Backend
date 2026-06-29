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

async function fix() {
    await mongoose.connect(MONGO_URI);
    
    // Import all models first to register them in Mongoose
    const Plan = (await import('../models/Plan.js')).default;
    const User = (await import('../models/User.js')).default;
    const Subscription = (await import('../models/Subscription.js')).default;
    
    // Find all active subscriptions with renewalDate on June 29, 2026
    const targetDateStart = new Date("2026-06-29T00:00:00.000Z");
    const targetDateEnd = new Date("2026-06-29T23:59:59.999Z");
    
    const subsToFix = await Subscription.find({
        subscriptionStatus: 'active',
        renewalDate: { $gte: targetDateStart, $lte: targetDateEnd }
    }).populate('planId');
    
    console.log(`Found ${subsToFix.length} subscriptions to fix (renewing today, June 29, 2026):`);
    
    for (const sub of subsToFix) {
        const user = await User.findById(sub.userId).select('email name').lean();
        console.log(`-----------------------------------------`);
        console.log(`Sub ID: ${sub._id}`);
        console.log(`User: ${user?.email} (${user?.name})`);
        console.log(`Current Renewal: ${sub.renewalDate}`);
        
        // Calculate new renewal date: subscriptionStart + 30 days or today + 30 days
        const newRenewalDate = new Date(sub.subscriptionStart || new Date());
        newRenewalDate.setDate(newRenewalDate.getDate() + 30);
        
        sub.renewalDate = newRenewalDate;
        // Make sure creditsRemaining is set to 0 if undefined/null to satisfy validation
        if (sub.creditsRemaining === undefined || sub.creditsRemaining === null) {
            sub.creditsRemaining = 0;
        }
        
        await sub.save();
        console.log(`Updated Renewal to: ${sub.renewalDate}`);
    }
    
    await mongoose.disconnect();
    console.log("\n🎉 Fix complete!");
}

fix().catch(console.error);
