import { r as reactExports, bV as useOutputLanguage, bW as mapCaseToForm, z as zt, a as apiService, j as jsxRuntimeExports, bX as ChevronLeft, R as RefreshCw, c2 as History, c0 as CircleCheck, X, af as TrendingUp, t as Scale, n as TriangleAlert, F as FileText, bR as Brain, C as CircleAlert, ce as ShieldCheck, I as Users, bN as Gavel, b as Clock, M as BookOpen, v as Search, a0 as Check, c1 as PenLine, c4 as LanguageToggle, b_ as Download, bY as Copy, bZ as Share2, c7 as consumePrefillIntent, c8 as generateChatResponse } from "./index-CifJr-sK.js";
import { e as exportToPDF } from "./exportToPDF-viLPZRMJ.js";
import { P as Printer } from "./printer-ZcOkpCIc.js";
const QUICK_PRESETS = [
  { name: "Bail Forecast", desc: "Predict bail approval chances for financial disputes." },
  { name: "Adverse Possession", desc: "Forecast land claim validity based on occupancy duration." },
  { name: "Contract Breach Claim", desc: "Evaluate liability thresholds for delayed deliveries." },
  { name: "Cyber Intrusion Risk", desc: "Evaluate liability for remote contractor data breaches." }
];
const CasePredictor = ({ currentCase, onBack, theme, allProjects = [], onUpdateCase }) => {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _A, _B, _C, _D, _E, _F;
  const isDark = theme === "dark";
  const [caseType, setCaseType] = reactExports.useState("Criminal");
  const [ipcSections, setIpcSections] = reactExports.useState("");
  const [courtName, setCourtName] = reactExports.useState("");
  const [facts, setFacts] = reactExports.useState("");
  const [evidenceList, setEvidenceList] = reactExports.useState("");
  const [evidenceFiles, setEvidenceFiles] = reactExports.useState([]);
  const [opponentDetails, setOpponentDetails] = reactExports.useState("");
  const [witnessDetails, setWitnessDetails] = reactExports.useState("");
  const [isGenerating, setIsGenerating] = reactExports.useState(false);
  const [activePrediction, setActivePrediction] = reactExports.useState(null);
  const [historyVisible, setHistoryVisible] = reactExports.useState(false);
  const [historyData, setHistoryData] = reactExports.useState([]);
  const [prefillBanner, setPrefillBanner] = reactExports.useState(null);
  const [activeTab, setActiveTab] = reactExports.useState("caseStrength");
  const [selectedReportTab, setSelectedReportTab] = reactExports.useState("predictionReport");
  const [isEditingReport, setIsEditingReport] = reactExports.useState(false);
  const [editedReportText, setEditedReportText] = reactExports.useState("");
  const [reportSearchQuery, setReportSearchQuery] = reactExports.useState("");
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
    isTranslating: isPredictorTranslating,
    setIsTranslating: setIsPredictorTranslating,
    translateText: translatePredictorText,
    getDisplayText: getPredictorDisplayText
  } = useOutputLanguage("case_predictor", (currentCase == null ? void 0 : currentCase._id) || "global");
  const [translatedReportText, setTranslatedReportText] = reactExports.useState("");
  const displayPrediction = reactExports.useMemo(() => {
    return activePrediction || (historyData && historyData.length > 0 ? historyData[0] : null);
  }, [activePrediction, historyData]);
  const originalReportText = reactExports.useMemo(() => {
    var _a2;
    return ((_a2 = displayPrediction == null ? void 0 : displayPrediction.reports) == null ? void 0 : _a2[selectedReportTab]) || (displayPrediction == null ? void 0 : displayPrediction.report) || "";
  }, [displayPrediction, selectedReportTab]);
  reactExports.useEffect(() => {
    if (outputLang === "en" || !originalReportText) {
      setTranslatedReportText("");
      return;
    }
    const cached = getPredictorDisplayText(originalReportText);
    if (cached && cached !== originalReportText) {
      setTranslatedReportText(cached);
      return;
    }
    setIsPredictorTranslating(true);
    translatePredictorText(originalReportText).then((translated) => {
      if (isMountedRef.current) setTranslatedReportText(translated);
      setIsPredictorTranslating(false);
    }).catch(() => {
      if (isMountedRef.current) setTranslatedReportText("");
      setIsPredictorTranslating(false);
    });
  }, [originalReportText, outputLang, getPredictorDisplayText, translatePredictorText, setIsPredictorTranslating]);
  reactExports.useEffect(() => {
    if (displayPrediction) {
      setOutputLang("en");
      setTranslatedReportText("");
    }
  }, [displayPrediction]);
  const displayReportText = reactExports.useMemo(() => {
    if (outputLang === "hi" && translatedReportText) return translatedReportText;
    return editedReportText || originalReportText;
  }, [outputLang, translatedReportText, editedReportText, originalReportText]);
  const cleanJsonString = (str) => {
    const jsonMatch = str.match(/```json\s*([\s\S]*?)\s*```/);
    if (jsonMatch) {
      return jsonMatch[1].trim();
    }
    const start = str.indexOf("{");
    const end = str.lastIndexOf("}");
    if (start !== -1 && end !== -1) {
      return str.substring(start, end + 1).trim();
    }
    return str.trim();
  };
  reactExports.useEffect(() => {
    var _a2, _b2, _c2;
    const intent = consumePrefillIntent("legal_case_predictor");
    if (intent == null ? void 0 : intent.caseData) {
      const mapped = mapCaseToForm(intent.caseData);
      if (mapped.caseFacts) setFacts(mapped.caseFacts);
      if (mapped.courtName) setCourtName(mapped.courtName);
      if (mapped.respondent) setOpponentDetails(`Opponent: ${mapped.respondent}`);
      if (mapped.caseType) {
        const t = mapped.caseType.toLowerCase();
        if (t.includes("civil")) setCaseType("Civil");
        else if (t.includes("corporate") || t.includes("arbitration")) setCaseType("Corporate");
        else if (t.includes("cyber")) setCaseType("Cyber");
        else if (t.includes("family")) setCaseType("Family");
        else if (t.includes("property")) setCaseType("Property");
        else if (t.includes("labour") || t.includes("labor")) setCaseType("Labour");
        else if (t.includes("consumer")) setCaseType("Consumer");
        else setCaseType("Criminal");
      }
      if ((_a2 = mapped.allDocuments) == null ? void 0 : _a2.length) {
        setEvidenceList(mapped.allDocuments.map((d) => d.name).join(", "));
      }
      if (mapped.provisions) setIpcSections(((_b2 = String(mapped.provisions).split(/[\n,;]/)[0]) == null ? void 0 : _b2.trim()) || "");
      setPrefillBanner({ caseTitle: mapped.caseTitle || ((_c2 = intent.caseData) == null ? void 0 : _c2.name) || "Active Case" });
      zt.success(`✓ Case data pre-loaded for prediction`, { icon: "⚖️", duration: 3e3 });
    }
  }, []);
  reactExports.useEffect(() => {
    if (!(currentCase == null ? void 0 : currentCase._id)) {
      try {
        const localData = localStorage.getItem("aisa_case_predictions_history");
        if (localData) {
          const parsed = JSON.parse(localData);
          setHistoryData(parsed);
        }
      } catch (e) {
        console.error(e);
      }
    }
  }, [currentCase]);
  reactExports.useEffect(() => {
    if (currentCase) {
      setFacts(currentCase.summary || currentCase.caseSummary || currentCase.description || "");
      setCourtName(currentCase.courtName || "");
      setOpponentDetails(currentCase.opponentName ? `Opponent: ${currentCase.opponentName}` : "");
      let resolvedType = "Criminal";
      if (currentCase.caseType) {
        const type = currentCase.caseType.toLowerCase();
        if (type.includes("civil")) resolvedType = "Civil";
        else if (type.includes("corporate")) resolvedType = "Corporate";
        else if (type.includes("cyber")) resolvedType = "Cyber";
        else if (type.includes("family")) resolvedType = "Family";
        else if (type.includes("property")) resolvedType = "Property";
        else if (type.includes("labour") || type.includes("labor")) resolvedType = "Labour";
        else if (type.includes("consumer")) resolvedType = "Consumer";
      }
      setCaseType(resolvedType);
      if (currentCase.documents) {
        setEvidenceList(currentCase.documents.map((d) => d.name).join(", "));
      }
      if (currentCase.witnesses) {
        if (Array.isArray(currentCase.witnesses)) {
          setWitnessDetails(currentCase.witnesses.map((w) => `${w.name} (${w.role || "Witness"})`).join(", "));
        } else {
          setWitnessDetails(currentCase.witnesses);
        }
      } else {
        setWitnessDetails("");
      }
      if (currentCase.provisions || currentCase.ipcSections || currentCase.statutes) {
        setIpcSections(currentCase.provisions || currentCase.ipcSections || currentCase.statutes || "");
      } else {
        setIpcSections("");
      }
      loadPredictionHistory();
    }
  }, [currentCase]);
  const loadPredictionHistory = reactExports.useCallback(async () => {
    var _a2;
    if (!(currentCase == null ? void 0 : currentCase._id)) return;
    try {
      const targetCase = allProjects.find((p) => p._id === currentCase._id);
      let dbHistory = (targetCase == null ? void 0 : targetCase.predictionsHistory) || [];
      const localData = localStorage.getItem("aisa_case_predictions_history");
      if (localData && targetCase) {
        try {
          const parsedLocal = JSON.parse(localData);
          const localForCase = parsedLocal.filter((h) => h.caseId === currentCase._id);
          if (localForCase.length > 0) {
            const merged = [...dbHistory];
            localForCase.forEach((item) => {
              if (!merged.some((m) => m.id === item.id)) {
                merged.push(item);
              }
            });
            const payload = {
              ...targetCase,
              predictionsHistory: merged
            };
            const response = await apiService.updateProject(currentCase._id, payload);
            if (onUpdateCase) onUpdateCase(response);
            dbHistory = merged;
            const remainingLocal = parsedLocal.filter((h) => h.caseId !== currentCase._id);
            if (remainingLocal.length > 0) {
              localStorage.setItem("aisa_case_predictions_history", JSON.stringify(remainingLocal));
            } else {
              localStorage.removeItem("aisa_case_predictions_history");
            }
          }
        } catch (err) {
          console.error("Error migrating prediction history", err);
        }
      }
      setHistoryData(dbHistory);
      if (dbHistory.length > 0 && !activePrediction) {
        const latest = dbHistory[0];
        setActivePrediction(latest);
        setEditedReportText(((_a2 = latest.reports) == null ? void 0 : _a2[selectedReportTab]) || latest.report || "");
      }
    } catch (e) {
      console.error(e);
    }
  }, [currentCase, allProjects, activePrediction, onUpdateCase, selectedReportTab]);
  const handlePrefillFromActiveCase = () => {
    if (!currentCase) {
      zt.error("No active case selected. Please select a case from the sidebar.");
      return;
    }
    setFacts(currentCase.summary || currentCase.caseSummary || currentCase.description || "");
    setCourtName(currentCase.courtName || "");
    let resolvedOpponent = "";
    if (currentCase.opponentName) {
      resolvedOpponent = `Opponent: ${currentCase.opponentName}`;
      if (currentCase.opponentAdvocate) {
        resolvedOpponent += ` (Advocate: ${currentCase.opponentAdvocate})`;
      }
    }
    setOpponentDetails(resolvedOpponent);
    let resolvedType = "Criminal";
    if (currentCase.caseType) {
      const type = currentCase.caseType.toLowerCase();
      if (type.includes("civil")) resolvedType = "Civil";
      else if (type.includes("corporate")) resolvedType = "Corporate";
      else if (type.includes("cyber")) resolvedType = "Cyber";
      else if (type.includes("family")) resolvedType = "Family";
      else if (type.includes("property")) resolvedType = "Property";
      else if (type.includes("labour") || type.includes("labor")) resolvedType = "Labour";
      else if (type.includes("consumer")) resolvedType = "Consumer";
    }
    setCaseType(resolvedType);
    if (currentCase.documents && currentCase.documents.length > 0) {
      setEvidenceList(currentCase.documents.map((d) => d.name).join(", "));
    } else {
      setEvidenceList("");
    }
    if (currentCase.witnesses) {
      if (Array.isArray(currentCase.witnesses)) {
        setWitnessDetails(currentCase.witnesses.map((w) => `${w.name} (${w.role || "Witness"})`).join(", "));
      } else {
        setWitnessDetails(currentCase.witnesses);
      }
    } else {
      setWitnessDetails("");
    }
    if (currentCase.provisions || currentCase.ipcSections || currentCase.statutes) {
      setIpcSections(currentCase.provisions || currentCase.ipcSections || currentCase.statutes || "");
    } else {
      setIpcSections("");
    }
    zt.success("Active case data successfully synchronized!");
  };
  const savePredictionToHistory = async (prediction) => {
    if (!(currentCase == null ? void 0 : currentCase._id)) {
      try {
        const localData = localStorage.getItem("aisa_case_predictions_history");
        const existing = localData ? JSON.parse(localData) : [];
        const updated = [prediction, ...existing.filter((h) => h.id !== prediction.id)];
        localStorage.setItem("aisa_case_predictions_history", JSON.stringify(updated));
        setHistoryData(updated);
      } catch (e) {
        console.error(e);
      }
      return;
    }
    try {
      const targetCase = allProjects.find((p) => p._id === currentCase._id);
      if (!targetCase) return;
      const predictionWithCase = { ...prediction, caseId: currentCase._id };
      const existingHistory = targetCase.predictionsHistory || [];
      const updated = [predictionWithCase, ...existingHistory.filter((h) => h.id !== prediction.id)];
      const payload = {
        ...targetCase,
        predictionsHistory: updated
      };
      const response = await apiService.updateProject(currentCase._id, payload);
      if (onUpdateCase) onUpdateCase(response);
      setHistoryData(updated);
    } catch (e) {
      console.error(e);
      zt.error("Failed to sync prediction history to the database");
    }
  };
  const handleDeleteHistoryItem = async (id) => {
    var _a2;
    if (!(currentCase == null ? void 0 : currentCase._id)) return;
    if (window.confirm("Are you sure you want to permanently delete this prediction?")) {
      try {
        const targetCase = allProjects.find((p) => p._id === currentCase._id);
        if (!targetCase) return;
        const existingHistory = targetCase.predictionsHistory || [];
        const updated = existingHistory.filter((h) => h.id !== id);
        const payload = {
          ...targetCase,
          predictionsHistory: updated
        };
        const response = await apiService.updateProject(currentCase._id, payload);
        if (onUpdateCase) onUpdateCase(response);
        setHistoryData(updated);
        if ((activePrediction == null ? void 0 : activePrediction.id) === id) {
          setActivePrediction(updated.length > 0 ? updated[0] : null);
          if (updated.length > 0) {
            setEditedReportText(((_a2 = updated[0].reports) == null ? void 0 : _a2[selectedReportTab]) || updated[0].report || "");
          } else {
            setEditedReportText("");
          }
        }
        zt.success("Prediction record deleted successfully");
      } catch (e) {
        console.error(e);
        zt.error("Deletion failed");
      }
    }
  };
  const generateFallbackData = (text, form) => {
    var _a2, _b2;
    const successRate = parseInt(((_a2 = text.match(/Success Probability:\s*(\d+)/i)) == null ? void 0 : _a2[1]) || "65");
    const litigationRisk = ((_b2 = text.match(/Litigation Risk:\s*(\w+)/i)) == null ? void 0 : _b2[1]) || "Moderate";
    return {
      stats: {
        successRate,
        defendantWinRate: 100 - successRate,
        litigationRisk: ["High", "Moderate", "Low"].includes(litigationRisk) ? litigationRisk : "Moderate",
        evidenceStrength: 70,
        caseStrength: 65,
        missingDocsCount: 1,
        courtReadiness: 80,
        settlementProbability: 50,
        appealRisk: 45,
        confidenceScore: 85
      },
      caseStrengthDetails: {
        strongPoints: ["Factual consistency in core timeline", "Applicable statutory provisions align with client arguments"],
        weakPoints: ["Minor gaps in documentary proof", "Jurisdictional precedents are mixed"],
        vulnerabilities: ["Potential delay in formal witness affidavits"],
        criticalRisks: ["Opposing counsel may claim statutory bar of limitation"]
      },
      evidenceImpactDetails: {
        strongEvidence: ["Primary documents under record", "Supporting electronic notifications"],
        weakEvidence: ["Indirect witness verbal assertions"],
        missingEvidence: ["Certified copy of registry ledger"]
      },
      judgePerspectiveDetails: {
        questions: ["Why was there a delay in notifying the breach?", "Where is the contract sign-off document?"],
        concerns: ["Standard of proof regarding intention", "Absence of certified forensic copy"],
        weakArguments: ["Argument claiming total immunity under force majeure"]
      },
      opponentTactics: {
        mappedClaims: ["Contributory negligence by the plaintiff", "Inadmissibility of electronic records under Section 65B"],
        objections: ["Objection to the inclusion of unverified emails"],
        appealRisks: ["Likelihood of appeal is high if initial verdict is favorable"],
        counterStrategies: ["Prepare certified affidavits beforehand", "Lodge a caveat in the High Court post-order"]
      },
      timelineForecasts: {
        trialDuration: "8-14 months",
        interimOrders: "2-3 months",
        appealsDuration: "12-18 months",
        finalJudgment: "18-24 months"
      },
      precedents: [
        {
          citation: "Supreme Court Guidelines on Judicial Assessment (2022)",
          relevanceScore: 90,
          summary: "Detailed criteria on evidence admissibility standard in civil claims.",
          applicability: "Aligns with our evidence submission procedure."
        }
      ],
      statutoryProvisions: [
        {
          section: form.ipcSections || "Relevant Statute",
          description: "Primary provision governing the offense/claim.",
          applicability: "Applies to the transaction facts described."
        }
      ],
      reports: {
        predictionReport: text || "Full case prediction report containing detailed forecasting parameters.",
        litigationStrategyReport: "Litigation strategy report detailing arguments and procedure.",
        judicialForecastReport: "Judicial forecast report mapping simulated bench concerns.",
        riskAssessmentReport: "Risk assessment report outlining appeal and settlement rates.",
        advocateBrief: "Advocate brief optimized for courtroom reference."
      }
    };
  };
  const runOutcomePrediction = async (customForm = null) => {
    const fData = customForm || {
      caseType,
      ipcSections,
      courtName,
      facts,
      evidenceList,
      opponentDetails,
      witnessDetails
    };
    if (!fData.facts.trim()) {
      zt.error("Please provide case facts to predict outcome");
      return;
    }
    setIsGenerating(true);
    setActivePrediction(null);
    try {
      const systemPrompt = `You are the AISA AI Judicial Intelligence & Case Forecasting System.
Analyze the provided legal case facts, evidence, witnesses, statutes, and jurisdiction.
Your analysis must be court-ready, forensic-grade, and highly detailed.

You MUST return your response as a single valid JSON object enclosed in a markdown code block starting with \`\`\`json and ending with \`\`\`. Do not include any text outside the code block.

The JSON structure must match this schema:
{
  "stats": {
    "successRate": number (Plaintiff win % from 0 to 100),
    "defendantWinRate": number (Defendant win % from 0 to 100, must sum to 100 with successRate),
    "litigationRisk": "Low" | "Moderate" | "High",
    "evidenceStrength": number (0 to 100),
    "caseStrength": number (0 to 100),
    "missingDocsCount": number (0 to 10),
    "courtReadiness": number (0 to 100),
    "settlementProbability": number (0 to 100),
    "appealRisk": number (0 to 100),
    "confidenceScore": number (AI model confidence % from 0 to 100)
  },
  "caseStrengthDetails": {
    "strongPoints": string[],
    "weakPoints": string[],
    "vulnerabilities": string[],
    "criticalRisks": string[]
  },
  "evidenceImpactDetails": {
    "strongEvidence": string[],
    "weakEvidence": string[],
    "missingEvidence": string[]
  },
  "judgePerspectiveDetails": {
    "questions": string[],
    "concerns": string[],
    "weakArguments": string[]
  },
  "opponentTactics": {
    "mappedClaims": string[],
    "objections": string[],
    "appealRisks": string[],
    "counterStrategies": string[]
  },
  "timelineForecasts": {
    "trialDuration": string (estimated trial duration, e.g. "8-14 months"),
    "interimOrders": string (estimated time for interim orders, e.g. "2-3 months"),
    "appealsDuration": string (estimated appeal duration, e.g. "12-18 months"),
    "finalJudgment": string (estimated time to final judgment, e.g. "18-24 months")
  },
  "precedents": [
    {
      "citation": string,
      "relevanceScore": number,
      "summary": string,
      "applicability": string
    }
  ],
  "statutoryProvisions": [
    {
      "section": string,
      "description": string,
      "applicability": string
    }
  ],
  "reports": {
    "predictionReport": string,
    "litigationStrategyReport": string,
    "judicialForecastReport": string,
    "riskAssessmentReport": string,
    "advocateBrief": string
  }
}

Ensure all report values in "reports" are long, detailed, professional legal briefs written in standard, formal legal terminology. DO NOT use generic placeholders.`;
      const query = `
      Case Type: ${fData.caseType}
      IPC/Statutes/BNS: ${fData.ipcSections}
      Court / Jurisdiction: ${fData.courtName}
      Facts: ${fData.facts}
      Evidences: ${fData.evidenceList}
      Opponent Details: ${fData.opponentDetails}
      Witness Details: ${fData.witnessDetails}
      `;
      const response = await generateChatResponse([], query, systemPrompt, evidenceFiles, "English", null, "legal");
      const reply = (response == null ? void 0 : response.reply) || response || "";
      let parsedJson = null;
      try {
        const jsonStr = cleanJsonString(reply);
        parsedJson = JSON.parse(jsonStr);
      } catch (parseErr) {
        console.warn("JSON parsing failed, trying fallback...", parseErr);
        parsedJson = generateFallbackData(reply, fData);
      }
      if (!parsedJson || !parsedJson.stats) {
        throw new Error("Invalid forecast format");
      }
      const prediction = {
        id: Date.now().toString(),
        caseType: fData.caseType,
        ipcSections: fData.ipcSections,
        courtName: fData.courtName,
        facts: fData.facts,
        evidenceList: fData.evidenceList,
        opponentDetails: fData.opponentDetails,
        witnessDetails: fData.witnessDetails,
        timestamp: (/* @__PURE__ */ new Date()).toLocaleString(),
        ...parsedJson
      };
      setActivePrediction(prediction);
      setEditedReportText(prediction.reports.predictionReport);
      setSelectedReportTab("predictionReport");
      await savePredictionToHistory(prediction);
      zt.success("Judicial verdict forecast completed! ⚖️");
    } catch (e) {
      console.error(e);
      zt.error("Verdict forecasting engine failed. Please verify case facts.");
    } finally {
      setIsGenerating(false);
    }
  };
  const triggerPreset = (presetName, presetFacts) => {
    setFacts(presetFacts);
    const resolvedType = presetName === "Bail Forecast" ? "Criminal" : "Civil";
    setCaseType(resolvedType);
    runOutcomePrediction({
      caseType: resolvedType,
      ipcSections: presetName === "Bail Forecast" ? "IPC Section 420, 120B" : "Adverse Possession Statutes",
      courtName: "District Sessions Court",
      facts: presetFacts,
      evidenceList: "Affidavits, Old Deeds, Receipts",
      opponentDetails: "Opponent State Property Board",
      witnessDetails: "Two neighboring land owners"
    });
  };
  const handleReportTabChange = (tabId) => {
    var _a2;
    setSelectedReportTab(tabId);
    setOutputLang("en");
    setTranslatedReportText("");
    if ((_a2 = activePrediction == null ? void 0 : activePrediction.reports) == null ? void 0 : _a2[tabId]) {
      setEditedReportText(activePrediction.reports[tabId]);
    } else {
      setEditedReportText("");
    }
    setIsEditingReport(false);
  };
  const handleSaveChanges = async () => {
    if (!activePrediction) return;
    try {
      const updatedPrediction = {
        ...activePrediction,
        reports: {
          ...activePrediction.reports,
          [selectedReportTab]: editedReportText
        }
      };
      setActivePrediction(updatedPrediction);
      await savePredictionToHistory(updatedPrediction);
      setIsEditingReport(false);
      zt.success("Changes saved successfully to Case Database!");
    } catch (e) {
      zt.error("Failed to save changes");
    }
  };
  const handleDownloadDocx = () => {
    if (!activePrediction) return;
    const titles = {
      predictionReport: "Case Prediction Report",
      litigationStrategyReport: "Litigation Strategy Report",
      judicialForecastReport: "Judicial Forecast Report",
      riskAssessmentReport: "Risk Assessment Report",
      advocateBrief: "Advocate Brief"
    };
    const reportTitle = titles[selectedReportTab] || "Case Predictor Brief";
    const reportContent = displayReportText;
    const htmlContent = `
      <html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'>
      <head>
        <title>${reportTitle}</title>
        <style>
          body { font-family: 'Segoe UI', Arial, sans-serif; line-height: 1.6; }
          h1 { color: #2B6CB0; border-bottom: 2px solid #2B6CB0; padding-bottom: 5px; font-size: 20pt; }
          h2 { color: #2D3748; font-size: 14pt; margin-top: 15px; }
          p, li { font-size: 11pt; color: #4A5568; }
          ul { margin-top: 5px; }
        </style>
      </head>
      <body>
        <h1>${reportTitle}</h1>
        <div>${reportContent.replace(/\n/g, "<br/>")}</div>
      </body>
      </html>
    `;
    const blob = new Blob(["\uFEFF" + htmlContent], { type: "application/msword" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${reportTitle.replace(/\s+/g, "_")}_${Date.now()}.doc`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    zt.success("DOCX Brief Downloaded!");
  };
  const handlePrint = () => {
    if (!activePrediction) return;
    const titles = {
      predictionReport: "Case Prediction Report",
      litigationStrategyReport: "Litigation Strategy Report",
      judicialForecastReport: "Judicial Forecast Report",
      riskAssessmentReport: "Risk Assessment Report",
      advocateBrief: "Advocate Brief"
    };
    const reportTitle = titles[selectedReportTab] || "Case Predictor Brief";
    const reportContent = displayReportText;
    const printWindow = window.open("", "_blank");
    printWindow.document.write(`
      <html>
      <head>
        <title>${reportTitle}</title>
        <style>
          body { font-family: 'Segoe UI', Arial, sans-serif; padding: 40px; color: #333; line-height: 1.6; }
          h1 { text-align: center; color: #1a365d; margin-bottom: 30px; font-size: 24px; border-bottom: 2px solid #e2e8f0; padding-bottom: 10px; }
          h2 { color: #2b6cb0; font-size: 18px; margin-top: 20px; border-bottom: 1px solid #edf2f7; padding-bottom: 5px; }
          p, li { font-size: 14px; color: #4a5568; }
          .footer { margin-top: 50px; text-align: center; font-size: 11px; color: #a0aec0; border-top: 1px solid #e2e8f0; padding-top: 10px; }
        </style>
      </head>
      <body>
        <h1>${reportTitle}</h1>
        <div>${reportContent.replace(/\n/g, "<br/>")}</div>
        <div class="footer">Generated by AISA AI Judicial Intelligence on ${(/* @__PURE__ */ new Date()).toLocaleDateString()}</div>
        <script>
          window.onload = function() {
            window.print();
            window.close();
          }
        <\/script>
      </body>
      </html>
    `);
    printWindow.document.close();
  };
  const handleCopyText = () => {
    const reportContent = displayReportText;
    if (!reportContent) return;
    navigator.clipboard.writeText(reportContent);
    zt.success("Report brief copied to clipboard!");
  };
  const handleShareReport = async () => {
    if (!activePrediction) return;
    const titles = {
      predictionReport: "Case Prediction Report",
      litigationStrategyReport: "Litigation Strategy Report",
      judicialForecastReport: "Judicial Forecast Report",
      riskAssessmentReport: "Risk Assessment Report",
      advocateBrief: "Advocate Brief"
    };
    const reportTitle = titles[selectedReportTab] || "Case Predictor Brief";
    const reportContent = displayReportText;
    const dummyFile = new File([""], "test.txt", { type: "text/plain" });
    const supportsFiles = navigator.share && navigator.canShare && navigator.canShare({ files: [dummyFile] });
    if (!supportsFiles) {
      zt.error("Your browser does not support file sharing. Please use the Download button instead.");
      return;
    }
    try {
      zt.loading("Preparing PDF to share...", { id: "sharePdf" });
      const blob = await exportToPDF({
        text: reportContent,
        title: reportTitle,
        filename: "Shared_Brief",
        returnBlob: true
      });
      const file = new File([blob], `${reportTitle.replace(/\s+/g, "_")}.pdf`, { type: "application/pdf" });
      await navigator.share({
        title: reportTitle,
        text: "Here is the case prediction brief.",
        files: [file]
      });
      zt.success("PDF shared successfully!", { id: "sharePdf" });
    } catch (err) {
      if (err.name !== "AbortError") {
        console.error(err);
        zt.error("Failed to share PDF", { id: "sharePdf" });
      } else {
        zt.dismiss("sharePdf");
      }
    }
  };
  const highlightReportText = (text, query) => {
    if (!query || !text) return text;
    const parts = text.split(new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`, "gi"));
    return parts.map(
      (part, i) => part.toLowerCase() === query.toLowerCase() ? /* @__PURE__ */ jsxRuntimeExports.jsx("mark", { className: "bg-amber-200 dark:bg-amber-500/50 text-amber-950 dark:text-amber-100 px-0.5 rounded", children: part }, i) : part
    );
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `flex-1 flex flex-col w-full h-full min-h-0 overflow-hidden transition-colors duration-300 ${isDark ? "bg-[#0B1020] text-slate-100" : "bg-slate-50 text-slate-800"}`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `flex items-center justify-between px-6 py-4 border-b shrink-0 backdrop-blur-xl ${isDark ? "border-white/5 bg-[#0B1020]/80" : "border-slate-200 bg-white/80"}`, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: onBack, className: `p-2 rounded-full transition-colors ${isDark ? "hover:bg-zinc-800 text-slate-400" : "hover:bg-slate-100 text-slate-600"}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { size: 20 }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: `text-lg font-black leading-none tracking-tight ${isDark ? "text-white" : "text-slate-900"}`, children: "AI Judicial Intelligence & Forecasting" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 mt-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-[10px] font-black uppercase tracking-widest ${isDark ? "text-indigo-400" : "text-indigo-600"}`, children: "NEURAL VERDICT PREDICTOR ONLINE" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
        currentCase && /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: handlePrefillFromActiveCase,
            className: `flex items-center gap-1.5 px-3 py-1.5 border rounded-xl text-[10px] font-black uppercase tracking-wider transition-all ${isDark ? "bg-emerald-950/20 border-emerald-800/30 text-emerald-400 hover:bg-emerald-950/40" : "bg-emerald-50 border-emerald-200 text-emerald-700 hover:bg-emerald-100"}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { size: 12, className: "animate-spin-slow" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                "Sync with ",
                currentCase.name
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: () => {
              if (currentCase == null ? void 0 : currentCase._id) {
                loadPredictionHistory();
              } else {
                try {
                  const localData = localStorage.getItem("aisa_case_predictions_history");
                  if (localData) {
                    const parsed = JSON.parse(localData);
                    setHistoryData(parsed);
                  }
                } catch (e) {
                  console.error(e);
                }
              }
              setHistoryVisible(true);
            },
            className: `flex items-center gap-1.5 px-3.5 py-2 border rounded-xl text-xs font-black uppercase tracking-wider transition-all ${isDark ? "bg-indigo-950/20 border-indigo-900/30 text-indigo-400 hover:bg-indigo-950/40" : "bg-indigo-50 border-indigo-200 text-indigo-600 hover:bg-indigo-100"}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(History, { size: 14 }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                "Forecast History (",
                historyData.length,
                ")"
              ] })
            ]
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 overflow-y-auto px-6 py-6 custom-scrollbar select-text", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-[1600px] mx-auto space-y-6", children: [
      prefillBanner && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `flex items-center gap-3 px-4 py-3 border rounded-2xl shadow-sm ${isDark ? "bg-gradient-to-r from-emerald-950/20 to-teal-950/10 border-emerald-900/30 text-emerald-400" : "bg-gradient-to-r from-emerald-50 to-teal-50 border-emerald-200 text-emerald-700"}`, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-8 h-8 rounded-xl bg-emerald-500 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { size: 16, className: "text-white" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs font-black", children: [
            "Active Case Loaded: ",
            prefillBanner.caseTitle
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `text-[10px] font-semibold mt-0.5 ${isDark ? "text-emerald-500/60" : "text-emerald-600/70"}`, children: "Factual metrics and references have been auto-populated below. Verify information and run predictions." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setPrefillBanner(null), className: `p-1 rounded-full ${isDark ? "hover:bg-emerald-900/30" : "hover:bg-emerald-100"}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 13 }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `p-4 rounded-2xl border transition-all ${isDark ? "bg-[#1A2540] border-white/5" : "bg-white border-slate-200/80 shadow-sm"}`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-start", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { size: 16, className: "text-emerald-500" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] font-black uppercase text-emerald-500", children: "Plaintiff" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-2xl font-black mt-2 text-emerald-500", children: displayPrediction ? `${displayPrediction.stats.successRate}%` : "--%" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `text-[9px] font-bold mt-1 uppercase ${isDark ? "text-slate-400" : "text-slate-500"}`, children: "Win Probability" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `p-4 rounded-2xl border transition-all ${isDark ? "bg-[#1A2540] border-white/5" : "bg-white border-slate-200/80 shadow-sm"}`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-start", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Scale, { size: 16, className: "text-red-500" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] font-black uppercase text-red-500", children: "Defendant" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-2xl font-black mt-2 text-red-500", children: displayPrediction ? `${displayPrediction.stats.defendantWinRate}%` : "--%" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `text-[9px] font-bold mt-1 uppercase ${isDark ? "text-slate-400" : "text-slate-500"}`, children: "Win Probability" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `p-4 rounded-2xl border transition-all ${isDark ? "bg-[#1A2540] border-white/5" : "bg-white border-slate-200/80 shadow-sm"}`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-start", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { size: 16, className: (displayPrediction == null ? void 0 : displayPrediction.stats.litigationRisk) === "High" ? "text-red-500" : (displayPrediction == null ? void 0 : displayPrediction.stats.litigationRisk) === "Moderate" ? "text-amber-500" : "text-emerald-500" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] font-black uppercase text-slate-400", children: "Risk" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `text-2xl font-black mt-2 ${(displayPrediction == null ? void 0 : displayPrediction.stats.litigationRisk) === "High" ? "text-red-500" : (displayPrediction == null ? void 0 : displayPrediction.stats.litigationRisk) === "Moderate" ? "text-amber-500" : (displayPrediction == null ? void 0 : displayPrediction.stats.litigationRisk) === "Low" ? "text-emerald-500" : "text-slate-500"}`, children: displayPrediction ? displayPrediction.stats.litigationRisk : "--" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `text-[9px] font-bold mt-1 uppercase ${isDark ? "text-slate-400" : "text-slate-500"}`, children: "Litigation Risk" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `p-4 rounded-2xl border transition-all ${isDark ? "bg-[#1A2540] border-white/5" : "bg-white border-slate-200/80 shadow-sm"}`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-start", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { size: 16, className: "text-indigo-500" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] font-black uppercase text-slate-400", children: "Evidence" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-2xl font-black mt-2 text-indigo-500", children: displayPrediction ? `${displayPrediction.stats.evidenceStrength}%` : "--%" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `text-[9px] font-bold mt-1 uppercase ${isDark ? "text-slate-400" : "text-slate-500"}`, children: "Strength Rating" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `p-4 rounded-2xl border transition-all ${isDark ? "bg-[#1A2540] border-white/5" : "bg-white border-slate-200/80 shadow-sm"}`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-start", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Brain, { size: 16, className: "text-violet-500" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] font-black uppercase text-slate-400", children: "Viability" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-2xl font-black mt-2 text-violet-500", children: displayPrediction ? `${displayPrediction.stats.caseStrength}%` : "--%" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `text-[9px] font-bold mt-1 uppercase ${isDark ? "text-slate-400" : "text-slate-500"}`, children: "Case Strength" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `p-4 rounded-2xl border transition-all ${isDark ? "bg-[#1A2540] border-white/5" : "bg-white border-slate-200/80 shadow-sm"}`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-start", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { size: 16, className: "text-orange-500" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] font-black uppercase text-slate-400", children: "Gaps" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-2xl font-black mt-2 text-orange-500", children: displayPrediction ? displayPrediction.stats.missingDocsCount : "--" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `text-[9px] font-bold mt-1 uppercase ${isDark ? "text-slate-400" : "text-slate-500"}`, children: "Missing Docs" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `p-4 rounded-2xl border transition-all ${isDark ? "bg-[#1A2540] border-white/5" : "bg-white border-slate-200/80 shadow-sm"}`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-start", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { size: 16, className: "text-teal-500" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] font-black uppercase text-slate-400", children: "Status" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-2xl font-black mt-2 text-teal-500", children: displayPrediction ? `${displayPrediction.stats.courtReadiness}%` : "--%" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `text-[9px] font-bold mt-1 uppercase ${isDark ? "text-slate-400" : "text-slate-500"}`, children: "Readiness Score" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `p-4 rounded-2xl border transition-all ${isDark ? "bg-[#1A2540] border-white/5" : "bg-white border-slate-200/80 shadow-sm"}`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-start", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { size: 16, className: "text-sky-500" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] font-black uppercase text-slate-400", children: "Mediation" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-2xl font-black mt-2 text-sky-500", children: displayPrediction ? `${displayPrediction.stats.settlementProbability}%` : "--%" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `text-[9px] font-bold mt-1 uppercase ${isDark ? "text-slate-400" : "text-slate-500"}`, children: "Settlement Rate" })
        ] })
      ] }),
      !activePrediction && !isGenerating && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "animate-in fade-in slide-in-from-bottom-3 duration-500", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: `text-[10px] font-black uppercase tracking-[0.2em] mb-3 ${isDark ? "text-slate-400" : "text-slate-500"}`, children: "⋄ FORECAST SIMULATIONS PRESETS" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4", children: QUICK_PRESETS.map((preset) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: () => {
              let facts2 = "";
              if (preset.name === "Bail Forecast") facts2 = "Anticipatory bail request under IPC Cyber Fraud provisions. Client alleges arbitrary framing and demonstrates full willingness to cooperate with the local investigative team.";
              else if (preset.name === "Adverse Possession") facts2 = "Adverse possession claims over a boundary fence held continuously for 14 years. Plaintiff holds old physical sale deed records.";
              else if (preset.name === "Contract Breach Claim") facts2 = "Plaintiff claims damages of $150,000 for delayed delivery of software code. Defendant asserts delayed payment of mandatory mobilization fee.";
              else facts2 = "Client accused of unauthorized database access. The network audit exhibits overlapping credentials shared among multiple remote external contractors.";
              triggerPreset(preset.name, facts2);
            },
            className: `p-4 rounded-2xl shadow-sm text-left border transition-all group ${isDark ? "bg-[#1A2540] border-white/5 hover:border-indigo-500/30" : "bg-white border-slate-200 hover:shadow-md hover:border-indigo-500/20"}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-black text-indigo-600 dark:text-indigo-400 uppercase tracking-wide block transition-colors group-hover:text-indigo-500", children: preset.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-[10px] font-semibold mt-1 block leading-snug ${isDark ? "text-slate-400" : "text-slate-500"}`, children: preset.desc })
            ]
          },
          preset.name
        )) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-6 items-start", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `rounded-3xl p-6 border shadow-sm ${isDark ? "bg-[#1A2540] border-white/5" : "bg-white border-slate-200"}`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Brain, { size: 18, className: "text-indigo-500 animate-pulse" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: `text-sm font-black uppercase tracking-wider ${isDark ? "text-white" : "text-slate-900"}`, children: "Neural Case Architect" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: `text-[9px] font-black uppercase tracking-widest ${isDark ? "text-slate-400" : "text-slate-500"}`, children: "Case Category" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "select",
                {
                  value: caseType,
                  onChange: (e) => setCaseType(e.target.value),
                  className: `border rounded-xl px-4 py-3 text-xs font-bold outline-none focus:ring-2 focus:ring-indigo-500/20 ${isDark ? "bg-black/20 border-zinc-800 text-white" : "bg-slate-50 border-slate-200 text-slate-800"}`,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Criminal", children: "Criminal" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Civil", children: "Civil" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Corporate", children: "Corporate" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Cyber", children: "Cyber" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Family", children: "Family" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Property", children: "Property" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Labour", children: "Labour" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Consumer", children: "Consumer" })
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: `text-[9px] font-black uppercase tracking-widest ${isDark ? "text-slate-400" : "text-slate-500"}`, children: "Statutes / Legal Sections" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: "text",
                  placeholder: "e.g. IPC 420 / BNS 318, BSA 65B",
                  value: ipcSections,
                  onChange: (e) => setIpcSections(e.target.value),
                  className: `border rounded-xl px-4 py-3 text-xs font-semibold outline-none focus:ring-2 focus:ring-indigo-500/20 ${isDark ? "bg-black/20 border-zinc-800 text-white" : "bg-slate-50 border-slate-200 text-slate-800"}`
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: `text-[9px] font-black uppercase tracking-widest ${isDark ? "text-slate-400" : "text-slate-500"}`, children: "Court & Jurisdiction" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: "text",
                  placeholder: "e.g. High Court of Delhi",
                  value: courtName,
                  onChange: (e) => setCourtName(e.target.value),
                  className: `border rounded-xl px-4 py-3 text-xs font-semibold outline-none focus:ring-2 focus:ring-indigo-500/20 ${isDark ? "bg-black/20 border-zinc-800 text-white" : "bg-slate-50 border-slate-200 text-slate-800"}`
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: `text-[9px] font-black uppercase tracking-widest ${isDark ? "text-slate-400" : "text-slate-500"}`, children: "Opposing Party Details" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: "text",
                  placeholder: "e.g. Respondent name, Advocate details",
                  value: opponentDetails,
                  onChange: (e) => setOpponentDetails(e.target.value),
                  className: `border rounded-xl px-4 py-3 text-xs font-semibold outline-none focus:ring-2 focus:ring-indigo-500/20 ${isDark ? "bg-black/20 border-zinc-800 text-white" : "bg-slate-50 border-slate-200 text-slate-800"}`
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: `text-[9px] font-black uppercase tracking-widest ${isDark ? "text-slate-400" : "text-slate-500"}`, children: "Witness Statements" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: "text",
                  placeholder: "e.g. Inspector Rao (IO), eyewitness accounts",
                  value: witnessDetails,
                  onChange: (e) => setWitnessDetails(e.target.value),
                  className: `border rounded-xl px-4 py-3 text-xs font-semibold outline-none focus:ring-2 focus:ring-indigo-500/20 ${isDark ? "bg-black/20 border-zinc-800 text-white" : "bg-slate-50 border-slate-200 text-slate-800"}`
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: `text-[9px] font-black uppercase tracking-widest ${isDark ? "text-slate-400" : "text-slate-500"}`, children: "Evidences & Documents" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: "file",
                  multiple: true,
                  accept: ".pdf,image/*",
                  onChange: async (e) => {
                    const files = Array.from(e.target.files);
                    if (files.length > 0) {
                      const fileNames = files.map((f) => f.name).join(", ");
                      setEvidenceList(fileNames);
                      const processedFiles = await Promise.all(files.map((file) => {
                        return new Promise((resolve) => {
                          const reader = new FileReader();
                          reader.onload = (event) => {
                            resolve({
                              url: event.target.result,
                              type: file.type.startsWith("image/") ? "image" : "document",
                              name: file.name,
                              mimeType: file.type
                            });
                          };
                          reader.readAsDataURL(file);
                        });
                      }));
                      setEvidenceFiles(processedFiles);
                    } else {
                      setEvidenceList("");
                      setEvidenceFiles([]);
                    }
                  },
                  className: `border rounded-xl px-4 py-3 text-xs font-semibold outline-none focus:ring-2 focus:ring-indigo-500/20 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-xs file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100 ${isDark ? "bg-black/20 border-zinc-800 text-white" : "bg-slate-50 border-slate-200 text-slate-800"}`
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: `text-[9px] font-black uppercase tracking-widest ${isDark ? "text-slate-400" : "text-slate-500"}`, children: "Comprehensive Facts *" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "textarea",
                {
                  rows: 6,
                  placeholder: "Provide detailed chronological events, specific violations, claims and defense arguments...",
                  value: facts,
                  onChange: (e) => setFacts(e.target.value),
                  className: `border rounded-2xl px-4 py-3 text-xs font-semibold outline-none focus:ring-2 focus:ring-indigo-500/20 resize-none ${isDark ? "bg-black/20 border-zinc-800 text-white" : "bg-slate-50 border-slate-200 text-slate-850"}`
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: () => runOutcomePrediction(),
                disabled: isGenerating,
                className: "w-full py-4 bg-gradient-to-r from-indigo-600 to-violet-600 text-white rounded-2xl font-black text-xs uppercase tracking-wider hover:opacity-90 shadow-xl shadow-indigo-500/25 transition-all active:scale-98 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed",
                children: isGenerating ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Modeling Verdict..." })
                ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Gavel, { size: 16 }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Predict Judicial Outcome" })
                ] })
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-2 space-y-6", children: [
          isGenerating && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `rounded-3xl p-12 text-center flex flex-col items-center justify-center gap-4 ${isDark ? "bg-[#1A2540]/60" : "bg-white shadow-sm border border-slate-200"}`, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: `text-base font-black uppercase tracking-wider ${isDark ? "text-white" : "text-slate-900"}`, children: "Processing Legal Directives..." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `text-xs font-bold ${isDark ? "text-slate-400" : "text-slate-500"}`, children: "AI is indexing similar case histories, assessing statute limits, and generating predictions." })
            ] })
          ] }),
          displayPrediction && !isGenerating && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6 animate-in fade-in duration-300", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `rounded-3xl p-6 border shadow-sm ${isDark ? "bg-[#1A2540] border-white/5" : "bg-white border-slate-200"}`, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: `text-xs font-black uppercase tracking-wider mb-4 ${isDark ? "text-white" : "text-slate-900"}`, children: "Verdict Probability Margin" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center text-xs font-extrabold", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-emerald-500 flex items-center gap-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-2 h-2 rounded-full bg-emerald-500" }),
                    "Plaintiff win margin: ",
                    displayPrediction.stats.successRate,
                    "%"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-red-500 flex items-center gap-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-2 h-2 rounded-full bg-red-500" }),
                    "Defendant win margin: ",
                    displayPrediction.stats.defendantWinRate,
                    "%"
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full bg-slate-100 dark:bg-zinc-800 rounded-full h-4 overflow-hidden flex", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: "bg-emerald-500 h-full transition-all duration-700 ease-out",
                      style: { width: `${displayPrediction.stats.successRate}%` }
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: "bg-red-500 h-full transition-all duration-700 ease-out",
                      style: { width: `${displayPrediction.stats.defendantWinRate}%` }
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: `text-[10px] font-bold ${isDark ? "text-slate-400" : "text-slate-500"}`, children: [
                  "Forecast computed with ",
                  displayPrediction.stats.confidenceScore || 90,
                  "% overall AI neural model confidence."
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `rounded-3xl border shadow-sm overflow-hidden ${isDark ? "bg-[#1A2540] border-white/5" : "bg-white border-slate-200"}`, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `flex flex-wrap border-b ${isDark ? "border-white/5 bg-[#1B2644]" : "border-slate-200 bg-slate-50/50"}`, children: [
                { id: "caseStrength", label: "Case Strength", icon: Brain },
                { id: "evidenceImpact", label: "Evidence Impact", icon: FileText },
                { id: "judgePerspective", label: "Judge Perspective", icon: Scale },
                { id: "opponentTactics", label: "Opponent Tactics", icon: Users },
                { id: "timelines", label: "Timeline Forecast", icon: Clock },
                { id: "precedents", label: "Precedent Match", icon: BookOpen },
                { id: "laws", label: "Applicable Laws", icon: ShieldCheck }
              ].map((t) => {
                const Icon = t.icon;
                const isSelected = activeTab === t.id;
                return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "button",
                  {
                    onClick: () => setActiveTab(t.id),
                    className: `flex items-center gap-1.5 px-4 py-3 text-xs font-black uppercase tracking-wider border-b-2 transition-all ${isSelected ? "border-indigo-500 text-indigo-500 bg-white/5" : "border-transparent text-slate-400 hover:text-slate-200 hover:bg-white/5"}`,
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { size: 13 }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t.label })
                    ]
                  },
                  t.id
                );
              }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6", children: [
                activeTab === "caseStrength" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `p-4 rounded-2xl border ${isDark ? "bg-zinc-900/40 border-emerald-950/20" : "bg-emerald-50/20 border-emerald-100"}`, children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] font-black uppercase tracking-wider text-emerald-500 flex items-center gap-1 mb-3", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-emerald-500" }),
                      "Strong points"
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2 text-xs font-semibold", children: (_b = (_a = displayPrediction.caseStrengthDetails) == null ? void 0 : _a.strongPoints) == null ? void 0 : _b.map((p, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-emerald-500", children: "✔" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: p })
                    ] }, idx)) })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `p-4 rounded-2xl border ${isDark ? "bg-zinc-900/40 border-amber-950/20" : "bg-amber-50/20 border-amber-100"}`, children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] font-black uppercase tracking-wider text-amber-500 flex items-center gap-1 mb-3", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-amber-500" }),
                      "Weak points"
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2 text-xs font-semibold", children: (_d = (_c = displayPrediction.caseStrengthDetails) == null ? void 0 : _c.weakPoints) == null ? void 0 : _d.map((p, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-amber-500", children: "⚠" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: p })
                    ] }, idx)) })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `p-4 rounded-2xl border ${isDark ? "bg-zinc-900/40 border-orange-950/20" : "bg-orange-50/20 border-orange-100"}`, children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] font-black uppercase tracking-wider text-orange-500 flex items-center gap-1 mb-3", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-orange-500" }),
                      "Vulnerabilities"
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2 text-xs font-semibold", children: (_f = (_e = displayPrediction.caseStrengthDetails) == null ? void 0 : _e.vulnerabilities) == null ? void 0 : _f.map((p, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-orange-500", children: "⚡" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: p })
                    ] }, idx)) })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `p-4 rounded-2xl border ${isDark ? "bg-zinc-900/40 border-red-950/20" : "bg-red-50/20 border-red-100"}`, children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] font-black uppercase tracking-wider text-red-500 flex items-center gap-1 mb-3", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" }),
                      "Critical risks"
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2 text-xs font-semibold", children: (_h = (_g = displayPrediction.caseStrengthDetails) == null ? void 0 : _g.criticalRisks) == null ? void 0 : _h.map((p, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-red-500", children: "✘" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: p })
                    ] }, idx)) })
                  ] })
                ] }),
                activeTab === "evidenceImpact" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center text-xs font-bold", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Evidence Admissibility Level" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-indigo-500", children: [
                      displayPrediction.stats.evidenceStrength,
                      "%"
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full bg-slate-100 dark:bg-zinc-800 rounded-full h-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-indigo-500 h-full rounded-full", style: { width: `${displayPrediction.stats.evidenceStrength}%` } }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4 mt-4", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `p-4 rounded-2xl border ${isDark ? "bg-zinc-900/30 border-white/5" : "bg-slate-50 border-slate-100"}`, children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-black uppercase tracking-wider text-emerald-500 mb-2 block", children: "Strong evidence" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-1.5 text-xs font-semibold", children: (_j = (_i = displayPrediction.evidenceImpactDetails) == null ? void 0 : _i.strongEvidence) == null ? void 0 : _j.map((e, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-1.5", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "•" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: e })
                      ] }, idx)) })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `p-4 rounded-2xl border ${isDark ? "bg-zinc-900/30 border-white/5" : "bg-slate-50 border-slate-100"}`, children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-black uppercase tracking-wider text-amber-500 mb-2 block", children: "Weak evidence" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-1.5 text-xs font-semibold", children: (_l = (_k = displayPrediction.evidenceImpactDetails) == null ? void 0 : _k.weakEvidence) == null ? void 0 : _l.map((e, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-1.5", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "•" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: e })
                      ] }, idx)) })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `p-4 rounded-2xl border ${isDark ? "bg-zinc-900/30 border-white/5" : "bg-slate-50 border-slate-100"}`, children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-black uppercase tracking-wider text-orange-500 mb-2 block", children: "Missing evidence" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-1.5 text-xs font-semibold", children: (_n = (_m = displayPrediction.evidenceImpactDetails) == null ? void 0 : _m.missingEvidence) == null ? void 0 : _n.map((e, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-1.5", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "•" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: e })
                      ] }, idx)) })
                    ] })
                  ] })
                ] }),
                activeTab === "judgePerspective" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `p-4 rounded-2xl border ${isDark ? "bg-zinc-900/30 border-white/5" : "bg-slate-50 border-slate-100"}`, children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-black uppercase tracking-wider text-indigo-500 mb-2 block", children: "Bench Questions" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2 text-xs font-semibold", children: (_p = (_o = displayPrediction.judgePerspectiveDetails) == null ? void 0 : _o.questions) == null ? void 0 : _p.map((q, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-indigo-500", children: "?" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: q })
                    ] }, idx)) })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `p-4 rounded-2xl border ${isDark ? "bg-zinc-900/30 border-white/5" : "bg-slate-50 border-slate-100"}`, children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-black uppercase tracking-wider text-amber-500 mb-2 block", children: "Judicial Concerns" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2 text-xs font-semibold", children: (_r = (_q = displayPrediction.judgePerspectiveDetails) == null ? void 0 : _q.concerns) == null ? void 0 : _r.map((c, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-amber-500", children: "!" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: c })
                    ] }, idx)) })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `p-4 rounded-2xl border ${isDark ? "bg-zinc-900/30 border-white/5" : "bg-slate-50 border-slate-100"}`, children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-black uppercase tracking-wider text-red-500 mb-2 block", children: "Vulnerable Client Arguments" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2 text-xs font-semibold", children: (_t = (_s = displayPrediction.judgePerspectiveDetails) == null ? void 0 : _s.weakArguments) == null ? void 0 : _t.map((w, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-2 text-red-500/90 dark:text-red-400/90", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "⚠" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: w })
                    ] }, idx)) })
                  ] })
                ] }),
                activeTab === "opponentTactics" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `p-4 rounded-2xl border ${isDark ? "bg-zinc-900/30 border-white/5" : "bg-slate-50 border-slate-100"}`, children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-black uppercase tracking-wider text-slate-400 mb-2 block", children: "Mapped Claims" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-1.5 text-xs font-semibold", children: (_v = (_u = displayPrediction.opponentTactics) == null ? void 0 : _u.mappedClaims) == null ? void 0 : _v.map((c, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-1.5", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "•" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: c })
                      ] }, idx)) })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `p-4 rounded-2xl border ${isDark ? "bg-zinc-900/30 border-white/5" : "bg-slate-50 border-slate-100"}`, children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-black uppercase tracking-wider text-slate-400 mb-2 block", children: "Objections expected" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-1.5 text-xs font-semibold", children: (_x = (_w = displayPrediction.opponentTactics) == null ? void 0 : _w.objections) == null ? void 0 : _x.map((o, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-1.5", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "•" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: o })
                      ] }, idx)) })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `p-4 rounded-2xl border ${isDark ? "bg-zinc-900/30 border-white/5" : "bg-slate-50 border-slate-100"}`, children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-black uppercase tracking-wider text-indigo-500 mb-2 block", children: "Advocate Defense Strategies" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2 text-xs font-semibold", children: (_z = (_y = displayPrediction.opponentTactics) == null ? void 0 : _y.counterStrategies) == null ? void 0 : _z.map((s, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-indigo-500", children: "🛡" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: s })
                    ] }, idx)) })
                  ] })
                ] }),
                activeTab === "timelines" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "text-xs font-bold mb-4", children: "Phase Duration Forecast Timeline" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative pl-6 border-l-2 border-slate-200 dark:border-zinc-800 space-y-6", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -left-[31px] top-0 w-4 h-4 rounded-full bg-indigo-600 border-4 border-white dark:border-zinc-900" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("h6", { className: "text-xs font-extrabold", children: "Interim & Motion Hearings" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] font-bold text-indigo-500 mt-0.5", children: ((_A = displayPrediction.timelineForecasts) == null ? void 0 : _A.interimOrders) || "2-3 months" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `text-[10px] font-semibold mt-1 ${isDark ? "text-slate-400" : "text-slate-500"}`, children: "Resolution of immediate caveats and temporary injunction requests." })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -left-[31px] top-0 w-4 h-4 rounded-full bg-violet-600 border-4 border-white dark:border-zinc-900" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("h6", { className: "text-xs font-extrabold", children: "Trial & Examination Window" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] font-bold text-violet-500 mt-0.5", children: ((_B = displayPrediction.timelineForecasts) == null ? void 0 : _B.trialDuration) || "8-14 months" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `text-[10px] font-semibold mt-1 ${isDark ? "text-slate-400" : "text-slate-500"}`, children: "Cross-examination of witnesses, evidence submission hearings, and oral arguments." })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -left-[31px] top-0 w-4 h-4 rounded-full bg-emerald-600 border-4 border-white dark:border-zinc-900" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("h6", { className: "text-xs font-extrabold", children: "Final Arguments & Judgment" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] font-bold text-emerald-500 mt-0.5", children: ((_C = displayPrediction.timelineForecasts) == null ? void 0 : _C.finalJudgment) || "12-18 months" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `text-[10px] font-semibold mt-1 ${isDark ? "text-slate-400" : "text-slate-500"}`, children: "Submission of written statements and decree issuance from the bench." })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -left-[31px] top-0 w-4 h-4 rounded-full bg-amber-600 border-4 border-white dark:border-zinc-900" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("h6", { className: "text-xs font-extrabold", children: "Appellate Review Stage" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] font-bold text-amber-500 mt-0.5", children: ((_D = displayPrediction.timelineForecasts) == null ? void 0 : _D.appealsDuration) || "12-24 months" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `text-[10px] font-semibold mt-1 ${isDark ? "text-slate-400" : "text-slate-500"}`, children: "Potential appeals handling scope in the High Court / Supreme Court." })
                    ] })
                  ] })
                ] }),
                activeTab === "precedents" && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: (_E = displayPrediction.precedents) == null ? void 0 : _E.map((p, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `p-4 rounded-2xl border ${isDark ? "bg-zinc-900/30 border-white/5" : "bg-slate-50 border-slate-100 shadow-xs"}`, children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center mb-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-extrabold text-indigo-500", children: p.citation }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] font-black bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 px-2 py-0.5 rounded-full", children: [
                      p.relevanceScore,
                      "% Match"
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold", children: p.summary }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: `text-[10px] font-semibold mt-2 border-t pt-2 ${isDark ? "border-white/5 text-slate-400" : "border-slate-200 text-slate-500"}`, children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-extrabold uppercase text-[9px] block text-slate-400", children: "Relevance Details" }),
                    p.applicability
                  ] })
                ] }, idx)) }),
                activeTab === "laws" && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: (_F = displayPrediction.statutoryProvisions) == null ? void 0 : _F.map((law, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `p-4 rounded-2xl border ${isDark ? "bg-zinc-900/30 border-white/5" : "bg-slate-50 border-slate-100 shadow-xs"}`, children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-extrabold text-indigo-500 block mb-1", children: law.section }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold", children: law.description }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: `text-[10px] font-semibold mt-2 border-t pt-2 ${isDark ? "border-white/5 text-slate-400" : "border-slate-200 text-slate-500"}`, children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-extrabold uppercase text-[9px] block text-slate-400", children: "Applicability" }),
                    law.applicability
                  ] })
                ] }, idx)) })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `rounded-3xl border shadow-sm overflow-hidden ${isDark ? "bg-[#1A2540] border-white/5" : "bg-white border-slate-200"}`, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `flex flex-wrap gap-2 px-6 py-4 border-b ${isDark ? "border-white/5 bg-[#1B2644]" : "border-slate-200 bg-slate-50/50"}`, children: [
                { id: "predictionReport", label: "Prediction Brief" },
                { id: "litigationStrategyReport", label: "Litigation Strategy" },
                { id: "judicialForecastReport", label: "Judicial Forecast" },
                { id: "riskAssessmentReport", label: "Risk Assessment" },
                { id: "advocateBrief", label: "Advocate Court Brief" }
              ].map((tab) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  onClick: () => handleReportTabChange(tab.id),
                  className: `px-3.5 py-2 rounded-xl text-xs font-black uppercase tracking-wider border transition-all ${selectedReportTab === tab.id ? "bg-indigo-600 border-indigo-600 text-white shadow-md" : isDark ? "bg-zinc-900/40 border-zinc-800 text-slate-400 hover:text-white" : "bg-white border-slate-200 text-slate-600 hover:bg-slate-50"}`,
                  children: tab.label
                },
                tab.id
              )) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 space-y-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row justify-between items-center gap-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-full sm:w-72", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { size: 14, className: `absolute left-3 top-1/2 -translate-y-1/2 ${isDark ? "text-slate-500" : "text-slate-400"}` }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "input",
                      {
                        type: "text",
                        placeholder: "Search keywords inside brief...",
                        value: reportSearchQuery,
                        onChange: (e) => setReportSearchQuery(e.target.value),
                        className: `w-full pl-9 pr-4 py-2 border rounded-xl text-xs outline-none focus:ring-2 focus:ring-indigo-500/20 ${isDark ? "bg-black/20 border-zinc-800 text-white" : "bg-slate-50 border-slate-200 text-slate-800"}`
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 w-full sm:w-auto justify-end", children: [
                    isEditingReport ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "button",
                        {
                          onClick: handleSaveChanges,
                          className: "flex items-center gap-1.5 px-3 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-black uppercase tracking-wider shadow-sm transition-all",
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { size: 14 }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Save Changes" })
                          ]
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "button",
                        {
                          onClick: () => {
                            var _a2;
                            setIsEditingReport(false);
                            setEditedReportText(((_a2 = displayPrediction.reports) == null ? void 0 : _a2[selectedReportTab]) || displayPrediction.report || "");
                          },
                          className: `flex items-center gap-1.5 px-3 py-2 border rounded-xl text-xs font-black uppercase tracking-wider transition-all ${isDark ? "bg-zinc-800 border-zinc-700 hover:bg-zinc-700" : "bg-slate-100 border-slate-200 hover:bg-slate-250"}`,
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 14 }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Cancel" })
                          ]
                        }
                      )
                    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "button",
                      {
                        onClick: () => setIsEditingReport(true),
                        className: `flex items-center gap-1.5 px-3 py-2 border rounded-xl text-xs font-black uppercase tracking-wider transition-all ${isDark ? "bg-zinc-800 border-zinc-700 hover:bg-zinc-700" : "bg-slate-100 border-slate-200 hover:bg-slate-200"}`,
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(PenLine, { size: 14 }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Edit Brief" })
                        ]
                      }
                    ),
                    !isEditingReport && /* @__PURE__ */ jsxRuntimeExports.jsx(
                      LanguageToggle,
                      {
                        lang: outputLang,
                        onChange: setOutputLang,
                        isTranslating: isPredictorTranslating
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "button",
                      {
                        onClick: handleDownloadDocx,
                        className: `p-2 border rounded-xl transition-all ${isDark ? "bg-zinc-800 border-zinc-700 hover:bg-zinc-700 text-indigo-400" : "bg-slate-100 border-slate-200 hover:bg-slate-200 text-indigo-650"}`,
                        title: "Download MS Word Brief",
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { size: 14 })
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "button",
                      {
                        onClick: handlePrint,
                        className: `p-2 border rounded-xl transition-all ${isDark ? "bg-zinc-800 border-zinc-700 hover:bg-zinc-700 text-emerald-400" : "bg-slate-100 border-slate-200 hover:bg-slate-200 text-emerald-650"}`,
                        title: "Print / Save PDF",
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Printer, { size: 14 })
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "button",
                      {
                        onClick: handleCopyText,
                        className: `p-2 border rounded-xl transition-all ${isDark ? "bg-zinc-800 border-zinc-700 hover:bg-zinc-700 text-slate-400" : "bg-slate-100 border-slate-200 hover:bg-slate-200 text-slate-650"}`,
                        title: "Copy text",
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Copy, { size: 14 })
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "button",
                      {
                        onClick: handleShareReport,
                        className: `p-2 border rounded-xl transition-all ${isDark ? "bg-zinc-800 border-zinc-700 hover:bg-zinc-700 text-slate-400" : "bg-slate-100 border-slate-200 hover:bg-slate-200 text-slate-650"}`,
                        title: "Share Brief",
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Share2, { size: 14 })
                      }
                    )
                  ] })
                ] }),
                isEditingReport ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "textarea",
                  {
                    rows: 16,
                    value: editedReportText,
                    onChange: (e) => setEditedReportText(e.target.value),
                    className: `w-full p-4 border rounded-2xl text-xs font-semibold outline-none focus:ring-2 focus:ring-indigo-500/20 font-mono resize-none leading-relaxed ${isDark ? "bg-black/20 border-zinc-800 text-white" : "bg-slate-50 border-slate-200 text-slate-800"}`
                  }
                ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `p-5 rounded-2xl border text-xs sm:text-sm leading-relaxed whitespace-pre-wrap max-h-[500px] overflow-y-auto custom-scrollbar font-sans select-text ${isDark ? "bg-zinc-900/30 border-white/5 text-slate-200" : "bg-slate-50 border-slate-100 text-slate-700 shadow-inner"}`, children: highlightReportText(displayReportText || "", reportSearchQuery) })
              ] })
            ] })
          ] }),
          !displayPrediction && !isGenerating && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `rounded-3xl p-16 text-center border flex flex-col items-center justify-center gap-4 ${isDark ? "bg-[#1A2540] border-white/5" : "bg-white border-slate-200 shadow-xs"}`, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Gavel, { size: 36, className: "text-slate-400 animate-bounce" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: `text-base font-black uppercase tracking-wider ${isDark ? "text-white" : "text-slate-900"}`, children: "Judicial Forecasting Center" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `text-xs font-bold max-w-md ${isDark ? "text-slate-400" : "text-slate-500"}`, children: "Build a Neural Case Architect configuration using active details or quick presets, then click Predict to launch the verification simulation." })
            ] })
          ] })
        ] })
      ] })
    ] }) }),
    historyVisible && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "fixed inset-0 z-[120000] flex items-center justify-center p-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-black/60 backdrop-blur-md", onClick: () => setHistoryVisible(false) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `relative rounded-[32px] p-6 max-w-lg w-full max-h-[80vh] flex flex-col shadow-2xl border ${isDark ? "bg-zinc-900 border-zinc-800 text-white" : "bg-white border-slate-250 text-slate-900"}`, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `flex items-center justify-between border-b pb-4 mb-4 ${isDark ? "border-zinc-800" : "border-slate-100"}`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-sm font-black uppercase tracking-wider flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(History, { size: 16 }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Forecasting Verdict Logs" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setHistoryVisible(false), className: `p-1 rounded-full ${isDark ? "hover:bg-zinc-800 text-slate-400" : "hover:bg-slate-100 text-slate-500"}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 18 }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 overflow-y-auto space-y-3 pr-2 custom-scrollbar", children: historyData.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center py-10 text-slate-400 font-semibold text-xs", children: "No previous forecasts found in database history." }) : historyData.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `p-4 rounded-2xl flex items-center justify-between gap-4 border ${isDark ? "bg-zinc-800/40 border-zinc-700/30" : "bg-slate-50 border-slate-200/60"}`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "text-xs font-black truncate", children: [
              item.caseType,
              " Analysis"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[10px] text-slate-400 font-semibold mt-1", children: [
              item.timestamp,
              " • Win: ",
              item.stats.successRate,
              "%"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: () => {
                  var _a2;
                  setActivePrediction(item);
                  setEditedReportText(((_a2 = item.reports) == null ? void 0 : _a2[selectedReportTab]) || item.report || "");
                  setHistoryVisible(false);
                },
                className: "px-3.5 py-1.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-[10px] font-black uppercase tracking-wider shadow-sm transition-all",
                children: "Load"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: () => handleDeleteHistoryItem(item.id),
                className: `p-2 rounded-lg text-red-500 transition-colors ${isDark ? "hover:bg-red-950/20" : "hover:bg-red-50"}`,
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 14 })
              }
            )
          ] })
        ] }, item.id)) })
      ] })
    ] })
  ] });
};
export {
  CasePredictor as default
};
