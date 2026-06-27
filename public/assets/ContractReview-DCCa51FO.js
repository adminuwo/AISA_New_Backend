import { r as reactExports, bV as useOutputLanguage, bW as mapCaseToForm, z as zt, j as jsxRuntimeExports, bX as ChevronLeft, c2 as History, U as Upload, bQ as FileCheck, v as Search, n as TriangleAlert, l as Shield, F as FileText, bR as Brain, bN as Gavel, t as Scale, bU as Landmark, cf as FileSpreadsheet, b as Clock, R as RefreshCw, o as Send, c4 as LanguageToggle, bZ as Share2, ca as Mic, c6 as FileDown, c0 as CircleCheck, W as Plus, T as Trash2, c1 as PenLine, b$ as Folder, X, c7 as consumePrefillIntent, c8 as generateChatResponse, q as getUserData, a as apiService } from "./index-CifJr-sK.js";
import { A as Award } from "./award-BhMiiFHg.js";
import { P as Printer } from "./printer-ZcOkpCIc.js";
const allTools = [
  { id: "NDA", name: "NDA Review", desc: "Indemnity & leak audit", category: "Corporate" },
  { id: "Employment", name: "Employment Scan", desc: "Non-compete & severance", category: "HR" },
  { id: "Lease", name: "Lease Review", desc: "Rent escalations & evictions", category: "Real Estate" },
  { id: "Vendor", name: "Vendor Agreement", desc: "Net payment & penalties", category: "Commercial" },
  { id: "Investment", name: "Investment Review", desc: "Liquidation & vetos", category: "Corporate" },
  { id: "SaaS", name: "SaaS Agreement", desc: "SLA uptime & data rights", category: "IT" },
  { id: "Privacy", name: "Privacy Policy", desc: "GDPR & DPDP compliance", category: "IT" }
];
const ContractReview = ({ currentCase, onBack, theme, allProjects = [], onUpdateCase }) => {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _A, _B, _C, _D, _E;
  const isDark = theme === "dark";
  const [contractTitle, setContractTitle] = reactExports.useState("");
  const [contractText, setContractText] = reactExports.useState("");
  const [linkedCaseId, setLinkedCaseId] = reactExports.useState((currentCase == null ? void 0 : currentCase._id) || "");
  const [isSyncing, setIsSyncing] = reactExports.useState(false);
  const [files, setFiles] = reactExports.useState([]);
  const [isOcrLoading, setIsOcrLoading] = reactExports.useState(false);
  const [ocrSearchQuery, setOcrSearchQuery] = reactExports.useState("");
  const [isEditingOcr, setIsEditingOcr] = reactExports.useState(false);
  const [activeFileId, setActiveFileId] = reactExports.useState(null);
  const [isAuditing, setIsAuditing] = reactExports.useState(false);
  const [auditStep, setAuditStep] = reactExports.useState("");
  const [auditResult, setAuditResult] = reactExports.useState(null);
  const [activeTab, setActiveTab] = reactExports.useState("summary");
  const [historyVisible, setHistoryVisible] = reactExports.useState(false);
  const [historySearch, setHistorySearch] = reactExports.useState("");
  const [isSpeaking, setIsSpeaking] = reactExports.useState(false);
  const [versions, setVersions] = reactExports.useState([]);
  const [auditLogs, setAuditLogs] = reactExports.useState([]);
  const [activeRewriteClause, setActiveRewriteClause] = reactExports.useState(null);
  const [rewriteTone, setRewriteTone] = reactExports.useState("Balanced");
  const [isRewriting, setIsRewriting] = reactExports.useState(false);
  const [rewrittenWording, setRewrittenWording] = reactExports.useState("");
  const [secondContractFile, setSecondContractFile] = reactExports.useState(null);
  const [isComparing, setIsComparing] = reactExports.useState(false);
  const [comparisonResult, setComparisonResult] = reactExports.useState(null);
  const [chatHistory, setChatHistory] = reactExports.useState([]);
  const [chatInput, setChatInput] = reactExports.useState("");
  const [isChatSending, setIsChatSending] = reactExports.useState(false);
  const [toolsSearchQuery, setToolsSearchQuery] = reactExports.useState("");
  const [toolsCategory, setToolsCategory] = reactExports.useState("All");
  const [prefillBanner, setPrefillBanner] = reactExports.useState(null);
  reactExports.useRef(null);
  const chatBottomRef = reactExports.useRef(null);
  const contractMountedRef = reactExports.useRef(true);
  const {
    outputLang: contractLang,
    setOutputLang: setContractLang,
    isTranslating: isContractTranslating,
    setIsTranslating: setIsContractTranslating,
    translateText: translateContractText,
    getDisplayText: getContractDisplayText
  } = useOutputLanguage("contract_review", (currentCase == null ? void 0 : currentCase._id) || "global");
  const [contractOpinionDisplay, setContractOpinionDisplay] = reactExports.useState("");
  reactExports.useEffect(() => {
    contractMountedRef.current = true;
    return () => {
      contractMountedRef.current = false;
    };
  }, []);
  reactExports.useEffect(() => {
    var _a2;
    if ((_a2 = auditResult == null ? void 0 : auditResult.finalOpinion) == null ? void 0 : _a2.reasoning) {
      setContractOpinionDisplay(auditResult.finalOpinion.reasoning);
      setContractLang("en");
    }
  }, [auditResult]);
  const handleContractLangChange = reactExports.useCallback(async (newLang) => {
    var _a2;
    setContractLang(newLang);
    const text = (_a2 = auditResult == null ? void 0 : auditResult.finalOpinion) == null ? void 0 : _a2.reasoning;
    if (!text) return;
    if (newLang === "en") {
      setContractOpinionDisplay(text);
      return;
    }
    const cached = getContractDisplayText(text);
    if (cached && cached !== text) {
      setContractOpinionDisplay(cached);
      return;
    }
    setIsContractTranslating(true);
    try {
      const translated = await translateContractText(text);
      if (contractMountedRef.current) setContractOpinionDisplay(translated);
    } catch {
      if (contractMountedRef.current) setContractOpinionDisplay(text);
    } finally {
      if (contractMountedRef.current) setIsContractTranslating(false);
    }
  }, [auditResult, getContractDisplayText, setContractLang, setIsContractTranslating, translateContractText]);
  reactExports.useEffect(() => {
    if (currentCase) {
      setLinkedCaseId(currentCase._id);
      hydrateFromCase(currentCase);
    } else {
      resetPlatformState();
    }
  }, [currentCase]);
  reactExports.useEffect(() => {
    var _a2, _b2, _c2;
    const intent = consumePrefillIntent("legal_contract_analyzer");
    if (intent == null ? void 0 : intent.caseData) {
      const mapped = mapCaseToForm(intent.caseData);
      const caseId = ((_a2 = intent.caseData) == null ? void 0 : _a2._id) || ((_b2 = intent.caseData) == null ? void 0 : _b2.id);
      if (caseId) {
        setLinkedCaseId(caseId);
        hydrateFromCase(intent.caseData);
      }
      if (mapped.hasContract && ((_c2 = mapped.contractFiles) == null ? void 0 : _c2.length)) {
        const contractFile = mapped.contractFiles[0];
        setContractTitle(`${mapped.caseTitle} — ${contractFile.name}`);
        setContractText(mapped.caseFacts || "");
        setPrefillBanner({ type: "success", caseTitle: mapped.caseTitle, message: `Contract found: ${contractFile.name}. Automatically staging context.` });
        zt.success(`✓ Contract file detected — loaded for analysis`, { icon: "📄" });
      } else if (mapped.caseFacts) {
        setContractTitle(mapped.caseTitle || "");
        setContractText(mapped.caseFacts);
        setPrefillBanner({ type: "warning", caseTitle: mapped.caseTitle, message: "No contract files found in case. Seeding facts as review context." });
        zt(`⚠️ No contract found — case facts loaded`, { icon: "⚠️" });
      }
    }
  }, []);
  const resetPlatformState = () => {
    setContractTitle("");
    setContractText("");
    setFiles([]);
    setAuditResult(null);
    setVersions([]);
    setAuditLogs([]);
    setChatHistory([]);
    setComparisonResult(null);
    setSecondContractFile(null);
    setActiveFileId(null);
  };
  const hydrateFromCase = (caseObj) => {
    var _a2;
    if (!caseObj) return;
    const ci = caseObj.contractIntelligence;
    if (ci) {
      setFiles(ci.files || []);
      setContractTitle(ci.contractTitle || caseObj.name || "");
      setContractText(ci.activeContractText || caseObj.description || "");
      setAuditResult(ci.auditResult || null);
      setVersions(ci.versions || []);
      setAuditLogs(ci.auditLogs || []);
      setChatHistory(ci.chatHistory || []);
      setComparisonResult(ci.comparisonResult || null);
      if (((_a2 = ci.files) == null ? void 0 : _a2.length) > 0) {
        setActiveFileId(ci.files[0].id);
      }
    } else {
      resetPlatformState();
      setContractTitle(caseObj.name || "");
      setContractText(caseObj.description || "");
    }
  };
  const ensureCaseCreated = async (fileName) => {
    let activeId = linkedCaseId || (currentCase == null ? void 0 : currentCase._id);
    let activeProj = currentCase || allProjects.find((p) => p._id === activeId);
    if (!activeId) {
      setIsSyncing(true);
      const title = `Contract Review: ${fileName || contractTitle || "Custom Agreement"}`;
      try {
        const newProj = await apiService.createProject({
          name: title,
          isLegalCase: true,
          description: `Automatically created for Contract Review of ${fileName || "uploaded file"}.`
        });
        activeId = newProj._id;
        activeProj = newProj;
        setLinkedCaseId(activeId);
        if (onUpdateCase) onUpdateCase(newProj);
        zt.success(`📁 Database Case created: "${title}"`);
      } catch (e) {
        console.error("Auto-create case failed", e);
        zt.error("Offline fallback: using local simulation.");
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
      const currentCi = (activeProj == null ? void 0 : activeProj.contractIntelligence) || {};
      const payload = {
        ...activeProj,
        contractIntelligence: {
          ...currentCi,
          contractTitle,
          activeContractText: contractText,
          files,
          auditResult,
          versions,
          auditLogs,
          chatHistory,
          comparisonResult,
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
  const createDocumentVersion = async (newText, note, customVersionsList = null) => {
    const targetVersions = customVersionsList || versions;
    const nextVerNo = targetVersions.length + 1;
    const newVer = {
      version: nextVerNo,
      timestamp: (/* @__PURE__ */ new Date()).toISOString(),
      text: newText,
      note: note || `Revision version ${nextVerNo}`
    };
    const updatedVersions = [...targetVersions, newVer];
    setVersions(updatedVersions);
    await syncToDatabase({
      activeContractText: newText,
      versions: updatedVersions
    });
    await logAudit("Version Saved", `Saved Document version ${nextVerNo} - ${note}`, updatedVersions);
  };
  const handleFileUpload = async (e, isComparison = false) => {
    var _a2, _b2;
    const uploadedFiles = e.target.files ? Array.from(e.target.files) : [];
    if (uploadedFiles.length === 0) return;
    if (isComparison) {
      const file = uploadedFiles[0];
      setSecondContractFile({ name: file.name, status: "Staged", text: "" });
      const reader = new FileReader();
      reader.onload = async () => {
        const base64Data = reader.result.split(",")[1];
        setSecondContractFile((prev) => ({ ...prev, base64: base64Data, status: "Loaded" }));
        zt.success(`Secondary contract staged: ${file.name}`);
      };
      reader.readAsDataURL(file);
      return;
    }
    const { activeId } = await ensureCaseCreated(uploadedFiles[0].name);
    setIsOcrLoading(true);
    const newStagedFiles = [];
    for (const file of uploadedFiles) {
      const reader = new FileReader();
      const loadPromise = new Promise((resolve) => {
        reader.onload = async () => {
          const base64Data = reader.result.split(",")[1];
          const newFile = {
            id: `file_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
            name: file.name,
            size: file.size,
            type: file.type,
            uploadDate: (/* @__PURE__ */ new Date()).toLocaleDateString(),
            base64: base64Data,
            ocrText: ""
          };
          resolve(newFile);
        };
        reader.readAsDataURL(file);
      });
      const fileObj = await loadPromise;
      newStagedFiles.push(fileObj);
      try {
        zt.loading(`OCR Extracting text: ${fileObj.name}...`, { id: "ocr" });
        const systemPrompt = `You are a professional legal OCR and text extraction engine. Extract all text content from this contract file exactly, maintaining lines, headings, paragraphs, and structure. Do NOT add any notes, headers, or explanations. Just return the extracted document text.`;
        const currentMessage = `Extract the content of this file: ${fileObj.name}`;
        const response = await generateChatResponse(
          [],
          currentMessage,
          systemPrompt,
          [{ url: `data:${fileObj.type || "application/pdf"};base64,${fileObj.base64}`, name: fileObj.name, type: fileObj.type.startsWith("image/") ? "image" : "document" }],
          "English",
          null,
          "legal"
        );
        fileObj.ocrText = response.reply || response || "";
        zt.success(`OCR Complete: ${fileObj.name}`, { id: "ocr" });
      } catch (err) {
        console.error("OCR Extraction failed", err);
        zt.error(`OCR extraction failed. Copying raw details.`, { id: "ocr" });
        fileObj.ocrText = `File content staged: ${fileObj.name}. Manual revision required if scanned.`;
      }
    }
    const updatedFiles = [...files, ...newStagedFiles];
    setFiles(updatedFiles);
    setActiveFileId(newStagedFiles[0].id);
    setContractTitle(newStagedFiles[0].name);
    setContractText(newStagedFiles[0].ocrText);
    const currentVersions = [...versions];
    const nextVerNo = currentVersions.length + 1;
    const initialVer = {
      version: nextVerNo,
      timestamp: (/* @__PURE__ */ new Date()).toISOString(),
      text: newStagedFiles[0].ocrText,
      note: `Original Upload: ${newStagedFiles[0].name}`
    };
    const updatedVersions = [...currentVersions, initialVer];
    setVersions(updatedVersions);
    setIsOcrLoading(false);
    const timestamp = (/* @__PURE__ */ new Date()).toISOString();
    const userEmail = ((_a2 = getUserData()) == null ? void 0 : _a2.email) || "System User";
    const userName = ((_b2 = getUserData()) == null ? void 0 : _b2.name) || "Advocate";
    const newLog = {
      timestamp,
      action: "File Uploaded & OCR Scanned",
      details: `Staged contract ${newStagedFiles[0].name} (${Math.round(newStagedFiles[0].size / 1024)} KB) and completed structural OCR text extraction.`,
      editedBy: `${userName} (${userEmail})`
    };
    const updatedLogs = [...auditLogs, newLog];
    setAuditLogs(updatedLogs);
    await syncToDatabase({
      contractTitle: newStagedFiles[0].name,
      activeContractText: newStagedFiles[0].ocrText,
      files: updatedFiles,
      versions: updatedVersions,
      auditLogs: updatedLogs
    });
    await performContractAuditInternal(newStagedFiles[0].name, newStagedFiles[0].ocrText, updatedFiles, updatedVersions, updatedLogs);
  };
  const runContractAudit = async () => {
    if (!contractText.trim()) {
      zt.error("Please stage contract text or upload documents first.");
      return;
    }
    await performContractAuditInternal(contractTitle, contractText, files, versions, auditLogs);
  };
  const performContractAuditInternal = async (title, text, activeFiles, activeVersions, activeLogs) => {
    var _a2, _b2, _c2, _d2;
    setIsAuditing(true);
    setAuditResult(null);
    setAuditStep("Auditing Clauses...");
    const toastId = zt.loading("AI Platform auditing contract parameters...");
    try {
      const systemPrompt = `You are the AISA Enterprise Contract Intelligence Platform.
Audit the provided contract content and output your complete legal findings as a single valid JSON object.
Do NOT include any markdown envelope other than "json" code block. No conversation.
Ensure all keys matches the target structure exactly.

JSON Schema structure:
{
  "stats": {
    "overallScore": <Integer 0-100>,
    "riskScore": <Integer 0-100>,
    "complianceScore": <Integer 0-100>,
    "missingClausesCount": <Integer>,
    "confidenceRate": <Integer 0-100>,
    "highRiskClausesCount": <Integer>,
    "mediumRiskClausesCount": <Integer>,
    "lowRiskClausesCount": <Integer>,
    "totalClausesCount": <Integer>,
    "reviewStatus": "<Safe to Sign | Review Before Signing | High Risk | Needs Legal Revision | Not Recommended>"
  },
  "summary": {
    "contractType": "<Contract classification e.g. NDA, SaaS, SLA>",
    "parties": "<Detailed list of parties and business units>",
    "effectiveDate": "<Date or 'Not Specified'>",
    "expiryDate": "<Date or 'Not Specified'>",
    "duration": "<Duration details>",
    "jurisdiction": "<Legal jurisdiction location>",
    "governingLaw": "<Governing laws and legislative frameworks>",
    "paymentTerms": "<Payment milestones and schedules>",
    "terminationDate": "<Termination notice periods and dates>",
    "renewalDate": "<Renewal schedules>"
  },
  "clauses": [
    {
      "id": "<Unique code, e.g. c1, c2>",
      "name": "<Clause Name e.g. Confidentiality, Indemnity>",
      "text": "<The actual text corresponding from the contract>",
      "risk": "<Low | Medium | High | Critical>",
      "explanation": "<Legal exposure and explanation of why this risk rating is assigned>",
      "unfair": <Boolean true/false if clause is one-sided or highly unfair>,
      "suggestion": "<Suggested edits and mitigation edits>"
    }
  ],
  "missingClauses": [
    {
      "name": "<Missing clause title e.g. Dispute Resolution>",
      "category": "<Critical Missing | Recommended | Optional>",
      "explanation": "<Why this clause is necessary in this contract type>",
      "riskCreated": "<Negative impact or vulnerability created by its absence>"
    }
  ],
  "compliance": [
    {
      "law": "<Framework name e.g. Indian Contract Act 1872, DPDP Act 2023, GST Act, Consumer Protection>",
      "status": "<Compliant | Warning | Non-Compliant>",
      "explanation": "<Brief check details and compliance description>"
    }
  ],
  "financials": {
    "paymentAmount": "<Payment numbers and parameters>",
    "taxes": "<GST/tax rates or liability>",
    "deposit": "<Security deposits details>",
    "penalty": "<Liquidated damages or penalty rates>",
    "lateFees": "<Interest or late fees rules>",
    "renewalCharges": "<Renewal pricing rules>",
    "interest": "<Compounded interest values>",
    "summaryText": "<Financial overview explanation>"
  },
  "obligations": {
    "yours": ["<Your action obligation 1>", "<Your action obligation 2>"],
    "theirs": ["<Opposite party obligation 1>", "<Opposite party obligation 2>"],
    "summaryText": "<Obligation matrix breakdown summary>"
  },
  "timeline": [
    {
      "date": "<Target date event>",
      "event": "<Event title e.g. First Payment, Expiry>",
      "description": "<Description of requirements or deadlines>"
    }
  ],
  "recommendations": [
    {
      "type": "<Strategic | Legal | Negotiation>",
      "title": "<Recommendation Title>",
      "suggestion": "<Actions recommended to protect the interests>",
      "negotiationPoint": "<How to present and argue this change to the opposite party>",
      "alternativeText": "<Safer draft clause wording substitute>"
    }
  ],
  "finalOpinion": {
    "status": "<Safe to Sign | Review Before Signing | High Risk | Needs Legal Revision | Not Recommended>",
    "reasoning": "<Executive reasoning explaining the risk and suitability>"
  }
}`;
      setAuditStep("Processing compliance algorithms...");
      const response = await generateChatResponse(
        [],
        `Contract Title: ${title || "Custom Agreement Review"}

Contract Text:
${text}`,
        systemPrompt,
        [],
        "English",
        null,
        "legal"
      );
      const responseText = response.reply || response || "";
      let parsedResult = null;
      try {
        const jsonMatch = responseText.match(/```json\s*([\s\S]*?)\s*```/) || responseText.match(/(\{[\s\S]*\})/);
        if (jsonMatch) {
          parsedResult = JSON.parse(jsonMatch[1] || jsonMatch[0]);
        } else {
          parsedResult = JSON.parse(responseText.trim());
        }
      } catch (err) {
        console.error("JSON parse failed, extracting via regex summary", err);
      }
      if (!parsedResult || !parsedResult.stats) {
        throw new Error("Unable to parse structured legal parameters.");
      }
      setAuditResult(parsedResult);
      zt.success("AI Contract intelligence report compiled!", { id: toastId });
      const timestamp = (/* @__PURE__ */ new Date()).toISOString();
      const userEmail = ((_a2 = getUserData()) == null ? void 0 : _a2.email) || "System User";
      const userName = ((_b2 = getUserData()) == null ? void 0 : _b2.name) || "Advocate";
      const newLog = {
        timestamp,
        action: "AI Clause Review Generated",
        details: `Generated intelligence audit. Compliance Rating: ${parsedResult.stats.complianceScore}%, Risk rating: ${parsedResult.stats.reviewStatus}. Identified ${((_c2 = parsedResult.clauses) == null ? void 0 : _c2.length) || 0} active clauses and ${((_d2 = parsedResult.missingClauses) == null ? void 0 : _d2.length) || 0} gaps.`,
        editedBy: `${userName} (${userEmail})`
      };
      const updatedLogs = [...activeLogs, newLog];
      setAuditLogs(updatedLogs);
      await syncToDatabase({
        auditResult: parsedResult,
        auditLogs: updatedLogs
      });
    } catch (err) {
      console.error(err);
      zt.error("Failed to compile structured audit metrics.", { id: toastId });
    } finally {
      setIsAuditing(false);
      setAuditStep("");
    }
  };
  const triggerClauseRewrite = (clause) => {
    setActiveRewriteClause(clause);
    setRewrittenWording("");
    setRewriteTone("Balanced");
  };
  const executeClauseRewrite = async () => {
    if (!activeRewriteClause) return;
    setIsRewriting(true);
    try {
      const systemPrompt = `You are a senior enterprise corporate lawyer drafting contracts under Indian and international laws.
Rewrite the provided clause to make it more ${rewriteTone}. 
Ensure the wording is highly professional, precise, court-ready, and mitigates undue liability.
Output ONLY the rewritten clause text inside a code block. Do NOT add conversational headers, greetings, or details.`;
      const response = await generateChatResponse(
        [],
        `Original Clause Name: ${activeRewriteClause.name}
Original Text: ${activeRewriteClause.text}

Rewrite Style: ${rewriteTone}`,
        systemPrompt,
        [],
        "English",
        null,
        "legal"
      );
      const reply = response.reply || response || "";
      const cleanReply = reply.replace(/```[a-z]*\n?/g, "").replace(/```/g, "").trim();
      setRewrittenWording(cleanReply);
    } catch (e) {
      zt.error("Failed to rewrite clause.");
    } finally {
      setIsRewriting(false);
    }
  };
  const applyRewrittenClause = async () => {
    if (!activeRewriteClause || !rewrittenWording) return;
    const idx = contractText.indexOf(activeRewriteClause.text);
    if (idx === -1) {
      zt.error("Original clause text was modified and could not be matches. Appending revised clause to end.");
      const updatedText = `${contractText}

/* Revised ${activeRewriteClause.name} Clause */
${rewrittenWording}`;
      setContractText(updatedText);
      await createDocumentVersion(updatedText, `Replaced ${activeRewriteClause.name} clause (appended)`);
    } else {
      const updatedText = contractText.replace(activeRewriteClause.text, rewrittenWording);
      setContractText(updatedText);
      await createDocumentVersion(updatedText, `Replaced ${activeRewriteClause.name} clause with ${rewriteTone} version`);
    }
    zt.success("Clause replaced and version logged successfully!");
    setActiveRewriteClause(null);
    if (activeFileId) {
      setFiles((prev) => prev.map((f) => f.id === activeFileId ? { ...f, ocrText: contractText.replace(activeRewriteClause.text, rewrittenWording) } : f));
    }
    await performContractAuditInternal(contractTitle, contractText.replace(activeRewriteClause.text, rewrittenWording), files, versions, auditLogs);
  };
  const sendContractChatMessage = async () => {
    if (!chatInput.trim()) return;
    const userMsg = { id: Date.now().toString(), role: "user", content: chatInput };
    const updatedHistory = [...chatHistory, userMsg];
    setChatHistory(updatedHistory);
    setChatInput("");
    setIsChatSending(true);
    setTimeout(() => {
      var _a2;
      return (_a2 = chatBottomRef.current) == null ? void 0 : _a2.scrollIntoView({ behavior: "smooth" });
    }, 50);
    try {
      const systemPrompt = `You are the Contract Intelligence Assistant. You answer advocate questions specifically using the provided contract text.
Refer to specific clauses, obligations, dates, or details mentioned in the text.
If the answer is not present in the contract, explain that it is missing.
Here is the active contract text for reference:
--------------------
${contractText}
--------------------
Provide clean, professional, courtroom-ready responses.`;
      const response = await generateChatResponse(
        updatedHistory.slice(0, -1),
        // Previous history
        chatInput,
        systemPrompt,
        [],
        "English",
        null,
        "legal"
      );
      const modelMsg = { id: (Date.now() + 1).toString(), role: "model", content: response.reply || response || "" };
      const finalHistory = [...updatedHistory, modelMsg];
      setChatHistory(finalHistory);
      await syncToDatabase({ chatHistory: finalHistory });
    } catch (e) {
      zt.error("Failed to fetch response.");
    } finally {
      setIsChatSending(false);
      setTimeout(() => {
        var _a2;
        return (_a2 = chatBottomRef.current) == null ? void 0 : _a2.scrollIntoView({ behavior: "smooth" });
      }, 50);
    }
  };
  const runContractComparison = async () => {
    if (!secondContractFile || !secondContractFile.base64) {
      zt.error("Please stage a secondary contract file to compare.");
      return;
    }
    setIsComparing(true);
    setComparisonResult(null);
    const toastId = zt.loading("Analyzing clause modifications and risk differentials...");
    try {
      const systemPrompt = `You are a senior corporate contract litigation attorney.
Compare the Primary Contract with the Secondary Contract.
Identify:
1. Clauses that exist in primary but are added or completely new in the secondary.
2. Clauses removed from the primary.
3. Clauses that exist in both but are modified, explaining legal risks and implications.
4. General changes in legal risk scores.

Output your comparison as a valid JSON object matching the requested schema. Do not write normal conversation.
JSON Schema:
{
  "added": [
    { "clause": "<Clause Name>", "text": "<Wording added>", "implication": "<Implication of this addition>" }
  ],
  "removed": [
    { "clause": "<Clause Name>", "text": "<Wording removed>", "implication": "<Implication of this deletion>" }
  ],
  "modified": [
    { "clause": "<Clause Name>", "originalText": "<Primary version>", "modifiedText": "<Secondary version>", "implication": "<Implication of changes>" }
  ],
  "riskChanges": [
    { "clause": "<Clause Name>", "oldRisk": "<Low/Medium/High/Critical>", "newRisk": "<Low/Medium/High/Critical>", "explanation": "<Why risk level shifted>" }
  ]
}`;
      const response = await generateChatResponse(
        [],
        `PRIMARY CONTRACT:
${contractText}

SECONDARY CONTRACT BASE64 STAGED.
Please compare files.`,
        systemPrompt,
        [{ url: `data:application/pdf;base64,${secondContractFile.base64}`, name: secondContractFile.name, type: "document" }],
        "English",
        null,
        "legal"
      );
      const text = response.reply || response || "";
      let parsed = null;
      try {
        const jsonMatch = text.match(/```json\s*([\s\S]*?)\s*```/) || text.match(/(\{[\s\S]*\})/);
        if (jsonMatch) {
          parsed = JSON.parse(jsonMatch[1] || jsonMatch[0]);
        } else {
          parsed = JSON.parse(text.trim());
        }
      } catch (err) {
        console.error("Comparison JSON parse error", err);
      }
      if (!parsed) throw new Error("Unable to parse differences.");
      setComparisonResult(parsed);
      zt.success("Comparison completed!", { id: toastId });
      await logAudit("Contract Comparison Executed", `Compared primary agreement "${contractTitle}" with "${secondContractFile.name}".`);
      await syncToDatabase({ comparisonResult: parsed });
    } catch (e) {
      zt.error("Failed to complete contract comparison.", { id: toastId });
    } finally {
      setIsComparing(false);
    }
  };
  const handleShareReport = async () => {
    var _a2, _b2;
    if (!auditResult) return;
    const shareText = `AISA Legal Audit for ${contractTitle}. Compliance: ${(_a2 = auditResult.stats) == null ? void 0 : _a2.complianceScore}%. Status: ${(_b2 = auditResult.stats) == null ? void 0 : _b2.reviewStatus}.`;
    if (navigator.share) {
      try {
        await navigator.share({ title: `Audit Report: ${contractTitle}`, text: shareText });
        logAudit("Shared Audit Report", "Shared audit metadata report via native channels.");
      } catch (e) {
        console.log(e);
      }
    } else {
      navigator.clipboard.writeText(shareText);
      zt.success("Summary copied to clipboard!");
    }
  };
  const handleSpeechSummary = () => {
    var _a2, _b2, _c2, _d2;
    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    } else if (auditResult) {
      const text = `Contract Audit Summary for ${contractTitle}. Classification: ${(_a2 = auditResult.summary) == null ? void 0 : _a2.contractType}. Overall compliance is ${(_b2 = auditResult.stats) == null ? void 0 : _b2.complianceScore} percent. Risk classification is ${(_c2 = auditResult.stats) == null ? void 0 : _c2.reviewStatus}. Opinion: ${(_d2 = auditResult.finalOpinion) == null ? void 0 : _d2.reasoning}`;
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.onend = () => setIsSpeaking(false);
      utterance.onerror = () => setIsSpeaking(false);
      window.speechSynthesis.speak(utterance);
      setIsSpeaking(true);
    }
  };
  const handlePrintPDF = () => {
    var _a2, _b2, _c2, _d2, _e2, _f2, _g2, _h2, _i2, _j2;
    if (!auditResult) return;
    const printWindow = window.open("", "_blank");
    if (!printWindow) {
      zt.error("Popup blocked! Enable popups to export printable PDF.");
      return;
    }
    const html = `
      <html>
      <head>
        <meta charset="UTF-8"/>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,400;0,700;1,400&family=Noto+Sans+Devanagari:wght@400;700&display=swap" rel="stylesheet"/>
        <title>AISA Contract Intelligence Report - ${contractTitle}</title>
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
          .risk-badge { display: inline-block; padding: 2px 8px; border-radius: 4px; font-weight: bold; font-size: 9pt; }
          .risk-High, .risk-Critical { background: #fee2e2; color: #991b1b; }
          .risk-Medium { background: #fef3c7; color: #92400e; }
          .risk-Low { background: #dcfce7; color: #166534; }
          .footer { margin-top: 60px; border-top: 1px solid #e2e8f0; font-size: 9pt; text-align: center; padding-top: 15px; color: #64748b; }
        </style>
      </head>
      <body>
        <div class="header">
          <div style="font-size: 9pt; font-weight: bold; letter-spacing: 2px; color: #4f46e5; margin-bottom: 5px;">AISA ENTERPRISE CONTRACT INTELLIGENCE</div>
          <h1 class="title">AI Compliance & Risk Audit Report</h1>
          <div style="margin-top: 5px; font-size: 11pt;">Document: <strong>${contractTitle}</strong></div>
        </div>

        <div class="meta-section">
          <div class="meta-grid">
            <div>
              <p><strong>Compliance Rating:</strong> ${(_a2 = auditResult.stats) == null ? void 0 : _a2.complianceScore}%</p>
              <p><strong>Overall Risk Status:</strong> ${(_b2 = auditResult.stats) == null ? void 0 : _b2.reviewStatus}</p>
              <p><strong>AI Confidence Rate:</strong> ${(_c2 = auditResult.stats) == null ? void 0 : _c2.confidenceRate}%</p>
            </div>
            <div>
              <p><strong>Contract Type:</strong> ${(_d2 = auditResult.summary) == null ? void 0 : _d2.contractType}</p>
              <p><strong>Jurisdiction:</strong> ${(_e2 = auditResult.summary) == null ? void 0 : _e2.jurisdiction}</p>
              <p><strong>Governing Law:</strong> ${(_f2 = auditResult.summary) == null ? void 0 : _f2.governingLaw}</p>
            </div>
          </div>
        </div>

        <div class="section-title">1. Executive Final Opinion</div>
        <p style="font-size: 11pt; line-height: 1.6;">${contractOpinionDisplay || ((_g2 = auditResult.finalOpinion) == null ? void 0 : _g2.reasoning)}</p>

        <div class="section-title">2. Clause-by-Clause Risk Breakdown</div>
        <table>
          <thead>
            <tr>
              <th style="width: 25%;">Clause Name</th>
              <th style="width: 15%;">Risk Level</th>
              <th>Auditor Exposure & Suggestions</th>
            </tr>
          </thead>
          <tbody>
            ${((_h2 = auditResult.clauses) == null ? void 0 : _h2.map((c) => `
              <tr>
                <td><strong>${c.name}</strong></td>
                <td><span class="risk-badge risk-${c.risk}">${c.risk}</span></td>
                <td>
                  <p style="margin: 0 0 5px 0;">${c.explanation}</p>
                  ${c.suggestion ? `<p style="margin: 5px 0 0 0; font-style: italic; color: #4f46e5;">Proposed: ${c.suggestion}</p>` : ""}
                </td>
              </tr>
            `).join("")) || '<tr><td colspan="3">No clauses analyzed.</td></tr>'}
          </tbody>
        </table>

        <div class="section-title">3. Identified Gaps & Missing Clauses</div>
        <ul>
          ${((_i2 = auditResult.missingClauses) == null ? void 0 : _i2.map((m) => `
            <li style="margin-bottom: 10px; font-size: 11pt;">
              <strong>${m.name}</strong> (${m.category}) - ${m.explanation}
              <br/><span style="color: #b91c1c; font-size: 10pt;">Risk Created: ${m.riskCreated}</span>
            </li>
          `).join("")) || "<li>No missing clauses identified.</li>"}
        </ul>

        <div class="section-title">4. Compliance Framework Evaluation</div>
        <ul>
          ${((_j2 = auditResult.compliance) == null ? void 0 : _j2.map((c) => `
            <li style="margin-bottom: 8px; font-size: 11pt;">
              <strong>${c.law}:</strong> Status [${c.status}] - ${c.explanation}
            </li>
          `).join("")) || "<li>No compliance modules mapped.</li>"}
        </ul>

        <div class="footer">
          Generated automatically by AISA Court-Ready Platform on ${(/* @__PURE__ */ new Date()).toLocaleString()}
          <br/>Audit logs synced. Secured and authenticated document copy.
        </div>
      </body>
      </html>
    `;
    printWindow.document.write(html);
    printWindow.document.close();
    printWindow.focus();
    setTimeout(() => {
      printWindow.print();
      logAudit("Exported PDF Report", "Generated and exported printable contract review PDF.");
    }, 500);
  };
  const handleExportDoc = () => {
    var _a2, _b2, _c2, _d2, _e2, _f2, _g2, _h2, _i2, _j2, _k2, _l2, _m2, _n2, _o2, _p2, _q2, _r2, _s2, _t2, _u2, _v2;
    if (!auditResult) return;
    const docContent = `
AISA CONTRACT INTELLIGENCE PLATFORM REPORT
=========================================

Title: ${contractTitle}
Audited Date: ${(/* @__PURE__ */ new Date()).toLocaleDateString()}
Compliance Score: ${(_a2 = auditResult.stats) == null ? void 0 : _a2.complianceScore}%
Risk Rating: ${(_b2 = auditResult.stats) == null ? void 0 : _b2.reviewStatus}
AI Confidence Rate: ${(_c2 = auditResult.stats) == null ? void 0 : _c2.confidenceRate}%

SUMMARY INFO:
-------------
- Contract Classification: ${(_d2 = auditResult.summary) == null ? void 0 : _d2.contractType}
- Parties Involved: ${(_e2 = auditResult.summary) == null ? void 0 : _e2.parties}
- Effective Date: ${(_f2 = auditResult.summary) == null ? void 0 : _f2.effectiveDate}
- Jurisdiction: ${(_g2 = auditResult.summary) == null ? void 0 : _g2.jurisdiction}
- Governing Legislation: ${(_h2 = auditResult.summary) == null ? void 0 : _h2.governingLaw}
- Payment Terms: ${(_i2 = auditResult.summary) == null ? void 0 : _i2.paymentTerms}

FINAL AI LEGAL OPINION:
-----------------------
${contractOpinionDisplay || ((_j2 = auditResult.finalOpinion) == null ? void 0 : _j2.reasoning)}

AUDITED CLAUSES REPORT:
-----------------------
${(_k2 = auditResult.clauses) == null ? void 0 : _k2.map((c) => `
Clause Name: ${c.name}
Risk Rating: ${c.risk}
Unfair Clause Flag: ${c.unfair ? "YES" : "NO"}
Clause Draft text: "${c.text}"
Auditor Findings: ${c.explanation}
Proposed Alternate: ${c.suggestion || "No edits suggested."}
-----------------------
`).join("\n")}

IDENTIFIED GAPS & MISSING CLAUSES:
----------------------------------
${(_l2 = auditResult.missingClauses) == null ? void 0 : _l2.map((m) => `
- [${m.category}] ${m.name}:
  Description: ${m.explanation}
  Risk Created: ${m.riskCreated}
`).join("\n")}

COMPLIANCE ROADMAP:
-------------------
${(_m2 = auditResult.compliance) == null ? void 0 : _m2.map((c) => `- ${c.law} [${c.status}]: ${c.explanation}`).join("\n")}

FINANCIAL OBLIGATIONS EXTRACT:
------------------------------
${((_n2 = auditResult.financials) == null ? void 0 : _n2.summaryText) || ""}
- Payments: ${((_o2 = auditResult.financials) == null ? void 0 : _o2.paymentAmount) || "N/A"}
- Taxes / GST: ${((_p2 = auditResult.financials) == null ? void 0 : _p2.taxes) || "N/A"}
- Penalty Rates: ${((_q2 = auditResult.financials) == null ? void 0 : _q2.penalty) || "N/A"}

OBLIGATIONS TIMELINE:
---------------------
${((_r2 = auditResult.obligations) == null ? void 0 : _r2.summaryText) || ""}
Your obligations:
${(_t2 = (_s2 = auditResult.obligations) == null ? void 0 : _s2.yours) == null ? void 0 : _t2.map((o) => `  * ${o}`).join("\n")}
Opposing party obligations:
${(_v2 = (_u2 = auditResult.obligations) == null ? void 0 : _u2.theirs) == null ? void 0 : _v2.map((o) => `  * ${o}`).join("\n")}

Generated by AISA AI Legal Assistant. Database verified.
`;
    const blob = new Blob([docContent], { type: "application/msword" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `${contractTitle.replace(/\s+/g, "_")}_AISA_Audit_Report.doc`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    logAudit("Downloaded DOCX Report", "Downloaded structured Word review report.");
    zt.success("Word document review report downloaded!");
  };
  const handleQuickToolSelect = (toolId) => {
    let title = "";
    let text = "";
    if (toolId === "NDA") {
      title = "Mutual Non-Disclosure Agreement.pdf";
      text = `This Mutual Non-Disclosure Agreement is entered between TechCorp India and SparkAI Solutions. Section 6 (Indemnity) states that SparkAI must fully indemnify TechCorp for any indirect, incidental, or consequential damages resulting from proprietary breaches, without any limitation of liability. No reciprocal indemnity is provided for TechCorp breaches. All disputes are governed exclusively by New York law.`;
    } else if (toolId === "Employment") {
      title = "Executive Employment Agreement.docx";
      text = `Section 15 states that the Executive agrees to a 24-month post-employment non-compete covenant applicable worldwide. The Company reserves the unilateral right to terminate the Executive immediately without notice, compensation, or payment in lieu of notice for any structural reorganization. The Executive waives all rights to seek court-ordered arbitration or labor disputes redressal.`;
    } else if (toolId === "Lease") {
      title = "Commercial Office Lease Deed.docx";
      text = `Section 9 states that the Landlord shall have the right to escalate the monthly license fee by 18% compounding annually. Under Section 14, in the event of any municipal utility maintenance delays exceeding 48 hours, the Landlord reserves the absolute right of summary eviction with a 72-hour vacate notice. The Security Deposit is forfeited entirely if tenancy is terminated before 36 months.`;
    } else if (toolId === "Vendor") {
      title = "Master Services Vendor Contract.pdf";
      text = `Section 12 details payment terms as Net 120 days upon client certification. Any delay in project sprints, irrespective of lockdowns, force majeure, or developer illness, shall attract a daily liquidated penalty of 2% of the aggregate annual contract value. All Intellectual Property rights transfers to the client immediately upon codeline creation.`;
    } else if (toolId === "Investment") {
      title = "Series A Share Purchase Agreement.pdf";
      text = `Section 5 stipulates a 3.5x liquidation preference on all preferred class stocks. The investors retain full veto rights over board approvals, including hiring, operations budgets, and scaling paths. Founder vesting is extended to 7 years with a 2-year cliff. Governing jurisdiction is exclusively Singapore arbitration centers.`;
    } else if (toolId === "SaaS") {
      title = "Enterprise Cloud SaaS License.docx";
      text = `Section 10 grants customer SaaS access. The SLA availability is set at 96% with no service credit refunds for outages. Section 14 states that all metadata telemetry, transaction facts, and uploaded databases become the exclusive IP of the Provider with reseller capabilities.`;
    } else if (toolId === "Privacy") {
      title = "App User Privacy Policy.txt";
      text = `This policy details that the App stores all geolocation tracking, contact logs, device telemetry, and advertising IDs indefinitely. This data is shared and sold to ad-broker networks. By downloading, the user consents. No opt-out forms are supported. Dispute venue is located in Seychelles under local rules.`;
    }
    setContractTitle(title);
    setContractText(text);
    zt.success(`Template loaded: ${title}`);
    performContractAuditInternal(title, text, files, versions, auditLogs);
  };
  const stats = reactExports.useMemo(() => {
    if (auditResult && auditResult.stats) {
      return auditResult.stats;
    }
    return {
      overallScore: "--",
      riskScore: "--",
      complianceScore: "--",
      missingClausesCount: "--",
      confidenceRate: "--",
      highRiskClausesCount: 0,
      mediumRiskClausesCount: 0,
      lowRiskClausesCount: 0,
      totalClausesCount: 0,
      reviewStatus: "--"
    };
  }, [auditResult]);
  reactExports.useMemo(() => {
    return allTools.filter((t) => {
      const matchSearch = t.name.toLowerCase().includes(toolsSearchQuery.toLowerCase()) || t.desc.toLowerCase().includes(toolsSearchQuery.toLowerCase());
      const matchCat = toolsCategory === "All" || t.category === toolsCategory;
      return matchSearch && matchCat;
    });
  }, [toolsSearchQuery, toolsCategory]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `flex-1 flex flex-col w-full h-full min-h-0 ${isDark ? "bg-[#070b16] text-slate-100" : "bg-slate-50 text-slate-800"} overflow-hidden select-none`, children: [
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
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: `text-lg font-black leading-none tracking-tight ${isDark ? "text-white" : "text-slate-900"}`, children: "AI Contract Intelligence Platform" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 mt-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] font-black text-indigo-500 uppercase tracking-widest", children: "AISA COURT-READY SYSTEM" }),
            isSyncing && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] font-bold text-emerald-500 uppercase tracking-wider animate-pulse ml-2", children: "✓ DB Synced" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          onClick: () => setHistoryVisible(true),
          className: `flex items-center gap-1.5 px-3.5 py-2 border rounded-xl text-xs font-black uppercase tracking-wider transition-colors ${isDark ? "bg-[#1A2540] border-slate-800 text-indigo-400 hover:bg-[#202E50]" : "bg-indigo-50 border-indigo-200/30 text-indigo-600 hover:bg-indigo-100"}`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(History, { size: 14 }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
              "Platform Logs (",
              auditLogs.length,
              ")"
            ] })
          ]
        }
      ) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 flex w-full min-h-0 overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `w-80 flex flex-col border-r shrink-0 overflow-y-auto custom-scrollbar p-5 space-y-5 ${isDark ? "border-slate-800 bg-[#0c1224]" : "border-slate-200 bg-white"}`, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-[9px] font-black uppercase tracking-widest text-slate-400", children: "Linked Case / Workspace" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "select",
            {
              value: linkedCaseId,
              onChange: (e) => {
                const id = e.target.value;
                setLinkedCaseId(id);
                if (id) {
                  const selected = allProjects.find((p) => p._id === id);
                  hydrateFromCase(selected);
                  zt.success(`Context synced with case: ${selected.name}`);
                } else {
                  resetPlatformState();
                }
              },
              className: `w-full border rounded-xl px-3.5 py-2.5 text-xs font-bold outline-none ${isDark ? "bg-black/20 border-zinc-800 text-white focus:ring-indigo-500/20" : "bg-slate-50 border-slate-200 text-slate-800 focus:ring-2 focus:ring-indigo-500/20"}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "Manual Entry (Auto-Create case)" }),
                allProjects.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: c._id, children: c.name }, c._id))
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-[9px] font-black uppercase tracking-widest text-slate-400", children: "Upload Contract File" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: `border-2 border-dashed rounded-2xl p-5 text-center transition-all relative ${isDark ? "border-zinc-800 hover:border-indigo-500/50 bg-[#131c31]/30" : "border-slate-200 hover:border-indigo-500 bg-slate-50/50"}`,
              onDragOver: (e) => {
                e.preventDefault();
                e.stopPropagation();
                e.currentTarget.style.borderColor = "#6366f1";
                e.currentTarget.style.backgroundColor = isDark ? "rgba(99,102,241,0.08)" : "rgba(99,102,241,0.05)";
              },
              onDragEnter: (e) => {
                e.preventDefault();
                e.stopPropagation();
              },
              onDragLeave: (e) => {
                e.preventDefault();
                e.stopPropagation();
                e.currentTarget.style.borderColor = "";
                e.currentTarget.style.backgroundColor = "";
              },
              onDrop: (e) => {
                e.preventDefault();
                e.stopPropagation();
                e.currentTarget.style.borderColor = "";
                e.currentTarget.style.backgroundColor = "";
                if (isOcrLoading || isAuditing) return;
                const droppedFiles = e.dataTransfer.files;
                if (droppedFiles && droppedFiles.length > 0) {
                  handleFileUpload({ target: { files: droppedFiles } });
                }
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    type: "file",
                    multiple: true,
                    accept: ".pdf,.docx,.doc,.txt,image/*",
                    onChange: (e) => {
                      handleFileUpload(e);
                      e.target.value = "";
                    },
                    className: "absolute inset-0 w-full h-full opacity-0 cursor-pointer",
                    style: { zIndex: 10 },
                    disabled: isOcrLoading || isAuditing
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Upload, { className: "mx-auto text-indigo-500 mb-2", size: 24 }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] font-black text-slate-500 dark:text-slate-400", children: "DRAG & DROP OR BROWSE" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[8px] text-slate-400 mt-1", children: "PDF, DOCX, TXT, DOC, Images (OCR enabled)" }),
                files.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[9px] font-bold text-indigo-500 mt-2 truncate", children: files[files.length - 1].name })
              ]
            }
          )
        ] }),
        files.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "text-[9px] font-black uppercase tracking-widest text-slate-400", children: [
            "Staged Contracts (",
            files.length,
            ")"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-1.5 max-h-36 overflow-y-auto pr-1 custom-scrollbar", children: files.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              onClick: () => {
                setActiveFileId(f.id);
                setContractTitle(f.name);
                setContractText(f.ocrText);
                performContractAuditInternal(f.name, f.ocrText, files, versions, auditLogs);
              },
              className: `w-full flex items-center justify-between p-2.5 rounded-xl border text-left text-xs font-bold transition-all ${f.id === activeFileId ? "border-indigo-500/50 bg-indigo-500/10 text-indigo-500" : "border-slate-200/50 dark:border-zinc-800 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-[#1A2540]/30"}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 truncate", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(FileCheck, { size: 14, className: "shrink-0" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "truncate", children: f.name })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[8px] text-slate-400 font-medium shrink-0", children: [
                  Math.round(f.size / 1024),
                  " KB"
                ] })
              ]
            },
            f.id
          )) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-slate-500/5 rounded-2xl p-4 space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-[9px] font-black tracking-widest text-slate-400 uppercase", children: "LOAD TEMPLATE" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 gap-1.5 max-h-36 overflow-y-auto pr-1 custom-scrollbar", children: allTools.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              onClick: () => handleQuickToolSelect(t.id),
              className: `text-left p-2.5 bg-white dark:bg-[#1A2540] border border-slate-200 dark:border-white/5 rounded-xl transition-all hover:border-indigo-500/40 group flex flex-col justify-between`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-[10px] font-black text-slate-800 dark:text-white group-hover:text-indigo-500 truncate", children: t.name }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[8px] text-slate-400 leading-none mt-1 truncate", children: t.desc })
              ]
            },
            t.id
          )) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border border-slate-200 dark:border-slate-800/80 rounded-2xl p-4 space-y-3 bg-[#131c31]/10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] font-black text-slate-400 uppercase tracking-widest", children: "OCR / Transcribed Text" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: () => setIsEditingOcr(!isEditingOcr),
                className: "text-[9px] font-black text-indigo-500 uppercase tracking-wider",
                children: isEditingOcr ? "Discard" : "Edit text"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center bg-slate-100 dark:bg-black/25 rounded-lg px-2.5 py-1.5 border border-slate-200/50 dark:border-zinc-800", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { size: 12, className: "text-slate-400 mr-1.5 shrink-0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "text",
                placeholder: "Search OCR keywords...",
                className: "w-full bg-transparent border-none text-[10px] font-bold outline-none text-slate-850 dark:text-white",
                value: ocrSearchQuery,
                onChange: (e) => setOcrSearchQuery(e.target.value)
              }
            )
          ] }),
          isEditingOcr ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "textarea",
              {
                className: `w-full h-36 p-2 rounded-xl text-[10px] font-medium outline-none resize-none border ${isDark ? "bg-black/40 border-zinc-800 text-white focus:border-indigo-500" : "bg-slate-50 border-slate-200 text-slate-800 focus:border-indigo-500"}`,
                value: contractText,
                onChange: (e) => setContractText(e.target.value)
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: async () => {
                  setIsEditingOcr(false);
                  if (activeFileId) {
                    setFiles((prev) => prev.map((f) => f.id === activeFileId ? { ...f, ocrText: contractText } : f));
                  }
                  await createDocumentVersion(contractText, "Manual OCR text adjustment");
                  zt.success("Extracted text updated!");
                  performContractAuditInternal(contractTitle, contractText, files, versions, auditLogs);
                },
                className: "w-full py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-[10px] font-black uppercase tracking-wider transition-all",
                children: "Save Updates"
              }
            )
          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `h-36 overflow-y-auto p-2.5 rounded-xl border text-[10px] leading-relaxed font-semibold font-mono whitespace-pre-wrap select-text custom-scrollbar ${isDark ? "bg-black/20 border-zinc-800 text-slate-300" : "bg-slate-50 border-slate-200 text-slate-700"}`, children: ocrSearchQuery ? (() => {
            const parts = contractText.split(new RegExp(`(${ocrSearchQuery})`, "gi"));
            return parts.map(
              (p, i) => p.toLowerCase() === ocrSearchQuery.toLowerCase() ? /* @__PURE__ */ jsxRuntimeExports.jsx("mark", { className: "bg-yellow-300 dark:bg-yellow-600/80 text-black px-0.5 rounded font-black", children: p }, i) : p
            );
          })() : contractText || "No contract text loaded. Upload a file or load a template." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: () => {
                navigator.clipboard.writeText(contractText);
                zt.success("Text copied to clipboard!");
              },
              disabled: !contractText,
              className: "w-full py-1.5 border border-slate-200 dark:border-zinc-800 rounded-lg text-[9px] font-black uppercase tracking-wider text-slate-500 hover:text-indigo-500 transition-colors disabled:opacity-50",
              children: "Copy Text"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 flex flex-col min-w-0 overflow-y-auto custom-scrollbar px-6 py-6 space-y-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl w-full mx-auto space-y-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 md:grid-cols-5 gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `border rounded-3xl p-5 shadow-sm flex flex-col items-center justify-center text-center ${isDark ? "bg-[#131c31]/30 border-slate-800" : "bg-white border-slate-200"}`, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Award, { className: stats.reviewStatus === "Safe to Sign" ? "text-emerald-500" : "text-amber-500", size: 24 }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `text-xl font-black mt-2 tracking-tight ${stats.overallScore > 80 ? "text-emerald-500" : stats.overallScore > 60 ? "text-amber-500" : "text-red-500"}`, children: [
              stats.overallScore,
              "%"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] text-slate-400 font-extrabold uppercase tracking-wider mt-1", children: "Contract Score" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `border rounded-3xl p-5 shadow-sm flex flex-col items-center justify-center text-center ${isDark ? "bg-[#131c31]/30 border-slate-800" : "bg-white border-slate-200"}`, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: stats.riskScore > 60 ? "text-red-500" : "text-amber-500", size: 24 }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `text-xl font-black mt-2 tracking-tight ${stats.riskScore > 60 ? "text-red-500" : stats.riskScore > 30 ? "text-amber-500" : "text-emerald-500"}`, children: [
              stats.riskScore,
              "%"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] text-slate-400 font-extrabold uppercase tracking-wider mt-1", children: "Legal Risk Score" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `border rounded-3xl p-5 shadow-sm flex flex-col items-center justify-center text-center ${isDark ? "bg-[#131c31]/30 border-slate-800" : "bg-white border-slate-200"}`, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { className: "text-emerald-500", size: 24 }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xl font-black mt-2 tracking-tight text-emerald-500", children: [
              stats.complianceScore,
              "%"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] text-slate-400 font-extrabold uppercase tracking-wider mt-1", children: "Compliance Score" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `border rounded-3xl p-5 shadow-sm flex flex-col items-center justify-center text-center ${isDark ? "bg-[#131c31]/30 border-slate-800" : "bg-white border-slate-200"}`, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "text-indigo-500", size: 24 }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xl font-black mt-2 tracking-tight text-slate-800 dark:text-white", children: stats.missingClausesCount }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] text-slate-400 font-extrabold uppercase tracking-wider mt-1", children: "Missing Clauses" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `border rounded-3xl p-5 shadow-sm flex flex-col items-center justify-center text-center ${isDark ? "bg-[#131c31]/30 border-slate-800" : "bg-white border-slate-200"}`, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Brain, { className: "text-pink-500", size: 24 }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xl font-black mt-2 tracking-tight text-pink-500", children: [
              stats.confidenceRate,
              "%"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] text-slate-400 font-extrabold uppercase tracking-wider mt-1", children: "AI Confidence" })
          ] })
        ] }),
        contractText && !auditResult && !isAuditing && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `p-6 border rounded-3xl text-center shadow-md ${isDark ? "bg-[#131c31]/20 border-slate-800" : "bg-white border-slate-200"}`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "mx-auto text-indigo-500 mb-3", size: 32 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-black text-slate-850 dark:text-white mb-1.5 uppercase", children: "Contract Text Staged" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-slate-400 max-w-md mx-auto leading-relaxed mb-4", children: "The text of your contract is staged and ready for analysis. Trigger the AI legal auditor to identify clauses, analyze liabilities, verify compliance laws, and audit risk levels." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: runContractAudit,
              className: "px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl font-black text-xs uppercase tracking-wider transition-all shadow-md shadow-indigo-500/20",
              children: "Analyze & Run Legal Audit"
            }
          )
        ] }),
        isAuditing && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `p-8 border rounded-3xl text-center shadow-md space-y-4 ${isDark ? "bg-[#131c31]/20 border-slate-800" : "bg-white border-slate-200"}`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin mx-auto" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-black text-indigo-500 animate-pulse uppercase tracking-wider", children: "AISA Auditing System Active" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] font-black text-slate-400 uppercase tracking-widest", children: auditStep || "Scanning contract structures..." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-48 bg-slate-100 dark:bg-black/30 h-1.5 rounded-full mx-auto overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-full bg-indigo-600 animate-progress rounded-full w-2/3" }) })
        ] }),
        auditResult && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between border-b border-slate-200 dark:border-zinc-800 pb-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-1 overflow-x-auto pb-1.5 no-scrollbar max-w-full", children: [
              { id: "summary", name: "Executive Summary", icon: Gavel },
              { id: "clauses", name: "Clause Detection", icon: Shield },
              { id: "missing", name: "Missing Clauses", icon: TriangleAlert },
              { id: "risks", name: "Unfair Clauses", icon: Scale },
              { id: "compliance", name: "Compliance Engine", icon: Landmark },
              { id: "financials", name: "Financial Analysis", icon: FileSpreadsheet },
              { id: "obligations", name: "Obligation Tracker", icon: Clock },
              { id: "dates", name: "Timeline Dates", icon: Clock },
              { id: "compare", name: "Compare Contract", icon: RefreshCw },
              { id: "chat", name: "Contract Chat", icon: Send }
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
                  lang: contractLang,
                  onChange: handleContractLangChange,
                  isTranslating: isContractTranslating
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
                  title: "Read Aloud",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(Mic, { size: 14 })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  onClick: handlePrintPDF,
                  className: `p-2 rounded-lg text-indigo-600 hover:text-indigo-750 transition-colors ${isDark ? "hover:bg-zinc-800" : "hover:bg-slate-100"}`,
                  title: "Print PDF",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(Printer, { size: 14 })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  onClick: handleExportDoc,
                  className: `p-2 rounded-lg text-emerald-600 hover:text-emerald-700 transition-colors ${isDark ? "hover:bg-zinc-800" : "hover:bg-slate-100"}`,
                  title: "Export Word Document",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(FileDown, { size: 14 })
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `border rounded-3xl p-6 shadow-md min-h-[350px] select-text ${isDark ? "bg-[#1A2540] border-slate-800" : "bg-white border-slate-200"}`, children: [
            activeTab === "summary" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
              isContractTranslating && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 text-[10px] font-bold text-indigo-500 animate-pulse", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-2.5 h-2.5 border-2 border-indigo-500 border-t-transparent rounded-full animate-spin" }),
                "अनुवाद हो रहा है..."
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-2xl bg-indigo-500/10 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Gavel, { className: "text-indigo-500", size: 20 }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-black text-slate-400 uppercase tracking-widest", children: "AISA Platform Decision Recommendation" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: `text-base font-black mt-0.5 uppercase ${stats.reviewStatus === "Safe to Sign" ? "text-emerald-500" : stats.reviewStatus === "Needs Legal Revision" || stats.reviewStatus === "Review Before Signing" ? "text-amber-500" : "text-red-500"}`, children: stats.reviewStatus }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `text-xs font-semibold text-slate-500 mt-1 leading-relaxed transition-opacity duration-200 ${isContractTranslating ? "opacity-50" : "opacity-100"}`, children: contractOpinionDisplay || ((_a = auditResult.finalOpinion) == null ? void 0 : _a.reasoning) })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-[1px] bg-slate-200 dark:bg-zinc-800/80" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
                { label: "Contract Classification", value: (_b = auditResult.summary) == null ? void 0 : _b.contractType },
                { label: "Parties Involved", value: (_c = auditResult.summary) == null ? void 0 : _c.parties },
                { label: "Jurisdiction Venue", value: (_d = auditResult.summary) == null ? void 0 : _d.jurisdiction },
                { label: "Governing Legislation", value: (_e = auditResult.summary) == null ? void 0 : _e.governingLaw },
                { label: "Effective Date", value: (_f = auditResult.summary) == null ? void 0 : _f.effectiveDate },
                { label: "Expiration Term", value: (_g = auditResult.summary) == null ? void 0 : _g.expiryDate },
                { label: "Contract Duration", value: (_h = auditResult.summary) == null ? void 0 : _h.duration },
                { label: "Payment Terms / Rules", value: (_i = auditResult.summary) == null ? void 0 : _i.paymentTerms }
              ].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] font-black text-slate-400 uppercase tracking-widest", children: s.label }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-bold text-slate-700 dark:text-slate-200", children: s.value || "Not Specified" })
              ] }, s.label)) })
            ] }),
            activeTab === "clauses" && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-left text-xs font-bold", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-slate-200 dark:border-zinc-800 text-slate-400", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-3 px-2 uppercase tracking-wider text-[10px]", children: "Clause Name" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-3 px-2 uppercase tracking-wider text-[10px]", children: "Risk Flag" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-3 px-2 uppercase tracking-wider text-[10px]", children: "Findings Details" })
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { className: "divide-y divide-slate-100 dark:divide-zinc-800/40", children: (_j = auditResult.clauses) == null ? void 0 : _j.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "hover:bg-slate-500/5 transition-colors", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 px-2 text-slate-900 dark:text-white", children: c.name }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 px-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `px-2 py-0.5 text-[8px] font-black uppercase rounded-md ${c.risk === "Low" ? "bg-emerald-500/10 text-emerald-500" : c.risk === "Medium" ? "bg-amber-500/10 text-amber-500" : "bg-red-500/10 text-red-500"}`, children: c.risk }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "py-3 px-2 text-slate-600 dark:text-slate-400 font-medium", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: c.explanation }),
                  c.suggestion && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-indigo-500 font-bold mt-1 text-[10px]", children: [
                    "Suggestion: ",
                    c.suggestion
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2 mt-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "button",
                    {
                      onClick: () => triggerClauseRewrite(c),
                      className: "text-[9px] font-black uppercase text-indigo-500 tracking-wider flex items-center gap-1",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { size: 10 }),
                        " Rewrite clause"
                      ]
                    }
                  ) })
                ] })
              ] }, c.id)) })
            ] }) }) }),
            activeTab === "missing" && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 gap-4", children: (_k = auditResult.missingClauses) == null ? void 0 : _k.map((m, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 rounded-2xl border border-slate-200/60 dark:border-zinc-850 bg-slate-500/5 space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xs font-black text-slate-900 dark:text-white uppercase tracking-wider", children: m.name }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `px-2.5 py-0.5 rounded-md text-[8px] font-black uppercase ${m.category === "Critical Missing" ? "bg-red-500/10 text-red-500" : "bg-amber-500/10 text-amber-500"}`, children: m.category })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-slate-500 leading-relaxed", children: m.explanation }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 bg-red-500/5 rounded-xl border border-red-500/10 flex items-start gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "text-red-500 mt-0.5 shrink-0", size: 14 }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] font-bold text-red-500 leading-normal", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Vulnerability Created:" }),
                  " ",
                  m.riskCreated
                ] })
              ] })
            ] }, index)) }) }),
            activeTab === "risks" && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 gap-4", children: [
              (_l = auditResult.clauses) == null ? void 0 : _l.filter((c) => c.unfair || c.risk === "High" || c.risk === "Critical").map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 rounded-2xl border border-red-500/20 bg-red-500/5 space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "text-xs font-black text-slate-900 dark:text-white uppercase", children: [
                    c.name,
                    " (Audited Clause)"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "px-2 py-0.5 bg-red-500 text-white rounded-md text-[8px] font-black uppercase", children: [
                    c.risk,
                    " Risk / Unfair"
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("blockquote", { className: "p-3 bg-black/10 rounded-xl border-l-4 border-red-500 font-mono text-[10px] leading-relaxed text-slate-400 select-text", children: [
                  '"',
                  c.text,
                  '"'
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs font-semibold text-red-500 leading-relaxed", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Legal Findings:" }),
                  " ",
                  c.explanation
                ] }),
                c.suggestion && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 bg-emerald-500/5 rounded-xl border border-emerald-500/10 space-y-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] font-black text-emerald-500 uppercase tracking-widest", children: "Recommended alternate wording" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs font-bold text-emerald-600 dark:text-emerald-400 font-mono leading-relaxed", children: [
                    '"',
                    c.suggestion,
                    '"'
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      onClick: () => handleQuickToolSelect("NDA"),
                      className: "text-[9px] font-black uppercase text-indigo-500 mt-2 block",
                      children: "Apply this correction edit"
                    }
                  )
                ] })
              ] }, c.id)),
              ((_m = auditResult.clauses) == null ? void 0 : _m.filter((c) => c.unfair || c.risk === "High" || c.risk === "Critical").length) === 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-10", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { size: 32, className: "mx-auto text-emerald-500 mb-2" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-bold text-slate-500", children: "No unfair or critical liability clauses flagged!" })
              ] })
            ] }) }),
            activeTab === "compliance" && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "divide-y divide-slate-100 dark:divide-zinc-800/40", children: (_n = auditResult.compliance) == null ? void 0 : _n.map((c, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "py-3.5 flex items-start justify-between gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xs font-black text-slate-900 dark:text-white uppercase tracking-wider", children: c.law }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-slate-500 leading-relaxed", children: c.explanation })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `px-2.5 py-0.5 rounded-lg text-[9px] font-black uppercase ${c.status === "Compliant" ? "bg-emerald-500/10 text-emerald-500" : "bg-red-500/10 text-red-500"}`, children: c.status })
            ] }, index)) }) }),
            activeTab === "financials" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-slate-500 leading-relaxed", children: (_o = auditResult.financials) == null ? void 0 : _o.summaryText }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-[1px] bg-slate-200 dark:bg-zinc-800/80" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
                { label: "Payment Terms / Value", value: (_p = auditResult.financials) == null ? void 0 : _p.paymentAmount },
                { label: "Applicable Taxes / GST", value: (_q = auditResult.financials) == null ? void 0 : _q.taxes },
                { label: "Retainer / Escrow Deposits", value: (_r = auditResult.financials) == null ? void 0 : _r.deposit },
                { label: "Liquidated Penalty Rates", value: (_s = auditResult.financials) == null ? void 0 : _s.penalty },
                { label: "Late Fees or Interest", value: (_t = auditResult.financials) == null ? void 0 : _t.lateFees },
                { label: "Compounding Calculations", value: (_u = auditResult.financials) == null ? void 0 : _u.interest },
                { label: "Renewal Rate Charges", value: (_v = auditResult.financials) == null ? void 0 : _v.renewalCharges }
              ].map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3.5 border border-slate-100 dark:border-zinc-800 bg-slate-500/5 rounded-2xl", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] font-black text-slate-400 uppercase tracking-widest", children: f.label }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-bold text-slate-800 dark:text-white mt-1", children: f.value || "Not specified" })
              ] }, f.label)) })
            ] }),
            activeTab === "obligations" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-slate-500 leading-relaxed", children: (_w = auditResult.obligations) == null ? void 0 : _w.summaryText }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3 p-4 rounded-2xl border border-indigo-500/10 bg-indigo-500/5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] font-black text-indigo-500 uppercase tracking-widest", children: "Your Assigned Obligations" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2", children: (_y = (_x = auditResult.obligations) == null ? void 0 : _x.yours) == null ? void 0 : _y.map((o, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2 text-xs font-semibold text-slate-700 dark:text-slate-200 leading-relaxed", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-indigo-500 mt-1.5 shrink-0" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: o })
                  ] }, index)) })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3 p-4 rounded-2xl border border-violet-500/10 bg-violet-500/5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] font-black text-violet-500 uppercase tracking-widest", children: "Counterparty Obligations" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2", children: (_A = (_z = auditResult.obligations) == null ? void 0 : _z.theirs) == null ? void 0 : _A.map((o, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2 text-xs font-semibold text-slate-700 dark:text-slate-200 leading-relaxed", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-violet-500 mt-1.5 shrink-0" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: o })
                  ] }, index)) })
                ] })
              ] })
            ] }),
            activeTab === "dates" && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative border-l-2 border-indigo-500/30 pl-6 ml-3 space-y-6 py-2", children: (_B = auditResult.timeline) == null ? void 0 : _B.map((t, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -left-[31px] top-0 w-4.5 h-4.5 rounded-full border-4 border-indigo-600 bg-white dark:bg-[#1A2540] flex items-center justify-center shrink-0" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] font-black text-indigo-500 uppercase tracking-widest", children: t.date }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xs font-black text-slate-900 dark:text-white uppercase", children: t.event }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-slate-500 leading-relaxed", children: t.description })
              ] })
            ] }, index)) }) }),
            activeTab === "compare" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col md:flex-row items-center justify-between gap-4 p-4 border border-slate-200/60 dark:border-zinc-800/80 rounded-2xl bg-slate-500/5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-2 bg-indigo-500/10 rounded-xl text-indigo-500", children: /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { size: 20, className: isComparing ? "animate-spin" : "" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xs font-black text-slate-900 dark:text-white uppercase tracking-wider", children: "Compare with secondary draft" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-slate-400 font-semibold mt-0.5", children: "Upload a secondary version of this contract to run a line-by-line diff and analyze liability shifts." })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 shrink-0", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `relative border border-dashed rounded-xl px-4 py-2 text-center transition-all ${isDark ? "border-zinc-850 hover:border-indigo-500" : "border-slate-300 hover:border-indigo-500"}`, children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "input",
                      {
                        type: "file",
                        onChange: (e) => handleFileUpload(e, true),
                        className: "absolute inset-0 w-full h-full opacity-0 cursor-pointer",
                        disabled: isComparing
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-black text-indigo-500 uppercase tracking-wider", children: secondContractFile ? secondContractFile.name : "Select Diff Draft" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      onClick: runContractComparison,
                      disabled: isComparing || !secondContractFile,
                      className: "px-4 py-2 bg-indigo-650 hover:bg-indigo-700 text-white rounded-xl text-[10px] font-black uppercase tracking-wider shadow-sm transition-all disabled:opacity-50",
                      children: "Compare files"
                    }
                  )
                ] })
              ] }),
              comparisonResult ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
                ((_C = comparisonResult.added) == null ? void 0 : _C.length) > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "text-[10px] font-black text-emerald-500 uppercase tracking-widest flex items-center gap-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { size: 12 }),
                    " Staged Added Clauses"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: comparisonResult.added.map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 bg-emerald-500/5 rounded-xl border border-emerald-500/10 text-xs", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold text-slate-900 dark:text-white uppercase", children: item.clause }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-mono text-[10px] text-slate-400 mt-1 italic", children: [
                      '"+ ',
                      item.text,
                      '"'
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[10px] text-slate-500 mt-1 leading-normal font-semibold", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Implication:" }),
                      " ",
                      item.implication
                    ] })
                  ] }, i)) })
                ] }),
                ((_D = comparisonResult.removed) == null ? void 0 : _D.length) > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "text-[10px] font-black text-red-500 uppercase tracking-widest flex items-center gap-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { size: 12 }),
                    " Staged Removed Clauses"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: comparisonResult.removed.map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 bg-red-500/5 rounded-xl border border-red-500/10 text-xs", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold text-slate-900 dark:text-white uppercase", children: item.clause }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-mono text-[10px] text-slate-400 mt-1 italic", children: [
                      '"- ',
                      item.text,
                      '"'
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[10px] text-slate-500 mt-1 leading-normal font-semibold", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Implication:" }),
                      " ",
                      item.implication
                    ] })
                  ] }, i)) })
                ] }),
                ((_E = comparisonResult.modified) == null ? void 0 : _E.length) > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "text-[10px] font-black text-amber-500 uppercase tracking-widest flex items-center gap-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(PenLine, { size: 12 }),
                    " Staged Modified Clauses"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: comparisonResult.modified.map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 bg-amber-500/5 rounded-xl border border-amber-500/10 text-xs", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold text-slate-900 dark:text-white uppercase", children: item.clause }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3 mt-1.5 font-mono text-[9px] text-slate-400", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-2 bg-black/10 rounded-lg", children: [
                        'Original: "',
                        item.originalText,
                        '"'
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-2 bg-black/10 rounded-lg text-amber-400", children: [
                        'Modified: "',
                        item.modifiedText,
                        '"'
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[10px] text-slate-500 mt-2 leading-normal font-semibold", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Implication:" }),
                      " ",
                      item.implication
                    ] })
                  ] }, i)) })
                ] })
              ] }) : !isComparing && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-8", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Folder, { size: 32, className: "mx-auto text-slate-300 dark:text-zinc-700" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-slate-400 mt-2", children: "No comparison results compiled yet." })
              ] })
            ] }),
            activeTab === "chat" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col h-[350px] min-h-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 overflow-y-auto pr-1 space-y-3 custom-scrollbar mb-4", children: [
                chatHistory.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-10", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Brain, { size: 32, className: "mx-auto text-slate-350 dark:text-zinc-700 animate-pulse" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-black text-slate-400 mt-2 uppercase tracking-wider", children: "AISA Contract assistant ready" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-slate-400 font-semibold", children: "Ask questions about indemnities, terminations, governing rules, or missing terms in this contract." })
                ] }),
                chatHistory.map((msg) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `flex ${msg.role === "user" ? "justify-end" : "justify-start"}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `max-w-[80%] rounded-2xl px-4 py-2.5 text-xs font-semibold leading-relaxed break-words ${msg.role === "user" ? "bg-slate-100 dark:bg-[#1e293b] text-slate-900 dark:text-slate-100" : "bg-slate-100 dark:bg-black/25 text-slate-700 dark:text-slate-200 border border-slate-200/30"}`, children: msg.content }) }, msg.id)),
                isChatSending && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-start", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-slate-100 dark:bg-black/25 text-indigo-500 rounded-2xl px-4 py-2.5 text-[10px] font-black uppercase tracking-wider animate-pulse border border-slate-200/30", children: "Assistant typing..." }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref: chatBottomRef })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 shrink-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    type: "text",
                    placeholder: "Ask a question about this contract...",
                    value: chatInput,
                    onChange: (e) => setChatInput(e.target.value),
                    onKeyDown: (e) => e.key === "Enter" && sendContractChatMessage(),
                    className: `flex-1 border rounded-xl px-4 py-3 text-xs font-bold outline-none ${isDark ? "bg-black/25 border-zinc-800 text-white focus:border-indigo-500" : "bg-slate-50 border-slate-200 text-slate-800 focus:border-indigo-500"}`
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    onClick: sendContractChatMessage,
                    disabled: isChatSending || !chatInput.trim(),
                    className: "p-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl transition-all shadow-md shadow-indigo-500/20 disabled:opacity-50",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { size: 16 })
                  }
                )
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
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-base font-black text-slate-900 dark:text-white uppercase tracking-wider", children: "Platform Audit Trails" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setHistoryVisible(false), className: "p-1 hover:bg-slate-100 dark:hover:bg-zinc-800 rounded-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 20, className: "text-slate-400" }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center bg-slate-50 dark:bg-[#131C31] border border-slate-200 dark:border-white/5 rounded-xl px-3 py-2 mt-4 shrink-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { size: 14, className: "text-slate-400 mr-2" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "text",
              placeholder: "Search audit trail logs...",
              className: "w-full bg-transparent border-none text-xs font-bold text-slate-800 dark:text-white outline-none focus:ring-0",
              value: historySearch,
              onChange: (e) => setHistorySearch(e.target.value)
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 overflow-y-auto mt-4 space-y-3 custom-scrollbar", children: [
          auditLogs.filter(
            (h) => {
              var _a2, _b2;
              return ((_a2 = h.action) == null ? void 0 : _a2.toLowerCase().includes(historySearch.toLowerCase())) || ((_b2 = h.details) == null ? void 0 : _b2.toLowerCase().includes(historySearch.toLowerCase()));
            }
          ).map((item, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 bg-slate-50 dark:bg-[#1A2540] border border-slate-200/50 dark:border-white/5 rounded-2xl shadow-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-start", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xs font-black text-slate-900 dark:text-white uppercase tracking-wider", children: item.action }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[8px] text-slate-400 font-bold uppercase tracking-wider shrink-0 ml-2", children: new Date(item.timestamp).toLocaleTimeString() })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-slate-500 font-bold uppercase tracking-wider mt-1", children: item.editedBy }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-slate-400 mt-2 font-medium leading-relaxed select-text", children: item.details })
          ] }, idx)),
          auditLogs.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-10", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Folder, { size: 32, className: "mx-auto text-slate-350 dark:text-zinc-700" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-slate-400 mt-2", children: "No audit logs synced to database yet." })
          ] })
        ] })
      ] })
    ] }),
    activeRewriteClause && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "fixed inset-0 z-[120000] flex items-center justify-center p-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-black/60 backdrop-blur-md", onClick: () => setActiveRewriteClause(null) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative bg-white dark:bg-zinc-900 border border-slate-250 dark:border-zinc-800 rounded-[32px] max-w-xl w-full max-h-[85%] flex flex-col overflow-hidden shadow-2xl p-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between border-b border-slate-100 dark:border-white/5 pb-4 shrink-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-black text-slate-900 dark:text-white uppercase tracking-wider", children: "AI Clause Rewrite Engine" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-slate-400 font-bold uppercase tracking-wider mt-0.5", children: activeRewriteClause.name })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setActiveRewriteClause(null), className: "p-1 hover:bg-slate-100 dark:hover:bg-zinc-800 rounded-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 20, className: "text-slate-400" }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 overflow-y-auto mt-4 space-y-4 custom-scrollbar", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-[9px] font-black uppercase tracking-widest text-slate-450", children: "Original Clause text" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("blockquote", { className: "p-3 bg-slate-500/5 rounded-xl font-mono text-[10px] leading-relaxed text-slate-400 mt-1 select-text", children: [
              '"',
              activeRewriteClause.text,
              '"'
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-[9px] font-black uppercase tracking-widest text-slate-450", children: "Draft Tone Wording" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-1.5 overflow-x-auto pb-1 max-w-full", children: ["Balanced", "Professional", "Court-safe", "Legally Strong"].map((tone) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: () => setRewriteTone(tone),
                className: `px-3 py-1.5 rounded-lg text-[9px] font-black uppercase tracking-wider transition-all ${rewriteTone === tone ? "bg-indigo-650 text-white" : "bg-slate-100 dark:bg-zinc-800 text-slate-500"}`,
                children: tone
              },
              tone
            )) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              onClick: executeClauseRewrite,
              disabled: isRewriting,
              className: "w-full py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-[10px] font-black uppercase tracking-wider transition-all disabled:opacity-50 flex items-center justify-center gap-1.5",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { size: 12, className: isRewriting ? "animate-spin" : "" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Generate Rewritten Clause" })
              ]
            }
          ),
          rewrittenWording && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5 animate-fadeIn", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-[9px] font-black uppercase tracking-widest text-emerald-500", children: "AI Rewritten Alternate" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("blockquote", { className: "p-3 bg-emerald-500/5 rounded-xl border border-emerald-500/10 font-mono text-[10px] leading-relaxed text-emerald-600 dark:text-emerald-400 select-text", children: [
              '"',
              rewrittenWording,
              '"'
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3 mt-6 pt-4 border-t border-slate-100 dark:border-white/5 shrink-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: () => setActiveRewriteClause(null),
              className: "flex-1 py-3 border border-slate-200 dark:border-zinc-800 rounded-xl font-black text-xs text-slate-500 uppercase tracking-wider",
              children: "Cancel"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: applyRewrittenClause,
              disabled: !rewrittenWording,
              className: "flex-1 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-black text-xs uppercase tracking-wider transition-all disabled:opacity-50",
              children: "Apply Edit Draft"
            }
          )
        ] })
      ] })
    ] })
  ] });
};
export {
  ContractReview as default
};
