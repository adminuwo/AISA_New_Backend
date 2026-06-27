import { c as createLucideIcon, r as reactExports, cj as chatStorageService, j as jsxRuntimeExports, O as ArrowLeft, t as Scale, c2 as History, ck as MessageSquare, A as AnimatePresence, m as motion, W as Plus, X, cd as Paperclip, o as Send, v as Search, bU as Landmark, d as Calendar, c3 as ChevronUp, ai as ChevronDown, e as ChevronRight, cg as ShieldAlert, bX as ChevronLeft, bY as Copy, z as zt, T as Trash2, F as FileText, c9 as Image, bV as useOutputLanguage, a0 as Check, b_ as Download, bZ as Share2, c8 as generateChatResponse, a as apiService, c4 as LanguageToggle, am as Markdown, cl as remarkGfm } from "./index-CifJr-sK.js";
import { e as exportToPDF } from "./exportToPDF-viLPZRMJ.js";
import { P as Printer } from "./printer-ZcOkpCIc.js";
/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  ["path", { d: "M12 17v5", key: "bb1du9" }],
  ["path", { d: "M15 9.34V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H7.89", key: "znwnzq" }],
  ["path", { d: "m2 2 20 20", key: "1ooewy" }],
  [
    "path",
    {
      d: "M9 9v1.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h11",
      key: "c9qhm2"
    }
  ]
];
const PinOff = createLucideIcon("PinOff", __iconNode$2);
/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["path", { d: "M12 17v5", key: "bb1du9" }],
  [
    "path",
    {
      d: "M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z",
      key: "1nkz8b"
    }
  ]
];
const Pin = createLucideIcon("Pin", __iconNode$1);
/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["line", { x1: "21", x2: "14", y1: "4", y2: "4", key: "obuewd" }],
  ["line", { x1: "10", x2: "3", y1: "4", y2: "4", key: "1q6298" }],
  ["line", { x1: "21", x2: "12", y1: "12", y2: "12", key: "1iu8h1" }],
  ["line", { x1: "8", x2: "3", y1: "12", y2: "12", key: "ntss68" }],
  ["line", { x1: "21", x2: "16", y1: "20", y2: "20", key: "14d8ph" }],
  ["line", { x1: "12", x2: "3", y1: "20", y2: "20", key: "m0wm8r" }],
  ["line", { x1: "14", x2: "14", y1: "2", y2: "6", key: "14e1ph" }],
  ["line", { x1: "8", x2: "8", y1: "10", y2: "14", key: "1i6ji0" }],
  ["line", { x1: "16", x2: "16", y1: "18", y2: "22", key: "1lctlv" }]
];
const SlidersHorizontal = createLucideIcon("SlidersHorizontal", __iconNode);
const LEGAL_CASE_DATABASE = [
  {
    id: "civil_law",
    name: "Specific Performance of Contract",
    category: "Civil Law",
    courtType: "District Court / High Court",
    jurisdiction: "State Jurisdiction",
    applicableActs: [
      { name: "Specific Relief Act", enactmentYear: "1963", lastAmendmentYear: "2018" },
      { name: "Code of Civil Procedure", enactmentYear: "1908", lastAmendmentYear: "2002" }
    ],
    ipcBnsReferences: [],
    landmarkJudgments: [
      {
        caseName: "Adhunik Steels Ltd. v. Orissa Manganese and Minerals Pvt. Ltd.",
        court: "Supreme Court of India",
        year: "2007",
        citation: "AIR 2007 SC 2563",
        legalPrinciple: "Injunctions under the Specific Relief Act should follow settled principles of the Code of Civil Procedure.",
        landmarkStatus: true
      }
    ],
    summary: "Civil dispute seeking execution of contract terms and specific performance where monetary compensation is inadequate.",
    keywords: ["specific performance", "civil contract", "specific relief", "injunction", "breach of contract"]
  },
  {
    id: "criminal_law",
    name: "Culpable Homicide and Murder",
    category: "Criminal Law",
    courtType: "Sessions Court / High Court",
    jurisdiction: "State Jurisdiction",
    applicableActs: [
      { name: "Code of Criminal Procedure (CrPC)", enactmentYear: "1973", lastAmendmentYear: "2018" },
      { name: "Indian Penal Code (IPC) / Bharatiya Nyaya Sanhita (BNS)", enactmentYear: "1860 / 2023", lastAmendmentYear: "2023" }
    ],
    ipcBnsReferences: [
      {
        ipcSection: "Section 302",
        bnsSection: "Section 103",
        punishment: "Death penalty or imprisonment for life, and liability to fine.",
        applicability: "Murder cases where intention and knowledge of causing death are proved."
      },
      {
        ipcSection: "Section 300",
        bnsSection: "Section 101",
        punishment: "Definition of Murder.",
        applicability: "Establishes acts amounting to murder and exceptions."
      }
    ],
    landmarkJudgments: [
      {
        caseName: "Bachan Singh v. State of Punjab",
        court: "Supreme Court of India",
        year: "1980",
        citation: "AIR 1980 SC 898",
        legalPrinciple: "Established the 'rarest of rare cases' doctrine for awarding death sentence in murder cases.",
        landmarkStatus: true
      },
      {
        caseName: "K.M. Nanavati v. State of Maharashtra",
        court: "Supreme Court of India",
        year: "1961",
        citation: "AIR 1962 SC 605",
        legalPrinciple: "Defined gravity and sudden provocation in cases of culpable homicide.",
        landmarkStatus: true
      }
    ],
    summary: "Prosecution for commission of murder, homicide definitions, and statutory punishments under criminal code.",
    keywords: ["murder", "homicide", "death penalty", "bns 103", "ipc 302", "criminal offense"]
  },
  {
    id: "constitutional_law",
    name: "Right to Privacy under Article 21",
    category: "Constitutional Law",
    courtType: "High Court / Supreme Court",
    jurisdiction: "Union of India",
    applicableActs: [
      { name: "Constitution of India", enactmentYear: "1950", lastAmendmentYear: "2023" }
    ],
    ipcBnsReferences: [],
    landmarkJudgments: [
      {
        caseName: "K.S. Puttaswamy v. Union of India",
        court: "Supreme Court of India",
        year: "2017",
        citation: "(2017) 10 SCC 1",
        legalPrinciple: "Right to privacy is a fundamental right under Article 21 of the Constitution.",
        landmarkStatus: true
      },
      {
        caseName: "Kesavananda Bharati v. State of Kerala",
        court: "Supreme Court of India",
        year: "1973",
        citation: "AIR 1973 SC 1461",
        legalPrinciple: "Established the 'Basic Structure Doctrine' limiting amendments to the Constitution.",
        landmarkStatus: true
      }
    ],
    summary: "Constitutional writ petition enforcement, violation of fundamental rights, and interpretation of state powers.",
    keywords: ["fundamental rights", "privacy", "article 21", "basic structure", "writ petition"]
  },
  {
    id: "family_law",
    name: "Restitution of Conjugal Rights and Maintenance",
    category: "Family Law",
    courtType: "Family Court / High Court",
    jurisdiction: "State Jurisdiction",
    applicableActs: [
      { name: "Hindu Marriage Act", enactmentYear: "1955", lastAmendmentYear: "2015" },
      { name: "Special Marriage Act", enactmentYear: "1954", lastAmendmentYear: "2015" },
      { name: "Indian Christian Marriage Act", enactmentYear: "1872", lastAmendmentYear: "2001" }
    ],
    ipcBnsReferences: [],
    landmarkJudgments: [
      {
        caseName: "Saroj Rani v. Sudarshan Kumar Chadha",
        court: "Supreme Court of India",
        year: "1984",
        citation: "AIR 1984 SC 1562",
        legalPrinciple: "Upheld constitutionality of Section 9 of the Hindu Marriage Act regarding conjugal rights.",
        landmarkStatus: true
      }
    ],
    summary: "Matrimonial dispute involving restoration of cohabitation and claim of financial support for dependents.",
    keywords: ["marriage", "maintenance", "conjugal rights", "divorce", "spousal support"]
  },
  {
    id: "property_law",
    name: "Partition Suit of Coparcenary Property",
    category: "Property Law",
    courtType: "Civil Court / District Court",
    jurisdiction: "State Jurisdiction",
    applicableActs: [
      { name: "Transfer of Property Act", enactmentYear: "1882", lastAmendmentYear: "2019" },
      { name: "Hindu Succession Act", enactmentYear: "1956", lastAmendmentYear: "2005" }
    ],
    ipcBnsReferences: [],
    landmarkJudgments: [
      {
        caseName: "Vineeta Sharma v. Rakesh Sharma",
        court: "Supreme Court of India",
        year: "2020",
        citation: "(2020) 9 SCC 1",
        legalPrinciple: "Daughters have equal coparcenary rights in joint Hindu family property by birth.",
        landmarkStatus: true
      }
    ],
    summary: "Civil suit claiming partition and individual possession share of ancestral or inherited coparcenary property.",
    keywords: ["partition suit", "ancestral property", "coparcener", "daughter property rights", "transfer of property"]
  },
  {
    id: "corporate_law",
    name: "Insolvency and Corporate Debt Resolution",
    category: "Corporate Law",
    courtType: "NCLT / NCLAT / Supreme Court",
    jurisdiction: "Union of India",
    applicableActs: [
      { name: "Insolvency and Bankruptcy Code (IBC)", enactmentYear: "2016", lastAmendmentYear: "2023" },
      { name: "Companies Act", enactmentYear: "2013", lastAmendmentYear: "2020" }
    ],
    ipcBnsReferences: [],
    landmarkJudgments: [
      {
        caseName: "Swiss Ribbons Pvt. Ltd. v. Union of India",
        court: "Supreme Court of India",
        year: "2019",
        citation: "AIR 2019 SC 739",
        legalPrinciple: "Upheld the validity of the Insolvency and Bankruptcy Code, prioritizing creditor resolution.",
        landmarkStatus: true
      }
    ],
    summary: "Resolution process initiated by financial or operational creditors for recovery of unpaid corporate debts.",
    keywords: ["bankruptcy", "nclt", "insolvency", "ibc", "corporate creditor", "debt recovery"]
  },
  {
    id: "commercial_law",
    name: "Enforcement of Arbitral Award",
    category: "Commercial Law",
    courtType: "Commercial Court / High Court",
    jurisdiction: "Union of India / International",
    applicableActs: [
      { name: "Arbitration and Conciliation Act", enactmentYear: "1996", lastAmendmentYear: "2021" },
      { name: "Commercial Courts Act", enactmentYear: "2015", lastAmendmentYear: "2018" }
    ],
    ipcBnsReferences: [],
    landmarkJudgments: [
      {
        caseName: "BALCO v. Kaiser Aluminium Technical Services Inc.",
        court: "Supreme Court of India",
        year: "2012",
        citation: "AIR 2012 SC 546",
        legalPrinciple: "Seat of arbitration determines the supervisory jurisdiction of courts.",
        landmarkStatus: true
      }
    ],
    summary: "Commercial litigation seeking execution of an domestic or foreign arbitral award under civil procedure norms.",
    keywords: ["arbitration", "commercial dispute", "arbitral award", "balco", "conciliation"]
  },
  {
    id: "labour_law",
    name: "Industrial Dispute and Unfair Dismissal",
    category: "Labour Law",
    courtType: "Labour Court / Industrial Tribunal",
    jurisdiction: "State Jurisdiction",
    applicableActs: [
      { name: "Industrial Disputes Act", enactmentYear: "1947", lastAmendmentYear: "2016" },
      { name: "Labour Code on Industrial Relations", enactmentYear: "2020", lastAmendmentYear: "2020" }
    ],
    ipcBnsReferences: [],
    landmarkJudgments: [
      {
        caseName: "Bangalore Water Supply v. A. Rajappa",
        court: "Supreme Court of India",
        year: "1978",
        citation: "AIR 1978 SC 548",
        legalPrinciple: "Wide interpretation of the term 'Industry' to include municipal utilities and education bodies.",
        landmarkStatus: true
      }
    ],
    summary: "Tribunal petition challenging retaliatory termination or unfair trade practices by management.",
    keywords: ["industry", "labour dispute", "retrenchment", "dismissal", "trade union"]
  },
  {
    id: "consumer_law",
    name: "Product Defect Liability and Compensation",
    category: "Consumer Law",
    courtType: "District / State / National Commission",
    jurisdiction: "National Jurisdiction",
    applicableActs: [
      { name: "Consumer Protection Act", enactmentYear: "2019", lastAmendmentYear: "2019" }
    ],
    ipcBnsReferences: [],
    landmarkJudgments: [
      {
        caseName: "Indian Medical Association v. V.P. Shantha",
        court: "Supreme Court of India",
        year: "1995",
        citation: "AIR 1996 SC 550",
        legalPrinciple: "Medical services fall under the scope of 'service' defined in Consumer Protection laws.",
        landmarkStatus: true
      }
    ],
    summary: "Consumer grievance regarding supply of defective merchandise or deficient warranty services.",
    keywords: ["consumer protection", "medical negligence", "deficiency of service", "compensation"]
  },
  {
    id: "taxation_law",
    name: "Direct Tax Assessment Challenge",
    category: "Taxation Law",
    courtType: "ITAT / High Court / Supreme Court",
    jurisdiction: "Union of India",
    applicableActs: [
      { name: "Income Tax Act", enactmentYear: "1961", lastAmendmentYear: "2024" },
      { name: "Central Goods and Services Tax Act", enactmentYear: "2017", lastAmendmentYear: "2023" }
    ],
    ipcBnsReferences: [],
    landmarkJudgments: [
      {
        caseName: "Vodafone International Holdings v. Union of India",
        court: "Supreme Court of India",
        year: "2012",
        citation: "(2012) 6 SCC 613",
        legalPrinciple: "Transfer of shares between offshore holding companies is not subject to tax withholding in India.",
        landmarkStatus: true
      }
    ],
    summary: "Challenge against arbitrary tax assessment orders, capital gains claims, and statutory exemptions.",
    keywords: ["income tax", "capital gains", "tax assessment", "vodafone tax", "gst challenge"]
  },
  {
    id: "cyber_law",
    name: "Identity Theft and Phishing",
    category: "Cyber Law",
    courtType: "Cyber Cell Tribunal / Magistrate Court",
    jurisdiction: "National Jurisdiction",
    applicableActs: [
      { name: "Information Technology Act", enactmentYear: "2000", lastAmendmentYear: "2008" },
      { name: "Indian Penal Code (IPC)", enactmentYear: "1860", lastAmendmentYear: "2023" }
    ],
    ipcBnsReferences: [
      {
        ipcSection: "Section 66C IT Act",
        bnsSection: "Section 319 (BNS Cheat by Personation)",
        punishment: "Imprisonment up to 3 years and fine up to 1 Lakh rupees.",
        applicability: "Unauthorized use of electronic signatures, passwords, or identification features."
      }
    ],
    landmarkJudgments: [
      {
        caseName: "Shreya Singhal v. Union of India",
        court: "Supreme Court of India",
        year: "2015",
        citation: "AIR 2015 SC 1523",
        legalPrinciple: "Struck down Section 66A of the IT Act, upholding freedom of speech in cyberspace.",
        landmarkStatus: true
      }
    ],
    summary: "Offenses relating to hacking, unauthorized access, identity impersonation, and phishing scams.",
    keywords: ["cyber crime", "hacking", "phishing", "identity theft", "section 66c", "it act"]
  },
  {
    id: "banking_law",
    name: "Recovery of Financial Debts (DRT Suit)",
    category: "Banking Law",
    courtType: "DRT / DRAT / High Court",
    jurisdiction: "Union of India",
    applicableActs: [
      { name: "SARFAESI Act", enactmentYear: "2002", lastAmendmentYear: "2016" },
      { name: "Recovery of Debts Due to Banks Act", enactmentYear: "1993", lastAmendmentYear: "2018" }
    ],
    ipcBnsReferences: [],
    landmarkJudgments: [
      {
        caseName: "Mardia Chemicals Ltd. v. Union of India",
        court: "Supreme Court of India",
        year: "2004",
        citation: "AIR 2004 SC 2371",
        legalPrinciple: "Upheld SARFAESI provisions but permitted borrowers to approach Debt Recovery Tribunals.",
        landmarkStatus: true
      }
    ],
    summary: "Proceedings initiated by banks for attachment and auction of mortgaged assets of defaulting borrowers.",
    keywords: ["drt", "sarfaesi", "default borrower", "non-performing asset", "banking recovery"]
  },
  {
    id: "insurance_law",
    name: "Repudiation of Third-Party Liability Claim",
    category: "Insurance Law",
    courtType: "District Commission / Ombudsman",
    jurisdiction: "National Jurisdiction",
    applicableActs: [
      { name: "Insurance Act", enactmentYear: "1938", lastAmendmentYear: "2021" },
      { name: "IRDAI Act", enactmentYear: "1999", lastAmendmentYear: "2015" }
    ],
    ipcBnsReferences: [],
    landmarkJudgments: [
      {
        caseName: "Biman Krishna Bose v. United India Insurance",
        court: "Supreme Court of India",
        year: "2001",
        citation: "(2001) 6 SCC 477",
        legalPrinciple: "Insurance companies cannot arbitrarily refuse renewal of policies or repudiate claims.",
        landmarkStatus: true
      }
    ],
    summary: "Dispute over arbitrary rejection of claims by insurance providers citing exclusion clauses.",
    keywords: ["insurance claim", "claim repudiation", "policy exclusion", "third party liability"]
  },
  {
    id: "environmental_law",
    name: "Industrial Pollution and Polluter Pays Policy",
    category: "Environmental Law",
    courtType: "National Green Tribunal (NGT)",
    jurisdiction: "Union of India",
    applicableActs: [
      { name: "National Green Tribunal Act", enactmentYear: "2010", lastAmendmentYear: "2010" },
      { name: "Environment Protection Act", enactmentYear: "1986", lastAmendmentYear: "2016" }
    ],
    ipcBnsReferences: [],
    landmarkJudgments: [
      {
        caseName: "M.C. Mehta v. Union of India (Oleum Gas Leak)",
        court: "Supreme Court of India",
        year: "1986",
        citation: "AIR 1987 SC 1086",
        legalPrinciple: "Introduced the concept of 'Absolute Liability' for hazardous industrial units.",
        landmarkStatus: true
      },
      {
        caseName: "Vellore Citizens Welfare Forum v. Union of India",
        court: "Supreme Court of India",
        year: "1996",
        citation: "AIR 1996 SC 2715",
        legalPrinciple: "Uphold 'Precautionary Principle' and 'Polluter Pays Principle' as part of environmental law.",
        landmarkStatus: true
      }
    ],
    summary: "Petitions seeking closure of polluting industrial zones and compensation for local ecological damages.",
    keywords: ["ngt", "oleum gas leak", "absolute liability", "polluter pays", "pollution", "hazardous waste"]
  },
  {
    id: "intellectual_property_law",
    name: "Trademark Infringement and Deceptive Similarity",
    category: "Intellectual Property Law",
    courtType: "District Court / High Court",
    jurisdiction: "All India Jurisdiction",
    applicableActs: [
      { name: "Trademarks Act", enactmentYear: "1999", lastAmendmentYear: "2010" },
      { name: "Copyright Act", enactmentYear: "1957", lastAmendmentYear: "2012" }
    ],
    ipcBnsReferences: [],
    landmarkJudgments: [
      {
        caseName: "Cadila Healthcare Ltd. v. Cadila Pharmaceuticals Ltd.",
        court: "Supreme Court of India",
        year: "2001",
        citation: "AIR 2001 SC 1952",
        legalPrinciple: "Higher burden of protection against deceptive similarity in medicinal products.",
        landmarkStatus: true
      }
    ],
    summary: "Infringement suit seeking permanent injunction against counterfeit products copying a brand.",
    keywords: ["trademark infringement", "copyright pass-off", "deceptive similarity", "intellectual property", "injunction"]
  },
  {
    id: "real_estate_law",
    name: "Delay in Handover of Residential Possession",
    category: "Real Estate Law",
    courtType: "RERA Tribunal / Consumer Commission",
    jurisdiction: "State Jurisdiction",
    applicableActs: [
      { name: "Real Estate (Regulation and Development) Act", enactmentYear: "2016", lastAmendmentYear: "2016" }
    ],
    ipcBnsReferences: [],
    landmarkJudgments: [
      {
        caseName: "Newtech Promoters and Developers v. State of UP",
        court: "Supreme Court of India",
        year: "2021",
        citation: "2021 LL (SC) 641",
        legalPrinciple: "Homebuyers have absolute right to claim refund of principal with interest for delays.",
        landmarkStatus: true
      }
    ],
    summary: "Action filed by flat owners seeking interest refunds for default in construction timelines by builder.",
    keywords: ["rera", "homebuyer refund", "possession delay", "real estate builder"]
  },
  {
    id: "arbitration_law",
    name: "Challenging Arbitral Award for Public Policy Violation",
    category: "Arbitration Law",
    courtType: "Commercial Division of High Court",
    jurisdiction: "Union of India / Commercial",
    applicableActs: [
      { name: "Arbitration and Conciliation Act", enactmentYear: "1996", lastAmendmentYear: "2021" }
    ],
    ipcBnsReferences: [],
    landmarkJudgments: [
      {
        caseName: "ONGC Ltd. v. Saw Pipes Ltd.",
        court: "Supreme Court of India",
        year: "2003",
        citation: "AIR 2003 SC 2629",
        legalPrinciple: "Expanded 'public policy of India' to include patent illegality as a ground to challenge awards.",
        landmarkStatus: true
      }
    ],
    summary: "Petition under Section 34 challenging arbitrator's decision for patent errors or natural justice issues.",
    keywords: ["section 34", "arbitration award challenge", "patent illegality", "public policy"]
  },
  {
    id: "human_rights_law",
    name: "Enforcement against Custodial Violence",
    category: "Human Rights Law",
    courtType: "High Court / Supreme Court",
    jurisdiction: "Union of India",
    applicableActs: [
      { name: "Protection of Human Rights Act", enactmentYear: "1993", lastAmendmentYear: "2019" }
    ],
    ipcBnsReferences: [],
    landmarkJudgments: [
      {
        caseName: "D.K. Basu v. State of West Bengal",
        court: "Supreme Court of India",
        year: "1997",
        citation: "AIR 1997 SC 610",
        legalPrinciple: "Prescribed strict guidelines to prevent custodial torture and protect rights of detainees.",
        landmarkStatus: true
      }
    ],
    summary: "Public interest petition demanding accountability, judicial enquiry, and damages for police brutality.",
    keywords: ["custodial torture", "human rights", "d.k. basu guidelines", "police violence"]
  },
  {
    id: "education_law",
    name: "Admission Under Right to Education quota",
    category: "Education Law",
    courtType: "High Court",
    jurisdiction: "State Jurisdiction",
    applicableActs: [
      { name: "Right of Children to Free and Compulsory Education Act", enactmentYear: "2009", lastAmendmentYear: "2019" }
    ],
    ipcBnsReferences: [],
    landmarkJudgments: [
      {
        caseName: "Society for Unaided Private Schools of Rajasthan v. UOI",
        court: "Supreme Court of India",
        year: "2012",
        citation: "(2012) 6 SCC 1",
        legalPrinciple: "Upheld validity of 25% free seats reservation for weaker sections in private schools.",
        landmarkStatus: true
      }
    ],
    summary: "Writ seeking directives to private academies failing to fill mandated free seats for underprivileged children.",
    keywords: ["rte act", "school admission", "weaker sections", "educational quota"]
  },
  {
    id: "election_law",
    name: "Disqualification on Election Malpractice",
    category: "Election Law",
    courtType: "High Court / Supreme Court",
    jurisdiction: "Union of India",
    applicableActs: [
      { name: "Representation of the People Act", enactmentYear: "1951", lastAmendmentYear: "2023" }
    ],
    ipcBnsReferences: [],
    landmarkJudgments: [
      {
        caseName: "Lily Thomas v. Union of India",
        court: "Supreme Court of India",
        year: "2013",
        citation: "(2013) 7 SCC 653",
        legalPrinciple: "Immediate disqualification of elected representatives convicted of offenses with 2+ years jail.",
        landmarkStatus: true
      }
    ],
    summary: "Challenge of legislative poll results alleging cash for votes or hidden asset disclosures.",
    keywords: ["poll malpractice", "disqualification", "lily thomas", "representation of people act"]
  },
  {
    id: "immigration_law",
    name: "Refugee Protection and De-portation Stay",
    category: "Immigration Law",
    courtType: "High Court / Supreme Court",
    jurisdiction: "Union of India",
    applicableActs: [
      { name: "Passports Act", enactmentYear: "1967", lastAmendmentYear: "2002" },
      { name: "Foreigners Act", enactmentYear: "1946", lastAmendmentYear: "2004" }
    ],
    ipcBnsReferences: [],
    landmarkJudgments: [
      {
        caseName: "Hans Muller of Nuremberg v. Superintendent, Presidency Jail",
        court: "Supreme Court of India",
        year: "1955",
        citation: "AIR 1955 SC 367",
        legalPrinciple: "Absolute power of Union government to deport foreign nationals subject to due procedure.",
        landmarkStatus: true
      }
    ],
    summary: "Petition seeking stay on extradition or deportation order of asylum seekers claiming threat in home nation.",
    keywords: ["deportation", "foreign national", "passport", "asylum visa", "extradition"]
  },
  {
    id: "international_law",
    name: "Sovereign Immunity and Consular Access Disputes",
    category: "International Law",
    courtType: "International Court of Justice / Supreme Court",
    jurisdiction: "International",
    applicableActs: [
      { name: "Geneva Conventions Act", enactmentYear: "1960", lastAmendmentYear: "1960" }
    ],
    ipcBnsReferences: [],
    landmarkJudgments: [
      {
        caseName: "Kulbhushan Jadhav Case (India v. Pakistan)",
        court: "International Court of Justice",
        year: "2019",
        citation: "ICJ Reports 2019",
        legalPrinciple: "Affirmed the mandatory right to consular access under Vienna Convention on Consular Relations.",
        landmarkStatus: true
      }
    ],
    summary: "Legal actions before international organs involving state boundaries, bilateral treaties, or consular access.",
    keywords: ["consular access", "icj", "vienna convention", "diplomatic immunity"]
  },
  {
    id: "competition_law",
    name: "Abuse of Dominant Position and Cartelization",
    category: "Competition Law",
    courtType: "CCI / NCLAT / Supreme Court",
    jurisdiction: "Union of India",
    applicableActs: [
      { name: "Competition Act", enactmentYear: "2002", lastAmendmentYear: "2023" }
    ],
    ipcBnsReferences: [],
    landmarkJudgments: [
      {
        caseName: "Excel Crop Care Ltd. v. Competition Commission of India",
        court: "Supreme Court of India",
        year: "2017",
        citation: "AIR 2017 SC 2734",
        legalPrinciple: "Established relevant turnover doctrine for imposing penalties under antitrust laws.",
        landmarkStatus: true
      }
    ],
    summary: "Investigation into anti-competitive agreements, price-fixing collusions, or predatory market practices.",
    keywords: ["competition commission", "cartel", "abuse of dominance", "antitrust", "cci"]
  },
  {
    id: "media_law",
    name: "Pre-broadcast Censorship and Press Freedom",
    category: "Media Law",
    courtType: "High Court / Supreme Court",
    jurisdiction: "Union of India",
    applicableActs: [
      { name: "Cable Television Networks (Regulation) Act", enactmentYear: "1995", lastAmendmentYear: "2023" },
      { name: "Cinematograph Act", enactmentYear: "1952", lastAmendmentYear: "2023" }
    ],
    ipcBnsReferences: [],
    landmarkJudgments: [
      {
        caseName: "Romesh Thappar v. State of Madras",
        court: "Supreme Court of India",
        year: "1950",
        citation: "AIR 1950 SC 124",
        legalPrinciple: "Freedom of speech includes the right to circulate and publish views without pre-censorship.",
        landmarkStatus: true
      }
    ],
    summary: "Challenge of executive gag orders or state bans restricting telecasts or print publications.",
    keywords: ["press freedom", "censorship", "defamation media", "speech block"]
  },
  {
    id: "it_law",
    name: "Data Interception and Surveillance Challenge",
    category: "IT Law",
    courtType: "Cyber Appellate Tribunal / High Court",
    jurisdiction: "Union of India",
    applicableActs: [
      { name: "Information Technology Act", enactmentYear: "2000", lastAmendmentYear: "2008" }
    ],
    ipcBnsReferences: [],
    landmarkJudgments: [
      {
        caseName: "People's Union for Civil Liberties v. Union of India",
        court: "Supreme Court of India",
        year: "1996",
        citation: "AIR 1997 SC 568",
        legalPrinciple: "Wiretapping violates privacy unless justified by strict statutory procedures and authorization.",
        landmarkStatus: true
      }
    ],
    summary: "Petitions arguing excessive or unauthorized traffic surveillance and data seizure by central agencies.",
    keywords: ["wiretap", "surveillance", "data intercept", "privacy violation", "it act 69"]
  },
  {
    id: "healthcare_law",
    name: "Ethical Standards and Patient Data Protection",
    category: "Healthcare Law",
    courtType: "NMC / Consumer Commission / High Court",
    jurisdiction: "State Jurisdiction",
    applicableActs: [
      { name: "Clinical Establishments Act", enactmentYear: "2010", lastAmendmentYear: "2010" },
      { name: "National Medical Commission Act", enactmentYear: "2019", lastAmendmentYear: "2019" }
    ],
    ipcBnsReferences: [],
    landmarkJudgments: [
      {
        caseName: "Aruna Ramchandra Shanbaug v. Union of India",
        court: "Supreme Court of India",
        year: "2011",
        citation: "(2011) 4 SCC 454",
        legalPrinciple: "Allowed passive euthanasia under strict guidelines set by High Courts.",
        landmarkStatus: true
      }
    ],
    summary: "Action alleging organ donation protocol violations or leaking of sensitive clinical histories.",
    keywords: ["euthanasia", "patient confidentiality", "medical ethics", "clinical guidelines"]
  },
  {
    id: "motor_vehicle_law",
    name: "Accident Compensation Claim",
    category: "Motor Vehicle Law",
    courtType: "Motor Accident Claims Tribunal (MACT)",
    jurisdiction: "District Jurisdiction",
    applicableActs: [
      { name: "Motor Vehicles Act", enactmentYear: "1988", lastAmendmentYear: "2019" }
    ],
    ipcBnsReferences: [],
    landmarkJudgments: [
      {
        caseName: "National Insurance Co. Ltd. v. Pranay Sethi",
        court: "Supreme Court of India",
        year: "2017",
        citation: "(2017) 16 SCC 680",
        legalPrinciple: "Standardized guidelines for calculation of future prospects in motor accident deaths.",
        landmarkStatus: true
      }
    ],
    summary: "Action before MACT claiming insurance payoffs for death/injury resulting from reckless commercial transport.",
    keywords: ["mact", "accident claim", "motor vehicle", "third party compensation"]
  },
  {
    id: "agricultural_law",
    name: "Contract Farming Disputes and MSP Challenges",
    category: "Agricultural Law",
    courtType: "Sub-Divisional Magistrate / High Court",
    jurisdiction: "State Jurisdiction",
    applicableActs: [
      { name: "State APMC Acts", enactmentYear: "Various", lastAmendmentYear: "2020" }
    ],
    ipcBnsReferences: [],
    landmarkJudgments: [
      {
        caseName: "State of Rajasthan v. Rajasthan Agricultural Board",
        court: "Supreme Court of India",
        year: "1990",
        citation: "AIR 1990 SC 156",
        legalPrinciple: "Upheld APMC authority to levy market fees on agricultural transactions.",
        landmarkStatus: true
      }
    ],
    summary: "Contested sales under contract farming, crop quality rejections, or defaults by wholesale buyers.",
    keywords: ["apmc", "msp dispute", "contract farming", "agricultural trade", "crop payment"]
  },
  {
    id: "cooperative_law",
    name: "Electoral Fraud in Cooperative Banks",
    category: "Cooperative Law",
    courtType: "Cooperative Court / High Court",
    jurisdiction: "State Jurisdiction",
    applicableActs: [
      { name: "Multi-State Co-operative Societies Act", enactmentYear: "2002", lastAmendmentYear: "2023" }
    ],
    ipcBnsReferences: [],
    landmarkJudgments: [
      {
        caseName: "Thalappalam Ser. Coop. Bank Ltd. v. State of Kerala",
        court: "Supreme Court of India",
        year: "2013",
        citation: "(2013) 16 SCC 82",
        legalPrinciple: "Cooperative societies are not public authorities under the Right to Information (RTI) Act unless state-funded.",
        landmarkStatus: true
      }
    ],
    summary: "Petition challenging manipulation of voter lists or mis-appropriations of assets by committee heads.",
    keywords: ["cooperative bank", "electoral dispute", "cooperative society", "rti cooperative"]
  },
  {
    id: "public_interest_litigation",
    name: "Enforcement of Right to Food and Livelihood",
    category: "Public Interest Litigation",
    courtType: "High Court / Supreme Court",
    jurisdiction: "Union of India",
    applicableActs: [
      { name: "Constitution of India (Article 32 & 226)", enactmentYear: "1950", lastAmendmentYear: "2023" }
    ],
    ipcBnsReferences: [],
    landmarkJudgments: [
      {
        caseName: "PUCL v. Union of India (Right to Food)",
        court: "Supreme Court of India",
        year: "2001",
        citation: "Writ Petition (Civil) 196 of 2001",
        legalPrinciple: "Converted food security schemes into legal entitlements under Article 21.",
        landmarkStatus: true
      },
      {
        caseName: "Bandhua Mukti Morcha v. Union of India",
        court: "Supreme Court of India",
        year: "1984",
        citation: "AIR 1984 SC 802",
        legalPrinciple: "Liberation of bonded laborers under public interest writ jurisdiction.",
        landmarkStatus: true
      }
    ],
    summary: "Social action petition filed on behalf of vulnerable classes seeking basic services and survival support.",
    keywords: ["pil", "right to food", "public interest", "bonded labour", "social action"]
  },
  {
    id: "service_matters",
    name: "Retrospective Seniority and Pension Claims",
    category: "Service Matters",
    courtType: "Central Administrative Tribunal (CAT) / High Court",
    jurisdiction: "State / Central Gov",
    applicableActs: [
      { name: "Administrative Tribunals Act", enactmentYear: "1985", lastAmendmentYear: "2016" }
    ],
    ipcBnsReferences: [],
    landmarkJudgments: [
      {
        caseName: "L. Chandra Kumar v. Union of India",
        court: "Supreme Court of India",
        year: "1997",
        citation: "AIR 1997 SC 1125",
        legalPrinciple: "Decisions of Administrative Tribunals are subject to judicial review by High Courts under Article 226.",
        landmarkStatus: true
      }
    ],
    summary: "Challenge of arbitrary transfer policies, demotion orders, or withholding of retirement funds.",
    keywords: ["cat tribunal", "demotion", "seniority dispute", "pension claim", "service dispute"]
  },
  {
    id: "administrative_law",
    name: "Excess of Jurisdiction and Natural Justice Violations",
    category: "Administrative Law",
    courtType: "High Court / Supreme Court",
    jurisdiction: "Union of India",
    applicableActs: [
      { name: "Constitution of India", enactmentYear: "1950", lastAmendmentYear: "2023" }
    ],
    ipcBnsReferences: [],
    landmarkJudgments: [
      {
        caseName: "A.K. Kraipak v. Union of India",
        court: "Supreme Court of India",
        year: "1969",
        citation: "AIR 1970 SC 150",
        legalPrinciple: "Natural justice rules apply to administrative as well as quasi-judicial actions.",
        landmarkStatus: true
      },
      {
        caseName: "Maneka Gandhi v. Union of India",
        court: "Supreme Court of India",
        year: "1978",
        citation: "AIR 1978 SC 597",
        legalPrinciple: "Administrative orders affecting life or liberty must be just, fair, and reasonable.",
        landmarkStatus: true
      }
    ],
    summary: "Petition seeking review of executive agency orders violating basic tenets of fair hearing.",
    keywords: ["natural justice", "ultra vires", "administrative discretion", "fair hearing"]
  },
  {
    id: "municipal_law",
    name: "Demolition of Alleged Unauthorized Structures",
    category: "Municipal Law",
    courtType: "Appellate Tribunal MCD / High Court",
    jurisdiction: "Local Corporation",
    applicableActs: [
      { name: "Municipal Corporation Acts", enactmentYear: "Various", lastAmendmentYear: "2022" }
    ],
    ipcBnsReferences: [],
    landmarkJudgments: [
      {
        caseName: "Olga Tellis v. Bombay Municipal Corporation",
        court: "Supreme Court of India",
        year: "1985",
        citation: "AIR 1986 SC 180",
        legalPrinciple: "Right to livelihood is part of Article 21, requiring fair notice before evictions/demolitions.",
        landmarkStatus: true
      }
    ],
    summary: "Dispute over arbitrary building demolition notices issued without prior opportunity to reply.",
    keywords: ["municipal corporation", "encroachment", "demolition", "eviction notice"]
  },
  {
    id: "revenue_law",
    name: "Mutation of Land Records and Khata Challenges",
    category: "Revenue Law",
    courtType: "Revenue Court / Collector",
    jurisdiction: "District Jurisdiction",
    applicableActs: [
      { name: "Land Revenue Codes", enactmentYear: "Various", lastAmendmentYear: "2021" }
    ],
    ipcBnsReferences: [],
    landmarkJudgments: [
      {
        caseName: "Suraj Bhan v. Financial Commissioner",
        court: "Supreme Court of India",
        year: "2007",
        citation: "(2007) 6 SCC 186",
        legalPrinciple: "Mutation entries are only for tax collection and do not confer title or ownership rights.",
        landmarkStatus: true
      }
    ],
    summary: "Appeal against mutation corrections or entries based on contested wills or partition titles.",
    keywords: ["khata mutation", "revenue court", "land record correction", "suraj bhan"]
  },
  {
    id: "land_acquisition_law",
    name: "Fair Compensation for Highway Projects",
    category: "Land Acquisition Law",
    courtType: "Land Acquisition Authority / High Court",
    jurisdiction: "State Jurisdiction",
    applicableActs: [
      { name: "Right to Fair Compensation in Land Acquisition Act", enactmentYear: "2013", lastAmendmentYear: "2018" }
    ],
    ipcBnsReferences: [],
    landmarkJudgments: [
      {
        caseName: "Indore Development Authority v. Manoharlal",
        court: "Supreme Court of India",
        year: "2020",
        citation: "(2020) 8 SCC 129",
        legalPrinciple: "Clarified conditions for lapse of land acquisition under Section 24 of the 2013 Act.",
        landmarkStatus: true
      }
    ],
    summary: "Suit claiming enhanced payouts for ancestral holdings forcibly acquired for state development.",
    keywords: ["land acquisition", "fair compensation", "rehabilitation", "lapse of acquisition"]
  },
  {
    id: "defamation_law",
    name: "Criminal and Civil Defamation via Social Media",
    category: "Defamation Law",
    courtType: "Magistrate Court / High Court",
    jurisdiction: "State Jurisdiction",
    applicableActs: [
      { name: "Indian Penal Code (IPC) / Bharatiya Nyaya Sanhita (BNS)", enactmentYear: "1860 / 2023", lastAmendmentYear: "2023" }
    ],
    ipcBnsReferences: [
      {
        ipcSection: "Section 499 & 500",
        bnsSection: "Section 356",
        punishment: "Simple imprisonment up to 2 years, or with fine, or both (under BNS, community service is added).",
        applicability: "Imputations made with intention to harm the reputation of a person."
      }
    ],
    landmarkJudgments: [
      {
        caseName: "Subramanian Swamy v. Union of India",
        court: "Supreme Court of India",
        year: "2016",
        citation: "(2016) 7 SCC 221",
        legalPrinciple: "Upheld constitutional validity of criminal defamation provisions in Section 499/500 IPC.",
        landmarkStatus: true
      }
    ],
    summary: "Claim for damages or criminal prosecution over defamatory claims published online.",
    keywords: ["libel", "defamation", "bns 356", "ipc 499", "reputation", "slander"]
  },
  {
    id: "white_collar_crime",
    name: "Corporate Embezzlement and Serious Fraud",
    category: "White Collar Crime",
    courtType: "Special CBI Court / High Court",
    jurisdiction: "Union of India",
    applicableActs: [
      { name: "Companies Act", enactmentYear: "2013", lastAmendmentYear: "2020" },
      { name: "Prevention of Corruption Act", enactmentYear: "1988", lastAmendmentYear: "2018" }
    ],
    ipcBnsReferences: [
      {
        ipcSection: "Section 409 (Criminal Breach of Trust)",
        bnsSection: "Section 316 (BNS Breach of Trust)",
        punishment: "Life imprisonment or imprisonment up to 10 years, and fine.",
        applicability: "Breach of trust by public servant, banker, merchant or agent."
      }
    ],
    landmarkJudgments: [
      {
        caseName: "State of CBI v. A. Raja",
        court: "Special CBI Court",
        year: "2017",
        citation: "2017 SCC Online Del 1234",
        legalPrinciple: "Prosecution must present concrete proof of criminal conspiracy and illegal enrichment in administrative awards.",
        landmarkStatus: true
      }
    ],
    summary: "Investigation into company fund diversions and shell entities run by senior officials.",
    keywords: ["breach of trust", "cbi", "corporate fraud", "sfoi", "bns 316", "embezzlement"]
  },
  {
    id: "anti_corruption_cases",
    name: "Demand and Acceptance of Illegal Gratuity",
    category: "Anti-Corruption Cases",
    courtType: "Special Anti-Corruption Court",
    jurisdiction: "State / Central Gov",
    applicableActs: [
      { name: "Prevention of Corruption Act", enactmentYear: "1988", lastAmendmentYear: "2018" }
    ],
    ipcBnsReferences: [],
    landmarkJudgments: [
      {
        caseName: "P. Chidambaram v. Directorate of Enforcement",
        court: "Supreme Court of India",
        year: "2019",
        citation: "(2019) 9 SCC 24",
        legalPrinciple: "Bail considerations in economic/corruption offenses should balance liberty with risk of investigation tampering.",
        landmarkStatus: true
      }
    ],
    summary: "Trap cases where officials are caught receiving bribes for granting public approvals.",
    keywords: ["corruption", "prevention of corruption act", "bribe trap", "cbi court"]
  },
  {
    id: "economic_offences",
    name: "Willful Default and Bank Credit Fraud",
    category: "Economic Offences",
    courtType: "Special Court / High Court",
    jurisdiction: "Union of India",
    applicableActs: [
      { name: "Fugitive Economic Offenders Act", enactmentYear: "2018", lastAmendmentYear: "2018" }
    ],
    ipcBnsReferences: [
      {
        ipcSection: "Section 420 (Cheating)",
        bnsSection: "Section 318 (BNS Cheating)",
        punishment: "Imprisonment up to 7 years and fine.",
        applicability: "Dishonestly inducing delivery of property or alteration of valuable security."
      }
    ],
    landmarkJudgments: [
      {
        caseName: "State of Maharashtra v. Balakrishna Dattatrya",
        court: "Supreme Court of India",
        year: "2012",
        citation: "AIR 2013 SC 412",
        legalPrinciple: "Economic offenses require strict interpretation of penal provisions due to societal impact.",
        landmarkStatus: true
      }
    ],
    summary: "Prosecution of corporate officers who divert commercial credit abroad and abscond.",
    keywords: ["willful default", "cheating", "economic offence", "bns 318", "credit fraud"]
  },
  {
    id: "financial_crimes",
    name: "Systemic Ponzi Schemes and Public Deposit Fraud",
    category: "Financial Crimes",
    courtType: "Special Court under Depositors Act",
    jurisdiction: "State Jurisdiction",
    applicableActs: [
      { name: "Banning of Unregulated Deposit Schemes Act", enactmentYear: "2019", lastAmendmentYear: "2019" }
    ],
    ipcBnsReferences: [],
    landmarkJudgments: [
      {
        caseName: "Sahara India Real Estate v. SEBI",
        court: "Supreme Court of India",
        year: "2012",
        citation: "(2012) 10 SCC 603",
        legalPrinciple: "Affirmed SEBI's jurisdiction to regulate public debt offerings and order refunds for unauthorized deposits.",
        landmarkStatus: true
      }
    ],
    summary: "Investigation into multi-crore investment funds claiming high returns without licenses.",
    keywords: ["ponzi scheme", "sebi regulator", "unregulated deposits", "investor fraud"]
  },
  {
    id: "money_laundering",
    name: "Attachment of Proceeds of Crime",
    category: "Money Laundering",
    courtType: "PMLA Appellate Tribunal / High Court",
    jurisdiction: "Union of India",
    applicableActs: [
      { name: "Prevention of Money Laundering Act (PMLA)", enactmentYear: "2002", lastAmendmentYear: "2019" }
    ],
    ipcBnsReferences: [],
    landmarkJudgments: [
      {
        caseName: "Vijay Madanlal Choudhary v. Union of India",
        court: "Supreme Court of India",
        year: "2022",
        citation: "2022 SCC OnLine SC 929",
        legalPrinciple: "Upheld the validity of PMLA provisions including ED powers of arrest, search, and reverse burden of proof.",
        landmarkStatus: true
      }
    ],
    summary: "Enforcement Directorate attachment actions over assets traced to criminal source origins.",
    keywords: ["pmla", "enforcement directorate", "proceeds of crime", "laundering", "vijay madanlal"]
  },
  {
    id: "ndps_cases",
    name: "Possession of Commercial Quantity of Contraband",
    category: "NDPS Cases",
    courtType: "Special NDPS Court / High Court",
    jurisdiction: "Union of India",
    applicableActs: [
      { name: "Narcotic Drugs and Psychotropic Substances Act", enactmentYear: "1985", lastAmendmentYear: "2021" }
    ],
    ipcBnsReferences: [],
    landmarkJudgments: [
      {
        caseName: "State of Punjab v. Baldev Singh",
        court: "Supreme Court of India",
        year: "1999",
        citation: "AIR 1999 SC 2378",
        legalPrinciple: "Section 50 search directives of NDPS are mandatory; failure vitiates the recovery trial.",
        landmarkStatus: true
      }
    ],
    summary: "Trial for trafficking illegal drugs where bail is barred due to commercial weight requirements.",
    keywords: ["ndps", "drug search", "contraband possession", "commercial quantity", "section 50"]
  },
  {
    id: "posh_cases",
    name: "Failure to Form Internal Complaints Committee",
    category: "POSH Cases",
    courtType: "POSH Local Authority / High Court",
    jurisdiction: "Union of India",
    applicableActs: [
      { name: "Sexual Harassment of Women at Workplace Act", enactmentYear: "2013", lastAmendmentYear: "2013" }
    ],
    ipcBnsReferences: [],
    landmarkJudgments: [
      {
        caseName: "Vishaka v. State of Rajasthan",
        court: "Supreme Court of India",
        year: "1997",
        citation: "AIR 1997 SC 3011",
        legalPrinciple: "Formulated initial guidelines to combat workplace sexual harassment, leading to the POSH Act.",
        landmarkStatus: true
      }
    ],
    summary: "Action filed against corporate entity failing to construct inquiry organs for gender disputes.",
    keywords: ["posh act", "workplace harassment", "vishaka guidelines", "internal complaints committee"]
  },
  {
    id: "pocso_cases",
    name: "Aggravated Penetrative Sexual Assault",
    category: "POCSO Cases",
    courtType: "Special POCSO Court / High Court",
    jurisdiction: "State Jurisdiction",
    applicableActs: [
      { name: "Protection of Children from Sexual Offences Act", enactmentYear: "2012", lastAmendmentYear: "2019" }
    ],
    ipcBnsReferences: [],
    landmarkJudgments: [
      {
        caseName: "Alakh Alok Srivastava v. Union of India",
        court: "Supreme Court of India",
        year: "2018",
        citation: "(2018) 17 SCC 291",
        legalPrinciple: "Advocated swift investigations and dedicated fast track court procedures in child assault trials.",
        landmarkStatus: true
      }
    ],
    summary: "Criminal trial involving serious offenses against minor children where reverse onus rules apply.",
    keywords: ["pocso", "child safety", "sexual assault", "juvenile victim"]
  },
  {
    id: "domestic_violence_cases",
    name: "Enforcement of Shared Household and Protection Orders",
    category: "Domestic Violence Cases",
    courtType: "Magistrate Court / Family Court",
    jurisdiction: "State Jurisdiction",
    applicableActs: [
      { name: "Protection of Women from Domestic Violence Act", enactmentYear: "2005", lastAmendmentYear: "2005" }
    ],
    ipcBnsReferences: [
      {
        ipcSection: "Section 498A (Husband's family cruelty)",
        bnsSection: "Section 85 & 86 (Cruelty definition)",
        punishment: "Imprisonment up to 3 years and fine.",
        applicability: "Subjecting a married woman to cruelty for dowry demands or otherwise."
      }
    ],
    landmarkJudgments: [
      {
        caseName: "Lalita Toppo v. State of Jharkhand",
        court: "Supreme Court of India",
        year: "2018",
        citation: "(2019) 13 SCC 796",
        legalPrinciple: "Live-in partners can claim maintenance under the Domestic Violence Act, 2005.",
        landmarkStatus: true
      }
    ],
    summary: "Application seeking residential safety, restraint orders against spouse, and monthly maintenance.",
    keywords: ["domestic violence", "cruelty", "dowry harassment", "shared household", "bns 85", "ipc 498a"]
  },
  {
    id: "juvenile_justice_cases",
    name: "Determination of Juvenile Delinquency",
    category: "Juvenile Justice Cases",
    courtType: "Juvenile Justice Board (JJB)",
    jurisdiction: "State Jurisdiction",
    applicableActs: [
      { name: "Juvenile Justice (Care and Protection) Act", enactmentYear: "2015", lastAmendmentYear: "2021" }
    ],
    ipcBnsReferences: [],
    landmarkJudgments: [
      {
        caseName: "Salil Bali v. Union of India",
        court: "Supreme Court of India",
        year: "2013",
        citation: "(2013) 7 SCC 705",
        legalPrinciple: "Upheld the age limit of 18 years for juvenile offender categorization under rehabilitation law.",
        landmarkStatus: true
      }
    ],
    summary: "Enquiry to determine age of offender and eligibility for reformation programs instead of prison.",
    keywords: ["juvenile justice board", "minor rehabilitation", "delinquency age", "reform home"]
  },
  {
    id: "matrimonial_cases",
    name: "Mutual Consent Divorce Seeking Waiver",
    category: "Matrimonial Cases",
    courtType: "Family Court",
    jurisdiction: "State Jurisdiction",
    applicableActs: [
      { name: "Hindu Marriage Act", enactmentYear: "1955", lastAmendmentYear: "2015" }
    ],
    ipcBnsReferences: [],
    landmarkJudgments: [
      {
        caseName: "Amardeep Singh v. Harveen Kaur",
        court: "Supreme Court of India",
        year: "2017",
        citation: "(2017) 8 SCC 746",
        legalPrinciple: "The 6-month statutory waiting period in mutual consent divorce can be waived by family courts.",
        landmarkStatus: true
      }
    ],
    summary: "Joint petition seeking decree of divorce with waiver of cooling period under HMA Section 13B(2).",
    keywords: ["mutual consent divorce", "family court waiver", "cooling period HMA", "marriage dissolution"]
  },
  {
    id: "succession_cases",
    name: "Grant of Succession Certificate",
    category: "Succession Cases",
    courtType: "District Court",
    jurisdiction: "State Jurisdiction",
    applicableActs: [
      { name: "Indian Succession Act", enactmentYear: "1925", lastAmendmentYear: "2002" }
    ],
    ipcBnsReferences: [],
    landmarkJudgments: [
      {
        caseName: "Sheela Devi v. Lal Chand",
        court: "Supreme Court of India",
        year: "2006",
        citation: "(2006) 8 SCC 581",
        legalPrinciple: "Succession laws clarify that coparcenary assets pass to heirs according to prevailing statutory rules.",
        landmarkStatus: true
      }
    ],
    summary: "Petition claiming certificate for recovery of debts and securities of a person who died intestate.",
    keywords: ["succession certificate", "heir recovery", "intestate succession", "estate assets"]
  },
  {
    id: "wills_probate",
    name: "Probate Petition for Executor Validation",
    category: "Wills & Probate",
    courtType: "District Court / High Court",
    jurisdiction: "State Jurisdiction",
    applicableActs: [
      { name: "Indian Succession Act", enactmentYear: "1925", lastAmendmentYear: "2002" }
    ],
    ipcBnsReferences: [],
    landmarkJudgments: [
      {
        caseName: "H. Venkatachala Iyengar v. B.N. Thimmajamma",
        court: "Supreme Court of India",
        year: "1959",
        citation: "AIR 1959 SC 443",
        legalPrinciple: "Established standard rules of proof for establishing the execution of a valid will.",
        landmarkStatus: true
      }
    ],
    summary: "Suit to validate execution of a last testament and grant administration authority to executor.",
    keywords: ["will probate", "executor certificate", "testamentary case", "attesting witnesses"]
  },
  {
    id: "contract_disputes",
    name: "Commercial Contract Breach Claiming Damages",
    category: "Contract Disputes",
    courtType: "Commercial Court / District Court",
    jurisdiction: "State Jurisdiction",
    applicableActs: [
      { name: "Indian Contract Act", enactmentYear: "1872", lastAmendmentYear: "1997" }
    ],
    ipcBnsReferences: [],
    landmarkJudgments: [
      {
        caseName: "Maula Bux v. Union of India",
        court: "Supreme Court of India",
        year: "1969",
        citation: "AIR 1970 SC 1955",
        legalPrinciple: "Earnest money forfeiture requires proof of actual loss unless genuine liquid damage is pre-agreed.",
        landmarkStatus: true
      }
    ],
    summary: "Litigation for recovery of security deposits and losses from non-performance of supply orders.",
    keywords: ["liquidated damages", "breach contract", "security deposit forfeiture", "performance default"]
  },
  {
    id: "consumer_complaints",
    name: "Deficient Telecom Services Claim",
    category: "Consumer Complaints",
    courtType: "District Consumer Disputes Redressal Forum",
    jurisdiction: "District Jurisdiction",
    applicableActs: [
      { name: "Consumer Protection Act", enactmentYear: "2019", lastAmendmentYear: "2019" }
    ],
    ipcBnsReferences: [],
    landmarkJudgments: [
      {
        caseName: "Lucknow Development Authority v. M.K. Gupta",
        court: "Supreme Court of India",
        year: "1993",
        citation: "1994 AIR 787",
        legalPrinciple: "Housing construction services fall under consumer laws; authorities can be penalised for harassment.",
        landmarkStatus: true
      }
    ],
    summary: "Claim seeking compensation for billing issues and disconnected phone lines.",
    keywords: ["telecom deficiency", "billing dispute", "consumer forum", "service compensation"]
  },
  {
    id: "builder_disputes",
    name: "Arbitrary Increase in Super Area Charges",
    category: "Builder Disputes",
    courtType: "RERA Tribunal / State Commission",
    jurisdiction: "State Jurisdiction",
    applicableActs: [
      { name: "Real Estate (Regulation and Development) Act", enactmentYear: "2016", lastAmendmentYear: "2016" }
    ],
    ipcBnsReferences: [],
    landmarkJudgments: [
      {
        caseName: "Pioneer Urban Land and Infrastructure v. Govindan Raghavan",
        court: "Supreme Court of India",
        year: "2019",
        citation: "(2019) 5 SCC 725",
        legalPrinciple: "One-sided clauses in builder-buyer agreements constitute unfair trade practices.",
        landmarkStatus: true
      }
    ],
    summary: "Flat buyers challenging builder demand notes seeking extra payments for non-sanctioned area alterations.",
    keywords: ["builder agreement", "super area charge", "rera dispute", "flat buyer rights"]
  },
  {
    id: "employment_disputes",
    name: "Enforcement of Non-Compete Covenants",
    category: "Employment Disputes",
    courtType: "Civil Court / High Court",
    jurisdiction: "State Jurisdiction",
    applicableActs: [
      { name: "Indian Contract Act", enactmentYear: "1872", lastAmendmentYear: "1997" }
    ],
    ipcBnsReferences: [],
    landmarkJudgments: [
      {
        caseName: "Percept D'Mark v. Zaheer Khan",
        court: "Supreme Court of India",
        year: "2006",
        citation: "AIR 2006 SC 3426",
        legalPrinciple: "Non-compete covenants extending past the employment term are void under Section 27 of the Contract Act.",
        landmarkStatus: true
      }
    ],
    summary: "Suit seeking injunction against former employees taking roles with competitors.",
    keywords: ["non-compete clause", "trade restraint", "employee covenant", "injunction suit"]
  },
  {
    id: "cyber_fraud",
    name: "UPI Sim-Swap Financial Extortion",
    category: "Cyber Fraud",
    courtType: "Adjudicating Officer IT / Magistrate Court",
    jurisdiction: "National Jurisdiction",
    applicableActs: [
      { name: "Information Technology Act", enactmentYear: "2000", lastAmendmentYear: "2008" }
    ],
    ipcBnsReferences: [
      {
        ipcSection: "Section 66D IT Act",
        bnsSection: "Section 318 (BNS Cheating)",
        punishment: "Imprisonment up to 3 years and fine up to 1 Lakh rupees.",
        applicability: "Cheating by personation by using computer resource."
      }
    ],
    landmarkJudgments: [
      {
        caseName: "SMC Pneumatics v. Jogesh Kwatra",
        court: "Delhi High Court",
        year: "2001",
        citation: "2001 Del HC Online",
        legalPrinciple: "Corporate liability can be invoked to seek stays on cyber harassment campaigns originating internally.",
        landmarkStatus: true
      }
    ],
    summary: "Criminal action against syndicates deploying sim clone strategies to transfer bank balances.",
    keywords: ["sim swap scam", "upi fraud", "it act 66d", "bns 318", "identity cheat"]
  },
  {
    id: "online_scam_cases",
    name: "Phishing via Fake E-Commerce Interfaces",
    category: "Online Scam Cases",
    courtType: "Special Cyber Court",
    jurisdiction: "State Jurisdiction",
    applicableActs: [
      { name: "Information Technology Act", enactmentYear: "2000", lastAmendmentYear: "2008" }
    ],
    ipcBnsReferences: [
      {
        ipcSection: "Section 66 (Computer Damage)",
        bnsSection: "Section 330 (BNS Mischief Damage)",
        punishment: "Imprisonment up to 3 years and fine up to 5 Lakh rupees.",
        applicability: "Dishonestly or fraudulently doing acts specified in Section 43 IT Act."
      }
    ],
    landmarkJudgments: [
      {
        caseName: "Avnish Bajaj v. State (Bazee.com)",
        court: "Supreme Court of India",
        year: "2008",
        citation: "(2008) 12 SCC 636",
        legalPrinciple: "Addressed director liability for obscene/scam materials hosted on online retail portals.",
        landmarkStatus: true
      }
    ],
    summary: "Prosecution of domain aggregators hosting cloned websites to obtain user card numbers.",
    keywords: ["fake shopping website", "phishing portal", "bazee case", "bns 330", "card clone"]
  },
  {
    id: "data_privacy_cases",
    name: "Unauthorized Transfer of Customer Personal Records",
    category: "Data Privacy Cases",
    courtType: "Data Protection Board / High Court",
    jurisdiction: "National Jurisdiction",
    applicableActs: [
      { name: "Digital Personal Data Protection Act", enactmentYear: "2023", lastAmendmentYear: "2023" }
    ],
    ipcBnsReferences: [],
    landmarkJudgments: [
      {
        caseName: "Justice K.S. Puttaswamy v. Union of India",
        court: "Supreme Court of India",
        year: "2017",
        citation: "AIR 2017 SC 4161",
        legalPrinciple: "Laid the foundation for data sovereignty, mandating consent frameworks for data processing.",
        landmarkStatus: true
      }
    ],
    summary: "Regulatory complaint against telecom provider selling phone subscriber details without consent.",
    keywords: ["dpdp act 2023", "consent framework", "privacy violation", "data fiduciary"]
  }
];
const searchAndFilterCases = (query = "", filters = {}, page = 1, pageSize = 8) => {
  const normQuery = query.toLowerCase().trim();
  let result = LEGAL_CASE_DATABASE;
  if (normQuery) {
    result = result.filter((c) => {
      var _a, _b, _c, _d, _e, _f, _g, _h;
      const matchName = (_a = c.name) == null ? void 0 : _a.toLowerCase().includes(normQuery);
      const matchCat = (_b = c.category) == null ? void 0 : _b.toLowerCase().includes(normQuery);
      const matchCourt = (_c = c.courtType) == null ? void 0 : _c.toLowerCase().includes(normQuery);
      const matchSummary = (_d = c.summary) == null ? void 0 : _d.toLowerCase().includes(normQuery);
      const matchActs = (_e = c.applicableActs) == null ? void 0 : _e.some(
        (act) => {
          var _a2, _b2;
          return ((_a2 = act.name) == null ? void 0 : _a2.toLowerCase().includes(normQuery)) || ((_b2 = act.enactmentYear) == null ? void 0 : _b2.includes(normQuery));
        }
      );
      const matchIpcBns = (_f = c.ipcBnsReferences) == null ? void 0 : _f.some(
        (ref) => {
          var _a2, _b2, _c2;
          return ((_a2 = ref.ipcSection) == null ? void 0 : _a2.toLowerCase().includes(normQuery)) || ((_b2 = ref.bnsSection) == null ? void 0 : _b2.toLowerCase().includes(normQuery)) || ((_c2 = ref.punishment) == null ? void 0 : _c2.toLowerCase().includes(normQuery));
        }
      );
      const matchLandmark = (_g = c.landmarkJudgments) == null ? void 0 : _g.some(
        (j) => {
          var _a2, _b2, _c2, _d2;
          return ((_a2 = j.caseName) == null ? void 0 : _a2.toLowerCase().includes(normQuery)) || ((_b2 = j.court) == null ? void 0 : _b2.toLowerCase().includes(normQuery)) || ((_c2 = j.citation) == null ? void 0 : _c2.toLowerCase().includes(normQuery)) || ((_d2 = j.legalPrinciple) == null ? void 0 : _d2.toLowerCase().includes(normQuery));
        }
      );
      const matchKeywords = (_h = c.keywords) == null ? void 0 : _h.some((kw) => kw.toLowerCase().includes(normQuery));
      return matchName || matchCat || matchCourt || matchSummary || matchActs || matchIpcBns || matchLandmark || matchKeywords;
    });
  }
  if (filters) {
    if (filters.category) {
      result = result.filter((c) => c.category === filters.category);
    }
    if (filters.court) {
      result = result.filter((c) => {
        var _a;
        return (_a = c.courtType) == null ? void 0 : _a.toLowerCase().includes(filters.court.toLowerCase());
      });
    }
    if (filters.act) {
      result = result.filter((c) => {
        var _a;
        return (_a = c.applicableActs) == null ? void 0 : _a.some((act) => {
          var _a2;
          return (_a2 = act.name) == null ? void 0 : _a2.toLowerCase().includes(filters.act.toLowerCase());
        });
      });
    }
    if (filters.jurisdiction) {
      result = result.filter((c) => {
        var _a;
        return (_a = c.jurisdiction) == null ? void 0 : _a.toLowerCase().includes(filters.jurisdiction.toLowerCase());
      });
    }
    if (filters.state) {
      result = result.filter((c) => {
        var _a, _b;
        return ((_a = c.state) == null ? void 0 : _a.toLowerCase()) === filters.state.toLowerCase() || ((_b = c.jurisdiction) == null ? void 0 : _b.toLowerCase().includes("state"));
      });
    }
    if (filters.ipcBns) {
      result = result.filter((c) => {
        var _a;
        return (_a = c.ipcBnsReferences) == null ? void 0 : _a.some(
          (ref) => {
            var _a2, _b;
            return ((_a2 = ref.ipcSection) == null ? void 0 : _a2.toLowerCase().includes(filters.ipcBns.toLowerCase())) || ((_b = ref.bnsSection) == null ? void 0 : _b.toLowerCase().includes(filters.ipcBns.toLowerCase()));
          }
        );
      });
    }
    if (filters.year) {
      result = result.filter(
        (c) => {
          var _a, _b;
          return ((_a = c.applicableActs) == null ? void 0 : _a.some((act) => act.enactmentYear === filters.year)) || ((_b = c.landmarkJudgments) == null ? void 0 : _b.some((j) => j.year === filters.year));
        }
      );
    }
  }
  const total = result.length;
  const startIndex = (page - 1) * pageSize;
  const paginatedResult = result.slice(startIndex, startIndex + pageSize);
  return {
    cases: paginatedResult,
    total,
    totalPages: Math.ceil(total / pageSize),
    currentPage: page
  };
};
const getFilterOptions = () => {
  const categories = [...new Set(LEGAL_CASE_DATABASE.map((c) => c.category))];
  const courts = ["Supreme Court of India", "High Court", "District Court", "NCLT", "RERA Tribunal", "Family Court", "Special CBI Court", "Special Cyber Court", "National Green Tribunal (NGT)"];
  const acts = [];
  LEGAL_CASE_DATABASE.forEach((c) => {
    var _a;
    (_a = c.applicableActs) == null ? void 0 : _a.forEach((act) => {
      if (!acts.includes(act.name)) acts.push(act.name);
    });
  });
  return {
    categories,
    courts,
    acts
  };
};
const LEGAL_SYSTEM_INSTRUCTION = `You are the AISA AI General Legal Chat Assistant. You are an expert in law. If a user uploads an image, PDF, or document, perform OCR, analyze the content, and provide structured legal insights. For Images: Provide a Summary, Key points, and Legal observations. For PDFs/Docs: Provide an Overview, Issues, and Recommendations. Never say you cannot view files. IMPORTANT: You must reply in the exact same language as the user's prompt (e.g., if the user asks in Hindi, reply in Hindi). If the user asks you to translate the previous response "in Hindi" or "hindi me batao", translate the current context to Hindi without hesitation.`;
const safeFormatTime = (ts) => {
  if (!ts) return "";
  try {
    const date = new Date(ts);
    if (isNaN(date.getTime())) return "";
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  } catch {
    return "";
  }
};
const AiMessageWithLangToggle = ({ text, msgId, outputLang, getDisplayText, translateText, onLangChange }) => {
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
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "legal-msg-ai-text relative", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-end gap-1.5 mb-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
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
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { id: `msg-content-${msgId}`, className: `transition-opacity duration-200 ${isTranslating ? "opacity-50" : "opacity-100"}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Markdown, { remarkPlugins: [remarkGfm], children: displayText }) })
  ] });
};
const AiResponseCard = ({ msg, currentCase, chatIdRef }) => {
  const [copied, setCopied] = reactExports.useState(false);
  const [activeDownloadMenu, setActiveDownloadMenu] = reactExports.useState(false);
  const [activeShareMenu, setActiveShareMenu] = reactExports.useState(false);
  const {
    outputLang,
    setOutputLang,
    getDisplayText,
    translateText
  } = useOutputLanguage("legal_chat_msg", msg.id);
  const handleCopyText = () => {
    const resolvedText = getDisplayText(msg.text);
    navigator.clipboard.writeText(resolvedText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2e3);
    zt.success("Response copied to clipboard");
  };
  const handleExportPDF = async () => {
    const resolvedText = getDisplayText(msg.text);
    const isHi = outputLang === "hi";
    const toastId = zt.loading(isHi ? "PDF तैयार किया जा रहा है..." : "Generating PDF...");
    try {
      const el = document.getElementById(`msg-content-${msg.id}`);
      await exportToPDF({
        element: el,
        text: resolvedText,
        title: isHi ? "AISA एआई कानूनी चैट रिपोर्ट" : "AISA AI Legal Chat Report",
        filename: "Legal_Chat_Report",
        lang: outputLang,
        meta: {
          [isHi ? "संदर्भ आईडी" : "Reference ID"]: chatIdRef.current.toUpperCase(),
          [isHi ? "उत्पन्न तिथि" : "Date Generated"]: (/* @__PURE__ */ new Date()).toLocaleString()
        }
      });
      zt.success(isHi ? "PDF सफलतापूर्वक निर्यात किया गया" : "PDF exported successfully", { id: toastId });
    } catch (e) {
      console.error(e);
      zt.error(isHi ? "PDF निर्यात विफल" : "Failed to export PDF", { id: toastId });
    }
  };
  const handleDownloadTxt = () => {
    const resolvedText = getDisplayText(msg.text);
    try {
      const blob = new Blob([resolvedText], { type: "text/plain;charset=utf-8" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `Legal_Report_${Date.now()}.txt`;
      a.click();
      zt.success("Downloaded as TXT");
    } catch (e) {
      zt.error("Failed to download");
    }
  };
  const handleDownloadDoc = () => {
    const resolvedText = getDisplayText(msg.text);
    try {
      const blob = new Blob([resolvedText], { type: "application/msword;charset=utf-8" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `Legal_Report_${Date.now()}.doc`;
      a.click();
      zt.success("Downloaded as DOCX");
    } catch (e) {
      zt.error("Failed to download");
    }
  };
  const handleShareEmail = () => {
    const resolvedText = getDisplayText(msg.text);
    const isHi = outputLang === "hi";
    window.open(`mailto:?subject=${encodeURIComponent(isHi ? "एआई कानूनी अनुसंधान रिपोर्ट" : "AI Legal Research Report")}&body=${encodeURIComponent(resolvedText.slice(0, 2e3) + "\n\n...[Report Truncated]")}`);
  };
  const handleShareLink = () => {
    navigator.clipboard.writeText(window.location.href);
    zt.success("Share link copied to clipboard");
  };
  const handlePrint = () => {
    const resolvedText = getDisplayText(msg.text);
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
          .meta { margin-bottom: 30px; font-size: 11px; border-bottom: 1px solid #ddd; padding-bottom: 12px; display: flex; justify-content: space-between; }
          .content { font-size: 13.5px; white-space: pre-wrap; text-align: justify; }
        </style>
      </head>
      <body>
        <h1>${isHi ? "AISA कोर्ट-रेडी कानूनी रिपोर्ट" : "AISA COURT-READY LEGAL REPORT"}</h1>
        <div class="meta">
          <div><strong>${isHi ? "उत्पन्न तिथि" : "Date Generated"}:</strong> ${(/* @__PURE__ */ new Date()).toLocaleString()}</div>
          <div><strong>${isHi ? "संदर्भ" : "Reference"}:</strong> ${chatIdRef.current.toUpperCase()}</div>
        </div>
        <div class="content">${resolvedText.replace(/###\s+/g, "").replace(/##\s+/g, "").replace(/#\s+/g, "").replace(/\*\*/g, "").replace(/\*/g, "")}</div>
        <script>
          window.onload = function() { window.print(); window.close(); }
        <\/script>
      </body>
      </html>
    `;
    printWindow.document.write(cleanHtml);
    printWindow.document.close();
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      AiMessageWithLangToggle,
      {
        text: msg.text,
        msgId: msg.id,
        outputLang,
        getDisplayText,
        translateText,
        onLangChange: setOutputLang
      }
    ),
    !msg.isIntro ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "legal-research-action-bar border-t border-slate-100 dark:border-white/5 mt-3 pt-3 flex flex-wrap items-center gap-x-3 gap-y-1.5 text-[11px] text-slate-500 dark:text-slate-400", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: handleCopyText, className: "legal-research-action-btn flex items-center gap-1 font-bold hover:text-indigo-600 transition-colors", title: "Copy Response", children: [
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
              handleDownloadTxt();
              setActiveDownloadMenu(false);
            }, className: "w-full text-left px-2.5 py-1.5 text-[11px] font-bold text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-white/5 rounded-md transition-colors", children: "TXT Format" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => {
              handleDownloadDoc();
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
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "legal-msg-footer", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "legal-msg-time", children: safeFormatTime(msg.timestamp) }) })
  ] });
};
const LegalChatScreen = ({ onBack, currentCase, onUpdateCase }) => {
  console.log("Legal Chat Screen Mounted");
  console.log("AI Legal General Chat Clicked");
  console.log("Current Theme:", document.documentElement.classList.contains("dark") ? "dark" : "light");
  console.log("AI Legal Theme Applied");
  const toolName = "General Legal Chat";
  const toolColor = "#4f46e5";
  const toolDesc = "Professional legal discourse, situational guidance, and citation Q&A.";
  const chatIdRef = reactExports.useRef(Date.now().toString(36) + Math.random().toString(36).substr(2));
  const messagesEndRef = reactExports.useRef(null);
  const inputRef = reactExports.useRef(null);
  const fileInputRef = reactExports.useRef(null);
  const scrollContainerRef = reactExports.useRef(null);
  const isAutoScrolling = reactExports.useRef(false);
  const lastScrollTime = reactExports.useRef(0);
  const [messages, setMessages] = reactExports.useState([
    {
      id: "1",
      text: `Hello! I am your AI ${toolName}. ${toolDesc} How can I assist you today?`,
      sender: "ai",
      timestamp: /* @__PURE__ */ new Date(),
      isIntro: true
    }
  ]);
  const [sessions, setSessions] = reactExports.useState([]);
  const [activeSessionId, setActiveSessionId] = reactExports.useState("");
  const [inputValue, setInputValue] = reactExports.useState("");
  const [isTyping, setIsTyping] = reactExports.useState(false);
  const [attachments, setAttachments] = reactExports.useState([]);
  const [isDragging, setIsDragging] = reactExports.useState(false);
  const [copiedId, setCopiedId] = reactExports.useState(null);
  const [showCasesSheet, setShowCasesSheet] = reactExports.useState(false);
  const [searchQuery, setSearchQuery] = reactExports.useState("");
  const [activeDownloadMenu, setActiveDownloadMenu] = reactExports.useState(null);
  const [activeShareMenu, setActiveShareMenu] = reactExports.useState(null);
  const [activeCitationData, setActiveCitationData] = reactExports.useState(null);
  const [showHistoryPanel, setShowHistoryPanel] = reactExports.useState(false);
  const [pinnedSessions, setPinnedSessions] = reactExports.useState([]);
  reactExports.useEffect(() => {
    if (currentCase) {
      setPinnedSessions(currentCase.legalPinnedSessions || []);
    }
  }, [currentCase == null ? void 0 : currentCase._id]);
  const handleTogglePin = async (chatId, e) => {
    e.stopPropagation();
    if (!currentCase) return;
    const nextPinned = pinnedSessions.includes(chatId) ? pinnedSessions.filter((id) => id !== chatId) : [...pinnedSessions, chatId];
    setPinnedSessions(nextPinned);
    try {
      const payload = {
        ...currentCase,
        legalPinnedSessions: nextPinned
      };
      const response = await apiService.updateProject(currentCase._id, payload);
      if (onUpdateCase) onUpdateCase(response);
    } catch (err) {
      console.error("Failed to pin legal chat session", err);
    }
  };
  const handleDeleteSession = async (chatId, e) => {
    e.stopPropagation();
    try {
      await chatStorageService.deleteSession(chatId);
      const updated = sessions.filter((s) => s.chat_id !== chatId);
      setSessions(updated);
      if (chatId === activeSessionId) {
        if (updated.length > 0) {
          switchSession(updated[0].chat_id);
        } else {
          handleNewChat(updated);
        }
      }
      if (currentCase) {
        const nextPinned = (currentCase.legalPinnedSessions || []).filter((id) => id !== chatId);
        setPinnedSessions(nextPinned);
        const payload = {
          ...currentCase,
          legalPinnedSessions: nextPinned
        };
        const response = await apiService.updateProject(currentCase._id, payload);
        if (onUpdateCase) onUpdateCase(response);
      }
    } catch (err) {
      console.error("Failed to delete session", err);
    }
  };
  const [currentPage, setCurrentPage] = reactExports.useState(1);
  const [filters, setFilters] = reactExports.useState({
    category: "",
    court: "",
    act: "",
    ipcBns: "",
    year: "",
    jurisdiction: "",
    state: ""
  });
  const [showFilters, setShowFilters] = reactExports.useState(false);
  const [expandedCaseId, setExpandedCaseId] = reactExports.useState(null);
  reactExports.useEffect(() => {
    console.log("Chat Scroll Container Mounted");
  }, []);
  const handleScroll = () => {
    if (isAutoScrolling.current) {
      isAutoScrolling.current = false;
    } else {
      const now = Date.now();
      if (now - lastScrollTime.current > 1e3) {
        console.log("Manual Scroll Enabled");
        lastScrollTime.current = now;
      }
    }
  };
  reactExports.useEffect(() => {
    if (messagesEndRef.current) {
      isAutoScrolling.current = true;
      console.log("Auto Scroll Triggered");
      if (scrollContainerRef.current) {
        console.log("Scroll Height:", scrollContainerRef.current.scrollHeight);
        console.log("Client Height:", scrollContainerRef.current.clientHeight);
      }
      setTimeout(() => {
        var _a;
        (_a = messagesEndRef.current) == null ? void 0 : _a.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, [messages, isTyping]);
  reactExports.useEffect(() => {
    setTimeout(() => {
      var _a;
      return (_a = inputRef.current) == null ? void 0 : _a.focus();
    }, 300);
  }, []);
  const mapDbMessageToLocal = (m) => ({
    id: m.id || m._id || Date.now().toString() + Math.random().toString(36).substr(2, 5),
    text: m.content || m.text || "",
    sender: m.role === "user" ? "user" : "ai",
    timestamp: m.timestamp ? new Date(m.timestamp) : /* @__PURE__ */ new Date(),
    isIntro: m.isIntro || false,
    attachments: m.attachments || []
  });
  const mapLocalMessageToDb = (m) => {
    var _a, _b;
    return {
      id: m.id,
      role: m.sender === "user" ? "user" : "model",
      content: m.text,
      timestamp: ((_b = (_a = m.timestamp) == null ? void 0 : _a.toISOString) == null ? void 0 : _b.call(_a)) || m.timestamp,
      isIntro: m.isIntro || false,
      attachments: m.attachments || []
    };
  };
  const loadSessionHistory = async (sessionId) => {
    try {
      const history = await chatStorageService.getHistory(sessionId);
      if (history && Array.isArray(history.messages)) {
        const parsedMsgs = history.messages.map(mapDbMessageToLocal);
        setMessages(parsedMsgs);
      }
    } catch (e) {
      console.error("Failed to load session history", e);
    }
  };
  const saveChatHistory = reactExports.useCallback(async (msgs) => {
    if (msgs.length === 0) return;
    const lastMsg = msgs[msgs.length - 1];
    const firstUserMsg = msgs.find((m) => m.sender === "user");
    const title = firstUserMsg ? firstUserMsg.text.slice(0, 30) + (firstUserMsg.text.length > 30 ? "..." : "") : "New Chat";
    const dbMsg = mapLocalMessageToDb(lastMsg);
    dbMsg.activeTool = "General Legal Chat";
    dbMsg.mode = "NORMAL_CHAT";
    try {
      await chatStorageService.saveMessage(chatIdRef.current, dbMsg, title, currentCase == null ? void 0 : currentCase._id);
      setSessions((prev) => prev.map((s) => {
        if (s.chat_id === chatIdRef.current) {
          return { ...s, title, timestamp: Date.now() };
        }
        return s;
      }));
    } catch (e) {
      console.error("[LegalChatScreen] saveChatHistory failed", e);
    }
  }, [currentCase == null ? void 0 : currentCase._id]);
  reactExports.useEffect(() => {
    const migrateAndLoad = async () => {
      try {
        const raw = localStorage.getItem("legal_chat_history");
        const localList = raw ? JSON.parse(raw) : [];
        const localGeneral = localList.filter((s) => s.toolName === toolName);
        const dbSessions = await chatStorageService.getSessions(currentCase == null ? void 0 : currentCase._id);
        const filteredDb = dbSessions.filter((s) => s.activeTool === "General Legal Chat");
        if (localGeneral.length > 0) {
          for (const ls of localGeneral) {
            const exists = filteredDb.some((db) => db.sessionId === ls.chat_id || db.chat_id === ls.chat_id);
            if (!exists) {
              const sessId = ls.chat_id;
              const firstMsg = ls.messages.find((m) => m.sender === "user");
              const title = firstMsg ? firstMsg.text.slice(0, 30) : "New Chat";
              for (const m of ls.messages) {
                const dbMsg = mapLocalMessageToDb(m);
                dbMsg.activeTool = "General Legal Chat";
                dbMsg.mode = "NORMAL_CHAT";
                await chatStorageService.saveMessage(sessId, dbMsg, title, currentCase == null ? void 0 : currentCase._id);
              }
            }
          }
          localStorage.removeItem("legal_chat_history");
          const reloaded = await chatStorageService.getSessions(currentCase == null ? void 0 : currentCase._id);
          const filtered = reloaded.filter((s) => s.activeTool === "General Legal Chat");
          const mapped2 = filtered.map((s) => ({
            chat_id: s.sessionId || s.chat_id,
            title: s.title || "New Chat",
            timestamp: s.lastModified || s.timestamp || Date.now()
          }));
          mapped2.sort((a, b) => b.timestamp - a.timestamp);
          setSessions(mapped2);
          if (mapped2.length > 0) {
            chatIdRef.current = mapped2[0].chat_id;
            setActiveSessionId(mapped2[0].chat_id);
            await loadSessionHistory(mapped2[0].chat_id);
          } else {
            await handleNewChat(mapped2);
          }
          return;
        }
        const mapped = filteredDb.map((s) => ({
          chat_id: s.sessionId || s.chat_id,
          title: s.title || "New Chat",
          timestamp: s.lastModified || s.timestamp || Date.now()
        }));
        mapped.sort((a, b) => b.timestamp - a.timestamp);
        setSessions(mapped);
        if (mapped.length > 0) {
          chatIdRef.current = mapped[0].chat_id;
          setActiveSessionId(mapped[0].chat_id);
          await loadSessionHistory(mapped[0].chat_id);
        } else {
          await handleNewChat(mapped);
        }
      } catch (e) {
        console.error("Failed loading/migrating legal chat sessions", e);
      }
    };
    migrateAndLoad();
  }, [toolName, currentCase == null ? void 0 : currentCase._id]);
  reactExports.useEffect(() => {
    if (messages.length > 1) {
      saveChatHistory(messages);
    }
  }, [messages, saveChatHistory]);
  const sendMessage = async (overrideText) => {
    var _a;
    const text = overrideText && typeof overrideText === "string" ? overrideText.trim() : inputValue.trim();
    if (!text && attachments.length === 0) return;
    const currentAttachments = [...attachments];
    setAttachments([]);
    const userMsg = {
      id: Date.now().toString(),
      text: text || "",
      attachments: currentAttachments.map((a) => ({ name: a.name, type: a.type })),
      sender: "user",
      timestamp: /* @__PURE__ */ new Date()
    };
    setMessages((prev) => [...prev, userMsg]);
    setInputValue("");
    setIsTyping(true);
    try {
      const apiHistory = messages.filter((m) => !m.isIntro).map((m) => ({
        role: m.sender === "user" ? "user" : "model",
        parts: [{ text: m.text }]
      }));
      let apiAttachments = currentAttachments.map((att) => {
        var _a2;
        return {
          url: att.dataUrl,
          name: att.name || "uploaded_file",
          type: ((_a2 = att.type) == null ? void 0 : _a2.startsWith("image/")) ? "image" : "document"
        };
      });
      let promptText = text;
      if (currentAttachments.length > 0) {
        const fileNames = currentAttachments.map((a) => a.name).join(", ");
        promptText = `[Attached Files: ${fileNames}]
${text || "Please analyze these attachments."}`;
      }
      console.log("[LegalChat] Sending message — attachments:", apiAttachments.length);
      const response = await generateChatResponse(
        apiHistory,
        promptText,
        LEGAL_SYSTEM_INSTRUCTION,
        apiAttachments,
        "English",
        null,
        // abortSignal
        null,
        // mode
        null,
        // sessionId
        null
        // projectId
      );
      let responseText = "";
      if (typeof response === "string") responseText = response;
      else if (response == null ? void 0 : response.reply) responseText = response.reply;
      else if ((_a = response == null ? void 0 : response.data) == null ? void 0 : _a.reply) responseText = response.data.reply;
      else if (response == null ? void 0 : response.text) responseText = response.text;
      else if (response && typeof response === "object") responseText = JSON.stringify(response);
      if (!responseText) responseText = "We could not process the response. Please try again.";
      const aiMsg = {
        id: (Date.now() + 1).toString(),
        text: responseText,
        sender: "ai",
        timestamp: /* @__PURE__ */ new Date()
      };
      setMessages((prev) => [...prev, aiMsg]);
    } catch (error) {
      console.error("[LegalChatScreen] API Error:", error);
      const errorMsg = {
        id: (Date.now() + 1).toString(),
        text: (error == null ? void 0 : error.message) || "Unable to connect. Please check your connection and try again.",
        sender: "ai",
        timestamp: /* @__PURE__ */ new Date()
      };
      setMessages((prev) => [...prev, errorMsg]);
    } finally {
      setIsTyping(false);
      console.log("AI Legal Chat Ready");
    }
  };
  const handleSelectCase = (item) => {
    var _a, _b, _c;
    setShowCasesSheet(false);
    setExpandedCaseId(null);
    const actsStr = ((_a = item.applicableActs) == null ? void 0 : _a.map((a) => `${a.name} (Enacted: ${a.enactmentYear}, Amended: ${a.lastAmendmentYear})`).join(", ")) || "N/A";
    const sectionsStr = ((_b = item.ipcBnsReferences) == null ? void 0 : _b.length) > 0 ? `IPC/BNS Sections: ${item.ipcBnsReferences.map((r) => `${r.ipcSection} / ${r.bnsSection} (Punishment: ${r.punishment}, Applicability: ${r.applicability})`).join(", ")}` : "N/A";
    const landmarkStr = ((_c = item.landmarkJudgments) == null ? void 0 : _c.length) > 0 ? `Landmark Judgments: ${item.landmarkJudgments.map((j) => `"${j.caseName}" (${j.citation}, ${j.court}, ${j.year}) - Principle: ${j.legalPrinciple}`).join("; ")}` : "N/A";
    const promptText = `Provide a comprehensive legal analysis and strategy advice for the following case type:
- **Title**: ${item.name}
- **Category**: ${item.category}
- **Court / Jurisdiction**: ${item.courtType} (${item.jurisdiction})
- **Applicable Acts**: ${actsStr}
- **IPC/BNS Sections**: ${sectionsStr}
- **Summary**: ${item.summary}
- **Reference Landmark Cases**: ${landmarkStr}
`;
    sendMessage(promptText);
  };
  const getFileIcon = (type) => {
    if (!type) return /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { size: 14, className: "text-slate-400" });
    if (type.includes("pdf")) return /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { size: 14, className: "text-red-500" });
    if (type.includes("word") || type.includes("msword") || type.includes("officedocument.word")) return /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { size: 14, className: "text-blue-500" });
    if (type.startsWith("image/")) return /* @__PURE__ */ jsxRuntimeExports.jsx(Image, { size: 14, className: "text-emerald-500" });
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
  const handleNewChat = async () => {
    const newId = Date.now().toString(36) + Math.random().toString(36).substr(2);
    chatIdRef.current = newId;
    setActiveSessionId(newId);
    setAttachments([]);
    const newMsgs = [{
      id: "1",
      text: `Hello! I am your AI ${toolName}. ${toolDesc} How can I assist you today?`,
      sender: "ai",
      timestamp: /* @__PURE__ */ new Date(),
      isIntro: true
    }];
    setMessages(newMsgs);
    const newSessionItem = {
      chat_id: newId,
      title: "New Chat",
      timestamp: Date.now()
    };
    setSessions((prev) => [newSessionItem, ...prev]);
    const dbMsg = mapLocalMessageToDb(newMsgs[0]);
    dbMsg.activeTool = "General Legal Chat";
    dbMsg.mode = "NORMAL_CHAT";
    try {
      await chatStorageService.saveMessage(newId, dbMsg, "New Chat", currentCase == null ? void 0 : currentCase._id);
    } catch (e) {
      console.error("Failed to save initial message in new chat", e);
    }
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({ top: 0, behavior: "smooth" });
    }
    setTimeout(() => {
      var _a;
      (_a = inputRef.current) == null ? void 0 : _a.focus();
    }, 100);
  };
  const switchSession = async (sessionId) => {
    try {
      chatIdRef.current = sessionId;
      setActiveSessionId(sessionId);
      await loadSessionHistory(sessionId);
      setTimeout(() => {
        var _a;
        (_a = inputRef.current) == null ? void 0 : _a.focus();
      }, 100);
    } catch (e) {
      console.error("Failed to switch session", e);
    }
  };
  const filterOptions = reactExports.useMemo(() => getFilterOptions(), []);
  const searchResults = reactExports.useMemo(() => {
    return searchAndFilterCases(searchQuery, filters, currentPage, 6);
  }, [searchQuery, filters, currentPage]);
  const filteredCases = searchResults.cases;
  searchResults.total;
  const totalPages = searchResults.totalPages;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "legal-chat-screen", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "legal-chat-header", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "legal-chat-back-btn", onClick: onBack, title: "Back to Dashboard", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { size: 20 }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "legal-chat-header-info", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "legal-chat-header-icon", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Scale, { size: 16 }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "legal-chat-header-title", children: toolName }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "legal-chat-header-sub", children: "AI Engine Active" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "legal-history-btn-wrap", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            className: "legal-chat-action-btn legal-history-btn",
            onClick: () => setShowHistoryPanel((v) => !v),
            title: "Chat History",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(History, { size: 18 })
          }
        ),
        showHistoryPanel && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-40", onClick: () => setShowHistoryPanel(false) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "legal-history-panel", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "legal-history-panel-header", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(History, { size: 14 }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Chat History" })
            ] }),
            (() => {
              const realSessions = sessions.filter((s) => s.title && s.title.trim() !== "" && s.title !== "New Chat");
              if (realSessions.length === 0) return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "legal-history-empty", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(MessageSquare, { size: 28 }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "No previous chats" })
              ] });
              const pinned = realSessions.filter((s) => pinnedSessions.includes(s.chat_id));
              const unpinned = realSessions.filter((s) => !pinnedSessions.includes(s.chat_id));
              const renderItem = (s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "legal-history-item-wrap", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "button",
                  {
                    className: `legal-history-item ${s.chat_id === activeSessionId ? "active" : ""}`,
                    onClick: () => {
                      switchSession(s.chat_id);
                      setShowHistoryPanel(false);
                    },
                    children: [
                      pinnedSessions.includes(s.chat_id) ? /* @__PURE__ */ jsxRuntimeExports.jsx(Pin, { size: 12, style: { color: "#f59e0b", flexShrink: 0 } }) : /* @__PURE__ */ jsxRuntimeExports.jsx(MessageSquare, { size: 13, style: { flexShrink: 0 } }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: s.title || "Untitled Chat" })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "legal-history-item-actions", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      className: `legal-history-action-btn ${pinnedSessions.includes(s.chat_id) ? "pinned" : ""}`,
                      onClick: (e) => handleTogglePin(s.chat_id, e),
                      title: pinnedSessions.includes(s.chat_id) ? "Unpin" : "Pin",
                      children: pinnedSessions.includes(s.chat_id) ? /* @__PURE__ */ jsxRuntimeExports.jsx(PinOff, { size: 13 }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Pin, { size: 13 })
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      className: "legal-history-action-btn delete",
                      onClick: (e) => handleDeleteSession(s.chat_id, e),
                      title: "Delete",
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { size: 13 })
                    }
                  )
                ] })
              ] }, s.chat_id);
              return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "legal-history-list", children: [
                pinned.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "legal-history-section-label", children: "📌 Pinned" }),
                  pinned.map(renderItem),
                  unpinned.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "legal-history-divider" })
                ] }),
                unpinned.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                  pinned.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "legal-history-section-label", children: "Recent" }),
                  unpinned.map(renderItem)
                ] })
              ] });
            })()
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { ref: scrollContainerRef, onScroll: handleScroll, className: "legal-chat-messages", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { initial: false, children: messages.map((msg) => {
        const isAi = msg.sender === "ai";
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 12 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.25 },
            className: `legal-msg-row ${isAi ? "legal-msg-ai" : "legal-msg-user"}`,
            children: [
              isAi && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "legal-msg-avatar", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Scale, { size: 14 }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `legal-msg-bubble ${isAi ? "legal-bubble-ai" : "legal-bubble-user"}`, children: [
                msg.attachments && msg.attachments.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1.5 mb-2", children: msg.attachments.map((att, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "legal-msg-attachment-chip", children: [
                  getFileIcon(att.type),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: att.name })
                ] }, idx)) }),
                isAi ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                  AiResponseCard,
                  {
                    msg,
                    currentCase,
                    chatIdRef
                  }
                ) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "legal-msg-user-text", children: msg.text }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "legal-msg-footer", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "legal-msg-time", children: safeFormatTime(msg.timestamp) }) })
                ] })
              ] })
            ]
          },
          msg.id
        );
      }) }),
      isTyping && /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          className: "legal-msg-row legal-msg-ai",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "legal-msg-avatar", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Scale, { size: 14 }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "legal-bubble-ai legal-typing-bubble", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "legal-typing-dots", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", {})
            ] }) })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref: messagesEndRef })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full px-4 pb-2 flex justify-start shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        type: "button",
        className: "legal-input-action-btn legal-input-action-btn-label",
        onClick: handleNewChat,
        title: "Start New Chat",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { size: 15 }),
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
        className: `legal-chat-input-area flex flex-col gap-2 transition-all ${isDragging ? "bg-indigo-50/20 dark:bg-indigo-950/20 border-indigo-500" : ""}`,
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
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "legal-chat-input-row", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "legal-chat-input-buttons", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                className: `legal-input-action-btn ${attachments.length > 0 ? "active" : ""}`,
                onClick: () => {
                  var _a;
                  return (_a = fileInputRef.current) == null ? void 0 : _a.click();
                },
                title: "Attach file",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Paperclip, { size: 18, style: { color: attachments.length > 0 ? toolColor : void 0 } })
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
            /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { className: "legal-chat-input-form", onSubmit: (e) => {
              e.preventDefault();
              sendMessage();
            }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  type: "button",
                  className: "legal-input-icon-btn legal-input-action-btn-cases legal-input-action-btn-label",
                  onClick: () => setShowCasesSheet(true),
                  title: "Browse Cases",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Scale, { size: 14 }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Cases" })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "textarea",
                {
                  ref: inputRef,
                  className: "legal-chat-input",
                  value: inputValue,
                  onChange: (e) => {
                    setInputValue(e.target.value);
                    e.target.style.height = "auto";
                    e.target.style.height = `${Math.min(e.target.scrollHeight, 120)}px`;
                  },
                  onKeyDown: (e) => {
                    if (e.key === "Enter" && !e.shiftKey) {
                      e.preventDefault();
                      sendMessage();
                    }
                  },
                  placeholder: `Ask ${toolName}...`,
                  rows: 1
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "submit",
                  className: "legal-send-btn",
                  disabled: !inputValue.trim() && attachments.length === 0,
                  style: { backgroundColor: !inputValue.trim() && attachments.length === 0 ? "#94a3b8" : toolColor },
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { size: 16 })
                }
              )
            ] })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: showCasesSheet && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          exit: { opacity: 0 },
          className: "legal-cases-overlay",
          onClick: () => setShowCasesSheet(false)
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          className: "legal-cases-container",
          initial: { opacity: 1 },
          exit: { opacity: 1 },
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { y: "100vh" },
              animate: { y: 0 },
              exit: { y: "100vh" },
              transition: { type: "spring", damping: 30, stiffness: 300 },
              className: "legal-cases-sheet",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "legal-cases-sheet-drag", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "legal-cases-drag-bar" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "legal-cases-sheet-header", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Scale, { size: 20, style: { color: toolColor } }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "Browse Cases" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setShowCasesSheet(false), className: "legal-cases-close", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 18 }) })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "legal-cases-search-container", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "legal-cases-search-wrap", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { size: 16 }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "input",
                      {
                        type: "text",
                        className: "legal-cases-search",
                        placeholder: "Search cases, laws, acts, IPC/BNS, keywords...",
                        value: searchQuery,
                        onChange: (e) => {
                          setSearchQuery(e.target.value);
                          setCurrentPage(1);
                        }
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "button",
                    {
                      type: "button",
                      className: `legal-filter-toggle-btn ${showFilters ? "active" : ""}`,
                      onClick: () => setShowFilters(!showFilters),
                      title: "Toggle Advanced Filters",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(SlidersHorizontal, { size: 16 }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Filters" })
                      ]
                    }
                  )
                ] }),
                showFilters && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "legal-cases-filters-grid", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "legal-filter-group", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("label", { children: "Category" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "select",
                      {
                        value: filters.category,
                        onChange: (e) => {
                          setFilters((prev) => ({ ...prev, category: e.target.value }));
                          setCurrentPage(1);
                        },
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "All Categories" }),
                          filterOptions.categories.map((c, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: c, children: c }, idx))
                        ]
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "legal-filter-group", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("label", { children: "Court" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "select",
                      {
                        value: filters.court,
                        onChange: (e) => {
                          setFilters((prev) => ({ ...prev, court: e.target.value }));
                          setCurrentPage(1);
                        },
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "All Courts" }),
                          filterOptions.courts.map((ct, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: ct, children: ct }, idx))
                        ]
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "legal-filter-group", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("label", { children: "Act" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "select",
                      {
                        value: filters.act,
                        onChange: (e) => {
                          setFilters((prev) => ({ ...prev, act: e.target.value }));
                          setCurrentPage(1);
                        },
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "All Acts" }),
                          filterOptions.acts.map((act, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: act, children: act }, idx))
                        ]
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "legal-filter-group", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("label", { children: "IPC/BNS Section" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "input",
                      {
                        type: "text",
                        placeholder: "e.g. 302",
                        value: filters.ipcBns,
                        onChange: (e) => {
                          setFilters((prev) => ({ ...prev, ipcBns: e.target.value }));
                          setCurrentPage(1);
                        }
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "legal-filter-group", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("label", { children: "Jurisdiction" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "input",
                      {
                        type: "text",
                        placeholder: "e.g. State",
                        value: filters.jurisdiction,
                        onChange: (e) => {
                          setFilters((prev) => ({ ...prev, jurisdiction: e.target.value }));
                          setCurrentPage(1);
                        }
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "legal-filter-group", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("label", { children: "Year" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "input",
                      {
                        type: "text",
                        placeholder: "e.g. 2017",
                        value: filters.year,
                        onChange: (e) => {
                          setFilters((prev) => ({ ...prev, year: e.target.value }));
                          setCurrentPage(1);
                        }
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      type: "button",
                      className: "legal-clear-filters-btn",
                      onClick: () => {
                        setFilters({ category: "", court: "", act: "", ipcBns: "", year: "", jurisdiction: "", state: "" });
                        setCurrentPage(1);
                      },
                      children: "Reset Filters"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "legal-cases-list", children: [
                  filteredCases.map((c, i) => {
                    var _a, _b, _c, _d;
                    const isExpanded = expandedCaseId === c.id;
                    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `legal-case-card ${isExpanded ? "expanded" : ""}`, children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "legal-case-card-header", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "legal-case-card-title-row", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "legal-case-card-name", children: c.name }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "legal-case-card-badges", children: [
                          ((_a = c.landmarkJudgments) == null ? void 0 : _a.length) > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "legal-landmark-badge", title: "Landmark Judgment Case", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(Landmark, { size: 10 }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Landmark" })
                          ] }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "legal-category-badge", children: c.category })
                        ] })
                      ] }) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "legal-case-card-body", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "legal-case-summary-short", children: c.summary }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "legal-case-meta-tags", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "legal-case-meta-tag", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(Scale, { size: 11 }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: c.courtType })
                          ] }),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "legal-case-meta-tag", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { size: 11 }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: c.jurisdiction })
                          ] })
                        ] })
                      ] }),
                      isExpanded && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "legal-case-details-expanded", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "legal-expanded-section", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "Full Legal Reference Summary" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: c.summary })
                        ] }),
                        ((_b = c.applicableActs) == null ? void 0 : _b.length) > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "legal-expanded-section", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "Statutory Acts Coverage" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "legal-table-wrapper", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "legal-table", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Act Title" }),
                              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Enacted" }),
                              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Last Amended" })
                            ] }) }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: c.applicableActs.map((act, aIdx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "font-semibold", children: act.name }),
                              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: act.enactmentYear }),
                              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: act.lastAmendmentYear || "N/A" })
                            ] }, aIdx)) })
                          ] }) })
                        ] }),
                        ((_c = c.ipcBnsReferences) == null ? void 0 : _c.length) > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "legal-expanded-section", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "IPC vs. BNS Penal Cross-Reference" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "legal-table-wrapper", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "legal-table", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "IPC Section" }),
                              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "BNS Section" }),
                              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Statutory Punishment" }),
                              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Applicability" })
                            ] }) }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: c.ipcBnsReferences.map((ref, rIdx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "text-red-650 dark:text-red-400 font-bold", children: ref.ipcSection }),
                              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "text-indigo-605 dark:text-indigo-400 font-bold", children: ref.bnsSection }),
                              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "text-xs", children: ref.punishment }),
                              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "text-xs", children: ref.applicability })
                            ] }, rIdx)) })
                          ] }) })
                        ] }),
                        ((_d = c.landmarkJudgments) == null ? void 0 : _d.length) > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "legal-expanded-section", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "Landmark Precedents & Citations" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "legal-landmark-list", children: c.landmarkJudgments.map((j, jIdx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "legal-landmark-item", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "legal-landmark-item-header", children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx(Landmark, { size: 12, style: { marginRight: "6px", color: "#b45309" } }),
                              /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { children: j.caseName })
                            ] }),
                            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "legal-landmark-item-meta", children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: j.citation }),
                              " • ",
                              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                                j.court,
                                " (",
                                j.year,
                                ")"
                              ] })
                            ] }),
                            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "legal-landmark-item-principle", children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Legal Principle:" }),
                              " ",
                              j.legalPrinciple
                            ] })
                          ] }, jIdx)) })
                        ] })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "legal-case-actions", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs(
                          "button",
                          {
                            type: "button",
                            className: "legal-case-details-toggle",
                            onClick: () => setExpandedCaseId(isExpanded ? null : c.id),
                            children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: isExpanded ? "Hide Details" : "View Details" }),
                              isExpanded ? /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronUp, { size: 14 }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { size: 14 })
                            ]
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs(
                          "button",
                          {
                            type: "button",
                            className: "legal-case-select-btn",
                            onClick: () => handleSelectCase(c),
                            style: { backgroundColor: toolColor },
                            children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Use in Chat" }),
                              /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { size: 14 })
                            ]
                          }
                        )
                      ] })
                    ] }, c.id);
                  }),
                  filteredCases.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "legal-cases-empty-state", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldAlert, { size: 36 }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "No cases found matching the search criteria." })
                  ] })
                ] }),
                totalPages > 1 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "legal-pagination", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "button",
                    {
                      type: "button",
                      className: "legal-pagination-btn",
                      disabled: currentPage === 1,
                      onClick: () => setCurrentPage((prev) => Math.max(prev - 1, 1)),
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { size: 16 }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Prev" })
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "legal-pagination-info", children: [
                    "Page ",
                    currentPage,
                    " of ",
                    totalPages
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "button",
                    {
                      type: "button",
                      className: "legal-pagination-btn",
                      disabled: currentPage === totalPages,
                      onClick: () => setCurrentPage((prev) => Math.min(prev + 1, totalPages)),
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Next" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { size: 16 })
                      ]
                    }
                  )
                ] })
              ]
            }
          )
        }
      )
    ] }) }),
    activeCitationData && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-[100] flex items-center justify-center bg-black/40 backdrop-blur-sm p-4", onClick: () => setActiveCitationData(null), children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white dark:bg-[#1e293b] border border-slate-200 dark:border-white/10 rounded-2xl w-full max-w-lg shadow-2xl overflow-hidden", onClick: (e) => e.stopPropagation(), children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between px-6 py-4 border-b border-slate-100 dark:border-white/5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-black uppercase tracking-wider text-slate-900 dark:text-white", children: "Legal Citations Generator" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setActiveCitationData(null), className: "p-1 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 18 }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-black uppercase tracking-wider text-indigo-600 dark:text-indigo-400", children: "Bluebook Citation" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 p-3 bg-slate-50 dark:bg-black/20 border border-slate-200/50 dark:border-white/5 rounded-xl text-xs font-mono select-all text-slate-800 dark:text-slate-200 break-all leading-relaxed", children: activeCitationData.bluebook }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => {
              navigator.clipboard.writeText(activeCitationData.bluebook);
              zt.success("Bluebook citation copied");
            }, className: "p-3 bg-indigo-50 dark:bg-indigo-950/20 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-100 dark:hover:bg-indigo-950/50 rounded-xl flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Copy, { size: 16 }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-black uppercase tracking-wider text-violet-600 dark:text-violet-400", children: "Indian Legal Citation" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 p-3 bg-slate-50 dark:bg-black/20 border border-slate-200/50 dark:border-white/5 rounded-xl text-xs font-mono select-all text-slate-800 dark:text-slate-200 break-all leading-relaxed", children: activeCitationData.indian }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => {
              navigator.clipboard.writeText(activeCitationData.indian);
              zt.success("Indian citation copied");
            }, className: "p-3 bg-indigo-50 dark:bg-indigo-950/20 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-100 dark:hover:bg-indigo-950/50 rounded-xl flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Copy, { size: 16 }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-black uppercase tracking-wider text-emerald-600 dark:text-emerald-400", children: "Court Reference Format" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 p-3 bg-slate-50 dark:bg-black/20 border border-slate-200/50 dark:border-white/5 rounded-xl text-xs font-mono select-all text-slate-800 dark:text-slate-200 break-all leading-relaxed", children: activeCitationData.courtRef }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => {
              navigator.clipboard.writeText(activeCitationData.courtRef);
              zt.success("Court reference copied");
            }, className: "p-3 bg-indigo-50 dark:bg-indigo-950/20 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-100 dark:hover:bg-indigo-950/50 rounded-xl flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Copy, { size: 16 }) })
          ] })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("style", { children: `
        .legal-chat-screen {
          display: flex;
          flex-direction: column;
          height: 100%;
          width: 100%;
          background: #f8fafc;
          position: relative;
          overflow: hidden;
          min-height: 0;
        }
        .dark .legal-chat-screen { background: #0f172a; }

        /* ── HEADER ─────────────────────────────────────── */
        .legal-chat-header {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: calc(12px + env(safe-area-inset-top, 0px)) 16px 12px;
          background: #ffffff;
          border-bottom: 1px solid rgba(0,0,0,0.06);
          flex-shrink: 0;
          z-index: 10;
        }
        .dark .legal-chat-header {
          background: #1e293b;
          border-bottom-color: rgba(255,255,255,0.06);
        }
        .legal-chat-back-btn {
          width: 36px; height: 36px;
          border-radius: 10px;
          display: flex; align-items: center; justify-content: center;
          background: rgba(0,0,0,0.04);
          border: none; cursor: pointer;
          color: #334155;
          transition: all 0.2s;
        }
        .dark .legal-chat-back-btn { background: rgba(255,255,255,0.05); color: #e2e8f0; }
        .legal-chat-back-btn:hover { background: rgba(0,0,0,0.08); }
        .dark .legal-chat-back-btn:hover { background: rgba(255,255,255,0.1); }
        .legal-chat-header-info { display: flex; align-items: center; gap: 10px; flex: 1; }
        .legal-chat-header-icon {
          width: 34px; height: 34px; border-radius: 10px;
          background: linear-gradient(135deg, #4f46e5, #7c3aed);
          display: flex; align-items: center; justify-content: center;
          color: white; flex-shrink: 0;
        }
        .legal-chat-header-title {
          font-size: 15px; font-weight: 800; margin: 0;
          color: #0f172a;
          letter-spacing: -0.3px;
        }
        .dark .legal-chat-header-title { color: #f1f5f9; }
        .legal-chat-header-sub {
          font-size: 10px; font-weight: 700;
          text-transform: uppercase; letter-spacing: 1px;
          color: #4f46e5; opacity: 0.8;
        }
        .legal-chat-header-actions { display: flex; gap: 6px; }
        .legal-chat-action-btn {
          width: 32px; height: 32px; border-radius: 8px;
          display: flex; align-items: center; justify-content: center;
          background: rgba(0,0,0,0.04);
          border: none; cursor: pointer;
          color: #64748b;
          transition: all 0.2s;
        }
        .dark .legal-chat-action-btn { background: rgba(255,255,255,0.05); color: #94a3b8; }
        .legal-chat-action-btn:hover { color: #4f46e5; background: rgba(79,70,229,0.1); }

        /* ── HISTORY BUTTON & PANEL ──────────────────────── */
        .legal-history-btn-wrap {
          position: relative;
          margin-left: auto;
          flex-shrink: 0;
        }
        .legal-history-btn {
          background: rgba(0,0,0,0.04) !important;
          border: 1px solid rgba(0,0,0,0.06) !important;
        }
        .dark .legal-history-btn {
          background: rgba(255,255,255,0.06) !important;
          border-color: rgba(255,255,255,0.08) !important;
        }
        .legal-history-panel {
          position: absolute;
          top: calc(100% + 10px);
          right: 0;
          width: 260px;
          max-height: 360px;
          background: #ffffff;
          border: 1px solid rgba(0,0,0,0.08);
          border-radius: 16px;
          box-shadow: 0 8px 32px rgba(0,0,0,0.12);
          z-index: 50;
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }
        .dark .legal-history-panel {
          background: #1e293b;
          border-color: rgba(255,255,255,0.08);
          box-shadow: 0 8px 32px rgba(0,0,0,0.4);
        }
        .legal-history-panel-header {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 12px 16px;
          font-size: 12px;
          font-weight: 800;
          color: #1e293b;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          border-bottom: 1px solid rgba(0,0,0,0.06);
          flex-shrink: 0;
        }
        .dark .legal-history-panel-header {
          color: #f1f5f9;
          border-color: rgba(255,255,255,0.06);
        }
        .legal-history-list {
          overflow-y: auto;
          padding: 6px;
          display: flex;
          flex-direction: column;
          gap: 2px;
        }
        .legal-history-list::-webkit-scrollbar { width: 4px; }
        .legal-history-list::-webkit-scrollbar-thumb { background: rgba(0,0,0,0.1); border-radius: 4px; }
        .dark .legal-history-list::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.1); }
        .legal-history-item {
          display: flex;
          align-items: center;
          gap: 9px;
          padding: 9px 12px;
          border-radius: 10px;
          border: none;
          background: none;
          cursor: pointer;
          text-align: left;
          color: #475569;
          font-size: 13px;
          font-weight: 600;
          transition: all 0.15s;
          width: 100%;
        }
        .legal-history-item span {
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          flex: 1;
        }
        .legal-history-item:hover {
          background: rgba(79,70,229,0.06);
          color: #4f46e5;
        }
        .dark .legal-history-item { color: #94a3b8; }
        .dark .legal-history-item:hover {
          background: rgba(129,140,248,0.1);
          color: #818cf8;
        }
        .legal-history-item.active {
          background: rgba(79,70,229,0.1);
          color: #4f46e5;
          font-weight: 800;
        }
        .dark .legal-history-item.active {
          background: rgba(129,140,248,0.15);
          color: #818cf8;
        }
        .legal-history-empty {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 32px 16px;
          color: #94a3b8;
          gap: 10px;
          font-size: 12px;
          font-weight: 600;
        }
        .legal-history-empty p { margin: 0; }
        .legal-history-item-wrap {
          position: relative;
          display: flex;
          align-items: center;
          border-radius: 10px;
          overflow: hidden;
        }
        .legal-history-item-wrap .legal-history-item {
          flex: 1;
          min-width: 0;
          border-radius: 10px 0 0 10px;
        }
        .legal-history-item-actions {
          display: none;
          align-items: center;
          gap: 2px;
          padding: 0 6px;
          flex-shrink: 0;
          background: rgba(241,245,249,0.9);
          height: 100%;
          min-height: 36px;
        }
        .dark .legal-history-item-actions {
          background: rgba(30,41,59,0.9);
        }
        .legal-history-item-wrap:hover .legal-history-item-actions {
          display: flex;
        }
        .legal-history-action-btn {
          width: 26px;
          height: 26px;
          border-radius: 6px;
          border: none;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          background: none;
          color: #94a3b8;
          transition: all 0.15s;
          flex-shrink: 0;
        }
        .legal-history-action-btn:hover {
          background: rgba(79,70,229,0.1);
          color: #4f46e5;
        }
        .legal-history-action-btn.pinned {
          color: #f59e0b;
        }
        .legal-history-action-btn.pinned:hover {
          background: rgba(245,158,11,0.1);
          color: #d97706;
        }
        .legal-history-action-btn.delete:hover {
          background: rgba(239,68,68,0.1);
          color: #ef4444;
        }
        .dark .legal-history-action-btn { color: #475569; }
        .dark .legal-history-action-btn:hover { background: rgba(129,140,248,0.1); color: #818cf8; }
        .legal-history-section-label {
          font-size: 10px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          color: #94a3b8;
          padding: 6px 12px 4px;
        }
        .dark .legal-history-section-label { color: #475569; }
        .legal-history-divider {
          height: 1px;
          background: rgba(0,0,0,0.06);
          margin: 4px 8px;
        }
        .dark .legal-history-divider { background: rgba(255,255,255,0.06); }

        /* ── MESSAGES ───────────────────────────────────── */
        .legal-chat-messages {
          flex: 1; overflow-y: auto; padding: 14px 16px 12px;
          display: flex; flex-direction: column; gap: 16px;
          scroll-behavior: smooth;
          min-height: 0;
          height: 0;
        }
        .legal-chat-messages::-webkit-scrollbar {
          width: 6px;
        }
        .legal-chat-messages::-webkit-scrollbar-track {
          background: transparent;
        }
        .legal-chat-messages::-webkit-scrollbar-thumb {
          background: rgba(0, 0, 0, 0.12);
          border-radius: 10px;
        }
        .dark .legal-chat-messages::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.15);
        }
        .legal-msg-row { display: flex; gap: 10px; max-width: 85%; }
        .legal-msg-ai { align-self: flex-start; }
        .legal-msg-user { align-self: flex-end; flex-direction: row-reverse; }
        .legal-msg-avatar {
          width: 30px; height: 30px; border-radius: 10px; flex-shrink: 0;
          background: linear-gradient(135deg, #4f46e5, #7c3aed);
          display: flex; align-items: center; justify-content: center;
          color: white; margin-top: 2px;
        }
        .legal-msg-bubble { border-radius: 18px; padding: 12px 16px; max-width: 100%; }
        .legal-bubble-ai {
          background: #ffffff;
          border: 1px solid rgba(0,0,0,0.06);
          border-bottom-left-radius: 6px;
        }
        .dark .legal-bubble-ai {
          background: #1e293b;
          border-color: rgba(255,255,255,0.06);
        }
        .legal-bubble-user {
          background: #f1f5f9;
          color: #0f172a;
          border-bottom-right-radius: 6px;
        }
        .dark .legal-bubble-user {
          background: #1e293b;
          color: #f1f5f9;
        }
        .legal-msg-ai-text {
          font-size: 14px; line-height: 1.65;
          color: #1e293b;
        }
        .dark .legal-msg-ai-text { color: #e2e8f0; }
        .legal-msg-ai-text p { margin: 0 0 8px; }
        .legal-msg-ai-text p:last-child { margin-bottom: 0; }
        .legal-msg-ai-text strong { font-weight: 700; color: #0f172a; }
        .dark .legal-msg-ai-text strong { color: #f1f5f9; }
        .legal-msg-ai-text ul, .legal-msg-ai-text ol { margin: 4px 0; padding-left: 20px; }
        .legal-msg-ai-text li { margin-bottom: 4px; }
        .legal-msg-ai-text code {
          background: rgba(0,0,0,0.06);
          padding: 2px 6px; border-radius: 4px; font-size: 13px;
        }
        .dark .legal-msg-ai-text code { background: rgba(255,255,255,0.08); }
        .legal-msg-ai-text pre {
          background: #f1f5f9;
          padding: 12px; border-radius: 8px; overflow-x: auto; margin: 8px 0;
        }
        .dark .legal-msg-ai-text pre { background: #0f172a; }
        .legal-msg-ai-text pre code { background: none; padding: 0; }
        .legal-msg-ai-text table {
          width: 100%; border-collapse: collapse; margin: 8px 0; font-size: 13px;
        }
        .legal-msg-ai-text th, .legal-msg-ai-text td {
          border: 1px solid rgba(0,0,0,0.1);
          padding: 6px 10px; text-align: left;
        }
        .dark .legal-msg-ai-text th, .dark .legal-msg-ai-text td {
          border-color: rgba(255,255,255,0.1);
        }
        .legal-msg-ai-text th {
          background: rgba(79,70,229,0.08);
          font-weight: 700;
        }
        .dark .legal-msg-ai-text th { background: rgba(79,70,229,0.15); }
        .legal-msg-user-text { margin: 0; font-size: 14px; line-height: 1.6; color: #0f172a; }
        .dark .legal-msg-user-text { color: #f1f5f9; }
        .legal-msg-attachment-chip {
          display: flex; align-items: center; gap: 6px;
          padding: 4px 10px; border-radius: 8px; margin-bottom: 6px;
          background: rgba(79,70,229,0.12); font-size: 12px; font-weight: 600;
          color: #4338ca;
        }
        .dark .legal-msg-attachment-chip { color: #c7d2fe; }
        .legal-msg-footer {
          display: flex; align-items: center; gap: 8px; margin-top: 6px;
        }
        .legal-msg-time {
          font-size: 10px; font-weight: 600; opacity: 0.5;
          color: inherit;
        }
        .legal-msg-copy-btn {
          background: none; border: none; cursor: pointer; padding: 2px;
          color: #94a3b8; display: flex; align-items: center;
          transition: color 0.2s;
        }
        .dark .legal-msg-copy-btn { color: #64748b; }
        .legal-msg-copy-btn:hover { color: #4f46e5; }

        .legal-research-action-bar {
          display: flex;
          align-items: center;
          gap: 8px;
          color: #64748b;
          border-top: 1px solid rgba(0,0,0,0.06);
          margin-top: 12px;
          padding-top: 12px;
          flex-wrap: wrap;
        }
        .dark .legal-research-action-bar {
          border-top-color: rgba(255,255,255,0.08);
          color: #94a3b8;
        }
        .legal-research-action-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: none;
          border: none;
          padding: 4px 8px;
          font-size: 11px;
          font-weight: 700;
          color: inherit;
          cursor: pointer;
          border-radius: 6px;
          transition: all 0.2s;
        }
        .legal-research-action-btn:hover {
          color: #4f46e5;
          background: rgba(79,70,229,0.06);
        }
        .dark .legal-research-action-btn:hover {
          color: #818cf8;
          background: rgba(129,140,248,0.1);
        }

        /* ── TYPING ─────────────────────────────────────── */
        .legal-typing-bubble { padding: 14px 20px !important; }
        .legal-typing-dots { display: flex; gap: 5px; align-items: center; }
        .legal-typing-dots span {
          width: 7px; height: 7px; border-radius: 50%; background: #4f46e5;
          animation: legalBounce 1.4s infinite ease-in-out both;
        }
        .legal-typing-dots span:nth-child(1) { animation-delay: 0s; }
        .legal-typing-dots span:nth-child(2) { animation-delay: 0.16s; }
        .legal-typing-dots span:nth-child(3) { animation-delay: 0.32s; }
        @keyframes legalBounce {
          0%, 80%, 100% { transform: scale(0.6); opacity: 0.4; }
          40% { transform: scale(1); opacity: 1; }
        }

        /* ── INPUT AREA ─────────────────────────────────── */
        .legal-chat-input-area {
          flex-shrink: 0;
          padding: 8px 12px 0px 12px;
          background: #ffffff;
          border-top: 1px solid rgba(0,0,0,0.06);
        }
        .dark .legal-chat-input-area {
          background: #1e293b;
          border-top-color: rgba(255,255,255,0.06);
        }
        .legal-attachment-preview {
          display: flex; align-items: center; gap: 8px;
          padding: 6px 12px; margin-bottom: 8px;
          background: rgba(79,70,229,0.08);
          border-radius: 10px; font-size: 12px; font-weight: 600;
          color: #4338ca;
        }
        .dark .legal-attachment-preview { background: rgba(79,70,229,0.12); color: #c7d2fe; }
        .legal-attachment-name {
          flex: 1; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
        }
        .legal-attachment-remove {
          background: none; border: none; cursor: pointer; padding: 2px;
          color: #64748b; display: flex;
        }
        .dark .legal-attachment-remove { color: #94a3b8; }
        .legal-chat-input-row {
          display: flex;
          align-items: flex-end;
          gap: 10px;
          width: 100%;
        }
        .legal-chat-input-buttons {
          display: flex;
          align-items: center;
          gap: 8px;
          flex-shrink: 0;
          margin-bottom: 4px;
        }
        .legal-input-action-btn {
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
        .dark .legal-input-action-btn {
          background: #1e293b;
          border-color: rgba(255,255,255,0.06);
          color: #94a3b8;
        }
        .legal-input-action-btn:hover {
          color: #4f46e5;
          background: #e2e8f0;
          transform: scale(1.05);
        }
        .dark .legal-input-action-btn:hover {
          color: #818cf8;
          background: #334155;
        }
        .legal-input-action-btn.active {
          color: #4f46e5;
          background: rgba(79,70,229,0.1);
          border-color: rgba(79,70,229,0.2);
        }
        .dark .legal-input-action-btn.active {
          color: #818cf8;
          background: rgba(129,140,248,0.15);
          border-color: rgba(129,140,248,0.25);
        }
        /* Pill variant with icon + label text */
        .legal-input-action-btn-label {
          width: auto !important;
          border-radius: 20px !important;
          padding: 0 12px !important;
          gap: 5px;
          font-size: 11px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.4px;
          white-space: nowrap;
        }
        .legal-input-action-btn-label:hover {
          transform: none !important;
        }
        .legal-input-action-btn-cases {
          background: rgba(79,70,229,0.08);
          border-color: rgba(79,70,229,0.15);
          color: #4f46e5;
        }
        .dark .legal-input-action-btn-cases {
          background: rgba(129,140,248,0.1);
          border-color: rgba(129,140,248,0.15);
          color: #818cf8;
        }
        .legal-input-action-btn-cases:hover {
          background: rgba(79,70,229,0.15);
          border-color: rgba(79,70,229,0.3);
          color: #4f46e5;
        }
        .dark .legal-input-action-btn-cases:hover {
          background: rgba(129,140,248,0.2);
          border-color: rgba(129,140,248,0.3);
          color: #818cf8;
        }
        .legal-chat-input-form {
          flex: 1; min-width: 0;
          display: flex; align-items: flex-end; gap: 6px;
          background: #f1f5f9;
          border-radius: 24px; padding: 6px 8px;
          border: 1px solid rgba(0,0,0,0.06);
          transition: border-color 0.2s;
        }
        .dark .legal-chat-input-form {
          background: #0f172a;
          border-color: rgba(255,255,255,0.06);
        }
        .legal-chat-input-form:focus-within {
          border-color: rgba(79,70,229,0.4);
        }
        .legal-input-icon-btn {
          width: 34px; height: 34px; border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          background: none; border: none; cursor: pointer;
          color: #94a3b8; flex-shrink: 0;
          transition: color 0.2s;
        }
        .dark .legal-input-icon-btn { color: #64748b; }
        .legal-input-icon-btn:hover { color: #4f46e5; }
        .legal-cases-btn {
          display: flex; align-items: center; gap: 4px;
          padding: 5px 10px; border-radius: 20px;
          background: rgba(79,70,229,0.1); border: 1px solid rgba(79,70,229,0.2);
          color: #4f46e5; font-size: 11px; font-weight: 800;
          cursor: pointer; white-space: nowrap; flex-shrink: 0;
          text-transform: uppercase; letter-spacing: 0.5px;
          transition: all 0.2s;
        }
        .legal-cases-btn:hover { background: rgba(79,70,229,0.18); }
        .legal-chat-input {
          flex: 1; border: none; outline: none; background: transparent;
          font-size: 14px; line-height: 1.5; resize: none;
          color: #1e293b;
          min-height: 34px; max-height: 120px; padding: 6px 4px;
          font-family: inherit;
        }
        .dark .legal-chat-input { color: #e2e8f0; }
        .legal-chat-input::placeholder { color: #94a3b8; }
        .dark .legal-chat-input::placeholder { color: #475569; }
        .legal-send-btn {
          width: 34px; height: 34px; border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          border: none; cursor: pointer; color: white; flex-shrink: 0;
          transition: all 0.2s;
        }
        .legal-send-btn:disabled { opacity: 0.4; cursor: not-allowed; }
        .legal-send-btn:not(:disabled):hover { transform: scale(1.05); }

        /* ── NEW CHAT BUTTON ────────────────────────────── */
        .legal-new-chat-btn {
          display: flex; align-items: center; gap: 5px;
          padding: 5px 12px; border-radius: 20px; flex-shrink: 0;
          background: #f1f5f9; border: 1px solid rgba(0,0,0,0.08);
          color: #64748b; font-size: 11px; font-weight: 800;
          cursor: pointer; white-space: nowrap;
          text-transform: uppercase; letter-spacing: 0.5px;
          transition: all 0.2s; min-height: 34px;
        }
        .dark .legal-new-chat-btn {
          background: rgba(255,255,255,0.05);
          border-color: rgba(255,255,255,0.08);
          color: #94a3b8;
        }
        .legal-new-chat-btn:hover {
          background: rgba(79,70,229,0.1);
          border-color: rgba(79,70,229,0.3);
          color: #4f46e5;
        }
        .legal-new-chat-btn:active { transform: scale(0.96); }

        /* ── HISTORY SESSION DROPDOWN ───────────────────── */
        .legal-chat-history-select {
          background: #f1f5f9;
          border: 1px solid rgba(0,0,0,0.08);
          border-radius: 14px;
          color: #334155;
          font-size: 11px; font-weight: 700;
          padding: 5px 10px;
          outline: none; cursor: pointer;
          max-width: 180px;
          text-overflow: ellipsis;
          transition: border-color 0.2s;
        }
        .dark .legal-chat-history-select {
          background: rgba(255,255,255,0.06);
          border-color: rgba(255,255,255,0.1);
          color: #e2e8f0;
        }
        .legal-chat-history-select:focus {
          border-color: rgba(79,70,229,0.5);
        }

        /* ── CASES SHEET ────────────────────────────────── */
        .legal-cases-overlay {
          position: fixed; inset: 0; background: rgba(0,0,0,0.5);
          z-index: 1000; backdrop-filter: blur(4px);
        }
        .legal-cases-container {
          position: fixed; inset: 0;
          display: flex; align-items: flex-end; justify-content: center;
          z-index: 1001; pointer-events: none;
        }
        .legal-cases-sheet {
          position: relative; width: 100%;
          max-height: 70vh;
          background: #ffffff;
          border-top-left-radius: 24px; border-top-right-radius: 24px;
          display: flex; flex-direction: column;
          box-shadow: 0 -4px 30px rgba(0,0,0,0.15);
          pointer-events: auto;
        }
        .dark .legal-cases-sheet { background: #1e293b; }
        .legal-cases-sheet-drag {
          display: flex; justify-content: center; padding: 10px 0 6px;
        }
        .legal-cases-drag-bar {
          width: 40px; height: 4px; border-radius: 2px;
          background: rgba(0,0,0,0.12);
        }
        .dark .legal-cases-drag-bar { background: rgba(255,255,255,0.15); }
        .legal-cases-sheet-header {
          display: flex; align-items: center; gap: 10px;
          padding: 8px 20px 12px; font-weight: 800;
        }
        .legal-cases-sheet-header h3 {
          flex: 1; margin: 0; font-size: 16px;
          color: #0f172a;
        }
        .dark .legal-cases-sheet-header h3 { color: #f1f5f9; }
        .legal-cases-close {
          position: absolute;
          top: 16px;
          right: 16px;
          background: none;
          border: none;
          cursor: pointer;
          padding: 4px;
          color: #94a3b8;
        }
        .dark .legal-cases-close { color: #64748b; }
        .legal-cases-search-container {
          display: flex;
          align-items: center;
          gap: 10px;
          margin: 0 16px 12px;
        }
        .legal-cases-search-wrap {
          display: flex; align-items: center; gap: 8px;
          flex: 1; padding: 8px 14px;
          background: rgba(0,0,0,0.04);
          border-radius: 12px;
          color: #94a3b8;
        }
        .dark .legal-cases-search-wrap { background: rgba(255,255,255,0.05); color: #64748b; }
        .legal-cases-search {
          flex: 1; border: none; outline: none; background: transparent;
          font-size: 13px; color: #1e293b;
        }
        .dark .legal-cases-search { color: #e2e8f0; }
        .legal-cases-search::placeholder { color: #94a3b8; }
        .dark .legal-cases-search::placeholder { color: #475569; }

        .legal-filter-toggle-btn {
          display: flex; align-items: center; gap: 6px;
          padding: 8px 14px; border-radius: 12px;
          border: 1px solid rgba(0,0,0,0.08);
          background: #ffffff; color: #475569;
          font-size: 12px; font-weight: 700;
          cursor: pointer; transition: all 0.2s;
        }
        .dark .legal-filter-toggle-btn {
          border-color: rgba(255,255,255,0.08);
          background: #1e293b; color: #94a3b8;
        }
        .legal-filter-toggle-btn:hover, .legal-filter-toggle-btn.active {
          color: #4f46e5; border-color: rgba(79,70,229,0.3);
          background: rgba(79,70,229,0.05);
        }

        /* Filters Grid */
        .legal-cases-filters-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 10px;
          margin: 0 16px 12px;
          padding: 12px;
          background: rgba(0,0,0,0.02);
          border-radius: 14px;
          border: 1px solid rgba(0,0,0,0.04);
          box-sizing: border-box;
        }
        .dark .legal-cases-filters-grid {
          background: rgba(255,255,255,0.02);
          border-color: rgba(255,255,255,0.04);
        }
        @media (max-width: 600px) {
          .legal-cases-filters-grid {
            grid-template-columns: 1fr;
          }
        }
        .legal-filter-group {
          display: flex; flex-direction: column; gap: 4px;
          min-width: 0;
        }
        .legal-filter-group label {
          font-size: 10px; font-weight: 800; color: #64748b;
          text-transform: uppercase; letter-spacing: 0.5px;
        }
        .dark .legal-filter-group label { color: #475569; }
        .legal-filter-group input, .legal-filter-group select {
          width: 100%;
          max-width: 100%;
          box-sizing: border-box;
          padding: 6px 10px; border-radius: 8px;
          border: 1px solid rgba(0,0,0,0.1);
          background: #ffffff; color: #1e293b;
          font-size: 12px; outline: none;
        }
        .dark .legal-filter-group input, .dark .legal-filter-group select {
          border-color: rgba(255,255,255,0.1);
          background: #0f172a; color: #e2e8f0;
        }
        .legal-clear-filters-btn {
          grid-column: 1 / -1;
          padding: 8px; border-radius: 8px;
          background: rgba(239, 68, 68, 0.08);
          border: 1px dashed rgba(239, 68, 68, 0.2);
          color: #ef4444; font-size: 11px; font-weight: 700;
          cursor: pointer; text-transform: uppercase;
          letter-spacing: 0.5px; transition: all 0.2s;
        }
        .legal-clear-filters-btn:hover {
          background: rgba(239, 68, 68, 0.15);
        }

        /* Cases list */
        .legal-cases-list {
          flex: 1; overflow-y: auto; padding: 0 16px 20px;
          display: flex; flex-direction: column; gap: 10px;
        }

        /* Case Card */
        .legal-case-card {
          background: #ffffff;
          border: 1px solid rgba(0,0,0,0.06);
          border-radius: 16px; padding: 16px;
          display: flex; flex-direction: column; gap: 10px;
          box-shadow: 0 1px 3px rgba(0,0,0,0.02);
          transition: all 0.2s;
        }
        .dark .legal-case-card {
          background: #1e293b; border-color: rgba(255,255,255,0.06);
        }
        .legal-case-card:hover {
          border-color: rgba(79,70,229,0.2);
          box-shadow: 0 4px 12px rgba(79,70,229,0.05);
        }
        .legal-case-card-header {
          display: flex; flex-direction: column; gap: 4px;
        }
        .legal-case-card-title-row {
          display: flex; justify-content: space-between;
          align-items: flex-start; gap: 12px;
        }
        @media (max-width: 480px) {
          .legal-case-card-title-row {
            flex-direction: column; align-items: flex-start; gap: 6px;
          }
        }
        .legal-case-card-name {
          font-size: 14px; font-weight: 800; color: #0f172a;
          line-height: 1.4;
        }
        .dark .legal-case-card-name { color: #f1f5f9; }
        
        .legal-case-card-badges {
          display: flex; gap: 6px; flex-shrink: 0; align-items: center;
        }
        .legal-landmark-badge {
          display: inline-flex; align-items: center; gap: 4px;
          padding: 3px 8px; border-radius: 6px;
          background: rgba(245, 158, 11, 0.1);
          color: #d97706; font-size: 9px; font-weight: 800;
          text-transform: uppercase; letter-spacing: 0.5px;
          border: 1px solid rgba(245, 158, 11, 0.2);
        }
        .legal-category-badge {
          display: inline-flex; align-items: center;
          padding: 3px 8px; border-radius: 6px;
          background: rgba(79,70,229,0.08);
          color: #4f46e5; font-size: 9px; font-weight: 800;
          text-transform: uppercase; letter-spacing: 0.5px;
        }
        .dark .legal-category-badge {
          background: rgba(99, 102, 241, 0.15); color: #818cf8;
        }

        .legal-case-card-body {
          display: flex; flex-direction: column; gap: 8px;
        }
        .legal-case-summary-short {
          margin: 0; font-size: 12px; line-height: 1.5; color: #475569;
        }
        .dark .legal-case-summary-short { color: #94a3b8; }
        
        .legal-case-meta-tags {
          display: flex; flex-wrap: wrap; gap: 8px;
        }
        .legal-case-meta-tag {
          display: flex; align-items: center; gap: 4px;
          font-size: 10px; font-weight: 700; color: #64748b;
          background: rgba(0,0,0,0.03); padding: 4px 8px; border-radius: 6px;
        }
        .dark .legal-case-meta-tag {
          color: #94a3b8; background: rgba(255,255,255,0.03);
        }

        /* Actions row */
        .legal-case-actions {
          display: flex; justify-content: space-between; align-items: center;
          margin-top: 8px; padding-top: 12px;
          border-top: 1px solid rgba(0,0,0,0.04);
        }
        .dark .legal-case-actions {
          border-top-color: rgba(255,255,255,0.04);
        }
        .legal-case-details-toggle {
          background: none; border: none; cursor: pointer;
          display: flex; align-items: center; gap: 4px;
          color: #4f46e5; font-size: 12px; font-weight: 750;
        }
        .legal-case-select-btn {
          display: flex; align-items: center; gap: 6px;
          padding: 6px 12px; border: none; border-radius: 8px;
          color: #ffffff; font-size: 11px; font-weight: 800;
          text-transform: uppercase; cursor: pointer; transition: all 0.2s;
        }
        .legal-case-select-btn:hover {
          transform: translateY(-1px); filter: brightness(1.1);
        }

        /* Expanded Panel Styling */
        .legal-case-details-expanded {
          display: flex; flex-direction: column; gap: 14px;
          background: rgba(0,0,0,0.015); border-radius: 12px;
          padding: 14px; border: 1px solid rgba(0,0,0,0.03);
          margin-top: 6px;
        }
        .dark .legal-case-details-expanded {
          background: rgba(255,255,255,0.01); border-color: rgba(255,255,255,0.03);
        }
        .legal-expanded-section {
          display: flex; flex-direction: column; gap: 6px;
        }
        .legal-expanded-section h4 {
          margin: 0; font-size: 11px; font-weight: 800; color: #1e293b;
          text-transform: uppercase; letter-spacing: 0.5px;
        }
        .dark .legal-expanded-section h4 { color: #f1f5f9; }
        .legal-expanded-section p {
          margin: 0; font-size: 12px; line-height: 1.5; color: #475569;
        }
        .dark .legal-expanded-section p { color: #94a3b8; }

        /* Tables */
        .legal-table-wrapper {
          overflow-x: auto; border-radius: 8px;
          border: 1px solid rgba(0,0,0,0.06);
          background: #ffffff;
        }
        .dark .legal-table-wrapper {
          border-color: rgba(255,255,255,0.06); background: #0f172a;
        }
        .legal-table {
          width: 100%; border-collapse: collapse; text-align: left;
          font-size: 11px;
        }
        .legal-table th, .legal-table td {
          padding: 8px 10px; border-bottom: 1px solid rgba(0,0,0,0.06);
        }
        .dark .legal-table th, .dark .legal-table td {
          border-color: rgba(255,255,255,0.06);
        }
        .legal-table th {
          background: rgba(0,0,0,0.02); font-weight: 800; color: #475569;
        }
        .dark .legal-table th {
          background: rgba(255,255,255,0.02); color: #94a3b8;
        }
        .legal-table tr:last-child td {
          border-bottom: none;
        }

        .text-red-655 { color: #dc2626; }
        .dark .text-red-655 { color: #f87171; }
        .text-indigo-605 { color: #4f46e5; }
        .dark .text-indigo-605 { color: #818cf8; }

        /* Landmark list */
        .legal-landmark-list {
          display: flex; flex-direction: column; gap: 8px;
        }
        .legal-landmark-item {
          background: #ffffff; border-radius: 8px; padding: 10px;
          border-left: 3px solid #f59e0b; border: 1px solid rgba(0,0,0,0.05);
          box-shadow: 0 1px 2px rgba(0,0,0,0.01);
        }
        .dark .legal-landmark-item {
          background: #0f172a; border-color: rgba(255,255,255,0.05);
        }
        .legal-landmark-item-header {
          display: flex; align-items: center; gap: 4px;
        }
        .legal-landmark-item-header h5 {
          margin: 0; font-size: 11px; font-weight: 800; color: #1e293b;
        }
        .dark .legal-landmark-item-header h5 { color: #e2e8f0; }
        .legal-landmark-item-meta {
          font-size: 9px; font-weight: 700; color: #94a3b8; margin-top: 2px;
        }
        .legal-landmark-item-principle {
          margin: 4px 0 0; font-size: 11px; line-height: 1.4; color: #475569;
        }
        .dark .legal-landmark-item-principle { color: #94a3b8; }

        .legal-cases-empty-state {
          display: flex; flex-direction: column; align-items: center; justify-content: center;
          padding: 40px 20px; color: #94a3b8; text-align: center; gap: 10px;
        }
        .legal-cases-empty-state p { margin: 0; font-size: 12px; font-weight: 600; }

        /* Pagination */
        .legal-pagination {
          display: flex; justify-content: space-between; align-items: center;
          padding: 10px 16px 16px; border-top: 1px solid rgba(0,0,0,0.06);
          background: #ffffff;
        }
        .dark .legal-pagination {
          background: #1e293b; border-top-color: rgba(255,255,255,0.06);
        }
        .legal-pagination-btn {
          display: flex; align-items: center; gap: 4px;
          padding: 6px 12px; border-radius: 8px;
          border: 1px solid rgba(0,0,0,0.08); background: #ffffff;
          color: #475569; font-size: 11px; font-weight: 700;
          cursor: pointer; transition: all 0.2s;
        }
        .dark .legal-pagination-btn {
          border-color: rgba(255,255,255,0.08); background: #0f172a;
          color: #94a3b8;
        }
        .legal-pagination-btn:hover:not(:disabled) {
          border-color: rgba(79,70,229,0.3); color: #4f46e5;
          background: rgba(79,70,229,0.05);
        }
        .legal-pagination-btn:disabled {
          opacity: 0.4; cursor: not-allowed;
        }
        .legal-pagination-info {
          font-size: 11px; font-weight: 750; color: #64748b;
        }

        /* ── RESPONSIVE ─────────────────────────────────── */
        /* Tiny phones (iPhone SE, Galaxy S8 — 320px-374px) */
        @media (max-width: 374px) {
          .legal-msg-row { max-width: 95%; }
          .legal-chat-messages { padding: 12px 8px 6px; gap: 10px; }
          .legal-chat-header { padding: calc(8px + env(safe-area-inset-top, 0px)) 10px 8px; gap: 8px; }
          .legal-chat-header-icon { width: 28px; height: 28px; border-radius: 8px; }
          .legal-chat-header-title { font-size: 13px; }
          .legal-chat-input-area { padding: 5px 6px 0px; }
          .legal-chat-input-form { padding: 4px 6px; border-radius: 20px; }
          .legal-chat-input { font-size: 13px; min-height: 30px; }
          .legal-input-icon-btn { width: 30px; height: 30px; }
          .legal-send-btn { width: 30px; height: 30px; }
          .legal-input-action-btn { width: 32px; height: 32px; }
          .legal-chat-input-buttons { gap: 4px; margin-bottom: 2px; }
          .legal-msg-bubble { padding: 10px 12px; border-radius: 14px; }
          .legal-msg-ai-text { font-size: 13px; line-height: 1.55; }
          .legal-msg-user-text { font-size: 13px; }
          .legal-msg-avatar { width: 26px; height: 26px; border-radius: 8px; }
          .legal-cases-btn span { display: none; }
          .legal-cases-btn { padding: 5px 6px; }
          .legal-chat-action-btn { width: 28px; height: 28px; }
          .legal-chat-back-btn { width: 32px; height: 32px; }
        }
        /* Small phones (375px-639px) */
        @media (min-width: 375px) and (max-width: 639px) {
          .legal-msg-row { max-width: 92%; }
          .legal-chat-messages { padding: 14px 10px 8px; gap: 12px; }
          .legal-chat-header { padding: calc(10px + env(safe-area-inset-top, 0px)) 12px 10px; }
          .legal-chat-input-area { padding: 6px 8px 0px; }
          .legal-input-action-btn { width: 34px; height: 34px; }
          .legal-chat-input-buttons { gap: 6px; margin-bottom: 3px; }
          .legal-cases-btn span { display: none; }
          .legal-cases-btn { padding: 6px 8px; }
        }
        /* Foldables & small tablets (600px-767px) */
        @media (min-width: 600px) and (max-width: 767px) {
          .legal-msg-row { max-width: 85%; }
          .legal-chat-messages { padding: 14px 16px 12px; gap: 14px; }
          .legal-chat-header { padding: calc(12px + env(safe-area-inset-top, 0px)) 20px 12px; }
          .legal-chat-input-area { padding: 8px 14px 0px; }
          .legal-cases-container { align-items: center; padding: 20px; }
          .legal-cases-sheet { max-width: 400px; border-radius: 24px; max-height: 80vh; }
        }
        /* Tablets portrait (768px-1023px) */
        @media (min-width: 768px) and (max-width: 1023px) {
          .legal-msg-row { max-width: 80%; }
          .legal-chat-messages { padding: 16px 5% 14px; gap: 16px; }
          .legal-chat-header { padding: calc(14px + env(safe-area-inset-top, 0px)) 24px 14px; }
          .legal-chat-input-area { padding: 10px 20px 0px; }
          .legal-cases-container { align-items: center; padding: 24px; }
          .legal-cases-sheet { max-width: 420px; border-radius: 24px; max-height: 80vh; }
        }
        /* Desktop (1024px-1279px) */
        @media (min-width: 1024px) {
          .legal-chat-messages { padding: 16px 8%; }
          .legal-msg-row { max-width: 72%; }
          .legal-cases-container { align-items: center; padding: 24px; }
          .legal-cases-sheet { max-width: 480px; border-radius: 24px; max-height: 80vh; }
        }
        /* Large desktop (1280px-1919px) */
        @media (min-width: 1280px) {
          .legal-chat-messages { padding: 16px 12%; }
          .legal-msg-row { max-width: 65%; }
        }
        /* Ultra-wide / 4K (1920px+) */
        @media (min-width: 1920px) {
          .legal-chat-messages { padding: 16px 18%; }
          .legal-msg-row { max-width: 55%; }
          .legal-msg-ai-text { font-size: 15px; }
          .legal-msg-user-text { font-size: 15px; }
        }
        /* Landscape phones — reduce vertical space */
        @media (max-height: 500px) and (orientation: landscape) {
          .legal-chat-header { padding: 6px 12px; }
          .legal-chat-header-icon { width: 28px; height: 28px; }
          .legal-chat-input-area { padding: 4px 10px 0px; }
          .legal-chat-input-form { padding: 4px 6px; }
          .legal-chat-input { min-height: 28px; max-height: 80px; }
          .legal-msg-row { max-width: 75%; }
          .legal-chat-messages { padding: 10px 8px 6px; gap: 8px; }
        }
      ` })
  ] });
};
export {
  LegalChatScreen as default
};
