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
    const thirtyMinutesMs = 30 * 60 * 1000;

    // A single robust aggregation pipeline for main metrics
    const [result] = await ChatSession.aggregate([
      {
        $project: {
          totalMsgs: {
            $size: {
              $cond: {
                if: { $isArray: '$messages' },
                then: '$messages',
                else: []
              }
            }
          },
          createdAtMs: {
            $cond: {
              if: { $gt: ['$createdAt', null] },
              then: { $toLong: '$createdAt' },
              else: null
            }
          },
          lastModifiedMs: {
            $cond: {
              if: { $gt: ['$lastModified', null] },
              then: { $toLong: '$lastModified' },
              else: {
                $cond: {
                  if: { $gt: ['$createdAt', null] },
                  then: { $toLong: '$createdAt' },
                  else: null
                }
              }
            }
          },
          guestId: 1,
          userId: 1
        }
      },
      {
        $addFields: {
          durationMs: {
            $cond: {
              if: {
                $and: [
                  { $ne: ['$lastModifiedMs', null] },
                  { $ne: ['$createdAtMs', null] }
                ]
              },
              then: { $subtract: ['$lastModifiedMs', '$createdAtMs'] },
              else: 0
            }
          },
          sessionStatus: {
            $cond: {
              if: { $eq: ['$totalMsgs', 0] },
              then: 'abandoned',
              else: {
                $cond: {
                  if: {
                    $lt: [
                      { $subtract: [Date.now(), { $ifNull: ['$lastModifiedMs', Date.now()] }] },
                      thirtyMinutesMs
                    ]
                  },
                  then: 'active',
                  else: 'completed'
                }
              }
            }
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
          active: { $sum: { $cond: [{ $eq: ['$sessionStatus', 'active'] }, 1, 0] } },
          completed: { $sum: { $cond: [{ $eq: ['$sessionStatus', 'completed'] }, 1, 0] } },
          abandoned: { $sum: { $cond: [{ $eq: ['$sessionStatus', 'abandoned'] }, 1, 0] } },
          totalGuest: { $sum: { $cond: [{ $ifNull: ['$guestId', false] }, 1, 0] } },
          totalRegistered: { $sum: { $cond: [{ $ifNull: ['$userId', false] }, 1, 0] } }
        }
      }
    ]);

    // Aggregate mode counts separately and quickly
    const modeResults = await ChatSession.aggregate([
      {
        $group: {
          _id: { $ifNull: ['$detectedMode', 'NORMAL_CHAT'] },
          count: { $sum: 1 }
        }
      }
    ]);

    const modeCounts = {};
    for (const m of modeResults) {
      modeCounts[m._id] = m.count;
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
        statusCounts: {
          active: result?.active || 0,
          completed: result?.completed || 0,
          abandoned: result?.abandoned || 0
        },
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
      { $unwind: { path: '$userInfo', preserveNullAndEmptyArrays: true } },

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
      { $unwind: { path: '$userInfo', preserveNullAndEmptyArrays: true } },
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
