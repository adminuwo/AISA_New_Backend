import mongoose from 'mongoose';

const mongoUri = 'mongodb+srv://admin_db_user:gwmmWiKmK4wCit1L@cluster0.u5wdauj.mongodb.net/AISA?appName=Cluster0';

async function reset() {
  try {
    await mongoose.connect(mongoUri);
    console.log('Connected to MongoDB');
    
    const UserSchema = new mongoose.Schema({}, { strict: false });
    const User = mongoose.model('User', UserSchema, 'users');

    const SubscriptionSchema = new mongoose.Schema({}, { strict: false });
    const Subscription = mongoose.model('Subscription', SubscriptionSchema, 'subscriptions');

    const UserQuotaSchema = new mongoose.Schema({}, { strict: false });
    const UserQuota = mongoose.model('UserQuota', UserQuotaSchema, 'userquotas');

    // 1. Find user yugamcteam@gmail.com
    const user = await User.findOne({ email: 'yugamcteam@gmail.com' });
    if (!user) {
      console.log('User yugamcteam@gmail.com not found.');
      await mongoose.disconnect();
      return;
    }

    console.log(`Found user: ${user.email} (${user._id})`);

    // 2. Delete all subscriptions for this user
    const deleteResult = await Subscription.deleteMany({ userId: user._id });
    console.log(`Deleted ${deleteResult.deletedCount} subscriptions.`);

    // 3. Reset user quota
    const quotaResult = await UserQuota.deleteMany({ userId: user._id });
    console.log(`Reset user quotas.`);

    // 4. Reset founderStatus in user object just in case
    user.founderStatus = false;
    await user.save();
    console.log(`Reset user founderStatus to false.`);

    console.log('User subscription reset to Free Tier successfully!');

    await mongoose.disconnect();
  } catch (err) {
    console.error('Error resetting subscription:', err);
  }
}

reset();
