import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load .env from backend root
dotenv.config({ path: path.join(__dirname, '../.env') });

console.log("----------------------------------------");
console.log("GOOGLE_PAY_MERCHANT_ID:", process.env.GOOGLE_PAY_MERCHANT_ID);
console.log("GOOGLE_PAY_ENV:", process.env.GOOGLE_PAY_ENV);
console.log("RAZORPAY_KEY_ID:", process.env.RAZORPAY_KEY_ID);
console.log("RAZORPAY_MODE:", process.env.RAZORPAY_MODE);
console.log("----------------------------------------");
