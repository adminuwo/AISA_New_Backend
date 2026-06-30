import ChatSession from '../models/ChatSession.js';
import User from '../models/User.js';
import mongoose from 'mongoose';

// ─── Helper: Date range helper ────────────────────────────────────────────────
const getDateRange = (range = '7d') => {
    const now = new Date();
    const from = new Date();
    switch (range) {
        case '24h': from.setHours(now.getHours() - 24); break;
        case '7d': from.setDate(now.getDate() - 7); break;
        case '30d': from.setDate(now.getDate() - 30); break;
        case '90d': from.setDate(now.getDate() - 90); break;
        default: from.setDate(now.getDate() - 7);
    }
    return { from, to: now };
};

// ─── Error pattern classification ────────────────────────────────────────────
const ERROR_PATTERNS = [
    { label: 'Timeout / Slow Response',    regex: /timeout|timed out|time.?out/i,                              color: '#FFB347', icon: 'clock' },
    { label: 'AI Generation Failed',       regex: /❌|generation failed|could not generate|failed to generate/i, color: '#FF6584', icon: 'x-circle' },
    { label: 'File / Document Error',      regex: /could not (read|parse|process|extract)|file (not found|error|failed)|document error/i, color: '#E57373', icon: 'file-x' },
    { label: 'AI Refusal / Safety',        regex: /sorry.{0,40}(cannot|unable|can't)|I (can't|cannot|am unable) (help|assist|do|process)|not able to assist|content policy/i, color: '#4FC3F7', icon: 'shield' },
    { label: 'Network / API Error',        regex: /network error|api error|connection (failed|error|refused)|503|502|500 internal/i, color: '#BA68C8', icon: 'wifi-off' },
    { label: 'Permission / Auth Error',    regex: /unauthorized|forbidden|not (allowed|permitted|authorized)|access denied/i, color: '#FF8A65', icon: 'lock' },
    { label: 'Token / Quota Exceeded',     regex: /quota|limit (exceeded|reached)|out of (credits|tokens|quota)|plan limit/i, color: '#FFD54F', icon: 'zap-off' },
    { label: 'System / Internal Error',    regex: /internal (server )?error|unexpected error|something went wrong|an error occurred/i, color: '#EF5350', icon: 'alert-triangle' },
];

const classifyError = (content) => {
    for (const p of ERROR_PATTERNS) {
        if (p.regex.test(content)) return p;
    }
    return { label: 'General Error', color: '#9E9E9E', icon: 'alert-circle' };
};

const ERROR_KEYWORDS = ['❌', 'Failed', 'failed', 'Error', 'error', 'timeout', 'Timeout', 'Sorry, I', 'unable to'];
const errorMatchStage = {
    'messages.role': { $in: ['model', 'assistant'] },
    $or: ERROR_KEYWORDS.map(kw => ({ 'messages.content': { $regex: kw, $options: 'i' } }))
};

// ─── GET /api/admin/analytics ─────────────────────────────────────────────────
export const getAnalytics = async (req, res) => {
    try {
        const { range = '7d' } = req.query;
        const { from, to } = getDateRange(range);

        // 1. Mode usage
        const modeUsage = await ChatSession.aggregate([
            { $match: { createdAt: { $gte: from, $lte: to } } },
            { $group: { _id: { $ifNull: ['$detectedMode', 'NORMAL_CHAT'] }, count: { $sum: 1 }, totalMessages: { $sum: { $size: { $ifNull: ['$messages', []] } } } } },
            { $sort: { count: -1 } }
        ]);

        // 2. Error sessions
        const errorSessions = await ChatSession.aggregate([
            { $match: { createdAt: { $gte: from, $lte: to } } },
            { $unwind: { path: '$messages', preserveNullAndEmptyArrays: false } },
            { $match: errorMatchStage },
            { $group: { _id: '$_id', sessionId: { $first: '$sessionId' }, detectedMode: { $first: '$detectedMode' }, errorMessages: { $push: '$messages.content' }, errorCount: { $sum: 1 }, createdAt: { $first: '$createdAt' } } },
            { $sort: { errorCount: -1 } },
            { $limit: 50 }
        ]);

        // 3. Error by mode
        const errorByMode = await ChatSession.aggregate([
            { $match: { createdAt: { $gte: from, $lte: to } } },
            { $unwind: { path: '$messages', preserveNullAndEmptyArrays: false } },
            { $match: errorMatchStage },
            { $group: { _id: { $ifNull: ['$detectedMode', 'NORMAL_CHAT'] }, errorCount: { $sum: 1 }, uniqueSessions: { $addToSet: '$sessionId' } } },
            { $project: { _id: 1, errorCount: 1, uniqueSessionCount: { $size: '$uniqueSessions' } } },
            { $sort: { errorCount: -1 } }
        ]);

        // 4. Daily trend
        const dailyTrend = await ChatSession.aggregate([
            { $match: { createdAt: { $gte: from, $lte: to } } },
            { $group: { _id: { $dateToString: { format: '%Y-%m-%d', date: '$createdAt' } }, sessions: { $sum: 1 }, messages: { $sum: { $size: { $ifNull: ['$messages', []] } } } } },
            { $sort: { _id: 1 } }
        ]);

        // 5. Summary
        const totalSessions = await ChatSession.countDocuments({ createdAt: { $gte: from, $lte: to } });
        const totalErrors = errorSessions.length;
        const errorRate = totalSessions > 0 ? ((totalErrors / totalSessions) * 100).toFixed(1) : 0;
        const newUsers = await User.countDocuments({ createdAt: { $gte: from, $lte: to } });

        // 6. Error categories
        const errorMessageMap = {};
        for (const session of errorSessions) {
            for (const msg of session.errorMessages) {
                const snippet = (msg || '').substring(0, 120).trim();
                if (!snippet) continue;
                let category = 'General Error';
                if (/timeout/i.test(snippet)) category = 'Timeout';
                else if (/❌|failed/i.test(snippet)) category = 'Task Failed';
                else if (/sorry|unable/i.test(snippet)) category = 'AI Refusal';
                else if (/error/i.test(snippet)) category = 'System Error';
                errorMessageMap[category] = (errorMessageMap[category] || 0) + 1;
            }
        }
        const topErrors = Object.entries(errorMessageMap)
            .map(([category, count]) => ({ category, count }))
            .sort((a, b) => b.count - a.count);

        res.status(200).json({
            success: true, range,
            analytics: {
                summary: { totalSessions, totalErrors, errorRate: parseFloat(errorRate), newUsers, topMode: modeUsage[0]?._id || 'N/A' },
                modeUsage, errorByMode, dailyTrend, topErrors,
                recentErrorSessions: errorSessions.slice(0, 10).map(s => ({
                    sessionId: s.sessionId, mode: s.detectedMode || 'NORMAL_CHAT',
                    errorCount: s.errorCount, createdAt: s.createdAt
                }))
            }
        });
    } catch (error) {
        console.error('[getAnalytics Error]', error);
        res.status(500).json({ success: false, message: error.message });
    }
};

// ─── GET /api/admin/analytics/errors/:mode ────────────────────────────────────
// Drill-down: Detailed error breakdown for a specific card / mode
export const getErrorDrillDown = async (req, res) => {
    try {
        const { mode } = req.params;
        const { range = '7d' } = req.query;
        const { from, to } = getDateRange(range);

        // Mode alias map
        const modeAliasMap = {
            'LEGAL_TOOLKIT': ['LEGAL_TOOLKIT', 'legal', 'LEGAL'],
            'NORMAL_CHAT':   ['NORMAL_CHAT', 'chat', 'CHAT'],
            'IMAGE_GENERATION': ['IMAGE_GENERATION', 'imageGen', 'image'],
            'VIDEO_GENERATION': ['VIDEO_GENERATION', 'videoGen', 'video'],
            'IMAGE_EDIT':    ['IMAGE_EDIT', 'editImage', 'edit_image'],
            'AUDIO_CONVERT': ['AUDIO_CONVERT', 'audioGen', 'audio'],
            'DOCUMENT_CONVERT': ['DOCUMENT_CONVERT', 'document'],
            'CODE_WRITER':   ['CODE_WRITER', 'CODING_HELP', 'code'],
            'CASHFLOW':      ['CASHFLOW', 'ai_cashflow'],
            'RAG':           ['RAG', 'rag'],
        };
        const modeVariants = modeAliasMap[mode] || [mode];
        const modeMatch = { $in: modeVariants };

        // Fetch raw error documents for this mode
        const rawErrorDocs = await ChatSession.aggregate([
            { $match: { createdAt: { $gte: from, $lte: to }, detectedMode: modeMatch } },
            { $unwind: { path: '$messages', preserveNullAndEmptyArrays: false } },
            { $match: errorMatchStage },
            {
                $group: {
                    _id: '$_id',
                    sessionId:    { $first: '$sessionId' },
                    createdAt:    { $first: '$createdAt' },
                    detectedMode: { $first: '$detectedMode' },
                    activeTool:   { $first: '$activeTool' },
                    userId:       { $first: '$userId' },
                    errorMsgs:    { $push: '$messages.content' },
                    errorCount:   { $sum: 1 }
                }
            },
            { $sort: { errorCount: -1 } },
            { $limit: 200 }
        ]);

        // Classify errors into patterns
        const patternCounts   = {};
        const patternSamples  = {};
        const patternSessions = {};

        for (const doc of rawErrorDocs) {
            for (const msg of doc.errorMsgs) {
                const pattern = classifyError(msg);
                const label   = pattern.label;
                patternCounts[label] = (patternCounts[label] || 0) + 1;

                if (!patternSamples[label]) patternSamples[label] = [];
                if (patternSamples[label].length < 5) {
                    const clean = msg.replace(/\n+/g, ' ').replace(/\s+/g, ' ').trim().substring(0, 250);
                    if (clean && !patternSamples[label].find(s => s.startsWith(clean.substring(0, 40)))) {
                        patternSamples[label].push(clean);
                    }
                }
                if (!patternSessions[label]) patternSessions[label] = new Set();
                patternSessions[label].add(doc.sessionId);
            }
        }

        // Build pattern breakdown (all classified patterns + general)
        const allPatterns = [...ERROR_PATTERNS, { label: 'General Error', color: '#9E9E9E', icon: 'alert-circle' }];
        const patterns = allPatterns
            .map(p => ({
                label:        p.label,
                color:        p.color,
                icon:         p.icon,
                count:        patternCounts[p.label] || 0,
                sessionCount: patternSessions[p.label]?.size || 0,
                samples:      patternSamples[p.label] || []
            }))
            .filter(p => p.count > 0)
            .sort((a, b) => b.count - a.count);

        // Tool / sub-feature breakdown
        const toolBreakdown = {};
        for (const doc of rawErrorDocs) {
            const tool = doc.activeTool || 'General';
            toolBreakdown[tool] = (toolBreakdown[tool] || 0) + doc.errorCount;
        }
        const toolStats = Object.entries(toolBreakdown)
            .map(([tool, count]) => ({ tool, count }))
            .sort((a, b) => b.count - a.count);

        // Daily error trend for this mode
        const dailyErrors = await ChatSession.aggregate([
            { $match: { createdAt: { $gte: from, $lte: to }, detectedMode: modeMatch } },
            { $unwind: { path: '$messages', preserveNullAndEmptyArrays: false } },
            { $match: errorMatchStage },
            {
                $group: {
                    _id: { $dateToString: { format: '%Y-%m-%d', date: '$createdAt' } },
                    errorCount: { $sum: 1 },
                    sessions:   { $addToSet: '$sessionId' }
                }
            },
            { $project: { _id: 1, errorCount: 1, sessionCount: { $size: '$sessions' } } },
            { $sort: { _id: 1 } }
        ]);

        // Recent affected sessions
        const recentSessions = rawErrorDocs.slice(0, 15).map(doc => ({
            sessionId:  doc.sessionId,
            createdAt:  doc.createdAt,
            errorCount: doc.errorCount,
            activeTool: doc.activeTool || 'General',
            topError:   (doc.errorMsgs[0] || '').replace(/\n+/g, ' ').replace(/\s+/g, ' ').trim().substring(0, 200)
        }));

        res.status(200).json({
            success: true,
            mode, range,
            drillDown: {
                totalErrorInstances: rawErrorDocs.reduce((acc, d) => acc + d.errorCount, 0),
                affectedSessions:    rawErrorDocs.length,
                patterns,
                toolStats,
                dailyErrors,
                recentSessions
            }
        });
    } catch (error) {
        console.error('[getErrorDrillDown Error]', error);
        res.status(500).json({ success: false, message: error.message });
    }
};
