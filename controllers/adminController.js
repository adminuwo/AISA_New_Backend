import User from '../models/User.js';
import Subscription from '../models/Subscription.js';
import Plan from '../models/Plan.js';
import SupportTicket from '../models/SupportTicket.js';
import { sendAdminToUserEmail } from '../services/emailService.js';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const pdf = require('pdf-parse');
const mammoth = require('mammoth');

export const getAdminStats = async (req, res) => {
    try {
        const totalUsers = await User.countDocuments();
        const pendingTickets = await SupportTicket.countDocuments({ status: { $in: ['pending', 'open', 'in_progress'] } });
        const activeSubscriptionsCount = await Subscription.countDocuments({ 
          subscriptionStatus: 'active' 
        });

        // Revenue calculation: Sum of plan prices for all successful/active paid subscriptions
        // Note: Joining with Plan model to get the current price at the time of calculation
        const revenueAggregation = await Subscription.aggregate([
          { $match: { subscriptionStatus: 'active', paymentId: { $exists: true, $ne: "" } } },
          {
            $lookup: {
              from: 'plans',
              localField: 'planId',
              foreignField: '_id',
              as: 'planDetails'
            }
          },
          { $unwind: '$planDetails' },
          {
            $group: {
              _id: null,
              total: {
                $sum: {
                  $cond: [
                    { $eq: ['$billingCycle', 'yearly'] },
                    '$planDetails.priceYearly',
                    '$planDetails.priceMonthly'
                  ]
                }
              }
            }
          }
        ]);
        const totalRevenue = revenueAggregation.length > 0 ? revenueAggregation[0].total : 0;

        // Tool usage analytics from UserQuota
        const UserQuota = (await import('../models/UserQuota.js')).default;
        const quotaAggregation = await UserQuota.aggregate([
            {
                $group: {
                    _id: null,
                    images: { $sum: "$imagesUsed" },
                    carousels: { $sum: "$carouselsUsed" },
                    videos: { $sum: "$videosUsed" },
                    chat: { $sum: "$chatUsed" }
                }
            }
        ]);
        const counts = quotaAggregation[0] || { images: 0, carousels: 0, videos: 0, chat: 0 };
        const toolUsage = [
            { _id: 'AI Chat', count: counts.chat },
            { _id: 'Image Generation', count: counts.images },
            { _id: 'Carousel Generation', count: counts.carousels },
            { _id: 'Video Generation', count: counts.videos }
        ].filter(t => t.count > 0).sort((a, b) => b.count - a.count);

        res.status(200).json({
            success: true,
            stats: {
                totalUsers,
                activeSubscriptions: activeSubscriptionsCount,
                totalRevenue,
                totalCreditsUsed: 0,
                toolUsage,
                pendingTickets
            }
        });
    } catch (error) {
        console.error("[getAdminStats Error]", error);
        res.status(500).json({ success: false, message: error.message });
    }
};

export const searchUserByEmail = async (req, res) => {
    try {
        const { email } = req.query;
        const user = await User.findOne({ email }).select('name email credits role isBlocked');
        if (!user) return res.status(404).json({ success: false, message: 'User not found' });

        const subscription = await Subscription.findOne({ userId: user._id }).populate('planId');
        
        res.status(200).json({
            success: true,
            user,
            subscription
        });
    } catch (error) {
        console.error("[searchUserByEmail Error]", error);
        res.status(500).json({ success: false, message: error.message });
    }
};

export const manualPlanUpgrade = async (req, res) => {
    try {
        const { userId, planName, expiryDate } = req.body;
        console.log("[manualPlanUpgrade] req.body:", req.body);
        
        // Find the actual plan ID first
        const plan = await Plan.findOne({ planName: new RegExp(`^${planName}$`, 'i') });
        if (!plan) return res.status(404).json({ success: false, message: `Plan '${planName}' not found.` });

        let calculatedRenewal = expiryDate ? new Date(expiryDate) : null;
        if (!calculatedRenewal) {
            calculatedRenewal = new Date();
            const months = plan.validityMonthly || 1;
            calculatedRenewal.setMonth(calculatedRenewal.getMonth() + months);
        }

        const subscription = await Subscription.findOneAndUpdate(
            { userId: userId },
            { 
                planId: plan._id, 
                renewalDate: calculatedRenewal,
                subscriptionStatus: 'active',
                creditsRemaining: plan.credits || 0
            },
            { new: true, upsert: true }
        );

        // Also update User record for consistency with credit system
        await User.findByIdAndUpdate(userId, { 
            $set: { 
                credits: plan.credits || 0,
                founderStatus: plan.planName.toLowerCase().includes('founder')
            } 
        });

        res.status(200).json({
            success: true,
            message: `Plan upgraded to ${plan.planName} successfully.`,
            subscription
        });
    } catch (error) {
        console.error("[manualPlanUpgrade Error]", error);
        res.status(500).json({ success: false, message: error.message });
    }
};

export const createPlan = async (req, res) => {
    try {
        const plan = await Plan.create(req.body);
        res.status(201).json({ success: true, plan });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

export const updatePlan = async (req, res) => {
    try {
        const { planId } = req.params;
        const plan = await Plan.findByIdAndUpdate(planId, req.body, { new: true });
        if (!plan) return res.status(404).json({ success: false, message: "Plan not found" });
        res.status(200).json({ success: true, plan });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

export const deletePlan = async (req, res) => {
    try {
        const { planId } = req.params;
        await Plan.findByIdAndDelete(planId);
        res.status(200).json({ success: true, message: "Plan deleted successfully" });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};


// Returns ALL plans (regardless of isActive) for admin use
export const getAllPlansAdmin = async (req, res) => {
    try {
        const plans = await Plan.find({}).sort({ priceMonthly: 1 });
        res.status(200).json({ success: true, plans });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

export const parseLegalDoc = async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ success: false, message: 'No file uploaded' });
        }

        console.log(`[Admin] Parsing legal doc: ${req.file.originalname} (${req.file.mimetype}, ${req.file.size} bytes)`);

        let text = '';
        const mimetype = req.file.mimetype;

        try {
            if (mimetype === 'application/pdf') {
                console.log("[Admin] Detected PDF, using pdf-parse...");
                const data = await pdf(req.file.buffer);
                text = data.text;
            } else if (mimetype === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document') {
                console.log("[Admin] Detected DOCX, using mammoth...");
                const data = await mammoth.extractRawText({ buffer: req.file.buffer });
                text = data.value;
            } else {
                console.log("[Admin] Detected Text/MD, converting buffer...");
                text = req.file.buffer.toString('utf-8');
            }
        } catch (parseErr) {
            console.error("[Admin] Extraction library error:", parseErr);
            return res.status(500).json({ 
                success: false, 
                message: `Error extracting text: ${parseErr.message}. Try a plain text (.txt) version if this continues.` 
            });
        }

        if (!text || text.trim().length < 10) {
            console.error("[Admin] Extracted text is empty or too short.");
            return res.status(400).json({ success: false, message: 'Could not extract enough text from file. Please ensure it is not an image-based PDF.' });
        }

        // --- Heuristic Sectioning Logic ---
        const lines = text.split(/\r?\n/).map(l => l.trim()).filter(l => l.length > 0);
        const sections = [];
        let currentSection = null;

        lines.forEach((line) => {
            const isMetaInfo = /^(Effective Date|Last Updated|Revision|Version)\s*:?/i.test(line);
            const isHeader = !isMetaInfo && (
                /^#+\s+/.test(line) ||
                /^(ARTICLE|SECTION|CHAPTER|UNIT)\s+([IVXLCDM\d]+)/i.test(line) ||
                (/^\d+[\.\)]\s+[A-Z][^a-z]/.test(line) && line.length < 60) || // Stricter number-header detection
                (line.length > 3 && line.length < 50 && line === line.toUpperCase() && !line.includes(':') && !line.endsWith('.'))
            );

            if (isHeader) {
                if (currentSection) sections.push(currentSection);
                currentSection = {
                    title: line.replace(/^#+\s*/, '').trim(),
                    content: []
                };
            } else if (currentSection) {
                const isBulletOrList = /^[•\-\*\u2022\u2023\u2043\u2044]/.test(line) || /^\d+[\.\)]\s/.test(line);
                const isMetaInfoLine = /^(Effective Date|Last Updated|Revision|Version)\s*:?/i.test(line);
                const isSubtitle = !isBulletOrList && !isMetaInfoLine && ((line.length < 100 && (line.endsWith(':') || !line.endsWith('.'))) || /^###\s+/.test(line));

                if (isSubtitle && !line.includes('http')) {
                    currentSection.content.push({ 
                        subtitle: line.replace(/^#+\s*/, '').replace(/:$/, '').trim(), 
                        text: '' 
                    });
                } else {
                    if (currentSection.content.length === 0) {
                        currentSection.content.push({ subtitle: 'General Terms', text: line });
                    } else {
                        const lastUnit = currentSection.content[currentSection.content.length - 1];
                        if (lastUnit.text) {
                            lastUnit.text += '\n\n' + line;
                        } else {
                            lastUnit.text = line;
                        }
                    }
                }
            } else {
                currentSection = {
                    title: 'Policy Overview',
                    content: [{ subtitle: 'Introduction', text: line }]
                };
            }
        });

        if (currentSection) sections.push(currentSection);

        const parsedSections = sections.map(s => ({
            ...s,
            content: s.content.map(c => ({
                ...c,
                text: (c.text || '').trim()
            })).filter(c => c.text.length > 0) // Only keep units that actually have text
        })).filter(s => s.content.length > 0); // Only keep sections that have content

        res.status(200).json({ success: true, sections: parsedSections });
    } catch (error) {
        console.error("[parseLegalDoc Error]", error);
        res.status(500).json({ success: false, message: error.message });
    }
};

export const sendEmailToUser = async (req, res) => {
    try {
        const { toEmail, subject, message } = req.body;
        if (!toEmail || !message) {
            return res.status(400).json({ success: false, message: 'Recipient email and message are required.' });
        }

        // Try to find the user's name for personalization
        const user = await User.findOne({ email: new RegExp(`^${toEmail.trim()}$`, 'i') });
        const userName = user ? user.name : '';

        const mailRes = await sendAdminToUserEmail(toEmail.trim(), userName, subject, message);

        if (mailRes.success) {
            return res.status(200).json({ success: true, message: 'Email sent successfully.' });
        } else {
            return res.status(500).json({ success: false, message: mailRes.message || 'Failed to send email.' });
        }
    } catch (error) {
        console.error('[sendEmailToUser Error]', error);
        res.status(500).json({ success: false, message: error.message });
    }
};

