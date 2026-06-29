import dns from 'dns';
dns.setDefaultResultOrder('ipv4first');
dns.setServers(['8.8.8.8', '8.8.4.4']);

import mongoose from 'mongoose';
import User from '../models/User.js';
import Subscription from '../models/Subscription.js';
import Plan from '../models/Plan.js';

const uri = "mongodb+srv://admin_db_user:gwmmWiKmK4wCit1L@cluster0.u5wdauj.mongodb.net/AISA?appName=Cluster0";

async function testUpgrade(userId, planName, expiryDate) {
    try {
        console.log("Connecting to MongoDB...");
        await mongoose.connect(uri);
        console.log("Connected successfully!");

        console.log(`Upgrading User ID: ${userId} to Plan: ${planName}`);

        // Find the actual plan ID first
        const plan = await Plan.findOne({ planName: new RegExp(`^${planName}$`, 'i') });
        if (!plan) {
            console.log(`Plan '${planName}' not found.`);
            await mongoose.disconnect();
            return;
        }
        console.log("Found Plan:", plan.planName, "ID:", plan._id);

        const subscription = await Subscription.findOneAndUpdate(
            { userId: userId },
            { 
                planId: plan._id, 
                renewalDate: expiryDate ? new Date(expiryDate) : undefined,
                subscriptionStatus: 'active',
                creditsRemaining: plan.credits
            },
            { new: true, upsert: true }
        );
        console.log("Updated/Upserted Subscription:", subscription);

        await User.findByIdAndUpdate(userId, { 
            $set: { 
                credits: plan.credits,
                founderStatus: plan.planName.toLowerCase().includes('founder')
            } 
        });
        console.log("Updated User record successfully.");

        // Query the final state of subscription for this user
        const finalSub = await Subscription.findOne({ userId }).populate('planId');
        console.log("Final populated subscription:", finalSub);

        await mongoose.disconnect();
    } catch (err) {
        console.error("Test Error:", err);
    }
}

// Sandeep Yadav User ID: 6a42185978dc5147eea3ae53
testUpgrade("6a42185978dc5147eea3ae53", "Enterprise", null);
