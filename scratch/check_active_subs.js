import mongoose from 'mongoose';
import dns from 'dns';
try {
    dns.setServers(['8.8.8.8', '1.1.1.1']);
} catch (e) {}

const uri = "mongodb+srv://admin_db_user:gwmmWiKmK4wCit1L@cluster0.u5wdauj.mongodb.net/AISA?appName=Cluster0";

async function run() {
    await mongoose.connect(uri);
    const Subscription = (await import('../models/Subscription.js')).default;
    const User = (await import('../models/User.js')).default;
    const Plan = (await import('../models/Plan.js')).default;

    const subs = await Subscription.find({ subscriptionStatus: 'active' }).populate('planId').lean();
    console.log(`Found ${subs.length} active subscriptions:\n`);

    for (const sub of subs) {
        const user = await User.findById(sub.userId).select('name email').lean();
        console.log(`User: ${user?.name} (${user?.email})`);
        console.log(`Plan: ${sub.planId?.planName} (ID: ${sub.planId?.planId})`);
        console.log(`Valid until: ${sub.renewalDate}`);
        console.log(`Subscription Document ID: ${sub._id}`);
        console.log('------------------------------------');
    }
    
    await mongoose.disconnect();
}

run().catch(console.error);
