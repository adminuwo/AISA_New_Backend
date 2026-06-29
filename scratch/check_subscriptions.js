import dns from 'dns';
dns.setDefaultResultOrder('ipv4first');
dns.setServers(['8.8.8.8', '8.8.4.4']);

import mongoose from 'mongoose';

const uri = "mongodb+srv://admin_db_user:gwmmWiKmK4wCit1L@cluster0.u5wdauj.mongodb.net/AISA?appName=Cluster0";

const userSchema = new mongoose.Schema({}, { strict: false, collection: 'users' });
const User = mongoose.model('User', userSchema);

async function run() {
    try {
        console.log("Connecting to MongoDB...");
        await mongoose.connect(uri);
        console.log("Connected successfully!");

        console.log("\n--- DETAILED USER INFO ---");
        const u1 = await User.findOne({ email: 'sandeep@uwo24.com' });
        const u2 = await User.findOne({ email: 'rngy4d8d5g@privaterelay.appleid.com' });

        if (u1) {
            console.log("Sandeep Yadav:");
            console.log(JSON.stringify(u1.toObject(), null, 2));
        } else {
            console.log("Sandeep Yadav not found!");
        }

        console.log("\n---------------------------------");

        if (u2) {
            console.log("John Apple:");
            console.log(JSON.stringify(u2.toObject(), null, 2));
        } else {
            console.log("John Apple not found!");
        }

        await mongoose.disconnect();
    } catch (err) {
        console.error("DB Error:", err);
    }
}

run();
