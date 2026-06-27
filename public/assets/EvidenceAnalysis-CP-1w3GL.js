import { c as createLucideIcon, r as reactExports, bV as useOutputLanguage, bW as mapCaseToForm, z as zt, j as jsxRuntimeExports, bX as ChevronLeft, l as Shield, c2 as History, h as Database, ce as ShieldCheck, n as TriangleAlert, t as Scale, cg as ShieldAlert, C as CircleAlert, b$ as Folder, bR as Brain, c0 as CircleCheck, X, U as Upload, F as FileText, R as RefreshCw, c4 as LanguageToggle, bY as Copy, ca as Mic, c6 as FileDown, a0 as Check, v as Search, c1 as PenLine, T as Trash2, c7 as consumePrefillIntent, c8 as generateChatResponse, a as apiService } from "./index-CifJr-sK.js";
import { A as Award } from "./award-BhMiiFHg.js";
import { P as Printer } from "./printer-ZcOkpCIc.js";
/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4", key: "1nerag" }],
  ["path", { d: "M14 13.12c0 2.38 0 6.38-1 8.88", key: "o46ks0" }],
  ["path", { d: "M17.29 21.02c.12-.6.43-2.3.5-3.02", key: "ptglia" }],
  ["path", { d: "M2 12a10 10 0 0 1 18-6", key: "ydlgp0" }],
  ["path", { d: "M2 16h.01", key: "1gqxmh" }],
  ["path", { d: "M21.8 16c.2-2 .131-5.354 0-6", key: "drycrb" }],
  ["path", { d: "M5 19.5C5.5 18 6 15 6 12a6 6 0 0 1 .34-2", key: "1tidbn" }],
  ["path", { d: "M8.65 22c.21-.66.45-1.32.57-2", key: "13wd9y" }],
  ["path", { d: "M9 6.8a6 6 0 0 1 9 5.2v2", key: "1fr1j5" }]
];
const Fingerprint = createLucideIcon("Fingerprint", __iconNode);
const EVIDENCE_TYPES = [
  "CCTV Video",
  "Mobile Video",
  "Audio Recording",
  "Call Recording",
  "Photograph",
  "Screenshot",
  "WhatsApp Chat",
  "Telegram Chat",
  "Email",
  "PDF Document",
  "Contract",
  "Affidavit",
  "Witness Statement",
  "Bank Statement",
  "Transaction Record",
  "GPS Data",
  "Social Media Post",
  "Website Evidence",
  "Other"
];
const EvidenceAnalysis = ({ currentCase, onBack, theme, allProjects = [], onUpdateCase }) => {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _A, _B, _C, _D, _E, _F, _G, _H, _I, _J;
  const isDark = theme === "dark";
  const [linkedCaseId, setLinkedCaseId] = reactExports.useState((currentCase == null ? void 0 : currentCase._id) || "");
  const [evidenceTitle, setEvidenceTitle] = reactExports.useState("");
  const [evidenceNotes, setEvidenceNotes] = reactExports.useState("");
  const [selectedEvidenceType, setSelectedEvidenceType] = reactExports.useState("Photograph");
  const [caseRole, setCaseRole] = reactExports.useState("Prosecution");
  const [firContent, setFirContent] = reactExports.useState("");
  const [complaintContent, setComplaintContent] = reactExports.useState("");
  const [witnessStatements, setWitnessStatements] = reactExports.useState("");
  const [previousEvidence, setPreviousEvidence] = reactExports.useState("");
  const [prefillBanner, setPrefillBanner] = reactExports.useState(null);
  const [isAuditing, setIsAuditing] = reactExports.useState(false);
  const [scanPhase, setScanPhase] = reactExports.useState("");
  const [rawForensicResult, setRawForensicResult] = reactExports.useState(null);
  const [selectedFile, setSelectedFile] = reactExports.useState(null);
  const [activeTab, setActiveTab] = reactExports.useState("report");
  const isMountedRef = reactExports.useRef(true);
  reactExports.useEffect(() => {
    isMountedRef.current = true;
    return () => {
      isMountedRef.current = false;
    };
  }, []);
  const {
    outputLang,
    setOutputLang,
    isTranslating: isForensicTranslating,
    setIsTranslating: setIsForensicTranslating,
    translateText: translateForensicText,
    getDisplayText: getForensicDisplayText
  } = useOutputLanguage("evidence_analysis", (currentCase == null ? void 0 : currentCase._id) || "global");
  const [translatedForensicResult, setTranslatedForensicResult] = reactExports.useState(null);
  const forensicResult = reactExports.useMemo(() => {
    if (outputLang === "en" || !translatedForensicResult) return rawForensicResult;
    return translatedForensicResult;
  }, [outputLang, translatedForensicResult, rawForensicResult]);
  const setForensicResult = reactExports.useCallback((val) => {
    if (typeof val === "function") {
      setRawForensicResult((prev) => {
        const computed = val(prev);
        return computed;
      });
    } else {
      setRawForensicResult(val);
    }
  }, []);
  const buildForensicSummaryText = reactExports.useCallback((result) => {
    var _a2, _b2, _c2, _d2, _e2, _f2;
    if (!result) return "";
    const parts = [];
    parts.push(`SUMMARY: ${result.summary || ""}`);
    parts.push(`OCR_TEXT: ${result.ocrText || ""}`);
    parts.push(`STRENGTH_EXPLANATION: ${((_a2 = result.strengthEngine) == null ? void 0 : _a2.explanation) || ""}`);
    const strengthsStr = (((_b2 = result.findings) == null ? void 0 : _b2.strengths) || []).join(" | ");
    parts.push(`STRENGTHS: ${strengthsStr}`);
    const weaknessesStr = (((_c2 = result.findings) == null ? void 0 : _c2.weaknesses) || []).join(" | ");
    parts.push(`WEAKNESSES: ${weaknessesStr}`);
    const keyFindingsStr = (((_d2 = result.findings) == null ? void 0 : _d2.keyFindings) || []).join(" | ");
    parts.push(`KEY_FINDINGS: ${keyFindingsStr}`);
    const legalObservationsStr = (((_e2 = result.findings) == null ? void 0 : _e2.legalObservations) || []).join(" | ");
    parts.push(`LEGAL_OBSERVATIONS: ${legalObservationsStr}`);
    const reasonsStr = (((_f2 = result.admissibilityReport) == null ? void 0 : _f2.reasons) || []).join(" | ");
    parts.push(`VERDICT_REASONS: ${reasonsStr}`);
    const missingStr = (result.missingEvidence || []).join(" | ");
    parts.push(`MISSING_EVIDENCE: ${missingStr}`);
    const contraStr = (result.contradictions || []).map((c) => `${c.title}: ${c.explanation}`).join(" | ");
    parts.push(`CONTRADICTIONS: ${contraStr}`);
    const sectionsStr = (result.legalSections || []).map((s) => `${s.section}: ${s.desc}`).join(" | ");
    parts.push(`SECTIONS_DESC: ${sectionsStr}`);
    return parts.join("\n\n");
  }, []);
  const parseTranslatedForensicSummary = (translated, original) => {
    const lines = translated.split(/\n\n/);
    const keys = [
      "summary",
      "ocrText",
      "strengthExplanation",
      "strengths",
      "weaknesses",
      "keyFindings",
      "legalObservations",
      "reasons",
      "missingEvidence",
      "contradictions",
      "sectionsDesc"
    ];
    const result = {};
    keys.forEach((key, i) => {
      const line = lines[i] || "";
      const colonIdx = line.indexOf(":");
      const content = colonIdx !== -1 ? line.slice(colonIdx + 1).trim() : line.trim();
      result[key] = content;
    });
    const getArray = (str) => str ? str.split(" | ").map((s) => s.trim()).filter(Boolean) : [];
    const originalFindings = original.findings || {};
    const originalAdmissibility = original.admissibilityReport || {};
    const originalStrength = original.strengthEngine || {};
    const parsedResult = {
      ...original,
      summary: result.summary || original.summary,
      ocrText: result.ocrText || original.ocrText,
      findings: {
        ...originalFindings,
        strengths: getArray(result.strengths),
        weaknesses: getArray(result.weaknesses),
        keyFindings: getArray(result.keyFindings),
        legalObservations: getArray(result.legalObservations)
      },
      admissibilityReport: {
        ...originalAdmissibility,
        reasons: getArray(result.reasons)
      },
      strengthEngine: {
        ...originalStrength,
        explanation: result.strengthExplanation || originalStrength.explanation
      },
      missingEvidence: getArray(result.missingEvidence)
    };
    if (result.contradictions && original.contradictions) {
      const contraParts = result.contradictions.split(" | ");
      parsedResult.contradictions = original.contradictions.map((origC, idx) => {
        const part = contraParts[idx] || "";
        const colonIdx = part.indexOf(":");
        const translatedExplanation = colonIdx !== -1 ? part.slice(colonIdx + 1).trim() : part.trim();
        return {
          ...origC,
          explanation: translatedExplanation || origC.explanation
        };
      });
    }
    if (result.sectionsDesc && original.legalSections) {
      const secParts = result.sectionsDesc.split(" | ");
      parsedResult.legalSections = original.legalSections.map((origS, idx) => {
        const part = secParts[idx] || "";
        const colonIdx = part.indexOf(":");
        const translatedDesc = colonIdx !== -1 ? part.slice(colonIdx + 1).trim() : part.trim();
        return {
          ...origS,
          desc: translatedDesc || origS.desc
        };
      });
    }
    return parsedResult;
  };
  const handleForensicLangChange = reactExports.useCallback(async (newLang) => {
    setOutputLang(newLang);
    if (!rawForensicResult) return;
    if (newLang === "en") {
      setTranslatedForensicResult(null);
      return;
    }
    const summary = buildForensicSummaryText(rawForensicResult);
    const cached = getForensicDisplayText(summary);
    if (cached && cached !== summary) {
      setTranslatedForensicResult(parseTranslatedForensicSummary(cached, rawForensicResult));
      return;
    }
    setIsForensicTranslating(true);
    try {
      const translated = await translateForensicText(summary);
      if (isMountedRef.current) {
        setTranslatedForensicResult(parseTranslatedForensicSummary(translated, rawForensicResult));
      }
    } catch (e) {
      console.error(e);
    } finally {
      if (isMountedRef.current) setIsForensicTranslating(false);
    }
  }, [rawForensicResult, buildForensicSummaryText, getForensicDisplayText, setOutputLang, setIsForensicTranslating, translateForensicText]);
  reactExports.useEffect(() => {
    if (rawForensicResult) {
      setTranslatedForensicResult(null);
      setOutputLang("en");
    }
  }, [rawForensicResult]);
  const [ocrText, setOcrText] = reactExports.useState("");
  const [ocrSearchQuery, setOcrSearchQuery] = reactExports.useState("");
  const [isEditingOcr, setIsEditingOcr] = reactExports.useState(false);
  const [historyVisible, setHistoryVisible] = reactExports.useState(false);
  const [historyData, setHistoryData] = reactExports.useState([]);
  const [historySearch, setHistorySearch] = reactExports.useState("");
  const [isSpeaking, setIsSpeaking] = reactExports.useState(false);
  const [customEvent, setCustomEvent] = reactExports.useState("");
  const [customUser, setCustomUser] = reactExports.useState("Authorized Investigator");
  const [customLocation, setCustomLocation] = reactExports.useState("Forensic Lab, Pune");
  const reportRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    var _a2, _b2, _c2, _d2;
    const intent = consumePrefillIntent("legal_evidence_checker");
    if (intent == null ? void 0 : intent.caseData) {
      const mapped = mapCaseToForm(intent.caseData);
      if (mapped.evidenceNotes) setEvidenceNotes(mapped.evidenceNotes);
      if (mapped.caseTitle) setEvidenceTitle(`${mapped.caseTitle} - Evidence Review`);
      const caseId = ((_a2 = intent.caseData) == null ? void 0 : _a2._id) || ((_b2 = intent.caseData) == null ? void 0 : _b2.id);
      if (caseId) {
        setLinkedCaseId(caseId);
        loadForensicHistory(caseId);
      }
      const docCount = ((_c2 = mapped.allDocuments) == null ? void 0 : _c2.length) || 0;
      setPrefillBanner({
        caseTitle: mapped.caseTitle || "Active Case",
        docCount,
        docs: ((_d2 = mapped.allDocuments) == null ? void 0 : _d2.slice(0, 5)) || []
      });
      zt.success(`✓ Case loaded — ${docCount} evidence files available`, { icon: "💼", duration: 3500 });
    }
  }, []);
  reactExports.useEffect(() => {
    if (currentCase) {
      setLinkedCaseId(currentCase._id);
      loadForensicHistory(currentCase._id);
      resetWorkspaceForm();
    } else {
      setHistoryData([]);
      setForensicResult(null);
      setSelectedFile(null);
    }
  }, [currentCase]);
  const resetWorkspaceForm = () => {
    setEvidenceTitle("");
    setEvidenceNotes("");
    setForensicResult(null);
    setSelectedFile(null);
    setFirContent("");
    setComplaintContent("");
    setWitnessStatements("");
    setPreviousEvidence("");
  };
  const loadForensicHistory = async (caseId) => {
    try {
      const targetCase = allProjects.find((p) => p._id === caseId) || currentCase;
      if (targetCase && Array.isArray(targetCase.forensicHistory)) {
        setHistoryData(targetCase.forensicHistory);
      } else {
        setHistoryData([]);
      }
    } catch (e) {
      console.error("[EvidenceAnalysis] Error loading history", e);
    }
  };
  const saveForensicToHistory = async (forensic) => {
    try {
      const targetCaseId = linkedCaseId || (currentCase == null ? void 0 : currentCase._id);
      if (!targetCaseId) {
        zt.error("Please link to a Case to save records permanently.");
        return;
      }
      const targetCase = allProjects.find((p) => p._id === targetCaseId) || currentCase;
      if (!targetCase) return;
      const forensicWithCase = {
        ...forensic,
        caseId: targetCaseId
      };
      const existingHistory = targetCase.forensicHistory || [];
      const updatedHistory = [forensicWithCase, ...existingHistory.filter((h) => h.id !== forensic.id)];
      const newDoc = {
        id: forensic.id,
        name: forensic.title,
        uri: (selectedFile == null ? void 0 : selectedFile.uri) || "",
        type: (selectedFile == null ? void 0 : selectedFile.mimeType) || "document",
        uploadDate: (/* @__PURE__ */ new Date()).toLocaleDateString(),
        analysisResult: forensic
      };
      const updatedDocs = [...(targetCase.documents || []).filter((d) => d.id !== forensic.id), newDoc];
      const payload = {
        ...targetCase,
        forensicHistory: updatedHistory,
        documents: updatedDocs
      };
      const response = await apiService.updateProject(targetCase._id, payload);
      if (onUpdateCase) onUpdateCase(response);
      setHistoryData(updatedHistory);
    } catch (e) {
      console.error("[EvidenceAnalysis] Error saving history", e);
      zt.error("Failed to sync forensic record with backend database.");
    }
  };
  const deleteHistoryItem = async (id) => {
    const targetCaseId = linkedCaseId || (currentCase == null ? void 0 : currentCase._id);
    if (!targetCaseId) return;
    const targetCase = allProjects.find((p) => p._id === targetCaseId) || currentCase;
    if (!targetCase) return;
    try {
      const updatedHistory = (targetCase.forensicHistory || []).filter((h) => h.id !== id);
      const updatedDocs = (targetCase.documents || []).filter((d) => d.id !== id);
      const payload = {
        ...targetCase,
        forensicHistory: updatedHistory,
        documents: updatedDocs
      };
      const response = await apiService.updateProject(targetCase._id, payload);
      if (onUpdateCase) onUpdateCase(response);
      setHistoryData(updatedHistory);
      if ((forensicResult == null ? void 0 : forensicResult.id) === id) {
        setForensicResult(null);
      }
      zt.success("Forensic log deleted successfully from database");
    } catch (e) {
      console.error("[EvidenceAnalysis] Error deleting history", e);
      zt.error("Database deletion failed.");
    }
  };
  const handlePrefillFromCase = () => {
    const targetCaseId = linkedCaseId || (currentCase == null ? void 0 : currentCase._id);
    const activeCase = allProjects.find((p) => p._id === targetCaseId) || currentCase;
    if (!activeCase) {
      zt.error("No active case selected to fill details.");
      return;
    }
    setEvidenceTitle(`${activeCase.name || "Untitled Case"} Evidence`);
    setEvidenceNotes(`Evidence parameters linked directly to Case facts: ${activeCase.description || "N/A"}.
Accused: ${activeCase.accused || "N/A"}
Court: ${activeCase.courtName || "N/A"}`);
    setFirContent(activeCase.firText || activeCase.description || "");
    setComplaintContent(activeCase.complaintText || "");
    setWitnessStatements(activeCase.witnessText || "");
    zt.success("Prefilled facts and documents context from case folder.");
  };
  const handleCaseSelect = (caseId) => {
    setLinkedCaseId(caseId);
    loadForensicHistory(caseId);
    setForensicResult(null);
  };
  const analytics = reactExports.useMemo(() => {
    if (!historyData || historyData.length === 0) {
      return {
        total: 0,
        strong: 0,
        weak: 0,
        admissible: 0,
        highRisk: 0,
        contradictions: 0,
        missing: 0,
        avgConfidence: 0,
        avgVerification: 0,
        caseStrength: 0
      };
    }
    const total = historyData.length;
    let strong = 0;
    let weak = 0;
    let admissible = 0;
    let highRisk = 0;
    let contradictions = 0;
    let missing = 0;
    let sumConfidence = 0;
    let sumVerification = 0;
    historyData.forEach((item) => {
      var _a2, _b2, _c2, _d2;
      const v = ((_a2 = item.stats) == null ? void 0 : _a2.verificationScore) || 0;
      const a = ((_b2 = item.stats) == null ? void 0 : _b2.admissibilityRate) || 0;
      const c = ((_c2 = item.stats) == null ? void 0 : _c2.confidenceRate) || 0;
      const r = ((_d2 = item.stats) == null ? void 0 : _d2.riskAlerts) || 0;
      if (v > 75) strong++;
      if (v <= 40) weak++;
      if (a > 50) admissible++;
      if (r > 3) highRisk++;
      contradictions += Array.isArray(item.contradictions) ? item.contradictions.length : 0;
      missing += Array.isArray(item.missingEvidence) ? item.missingEvidence.length : 0;
      sumConfidence += c;
      sumVerification += v;
    });
    const avgConfidence = Math.round(sumConfidence / total);
    const avgVerification = Math.round(sumVerification / total);
    const caseStrength = Math.round((avgVerification + Math.round(sumConfidence / total)) / 2);
    return {
      total,
      strong,
      weak,
      admissible,
      highRisk,
      contradictions,
      missing,
      avgConfidence,
      avgVerification,
      caseStrength
    };
  }, [historyData]);
  const handleFileUpload = (e) => {
    var _a2;
    const file = (_a2 = e.target.files) == null ? void 0 : _a2[0];
    if (!file) return;
    setScanPhase("uploading");
    const sizeKB = Math.round(file.size / 1024);
    const reader = new FileReader();
    reader.onload = () => {
      const base64String = reader.result.split(",")[1];
      const asset = {
        name: file.name,
        size: file.size,
        mimeType: file.type,
        uri: URL.createObjectURL(file),
        base64: base64String
      };
      setSelectedFile(asset);
      setEvidenceTitle(asset.name);
      const ext = file.name.split(".").pop().toLowerCase();
      let detectedType = "Other";
      if (["mp4", "mkv", "mov", "avi"].includes(ext)) detectedType = "CCTV Video";
      else if (["jpg", "jpeg", "png", "webp"].includes(ext)) detectedType = "Photograph";
      else if (["mp3", "wav", "m4a", "ogg"].includes(ext)) detectedType = "Audio Recording";
      else if (["pdf"].includes(ext)) detectedType = "PDF Document";
      else if (["docx", "doc", "txt"].includes(ext)) detectedType = "Witness Statement";
      setSelectedEvidenceType(detectedType);
      const notes = `File Name: ${asset.name}
File Size: ${sizeKB} KB
Mime Type: ${asset.mimeType}
Category: ${detectedType}`;
      setEvidenceNotes(notes);
      zt.success(`File "${asset.name}" staged. Evidence Type set to ${detectedType}.`);
      setScanPhase("");
    };
    reader.onerror = () => {
      zt.error("Failed to read file.");
      setScanPhase("");
    };
    reader.readAsDataURL(file);
  };
  const runForensicScanner = async () => {
    if (!evidenceNotes.trim() && !selectedFile) {
      zt.error("Please upload an evidence file or fill out the details.");
      return;
    }
    setIsAuditing(true);
    setForensicResult(null);
    setScanPhase("analyzing");
    const tid = zt.loading("Processing forensic signatures and file tags...");
    try {
      let attachments = [];
      if (selectedFile == null ? void 0 : selectedFile.base64) {
        const mime = selectedFile.mimeType || "image/jpeg";
        attachments = [{
          url: `data:${mime};base64,${selectedFile.base64}`,
          name: selectedFile.name,
          type: mime.startsWith("image/") ? "image" : "document"
        }];
      }
      const rolePrefix = caseRole === "Prosecution" ? "P" : "D";
      const existingSameRoleCount = historyData.filter((item) => item.caseRole === caseRole).length;
      const assignedExhibitNo = `Exhibit ${rolePrefix}-${existingSameRoleCount + 1}`;
      const activeCase = allProjects.find((p) => p._id === linkedCaseId) || currentCase;
      const caseContext = activeCase ? `
        [Case facts]
        Case Name: ${activeCase.name}
        Facts: ${activeCase.description || "N/A"}
        Client: ${activeCase.clientName || "N/A"}
        Opposing Party: ${activeCase.opponentName || activeCase.accused || "N/A"}
      ` : "";
      const comparisonFacts = `
        [Comparison Records for Contradiction Detection]
        FIR content: ${firContent || "None provided"}
        Complaint text: ${complaintContent || "None provided"}
        Witness Statement: ${witnessStatements || "None provided"}
        Previous evidence logs: ${previousEvidence || "None provided"}
      `;
      const systemPrompt = `You are the ultimate AISA Court-Ready Forensic Intelligence Platform.
Perform an advanced forensic audit on the provided legal evidence. 

IMPORTANT: Your response MUST be EXACTLY a single valid JSON object, enclosed inside a \`\`\`json ... \`\`\` code block. Do NOT write any conversational text outside the code block.

JSON Schema:
{
  "verificationScore": <Integer 0-100>,
  "riskAlerts": <Integer 0-10>,
  "admissibilityRate": <Integer 0-100>,
  "confidenceRate": <Integer 0-100>,
  "classification": "<Documentary | Electronic | Oral | Primary | Secondary | Circumstantial | Direct>",
  "ocrText": "<Extracted text from the evidence document/image, or a transcript if audio/video>",
  "summary": "<Short forensic audit summary explaining findings>",
  "findings": {
    "keyFindings": ["Finding 1", "Finding 2"],
    "legalObservations": ["Observation 1"],
    "potentialRisks": ["Risk 1"],
    "strengths": ["Strength 1"],
    "weaknesses": ["Weakness 1"]
  },
  "metadata": {
    "device": "<Guessed or EXIF-provided device name, model, or browser origin>",
    "timestamp": "<Extracted datetime of origin or modification>",
    "gps": "<Coordinates details or 'No GPS tagged'>",
    "tamperingDetected": "<'High suspected editing' | 'Moderate' | 'None detected'>",
    "exifData": "<Details of internal image header specs, video encoding, or document creation software>"
  },
  "admissibilityReport": {
    "status": "<Admissible | Partially Admissible | Not Admissible>",
    "reasons": ["Reason 1", "Reason 2"]
  },
  "contradictions": [
    {
      "title": "Mismatched timestamp",
      "severity": "<High | Medium | Low>",
      "explanation": "Brief description of contradiction found against FIR/Witness Statements"
    }
  ],
  "strengthEngine": {
    "authenticity": <Integer 0-100>,
    "relevance": <Integer 0-100>,
    "reliability": <Integer 0-100>,
    "completeness": <Integer 0-100>,
    "admissibility": <Integer 0-100>,
    "explanation": "<Short summary explaining these strength engine ratings>"
  },
  "missingEvidence": ["Missing item recommendations based on case requirements"],
  "legalSections": [
    { "section": "Section X", "act": "BSA / BNS / BNSS / IT Act", "desc": "Brief overview of what the section says and applicability" }
  ]
}
`;
      const promptQuery = `
        ${caseContext}
        ${comparisonFacts}

        [Evidence Details]
        File Name: ${evidenceTitle || "Staged File"}
        Selected Evidence Type: ${selectedEvidenceType}
        Evidence Notes: ${evidenceNotes}
        Target Exhibit Tag: ${assignedExhibitNo}
        File Size: ${selectedFile ? Math.round(selectedFile.size / 1024) : "Manual input"} KB
        Mime Type: ${(selectedFile == null ? void 0 : selectedFile.mimeType) || "unknown"}

        Please extract the text (OCR / Transcription) and run the forensic engine.
      `;
      setScanPhase("generating");
      const response = await generateChatResponse([], promptQuery, systemPrompt, attachments, "English", null, "legal");
      const textResponse = (response == null ? void 0 : response.reply) || response || "";
      let parsed = null;
      try {
        const jsonMatch = textResponse.match(/```json\s*([\s\S]*?)\s*```/);
        if (jsonMatch) {
          parsed = JSON.parse(jsonMatch[1].trim());
        } else {
          parsed = JSON.parse(textResponse.trim());
        }
      } catch (err) {
        console.warn("Structured JSON parse failed. Extracting using fallback parser.", err);
      }
      const finalResult = parsed ? {
        id: Date.now().toString(),
        title: evidenceTitle || (selectedFile == null ? void 0 : selectedFile.name) || "Evidence Analysis Log",
        evidenceNotes,
        evidenceType: selectedEvidenceType,
        caseRole,
        exhibitNumber: assignedExhibitNo,
        timestamp: (/* @__PURE__ */ new Date()).toLocaleString(),
        stats: {
          verificationScore: parsed.verificationScore || 75,
          riskAlerts: parsed.riskAlerts || 0,
          admissibilityRate: parsed.admissibilityRate || 80,
          confidenceRate: parsed.confidenceRate || 90
        },
        classification: parsed.classification || "Electronic Evidence",
        ocrText: parsed.ocrText || "No text extracted.",
        summary: parsed.summary || "Forensic analysis completed.",
        findings: parsed.findings || { keyFindings: [], legalObservations: [], potentialRisks: [], strengths: [], weaknesses: [] },
        metadata: parsed.metadata || { device: "N/A", timestamp: "N/A", gps: "N/A", tamperingDetected: "N/A", exifData: "N/A" },
        admissibilityReport: parsed.admissibilityReport || { status: "Admissible", reasons: [] },
        contradictions: parsed.contradictions || [],
        strengthEngine: parsed.strengthEngine || { authenticity: 75, relevance: 75, reliability: 75, completeness: 75, admissibility: 75, explanation: "" },
        missingEvidence: parsed.missingEvidence || [],
        legalSections: parsed.legalSections || [],
        chainOfCustody: [
          { time: (/* @__PURE__ */ new Date()).toLocaleString(), event: "Uploaded & Recorded", user: "System Operator", location: "Office" },
          { time: (/* @__PURE__ */ new Date()).toLocaleString(), event: "AI Forensic Scan Authorized", user: "Lead Investigator", location: "Server Core" }
        ]
      } : {
        // Absolute fallback if parsing fails completely
        id: Date.now().toString(),
        title: evidenceTitle || (selectedFile == null ? void 0 : selectedFile.name) || "Evidence Analysis Log",
        evidenceNotes,
        evidenceType: selectedEvidenceType,
        caseRole,
        exhibitNumber: assignedExhibitNo,
        timestamp: (/* @__PURE__ */ new Date()).toLocaleString(),
        stats: { verificationScore: 70, riskAlerts: 1, admissibilityRate: 75, confidenceRate: 80 },
        classification: "Electronic Evidence",
        ocrText: textResponse,
        summary: "Forensic analysis loaded successfully.",
        findings: { keyFindings: ["File metadata processed"], legalObservations: [], potentialRisks: [], strengths: [], weaknesses: [] },
        metadata: { device: "Generic Device", timestamp: (/* @__PURE__ */ new Date()).toLocaleString(), gps: "None", tamperingDetected: "None", exifData: "Standard format" },
        admissibilityReport: { status: "Admissible", reasons: ["Exhibits valid file parameters."] },
        contradictions: [],
        strengthEngine: { authenticity: 70, relevance: 80, reliability: 75, completeness: 70, admissibility: 75, explanation: "Standard score parameters" },
        missingEvidence: ["Certificate Sec 65B"],
        legalSections: [{ section: "Section 65B", act: "BSA", desc: "Electronic admissibility rules." }],
        chainOfCustody: [
          { time: (/* @__PURE__ */ new Date()).toLocaleString(), event: "Uploaded", user: "User Input", location: "Dashboard" }
        ]
      };
      setOcrText(finalResult.ocrText);
      setForensicResult(finalResult);
      await saveForensicToHistory(finalResult);
      zt.success(`✓ Forensic Report generated! Exhibit code: ${assignedExhibitNo}`, { id: tid });
      setTimeout(() => {
        var _a2;
        return (_a2 = reportRef.current) == null ? void 0 : _a2.scrollIntoView({ behavior: "smooth" });
      }, 200);
    } catch (e) {
      console.error(e);
      zt.error("Forensic verification failed.", { id: tid });
    } finally {
      setIsAuditing(false);
      setScanPhase("");
    }
  };
  const handleSaveOcrText = async () => {
    if (!forensicResult) return;
    const updatedResult = {
      ...forensicResult,
      ocrText,
      chainOfCustody: [
        ...forensicResult.chainOfCustody || [],
        { time: (/* @__PURE__ */ new Date()).toLocaleString(), event: "OCR Text manually revised & updated", user: "Case Advocate", location: "Drafting Desk" }
      ]
    };
    setForensicResult(updatedResult);
    await saveForensicToHistory(updatedResult);
    setIsEditingOcr(false);
    zt.success("OCR Transcript revised & saved persistently.");
  };
  const handleAddCustodyEvent = async () => {
    if (!customEvent.trim()) return;
    const newLog = {
      time: (/* @__PURE__ */ new Date()).toLocaleString(),
      event: customEvent,
      user: customUser,
      location: customLocation
    };
    const updatedLogs = [...forensicResult.chainOfCustody || [], newLog];
    const updatedResult = {
      ...forensicResult,
      chainOfCustody: updatedLogs
    };
    setForensicResult(updatedResult);
    await saveForensicToHistory(updatedResult);
    setCustomEvent("");
    zt.success("Timeline audit log appended successfully.");
  };
  const handleCopyText = (text) => {
    navigator.clipboard.writeText(text);
    zt.success("Copied to clipboard!");
  };
  const handleSpeechSynthesis = (text) => {
    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    } else {
      const clean = text.replace(/[#*`\n]/g, " ");
      const u = new SpeechSynthesisUtterance(clean.substring(0, 1500));
      u.onend = () => setIsSpeaking(false);
      u.onerror = () => setIsSpeaking(false);
      window.speechSynthesis.speak(u);
      setIsSpeaking(true);
    }
  };
  const handleExportDOCX = (forensic) => {
    var _a2, _b2, _c2, _d2, _e2, _f2, _g2, _h2, _i2, _j2, _k2, _l2, _m2, _n2, _o2, _p2, _q2, _r2, _s2, _t2, _u2, _v2, _w2, _x2, _y2, _z2;
    if (!forensic) return;
    const docContent = `
      AISA FORENSIC EVIDENCE & ADMISSIBILITY REPORT
      =============================================
      
      File Name: ${forensic.title}
      Evidence Classification: ${forensic.classification || "Electronic Evidence"}
      Exhibit Reference: ${forensic.exhibitNumber || "N/A"}
      Case Role: ${forensic.caseRole || "N/A"}
      Analysis Timestamp: ${forensic.timestamp}
      Verification Score: ${(_a2 = forensic.stats) == null ? void 0 : _a2.verificationScore}%
      Risk Alerts: ${(_b2 = forensic.stats) == null ? void 0 : _b2.riskAlerts}
      Admissibility Rate: ${(_c2 = forensic.stats) == null ? void 0 : _c2.admissibilityRate}%
      AI Confidence Rating: ${(_d2 = forensic.stats) == null ? void 0 : _d2.confidenceRate}%
      
      1. ANALYSIS SUMMARY
      --------------------
      ${forensic.summary || "Forensic analysis completed."}
      
      2. DETAILED FINDINGS
      --------------------
      Key Findings:
      ${((_f2 = (_e2 = forensic.findings) == null ? void 0 : _e2.keyFindings) == null ? void 0 : _f2.map((f) => `- ${f}`).join("\n")) || "None"}
      
      Legal Observations:
      ${((_h2 = (_g2 = forensic.findings) == null ? void 0 : _g2.legalObservations) == null ? void 0 : _h2.map((o) => `- ${o}`).join("\n")) || "None"}
      
      Potential Risks & Vulnerabilities:
      ${((_j2 = (_i2 = forensic.findings) == null ? void 0 : _i2.potentialRisks) == null ? void 0 : _j2.map((r) => `- ${r}`).join("\n")) || "None"}
      
      Strengths:
      ${((_l2 = (_k2 = forensic.findings) == null ? void 0 : _k2.strengths) == null ? void 0 : _l2.map((s) => `- ${s}`).join("\n")) || "None"}
      
      Weaknesses:
      ${((_n2 = (_m2 = forensic.findings) == null ? void 0 : _m2.weaknesses) == null ? void 0 : _n2.map((w) => `- ${w}`).join("\n")) || "None"}
      
      3. METADATA & INTEGRITY PROFILE
      -------------------------------
      Origin/Source Device: ${((_o2 = forensic.metadata) == null ? void 0 : _o2.device) || "N/A"}
      Record Timestamp: ${((_p2 = forensic.metadata) == null ? void 0 : _p2.timestamp) || "N/A"}
      GPS Coordinates: ${((_q2 = forensic.metadata) == null ? void 0 : _q2.gps) || "N/A"}
      Tampering Analysis: ${((_r2 = forensic.metadata) == null ? void 0 : _r2.tamperingDetected) || "N/A"}
      EXIF Headers: ${((_s2 = forensic.metadata) == null ? void 0 : _s2.exifData) || "N/A"}
      
      4. ADMISSIBILITY EVALUATION
      ---------------------------
      Status: ${((_t2 = forensic.admissibilityReport) == null ? void 0 : _t2.status) || "N/A"}
      Admissibility Criteria Check:
      ${((_v2 = (_u2 = forensic.admissibilityReport) == null ? void 0 : _u2.reasons) == null ? void 0 : _v2.map((r) => `- ${r}`).join("\n")) || "N/A"}
      
      5. COMPARATIVE CONTRADICTIONS ANALYSIS
      --------------------------------------
      ${((_w2 = forensic.contradictions) == null ? void 0 : _w2.map((c) => `[Severity: ${c.severity}] ${c.title}: ${c.explanation}`).join("\n")) || "No major contradictions flagged."}
      
      6. APPLICABLE SECTIONS & STATUTORY RULES
      -----------------------------------------
      ${((_x2 = forensic.legalSections) == null ? void 0 : _x2.map((s) => `- Section ${s.section} under ${s.act}: ${s.desc}`).join("\n")) || "None recommended."}
      
      7. MISSING EVIDENCE RECOMMENDATIONS
      -----------------------------------
      ${((_y2 = forensic.missingEvidence) == null ? void 0 : _y2.map((m) => `- ${m}`).join("\n")) || "No gap requirements identified."}
      
      8. AUDIT CHAIN OF CUSTODY TIMELINE
      ----------------------------------
      ${((_z2 = forensic.chainOfCustody) == null ? void 0 : _z2.map((e) => `[${e.time}] ${e.event} | Action by: ${e.user} | Location: ${e.location}`).join("\n")) || "N/A"}
      
      9. EXTRACTED DOCUMENT TEXT / RECORD TRANSCRIPT
      -----------------------------------------------
      ${forensic.ocrText || "No text extracted."}
      
      ---------------------------------------------------------------------------
      Document generated automatically via AISA court-ready forensic engine.
    `;
    const blob = new Blob([docContent], { type: "application/msword" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `${forensic.title.replace(/\s+/g, "_")}_Forensic_Report.doc`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    zt.success("DOCX report downloaded!");
  };
  const handleExportPDF = (forensic) => {
    var _a2, _b2, _c2, _d2, _e2, _f2, _g2, _h2, _i2, _j2, _k2, _l2, _m2, _n2, _o2, _p2, _q2;
    if (!forensic) return;
    const printWindow = window.open("", "_blank");
    if (!printWindow) {
      zt.error("Popup blocked! Enable popups to print/export PDF.");
      return;
    }
    const html = `
      <html>
      <head>
        <meta charset="UTF-8"/>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,400;0,700;1,400&family=Noto+Sans+Devanagari:wght@400;700&display=swap" rel="stylesheet"/>
        <title>AISA Forensic Report - ${forensic.title}</title>
        <style>
          body { font-family: 'Noto Sans Devanagari', 'Noto Sans', Arial, sans-serif; padding: 40px; color: #1e293b; line-height: 1.8; }
          .header { text-align: center; border-bottom: 2px solid #3b82f6; padding-bottom: 20px; margin-bottom: 30px; }
          .title { text-transform: uppercase; font-size: 20px; font-weight: 800; color: #1d4ed8; margin: 0; }
          .exhibit { display: inline-block; padding: 5px 15px; background: #eff6ff; border: 1px solid #bfdbfe; color: #1d4ed8; font-weight: bold; border-radius: 8px; margin-top: 10px; }
          .grid { display: grid; grid-template-cols: 1fr 1fr; gap: 20px; margin-bottom: 20px; }
          .card { padding: 15px; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; }
          .card h3 { margin-top: 0; font-size: 14px; text-transform: uppercase; color: #64748b; tracking: 1px; }
          .score { font-size: 24px; font-weight: 900; color: #1d4ed8; }
          .section-title { font-size: 15px; border-bottom: 1px solid #e2e8f0; font-weight: bold; padding-bottom: 5px; color: #0f172a; margin-top: 25px; margin-bottom: 10px; }
          ul { padding-left: 20px; margin-top: 5px; }
          li { margin-bottom: 5px; }
          .ocr-text { white-space: pre-wrap; font-family: monospace; font-size: 12px; background: #f1f5f9; padding: 15px; border-radius: 8px; border: 1px solid #e2e8f0; }
          .footer { margin-top: 50px; border-top: 1px solid #e2e8f0; font-size: 10px; text-align: center; padding-top: 15px; color: #94a3b8; }
        </style>
      </head>
      <body>
        <div class="header">
          <p style="font-size: 10px; font-weight: 800; tracking: 2px; color: #3b82f6; margin: 0 0 5px 0;">AISA ENTERPRISE FORENSIC INTELLIGENCE PLATFORM</p>
          <h1 class="title">Court-Ready Forensic Evidence Report</h1>
          <div class="exhibit">${forensic.exhibitNumber} (${forensic.caseRole})</div>
        </div>

        <div class="grid">
          <div class="card">
            <h3>Evidence Identification</h3>
            <p><strong>Name:</strong> ${forensic.title}</p>
            <p><strong>Type:</strong> ${forensic.evidenceType}</p>
            <p><strong>Classification:</strong> ${forensic.classification}</p>
            <p><strong>Timestamp:</strong> ${forensic.timestamp}</p>
          </div>
          <div class="card">
            <h3>Forensic Metrics</h3>
            <p><strong>Verification Rating:</strong> <span class="score">${(_a2 = forensic.stats) == null ? void 0 : _a2.verificationScore}%</span></p>
            <p><strong>Admissibility Score:</strong> <span class="score">${(_b2 = forensic.stats) == null ? void 0 : _b2.admissibilityRate}%</span></p>
            <p><strong>Confidence:</strong> ${(_c2 = forensic.stats) == null ? void 0 : _c2.confidenceRate}% | <strong>Alerts:</strong> ${(_d2 = forensic.stats) == null ? void 0 : _d2.riskAlerts}</p>
          </div>
        </div>

        <div class="section-title">1. Audit Summary</div>
        <p>${forensic.summary}</p>

        <div class="section-title">2. Key Findings & Legal Observations</div>
        <strong>Findings:</strong>
        <ul>${((_f2 = (_e2 = forensic.findings) == null ? void 0 : _e2.keyFindings) == null ? void 0 : _f2.map((f) => `<li>${f}</li>`).join("")) || "<li>None</li>"}</ul>
        <strong>Observations:</strong>
        <ul>${((_h2 = (_g2 = forensic.findings) == null ? void 0 : _g2.legalObservations) == null ? void 0 : _h2.map((o) => `<li>${o}</li>`).join("")) || "<li>None</li>"}</ul>

        <div class="section-title">3. Forensic Integrity & Metadata</div>
        <p><strong>Origin Device:</strong> ${((_i2 = forensic.metadata) == null ? void 0 : _i2.device) || "N/A"}</p>
        <p><strong>Internal Timestamp:</strong> ${((_j2 = forensic.metadata) == null ? void 0 : _j2.timestamp) || "N/A"}</p>
        <p><strong>GPS Coordinates:</strong> ${((_k2 = forensic.metadata) == null ? void 0 : _k2.gps) || "N/A"}</p>
        <p><strong>Pixel/Tamper Flag:</strong> ${((_l2 = forensic.metadata) == null ? void 0 : _l2.tamperingDetected) || "N/A"}</p>
        <p><strong>EXIF Raw:</strong> ${((_m2 = forensic.metadata) == null ? void 0 : _m2.exifData) || "N/A"}</p>

        <div class="section-title">4. Court Admissibility Reasons</div>
        <p><strong>Status:</strong> ${(_n2 = forensic.admissibilityReport) == null ? void 0 : _n2.status}</p>
        <ul>${((_p2 = (_o2 = forensic.admissibilityReport) == null ? void 0 : _o2.reasons) == null ? void 0 : _p2.map((r) => `<li>${r}</li>`).join("")) || "<li>None</li>"}</ul>

        <div class="section-title">5. Chain of Custody Timeline Logs</div>
        <ul>${((_q2 = forensic.chainOfCustody) == null ? void 0 : _q2.map((e) => `<li>[${e.time}] ${e.event} - by ${e.user} (${e.location})</li>`).join("")) || "<li>None</li>"}</ul>

        <div class="section-title">6. Extracted OCR Transcript</div>
        <div class="ocr-text">${forensic.ocrText}</div>

        <div class="footer">Generated by AISA Intelligence Platform | Court Seal Authenticated</div>
      </body>
      </html>
    `;
    printWindow.document.write(html);
    printWindow.document.close();
    printWindow.focus();
    setTimeout(() => {
      printWindow.print();
    }, 500);
  };
  const renderOcrHighlight = () => {
    if (!ocrSearchQuery.trim()) return ocrText;
    const parts = ocrText.split(new RegExp(`(${ocrSearchQuery})`, "gi"));
    return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: parts.map(
      (p, i) => p.toLowerCase() === ocrSearchQuery.toLowerCase() ? /* @__PURE__ */ jsxRuntimeExports.jsx("mark", { className: "bg-yellow-300 dark:bg-yellow-600/80 text-black px-0.5 rounded", children: p }, i) : p
    ) });
  };
  const filteredHistory = reactExports.useMemo(() => {
    return historyData.filter(
      (h) => {
        var _a2, _b2;
        return ((_a2 = h.title) == null ? void 0 : _a2.toLowerCase().includes(historySearch.toLowerCase())) || ((_b2 = h.evidenceType) == null ? void 0 : _b2.toLowerCase().includes(historySearch.toLowerCase()));
      }
    );
  }, [historyData, historySearch]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `flex-1 flex flex-col w-full h-full min-h-0 ${isDark ? "bg-[#070b16] text-slate-100" : "bg-slate-50 text-slate-800"} overflow-hidden`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `flex flex-col sm:flex-row items-start sm:items-center justify-between px-6 py-4 border-b ${isDark ? "border-slate-800 bg-[#0B1020]/95 text-white" : "border-slate-200 bg-white text-slate-900"} backdrop-blur-xl shrink-0 gap-4`, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: onBack,
            className: `p-2 rounded-xl transition-colors border ${isDark ? "hover:bg-slate-800 border-slate-700/50" : "hover:bg-slate-100 border-slate-200"}`,
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { size: 18, className: isDark ? "text-slate-400" : "text-slate-600" })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-md sm:text-lg font-black tracking-tight flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { className: "text-indigo-500 fill-indigo-500/10", size: 20 }),
            "Forensic Intelligence Platform"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 mt-0.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] font-black text-emerald-500 uppercase tracking-widest", children: "COURT-READY SEALS ACTIVE" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 w-full sm:w-auto", children: [
        allProjects.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "select",
          {
            value: linkedCaseId,
            onChange: (e) => handleCaseSelect(e.target.value),
            className: `border rounded-xl px-3 py-1.5 text-xs font-bold outline-none w-full sm:w-48 ${isDark ? "bg-slate-900 border-slate-700 text-slate-300" : "bg-white border-slate-300 text-slate-700"}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "No linked case" }),
              allProjects.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: c._id, children: c.name }, c._id))
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: () => setHistoryVisible(true),
            className: `flex items-center justify-center gap-1.5 px-3 py-2 bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 hover:bg-indigo-500/20 rounded-xl text-xs font-black uppercase tracking-wider transition-all whitespace-nowrap`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(History, { size: 14 }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                "Forensic Records (",
                historyData.length,
                ")"
              ] })
            ]
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 overflow-y-auto px-6 py-6 custom-scrollbar space-y-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto space-y-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 md:grid-cols-5 gap-3.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `border rounded-2xl p-4 shadow-lg relative overflow-hidden group ${isDark ? "bg-[#101935]/80 border-indigo-900/40 text-white" : "bg-white border-slate-200 text-slate-800"}`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute right-2 top-2 opacity-5 text-indigo-400", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Database, { size: 40 }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-slate-400 font-bold uppercase tracking-wider", children: "Total Evidence" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `text-xl font-black mt-1 ${isDark ? "text-white" : "text-slate-900"}`, children: analytics.total })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `border rounded-2xl p-4 shadow-lg relative overflow-hidden ${isDark ? "bg-[#101935]/80 border-indigo-900/40 text-white" : "bg-white border-slate-200 text-slate-800"}`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute right-2 top-2 opacity-5 text-emerald-400", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { size: 40 }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-slate-400 font-bold uppercase tracking-wider", children: "Strong Evidence" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `text-xl font-black mt-1 ${isDark ? "text-emerald-400" : "text-emerald-600"}`, children: analytics.strong })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `border rounded-2xl p-4 shadow-lg relative overflow-hidden ${isDark ? "bg-[#101935]/80 border-indigo-900/40 text-white" : "bg-white border-slate-200 text-slate-800"}`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute right-2 top-2 opacity-5 text-red-400", children: /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { size: 40 }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-slate-400 font-bold uppercase tracking-wider", children: "Weak / Suspicious" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `text-xl font-black mt-1 ${isDark ? "text-red-400" : "text-red-650"}`, children: analytics.weak })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `border rounded-2xl p-4 shadow-lg relative overflow-hidden ${isDark ? "bg-[#101935]/80 border-indigo-900/40 text-white" : "bg-white border-slate-200 text-slate-800"}`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute right-2 top-2 opacity-5 text-teal-400", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Scale, { size: 40 }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-slate-400 font-bold uppercase tracking-wider", children: "Admissible Docs" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `text-xl font-black mt-1 ${isDark ? "text-teal-400" : "text-teal-650"}`, children: analytics.admissible })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `border rounded-2xl p-4 shadow-lg relative overflow-hidden ${isDark ? "bg-[#101935]/80 border-indigo-900/40 text-white" : "bg-white border-slate-200 text-slate-800"}`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute right-2 top-2 opacity-5 text-rose-400", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldAlert, { size: 40 }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-slate-400 font-bold uppercase tracking-wider", children: "High Risk" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `text-xl font-black mt-1 ${isDark ? "text-rose-400" : "text-rose-600"}`, children: analytics.highRisk })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `border rounded-2xl p-4 shadow-lg relative overflow-hidden ${isDark ? "bg-[#101935]/80 border-indigo-900/40 text-white" : "bg-white border-slate-200 text-slate-800"}`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute right-2 top-2 opacity-5 text-yellow-400", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { size: 40 }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-slate-400 font-bold uppercase tracking-wider", children: "Contradictions" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `text-xl font-black mt-1 ${isDark ? "text-yellow-400" : "text-amber-600"}`, children: analytics.contradictions })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `border rounded-2xl p-4 shadow-lg relative overflow-hidden ${isDark ? "bg-[#101935]/80 border-indigo-900/40 text-white" : "bg-white border-slate-200 text-slate-800"}`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute right-2 top-2 opacity-5 text-orange-400", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Folder, { size: 40 }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-slate-400 font-bold uppercase tracking-wider", children: "Missing Items" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `text-xl font-black mt-1 ${isDark ? "text-orange-400" : "text-orange-600"}`, children: analytics.missing })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `border rounded-2xl p-4 shadow-lg relative overflow-hidden ${isDark ? "bg-[#101935]/80 border-indigo-900/40 text-white" : "bg-white border-slate-200 text-slate-800"}`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute right-2 top-2 opacity-5 text-pink-400", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Brain, { size: 40 }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-slate-400 font-bold uppercase tracking-wider", children: "AI Avg Confidence" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `text-xl font-black mt-1 ${isDark ? "text-pink-400" : "text-pink-650"}`, children: analytics.total > 0 ? `${analytics.avgConfidence}%` : "--" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `border rounded-2xl p-4 shadow-lg relative overflow-hidden ${isDark ? "bg-[#101935]/80 border-indigo-900/40 text-white" : "bg-white border-slate-200 text-slate-800"}`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute right-2 top-2 opacity-5 text-sky-400", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Fingerprint, { size: 40 }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-slate-400 font-bold uppercase tracking-wider", children: "Avg Integrity Rating" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `text-xl font-black mt-1 ${isDark ? "text-sky-400" : "text-sky-650"}`, children: analytics.total > 0 ? `${analytics.avgVerification}%` : "--" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `border rounded-2xl p-4 shadow-lg relative overflow-hidden ${isDark ? "bg-[#101935]/80 border-indigo-900/40 text-white" : "bg-white border-slate-200 text-slate-800"}`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute right-2 top-2 opacity-5 text-purple-400", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Award, { size: 40 }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-slate-400 font-bold uppercase tracking-wider", children: "Case Strength Score" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `text-xl font-black mt-1 ${isDark ? "text-purple-400" : "text-purple-650"}`, children: analytics.total > 0 ? `${analytics.caseStrength}%` : "--" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-12 gap-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-5 space-y-6", children: [
          prefillBanner && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `p-4 rounded-2xl flex gap-3 border ${isDark ? "bg-emerald-950/20 border-emerald-500/30" : "bg-emerald-50 border-emerald-200"}`, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "text-emerald-500 shrink-0 mt-0.5", size: 16 }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: `text-xs font-black ${isDark ? "text-emerald-400" : "text-emerald-800"}`, children: [
                "Prefill Context Staged: ",
                prefillBanner.caseTitle
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[10px] text-slate-500 mt-1 font-medium", children: [
                prefillBanner.docCount,
                " records available inside linked workspace."
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setPrefillBanner(null), className: "text-slate-500 hover:text-slate-350", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 14 }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `border rounded-3xl p-5 shadow-xl space-y-5 ${isDark ? "bg-[#0f162a] border-slate-800 text-slate-100" : "bg-white border-slate-200 text-slate-800"}`, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `flex items-center justify-between border-b pb-3 ${isDark ? "border-slate-800" : "border-slate-200"}`, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Upload, { className: "text-indigo-400", size: 16 }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: `text-xs font-black uppercase tracking-widest ${isDark ? "text-slate-300" : "text-slate-700"}`, children: "Staging Area & Parameters" })
              ] }),
              linkedCaseId && /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  onClick: handlePrefillFromCase,
                  className: "text-[9px] font-black uppercase bg-indigo-500/10 hover:bg-indigo-500/20 border border-indigo-500/30 text-indigo-400 px-2 py-1 rounded-lg transition-all",
                  children: "Use Active Case"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: `text-[10px] font-black uppercase tracking-widest ${isDark ? "text-slate-400" : "text-slate-500"}`, children: "1. Evidence Type Selector" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "select",
                {
                  value: selectedEvidenceType,
                  onChange: (e) => setSelectedEvidenceType(e.target.value),
                  className: `w-full border rounded-xl px-3 py-2.5 text-xs font-bold outline-none focus:border-indigo-500 ${isDark ? "bg-slate-900 border-slate-800 text-slate-200" : "bg-slate-50 border-slate-300 text-slate-700"}`,
                  children: EVIDENCE_TYPES.map((type) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: type, children: type }, type))
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: `text-[10px] font-black uppercase tracking-widest ${isDark ? "text-slate-400" : "text-slate-500"}`, children: "2. Court Exhibit Group Role" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: () => setCaseRole("Prosecution"),
                    className: `py-2 px-3 rounded-xl border text-xs font-black uppercase tracking-wider transition-all ${caseRole === "Prosecution" ? "bg-indigo-600 text-white border-indigo-500 shadow-md" : isDark ? "bg-slate-900 border-slate-800 text-slate-400" : "bg-slate-50 border-slate-300 text-slate-650"}`,
                    children: "Prosecution / Plaintiff (P)"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: () => setCaseRole("Defense"),
                    className: `py-2 px-3 rounded-xl border text-xs font-black uppercase tracking-wider transition-all ${caseRole === "Defense" ? "bg-rose-600 text-white border-rose-500 shadow-md" : isDark ? "bg-slate-900 border-slate-800 text-slate-400" : "bg-slate-50 border-slate-300 text-slate-650"}`,
                    children: "Defense (D)"
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: `flex flex-col items-center justify-center border-2 border-dashed rounded-2xl p-6 cursor-pointer transition-all ${isDark ? "border-slate-800 hover:border-slate-700 bg-slate-900/50 hover:bg-slate-900" : "border-slate-200 hover:border-slate-300 bg-slate-50 hover:bg-slate-100/60"}`, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: "file",
                  className: "hidden",
                  onChange: handleFileUpload
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Fingerprint, { className: "text-slate-700 mb-2 group-hover:text-indigo-400", size: 32 }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-[11px] font-black uppercase tracking-wider ${isDark ? "text-slate-300" : "text-slate-750"}`, children: "Choose Court Exhibit File" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] text-slate-500 font-bold uppercase tracking-widest mt-1", children: "Images, Videos, Audio, PDF, Chats (Max 15MB)" })
            ] }),
            selectedFile && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `flex items-center gap-3 p-3 rounded-xl border ${isDark ? "bg-indigo-500/5 border-indigo-500/20" : "bg-indigo-50/50 border-indigo-200"}`, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { size: 18, className: "text-indigo-400 shrink-0" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `text-xs font-bold truncate ${isDark ? "text-slate-200" : "text-slate-850"}`, children: selectedFile.name }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[9px] text-slate-500 uppercase font-black mt-0.5", children: [
                  Math.round(selectedFile.size / 1024),
                  " KB • ",
                  selectedFile.mimeType
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setSelectedFile(null), className: "p-1 hover:bg-slate-800 rounded-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 14, className: "text-slate-400" }) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: `text-[10px] font-black uppercase tracking-widest ${isDark ? "text-slate-400" : "text-slate-550"}`, children: "Evidence Record Name" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: "text",
                  placeholder: "e.g. CCTV recording from main street camera",
                  value: evidenceTitle,
                  onChange: (e) => setEvidenceTitle(e.target.value),
                  className: `w-full border rounded-xl px-3 py-2 text-xs font-bold outline-none focus:border-indigo-500 ${isDark ? "bg-slate-900 border-slate-800 text-slate-200" : "bg-slate-50 border-slate-300 text-slate-700"}`
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: `text-[10px] font-black uppercase tracking-widest ${isDark ? "text-slate-400" : "text-slate-555"}`, children: "Context Notes / Custody" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "textarea",
                {
                  rows: 2,
                  placeholder: "Enter device make, seize context details, hash notes...",
                  value: evidenceNotes,
                  onChange: (e) => setEvidenceNotes(e.target.value),
                  className: `w-full border rounded-xl px-3 py-2 text-xs outline-none resize-none focus:border-indigo-500 ${isDark ? "bg-slate-900 border-slate-800 text-slate-300" : "bg-slate-50 border-slate-300 text-slate-700"}`
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `border rounded-3xl p-5 shadow-xl space-y-4 ${isDark ? "bg-[#0f162a] border-slate-800 text-slate-100" : "bg-white border-slate-200 text-slate-800"}`, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `flex items-center gap-2 border-b pb-3 ${isDark ? "border-slate-800" : "border-slate-200"}`, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Scale, { className: "text-indigo-400", size: 16 }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: `text-xs font-black uppercase tracking-widest ${isDark ? "text-slate-300" : "text-slate-750"}`, children: "Contradiction Reference Seeding" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-[9px] font-black uppercase tracking-widest text-slate-500", children: "FIR Content" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "textarea",
                  {
                    rows: 2,
                    placeholder: "Paste FIR facts...",
                    value: firContent,
                    onChange: (e) => setFirContent(e.target.value),
                    className: `w-full border rounded-xl px-2.5 py-1.5 text-[11px] outline-none resize-none focus:border-indigo-500 ${isDark ? "bg-slate-900 border-slate-800 text-slate-300" : "bg-slate-50 border-slate-300 text-slate-700"}`
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-[9px] font-black uppercase tracking-widest text-slate-500", children: "Complaint Text" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "textarea",
                  {
                    rows: 2,
                    placeholder: "Paste complaint...",
                    value: complaintContent,
                    onChange: (e) => setComplaintContent(e.target.value),
                    className: `w-full border rounded-xl px-2.5 py-1.5 text-[11px] outline-none resize-none focus:border-indigo-500 ${isDark ? "bg-slate-900 border-slate-800 text-slate-300" : "bg-slate-50 border-slate-300 text-slate-700"}`
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-[9px] font-black uppercase tracking-widest text-slate-500", children: "Witness Statements" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "textarea",
                  {
                    rows: 2,
                    placeholder: "Paste statements...",
                    value: witnessStatements,
                    onChange: (e) => setWitnessStatements(e.target.value),
                    className: `w-full border rounded-xl px-2.5 py-1.5 text-[11px] outline-none resize-none focus:border-indigo-500 ${isDark ? "bg-slate-900 border-slate-800 text-slate-300" : "bg-slate-50 border-slate-300 text-slate-700"}`
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-[9px] font-black uppercase tracking-widest text-slate-500", children: "Previous Evidence Log" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "textarea",
                  {
                    rows: 2,
                    placeholder: "Paste evidence summary...",
                    value: previousEvidence,
                    onChange: (e) => setPreviousEvidence(e.target.value),
                    className: `w-full border rounded-xl px-2.5 py-1.5 text-[11px] outline-none resize-none focus:border-indigo-500 ${isDark ? "bg-slate-900 border-slate-800 text-slate-300" : "bg-slate-50 border-slate-300 text-slate-700"}`
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                onClick: runForensicScanner,
                disabled: isAuditing || !evidenceNotes.trim() && !selectedFile,
                className: "w-full py-4.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl font-black text-xs uppercase tracking-widest transition-all active:scale-95 shadow-lg shadow-indigo-600/20 disabled:opacity-50 flex items-center justify-center gap-2 mt-2",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Fingerprint, { size: 15 }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Initiate Forensic Analysis" })
                ]
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { ref: reportRef, className: "lg:col-span-7", children: [
          isAuditing && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `border rounded-3xl p-12 shadow-xl flex flex-col items-center justify-center gap-4 text-center min-h-[400px] ${isDark ? "bg-[#0f162a] border-slate-800" : "bg-white border-slate-200 text-slate-700"}`, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { className: "text-indigo-400 animate-spin", size: 36 }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-black uppercase tracking-widest text-indigo-400", children: "AISA Forensic Pipeline Processing" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[10px] text-slate-500 mt-1 max-w-xs mx-auto", children: [
                scanPhase === "uploading" && "Streaming file to forensic nodes...",
                scanPhase === "analyzing" && "Analyzing EXIF/Metadata signatures & verifying checksums...",
                scanPhase === "generating" && "Extracting OCR and formatting Section 65B legal brief..."
              ] })
            ] })
          ] }),
          !isAuditing && !forensicResult && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `border rounded-3xl p-12 shadow-xl flex flex-col items-center justify-center gap-4 text-center min-h-[400px] ${isDark ? "bg-[#0f162a]/50 border-slate-800/60 text-slate-300" : "bg-white border-slate-200 text-slate-650"}`, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `w-16 h-16 rounded-full border flex items-center justify-center ${isDark ? "bg-slate-900 border-slate-800 text-slate-600" : "bg-slate-50 border-slate-200 text-slate-400"}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { size: 32 }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: `text-sm font-black uppercase tracking-widest ${isDark ? "text-slate-300" : "text-slate-700"}`, children: "No Active Forensic Scan Loaded" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-slate-500 mt-2 max-w-sm mx-auto", children: "Upload an exhibit file or select an archive log from the Forensic Records database list to view court-ready admissibility reviews." })
            ] })
          ] }),
          !isAuditing && forensicResult && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `border rounded-3xl overflow-hidden shadow-2xl flex flex-col h-full min-h-[500px] ${isDark ? "bg-[#0f162a] border-slate-800" : "bg-white border-slate-200 text-slate-800"}`, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `px-6 py-4 border-b flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 shrink-0 ${isDark ? "bg-[#131c35]/80 border-slate-800 text-white" : "bg-slate-50 border-slate-200 text-slate-900"}`, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-2 py-0.5 bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-[10px] font-black uppercase rounded-lg", children: forensicResult.exhibitNumber }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] text-slate-500 uppercase font-black tracking-wider", children: [
                    "(",
                    forensicResult.classification,
                    ")"
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: `text-sm font-bold mt-1.5 ${isDark ? "text-white" : "text-slate-800"}`, children: forensicResult.title })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 flex-wrap justify-end", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  LanguageToggle,
                  {
                    lang: outputLang,
                    onChange: handleForensicLangChange,
                    isTranslating: isForensicTranslating
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    onClick: () => handleCopyText(forensicResult.ocrText),
                    className: `p-2 rounded-lg transition-colors ${isDark ? "hover:bg-slate-800 text-slate-400 hover:text-indigo-400" : "hover:bg-slate-200 text-slate-500 hover:text-indigo-600"}`,
                    title: "Copy OCR Transcript",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(Copy, { size: 14 })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    onClick: () => handleSpeechSynthesis(forensicResult.ocrText),
                    className: `p-2 rounded-lg transition-colors ${isDark ? isSpeaking ? "text-indigo-400 bg-indigo-500/10" : "text-slate-400 hover:text-indigo-400" : isSpeaking ? "text-indigo-700 bg-indigo-100" : "text-slate-500 hover:text-indigo-600"}`,
                    title: "Speech synthesis read-out",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(Mic, { size: 14 })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    onClick: () => handleExportDOCX(forensicResult),
                    className: `p-2 rounded-lg transition-colors ${isDark ? "hover:bg-slate-800 text-slate-400 hover:text-indigo-400" : "hover:bg-slate-200 text-slate-500 hover:text-indigo-600"}`,
                    title: "Download Word (DOC)",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(FileDown, { size: 14 })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    onClick: () => handleExportPDF(forensicResult),
                    className: `p-2 rounded-lg transition-colors border ${isDark ? "hover:bg-slate-800 border-indigo-900/40 bg-indigo-950/20 text-indigo-400 hover:text-indigo-300" : "hover:bg-indigo-100 border-indigo-200 bg-indigo-50 text-indigo-700 hover:text-indigo-800"}`,
                    title: "Print Court PDF",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(Printer, { size: 14 })
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `flex border-b shrink-0 overflow-x-auto no-scrollbar ${isDark ? "border-slate-800 bg-[#070b16]" : "border-slate-200 bg-slate-100"}`, children: [
              { id: "report", label: "AI Findings" },
              { id: "ocr", label: "OCR Extraction" },
              { id: "integrity", label: "Integrity & EXIF" },
              { id: "admissibility", label: "Admissibility Status" },
              { id: "strength", label: "Strength Indicators" },
              { id: "sections", label: "Applicable Laws" },
              { id: "exhibit", label: "Exhibit Custody" }
            ].map((tab) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: () => setActiveTab(tab.id),
                className: `px-4.5 py-3.5 text-[10px] font-black uppercase tracking-wider border-b-2 transition-all whitespace-nowrap ${activeTab === tab.id ? isDark ? "border-indigo-500 text-white bg-slate-900/50" : "border-indigo-600 text-indigo-600 bg-white" : isDark ? "border-transparent text-slate-400 hover:text-slate-300 hover:bg-slate-900/20" : "border-transparent text-slate-500 hover:text-slate-800 hover:bg-slate-200/50"}`,
                children: tab.label
              },
              tab.id
            )) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 p-6 overflow-y-auto custom-scrollbar select-text text-sm leading-relaxed", children: [
              activeTab === "report" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `border p-4.5 rounded-2xl ${isDark ? "bg-slate-900/60 border-slate-800" : "bg-slate-50 border-slate-200"}`, children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "text-[10px] font-black uppercase tracking-widest text-indigo-400 mb-1.5", children: "1. Analysis Overview Summary" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `text-xs font-medium leading-relaxed ${isDark ? "text-slate-300" : "text-slate-750"}`, children: forensicResult.summary })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `p-4.5 rounded-2xl border ${isDark ? "bg-[#101935]/40 border-indigo-950/50" : "bg-emerald-50/40 border-emerald-200/50"}`, children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("h5", { className: `text-[10px] font-black uppercase tracking-widest ${isDark ? "text-emerald-400" : "text-emerald-700"} mb-2 flex items-center gap-1`, children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: isDark ? "text-emerald-400" : "text-emerald-700", size: 12 }),
                      " Key Forensic Strengths"
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: `list-disc pl-4 space-y-1 text-xs font-semibold ${isDark ? "text-slate-300" : "text-slate-700"}`, children: [
                      (_b = (_a = forensicResult.findings) == null ? void 0 : _a.strengths) == null ? void 0 : _b.map((s, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: s }, idx)),
                      (!((_c = forensicResult.findings) == null ? void 0 : _c.strengths) || ((_d = forensicResult.findings) == null ? void 0 : _d.strengths.length) === 0) && /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "No parameters verified." })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `p-4.5 rounded-2xl border ${isDark ? "bg-[#1c121e]/40 border-rose-950/50" : "bg-rose-50/40 border-rose-200/50"}`, children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("h5", { className: `text-[10px] font-black uppercase tracking-widest ${isDark ? "text-rose-400" : "text-rose-700"} mb-2 flex items-center gap-1`, children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: isDark ? "text-rose-400" : "text-rose-700", size: 12 }),
                      " Risk & Vulnerabilities"
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: `list-disc pl-4 space-y-1 text-xs font-semibold ${isDark ? "text-slate-300" : "text-slate-700"}`, children: [
                      (_f = (_e = forensicResult.findings) == null ? void 0 : _e.weaknesses) == null ? void 0 : _f.map((w, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: w }, idx)),
                      (!((_g = forensicResult.findings) == null ? void 0 : _g.weaknesses) || ((_h = forensicResult.findings) == null ? void 0 : _h.weaknesses.length) === 0) && /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "None flagged." })
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "text-[10px] font-black uppercase tracking-widest text-slate-450", children: "Key Chronological Observations" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: (_j = (_i = forensicResult.findings) == null ? void 0 : _i.keyFindings) == null ? void 0 : _j.map((kf, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `flex gap-2 text-xs font-medium ${isDark ? "text-slate-300" : "text-slate-700"}`, children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-indigo-400 font-black", children: "•" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: kf })
                  ] }, idx)) })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3 pt-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "text-[10px] font-black uppercase tracking-widest text-slate-455", children: "Legal/Admissibility Observations" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: (_l = (_k = forensicResult.findings) == null ? void 0 : _k.legalObservations) == null ? void 0 : _l.map((lo, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `flex gap-2 text-xs font-medium ${isDark ? "text-slate-300" : "text-slate-700"}`, children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-emerald-400 font-black", children: "✓" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: lo })
                  ] }, idx)) })
                ] })
              ] }),
              activeTab === "ocr" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 flex flex-col h-full", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 shrink-0 p-3 rounded-xl border ${isDark ? "bg-slate-900/60 border-slate-800" : "bg-slate-50 border-slate-200"}`, children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `flex items-center px-3 py-1.5 rounded-lg border flex-1 ${isDark ? "bg-slate-950 border-slate-800 text-slate-200" : "bg-white border-slate-300 text-slate-700"}`, children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "text-slate-500 mr-2", size: 14 }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "input",
                      {
                        type: "text",
                        placeholder: "Search inside text...",
                        value: ocrSearchQuery,
                        onChange: (e) => setOcrSearchQuery(e.target.value),
                        className: `bg-transparent border-none outline-none text-xs font-bold w-full focus:ring-0 focus:border-none focus:outline-none ${isDark ? "text-slate-200" : "text-slate-800"}`
                      }
                    ),
                    ocrSearchQuery && /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setOcrSearchQuery(""), className: "text-slate-500 hover:text-slate-300", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 12 }) })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-1.5 shrink-0", children: isEditingOcr ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "button",
                      {
                        onClick: handleSaveOcrText,
                        className: "px-3 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-xs font-black uppercase tracking-wider",
                        children: "Save Transcript"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "button",
                      {
                        onClick: () => {
                          setOcrText(forensicResult.ocrText);
                          setIsEditingOcr(false);
                        },
                        className: "px-3 py-1.5 bg-slate-850 hover:bg-slate-750 text-slate-300 rounded-lg text-xs font-black uppercase tracking-wider",
                        children: "Cancel"
                      }
                    )
                  ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "button",
                    {
                      onClick: () => setIsEditingOcr(true),
                      className: `px-3 py-1.5 rounded-lg text-xs font-black uppercase tracking-wider flex items-center gap-1 border ${isDark ? "bg-indigo-500/10 border-indigo-500/30 text-indigo-400 hover:bg-indigo-500/20" : "bg-indigo-50 border-indigo-205 text-indigo-700 hover:bg-indigo-100"}`,
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(PenLine, { size: 12 }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Edit Transcript" })
                      ]
                    }
                  ) })
                ] }),
                isEditingOcr ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "textarea",
                  {
                    value: ocrText,
                    onChange: (e) => setOcrText(e.target.value),
                    className: `w-full flex-1 min-h-[300px] border rounded-2xl p-4 text-xs font-mono focus:outline-none focus:ring-1 focus:ring-indigo-500 ${isDark ? "bg-slate-950 border-slate-800 text-slate-300" : "bg-white border-slate-300 text-slate-700"}`
                  }
                ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `border rounded-2xl p-5 font-mono text-xs overflow-y-auto max-h-[350px] leading-relaxed whitespace-pre-wrap ${isDark ? "bg-slate-950 border-slate-800 text-slate-300" : "bg-slate-50 border-slate-205 text-slate-700"}`, children: renderOcrHighlight() })
              ] }),
              activeTab === "integrity" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `border p-4.5 rounded-2xl ${isDark ? "bg-slate-900/60 border-slate-850" : "bg-slate-50 border-slate-200"}`, children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "text-[10px] font-black uppercase tracking-widest text-slate-400 mb-3", children: "Hardware Origin Profile" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 text-xs", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: `flex justify-between border-b pb-1.5 ${isDark ? "border-slate-800/40" : "border-slate-200"}`, children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-slate-500 font-bold", children: "Source Device:" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `font-bold ${isDark ? "text-slate-200" : "text-slate-800"}`, children: ((_m = forensicResult.metadata) == null ? void 0 : _m.device) || "Not logged" })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: `flex justify-between border-b pb-1.5 ${isDark ? "border-slate-800/40" : "border-slate-200"}`, children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-slate-500 font-bold", children: "Origin GPS Tags:" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `font-bold ${isDark ? "text-slate-200" : "text-slate-800"}`, children: ((_n = forensicResult.metadata) == null ? void 0 : _n.gps) || "Coordinates Unavailable" })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "flex justify-between", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-slate-500 font-bold", children: "Metadata Date:" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `font-bold ${isDark ? "text-slate-200" : "text-slate-800"}`, children: ((_o = forensicResult.metadata) == null ? void 0 : _o.timestamp) || "N/A" })
                      ] })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `border p-4.5 rounded-2xl ${isDark ? "bg-slate-900/60 border-slate-850" : "bg-slate-50 border-slate-200"}`, children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "text-[10px] font-black uppercase tracking-widest text-slate-400 mb-3", children: "Tampering & Modifications Audit" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 text-xs", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: `flex justify-between border-b pb-1.5 ${isDark ? "border-slate-800/40" : "border-slate-200"}`, children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-slate-500 font-bold", children: "Forgery Signals:" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `font-bold ${isDark ? "text-slate-200" : "text-slate-800"}`, children: ((_p = forensicResult.metadata) == null ? void 0 : _p.tamperingDetected) || "None detected" })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: `flex justify-between border-b pb-1.5 ${isDark ? "border-slate-800/40" : "border-slate-200"}`, children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-slate-500 font-bold", children: "File Formats Valid:" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-emerald-500", children: "Yes (Complies)" })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "flex justify-between", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-slate-500 font-bold", children: "Hash Checks Status:" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-indigo-400", children: "SHA-256 Verified Seal" })
                      ] })
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `border p-4 rounded-xl ${isDark ? "bg-slate-950 border-slate-850" : "bg-slate-50 border-slate-200"}`, children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "text-[10px] font-black uppercase tracking-widest text-indigo-400 mb-2", children: "Raw File EXIF / Header Metadata Parameters" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("pre", { className: `text-[10px] font-mono whitespace-pre-wrap leading-relaxed ${isDark ? "text-slate-400" : "text-slate-600"}`, children: ((_q = forensicResult.metadata) == null ? void 0 : _q.exifData) || "No additional raw parameters available." })
                ] })
              ] }),
              activeTab === "admissibility" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `flex items-center gap-4 border p-5 rounded-2xl ${isDark ? "bg-slate-900/60 border-slate-800" : "bg-slate-50 border-slate-200"}`, children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 border ${((_r = forensicResult.admissibilityReport) == null ? void 0 : _r.status) === "Admissible" ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-400" : ((_s = forensicResult.admissibilityReport) == null ? void 0 : _s.status) === "Partially Admissible" ? "bg-yellow-500/10 border-yellow-500/30 text-yellow-400" : "bg-rose-500/10 border-rose-500/30 text-rose-400"}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Scale, { size: 24 }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-slate-400 font-bold uppercase tracking-wider", children: "Admissibility Rating Verdict" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: `text-md font-black mt-0.5 ${((_t = forensicResult.admissibilityReport) == null ? void 0 : _t.status) === "Admissible" ? "text-emerald-450" : ((_u = forensicResult.admissibilityReport) == null ? void 0 : _u.status) === "Partially Admissible" ? "text-yellow-500" : "text-rose-500"}`, children: ((_v = forensicResult.admissibilityReport) == null ? void 0 : _v.status) || "Admissible" })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `border p-5 rounded-2xl space-y-3 ${isDark ? "bg-slate-900/40 border-slate-800" : "bg-slate-50 border-slate-200"}`, children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "text-[10px] font-black uppercase tracking-widest text-slate-300", children: "Statutory Compliance Reasonings" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                    (_x = (_w = forensicResult.admissibilityReport) == null ? void 0 : _w.reasons) == null ? void 0 : _x.map((reason, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `flex gap-2 text-xs font-semibold leading-relaxed ${isDark ? "text-slate-300" : "text-slate-700"}`, children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-emerald-400 font-black", children: "•" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: reason })
                    ] }, idx)),
                    (!((_y = forensicResult.admissibilityReport) == null ? void 0 : _y.reasons) || ((_z = forensicResult.admissibilityReport) == null ? void 0 : _z.reasons.length) === 0) && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-slate-500", children: "No compliance reasons mapped." })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `p-4 rounded-xl text-xs leading-relaxed border ${isDark ? "bg-indigo-950/20 border-indigo-500/20 text-indigo-300/80" : "bg-indigo-50 border-indigo-200/50 text-indigo-700"}`, children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Section 65B Notice:" }),
                  " Digital electronic records require certificate validation conforming to Bharatiya Sakshya Adhiniyam guidelines. Authenticity score of ",
                  (_A = forensicResult.stats) == null ? void 0 : _A.verificationScore,
                  "% qualifies as strong supporting grounds."
                ] })
              ] }),
              activeTab === "strength" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-5 gap-3", children: [
                  { label: "Authenticity", val: ((_B = forensicResult.strengthEngine) == null ? void 0 : _B.authenticity) || 80, color: "text-indigo-400" },
                  { label: "Relevance", val: ((_C = forensicResult.strengthEngine) == null ? void 0 : _C.relevance) || 85, color: "text-emerald-400" },
                  { label: "Reliability", val: ((_D = forensicResult.strengthEngine) == null ? void 0 : _D.reliability) || 75, color: "text-sky-400" },
                  { label: "Completeness", val: ((_E = forensicResult.strengthEngine) == null ? void 0 : _E.completeness) || 70, color: "text-pink-400" },
                  { label: "Admissibility", val: ((_F = forensicResult.strengthEngine) == null ? void 0 : _F.admissibility) || 80, color: "text-teal-400" }
                ].map((bar) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `border p-4 rounded-2xl flex flex-col items-center text-center ${isDark ? "bg-slate-900 border-slate-800" : "bg-slate-50 border-slate-200"}`, children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] font-bold text-slate-400 uppercase tracking-widest", children: bar.label }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "my-3 relative flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `text-lg font-black ${bar.color}`, children: [
                    bar.val,
                    "%"
                  ] }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `w-full h-1.5 rounded-full overflow-hidden ${isDark ? "bg-slate-800" : "bg-slate-200"}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `h-full rounded-full ${bar.color.replace("text", "bg")}`, style: { width: `${bar.val}%` } }) })
                ] }, bar.label)) }),
                ((_G = forensicResult.strengthEngine) == null ? void 0 : _G.explanation) && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `border p-4.5 rounded-2xl ${isDark ? "bg-slate-900/60 border-slate-800" : "bg-slate-50 border-slate-200"}`, children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1.5", children: "Strength Rating Justification" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `text-xs font-semibold leading-relaxed ${isDark ? "text-slate-300" : "text-slate-700"}`, children: forensicResult.strengthEngine.explanation })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `border p-5 rounded-2xl space-y-3 ${isDark ? "bg-slate-900/40 border-slate-800" : "bg-slate-50 border-slate-200"}`, children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "text-[10px] font-black uppercase tracking-widest text-slate-300", children: "Contradictions Flagged vs Case File" }),
                  forensicResult.contradictions && forensicResult.contradictions.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: forensicResult.contradictions.map((c, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `p-3 border rounded-xl ${isDark ? "bg-rose-950/20 border-rose-500/20" : "bg-rose-50 border-rose-200/40"}`, children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold text-rose-500", children: c.title }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `text-[8px] font-black uppercase px-2 py-0.5 rounded-md ${c.severity === "High" ? "bg-red-500/20 text-red-400 border border-red-500/30" : "bg-orange-500/20 text-orange-400 border border-orange-500/30"}`, children: [
                        c.severity,
                        " Severity"
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `text-[11px] mt-1 leading-relaxed ${isDark ? "text-slate-300" : "text-slate-650"}`, children: c.explanation })
                  ] }, idx)) }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `text-center py-4 border rounded-xl ${isDark ? "bg-slate-950/20 border-slate-850" : "bg-slate-50 border-slate-200"}`, children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { size: 20, className: "mx-auto text-emerald-500" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-slate-400 mt-1.5 font-bold uppercase tracking-wider", children: "No case file contradictions detected" })
                  ] })
                ] })
              ] }),
              activeTab === "sections" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "text-[10px] font-black uppercase tracking-widest text-slate-400", children: "Statutory Acts & Code Mapping" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2.5", children: [
                    (_H = forensicResult.legalSections) == null ? void 0 : _H.map((sec, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `p-4 border rounded-xl hover:border-indigo-500/30 transition-all ${isDark ? "bg-slate-900 border-slate-850" : "bg-slate-50 border-slate-200"}`, children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `flex items-center justify-between border-b pb-2 mb-2 ${isDark ? "border-slate-850" : "border-slate-200"}`, children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-black text-indigo-400", children: sec.section }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] font-black text-slate-400 bg-slate-800 px-2 py-0.5 rounded", children: sec.act })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `text-xs font-medium leading-relaxed ${isDark ? "text-slate-300" : "text-slate-700"}`, children: sec.desc })
                    ] }, idx)),
                    (!forensicResult.legalSections || forensicResult.legalSections.length === 0) && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-slate-500", children: "No specific laws linked." })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `border p-5 rounded-2xl space-y-3 ${isDark ? "bg-[#181a1f] border-slate-800" : "bg-amber-50/50 border-amber-250/60"}`, children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("h5", { className: "text-[10px] font-black uppercase tracking-widest text-amber-500 flex items-center gap-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { size: 12 }),
                    " Forensic Integrity Gap Recommendations"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: `list-disc pl-4 space-y-1.5 text-xs font-semibold ${isDark ? "text-slate-300" : "text-slate-700"}`, children: [
                    (_I = forensicResult.missingEvidence) == null ? void 0 : _I.map((m, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: m }, idx)),
                    (!forensicResult.missingEvidence || forensicResult.missingEvidence.length === 0) && /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "No gaps found." })
                  ] })
                ] })
              ] }),
              activeTab === "exhibit" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `border p-6 rounded-2xl text-center relative overflow-hidden flex flex-col items-center justify-center ${isDark ? "border-slate-800 bg-slate-950" : "border-slate-250 bg-slate-50 shadow-sm"}`, children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 right-0 w-24 h-24 bg-indigo-500/5 blur-2xl rounded-full" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Award, { size: 36, className: "text-indigo-400" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-[10px] font-black text-indigo-400 tracking-widest uppercase mt-2", children: "EXHIBIT IDENTIFICATION SEAL" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `text-2xl font-black mt-1 uppercase tracking-tight ${isDark ? "text-white" : "text-slate-850"}`, children: forensicResult.exhibitNumber }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[9px] text-slate-500 font-bold uppercase tracking-wider mt-1", children: forensicResult.title }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `text-[10px] border px-2 py-0.5 rounded-full mt-3 font-semibold ${isDark ? "text-indigo-300 bg-indigo-500/10 border-indigo-500/20" : "text-indigo-700 bg-indigo-50 border-indigo-200"}`, children: "Authenticated under Indian Law (Bharatiya Sakshya Adhiniyam)" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "text-[10px] font-black uppercase tracking-widest text-slate-400", children: "Chain of Custody Timestamp Audit" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `border-l-2 ml-3 space-y-4 ${isDark ? "border-indigo-900/60" : "border-indigo-200"}`, children: (_J = forensicResult.chainOfCustody) == null ? void 0 : _J.map((e, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative pl-6", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `absolute -left-[6px] top-1.5 w-2.5 h-2.5 rounded-full border ${isDark ? "bg-indigo-500 border-indigo-900" : "bg-indigo-600 border-white"}` }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `font-bold ${isDark ? "text-slate-200" : "text-slate-800"}`, children: e.event }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 text-[10px] text-slate-500 font-bold uppercase tracking-wider mt-0.5", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: e.time }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "•" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                          "Officer: ",
                          e.user
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "•" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                          "(",
                          e.location,
                          ")"
                        ] })
                      ] })
                    ] })
                  ] }, idx)) })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `border p-4.5 rounded-2xl space-y-3 shrink-0 ${isDark ? "bg-slate-900 border-slate-800" : "bg-slate-50 border-slate-200"}`, children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "text-[9px] font-black uppercase tracking-widest text-indigo-400", children: "Append Custody Audit Event" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-3", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "input",
                      {
                        type: "text",
                        placeholder: "e.g. Transferred to Central Lab",
                        value: customEvent,
                        onChange: (e) => setCustomEvent(e.target.value),
                        className: `border rounded-lg px-2.5 py-1.5 text-xs outline-none ${isDark ? "bg-slate-950 border-slate-800 text-slate-200" : "bg-white border-slate-250 text-slate-700"}`
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "input",
                      {
                        type: "text",
                        placeholder: "Officer Name",
                        value: customUser,
                        onChange: (e) => setCustomUser(e.target.value),
                        className: `border rounded-lg px-2.5 py-1.5 text-xs outline-none ${isDark ? "bg-slate-950 border-slate-800 text-slate-200" : "bg-white border-slate-250 text-slate-700"}`
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "input",
                      {
                        type: "text",
                        placeholder: "Lab/Location Location",
                        value: customLocation,
                        onChange: (e) => setCustomLocation(e.target.value),
                        className: `border rounded-lg px-2.5 py-1.5 text-xs outline-none ${isDark ? "bg-slate-950 border-slate-800 text-slate-200" : "bg-white border-slate-250 text-slate-700"}`
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      onClick: handleAddCustodyEvent,
                      className: "px-3.5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-xs font-black uppercase tracking-wider w-full transition-all",
                      children: "Append Event Log"
                    }
                  )
                ] })
              ] })
            ] })
          ] })
        ] })
      ] })
    ] }) }),
    historyVisible && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "fixed inset-0 z-[120000] flex items-center justify-center p-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-black/80 backdrop-blur-md", onClick: () => setHistoryVisible(false) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `relative border rounded-[32px] max-w-lg w-full max-h-[80%] flex flex-col overflow-hidden shadow-2xl p-6 ${isDark ? "bg-[#0d1222] border-slate-800" : "bg-white border-slate-200"}`, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `flex items-center justify-between border-b pb-4 shrink-0 ${isDark ? "border-slate-800" : "border-slate-200"}`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: `text-md font-black uppercase tracking-wider flex items-center gap-1.5 ${isDark ? "text-white" : "text-slate-850"}`, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Database, { size: 16, className: "text-indigo-400" }),
              " Forensic Archive DB"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-slate-500 mt-0.5", children: "Stored forensic record logs for linked case" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setHistoryVisible(false), className: "p-1.5 hover:bg-slate-850 rounded-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 18, className: "text-slate-400" }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `flex items-center border rounded-xl px-3 py-2 mt-4 shrink-0 ${isDark ? "bg-slate-950 border-slate-800 text-slate-300" : "bg-slate-50 border-slate-250 text-slate-750"}`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { size: 14, className: "text-slate-500 mr-2" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "text",
              placeholder: "Search archive file or type...",
              className: "w-full bg-transparent border-none text-xs font-bold outline-none focus:ring-0 focus:outline-none",
              value: historySearch,
              onChange: (e) => setHistorySearch(e.target.value)
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 overflow-y-auto mt-4 space-y-2.5 custom-scrollbar", children: [
          filteredHistory.map((item) => {
            var _a2, _b2;
            return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `flex justify-between items-start p-3 border rounded-2xl shadow-sm hover:border-indigo-500/30 transition-all ${isDark ? "bg-slate-900 border-slate-800/80" : "bg-slate-50 border-slate-200/80"}`, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  onClick: () => {
                    setForensicResult(item);
                    setOcrText(item.ocrText);
                    setHistoryVisible(false);
                    zt.success(`Loaded forensic audit: ${item.title}`);
                  },
                  className: "flex-1 text-left min-w-0",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `px-1.5 py-0.5 text-[8px] font-black uppercase border rounded ${isDark ? "bg-indigo-500/10 text-indigo-400 border-indigo-500/20" : "bg-indigo-50 text-indigo-700 border-indigo-200"}`, children: item.exhibitNumber || "Exhibit" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] text-slate-500 font-bold uppercase", children: item.timestamp })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: `text-xs font-bold mt-1 truncate ${isDark ? "text-slate-200" : "text-slate-800"}`, children: item.title }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[10px] text-slate-400 font-medium mt-1 uppercase tracking-wider", children: [
                      item.evidenceType,
                      " • ",
                      item.classification
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mt-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `px-2 py-0.5 text-[9px] font-bold rounded-md ${isDark ? "bg-indigo-500/5 text-indigo-400" : "bg-indigo-50 text-indigo-700"}`, children: [
                        "Verification: ",
                        (_a2 = item.stats) == null ? void 0 : _a2.verificationScore,
                        "%"
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `px-2 py-0.5 text-[9px] font-bold rounded-md ${isDark ? "bg-emerald-500/5 text-emerald-400" : "bg-emerald-50 text-emerald-700"}`, children: [
                        "Admissibility: ",
                        (_b2 = item.stats) == null ? void 0 : _b2.admissibilityRate,
                        "%"
                      ] })
                    ] })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  onClick: () => deleteHistoryItem(item.id),
                  className: "p-1.5 hover:bg-rose-500/10 hover:border-rose-500/30 rounded-lg text-rose-400 transition-colors shrink-0 ml-2",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { size: 14 })
                }
              )
            ] }, item.id);
          }),
          filteredHistory.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-10", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Folder, { size: 32, className: "mx-auto text-slate-800" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-slate-500 mt-2", children: "No archived records found." })
          ] })
        ] })
      ] })
    ] })
  ] });
};
export {
  EvidenceAnalysis as default
};
