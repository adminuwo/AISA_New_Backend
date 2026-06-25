import User from '../models/User.js';
import { verifyToken } from './authorization.js';
import { checkQuota, getUserPlan, isFreeTierUser } from '../services/subscriptionService.js';

// ── MAP URL → QUOTA ACTION ───────────────────────────────────────────────────
const getQuotaAction = (url, body = {}) => {
    const u = url.split('?')[0];

    if (u.includes('/api/video'))           return 'generate_video';
    if (u.includes('/api/edit-image'))      return 'edit_image';
    if (u.includes('/api/image'))           return 'generate_image';

    if (u.includes('/api/social-agent/generate/visual-post')) {
        return body?.postFormat === 'carousel' ? 'generate_carousel' : 'generate_image';
    }

    // CashFlow stock tabs
    if (u.includes('/api/stock/'))          return 'cashflow';

    if (u.includes('/api/legal') || u.includes('/api/legal-toolkit') || u.includes('/api/precedents')) {
        return 'ai_legal';
    }

    if (u.includes('/api/ai-ad') || u.includes('/api/social-agent') || u.includes('/api/social-agent-review') || u.includes('/api/brand')) {
        return 'ai_ads';
    }

    if (u.includes('/api/voice')) {
        return 'voice_gen';
    }

    if (u.includes('/api/chat') || u.includes('/api/aibase/chat') || u.includes('/api/chat/realtime')) {
        let mode = body?.mode;
        if (mode === 'webSearch') mode = 'web_search';
        if (mode === 'deepSearch') mode = 'DEEP_SEARCH';
        if (mode === 'codeWriter') mode = 'CODE_WRITER';
        if (mode === 'aiLegal') mode = 'LEGAL_TOOLKIT';

        if (mode === 'DEEP_SEARCH' || mode === 'web_search') {
            return mode;
        }
        if (mode === 'CODE_WRITER' || mode === 'CODING_HELP') {
            return 'code_writer';
        }
        return 'chat';
    }

    // All other routes (social agent generation, legal, knowledge, etc.) are unrestricted
    return 'general';
};

// ── HUMAN-READABLE ACTION LABEL (for logging) ────────────────────────────────
const getActionLabel = (url, body) => {
    if (url.includes('/api/chat/realtime')) return { action: 'realtime_chat', description: 'AISA Realtime Chat' };
    if (url.includes('/api/aibase/knowledge')) return { action: 'knowledge_base', description: 'AISA Knowledge Base' };
    if (url.includes('/api/aibase/chat')) return { action: 'agent_chat', description: 'AISA Agent Chat' };
    if (url.includes('/api/edit-image')) return { action: 'edit_image', description: 'AISA Edit Image' };
    if (url.includes('/api/image')) return { action: 'generate_image', description: 'AISA Image Generation' };
    if (url.includes('/api/video')) return { action: 'generate_video', description: 'AISA Video Generation' };
    if (url.includes('/api/chat')) return { action: 'chat', description: 'AISA Chat' };
    if (url.includes('/api/stock/')) return { action: 'cashflow', description: 'AISA CashFlow Explorer' };
    if (url.includes('/api/social-agent/generate/visual-post')) {
        return body?.postFormat === 'carousel'
            ? { action: 'generate_carousel', description: 'AI Ads Agent (Carousel)' }
            : { action: 'generate_image', description: 'AI Ads Agent (Visual Post)' };
    }
    if (url.includes('/api/legal') || url.includes('/api/legal-toolkit') || url.includes('/api/precedents')) {
        return { action: 'ai_legal', description: 'AI Legal™ Advisor' };
    }
    if (url.includes('/api/ai-ad') || url.includes('/api/social-agent') || url.includes('/api/social-agent-review') || url.includes('/api/brand')) {
        return { action: 'ai_ads', description: 'AI Ads™ Agent' };
    }
    if (url.includes('/api/voice')) {
        return { action: 'voice_gen', description: 'Voice Generation' };
    }
    return { action: 'other', description: 'AISA Feature' };
};

// ── isFreeTierUser re-exported for backward compat (used elsewhere) ──────────
export { isFreeTierUser };

/**
 * Quota Middleware — replaces the old credit deduction system.
 *
 * Checks whether the user's current plan allows the requested action.
 * Does NOT deduct anything — that happens via incrementQuota() in controllers
 * after a successful response.
 *
 * req.quotaAction is attached for controllers that need to know what to increment.
 * req.creditMeta is set to null (legacy stub so controllers don't crash).
 */
export const creditMiddleware = async (req, res, next) => {
    if (!req.user) {
        return res.status(401).json({ error: 'Unauthorized access' });
    }

    const url = req.originalUrl || req.url;
    const userId = req.user.id || req.user._id;

    // ── ADMIN BYPASS ─────────────────────────────────────────────────────────
    const isAdmin =
        req.user.role === 'admin' ||
        (req.user.email && req.user.email.toLowerCase() === 'admin@uwo24.com');

    if (isAdmin) {
        req.creditMeta = null;
        req.quotaAction = getQuotaAction(url, req.body);
        return next();
    }

    // ── SKIP QUOTA CHECK FOR GET REQUESTS AND NON-GENERATION ROUTES ──────────
    const action = getQuotaAction(url, req.body);

    if (req.method === 'GET' && action !== 'cashflow') {
        req.creditMeta = null;
        req.quotaAction = action;
        return next();
    }

    // 'general' action = no quota restriction (legal, social content gen, etc.)
    if (action === 'general') {
        req.creditMeta = null;
        req.quotaAction = action;
        return next();
    }

    // ── QUOTA CHECK ───────────────────────────────────────────────────────────
    try {
        const result = await checkQuota(userId, action);

        if (!result.allowed) {
            const { description } = getActionLabel(url, req.body);
            console.warn(`[QuotaSystem] ${action} blocked for user ${userId}: ${result.reason}`);
            return res.status(403).json({
                success: false,
                code: result.code,           // 'QUOTA_EXCEEDED' | 'PLAN_RESTRICTED' | 'PLAN_EXPIRED'
                error: result.reason,
                message: result.reason,
                planKey: result.planKey,
                used: result.used,
                limit: result.limit,
                toolName: description,
            });
        }

        // Attach quota action so the controller can call incrementQuota after success
        req.quotaAction = action;
        req.creditMeta = null; // Legacy stub — prevents crashes in controllers that check this

        next();
    } catch (error) {
        console.error('[QuotaSystem] Middleware error:', error);
        res.status(500).json({ error: 'Internal server error during quota check' });
    }
};
