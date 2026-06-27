const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/KnowledgeUpload-n72MHRol.js","assets/index-CifJr-sK.js","assets/index-7OHLTGN-.css","assets/KnowledgeManagement-24zQAntY.js"])))=>i.map(i=>d[i]);
import { c as createLucideIcon, r as reactExports, j as jsxRuntimeExports, m as motion, X, v as Search, R as RefreshCw, u as Eye, A as AnimatePresence, w as axios, x as apis, z as zt, y as useLanguage, B as useNavigate, q as getUserData, H as ChartColumn, I as Users, J as CreditCard, l as Shield, F as FileText, K as Headphones, M as BookOpen, S as Settings, N as logo, O as ArrowLeft, P as Activity, Q as DollarSign, V as Save, a as apiService, T as Trash2, W as Plus, Y as CirclePlus, _ as React, C as CircleAlert, $ as Pen, b as Clock, D as DeleteConfirmModal, a0 as Check, a1 as __vitePreload, a2 as API } from "./index-CifJr-sK.js";
/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m4.9 4.9 14.2 14.2", key: "1m5liu" }]
];
const Ban = createLucideIcon("Ban", __iconNode$1);
/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "M12 12v6", key: "3ahymv" }],
  ["path", { d: "m15 15-3-3-3 3", key: "15xj92" }]
];
const FileUp = createLucideIcon("FileUp", __iconNode);
const AdminHelpDesk = ({ isOpen, onClose, isEmbedded = false }) => {
  const [tickets, setTickets] = reactExports.useState([]);
  const [loading, setLoading] = reactExports.useState(true);
  const [searchQuery, setSearchQuery] = reactExports.useState("");
  const [selectedTicket, setSelectedTicket] = reactExports.useState(null);
  const fetchTickets = async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem("token");
      const ticketsRes = await axios.get(`${apis.support}/tickets`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      console.log("[ADMIN HELPDESK] Tickets fetched:", ticketsRes.data.tickets);
      setTickets(ticketsRes.data.tickets || []);
    } catch (error) {
      console.error("[ADMIN] Error fetching tickets:", error);
      if (error.response) {
        console.error("[ADMIN] Error details:", error.response.data);
      }
      zt.error("Failed to fetch support tickets");
      setTickets([]);
    } finally {
      setLoading(false);
    }
  };
  reactExports.useEffect(() => {
    if (isOpen || isEmbedded) {
      fetchTickets();
      const interval = setInterval(fetchTickets, 1e4);
      return () => clearInterval(interval);
    }
  }, [isOpen, isEmbedded]);
  const filteredTickets = (tickets || []).filter((ticket) => {
    var _a, _b, _c;
    const matchesSearch = ((_a = ticket == null ? void 0 : ticket.name) == null ? void 0 : _a.toLowerCase().includes(searchQuery.toLowerCase())) || ((_b = ticket == null ? void 0 : ticket.email) == null ? void 0 : _b.toLowerCase().includes(searchQuery.toLowerCase())) || ((_c = ticket == null ? void 0 : ticket.message) == null ? void 0 : _c.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesSearch;
  });
  const getStatusColor = (status) => {
    switch (status) {
      case "pending":
        return "bg-yellow-500/10 text-yellow-500 border-yellow-500/20";
      case "resolved":
        return "bg-green-500/10 text-green-500 border-green-500/20";
      case "in_progress":
        return "bg-blue-500/10 text-blue-500 border-blue-500/20";
      default:
        return "bg-gray-500/10 text-gray-500 border-gray-500/20";
    }
  };
  if (!isOpen && !isEmbedded) return null;
  const modalClasses = "bg-background border border-border rounded-2xl w-[95vw] max-w-7xl h-[90vh] flex flex-col shadow-2xl overflow-hidden";
  const embeddedClasses = "bg-white/10 dark:bg-white/5 border border-white/20 dark:border-white/10 rounded-2xl w-full h-[700px] flex flex-col shadow-xl overflow-hidden backdrop-blur-md";
  const content = /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: isEmbedded ? {} : { opacity: 0, scale: 0.95 },
      animate: isEmbedded ? {} : { opacity: 1, scale: 1 },
      exit: isEmbedded ? {} : { opacity: 0, scale: 0.95 },
      className: isEmbedded ? embeddedClasses : modalClasses,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between p-6 border-b border-border", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold text-maintext flex items-center gap-2", children: "🎧 Admin Help Desk" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-subtext mt-1", children: "Manage user support queries" })
          ] }),
          !isEmbedded && /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: onClose,
              className: "p-2 hover:bg-surface rounded-lg transition-colors",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-6 h-6 text-subtext" })
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 p-6 border-b border-border", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 relative", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-subtext" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "text",
                placeholder: "Search tickets...",
                value: searchQuery,
                onChange: (e) => setSearchQuery(e.target.value),
                className: "w-full pl-10 pr-4 py-2 bg-surface border border-border rounded-lg text-maintext placeholder-subtext focus:outline-none focus:ring-2 focus:ring-primary"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              onClick: fetchTickets,
              className: "px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors flex items-center gap-2",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { className: "w-4 h-4" }),
                "Refresh"
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 overflow-y-auto p-6", children: loading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center h-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "animate-spin rounded-full h-12 w-12 border-4 border-primary border-t-transparent" }) }) : filteredTickets.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center justify-center h-full text-subtext", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg", children: "No tickets found" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm mt-2", children: "Try adjusting your filters" })
        ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-4", children: filteredTickets.map((ticket) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "bg-surface border border-border rounded-xl p-4 hover:border-primary/50 transition-colors cursor-pointer",
            onClick: () => setSelectedTicket(ticket),
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-maintext", children: ticket.name }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-xs px-2 py-1 rounded-full border ${getStatusColor(ticket.status)}`, children: ticket.status }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs px-2 py-1 rounded-full bg-blue-500/10 text-blue-500 border border-blue-500/20", children: ticket.issueType })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-subtext mb-2", children: ticket.email }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-maintext line-clamp-2", children: ticket.message })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-end gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-subtext whitespace-nowrap", children: new Date(ticket.createdAt).toLocaleDateString() }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    onClick: (e) => {
                      e.stopPropagation();
                      setSelectedTicket(ticket);
                    },
                    className: "p-2 hover:bg-primary/10 rounded-lg transition-colors",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { className: "w-4 h-4 text-primary" })
                  }
                ) })
              ] })
            ] })
          },
          ticket._id
        )) }) })
      ]
    }
  );
  const ticketModal = /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: selectedTicket && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-[10000] flex items-center justify-center bg-black/50 backdrop-blur-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      initial: { opacity: 0, scale: 0.95 },
      animate: { opacity: 1, scale: 1 },
      exit: { opacity: 0, scale: 0.95 },
      className: "bg-background border border-border rounded-2xl w-full max-w-2xl max-h-[80vh] overflow-y-auto shadow-2xl m-4",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold text-maintext", children: "Ticket Details" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: () => setSelectedTicket(null),
              className: "p-2 hover:bg-surface rounded-lg transition-colors",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-5 h-5 text-subtext" })
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-sm text-subtext", children: "Name" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-maintext font-medium", children: selectedTicket.name })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-sm text-subtext", children: "Email" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-maintext", children: selectedTicket.email })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-sm text-subtext", children: "Issue Type" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-maintext", children: selectedTicket.issueType })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-sm text-subtext", children: "Message" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-maintext bg-surface p-4 rounded-lg border border-border whitespace-pre-wrap", children: selectedTicket.message })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-sm text-subtext", children: "Status" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2 mt-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-sm px-3 py-1 rounded-full border ${getStatusColor(selectedTicket.status)}`, children: selectedTicket.status }) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-sm text-subtext", children: "Created" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-maintext", children: new Date(selectedTicket.createdAt).toLocaleString() })
            ] })
          ] })
        ] })
      ] })
    }
  ) }) });
  if (isEmbedded) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full relative", children: [
      content,
      ticketModal
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 backdrop-blur-sm", children: [
    content,
    ticketModal
  ] });
};
const KnowledgeUpload = React.lazy(() => __vitePreload(() => import("./KnowledgeUpload-n72MHRol.js"), true ? __vite__mapDeps([0,1,2]) : void 0).catch(() => ({ default: () => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-8 text-center text-subtext", children: "AI Base Module not found." }) })));
const KnowledgeManagement = React.lazy(() => __vitePreload(() => import("./KnowledgeManagement-24zQAntY.js"), true ? __vite__mapDeps([3,1,2]) : void 0).catch(() => ({ default: () => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-8 text-center text-subtext", children: "AI Base Module not found." }) })));
const ADMIN_EMAIL = "admin@uwo24.com";
const LoadingSpinner = () => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-8 h-8 border-3 border-primary/30 border-t-primary rounded-full animate-spin" }) });
const TabButton = ({ active, icon: Icon, label, onClick }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
  "button",
  {
    onClick,
    className: `flex items-center gap-2.5 px-5 py-3 rounded-xl font-bold text-sm transition-all whitespace-nowrap ${active ? "bg-primary text-white shadow-lg shadow-primary/30" : "text-subtext hover:bg-white/20 dark:hover:bg-white/10 hover:text-maintext"}`,
    children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "w-4 h-4" }),
      label
    ]
  }
);
const StatCard = ({ icon: Icon, label, value, color = "primary", trend }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
  motion.div,
  {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    className: "bg-white/40 dark:bg-white/5 backdrop-blur-xl border border-white/30 dark:border-white/10 rounded-2xl p-5 relative overflow-hidden group hover:border-primary/30 transition-all",
    children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `w-10 h-10 rounded-xl bg-${color}/10 flex items-center justify-center`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: `w-5 h-5 text-${color}` }) }),
          trend && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold text-green-500 bg-green-500/10 px-2 py-1 rounded-lg", children: trend })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-2xl font-black text-maintext", children: value }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-subtext uppercase tracking-wider mt-1", children: label })
      ] })
    ]
  }
);
const SectionCard = ({ title, children, action }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/40 dark:bg-white/5 backdrop-blur-xl border border-white/30 dark:border-white/10 rounded-2xl overflow-hidden", children: [
  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between p-5 border-b border-white/20 dark:border-white/10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-maintext text-lg", children: title }),
    action
  ] }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-5", children })
] });
const OverviewTab = () => {
  const { t } = useLanguage();
  const [stats, setStats] = reactExports.useState(null);
  const [loading, setLoading] = reactExports.useState(true);
  const [refreshing, setRefreshing] = reactExports.useState(false);
  const fetchStats = async (isManual = false) => {
    if (isManual) setRefreshing(true);
    try {
      const data = await apiService.getAdminOverviewStats();
      setStats(data.stats || data);
    } catch (err) {
      console.error("Failed to fetch stats:", err);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };
  reactExports.useEffect(() => {
    fetchStats();
    const interval = setInterval(() => fetchStats(), 1e4);
    return () => clearInterval(interval);
  }, []);
  if (loading) return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center justify-center py-20 gap-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { className: "w-8 h-8 text-primary animate-spin" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-subtext text-sm", children: t("loadingRealTimeOverview") })
  ] });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-sm font-bold text-subtext uppercase tracking-widest flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Activity, { className: "w-4 h-4 text-primary" }),
        " ",
        t("livePlatformActivity")
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => fetchStats(true),
          disabled: refreshing,
          className: "p-2 rounded-lg hover:bg-primary/10 text-primary transition-all disabled:opacity-50",
          title: "Manual Refresh",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { className: `w-4 h-4 ${refreshing ? "animate-spin" : ""}` })
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { icon: Users, label: t("totalUsers"), value: (stats == null ? void 0 : stats.totalUsers) ?? 0 }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { icon: Activity, label: t("activeSubscriptions"), value: (stats == null ? void 0 : stats.activeSubscriptions) ?? 0, color: "emerald-500" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { icon: DollarSign, label: t("totalRevenue"), value: `₹${(stats == null ? void 0 : stats.totalRevenue) ?? 0}`, color: "amber-500" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { icon: Headphones, label: t("support"), value: (stats == null ? void 0 : stats.pendingTickets) ?? 0, color: "primary", trend: (stats == null ? void 0 : stats.pendingTickets) > 0 ? "Action Required" : "All Clear" })
    ] }),
    (stats == null ? void 0 : stats.toolUsage) && stats.toolUsage.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(SectionCard, { title: t("toolUsageAnalytics"), children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: stats.toolUsage.map((tool, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between p-3 bg-white/20 dark:bg-white/5 rounded-xl border border-white/10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-maintext text-sm", children: tool._id || "Unknown" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-4 text-xs text-subtext", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-bold text-primary", children: [
        tool.count,
        " uses"
      ] }) })
    ] }, i)) }) })
  ] });
};
const UsersTab = () => {
  const { t } = useLanguage();
  const [users, setUsers] = reactExports.useState([]);
  const [loading, setLoading] = reactExports.useState(true);
  const [searchQuery, setSearchQuery] = reactExports.useState("");
  const [selectedUser, setSelectedUser] = reactExports.useState(null);
  const [upgradeData, setUpgradeData] = reactExports.useState({ planName: "", expiryDate: "" });
  const [deleteModal, setDeleteModal] = reactExports.useState({ isOpen: false, userId: null });
  reactExports.useEffect(() => {
    fetchUsers();
    fetchPlans();
  }, []);
  const [availablePlans, setAvailablePlans] = reactExports.useState([]);
  const fetchPlans = async () => {
    try {
      const data = await apiService.getPlans();
      setAvailablePlans(Array.isArray(data) ? data : data.plans || []);
    } catch (err) {
      console.error("Failed to fetch plans:", err);
    }
  };
  const fetchUsers = async () => {
    setLoading(true);
    try {
      const data = await apiService.getAllUsers();
      setUsers(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error("Failed to fetch users:", err);
    } finally {
      setLoading(false);
    }
  };
  const handleBlockToggle = async (userId, currentStatus) => {
    try {
      await apiService.toggleBlockUser(userId, !currentStatus);
      zt.success(currentStatus ? "User unblocked" : "User blocked");
      fetchUsers();
    } catch (err) {
      zt.error("Failed to update user status");
    }
  };
  const handleDeleteUser = async () => {
    if (!deleteModal.userId) return;
    try {
      await apiService.deleteUser(deleteModal.userId);
      zt.success("User deleted");
      setDeleteModal({ isOpen: false, userId: null });
      fetchUsers();
    } catch (err) {
      zt.error("Failed to delete user");
      setDeleteModal({ isOpen: false, userId: null });
    }
  };
  const [isUpgrading, setIsUpgrading] = reactExports.useState(null);
  const handleManualUpgrade = async (userId) => {
    var _a;
    if (!upgradeData.planName) {
      zt.error("Please select a plan");
      return;
    }
    setIsUpgrading(userId);
    try {
      const response = await fetch(`${API}/admin/manual-upgrade`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${(_a = getUserData()) == null ? void 0 : _a.token}`
        },
        body: JSON.stringify({ userId, ...upgradeData })
      });
      const data = await response.json();
      if (data.success) {
        zt.success("Plan upgraded successfully");
        setUpgradeData({ planName: "", expiryDate: "" });
        fetchUsers();
      } else {
        zt.error(data.message || "Failed to upgrade plan");
      }
    } catch (err) {
      console.error("Upgrade error:", err);
      zt.error("Failed to upgrade plan");
    } finally {
      setIsUpgrading(null);
    }
  };
  const filteredUsers = users.filter(
    (u) => {
      var _a, _b;
      return ((_a = u.name) == null ? void 0 : _a.toLowerCase().includes(searchQuery.toLowerCase())) || ((_b = u.email) == null ? void 0 : _b.toLowerCase().includes(searchQuery.toLowerCase()));
    }
  );
  if (loading) return /* @__PURE__ */ jsxRuntimeExports.jsx(LoadingSpinner, {});
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-subtext" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "input",
        {
          type: "text",
          placeholder: t("searchUsersPlaceholder"),
          value: searchQuery,
          onChange: (e) => setSearchQuery(e.target.value),
          className: "w-full bg-white/30 dark:bg-white/5 backdrop-blur-xl border border-white/30 dark:border-white/10 rounded-xl py-3 pl-11 pr-4 text-sm outline-none focus:border-primary/50 transition-all placeholder:text-subtext/50 text-maintext"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
      filteredUsers.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-center text-subtext py-8 text-sm", children: t("noUsersFound") }),
      filteredUsers.map((user) => {
        var _a, _b, _c, _d;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            layout: true,
            className: "bg-white/30 dark:bg-white/5 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-xl p-4 hover:border-primary/20 transition-all",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between flex-wrap gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 min-w-0", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center overflow-hidden border border-white/10 shrink-0", children: user.avatar ? /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: user.avatar, alt: user.name, className: "w-full h-full object-cover", onError: (e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = "/account.png";
                  } }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-primary text-sm", children: ((_b = (_a = user.name) == null ? void 0 : _a.charAt(0)) == null ? void 0 : _b.toUpperCase()) || "U" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-maintext text-sm truncate", children: user.name }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-subtext truncate", children: user.email })
                  ] }),
                  user.isBlocked && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-2 py-0.5 rounded-md bg-red-500/10 text-red-500 text-[10px] font-bold uppercase", children: t("block") }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `px-2 py-0.5 rounded-md text-[10px] font-bold uppercase ${((_c = user.planName) == null ? void 0 : _c.toLowerCase().includes("pro")) ? "bg-amber-500/10 text-amber-500" : ((_d = user.planName) == null ? void 0 : _d.toLowerCase().includes("founder")) ? "bg-purple-500/10 text-purple-500" : "bg-primary/10 text-primary"}`, children: user.planName || user.role || "Free Plan" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      onClick: () => setSelectedUser(selectedUser === (user._id || user.id) ? null : user._id || user.id),
                      className: "p-2 rounded-lg hover:bg-primary/10 text-subtext hover:text-primary transition-all",
                      title: t("manage"),
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(Settings, { className: "w-4 h-4" })
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      onClick: () => handleBlockToggle(user._id || user.id, user.isBlocked),
                      className: `p-2 rounded-lg transition-all ${user.isBlocked ? "hover:bg-green-500/10 text-green-500" : "hover:bg-amber-500/10 text-amber-500"}`,
                      title: user.isBlocked ? t("unblock") : t("block"),
                      children: user.isBlocked ? /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "w-4 h-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Ban, { className: "w-4 h-4" })
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      onClick: () => setDeleteModal({ isOpen: true, userId: user._id || user.id }),
                      className: "p-2 rounded-lg hover:bg-red-500/10 text-red-500 transition-all",
                      title: t("delete"),
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "w-4 h-4" })
                    }
                  )
                ] })
              ] }),
              selectedUser === (user._id || user.id) && /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.div,
                {
                  initial: { height: 0, opacity: 0 },
                  animate: { height: "auto", opacity: 1 },
                  exit: { height: 0, opacity: 0 },
                  className: "overflow-hidden border-t border-white/10 mt-3 pt-3",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "select",
                      {
                        className: "bg-white/20 dark:bg-black/20 border border-white/20 dark:border-white/10 rounded-lg px-2 py-1.5 text-xs text-maintext",
                        value: upgradeData.planName,
                        onChange: (e) => setUpgradeData({ ...upgradeData, planName: e.target.value }),
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: t("selectPlan") }),
                          availablePlans.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: p.planName, children: p.planName }, p._id))
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "input",
                      {
                        type: "date",
                        className: "bg-white/20 dark:bg-black/20 border border-white/20 dark:border-white/10 rounded-lg px-2 py-1.5 text-xs text-maintext",
                        value: upgradeData.expiryDate,
                        onChange: (e) => setUpgradeData({ ...upgradeData, expiryDate: e.target.value })
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "button",
                      {
                        onClick: () => handleManualUpgrade(user._id || user.id),
                        disabled: isUpgrading === (user._id || user.id),
                        className: "px-3 py-1.5 bg-primary text-white rounded-lg text-xs font-bold hover:opacity-90 transition-all",
                        children: isUpgrading === (user._id || user.id) ? t("loading") : t("upgrade")
                      }
                    )
                  ] })
                }
              )
            ]
          },
          user._id || user.id
        );
      })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      DeleteConfirmModal,
      {
        isOpen: deleteModal.isOpen,
        onClose: () => setDeleteModal({ isOpen: false, userId: null }),
        onConfirm: handleDeleteUser,
        title: t("deleteUserTitle"),
        description: t("deleteUserDesc")
      }
    )
  ] });
};
const formatFeatureString = (feature, plan) => {
  if (!feature || !plan) return feature;
  let result = feature;
  if (/total AI messages/i.test(result) || /total messages/i.test(result) || /AI messages/i.test(result)) {
    if (plan.chatLimit === -1 || plan.chatScope === "unlimited") {
      return "Unlimited AI Chat";
    } else {
      result = result.replace(/\d+/, plan.chatLimit ?? 100);
    }
  }
  if (/months validity/i.test(result) || /month validity/i.test(result) || /days validity/i.test(result)) {
    const months = Math.round((plan.validityDays || 90) / 30);
    result = result.replace(/\d+/, months);
  }
  if (/Images\/day/i.test(result)) {
    result = result.replace(/\d+/, plan.imageLimit ?? 0);
  }
  if (/Carousel\/day/i.test(result)) {
    result = result.replace(/\d+/, plan.carouselLimit ?? 0);
  }
  if (/Videos\/day/i.test(result)) {
    result = result.replace(/\d+/, plan.videoLimit ?? 0);
  }
  return result;
};
const PlansTab = () => {
  const { t } = useLanguage();
  const [plans, setPlans] = reactExports.useState([]);
  const [loading, setLoading] = reactExports.useState(true);
  const [showForm, setShowForm] = reactExports.useState(false);
  const [editingPlan, setEditingPlan] = reactExports.useState(null);
  const [form, setForm] = reactExports.useState({
    planId: "",
    planName: "",
    priceMonthly: "",
    priceYearly: "",
    validityDays: "",
    features: ""
  });
  const [deleteModal, setDeleteModal] = reactExports.useState({ isOpen: false, planId: null });
  const [saving, setSaving] = reactExports.useState(false);
  reactExports.useEffect(() => {
    fetchPlans();
  }, []);
  const fetchPlans = async () => {
    setLoading(true);
    try {
      const data = await apiService.getPlans();
      setPlans(Array.isArray(data) ? data : data.plans || []);
    } catch (err) {
      console.error("Failed to fetch plans:", err);
    } finally {
      setLoading(false);
    }
  };
  const handleSubmit = async () => {
    setSaving(true);
    try {
      const body = {
        planId: form.planId,
        planName: form.planName,
        priceMonthly: Number(form.priceMonthly),
        priceYearly: Number(form.priceYearly),
        validityDays: Number(form.validityDays),
        features: form.features.split(",").map((f) => f.trim()).filter(Boolean)
      };
      let data;
      if (editingPlan) {
        data = await apiService.updatePlan(editingPlan._id, body);
      } else {
        data = await apiService.createPlan(body);
      }
      if (data.success) {
        zt.success(editingPlan ? "Plan updated" : "Plan created");
        resetForm();
        fetchPlans();
      } else {
        zt.error(data.message || "Failed");
      }
    } catch (err) {
      zt.error("Failed to save plan");
    } finally {
      setSaving(false);
    }
  };
  const handleDelete = async () => {
    if (!deleteModal.planId) return;
    try {
      await apiService.deletePlan(deleteModal.planId);
      zt.success("Plan deleted");
      setDeleteModal({ isOpen: false, planId: null });
      fetchPlans();
    } catch (err) {
      zt.error("Failed to delete plan");
      setDeleteModal({ isOpen: false, planId: null });
    }
  };
  const startEdit = (plan) => {
    var _a, _b, _c;
    setEditingPlan(plan);
    setForm({
      planId: plan.planId || "",
      planName: plan.planName || "",
      priceMonthly: ((_a = plan.priceMonthly) == null ? void 0 : _a.toString()) || "",
      priceYearly: ((_b = plan.priceYearly) == null ? void 0 : _b.toString()) || "",
      validityDays: ((_c = plan.validityDays) == null ? void 0 : _c.toString()) ?? "90",
      features: (plan.features || []).map((f) => formatFeatureString(f, plan)).join(", ")
    });
    setShowForm(true);
  };
  const resetForm = () => {
    setForm({
      planId: "",
      planName: "",
      priceMonthly: "",
      priceYearly: "",
      validityDays: "",
      features: ""
    });
    setEditingPlan(null);
    setShowForm(false);
  };
  if (loading) return /* @__PURE__ */ jsxRuntimeExports.jsx(LoadingSpinner, {});
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-end", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        onClick: () => {
          resetForm();
          setShowForm(!showForm);
        },
        className: "flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-xl font-bold text-sm hover:opacity-90 transition-all shadow-lg shadow-primary/20",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-4 h-4" }),
          " New Plan"
        ]
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: showForm && /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { height: 0, opacity: 0 },
        animate: { height: "auto", opacity: 1 },
        exit: { height: 0, opacity: 0 },
        className: "overflow-hidden",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/30 dark:bg-white/5 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-2xl p-5 space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-maintext", children: editingPlan ? "Edit Plan" : "Create New Plan" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs font-bold uppercase tracking-wider text-subtext", children: "Plan ID" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  placeholder: "e.g. starter-plan",
                  value: form.planId,
                  onChange: (e) => setForm((p) => ({ ...p, planId: e.target.value })),
                  className: "w-full bg-white/20 dark:bg-black/20 border border-white/20 dark:border-white/10 rounded-xl py-3 px-4 text-sm outline-none focus:border-primary/50 text-maintext"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs font-bold uppercase tracking-wider text-subtext", children: "Plan Name" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  placeholder: "e.g. Starter",
                  value: form.planName,
                  onChange: (e) => setForm((p) => ({ ...p, planName: e.target.value })),
                  className: "w-full bg-white/20 dark:bg-black/20 border border-white/20 dark:border-white/10 rounded-xl py-3 px-4 text-sm outline-none focus:border-primary/50 text-maintext"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs font-bold uppercase tracking-wider text-subtext", children: "Monthly Price (₹)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  placeholder: "e.g. 499",
                  type: "number",
                  value: form.priceMonthly,
                  onChange: (e) => setForm((p) => ({ ...p, priceMonthly: e.target.value })),
                  className: "w-full bg-white/20 dark:bg-black/20 border border-white/20 dark:border-white/10 rounded-xl py-3 px-4 text-sm outline-none focus:border-primary/50 text-maintext no-spinner"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs font-bold uppercase tracking-wider text-subtext", children: "Yearly Price (₹)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  placeholder: "e.g. 4990",
                  type: "number",
                  value: form.priceYearly,
                  onChange: (e) => setForm((p) => ({ ...p, priceYearly: e.target.value })),
                  className: "w-full bg-white/20 dark:bg-black/20 border border-white/20 dark:border-white/10 rounded-xl py-3 px-4 text-sm outline-none focus:border-primary/50 text-maintext no-spinner"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs font-bold uppercase tracking-wider text-subtext", children: "Validity (Days)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  placeholder: "e.g. 30",
                  type: "number",
                  value: form.validityDays,
                  onChange: (e) => setForm((p) => ({ ...p, validityDays: e.target.value })),
                  className: "w-full bg-white/20 dark:bg-black/20 border border-white/20 dark:border-white/10 rounded-xl py-3 px-4 text-sm outline-none focus:border-primary/50 text-maintext no-spinner"
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs font-bold uppercase tracking-wider text-subtext", children: "Features List (Comma-separated)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                placeholder: "e.g. Unlimited AI Chat, CashFlow Explorer, Web & Deep Search",
                value: form.features,
                onChange: (e) => setForm((p) => ({ ...p, features: e.target.value })),
                className: "w-full bg-white/20 dark:bg-black/20 border border-white/20 dark:border-white/10 rounded-xl py-3 px-4 text-sm outline-none focus:border-primary/50 text-maintext"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3 justify-end", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: resetForm, className: "px-4 py-2 rounded-xl text-sm font-bold text-subtext hover:text-maintext hover:bg-white/20 transition-all", children: "Cancel" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: handleSubmit, className: "px-6 py-2 bg-primary text-white rounded-xl font-bold text-sm hover:opacity-90 transition-all shadow-lg shadow-primary/20", children: editingPlan ? "Update" : "Create" })
          ] })
        ] })
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4", children: [
      plans.map((plan) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/30 dark:bg-white/5 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-2xl p-5 hover:border-primary/20 transition-all", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between mb-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-maintext", children: plan.planName }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-1 space-y-0.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-lg font-black text-primary leading-none", children: [
                "₹",
                plan.priceMonthly,
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-subtext font-normal ml-1", children: "/mo" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[10px] text-subtext", children: [
                "Yearly: ₹",
                plan.priceYearly,
                " (₹",
                Math.round(plan.priceYearly / 12),
                "/mo)"
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => startEdit(plan), className: "p-2 rounded-lg hover:bg-primary/10 text-subtext hover:text-primary transition-all", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Pen, { className: "w-4 h-4" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setDeleteModal({ isOpen: true, planId: plan._id }), className: "p-2 rounded-lg hover:bg-red-500/10 text-subtext hover:text-red-500 transition-all", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "w-4 h-4" }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5 text-xs text-subtext border-t border-white/10 pt-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-3.5 h-3.5 text-primary animate-pulse" }),
            "Validity: ",
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-semibold text-maintext", children: [
              plan.validityDays,
              " days"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "flex items-center gap-2 text-[10px] opacity-70", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CreditCard, { className: "w-3.5 h-3.5" }),
            "ID: ",
            plan.planId
          ] })
        ] })
      ] }, plan._id)),
      plans.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-subtext text-sm col-span-full text-center py-8", children: "No plans created yet" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      DeleteConfirmModal,
      {
        isOpen: deleteModal.isOpen,
        onClose: () => setDeleteModal({ isOpen: false, planId: null }),
        onConfirm: handleDelete,
        title: "Delete Plan?",
        description: "Are you sure you want to delete this plan? This action cannot be undone."
      }
    )
  ] });
};
const ToolLimitTab = () => {
  const { t } = useLanguage();
  const [plans, setPlans] = reactExports.useState([]);
  const [editedPlans, setEditedPlans] = reactExports.useState([]);
  const [loading, setLoading] = reactExports.useState(true);
  const [saving, setSaving] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const fetchPlans = async () => {
      try {
        const data = await apiService.getPlans();
        const plansList = Array.isArray(data) ? data : data.plans || [];
        setPlans(plansList);
        setEditedPlans(JSON.parse(JSON.stringify(plansList)));
      } catch (err) {
        console.error("Failed to fetch plans:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchPlans();
  }, []);
  const handleValueChange = (planId, field, value) => {
    setEditedPlans((prev) => prev.map((p) => {
      if (p._id === planId) {
        return { ...p, [field]: value };
      }
      return p;
    }));
  };
  const hasUnsavedChanges = JSON.stringify(plans) !== JSON.stringify(editedPlans);
  const handleSaveAll = async () => {
    setSaving(true);
    let successCount = 0;
    let failCount = 0;
    const modified = editedPlans.filter((ep) => {
      const original = plans.find((p) => p._id === ep._id);
      return JSON.stringify(ep) !== JSON.stringify(original);
    });
    for (const plan of modified) {
      try {
        const body = {
          planId: plan.planId,
          planName: plan.planName,
          priceMonthly: Number(plan.priceMonthly),
          priceYearly: Number(plan.priceYearly),
          chatLimit: Number(plan.chatLimit),
          chatScope: plan.chatScope,
          imageLimit: Number(plan.imageLimit),
          carouselLimit: Number(plan.carouselLimit),
          videoLimit: Number(plan.videoLimit),
          editImageAllowed: Boolean(plan.editImageAllowed),
          cashflowAllowed: Boolean(plan.cashflowAllowed),
          validityDays: Number(plan.validityDays),
          aiLegalAllowed: Boolean(plan.aiLegalAllowed),
          aiAdsAllowed: Boolean(plan.aiAdsAllowed),
          voiceGenAllowed: Boolean(plan.voiceGenAllowed),
          webSearchAllowed: Boolean(plan.webSearchAllowed),
          deepSearchAllowed: Boolean(plan.deepSearchAllowed),
          codeWriterAllowed: Boolean(plan.codeWriterAllowed),
          documentConvertAllowed: Boolean(plan.documentConvertAllowed),
          features: plan.features,
          badge: plan.badge,
          isPopular: plan.isPopular,
          isActive: plan.isActive
        };
        const res = await apiService.updatePlan(plan._id, body);
        if (res.success) {
          successCount++;
        } else {
          failCount++;
        }
      } catch (err) {
        console.error(`Failed to update plan ${plan.planName}:`, err);
        failCount++;
      }
    }
    if (successCount > 0) {
      zt.success(`Successfully saved ${successCount} plan limit configuration${successCount > 1 ? "s" : ""}`);
    }
    if (failCount > 0) {
      zt.error(`Failed to save ${failCount} plan configurations`);
    }
    try {
      const data = await apiService.getPlans();
      const freshPlans = Array.isArray(data) ? data : data.plans || [];
      setPlans(freshPlans);
      setEditedPlans(JSON.parse(JSON.stringify(freshPlans)));
    } catch (err) {
      console.error("Failed to reload plans:", err);
    } finally {
      setSaving(false);
    }
  };
  if (loading) return /* @__PURE__ */ jsxRuntimeExports.jsx(LoadingSpinner, {});
  const services = [
    {
      category: "Plan Core Settings",
      items: [
        {
          name: "AI Chat Scope",
          description: "Chat availability type",
          field: "chatScope",
          type: "select",
          options: [
            { value: "total", label: "Lifetime Cap" },
            { value: "unlimited", label: "Unlimited" }
          ]
        },
        {
          name: "AI Chat Limit",
          description: "Max messages count (-1 for unlimited)",
          field: "chatLimit",
          type: "number"
        },
        {
          name: "Validity (Days)",
          description: "Plan expiration duration",
          field: "validityDays",
          type: "number"
        }
      ]
    },
    {
      category: "BUSINESS",
      items: [
        {
          name: "AI Legal™ Advisor",
          description: "Access to AI Legal documents and toolkit",
          field: "aiLegalAllowed",
          type: "boolean"
        },
        {
          name: "AI Cashflow™",
          description: "Permission to access stock analysis tabs",
          field: "cashflowAllowed",
          type: "boolean"
        },
        {
          name: "AI ADS™ Agent",
          description: "Access to AI Ads and Social Media generation",
          field: "aiAdsAllowed",
          type: "boolean"
        }
      ]
    },
    {
      category: "CREATE",
      items: [
        {
          name: "AI Image Generation",
          description: "Daily image creation limit",
          field: "imageLimit",
          type: "number"
        },
        {
          name: "AI Image Editor",
          description: "Permission to edit/transform images",
          field: "editImageAllowed",
          type: "boolean"
        },
        {
          name: "AI Carousel Generation",
          description: "Daily AIAD carousel limit",
          field: "carouselLimit",
          type: "number"
        },
        {
          name: "AI Video Generation",
          description: "Daily video creation limit",
          field: "videoLimit",
          type: "number"
        },
        {
          name: "Voice Generation",
          description: "Text-to-speech audio synthesis",
          field: "voiceGenAllowed",
          type: "boolean"
        }
      ]
    },
    {
      category: "INTELLIGENCE",
      items: [
        {
          name: "AI Web Search",
          description: "Real-time web search capability",
          field: "webSearchAllowed",
          type: "boolean"
        },
        {
          name: "AI Deep Search",
          description: "AI Deep Search capability",
          field: "deepSearchAllowed",
          type: "boolean"
        },
        {
          name: "AI Code Writer",
          description: "Programming support and code generator",
          field: "codeWriterAllowed",
          type: "boolean"
        },
        {
          name: "AI Document Converter",
          description: "Access to document format conversion tool",
          field: "documentConvertAllowed",
          type: "boolean"
        }
      ]
    }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6 pb-24", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-lg font-bold text-maintext", children: "Plan Services & Limits (Tool Matrix)" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-subtext", children: "Directly edit limits, permissions, and service capabilities for each plan in the grid below." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-white/40 dark:bg-white/5 backdrop-blur-xl border border-white/30 dark:border-white/10 rounded-2xl overflow-hidden overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-left border-collapse min-w-[800px]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-white/20 dark:border-white/10 bg-white/20 dark:bg-black/20", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "p-4 text-xs font-bold text-subtext uppercase tracking-wider w-[280px]", children: "Service / Tool Name" }),
        editedPlans.map((plan) => /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "p-4 text-xs font-black text-maintext uppercase tracking-wider text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-sm text-maintext", children: plan.planName }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] text-primary/80 lowercase font-medium mt-0.5", children: [
            "₹",
            plan.priceMonthly,
            "/mo"
          ] })
        ] }) }, plan._id))
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: services.map((cat, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(React.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { className: "bg-white/10 dark:bg-white/5", children: /* @__PURE__ */ jsxRuntimeExports.jsx("td", { colSpan: editedPlans.length + 1, className: "px-4 py-2 text-xs font-extrabold text-primary uppercase tracking-wider", children: cat.category }) }),
        cat.items.map((item, itemIdx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-white/10 dark:border-b-white/5 hover:bg-white/10 dark:hover:bg-white/5 transition-colors", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "p-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-maintext text-sm", children: item.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-subtext/80 mt-0.5", children: item.description })
          ] }),
          editedPlans.map((plan) => {
            const val = plan[item.field];
            return /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "p-4 text-center", children: [
              item.type === "boolean" && /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: "checkbox",
                  checked: !!val,
                  onChange: (e) => handleValueChange(plan._id, item.field, e.target.checked),
                  className: "w-4.5 h-4.5 accent-primary rounded border-white/20 cursor-pointer flex items-center justify-center mx-auto"
                }
              ),
              item.type === "number" && /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: "number",
                  value: val ?? 0,
                  onChange: (e) => handleValueChange(plan._id, item.field, Number(e.target.value)),
                  className: "bg-white/20 dark:bg-black/20 border border-white/20 dark:border-white/10 rounded-xl py-1.5 px-3 text-xs outline-none focus:border-primary text-maintext font-bold text-center w-24 mx-auto block no-spinner font-mono"
                }
              ),
              item.type === "select" && /* @__PURE__ */ jsxRuntimeExports.jsx(
                "select",
                {
                  value: val || "",
                  onChange: (e) => handleValueChange(plan._id, item.field, e.target.value),
                  className: "bg-white/20 dark:bg-black/20 border border-white/20 dark:border-white/10 rounded-xl py-1.5 px-3 text-xs outline-none focus:border-primary text-maintext font-bold text-center max-w-[150px] mx-auto block font-mono",
                  children: item.options.map((opt) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: opt.value, className: "bg-slate-50 dark:bg-zinc-900 text-maintext text-xs font-semibold", children: opt.label }, opt.value))
                }
              )
            ] }, plan._id);
          })
        ] }, itemIdx))
      ] }, idx)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/20 dark:bg-white/5 rounded-2xl p-4 border border-white/10 flex items-start gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "w-5 h-5 text-primary shrink-0 mt-0.5" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-subtext space-y-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-maintext", children: "Quick Edit Matrix" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Adjust limits and check permissions directly in the comparison grid. Changes are kept locally until you click the save bar at the bottom." })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: hasUnsavedChanges && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 50 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: 50 },
        className: "fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center justify-between gap-6 px-6 py-4 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-xl border border-white/30 dark:border-white/10 shadow-2xl rounded-2xl min-w-[320px] md:min-w-[500px]",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2.5 text-maintext", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "w-5 h-5 text-amber-500 shrink-0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-left", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-bold text-maintext", children: "Unsaved Changes" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-subtext", children: "You have modified the plan limits and permissions matrix." })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 font-semibold", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: () => setEditedPlans(JSON.parse(JSON.stringify(plans))),
                className: "px-4 py-2 text-xs font-bold text-subtext hover:text-maintext hover:bg-white/10 rounded-xl transition-all",
                children: "Reset"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: handleSaveAll,
                disabled: saving,
                className: "flex items-center gap-2 px-5 py-2.5 bg-primary text-white rounded-xl font-bold text-xs hover:opacity-90 transition-all shadow-lg shadow-primary/30 disabled:opacity-50",
                children: saving ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { className: "w-3.5 h-3.5 animate-spin" }),
                  "Saving..."
                ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Save, { className: "w-3.5 h-3.5" }),
                  "Save All Changes"
                ] })
              }
            )
          ] })
        ]
      }
    ) })
  ] });
};
const SettingsTab = () => {
  const { t } = useLanguage();
  const [settings, setSettings] = reactExports.useState(null);
  const [loading, setLoading] = reactExports.useState(true);
  const [saving, setSaving] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const fetchSettings = async () => {
      try {
        const data = await apiService.getAdminSettings();
        setSettings(data);
      } catch (err) {
        console.error("Failed to fetch settings:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchSettings();
  }, []);
  const handleSave = async () => {
    setSaving(true);
    try {
      await apiService.updateAdminSettings(settings);
      zt.success("Settings saved");
    } catch (err) {
      zt.error("Failed to save settings");
    } finally {
      setSaving(false);
    }
  };
  if (loading) return /* @__PURE__ */ jsxRuntimeExports.jsx(LoadingSpinner, {});
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    SectionCard,
    {
      title: "Admin Settings",
      action: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          onClick: handleSave,
          disabled: saving,
          className: "flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-xl font-bold text-sm hover:opacity-90 transition-all shadow-lg shadow-primary/20 disabled:opacity-50",
          children: [
            saving ? /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { className: "w-4 h-4 animate-spin" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Save, { className: "w-4 h-4" }),
            "Save"
          ]
        }
      ),
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs font-bold uppercase tracking-wider text-subtext", children: "Organization Name" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              value: (settings == null ? void 0 : settings.organizationName) || "",
              onChange: (e) => setSettings((p) => ({ ...p, organizationName: e.target.value })),
              className: "w-full bg-white/20 dark:bg-black/20 border border-white/20 dark:border-white/10 rounded-xl py-3 px-4 text-sm outline-none focus:border-primary/50 text-maintext"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs font-bold uppercase tracking-wider text-subtext", children: "Default AI Model" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              value: (settings == null ? void 0 : settings.defaultModel) || "",
              onChange: (e) => setSettings((p) => ({ ...p, defaultModel: e.target.value })),
              className: "w-full bg-white/20 dark:bg-black/20 border border-white/20 dark:border-white/10 rounded-xl py-3 px-4 text-sm outline-none focus:border-primary/50 text-maintext"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs font-bold uppercase tracking-wider text-subtext", children: "Max Tokens Per User" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "number",
              value: (settings == null ? void 0 : settings.maxTokensPerUser) || "",
              onChange: (e) => setSettings((p) => ({ ...p, maxTokensPerUser: Number(e.target.value) })),
              className: "w-full bg-white/20 dark:bg-black/20 border border-white/20 dark:border-white/10 rounded-xl py-3 px-4 text-sm outline-none focus:border-primary/50 text-maintext no-spinner"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs font-bold uppercase tracking-wider text-subtext", children: "Allow Public Signup" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: () => setSettings((p) => ({ ...p, allowPublicSignup: !p.allowPublicSignup })),
              className: `w-full py-3 rounded-xl font-bold text-sm transition-all border ${(settings == null ? void 0 : settings.allowPublicSignup) ? "bg-green-500/10 border-green-500/30 text-green-500" : "bg-red-500/10 border-red-500/30 text-red-500"}`,
              children: (settings == null ? void 0 : settings.allowPublicSignup) ? "Enabled" : "Disabled"
            }
          )
        ] })
      ] })
    }
  );
};
const LegalPagesTab = () => {
  const { t } = useLanguage();
  const [selectedPage, setSelectedPage] = reactExports.useState("cookie-policy");
  const [pageData, setPageData] = reactExports.useState({ sections: [] });
  const [loading, setLoading] = reactExports.useState(true);
  const [saving, setSaving] = reactExports.useState(false);
  const [isParsing, setIsParsing] = reactExports.useState(false);
  reactExports.useEffect(() => {
    fetchPage();
  }, [selectedPage]);
  const fetchPage = async () => {
    setLoading(true);
    try {
      const data = await apiService.getLegalPage(selectedPage);
      if (data && data.sections && data.sections.length > 0) {
        setPageData(data);
      } else {
        setPageData({
          sections: [],
          lastUpdated: (/* @__PURE__ */ new Date()).toISOString()
        });
      }
    } catch (err) {
      zt.error("Failed to fetch legal page data");
      setPageData({ sections: [] });
    } finally {
      setLoading(false);
    }
  };
  const handleSave = async () => {
    setSaving(true);
    try {
      await apiService.updateLegalPage(selectedPage, pageData.sections);
      zt.success("Legal page updated successfully");
    } catch (err) {
      zt.error("Failed to update legal page");
    } finally {
      setSaving(false);
    }
  };
  const addSection = () => {
    setPageData((prev) => ({
      ...prev,
      sections: [...prev.sections, { title: "New Section", content: [{ subtitle: "New Subtitle", text: "Section content here..." }] }]
    }));
  };
  const removeSection = (index) => {
    setPageData((prev) => ({
      ...prev,
      sections: prev.sections.filter((_, i) => i !== index)
    }));
  };
  const updateSection = (index, field, value) => {
    setPageData((prev) => {
      const newSections = [...prev.sections];
      newSections[index] = { ...newSections[index], [field]: value };
      return { ...prev, sections: newSections };
    });
  };
  const addContent = (sectionIndex) => {
    setPageData((prev) => {
      const newSections = [...prev.sections];
      newSections[sectionIndex] = {
        ...newSections[sectionIndex],
        content: [...newSections[sectionIndex].content, { subtitle: "New Subtitle", text: "Content text here..." }]
      };
      return { ...prev, sections: newSections };
    });
  };
  const removeContent = (sectionIndex, contentIndex) => {
    setPageData((prev) => {
      const newSections = [...prev.sections];
      newSections[sectionIndex] = {
        ...newSections[sectionIndex],
        content: newSections[sectionIndex].content.filter((_, i) => i !== contentIndex)
      };
      return { ...prev, sections: newSections };
    });
  };
  const updateContent = (sectionIndex, contentIndex, field, value) => {
    setPageData((prev) => {
      const newSections = [...prev.sections];
      const newContent = [...newSections[sectionIndex].content];
      newContent[contentIndex] = { ...newContent[contentIndex], [field]: value };
      newSections[sectionIndex] = { ...newSections[sectionIndex], content: newContent };
      return { ...prev, sections: newSections };
    });
  };
  const handleDocUpload = async (e) => {
    var _a, _b, _c, _d;
    const file = e.target.files[0];
    if (!file) return;
    setIsParsing(true);
    try {
      const res = await apiService.parseLegalDoc(file);
      if (res.success && res.sections && res.sections.length > 0) {
        setPageData((prev) => ({ ...prev, sections: res.sections }));
        zt.success(`Successfully parsed ${res.sections.length} sections from ${file.name}!`);
      } else {
        zt.error("Could not detect sections in the document.");
      }
    } catch (err) {
      console.error("Doc upload error:", err);
      const errMsg = ((_b = (_a = err.response) == null ? void 0 : _a.data) == null ? void 0 : _b.message) || ((_d = (_c = err.response) == null ? void 0 : _c.data) == null ? void 0 : _d.error) || err.message;
      zt.error(errMsg || "Failed to parse document. Ensure it is a valid PDF, DOCX, or TXT file.");
    } finally {
      setIsParsing(false);
      e.target.value = "";
    }
  };
  if (loading) return /* @__PURE__ */ jsxRuntimeExports.jsx(LoadingSpinner, {});
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center justify-between gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2 bg-white/20 dark:bg-white/5 rounded-xl p-1 border border-white/10 overflow-x-auto admin-horizontal-scrollbar", children: ["cookie-policy", "terms-of-service", "privacy-policy"].map((type) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => setSelectedPage(type),
          className: `px-4 py-2 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${selectedPage === type ? "bg-primary text-white shadow-md" : "text-subtext hover:bg-white/10 hover:text-maintext"}`,
          children: type.split("-").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ")
        },
        type
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: `flex items-center gap-2 px-5 py-2.5 bg-white/20 hover:bg-white/30 text-maintext rounded-xl font-bold text-sm transition-all border border-white/20 cursor-pointer ${isParsing ? "opacity-50 cursor-not-allowed" : ""}`, children: [
          isParsing ? /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { className: "w-4 h-4 animate-spin text-primary" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(FileUp, { className: "w-4 h-4" }),
          isParsing ? "Parsing..." : "Upload Document",
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "file",
              className: "hidden",
              accept: ".txt,.md,.pdf,.docx",
              onChange: handleDocUpload,
              disabled: isParsing
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: handleSave,
            disabled: saving || isParsing,
            className: "flex items-center gap-2 px-5 py-2.5 bg-primary text-white rounded-xl font-bold text-sm hover:opacity-90 transition-all shadow-lg shadow-primary/30 disabled:opacity-50",
            children: [
              saving ? /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { className: "w-4 h-4 animate-spin" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Save, { className: "w-4 h-4" }),
              "Save Changes"
            ]
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      SectionCard,
      {
        title: `${selectedPage.split("-").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ")} Content Management`,
        action: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: addSection,
            className: "flex items-center gap-1.5 px-3 py-1.5 bg-white/20 hover:bg-white/30 rounded-lg text-xs font-bold text-maintext border border-white/10 transition-all",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CirclePlus, { className: "w-3.5 h-3.5" }),
              "Add Section"
            ]
          }
        ),
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-8", children: [
          pageData.sections.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-12 border-2 border-dashed border-white/10 rounded-2xl", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-subtext text-sm mb-4", children: "No content found. Please create the first section to start building this page." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: addSection,
                className: "px-4 py-2 bg-primary/10 text-primary border border-primary/20 rounded-xl text-sm font-bold hover:bg-primary/20 transition-all",
                children: "Create First Section"
              }
            )
          ] }),
          pageData.sections.map((section, sIdx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative bg-white/10 dark:bg-white/5 rounded-2xl p-6 border border-white/10", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: () => removeSection(sIdx),
                className: "absolute -top-3 -right-3 w-8 h-8 rounded-full bg-red-500 text-white flex items-center justify-center hover:bg-red-600 transition-all shadow-lg shadow-red-500/30",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "w-4 h-4" })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6 space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-[10px] font-black uppercase tracking-widest text-primary", children: "Section Title" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  value: section.title,
                  onChange: (e) => updateSection(sIdx, "title", e.target.value),
                  className: "w-full bg-white/20 dark:bg-black/20 border border-white/20 dark:border-white/10 rounded-xl py-3 px-4 text-sm font-bold outline-none focus:border-primary/50 text-maintext"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6 ml-6 pl-6 border-l-2 border-primary/10", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-[10px] font-black uppercase tracking-widest text-primary/50", children: "Section Content Units" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "button",
                  {
                    onClick: () => addContent(sIdx),
                    className: "flex items-center gap-1 px-3 py-1.5 rounded-lg text-[10px] bg-primary text-white hover:opacity-90 font-bold transition-all shadow-lg shadow-primary/20",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-3 h-3" }),
                      " Add Content Unit"
                    ]
                  }
                )
              ] }),
              section.content.map((item, cIdx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/5 dark:bg-black/40 rounded-2xl p-6 space-y-4 relative group border border-white/5 hover:border-primary/30 transition-all", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    onClick: () => removeContent(sIdx, cIdx),
                    className: "absolute top-4 right-4 p-2 opacity-0 group-hover:opacity-100 rounded-xl bg-red-500/10 text-red-500 hover:bg-red-500/20 transition-all",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "w-3.5 h-3.5" })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-1.5 h-1.5 rounded-full bg-primary shrink-0" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "input",
                      {
                        value: item.subtitle,
                        onChange: (e) => updateContent(sIdx, cIdx, "subtitle", e.target.value),
                        placeholder: "Subtitle (e.g. 1.1 Eligibility)",
                        className: `w-full bg-transparent border-none p-0 text-sm font-bold outline-none text-maintext placeholder:text-subtext/20 ${["General Terms", "Policy Overview", "Introduction", "N/A", ""].includes(item.subtitle) ? "opacity-20 italic font-normal" : ""}`
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "textarea",
                    {
                      value: item.text,
                      onChange: (e) => updateContent(sIdx, cIdx, "text", e.target.value),
                      rows: 3,
                      className: "w-full bg-transparent border-none p-0 text-xs outline-none text-subtext resize-none placeholder:text-subtext/30"
                    }
                  )
                ] })
              ] }, cIdx))
            ] })
          ] }, sIdx))
        ] })
      }
    )
  ] });
};
const KnowledgeBaseTab = () => {
  const { t } = useLanguage();
  const [refreshTrigger, setRefreshTrigger] = reactExports.useState(0);
  const handleUploadSuccess = () => {
    setRefreshTrigger((prev) => prev + 1);
    zt.success(t("uploadSuccessKnowledge"));
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(reactExports.Suspense, { fallback: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-8 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-8 h-8 border-3 border-primary/30 border-t-primary rounded-full animate-spin mx-auto" }) }), children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      SectionCard,
      {
        title: t("ingestNewKnowledge"),
        action: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-subtext font-medium", children: t("addFilesWebsitesRAG") }),
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(KnowledgeUpload, { onUploadSuccess: handleUploadSuccess })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionCard, { title: t("knowledgeAssetsManagement"), children: /* @__PURE__ */ jsxRuntimeExports.jsx(KnowledgeManagement, {}, refreshTrigger) })
  ] }) });
};
const AdminDashboard = () => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = reactExports.useState("overview");
  const navigate = useNavigate();
  const user = getUserData();
  const isAdmin = (user == null ? void 0 : user.token) && ((user == null ? void 0 : user.email) === ADMIN_EMAIL || (user == null ? void 0 : user.role) === "admin");
  reactExports.useEffect(() => {
    if (!isAdmin) {
      navigate("/dashboard/chat", { replace: true });
    }
  }, [isAdmin, navigate]);
  if (!isAdmin) return null;
  const tabs = [
    { id: "overview", label: t("overview"), icon: ChartColumn },
    { id: "users", label: t("users"), icon: Users },
    { id: "plans", label: t("plans"), icon: CreditCard },
    { id: "tool-limit", label: t("toolLimit") || "Tool Limit", icon: Shield },
    { id: "legal", label: t("legalPages"), icon: FileText },
    { id: "helpdesk", label: t("helpDesk"), icon: Headphones },
    { id: "knowledge", label: t("knowledge"), icon: BookOpen },
    { id: "settings", label: t("settings"), icon: Settings }
  ];
  const renderTab = () => {
    switch (activeTab) {
      case "overview":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(OverviewTab, {});
      case "users":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(UsersTab, {});
      case "plans":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(PlansTab, {});
      case "tool-limit":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(ToolLimitTab, {});
      case "legal":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(LegalPagesTab, {});
      case "helpdesk":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(AdminHelpDesk, { isOpen: true, isEmbedded: true });
      case "knowledge":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(KnowledgeBaseTab, {});
      case "settings":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(SettingsTab, {});
      default:
        return /* @__PURE__ */ jsxRuntimeExports.jsx(OverviewTab, {});
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-full overflow-y-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between flex-wrap gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 rounded-2xl bg-white/5 backdrop-blur-xl flex items-center justify-center shadow-lg border border-white/10 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: logo, alt: "AISA", className: "w-9 h-9 object-contain" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-black text-maintext tracking-tight", children: t("adminDashboard") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-subtext font-semibold uppercase tracking-wider", children: t("platformManagementConsole") })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          onClick: () => navigate("/dashboard/chat"),
          className: "flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold text-subtext hover:text-maintext hover:bg-white/20 dark:hover:bg-white/10 transition-all border border-white/20 dark:border-white/10",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "w-4 h-4" }),
            " ",
            t("backToChat")
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2 overflow-x-auto pb-2 admin-horizontal-scrollbar", children: tabs.map((tab) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      TabButton,
      {
        active: activeTab === tab.id,
        icon: tab.icon,
        label: tab.label,
        onClick: () => setActiveTab(tab.id)
      },
      tab.id
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0, y: 10 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -10 },
        transition: { duration: 0.2 },
        children: renderTab()
      },
      activeTab
    ) })
  ] }) });
};
export {
  AdminDashboard as default
};
