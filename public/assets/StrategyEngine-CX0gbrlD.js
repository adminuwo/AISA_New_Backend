import { r as reactExports, bV as useOutputLanguage, bW as mapCaseToForm, z as zt, j as jsxRuntimeExports, bX as ChevronLeft, c2 as History, b$ as Folder, t as Scale, bN as Gavel, af as TrendingUp, l as Shield, u as Eye, bU as Landmark, bM as Briefcase, F as FileText, c0 as CircleCheck, c4 as LanguageToggle, bZ as Share2, ca as Mic, c6 as FileDown, T as Trash2, X, v as Search, c7 as consumePrefillIntent, c8 as generateChatResponse, q as getUserData, a as apiService } from "./index-CifJr-sK.js";
import { P as Printer } from "./printer-ZcOkpCIc.js";
const allTools = [
  { id: "Bail", name: "Bail Strategy", desc: "Pre-arrest roadmap & stay", category: "Criminal" },
  { id: "Criminal", name: "Criminal Defense", desc: "Theft & investigation plans", category: "Criminal" },
  { id: "Civil", name: "Civil Litigation", desc: "Damages & contract breach", category: "Civil" },
  { id: "Cyber", name: "Cyber Crime Plan", desc: "Digital theft & forensics logs", category: "Cyber" },
  { id: "AnticipatoryBail", name: "Anticipatory Bail", desc: "Preventive arrest & warrants", category: "Criminal" },
  { id: "FIRResponse", name: "FIR Response", desc: "Quashing petitions & counter", category: "Criminal" },
  { id: "EvidencePlanning", name: "Evidence Planning", desc: "Municipal & land deed records", category: "Civil" },
  { id: "AppealStrategy", name: "Appeal Strategy", desc: "High Court & judicial errors", category: "Civil" },
  { id: "CrossExamination", name: "Cross Examination", desc: "Witness questioning strategies", category: "Trial" },
  { id: "WitnessPreparation", name: "Witness Preparation", desc: "Testimony guidelines & chief", category: "Trial" },
  { id: "SettlementStrategy", name: "Settlement Plan", desc: "Mediation & trade settlement", category: "Corporate" }
];
const StrategyEngine = ({ currentCase, onBack, theme, allProjects = [], onUpdateCase }) => {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _A, _B, _C, _D, _E, _F, _G, _H, _I, _J;
  const isDark = theme === "dark";
  const [caseTitle, setCaseTitle] = reactExports.useState("");
  const [caseFacts, setCaseFacts] = reactExports.useState("");
  const [linkedCaseId, setLinkedCaseId] = reactExports.useState((currentCase == null ? void 0 : currentCase._id) || "");
  const [isSyncing, setIsSyncing] = reactExports.useState(false);
  const [useActiveCase, setUseActiveCase] = reactExports.useState(false);
  const [isAuditing, setIsAuditing] = reactExports.useState(false);
  const [auditStep, setAuditStep] = reactExports.useState("");
  const [strategyResult, setStrategyResult] = reactExports.useState(null);
  const [activeTab, setActiveTab] = reactExports.useState("overview");
  const [historyVisible, setHistoryVisible] = reactExports.useState(false);
  const [historySearch, setHistorySearch] = reactExports.useState("");
  const [isSpeaking, setIsSpeaking] = reactExports.useState(false);
  const [auditLogs, setAuditLogs] = reactExports.useState([]);
  const [tasks, setTasks] = reactExports.useState([]);
  const [newTaskText, setNewTaskText] = reactExports.useState("");
  reactExports.useRef(null);
  const isMountedRef = reactExports.useRef(true);
  const {
    outputLang,
    setOutputLang,
    isTranslating: isStrategyTranslating,
    setIsTranslating: setIsStrategyTranslating,
    translateText: translateStrategyText,
    getDisplayText: getStrategyDisplayText
  } = useOutputLanguage("strategy_engine", (currentCase == null ? void 0 : currentCase._id) || "global");
  const [strategyDisplayTexts, setStrategyDisplayTexts] = reactExports.useState({});
  reactExports.useEffect(() => {
    isMountedRef.current = true;
    return () => {
      isMountedRef.current = false;
    };
  }, []);
  const buildSummaryText = reactExports.useCallback((result) => {
    var _a2, _b2, _c2, _d2, _e2;
    if (!result) return "";
    const strats = result.strategies || {};
    return [
      `PRIMARY: ${((_a2 = strats.primary) == null ? void 0 : _a2.description) || ""}`,
      `ALTERNATIVE: ${((_b2 = strats.alternative) == null ? void 0 : _b2.description) || ""}`,
      `BACKUP: ${((_c2 = strats.backup) == null ? void 0 : _c2.description) || ""}`,
      `EMERGENCY: ${((_d2 = strats.emergency) == null ? void 0 : _d2.description) || ""}`,
      `OPINION: ${((_e2 = result.finalOpinion) == null ? void 0 : _e2.reasoning) || ""}`
    ].join("\n\n");
  }, []);
  const parseTranslatedSummary = (translated, original) => {
    const lines = translated.split(/\n\n/);
    const keys = ["primary", "alternative", "backup", "emergency", "opinion"];
    const result = {};
    keys.forEach((key, i) => {
      const line = lines[i] || "";
      const colonIdx = line.indexOf(":");
      result[key] = colonIdx !== -1 ? line.slice(colonIdx + 1).trim() : line.trim() || original[key] || "";
    });
    return result;
  };
  const handleStrategyLangChange = reactExports.useCallback(async (newLang) => {
    var _a2, _b2, _c2, _d2, _e2, _f2, _g2, _h2, _i2, _j2, _k2, _l2, _m2, _n2, _o2, _p2, _q2, _r2;
    setOutputLang(newLang);
    if (!strategyResult) return;
    if (newLang === "en") {
      setStrategyDisplayTexts({});
      return;
    }
    const summary = buildSummaryText(strategyResult);
    const cached = getStrategyDisplayText(summary);
    if (cached && cached !== summary) {
      const originalTexts = {
        primary: ((_b2 = (_a2 = strategyResult.strategies) == null ? void 0 : _a2.primary) == null ? void 0 : _b2.description) || "",
        alternative: ((_d2 = (_c2 = strategyResult.strategies) == null ? void 0 : _c2.alternative) == null ? void 0 : _d2.description) || "",
        backup: ((_f2 = (_e2 = strategyResult.strategies) == null ? void 0 : _e2.backup) == null ? void 0 : _f2.description) || "",
        emergency: ((_h2 = (_g2 = strategyResult.strategies) == null ? void 0 : _g2.emergency) == null ? void 0 : _h2.description) || "",
        opinion: ((_i2 = strategyResult.finalOpinion) == null ? void 0 : _i2.reasoning) || ""
      };
      setStrategyDisplayTexts(parseTranslatedSummary(cached, originalTexts));
      return;
    }
    setIsStrategyTranslating(true);
    try {
      const translated = await translateStrategyText(summary);
      if (!isMountedRef.current) return;
      const originalTexts = {
        primary: ((_k2 = (_j2 = strategyResult.strategies) == null ? void 0 : _j2.primary) == null ? void 0 : _k2.description) || "",
        alternative: ((_m2 = (_l2 = strategyResult.strategies) == null ? void 0 : _l2.alternative) == null ? void 0 : _m2.description) || "",
        backup: ((_o2 = (_n2 = strategyResult.strategies) == null ? void 0 : _n2.backup) == null ? void 0 : _o2.description) || "",
        emergency: ((_q2 = (_p2 = strategyResult.strategies) == null ? void 0 : _p2.emergency) == null ? void 0 : _q2.description) || "",
        opinion: ((_r2 = strategyResult.finalOpinion) == null ? void 0 : _r2.reasoning) || ""
      };
      setStrategyDisplayTexts(parseTranslatedSummary(translated, originalTexts));
    } catch {
    } finally {
      if (isMountedRef.current) setIsStrategyTranslating(false);
    }
  }, [strategyResult, buildSummaryText, getStrategyDisplayText, setOutputLang, setIsStrategyTranslating, translateStrategyText]);
  const sText = reactExports.useCallback((key, fallback) => {
    if (outputLang === "en" || !strategyDisplayTexts[key]) return fallback;
    return strategyDisplayTexts[key];
  }, [outputLang, strategyDisplayTexts]);
  reactExports.useEffect(() => {
    if (strategyResult) {
      setStrategyDisplayTexts({});
      setOutputLang("en");
    }
  }, [strategyResult]);
  reactExports.useEffect(() => {
    if (currentCase) {
      setLinkedCaseId(currentCase._id);
      hydrateFromCase(currentCase);
    } else {
      resetPlatformState();
    }
  }, [currentCase]);
  reactExports.useEffect(() => {
    var _a2, _b2;
    const intent = consumePrefillIntent("legal_strategy_engine");
    if (intent == null ? void 0 : intent.caseData) {
      mapCaseToForm(intent.caseData);
      const caseId = ((_a2 = intent.caseData) == null ? void 0 : _a2._id) || ((_b2 = intent.caseData) == null ? void 0 : _b2.id);
      if (caseId) {
        setLinkedCaseId(caseId);
        hydrateFromCase(intent.caseData);
      }
      setUseActiveCase(true);
      autoLoadCaseDetails(intent.caseData);
      zt.success(`✓ Case workspace prefilled successfully`, { icon: "🏛️" });
    }
  }, []);
  const resetPlatformState = () => {
    setCaseTitle("");
    setCaseFacts("");
    setStrategyResult(null);
    setAuditLogs([]);
    setTasks([]);
  };
  const hydrateFromCase = (caseObj) => {
    if (!caseObj) return;
    const ls = caseObj.litigationStrategy;
    if (ls) {
      setCaseTitle(ls.caseTitle || caseObj.name || "");
      setCaseFacts(ls.caseFacts || caseObj.description || "");
      setStrategyResult(ls.activeStrategy || null);
      setTasks(ls.tasks || []);
      setAuditLogs(ls.auditLogs || []);
    } else {
      resetPlatformState();
      setCaseTitle(caseObj.name || "");
      setCaseFacts(caseObj.description || "");
    }
  };
  const autoLoadCaseDetails = (targetCase) => {
    const activeObj = targetCase || currentCase || allProjects.find((p) => p._id === linkedCaseId);
    if (!activeObj) return;
    const mapped = mapCaseToForm(activeObj);
    const title = activeObj.name || activeObj.title || "";
    const assembledFacts = [
      `Court: ${mapped.courtName || "District/High Court"}`,
      `Client Name (Party 1): ${mapped.petitioner || "N/A"}`,
      `Opposing Party (Opponent): ${mapped.respondent || "N/A"}`,
      `Case Category: ${mapped.caseType || "Litigation"}`,
      `Case Number: ${mapped.caseNumber || "N/A"}`,
      `Witnesses Matrix: ${mapped.evidenceSummary || "N/A"}`,
      `Case Summary facts:
${mapped.caseFacts || ""}`
    ].filter(Boolean).join("\n");
    setCaseTitle(title);
    setCaseFacts(assembledFacts);
  };
  const handleUseActiveCaseToggle = (checked) => {
    setUseActiveCase(checked);
    if (checked) {
      autoLoadCaseDetails();
    } else {
      resetPlatformState();
      if (currentCase) {
        setCaseTitle(currentCase.name || "");
        setCaseFacts(currentCase.description || "");
      }
    }
  };
  const ensureCaseCreated = async () => {
    let activeId = linkedCaseId || (currentCase == null ? void 0 : currentCase._id);
    let activeProj = currentCase || allProjects.find((p) => p._id === activeId);
    if (!activeId) {
      setIsSyncing(true);
      const title = `Litigation Strategy: ${caseTitle || "Custom Courtroom Matter"}`;
      try {
        const newProj = await apiService.createProject({
          name: title,
          isLegalCase: true,
          description: `Automatically created for litigation strategy of ${caseTitle || "matter"}.`
        });
        activeId = newProj._id;
        activeProj = newProj;
        setLinkedCaseId(activeId);
        if (onUpdateCase) onUpdateCase(newProj);
        zt.success(`📁 Database Case created: "${title}"`);
      } catch (e) {
        console.error("Auto-create case failed", e);
      } finally {
        setIsSyncing(false);
      }
    }
    return { activeId, activeProj };
  };
  const syncToDatabase = async (updates) => {
    const activeId = linkedCaseId || (currentCase == null ? void 0 : currentCase._id);
    if (!activeId) return;
    setIsSyncing(true);
    try {
      const activeProj = allProjects.find((p) => p._id === activeId) || currentCase;
      const currentLs = (activeProj == null ? void 0 : activeProj.litigationStrategy) || {};
      const payload = {
        ...activeProj,
        litigationStrategy: {
          ...currentLs,
          caseTitle,
          caseFacts,
          activeStrategy: strategyResult,
          tasks,
          auditLogs,
          ...updates
        }
      };
      const response = await apiService.updateProject(activeId, payload);
      if (onUpdateCase) onUpdateCase(response);
    } catch (e) {
      console.error("Database sync failed", e);
    } finally {
      setIsSyncing(false);
    }
  };
  const logAudit = async (action, details, customLogsList = null) => {
    var _a2, _b2;
    const timestamp = (/* @__PURE__ */ new Date()).toISOString();
    const userEmail = ((_a2 = getUserData()) == null ? void 0 : _a2.email) || "System User";
    const userName = ((_b2 = getUserData()) == null ? void 0 : _b2.name) || "Advocate";
    const newLog = {
      timestamp,
      action,
      details,
      editedBy: `${userName} (${userEmail})`
    };
    const targetList = customLogsList || auditLogs;
    const updatedLogs = [...targetList, newLog];
    setAuditLogs(updatedLogs);
    await syncToDatabase({ auditLogs: updatedLogs });
  };
  const handleAddTask = async () => {
    if (!newTaskText.trim()) return;
    const newTask = {
      id: `task_${Date.now()}`,
      task: newTaskText.trim(),
      completed: false
    };
    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);
    setNewTaskText("");
    await syncToDatabase({ tasks: updatedTasks });
    await logAudit("Task Appended", `Added procedural strategy task: "${newTask.task}"`);
    zt.success("Task appended to checklist.");
  };
  const handleToggleTask = async (taskId) => {
    const updatedTasks = tasks.map((t) => t.id === taskId ? { ...t, completed: !t.completed } : t);
    setTasks(updatedTasks);
    await syncToDatabase({ tasks: updatedTasks });
    const target = tasks.find((t) => t.id === taskId);
    await logAudit("Task Toggled", `Marked task "${target.task}" as ${!target.completed ? "COMPLETED" : "PENDING"}`);
  };
  const handleDeleteTask = async (taskId) => {
    const target = tasks.find((t) => t.id === taskId);
    const updatedTasks = tasks.filter((t) => t.id !== taskId);
    setTasks(updatedTasks);
    await syncToDatabase({ tasks: updatedTasks });
    await logAudit("Task Deleted", `Removed task: "${target.task}"`);
  };
  const readinessMetrics = reactExports.useMemo(() => {
    if (strategyResult && strategyResult.readiness) {
      const base = strategyResult.readiness;
      const totalTasks = tasks.length;
      const completedTasks = tasks.filter((t) => t.completed).length;
      const taskPercentage = totalTasks > 0 ? Math.round(completedTasks * 100 / totalTasks) : 100;
      const overall = Math.round((base.evidence + base.witness + base.documentation + base.argument + taskPercentage) / 5);
      return {
        ...base,
        taskPercentage,
        overall
      };
    }
    return {
      evidence: "--",
      witness: "--",
      documentation: "--",
      argument: "--",
      taskPercentage: "--",
      overall: "--"
    };
  }, [strategyResult, tasks]);
  const runLitigationSimulation = async () => {
    var _a2, _b2, _c2, _d2;
    if (!caseFacts.trim()) {
      zt.error("Please provide case facts or load templates first.");
      return;
    }
    const { activeId } = await ensureCaseCreated();
    setIsAuditing(true);
    setStrategyResult(null);
    setAuditStep("Contextualizing case facts...");
    const toastId = zt.loading("AI War Room calculating legal exposure & roadmap...");
    try {
      const systemPrompt = `You are a professional courtroom litigation attorney and judicial strategy architect.
Analyze the provided legal matter facts. Output your complete strategy assessment as a single valid JSON object.
Do NOT write conversational text outside the "json" code block. Double quote keys.

JSON Schema:
{
  "stats": {
    "overallStrategyScore": <Integer 0-100>,
    "winningProbability": <Integer 0-100>,
    "litigationRisk": <Integer 0-100>,
    "evidenceStrength": <Integer 0-100>,
    "precedentSupport": <Integer 0-100>,
    "aiConfidence": <Integer 0-100>,
    "courtReadiness": <Integer 0-100>,
    "missingEvidenceCount": <Integer>,
    "missingDocumentsCount": <Integer>,
    "settlementProbability": <Integer 0-100>,
    "appealRisk": <Integer 0-100>,
    "opponentRiskLevel": "<Low | Medium | High>"
  },
  "strategies": {
    "primary": { "title": "Primary Legal Strategy", "description": "Courtroom arguments focus on this central claim." },
    "alternative": { "title": "Alternative Legal Strategy", "description": "Secondary line of defense if primary is challenged." },
    "backup": { "title": "Backup Safety Strategy", "description": "Procedural actions to execute." },
    "emergency": { "title": "Emergency Escalation Strategy", "description": "Filing stays or appeals immediately." }
  },
  "winningRoadmap": [
    { "stage": "Investigation", "status": "Completed", "description": "Forensic timeline of events compiled." },
    { "stage": "Evidence Collection", "status": "In Progress", "description": "Staging municipal records and deeds." },
    { "stage": "Notice", "status": "Staged", "description": "Send legal demand notice to opposite party." },
    { "stage": "Filing", "status": "Staged", "description": "File main suit/petition in registry." },
    { "stage": "Interim Relief", "status": "Staged", "description": "File injunction or temporary stay petition." },
    { "stage": "Witness Examination", "status": "Staged", "description": "Chief examination of primary client." },
    { "stage": "Cross Examination", "status": "Staged", "description": "Expose hostile contradictions." },
    { "stage": "Final Arguments", "status": "Staged", "description": "Synthesize case law precedents." },
    { "stage": "Judgment", "status": "Staged", "description": "Wait for decree or judicial order." },
    { "stage": "Appeal", "status": "Staged", "description": "Prepare grounds of appeal if required." }
  ],
  "evidenceStrategy": {
    "strong": [{ "evidence": "Primary proof name", "reason": "Why it is legally binding" }],
    "weak": [{ "evidence": "Corroborative proof", "reason": "Why it lacks direct force" }],
    "missing": [{ "evidence": "Missing record", "reason": "Need to request immediately" }],
    "priority": [{ "evidence": "High priority record", "reason": "Should secure first" }],
    "sequence": ["Evidence Step 1", "Evidence Step 2"]
  },
  "witnessStrategy": {
    "key": [{ "witness": "Key witness role", "purpose": "Explain facts of event" }],
    "optional": [{ "witness": "Optional character witness", "purpose": "Support credibility" }],
    "weak": [{ "witness": "Vulnerable witness", "purpose": "Susceptible to timelines" }],
    "crossExamination": [
      { "topic": "Credibility challenge", "questions": ["Question 1?"], "followUps": ["Follow-up?"], "traps": ["Trap question?"] }
    ]
  },
  "opponentStrategy": {
    "likelyDefence": "Summary of likely opposition defense tactics",
    "likelyObjections": ["Objection 1", "Objection 2"],
    "counterArguments": ["Counter 1", "Counter 2"],
    "appealPossibility": "High probability of appeal to higher court",
    "delayStrategy": "Likely to seek frequent adjournments using procedural rules"
  },
  "counterStrategy": [
    { "opponentArgument": "Opponent claim", "counterResponse": "Your rebuttal", "evidenceRequired": "Proof to rebut", "applicableLaw": "BSA or CPC rule", "recommendedAction": "Action to take" }
  ],
  "judgePerspective": {
    "likelyQuestions": ["Judicial question 1?"],
    "courtConcerns": ["Concern 1", "Concern 2"],
    "weakAreas": ["Weak link in case"],
    "legalObservations": ["Relevant judicial observations"],
    "expectedFocusAreas": ["Primary focus points"]
  },
  "precedents": [
    { "citation": "Supreme Court Citation", "court": "Supreme Court of India", "summary": "Core legal principle settled", "similarityScore": 95, "type": "Binding Precedent" }
  ],
  "laws": [
    { "section": "Section code", "act": "BSA / BNS / CPC / IT Act", "applicability": "Applicability details" }
  ],
  "timeline": [
    { "phase": "Notice Stage", "duration": "15 Days", "description": "Drafting and dispatching legal notice." }
  ],
  "risks": {
    "legal": 20,
    "evidence": 30,
    "procedural": 10,
    "financial": 40,
    "strategic": 15,
    "riskPercentage": 25
  },
  "settlement": {
    "settlementChance": 50,
    "negotiationStrategy": "Mediation approach details",
    "mediationPossibility": "High mediation suitability",
    "arbitrationSuitability": "Arbitration clauses valid"
  },
  "negotiationPositions": {
    "opening": "Opening negotiation demands",
    "middle": "Realistic middle ground demands",
    "final": "Bottom line target",
    "fallback": "Litigation recovery fallback"
  },
  "crossExamPlanner": [
    { "witness": "Witness name", "mainQuestions": ["Q1"], "followUps": ["F1"], "contradictionQuestions": ["C1"], "credibilityQuestions": ["CR1"], "closingQuestions": ["CL1"] }
  ],
  "finalArguments": {
    "opening": "Opening statement outlines",
    "arguments": ["Legal argument 1"],
    "evidenceRefs": ["Evidence reference code"],
    "laws": ["Statutory section"],
    "precedents": ["Precedents citation"],
    "prayer": "prayer request to court",
    "submission": "Final submission request"
  },
  "appealStrategy": {
    "grounds": ["Ground 1", "Ground 2"],
    "timeline": "30 days from decree copy",
    "additionalEvidence": ["Additional documents needed"],
    "higherCourtStrategy": "High Court approach"
  },
  "readiness": {
    "evidence": 80,
    "witness": 70,
    "documentation": 75,
    "argument": 85,
    "overall": 77
  },
  "pendingTasks": [
    { "task": "Collect registry petition copy", "completed": false },
    { "task": "File vakalatnama and memo", "completed": false }
  ],
  "aiRecommendations": {
    "doFirst": ["Action 1"],
    "doNext": ["Action 2"],
    "avoid": ["Action to avoid"],
    "criticalIssues": ["Critical issue identified"],
    "priorityImprovements": ["Priority improvement needed"]
  }
}`;
      setAuditStep("Precedents database search...");
      const response = await generateChatResponse(
        [],
        `Matter Title: ${caseTitle || "Custom Courtroom Strategy"}

Case Facts Scenario:
${caseFacts}`,
        systemPrompt,
        [],
        "English",
        null,
        "legal"
      );
      const responseText = response.reply || response || "";
      let parsed = null;
      try {
        const jsonMatch = responseText.match(/```json\s*([\s\S]*?)\s*```/) || responseText.match(/(\{[\s\S]*\})/);
        if (jsonMatch) {
          parsed = JSON.parse(jsonMatch[1] || jsonMatch[0]);
        } else {
          parsed = JSON.parse(responseText.trim());
        }
      } catch (err) {
        console.error("JSON parsing failed, fallback used", err);
      }
      if (!parsed || !parsed.stats) {
        throw new Error("Unable to parse structured litigation strategy metrics.");
      }
      setStrategyResult(parsed);
      if (((_a2 = parsed.pendingTasks) == null ? void 0 : _a2.length) > 0) {
        const newTasks = parsed.pendingTasks.map((t, idx) => ({
          id: `task_${Date.now()}_${idx}`,
          task: t.task,
          completed: false
        }));
        setTasks(newTasks);
        await syncToDatabase({
          activeStrategy: parsed,
          tasks: newTasks
        });
      } else {
        await syncToDatabase({
          activeStrategy: parsed
        });
      }
      zt.success("AI litigation strategy compiled!", { id: toastId });
      const timestamp = (/* @__PURE__ */ new Date()).toISOString();
      const userEmail = ((_b2 = getUserData()) == null ? void 0 : _b2.email) || "System User";
      const userName = ((_c2 = getUserData()) == null ? void 0 : _c2.name) || "Advocate";
      const newLog = {
        timestamp,
        action: "AI Litigation Strategy Simulated",
        details: `Simulated legal exposure. Winning Probability: ${parsed.stats.winningProbability}%. Risk Rating: ${parsed.stats.opponentRiskLevel}. Court Readiness: ${parsed.stats.courtReadiness}%. Mapped ${((_d2 = parsed.precedents) == null ? void 0 : _d2.length) || 0} precedents.`,
        editedBy: `${userName} (${userEmail})`
      };
      const updatedLogs = [...auditLogs, newLog];
      setAuditLogs(updatedLogs);
      await syncToDatabase({ auditLogs: updatedLogs });
    } catch (e) {
      console.error(e);
      zt.error("Failed to compile litigation strategy.", { id: toastId });
    } finally {
      setIsAuditing(false);
      setAuditStep("");
    }
  };
  const handleShareReport = async () => {
    var _a2, _b2;
    if (!strategyResult) return;
    const shareText = `AISA Litigation Strategy for ${caseTitle}. Winning Prob: ${(_a2 = strategyResult.stats) == null ? void 0 : _a2.winningProbability}%. Risk: ${(_b2 = strategyResult.stats) == null ? void 0 : _b2.opponentRiskLevel}.`;
    if (navigator.share) {
      try {
        await navigator.share({ title: `Strategy Report: ${caseTitle}`, text: shareText });
        logAudit("Shared Strategy Report", "Shared strategy metadata report.");
      } catch (e) {
        console.log(e);
      }
    } else {
      navigator.clipboard.writeText(shareText);
      zt.success("Summary copied!");
    }
  };
  const handleSpeechSummary = () => {
    var _a2, _b2, _c2, _d2, _e2;
    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    } else if (strategyResult) {
      const text = `Litigation Strategy Summary for ${caseTitle}. Winning probability is ${(_a2 = strategyResult.stats) == null ? void 0 : _a2.winningProbability} percent. Court readiness is ${(_b2 = strategyResult.stats) == null ? void 0 : _b2.courtReadiness} percent. Litigation risk is ${(_c2 = strategyResult.stats) == null ? void 0 : _c2.litigationRisk} percent. Primary Strategy: ${(_e2 = (_d2 = strategyResult.strategies) == null ? void 0 : _d2.primary) == null ? void 0 : _e2.description}`;
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.onend = () => setIsSpeaking(false);
      utterance.onerror = () => setIsSpeaking(false);
      window.speechSynthesis.speak(utterance);
      setIsSpeaking(true);
    }
  };
  const handlePrintPDF = () => {
    var _a2, _b2, _c2, _d2, _e2, _f2, _g2, _h2, _i2, _j2, _k2, _l2, _m2, _n2, _o2, _p2, _q2, _r2, _s2, _t2, _u2;
    if (!strategyResult) return;
    const printWindow = window.open("", "_blank");
    if (!printWindow) {
      zt.error("Popup blocked! Enable popups to print/export PDF.");
      return;
    }
    const isHi = outputLang === "hi";
    const primaryStr = sText("primary", (_b2 = (_a2 = strategyResult.strategies) == null ? void 0 : _a2.primary) == null ? void 0 : _b2.description);
    const alternativeStr = sText("alternative", (_d2 = (_c2 = strategyResult.strategies) == null ? void 0 : _c2.alternative) == null ? void 0 : _d2.description);
    const backupStr = sText("backup", (_f2 = (_e2 = strategyResult.strategies) == null ? void 0 : _e2.backup) == null ? void 0 : _f2.description);
    const emergencyStr = sText("emergency", (_h2 = (_g2 = strategyResult.strategies) == null ? void 0 : _g2.emergency) == null ? void 0 : _h2.description);
    const opinionStr = sText("opinion", (_i2 = strategyResult.finalOpinion) == null ? void 0 : _i2.reasoning);
    const html = `
      <html>
      <head>
        <meta charset="UTF-8"/>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,400;0,700;1,400&family=Noto+Sans+Devanagari:wght@400;700&display=swap" rel="stylesheet"/>
        <title>${isHi ? "AISA मुकदमा रणनीति रिपोर्ट" : "AISA Litigation Strategy Report"} - ${caseTitle}</title>
        <style>
          body { font-family: 'Noto Sans Devanagari', 'Noto Sans', Arial, sans-serif; padding: 45px; line-height: 1.8; color: #0f172a; }
          .header { text-align: center; border-bottom: 2px solid #4f46e5; padding-bottom: 15px; margin-bottom: 30px; }
          .title { text-transform: uppercase; font-size: 18pt; font-weight: bold; color: #4f46e5; margin: 0; }
          .meta-section { margin-bottom: 25px; background: #f8fafc; padding: 15px; border-radius: 8px; border: 1px solid #e2e8f0; }
          .meta-grid { display: grid; grid-template-cols: 1fr 1fr; gap: 15px; font-size: 11pt; }
          .section-title { font-size: 14pt; font-weight: bold; border-bottom: 1px solid #cbd5e1; padding-bottom: 5px; color: #1e1b4b; margin-top: 30px; margin-bottom: 10px; }
          table { width: 100%; border-collapse: collapse; margin-top: 10px; font-size: 10.5pt; }
          th, td { border: 1px solid #cbd5e1; padding: 10px; text-align: left; }
          th { background-color: #f1f5f9; font-weight: bold; }
          .footer { margin-top: 60px; border-top: 1px solid #e2e8f0; font-size: 9pt; text-align: center; padding-top: 15px; color: #64748b; }
        </style>
      </head>
      <body>
        <div class="header">
          <div style="font-size: 9pt; font-weight: bold; letter-spacing: 2px; color: #4f46e5; margin-bottom: 5px;">${isHi ? "AISA उद्यम मुकदमेबाजी रणनीति" : "AISA ENTERPRISE LITIGATION STRATEGY"}</div>
          <h1 class="title">${isHi ? "एआई कोर्टरूम रणनीति और प्रकटीकरण रिपोर्ट" : "AI Courtroom Strategy & Exposure Report"}</h1>
          <div style="margin-top: 5px; font-size: 11pt;">${isHi ? "विषय" : "Matter"}: <strong>${caseTitle}</strong></div>
        </div>

        <div class="meta-section">
          <div class="meta-grid">
            <div>
              <p><strong>${isHi ? "जीतने की संभावना" : "Winning Probability"}:</strong> ${(_j2 = strategyResult.stats) == null ? void 0 : _j2.winningProbability}%</p>
              <p><strong>${isHi ? "मुकदमेबाजी जोखिम स्कोर" : "Litigation Risk Score"}:</strong> ${(_k2 = strategyResult.stats) == null ? void 0 : _k2.litigationRisk}%</p>
              <p><strong>${isHi ? "नजीर समर्थन" : "Precedent Support"}:</strong> ${(_l2 = strategyResult.stats) == null ? void 0 : _l2.precedentSupport}%</p>
            </div>
            <div>
              <p><strong>${isHi ? "न्यायालय तत्परता रेटिंग" : "Court Readiness Rating"}:</strong> ${(_m2 = strategyResult.stats) == null ? void 0 : _m2.courtReadiness}%</p>
              <p><strong>${isHi ? "एआई विश्वास दर" : "AI Confidence Rate"}:</strong> ${(_n2 = strategyResult.stats) == null ? void 0 : _n2.aiConfidence}%</p>
              <p><strong>${isHi ? "विपक्ष जोखिम स्थिति" : "Opponent Risk Status"}:</strong> ${(_o2 = strategyResult.stats) == null ? void 0 : _o2.opponentRiskLevel}</p>
            </div>
          </div>
        </div>

        <div class="section-title">${isHi ? "1. मुकदमेबाजी रणनीतियों की रूपरेखा" : "1. Litigation Strategies Outline"}</div>
        <p><strong>${isHi ? "प्राथमिक रणनीति" : "Primary strategy"}:</strong> ${primaryStr}</p>
        <p><strong>${isHi ? "वैकल्पिक रणनीति" : "Alternative strategy"}:</strong> ${alternativeStr}</p>
        <p><strong>${isHi ? "बैकअप रणनीति" : "Backup Strategy"}:</strong> ${backupStr}</p>
        <p><strong>${isHi ? "आपातकालीन रणनीति" : "Emergency Strategy"}:</strong> ${emergencyStr}</p>
        <p><strong>${isHi ? "अंतिम कानूनी राय" : "Final Legal Opinion"}:</strong> ${opinionStr}</p>

        <div class="section-title">${isHi ? "2. जीतने की समयसीमा रोडमैप" : "2. Winning Roadmap timeline"}</div>
        <ul>
          ${((_p2 = strategyResult.winningRoadmap) == null ? void 0 : _p2.map((t) => `
            <li style="margin-bottom: 8px;"><strong>${t.stage}:</strong> ${t.description} (Status: ${t.status})</li>
          `).join("")) || "<li>None</li>"}
        </ul>

        <div class="section-title">${isHi ? "3. स्वीकार्य साक्ष्य रणनीति" : "3. Admissible Evidence Strategy"}</div>
        <p><strong>${isHi ? "सबसे मजबूत साक्ष्य" : "Strongest Evidence"}:</strong></p>
        <ul>${((_r2 = (_q2 = strategyResult.evidenceStrategy) == null ? void 0 : _q2.strong) == null ? void 0 : _r2.map((e) => `<li>${e.evidence}: ${e.reason}</li>`).join("")) || "<li>None</li>"}</ul>
        <p><strong>${isHi ? "लापता मुख्य साक्ष्य" : "Missing Key Evidence"}:</strong></p>
        <ul>${((_t2 = (_s2 = strategyResult.evidenceStrategy) == null ? void 0 : _s2.missing) == null ? void 0 : _t2.map((e) => `<li>${e.evidence}: ${e.reason}</li>`).join("")) || "<li>None</li>"}</ul>

        <div class="section-title">${isHi ? "4. न्यायिक मिसालें और उद्धरण" : "4. Judicial Precedents & Citations"}</div>
        <ul>
          ${((_u2 = strategyResult.precedents) == null ? void 0 : _u2.map((p) => `
            <li style="margin-bottom: 10px;">
              <strong>${p.citation}</strong> (${p.court}) - Similarity: ${p.similarityScore}%
              <br/><span style="font-size: 10pt; color: #4b5563;">Summary: ${p.summary}</span>
            </li>
          `).join("")) || "<li>None</li>"}
        </ul>

        <div class="footer">
          ${isHi ? `AISA मुकदमेबाजी रणनीति प्लेटफॉर्म द्वारा स्वचालित रूप से उत्पन्न - ${(/* @__PURE__ */ new Date()).toLocaleString()}` : `Generated automatically by AISA Litigation Strategy Platform on ${(/* @__PURE__ */ new Date()).toLocaleString()}`}
          <br/>Authentic case counsel records copy.
        </div>
      </body>
      </html>
    `;
    printWindow.document.write(html);
    printWindow.document.close();
    printWindow.focus();
    setTimeout(() => {
      printWindow.print();
      logAudit("Exported PDF Strategy", "Exported printable litigation strategy PDF report.");
    }, 500);
  };
  const handleExportDoc = () => {
    var _a2, _b2, _c2, _d2, _e2, _f2, _g2, _h2, _i2, _j2, _k2, _l2, _m2, _n2, _o2, _p2, _q2, _r2, _s2, _t2, _u2, _v2, _w2, _x2, _y2, _z2, _A2, _B2, _C2;
    if (!strategyResult) return;
    const isHi = outputLang === "hi";
    const primaryStr = sText("primary", (_b2 = (_a2 = strategyResult.strategies) == null ? void 0 : _a2.primary) == null ? void 0 : _b2.description);
    const alternativeStr = sText("alternative", (_d2 = (_c2 = strategyResult.strategies) == null ? void 0 : _c2.alternative) == null ? void 0 : _d2.description);
    const backupStr = sText("backup", (_f2 = (_e2 = strategyResult.strategies) == null ? void 0 : _e2.backup) == null ? void 0 : _f2.description);
    const emergencyStr = sText("emergency", (_h2 = (_g2 = strategyResult.strategies) == null ? void 0 : _g2.emergency) == null ? void 0 : _h2.description);
    const opinionStr = sText("opinion", (_i2 = strategyResult.finalOpinion) == null ? void 0 : _i2.reasoning);
    const docContent = `
${isHi ? "AISA मुकदमेबाजी रणनीति प्लेटफार्म रिपोर्ट" : "AISA LITIGATION STRATEGY PLATFORM REPORT"}
========================================

${isHi ? "विषय" : "Matter"}: ${caseTitle}
${isHi ? "सिम्युलेटेड दिनांक" : "Simulated Date"}: ${(/* @__PURE__ */ new Date()).toLocaleDateString()}
${isHi ? "जीतने की संभावना" : "Winning Probability"}: ${(_j2 = strategyResult.stats) == null ? void 0 : _j2.winningProbability}%
${isHi ? "मुकदमेबाजी जोखिम स्कोर" : "Litigation Risk Score"}: ${(_k2 = strategyResult.stats) == null ? void 0 : _k2.litigationRisk}%
${isHi ? "नजीर समर्थन" : "Precedent Support"}: ${(_l2 = strategyResult.stats) == null ? void 0 : _l2.precedentSupport}%
${isHi ? "समग्र तत्परता स्कोर" : "Overall Readiness Score"}: ${readinessMetrics.overall}%

${isHi ? "रणनीतिक संक्षिप्त विवरण:" : "STRATEGIC BRIEF:"}
----------------
- ${isHi ? "प्राथमिक बचाव" : "Primary Defense"}: ${primaryStr}
- ${isHi ? "वैकल्पिक बचाव" : "Alternative Defense"}: ${alternativeStr}
- ${isHi ? "बैकअप रणनीति" : "Backup Strategy"}: ${backupStr}
- ${isHi ? "आपातकालीन कार्रवाई" : "Emergency Action"}: ${emergencyStr}
- ${isHi ? "अंतिम राय" : "Final Opinion"}: ${opinionStr}

${isHi ? "न्यायालय मील के पत्थर रोडमैप:" : "COURTROOM MILESTONES ROADMAP:"}
-----------------------------
${(_m2 = strategyResult.winningRoadmap) == null ? void 0 : _m2.map((t, idx) => `${idx + 1}. ${t.stage} [${t.status}]: ${t.description}`).join("\n")}

${isHi ? "साक्ष्य और अभिरक्षा रणनीति:" : "EVIDENCE & CUSTODY STRATEGY:"}
----------------------------
${isHi ? "मजबूत तत्व" : "Strong Elements"}:
${(_o2 = (_n2 = strategyResult.evidenceStrategy) == null ? void 0 : _n2.strong) == null ? void 0 : _o2.map((e) => `* ${e.evidence} - ${e.reason}`).join("\n")}
${isHi ? "लापता तत्व" : "Missing Elements"}:
${(_q2 = (_p2 = strategyResult.evidenceStrategy) == null ? void 0 : _p2.missing) == null ? void 0 : _q2.map((e) => `* ${e.evidence} - ${e.reason}`).join("\n")}
${isHi ? "प्राथमिकता अनुक्रमण" : "Priority sequencing"}:
${(_s2 = (_r2 = strategyResult.evidenceStrategy) == null ? void 0 : _r2.sequence) == null ? void 0 : _s2.map((s, i) => `  Phase ${i + 1}: ${s}`).join("\n")}

${isHi ? "गवाह जिरह की तैयारी:" : "WITNESS CROSS EXAMINATION PREPARATION:"}
-------------------------------------
${isHi ? "मुख्य गवाह" : "Key Witness"}:
${(_u2 = (_t2 = strategyResult.witnessStrategy) == null ? void 0 : _t2.key) == null ? void 0 : _u2.map((w) => `* ${w.witness}: ${w.purpose}`).join("\n")}
${isHi ? "विपक्षी जिरह जाल प्रश्न" : "Hostile Cross Trap Questions"}:
${(_w2 = (_v2 = strategyResult.witnessStrategy) == null ? void 0 : _v2.crossExamination) == null ? void 0 : _w2.map((x) => {
      var _a3, _b3;
      return `
${isHi ? "विषय" : "Topic"}: ${x.topic}
  ${isHi ? "मुख्य" : "Main"}: ${(_a3 = x.questions) == null ? void 0 : _a3.join(", ")}
  ${isHi ? "जाल" : "Traps"}: ${(_b3 = x.traps) == null ? void 0 : _b3.join(", ")}
`;
    }).join("\n")}

${isHi ? "विपक्ष बचाव विश्लेषण:" : "OPPONENT DEFENSE ANALYSIS:"}
--------------------------
- ${isHi ? "अपेक्षित बचाव" : "Expected Defense"}: ${(_x2 = strategyResult.opponentStrategy) == null ? void 0 : _x2.likelyDefence}
- ${isHi ? "प्रत्याशित आपत्तियां" : "Anticipated Objections"}: ${(_z2 = (_y2 = strategyResult.opponentStrategy) == null ? void 0 : _y2.likelyObjections) == null ? void 0 : _z2.join(", ")}
- ${isHi ? "अपेक्षित देरी रणनीति" : "Delay tactics expected"}: ${(_A2 = strategyResult.opponentStrategy) == null ? void 0 : _A2.delayStrategy}

${isHi ? "वैधानिक विधायी इंजन" : "STATUTORY LEGISLATIVE ENGINES (BNS/CPC)"}:
----------------------------------------
${(_B2 = strategyResult.laws) == null ? void 0 : _B2.map((l) => `- Section ${l.section} under ${l.act}: ${l.applicability}`).join("\n")}

${isHi ? "बाध्यकारी न्यायिक उद्धरण" : "BINDING JUDICIAL CITATIONS"}:
---------------------------
${(_C2 = strategyResult.precedents) == null ? void 0 : _C2.map((p) => `- [${p.similarityScore}% matches] ${p.citation} (${p.court}): ${p.summary}`).join("\n")}

${isHi ? "प्रक्रियात्मक कार्य चेकलिस्ट" : "PROCEDURAL TASKS CHECKLIST"}:
---------------------------
${tasks.map((t) => `- [${t.completed ? "x" : " "}] ${t.task}`).join("\n")}

${isHi ? "AISA एआई मुकदमेबाजी रणनीति सूट द्वारा उत्पन्न। गोपनीय रिकॉर्ड।" : "Generated by AISA AI Litigation Strategy Suite. Confidential record."}
`;
    const blob = new Blob([docContent], { type: "application/msword" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `${caseTitle.replace(/\s+/g, "_")}_AISA_Strategy_Report.doc`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    logAudit("Downloaded DOCX Strategy", "Downloaded litigation strategy document brief.");
    zt.success("Word document strategy report downloaded!");
  };
  const handleQuickToolSelect = (toolId, toolName) => {
    let facts = "";
    let title = "";
    if (toolId === "Bail") {
      title = "Bail Application Strategy - Cyber Crime";
      facts = `Filing for Anticipatory Bail in a financial technology embezzlement case. Police are conducting investigation under BNS section 318. Prosecution relies on server logins from the client's home IP address. Client claims shared Wi-Fi networks and arbitrary registration of FIR without prelim audit.`;
    } else if (toolId === "Criminal") {
      title = "Criminal Defense Plan - Possession Claim";
      facts = `Accused of possession of stolen artifacts under property theft rules. CCTV evidence is low-frame rates and does not show face. Accused has clean record, established store, and bought items with transaction receipts.`;
    } else if (toolId === "Civil") {
      title = "Civil Suits Brief - Contract Delay";
      facts = `Recovery suit for contract delays. Plaintiff demands 12L INR liquidated damages. Defendant states delays are caused by direct delays in designs approval and lack of prompt mobilization payments by the Plaintiff.`;
    } else if (toolId === "Cyber") {
      title = "Cyber Forensic Defense Strategy";
      facts = `Server database breach litigation. Opponent alleges security breach from user account. User logs show session tokens were active from overlapping geo-locations (Delhi and Singapore) within 5 minutes.`;
    } else if (toolId === "AnticipatoryBail") {
      title = "Anticipatory Bail - Economic Offence";
      facts = `Apprehension of arrest in relation to bank loan default. Matter under corporate scanner. Ready to surrender passport, provide corporate security bonds, and join local police inquiry.`;
    } else if (toolId === "FIRResponse") {
      title = "FIR Response Brief";
      facts = `FIR filed alleging cheating. Dispute is purely civil regarding business partnership split. No criminal element. Filing petition under section 482 for quashing FIR.`;
    } else if (toolId === "EvidencePlanning") {
      title = "Property Title Evidence Strategy";
      facts = `Title declaration suit. Seeking adverse possession proofs. Overlapping title deeds from 1994. Long-term electricity bills, land revenue taxes, and neighbor testimonies are staged.`;
    } else if (toolId === "AppealStrategy") {
      title = "Appeal - Lower Court Injunction Error";
      facts = `Appeal against lower court order refusing interim stay in property eviction. Trial judge failed to weigh balance of convenience and irreparable injury rules.`;
    } else if (toolId === "CrossExamination") {
      title = "Cross Examination Roadmap - Contract Witness";
      facts = `Cross-examination of opposing project manager. Witness email logs explicitly admit that project requirements were altered unilaterally midway, contradicting deposition facts.`;
    } else if (toolId === "WitnessPreparation") {
      title = "Witness Preparation - Forensic Accountant";
      facts = `Preparing forensic auditor to testify on financial ledger audits. Ready for cross questions regarding auditing methodologies and data sample sizes.`;
    } else if (toolId === "SettlementStrategy") {
      title = "Settlement Brief - Franchise Split";
      facts = `ADR mediation regarding contract breach. Opponent demands 50L INR. Client offers 15L settlement backed by documented revenue losses during lockouts.`;
    }
    setCaseTitle(title);
    setCaseFacts(facts);
    zt.success(`Template loaded: ${title}`);
    performStrategySimulationInternal(title, facts);
  };
  const performStrategySimulationInternal = async (title, factsText) => {
    var _a2, _b2, _c2, _d2;
    setIsAuditing(true);
    setStrategyResult(null);
    setAuditStep("Calculating legal timelines...");
    const toastId = zt.loading("AI War Room compiling litigation report...");
    try {
      const systemPrompt = `You are a professional courtroom litigation attorney and judicial strategy architect.
Analyze the provided legal matter facts. Output your complete strategy assessment as a single valid JSON object.
Do NOT write conversational text outside the "json" code block. Double quote keys. Match the schema.`;
      const response = await generateChatResponse(
        [],
        `Matter Title: ${title}

Case Facts Scenario:
${factsText}`,
        systemPrompt,
        [],
        "English",
        null,
        "legal"
      );
      const responseText = response.reply || response || "";
      let parsed = null;
      try {
        const jsonMatch = responseText.match(/```json\s*([\s\S]*?)\s*```/) || responseText.match(/(\{[\s\S]*\})/);
        if (jsonMatch) {
          parsed = JSON.parse(jsonMatch[1] || jsonMatch[0]);
        } else {
          parsed = JSON.parse(responseText.trim());
        }
      } catch (err) {
        console.error("Simulation parse failed", err);
      }
      if (!parsed) throw new Error("Parse error.");
      setStrategyResult(parsed);
      if (((_a2 = parsed.pendingTasks) == null ? void 0 : _a2.length) > 0) {
        const newTasks = parsed.pendingTasks.map((t, idx) => ({
          id: `task_${Date.now()}_${idx}`,
          task: t.task,
          completed: false
        }));
        setTasks(newTasks);
        await syncToDatabase({ activeStrategy: parsed, tasks: newTasks });
      } else {
        await syncToDatabase({ activeStrategy: parsed });
      }
      zt.success("AI litigation strategy compiled!", { id: toastId });
      const timestamp = (/* @__PURE__ */ new Date()).toISOString();
      const userEmail = ((_b2 = getUserData()) == null ? void 0 : _b2.email) || "System User";
      const userName = ((_c2 = getUserData()) == null ? void 0 : _c2.name) || "Advocate";
      const newLog = {
        timestamp,
        action: "AI Litigation Strategy Simulated",
        details: `Simulated legal exposure. Winning Probability: ${parsed.stats.winningProbability}%. Risk Rating: ${parsed.stats.opponentRiskLevel}. Court Readiness: ${parsed.stats.courtReadiness}%. Mapped ${((_d2 = parsed.precedents) == null ? void 0 : _d2.length) || 0} precedents.`,
        editedBy: `${userName} (${userEmail})`
      };
      const updatedLogs = [...auditLogs, newLog];
      setAuditLogs(updatedLogs);
      await syncToDatabase({ auditLogs: updatedLogs });
    } catch (e) {
      zt.error("Failed to build litigation strategy.", { id: toastId });
    } finally {
      setIsAuditing(false);
      setAuditStep("");
    }
  };
  const stats = reactExports.useMemo(() => {
    if (strategyResult && strategyResult.stats) {
      return strategyResult.stats;
    }
    return {
      overallStrategyScore: "--",
      winningProbability: "--",
      litigationRisk: "--",
      evidenceStrength: "--",
      precedentSupport: "--",
      aiConfidence: "--",
      courtReadiness: "--",
      missingEvidenceCount: "--",
      missingDocumentsCount: "--",
      settlementProbability: "--",
      appealRisk: "--",
      opponentRiskLevel: "--"
    };
  }, [strategyResult]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 flex flex-col w-full h-full min-h-0 bg-slate-50 dark:bg-transparent overflow-hidden select-none", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `flex items-center justify-between px-6 py-4 border-b shrink-0 ${isDark ? "border-slate-800 bg-[#0B1020]/80" : "border-slate-200 bg-white"} backdrop-blur-xl`, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: onBack,
            className: `p-2 rounded-full transition-colors ${isDark ? "hover:bg-zinc-800 text-slate-400" : "hover:bg-slate-100 text-slate-600"}`,
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { size: 20 })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: `text-lg font-black leading-none tracking-tight ${isDark ? "text-white" : "text-slate-900"}`, children: "AI Litigation Strategy Platform" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 mt-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] font-black text-indigo-500 uppercase tracking-widest", children: "COURTROOM LITIGATION WAR ROOM ACTIVE" }),
            isSyncing && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] font-bold text-emerald-500 uppercase tracking-wider animate-pulse ml-2", children: "✓ DB Synced" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          onClick: () => setHistoryVisible(true),
          className: `flex items-center gap-1.5 px-3.5 py-2 border rounded-xl text-xs font-black uppercase tracking-wider transition-colors ${isDark ? "bg-[#1A2540] border-slate-800 text-indigo-400 hover:bg-[#202E50]" : "bg-indigo-50 border-indigo-200/30 text-indigo-600 hover:bg-indigo-100"}`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(History, { size: 14 }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Strategy Archive" })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 flex w-full min-h-0 overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `w-80 flex flex-col border-r shrink-0 overflow-y-auto custom-scrollbar p-5 space-y-5 ${isDark ? "border-slate-800 bg-[#0c1224]" : "border-slate-200 bg-white"}`, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between p-3.5 border rounded-2xl bg-indigo-500/5 border-indigo-500/10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Folder, { size: 16, className: "text-indigo-500 shrink-0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] font-black text-slate-800 dark:text-white uppercase leading-none", children: "Use Active Case" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[8px] text-slate-400 mt-1", children: "Sync case details dossier" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "checkbox",
              checked: useActiveCase,
              onChange: (e) => handleUseActiveCaseToggle(e.target.checked),
              className: "w-4 h-4 text-indigo-600 border-slate-350 rounded focus:ring-indigo-500"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-[9px] font-black uppercase tracking-widest text-slate-400", children: "Matter Name" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "text",
              placeholder: "e.g. Trademark Infringement Suit",
              value: caseTitle,
              onChange: (e) => setCaseTitle(e.target.value),
              className: `w-full border rounded-xl px-3.5 py-2.5 text-xs font-bold outline-none ${isDark ? "bg-black/20 border-zinc-800 text-white" : "bg-slate-50 border-slate-200 text-slate-800"}`,
              disabled: useActiveCase
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-[9px] font-black uppercase tracking-widest text-slate-400", children: "Case Facts Scenario Details" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "textarea",
            {
              rows: 6,
              placeholder: "Describe legal timeline dispute details, evidence, witnesses, previous arguments...",
              value: caseFacts,
              onChange: (e) => setCaseFacts(e.target.value),
              className: `w-full border rounded-xl px-3.5 py-2.5 text-xs font-medium outline-none resize-none ${isDark ? "bg-black/20 border-zinc-800 text-white" : "bg-slate-50 border-slate-200 text-slate-800"}`,
              disabled: useActiveCase
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: runLitigationSimulation,
            disabled: isAuditing,
            className: "w-full py-3.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl font-black text-xs uppercase tracking-wider transition-all shadow-lg shadow-indigo-500/20 disabled:opacity-50",
            children: "Simulate Litigation Strategy"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border border-slate-250 dark:border-slate-800 rounded-2xl p-4 bg-slate-500/5 space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-[9px] font-black tracking-widest text-slate-400 uppercase", children: "LOAD TEMPLATE SCENARIOS" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 gap-1.5 max-h-48 overflow-y-auto pr-1 custom-scrollbar", children: allTools.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              onClick: () => handleQuickToolSelect(t.id, t.name),
              className: `text-left p-2.5 bg-white dark:bg-[#1A2540] border border-slate-200 dark:border-white/5 rounded-xl transition-all hover:border-indigo-500/40 group flex flex-col justify-between`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-[10px] font-black text-slate-800 dark:text-white group-hover:text-indigo-500 truncate", children: t.name }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[8px] text-slate-400 leading-none mt-1 truncate", children: t.desc })
              ]
            },
            t.id
          )) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 flex flex-col min-w-0 overflow-y-auto custom-scrollbar px-6 py-6 space-y-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl w-full mx-auto space-y-6 select-text", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-6 gap-3", children: [
          { label: "Strategy Score", val: stats.overallStrategyScore, col: "text-indigo-500" },
          { label: "Winning Prob.", val: stats.winningProbability, col: "text-emerald-500" },
          { label: "Litigation Risk", val: stats.litigationRisk, col: "text-red-500" },
          { label: "Evidence Strength", val: stats.evidenceStrength, col: "text-violet-500" },
          { label: "Precedent Support", val: stats.precedentSupport, col: "text-emerald-500" },
          { label: "AI Confidence", val: stats.aiConfidence, col: "text-pink-500" }
        ].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `border rounded-2xl p-4 text-center shadow-sm flex flex-col items-center justify-center ${isDark ? "bg-[#131c31]/30 border-slate-800" : "bg-white border-slate-200"}`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `text-base font-black ${s.col}`, children: [
            s.val,
            s.val !== "--" ? "%" : ""
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[8px] text-slate-400 font-extrabold uppercase tracking-widest mt-1", children: s.label })
        ] }, s.label)) }),
        strategyResult && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-6 gap-3 animate-fadeIn", children: [
          { label: "Court Readiness", val: readinessMetrics.overall + "%", col: "text-indigo-500" },
          { label: "Missing Evidence", val: stats.missingEvidenceCount, col: "text-amber-500" },
          { label: "Missing Docs", val: stats.missingDocumentsCount, col: "text-amber-550" },
          { label: "Settlement Prob.", val: stats.settlementProbability + "%", col: "text-emerald-500" },
          { label: "Appeal Risk", val: stats.appealRisk + "%", col: "text-red-500" },
          { label: "Opponent Risk", val: stats.opponentRiskLevel, col: "text-red-500 font-black" }
        ].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `border rounded-2xl p-3 text-center shadow-sm flex flex-col items-center justify-center ${isDark ? "bg-[#131c31]/30 border-slate-800" : "bg-white border-slate-200"}`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-xs font-black ${s.col}`, children: s.val }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[8px] text-slate-400 font-extrabold uppercase tracking-widest mt-1", children: s.label })
        ] }, s.label)) }),
        caseFacts && !strategyResult && !isAuditing && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `p-6 border rounded-3xl text-center shadow-md ${isDark ? "bg-[#131c31]/20 border-slate-800" : "bg-white border-slate-200"}`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Scale, { className: "mx-auto text-indigo-500 mb-3", size: 32 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-black text-slate-850 dark:text-white mb-1.5 uppercase", children: "Case Facts Staged" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-slate-400 max-w-md mx-auto leading-relaxed mb-4", children: "Litigation details are staged. Run the AI litigation strategy calculator to simulate roadmaps, map precedents, and construct final arguments checklists." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: runLitigationSimulation,
              className: "px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl font-black text-xs uppercase tracking-wider transition-all",
              children: "Analyze & Generate Strategy Brief"
            }
          )
        ] }),
        isAuditing && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `p-8 border rounded-3xl text-center shadow-md space-y-4 ${isDark ? "bg-[#131c31]/20 border-slate-800" : "bg-white border-slate-200"}`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin mx-auto" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-black text-indigo-500 animate-pulse uppercase tracking-wider", children: "AISA War Room Active" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] font-black text-slate-400 uppercase tracking-widest", children: auditStep || "Simulating litigation outcomes..." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-48 bg-slate-100 dark:bg-black/30 h-1.5 rounded-full mx-auto overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-full bg-indigo-600 animate-progress rounded-full w-2/3" }) })
        ] }),
        strategyResult && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 animate-fadeIn", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between border-b border-slate-200 dark:border-zinc-800 pb-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-1 overflow-x-auto pb-1.5 no-scrollbar max-w-full", children: [
              { id: "overview", name: "Strategies Overview", icon: Gavel },
              { id: "roadmap", name: "Winning Roadmap", icon: TrendingUp },
              { id: "evidence", name: "Evidence & Witness", icon: Shield },
              { id: "opponent", name: "Opponent Strategy", icon: Eye },
              { id: "judge", name: "Precedents & Judge", icon: Landmark },
              { id: "negotiation", name: "Settlement & Neg", icon: Briefcase },
              { id: "planner", name: "Trial Planner", icon: FileText },
              { id: "readiness", name: "Readiness & Tasks", icon: CircleCheck }
            ].map((t) => {
              const Icon = t.icon;
              return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  onClick: () => setActiveTab(t.id),
                  className: `flex items-center gap-1.5 px-3 py-2 rounded-xl text-[10px] font-black uppercase tracking-wider transition-all whitespace-nowrap ${activeTab === t.id ? "bg-indigo-600 text-white shadow-sm" : "bg-slate-100 dark:bg-[#131C31] text-slate-400 dark:text-slate-500 hover:text-slate-700 dark:hover:text-slate-350"}`,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { size: 12 }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t.name })
                  ]
                },
                t.id
              );
            }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 shrink-0 ml-2 flex-wrap justify-end", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                LanguageToggle,
                {
                  lang: outputLang,
                  onChange: handleStrategyLangChange,
                  isTranslating: isStrategyTranslating
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  onClick: handleShareReport,
                  className: `p-2 rounded-lg text-slate-500 hover:text-indigo-600 transition-colors ${isDark ? "hover:bg-zinc-800" : "hover:bg-slate-100"}`,
                  title: "Share Summary",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(Share2, { size: 14 })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  onClick: handleSpeechSummary,
                  className: `p-2 rounded-lg transition-colors ${isSpeaking ? "text-indigo-600 bg-indigo-50 dark:bg-indigo-950/20" : "text-slate-500"} ${isDark ? "hover:bg-zinc-800" : "hover:bg-slate-100"}`,
                  title: "Read Aloud Summary",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(Mic, { size: 14 })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  onClick: handlePrintPDF,
                  className: `p-2 rounded-lg text-indigo-600 hover:text-indigo-750 transition-colors ${isDark ? "hover:bg-zinc-800" : "hover:bg-slate-100"}`,
                  title: "Print PDF Strategy",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(Printer, { size: 14 })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  onClick: handleExportDoc,
                  className: `p-2 rounded-lg text-emerald-600 hover:text-emerald-700 transition-colors ${isDark ? "hover:bg-zinc-800" : "hover:bg-slate-100"}`,
                  title: "Export Word brief",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(FileDown, { size: 14 })
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `border rounded-3xl p-6 shadow-md min-h-[350px] ${isDark ? "bg-[#1A2540] border-slate-800" : "bg-white border-slate-200"}`, children: [
            activeTab === "overview" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
              isStrategyTranslating && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 text-[10px] font-bold text-indigo-500 animate-pulse", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-2.5 h-2.5 border-2 border-indigo-500 border-t-transparent rounded-full animate-spin" }),
                "अनुवाद हो रहा है..."
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `grid grid-cols-1 md:grid-cols-2 gap-4 transition-opacity duration-200 ${isStrategyTranslating ? "opacity-50" : "opacity-100"}`, children: [
                { key: "primary", label: "Primary Legal Strategy", color: "border-indigo-500/20 bg-indigo-500/5 text-indigo-500" },
                { key: "alternative", label: "Alternative Legal Strategy", color: "border-violet-500/20 bg-violet-500/5 text-violet-500" },
                { key: "backup", label: "Backup Safety Strategy", color: "border-amber-500/20 bg-amber-500/5 text-amber-550" },
                { key: "emergency", label: "Emergency Escalation Strategy", color: "border-red-500/20 bg-red-500/5 text-red-500" }
              ].map((s) => {
                var _a2, _b2;
                return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `p-5 border rounded-2xl shadow-sm space-y-2 ${s.color}`, children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { size: 16 }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xs font-black uppercase tracking-wider", children: s.label })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-bold text-slate-700 dark:text-slate-250 leading-relaxed", children: sText(s.key, ((_b2 = (_a2 = strategyResult.strategies) == null ? void 0 : _a2[s.key]) == null ? void 0 : _b2.description) || "Litigation defense parameter not compiled.") })
                ] }, s.key);
              }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-[1px] bg-slate-200 dark:bg-zinc-800/80" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] font-black text-slate-400 uppercase tracking-widest", children: "AI Strategic Counsel Advice" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 bg-emerald-500/5 border border-emerald-500/15 rounded-2xl flex items-start gap-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { size: 20, className: "text-emerald-500 shrink-0 mt-0.5" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1 text-xs", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-black text-emerald-500 uppercase tracking-wider", children: "Litigation Suitability" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-slate-600 dark:text-slate-350 leading-normal", children: sText("opinion", (_a = strategyResult.finalOpinion) == null ? void 0 : _a.reasoning) })
                  ] })
                ] })
              ] })
            ] }),
            activeTab === "roadmap" && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] font-black text-slate-400 uppercase tracking-widest", children: "Visual Courtroom Timeline Roadmap" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: (_b = strategyResult.winningRoadmap) == null ? void 0 : _b.map((item, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 border border-slate-200/50 dark:border-zinc-800/60 rounded-2xl flex gap-3.5 items-start bg-slate-500/5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `w-6 h-6 rounded-lg text-[10px] font-black flex items-center justify-center shrink-0 ${item.status === "Completed" ? "bg-emerald-500 text-white" : item.status === "In Progress" ? "bg-indigo-500 text-white" : "bg-slate-300 text-slate-600"}`, children: idx + 1 }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xs font-black text-slate-900 dark:text-white uppercase tracking-wider", children: item.stage }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `px-2 py-0.5 rounded-md text-[8px] font-bold uppercase ${item.status === "Completed" ? "bg-emerald-500/10 text-emerald-500" : item.status === "In Progress" ? "bg-indigo-500/10 text-indigo-500" : "bg-slate-300/10 text-slate-450"}`, children: item.status })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-slate-500 leading-normal", children: item.description })
                ] })
              ] }, idx)) })
            ] }) }),
            activeTab === "evidence" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] font-black text-slate-400 uppercase tracking-widest", children: "Evidence Strategy Roadmap" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 border border-emerald-500/10 bg-emerald-500/5 rounded-2xl space-y-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] font-black text-emerald-500 uppercase tracking-widest", children: "Strong Admissible Evidence" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2", children: (_d = (_c = strategyResult.evidenceStrategy) == null ? void 0 : _c.strong) == null ? void 0 : _d.map((e, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "text-xs font-semibold leading-relaxed text-slate-700 dark:text-slate-300", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: e.evidence }),
                      ": ",
                      e.reason
                    ] }, idx)) })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 border border-red-500/10 bg-red-500/5 rounded-2xl space-y-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] font-black text-red-500 uppercase tracking-widest", children: "Missing Key Evidence Gaps" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2", children: (_f = (_e = strategyResult.evidenceStrategy) == null ? void 0 : _e.missing) == null ? void 0 : _f.map((e, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "text-xs font-semibold leading-relaxed text-slate-700 dark:text-slate-300", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: e.evidence }),
                      ": ",
                      e.reason
                    ] }, idx)) })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 border border-slate-200/50 dark:border-zinc-800 bg-slate-500/5 rounded-2xl space-y-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] font-black text-slate-400 uppercase tracking-widest", children: "Recommended Evidence Presentation Sequence" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("ol", { className: "list-decimal pl-4 space-y-1.5 text-xs font-semibold text-slate-655 dark:text-slate-300", children: (_h = (_g = strategyResult.evidenceStrategy) == null ? void 0 : _g.sequence) == null ? void 0 : _h.map((s, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: s }, idx)) })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-[1px] bg-slate-200 dark:bg-zinc-800/80" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] font-black text-slate-400 uppercase tracking-widest", children: "Witness Prep & Examination Plans" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4", children: [
                  { label: "Key Testimony Witnesses", list: (_i = strategyResult.witnessStrategy) == null ? void 0 : _i.key, col: "border-indigo-500/10 bg-indigo-500/5 text-indigo-500" },
                  { label: "Corroborative Optional Witnesses", list: (_j = strategyResult.witnessStrategy) == null ? void 0 : _j.optional, col: "border-violet-500/10 bg-violet-500/5 text-violet-500" },
                  { label: "Vulnerable Weak Witnesses", list: (_k = strategyResult.witnessStrategy) == null ? void 0 : _k.weak, col: "border-amber-500/10 bg-amber-500/5 text-amber-500" }
                ].map((w) => {
                  var _a2;
                  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `p-4 border rounded-2xl space-y-2 ${w.col}`, children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] font-black uppercase tracking-widest", children: w.label }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2", children: (_a2 = w.list) == null ? void 0 : _a2.map((item, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "text-xs font-bold leading-normal text-slate-700 dark:text-slate-350", children: [
                      item.witness,
                      ": ",
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-slate-500", children: item.purpose })
                    ] }, idx)) })
                  ] }, w.label);
                }) })
              ] })
            ] }),
            activeTab === "opponent" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 border border-slate-200/50 dark:border-zinc-850 rounded-2xl bg-slate-500/5 space-y-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] font-black text-slate-400 uppercase tracking-widest", children: "Opponent Expected Defense Tactics" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-slate-500 leading-relaxed", children: (_l = strategyResult.opponentStrategy) == null ? void 0 : _l.likelyDefence })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 border border-slate-200/50 dark:border-zinc-850 rounded-2xl bg-slate-500/5 space-y-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] font-black text-slate-400 uppercase tracking-widest", children: "Expected Objections & Delay strategies" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs font-semibold text-slate-500 leading-relaxed", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Objections:" }),
                    " ",
                    (_n = (_m = strategyResult.opponentStrategy) == null ? void 0 : _m.likelyObjections) == null ? void 0 : _n.join(", "),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Delay Tactics:" }),
                    " ",
                    (_o = strategyResult.opponentStrategy) == null ? void 0 : _o.delayStrategy
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-[1px] bg-slate-200 dark:bg-zinc-800/80" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] font-black text-slate-400 uppercase tracking-widest", children: "Counter-Strategy Rebuttal Matrix" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-left text-xs font-bold", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-slate-200 dark:border-zinc-800 text-slate-400", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-2.5 px-2 uppercase tracking-wider text-[9px]", children: "Opponent Argument" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-2.5 px-2 uppercase tracking-wider text-[9px]", children: "Counter Response" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-2.5 px-2 uppercase tracking-wider text-[9px]", children: "Evidence/Law Required" })
                  ] }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { className: "divide-y divide-slate-100 dark:divide-zinc-800/30", children: (_p = strategyResult.counterStrategy) == null ? void 0 : _p.map((c, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "hover:bg-slate-500/5 transition-colors", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 px-2 text-slate-900 dark:text-white align-top", children: c.opponentArgument }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "py-3 px-2 text-slate-600 dark:text-slate-400 font-medium align-top", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: c.counterResponse }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-indigo-500 font-bold mt-1 text-[10px]", children: [
                        "Action: ",
                        c.recommendedAction
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "py-3 px-2 text-slate-500 align-top", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Proof:" }),
                        " ",
                        c.evidenceRequired
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-violet-500 mt-1 font-bold", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Law:" }),
                        " ",
                        c.applicableLaw
                      ] })
                    ] })
                  ] }, idx)) })
                ] }) })
              ] })
            ] }),
            activeTab === "judge" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] font-black text-slate-400 uppercase tracking-widest", children: "Expected Judicial Perspectives" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 border border-violet-500/10 bg-violet-500/5 rounded-2xl space-y-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] font-black text-violet-500 uppercase tracking-widest", children: "Likely Judicial Questions & Focus Areas" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-1.5", children: (_r = (_q = strategyResult.judgePerspective) == null ? void 0 : _q.likelyQuestions) == null ? void 0 : _r.map((q, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "text-xs font-semibold text-slate-700 dark:text-slate-300 flex items-start gap-1", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-violet-500 mt-1.5 shrink-0" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: q })
                    ] }, i)) })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 border border-red-500/10 bg-red-500/5 rounded-2xl space-y-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] font-black text-red-500 uppercase tracking-widest", children: "Trial Concerns & Vulnerable Links" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-1.5", children: (_t = (_s = strategyResult.judgePerspective) == null ? void 0 : _s.courtConcerns) == null ? void 0 : _t.map((c, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "text-xs font-semibold text-slate-700 dark:text-slate-300 flex items-start gap-1", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-red-500 mt-1.5 shrink-0" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: c })
                    ] }, i)) })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-[1px] bg-slate-200 dark:bg-zinc-800/80" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] font-black text-slate-400 uppercase tracking-widest", children: "Favorable Judicial Precedents & Citations" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 gap-3", children: (_u = strategyResult.precedents) == null ? void 0 : _u.map((p, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 rounded-xl border border-slate-200/50 dark:border-zinc-800 bg-slate-500/5 space-y-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xs font-black text-slate-900 dark:text-white uppercase tracking-wider", children: p.citation }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "px-2.5 py-0.5 bg-emerald-500/10 text-emerald-500 rounded-md text-[8px] font-black uppercase", children: [
                      p.similarityScore,
                      "% Matches"
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs font-bold text-indigo-500 uppercase tracking-wider leading-none", children: [
                    p.court,
                    " • ",
                    p.type
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-slate-500 leading-normal", children: p.summary })
                ] }, idx)) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-[1px] bg-slate-200 dark:bg-zinc-800/80" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] font-black text-slate-400 uppercase tracking-widest", children: "Statutory Legislative applicability report (BNS / CPC)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: (_v = strategyResult.laws) == null ? void 0 : _v.map((l, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3.5 border border-slate-100 dark:border-zinc-850 bg-slate-500/5 rounded-2xl", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[9px] font-black text-violet-500 uppercase tracking-widest", children: [
                    "Section ",
                    l.section,
                    " - ",
                    l.act
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-slate-650 dark:text-slate-350 mt-1 leading-relaxed", children: l.applicability })
                ] }, idx)) })
              ] })
            ] }),
            activeTab === "negotiation" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center p-4 border border-slate-200/50 dark:border-zinc-850 rounded-2xl bg-[#131c31]/10", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] font-black text-slate-400 uppercase tracking-widest", children: "Settlement Probability Chance" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "text-2xl font-black text-emerald-500 mt-0.5", children: [
                    (_w = strategyResult.settlement) == null ? void 0 : _w.settlementChance,
                    "%"
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-right", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[8px] font-extrabold text-indigo-500 bg-indigo-500/10 px-2.5 py-1 rounded-full uppercase tracking-widest", children: [
                  "Mediation: ",
                  ((_x = strategyResult.settlement) == null ? void 0 : _x.mediationPossibility) || "Good"
                ] }) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs font-semibold text-slate-500 leading-relaxed", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Negotiation Strategy:" }),
                " ",
                (_y = strategyResult.settlement) == null ? void 0 : _y.negotiationStrategy
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-[1px] bg-slate-200 dark:bg-zinc-800/80" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] font-black text-slate-400 uppercase tracking-widest", children: "Negotiation Position Outlines" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
                  { label: "Opening position demand", val: (_z = strategyResult.negotiationPositions) == null ? void 0 : _z.opening, col: "border-indigo-500/10 bg-indigo-500/5 text-indigo-500" },
                  { label: "Middle target compromise", val: (_A = strategyResult.negotiationPositions) == null ? void 0 : _A.middle, col: "border-violet-500/10 bg-violet-500/5 text-violet-500" },
                  { label: "Final bottom line position", val: (_B = strategyResult.negotiationPositions) == null ? void 0 : _B.final, col: "border-amber-500/10 bg-amber-500/5 text-amber-500" },
                  { label: "Litigation recovery fallback", val: (_C = strategyResult.negotiationPositions) == null ? void 0 : _C.fallback, col: "border-red-500/10 bg-red-500/5 text-red-500" }
                ].map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `p-4 border rounded-2xl space-y-1.5 ${p.col}`, children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] font-black uppercase tracking-widest", children: p.label }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold leading-relaxed text-slate-700 dark:text-slate-300", children: p.val || "Position details pending." })
                ] }, p.label)) })
              ] })
            ] }),
            activeTab === "planner" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] font-black text-slate-400 uppercase tracking-widest", children: "Cross-Examination Questions Planner" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 gap-4", children: (_D = strategyResult.crossExamPlanner) == null ? void 0 : _D.map((item, idx) => {
                  var _a2, _b2, _c2, _d2;
                  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 border border-slate-200/50 dark:border-zinc-800 bg-slate-500/5 rounded-2xl space-y-4", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "text-xs font-black text-slate-900 dark:text-white uppercase tracking-wider", children: [
                      "Witness Target: ",
                      item.witness
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-semibold text-slate-500", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] font-black text-slate-450 uppercase", children: "Main Questions Line" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "list-disc pl-4 space-y-1", children: (_a2 = item.mainQuestions) == null ? void 0 : _a2.map((q, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: q }, i)) })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] font-black text-indigo-500 uppercase", children: "Follow-up inquiries" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "list-disc pl-4 space-y-1", children: (_b2 = item.followUps) == null ? void 0 : _b2.map((q, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: q }, i)) })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] font-black text-red-500 uppercase", children: "Contradiction questions" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "list-disc pl-4 space-y-1", children: (_c2 = item.contradictionQuestions) == null ? void 0 : _c2.map((q, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: q }, i)) })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] font-black text-violet-500 uppercase", children: "Credibility challenges" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "list-disc pl-4 space-y-1", children: (_d2 = item.credibilityQuestions) == null ? void 0 : _d2.map((q, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: q }, i)) })
                      ] })
                    ] })
                  ] }, idx);
                }) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-[1px] bg-slate-200 dark:bg-zinc-800/80" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] font-black text-slate-400 uppercase tracking-widest", children: "Final argument planner outlines" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 border border-indigo-500/10 bg-indigo-500/5 rounded-2xl space-y-3 text-xs leading-relaxed text-slate-700 dark:text-slate-300", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Opening arguments statement:" }),
                    " ",
                    (_E = strategyResult.finalArguments) == null ? void 0 : _E.opening
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Key legal arguments points:" }),
                    " ",
                    (_G = (_F = strategyResult.finalArguments) == null ? void 0 : _F.arguments) == null ? void 0 : _G.join(", ")
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Favorable Precedent references:" }),
                    " ",
                    (_I = (_H = strategyResult.finalArguments) == null ? void 0 : _H.precedents) == null ? void 0 : _I.join(", ")
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Statutory Prayers / reliefs sought:" }),
                    " ",
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-indigo-500 font-bold", children: [
                      '"',
                      (_J = strategyResult.finalArguments) == null ? void 0 : _J.prayer,
                      '"'
                    ] })
                  ] })
                ] })
              ] })
            ] }),
            activeTab === "readiness" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-5 gap-3", children: [
                { label: "Evidence readiness", val: readinessMetrics.evidence, col: "text-indigo-500" },
                { label: "Witness readiness", val: readinessMetrics.witness, col: "text-violet-500" },
                { label: "Documentation readiness", val: readinessMetrics.documentation, col: "text-emerald-500" },
                { label: "Arguments readiness", val: readinessMetrics.argument, col: "text-emerald-550" },
                { label: "Overall Readiness", val: readinessMetrics.overall, col: "text-indigo-650 font-black" }
              ].map((r) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 border border-slate-100 dark:border-zinc-800 bg-slate-500/5 rounded-2xl text-center", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `text-base font-black ${r.col}`, children: [
                  r.val,
                  "%"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[8px] text-slate-450 font-extrabold uppercase mt-1 tracking-wider leading-none", children: r.label })
              ] }, r.label)) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-[1px] bg-slate-200 dark:bg-zinc-800/80" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] font-black text-slate-400 uppercase tracking-widest", children: "Litigation task checklist manager" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 max-h-56 overflow-y-auto pr-1 custom-scrollbar", children: [
                  tasks.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 border border-slate-200/50 dark:border-zinc-800 bg-slate-500/5 rounded-xl flex items-center justify-between gap-3 animate-fadeIn", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "input",
                        {
                          type: "checkbox",
                          checked: t.completed,
                          onChange: () => handleToggleTask(t.id),
                          className: "w-4 h-4 text-indigo-600 border-slate-350 rounded focus:ring-indigo-500"
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-xs font-bold ${t.completed ? "line-through text-slate-400 dark:text-slate-500" : "text-slate-800 dark:text-white"}`, children: t.task })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "button",
                      {
                        onClick: () => handleDeleteTask(t.id),
                        className: "p-1 hover:bg-red-50 dark:hover:bg-red-950/20 text-red-500 rounded-lg",
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { size: 13 })
                      }
                    )
                  ] }, t.id)),
                  tasks.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center py-6 text-xs text-slate-400 font-semibold bg-slate-500/5 rounded-xl", children: "No tasks created. Add a task below to start tracking." })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "input",
                    {
                      type: "text",
                      placeholder: "Add custom task e.g. File caveat petition...",
                      value: newTaskText,
                      onChange: (e) => setNewTaskText(e.target.value),
                      onKeyDown: (e) => e.key === "Enter" && handleAddTask(),
                      className: `flex-1 border rounded-xl px-4 py-2.5 text-xs font-bold outline-none ${isDark ? "bg-black/25 border-zinc-800 text-white" : "bg-slate-50 border-slate-200 text-slate-800"}`
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      onClick: handleAddTask,
                      className: "px-4 py-2.5 bg-indigo-650 hover:bg-indigo-700 text-white rounded-xl text-xs font-black uppercase tracking-wider transition-all shrink-0",
                      children: "Add Task"
                    }
                  )
                ] })
              ] })
            ] })
          ] })
        ] })
      ] }) })
    ] }),
    historyVisible && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "fixed inset-0 z-[120000] flex items-center justify-center p-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-black/60 backdrop-blur-md", onClick: () => setHistoryVisible(false) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-850 rounded-[32px] max-w-lg w-full max-h-[80%] flex flex-col overflow-hidden shadow-2xl p-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between border-b border-slate-100 dark:border-white/5 pb-4 shrink-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-base font-black text-slate-900 dark:text-white uppercase tracking-wider", children: "Strategy Archive Logs" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setHistoryVisible(false), className: "p-1 hover:bg-slate-100 dark:hover:bg-zinc-800 rounded-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 20, className: "text-slate-400" }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center bg-slate-50 dark:bg-[#131C31] border border-slate-200 dark:border-white/5 rounded-xl px-3 py-2 mt-4 shrink-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { size: 14, className: "text-slate-400 mr-2" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "text",
              placeholder: "Search past strategies...",
              className: "w-full bg-transparent border-none text-xs font-bold text-slate-800 dark:text-white outline-none focus:ring-0",
              value: historySearch,
              onChange: (e) => setHistorySearch(e.target.value)
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 overflow-y-auto mt-4 space-y-3 custom-scrollbar", children: [
          historyData.filter(
            (h) => {
              var _a2, _b2;
              return ((_a2 = h.title) == null ? void 0 : _a2.toLowerCase().includes(historySearch.toLowerCase())) || ((_b2 = h.caseFacts) == null ? void 0 : _b2.toLowerCase().includes(historySearch.toLowerCase()));
            }
          ).map((item, idx) => {
            var _a2, _b2, _c2;
            return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 bg-slate-50 dark:bg-[#1A2540] border border-slate-200/50 dark:border-white/5 rounded-2xl shadow-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  onClick: () => {
                    setStrategyResult(item.activeStrategy || item);
                    setHistoryVisible(false);
                    zt.success(`Loaded strategy: ${item.title}`);
                  },
                  className: "w-full text-left min-w-0",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-start", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xs font-black text-slate-800 dark:text-white truncate", children: item.title }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[8px] text-slate-400 font-bold uppercase tracking-wider shrink-0 ml-2", children: item.timestamp })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-slate-500 mt-2 font-medium line-clamp-2", children: item.caseFacts }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mt-2.5", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "px-2 py-0.5 bg-indigo-50 dark:bg-indigo-950/20 text-[8px] font-black uppercase text-indigo-600 rounded-md", children: [
                        "Score: ",
                        ((_a2 = item.stats) == null ? void 0 : _a2.overallStrategyScore) || ((_b2 = item.stats) == null ? void 0 : _b2.strategyStrength),
                        "%"
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "px-2 py-0.5 bg-emerald-50 dark:bg-emerald-950/20 text-[8px] font-black uppercase text-emerald-600 rounded-md", children: [
                        "Prob: ",
                        ((_c2 = item.stats) == null ? void 0 : _c2.winningProbability) || "N/A",
                        "%"
                      ] })
                    ] })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-end border-t border-slate-100 dark:border-white/5 pt-2.5 mt-2.5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  onClick: () => deleteHistoryItem(item.id),
                  className: "p-1 hover:bg-red-50 dark:hover:bg-red-950/20 rounded-lg text-red-500 flex items-center gap-1 text-[9px] font-black uppercase",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { size: 12 }),
                    " Delete Log"
                  ]
                }
              ) })
            ] }, item.id || idx);
          }),
          historyData.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-10", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Folder, { size: 32, className: "mx-auto text-slate-350 dark:text-zinc-700" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-slate-400 mt-2", children: "No strategy roadmaps saved." })
          ] })
        ] })
      ] })
    ] })
  ] });
};
export {
  StrategyEngine as default
};
