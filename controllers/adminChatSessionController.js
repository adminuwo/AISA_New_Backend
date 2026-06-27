import ChatSession from '../models/ChatSession.js';
import mongoose from 'mongoose';

// ─── Helper: compute derived session fields ─────────────────────────────────
const computeStatus = (lastModified, messageCount) => {
  if (!messageCount || messageCount === 0) return 'abandoned';
  const msSince = Date.now() - new Date(lastModified).getTime();
  const minutesSince = msSince / 60000;
  if (minutesSince < 30) return 'active';
  return 'completed';
};

const formatDuration = (ms) => {
  if (!ms || ms <= 0) return '0m';
  const totalSec = Math.floor(ms / 1000);
  const h = Math.floor(totalSec / 3600);
  const m = Math.floor((totalSec % 3600) / 60);
  const s = totalSec % 60;
  if (h > 0) return `${h}h ${m}m`;
  if (m > 0) return `${m}m ${s}s`;
  return `${s}s`;
};

// ─── GET /api/admin/chat-sessions/stats ─────────────────────────────────────
export const getChatSessionStats = async (req, res) => {
  try {
    // Use aggregation to compute all stats in one query
    const now = Date.now();
    const thirtyMinutesMs = 30 * 60 * 1000;

    const [result] = await ChatSession.aggregate([
      {
        $addFields: {
          totalMsgs: { $size: '$messages' },
          durationMs: {
            $subtract: [
              { $toLong: '$lastModified' },
              { $toLong: '$createdAt' }
            ]
          }
        }
      },
      {
        $group: {
          _id: null,
          totalSessions: { $sum: 1 },
          totalMessages: { $sum: '$totalMsgs' },
          avgMessages: { $avg: '$totalMsgs' },
          avgDurationMs: { $avg: '$durationMs' },
          totalGuest: {
            $sum: {
              $cond: [{ $ifNull: ['$guestId', false] }, 1, 0]
            }
          },
          totalRegistered: {
            $sum: {
              $cond: [{ $ifNull: ['$userId', false] }, 1, 0]
            }
          }
        }
      }
    ]);

    // Count status by computing on full collection (lightweight — only lastModified + messages.length)
    const allSessions = await ChatSession.find({})
      .select('lastModified messages guestId userId detectedMode')
      .lean();

    let active = 0, completed = 0, abandoned = 0;
    const modeCounts = {};

    for (const s of allSessions) {
      const msgCount = s.messages?.length || 0;
      const status = computeStatus(s.lastModified, msgCount);
      if (status === 'active') active++;
      else if (status === 'completed') completed++;
      else abandoned++;

      const mode = s.detectedMode || 'NORMAL_CHAT';
      modeCounts[mode] = (modeCounts[mode] || 0) + 1;
    }

    res.status(200).json({
      success: true,
      stats: {
        totalSessions: result?.totalSessions || 0,
        totalMessages: result?.totalMessages || 0,
        avgMessages: Math.round(result?.avgMessages || 0),
        avgDurationMs: Math.round(result?.avgDurationMs || 0),
        avgDuration: formatDuration(result?.avgDurationMs || 0),
        totalGuestSessions: result?.totalGuest || 0,
        totalRegisteredSessions: result?.totalRegistered || 0,
        statusCounts: { active, completed, abandoned },
        modeCounts
      }
    });
  } catch (error) {
    console.error('[getChatSessionStats Error]', error);
    res.status(500).json({ success: false, message: error.message });
  }
};

// ─── GET /api/admin/chat-sessions ────────────────────────────────────────────
export const getChatSessions = async (req, res) => {
  try {
    const {
      page = 1,
      limit = 20,
      search = '',
      status = '',
      mode = '',
      dateFrom = '',
      dateTo = ''
    } = req.query;

    const skip = (parseInt(page) - 1) * parseInt(limit);

    // Build match stage
    const matchStage = {};

    if (mode) matchStage.detectedMode = mode;

    if (dateFrom || dateTo) {
      matchStage.createdAt = {};
      if (dateFrom) matchStage.createdAt.$gte = new Date(dateFrom);
      if (dateTo) {
        const end = new Date(dateTo);
        end.setHours(23, 59, 59, 999);
        matchStage.createdAt.$lte = end;
      }
    }

    const pipeline = [
      { $match: matchStage },

      // Join user info
      {
        $lookup: {
          from: 'users',
          localField: 'userId',
          foreignField: '_id',
          as: 'userInfo'
        }
      },
      { $unwind: { path: '$userInfo', preserveNullAndEmpty: true } },

      // Compute derived fields
      {
        $addFields: {
          totalMessages: { $size: '$messages' },
          userMessages: {
            $size: {
              $filter: {
                input: '$messages',
                as: 'msg',
                cond: { $eq: ['$$msg.role', 'user'] }
              }
            }
          },
          aiMessages: {
            $size: {
              $filter: {
                input: '$messages',
                as: 'msg',
                cond: { $in: ['$$msg.role', ['model', 'assistant']] }
              }
            }
          },
          durationMs: {
            $subtract: [
              { $toLong: '$lastModified' },
              { $toLong: '$createdAt' }
            ]
          },
          userName: { $ifNull: ['$userInfo.name', 'Guest'] },
          userEmail: { $ifNull: ['$userInfo.email', 'N/A'] }
        }
      },

      // Add computed status
      {
        $addFields: {
          sessionStatus: {
            $switch: {
              branches: [
                {
                  case: { $eq: ['$totalMessages', 0] },
                  then: 'abandoned'
                },
                {
                  case: {
                    $lt: [
                      {
                        $subtract: [
                          new Date(),
                          { $toDate: '$lastModified' }
                        ]
                      },
                      1800000 // 30 minutes in ms
                    ]
                  },
                  then: 'active'
                }
              ],
              default: 'completed'
            }
          }
        }
      }
    ];

    // Apply search filter after user lookup
    if (search) {
      const searchRegex = { $regex: search, $options: 'i' };
      pipeline.push({
        $match: {
          $or: [
            { sessionId: searchRegex },
            { userName: searchRegex },
            { userEmail: searchRegex },
            { title: searchRegex }
          ]
        }
      });
    }

    // Apply status filter after computing it
    if (status) {
      pipeline.push({ $match: { sessionStatus: status } });
    }

    // Sort by most recent first
    pipeline.push({ $sort: { lastModified: -1 } });

    // Count total before pagination
    const countPipeline = [...pipeline, { $count: 'total' }];
    const [countResult] = await ChatSession.aggregate(countPipeline);
    const total = countResult?.total || 0;

    // Paginate
    pipeline.push({ $skip: skip }, { $limit: parseInt(limit) });

    // Project only what frontend needs (omit heavy messages array)
    pipeline.push({
      $project: {
        sessionId: 1,
        title: 1,
        detectedMode: 1,
        activeTool: 1,
        isShared: 1,
        createdAt: 1,
        lastModified: 1,
        totalMessages: 1,
        userMessages: 1,
        aiMessages: 1,
        durationMs: 1,
        sessionStatus: 1,
        userName: 1,
        userEmail: 1,
        userId: 1,
        guestId: 1
      }
    });

    const sessions = await ChatSession.aggregate(pipeline);

    // Format duration for display
    const formatted = sessions.map(s => ({
      ...s,
      duration: formatDuration(s.durationMs)
    }));

    res.status(200).json({
      success: true,
      sessions: formatted,
      pagination: {
        total,
        page: parseInt(page),
        limit: parseInt(limit),
        totalPages: Math.ceil(total / parseInt(limit))
      }
    });
  } catch (error) {
    console.error('[getChatSessions Error]', error);
    res.status(500).json({ success: false, message: error.message });
  }
};

// ─── GET /api/admin/chat-sessions/:sessionId ─────────────────────────────────
export const getChatSessionDetail = async (req, res) => {
  try {
    const { sessionId } = req.params;

    const [session] = await ChatSession.aggregate([
      { $match: { sessionId } },
      {
        $lookup: {
          from: 'users',
          localField: 'userId',
          foreignField: '_id',
          as: 'userInfo'
        }
      },
      { $unwind: { path: '$userInfo', preserveNullAndEmpty: true } },
      {
        $addFields: {
          totalMessages: { $size: '$messages' },
          userMessages: {
            $size: {
              $filter: {
                input: '$messages',
                as: 'msg',
                cond: { $eq: ['$$msg.role', 'user'] }
              }
            }
          },
          aiMessages: {
            $size: {
              $filter: {
                input: '$messages',
                as: 'msg',
                cond: { $in: ['$$msg.role', ['model', 'assistant']] }
              }
            }
          },
          durationMs: {
            $subtract: [
              { $toLong: '$lastModified' },
              { $toLong: '$createdAt' }
            ]
          },
          userName: { $ifNull: ['$userInfo.name', 'Guest'] },
          userEmail: { $ifNull: ['$userInfo.email', 'N/A'] },
          userAvatar: '$userInfo.avatar'
        }
      },
      {
        $addFields: {
          sessionStatus: {
            $switch: {
              branches: [
                { case: { $eq: ['$totalMessages', 0] }, then: 'abandoned' },
                {
                  case: {
                    $lt: [
                      { $subtract: [new Date(), { $toDate: '$lastModified' }] },
                      1800000
                    ]
                  },
                  then: 'active'
                }
              ],
              default: 'completed'
            }
          }
        }
      }
    ]);

    if (!session) {
      return res.status(404).json({ success: false, message: 'Session not found' });
    }

    session.duration = formatDuration(session.durationMs);

    res.status(200).json({ success: true, session });
  } catch (error) {
    console.error('[getChatSessionDetail Error]', error);
    res.status(500).json({ success: false, message: error.message });
  }
};
