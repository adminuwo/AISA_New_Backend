import { c as createLucideIcon, r as reactExports, a as apiService, bW as mapCaseToForm, z as zt, bV as useOutputLanguage, j as jsxRuntimeExports, A as AnimatePresence, m as motion, t as Scale, X, c0 as CircleCheck, T as Trash2, W as Plus, F as FileText, c9 as Image, ca as Mic, cb as Video, a0 as Check, k as Sparkles, bN as Gavel, l as Shield, u as Eye, cc as Target, aj as LoaderCircle, C as CircleAlert, c4 as LanguageToggle, bR as Brain, bY as Copy, c6 as FileDown, V as Save, c7 as consumePrefillIntent, ai as ChevronDown, c8 as generateChatResponse, b_ as Download, bZ as Share2, bX as ChevronLeft, Z as Zap, cd as Paperclip, o as Send, c2 as History, d as Calendar, $ as Pen, c3 as ChevronUp, h as Database } from "./index-CifJr-sK.js";
import { e as exportToPDF } from "./exportToPDF-viLPZRMJ.js";
import { P as Printer } from "./printer-ZcOkpCIc.js";
/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["line", { x1: "18", x2: "18", y1: "20", y2: "10", key: "1xfpm4" }],
  ["line", { x1: "12", x2: "12", y1: "20", y2: "4", key: "be30l9" }],
  ["line", { x1: "6", x2: "6", y1: "20", y2: "14", key: "1r4le6" }]
];
const ChartNoAxesColumn = createLucideIcon("ChartNoAxesColumn", __iconNode);
const HINDI_LABELS = {
  "Generate Written Argument": "लिखित तर्क",
  "Generate Oral Argument": "मौखिक तर्क",
  "Generate Final Submission": "अंतिम प्रस्तुति",
  "Counter Argument Analysis": "विपक्षी तर्क विश्लेषण",
  "Generate Judge Perspective": "न्यायाधीश परिप्रेक्ष्य",
  "Generate Winning Strategy": "जीतने की रणनीति",
  "Generating...": "उत्पन्न किया जा रहा है..."
};
const CASE_TYPES = ["Civil", "Criminal", "Family", "Consumer", "Labour", "Property", "Arbitration", "Writ", "Appeal"];
const ADVOCATE_SIDES = ["Petitioner", "Respondent", "Defence", "Prosecution"];
const STRENGTH_LEVELS = ["Strong", "Moderate", "Weak"];
const RELIEF_OPTIONS = ["Injunction", "Compensation", "Damages", "Specific Performance", "Bail", "Acquittal", "Custody", "Maintenance", "Other"];
const PROVISIONS_QUICK = ["BNS", "BNSS", "Evidence Act", "CPC", "CrPC", "IPC", "Contract Act", "Constitution of India", "Transfer of Property Act", "Limitation Act"];
const AI_ACTIONS = [
  { id: "written", label: "Generate Written Argument", icon: FileText, grad: "from-violet-600 to-indigo-600", desc: "Formal court written argument" },
  { id: "oral", label: "Generate Oral Argument", icon: Mic, grad: "from-indigo-600 to-blue-600", desc: "Court speech & presentation" },
  { id: "final", label: "Generate Final Submission", icon: Gavel, grad: "from-blue-600 to-cyan-600", desc: "Complete court submission" },
  { id: "counter", label: "Counter Argument Analysis", icon: Shield, grad: "from-emerald-600 to-teal-600", desc: "Analyze opponent arguments" },
  { id: "judge", label: "Generate Judge Perspective", icon: Eye, grad: "from-amber-600 to-orange-600", desc: "Judicial view of the case" },
  { id: "strategy", label: "Generate Winning Strategy", icon: Target, grad: "from-rose-600 to-pink-600", desc: "Complete winning roadmap" }
];
const LEGAL_SYSTEM = `You are an elite Senior Advocate and Indian legal AI assistant with 30+ years of experience. 
You draft professional, court-ready legal documents strictly following Indian court formats.
Use formal legal language, cite Indian law (BNS/IPC/CPC/BNSS/Evidence Act/Constitution etc.) precisely.
Always structure documents with clear numbered headings and subheadings.
Make arguments compelling, legally sound, and based on the facts provided.
Do NOT use placeholders or ask for more information — work with what is given.`;
const buildPrompt = (actionId, form) => {
  const {
    caseTitle,
    caseNumber,
    courtName,
    judgeName,
    caseType,
    petitioner,
    respondent,
    advocateName,
    advocateSide,
    caseFacts,
    issues,
    provisions,
    evidences,
    caseLaws,
    arguments_,
    counters,
    reliefs
  } = form;
  const date = (/* @__PURE__ */ new Date()).toLocaleDateString("en-IN", { day: "2-digit", month: "long", year: "numeric" });
  const issuesList = issues.filter((i) => i.trim()).map((v, i) => `${i + 1}. ${v}`).join("\n") || "Not specified";
  const provList = provisions.filter((p) => p.act.trim()).map((p) => `- ${p.act}${p.sections ? ` (${p.sections})` : ""}`).join("\n") || "Not specified";
  const evList = evidences.filter((e) => e.title.trim()).map((e, i) => `Evidence ${i + 1}: ${e.title} — ${e.description}`).join("\n") || "Not specified";
  const lawList = caseLaws.filter((c) => c.name.trim()).map((c, i) => `${i + 1}. ${c.name}${c.citation ? ` [${c.citation}]` : ""}${c.principle ? ` — ${c.principle}` : ""}`).join("\n") || "Not specified";
  const argsList = arguments_.filter((a) => a.heading.trim()).map((a, i) => `Argument ${i + 1} [${a.strength}]: ${a.heading}
   Details: ${a.detail}
   Evidence: ${a.evidence || "N/A"} | Provision: ${a.provision || "N/A"} | Judgment: ${a.judgment || "N/A"}`).join("\n\n") || "Not specified";
  const counterList = counters.filter((c) => c.opponent.trim()).map((c, i) => `${i + 1}. Opponent: ${c.opponent}
   Rebuttal: ${c.rebuttal}`).join("\n\n") || "Not specified";
  const reliefList = reliefs.join(", ") || "Not specified";
  const ctx = `
─────────────────────────────────────────────────────────────────
CASE INFORMATION
─────────────────────────────────────────────────────────────────
Title       : ${caseTitle || "N/A"}
Case Number : ${caseNumber || "N/A"}
Court       : ${courtName || "N/A"}
Judge       : ${judgeName || "Not specified"}
Case Type   : ${caseType || "N/A"}
Date        : ${date}

PARTIES
─────────────────────────────────────────────────────────────────
Petitioner/Plaintiff : ${petitioner || "N/A"}
Respondent/Defendant : ${respondent || "N/A"}
Advocate             : ${advocateName || "N/A"} (${advocateSide || "N/A"})

FACTS OF THE CASE
─────────────────────────────────────────────────────────────────
${caseFacts || "Not provided"}

ISSUES FOR DETERMINATION
─────────────────────────────────────────────────────────────────
${issuesList}

APPLICABLE LEGAL PROVISIONS
─────────────────────────────────────────────────────────────────
${provList}

EVIDENCE ON RECORD
─────────────────────────────────────────────────────────────────
${evList}

CASE LAWS & PRECEDENTS
─────────────────────────────────────────────────────────────────
${lawList}

MAIN ARGUMENTS
─────────────────────────────────────────────────────────────────
${argsList}

COUNTER ARGUMENTS & REBUTTALS
─────────────────────────────────────────────────────────────────
${counterList}

RELIEF SOUGHT
─────────────────────────────────────────────────────────────────
${reliefList}`;
  const instructions = {
    written: `Draft a complete, court-ready WRITTEN ARGUMENT following the exact format below. Make every argument legally compelling and backed by the provisions and precedents provided.

IN THE HON'BLE ${(courtName == null ? void 0 : courtName.toUpperCase()) || "COURT OF ______"}

Case No. ${caseNumber || "___________"}

BETWEEN

${(petitioner == null ? void 0 : petitioner.toUpperCase()) || "PETITIONER/PLAINTIFF"}
                                         ...Petitioner/Plaintiff
                        Versus
${(respondent == null ? void 0 : respondent.toUpperCase()) || "RESPONDENT/DEFENDANT"}
                                         ...Respondent/Defendant

WRITTEN ARGUMENTS ON BEHALF OF THE ${(advocateSide || "PETITIONER").toUpperCase()}

1. INTRODUCTION
2. BRIEF FACTS OF THE CASE
3. ISSUES FOR DETERMINATION
4. APPLICABLE LAW & PROVISIONS
5. ANALYSIS OF EVIDENCE
6. JUDICIAL PRECEDENTS RELIED UPON
7. ARGUMENTS ADVANCED (elaborate each argument in detail)
8. REBUTTAL OF OPPOSING ARGUMENTS
9. RELIEF SOUGHT
10. PRAYER

PRAYER
In view of the foregoing facts, the evidence on record, the statutory provisions cited and the judicial precedents relied upon, it is most respectfully prayed that this Hon'ble Court may be pleased to:
[List specific reliefs]

And pass such other order/orders as this Hon'ble Court may deem fit and proper in the facts and circumstances of this case, in the interest of justice.

Respectfully Submitted,

${advocateName || "Advocate for Petitioner/Plaintiff"}
Date: ${date}
Place: ${courtName || "___________"}`,
    oral: `Draft a comprehensive ORAL ARGUMENT script for a ${caseType || "legal"} matter. This should be what a Senior Advocate actually says in court.

Structure:
1. OPENING ADDRESS TO THE COURT (Respectful salutation and introduction)
2. BRIEF STATEMENT OF FACTS (2-3 minutes of speech)
3. FRAMING THE ISSUES (Clear articulation of legal questions)
4. MAIN ARGUMENTS (Each with clear speaking points, transitions, and emphasis)
5. CITING PRECEDENTS (How to present case laws)
6. REBUTTAL POINTS (Pre-empting opponent's likely arguments)
7. CLOSING STATEMENT AND PRAYER

Include stage directions like [PAUSE], [HAND DOCUMENT TO JUDGE], [TURN TO OPPONENT] for dramatic effect.
Make it persuasive, confident, and legally authoritative.`,
    final: `Draft the most comprehensive FINAL COURT SUBMISSION / WRITTEN STATEMENT OF ARGUMENTS for this ${caseType || "legal"} case. This is the definitive legal document.

Structure:
IN THE HON'BLE ${(courtName == null ? void 0 : courtName.toUpperCase()) || "COURT"}
Case No. ${caseNumber || "___"}

FINAL WRITTEN SUBMISSIONS ON BEHALF OF ${(advocateSide || "PETITIONER").toUpperCase()}

I.    SYNOPSIS OF THE CASE
II.   LIST OF DATES AND EVENTS (Chronological)
III.  STATEMENT OF FACTS
IV.   ISSUES FRAMED FOR DETERMINATION
V.    APPLICABLE STATUTES & PROVISIONS (with full text of relevant sections)
VI.   COMPREHENSIVE ANALYSIS OF EVIDENCE
VII.  JUDICIAL PRECEDENTS (with ratio decidendi)
VIII. MAIN ARGUMENTS ADVANCED (exhaustive, well-structured)
IX.   COUNTER-ARGUMENTS & REBUTTALS
X.    PRINCIPLE OF EQUITY AND FAIRNESS
XI.   RELIEF SOUGHT
XII.  PRAYER

CERTIFICATION OF CORRECTNESS
INDEX OF DOCUMENTS`,
    counter: `Perform a professional COUNTER ARGUMENT ANALYSIS for this ${caseType || "legal"} case. Identify every possible opposing argument and prepare robust rebuttals.

Format:
1. ANTICIPATED ARGUMENTS BY OPPOSING COUNSEL (identify minimum 5-7 likely arguments even if not explicitly listed)
2. FOR EACH OPPOSING ARGUMENT:
   a) Summary of Opponent's Argument
   b) Legal Weakness in their Argument
   c) Our Counter-Argument
   d) Supporting Legal Authority
   e) Evidence that Defeats their Argument
   f) Recommended Courtroom Response
3. PRE-EMPTIVE STRATEGY (arguments to raise before opponent does)
4. CROSS-EXAMINATION STRATEGY (questions to weaken opponent witnesses)
5. FINAL DEFENCE ASSESSMENT`,
    judge: `From the perspective of a Hon'ble Judge presiding over this ${caseType || "legal"} case, provide an objective JUDICIAL ANALYSIS.

Structure:
1. FIRST IMPRESSION OF THE CASE (How the court views it initially)
2. PRIMA FACIE ASSESSMENT (Is a case made out?)
3. STRENGTH OF EVIDENCE EVALUATION (For both sides)
4. LEGAL ISSUES ANALYSIS (Are they properly framed?)
5. CREDIBILITY ASSESSMENT (Petitioner vs Respondent arguments)
6. LIKELY QUESTIONS FROM THE BENCH (5-10 questions each side should prepare for)
7. AREAS OF CONCERN — FOR PETITIONER (What might harm their case)
8. AREAS OF CONCERN — FOR RESPONDENT (What might harm their case)
9. MISSING EVIDENCE OR LEGAL POINTS
10. LEGAL RISK PROBABILITY (0-100% scale)
11. PROBABLE JUDICIAL OBSERVATIONS
12. LIKELY OUTCOME ASSESSMENT WITH REASONING

Be completely neutral and judicial in tone.`,
    strategy: `Develop a comprehensive WINNING LEGAL STRATEGY AND LITIGATION ROADMAP for this ${caseType || "legal"} case.

Structure:
1. CASE SWOT ANALYSIS (Strengths / Weaknesses / Opportunities / Threats)
2. CORE WINNING ARGUMENTS (ranked by strength)
3. EVIDENCE STRATEGY
   - Evidence to prioritize
   - How to present each piece
   - Evidence gaps to fill
4. WITNESS STRATEGY
   - Witnesses to call
   - Key testimony points
   - Cross-examination guide
5. LEGAL PRECEDENT STRATEGY
   - Key precedents to cite and how
   - Distinguishing opponent's precedents
6. PROCEDURAL STRATEGY
   - Applications to file
   - Interim reliefs to seek
   - Timeline planning
7. RISK MITIGATION PLAN
8. SETTLEMENT CONSIDERATIONS (when and how)
9. APPEAL STRATEGY (if initial court goes against)
10. COURTROOM CONDUCT RECOMMENDATIONS
11. FINAL RECOMMENDATION (win probability and best approach)`
  };
  return `${instructions[actionId]}

${ctx}`;
};
const inputCls = "w-full bg-white dark:bg-zinc-800/60 border border-slate-200 dark:border-zinc-700 rounded-xl px-4 py-3 text-sm font-medium text-slate-800 dark:text-white outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-500/10 transition-all placeholder-slate-300 dark:placeholder-zinc-600";
const inputSmCls = "bg-white dark:bg-zinc-800/60 border border-slate-200 dark:border-zinc-700 rounded-xl px-3 py-2.5 text-sm font-medium text-slate-800 dark:text-white outline-none focus:border-violet-500 transition-all placeholder-slate-300 dark:placeholder-zinc-600";
const SectionHdr = ({ n, title, sub, open, onToggle }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
  "button",
  {
    type: "button",
    onClick: onToggle,
    className: "w-full flex items-center justify-between py-4 px-5 bg-gradient-to-r from-slate-50 to-white dark:from-zinc-900/60 dark:to-zinc-900/30 group",
    children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-7 h-7 rounded-lg bg-gradient-to-br from-violet-600 to-indigo-600 flex items-center justify-center shrink-0 shadow-sm shadow-indigo-500/20", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-black text-white", children: n }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-left", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-black text-slate-800 dark:text-white", children: title }),
          sub && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-slate-400 mt-0.5", children: sub })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { size: 16, className: `text-slate-400 group-hover:text-violet-600 transition-transform duration-200 ${open ? "rotate-180" : ""}` })
    ]
  }
);
const RenderedOutput = ({ text }) => {
  const lines = text.split("\n");
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs sm:text-sm leading-relaxed text-slate-800 dark:text-slate-200 font-mono space-y-0.5 select-text", children: lines.map((line, i) => {
    if (!line.trim()) return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-2" }, i);
    if (line.startsWith("# ")) return /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-base font-black text-slate-900 dark:text-white mt-3 mb-1 border-b border-slate-200 dark:border-zinc-700 pb-1", children: line.slice(2) }, i);
    if (line.startsWith("## ")) return /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-sm font-black text-violet-700 dark:text-violet-400 mt-3 mb-1", children: line.slice(3) }, i);
    if (line.startsWith("### ")) return /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xs font-black text-indigo-600 dark:text-indigo-400 mt-2 mb-0.5 uppercase tracking-wide", children: line.slice(4) }, i);
    if (/^\*\*(.+)\*\*$/.test(line.trim())) return /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-slate-900 dark:text-white", children: line.replace(/\*\*/g, "") }, i);
    if (line.startsWith("---") || line.startsWith("───")) return /* @__PURE__ */ jsxRuntimeExports.jsx("hr", { className: "border-slate-200 dark:border-zinc-700 my-2" }, i);
    const formatted = line.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>").replace(/\*(.+?)\*/g, "<em>$1</em>").replace(/`(.+?)`/g, '<code class="bg-slate-100 dark:bg-zinc-800 px-1 rounded text-[10px]">$1</code>');
    return /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "leading-relaxed", dangerouslySetInnerHTML: { __html: formatted } }, i);
  }) });
};
const validate = (form) => {
  const errors = [];
  if (!form.caseTitle.trim()) errors.push("Case Title is required");
  if (!form.caseFacts.trim()) errors.push("Case Facts are required");
  if (!form.petitioner.trim()) errors.push("Petitioner/Plaintiff name is required");
  if (!form.respondent.trim()) errors.push("Respondent/Defendant name is required");
  return errors;
};
const STORAGE_KEY = (caseId) => `@aisa_build_arg_${caseId || "default"}`;
const BuildArgumentModal = ({ isOpen, onClose, currentCase, onUpdateCase }) => {
  document.documentElement.classList.contains("dark");
  const caseId = currentCase == null ? void 0 : currentCase._id;
  const loadSaved = reactExports.useCallback(() => {
    if (currentCase == null ? void 0 : currentCase.argumentBuilderForm) {
      return currentCase.argumentBuilderForm;
    }
    try {
      const saved = localStorage.getItem(STORAGE_KEY(caseId));
      if (saved) return JSON.parse(saved);
    } catch {
    }
    return null;
  }, [caseId, currentCase == null ? void 0 : currentCase.argumentBuilderForm]);
  const defaultForm = reactExports.useCallback(() => {
    const saved = loadSaved();
    if (saved) return saved;
    return {
      caseTitle: (currentCase == null ? void 0 : currentCase.name) || "",
      caseNumber: "",
      courtName: (currentCase == null ? void 0 : currentCase.courtName) || (currentCase == null ? void 0 : currentCase.court) || "",
      judgeName: "",
      caseType: (currentCase == null ? void 0 : currentCase.caseType) || "",
      petitioner: (currentCase == null ? void 0 : currentCase.clientName) || (currentCase == null ? void 0 : currentCase.petitioner) || "",
      respondent: (currentCase == null ? void 0 : currentCase.accused) || (currentCase == null ? void 0 : currentCase.respondent) || "",
      advocateName: "",
      advocateSide: "",
      caseFacts: (currentCase == null ? void 0 : currentCase.description) || (currentCase == null ? void 0 : currentCase.caseSummary) || (currentCase == null ? void 0 : currentCase.caseFacts) || "",
      issues: [""],
      provisions: [{ act: "", sections: "" }],
      evidences: [{ title: "", description: "", files: [] }],
      caseLaws: [{ name: "", citation: "", principle: "" }],
      arguments_: [{ heading: "", detail: "", evidence: "", provision: "", judgment: "", strength: "Strong" }],
      counters: [{ opponent: "", rebuttal: "" }],
      reliefs: []
    };
  }, [currentCase, loadSaved]);
  const [form, setFormRaw] = reactExports.useState(defaultForm);
  const setForm = (updater) => setFormRaw((prev) => {
    const next = typeof updater === "function" ? updater(prev) : updater;
    return next;
  });
  reactExports.useEffect(() => {
    if (!currentCase || !currentCase._id) return;
    const handler = setTimeout(async () => {
      try {
        if (JSON.stringify(currentCase.argumentBuilderForm) === JSON.stringify(form)) {
          return;
        }
        const payload = {
          ...currentCase,
          argumentBuilderForm: form
        };
        const response = await apiService.updateProject(currentCase._id, payload);
        if (onUpdateCase) onUpdateCase(response);
        localStorage.removeItem(STORAGE_KEY(caseId));
      } catch (err) {
        console.error("Failed to auto-save argument builder form to DB", err);
      }
    }, 1e3);
    return () => {
      clearTimeout(handler);
    };
  }, [form, currentCase == null ? void 0 : currentCase._id, caseId]);
  const [prefillFields, setPrefillFields] = reactExports.useState(/* @__PURE__ */ new Set());
  const [prefillBanner, setPrefillBanner] = reactExports.useState(null);
  reactExports.useEffect(() => {
    var _a, _b;
    if (!isOpen) return;
    const base = defaultForm();
    const intent = consumePrefillIntent("legal_argument_builder");
    if (intent == null ? void 0 : intent.caseData) {
      const mapped = mapCaseToForm(intent.caseData);
      const filled = /* @__PURE__ */ new Set();
      const merged = { ...base };
      const tryFill = (key, value) => {
        if (value && String(value).trim()) {
          merged[key] = value;
          filled.add(key);
        }
      };
      tryFill("caseTitle", mapped.caseTitle);
      tryFill("caseNumber", mapped.caseNumber);
      tryFill("courtName", mapped.courtName);
      tryFill("judgeName", mapped.judgeName);
      tryFill("caseType", mapped.caseType);
      tryFill("petitioner", mapped.petitioner);
      tryFill("respondent", mapped.respondent);
      tryFill("advocateName", mapped.advocateName);
      tryFill("advocateSide", mapped.advocateSide);
      tryFill("caseFacts", mapped.caseFacts);
      if (mapped.issues) {
        const issueLines = String(mapped.issues).split(/[\n,;]/).map((s) => s.trim()).filter(Boolean);
        if (issueLines.length) {
          merged.issues = [...issueLines, ""];
          filled.add("issues");
        }
      }
      if (mapped.provisions) {
        const provLines = String(mapped.provisions).split(/[\n,;]/).map((s) => s.trim()).filter(Boolean);
        if (provLines.length) {
          merged.provisions = provLines.map((p) => ({ act: p, sections: "" }));
          filled.add("provisions");
        }
      }
      if ((_a = mapped.allDocuments) == null ? void 0 : _a.length) {
        merged.evidences = mapped.allDocuments.map((d) => ({
          title: d.name || "Document",
          description: `Uploaded evidence: ${d.type || "file"} - ${d.uploadDate || ""}`,
          files: []
        }));
        filled.add("evidences");
      }
      if (mapped.caseLaws) {
        const lawLines = String(mapped.caseLaws).split(/[\n;]/).map((s) => s.trim()).filter(Boolean);
        if (lawLines.length) {
          merged.caseLaws = lawLines.map((l) => ({ name: l, citation: "", principle: "" }));
          filled.add("caseLaws");
        }
      }
      if (mapped.previousArgs) {
        const prevArgLines = String(mapped.previousArgs).split(/\n\n/).map((s) => s.trim()).filter(Boolean);
        if (prevArgLines.length) {
          merged.arguments_ = prevArgLines.map((a) => ({ heading: a.slice(0, 80), detail: a, evidence: "", provision: "", judgment: "", strength: "Strong" }));
          filled.add("arguments_");
        }
      }
      setFormRaw(merged);
      setPrefillFields(filled);
      if (filled.size > 0) {
        setPrefillBanner({ count: filled.size, caseTitle: mapped.caseTitle || ((_b = intent.caseData) == null ? void 0 : _b.name) || "Active Case" });
        setSec((p) => ({
          ...p,
          s1: true,
          // Case Info
          s2: true,
          // Parties
          s3: true,
          // Facts
          s4: filled.has("issues"),
          s5: filled.has("provisions"),
          s6: filled.has("evidences"),
          s7: filled.has("caseLaws"),
          s8: filled.has("arguments_")
        }));
        zt.success(`✓ ${filled.size} fields auto-filled from case data`, { icon: "💼", duration: 3500 });
      }
    } else {
      setFormRaw(base);
      setPrefillFields(/* @__PURE__ */ new Set());
      setPrefillBanner(null);
    }
  }, [isOpen, caseId]);
  const f = form;
  const upd = (key, val) => setForm((p) => ({ ...p, [key]: val }));
  const [sec, setSec] = reactExports.useState({ s1: true, s2: true, s3: true, s4: false, s5: false, s6: false, s7: false, s8: false, s9: false, s10: false });
  const tog = (k) => setSec((p) => ({ ...p, [k]: !p[k] }));
  const [generating, setGenerating] = reactExports.useState(false);
  const [activeAction, setActiveAction] = reactExports.useState("");
  const [output, setOutput] = reactExports.useState("");
  const [outputLabel, setOutputLabel] = reactExports.useState("");
  const [showOutput, setShowOutput] = reactExports.useState(false);
  const [copied, setCopied] = reactExports.useState(false);
  const [saving, setSaving] = reactExports.useState(false);
  const outputRef = reactExports.useRef(null);
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
    isTranslating: isOutputTranslating,
    setIsTranslating: setIsOutputTranslating,
    translateText: translateOutputText,
    getDisplayText: getOutputDisplayText
  } = useOutputLanguage("build_argument_output", caseId || "global");
  const [translatedOutput, setTranslatedOutput] = reactExports.useState("");
  reactExports.useEffect(() => {
    if (outputLang === "en" || !output) {
      setTranslatedOutput("");
      return;
    }
    const cached = getOutputDisplayText(output);
    if (cached && cached !== output) {
      setTranslatedOutput(cached);
      return;
    }
    setIsOutputTranslating(true);
    translateOutputText(output).then((translated) => {
      if (isMountedRef.current) setTranslatedOutput(translated);
      setIsOutputTranslating(false);
    }).catch(() => {
      if (isMountedRef.current) setTranslatedOutput("");
      setIsOutputTranslating(false);
    });
  }, [output, outputLang, getOutputDisplayText, translateOutputText, setIsOutputTranslating]);
  reactExports.useEffect(() => {
    if (output) {
      setOutputLang("en");
      setTranslatedOutput("");
    }
  }, [output]);
  const displayOutput = reactExports.useMemo(() => {
    if (outputLang === "hi" && translatedOutput) return translatedOutput;
    return output;
  }, [outputLang, translatedOutput, output]);
  const handleGenerate = async (actionId) => {
    var _a;
    const errors = validate(form);
    if (errors.length) {
      errors.forEach((e) => zt.error(e, { duration: 3e3 }));
      if (!form.caseTitle.trim() || !form.caseType || !form.courtName) setSec((p) => ({ ...p, s1: true }));
      if (!form.petitioner.trim() || !form.respondent.trim()) setSec((p) => ({ ...p, s2: true }));
      if (!form.caseFacts.trim()) setSec((p) => ({ ...p, s3: true }));
      return;
    }
    const action = AI_ACTIONS.find((a) => a.id === actionId);
    setGenerating(true);
    setActiveAction(actionId);
    setOutput("");
    setOutputLabel((action == null ? void 0 : action.label) || "Generating...");
    setShowOutput(true);
    setTimeout(() => {
      var _a2;
      return (_a2 = outputRef.current) == null ? void 0 : _a2.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
    try {
      const prompt = buildPrompt(actionId, form);
      const response = await generateChatResponse(
        [],
        // history
        prompt,
        // message
        LEGAL_SYSTEM,
        // system instruction
        [],
        // attachments
        "English",
        // language
        null,
        // abortSignal
        "legal",
        // mode
        null,
        // sessionId
        caseId || null
        // projectId
      );
      let text = "";
      if (typeof response === "string") {
        text = response;
      } else if (response == null ? void 0 : response.reply) {
        text = response.reply;
      } else if ((_a = response == null ? void 0 : response.data) == null ? void 0 : _a.reply) {
        text = response.data.reply;
      } else if (response == null ? void 0 : response.text) {
        text = response.text;
      } else if (response == null ? void 0 : response.error) {
        throw new Error(response.message || response.error);
      } else {
        text = JSON.stringify(response);
      }
      if (!text || text.includes("Log In") || text.includes("Please [Log In]")) {
        throw new Error("Authentication required. Please log in and try again.");
      }
      setOutput(text);
      zt.success(`${(action == null ? void 0 : action.label) || "Argument"} generated!`, { duration: 2500 });
    } catch (err) {
      console.error("[BuildArgument] AI error:", err);
      const msg = (err == null ? void 0 : err.message) || "Failed to generate. Please try again.";
      zt.error(msg);
      setOutput("");
      setShowOutput(false);
    } finally {
      setGenerating(false);
      setActiveAction("");
    }
  };
  const handlePDF = async () => {
    if (!displayOutput) {
      zt.error("Generate an argument first.");
      return;
    }
    const isHi = outputLang === "hi";
    const cleanOutputLabel = isHi ? HINDI_LABELS[outputLabel] || outputLabel : outputLabel;
    const toastId = zt.loading(isHi ? "PDF तैयार किया जा रहा है..." : "Generating PDF...");
    try {
      const el = document.getElementById("argument-rendered-output");
      await exportToPDF({
        element: el,
        text: displayOutput,
        title: isHi ? "AISA™ एआई कानूनी — कोर्ट आर्गुमेंट दस्तावेज़" : "AISA™ AI Legal — Court Argument Document",
        filename: `AISA_${cleanOutputLabel.replace(/\s+/g, "_")}_${(form.caseTitle || "Case").replace(/\s+/g, "_")}`,
        lang: outputLang,
        meta: {
          [isHi ? "मामला" : "Case"]: form.caseTitle || "N/A",
          [isHi ? "न्यायालय" : "Court"]: form.courtName || "N/A",
          [isHi ? "पक्षकार" : "Parties"]: `${form.petitioner || ""} ${isHi ? "बनाम" : "vs"} ${form.respondent || ""}`,
          [isHi ? "उत्पन्न तिथि" : "Generated"]: (/* @__PURE__ */ new Date()).toLocaleString()
        }
      });
      zt.success(isHi ? "PDF सफलतापूर्वक निर्यात किया गया!" : "PDF exported successfully!", { id: toastId });
    } catch (e) {
      console.error(e);
      zt.error(isHi ? "PDF निर्यात विफल" : "PDF export failed. Try copy instead.", { id: toastId });
    }
  };
  const handleDocx = () => {
    if (!displayOutput) {
      zt.error("Generate an argument first.");
      return;
    }
    const isHi = outputLang === "hi";
    const cleanOutputLabel = isHi ? HINDI_LABELS[outputLabel] || outputLabel : outputLabel;
    const header = isHi ? `AISA एआई कानूनी — कोर्ट आर्गुमेंट दस्तावेज़
${"=".repeat(60)}
मामला: ${form.caseTitle || "N/A"}
मामला संख्या: ${form.caseNumber || "N/A"} | न्यायालय: ${form.courtName || "N/A"}
उत्पन्न तिथि: ${(/* @__PURE__ */ new Date()).toLocaleString("hi-IN")}
${"=".repeat(60)}

` : `AISA AI LEGAL — COURT ARGUMENT DOCUMENT
${"=".repeat(60)}
Case: ${form.caseTitle || "N/A"}
Case No: ${form.caseNumber || "N/A"} | Court: ${form.courtName || "N/A"}
Generated: ${(/* @__PURE__ */ new Date()).toLocaleString("en-IN")}
${"=".repeat(60)}

`;
    const blob = new Blob([header + displayOutput], { type: "application/msword;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `AISA_${cleanOutputLabel.replace(/\s+/g, "_")}_${(form.caseTitle || "Case").replace(/\s+/g, "_")}_${Date.now()}.doc`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    zt.success("DOCX downloaded!");
  };
  const handlePrint = () => {
    if (!displayOutput) {
      zt.error("Generate an argument first.");
      return;
    }
    const win = window.open("", "_blank");
    if (!win) {
      zt.error("Allow popups to print.");
      return;
    }
    const isHi = outputLang === "hi";
    const cleanOutputLabel = isHi ? HINDI_LABELS[outputLabel] || outputLabel : outputLabel;
    const titleText = isHi ? "कोर्ट आर्गुमेंट दस्तावेज़" : "COURT ARGUMENT DOCUMENT";
    const caseText = isHi ? "मामला" : "Case";
    const caseNoText = isHi ? "संख्या" : "No.";
    const dateText = isHi ? "दिनांक" : "Date";
    const dateStr = isHi ? (/* @__PURE__ */ new Date()).toLocaleDateString("hi-IN") : (/* @__PURE__ */ new Date()).toLocaleDateString("en-IN");
    const clean = displayOutput.replace(/\*\*/g, "").replace(/\*/g, "").replace(/#{1,3}\s*/g, "");
    win.document.write(`<!DOCTYPE html><html><head><meta charset="UTF-8"/><title>${cleanOutputLabel} — ${form.caseTitle}</title>
<link rel="preconnect" href="https://fonts.googleapis.com"/>
<link href="https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,400;0,700;1,400&family=Noto+Sans+Devanagari:wght@400;700&display=swap" rel="stylesheet"/>
<style>
  @page { margin: 25mm 20mm; }
  body { font-family: 'Noto Sans Devanagari', 'Noto Sans', Arial, sans-serif; font-size: 13pt; line-height: 1.9; color: #000; }
  h1 { font-size: 15pt; text-align: center; border-bottom: 2px solid #000; padding-bottom: 6px; margin-bottom: 12px; }
  .meta { font-size: 9pt; border-bottom: 1px solid #aaa; padding-bottom: 8px; margin-bottom: 16px; display: flex; justify-content: space-between; }
  .content { text-align: justify; white-space: pre-wrap; }
</style></head><body>
<h1>${titleText}</h1>
<div class="meta"><span><b>${caseText}:</b> ${form.caseTitle} | <b>${caseNoText}:</b> ${form.caseNumber}</span><span><b>${dateText}:</b> ${dateStr}</span></div>
<div class="content">${clean}</div>
<script>window.onload=()=>{window.print();setTimeout(()=>window.close(),1000);}<\/script>
</body></html>`);
    win.document.close();
  };
  const handleCopy = () => {
    if (!displayOutput) {
      zt.error("Generate an argument first.");
      return;
    }
    navigator.clipboard.writeText(displayOutput).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2e3);
      zt.success("Copied to clipboard!");
    });
  };
  const handleSaveToCase = async () => {
    if (!displayOutput) {
      zt.error("Generate an argument first.");
      return;
    }
    if (!caseId) {
      zt.error("No active case. Please open a case first.");
      return;
    }
    setSaving(true);
    const tid = zt.loading("Saving to case...");
    try {
      const entry = {
        id: `arg_${Date.now()}`,
        type: outputLabel,
        actionId: activeAction || "unknown",
        text: displayOutput,
        formSnapshot: {
          caseTitle: form.caseTitle,
          caseNumber: form.caseNumber,
          courtName: form.courtName,
          caseType: form.caseType,
          petitioner: form.petitioner,
          respondent: form.respondent,
          advocateName: form.advocateName,
          advocateSide: form.advocateSide,
          reliefs: form.reliefs
        },
        generatedAt: (/* @__PURE__ */ new Date()).toISOString()
      };
      let existing = [];
      try {
        const proj = await apiService.getProject(caseId);
        existing = (proj == null ? void 0 : proj.builtArguments) || (proj == null ? void 0 : proj.arguments_built) || [];
        if (!Array.isArray(existing)) existing = [];
      } catch {
        existing = [];
      }
      const updated = await apiService.updateProject(caseId, {
        builtArguments: [...existing, entry],
        lastArgumentBuiltAt: (/* @__PURE__ */ new Date()).toISOString()
      });
      zt.success("Argument saved to case!", { id: tid });
      if (onUpdateCase && updated) onUpdateCase(updated);
    } catch (err) {
      console.error("[BuildArgument] Save error:", err);
      zt.error("Failed to save. Check your connection.", { id: tid });
    } finally {
      setSaving(false);
    }
  };
  const addQuickProvision = (act) => {
    const emptyIdx = form.provisions.findIndex((p) => !p.act.trim());
    if (emptyIdx >= 0) {
      const next = form.provisions.map((p, i) => i === emptyIdx ? { ...p, act } : p);
      upd("provisions", next);
    } else {
      upd("provisions", [...form.provisions, { act, sections: "" }]);
    }
  };
  const strengthColor = (s) => s === "Strong" ? "text-emerald-600 bg-emerald-50 dark:bg-emerald-950/30 border-emerald-300 dark:border-emerald-800" : s === "Moderate" ? "text-amber-600 bg-amber-50 dark:bg-amber-950/30 border-amber-300 dark:border-amber-800" : "text-red-500 bg-red-50 dark:bg-red-950/30 border-red-300 dark:border-red-800";
  if (!isOpen) return null;
  const AutoFilledBadge = ({ field }) => prefillFields.has(field) ? /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1 px-2 py-0.5 bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-800/40 rounded-full text-[8px] font-black text-emerald-600 dark:text-emerald-400 uppercase tracking-wide ml-1.5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { size: 8 }),
    "Auto Filled"
  ] }) : null;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: isOpen && /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      className: "fixed inset-0 z-[200] bg-black/70 backdrop-blur-sm flex items-stretch justify-center sm:items-center sm:p-3 lg:p-4",
      onClick: (e) => e.target === e.currentTarget && onClose(),
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { scale: 0.96, opacity: 0, y: 20 },
          animate: { scale: 1, opacity: 1, y: 0 },
          exit: { scale: 0.95, opacity: 0, y: 10 },
          transition: { type: "spring", damping: 30, stiffness: 380 },
          className: "w-full sm:max-w-6xl bg-white dark:bg-[#0e1628] flex flex-col sm:rounded-3xl sm:max-h-[95vh] h-full sm:h-auto overflow-hidden shadow-2xl border border-slate-200/40 dark:border-white/5",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between px-5 py-4 bg-gradient-to-r from-violet-700 via-indigo-700 to-indigo-800 shrink-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-9 h-9 rounded-xl bg-white/15 flex items-center justify-center shadow-inner", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Scale, { size: 18, className: "text-white" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-base font-black text-white leading-none", children: "Build Argument" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-white/60 font-medium mt-0.5 uppercase tracking-widest", children: (currentCase == null ? void 0 : currentCase.name) ? `Case: ${currentCase.name}` : "Professional Court Document Wizard" })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                currentCase && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 text-white/80 text-[10px] font-bold", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" }),
                  "Case Linked"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    onClick: onClose,
                    className: "w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 16 })
                  }
                )
              ] })
            ] }),
            prefillBanner && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "shrink-0 flex items-center gap-3 px-5 py-2.5 bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-950/20 dark:to-teal-950/10 border-b border-emerald-200 dark:border-emerald-900/30", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { size: 13, className: "text-white" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs font-black text-emerald-700 dark:text-emerald-400 leading-none", children: [
                  "Case data loaded — ",
                  prefillBanner.count,
                  " fields auto-filled"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[9px] text-emerald-600/70 dark:text-emerald-500/60 font-medium mt-0.5 truncate", children: [
                  "From: ",
                  prefillBanner.caseTitle,
                  " • You can edit any field below"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  onClick: () => setPrefillBanner(null),
                  className: "p-1 hover:bg-emerald-100 dark:hover:bg-emerald-900/30 rounded-full text-emerald-500 shrink-0",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 13 })
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 overflow-hidden flex flex-col lg:flex-row min-h-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 overflow-y-auto custom-scrollbar lg:max-w-[58%] divide-y divide-slate-100 dark:divide-white/5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHdr, { n: "1", title: "Case Information", sub: "Core case identifiers", open: sec.s1, onToggle: () => tog("s1") }),
                  sec.s1 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 grid grid-cols-1 sm:grid-cols-2 gap-4", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sm:col-span-2 flex flex-col gap-1.5", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "text-[9px] font-black uppercase tracking-widest text-slate-500 dark:text-slate-400", children: [
                        "Case Title ",
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-red-500", children: "*" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(AutoFilledBadge, { field: "caseTitle" })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: `${inputCls} ${prefillFields.has("caseTitle") ? "border-emerald-300 dark:border-emerald-700/50 bg-emerald-50/30 dark:bg-emerald-950/10" : ""}`, value: f.caseTitle, onChange: (e) => upd("caseTitle", e.target.value), placeholder: "e.g. XYZ vs ABC" })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1.5", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "text-[9px] font-black uppercase tracking-widest text-slate-500 dark:text-slate-400", children: [
                        "Case Number",
                        /* @__PURE__ */ jsxRuntimeExports.jsx(AutoFilledBadge, { field: "caseNumber" })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: `${inputCls} ${prefillFields.has("caseNumber") ? "border-emerald-300 dark:border-emerald-700/50 bg-emerald-50/30 dark:bg-emerald-950/10" : ""}`, value: f.caseNumber, onChange: (e) => upd("caseNumber", e.target.value), placeholder: "CS(OS) 123/2024" })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1.5", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "text-[9px] font-black uppercase tracking-widest text-slate-500 dark:text-slate-400", children: [
                        "Court Name",
                        /* @__PURE__ */ jsxRuntimeExports.jsx(AutoFilledBadge, { field: "courtName" })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: `${inputCls} ${prefillFields.has("courtName") ? "border-emerald-300 dark:border-emerald-700/50 bg-emerald-50/30 dark:bg-emerald-950/10" : ""}`, value: f.courtName, onChange: (e) => upd("courtName", e.target.value), placeholder: "e.g. Delhi High Court" })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1.5", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "text-[9px] font-black uppercase tracking-widest text-slate-500 dark:text-slate-400", children: [
                        "Judge Name (Optional)",
                        /* @__PURE__ */ jsxRuntimeExports.jsx(AutoFilledBadge, { field: "judgeName" })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: `${inputCls} ${prefillFields.has("judgeName") ? "border-emerald-300 dark:border-emerald-700/50 bg-emerald-50/30 dark:bg-emerald-950/10" : ""}`, value: f.judgeName, onChange: (e) => upd("judgeName", e.target.value), placeholder: "Hon'ble Justice..." })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1.5", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "text-[9px] font-black uppercase tracking-widest text-slate-500 dark:text-slate-400", children: [
                        "Case Type",
                        /* @__PURE__ */ jsxRuntimeExports.jsx(AutoFilledBadge, { field: "caseType" })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { className: `${inputCls} ${prefillFields.has("caseType") ? "border-emerald-300 dark:border-emerald-700/50 bg-emerald-50/30 dark:bg-emerald-950/10" : ""}`, value: f.caseType, onChange: (e) => upd("caseType", e.target.value), children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "Select type..." }),
                        CASE_TYPES.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: t, children: t }, t))
                      ] })
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHdr, { n: "2", title: "Party Information", sub: "Parties & advocates", open: sec.s2, onToggle: () => tog("s2") }),
                  sec.s2 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 grid grid-cols-1 sm:grid-cols-2 gap-4", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1.5", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "text-[9px] font-black uppercase tracking-widest text-slate-500 dark:text-slate-400", children: [
                        "Petitioner / Plaintiff ",
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-red-500", children: "*" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(AutoFilledBadge, { field: "petitioner" })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: `${inputCls} ${prefillFields.has("petitioner") ? "border-emerald-300 dark:border-emerald-700/50 bg-emerald-50/30 dark:bg-emerald-950/10" : ""}`, value: f.petitioner, onChange: (e) => upd("petitioner", e.target.value), placeholder: "Full legal name" })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1.5", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "text-[9px] font-black uppercase tracking-widest text-slate-500 dark:text-slate-400", children: [
                        "Respondent / Defendant ",
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-red-500", children: "*" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(AutoFilledBadge, { field: "respondent" })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: `${inputCls} ${prefillFields.has("respondent") ? "border-emerald-300 dark:border-emerald-700/50 bg-emerald-50/30 dark:bg-emerald-950/10" : ""}`, value: f.respondent, onChange: (e) => upd("respondent", e.target.value), placeholder: "Full legal name" })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1.5", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "text-[9px] font-black uppercase tracking-widest text-slate-500 dark:text-slate-400", children: [
                        "Advocate Name",
                        /* @__PURE__ */ jsxRuntimeExports.jsx(AutoFilledBadge, { field: "advocateName" })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: `${inputCls} ${prefillFields.has("advocateName") ? "border-emerald-300 dark:border-emerald-700/50 bg-emerald-50/30 dark:bg-emerald-950/10" : ""}`, value: f.advocateName, onChange: (e) => upd("advocateName", e.target.value), placeholder: "Advocate / Sr. Advocate" })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1.5", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-[9px] font-black uppercase tracking-widest text-slate-500 dark:text-slate-400", children: "Advocate Side" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { className: inputCls, value: f.advocateSide, onChange: (e) => upd("advocateSide", e.target.value), children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "Select side..." }),
                        ADVOCATE_SIDES.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: s, children: s }, s))
                      ] })
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHdr, { n: "3", title: "Case Facts", sub: "Complete factual background", open: sec.s3, onToggle: () => tog("s3") }),
                  sec.s3 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "text-[9px] font-black uppercase tracking-widest text-slate-500 dark:text-slate-400 block mb-2", children: [
                      "Facts of the Case ",
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-red-500", children: "*" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(AutoFilledBadge, { field: "caseFacts" })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "textarea",
                      {
                        rows: 8,
                        value: f.caseFacts,
                        onChange: (e) => upd("caseFacts", e.target.value),
                        placeholder: "Enter complete facts of the case including dates, events, parties' actions, prior proceedings, previous orders, and all relevant background information...",
                        className: `${inputCls} resize-y min-h-[120px] leading-relaxed ${prefillFields.has("caseFacts") ? "border-emerald-300 dark:border-emerald-700/50 bg-emerald-50/30 dark:bg-emerald-950/10" : ""}`
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[9px] text-slate-400 mt-1.5", children: [
                      f.caseFacts.length,
                      " characters · More detail = better AI output"
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHdr, { n: "4", title: "Issues For Determination", sub: "Legal questions before the court", open: sec.s4, onToggle: () => tog("s4") }),
                  sec.s4 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 space-y-3", children: [
                    f.issues.map((issue, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-6 h-6 rounded-full bg-violet-100 dark:bg-violet-950/40 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] font-black text-violet-600", children: i + 1 }) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "input",
                        {
                          value: issue,
                          onChange: (e) => upd("issues", f.issues.map((x, idx) => idx === i ? e.target.value : x)),
                          placeholder: "e.g. Whether the contract dated ___ is legally valid?",
                          className: `${inputSmCls} flex-1 w-full`
                        }
                      ),
                      f.issues.length > 1 && /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "button",
                        {
                          onClick: () => upd("issues", f.issues.filter((_, idx) => idx !== i)),
                          className: "p-1.5 text-red-400 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-950/30 rounded-lg transition-colors shrink-0",
                          children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { size: 13 })
                        }
                      )
                    ] }, i)),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "button",
                      {
                        onClick: () => upd("issues", [...f.issues, ""]),
                        className: "flex items-center gap-2 text-xs font-black text-violet-600 hover:text-violet-700 uppercase tracking-widest px-2 py-1.5 rounded-lg hover:bg-violet-50 dark:hover:bg-violet-950/30 transition-colors",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { size: 13 }),
                          " Add Issue"
                        ]
                      }
                    )
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHdr, { n: "5", title: "Legal Provisions", sub: "Applicable acts and sections", open: sec.s5, onToggle: () => tog("s5") }),
                  sec.s5 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 space-y-3", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1.5 pb-2", children: PROVISIONS_QUICK.map((act) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "button",
                      {
                        onClick: () => addQuickProvision(act),
                        className: "text-[9px] font-bold px-2.5 py-1 rounded-full bg-violet-50 dark:bg-violet-950/30 text-violet-600 border border-violet-200 dark:border-violet-800 hover:bg-violet-100 transition-colors",
                        children: [
                          "+ ",
                          act
                        ]
                      },
                      act
                    )) }),
                    f.provisions.map((prov, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 items-center", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 grid grid-cols-2 gap-2", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "input",
                          {
                            value: prov.act,
                            onChange: (e) => upd("provisions", f.provisions.map((x, idx) => idx === i ? { ...x, act: e.target.value } : x)),
                            placeholder: "Act / Statute",
                            className: `${inputSmCls} w-full`
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "input",
                          {
                            value: prov.sections,
                            onChange: (e) => upd("provisions", f.provisions.map((x, idx) => idx === i ? { ...x, sections: e.target.value } : x)),
                            placeholder: "Section(s)",
                            className: `${inputSmCls} w-full`
                          }
                        )
                      ] }),
                      f.provisions.length > 1 && /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "button",
                        {
                          onClick: () => upd("provisions", f.provisions.filter((_, idx) => idx !== i)),
                          className: "p-1.5 text-red-400 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-950/30 rounded-lg transition-colors shrink-0",
                          children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { size: 13 })
                        }
                      )
                    ] }, i)),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "button",
                      {
                        onClick: () => upd("provisions", [...f.provisions, { act: "", sections: "" }]),
                        className: "flex items-center gap-2 text-xs font-black text-violet-600 hover:text-violet-700 uppercase tracking-widest px-2 py-1.5 rounded-lg hover:bg-violet-50 dark:hover:bg-violet-950/30 transition-colors",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { size: 13 }),
                          " Add Provision"
                        ]
                      }
                    )
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHdr, { n: "6", title: "Evidence", sub: "All supporting evidence", open: sec.s6, onToggle: () => tog("s6") }),
                  sec.s6 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 space-y-4", children: [
                    f.evidences.map((ev, i) => {
                      var _a;
                      return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border border-slate-200 dark:border-zinc-700 rounded-2xl overflow-hidden", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between px-4 py-2.5 bg-slate-50 dark:bg-zinc-800/40", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] font-black uppercase tracking-widest text-slate-500", children: [
                            "Evidence ",
                            i + 1
                          ] }),
                          f.evidences.length > 1 && /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "button",
                            {
                              onClick: () => upd("evidences", f.evidences.filter((_, idx) => idx !== i)),
                              className: "p-1 text-red-400 hover:text-red-600 transition-colors",
                              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { size: 12 })
                            }
                          )
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 space-y-2.5", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "input",
                            {
                              value: ev.title,
                              onChange: (e) => upd("evidences", f.evidences.map((x, idx) => idx === i ? { ...x, title: e.target.value } : x)),
                              placeholder: "Evidence Title / Document Name",
                              className: `${inputSmCls} w-full`
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "textarea",
                            {
                              rows: 2,
                              value: ev.description,
                              onChange: (e) => upd("evidences", f.evidences.map((x, idx) => idx === i ? { ...x, description: e.target.value } : x)),
                              placeholder: "Brief description of this evidence and its significance...",
                              className: `${inputCls} resize-none`
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: [{ icon: FileText, label: "Doc", accept: ".pdf,.doc,.docx,.txt" }, { icon: Image, label: "Image", accept: "image/*" }, { icon: Mic, label: "Audio", accept: "audio/*" }, { icon: Video, label: "Video", accept: "video/*" }].map(({ icon: Icon, label, accept }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex items-center gap-1.5 px-3 py-1.5 bg-white dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700 rounded-full text-[10px] font-bold text-slate-600 dark:text-slate-300 hover:border-violet-400 hover:text-violet-600 cursor-pointer transition-colors", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { size: 10 }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: label }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "file", accept, className: "hidden", onChange: (e) => {
                              const file = e.target.files[0];
                              if (file) {
                                upd("evidences", f.evidences.map((x, idx) => idx === i ? { ...x, files: [...x.files || [], { name: file.name, type: file.type, size: file.size }] } : x));
                                zt.success(`${file.name} attached`);
                              }
                            } })
                          ] }, label)) }),
                          ((_a = ev.files) == null ? void 0 : _a.length) > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1.5", children: ev.files.map((f2, fi) => /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1 px-2 py-1 bg-violet-50 dark:bg-violet-950/30 border border-violet-200 dark:border-violet-800 rounded-full text-[9px] font-bold text-violet-700", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { size: 8 }),
                            f2.name
                          ] }, fi)) })
                        ] })
                      ] }, i);
                    }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "button",
                      {
                        onClick: () => upd("evidences", [...f.evidences, { title: "", description: "", files: [] }]),
                        className: "flex items-center gap-2 text-xs font-black text-violet-600 hover:text-violet-700 uppercase tracking-widest px-2 py-1.5 rounded-lg hover:bg-violet-50 dark:hover:bg-violet-950/30 transition-colors",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { size: 13 }),
                          " Add Evidence"
                        ]
                      }
                    )
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHdr, { n: "7", title: "Case Laws / Precedents", sub: "Binding & persuasive authorities", open: sec.s7, onToggle: () => tog("s7") }),
                  sec.s7 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 space-y-3", children: [
                    f.caseLaws.map((cl, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border border-slate-200 dark:border-zinc-700 rounded-2xl p-4 space-y-2.5", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[9px] font-black uppercase tracking-widest text-violet-600", children: [
                          "Precedent ",
                          i + 1
                        ] }),
                        f.caseLaws.length > 1 && /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "button",
                          {
                            onClick: () => upd("caseLaws", f.caseLaws.filter((_, idx) => idx !== i)),
                            className: "p-1 text-red-400 hover:text-red-600 transition-colors",
                            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { size: 12 })
                          }
                        )
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "input",
                        {
                          value: cl.name,
                          onChange: (e) => upd("caseLaws", f.caseLaws.map((x, idx) => idx === i ? { ...x, name: e.target.value } : x)),
                          placeholder: "Case Name e.g. State of Maharashtra v. Mayer Hans George",
                          className: `${inputSmCls} w-full`
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "input",
                        {
                          value: cl.citation,
                          onChange: (e) => upd("caseLaws", f.caseLaws.map((x, idx) => idx === i ? { ...x, citation: e.target.value } : x)),
                          placeholder: "Citation e.g. AIR 1965 SC 722 / (2024) 3 SCC 456",
                          className: `${inputSmCls} w-full`
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "input",
                        {
                          value: cl.principle,
                          onChange: (e) => upd("caseLaws", f.caseLaws.map((x, idx) => idx === i ? { ...x, principle: e.target.value } : x)),
                          placeholder: "Principle / Ratio Decidendi established",
                          className: `${inputSmCls} w-full`
                        }
                      )
                    ] }, i)),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "button",
                      {
                        onClick: () => upd("caseLaws", [...f.caseLaws, { name: "", citation: "", principle: "" }]),
                        className: "flex items-center gap-2 text-xs font-black text-violet-600 hover:text-violet-700 uppercase tracking-widest px-2 py-1.5 rounded-lg hover:bg-violet-50 dark:hover:bg-violet-950/30 transition-colors",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { size: 13 }),
                          " Add Precedent"
                        ]
                      }
                    )
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHdr, { n: "8", title: "Main Arguments", sub: "Your primary legal arguments", open: sec.s8, onToggle: () => tog("s8") }),
                  sec.s8 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 space-y-4", children: [
                    f.arguments_.map((arg, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border border-slate-200 dark:border-zinc-700 rounded-2xl overflow-hidden", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between px-4 py-3 bg-gradient-to-r from-violet-50 to-indigo-50 dark:from-violet-950/30 dark:to-indigo-950/20 border-b border-slate-100 dark:border-white/5", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] font-black uppercase tracking-widest text-violet-600", children: [
                          "Argument ",
                          i + 1
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "select",
                            {
                              value: arg.strength,
                              onChange: (e) => upd("arguments_", f.arguments_.map((x, idx) => idx === i ? { ...x, strength: e.target.value } : x)),
                              className: `text-[10px] font-black px-2 py-1 rounded-full border cursor-pointer outline-none transition-colors ${strengthColor(arg.strength)}`,
                              children: STRENGTH_LEVELS.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: s, children: s }, s))
                            }
                          ),
                          f.arguments_.length > 1 && /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "button",
                            {
                              onClick: () => upd("arguments_", f.arguments_.filter((_, idx) => idx !== i)),
                              className: "p-1 text-red-400 hover:text-red-600 transition-colors",
                              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { size: 12 })
                            }
                          )
                        ] })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 space-y-3", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "input",
                          {
                            value: arg.heading,
                            onChange: (e) => upd("arguments_", f.arguments_.map((x, idx) => idx === i ? { ...x, heading: e.target.value } : x)),
                            placeholder: "Argument Heading / Title",
                            className: `${inputSmCls} w-full font-bold`
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "textarea",
                          {
                            rows: 4,
                            value: arg.detail,
                            onChange: (e) => upd("arguments_", f.arguments_.map((x, idx) => idx === i ? { ...x, detail: e.target.value } : x)),
                            placeholder: "Detailed legal argument — include reasoning, facts, and legal principles...",
                            className: `${inputCls} resize-none`
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-3 gap-2", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "input",
                            {
                              value: arg.evidence,
                              onChange: (e) => upd("arguments_", f.arguments_.map((x, idx) => idx === i ? { ...x, evidence: e.target.value } : x)),
                              placeholder: "Supporting Evidence",
                              className: `${inputSmCls} w-full text-xs`
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "input",
                            {
                              value: arg.provision,
                              onChange: (e) => upd("arguments_", f.arguments_.map((x, idx) => idx === i ? { ...x, provision: e.target.value } : x)),
                              placeholder: "Legal Provision",
                              className: `${inputSmCls} w-full text-xs`
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "input",
                            {
                              value: arg.judgment,
                              onChange: (e) => upd("arguments_", f.arguments_.map((x, idx) => idx === i ? { ...x, judgment: e.target.value } : x)),
                              placeholder: "Supporting Judgment",
                              className: `${inputSmCls} w-full text-xs`
                            }
                          )
                        ] })
                      ] })
                    ] }, i)),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "button",
                      {
                        onClick: () => upd("arguments_", [...f.arguments_, { heading: "", detail: "", evidence: "", provision: "", judgment: "", strength: "Strong" }]),
                        className: "flex items-center gap-2 text-xs font-black text-violet-600 hover:text-violet-700 uppercase tracking-widest px-2 py-1.5 rounded-lg hover:bg-violet-50 dark:hover:bg-violet-950/30 transition-colors",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { size: 13 }),
                          " Add Argument"
                        ]
                      }
                    )
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHdr, { n: "9", title: "Counter Arguments", sub: "Opponent arguments & rebuttals", open: sec.s9, onToggle: () => tog("s9") }),
                  sec.s9 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 space-y-4", children: [
                    f.counters.map((c, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border border-slate-200 dark:border-zinc-700 rounded-2xl p-4 space-y-3", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[9px] font-black uppercase tracking-widest text-red-500", children: [
                          "Counter ",
                          i + 1
                        ] }),
                        f.counters.length > 1 && /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "button",
                          {
                            onClick: () => upd("counters", f.counters.filter((_, idx) => idx !== i)),
                            className: "p-1 text-red-400 hover:text-red-600 transition-colors",
                            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { size: 12 })
                          }
                        )
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-[9px] font-black uppercase tracking-widest text-slate-400 block mb-1.5", children: "Opponent's Argument" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "textarea",
                          {
                            rows: 2,
                            value: c.opponent,
                            onChange: (e) => upd("counters", f.counters.map((x, idx) => idx === i ? { ...x, opponent: e.target.value } : x)),
                            placeholder: "What the opposing counsel will argue...",
                            className: `${inputCls} resize-none bg-red-50/40 dark:bg-red-950/10 border-red-200 dark:border-red-900/30 focus:border-red-400`
                          }
                        )
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-[9px] font-black uppercase tracking-widest text-slate-400 block mb-1.5", children: "Your Rebuttal" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "textarea",
                          {
                            rows: 2,
                            value: c.rebuttal,
                            onChange: (e) => upd("counters", f.counters.map((x, idx) => idx === i ? { ...x, rebuttal: e.target.value } : x)),
                            placeholder: "Your counter and legal reasoning...",
                            className: `${inputCls} resize-none bg-emerald-50/40 dark:bg-emerald-950/10 border-emerald-200 dark:border-emerald-900/30 focus:border-emerald-400`
                          }
                        )
                      ] })
                    ] }, i)),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "button",
                      {
                        onClick: () => upd("counters", [...f.counters, { opponent: "", rebuttal: "" }]),
                        className: "flex items-center gap-2 text-xs font-black text-violet-600 hover:text-violet-700 uppercase tracking-widest px-2 py-1.5 rounded-lg hover:bg-violet-50 dark:hover:bg-violet-950/30 transition-colors",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { size: 13 }),
                          " Add Counter"
                        ]
                      }
                    )
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHdr, { n: "10", title: "Relief Sought", sub: "Prayers to the Hon'ble Court", open: sec.s10, onToggle: () => tog("s10") }),
                  sec.s10 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-5", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-3 gap-2.5", children: RELIEF_OPTIONS.map((r) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "button",
                    {
                      onClick: () => upd("reliefs", f.reliefs.includes(r) ? f.reliefs.filter((x) => x !== r) : [...f.reliefs, r]),
                      className: `flex items-center gap-2 px-3 py-2.5 rounded-xl border text-xs font-bold text-left transition-all active:scale-95 ${f.reliefs.includes(r) ? "bg-violet-600 border-violet-600 text-white shadow-md shadow-violet-500/20" : "bg-white dark:bg-zinc-800/40 border-slate-200 dark:border-zinc-700 text-slate-600 dark:text-slate-400 hover:border-violet-400 hover:text-violet-600"}`,
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `w-4 h-4 rounded flex items-center justify-center shrink-0 ${f.reliefs.includes(r) ? "bg-white/20" : "bg-slate-100 dark:bg-zinc-700"}`, children: f.reliefs.includes(r) && /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { size: 10, className: "text-white" }) }),
                        r
                      ]
                    },
                    r
                  )) }) })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-8" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { ref: outputRef, className: "lg:w-[42%] flex flex-col border-t lg:border-t-0 lg:border-l border-slate-200 dark:border-white/5 bg-slate-50/80 dark:bg-[#060d1a]", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 border-b border-slate-200 dark:border-white/5 shrink-0", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-3", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { size: 13, className: "text-violet-500" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-black uppercase tracking-widest text-slate-500", children: "AI Generation Engine" }),
                    generating && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-auto text-[9px] font-bold text-violet-500 animate-pulse", children: "Processing..." })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-2", children: AI_ACTIONS.map((action) => {
                    const Icon = action.icon;
                    const isActive = activeAction === action.id && generating;
                    activeAction !== action.id || !generating;
                    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "button",
                      {
                        onClick: () => handleGenerate(action.id),
                        disabled: generating,
                        className: `flex items-center gap-3 px-3 py-3 rounded-2xl text-left transition-all active:scale-[0.98] group
                            ${isActive ? `bg-gradient-to-r ${action.grad} text-white shadow-lg` : "bg-white dark:bg-zinc-800/50 border border-slate-200 dark:border-zinc-700 text-slate-700 dark:text-slate-300 hover:border-violet-400 hover:shadow-sm disabled:opacity-40 disabled:cursor-not-allowed"}`,
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `w-8 h-8 rounded-xl flex items-center justify-center shrink-0 transition-all ${isActive ? "bg-white/20" : `bg-gradient-to-br ${action.grad} opacity-10 group-hover:opacity-100`}`, children: isActive ? /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { size: 14, className: "animate-spin text-white" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { size: 14, className: isActive ? "text-white" : `text-violet-600 group-hover:scale-110 transition-transform` }) }),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `text-[11px] font-black leading-tight ${isActive ? "text-white" : ""}`, children: action.label }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `text-[9px] mt-0.5 truncate ${isActive ? "text-white/70" : "text-slate-400"}`, children: action.desc })
                          ] })
                        ]
                      },
                      action.id
                    );
                  }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-2 mt-3 px-3 py-2.5 bg-amber-50 dark:bg-amber-950/20 rounded-xl border border-amber-200 dark:border-amber-800/40", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { size: 12, className: "text-amber-500 shrink-0 mt-0.5" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[9px] text-amber-700 dark:text-amber-400 font-semibold leading-relaxed", children: "Required: Case Title, Facts, Petitioner & Respondent names. More data = better AI output." })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 flex flex-col min-h-0", children: showOutput ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between px-4 py-2.5 border-b border-slate-200 dark:border-white/5 shrink-0 bg-white/50 dark:bg-black/20", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 min-w-0", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `w-2 h-2 rounded-full shrink-0 ${generating ? "bg-violet-500 animate-pulse" : "bg-emerald-500"}` }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-black uppercase tracking-widest text-slate-500 truncate", children: outputLabel })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                      !generating && output && /* @__PURE__ */ jsxRuntimeExports.jsx(
                        LanguageToggle,
                        {
                          lang: outputLang,
                          onChange: setOutputLang,
                          isTranslating: isOutputTranslating
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "button",
                        {
                          onClick: () => {
                            setShowOutput(false);
                            setOutput("");
                          },
                          className: "p-1 text-slate-400 hover:text-red-500 transition-colors shrink-0 ml-2",
                          children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 13 })
                        }
                      )
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 overflow-y-auto custom-scrollbar p-4 min-h-0", children: generating ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center justify-center h-full gap-5 py-10", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center shadow-2xl shadow-violet-500/30", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Brain, { size: 26, className: "text-white" }) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -inset-1 rounded-2xl bg-gradient-to-br from-violet-500/30 to-indigo-600/30 animate-ping" })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center space-y-1", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-black text-slate-700 dark:text-slate-200", children: outputLabel }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-slate-400", children: "AI is analyzing your case data..." }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[9px] text-slate-300 dark:text-slate-600", children: "This may take 15–30 seconds" })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-1.5", children: [0, 1, 2, 3, 4].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-1.5 h-1.5 rounded-full bg-violet-500 animate-bounce", style: { animationDelay: `${i * 100}ms` } }, i)) })
                  ] }) : output ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { id: "argument-rendered-output", children: /* @__PURE__ */ jsxRuntimeExports.jsx(RenderedOutput, { text: displayOutput }) }) : null }),
                  !generating && output && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-3 py-3 border-t border-slate-200 dark:border-white/5 shrink-0 bg-white/50 dark:bg-black/10", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[9px] font-black uppercase tracking-widest text-slate-400 mb-2", children: "Export & Save" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-1.5", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "button",
                        {
                          onClick: handleCopy,
                          className: `flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${copied ? "bg-emerald-500 text-white" : "bg-white dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700 text-slate-600 dark:text-slate-300 hover:border-violet-400"}`,
                          children: [
                            copied ? /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { size: 11 }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Copy, { size: 11 }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: copied ? "Copied!" : "Copy" })
                          ]
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "button",
                        {
                          onClick: handlePDF,
                          className: "flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold bg-white dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700 text-red-600 hover:border-red-400 transition-all",
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { size: 11 }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "PDF" })
                          ]
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "button",
                        {
                          onClick: handleDocx,
                          className: "flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold bg-white dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700 text-blue-600 hover:border-blue-400 transition-all",
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(FileDown, { size: 11 }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "DOCX" })
                          ]
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "button",
                        {
                          onClick: handlePrint,
                          className: "flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold bg-white dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700 text-slate-600 dark:text-slate-300 hover:border-violet-400 transition-all",
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(Printer, { size: 11 }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Print" })
                          ]
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "button",
                        {
                          onClick: handleSaveToCase,
                          disabled: saving || !caseId,
                          className: `flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${!caseId ? "bg-slate-100 dark:bg-zinc-800 text-slate-400 border border-slate-200 dark:border-zinc-700 cursor-not-allowed" : "bg-gradient-to-r from-violet-600 to-indigo-600 text-white hover:from-violet-700 hover:to-indigo-700 shadow-sm shadow-violet-500/20 disabled:opacity-50"}`,
                          title: !caseId ? "Open a case to enable Save to Case" : "Save to current case in database",
                          children: [
                            saving ? /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { size: 11, className: "animate-spin" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Save, { size: 11 }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: saving ? "Saving..." : "Save to Case" })
                          ]
                        }
                      )
                    ] }),
                    !caseId && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[9px] text-slate-400 mt-1.5", children: "Open a case from the dashboard to enable database save." })
                  ] })
                ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center justify-center h-full py-12 px-6 gap-4 text-center", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-500/10 to-indigo-500/10 border border-violet-200 dark:border-violet-800/40 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Scale, { size: 28, className: "text-violet-400" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-black text-slate-600 dark:text-slate-300", children: "AI Output Panel" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-slate-400 mt-1 leading-relaxed max-w-[200px] mx-auto", children: "Fill the form sections, then click any generation button above to produce a court-ready document." })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[9px] text-slate-300 dark:text-slate-600 font-medium", children: "PDF · DOCX · Print · Copy · Save to Case" })
                ] }) })
              ] })
            ] })
          ]
        }
      )
    }
  ) });
};
const OutputActionToolbar = ({
  msg,
  outputLang,
  setOutputLang,
  getDisplayText,
  translateText
}) => {
  const [copied, setCopied] = reactExports.useState(false);
  const [activeDownloadMenu, setActiveDownloadMenu] = reactExports.useState(false);
  const [activeShareMenu, setActiveShareMenu] = reactExports.useState(false);
  const handleCopy = () => {
    const resolved = getDisplayText(msg.content);
    navigator.clipboard.writeText(resolved);
    setCopied(true);
    setTimeout(() => setCopied(false), 2e3);
    zt.success("Copied to Clipboard");
  };
  const handleExportPDF = async () => {
    const resolved = getDisplayText(msg.content);
    const isHi = outputLang === "hi";
    const toastId = zt.loading(isHi ? "PDF तैयार किया जा रहा है..." : "Generating PDF...");
    try {
      const el = document.getElementById(`msg-content-${msg.id}`);
      await exportToPDF({
        element: el,
        text: resolved,
        title: isHi ? "AISA एआई कानूनी चैट रिपोर्ट" : "AISA AI Legal Chat Report",
        filename: "Legal_Chat_Report",
        lang: outputLang,
        meta: {
          [isHi ? "संदर्भ आईडी" : "Reference ID"]: msg.id,
          [isHi ? "उत्पन्न तिथि" : "Date Generated"]: (/* @__PURE__ */ new Date()).toLocaleString()
        }
      });
      zt.success(isHi ? "PDF सफलतापूर्वक निर्यात किया गया" : "PDF exported successfully", { id: toastId });
    } catch (e) {
      console.error(e);
      zt.error(isHi ? "PDF निर्यात विफल" : "Failed to export PDF", { id: toastId });
    }
  };
  const downloadFile = (type) => {
    const resolved = getDisplayText(msg.content);
    const blob = new Blob([resolved], { type: type === "doc" ? "application/msword" : "text/plain;charset=utf-8" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    const ext = type === "doc" ? ".doc" : ".txt";
    a.download = `courtroom_report_${Date.now()}${ext}`;
    a.click();
    URL.revokeObjectURL(a.href);
  };
  const handleShareEmail = () => {
    const resolved = getDisplayText(msg.content);
    const isHi = outputLang === "hi";
    window.open(`mailto:?subject=${encodeURIComponent(isHi ? "एआई कानूनी रिपोर्ट" : "AI Legal Report")}&body=${encodeURIComponent(resolved.slice(0, 2e3) + "\n\n...[Report Truncated]")}`);
  };
  const handleShareLink = () => {
    navigator.clipboard.writeText(window.location.href);
    zt.success("Share link copied to clipboard");
  };
  const handlePrint = () => {
    const resolved = getDisplayText(msg.content);
    const printWindow = window.open("", "_blank");
    if (!printWindow) {
      zt.error("Popup blocked! Please allow popups to print.");
      return;
    }
    const isHi = outputLang === "hi";
    const cleanHtml = `
      <html>
        <head>
          <title>${isHi ? "AISA कानूनी रिपोर्ट" : "AISA Legal Report"}</title>
          <style>
            body { font-family: 'Times New Roman', serif; padding: 40px; line-height: 1.6; color: #111; }
            h1 { text-align: center; font-size: 22px; border-bottom: 2px solid #000; padding-bottom: 12px; margin-bottom: 20px; }
            .content { font-size: 13.5px; white-space: pre-wrap; text-align: justify; }
          </style>
        </head>
        <body>
          <h1>${isHi ? "AISA कोर्ट-रेडी कानूनी रिपोर्ट" : "AISA COURT-READY LEGAL REPORT"}</h1>
          <div class="content">${resolved.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</div>
          <script>window.onload = function(){window.print(); window.close();}<\/script>
        </body>
      </html>`;
    printWindow.document.write(cleanHtml);
    printWindow.document.close();
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "legal-research-action-bar border-t border-slate-100 dark:border-white/5 mt-3 pt-3 flex flex-wrap items-center gap-x-3 gap-y-1.5 text-[11px] text-slate-500 dark:text-slate-400", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: handleCopy, className: "legal-research-action-btn flex items-center gap-1 font-bold hover:text-indigo-600 transition-colors", title: "Copy Response", children: [
      copied ? /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { size: 13 }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Copy, { size: 13 }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Copy Response" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-slate-200 dark:text-white/10 select-none", children: "|" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: handleExportPDF, className: "legal-research-action-btn flex items-center gap-1 font-bold hover:text-indigo-600 transition-colors", title: "Export PDF", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { size: 13 }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Export PDF" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-slate-200 dark:text-white/10 select-none", children: "|" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setActiveDownloadMenu((prev) => !prev), className: "legal-research-action-btn flex items-center gap-1 font-bold hover:text-indigo-600 transition-colors", title: "Download options", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { size: 13 }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Download" })
      ] }),
      activeDownloadMenu && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-10", onClick: () => setActiveDownloadMenu(false) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute left-0 bottom-full mb-2 z-20 w-32 rounded-lg bg-white dark:bg-[#1e293b] border border-slate-200/80 dark:border-white/10 shadow-xl p-1 flex flex-col gap-0.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => {
            downloadFile("txt");
            setActiveDownloadMenu(false);
          }, className: "w-full text-left px-2.5 py-1.5 text-[11px] font-bold text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-white/5 rounded-md transition-colors", children: "TXT Format" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => {
            downloadFile("doc");
            setActiveDownloadMenu(false);
          }, className: "w-full text-left px-2.5 py-1.5 text-[11px] font-bold text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-white/5 rounded-md transition-colors", children: "DOCX Format" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => {
            handleExportPDF();
            setActiveDownloadMenu(false);
          }, className: "w-full text-left px-2.5 py-1.5 text-[11px] font-bold text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-white/5 rounded-md transition-colors", children: "PDF Format" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-slate-200 dark:text-white/10 select-none", children: "|" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setActiveShareMenu((prev) => !prev), className: "legal-research-action-btn flex items-center gap-1 font-bold hover:text-indigo-600 transition-colors", title: "Share options", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Share2, { size: 13 }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Share Report" })
      ] }),
      activeShareMenu && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-10", onClick: () => setActiveShareMenu(false) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute left-0 bottom-full mb-2 z-20 w-38 rounded-lg bg-white dark:bg-[#1e293b] border border-slate-200/80 dark:border-white/10 shadow-xl p-1 flex flex-col gap-0.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => {
            handleShareEmail();
            setActiveShareMenu(false);
          }, className: "w-full text-left px-2.5 py-1.5 text-[11px] font-bold text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-white/5 rounded-md transition-colors", children: "Email Report" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => {
            handleShareLink();
            setActiveShareMenu(false);
          }, className: "w-full text-left px-2.5 py-1.5 text-[11px] font-bold text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-white/5 rounded-md transition-colors", children: "Copy Link" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => {
            handleExportPDF();
            setActiveShareMenu(false);
          }, className: "w-full text-left px-2.5 py-1.5 text-[11px] font-bold text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-white/5 rounded-md transition-colors", children: "Download PDF" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: handlePrint, className: "legal-research-action-btn flex items-center gap-1 font-bold hover:text-indigo-600 transition-colors", title: "Print Report", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Printer, { size: 13 }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Print" })
    ] })
  ] });
};
const renderLegalMarkdown = (text) => {
  if (!text) return null;
  const lines = text.split("\n");
  const elements = [];
  let i = 0;
  let listBuffer = [];
  let listType = null;
  const flushList = () => {
    if (!listBuffer.length) return;
    if (listType === "ol") {
      elements.push(
        /* @__PURE__ */ jsxRuntimeExports.jsx("ol", { style: { margin: "8px 0 12px 0", paddingLeft: "22px", lineHeight: "1.75" }, children: listBuffer.map((item, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "li",
          {
            style: { marginBottom: "4px", fontSize: "13.5px", color: "inherit" },
            dangerouslySetInnerHTML: { __html: inlineStyles(item) }
          },
          idx
        )) }, `ol-${i}`)
      );
    } else {
      elements.push(
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { style: { margin: "8px 0 12px 0", paddingLeft: "20px", lineHeight: "1.75", listStyleType: "disc" }, children: listBuffer.map((item, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "li",
          {
            style: { marginBottom: "4px", fontSize: "13.5px", color: "inherit" },
            dangerouslySetInnerHTML: { __html: inlineStyles(item) }
          },
          idx
        )) }, `ul-${i}`)
      );
    }
    listBuffer = [];
    listType = null;
  };
  const inlineStyles = (str) => {
    str = str.replace(/\*\*(.+?)\*\*/g, '<strong style="font-weight:700">$1</strong>');
    str = str.replace(/(?:\*|_)(.+?)(?:\*|_)/g, "<em>$1</em>");
    str = str.replace(/`(.+?)`/g, '<code style="background:rgba(99,102,241,0.08);padding:1px 5px;border-radius:4px;font-size:12px">$1</code>');
    return str;
  };
  while (i < lines.length) {
    const raw = lines[i];
    const line = raw.trimEnd();
    if (!line.trim()) {
      flushList();
      elements.push(/* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { height: "6px" } }, `br-${i}`));
      i++;
      continue;
    }
    if (/^---+$/.test(line.trim()) || /^\*\*\*+$/.test(line.trim())) {
      flushList();
      elements.push(
        /* @__PURE__ */ jsxRuntimeExports.jsx("hr", { style: { border: "none", borderTop: "1.5px solid rgba(99,102,241,0.18)", margin: "18px 0" } }, `hr-${i}`)
      );
      i++;
      continue;
    }
    if (/^# /.test(line)) {
      flushList();
      const content = line.replace(/^# /, "");
      elements.push(
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { style: {
          fontSize: "17px",
          fontWeight: "800",
          letterSpacing: "-0.3px",
          color: "inherit",
          margin: "20px 0 10px 0",
          paddingBottom: "8px",
          borderBottom: "2px solid rgba(99,102,241,0.25)",
          lineHeight: "1.35"
        }, dangerouslySetInnerHTML: { __html: inlineStyles(content) } }, `h1-${i}`)
      );
      i++;
      continue;
    }
    if (/^## /.test(line)) {
      flushList();
      const content = line.replace(/^## /, "");
      elements.push(
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { style: {
          fontSize: "14.5px",
          fontWeight: "800",
          color: "#4f46e5",
          margin: "16px 0 7px 0",
          letterSpacing: "0.1px",
          lineHeight: "1.4",
          textTransform: "none"
        }, dangerouslySetInnerHTML: { __html: inlineStyles(content) } }, `h2-${i}`)
      );
      i++;
      continue;
    }
    if (/^### /.test(line)) {
      flushList();
      const content = line.replace(/^### /, "");
      elements.push(
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { style: {
          fontSize: "13px",
          fontWeight: "700",
          color: "#6366f1",
          margin: "12px 0 5px 0",
          lineHeight: "1.4"
        }, dangerouslySetInnerHTML: { __html: inlineStyles(content) } }, `h3-${i}`)
      );
      i++;
      continue;
    }
    if (/^#### /.test(line)) {
      flushList();
      const content = line.replace(/^#### /, "");
      elements.push(
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { style: {
          fontSize: "12px",
          fontWeight: "700",
          color: "#7c3aed",
          margin: "10px 0 4px 0",
          lineHeight: "1.4"
        }, dangerouslySetInnerHTML: { __html: inlineStyles(content) } }, `h4-${i}`)
      );
      i++;
      continue;
    }
    if (/^[-*•] /.test(line.trimStart())) {
      if (listType !== "ul") {
        flushList();
        listType = "ul";
      }
      listBuffer.push(line.replace(/^\s*[-*•] /, ""));
      i++;
      continue;
    }
    if (/^\s*\d+\.\s/.test(line)) {
      if (listType !== "ol") {
        flushList();
        listType = "ol";
      }
      listBuffer.push(line.replace(/^\s*\d+\.\s*/, ""));
      i++;
      continue;
    }
    flushList();
    elements.push(
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: {
        margin: "0 0 8px 0",
        fontSize: "13.5px",
        lineHeight: "1.75",
        color: "inherit"
      }, dangerouslySetInnerHTML: { __html: inlineStyles(line) } }, `p-${i}`)
    );
    i++;
  }
  flushList();
  return elements;
};
const AiMessageWithLangToggle = ({ text, outputLang, getDisplayText, translateText, onLangChange, isLegalReport }) => {
  const [displayText, setDisplayText] = reactExports.useState(text);
  const [isTranslating, setIsTranslating] = reactExports.useState(false);
  const isMountedRef = reactExports.useRef(true);
  reactExports.useEffect(() => {
    isMountedRef.current = true;
    return () => {
      isMountedRef.current = false;
    };
  }, []);
  reactExports.useEffect(() => {
    if (outputLang === "en") setDisplayText(text);
  }, [text]);
  reactExports.useEffect(() => {
    if (outputLang === "en") {
      setDisplayText(text);
      return;
    }
    const cached = getDisplayText(text);
    if (cached && cached !== text) {
      setDisplayText(cached);
      return;
    }
    setIsTranslating(true);
    translateText(text).then((translated) => {
      if (isMountedRef.current) setDisplayText(translated);
      setIsTranslating(false);
    }).catch(() => {
      if (isMountedRef.current) setDisplayText(text);
      setIsTranslating(false);
    });
  }, [text, outputLang, getDisplayText, translateText]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-end gap-1.5 mb-2 shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      LanguageToggle,
      {
        lang: outputLang,
        onChange: onLangChange,
        isTranslating
      }
    ) }),
    isTranslating && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 text-[10px] font-bold text-indigo-500 mb-2 animate-pulse", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-2.5 h-2.5 border-2 border-indigo-500 border-t-transparent rounded-full animate-spin" }),
      "अनुवाद हो रहा है..."
    ] }),
    isLegalReport ? (
      /* ── Professional legal document renderer ── */
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `ab-legal-report select-text transition-opacity duration-200 ${isTranslating ? "opacity-50" : "opacity-100"}`, children: renderLegalMarkdown(displayText) })
    ) : (
      /* ── Plain welcome/system message renderer ── */
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `transition-opacity duration-200 ${isTranslating ? "opacity-50" : "opacity-100"} prose dark:prose-invert max-w-none text-xs sm:text-sm whitespace-pre-wrap select-text`, children: displayText })
    )
  ] });
};
const AiResponseCard = ({ msg }) => {
  const {
    outputLang,
    setOutputLang,
    getDisplayText,
    translateText
  } = useOutputLanguage("argument_builder_msg", msg.id);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      AiMessageWithLangToggle,
      {
        text: msg.content,
        outputLang,
        getDisplayText,
        translateText,
        onLangChange: setOutputLang,
        isLegalReport: !msg.isSystemLog
      }
    ),
    msg.role !== "user" && !msg.isSystemLog && /* @__PURE__ */ jsxRuntimeExports.jsx(
      OutputActionToolbar,
      {
        msg,
        outputLang,
        setOutputLang,
        getDisplayText,
        translateText
      }
    )
  ] });
};
const WORKFLOW_CATEGORIES = [
  {
    title: "AI COURTROOM SIMULATION",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Gavel, { size: 16, className: "text-indigo-600" }),
    items: [
      { name: "Cross-Examination Simulator", desc: "Generate targeted lines of questioning for opposing witnesses." },
      { name: "Witness Contradiction Finder", desc: "Expose contradictions in witness depositions." },
      { name: "Objection Assistant", desc: "Simulate courtroom objections and judicial responses." },
      { name: "Opposition Strategy Simulator", desc: "Forecast opposing counsel strategies and build defensive responses." }
    ]
  },
  {
    title: "CASE ANALYTICS",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(ChartNoAxesColumn, { size: 16, className: "text-indigo-600" }),
    items: [
      { name: "Winning Probability", desc: "Predict outcome based on case facts and active judge patterns." },
      { name: "Evidence Strength Auditor", desc: "Audit evidence admissibility and relevance scores." },
      { name: "Judicial Risk Forecast", desc: "Scan and calculate potential risk exposure in the active forum." }
    ]
  },
  {
    title: "LEGAL RESEARCH ENGINE",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Database, { size: 16, className: "text-indigo-600" }),
    items: [
      { name: "IPC & Statutory Interpretations", desc: "Explore IPC / BNS clauses and legal applicability." },
      { name: "Precedent Citation Finder", desc: "Search and link matching binding precedents." }
    ]
  },
  {
    title: "NEGOTIATION & MEDIATION",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Scale, { size: 16, className: "text-indigo-600" }),
    items: [
      { name: "Settlement Planner", desc: "Determine fair valuation terms and draft negotiation stances." },
      { name: "Mediation Roadmap Builder", desc: "Structure step-by-step mediation goals and fallback positions." }
    ]
  }
];
const ArgumentBuilder = ({ currentCase, onBack, theme, allProjects = [], onUpdateCase }) => {
  const [activeTab, setActiveTab] = reactExports.useState("assistant");
  const [messages, setMessages] = reactExports.useState([
    {
      id: "1",
      role: "model",
      content: "Welcome to **AISA Argument Intelligence**. I am your Elite Litigation Architect. Describe your case facts or select a courtroom workflow to build a winning strategy.",
      timestamp: Date.now(),
      isSystemLog: true
    }
  ]);
  const [inputValue, setInputValue] = reactExports.useState("");
  const [isGenerating, setIsGenerating] = reactExports.useState(false);
  const [isCreatingChat, setIsCreatingChat] = reactExports.useState(false);
  const [attachments, setAttachments] = reactExports.useState([]);
  const [isDragging, setIsDragging] = reactExports.useState(false);
  const messagesContainerRef = reactExports.useRef(null);
  const fileInputRef = reactExports.useRef(null);
  const [sessions, setSessions] = reactExports.useState([]);
  const [activeSessionId, setActiveSessionId] = reactExports.useState("");
  const [showHistoryPanel, setShowHistoryPanel] = reactExports.useState(false);
  const [showBuildArgument, setShowBuildArgument] = reactExports.useState(false);
  const [pinnedSessions, setPinnedSessions] = reactExports.useState([]);
  const [formEvent, setFormEvent] = reactExports.useState("");
  const [formDate, setFormDate] = reactExports.useState("");
  const [formDescription, setFormDescription] = reactExports.useState("");
  const [formWitnessName, setFormWitnessName] = reactExports.useState("");
  const [formWitnessType, setFormWitnessType] = reactExports.useState("Prosecution/Plaintiff");
  const [formMainArgs, setFormMainArgs] = reactExports.useState("");
  const [formCounterArgs, setFormCounterArgs] = reactExports.useState("");
  const [formOutcome, setFormOutcome] = reactExports.useState("");
  const [formNextStep, setFormNextStep] = reactExports.useState("");
  const [formWitnessQuestions, setFormWitnessQuestions] = reactExports.useState([""]);
  const [section1Expanded, setSection1Expanded] = reactExports.useState(true);
  const [section2Expanded, setSection2Expanded] = reactExports.useState(true);
  const getFileIcon = (type) => {
    if (!type) return /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { size: 14, className: "text-slate-400" });
    if (type.includes("pdf")) return /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { size: 14, className: "text-red-500" });
    if (type.includes("word") || type.includes("msword") || type.includes("officedocument.word")) return /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { size: 14, className: "text-blue-500" });
    if (type.startsWith("image/")) return /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { size: 14, className: "text-emerald-500" });
    if (type.includes("excel") || type.includes("officedocument.spreadsheet") || type.includes("csv")) return /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { size: 14, className: "text-green-600" });
    return /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { size: 14, className: "text-slate-400" });
  };
  const handleFilesAdded = async (filesList) => {
    const supportedTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      "image/jpeg",
      "image/jpg",
      "image/png",
      "image/webp",
      "text/plain",
      "text/csv",
      "application/vnd.ms-excel",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    ];
    for (let i = 0; i < filesList.length; i++) {
      const file = filesList[i];
      const ext = file.name.split(".").pop().toLowerCase();
      const isLegalExtension = ["pdf", "doc", "docx", "jpg", "jpeg", "png", "webp", "txt", "csv", "xls", "xlsx"].includes(ext);
      if (!supportedTypes.includes(file.type) && !isLegalExtension) {
        zt.error(`Unsupported file type: ${file.name}`);
        continue;
      }
      const id = Date.now().toString() + Math.random().toString(36).substring(2, 5);
      const newAtt = {
        id,
        name: file.name,
        type: file.type || `application/${ext}`,
        size: file.size,
        progress: 0,
        isUploading: true,
        dataUrl: ""
      };
      setAttachments((prev) => [...prev, newAtt]);
      const reader = new FileReader();
      reader.onload = async () => {
        const dataUrl = reader.result;
        setAttachments((prev) => prev.map((a) => a.id === id ? { ...a, dataUrl } : a));
        let progressVal = 0;
        const interval = setInterval(async () => {
          progressVal += 20;
          if (progressVal >= 100) {
            clearInterval(interval);
            setAttachments((prev) => prev.map((a) => a.id === id ? { ...a, progress: 100, isUploading: false } : a));
            await saveFileToCase({ name: file.name, type: file.type || `application/${ext}`, size: file.size, dataUrl });
          } else {
            setAttachments((prev) => prev.map((a) => a.id === id ? { ...a, progress: progressVal } : a));
          }
        }, 100);
      };
      reader.readAsDataURL(file);
    }
  };
  const handleFileSelect = (e) => {
    if (e.target.files) {
      handleFilesAdded(e.target.files);
    }
    e.target.value = "";
  };
  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleFilesAdded(e.dataTransfer.files);
    }
  };
  const removeAttachment = (id) => {
    setAttachments((prev) => prev.filter((a) => a.id !== id));
  };
  const saveFileToCase = async (fileObj) => {
    if (!currentCase || !currentCase._id) return;
    try {
      const newDoc = {
        id: Date.now().toString() + Math.random().toString(36).substring(2, 5),
        name: fileObj.name,
        type: fileObj.type || "file",
        size: fileObj.size,
        uploadedAt: (/* @__PURE__ */ new Date()).toISOString(),
        uri: fileObj.dataUrl
        // base64 URI
      };
      const existingDocs = currentCase.documents || [];
      const updatedDocs = [newDoc, ...existingDocs];
      const payload = {
        ...currentCase,
        documents: updatedDocs
      };
      const response = await apiService.updateProject(currentCase._id, payload);
      if (onUpdateCase) onUpdateCase(response);
    } catch (e) {
      console.error("Failed to sync file to case documents", e);
    }
  };
  reactExports.useEffect(() => {
    if (currentCase) {
      const data = currentCase.argumentsData || {};
      const dbSessions = data.sessions || [];
      const dbActiveSessionId = data.activeSessionId || "";
      const dbPinnedSessions = data.pinnedSessions || [];
      if (dbSessions.length > 0) {
        setSessions(dbSessions);
        setPinnedSessions(dbPinnedSessions);
        const activeId = dbActiveSessionId || dbSessions[0].id;
        setActiveSessionId(activeId);
        const activeSess = dbSessions.find((s) => s.id === activeId);
        if (activeSess) {
          setMessages(activeSess.messages);
        }
        return;
      }
      const storedSessions = localStorage.getItem(`@aisa_arg_sessions_${currentCase._id}`);
      let migratedSessions = [];
      let migratedActiveSessionId = "";
      let migratedPinnedSessions = [];
      if (storedSessions) {
        try {
          const parsed = JSON.parse(storedSessions);
          if (parsed && Array.isArray(parsed.sessions) && parsed.sessions.length > 0) {
            migratedSessions = parsed.sessions;
            migratedActiveSessionId = parsed.activeSessionId || parsed.sessions[0].id;
            migratedPinnedSessions = JSON.parse(localStorage.getItem("arg_builder_pinned_sessions") || "[]");
          }
        } catch (e) {
          console.error("Failed to parse local sessions", e);
        }
      }
      if (migratedSessions.length > 0) {
        setSessions(migratedSessions);
        setActiveSessionId(migratedActiveSessionId);
        setPinnedSessions(migratedPinnedSessions);
        const activeSess = migratedSessions.find((s) => s.id === migratedActiveSessionId);
        if (activeSess) {
          setMessages(activeSess.messages);
        }
        const payload2 = {
          ...currentCase,
          argumentsData: {
            sessions: migratedSessions,
            activeSessionId: migratedActiveSessionId,
            pinnedSessions: migratedPinnedSessions
          }
        };
        apiService.updateProject(currentCase._id, payload2).then((response) => {
          if (onUpdateCase) onUpdateCase(response);
          localStorage.removeItem(`@aisa_arg_sessions_${currentCase._id}`);
        }).catch((err) => console.error("Error migrating local sessions to DB", err));
        return;
      }
      const legacyChat = localStorage.getItem(`@aisa_arg_chat_${currentCase._id}`);
      const defaultMsgs = [
        {
          id: "1",
          role: "model",
          content: `Welcome to **AISA Argument Intelligence** for **${currentCase.name}**. I am your Elite Litigation Architect. Select a courtroom simulation to begin.`,
          timestamp: Date.now(),
          isSystemLog: true
        }
      ];
      const initialId = "sess_" + Date.now().toString(36) + Math.random().toString(36).substr(2, 5);
      let initialMsgs = defaultMsgs;
      let initialTitle = "Initial Conversation";
      if (legacyChat) {
        try {
          const parsedLegacy = JSON.parse(legacyChat);
          if (Array.isArray(parsedLegacy) && parsedLegacy.length > 0) {
            initialMsgs = parsedLegacy;
            const firstUser = parsedLegacy.find((m) => m.role === "user");
            if (firstUser) {
              initialTitle = firstUser.content.slice(0, 30) + (firstUser.content.length > 30 ? "..." : "");
            }
          }
        } catch (e) {
          console.error("Failed to migrate legacy chat history", e);
        }
      }
      const initialSession = {
        id: initialId,
        title: initialTitle,
        messages: initialMsgs,
        timestamp: Date.now()
      };
      setSessions([initialSession]);
      setActiveSessionId(initialId);
      setMessages(initialMsgs);
      const payload = {
        ...currentCase,
        argumentsData: {
          sessions: [initialSession],
          activeSessionId: initialId,
          pinnedSessions: []
        }
      };
      apiService.updateProject(currentCase._id, payload).then((response) => {
        if (onUpdateCase) onUpdateCase(response);
        if (legacyChat) {
          localStorage.removeItem(`@aisa_arg_chat_${currentCase._id}`);
        }
      }).catch((err) => console.error("Error saving initial session to DB", err));
    }
  }, [currentCase == null ? void 0 : currentCase._id]);
  const saveChatHistory = async (updatedMsgs) => {
    if (!currentCase || !activeSessionId) return;
    const updatedSessions = sessions.map((s) => {
      if (s.id === activeSessionId) {
        let title = s.title;
        if (s.title === "Initial Conversation" || s.title === "New Chat") {
          const firstUser = updatedMsgs.find((m) => m.role === "user");
          if (firstUser) {
            title = firstUser.content.slice(0, 30) + (firstUser.content.length > 30 ? "..." : "");
          }
        }
        return { ...s, title, messages: updatedMsgs };
      }
      return s;
    });
    setSessions(updatedSessions);
    try {
      const payload = {
        ...currentCase,
        argumentsData: {
          ...currentCase.argumentsData || {},
          sessions: updatedSessions,
          activeSessionId
        }
      };
      const response = await apiService.updateProject(currentCase._id, payload);
      if (onUpdateCase) onUpdateCase(response);
    } catch (err) {
      console.error("Failed to save chat history", err);
    }
  };
  const handleNewChat = async () => {
    setIsCreatingChat(true);
    if (!currentCase) {
      const defaultMsgs2 = [
        {
          id: "1",
          role: "model",
          content: "Welcome to **AISA Argument Intelligence**. I am your Elite Litigation Architect. Describe your case facts or select a courtroom workflow to build a winning strategy.",
          timestamp: Date.now(),
          isSystemLog: true
        }
      ];
      setMessages(defaultMsgs2);
      setInputValue("");
      setAttachments([]);
      setActiveSessionId("");
      setTimeout(() => {
        const chatInput = document.querySelector('input[placeholder="Describe case details or ask litigation questions..."]');
        if (chatInput) chatInput.focus();
      }, 100);
      setIsCreatingChat(false);
      return;
    }
    await saveChatHistory(messages);
    const caseName = currentCase.name || "AISA Argument Builder";
    const newSessionId = "sess_" + Date.now().toString(36) + Math.random().toString(36).substr(2, 5);
    const defaultMsgs = [
      {
        id: "1",
        role: "model",
        content: `Welcome to **AISA Argument Intelligence** for **${caseName}**. I am your Elite Litigation Architect. Describe your case facts or select a courtroom workflow to build a winning strategy.`,
        timestamp: Date.now(),
        isSystemLog: true
      }
    ];
    const newSession = {
      id: newSessionId,
      title: "New Chat",
      messages: defaultMsgs,
      timestamp: Date.now()
    };
    const updatedSessions = [newSession, ...sessions];
    setSessions(updatedSessions);
    setActiveSessionId(newSessionId);
    setMessages(defaultMsgs);
    setInputValue("");
    setAttachments([]);
    setIsGenerating(false);
    setActiveTab("assistant");
    setShowBuildArgument(false);
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop = 0;
    }
    try {
      const payload = {
        ...currentCase,
        argumentsData: {
          ...currentCase.argumentsData || {},
          sessions: updatedSessions,
          activeSessionId: newSessionId
        }
      };
      const response = await apiService.updateProject(currentCase._id, payload);
      if (onUpdateCase) onUpdateCase(response);
    } catch (err) {
      console.error("Failed to save new chat session", err);
    }
    setTimeout(() => {
      const chatInput = document.querySelector('input[placeholder="Describe case details or ask litigation questions..."]');
      if (chatInput) chatInput.focus();
    }, 100);
    setIsCreatingChat(false);
  };
  const handleSendMessage = async (customPrompt = null) => {
    var _a;
    const text = customPrompt || inputValue;
    if (!text.trim() && attachments.length === 0) return;
    const currentAttachments = [...attachments];
    setAttachments([]);
    const userMsg = {
      id: Date.now().toString(),
      role: "user",
      content: text,
      timestamp: Date.now(),
      attachments: currentAttachments.map((a) => ({ name: a.name, type: a.type }))
    };
    const newMsgs = [...messages, userMsg];
    setMessages(newMsgs);
    setInputValue("");
    setIsGenerating(true);
    try {
      let caseContext = "";
      if (currentCase) {
        caseContext = `
[Active Case Context]
Case Name: ${currentCase.name}
Client: ${currentCase.clientName || "N/A"}
Accused/Opponent: ${currentCase.accused || currentCase.opponentName || "N/A"}
Court: ${currentCase.courtName || "N/A"}
Summary/Facts: ${currentCase.summary || currentCase.caseSummary || currentCase.description || "N/A"}
`;
      }
      const systemPrompt = `You are AISA™ — an enterprise-grade AI Litigation Architect and courtroom strategy engine.

CRITICAL INSTRUCTION: For EVERY response, you MUST generate a complete, structured legal argument report using EXACTLY the 12-section format below. Never respond in plain chat style. Never skip any section. Never change the structure. Only the legal content changes based on the user's case.

If the user asks a quick question, interpret it as a case scenario and still produce the full structured report.

MANDATORY REPORT FORMAT (use Markdown headings and formatting exactly as shown):

# ⚖️ AISA ARGUMENT INTELLIGENCE REPORT

---

## 1. CASE OVERVIEW
- **Case Title:**
- **Petitioner / Plaintiff / Prosecution:**
- **Respondent / Defendant / Accused:**
- **Court / Tribunal / Forum:**
- **Case Type:** (Civil / Criminal / Corporate / Labour / Family / Property / Tax / Consumer / Constitutional / Arbitration / Banking / Cyber / IPR / Service / etc.)
- **Applicable Law / Jurisdiction:**
- **Relevant Acts / Sections / IPC / BNS:**
- **Date of Filing / Incident:**

---

## 2. FACTS OF THE CASE
[Concise numbered factual summary — what happened, when, who, where, how]

---

## 3. LEGAL ISSUES
[Numbered list of the core legal questions the court must decide]

---

## 4. APPLICABLE LAWS & STATUTORY PROVISIONS
[List each relevant Act, Section, Article, Rule, Regulation with a one-line explanation of its applicability]

---

## 5. RELEVANT JUDGMENTS / LANDMARK CASES
[List at least 3–5 binding or persuasive precedents with citation, year, court, and relevant holding]

---

## 6. ARGUMENTS FOR THE PETITIONER / PLAINTIFF / PROSECUTION
### 6.1 Primary Legal Arguments
### 6.2 Supporting Statutory Provisions
### 6.3 Supporting Case Law & Precedents

---

## 7. ARGUMENTS FOR THE RESPONDENT / DEFENDANT
### 7.1 Counter-Arguments
### 7.2 Supporting Statutory Provisions
### 7.3 Supporting Case Law & Precedents

---

## 8. EVIDENCE ANALYSIS
### 8.1 Available Evidence
### 8.2 Missing / Weak Evidence
### 8.3 Evidence Strength Assessment
### 8.4 Evidence Weakness Assessment

---

## 9. LEGAL STRATEGY
### 9.1 Best Litigation Strategy
### 9.2 Courtroom Approach
### 9.3 Procedural Recommendations

---

## 10. RISK ANALYSIS
- **Strengths:**
- **Weaknesses:**
- **Litigation Risks:**
- **Estimated Success Probability:** [X%] — [Brief rationale]

---

## 11. RECOMMENDED NEXT STEPS
[Numbered action items — what the lawyer/client should do immediately and over the next 30/60/90 days]

---

## 12. FINAL LEGAL OPINION
[Clear, authoritative legal opinion — conclusion, strongest argument, recommended relief sought, and likelihood of success]

---

FORMATTING RULES:
- Always use the exact section numbers and headings above.
- Use **bold** for all key legal terms, section numbers, case names, and party names.
- Use bullet points or numbered lists within sections.
- Keep language formal, precise, and litigation-ready.
- Preserve all IPC/BNS section numbers, case citations, dates, and evidence IDs exactly.
- If the user selects Hindi output, write every section in Hindi but keep legal citations (section numbers, case names, Acts) in English.
- Do not add extra sections. Do not remove any section. Do not change heading names.
- This is a court-ready document, not a chat message.`;
      const apiAttachments = currentAttachments.map((att) => {
        var _a2;
        return {
          url: att.dataUrl,
          name: att.name,
          type: ((_a2 = att.type) == null ? void 0 : _a2.startsWith("image/")) ? "image" : "document"
        };
      });
      let promptText = text;
      if (currentAttachments.length > 0) {
        const fileNames = currentAttachments.map((a) => a.name).join(", ");
        promptText = `[Attached Files: ${fileNames}]
${text || "Please analyze these files."}`;
      }
      const response = await generateChatResponse(
        newMsgs.filter((m) => !m.isSystemLog),
        promptText + (caseContext ? `

Context:
${caseContext}` : ""),
        systemPrompt,
        apiAttachments,
        "English",
        null,
        "legal"
      );
      let reply = "";
      if (typeof response === "string") {
        if (response.includes("trouble connecting") || response.includes("System Busy") || response.includes("Log In") || response.includes("System Message") || response.includes("System Error") || response.includes("LIMIT_REACHED")) {
          zt.error(response.replace("Sorry, ", "").replace("[Log In](/login) to your AISA™ account to continue chatting.", "Please log in to continue."), { duration: 4e3 });
          setIsGenerating(false);
          setMessages((prev) => prev.filter((m) => m.id !== userMsg.id));
          setInputValue(text);
          return;
        }
        reply = response;
      } else if (response == null ? void 0 : response.error) {
        const errMsg = response.message || "Something went wrong. Please try again.";
        zt.error(errMsg, { duration: 4e3 });
        setIsGenerating(false);
        setMessages((prev) => prev.filter((m) => m.id !== userMsg.id));
        setInputValue(text);
        return;
      } else {
        reply = (response == null ? void 0 : response.reply) || ((_a = response == null ? void 0 : response.data) == null ? void 0 : _a.reply) || (response == null ? void 0 : response.text) || "";
      }
      if (!reply) {
        zt.error("AI returned an empty response. Please try again.");
        setIsGenerating(false);
        setMessages((prev) => prev.filter((m) => m.id !== userMsg.id));
        setInputValue(text);
        return;
      }
      const aiMsg = {
        id: (Date.now() + 1).toString(),
        role: "model",
        content: reply,
        timestamp: Date.now()
      };
      const finalMsgs = [...newMsgs, aiMsg];
      setMessages(finalMsgs);
      saveChatHistory(finalMsgs);
    } catch (e) {
      console.error("[ArgumentBuilder] Send error:", e);
      zt.error("Failed to generate response. Please check your connection.");
      setMessages((prev) => prev.filter((m) => m.id !== userMsg.id));
      setInputValue(text);
    } finally {
      setIsGenerating(false);
    }
  };
  const handleSaveProceeding = async () => {
    if (!formEvent.trim()) {
      zt.error("Event/Proceeding Title is required");
      return;
    }
    if (!currentCase) {
      zt.error("An active case is required to save proceedings timeline.");
      return;
    }
    const tid = zt.loading("Syncing case timeline...");
    try {
      const newFact = {
        id: editingFactId || Date.now().toString(),
        event: formEvent,
        date: formDate || (/* @__PURE__ */ new Date()).toISOString(),
        description: formDescription,
        witnessName: formWitnessName,
        witnessType: formWitnessType,
        mainArgs: formMainArgs,
        counterArgs: formCounterArgs,
        outcome: formOutcome,
        nextStep: formNextStep,
        questions: formWitnessQuestions.filter((q) => q.trim() !== "")
      };
      const existingFacts = currentCase.facts || [];
      let updatedFacts;
      if (editingFactId) {
        updatedFacts = existingFacts.map((f) => f.id === editingFactId || f._id === editingFactId ? { ...f, ...newFact } : f);
      } else {
        updatedFacts = [...existingFacts, newFact];
      }
      const payload = {
        ...currentCase,
        facts: updatedFacts
      };
      const response = await apiService.updateProject(currentCase._id, payload);
      if (onUpdateCase) onUpdateCase(response);
      zt.success(editingFactId ? "Proceeding updated! ✅" : "Proceeding added to timeline! ✅", { id: tid });
      setFormEvent("");
      setFormDate("");
      setFormDescription("");
      setFormWitnessName("");
      setFormWitnessType("Prosecution/Plaintiff");
      setFormMainArgs("");
      setFormCounterArgs("");
      setFormOutcome("");
      setFormNextStep("");
      setFormWitnessQuestions([""]);
      setEditingFactId(null);
      setActiveTab("timeline");
    } catch (e) {
      zt.error("Failed to sync case facts", { id: tid });
    }
  };
  const handleEditFact = (fact) => {
    setEditingFactId(fact.id || fact._id);
    setFormEvent(fact.event || "");
    setFormDate(fact.date ? new Date(fact.date).toISOString().split("T")[0] : "");
    setFormDescription(fact.description || "");
    setFormWitnessName(fact.witnessName || "");
    setFormWitnessType(fact.witnessType || "Prosecution/Plaintiff");
    setFormMainArgs(fact.mainArgs || "");
    setFormCounterArgs(fact.counterArgs || "");
    setFormOutcome(fact.outcome || "");
    setFormNextStep(fact.nextStep || "");
    setFormWitnessQuestions(fact.questions && fact.questions.length > 0 ? fact.questions : [""]);
    setActiveTab("form");
  };
  const handleDeleteFact = async (factId) => {
    if (!currentCase) return;
    if (window.confirm("Are you sure you want to delete this event from the timeline?")) {
      const tid = zt.loading("Syncing case timeline...");
      try {
        const updatedFacts = (currentCase.facts || []).filter((f) => f.id !== factId && f._id !== factId);
        const payload = {
          ...currentCase,
          facts: updatedFacts
        };
        const response = await apiService.updateProject(currentCase._id, payload);
        if (onUpdateCase) onUpdateCase(response);
        zt.success("Event removed", { id: tid });
      } catch (e) {
        zt.error("Failed to delete event", { id: tid });
      }
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 flex flex-col w-full h-full min-h-0 bg-slate-50 dark:bg-transparent overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-white/5 bg-white/80 dark:bg-[#0B1020]/80 backdrop-blur-xl shrink-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: onBack,
              className: "p-2 hover:bg-slate-100 dark:hover:bg-zinc-800 rounded-full transition-colors",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { size: 20, className: "text-slate-600 dark:text-slate-400" })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-lg font-black text-slate-900 dark:text-white leading-none tracking-tight", children: "Argument Builder" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 mt-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] font-black text-indigo-500 uppercase tracking-widest", children: "COURTROOM INTELLIGENCE ACTIVE" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: () => setShowBuildArgument(true),
            className: "flex items-center gap-2 px-3 sm:px-4 py-2 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white text-xs font-black transition-all shadow-md shadow-violet-500/20 active:scale-95 shrink-0",
            title: "Build Argument",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Scale, { size: 15, className: "shrink-0" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline whitespace-nowrap", children: "Build Argument" })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 overflow-y-auto min-h-0 select-text relative", children: [
        activeTab === "assistant" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col h-full w-full bg-slate-50 dark:bg-transparent", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 overflow-y-auto p-6 space-y-6 custom-scrollbar", children: [
            messages.length === 1 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 space-y-6 w-full", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] mb-4", children: "⋄ PRESET SIMULATIONS & ENGINES" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full", children: WORKFLOW_CATEGORIES.map((cat) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white dark:bg-[#1A2540] rounded-3xl p-5 shadow-sm hover:-translate-y-1 hover:shadow-md hover:scale-[1.01] transition-all duration-300 flex flex-col h-[340px]", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-4 shrink-0", children: [
                  cat.icon,
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xs font-black tracking-widest text-indigo-600 uppercase", children: cat.title })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 gap-3 overflow-y-auto pr-1.5 custom-scrollbar flex-1", children: cat.items.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "button",
                  {
                    onClick: () => handleSendMessage(item.name),
                    className: "text-left p-3 bg-slate-50 dark:bg-[#131C31] hover:bg-indigo-50 dark:hover:bg-indigo-950/20 rounded-2xl transition-all group min-h-[56px] shrink-0 flex flex-col justify-center",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between w-full", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold text-slate-800 dark:text-white group-hover:text-indigo-600", children: item.name }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { size: 12, className: "text-slate-400 group-hover:text-indigo-600 group-hover:scale-110 transition-all shrink-0" })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-subtext font-semibold mt-1 leading-snug", children: item.desc })
                    ]
                  },
                  item.name
                )) })
              ] }, cat.title)) })
            ] }),
            messages.length > 1 && messages.map((msg, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `flex max-w-3xl ${msg.role === "user" ? "justify-end ml-auto" : "mr-auto"} gap-4`, children: [
              msg.role !== "user" && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center text-white text-xs font-black tracking-tighter shrink-0 shadow-md", children: "AI" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `p-5 rounded-3xl text-sm leading-relaxed break-words ${msg.role === "user" ? "bg-slate-100 dark:bg-[#1e293b] text-slate-900 dark:text-slate-100 rounded-tr-none shadow-sm" : "bg-white dark:bg-[#1A2540] border border-slate-200 dark:border-white/5 rounded-tl-none text-slate-800 dark:text-slate-200 shadow-sm"}`, children: [
                msg.attachments && msg.attachments.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2 mb-3", children: msg.attachments.map((att, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] font-bold ${msg.role === "user" ? "bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800" : "bg-slate-100 dark:bg-zinc-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-zinc-700"}`, children: [
                  getFileIcon(att.type),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "truncate max-w-[150px]", children: att.name })
                ] }, idx)) }),
                msg.role === "user" || msg.isSystemLog ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "prose dark:prose-invert max-w-none text-xs sm:text-sm whitespace-pre-wrap select-text", children: msg.content }) : /* @__PURE__ */ jsxRuntimeExports.jsx(AiResponseCard, { msg })
              ] })
            ] }, msg.id || i)),
            isGenerating && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mr-auto max-w-3xl", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center text-white text-xs font-black shrink-0 animate-pulse", children: "AI" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white dark:bg-[#1A2540] border border-slate-200 dark:border-white/5 p-4 rounded-3xl rounded-tl-none flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-indigo-500 animate-bounce", style: { animationDelay: "0ms" } }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-indigo-500 animate-bounce", style: { animationDelay: "150ms" } }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-indigo-500 animate-bounce", style: { animationDelay: "300ms" } })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full px-4 pb-2 flex justify-start shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              className: "ab-new-chat-inline",
              onClick: handleNewChat,
              disabled: isCreatingChat,
              title: "Start New Chat",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { size: 14 }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "New Chat" })
              ]
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              onDragOver: (e) => {
                e.preventDefault();
                setIsDragging(true);
              },
              onDragLeave: () => setIsDragging(false),
              onDrop: handleDrop,
              className: `ab-chat-input-area flex flex-col gap-2 transition-all ${isDragging ? "bg-indigo-50/20 dark:bg-indigo-950/20 border-indigo-500" : ""}`,
              children: [
                attachments.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2 p-2 max-h-[120px] overflow-y-auto pr-1 custom-scrollbar", children: attachments.map((att) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 px-3 py-1.5 bg-slate-50 dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700 rounded-full text-xs font-semibold", children: [
                  getFileIcon(att.type),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "truncate max-w-[150px] text-slate-700 dark:text-slate-200", children: att.name }),
                  att.isUploading ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 shrink-0", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] text-indigo-600 dark:text-indigo-400 font-bold animate-pulse", children: [
                      att.progress,
                      "%"
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-1.5 h-1.5 rounded-full bg-indigo-600 dark:bg-indigo-400 animate-ping" })
                  ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => removeAttachment(att.id), className: "text-slate-400 hover:text-red-500 transition-colors shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 14 }) })
                ] }, att.id)) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ab-chat-input-row", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "ab-chat-input-buttons", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      type: "button",
                      className: `ab-input-action-btn${attachments.length > 0 ? " active" : ""}`,
                      onClick: () => {
                        var _a;
                        return (_a = fileInputRef.current) == null ? void 0 : _a.click();
                      },
                      title: "Attach file (PDF, Word, Images, Legal Docs)",
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(Paperclip, { size: 18, style: { color: attachments.length > 0 ? "#4f46e5" : void 0 } })
                    }
                  ) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "input",
                    {
                      type: "file",
                      ref: fileInputRef,
                      multiple: true,
                      onChange: handleFileSelect,
                      accept: "image/*,.pdf,.doc,.docx,.txt,.csv,.xls,.xlsx",
                      style: { display: "none" }
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "form",
                    {
                      className: "ab-chat-input-form",
                      onSubmit: (e) => {
                        e.preventDefault();
                        handleSendMessage();
                      },
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "textarea",
                          {
                            placeholder: "Describe case details or ask litigation questions...",
                            value: inputValue,
                            onChange: (e) => {
                              setInputValue(e.target.value);
                              e.target.style.height = "auto";
                              e.target.style.height = `${Math.min(e.target.scrollHeight, 120)}px`;
                            },
                            onKeyDown: (e) => {
                              if (e.key === "Enter" && !e.shiftKey) {
                                e.preventDefault();
                                handleSendMessage();
                              }
                            },
                            rows: 1,
                            className: "ab-chat-input"
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "button",
                          {
                            type: "submit",
                            className: "ab-send-btn",
                            disabled: !inputValue.trim() && attachments.length === 0,
                            style: { backgroundColor: !inputValue.trim() && attachments.length === 0 ? "#94a3b8" : "#4f46e5" },
                            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { size: 16 })
                          }
                        )
                      ]
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "ab-safe-area-bottom" })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("style", { children: `
              /* ── Professional Legal Report Renderer ────────────────────── */
              .ab-legal-report {
                font-family: 'Inter', 'Segoe UI', system-ui, sans-serif;
                font-size: 13.5px;
                line-height: 1.75;
                color: #1e293b;
                max-width: 100%;
                word-break: break-word;
              }
              .dark .ab-legal-report {
                color: #e2e8f0;
              }
              .ab-legal-report h1 {
                font-size: 17px;
                font-weight: 800;
                letter-spacing: -0.3px;
                margin: 20px 0 10px 0;
                padding-bottom: 8px;
                border-bottom: 2px solid rgba(99,102,241,0.25);
                line-height: 1.35;
                color: inherit;
              }
              .ab-legal-report h2 {
                font-size: 14.5px;
                font-weight: 800;
                color: #4f46e5;
                margin: 18px 0 7px 0;
                letter-spacing: 0.1px;
                line-height: 1.4;
              }
              .dark .ab-legal-report h2 { color: #818cf8; }
              .ab-legal-report h3 {
                font-size: 13px;
                font-weight: 700;
                color: #6366f1;
                margin: 13px 0 5px 0;
                line-height: 1.4;
              }
              .dark .ab-legal-report h3 { color: #a5b4fc; }
              .ab-legal-report h4 {
                font-size: 12px;
                font-weight: 700;
                color: #7c3aed;
                margin: 10px 0 4px 0;
                line-height: 1.4;
              }
              .dark .ab-legal-report h4 { color: #c4b5fd; }
              .ab-legal-report p {
                margin: 0 0 8px 0;
                font-size: 13.5px;
                line-height: 1.75;
                color: inherit;
              }
              .ab-legal-report ul {
                margin: 8px 0 12px 0;
                padding-left: 20px;
                list-style-type: disc;
                line-height: 1.75;
              }
              .ab-legal-report ol {
                margin: 8px 0 12px 0;
                padding-left: 22px;
                line-height: 1.75;
              }
              .ab-legal-report li {
                margin-bottom: 4px;
                font-size: 13.5px;
                color: inherit;
              }
              .ab-legal-report strong { font-weight: 700; }
              .ab-legal-report em { font-style: italic; }
              .ab-legal-report hr {
                border: none;
                border-top: 1.5px solid rgba(99,102,241,0.18);
                margin: 18px 0;
              }
              .ab-legal-report code {
                background: rgba(99,102,241,0.08);
                padding: 1px 5px;
                border-radius: 4px;
                font-size: 12px;
                font-family: monospace;
              }
              /* ── Chat input area ────────────────────────────────── */
              .ab-chat-input-area {
                flex-shrink: 0;
                padding: 8px 12px 0px 12px;
                background: #ffffff;
                border-top: 1px solid rgba(0,0,0,0.06);
              }
              .dark .ab-chat-input-area {
                background: #1e293b;
                border-top-color: rgba(255,255,255,0.06);
              }
              .ab-chat-input-row {
                display: flex;
                align-items: flex-end;
                gap: 10px;
                width: 100%;
              }
              .ab-chat-input-buttons {
                display: flex;
                align-items: center;
                gap: 8px;
                flex-shrink: 0;
                margin-bottom: 4px;
              }
              .ab-input-action-btn {
                width: 38px;
                height: 38px;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                background: #f1f5f9;
                border: 1px solid rgba(0,0,0,0.06);
                color: #64748b;
                cursor: pointer;
                transition: all 0.2s ease;
                flex-shrink: 0;
              }
              .dark .ab-input-action-btn {
                background: #1e293b;
                border-color: rgba(255,255,255,0.06);
                color: #94a3b8;
              }
              .ab-input-action-btn:hover {
                color: #4f46e5;
                background: #e2e8f0;
                transform: scale(1.05);
              }
              .dark .ab-input-action-btn:hover {
                color: #818cf8;
                background: #334155;
              }
              .ab-input-action-btn.active {
                color: #4f46e5;
                background: rgba(79,70,229,0.1);
                border-color: rgba(79,70,229,0.2);
              }
              .dark .ab-input-action-btn.active {
                color: #818cf8;
                background: rgba(129,140,248,0.15);
                border-color: rgba(129,140,248,0.25);
              }
              .ab-chat-input-form {
                flex: 1;
                min-width: 0;
                display: flex;
                align-items: flex-end;
                gap: 6px;
                background: #f1f5f9;
                border-radius: 24px;
                padding: 6px 8px;
                border: 1px solid rgba(0,0,0,0.06);
                transition: border-color 0.2s;
              }
              .dark .ab-chat-input-form {
                background: #0f172a;
                border-color: rgba(255,255,255,0.06);
              }
              .ab-chat-input-form:focus-within {
                border-color: rgba(79,70,229,0.4);
              }
              .ab-new-chat-inline {
                display: flex;
                align-items: center;
                gap: 4px;
                padding: 5px 12px;
                border-radius: 20px;
                background: rgba(241,245,249,0.8);
                border: 1px solid rgba(0,0,0,0.08);
                color: #64748b;
                font-size: 11px;
                font-weight: 800;
                cursor: pointer;
                white-space: nowrap;
                flex-shrink: 0;
                text-transform: uppercase;
                letter-spacing: 0.5px;
                transition: all 0.2s;
                min-height: 34px;
                width: auto;
                height: auto;
              }
              .dark .ab-new-chat-inline {
                background: rgba(255,255,255,0.05);
                border-color: rgba(255,255,255,0.08);
                color: #94a3b8;
              }
              .ab-new-chat-inline:hover {
                background: rgba(79,70,229,0.1);
                border-color: rgba(79,70,229,0.3);
                color: #4f46e5;
              }
              .dark .ab-new-chat-inline:hover {
                background: rgba(129,140,248,0.1);
                border-color: rgba(129,140,248,0.3);
                color: #818cf8;
              }
              .ab-new-chat-inline:active { transform: scale(0.96); }
              .ab-chat-input {
                flex: 1;
                border: none;
                outline: none;
                background: transparent;
                font-size: 14px;
                line-height: 1.5;
                resize: none;
                color: #1e293b;
                min-height: 34px;
                max-height: 120px;
                padding: 6px 4px;
                font-family: inherit;
                overflow-y: auto;
              }
              .dark .ab-chat-input { color: #e2e8f0; }
              .ab-chat-input::placeholder { color: #94a3b8; }
              .dark .ab-chat-input::placeholder { color: #475569; }
              @media (max-width: 1023px) {
                .ab-chat-input { font-size: max(16px, 0.9rem) !important; }
              }
              .ab-send-btn {
                width: 34px;
                height: 34px;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                border: none;
                cursor: pointer;
                color: white;
                flex-shrink: 0;
                transition: all 0.2s;
              }
              .ab-send-btn:disabled { opacity: 0.4; cursor: not-allowed; }
              .ab-send-btn:not(:disabled):hover { transform: scale(1.05); }
              .ab-safe-area-bottom {
                height: env(safe-area-inset-bottom, 0px);
                flex-shrink: 0;
              }
              @media (max-width: 374px) {
                .ab-chat-input-area { padding: 5px 6px 0px; }
                .ab-chat-input-form { padding: 4px 6px; border-radius: 20px; }
                .ab-chat-input { font-size: 13px; min-height: 30px; }
                .ab-send-btn { width: 30px; height: 30px; }
                .ab-input-action-btn { width: 32px; height: 32px; }
                .ab-chat-input-buttons { gap: 4px; margin-bottom: 2px; }
                .ab-new-chat-inline span { display: none; }
                .ab-new-chat-inline { padding: 5px 6px; }
              }
              @media (min-width: 375px) and (max-width: 639px) {
                .ab-chat-input-area { padding: 6px 8px 0px; }
                .ab-input-action-btn { width: 34px; height: 34px; }
                .ab-chat-input-buttons { gap: 6px; margin-bottom: 3px; }
              }
              @media (min-width: 600px) and (max-width: 767px) {
                .ab-chat-input-area { padding: 8px 14px 0px; }
              }
              @media (min-width: 768px) {
                .ab-chat-input-area { padding: 10px 20px 0px; }
              }
              @media (min-width: 1280px) {
                .ab-chat-input-area { padding: 10px 24px 0px; }
              }
              @media (max-width: 1023px) and (orientation: landscape) and (max-height: 500px) {
                .ab-chat-input-area { padding: 4px 10px 0px; }
              }
            ` })
        ] }),
        activeTab === "timeline" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl mx-auto p-6 space-y-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-black text-slate-900 dark:text-white tracking-tight", children: "Court Proceedings Log" }),
          !currentCase || !currentCase.facts || currentCase.facts.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center justify-center py-20 border-2 border-dashed border-slate-200 dark:border-zinc-800 rounded-3xl text-center bg-white dark:bg-zinc-900/30", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(History, { size: 48, className: "text-slate-300 dark:text-zinc-700 mb-4" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-sm font-black text-slate-400 uppercase tracking-widest", children: "No court events scheduled" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-subtext mt-1 max-w-[200px] font-semibold", children: "Track witness depositions, cross-examinations, and legal timelines here." })
          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative pl-6 space-y-6 before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-[2px] before:bg-indigo-100 dark:before:bg-zinc-800", children: currentCase.facts.map((fact) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative group", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-[-23px] top-1.5 w-3 h-3 rounded-full bg-indigo-600 border-4 border-slate-50 dark:border-zinc-900 shadow-sm" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white dark:bg-[#1A2540] border border-slate-200 dark:border-white/5 rounded-3xl p-6 shadow-sm hover:shadow-md transition-all", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-start mb-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-base font-black text-slate-900 dark:text-white leading-tight", children: fact.event }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { size: 12 }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: new Date(fact.date).toLocaleDateString() })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      onClick: () => handleEditFact(fact),
                      className: "p-2 hover:bg-slate-100 dark:hover:bg-zinc-800 rounded-lg text-slate-500 hover:text-indigo-600",
                      title: "Edit Event",
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(Pen, { size: 14 })
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      onClick: () => handleDeleteFact(fact.id || fact._id),
                      className: "p-2 hover:bg-red-50 dark:hover:bg-red-950/20 rounded-lg text-red-500",
                      title: "Delete Event",
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { size: 14 })
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-slate-600 dark:text-slate-300 leading-relaxed", children: fact.description }),
              fact.witnessName && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 pt-4 border-t border-slate-100 dark:border-white/5 grid grid-cols-2 gap-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[8px] font-black text-indigo-500 uppercase tracking-widest", children: "Presiding Witness" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-bold text-slate-800 dark:text-slate-200 mt-1", children: fact.witnessName }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] text-subtext font-semibold uppercase", children: fact.witnessType })
                ] }),
                fact.outcome && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[8px] font-black text-indigo-500 uppercase tracking-widest", children: "Judicial Outcome" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-bold text-slate-800 dark:text-slate-200 mt-1", children: fact.outcome })
                ] })
              ] })
            ] })
          ] }, fact.id || fact._id)) })
        ] }),
        activeTab === "form" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl mx-auto p-6 space-y-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white dark:bg-[#1A2540] border border-slate-200 dark:border-white/5 rounded-[28px] p-6 shadow-md", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-black text-slate-900 dark:text-white tracking-tight", children: editingFactId ? "Edit Event Details" : "Add Courtroom Proceeding / Fact" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-subtext mt-1 font-semibold", children: "File trial happenings, arguments, and testimonies into the litigation roadmap." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-[9px] font-black uppercase tracking-widest text-slate-500", children: "Proceeding Title *" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    type: "text",
                    placeholder: "e.g. Cross Examination of Opponent",
                    value: formEvent,
                    onChange: (e) => setFormEvent(e.target.value),
                    className: "bg-white dark:bg-[#1A2540] border border-slate-200 dark:border-white/5 rounded-xl px-4 py-3 text-sm font-semibold outline-none text-slate-800 dark:text-white focus:ring-2 focus:ring-indigo-500/20"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-[9px] font-black uppercase tracking-widest text-slate-500", children: "Date *" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    type: "date",
                    value: formDate,
                    onChange: (e) => setFormDate(e.target.value),
                    className: "bg-white dark:bg-[#1A2540] border border-slate-200 dark:border-white/5 rounded-xl px-4 py-3 text-sm font-semibold outline-none text-slate-800 dark:text-white focus:ring-2 focus:ring-indigo-500/20"
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-[9px] font-black uppercase tracking-widest text-slate-500", children: "Brief Overview / Factual Log" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "textarea",
                {
                  rows: 3,
                  placeholder: "Record summary details...",
                  value: formDescription,
                  onChange: (e) => setFormDescription(e.target.value),
                  className: "bg-white dark:bg-[#1A2540] border border-slate-200 dark:border-white/5 rounded-xl px-4 py-3 text-sm font-medium outline-none text-slate-800 dark:text-white focus:ring-2 focus:ring-indigo-500/20 resize-none"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border border-slate-200 dark:border-white/5 rounded-3xl overflow-hidden bg-white dark:bg-[#1A2540]", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  type: "button",
                  onClick: () => setSection1Expanded(!section1Expanded),
                  className: "w-full flex items-center justify-between px-5 py-4 bg-slate-50 dark:bg-zinc-900/50 border-b border-slate-200/50 dark:border-zinc-800",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-black uppercase tracking-widest text-slate-700 dark:text-slate-300", children: "Section 1: Witness Examination" }),
                    section1Expanded ? /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronUp, { size: 16 }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { size: 16 })
                  ]
                }
              ),
              section1Expanded && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-5 space-y-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-[8px] font-black uppercase tracking-widest text-slate-400", children: "Witness Name" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "input",
                    {
                      type: "text",
                      placeholder: "e.g. Dr. K. Sen",
                      value: formWitnessName,
                      onChange: (e) => setFormWitnessName(e.target.value),
                      className: "bg-slate-50 dark:bg-black/20 border border-slate-200 dark:border-zinc-800 rounded-xl px-4 py-3.5 text-xs font-bold outline-none text-slate-800 dark:text-white"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-[8px] font-black uppercase tracking-widest text-slate-400", children: "Affiliation" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "select",
                    {
                      value: formWitnessType,
                      onChange: (e) => setFormWitnessType(e.target.value),
                      className: "bg-slate-50 dark:bg-black/20 border border-slate-200 dark:border-zinc-800 rounded-xl px-4 py-3.5 text-xs font-bold outline-none text-slate-800 dark:text-white",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Prosecution/Plaintiff", children: "Prosecution/Plaintiff" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Defense/Respondent", children: "Defense/Respondent" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Expert Witness", children: "Expert Witness" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Official/Third Party", children: "Official/Third Party" })
                      ]
                    }
                  )
                ] })
              ] }) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border border-slate-200 dark:border-white/5 rounded-3xl overflow-hidden bg-white dark:bg-[#1A2540]", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  type: "button",
                  onClick: () => setSection2Expanded(!section2Expanded),
                  className: "w-full flex items-center justify-between px-5 py-4 bg-slate-50 dark:bg-zinc-900/50 border-b border-slate-200/50 dark:border-zinc-800",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-black uppercase tracking-widest text-slate-700 dark:text-slate-300", children: "Section 2: Arguments & Outcomes" }),
                    section2Expanded ? /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronUp, { size: 16 }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { size: 16 })
                  ]
                }
              ),
              section2Expanded && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 space-y-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1.5", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-[8px] font-black uppercase tracking-widest text-slate-400", children: "Our Primary Arguments" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "textarea",
                      {
                        rows: 3,
                        placeholder: "Points structured...",
                        value: formMainArgs,
                        onChange: (e) => setFormMainArgs(e.target.value),
                        className: "bg-slate-50 dark:bg-black/20 border border-slate-200 dark:border-zinc-800 rounded-xl px-4 py-3 text-xs font-medium outline-none text-slate-800 dark:text-white resize-none"
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1.5", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-[8px] font-black uppercase tracking-widest text-slate-400", children: "Counterpoints / Rebuttals" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "textarea",
                      {
                        rows: 3,
                        placeholder: "Opposition points challenge...",
                        value: formCounterArgs,
                        onChange: (e) => setFormCounterArgs(e.target.value),
                        className: "bg-slate-50 dark:bg-black/20 border border-slate-200 dark:border-zinc-800 rounded-xl px-4 py-3 text-xs font-medium outline-none text-slate-800 dark:text-white resize-none"
                      }
                    )
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1.5", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-[8px] font-black uppercase tracking-widest text-slate-400", children: "Hearing Outcome Summary" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "input",
                      {
                        type: "text",
                        placeholder: "e.g. Adjourned to next month",
                        value: formOutcome,
                        onChange: (e) => setFormOutcome(e.target.value),
                        className: "bg-slate-50 dark:bg-black/20 border border-slate-200 dark:border-zinc-800 rounded-xl px-4 py-3.5 text-xs font-bold outline-none text-slate-800 dark:text-white"
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1.5", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-[8px] font-black uppercase tracking-widest text-slate-400", children: "Next Strategic Step" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "input",
                      {
                        type: "text",
                        placeholder: "e.g. Gather document affidavits",
                        value: formNextStep,
                        onChange: (e) => setFormNextStep(e.target.value),
                        className: "bg-slate-50 dark:bg-black/20 border border-slate-200 dark:border-zinc-800 rounded-xl px-4 py-3.5 text-xs font-bold outline-none text-slate-800 dark:text-white"
                      }
                    )
                  ] })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: handleSaveProceeding,
                className: "w-full py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl font-black text-sm uppercase tracking-wider transition-all active:scale-95 shadow-lg shadow-indigo-500/20",
                children: editingFactId ? "Update Proceeding event" : "Save Proceeding to Case timeline"
              }
            )
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      BuildArgumentModal,
      {
        isOpen: showBuildArgument,
        onClose: () => setShowBuildArgument(false),
        currentCase,
        onUpdateCase
      }
    )
  ] });
};
export {
  ArgumentBuilder as default
};
