import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import axios from 'axios';
import dns from 'dns';

try {
    dns.setServers(['8.8.8.8', '1.1.1.1']);
} catch (e) {}

const __dirname = dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: join(__dirname, '..', '.env') });

const MONGO_URI = process.env.MONGODB_ATLAS_URI || process.env.MONGO_URI;

async function check() {
    await mongoose.connect(MONGO_URI);
    const Session = (await import('../models/Session.js')).default;
    const User = (await import('../models/User.js')).default;
    
    const user = await User.findOne({ email: "sanskarsahu1511@gmail.com" }).lean();
    if (!user) {
        console.error("User not found!");
        await mongoose.disconnect();
        return;
    }
    
    const sess = await Session.findOne({ userId: user._id }).sort({ updatedAt: -1 }).lean();
    if (!sess) {
        console.error("Session not found for user!");
        await mongoose.disconnect();
        return;
    }
    
    const token = sess.token;
    console.log(`Found Session token for ${user.email}:`, token.substring(0, 30) + "...");
    await mongoose.disconnect();

    console.log("\nCalling production /api/subscription ...");
    try {
        const subRes = await axios.get('https://aisa24.com/api/subscription', {
            headers: { 'Authorization': `Bearer ${token}` }
        });
        console.log("Response:", JSON.stringify(subRes.data, null, 2));
    } catch (err) {
        console.error("Error:", err.response ? { status: err.response.status, data: err.response.data } : err.message);
    }

    console.log("\nCalling production /api/subscription/quota-status ...");
    try {
        const quotaRes = await axios.get('https://aisa24.com/api/subscription/quota-status', {
            headers: { 'Authorization': `Bearer ${token}` }
        });
        console.log("Response:", JSON.stringify(quotaRes.data, null, 2));
    } catch (err) {
        console.error("Error:", err.response ? { status: err.response.status, data: err.response.data } : err.message);
    }
}

check().catch(console.error);
