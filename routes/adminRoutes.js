import express from 'express';
import { verifyToken } from '../middleware/authorization.js';
import User from '../models/User.js';
import multer from 'multer';
// Assuming there is an isAdmin middleware or we check role
import {
    getAdminStats,
    searchUserByEmail,
    manualPlanUpgrade,
    createPlan,
    updatePlan,
    deletePlan,
    getAllPlansAdmin,
    parseLegalDoc,
    sendEmailToUser
} from '../controllers/adminController.js';
import {
    getChatSessionStats,
    getChatSessions,
    getChatSessionDetail
} from '../controllers/adminChatSessionController.js';
import { getAnalytics, getErrorDrillDown } from '../controllers/analyticsController.js';


const router = express.Router();

// Middleware to check if user is admin (authoritative check against DB)
const isAdmin = async (req, res, next) => {
    try {
        if (!req.user || !req.user.id) {
            return res.status(401).json({ success: false, message: 'Unauthorized' });
        }

        const PRIMARY_ADMIN_EMAIL = 'admin@uwo24.com';

        // Fast path: if email is already in the JWT payload, check it immediately
        if (req.user.email === PRIMARY_ADMIN_EMAIL || req.user.role === 'admin') {
            return next();
        }

        // DB lookup for role/email verification
        const user = await User.findById(req.user.id);

        if (user && (user.role === 'admin' || user.email === PRIMARY_ADMIN_EMAIL)) {
            console.log(`[Admin Access] Granted for ${user.email}`);
            next();
        } else {
            const identEmail = req.user.email || (user && user.email) || req.user.id;
            console.warn(`[Blocked Access] User ${identEmail} attempted admin access without proper role.`);
            res.status(403).json({ success: false, message: 'Access denied. Admins only.' });
        }
    } catch (error) {
        console.error('[Admin Auth Error]', error.message);
        res.status(500).json({ success: false, message: 'Error verifying admin status' });
    }
};

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.get('/stats', verifyToken, isAdmin, getAdminStats);
router.get('/search-user', verifyToken, isAdmin, searchUserByEmail);
router.post('/manual-upgrade', verifyToken, isAdmin, manualPlanUpgrade);
router.post('/send-email', verifyToken, isAdmin, sendEmailToUser);

// Plan routes
router.get('/plans', verifyToken, isAdmin, getAllPlansAdmin);
router.post('/plans', verifyToken, isAdmin, createPlan);
router.put('/plans/:planId', verifyToken, isAdmin, updatePlan);
router.delete('/plans/:planId', verifyToken, isAdmin, deletePlan);

// Legal Document Parsing
router.post('/parse-legal-doc', verifyToken, isAdmin, upload.single('file'), (req, res, next) => {
    console.log(`[Multer Debug] File received: ${req.file ? req.file.originalname : 'NONE'}`);
    next();
}, parseLegalDoc);

// Chat Session Tracking
router.get('/chat-sessions/stats', verifyToken, isAdmin, getChatSessionStats);
router.get('/chat-sessions', verifyToken, isAdmin, getChatSessions);
router.get('/chat-sessions/:sessionId', verifyToken, isAdmin, getChatSessionDetail);

// Analytics
router.get('/analytics', verifyToken, isAdmin, getAnalytics);
router.get('/analytics/errors/:mode', verifyToken, isAdmin, getErrorDrillDown);

export default router;
