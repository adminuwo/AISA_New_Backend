import { c as createLucideIcon, r as reactExports, j as jsxRuntimeExports, G as Globe, a0 as Check, X, ai as ChevronDown, v as Search, bU as Landmark, l as Shield, z as zt, t as Scale, W as Plus, bV as useOutputLanguage, bW as mapCaseToForm, a as apiService, bX as ChevronLeft, bY as Copy, bZ as Share2, b_ as Download, V as Save, b$ as Folder, c0 as CircleCheck, e as ChevronRight, F as FileText, C as CircleAlert, k as Sparkles, bN as Gavel, c1 as PenLine, c2 as History, c3 as ChevronUp, c4 as LanguageToggle, c5 as CopyOutputButton, c6 as FileDown, bQ as FileCheck, c7 as consumePrefillIntent, s as Lock, J as CreditCard, bM as Briefcase, I as Users, c8 as generateChatResponse } from "./index-CifJr-sK.js";
import { P as Printer } from "./printer-ZcOkpCIc.js";
import { P as PanelsTopLeft } from "./panels-top-left-B88_ItE1.js";
/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["path", { d: "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8", key: "5wwlr5" }],
  [
    "path",
    {
      d: "M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
      key: "1d0kgt"
    }
  ]
];
const House = createLucideIcon("House", __iconNode$1);
/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  [
    "path",
    {
      d: "M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16",
      key: "tarvll"
    }
  ]
];
const Laptop = createLucideIcon("Laptop", __iconNode);
const DRAFT_TEMPLATES = {
  // ══════════════════════ CRIMINAL LAW ══════════════════════
  "FIR Draft": {
    category: "CRIMINAL LAW",
    courtHeader: "BEFORE THE STATION HOUSE OFFICER",
    fields: [
      { key: "complainantName", label: "Complainant Name", type: "text", required: true, placeholder: "Full name of the complainant" },
      { key: "complainantAddress", label: "Complainant Address", type: "text", required: true, placeholder: "Full residential address" },
      { key: "policeStation", label: "Police Station", type: "text", required: true, placeholder: "Name of the Police Station" },
      { key: "district", label: "District", type: "text", required: true, placeholder: "District name" },
      { key: "accusedName", label: "Name of Accused", type: "text", required: true, placeholder: "Name(s) of accused person(s)" },
      { key: "accusedAddress", label: "Address of Accused", type: "text", required: false, placeholder: "Known address of accused" },
      { key: "incidentDate", label: "Date of Incident", type: "date", required: true },
      { key: "incidentPlace", label: "Place of Incident", type: "text", required: true, placeholder: "Exact location where incident occurred" },
      { key: "ipcSections", label: "IPC Sections Applicable", type: "text", required: false, placeholder: "e.g., IPC 420, 406, 120B" },
      { key: "incidentFacts", label: "Facts of the Incident", type: "textarea", required: true, placeholder: "Describe the incident in detail — who, what, when, where, how..." },
      { key: "evidenceAvailable", label: "Evidence Available", type: "textarea", required: false, placeholder: "CCTV footage, messages, documents, witnesses..." },
      { key: "reliefSought", label: "Relief Sought", type: "textarea", required: true, placeholder: "Registration of FIR, arrest of accused, investigation..." },
      { key: "advocateName", label: "Advocate Name", type: "text", required: false, placeholder: "Name of the Advocate (if any)" }
    ],
    systemPrompt: "You are an expert criminal law advocate. Draft a formal FIR (First Information Report) complaint in professional legal format suitable for submission to the Police Station. Follow the format: Complainant details, Accused details, Facts, Offences committed, Evidence, Prayer for Registration of FIR."
  },
  "Bail Application": {
    category: "CRIMINAL LAW",
    courtHeader: "IN THE HON'BLE SESSIONS COURT",
    fields: [
      { key: "caseTitle", label: "Case Title", type: "text", required: true, placeholder: "State vs [Accused Name]" },
      { key: "caseNumber", label: "FIR/Case Number", type: "text", required: true, placeholder: "FIR No. / Case No." },
      { key: "courtName", label: "Court Name", type: "text", required: true, placeholder: "Sessions Court / High Court" },
      { key: "judgeName", label: "Judge Name (if known)", type: "text", required: false, placeholder: "Hon'ble Judge Name" },
      { key: "accusedName", label: "Name of Accused", type: "text", required: true, placeholder: "Full name of the accused" },
      { key: "accusedAge", label: "Age of Accused", type: "text", required: true, placeholder: "Age in years" },
      { key: "accusedAddress", label: "Accused Address", type: "text", required: true, placeholder: "Permanent residential address" },
      { key: "policeStation", label: "Police Station", type: "text", required: true, placeholder: "Name of Police Station" },
      { key: "arrestDate", label: "Date of Arrest", type: "date", required: true },
      { key: "ipcSections", label: "Sections Invoked", type: "text", required: true, placeholder: "IPC 420, 302 etc." },
      { key: "custodyDetails", label: "Custody Details", type: "textarea", required: true, placeholder: "Details of custody, jail, remand orders..." },
      { key: "groundsForBail", label: "Grounds for Bail", type: "textarea", required: true, placeholder: "Elaborate grounds — no criminal record, cooperative, flight risk minimal, family dependent..." },
      { key: "surety", label: "Surety Details", type: "text", required: false, placeholder: "Name and address of surety person" },
      { key: "advocateName", label: "Advocate Name", type: "text", required: true, placeholder: "Name of Advocate" }
    ],
    systemPrompt: "You are a senior criminal defence advocate. Draft a formal regular bail application (under Section 437/439 CrPC or as applicable) for submission before the Sessions Court. Include: Case heading, FIR details, Grounds of bail (clean record, cooperative, family dependent, no flight risk), Precedents if relevant, and Prayer for bail."
  },
  "Anticipatory Bail": {
    category: "CRIMINAL LAW",
    courtHeader: "IN THE HON'BLE HIGH COURT",
    fields: [
      { key: "applicantName", label: "Applicant Name", type: "text", required: true, placeholder: "Full name of applicant" },
      { key: "applicantAddress", label: "Applicant Address", type: "text", required: true, placeholder: "Permanent address" },
      { key: "courtName", label: "Court Name", type: "text", required: true, placeholder: "Sessions Court / High Court" },
      { key: "policeStation", label: "Police Station", type: "text", required: true, placeholder: "Concerned Police Station" },
      { key: "ipcSections", label: "Sections Alleged", type: "text", required: true, placeholder: "IPC Sections likely to be invoked" },
      { key: "fearOfArrest", label: "Reason for Fear of Arrest", type: "textarea", required: true, placeholder: "Why applicant apprehends arrest..." },
      { key: "groundsForAnticipatoryBail", label: "Grounds for Anticipatory Bail", type: "textarea", required: true, placeholder: "False implication, no criminal antecedents, cooperative..." },
      { key: "previousComplaint", label: "Previous Complaint/Case Details", type: "textarea", required: false, placeholder: "Any prior complaint or case details..." },
      { key: "conditionsOffered", label: "Conditions Offered", type: "textarea", required: false, placeholder: "Passport surrender, weekly reporting, not tampering evidence..." },
      { key: "advocateName", label: "Advocate Name", type: "text", required: true, placeholder: "Name of Advocate" }
    ],
    systemPrompt: "You are a senior criminal advocate. Draft a formal Anticipatory Bail Application under Section 438 CrPC for submission before the Sessions Court/High Court. Include: Applicant details, grounds of apprehension, absence of criminal antecedents, cooperative nature, prayer for pre-arrest bail with conditions."
  },
  "Criminal Complaint": {
    category: "CRIMINAL LAW",
    courtHeader: "BEFORE THE HON'BLE JUDICIAL MAGISTRATE",
    fields: [
      { key: "complainantName", label: "Complainant Name", type: "text", required: true, placeholder: "Full name" },
      { key: "courtName", label: "Court Name", type: "text", required: true, placeholder: "Judicial Magistrate Court" },
      { key: "accusedName", label: "Accused Name(s)", type: "text", required: true, placeholder: "Name(s) of accused" },
      { key: "accusedAddress", label: "Accused Address", type: "text", required: true, placeholder: "Address of accused" },
      { key: "offenceDate", label: "Date of Offence", type: "date", required: true },
      { key: "offencePlace", label: "Place of Offence", type: "text", required: true, placeholder: "Location of the offence" },
      { key: "ipcSections", label: "IPC/Penal Sections", type: "text", required: true, placeholder: "IPC 420, 406, 500 etc." },
      { key: "facts", label: "Facts of the Case", type: "textarea", required: true, placeholder: "Detailed narration of the offence..." },
      { key: "evidence", label: "Evidence Details", type: "textarea", required: false, placeholder: "List of evidence available..." },
      { key: "reliefSought", label: "Relief Sought", type: "textarea", required: true, placeholder: "Cognizance of offence, summoning accused, trial..." },
      { key: "advocateName", label: "Advocate Name", type: "text", required: false, placeholder: "Advocate name" }
    ],
    systemPrompt: "Draft a formal criminal complaint for submission before the Judicial Magistrate under Section 200 CrPC. Include complainant details, accused details, offence particulars, grounds, evidence, and prayer for cognizance and summoning of accused."
  },
  "Police Complaint": {
    category: "CRIMINAL LAW",
    courtHeader: "TO THE STATION HOUSE OFFICER",
    fields: [
      { key: "complainantName", label: "Complainant Name", type: "text", required: true },
      { key: "complainantPhone", label: "Complainant Phone/Email", type: "text", required: false },
      { key: "policeStation", label: "Police Station", type: "text", required: true },
      { key: "accusedName", label: "Accused/Party Name", type: "text", required: true },
      { key: "incidentDate", label: "Incident Date", type: "date", required: true },
      { key: "incidentPlace", label: "Incident Location", type: "text", required: true },
      { key: "complaintSubject", label: "Subject of Complaint", type: "text", required: true, placeholder: "e.g. Cheating, Harassment, Theft..." },
      { key: "facts", label: "Complete Facts", type: "textarea", required: true, placeholder: "Describe the incident in full detail" },
      { key: "witnessDetails", label: "Witness Details", type: "text", required: false },
      { key: "reliefRequested", label: "Relief / Action Requested", type: "textarea", required: true }
    ],
    systemPrompt: "Draft a formal police complaint letter addressed to the Station House Officer. Include complainant details, subject, facts, incident narration, witness information and request for appropriate police action including FIR registration and investigation."
  },
  "Cyber Crime FIR": {
    category: "CRIMINAL LAW",
    courtHeader: "TO THE CYBER CRIME CELL",
    fields: [
      { key: "complainantName", label: "Complainant Name", type: "text", required: true },
      { key: "complainantPhone", label: "Contact Number", type: "text", required: true },
      { key: "complainantEmail", label: "Email Address", type: "text", required: true },
      { key: "cyberCrimeType", label: "Type of Cyber Crime", type: "select", required: true, options: ["Online Fraud", "Identity Theft", "Hacking", "Phishing", "Cyberbullying", "Sextortion", "Ransomware", "Social Media Abuse", "Other"] },
      { key: "platformUsed", label: "Platform/Website Used", type: "text", required: true, placeholder: "e.g. WhatsApp, Instagram, Email..." },
      { key: "incidentDate", label: "Date of Incident", type: "date", required: true },
      { key: "amountLost", label: "Amount Lost (if any)", type: "text", required: false, placeholder: "₹ amount" },
      { key: "accusedProfile", label: "Accused Profile/URL", type: "text", required: false, placeholder: "Profile URL, phone number, email of accused" },
      { key: "incidentFacts", label: "Detailed Incident Facts", type: "textarea", required: true, placeholder: "Step by step narration of how the crime occurred..." },
      { key: "digitalEvidence", label: "Digital Evidence", type: "textarea", required: false, placeholder: "Screenshots, transaction IDs, call logs, emails..." },
      { key: "reliefSought", label: "Relief Sought", type: "textarea", required: true }
    ],
    systemPrompt: "Draft a formal Cyber Crime FIR/Complaint to be submitted to the Cyber Crime Cell under IT Act 2000 and relevant IPC sections. Include all digital evidence references, platform details, and prayer for blocking/freezing accounts and investigation."
  },
  // ══════════════════════ CIVIL LAW ══════════════════════
  "Legal Notice": {
    category: "CIVIL LAW",
    courtHeader: "LEGAL NOTICE",
    fields: [
      { key: "senderName", label: "Sender / Client Name", type: "text", required: true },
      { key: "senderAddress", label: "Sender Address", type: "textarea", required: true },
      { key: "receiverName", label: "Receiver Name", type: "text", required: true },
      { key: "receiverAddress", label: "Receiver Address", type: "textarea", required: true },
      { key: "noticeDate", label: "Notice Date", type: "date", required: true },
      { key: "subject", label: "Subject / Nature of Dispute", type: "text", required: true, placeholder: "e.g. Recovery of Dues, Breach of Contract" },
      { key: "facts", label: "Facts of the Dispute", type: "textarea", required: true, placeholder: "Chronological facts leading to this notice..." },
      { key: "causeOfAction", label: "Cause of Action", type: "textarea", required: true, placeholder: "Legal grounds, agreements breached, losses suffered..." },
      { key: "amountDue", label: "Amount Due (if applicable)", type: "text", required: false, placeholder: "₹ Amount" },
      { key: "reliefDemanded", label: "Relief / Demand", type: "textarea", required: true, placeholder: "Payment demanded, action required, time limit given..." },
      { key: "timeLimit", label: "Time Limit Given", type: "text", required: true, placeholder: "e.g. 15 days, 30 days" },
      { key: "advocateName", label: "Issuing Advocate Name", type: "text", required: true },
      { key: "advocateAddress", label: "Advocate Office Address", type: "text", required: true }
    ],
    systemPrompt: "Draft a formal legal notice under signature of advocate. Include sender/client particulars, receiver details, subject, chronological facts, cause of action, demand/relief, time limit for compliance, and consequence of non-compliance (legal proceedings). Use formal legal language."
  },
  "Recovery Notice": {
    category: "CIVIL LAW",
    courtHeader: "NOTICE FOR RECOVERY OF DUES",
    fields: [
      { key: "creditorName", label: "Creditor / Claimant Name", type: "text", required: true },
      { key: "creditorAddress", label: "Creditor Address", type: "textarea", required: true },
      { key: "debtorName", label: "Debtor / Respondent Name", type: "text", required: true },
      { key: "debtorAddress", label: "Debtor Address", type: "textarea", required: true },
      { key: "transactionDate", label: "Date of Transaction/Agreement", type: "date", required: true },
      { key: "principalAmount", label: "Principal Amount (₹)", type: "text", required: true },
      { key: "interestRate", label: "Interest Rate (if applicable)", type: "text", required: false, placeholder: "e.g. 18% p.a." },
      { key: "totalDue", label: "Total Amount Due (₹)", type: "text", required: true },
      { key: "transactionFacts", label: "Facts of Transaction", type: "textarea", required: true },
      { key: "previousReminders", label: "Previous Reminders Given", type: "textarea", required: false },
      { key: "timeLimit", label: "Time to Pay", type: "text", required: true, placeholder: "e.g. 7 days from receipt of this notice" },
      { key: "advocateName", label: "Advocate Name", type: "text", required: true }
    ],
    systemPrompt: "Draft a formal Recovery Notice demanding repayment of dues. Include creditor particulars, transaction history, amount breakdown (principal + interest), previous communication records, demand for payment within specified period, and warning of legal proceedings under Order 37 CPC and applicable laws."
  },
  "Civil Suit": {
    category: "CIVIL LAW",
    courtHeader: "IN THE CIVIL COURT",
    fields: [
      { key: "plaintiffName", label: "Plaintiff Name", type: "text", required: true },
      { key: "plaintiffAddress", label: "Plaintiff Address", type: "textarea", required: true },
      { key: "defendantName", label: "Defendant Name", type: "text", required: true },
      { key: "defendantAddress", label: "Defendant Address", type: "textarea", required: true },
      { key: "courtName", label: "Court Name", type: "text", required: true },
      { key: "suitValuation", label: "Suit Valuation (₹)", type: "text", required: true },
      { key: "causeOfAction", label: "Cause of Action", type: "text", required: true, placeholder: "e.g. Breach of Contract, Recovery of Money" },
      { key: "facts", label: "Statement of Facts", type: "textarea", required: true },
      { key: "legalGrounds", label: "Legal Grounds", type: "textarea", required: true, placeholder: "Sections, Acts, case laws relied upon..." },
      { key: "reliefClaimed", label: "Relief Claimed", type: "textarea", required: true },
      { key: "advocateName", label: "Advocate Name", type: "text", required: true }
    ],
    systemPrompt: "Draft a formal Civil Suit plaint under CPC Order 7. Include plaintiff and defendant details, court jurisdiction, valuation, cause of action, statement of facts, legal grounds (sections/acts), prayer for relief, and verification clause."
  },
  "Injunction Petition": {
    category: "CIVIL LAW",
    courtHeader: "IN THE HON'BLE CIVIL COURT",
    fields: [
      { key: "petitionerName", label: "Petitioner Name", type: "text", required: true },
      { key: "respondentName", label: "Respondent Name", type: "text", required: true },
      { key: "courtName", label: "Court Name", type: "text", required: true },
      { key: "injunctionType", label: "Type of Injunction", type: "select", required: true, options: ["Temporary Injunction", "Permanent Injunction", "Mandatory Injunction", "Prohibitory Injunction", "Ex-Parte Injunction"] },
      { key: "subjectMatter", label: "Subject Matter", type: "text", required: true, placeholder: "Property / Activity to be restrained" },
      { key: "urgency", label: "Urgency / Prima Facie Case", type: "textarea", required: true, placeholder: "Why immediate injunction is needed..." },
      { key: "irreparableHarm", label: "Irreparable Harm if Not Granted", type: "textarea", required: true },
      { key: "balanceOfConvenience", label: "Balance of Convenience", type: "textarea", required: true },
      { key: "facts", label: "Facts of the Case", type: "textarea", required: true },
      { key: "advocateName", label: "Advocate Name", type: "text", required: true }
    ],
    systemPrompt: "Draft a formal Injunction Petition under Order 39 CPC establishing prima facie case, balance of convenience, irreparable harm. Include urgency, supporting facts, and prayer for temporary/permanent injunction with or without notice."
  },
  "Property Dispute": {
    category: "CIVIL LAW",
    courtHeader: "IN THE HON'BLE CIVIL COURT",
    fields: [
      { key: "plaintiffName", label: "Plaintiff Name", type: "text", required: true },
      { key: "defendantName", label: "Defendant Name", type: "text", required: true },
      { key: "courtName", label: "Court Name", type: "text", required: true },
      { key: "propertyDetails", label: "Property Details", type: "textarea", required: true, placeholder: "Survey No., Address, Area, boundaries..." },
      { key: "titleDocuments", label: "Title Documents Available", type: "text", required: false, placeholder: "Sale deed, registry, mutation..." },
      { key: "disputeNature", label: "Nature of Dispute", type: "select", required: true, options: ["Ownership Dispute", "Possession Dispute", "Boundary Dispute", "Adverse Possession", "Partition Suit", "Encroachment", "Other"] },
      { key: "howDisposeArised", label: "How Dispute Arose", type: "textarea", required: true },
      { key: "facts", label: "Facts & Background", type: "textarea", required: true },
      { key: "reliefSought", label: "Relief Sought", type: "textarea", required: true },
      { key: "advocateName", label: "Advocate Name", type: "text", required: true }
    ],
    systemPrompt: "Draft a formal property dispute suit/petition. Include property description, title documents, chain of ownership, nature of encroachment/dispute, facts, legal grounds under TPA/CPC, and prayer for declaration of title, possession, or injunction."
  },
  "Compensation Claim": {
    category: "CIVIL LAW",
    courtHeader: "IN THE HON'BLE COURT",
    fields: [
      { key: "claimantName", label: "Claimant Name", type: "text", required: true },
      { key: "respondentName", label: "Respondent/Opposite Party", type: "text", required: true },
      { key: "courtName", label: "Court / Forum", type: "text", required: true },
      { key: "natureOfClaim", label: "Nature of Claim", type: "select", required: true, options: ["Accident Compensation", "Wrongful Act Damages", "Contract Breach Damages", "Medical Negligence", "Consumer Deficiency", "Other"] },
      { key: "incidentDate", label: "Date of Incident", type: "date", required: true },
      { key: "incidentFacts", label: "Incident Facts", type: "textarea", required: true },
      { key: "lossesIncurred", label: "Losses / Damages Suffered", type: "textarea", required: true, placeholder: "Physical, financial, mental losses..." },
      { key: "compensationAmount", label: "Compensation Claimed (₹)", type: "text", required: true },
      { key: "legalBasis", label: "Legal Basis", type: "textarea", required: true, placeholder: "Sections, negligence, breach..." },
      { key: "advocateName", label: "Advocate Name", type: "text", required: true }
    ],
    systemPrompt: "Draft a formal compensation claim petition. Include claimant details, incident description, legal basis for compensation (negligence/breach/strict liability), loss assessment, quantum of damages, and prayer for compensation with interest."
  },
  // ══════════════════════ FAMILY LAW ══════════════════════
  "Divorce Petition": {
    category: "FAMILY LAW",
    courtHeader: "IN THE HON'BLE FAMILY COURT",
    fields: [
      { key: "petitionerName", label: "Petitioner Name", type: "text", required: true },
      { key: "respondentName", label: "Respondent (Spouse) Name", type: "text", required: true },
      { key: "courtName", label: "Court Name", type: "text", required: true, placeholder: "Family Court, District..." },
      { key: "marriageDate", label: "Date of Marriage", type: "date", required: true },
      { key: "marriagePlace", label: "Place of Marriage", type: "text", required: true },
      { key: "separationDate", label: "Date of Separation", type: "date", required: false },
      { key: "childrenDetails", label: "Children Details", type: "textarea", required: false, placeholder: "Names, ages, custody preference..." },
      { key: "groundsForDivorce", label: "Grounds for Divorce", type: "select", required: true, options: ["Cruelty", "Desertion", "Adultery", "Conversion", "Mental Disorder", "Communicable Disease", "Mutual Consent", "Irretrievable Breakdown", "Other"] },
      { key: "factsOfDivorce", label: "Facts Supporting Grounds", type: "textarea", required: true, placeholder: "Detailed facts establishing grounds for divorce..." },
      { key: "previousProceedings", label: "Previous Proceedings", type: "textarea", required: false },
      { key: "matrimonialProperty", label: "Matrimonial Property Details", type: "textarea", required: false },
      { key: "maintenanceClaim", label: "Maintenance/Alimony Claim", type: "text", required: false },
      { key: "reliefSought", label: "Relief Sought", type: "textarea", required: true },
      { key: "advocateName", label: "Advocate Name", type: "text", required: true }
    ],
    systemPrompt: "Draft a formal Divorce Petition under Hindu Marriage Act 1955 / Special Marriage Act / applicable personal law. Include marriage details, grounds, supporting facts, children details, property division, maintenance, and prayer for dissolution of marriage."
  },
  "Mutual Divorce": {
    category: "FAMILY LAW",
    courtHeader: "IN THE HON'BLE FAMILY COURT",
    fields: [
      { key: "petitioner1Name", label: "Petitioner 1 (Husband) Name", type: "text", required: true },
      { key: "petitioner2Name", label: "Petitioner 2 (Wife) Name", type: "text", required: true },
      { key: "courtName", label: "Court Name", type: "text", required: true },
      { key: "marriageDate", label: "Date of Marriage", type: "date", required: true },
      { key: "marriagePlace", label: "Place of Marriage", type: "text", required: true },
      { key: "separationDate", label: "Separation Date", type: "date", required: true },
      { key: "livingApartDuration", label: "Living Apart Duration", type: "text", required: true, placeholder: "e.g. More than 1 year" },
      { key: "childrenDetails", label: "Children Details", type: "textarea", required: false },
      { key: "settledTerms", label: "Terms Mutually Settled", type: "textarea", required: true, placeholder: "Custody, maintenance, alimony, property division..." },
      { key: "alimonyAmount", label: "Alimony / Settlement Amount (₹)", type: "text", required: false },
      { key: "advocateName", label: "Advocate Name", type: "text", required: true }
    ],
    systemPrompt: "Draft a Mutual Consent Divorce Petition under Section 13B Hindu Marriage Act. Include joint petitioner details, marriage details, separation period (1 year+), mutually agreed terms (custody, alimony, property), and joint prayer for dissolution."
  },
  "Child Custody": {
    category: "FAMILY LAW",
    courtHeader: "IN THE HON'BLE FAMILY COURT",
    fields: [
      { key: "petitionerName", label: "Petitioner Name", type: "text", required: true },
      { key: "respondentName", label: "Respondent Name", type: "text", required: true },
      { key: "courtName", label: "Court Name", type: "text", required: true },
      { key: "childName", label: "Child's Name", type: "text", required: true },
      { key: "childAge", label: "Child's Age", type: "text", required: true },
      { key: "childCurrentStatus", label: "Child's Current Status", type: "textarea", required: true, placeholder: "With whom child is currently living, school, wellbeing..." },
      { key: "relationshipToChild", label: "Petitioner's Relationship to Child", type: "text", required: true, placeholder: "Mother / Father / Guardian" },
      { key: "custodyType", label: "Custody Sought", type: "select", required: true, options: ["Sole Custody", "Joint Custody", "Physical Custody", "Legal Custody", "Temporary Custody"] },
      { key: "groundsForCustody", label: "Grounds for Custody", type: "textarea", required: true, placeholder: "Why petitioner is better suited for child's welfare..." },
      { key: "childWelfareDetails", label: "Child Welfare Considerations", type: "textarea", required: true },
      { key: "advocateName", label: "Advocate Name", type: "text", required: true }
    ],
    systemPrompt: "Draft a Child Custody Petition under Guardian and Wards Act 1890 / Hindu Minority and Guardianship Act. Emphasize child's best interest as paramount consideration. Include petitioner qualifications for custody, living conditions, financial stability, emotional attachment, and prayer for custody."
  },
  "Maintenance Petition": {
    category: "FAMILY LAW",
    courtHeader: "IN THE HON'BLE FAMILY COURT",
    fields: [
      { key: "petitionerName", label: "Petitioner Name", type: "text", required: true },
      { key: "respondentName", label: "Respondent Name", type: "text", required: true },
      { key: "courtName", label: "Court Name", type: "text", required: true },
      { key: "relationship", label: "Relationship", type: "select", required: true, options: ["Wife", "Children", "Parents", "Divorced Wife", "Other"] },
      { key: "marriageDate", label: "Date of Marriage", type: "date", required: false },
      { key: "separationDate", label: "Date of Separation", type: "date", required: false },
      { key: "petitionerIncome", label: "Petitioner's Income/Resources", type: "text", required: true, placeholder: 'Monthly income or "Nil"' },
      { key: "respondentIncome", label: "Respondent's Estimated Income", type: "text", required: true },
      { key: "maintenanceRequired", label: "Monthly Maintenance Required (₹)", type: "text", required: true },
      { key: "groundsForMaintenance", label: "Grounds for Maintenance", type: "textarea", required: true },
      { key: "dependents", label: "Dependent Children/Members", type: "textarea", required: false },
      { key: "advocateName", label: "Advocate Name", type: "text", required: true }
    ],
    systemPrompt: "Draft a Maintenance Petition under Section 125 CrPC / Section 24 HMA / applicable law. Include petitioner's needs, respondent's capacity, marriage details, desertion/neglect, and prayer for monthly maintenance including interim maintenance."
  },
  "Domestic Violence Case": {
    category: "FAMILY LAW",
    courtHeader: "BEFORE THE HON'BLE MAGISTRATE",
    fields: [
      { key: "aggrievedName", label: "Aggrieved Person Name", type: "text", required: true },
      { key: "respondentName", label: "Respondent Name", type: "text", required: true },
      { key: "magistrateCourt", label: "Magistrate Court", type: "text", required: true },
      { key: "sharedHousehold", label: "Shared Household Address", type: "textarea", required: true },
      { key: "relationshipToRespondent", label: "Relationship to Respondent", type: "select", required: true, options: ["Spouse", "In-Laws", "Live-in Partner", "Family Member", "Other"] },
      { key: "dvActsCommitted", label: "Acts of Domestic Violence", type: "textarea", required: true, placeholder: "Physical abuse, emotional abuse, economic abuse, sexual abuse — describe incidents with dates" },
      { key: "medicalReports", label: "Medical Reports / Injuries", type: "textarea", required: false },
      { key: "witnessDetails", label: "Witnesses", type: "text", required: false },
      { key: "reliefSought", label: "Relief Under DV Act", type: "textarea", required: true, placeholder: "Protection Order, Residence Order, Monetary Relief, Compensation..." },
      { key: "advocateName", label: "Advocate Name", type: "text", required: true }
    ],
    systemPrompt: "Draft a formal complaint/application under Protection of Women from Domestic Violence Act 2005. Include aggrieved person details, acts of domestic violence (physical, mental, economic, sexual), shared household, prayer for Protection Order, Residence Order, monetary relief, and compensation."
  },
  "Adoption Petition": {
    category: "FAMILY LAW",
    courtHeader: "IN THE HON'BLE DISTRICT COURT",
    fields: [
      { key: "adoptiveFatherName", label: "Adoptive Father Name", type: "text", required: true },
      { key: "adoptiveMotherName", label: "Adoptive Mother Name", type: "text", required: false },
      { key: "adoptiveParentsAddress", label: "Adoptive Parents Address", type: "textarea", required: true },
      { key: "courtName", label: "Court Name", type: "text", required: true },
      { key: "childName", label: "Child's Name", type: "text", required: true },
      { key: "childAge", label: "Child's Age/DOB", type: "text", required: true },
      { key: "childBackground", label: "Child's Background", type: "textarea", required: true },
      { key: "naturalParentsDetails", label: "Natural/Biological Parents Details", type: "textarea", required: false },
      { key: "agencyName", label: "Adoption Agency (if any)", type: "text", required: false },
      { key: "reasonForAdoption", label: "Reason for Adoption", type: "textarea", required: true },
      { key: "financialStatus", label: "Financial Status of Adoptive Parents", type: "text", required: true },
      { key: "advocateName", label: "Advocate Name", type: "text", required: true }
    ],
    systemPrompt: "Draft a formal Adoption Petition under Hindu Adoption and Maintenance Act / JJ Act. Include adoptive parent qualifications, child background, consent details, home study report reference, and prayer for adoption order."
  },
  // ══════════════════════ PROPERTY LAW ══════════════════════
  "Sale Agreement": {
    category: "PROPERTY LAW",
    courtHeader: "AGREEMENT FOR SALE OF PROPERTY",
    fields: [
      { key: "sellerName", label: "Seller Name", type: "text", required: true },
      { key: "sellerAddress", label: "Seller Address", type: "textarea", required: true },
      { key: "buyerName", label: "Buyer Name", type: "text", required: true },
      { key: "buyerAddress", label: "Buyer Address", type: "textarea", required: true },
      { key: "propertyDescription", label: "Property Description", type: "textarea", required: true, placeholder: "Survey No., Plot No., Address, dimensions, boundaries..." },
      { key: "saleConsideration", label: "Sale Consideration (₹)", type: "text", required: true },
      { key: "advancePaid", label: "Advance Amount Paid (₹)", type: "text", required: true },
      { key: "balanceAmount", label: "Balance Amount (₹)", type: "text", required: true },
      { key: "registrationDate", label: "Proposed Registration Date", type: "date", required: true },
      { key: "possessionDate", label: "Possession Date", type: "date", required: true },
      { key: "encumbrance", label: "Encumbrance Status", type: "text", required: true, placeholder: "Free from encumbrance / Loan details" },
      { key: "specialConditions", label: "Special Conditions", type: "textarea", required: false }
    ],
    systemPrompt: "Draft a formal Agreement for Sale of immovable property. Include seller/buyer details, property description (with boundaries), consideration amount, advance paid, payment schedule, encumbrance status, possession date, registration obligations, and penalty for breach."
  },
  "Rent Agreement": {
    category: "PROPERTY LAW",
    courtHeader: "RENTAL AGREEMENT / LEAVE AND LICENSE",
    fields: [
      { key: "landlordName", label: "Landlord Name", type: "text", required: true },
      { key: "landlordAddress", label: "Landlord Address", type: "textarea", required: true },
      { key: "tenantName", label: "Tenant Name", type: "text", required: true },
      { key: "tenantAddress", label: "Tenant Permanent Address", type: "textarea", required: true },
      { key: "propertyAddress", label: "Property Address", type: "textarea", required: true, placeholder: "Full address of rented property" },
      { key: "rentAmount", label: "Monthly Rent (₹)", type: "text", required: true },
      { key: "securityDeposit", label: "Security Deposit (₹)", type: "text", required: true },
      { key: "agreementStartDate", label: "Agreement Start Date", type: "date", required: true },
      { key: "agreementDuration", label: "Agreement Duration", type: "text", required: true, placeholder: "e.g. 11 months, 1 year" },
      { key: "lockInPeriod", label: "Lock-in Period", type: "text", required: false, placeholder: "e.g. 6 months" },
      { key: "noticePeriod", label: "Notice Period for Vacating", type: "text", required: true, placeholder: "e.g. 1 month" },
      { key: "purposeOfUse", label: "Purpose of Use", type: "select", required: true, options: ["Residential", "Commercial", "Industrial", "Mixed Use"] },
      { key: "maintenanceTerms", label: "Maintenance Terms", type: "textarea", required: false },
      { key: "witnessName", label: "Witness Name(s)", type: "text", required: false }
    ],
    systemPrompt: "Draft a formal Rental Agreement / Leave and License Agreement. Include landlord/tenant details, property description, rent amount, security deposit, duration, lock-in period, notice period, permitted use, maintenance obligations, utility payments, termination conditions, and dispute resolution."
  },
  "Lease Agreement": {
    category: "PROPERTY LAW",
    courtHeader: "DEED OF LEASE",
    fields: [
      { key: "lessorName", label: "Lessor (Owner) Name", type: "text", required: true },
      { key: "lesseeName", label: "Lessee (Tenant) Name", type: "text", required: true },
      { key: "propertyDetails", label: "Property Details", type: "textarea", required: true },
      { key: "leasePeriod", label: "Lease Period", type: "text", required: true, placeholder: "e.g. 5 years from [date]" },
      { key: "monthlyRent", label: "Monthly Rent (₹)", type: "text", required: true },
      { key: "annualIncrement", label: "Annual Increment (%)", type: "text", required: false },
      { key: "securityDeposit", label: "Security Deposit (₹)", type: "text", required: true },
      { key: "leaseStartDate", label: "Lease Start Date", type: "date", required: true },
      { key: "purposeOfLease", label: "Purpose of Lease", type: "text", required: true },
      { key: "renewalTerms", label: "Renewal Terms", type: "textarea", required: false },
      { key: "termination", label: "Termination Clause", type: "textarea", required: false },
      { key: "stampDuty", label: "Stamp Duty Reference", type: "text", required: false }
    ],
    systemPrompt: "Draft a formal Deed of Lease for immovable property. Include lessor/lessee details, property description, lease period, rent, security deposit, permitted use, maintenance, renewal options, sub-letting restrictions, termination conditions, and stamp duty compliance."
  },
  "Tenant Eviction Notice": {
    category: "PROPERTY LAW",
    courtHeader: "NOTICE TO VACATE PREMISES",
    fields: [
      { key: "landlordName", label: "Landlord Name", type: "text", required: true },
      { key: "tenantName", label: "Tenant Name", type: "text", required: true },
      { key: "propertyAddress", label: "Property Address", type: "textarea", required: true },
      { key: "agreementDate", label: "Rental Agreement Date", type: "date", required: false },
      { key: "reasonForEviction", label: "Reason for Eviction", type: "select", required: true, options: ["Non-Payment of Rent", "Agreement Expiry", "Personal Use Required", "Illegal Subletting", "Property Damage", "Breach of Terms", "Other"] },
      { key: "rentDue", label: "Rent Arrears (₹)", type: "text", required: false },
      { key: "evictionDetails", label: "Details / Facts", type: "textarea", required: true },
      { key: "vacatingDeadline", label: "Deadline to Vacate", type: "date", required: true },
      { key: "legalWarning", label: "Legal Action if Not Vacated", type: "textarea", required: false, placeholder: "Eviction suit, recovery proceedings..." },
      { key: "advocateName", label: "Advocate Name", type: "text", required: false }
    ],
    systemPrompt: "Draft a formal Eviction/Vacate Notice under Rent Control Act / Transfer of Property Act. Include landlord/tenant details, property description, grounds for eviction, arrears, deadline to vacate, and warning of legal proceedings (eviction suit)."
  },
  "Registry Verification": {
    category: "PROPERTY LAW",
    courtHeader: "APPLICATION FOR PROPERTY TITLE VERIFICATION",
    fields: [
      { key: "applicantName", label: "Applicant Name", type: "text", required: true },
      { key: "propertyDetails", label: "Property Details", type: "textarea", required: true },
      { key: "surveyNumber", label: "Survey/Khasra Number", type: "text", required: false },
      { key: "registrationOffice", label: "Registration Office", type: "text", required: true },
      { key: "previousOwners", label: "Known Previous Owners", type: "textarea", required: false },
      { key: "purposeOfVerification", label: "Purpose of Verification", type: "text", required: true, placeholder: "Purchase, Mortgage, Legal Due Diligence..." },
      { key: "documentsAvailable", label: "Documents Available", type: "textarea", required: false }
    ],
    systemPrompt: "Draft a formal application for property title/registry verification. Include property details, survey number, encumbrance certificate request, chain of title verification request, and certified copies of registered documents."
  },
  "Property Transfer": {
    category: "PROPERTY LAW",
    courtHeader: "DEED OF TRANSFER / GIFT DEED / CONVEYANCE DEED",
    fields: [
      { key: "transferorName", label: "Transferor Name", type: "text", required: true },
      { key: "transfereeName", label: "Transferee Name", type: "text", required: true },
      { key: "transferType", label: "Type of Transfer", type: "select", required: true, options: ["Sale", "Gift", "Inheritance", "Exchange", "Partition", "Will Execution"] },
      { key: "propertyDetails", label: "Property Details", type: "textarea", required: true },
      { key: "propertyValue", label: "Property Market Value (₹)", type: "text", required: true },
      { key: "consideration", label: "Consideration (₹)", type: "text", required: false, placeholder: 'Amount paid or "Love and Affection" for gift' },
      { key: "transferDate", label: "Date of Transfer", type: "date", required: true },
      { key: "witnessDetails", label: "Witness Names", type: "text", required: true }
    ],
    systemPrompt: "Draft a formal Property Transfer Deed / Conveyance Deed / Gift Deed under Transfer of Property Act. Include transferor/transferee details, property description, consideration, transfer conditions, possession delivery, and registration compliance."
  },
  // ══════════════════════ CORPORATE LAW ══════════════════════
  "NDA Draft": {
    category: "CORPORATE LAW",
    courtHeader: "NON-DISCLOSURE AGREEMENT",
    fields: [
      { key: "disclosingParty", label: "Disclosing Party Name", type: "text", required: true },
      { key: "receivingParty", label: "Receiving Party Name", type: "text", required: true },
      { key: "effectiveDate", label: "Effective Date", type: "date", required: true },
      { key: "ndaType", label: "NDA Type", type: "select", required: true, options: ["Unilateral", "Mutual/Bilateral"] },
      { key: "purposeOfDisclosure", label: "Purpose of Disclosure", type: "textarea", required: true, placeholder: "Business discussion, partnership evaluation, due diligence..." },
      { key: "confidentialInfoScope", label: "Scope of Confidential Information", type: "textarea", required: true },
      { key: "duration", label: "Duration of Confidentiality", type: "text", required: true, placeholder: "e.g. 2 years, 5 years, Indefinite" },
      { key: "exclusions", label: "Exclusions from Confidentiality", type: "textarea", required: false },
      { key: "jurisdiction", label: "Governing Law & Jurisdiction", type: "text", required: true, placeholder: "e.g. Laws of India, Delhi Courts" },
      { key: "penaltyForBreach", label: "Remedy for Breach", type: "text", required: false }
    ],
    systemPrompt: "Draft a professional Non-Disclosure Agreement (NDA). Include parties, definition of confidential information, disclosure purpose, obligations, exceptions (public domain, prior knowledge, compelled disclosure), duration, injunctive relief remedy, governing law, and dispute resolution."
  },
  "Contract Draft": {
    category: "CORPORATE LAW",
    courtHeader: "SERVICE AGREEMENT / CONTRACT",
    fields: [
      { key: "party1Name", label: "Party 1 Name", type: "text", required: true },
      { key: "party1Address", label: "Party 1 Address", type: "textarea", required: true },
      { key: "party2Name", label: "Party 2 Name", type: "text", required: true },
      { key: "party2Address", label: "Party 2 Address", type: "textarea", required: true },
      { key: "contractType", label: "Contract Type", type: "text", required: true, placeholder: "Service Agreement, Purchase Agreement, SLA..." },
      { key: "scopeOfWork", label: "Scope of Work / Services", type: "textarea", required: true },
      { key: "contractValue", label: "Contract Value (₹)", type: "text", required: true },
      { key: "paymentTerms", label: "Payment Terms", type: "textarea", required: true },
      { key: "contractDuration", label: "Contract Duration", type: "text", required: true },
      { key: "liabilityClause", label: "Liability Cap", type: "text", required: false },
      { key: "terminationClause", label: "Termination Terms", type: "textarea", required: false },
      { key: "governingLaw", label: "Governing Law & Jurisdiction", type: "text", required: true },
      { key: "disputeResolution", label: "Dispute Resolution", type: "select", required: true, options: ["Arbitration", "Mediation", "Court Litigation", "Negotiation first then Arbitration"] }
    ],
    systemPrompt: "Draft a comprehensive commercial contract/service agreement. Include parties, scope of services, deliverables, timelines, payment terms, IP ownership, representations and warranties, indemnification, limitation of liability, termination rights, governing law, and dispute resolution."
  },
  "Employment Agreement": {
    category: "CORPORATE LAW",
    courtHeader: "EMPLOYMENT AGREEMENT",
    fields: [
      { key: "employerName", label: "Employer / Company Name", type: "text", required: true },
      { key: "employeeName", label: "Employee Name", type: "text", required: true },
      { key: "designation", label: "Designation / Role", type: "text", required: true },
      { key: "department", label: "Department", type: "text", required: false },
      { key: "joiningDate", label: "Date of Joining", type: "date", required: true },
      { key: "salary", label: "CTC / Salary (₹ per annum)", type: "text", required: true },
      { key: "workLocation", label: "Work Location", type: "text", required: true },
      { key: "probationPeriod", label: "Probation Period", type: "text", required: false, placeholder: "e.g. 6 months" },
      { key: "workingHours", label: "Working Hours", type: "text", required: false },
      { key: "noticePeriod", label: "Notice Period", type: "text", required: true, placeholder: "e.g. 90 days" },
      { key: "nonCompete", label: "Non-Compete Clause", type: "textarea", required: false },
      { key: "confidentiality", label: "Confidentiality Obligation", type: "textarea", required: false },
      { key: "benefits", label: "Benefits / Perks", type: "textarea", required: false }
    ],
    systemPrompt: "Draft a comprehensive Employment Agreement. Include employer/employee details, role, CTC, benefits, working hours, probation, notice period, IP assignment, confidentiality, non-compete/non-solicitation, code of conduct, termination conditions, and dispute resolution under Indian labour laws."
  },
  "Partnership Agreement": {
    category: "CORPORATE LAW",
    courtHeader: "PARTNERSHIP DEED",
    fields: [
      { key: "firmName", label: "Partnership Firm Name", type: "text", required: true },
      { key: "partner1Name", label: "Partner 1 Name", type: "text", required: true },
      { key: "partner2Name", label: "Partner 2 Name", type: "text", required: true },
      { key: "additionalPartners", label: "Other Partners", type: "text", required: false },
      { key: "firmAddress", label: "Firm / Business Address", type: "textarea", required: true },
      { key: "businessNature", label: "Nature of Business", type: "text", required: true },
      { key: "partnershipStartDate", label: "Partnership Start Date", type: "date", required: true },
      { key: "capitalContribution", label: "Capital Contribution", type: "textarea", required: true, placeholder: "Partner 1: ₹X, Partner 2: ₹Y..." },
      { key: "profitSharingRatio", label: "Profit Sharing Ratio", type: "text", required: true, placeholder: "e.g. 50:50, 60:40" },
      { key: "managingPartner", label: "Managing Partner", type: "text", required: false },
      { key: "bankAccount", label: "Bank Account Details", type: "text", required: false },
      { key: "dissolutionTerms", label: "Dissolution Terms", type: "textarea", required: false }
    ],
    systemPrompt: "Draft a formal Partnership Deed under Indian Partnership Act 1932. Include firm name, partners, business nature, capital, profit/loss sharing, management powers, banking, admission/retirement of partners, dissolution clause, and dispute resolution."
  },
  "Vendor Agreement": {
    category: "CORPORATE LAW",
    courtHeader: "VENDOR / SUPPLIER AGREEMENT",
    fields: [
      { key: "companyName", label: "Company (Buyer) Name", type: "text", required: true },
      { key: "vendorName", label: "Vendor / Supplier Name", type: "text", required: true },
      { key: "productsServices", label: "Products / Services Supplied", type: "textarea", required: true },
      { key: "contractValue", label: "Contract Value (₹)", type: "text", required: true },
      { key: "deliveryTerms", label: "Delivery Terms", type: "textarea", required: true, placeholder: "Lead times, locations, frequency..." },
      { key: "paymentTerms", label: "Payment Terms", type: "text", required: true, placeholder: "Net 30, Net 60..." },
      { key: "qualityStandards", label: "Quality Standards", type: "textarea", required: false },
      { key: "penaltyForDelay", label: "Penalty for Delay/Defect", type: "text", required: false },
      { key: "agreementDuration", label: "Agreement Duration", type: "text", required: true },
      { key: "terminationClause", label: "Termination Clause", type: "textarea", required: false },
      { key: "governingLaw", label: "Governing Law", type: "text", required: true }
    ],
    systemPrompt: "Draft a Vendor/Supplier Agreement covering supply terms, delivery obligations, quality specifications, price, payment terms, penalty for delays, force majeure, IP ownership of custom work, termination rights, indemnification, and dispute resolution."
  },
  "Startup Compliance": {
    category: "CORPORATE LAW",
    courtHeader: "STARTUP INCORPORATION & COMPLIANCE DOCUMENT",
    fields: [
      { key: "companyName", label: "Company Name", type: "text", required: true },
      { key: "founders", label: "Founder Names", type: "textarea", required: true },
      { key: "businessDescription", label: "Business Description", type: "textarea", required: true },
      { key: "incorporationType", label: "Incorporation Type", type: "select", required: true, options: ["Private Limited Company", "LLP", "OPC", "Partnership Firm", "Sole Proprietorship"] },
      { key: "registeredAddress", label: "Registered Office Address", type: "textarea", required: true },
      { key: "authorizedCapital", label: "Authorized Capital (₹)", type: "text", required: false },
      { key: "directors", label: "Directors / Designated Partners", type: "textarea", required: true },
      { key: "shareholdingPattern", label: "Shareholding Pattern", type: "textarea", required: false },
      { key: "startupIndiaCriteria", label: "Startup India Registration Criteria", type: "textarea", required: false },
      { key: "complianceScope", label: "Compliance Scope Required", type: "textarea", required: true }
    ],
    systemPrompt: "Draft a Startup Compliance Document covering incorporation structure, founders agreement, IP assignment, ESOP policy, Startup India registration eligibility, GST registration, statutory compliance checklist (ROC filings, annual returns), and recommended legal framework."
  },
  // ══════════════════════ BANKING & FINANCE ══════════════════════
  "Loan Dispute": {
    category: "BANKING & FINANCE",
    courtHeader: "BEFORE THE HON'BLE DEBT RECOVERY TRIBUNAL / COURT",
    fields: [
      { key: "borrowerName", label: "Borrower / Petitioner Name", type: "text", required: true },
      { key: "bankName", label: "Bank / NBFC Name", type: "text", required: true },
      { key: "loanAccountNumber", label: "Loan Account Number", type: "text", required: true },
      { key: "loanType", label: "Loan Type", type: "select", required: true, options: ["Home Loan", "Personal Loan", "Business Loan", "Vehicle Loan", "Education Loan", "Gold Loan", "Other"] },
      { key: "loanAmount", label: "Original Loan Amount (₹)", type: "text", required: true },
      { key: "disputeNature", label: "Nature of Dispute", type: "select", required: true, options: ["Wrong Charges", "Incorrect Interest Calculation", "Illegal Repossession", "Wrongful NPA Classification", "SARFAESI Violation", "Fraud by Bank", "Other"] },
      { key: "disputeFacts", label: "Facts of Dispute", type: "textarea", required: true },
      { key: "amountInDispute", label: "Amount in Dispute (₹)", type: "text", required: false },
      { key: "previousCorrespondence", label: "Previous Communication with Bank", type: "textarea", required: false },
      { key: "reliefSought", label: "Relief Sought", type: "textarea", required: true },
      { key: "advocateName", label: "Advocate Name", type: "text", required: true }
    ],
    systemPrompt: "Draft a formal Loan Dispute Petition/Complaint to DRT/Banking Ombudsman/Civil Court. Include loan details, nature of dispute, illegal charges/actions, RBI guidelines violated, prayer for stay of recovery proceedings, correction of records, and compensation."
  },
  "Cheque Bounce Notice": {
    category: "BANKING & FINANCE",
    courtHeader: "LEGAL NOTICE UNDER SECTION 138 NEGOTIABLE INSTRUMENTS ACT",
    fields: [
      { key: "payeeName", label: "Payee (Complainant) Name", type: "text", required: true },
      { key: "payeeAddress", label: "Payee Address", type: "textarea", required: true },
      { key: "drawerName", label: "Drawer (Accused) Name", type: "text", required: true },
      { key: "drawerAddress", label: "Drawer Address", type: "textarea", required: true },
      { key: "chequeNumber", label: "Cheque Number", type: "text", required: true },
      { key: "chequeDate", label: "Cheque Date", type: "date", required: true },
      { key: "chequeAmount", label: "Cheque Amount (₹)", type: "text", required: true },
      { key: "bankName", label: "Drawer's Bank Name", type: "text", required: true },
      { key: "dishonourDate", label: "Date of Dishonour", type: "date", required: true },
      { key: "dishonourReason", label: "Reason for Dishonour", type: "text", required: true, placeholder: "Insufficient funds, account closed, stop payment..." },
      { key: "underlyingTransaction", label: "Underlying Transaction", type: "textarea", required: true, placeholder: "Purpose for which cheque was given..." },
      { key: "advocateName", label: "Advocate Name", type: "text", required: true }
    ],
    systemPrompt: "Draft a formal legal notice under Section 138 Negotiable Instruments Act 1881. This is mandatory 15-day demand notice before filing complaint. Include payee/drawer details, cheque particulars, dishonour details, legal demand within 15 days of receipt, and warning of criminal prosecution."
  },
  "Banking Fraud Complaint": {
    category: "BANKING & FINANCE",
    courtHeader: "COMPLAINT OF BANKING FRAUD",
    fields: [
      { key: "complainantName", label: "Complainant Name", type: "text", required: true },
      { key: "bankName", label: "Bank / Institution Name", type: "text", required: true },
      { key: "accountNumber", label: "Account Number", type: "text", required: true },
      { key: "fraudType", label: "Type of Fraud", type: "select", required: true, options: ["Unauthorized Transaction", "Identity Theft", "Phishing", "UPI Fraud", "Card Cloning", "KYC Fraud", "Insider Fraud", "Other"] },
      { key: "fraudDate", label: "Date of Fraud", type: "date", required: true },
      { key: "amountDefrauded", label: "Amount Defrauded (₹)", type: "text", required: true },
      { key: "fraudFacts", label: "How Fraud Occurred", type: "textarea", required: true },
      { key: "bankResponse", label: "Bank's Response (if any)", type: "textarea", required: false },
      { key: "reliefSought", label: "Relief / Refund Sought", type: "textarea", required: true }
    ],
    systemPrompt: "Draft a Banking Fraud complaint to be filed with Police Cyber Cell, Banking Ombudsman, and RBI. Include fraud details, transaction references, bank's failure to comply with RBI circular on liability in unauthorized transactions, and demand for refund with compensation."
  },
  "EMI Settlement": {
    category: "BANKING & FINANCE",
    courtHeader: "ONE-TIME SETTLEMENT / EMI RESTRUCTURING PROPOSAL",
    fields: [
      { key: "borrowerName", label: "Borrower Name", type: "text", required: true },
      { key: "bankName", label: "Bank/NBFC Name", type: "text", required: true },
      { key: "loanAccountNumber", label: "Loan Account Number", type: "text", required: true },
      { key: "outstandingAmount", label: "Outstanding Amount (₹)", type: "text", required: true },
      { key: "settlementAmountOffered", label: "Settlement Amount Offered (₹)", type: "text", required: true },
      { key: "reasonForDefault", label: "Reason for Default", type: "textarea", required: true },
      { key: "settlementTerms", label: "Proposed Settlement Terms", type: "textarea", required: true },
      { key: "paymentTimeline", label: "Payment Timeline", type: "text", required: true }
    ],
    systemPrompt: "Draft a formal One-Time Settlement (OTS) / Loan Restructuring application to the bank. Include borrower hardship, outstanding dues, settlement offer with justification, payment plan, and request for NOC/closure letter upon settlement."
  },
  "Debt Recovery": {
    category: "BANKING & FINANCE",
    courtHeader: "APPLICATION FOR DEBT RECOVERY",
    fields: [
      { key: "creditorName", label: "Creditor Name", type: "text", required: true },
      { key: "debtorName", label: "Debtor Name", type: "text", required: true },
      { key: "debtorAddress", label: "Debtor Address", type: "textarea", required: true },
      { key: "principalDebt", label: "Principal Debt (₹)", type: "text", required: true },
      { key: "interestAccrued", label: "Interest Accrued (₹)", type: "text", required: false },
      { key: "totalClaim", label: "Total Claim (₹)", type: "text", required: true },
      { key: "transactionFacts", label: "Transaction Facts", type: "textarea", required: true },
      { key: "documents", label: "Supporting Documents", type: "textarea", required: false },
      { key: "courtOrForum", label: "Court / DRT / NCLT", type: "text", required: true },
      { key: "advocateName", label: "Advocate Name", type: "text", required: true }
    ],
    systemPrompt: "Draft a Debt Recovery application/suit. Include creditor/debtor details, debt origin, principal + interest calculation, previous demands, legal basis (Order 37 CPC / DRT Act / IBC), and prayer for recovery decree with interest and costs."
  },
  "Financial Agreement": {
    category: "BANKING & FINANCE",
    courtHeader: "FINANCIAL AGREEMENT / LOAN AGREEMENT",
    fields: [
      { key: "lenderName", label: "Lender Name", type: "text", required: true },
      { key: "borrowerName", label: "Borrower Name", type: "text", required: true },
      { key: "loanAmount", label: "Loan Amount (₹)", type: "text", required: true },
      { key: "interestRate", label: "Interest Rate (% p.a.)", type: "text", required: true },
      { key: "loanDuration", label: "Loan Duration", type: "text", required: true },
      { key: "repaymentSchedule", label: "Repayment Schedule", type: "textarea", required: true },
      { key: "securityProvided", label: "Security / Collateral", type: "textarea", required: false },
      { key: "penaltyForDefault", label: "Penalty for Default", type: "text", required: false },
      { key: "guarantorDetails", label: "Guarantor Details (if any)", type: "text", required: false },
      { key: "disbursementDate", label: "Disbursement Date", type: "date", required: true }
    ],
    systemPrompt: "Draft a formal Financial/Loan Agreement. Include lender/borrower details, loan amount, interest rate (reducing balance method), repayment schedule, security/collateral, guarantor obligations, default consequences, prepayment terms, and dispute resolution."
  },
  // ══════════════════════ LABOUR LAW ══════════════════════
  "Employee Complaint": {
    category: "LABOUR LAW",
    courtHeader: "COMPLAINT TO LABOUR AUTHORITY",
    fields: [
      { key: "employeeName", label: "Employee Name", type: "text", required: true },
      { key: "employeeDesignation", label: "Designation", type: "text", required: true },
      { key: "companyName", label: "Employer / Company Name", type: "text", required: true },
      { key: "joiningDate", label: "Date of Joining", type: "date", required: false },
      { key: "complaintType", label: "Nature of Complaint", type: "select", required: true, options: ["Salary Non-Payment", "Wrongful Termination", "Harassment", "PF/ESI Non-Deposit", "Leave Denial", "Discrimination", "Other"] },
      { key: "complaintFacts", label: "Facts of Complaint", type: "textarea", required: true },
      { key: "dateOfGrievance", label: "Date Grievance Arose", type: "date", required: true },
      { key: "previousComplaints", label: "Previous Internal Complaints", type: "textarea", required: false },
      { key: "reliefSought", label: "Relief Sought", type: "textarea", required: true },
      { key: "labourAuthority", label: "Labour Authority", type: "text", required: true, placeholder: "Labour Commissioner / Industrial Tribunal / High Court" }
    ],
    systemPrompt: "Draft a formal employee complaint to Labour Commissioner / Industrial Tribunal under Industrial Disputes Act / Payment of Wages Act / Factories Act. Include employment details, nature of grievance, facts, applicable labour law violations, and prayer for relief."
  },
  "Salary Recovery": {
    category: "LABOUR LAW",
    courtHeader: "CLAIM FOR RECOVERY OF UNPAID WAGES",
    fields: [
      { key: "employeeName", label: "Employee Name", type: "text", required: true },
      { key: "employerName", label: "Employer Name", type: "text", required: true },
      { key: "designation", label: "Designation", type: "text", required: true },
      { key: "salaryDue", label: "Total Salary Due (₹)", type: "text", required: true },
      { key: "duePeriod", label: "Period for Which Salary is Due", type: "text", required: true, placeholder: "e.g. March to June 2024" },
      { key: "lastSalaryReceived", label: "Last Salary Received", type: "text", required: false },
      { key: "deductionDetails", label: "Wrongful Deductions (if any)", type: "textarea", required: false },
      { key: "employerResponse", label: "Employer's Response (if any)", type: "textarea", required: false },
      { key: "labourCourt", label: "Labour Court / Authority", type: "text", required: true },
      { key: "advocateName", label: "Advocate Name", type: "text", required: false }
    ],
    systemPrompt: "Draft a salary recovery claim under Payment of Wages Act / Industrial Disputes Act. Include employment particulars, salary breakdown, period of non-payment, employer default, and prayer for payment of arrears with 15% interest and compensation under Section 15 Payment of Wages Act."
  },
  "Wrongful Termination": {
    category: "LABOUR LAW",
    courtHeader: "COMPLAINT FOR WRONGFUL / ILLEGAL TERMINATION",
    fields: [
      { key: "employeeName", label: "Employee Name", type: "text", required: true },
      { key: "employerName", label: "Employer / Company Name", type: "text", required: true },
      { key: "designation", label: "Designation", type: "text", required: true },
      { key: "joiningDate", label: "Date of Joining", type: "date", required: true },
      { key: "terminationDate", label: "Date of Termination", type: "date", required: true },
      { key: "terminationBasis", label: "Stated Reason for Termination", type: "textarea", required: true },
      { key: "groundsForChallenge", label: "Grounds for Challenging Termination", type: "textarea", required: true },
      { key: "procedureViolated", label: "Procedure Violated", type: "textarea", required: true, placeholder: "Show Cause Notice not given, natural justice violation..." },
      { key: "settlementOffered", label: "Settlement Offered by Employer", type: "text", required: false },
      { key: "reliefSought", label: "Relief Sought", type: "textarea", required: true, placeholder: "Reinstatement, back wages, compensation..." }
    ],
    systemPrompt: "Draft an Industrial Dispute complaint for wrongful/illegal termination under Section 2A Industrial Disputes Act. Challenge retrenchment without retrenchment compensation, violation of natural justice, discriminatory termination, and pray for reinstatement with continuity of service and full back wages."
  },
  "Workplace Harassment": {
    category: "LABOUR LAW",
    courtHeader: "COMPLAINT OF WORKPLACE HARASSMENT / POSH",
    fields: [
      { key: "complainantName", label: "Complainant Name", type: "text", required: true },
      { key: "respondentName", label: "Respondent / Harasser Name", type: "text", required: true },
      { key: "companyName", label: "Company / Employer Name", type: "text", required: true },
      { key: "harassmentType", label: "Type of Harassment", type: "select", required: true, options: ["Sexual Harassment (POSH)", "Verbal/Mental Harassment", "Physical Harassment", "Caste-Based Discrimination", "Gender Discrimination", "Bullying", "Other"] },
      { key: "harassmentDates", label: "Dates of Harassment Incidents", type: "text", required: true },
      { key: "harrassmentFacts", label: "Detailed Facts", type: "textarea", required: true },
      { key: "witnesses", label: "Witnesses (if any)", type: "text", required: false },
      { key: "evidenceAvailable", label: "Evidence Available", type: "textarea", required: false },
      { key: "icComplaintFiled", label: "Internal Committee Complaint Filed", type: "select", required: false, options: ["Yes", "No", "Not Applicable"] },
      { key: "reliefSought", label: "Relief Sought", type: "textarea", required: true }
    ],
    systemPrompt: "Draft a workplace harassment complaint under POSH Act 2013 / Industrial Disputes Act / IPC provisions. Include incidents, dates, pattern of harassment, witnesses, impact on work, complaint to Internal Committee, and prayer for inquiry, disciplinary action, and compensation."
  },
  "PF Dispute": {
    category: "LABOUR LAW",
    courtHeader: "COMPLAINT REGARDING PF / ESIC NON-COMPLIANCE",
    fields: [
      { key: "employeeName", label: "Employee Name", type: "text", required: true },
      { key: "employerName", label: "Employer Name", type: "text", required: true },
      { key: "pfAccountNumber", label: "PF Account / UAN Number", type: "text", required: false },
      { key: "disputeType", label: "Type of Dispute", type: "select", required: true, options: ["PF Not Deposited", "PF Deducted but Not Deposited", "Wrong PF Amount", "ESIC Not Provided", "Withdrawal Issue", "Transfer Issue"] },
      { key: "amountInDispute", label: "Amount in Dispute (₹)", type: "text", required: false },
      { key: "periodCovered", label: "Period Covered", type: "text", required: true },
      { key: "complaintFacts", label: "Facts of the Dispute", type: "textarea", required: true },
      { key: "pfOffice", label: "EPFO Office", type: "text", required: true, placeholder: "Regional PF Office address" }
    ],
    systemPrompt: "Draft a complaint/grievance to EPFO Regional Office regarding PF non-compliance under Employees Provident Fund and Miscellaneous Provisions Act 1952. Include employment details, PF violation, employer's default, and prayer for recovery + penalty against employer."
  },
  "Labour Notice": {
    category: "LABOUR LAW",
    courtHeader: "LABOUR LAW NOTICE",
    fields: [
      { key: "employeeName", label: "Employee Name", type: "text", required: true },
      { key: "employerName", label: "Employer Name", type: "text", required: true },
      { key: "noticeSubject", label: "Subject of Notice", type: "text", required: true },
      { key: "labourViolations", label: "Labour Law Violations", type: "textarea", required: true },
      { key: "reliefDemanded", label: "Relief Demanded", type: "textarea", required: true },
      { key: "timeLimit", label: "Time Limit", type: "text", required: true, placeholder: "e.g. 15 days" },
      { key: "advocateName", label: "Advocate Name", type: "text", required: true }
    ],
    systemPrompt: "Draft a formal Labour Law Notice to employer citing violations of Payment of Wages Act, Factories Act, Minimum Wages Act, Shops and Establishments Act, or Industrial Disputes Act. Demand compliance within specified period, warning of complaint to Labour Commissioner and legal proceedings."
  },
  // ══════════════════════ CONSUMER COURT ══════════════════════
  "Consumer Complaint": {
    category: "CONSUMER COURT",
    courtHeader: "BEFORE THE HON'BLE DISTRICT CONSUMER DISPUTES REDRESSAL COMMISSION",
    fields: [
      { key: "complainantName", label: "Complainant Name", type: "text", required: true },
      { key: "complainantAddress", label: "Complainant Address", type: "textarea", required: true },
      { key: "oppositeName", label: "Opposite Party Name", type: "text", required: true },
      { key: "oppositeAddress", label: "Opposite Party Address", type: "textarea", required: true },
      { key: "consumerForumLevel", label: "Forum Level", type: "select", required: true, options: ["District Commission (up to ₹50L)", "State Commission (₹50L-₹2Cr)", "National Commission (above ₹2Cr)"] },
      { key: "productService", label: "Product / Service Purchased", type: "text", required: true },
      { key: "purchaseDate", label: "Date of Purchase", type: "date", required: true },
      { key: "amountPaid", label: "Amount Paid (₹)", type: "text", required: true },
      { key: "deficiencyNature", label: "Nature of Deficiency / Defect", type: "textarea", required: true },
      { key: "complaintFacts", label: "Facts of the Complaint", type: "textarea", required: true },
      { key: "previousComplaints", label: "Previous Complaints to Company", type: "textarea", required: false },
      { key: "compensationClaimed", label: "Total Compensation Claimed (₹)", type: "text", required: true },
      { key: "advocateName", label: "Advocate / Self Represented", type: "text", required: false }
    ],
    systemPrompt: "Draft a formal Consumer Complaint under Consumer Protection Act 2019. Include complainant/opposite party details, purchase details, nature of deficiency/unfair trade practice, facts, previous complaints, and prayer for refund + compensation + litigation costs under Section 35 CPA."
  },
  "Refund Notice": {
    category: "CONSUMER COURT",
    courtHeader: "LEGAL NOTICE FOR REFUND",
    fields: [
      { key: "consumerName", label: "Consumer Name", type: "text", required: true },
      { key: "companyName", label: "Company / Merchant Name", type: "text", required: true },
      { key: "productService", label: "Product / Service", type: "text", required: true },
      { key: "purchaseDate", label: "Date of Purchase", type: "date", required: true },
      { key: "amountPaid", label: "Amount Paid (₹)", type: "text", required: true },
      { key: "reasonForRefund", label: "Reason for Refund", type: "textarea", required: true },
      { key: "refundDemanded", label: "Refund Amount Demanded (₹)", type: "text", required: true },
      { key: "previousRefundRequests", label: "Previous Refund Requests", type: "textarea", required: false },
      { key: "timeLimit", label: "Time Given for Refund", type: "text", required: true },
      { key: "advocateName", label: "Advocate Name", type: "text", required: false }
    ],
    systemPrompt: "Draft a formal Refund Notice under Consumer Protection Act 2019. Include purchase details, defect/deficiency facts, refund demand, previous requests ignored, time limit for compliance, and warning of consumer forum complaint with compensation claim."
  },
  "Product Defect Case": {
    category: "CONSUMER COURT",
    courtHeader: "CONSUMER COMPLAINT — PRODUCT LIABILITY",
    fields: [
      { key: "complainantName", label: "Complainant Name", type: "text", required: true },
      { key: "companyName", label: "Manufacturer / Seller", type: "text", required: true },
      { key: "productName", label: "Product Name & Model", type: "text", required: true },
      { key: "purchaseDate", label: "Purchase Date", type: "date", required: true },
      { key: "productPrice", label: "Product Price (₹)", type: "text", required: true },
      { key: "defectDescription", label: "Nature of Defect", type: "textarea", required: true },
      { key: "warrantyPeriod", label: "Warranty Period", type: "text", required: false },
      { key: "harmCaused", label: "Harm / Loss Caused", type: "textarea", required: true },
      { key: "companyResponse", label: "Company's Response", type: "textarea", required: false },
      { key: "compensationClaimed", label: "Compensation Claimed (₹)", type: "text", required: true }
    ],
    systemPrompt: "Draft a Product Liability complaint under Consumer Protection Act 2019 Chapter VI. Include product details, defect description, injury/loss caused, manufacturer strict liability, and prayer for refund/replacement + compensation for injury, mental agony, litigation costs."
  },
  "Online Shopping Fraud": {
    category: "CONSUMER COURT",
    courtHeader: "COMPLAINT — ONLINE SHOPPING FRAUD / E-COMMERCE DEFICIENCY",
    fields: [
      { key: "complainantName", label: "Complainant Name", type: "text", required: true },
      { key: "platformName", label: "E-Commerce Platform", type: "text", required: true, placeholder: "Amazon, Flipkart, Meesho..." },
      { key: "orderNumber", label: "Order Number", type: "text", required: true },
      { key: "orderDate", label: "Order Date", type: "date", required: true },
      { key: "productOrdered", label: "Product Ordered", type: "text", required: true },
      { key: "amountPaid", label: "Amount Paid (₹)", type: "text", required: true },
      { key: "fraudType", label: "Type of Issue", type: "select", required: true, options: ["Counterfeit Product", "Non-Delivery", "Wrong Product Delivered", "Refund Not Processed", "Fake Listing", "OTP Fraud"] },
      { key: "fraudFacts", label: "Facts of the Issue", type: "textarea", required: true },
      { key: "platformResponse", label: "Platform's Response", type: "textarea", required: false },
      { key: "compensationClaimed", label: "Compensation Claimed (₹)", type: "text", required: true }
    ],
    systemPrompt: "Draft a Consumer Complaint against e-commerce platform under Consumer Protection (E-Commerce) Rules 2020 and CPA 2019. Include order details, fraud/deficiency nature, platform's failure, and prayer for refund + e-commerce rule violation penalty + compensation."
  },
  "Service Deficiency Complaint": {
    category: "CONSUMER COURT",
    courtHeader: "CONSUMER COMPLAINT — SERVICE DEFICIENCY",
    fields: [
      { key: "complainantName", label: "Complainant Name", type: "text", required: true },
      { key: "serviceName", label: "Service Provider Name", type: "text", required: true },
      { key: "serviceType", label: "Type of Service", type: "text", required: true, placeholder: "Hospital, Builder, Telecom, Insurance, Education..." },
      { key: "serviceDate", label: "Date of Service", type: "date", required: true },
      { key: "amountPaid", label: "Amount Paid (₹)", type: "text", required: true },
      { key: "deficiencyFacts", label: "Nature of Service Deficiency", type: "textarea", required: true },
      { key: "losses", label: "Loss / Harm Suffered", type: "textarea", required: true },
      { key: "serviceProviderResponse", label: "Service Provider's Response", type: "textarea", required: false },
      { key: "compensationClaimed", label: "Compensation Claimed (₹)", type: "text", required: true }
    ],
    systemPrompt: "Draft a Consumer Complaint for service deficiency under CPA 2019 Section 2(11). Include service details, contracted vs delivered service gap, deficiency facts, losses, and prayer for refund + compensation for mental agony + litigation costs."
  },
  // ══════════════════════ CYBER LAW ══════════════════════
  "Social Media Harassment": {
    category: "CYBER LAW",
    courtHeader: "COMPLAINT — SOCIAL MEDIA HARASSMENT / CYBERBULLYING",
    fields: [
      { key: "complainantName", label: "Complainant Name", type: "text", required: true },
      { key: "harasser", label: "Harasser's Name / Profile", type: "text", required: true },
      { key: "platform", label: "Social Media Platform", type: "select", required: true, options: ["Instagram", "Facebook", "Twitter/X", "WhatsApp", "Telegram", "YouTube", "Snapchat", "LinkedIn", "Other"] },
      { key: "harassmentType", label: "Type of Harassment", type: "select", required: true, options: ["Abusive Messages", "Stalking", "Morphed Images", "Fake Profile", "Defamatory Content", "Sextortion", "Doxxing", "Other"] },
      { key: "startDate", label: "Harassment Started From", type: "date", required: true },
      { key: "harassmentFacts", label: "Detailed Facts", type: "textarea", required: true },
      { key: "digitalEvidence", label: "Screenshots / Evidence", type: "textarea", required: false },
      { key: "platformAction", label: "Platform's Action Taken", type: "textarea", required: false },
      { key: "ipcSections", label: "Applicable Sections", type: "text", required: false, placeholder: "IT Act 66A, 67; IPC 354D, 507..." },
      { key: "reliefSought", label: "Relief Sought", type: "textarea", required: true }
    ],
    systemPrompt: "Draft a cyber crime complaint for social media harassment under IT Act 2000 Section 66C, 67 and IPC 354D, 509, 507. Include platform details, harassment type, digital evidence, NCPCR/cybercrime portal reference, and prayer for account takedown, FIR registration, and compensation."
  },
  "Online Scam Complaint": {
    category: "CYBER LAW",
    courtHeader: "COMPLAINT — ONLINE FRAUD / SCAM",
    fields: [
      { key: "complainantName", label: "Complainant Name", type: "text", required: true },
      { key: "scamType", label: "Type of Online Scam", type: "select", required: true, options: ["Job Fraud", "Investment Fraud", "Lottery Scam", "Romance Scam", "KYC Fraud", "Tech Support Scam", "Cryptocurrency Fraud", "Other"] },
      { key: "scamDate", label: "Date of Scam", type: "date", required: true },
      { key: "amountLost", label: "Amount Lost (₹)", type: "text", required: true },
      { key: "scammerContact", label: "Scammer's Contact Details", type: "text", required: false },
      { key: "transactionDetails", label: "Transaction / Payment Details", type: "textarea", required: true },
      { key: "scamFacts", label: "How the Scam Occurred", type: "textarea", required: true },
      { key: "evidenceAvailable", label: "Evidence Available", type: "textarea", required: false },
      { key: "reliefSought", label: "Relief Sought", type: "textarea", required: true }
    ],
    systemPrompt: "Draft a cyber crime FIR/complaint for online fraud under IT Act 2000 Section 66C, 66D and IPC 420, 419. Include cybercrime helpline (1930) filing reference, transaction details, modus operandi, and prayer for FIR, account freeze, and recovery of lost amount."
  },
  "Data Privacy Complaint": {
    category: "CYBER LAW",
    courtHeader: "COMPLAINT — DATA PRIVACY VIOLATION",
    fields: [
      { key: "complainantName", label: "Complainant Name", type: "text", required: true },
      { key: "companyName", label: "Data Controller / Company", type: "text", required: true },
      { key: "dataBreachDate", label: "Date of Breach / Discovery", type: "date", required: true },
      { key: "dataExposed", label: "Data Exposed", type: "textarea", required: true, placeholder: "Name, Aadhaar, financial data, health data..." },
      { key: "howDiscovered", label: "How Breach Was Discovered", type: "textarea", required: true },
      { key: "harmCaused", label: "Harm Caused", type: "textarea", required: true },
      { key: "reliefSought", label: "Relief Sought", type: "textarea", required: true }
    ],
    systemPrompt: "Draft a Data Privacy Violation complaint under IT Act 2000 Section 43A, IT (Reasonable Security Practices) Rules 2011 and pending DPDP Act 2023. Include data breach details, company's failure to protect, harm suffered, and prayer for compensation and injunction to secure data."
  },
  "Hacking Complaint": {
    category: "CYBER LAW",
    courtHeader: "COMPLAINT — COMPUTER HACKING / UNAUTHORIZED ACCESS",
    fields: [
      { key: "complainantName", label: "Complainant Name", type: "text", required: true },
      { key: "systemHacked", label: "System / Account Hacked", type: "text", required: true },
      { key: "hackingDate", label: "Date of Hacking", type: "date", required: true },
      { key: "hackingFacts", label: "How Hacking Occurred", type: "textarea", required: true },
      { key: "dataStolen", label: "Data / Files Stolen/Damaged", type: "textarea", required: false },
      { key: "financialLoss", label: "Financial Loss (₹)", type: "text", required: false },
      { key: "suspectedHacker", label: "Suspected Hacker Details", type: "text", required: false },
      { key: "evidenceAvailable", label: "Digital Evidence", type: "textarea", required: false },
      { key: "reliefSought", label: "Relief Sought", type: "textarea", required: true }
    ],
    systemPrompt: "Draft a hacking complaint under IT Act 2000 Section 43, 66, 66B and IPC 379. Include system access details, unauthorized intrusion facts, data stolen, financial loss, and prayer for FIR, cyber forensic investigation, and compensation."
  },
  "Fake Profile Complaint": {
    category: "CYBER LAW",
    courtHeader: "COMPLAINT — IMPERSONATION / FAKE PROFILE",
    fields: [
      { key: "complainantName", label: "Complainant (Victim) Name", type: "text", required: true },
      { key: "platform", label: "Platform Where Fake Profile Exists", type: "text", required: true },
      { key: "fakeProfileURL", label: "Fake Profile URL / ID", type: "text", required: false },
      { key: "profileCreatedDate", label: "When Profile Was Created / Discovered", type: "date", required: false },
      { key: "impersonationFacts", label: "How Impersonation Occurred", type: "textarea", required: true },
      { key: "harmCaused", label: "Harm / Damage Caused", type: "textarea", required: true },
      { key: "evidenceScreenshots", label: "Evidence / Screenshots", type: "textarea", required: false },
      { key: "platformAction", label: "Platform's Action", type: "text", required: false },
      { key: "reliefSought", label: "Relief Sought", type: "textarea", required: true }
    ],
    systemPrompt: "Draft a complaint for identity theft/impersonation under IT Act 2000 Section 66C and IPC 419, 468. Include fake profile evidence, harm to reputation, financial damage, and prayer for FIR, profile takedown order, and compensation."
  },
  "Cyber Defamation": {
    category: "CYBER LAW",
    courtHeader: "COMPLAINT — CYBER DEFAMATION",
    fields: [
      { key: "complainantName", label: "Complainant Name", type: "text", required: true },
      { key: "accusedName", label: "Accused Name / Profile", type: "text", required: true },
      { key: "defamatoryContent", label: "Nature of Defamatory Content", type: "textarea", required: true },
      { key: "platform", label: "Platform / Website", type: "text", required: true },
      { key: "publicationDate", label: "Date Published", type: "date", required: true },
      { key: "reputationDamage", label: "Reputation / Business Damage", type: "textarea", required: true },
      { key: "evidenceLinks", label: "URLs / Screenshot Evidence", type: "textarea", required: false },
      { key: "reliefSought", label: "Relief Sought", type: "textarea", required: true }
    ],
    systemPrompt: "Draft a cyber defamation complaint under IPC 499, 500 and IT Act Section 66A (principles still apply). Include defamatory publication details, falsity of statements, damage to reputation, and prayer for FIR, content removal order, and compensation."
  },
  // ══════════════════════ TAX & GST ══════════════════════
  "GST Notice Reply": {
    category: "TAX & GST",
    courtHeader: "REPLY TO SHOW CAUSE NOTICE — GST DEPARTMENT",
    fields: [
      { key: "taxpayerName", label: "Taxpayer / Company Name", type: "text", required: true },
      { key: "gstin", label: "GSTIN", type: "text", required: true },
      { key: "noticeNumber", label: "Notice Number / DRC Reference", type: "text", required: true },
      { key: "noticeDate", label: "Notice Date", type: "date", required: true },
      { key: "noticePeriod", label: "Tax Period in Question", type: "text", required: true },
      { key: "taxDemanded", label: "Tax / Penalty Demanded (₹)", type: "text", required: true },
      { key: "groundsOfDemand", label: "Grounds Stated in Notice", type: "textarea", required: true },
      { key: "replyGrounds", label: "Grounds of Reply / Defence", type: "textarea", required: true, placeholder: "Input tax credit entitlement, classification correct, exports properly documented..." },
      { key: "documentsEnclosed", label: "Documents to be Enclosed", type: "textarea", required: false },
      { key: "reliefSought", label: "Relief Sought", type: "textarea", required: true }
    ],
    systemPrompt: "Draft a comprehensive Reply to GST Show Cause Notice under CGST Act 2017. Include taxpayer details, GSTIN, notice reference, factual reply, legal grounds under relevant CGST sections, supporting evidence, and prayer for dropping/reducing the demand."
  },
  "Income Tax Appeal": {
    category: "TAX & GST",
    courtHeader: "APPEAL BEFORE COMMISSIONER OF INCOME TAX (APPEALS)",
    fields: [
      { key: "appellantName", label: "Appellant Name", type: "text", required: true },
      { key: "pan", label: "PAN Number", type: "text", required: true },
      { key: "assessmentYear", label: "Assessment Year", type: "text", required: true, placeholder: "e.g. AY 2023-24" },
      { key: "assessmentOrderDate", label: "Date of Assessment Order", type: "date", required: true },
      { key: "taxDemand", label: "Tax Demand (₹)", type: "text", required: true },
      { key: "groundsOfAppeal", label: "Grounds of Appeal", type: "textarea", required: true },
      { key: "factsAndLaw", label: "Facts & Legal Arguments", type: "textarea", required: true },
      { key: "reliefSought", label: "Relief Sought", type: "textarea", required: true },
      { key: "taxPaid", label: "Tax Paid Under Protest (₹)", type: "text", required: false }
    ],
    systemPrompt: "Draft a formal Income Tax Appeal before CIT(A) under Section 246A of Income Tax Act 1961. Include grounds of appeal, legal arguments against additions/disallowances, case laws supporting appellant's position, and prayer for deletion/reduction of demand."
  },
  "Tax Dispute": {
    category: "TAX & GST",
    courtHeader: "TAX DISPUTE PETITION / OBJECTION",
    fields: [
      { key: "taxpayerName", label: "Taxpayer Name", type: "text", required: true },
      { key: "pan_gstin", label: "PAN / GSTIN", type: "text", required: true },
      { key: "taxType", label: "Tax Type", type: "select", required: true, options: ["Income Tax", "GST", "TDS", "Corporate Tax", "Customs", "State Tax"] },
      { key: "disputePeriod", label: "Dispute Period", type: "text", required: true },
      { key: "amountInDispute", label: "Amount in Dispute (₹)", type: "text", required: true },
      { key: "disputeFacts", label: "Facts of the Dispute", type: "textarea", required: true },
      { key: "legalGrounds", label: "Legal Grounds", type: "textarea", required: true },
      { key: "reliefSought", label: "Relief Sought", type: "textarea", required: true }
    ],
    systemPrompt: "Draft a Tax Dispute Petition / Rectification Application / Writ Petition against arbitrary tax assessment. Include taxpayer details, assessment facts, legal errors in assessment, applicable case laws, and prayer for reassessment or quashing of demand."
  },
  "GST Registration Draft": {
    category: "TAX & GST",
    courtHeader: "GST REGISTRATION / COMPLIANCE DOCUMENT",
    fields: [
      { key: "businessName", label: "Business / Trade Name", type: "text", required: true },
      { key: "constitutionType", label: "Constitution of Business", type: "select", required: true, options: ["Proprietorship", "Partnership", "LLP", "Private Limited", "Public Limited", "HUF", "Trust", "Other"] },
      { key: "principalAddress", label: "Principal Place of Business", type: "textarea", required: true },
      { key: "stateJurisdiction", label: "State / Jurisdiction", type: "text", required: true },
      { key: "businessActivity", label: "Business Activity / HSN/SAC", type: "textarea", required: true },
      { key: "turnoverEstimate", label: "Estimated Annual Turnover (₹)", type: "text", required: true },
      { key: "applicantName", label: "Authorized Signatory Name", type: "text", required: true },
      { key: "gstPurpose", label: "Purpose (New / Amendment / Cancellation)", type: "select", required: true, options: ["New Registration", "Amendment", "Cancellation", "Voluntary Registration", "Composition Scheme"] }
    ],
    systemPrompt: "Draft a GST Registration Application covering business details, registration type, HSN/SAC codes, bank account particulars, authorized signatory, digital signature requirements, and compliance obligations post-registration under CGST Act 2017."
  },
  // ══════════════════════ INTELLECTUAL PROPERTY ══════════════════════
  "Trademark Registration": {
    category: "INTELLECTUAL PROPERTY",
    courtHeader: "APPLICATION FOR TRADEMARK REGISTRATION",
    fields: [
      { key: "applicantName", label: "Applicant Name / Company", type: "text", required: true },
      { key: "trademarkName", label: "Trademark / Brand Name", type: "text", required: true },
      { key: "trademarkClass", label: "Trademark Class (1-45)", type: "text", required: true, placeholder: "e.g. Class 25 (Clothing), Class 42 (Software)" },
      { key: "goodsServices", label: "Goods / Services Description", type: "textarea", required: true },
      { key: "firstUseDate", label: "Date of First Use in India", type: "date", required: false },
      { key: "trademarkType", label: "Trademark Type", type: "select", required: true, options: ["Word Mark", "Logo/Device", "Combined (Word+Logo)", "Sound Mark", "Colour Mark", "Certification Mark"] },
      { key: "existingRegistration", label: "Existing Similar Marks (if known)", type: "text", required: false },
      { key: "priority", label: "Priority Claim (Paris Convention)", type: "text", required: false },
      { key: "applicantAddress", label: "Applicant Address", type: "textarea", required: true }
    ],
    systemPrompt: "Draft a Trademark Registration Application under Trade Marks Act 1999. Include TM-A application format, applicant details, mark description, class specification, goods/services, user affidavit, and statement of distinctive character. Include examination procedure notes."
  },
  "Copyright Complaint": {
    category: "INTELLECTUAL PROPERTY",
    courtHeader: "COMPLAINT FOR COPYRIGHT INFRINGEMENT",
    fields: [
      { key: "authorName", label: "Author / Copyright Owner Name", type: "text", required: true },
      { key: "workTitle", label: "Title of Copyrighted Work", type: "text", required: true },
      { key: "workType", label: "Type of Work", type: "select", required: true, options: ["Literary Work", "Musical Work", "Artistic Work", "Cinematograph Film", "Sound Recording", "Computer Program", "Other"] },
      { key: "creationDate", label: "Date of Creation", type: "date", required: false },
      { key: "infringerName", label: "Infringer Name / Entity", type: "text", required: true },
      { key: "infringementFacts", label: "Nature of Infringement", type: "textarea", required: true },
      { key: "infringingWork", label: "Infringing Work / URL", type: "text", required: false },
      { key: "damagesClaimed", label: "Damages Claimed (₹)", type: "text", required: false },
      { key: "reliefSought", label: "Relief Sought", type: "textarea", required: true }
    ],
    systemPrompt: "Draft a Copyright Infringement Complaint/Suit under Copyright Act 1957. Include copyright ownership, originality of work, unauthorized copying/reproduction, defendant's act of infringement, damages, and prayer for injunction + damages + delivery-up + account of profits."
  },
  "Patent Draft": {
    category: "INTELLECTUAL PROPERTY",
    courtHeader: "PATENT APPLICATION DRAFT",
    fields: [
      { key: "inventorName", label: "Inventor / Applicant Name", type: "text", required: true },
      { key: "inventionTitle", label: "Title of Invention", type: "text", required: true },
      { key: "technicalField", label: "Technical Field", type: "text", required: true, placeholder: "e.g. Mechanical Engineering, Software, Pharmaceuticals" },
      { key: "inventionDescription", label: "Invention Description", type: "textarea", required: true, placeholder: "What problem does it solve? How does it work?" },
      { key: "novelty", label: "Novelty / Innovation", type: "textarea", required: true, placeholder: "What is new and inventive about this?" },
      { key: "priorArt", label: "Prior Art (Existing Solutions)", type: "textarea", required: false },
      { key: "claims", label: "Key Claims", type: "textarea", required: true, placeholder: "What you want patent protection for..." },
      { key: "inventionDate", label: "Date of Invention", type: "date", required: false }
    ],
    systemPrompt: "Draft a formal Patent Application specification under Patents Act 1970. Include title of invention, field, background/prior art, summary, detailed description, working mechanism, claims (independent + dependent), and abstract. Structure in proper patent specification format."
  },
  "IP Infringement Notice": {
    category: "INTELLECTUAL PROPERTY",
    courtHeader: "CEASE AND DESIST / IP INFRINGEMENT NOTICE",
    fields: [
      { key: "ipOwnerName", label: "IP Owner Name", type: "text", required: true },
      { key: "infringerName", label: "Infringer Name / Company", type: "text", required: true },
      { key: "ipType", label: "Type of IP", type: "select", required: true, options: ["Trademark", "Copyright", "Patent", "Trade Secret", "Design Rights"] },
      { key: "ipRegistrationNo", label: "IP Registration Number", type: "text", required: false },
      { key: "infringingActivity", label: "Infringing Activity", type: "textarea", required: true },
      { key: "howDiscovered", label: "When/How Infringement Discovered", type: "textarea", required: true },
      { key: "damagesSuffered", label: "Damages Suffered", type: "textarea", required: false },
      { key: "demandsMade", label: "Demands Made", type: "textarea", required: true, placeholder: "Cease use, destroy infringing goods, account for profits, pay damages..." },
      { key: "timeLimit", label: "Time Limit to Comply", type: "text", required: true },
      { key: "advocateName", label: "Advocate Name", type: "text", required: true }
    ],
    systemPrompt: "Draft a formal Cease and Desist / IP Infringement Notice. Include IP ownership proof, infringement details, legal rights under TM Act / Copyright Act / Patents Act, demand to immediately stop infringement + destroy infringing copies + pay damages, and warning of civil + criminal proceedings."
  },
  // ══════════════════════ COURT & DOCUMENTS ══════════════════════
  "Affidavit": {
    category: "COURT & DOCUMENTS",
    courtHeader: "AFFIDAVIT",
    fields: [
      { key: "deponentName", label: "Deponent Name", type: "text", required: true },
      { key: "deponentAge", label: "Age", type: "text", required: true },
      { key: "deponentAddress", label: "Deponent Address", type: "textarea", required: true },
      { key: "courtPurpose", label: "Purpose / Before Which Authority", type: "text", required: true, placeholder: "High Court, District Court, Notary, Government Office..." },
      { key: "affidavitSubject", label: "Subject of Affidavit", type: "text", required: true },
      { key: "statements", label: "Statements / Declarations", type: "textarea", required: true, placeholder: "Numbered statements to be made under oath..." },
      { key: "place", label: "Place of Execution", type: "text", required: true },
      { key: "executionDate", label: "Date of Execution", type: "date", required: true },
      { key: "witnessName", label: "Witness Name", type: "text", required: false }
    ],
    systemPrompt: 'Draft a formal Affidavit with proper header (Affidavit format), deponent identification, statement "I, the deponent above named, do hereby solemnly affirm and declare as under:", numbered statements, oath/affirmation clause, signature space, and notary/oath commissioner attestation space.'
  },
  "RTI Application": {
    category: "COURT & DOCUMENTS",
    courtHeader: "APPLICATION UNDER RIGHT TO INFORMATION ACT, 2005",
    fields: [
      { key: "applicantName", label: "Applicant Name", type: "text", required: true },
      { key: "applicantAddress", label: "Applicant Address", type: "textarea", required: true },
      { key: "applicantContact", label: "Contact / Email", type: "text", required: false },
      { key: "publicAuthority", label: "Public Authority / Department", type: "text", required: true, placeholder: "Name of government department/office" },
      { key: "pioName", label: "Public Information Officer (if known)", type: "text", required: false },
      { key: "informationSought", label: "Information Sought", type: "textarea", required: true, placeholder: "List specific information/documents needed — numbered points" },
      { key: "periodCovered", label: "Time Period Covered", type: "text", required: false, placeholder: "e.g. 2020-2024" },
      { key: "preferredFormat", label: "Preferred Format", type: "select", required: false, options: ["Physical Copies", "Electronic Copy", "Inspection", "Any available format"] },
      { key: "feePaid", label: "Application Fee", type: "text", required: false, placeholder: "₹10 via IPO/DD/online" }
    ],
    systemPrompt: "Draft a formal RTI Application under Section 6 of the Right to Information Act 2005. Include applicant details, clear numbered information points, specific document references, reasonable time period, request for waiver if BPL, and information for filing fee payment."
  },
  "Writ Petition": {
    category: "COURT & DOCUMENTS",
    courtHeader: "IN THE HON'BLE HIGH COURT",
    fields: [
      { key: "petitionerName", label: "Petitioner Name", type: "text", required: true },
      { key: "respondentName", label: "Respondent (Government/Authority)", type: "text", required: true },
      { key: "courtName", label: "High Court Name", type: "text", required: true },
      { key: "writType", label: "Type of Writ", type: "select", required: true, options: ["Writ of Mandamus", "Writ of Certiorari", "Writ of Habeas Corpus", "Writ of Prohibition", "Writ of Quo Warranto"] },
      { key: "fundamentalRightsViolated", label: "Fundamental Rights Violated", type: "text", required: true, placeholder: "Article 14, 19, 21..." },
      { key: "challengedAction", label: "Challenged Order / Action", type: "textarea", required: true },
      { key: "petitionFacts", label: "Facts of the Case", type: "textarea", required: true },
      { key: "legalGrounds", label: "Legal Grounds", type: "textarea", required: true },
      { key: "urgency", label: "Urgency for Ad-Interim Relief", type: "textarea", required: false },
      { key: "reliefSought", label: "Relief Sought", type: "textarea", required: true },
      { key: "advocateName", label: "Advocate Name", type: "text", required: true }
    ],
    systemPrompt: "Draft a formal Writ Petition under Article 226 / 32 of the Constitution of India. Include petitioner/respondent details, constitutional rights violated, challenged government action, legal grounds, urgency for ad-interim stay/relief, and appropriate writ prayer (mandamus/certiorari/habeas corpus etc.)."
  },
  "Court Argument": {
    category: "COURT & DOCUMENTS",
    courtHeader: "WRITTEN ARGUMENTS / SYNOPSIS",
    fields: [
      { key: "caseTitle", label: "Case Title", type: "text", required: true },
      { key: "caseNumber", label: "Case Number", type: "text", required: true },
      { key: "courtName", label: "Court Name", type: "text", required: true },
      { key: "clientSide", label: "Arguments On Behalf Of", type: "select", required: true, options: ["Plaintiff / Petitioner", "Defendant / Respondent", "Accused", "Intervenor"] },
      { key: "hearingDate", label: "Date of Hearing", type: "date", required: false },
      { key: "issuesForDecision", label: "Issues for Decision", type: "textarea", required: true },
      { key: "factualBackground", label: "Factual Background", type: "textarea", required: true },
      { key: "legalArguments", label: "Legal Arguments", type: "textarea", required: true },
      { key: "caseLawsCited", label: "Case Laws / Precedents Cited", type: "textarea", required: false },
      { key: "conclusion", label: "Conclusion / Prayer", type: "textarea", required: true },
      { key: "advocateName", label: "Advocate Name", type: "text", required: true }
    ],
    systemPrompt: "Draft comprehensive Written Arguments / Synopsis for submission before court. Include case identification, issues framed, factual synopsis, legal propositions with supporting case law citations, rebuttal of opponent's arguments, and conclusion with prayer."
  },
  "Evidence Summary": {
    category: "COURT & DOCUMENTS",
    courtHeader: "EVIDENCE SUMMARY / EXHIBIT LIST",
    fields: [
      { key: "caseTitle", label: "Case Title", type: "text", required: true },
      { key: "caseNumber", label: "Case Number", type: "text", required: true },
      { key: "courtName", label: "Court Name", type: "text", required: true },
      { key: "documentaryEvidence", label: "Documentary Evidence", type: "textarea", required: true, placeholder: "List all documents with Exhibit numbers — Ex. A, Ex. B..." },
      { key: "witnessEvidence", label: "Witness Evidence", type: "textarea", required: false, placeholder: "List witnesses and their testimony summary..." },
      { key: "forensicEvidence", label: "Forensic / Expert Evidence", type: "textarea", required: false },
      { key: "electronicEvidence", label: "Electronic Evidence", type: "textarea", required: false },
      { key: "evidenceSummary", label: "Evidence Analysis / How it Proves Case", type: "textarea", required: true },
      { key: "advocateName", label: "Advocate Name", type: "text", required: true }
    ],
    systemPrompt: "Draft a comprehensive Evidence Summary / Exhibit List for court submission. Organize evidence into categories (documentary, oral, forensic, electronic), number each exhibit, explain relevance and how each piece proves the case, and include chain of custody notes for key exhibits."
  },
  "Legal Research": {
    category: "COURT & DOCUMENTS",
    courtHeader: "LEGAL RESEARCH MEMORANDUM",
    fields: [
      { key: "researchTitle", label: "Research Question / Topic", type: "text", required: true },
      { key: "contextFacts", label: "Factual Context", type: "textarea", required: true },
      { key: "legalIssues", label: "Legal Issues to Research", type: "textarea", required: true },
      { key: "applicableLaws", label: "Applicable Laws / Acts", type: "textarea", required: false },
      { key: "jurisdiction", label: "Jurisdiction", type: "text", required: true, placeholder: "Indian courts / Specific State / International" },
      { key: "specificQuery", label: "Specific Research Query", type: "textarea", required: true },
      { key: "purposeOfResearch", label: "Purpose / Use Case", type: "text", required: true }
    ],
    systemPrompt: "Prepare a comprehensive Legal Research Memorandum. Include statement of issues, short answer, applicable legal framework, detailed analysis with case law citations (Supreme Court and High Court precedents), comparative analysis if relevant, and conclusion with practical recommendations. Format as professional legal memo."
  }
};
function getTemplate(draftType) {
  return DRAFT_TEMPLATES[draftType] || {
    category: "GENERAL",
    courtHeader: "LEGAL DOCUMENT",
    fields: [
      { key: "petitionerName", label: "Party Name (Petitioner/Plaintiff)", type: "text", required: true },
      { key: "respondentName", label: "Opposite Party Name", type: "text", required: true },
      { key: "courtName", label: "Court / Forum Name", type: "text", required: true },
      { key: "caseNumber", label: "Case / File Number", type: "text", required: false },
      { key: "incidentDate", label: "Incident / Transaction Date", type: "date", required: false },
      { key: "facts", label: "Facts of the Matter", type: "textarea", required: true, placeholder: "Detailed factual background..." },
      { key: "legalGrounds", label: "Legal Grounds / Sections", type: "textarea", required: false },
      { key: "reliefSought", label: "Relief / Prayer Sought", type: "textarea", required: true },
      { key: "advocateName", label: "Advocate Name", type: "text", required: false }
    ],
    systemPrompt: `You are an expert Indian advocate. Draft a comprehensive, court-ready legal document for: ${draftType}. Include all standard sections: parties, facts, grounds, legal provisions, and prayer. Format professionally.`
  };
}
const GENERATION_MODES = [
  { id: "standard", label: "Generate Draft", icon: "📄", description: "Standard legal draft", color: "indigo" },
  { id: "enhanced", label: "Enhanced Draft", icon: "⚡", description: "Enhanced with case laws & precedents", color: "violet" },
  { id: "court_ready", label: "Court-Ready Draft", icon: "⚖️", description: "Full official court format", color: "purple" },
  { id: "hindi", label: "Hindi Version", icon: "🇮🇳", description: "Generate in Hindi", color: "orange" },
  { id: "english", label: "English Version", icon: "🌐", description: "Generate in English", color: "blue" },
  { id: "bilingual", label: "Bilingual Version", icon: "🔀", description: "Hindi + English both", color: "green" }
];
const ALL_COUNTRIES = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Antigua and Barbuda",
  "Argentina",
  "Armenia",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bhutan",
  "Bolivia",
  "Bosnia and Herzegovina",
  "Botswana",
  "Brazil",
  "Brunei",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Cabo Verde",
  "Cambodia",
  "Cameroon",
  "Canada",
  "Central African Republic",
  "Chad",
  "Chile",
  "China",
  "Colombia",
  "Comoros",
  "Congo (Brazzaville)",
  "Congo (Kinshasa)",
  "Costa Rica",
  "Croatia",
  "Cuba",
  "Cyprus",
  "Czech Republic",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Eritrea",
  "Estonia",
  "Eswatini",
  "Ethiopia",
  "Fiji",
  "Finland",
  "France",
  "Gabon",
  "Gambia",
  "Georgia",
  "Germany",
  "Ghana",
  "Greece",
  "Grenada",
  "Guatemala",
  "Guinea",
  "Guinea-Bissau",
  "Guyana",
  "Haiti",
  "Honduras",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran",
  "Iraq",
  "Ireland",
  "Israel",
  "Italy",
  "Ivory Coast",
  "Jamaica",
  "Japan",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kiribati",
  "Kuwait",
  "Kyrgyzstan",
  "Laos",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Marshall Islands",
  "Mauritania",
  "Mauritius",
  "Mexico",
  "Micronesia",
  "Moldova",
  "Monaco",
  "Mongolia",
  "Montenegro",
  "Morocco",
  "Mozambique",
  "Myanmar",
  "Namibia",
  "Nauru",
  "Nepal",
  "Netherlands",
  "New Zealand",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "North Korea",
  "North Macedonia",
  "Norway",
  "Oman",
  "Pakistan",
  "Palau",
  "Palestine",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines",
  "Poland",
  "Portugal",
  "Qatar",
  "Romania",
  "Russia",
  "Rwanda",
  "Saint Kitts and Nevis",
  "Saint Lucia",
  "Saint Vincent and the Grenadines",
  "Samoa",
  "San Marino",
  "Sao Tome and Principe",
  "Saudi Arabia",
  "Senegal",
  "Serbia",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Slovakia",
  "Slovenia",
  "Solomon Islands",
  "Somalia",
  "South Africa",
  "South Korea",
  "South Sudan",
  "Spain",
  "Sri Lanka",
  "Sudan",
  "Suriname",
  "Sweden",
  "Switzerland",
  "Syria",
  "Taiwan",
  "Tajikistan",
  "Tanzania",
  "Thailand",
  "Timor-Leste",
  "Togo",
  "Tonga",
  "Trinidad and Tobago",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Tuvalu",
  "Uganda",
  "Ukraine",
  "United Arab Emirates",
  "United Kingdom",
  "United States",
  "Uruguay",
  "Uzbekistan",
  "Vanuatu",
  "Vatican City",
  "Venezuela",
  "Vietnam",
  "Yemen",
  "Zambia",
  "Zimbabwe"
];
const FLAG_EMOJI = {
  "India": "🇮🇳",
  "United States": "🇺🇸",
  "United Kingdom": "🇬🇧",
  "Canada": "🇨🇦",
  "Australia": "🇦🇺",
  "Germany": "🇩🇪",
  "France": "🇫🇷",
  "Italy": "🇮🇹",
  "Spain": "🇪🇸",
  "Japan": "🇯🇵",
  "China": "🇨🇳",
  "Singapore": "🇸🇬",
  "United Arab Emirates": "🇦🇪",
  "Saudi Arabia": "🇸🇦",
  "Qatar": "🇶🇦",
  "Brazil": "🇧🇷",
  "Russia": "🇷🇺",
  "South Africa": "🇿🇦",
  "Pakistan": "🇵🇰",
  "Bangladesh": "🇧🇩",
  "Sri Lanka": "🇱🇰",
  "Nepal": "🇳🇵",
  "Malaysia": "🇲🇾",
  "Indonesia": "🇮🇩",
  "Philippines": "🇵🇭",
  "Thailand": "🇹🇭",
  "Vietnam": "🇻🇳",
  "South Korea": "🇰🇷",
  "Turkey": "🇹🇷",
  "Netherlands": "🇳🇱",
  "Sweden": "🇸🇪",
  "Norway": "🇳🇴",
  "Denmark": "🇩🇰",
  "Switzerland": "🇨🇭",
  "Poland": "🇵🇱",
  "Mexico": "🇲🇽",
  "Argentina": "🇦🇷",
  "Chile": "🇨🇱",
  "New Zealand": "🇳🇿",
  "Ireland": "🇮🇪",
  "Portugal": "🇵🇹",
  "Greece": "🇬🇷",
  "Egypt": "🇪🇬",
  "Nigeria": "🇳🇬",
  "Kenya": "🇰🇪",
  "Ethiopia": "🇪🇹",
  "Ghana": "🇬🇭",
  "Morocco": "🇲🇦",
  "Israel": "🇮🇱",
  "Iraq": "🇮🇶",
  "Iran": "🇮🇷",
  "Kuwait": "🇰🇼",
  "Bahrain": "🇧🇭",
  "Oman": "🇴🇲",
  "Jordan": "🇯🇴",
  "Lebanon": "🇱🇧",
  "Myanmar": "🇲🇲",
  "Cambodia": "🇰🇭",
  "Ukraine": "🇺🇦",
  "Belarus": "🇧🇾",
  "Kazakhstan": "🇰🇿"
};
const CountrySelect = ({
  value = "",
  onChange,
  filled = false,
  placeholder = "Search and select country...",
  required = false
}) => {
  const [open, setOpen] = reactExports.useState(false);
  const [query, setQuery] = reactExports.useState("");
  const [highlighted, setHighlighted] = reactExports.useState(0);
  const inputRef = reactExports.useRef(null);
  const listRef = reactExports.useRef(null);
  const containerRef = reactExports.useRef(null);
  const filtered = query.trim() ? ALL_COUNTRIES.filter((c) => c.toLowerCase().includes(query.toLowerCase())) : ALL_COUNTRIES;
  reactExports.useEffect(() => {
    const handler = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setOpen(false);
        setQuery("");
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);
  reactExports.useEffect(() => {
    var _a;
    if (open) {
      (_a = inputRef.current) == null ? void 0 : _a.focus();
      setHighlighted(0);
    }
  }, [open]);
  reactExports.useEffect(() => {
    if (listRef.current) {
      const el = listRef.current.children[highlighted];
      el == null ? void 0 : el.scrollIntoView({ block: "nearest" });
    }
  }, [highlighted]);
  const handleSelect = reactExports.useCallback((country) => {
    onChange(country);
    setOpen(false);
    setQuery("");
  }, [onChange]);
  const handleKeyDown = (e) => {
    if (!open) {
      if (e.key === "Enter" || e.key === " " || e.key === "ArrowDown") setOpen(true);
      return;
    }
    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        setHighlighted((h) => Math.min(h + 1, filtered.length - 1));
        break;
      case "ArrowUp":
        e.preventDefault();
        setHighlighted((h) => Math.max(h - 1, 0));
        break;
      case "Enter":
        e.preventDefault();
        if (filtered[highlighted]) handleSelect(filtered[highlighted]);
        break;
      case "Escape":
        setOpen(false);
        setQuery("");
        break;
    }
  };
  const flag = value ? FLAG_EMOJI[value] || "🌍" : null;
  const borderClass = filled ? "border-emerald-300 dark:border-emerald-700/50 bg-emerald-50/50 dark:bg-emerald-950/10" : "border-slate-200 dark:border-white/8 bg-white dark:bg-[#141E35]";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { ref: containerRef, className: "relative", onKeyDown: handleKeyDown, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        type: "button",
        onClick: () => setOpen((o) => !o),
        "aria-haspopup": "listbox",
        "aria-expanded": open,
        className: `w-full flex items-center gap-2 border rounded-xl px-4 py-3 text-sm font-medium outline-none transition-all focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 ${borderClass} text-left`,
        children: [
          flag ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-base shrink-0", children: flag }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Globe, { size: 15, className: "text-slate-400 shrink-0" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `flex-1 truncate ${value ? "text-slate-800 dark:text-white font-semibold" : "text-slate-400"} flex items-center gap-1.5`, children: [
            value || placeholder,
            value && /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { size: 14, className: "text-emerald-500 shrink-0" })
          ] }),
          value && /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: (e) => {
                e.stopPropagation();
                onChange("");
              },
              className: "p-0.5 hover:bg-slate-200 dark:hover:bg-zinc-700 rounded-full shrink-0 transition-colors",
              "aria-label": "Clear selection",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 12, className: "text-slate-400" })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            ChevronDown,
            {
              size: 15,
              className: `text-slate-400 shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`
            }
          )
        ]
      }
    ),
    open && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "absolute z-[9999] left-0 right-0 mt-1.5 bg-white dark:bg-[#1A2540] border border-slate-200 dark:border-white/10 rounded-2xl shadow-2xl overflow-hidden",
        style: { maxHeight: "320px" },
        role: "listbox",
        "aria-label": "Country selection",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 px-3 py-2.5 border-b border-slate-100 dark:border-white/5 sticky top-0 bg-white dark:bg-[#1A2540] z-10", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { size: 14, className: "text-slate-400 shrink-0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                ref: inputRef,
                type: "text",
                value: query,
                onChange: (e) => {
                  setQuery(e.target.value);
                  setHighlighted(0);
                },
                placeholder: "Type to search country...",
                className: "flex-1 text-xs font-medium text-slate-800 dark:text-white bg-transparent border-none outline-none placeholder:text-slate-400",
                "aria-label": "Search countries"
              }
            ),
            query && /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: () => {
                  setQuery("");
                  setHighlighted(0);
                },
                className: "p-0.5 hover:bg-slate-100 dark:hover:bg-zinc-700 rounded-full",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 11, className: "text-slate-400" })
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              ref: listRef,
              className: "overflow-y-auto custom-scrollbar",
              style: { maxHeight: "260px" },
              children: filtered.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center justify-center py-8 text-center", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Globe, { size: 24, className: "text-slate-300 dark:text-zinc-700 mb-2" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs font-bold text-slate-400", children: [
                  'No country found for "',
                  query,
                  '"'
                ] })
              ] }) : filtered.map((country, idx) => {
                const isSelected = country === value;
                const isHovered = idx === highlighted;
                return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "button",
                  {
                    type: "button",
                    role: "option",
                    "aria-selected": isSelected,
                    onClick: () => handleSelect(country),
                    onMouseEnter: () => setHighlighted(idx),
                    className: `w-full flex items-center justify-between px-4 py-2.5 text-left transition-colors ${isSelected ? "bg-indigo-50/80 dark:bg-indigo-950/40 text-indigo-700 dark:text-indigo-300 font-bold" : isHovered ? "bg-slate-50 dark:bg-white/5 text-slate-800 dark:text-white" : "text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-white/5"}`,
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2.5 min-w-0", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-base w-6 text-center shrink-0", children: FLAG_EMOJI[country] || "🌍" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold truncate", children: country })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 shrink-0", children: [
                        isSelected && /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { size: 14, className: "text-indigo-600 dark:text-indigo-400" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `w-4 h-4 rounded-full border flex items-center justify-center transition-all ${isSelected ? "border-indigo-600 dark:border-indigo-400 bg-indigo-600 dark:bg-indigo-400" : "border-slate-300 dark:border-zinc-600 bg-transparent"}`, children: isSelected && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-1.5 h-1.5 rounded-full bg-white" }) })
                      ] })
                    ]
                  },
                  country
                );
              })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-4 py-2 border-t border-slate-100 dark:border-white/5 bg-slate-50/80 dark:bg-black/10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[10px] text-slate-400 font-medium", children: [
            filtered.length,
            " of ",
            ALL_COUNTRIES.length,
            " countries",
            query && ` · "${query}"`
          ] }) })
        ]
      }
    )
  ] });
};
const STATES_BY_COUNTRY = {
  "India": [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
    "Andaman and Nicobar Islands",
    "Chandigarh",
    "Dadra and Nagar Haveli and Daman and Diu",
    "Delhi",
    "Jammu and Kashmir",
    "Ladakh",
    "Lakshadweep",
    "Puducherry"
  ],
  "United States": [
    "Alabama",
    "Alaska",
    "Arizona",
    "Arkansas",
    "California",
    "Colorado",
    "Connecticut",
    "Delaware",
    "Florida",
    "Georgia",
    "Hawaii",
    "Idaho",
    "Illinois",
    "Indiana",
    "Iowa",
    "Kansas",
    "Kentucky",
    "Louisiana",
    "Maine",
    "Maryland",
    "Massachusetts",
    "Michigan",
    "Minnesota",
    "Mississippi",
    "Missouri",
    "Montana",
    "Nebraska",
    "Nevada",
    "New Hampshire",
    "New Jersey",
    "New Mexico",
    "New York",
    "North Carolina",
    "North Dakota",
    "Ohio",
    "Oklahoma",
    "Oregon",
    "Pennsylvania",
    "Rhode Island",
    "South Carolina",
    "South Dakota",
    "Tennessee",
    "Texas",
    "Utah",
    "Vermont",
    "Virginia",
    "Washington",
    "West Virginia",
    "Wisconsin",
    "Wyoming",
    "District of Columbia",
    "Puerto Rico"
  ],
  "United Kingdom": [
    "England",
    "Scotland",
    "Wales",
    "Northern Ireland",
    "Greater London",
    "West Midlands",
    "Greater Manchester",
    "West Yorkshire",
    "Kent",
    "Essex",
    "Merseyside",
    "South Yorkshire",
    "Hampshire",
    "Lancashire"
  ],
  "Canada": [
    "Ontario",
    "Quebec",
    "British Columbia",
    "Alberta",
    "Manitoba",
    "Saskatchewan",
    "Nova Scotia",
    "New Brunswick",
    "Newfoundland and Labrador",
    "Prince Edward Island",
    "Northwest Territories",
    "Yukon",
    "Nunavut"
  ],
  "Australia": [
    "New South Wales",
    "Victoria",
    "Queensland",
    "Western Australia",
    "South Australia",
    "Tasmania",
    "Australian Capital Territory",
    "Northern Territory"
  ],
  "Germany": [
    "Bavaria",
    "Baden-Württemberg",
    "Berlin",
    "Brandyburg",
    "Bremen",
    "Hamburg",
    "Hesse",
    "Lower Saxony",
    "Mecklenburg-Vorpommern",
    "North Rhine-Westphalia",
    "Rhineland-Palatinate",
    "Saarland",
    "Saxony",
    "Saxony-Anhalt",
    "Schleswig-Holstein",
    "Thuringia"
  ],
  "France": [
    "Auvergne-Rhône-Alpes",
    "Bourgogne-Franche-Comté",
    "Brittany",
    "Centre-Val de Loire",
    "Corsica",
    "Grand Est",
    "Hauts-de-France",
    "Île-de-France",
    "Normandy",
    "Nouvelle-Aquitaine",
    "Occitanie",
    "Pays de la Loire",
    "Provence-Alpes-Côte d'Azur",
    "Guadeloupe",
    "Martinique",
    "Guyane",
    "La Réunion",
    "Mayotte"
  ],
  "Italy": [
    "Abruzzo",
    "Aosta Valley",
    "Apulia",
    "Basilicata",
    "Calabria",
    "Campania",
    "Emilia-Romagna",
    "Friuli-Venezia Giulia",
    "Lazio",
    "Liguria",
    "Lombardy",
    "Marche",
    "Molise",
    "Piedmont",
    "Sardinia",
    "Sicily",
    "Trentino-Alto Adige",
    "Tuscany",
    "Umbria",
    "Veneto"
  ],
  "Spain": [
    "Andalusia",
    "Aragon",
    "Asturias",
    "Balearic Islands",
    "Basque Country",
    "Canary Islands",
    "Cantabria",
    "Castile and León",
    "Castile-La Mancha",
    "Catalonia",
    "Extremadura",
    "Galicia",
    "La Rioja",
    "Madrid",
    "Murcia",
    "Navarre",
    "Valencia"
  ],
  "Japan": [
    "Hokkaido",
    "Aomori",
    "Iwate",
    "Miyagi",
    "Akita",
    "Yamagata",
    "Fukushima",
    "Ibaraki",
    "Tochigi",
    "Gunma",
    "Saitama",
    "Chiba",
    "Tokyo",
    "Kanagawa",
    "Niigata",
    "Toyama",
    "Ishikawa",
    "Fukui",
    "Yamanashi",
    "Nagano",
    "Gifu",
    "Shizuoka",
    "Aichi",
    "Mie",
    "Shiga",
    "Kyoto",
    "Osaka",
    "Hyogo",
    "Nara",
    "Wakayama",
    "Tottori",
    "Shimane",
    "Okayama",
    "Hiroshima",
    "Yamaguchi",
    "Tokushima",
    "Kagawa",
    "Ehime",
    "Kochi",
    "Fukuoka",
    "Saga",
    "Nagasaki",
    "Kumamoto",
    "Oita",
    "Miyazaki",
    "Kagoshima",
    "Okinawa"
  ],
  "China": [
    "Anhui",
    "Beijing",
    "Chongqing",
    "Fujian",
    "Gansu",
    "Guangdong",
    "Guangxi",
    "Guizhou",
    "Hainan",
    "Hebei",
    "Heilongjiang",
    "Henan",
    "Hubei",
    "Hunan",
    "Inner Mongolia",
    "Jiangsu",
    "Jiangxi",
    "Jilin",
    "Liaoning",
    "Ningxia",
    "Qinghai",
    "Shaanxi",
    "Shandong",
    "Shanghai",
    "Shanxi",
    "Sichuan",
    "Tianjin",
    "Tibet",
    "Xinjiang",
    "Yunnan",
    "Zhejiang",
    "Hong Kong",
    "Macau",
    "Taiwan"
  ],
  "Singapore": [
    "Central Region",
    "East Region",
    "North Region",
    "North-East Region",
    "West Region"
  ],
  "United Arab Emirates": [
    "Abu Dhabi",
    "Dubai",
    "Sharjah",
    "Ajman",
    "Umm Al Quwain",
    "Ras Al Khaimah",
    "Fujairah"
  ],
  "Saudi Arabia": [
    "Riyadh",
    "Makkah",
    "Madinah",
    "Eastern Province",
    "Al-Qassim",
    "Asir",
    "Tabuk",
    "Hail",
    "Northern Borders",
    "Jazan",
    "Najran",
    "Al-Bahah",
    "Al-Jawf"
  ],
  "Qatar": [
    "Doha",
    "Al Rayyan",
    "Al Wakrah",
    "Al Khor",
    "Al Shamal",
    "Al Daayen",
    "Umm Salal",
    "Al Shahaniya"
  ],
  "Brazil": [
    "Acre",
    "Alagoas",
    "Amapá",
    "Amazonas",
    "Bahia",
    "Ceará",
    "Distrito Federal",
    "Espírito Santo",
    "Goiás",
    "Maranhão",
    "Mato Grosso",
    "Mato Grosso do Sul",
    "Minas Gerais",
    "Pará",
    "Paraíba",
    "Paraná",
    "Pernambuco",
    "Piauí",
    "Rio de Janeiro",
    "Rio Grande do Norte",
    "Rio Grande do Sul",
    "Rondônia",
    "Roraima",
    "Santa Catarina",
    "São Paulo",
    "Sergipe",
    "Tocantins"
  ],
  "Russia": [
    "Moscow",
    "Saint Petersburg",
    "Moscow Oblast",
    "Krasnodar Krai",
    "Sverdlovsk Oblast",
    "Republic of Tatarstan",
    "Rostov Oblast",
    "Bashkortostan",
    "Novosibirsk Oblast",
    "Chelyabinsk Oblast",
    "Samara Oblast",
    "Nizhny Novgorod Oblast",
    "Primorsky Krai",
    "Khabarovsk Krai"
  ],
  "South Africa": [
    "Gauteng",
    "Western Cape",
    "KwaZulu-Natal",
    "Eastern Cape",
    "Free State",
    "Limpopo",
    "Mpumalanga",
    "North West",
    "Northern Cape"
  ]
};
const StateSelect = ({
  country = "",
  value = "",
  onChange,
  filled = false,
  placeholder = "Select State / Province...",
  required = false
}) => {
  const [open, setOpen] = reactExports.useState(false);
  const [query, setQuery] = reactExports.useState("");
  const [highlighted, setHighlighted] = reactExports.useState(0);
  const inputRef = reactExports.useRef(null);
  const listRef = reactExports.useRef(null);
  const containerRef = reactExports.useRef(null);
  const states = reactExports.useMemo(() => {
    if (!country) return [];
    const raw = STATES_BY_COUNTRY[country] || [];
    return [...raw].sort((a, b) => a.localeCompare(b));
  }, [country]);
  const filtered = reactExports.useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return states;
    return states.filter((s) => s.toLowerCase().includes(q));
  }, [states, query]);
  reactExports.useEffect(() => {
    const handler = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setOpen(false);
        setQuery("");
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);
  reactExports.useEffect(() => {
    var _a;
    if (open) {
      (_a = inputRef.current) == null ? void 0 : _a.focus();
      setHighlighted(0);
    }
  }, [open]);
  reactExports.useEffect(() => {
    if (listRef.current) {
      const el = listRef.current.children[highlighted];
      el == null ? void 0 : el.scrollIntoView({ block: "nearest" });
    }
  }, [highlighted]);
  const handleSelect = reactExports.useCallback((stateName) => {
    onChange(stateName);
    setOpen(false);
    setQuery("");
  }, [onChange]);
  const handleKeyDown = (e) => {
    if (!open) {
      if (e.key === "Enter" || e.key === " " || e.key === "ArrowDown") {
        setOpen(true);
      }
      return;
    }
    const maxIndex = filtered.length + (query.trim() && !filtered.includes(query.trim()) ? 1 : 0) - 1;
    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        setHighlighted((h) => Math.min(h + 1, maxIndex));
        break;
      case "ArrowUp":
        e.preventDefault();
        setHighlighted((h) => Math.max(h - 1, 0));
        break;
      case "Enter":
        e.preventDefault();
        if (highlighted < filtered.length) {
          if (filtered[highlighted]) handleSelect(filtered[highlighted]);
        } else if (query.trim()) {
          handleSelect(query.trim());
        }
        break;
      case "Escape":
        setOpen(false);
        setQuery("");
        break;
    }
  };
  const borderClass = filled ? "border-emerald-300 dark:border-emerald-700/50 bg-emerald-50/50 dark:bg-emerald-950/10" : "border-slate-200 dark:border-white/8 bg-white dark:bg-[#141E35]";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { ref: containerRef, className: "relative", onKeyDown: handleKeyDown, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        type: "button",
        disabled: !country,
        onClick: () => setOpen((o) => !o),
        "aria-haspopup": "listbox",
        "aria-expanded": open,
        className: `w-full flex items-center gap-2 border rounded-xl px-4 py-3 text-sm font-medium outline-none transition-all ${!country ? "opacity-50 cursor-not-allowed bg-slate-100 dark:bg-slate-900 border-slate-200 dark:border-white/5" : "focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"} ${borderClass} text-left`,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Landmark, { size: 15, className: `shrink-0 ${!country ? "text-slate-300 dark:text-zinc-700" : "text-slate-400"}` }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `flex-1 truncate ${value ? "text-slate-800 dark:text-white font-semibold" : "text-slate-400"} flex items-center gap-1.5`, children: [
            !country ? "Select a country first..." : value || placeholder,
            value && country && /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { size: 14, className: "text-emerald-500 shrink-0" })
          ] }),
          value && country && /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: (e) => {
                e.stopPropagation();
                onChange("");
              },
              className: "p-0.5 hover:bg-slate-200 dark:hover:bg-zinc-700 rounded-full shrink-0 transition-colors",
              "aria-label": "Clear selection",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 12, className: "text-slate-400" })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            ChevronDown,
            {
              size: 15,
              className: `text-slate-400 shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`
            }
          )
        ]
      }
    ),
    open && country && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "absolute z-[9999] left-0 right-0 mt-1.5 bg-white dark:bg-[#1A2540] border border-slate-200 dark:border-white/10 rounded-2xl shadow-2xl overflow-hidden",
        style: { maxHeight: "320px" },
        role: "listbox",
        "aria-label": "State selection",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 px-3 py-2.5 border-b border-slate-100 dark:border-white/5 sticky top-0 bg-white dark:bg-[#1A2540] z-10", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { size: 14, className: "text-slate-400 shrink-0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                ref: inputRef,
                type: "text",
                value: query,
                onChange: (e) => {
                  setQuery(e.target.value);
                  setHighlighted(0);
                },
                placeholder: "Type to search state...",
                className: "flex-1 text-xs font-medium text-slate-800 dark:text-white bg-transparent border-none outline-none placeholder:text-slate-400",
                "aria-label": "Search states"
              }
            ),
            query && /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: () => {
                  setQuery("");
                  setHighlighted(0);
                },
                className: "p-0.5 hover:bg-slate-100 dark:hover:bg-zinc-700 rounded-full",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 11, className: "text-slate-400" })
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              ref: listRef,
              className: "overflow-y-auto custom-scrollbar",
              style: { maxHeight: "230px" },
              children: [
                filtered.map((stateName, idx) => {
                  const isSelected = stateName === value;
                  const isHovered = idx === highlighted;
                  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "button",
                    {
                      type: "button",
                      role: "option",
                      "aria-selected": isSelected,
                      onClick: () => handleSelect(stateName),
                      onMouseEnter: () => setHighlighted(idx),
                      className: `w-full flex items-center justify-between px-4 py-2.5 text-left transition-colors ${isSelected ? "bg-indigo-50/80 dark:bg-indigo-950/40 text-indigo-700 dark:text-indigo-300 font-bold" : isHovered ? "bg-slate-50 dark:bg-white/5 text-slate-800 dark:text-white" : "text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-white/5"}`,
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold flex-1 truncate pr-2", children: stateName }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 shrink-0", children: [
                          isSelected && /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { size: 14, className: "text-indigo-600 dark:text-indigo-400" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `w-4 h-4 rounded-full border flex items-center justify-center transition-all ${isSelected ? "border-indigo-600 dark:border-indigo-400 bg-indigo-600 dark:bg-indigo-400" : "border-slate-300 dark:border-zinc-600 bg-transparent"}`, children: isSelected && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-1.5 h-1.5 rounded-full bg-white" }) })
                        ] })
                      ]
                    },
                    stateName
                  );
                }),
                query.trim() && !states.some((s) => s.toLowerCase() === query.trim().toLowerCase()) && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "button",
                  {
                    type: "button",
                    role: "option",
                    onClick: () => handleSelect(query.trim()),
                    onMouseEnter: () => setHighlighted(filtered.length),
                    className: `w-full flex items-center justify-between px-4 py-2.5 text-left transition-colors ${highlighted === filtered.length ? "bg-indigo-50/80 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 font-bold" : "text-indigo-600 dark:text-indigo-400 hover:bg-slate-50 dark:hover:bg-white/5"}`,
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs font-bold truncate flex-1 pr-2", children: [
                        'Use Custom: "',
                        query.trim(),
                        '"'
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 shrink-0", children: [
                        value === query.trim() && /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { size: 14, className: "text-indigo-600 dark:text-indigo-400" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `w-4 h-4 rounded-full border flex items-center justify-center transition-all ${value === query.trim() ? "border-indigo-600 dark:border-indigo-400 bg-indigo-600 dark:bg-indigo-400" : "border-slate-300 dark:border-zinc-600 bg-transparent"}`, children: value === query.trim() && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-1.5 h-1.5 rounded-full bg-white" }) })
                      ] })
                    ]
                  }
                ),
                filtered.length === 0 && !query.trim() && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center justify-center py-8 text-center", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Landmark, { size: 24, className: "text-slate-300 dark:text-zinc-700 mb-2" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-bold text-slate-400", children: "No states found. Type custom state above." })
                ] })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-4 py-2 border-t border-slate-100 dark:border-white/5 bg-slate-50/80 dark:bg-black/10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[10px] text-slate-400 font-medium", children: [
            filtered.length,
            " states/provinces loaded for ",
            country
          ] }) })
        ]
      }
    )
  ] });
};
const DISTRICTS_BY_STATE = {
  // ==================== INDIA ====================
  "Andhra Pradesh": [
    "Alluri Sitharama Raju",
    "Anakapalli",
    "Ananthapuramu",
    "Annamayya",
    "Bapatla",
    "Chittoor",
    "East Godavari",
    "Eluru",
    "Guntur",
    "Kakinada",
    "Konaseema",
    "Krishna",
    "Kurnool",
    "Nandyal",
    "NTR",
    "Palnadu",
    "Parvathipuram Manyam",
    "Prakasam",
    "Srikakulam",
    "Sri Potti Sriramulu Nellore",
    "Sri Sathya Sai",
    "Tirupati",
    "Visakhapatnam",
    "Vizianagaram",
    "West Godavari",
    "YSR Kadapa"
  ],
  "Arunachal Pradesh": [
    "Anjaw",
    "Changlang",
    "Dibang Valley",
    "East Kameng",
    "East Siang",
    "Itanagar Capital Complex",
    "Kamle",
    "Kra Daadi",
    "Kurung Kumey",
    "Leparada",
    "Lohit",
    "Longding",
    "Lower Dibang Valley",
    "Lower Siang",
    "Lower Subansiri",
    "Namsai",
    "Pakke Kessang",
    "Papum Pare",
    "Shi Yomi",
    "Tawang",
    "Tirap",
    "Upper Siang",
    "Upper Subansiri",
    "West Kameng",
    "West Siang"
  ],
  "Assam": [
    "Bajali",
    "Baksa",
    "Barpeta",
    "Biswanath",
    "Bongaigaon",
    "Cachar",
    "Charaideo",
    "Chirang",
    "Darrang",
    "Dhemaji",
    "Dhubri",
    "Dibrugarh",
    "Dima Hasao",
    "Goalpara",
    "Golaghat",
    "Hailakandi",
    "Jorhat",
    "Kamrup",
    "Kamrup Metropolitan",
    "Karbi Anglong",
    "Karimganj",
    "Kokrajhar",
    "Lakhimpur",
    "Majuli",
    "Morigaon",
    "Nagaon",
    "Nalbari",
    "Sivasagar",
    "Sonitpur",
    "South Salmara-Mankachar",
    "Tinsukia",
    "Udalguri",
    "West Karbi Anglong"
  ],
  "Bihar": [
    "Araria",
    "Arwal",
    "Aurangabad",
    "Banka",
    "Begusarai",
    "Bhagalpur",
    "Bhojpur",
    "Buxar",
    "Darbhanga",
    "East Champaran",
    "Gaya",
    "Gopalganj",
    "Jamui",
    "Jehanabad",
    "Kaimur",
    "Katihar",
    "Khagaria",
    "Kishanganj",
    "Lakhisarai",
    "Madhepura",
    "Madhubani",
    "Munger",
    "Muzaffarpur",
    "Nalanda",
    "Nawada",
    "Patna",
    "Purnia",
    "Rohtas",
    "Saharsa",
    "Samastipur",
    "Saran",
    "Sheikhpura",
    "Sheohar",
    "Sitamarhi",
    "Siwan",
    "Supaul",
    "Vaishali",
    "West Champaran"
  ],
  "Chhattisgarh": [
    "Balod",
    "Baloda Bazar",
    "Balrampur",
    "Bastar",
    "Bemetara",
    "Bijapur",
    "Bilaspur",
    "Dantewada",
    "Dhamtari",
    "Durg",
    "Gariaband",
    "Gaurela-Pendra-Marwahi",
    "Janjgir-Champa",
    "Jashpur",
    "Kabirdham",
    "Kanker",
    "Khairagarh-Chhuikhadan-Gandai",
    "Kondagaon",
    "Korba",
    "Koriya",
    "Mahasamund",
    "Manendragarh-Chirmiri-Bharatpur",
    "Mohla-Manpur-Ambagarh Chowki",
    "Mungeli",
    "Narayanpur",
    "Raigarh",
    "Raipur",
    "Rajnandgaon",
    "Sakti",
    "Sarangarh-Bilaigarh",
    "Sukma",
    "Surajpur",
    "Surguja"
  ],
  "Goa": [
    "North Goa",
    "South Goa"
  ],
  "Gujarat": [
    "Ahmedabad",
    "Amreli",
    "Anand",
    "Aravalli",
    "Banaskantha",
    "Bharuch",
    "Bhavnagar",
    "Botad",
    "Chhota Udepur",
    "Dahod",
    "Dang",
    "Devbhumi Dwarka",
    "Gandhinagar",
    "Gir Somnath",
    "Jamnagar",
    "Junagadh",
    "Kheda",
    "Kutch",
    "Mahisagar",
    "Mehsana",
    "Morbi",
    "Narmada",
    "Navsari",
    "Panchmahal",
    "Patan",
    "Porbandar",
    "Rajkot",
    "Sabarkantha",
    "Surat",
    "Surendranagar",
    "Tapi",
    "Vadodara",
    "Valsad"
  ],
  "Haryana": [
    "Ambala",
    "Bhiwani",
    "Charkhi Dadri",
    "Faridabad",
    "Fatehabad",
    "Gurugram",
    "Hisar",
    "Jhajjar",
    "Jind",
    "Kaithal",
    "Karnal",
    "Kurukshetra",
    "Mahendragarh",
    "Nuh",
    "Palwal",
    "Panchkula",
    "Panipat",
    "Rewari",
    "Rohtak",
    "Sirsa",
    "Sonipat",
    "Yamunanagar"
  ],
  "Himachal Pradesh": [
    "Bilaspur",
    "Chamba",
    "Hamirpur",
    "Kangra",
    "Kinnaur",
    "Kullu",
    "Lahaul and Spiti",
    "Mandi",
    "Shimla",
    "Sirmaur",
    "Solan",
    "Una"
  ],
  "Jharkhand": [
    "Bokaro",
    "Chatra",
    "Deoghar",
    "Dhanbad",
    "Dumka",
    "East Singhbhum",
    "Garhwa",
    "Giridih",
    "Godda",
    "Gumla",
    "Hazaribagh",
    "Jamtara",
    "Khunti",
    "Koderma",
    "Latehar",
    "Lohardaga",
    "Pakur",
    "Palamu",
    "Ramgarh",
    "Ranchi",
    "Sahibganj",
    "Seraikela Kharsawan",
    "Simdega",
    "West Singhbhum"
  ],
  "Karnataka": [
    "Bagalkot",
    "Ballari",
    "Belagavi",
    "Bengaluru Rural",
    "Bengaluru Urban",
    "Bidar",
    "Chamarajanagar",
    "Chikkaballapur",
    "Chikkamagaluru",
    "Chitradurga",
    "Dakshina Kannada",
    "Davanagere",
    "Dharwad",
    "Gadag",
    "Hassan",
    "Haveri",
    "Kalaburagi",
    "Kodagu",
    "Kolar",
    "Koppal",
    "Mandya",
    "Mysore",
    "Raichur",
    "Ramanagara",
    "Shivamogga",
    "Tumakuru",
    "Udupi",
    "Uttara Kannada",
    "Vijayapura",
    "Vijayanagara",
    "Yadgir"
  ],
  "Kerala": [
    "Alappuzha",
    "Ernakulam",
    "Idukki",
    "Kannur",
    "Kasaragod",
    "Kollam",
    "Kottayam",
    "Kozhikode",
    "Malappuram",
    "Palakkad",
    "Pathanamthitta",
    "Thiruvananthapuram",
    "Thrissur",
    "Wayanad"
  ],
  "Madhya Pradesh": [
    "Agar Malwa",
    "Alirajpur",
    "Anuppur",
    "Ashoknagar",
    "Balaghat",
    "Barwani",
    "Betul",
    "Bhind",
    "Bhopal",
    "Burhanpur",
    "Chhatarpur",
    "Chhindwara",
    "Damoh",
    "Datia",
    "Dewas",
    "Dhar",
    "Dindori",
    "Guna",
    "Gwalior",
    "Harda",
    "Indore",
    "Jabalpur",
    "Jhabua",
    "Katni",
    "Khandwa",
    "Khargone",
    "Mahidpur",
    "Maihar",
    "Mandla",
    "Mandsaur",
    "Mauganj",
    "Morena",
    "Narmadapuram",
    "Narsinghpur",
    "Neemuch",
    "Niwari",
    "Pandhurna",
    "Panna",
    "Raisen",
    "Rajgarh",
    "Ratlam",
    "Rewa",
    "Sagar",
    "Satna",
    "Sehore",
    "Seoni",
    "Shahdol",
    "Shajapur",
    "Sheopur",
    "Shivpuri",
    "Sidhi",
    "Singrauli",
    "Tikamgarh",
    "Ujjain",
    "Umaria",
    "Vidisha"
  ],
  "Maharashtra": [
    "Ahmednagar",
    "Akola",
    "Amravati",
    "Aurangabad",
    "Bhandara",
    "Buldhana",
    "Chandrapur",
    "Dhule",
    "Gadchiroli",
    "Gondia",
    "Hingoli",
    "Jalgaon",
    "Jalna",
    "Kolhapur",
    "Latur",
    "Mumbai City",
    "Mumbai Suburban",
    "Nagpur",
    "Nanded",
    "Nandurbar",
    "Nashik",
    "Osmanabad",
    "Palghar",
    "Parbhani",
    "Pune",
    "Raigad",
    "Ratnagiri",
    "Sangli",
    "Satara",
    "Sindhudurg",
    "Solapur",
    "Thane",
    "Wardha",
    "Washim",
    "Yavatmal"
  ],
  "Manipur": [
    "Bishnupur",
    "Chandel",
    "Churachandpur",
    "Imphal East",
    "Imphal West",
    "Jiribam",
    "Kakching",
    "Kamjong",
    "Kangpokpi",
    "Noney",
    "Pherzawl",
    "Senapati",
    "Tamenglong",
    "Tengnoupal",
    "Thoubal",
    "Ukhrul"
  ],
  "Meghalaya": [
    "East Garo Hills",
    "East Jaintia Hills",
    "East Khasi Hills",
    "Eastern West Khasi Hills",
    "North Garo Hills",
    "Ri Bhoi",
    "South Garo Hills",
    "South West Garo Hills",
    "South West Khasi Hills",
    "West Garo Hills",
    "West Jaintia Hills",
    "West Khasi Hills"
  ],
  "Mizoram": [
    "Aizawl",
    "Champhai",
    "Hnahthial",
    "Khawzawl",
    "Kolasib",
    "Lawngtlai",
    "Lunglei",
    "Mamit",
    "Saiha",
    "Saitual",
    "Serchhip"
  ],
  "Nagaland": [
    "Chumoukedima",
    "Dimapur",
    "Kiphire",
    "Kohima",
    "Longleng",
    "Mokokchung",
    "Mon",
    "Niuland",
    "Noklak",
    "Peren",
    "Phek",
    "Shamator",
    "Tseminyu",
    "Tuensang",
    "Wokha",
    "Zunheboto"
  ],
  "Odisha": [
    "Angul",
    "Balangir",
    "Balasore",
    "Bargarh",
    "Bhadrak",
    "Boudh",
    "Cuttack",
    "Deogarh",
    "Dhenkanal",
    "Gajapati",
    "Ganjam",
    "Jagatsinghpur",
    "Jajpur",
    "Jharsuguda",
    "Kalahandi",
    "Kandhamal",
    "Kendrapara",
    "Keonjhar",
    "Khordha",
    "Koraput",
    "Malkangiri",
    "Mayurbhanj",
    "Nabarangpur",
    "Nayagarh",
    "Nuapada",
    "Puri",
    "Rayagada",
    "Sambalpur",
    "Subarnapur",
    "Sundargarh"
  ],
  "Punjab": [
    "Amritsar",
    "Barnala",
    "Bathinda",
    "Faridkot",
    "Fatehgarh Sahib",
    "Fazilka",
    "Ferozepur",
    "Gurdaspur",
    "Hoshiarpur",
    "Jalandhar",
    "Kapurthala",
    "Ludhiana",
    "Malerkotla",
    "Mansa",
    "Moga",
    "Muktsar",
    "Pathankot",
    "Patiala",
    "Rupnagar",
    "Sahibzada Ajit Singh Nagar (Mohali)",
    "Sangrur",
    "Shahid Bhagat Singh Nagar",
    "Tarn Taran"
  ],
  "Rajasthan": [
    "Ajmer",
    "Alwar",
    "Anupgarh",
    "Balotra",
    "Banswara",
    "Baran",
    "Barmer",
    "Beawar",
    "Bharatpur",
    "Bhilwara",
    "Bikaner",
    "Bundi",
    "Chittorgarh",
    "Churu",
    "Dausa",
    "Deeg",
    "Dholpur",
    "Didwana-Kuchaman",
    "Dudu",
    "Dungarpur",
    "Gangapur City",
    "Hanumangarh",
    "Jaipur",
    "Jaipur Rural",
    "Jaisalmer",
    "Jalore",
    "Jhalawar",
    "Jhunjhunu",
    "Jodhpur",
    "Jodhpur Rural",
    "Karauli",
    "Kekri",
    "Khairthal-Tijara",
    "Kota",
    "Kotputli-Behror",
    "Nagaur",
    "Neem Ka Thana",
    "Pali",
    "Phalodi",
    "Pratapgarh",
    "Rajsamand",
    "Salumbar",
    "Sanchore",
    "Sawai Madhopur",
    "Shahpura",
    "Sikar",
    "Sirohi",
    "Sri Ganganagar",
    "Tonk",
    "Udaipur"
  ],
  "Sikkim": [
    "Gangtok",
    "Geyzing",
    "Mangan",
    "Namchi",
    "Pakyong",
    "Soreng"
  ],
  "Tamil Nadu": [
    "Ariyalur",
    "Chengalpattu",
    "Chennai",
    "Coimbatore",
    "Cuddalore",
    "Dharmapuri",
    "Dindigul",
    "Erode",
    "Kallakurichi",
    "Kanchipuram",
    "Kanyakumari",
    "Karur",
    "Krishnagiri",
    "Madurai",
    "Mayiladuthurai",
    "Nagapattinam",
    "Namakkal",
    "Nilgiris",
    "Perambalur",
    "Pudukkottai",
    "Ramanathapuram",
    "Ranipet",
    "Salem",
    "Sivaganga",
    "Tenkasi",
    "Thanjavur",
    "Theni",
    "Thoothukudi",
    "Tiruchirappalli",
    "Tirunelveli",
    "Tirupathur",
    "Tiruppur",
    "Tiruvallur",
    "Tiruvannamalai",
    "Tiruvarur",
    "Vellore",
    "Viluppuram",
    "Virudhunagar"
  ],
  "Telangana": [
    "Adilabad",
    "Bhadradri Kothagudem",
    "Hanamkonda",
    "Hyderabad",
    "Jagtial",
    "Jangaon",
    "Jayashankar Bhupalpally",
    "Jogulamba Gadwal",
    "Kamareddy",
    "Karimnagar",
    "Khammam",
    "Kumuram Bheem Asifabad",
    "Mahabubabad",
    "Mahabubnagar",
    "Mancherial",
    "Medak",
    "Medchal-Malkajgiri",
    "Mulugu",
    "Nagarkurnool",
    "Nalgonda",
    "Narayanpet",
    "Nirmal",
    "Nizamabad",
    "Peddapalli",
    "Rajanna Sircilla",
    "Ranga Reddy",
    "Sangareddy",
    "Siddipet",
    "Suryapet",
    "Vikarabad",
    "Wanaparthy",
    "Warangal",
    "Yadadri Bhuvanagiri"
  ],
  "Tripura": [
    "Dhalai",
    "Gomati",
    "Khowai",
    "North Tripura",
    "Sepahijala",
    "South Tripura",
    "Unakoti",
    "West Tripura"
  ],
  "Uttar Pradesh": [
    "Agra",
    "Aligarh",
    "Ambedkar Nagar",
    "Amethi",
    "Amroha",
    "Auraiya",
    "Ayodhya",
    "Azamgarh",
    "Baghpat",
    "Bahraich",
    "Ballia",
    "Balrampur",
    "Banda",
    "Barabanki",
    "Bareilly",
    "Basti",
    "Bhadohi",
    "Bijnor",
    "Budaun",
    "Bulandshahr",
    "Chandauli",
    "Chitrakoot",
    "Deoria",
    "Etah",
    "Etawah",
    "Farrukhabad",
    "Fatehpur",
    "Firozabad",
    "Gautam Buddha Nagar",
    "Ghaziabad",
    "Ghazipur",
    "Gonda",
    "Gorakhpur",
    "Hamirpur",
    "Hapur",
    "Hardoi",
    "Hathras",
    "Jalaun",
    "Jaunpur",
    "Jhansi",
    "Kannauj",
    "Kanpur Dehat",
    "Kanpur Nagar",
    "Kasganj",
    "Kaushambi",
    "Kheri",
    "Kushinagar",
    "Lalitpur",
    "Lucknow",
    "Maharajganj",
    "Mahoba",
    "Mainpuri",
    "Mathura",
    "Mau",
    "Meerut",
    "Mirzapur",
    "Moradabad",
    "Muzaffarnagar",
    "Pilibhit",
    "Pratapgarh",
    "Prayagraj",
    "Raebareli",
    "Rampur",
    "Saharanpur",
    "Sambhal",
    "Sant Kabir Nagar",
    "Shahjahanpur",
    "Shamli",
    "Shravasti",
    "Siddharthnagar",
    "Sitapur",
    "Sonbhadra",
    "Sultanpur",
    "Unnao",
    "Varanasi"
  ],
  "Uttarakhand": [
    "Almora",
    "Bageshwar",
    "Chamoli",
    "Champawat",
    "Dehradun",
    "Haridwar",
    "Nainital",
    "Pauri Garhwal",
    "Pithoragarh",
    "Rudraprayag",
    "Tehri Garhwal",
    "Udham Singh Nagar",
    "Uttarkashi"
  ],
  "West Bengal": [
    "Alipurduar",
    "Bankura",
    "Birbhum",
    "Cooch Behar",
    "Dakshin Dinajpur",
    "Darjeeling",
    "Hooghly",
    "Howrah",
    "Jalpaiguri",
    "Jhargram",
    "Kalimpong",
    "Kolkata",
    "Malda",
    "Murshidabad",
    "Nadia",
    "North 24 Parganas",
    "Paschim Bardhaman",
    "Paschim Medinipur",
    "Purba Bardhaman",
    "Purba Medinipur",
    "Purulia",
    "South 24 Parganas",
    "Uttar Dinajpur"
  ],
  // --- Union Territories ---
  "Andaman and Nicobar Islands": [
    "Nicobar",
    "North and Middle Andaman",
    "South Andaman"
  ],
  "Chandigarh": [
    "Chandigarh"
  ],
  "Dadra and Nagar Haveli and Daman and Diu": [
    "Dadra and Nagar Haveli",
    "Daman",
    "Diu"
  ],
  "Delhi": [
    "Central Delhi",
    "East Delhi",
    "New Delhi",
    "North Delhi",
    "North East Delhi",
    "North West Delhi",
    "Shahdara",
    "South Delhi",
    "South East Delhi",
    "South West Delhi",
    "West Delhi"
  ],
  "Jammu and Kashmir": [
    "Anantnag",
    "Bandipora",
    "Baramulla",
    "Budgam",
    "Doda",
    "Ganderbal",
    "Jammu",
    "Kathua",
    "Kishtwar",
    "Kulgam",
    "Kupwara",
    "Poonch",
    "Pulwama",
    "Rajouri",
    "Ramban",
    "Reasi",
    "Samba",
    "Shopian",
    "Srinagar",
    "Udhampur"
  ],
  "Ladakh": [
    "Kargil",
    "Leh"
  ],
  "Lakshadweep": [
    "Lakshadweep"
  ],
  "Puducherry": [
    "Karaikal",
    "Mahe",
    "Puducherry",
    "Yanam"
  ],
  // ==================== GLOBAL JURISDICTIONS ====================
  // --- United States ---
  "California": [
    "Alameda County",
    "Alpine County",
    "Amador County",
    "Butte County",
    "Calaveras County",
    "Colusa County",
    "Contra Costa County",
    "Del Norte County",
    "El Dorado County",
    "Fresno County",
    "Glenn County",
    "Humboldt County",
    "Imperial County",
    "Inyo County",
    "Kern County",
    "Kings County",
    "Lake County",
    "Lassen County",
    "Los Angeles County",
    "Madera County",
    "Marin County",
    "Mariposa County",
    "Mendocino County",
    "Merced County",
    "Modoc County",
    "Mono County",
    "Monterey County",
    "Napa County",
    "Nevada County",
    "Orange County",
    "Placer County",
    "Plumas County",
    "Riverside County",
    "Sacramento County",
    "San Benito County",
    "San Bernardino County",
    "San Diego County",
    "San Francisco County",
    "San Joaquin County",
    "San Luis Obispo County",
    "San Mateo County",
    "Santa Barbara County",
    "Santa Clara County",
    "Santa Cruz County",
    "Shasta County",
    "Sierra County",
    "Siskiyou County",
    "Solano County",
    "Sonoma County",
    "Stanislaus County",
    "Sutter County",
    "Tehama County",
    "Trinity County",
    "Tulare County",
    "Tuolumne County",
    "Ventura County",
    "Yolo County",
    "Yuba County"
  ],
  "New York": [
    "Albany County",
    "Allegany County",
    "Bronx County",
    "Broome County",
    "Cattaraugus County",
    "Cayuga County",
    "Chautauqua County",
    "Chemung County",
    "Chenango County",
    "Clinton County",
    "Columbia County",
    "Cortland County",
    "Delaware County",
    "Dutchess County",
    "Erie County",
    "Essex County",
    "Franklin County",
    "Fulton County",
    "Genesee County",
    "Greene County",
    "Hamilton County",
    "Herkimer County",
    "Jefferson County",
    "Kings County (Brooklyn)",
    "Lewis County",
    "Livingston County",
    "Madison County",
    "Monroe County",
    "Montgomery County",
    "Nassau County",
    "New York County (Manhattan)",
    "Niagara County",
    "Oneida County",
    "Onondaga County",
    "Ontario County",
    "Orange County",
    "Orleans County",
    "Oswego County",
    "Otsego County",
    "Putnam County",
    "Queens County",
    "Rensselaer County",
    "Richmond County (Staten Island)",
    "Rockland County",
    "Saint Lawrence County",
    "Saratoga County",
    "Schenectady County",
    "Schoharie County",
    "Schuyler County",
    "Seneca County",
    "Steuben County",
    "Suffolk County",
    "Sullivan County",
    "Tioga County",
    "Tompkins County",
    "Ulster County",
    "Warren County",
    "Washington County",
    "Wayne County",
    "Westchester County",
    "Wyoming County",
    "Yates County"
  ],
  "Texas": [
    "Harris County (Houston)",
    "Dallas County",
    "Tarrant County (Fort Worth)",
    "Bexar County (San Antonio)",
    "Travis County (Austin)",
    "El Paso County",
    "Collin County",
    "Denton County",
    "Hidalgo County",
    "Fort Bend County"
  ],
  "Florida": [
    "Miami-Dade County",
    "Broward County",
    "Palm Beach County",
    "Hillsborough County (Tampa)",
    "Orange County (Orlando)",
    "Pinellas County",
    "Duval County (Jacksonville)",
    "Lee County",
    "Polk County",
    "Brevard County"
  ],
  "Illinois": [
    "Cook County (Chicago)",
    "DuPage County",
    "Lake County",
    "Will County",
    "Kane County",
    "McHenry County",
    "Winnebago County"
  ],
  "Washington": [
    "King County (Seattle)",
    "Pierce County (Tacoma)",
    "Snohomish County",
    "Spokane County",
    "Clark County",
    "Thurston County"
  ],
  // --- United Kingdom ---
  "England": [
    "Greater London",
    "West Midlands (Birmingham)",
    "Greater Manchester",
    "West Yorkshire (Leeds)",
    "Merseyside (Liverpool)",
    "South Yorkshire (Sheffield)",
    "Tyne and Wear (Newcastle)"
  ],
  "Scotland": [
    "City of Edinburgh",
    "Glasgow City",
    "Aberdeen City",
    "Dundee City",
    "Fife",
    "Highland"
  ],
  "Wales": [
    "Cardiff",
    "Swansea",
    "Newport",
    "Wrexham",
    "Gwynedd",
    "Pembrokeshire"
  ]
};
const POLICE_STATIONS_BY_DISTRICT = {
  // --- Madhya Pradesh ---
  "Bhopal": [
    "TT Nagar Police Station",
    "Habibganj Police Station",
    "MP Nagar Police Station",
    "Kohefiza Police Station",
    "Ashoka Garden Police Station",
    "Aishbagh Police Station",
    "Shahjahanabad Police Station",
    "Govindpura Police Station",
    "Piplani Police Station",
    "Bagsewania Police Station",
    "Misrod Police Station",
    "Kolar Police Station",
    "Gandhi Nagar Police Station",
    "Kamla Nagar Police Station",
    "Jahangirabad Police Station",
    "Bilkhiriya Police Station",
    "Ayodhya Nagar Police Station",
    "Nishatpura Police Station",
    "Hanumanganj Police Station",
    "Katara Hills Police Station",
    "Chola Mandir Police Station"
  ],
  "Indore": [
    "Vijay Nagar Police Station",
    "Palasia Police Station",
    "Annapurna Police Station",
    "MG Road Police Station",
    "Tukoganj Police Station",
    "Bhanwarkuan Police Station",
    "Khajrana Police Station"
  ],
  "Jabalpur": [
    "Civil Lines Police Station",
    "Gorakhpur Police Station",
    "Madan Mahal Police Station",
    "Lordganj Police Station",
    "Omti Police Station",
    "Kotwali Police Station",
    "Ghamapur Police Station",
    "Hanumantal Police Station",
    "Adhartal Police Station",
    "Madhotal Police Station",
    "Ranjhi Police Station",
    "Vijay Nagar Police Station",
    "Tilwara Police Station",
    "Barela Police Station",
    "Sihora Police Station",
    "Patan Police Station",
    "Bhedaghat Police Station",
    "Kundam Police Station",
    "Belkheda Police Station",
    "Bargi Police Station",
    "Panagar Police Station"
  ],
  "Gwalior": [
    "Jhansi Road Police Station",
    "Gwalior Fort Police Station",
    "Padav Police Station",
    "Hazira Police Station"
  ],
  // --- Delhi ---
  "New Delhi": [
    "Connaught Place Police Station",
    "Parliament Street Police Station",
    "Chanakyapuri Police Station",
    "Mandir Marg Police Station",
    "Tughlak Road Police Station",
    "Barakhamba Road Police Station"
  ],
  "Central Delhi": [
    "Daryaganj Police Station",
    "Pahar Ganj Police Station",
    "Karol Bagh Police Station",
    "IP Estate Police Station"
  ],
  "South Delhi": [
    "Saket Police Station",
    "Hauz Khas Police Station",
    "Malviya Nagar Police Station",
    "Greater Kailash Police Station",
    "Neb Sarai Police Station",
    "Mehrauli Police Station"
  ],
  "North Delhi": [
    "Civil Lines Police Station",
    "Kotwali Police Station",
    "Kashmere Gate Police Station",
    "Maurice Nagar Police Station"
  ],
  // --- Maharashtra ---
  "Mumbai City": [
    "Colaba Police Station",
    "Marine Drive Police Station",
    "Bandra Police Station",
    "Andheri Police Station",
    "Juhu Police Station",
    "Dharavi Police Station",
    "Cuffe Parade Police Station"
  ],
  "Pune": [
    "Shivajinagar Police Station",
    "Koregaon Park Police Station",
    "Kothrud Police Station",
    "Deccan Gymkhana Police Station",
    "Swargate Police Station"
  ],
  // --- Karnataka ---
  "Bengaluru Urban": [
    "Koramangala Police Station",
    "Indiranagar Police Station",
    "Whitefield Police Station",
    "Jayanagar Police Station",
    "Cubbon Park Police Station",
    "Halasuru Police Station",
    "Sadashivanagar Police Station"
  ],
  // --- Uttar Pradesh ---
  "Gautem Buddha Nagar (Noida)": [
    "Noida Sector 20 Police Station",
    "Noida Sector 58 Police Station",
    "Noida Sector 39 Police Station",
    "Noida Phase 2 Police Station"
  ],
  // --- California ---
  "Los Angeles County": [
    "LAPD Central Community Police Station",
    "LAPD Hollywood Community Police Station",
    "LAPD 77th Street Community Police Station",
    "LA County Sheriff Department - West Hollywood"
  ],
  "San Francisco County": [
    "SFPD Central Station",
    "SFPD Mission Station",
    "SFPD Tenderloin Station",
    "SFPD Richmond Station"
  ],
  // --- New York ---
  "New York County (Manhattan)": [
    "NYPD 1st Precinct (Tribeca)",
    "NYPD 6th Precinct (Greenwich Village)",
    "NYPD 19th Precinct (Upper East Side)",
    "NYPD Midtown South Precinct"
  ]
};
const DistrictSelect = ({
  state = "",
  value = "",
  onChange,
  filled = false,
  placeholder = "Search and select district...",
  required = false
}) => {
  const [open, setOpen] = reactExports.useState(false);
  const [query, setQuery] = reactExports.useState("");
  const [highlighted, setHighlighted] = reactExports.useState(0);
  const inputRef = reactExports.useRef(null);
  const listRef = reactExports.useRef(null);
  const containerRef = reactExports.useRef(null);
  const districts = reactExports.useMemo(() => {
    if (!state) return [];
    const raw = DISTRICTS_BY_STATE[state] || [];
    return [...raw].sort((a, b) => a.localeCompare(b));
  }, [state]);
  const filtered = reactExports.useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return districts;
    return districts.filter((d) => d.toLowerCase().includes(q));
  }, [districts, query]);
  reactExports.useEffect(() => {
    const handler = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setOpen(false);
        setQuery("");
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);
  reactExports.useEffect(() => {
    var _a;
    if (open) {
      (_a = inputRef.current) == null ? void 0 : _a.focus();
      setHighlighted(0);
    }
  }, [open]);
  reactExports.useEffect(() => {
    if (listRef.current) {
      const el = listRef.current.children[highlighted];
      el == null ? void 0 : el.scrollIntoView({ block: "nearest" });
    }
  }, [highlighted]);
  const handleSelect = reactExports.useCallback((districtName) => {
    onChange(districtName);
    setOpen(false);
    setQuery("");
  }, [onChange]);
  const handleKeyDown = (e) => {
    if (!open) {
      if (e.key === "Enter" || e.key === " " || e.key === "ArrowDown") {
        setOpen(true);
      }
      return;
    }
    const maxIndex = filtered.length + (query.trim() && !filtered.includes(query.trim()) ? 1 : 0) - 1;
    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        setHighlighted((h) => Math.min(h + 1, maxIndex));
        break;
      case "ArrowUp":
        e.preventDefault();
        setHighlighted((h) => Math.max(h - 1, 0));
        break;
      case "Enter":
        e.preventDefault();
        if (highlighted < filtered.length) {
          if (filtered[highlighted]) handleSelect(filtered[highlighted]);
        } else if (query.trim()) {
          handleSelect(query.trim());
        }
        break;
      case "Escape":
        setOpen(false);
        setQuery("");
        break;
    }
  };
  const borderClass = filled ? "border-emerald-300 dark:border-emerald-700/50 bg-emerald-50/50 dark:bg-emerald-950/10" : "border-slate-200 dark:border-white/8 bg-white dark:bg-[#141E35]";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { ref: containerRef, className: "relative", onKeyDown: handleKeyDown, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        type: "button",
        disabled: !state,
        onClick: () => setOpen((o) => !o),
        "aria-haspopup": "listbox",
        "aria-expanded": open,
        className: `w-full flex items-center gap-2 border rounded-xl px-4 py-3 text-sm font-medium outline-none transition-all ${!state ? "opacity-50 cursor-not-allowed bg-slate-100 dark:bg-slate-900 border-slate-200 dark:border-white/5" : "focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"} ${borderClass} text-left`,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Landmark, { size: 15, className: `shrink-0 ${!state ? "text-slate-300 dark:text-zinc-700" : "text-slate-400"}` }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `flex-1 truncate ${value ? "text-slate-800 dark:text-white font-semibold" : "text-slate-400"} flex items-center gap-1.5`, children: [
            !state ? "Select State / Province first..." : value || placeholder,
            value && state && /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { size: 14, className: "text-emerald-500 shrink-0" })
          ] }),
          value && state && /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: (e) => {
                e.stopPropagation();
                onChange("");
              },
              className: "p-0.5 hover:bg-slate-200 dark:hover:bg-zinc-700 rounded-full shrink-0 transition-colors",
              "aria-label": "Clear selection",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 12, className: "text-slate-400" })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            ChevronDown,
            {
              size: 15,
              className: `text-slate-400 shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`
            }
          )
        ]
      }
    ),
    open && state && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "absolute z-[9999] left-0 right-0 mt-1.5 bg-white dark:bg-[#1A2540] border border-slate-200 dark:border-white/10 rounded-2xl shadow-2xl overflow-hidden",
        style: { maxHeight: "320px" },
        role: "listbox",
        "aria-label": "District selection",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 px-3 py-2.5 border-b border-slate-100 dark:border-white/5 sticky top-0 bg-white dark:bg-[#1A2540] z-10", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { size: 14, className: "text-slate-400 shrink-0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                ref: inputRef,
                type: "text",
                value: query,
                onChange: (e) => {
                  setQuery(e.target.value);
                  setHighlighted(0);
                },
                placeholder: "Type to search district...",
                className: "flex-1 text-xs font-medium text-slate-800 dark:text-white bg-transparent border-none outline-none placeholder:text-slate-400",
                "aria-label": "Search districts"
              }
            ),
            query && /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: () => {
                  setQuery("");
                  setHighlighted(0);
                },
                className: "p-0.5 hover:bg-slate-100 dark:hover:bg-zinc-700 rounded-full",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 11, className: "text-slate-400" })
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              ref: listRef,
              className: "overflow-y-auto custom-scrollbar",
              style: { maxHeight: "230px" },
              children: [
                filtered.map((districtName, idx) => {
                  const isSelected = districtName === value;
                  const isHovered = idx === highlighted;
                  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "button",
                    {
                      type: "button",
                      role: "option",
                      "aria-selected": isSelected,
                      onClick: () => handleSelect(districtName),
                      onMouseEnter: () => setHighlighted(idx),
                      className: `w-full flex items-center justify-between px-4 py-2.5 text-left transition-colors ${isSelected ? "bg-indigo-50/80 dark:bg-indigo-950/40 text-indigo-700 dark:text-indigo-300 font-bold" : isHovered ? "bg-slate-50 dark:bg-white/5 text-slate-800 dark:text-white" : "text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-white/5"}`,
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold flex-1 truncate pr-2", children: districtName }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 shrink-0", children: [
                          isSelected && /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { size: 14, className: "text-indigo-600 dark:text-indigo-400" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `w-4 h-4 rounded-full border flex items-center justify-center transition-all ${isSelected ? "border-indigo-600 dark:border-indigo-400 bg-indigo-600 dark:bg-indigo-400" : "border-slate-300 dark:border-zinc-600 bg-transparent"}`, children: isSelected && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-1.5 h-1.5 rounded-full bg-white" }) })
                        ] })
                      ]
                    },
                    districtName
                  );
                }),
                query.trim() && !districts.some((d) => d.toLowerCase() === query.trim().toLowerCase()) && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "button",
                  {
                    type: "button",
                    role: "option",
                    onClick: () => handleSelect(query.trim()),
                    onMouseEnter: () => setHighlighted(filtered.length),
                    className: `w-full flex items-center justify-between px-4 py-2.5 text-left transition-colors ${highlighted === filtered.length ? "bg-indigo-50/80 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 font-bold" : "text-indigo-600 dark:text-indigo-400 hover:bg-slate-50 dark:hover:bg-white/5"}`,
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs font-bold truncate flex-1 pr-2", children: [
                        'Use Custom: "',
                        query.trim(),
                        '"'
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 shrink-0", children: [
                        value === query.trim() && /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { size: 14, className: "text-indigo-600 dark:text-indigo-400" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `w-4 h-4 rounded-full border flex items-center justify-center transition-all ${value === query.trim() ? "border-indigo-600 dark:border-indigo-400 bg-indigo-600 dark:bg-indigo-400" : "border-slate-300 dark:border-zinc-600 bg-transparent"}`, children: value === query.trim() && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-1.5 h-1.5 rounded-full bg-white" }) })
                      ] })
                    ]
                  }
                ),
                filtered.length === 0 && !query.trim() && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center justify-center py-8 text-center", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Landmark, { size: 24, className: "text-slate-300 dark:text-zinc-700 mb-2" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-bold text-slate-400", children: "No districts found. Type custom district above." })
                ] })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-4 py-2 border-t border-slate-100 dark:border-white/5 bg-slate-50/80 dark:bg-black/10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[10px] text-slate-400 font-medium", children: [
            filtered.length,
            " districts loaded for ",
            state
          ] }) })
        ]
      }
    )
  ] });
};
const PoliceStationSelect = ({
  district = "",
  value = "",
  onChange,
  filled = false,
  placeholder = "Search and select police station...",
  required = false
}) => {
  const [open, setOpen] = reactExports.useState(false);
  const [query, setQuery] = reactExports.useState("");
  const [highlighted, setHighlighted] = reactExports.useState(0);
  const inputRef = reactExports.useRef(null);
  const listRef = reactExports.useRef(null);
  const containerRef = reactExports.useRef(null);
  const stations = reactExports.useMemo(() => {
    if (!district) return [];
    let list = POLICE_STATIONS_BY_DISTRICT[district];
    if (!list || list.length === 0) {
      list = [
        `${district} Kotwali Police Station`,
        `${district} Civil Lines Police Station`,
        `${district} Cantonment Police Station`,
        `${district} Sadar Police Station`,
        `${district} Cyber Cell Police Station`,
        `${district} Women Police Station`,
        `${district} Traffic Police Station`,
        `${district} Central Police Station`,
        `${district} Rural Police Station`,
        `${district} Railway Police Station`,
        `${district} Town Police Station`,
        `${district} Crime Branch Police Station`,
        `${district} Industrial Area Police Station`,
        `${district} North Police Station`,
        `${district} South Police Station`,
        `${district} East Police Station`,
        `${district} West Police Station`
      ];
    }
    return [...list].sort((a, b) => a.localeCompare(b));
  }, [district]);
  const filtered = reactExports.useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return stations;
    return stations.filter((s) => s.toLowerCase().includes(q));
  }, [stations, query]);
  reactExports.useEffect(() => {
    const handler = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setOpen(false);
        setQuery("");
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);
  reactExports.useEffect(() => {
    var _a;
    if (open) {
      (_a = inputRef.current) == null ? void 0 : _a.focus();
      setHighlighted(0);
    }
  }, [open]);
  reactExports.useEffect(() => {
    if (listRef.current) {
      const el = listRef.current.children[highlighted];
      el == null ? void 0 : el.scrollIntoView({ block: "nearest" });
    }
  }, [highlighted]);
  const handleSelect = reactExports.useCallback((stationName) => {
    onChange(stationName);
    setOpen(false);
    setQuery("");
  }, [onChange]);
  const handleTriggerClick = () => {
    if (!district) {
      zt.error("Please select District first.");
      return;
    }
    setOpen((o) => !o);
  };
  const handleKeyDown = (e) => {
    if (!open) {
      if (e.key === "Enter" || e.key === " " || e.key === "ArrowDown") {
        handleTriggerClick();
      }
      return;
    }
    const maxIndex = filtered.length + (query.trim() && !filtered.includes(query.trim()) ? 1 : 0) - 1;
    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        setHighlighted((h) => Math.min(h + 1, maxIndex));
        break;
      case "ArrowUp":
        e.preventDefault();
        setHighlighted((h) => Math.max(h - 1, 0));
        break;
      case "Enter":
        e.preventDefault();
        if (highlighted < filtered.length) {
          if (filtered[highlighted]) handleSelect(filtered[highlighted]);
        } else if (query.trim()) {
          handleSelect(query.trim());
        }
        break;
      case "Escape":
        setOpen(false);
        setQuery("");
        break;
    }
  };
  const borderClass = filled ? "border-emerald-300 dark:border-emerald-700/50 bg-emerald-50/50 dark:bg-emerald-950/10" : "border-slate-200 dark:border-white/8 bg-white dark:bg-[#141E35]";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { ref: containerRef, className: "relative", onKeyDown: handleKeyDown, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        type: "button",
        onClick: handleTriggerClick,
        "aria-haspopup": "listbox",
        "aria-expanded": open,
        className: `w-full flex items-center gap-2 border rounded-xl px-4 py-3 text-sm font-medium outline-none transition-all ${!district ? "opacity-70 bg-slate-50 dark:bg-[#11192e] border-slate-200 dark:border-white/5 cursor-pointer" : "focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"} ${borderClass} text-left`,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { size: 15, className: `shrink-0 ${!district ? "text-slate-300 dark:text-zinc-700" : "text-slate-400"}` }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `flex-1 truncate ${value ? "text-slate-800 dark:text-white font-semibold" : "text-slate-400"} flex items-center gap-1.5`, children: [
            !district ? "Select District first..." : value || placeholder,
            value && district && /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { size: 14, className: "text-emerald-500 shrink-0" })
          ] }),
          value && district && /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: (e) => {
                e.stopPropagation();
                onChange("");
              },
              className: "p-0.5 hover:bg-slate-200 dark:hover:bg-zinc-700 rounded-full shrink-0 transition-colors",
              "aria-label": "Clear selection",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 12, className: "text-slate-400" })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            ChevronDown,
            {
              size: 15,
              className: `text-slate-400 shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`
            }
          )
        ]
      }
    ),
    open && district && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "absolute z-[9999] left-0 right-0 mt-1.5 bg-white dark:bg-[#1A2540] border border-slate-200 dark:border-white/10 rounded-2xl shadow-2xl overflow-hidden",
        style: { maxHeight: "320px" },
        role: "listbox",
        "aria-label": "Police station selection",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 px-3 py-2.5 border-b border-slate-100 dark:border-white/5 sticky top-0 bg-white dark:bg-[#1A2540] z-10", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { size: 14, className: "text-slate-400 shrink-0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                ref: inputRef,
                type: "text",
                value: query,
                onChange: (e) => {
                  setQuery(e.target.value);
                  setHighlighted(0);
                },
                placeholder: "Type to search police station...",
                className: "flex-1 text-xs font-medium text-slate-800 dark:text-white bg-transparent border-none outline-none placeholder:text-slate-400",
                "aria-label": "Search police stations"
              }
            ),
            query && /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: () => {
                  setQuery("");
                  setHighlighted(0);
                },
                className: "p-0.5 hover:bg-slate-100 dark:hover:bg-zinc-700 rounded-full",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 11, className: "text-slate-400" })
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              ref: listRef,
              className: "overflow-y-auto custom-scrollbar",
              style: { maxHeight: "230px" },
              children: [
                filtered.map((stationName, idx) => {
                  const isSelected = stationName === value;
                  const isHovered = idx === highlighted;
                  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "button",
                    {
                      type: "button",
                      role: "option",
                      "aria-selected": isSelected,
                      onClick: () => handleSelect(stationName),
                      onMouseEnter: () => setHighlighted(idx),
                      className: `w-full flex items-center justify-between px-4 py-2.5 text-left transition-colors ${isSelected ? "bg-indigo-50/80 dark:bg-indigo-950/40 text-indigo-700 dark:text-indigo-300 font-bold" : isHovered ? "bg-slate-50 dark:bg-white/5 text-slate-800 dark:text-white" : "text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-white/5"}`,
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold flex-1 truncate pr-2", children: stationName }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 shrink-0", children: [
                          isSelected && /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { size: 14, className: "text-indigo-600 dark:text-indigo-400" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `w-4 h-4 rounded-full border flex items-center justify-center transition-all ${isSelected ? "border-indigo-600 dark:border-indigo-400 bg-indigo-600 dark:bg-indigo-400" : "border-slate-300 dark:border-zinc-600 bg-transparent"}`, children: isSelected && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-1.5 h-1.5 rounded-full bg-white" }) })
                        ] })
                      ]
                    },
                    stationName
                  );
                }),
                query.trim() && !stations.some((s) => s.toLowerCase() === query.trim().toLowerCase()) && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "button",
                  {
                    type: "button",
                    role: "option",
                    onClick: () => handleSelect(query.trim()),
                    onMouseEnter: () => setHighlighted(filtered.length),
                    className: `w-full flex items-center justify-between px-4 py-2.5 text-left transition-colors ${highlighted === filtered.length ? "bg-indigo-50/80 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 font-bold" : "text-indigo-600 dark:text-indigo-400 hover:bg-slate-50 dark:hover:bg-white/5"}`,
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs font-bold truncate flex-1 pr-2", children: [
                        'Use Custom: "',
                        query.trim(),
                        '"'
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 shrink-0", children: [
                        value === query.trim() && /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { size: 14, className: "text-indigo-600 dark:text-indigo-400" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `w-4 h-4 rounded-full border flex items-center justify-center transition-all ${value === query.trim() ? "border-indigo-600 dark:border-indigo-400 bg-indigo-600 dark:bg-indigo-400" : "border-slate-300 dark:border-zinc-600 bg-transparent"}`, children: value === query.trim() && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-1.5 h-1.5 rounded-full bg-white" }) })
                      ] })
                    ]
                  }
                ),
                filtered.length === 0 && !query.trim() && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center justify-center py-8 text-center", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { size: 24, className: "text-slate-300 dark:text-zinc-700 mb-2" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-bold text-slate-400", children: "No police stations found. Type custom police station above." })
                ] })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-4 py-2 border-t border-slate-100 dark:border-white/5 bg-slate-50/80 dark:bg-black/10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[10px] text-slate-400 font-medium", children: [
            filtered.length,
            " police stations loaded for ",
            district
          ] }) })
        ]
      }
    )
  ] });
};
const CRIMINAL_SECTIONS = [
  { id: "ipc_120b", ipc: "120B", bns: "61(2)", title: "Criminal Conspiracy", bnsTitle: "Criminal Conspiracy" },
  { id: "ipc_141", ipc: "141", bns: "189(1)", title: "Unlawful Assembly", bnsTitle: "Unlawful Assembly" },
  { id: "ipc_153a", ipc: "153A", bns: "196", title: "Promoting Enmity between Groups", bnsTitle: "Promoting Enmity between Groups" },
  { id: "ipc_186", ipc: "186", bns: "224", title: "Obstructing Public Servant", bnsTitle: "Obstructing Public Servant" },
  { id: "ipc_294", ipc: "294", bns: "296", title: "Obscene Acts & Songs in Public", bnsTitle: "Obscene Acts & Songs" },
  { id: "ipc_302", ipc: "302", bns: "103(1)", title: "Murder", bnsTitle: "Murder" },
  { id: "ipc_304", ipc: "304", bns: "105", title: "Culpable Homicide not amounting to Murder", bnsTitle: "Culpable Homicide" },
  { id: "ipc_307", ipc: "307", bns: "109", title: "Attempt to Murder", bnsTitle: "Attempt to Murder" },
  { id: "ipc_323", ipc: "323", bns: "115", title: "Voluntarily Causing Hurt", bnsTitle: "Voluntarily Causing Hurt" },
  { id: "ipc_324", ipc: "324", bns: "118", title: "Voluntarily Causing Hurt by Dangerous Weapons", bnsTitle: "Hurt by Dangerous Weapons" },
  { id: "ipc_325", ipc: "325", bns: "116", title: "Voluntarily Causing Grievous Hurt", bnsTitle: "Voluntarily Causing Grievous Hurt" },
  { id: "ipc_326", ipc: "326", bns: "117", title: "Voluntarily Causing Grievous Hurt by Dangerous Weapons", bnsTitle: "Grievous Hurt by Dangerous Weapons" },
  { id: "ipc_341", ipc: "341", bns: "126", title: "Wrongful Restraint", bnsTitle: "Wrongful Restraint" },
  { id: "ipc_342", ipc: "342", bns: "127", title: "Wrongful Confinement", bnsTitle: "Wrongful Confinement" },
  { id: "ipc_354", ipc: "354", bns: "74", title: "Assault/Criminal Force to Woman with Intent to Outrage Modesty", bnsTitle: "Outraging Modesty of Woman" },
  { id: "ipc_354a", ipc: "354A", bns: "75", title: "Sexual Harassment", bnsTitle: "Sexual Harassment" },
  { id: "ipc_354b", ipc: "354B", bns: "76", title: "Assault to Woman with Intent to Disrobe", bnsTitle: "Assault to Disrobe Woman" },
  { id: "ipc_354c", ipc: "354C", bns: "77", title: "Voyeurism", bnsTitle: "Voyeurism" },
  { id: "ipc_354d", ipc: "354D", bns: "78", title: "Stalking", bnsTitle: "Stalking" },
  { id: "ipc_363", ipc: "363", bns: "137", title: "Kidnapping", bnsTitle: "Kidnapping" },
  { id: "ipc_364a", ipc: "364A", bns: "140", title: "Kidnapping for Ransom", bnsTitle: "Kidnapping for Ransom" },
  { id: "ipc_366", ipc: "366", bns: "142", title: "Kidnapping/Abducting Woman to Compel Marriage", bnsTitle: "Abducting Woman to Compel Marriage" },
  { id: "ipc_376", ipc: "376", bns: "64", title: "Rape", bnsTitle: "Rape" },
  { id: "ipc_376ab", ipc: "376AB", bns: "65", title: "Rape on Woman under 12 Years of Age", bnsTitle: "Rape on Child under 12 Years" },
  { id: "ipc_376da", ipc: "376DA", bns: "70(1)", title: "Gang Rape on Woman under 16 Years of Age", bnsTitle: "Gang Rape on Child under 16 Years" },
  { id: "ipc_379", ipc: "379", bns: "303(2)", title: "Theft", bnsTitle: "Theft" },
  { id: "ipc_380", ipc: "380", bns: "305", title: "Theft in Dwelling House/Vessel/Building", bnsTitle: "Theft in Building/House" },
  { id: "ipc_392", ipc: "392", bns: "309", title: "Robbery", bnsTitle: "Robbery" },
  { id: "ipc_395", ipc: "395", bns: "310", title: "Dacoity", bnsTitle: "Dacoity" },
  { id: "ipc_397", ipc: "397", bns: "311", title: "Robbery/Dacoity with Attempt to Cause Death/Grievous Hurt", bnsTitle: "Robbery/Dacoity with Attempt to Cause Death" },
  { id: "ipc_406", ipc: "406", bns: "316", title: "Criminal Breach of Trust", bnsTitle: "Criminal Breach of Trust" },
  { id: "ipc_409", ipc: "409", bns: "316(4)", title: "Criminal Breach of Trust by Public Servant/Banker/Merchant", bnsTitle: "Breach of Trust by Public Servant" },
  { id: "ipc_415", ipc: "415", bns: "318(1)", title: "Cheating", bnsTitle: "Cheating" },
  { id: "ipc_420", ipc: "420", bns: "318(4)", title: "Cheating & Dishonestly Inducing Delivery of Property (Fraud)", bnsTitle: "Cheating & Fraud" },
  { id: "ipc_463", ipc: "463", bns: "336(1)", title: "Forgery", bnsTitle: "Forgery" },
  { id: "ipc_465", ipc: "465", bns: "336", title: "Punishment for Forgery", bnsTitle: "Punishment for Forgery" },
  { id: "ipc_467", ipc: "467", bns: "338", title: "Forgery of Valuable Security, Will, etc.", bnsTitle: "Forgery of Valuable Security" },
  { id: "ipc_468", ipc: "468", bns: "336(3)", title: "Forgery for Purpose of Cheating", bnsTitle: "Forgery for Cheating" },
  { id: "ipc_471", ipc: "471", bns: "340", title: "Using Forged Document/Electronic Record as Genuine", bnsTitle: "Using Forged Document" },
  { id: "ipc_499", ipc: "499", bns: "356", title: "Defamation", bnsTitle: "Defamation" },
  { id: "ipc_500", ipc: "500", bns: "356", title: "Punishment for Defamation", bnsTitle: "Punishment for Defamation" },
  { id: "ipc_503", ipc: "503", bns: "351(1)", title: "Criminal Intimidation", bnsTitle: "Criminal Intimidation" },
  { id: "ipc_506", ipc: "506", bns: "351(2)", title: "Punishment for Criminal Intimidation", bnsTitle: "Punishment for Criminal Intimidation" },
  { id: "ipc_509", ipc: "509", bns: "79", title: "Word, Gesture or Act Intended to Insult Modesty of Woman", bnsTitle: "Insult to Modesty of Woman" }
];
const SectionSelect = ({
  value = "",
  onChange,
  filled = false,
  placeholder = "Search and select sections...",
  required = false
}) => {
  const [open, setOpen] = reactExports.useState(false);
  const [query, setQuery] = reactExports.useState("");
  const [highlighted, setHighlighted] = reactExports.useState(0);
  const [selected, setSelected] = reactExports.useState([]);
  const inputRef = reactExports.useRef(null);
  const listRef = reactExports.useRef(null);
  const containerRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    if (!value) {
      setSelected([]);
      return;
    }
    const parts = value.split(",").map((s) => s.trim()).filter(Boolean);
    const parsed = parts.map((part) => {
      const cleanedPart = part.toLowerCase();
      const match = CRIMINAL_SECTIONS.find((sec) => {
        const idMatch = cleanedPart === sec.id.toLowerCase();
        const ipcMatch = cleanedPart === sec.ipc.toLowerCase() || cleanedPart === `ipc ${sec.ipc.toLowerCase()}` || cleanedPart === `ipc section ${sec.ipc.toLowerCase()}`;
        const bnsMatch = sec.bns && (cleanedPart === sec.bns.toLowerCase() || cleanedPart === `bns ${sec.bns.toLowerCase()}` || cleanedPart === `bns section ${sec.bns.toLowerCase()}`);
        const fullTitleMatch = cleanedPart.includes(`ipc section ${sec.ipc.toLowerCase()}`) || cleanedPart.includes(`ipc ${sec.ipc.toLowerCase()}`);
        return idMatch || ipcMatch || bnsMatch || fullTitleMatch;
      });
      if (match) {
        return match;
      } else {
        return {
          id: `custom_${part}`,
          ipc: part,
          title: "",
          isCustom: true
        };
      }
    });
    const seen = /* @__PURE__ */ new Set();
    const unique = [];
    parsed.forEach((item) => {
      const key = item.isCustom ? item.ipc : item.id;
      if (!seen.has(key)) {
        seen.add(key);
        unique.push(item);
      }
    });
    setSelected(unique);
  }, [value]);
  const filtered = query.trim() ? CRIMINAL_SECTIONS.filter((sec) => {
    const q = query.toLowerCase();
    return sec.ipc.toLowerCase().includes(q) || sec.bns && sec.bns.toLowerCase().includes(q) || sec.title.toLowerCase().includes(q) || sec.bnsTitle && sec.bnsTitle.toLowerCase().includes(q) || `ipc ${sec.ipc}`.toLowerCase().includes(q) || `bns ${sec.bns}`.toLowerCase().includes(q);
  }) : CRIMINAL_SECTIONS;
  reactExports.useEffect(() => {
    const handler = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setOpen(false);
        setQuery("");
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);
  reactExports.useEffect(() => {
    var _a;
    if (open) {
      (_a = inputRef.current) == null ? void 0 : _a.focus();
      setHighlighted(0);
    }
  }, [open]);
  reactExports.useEffect(() => {
    if (listRef.current) {
      const el = listRef.current.children[highlighted];
      el == null ? void 0 : el.scrollIntoView({ block: "nearest" });
    }
  }, [highlighted]);
  const triggerChange = reactExports.useCallback((newSelected) => {
    const str = newSelected.map((sec) => {
      if (sec.isCustom) return sec.ipc;
      return `IPC Section ${sec.ipc} – ${sec.title}`;
    }).join(", ");
    onChange(str);
  }, [onChange]);
  const handleToggle = reactExports.useCallback((sec) => {
    const isSelected = selected.some((s) => s.isCustom ? s.ipc === sec.ipc : s.id === sec.id);
    let next;
    if (isSelected) {
      next = selected.filter((s) => s.isCustom ? s.ipc !== sec.ipc : s.id !== sec.id);
    } else {
      next = [...selected, sec];
    }
    setSelected(next);
    triggerChange(next);
  }, [selected, triggerChange]);
  const handleRemove = reactExports.useCallback((sec, e) => {
    e.stopPropagation();
    const next = selected.filter((s) => s.isCustom ? s.ipc !== sec.ipc : s.id !== sec.id);
    setSelected(next);
    triggerChange(next);
  }, [selected, triggerChange]);
  const handleAddCustom = reactExports.useCallback(() => {
    const trimmedQuery = query.trim();
    if (!trimmedQuery) return;
    const isAlreadySelected = selected.some((s) => s.ipc.toLowerCase() === trimmedQuery.toLowerCase());
    if (isAlreadySelected) {
      setQuery("");
      return;
    }
    const customSec = {
      id: `custom_${trimmedQuery}`,
      ipc: trimmedQuery,
      title: "",
      isCustom: true
    };
    const next = [...selected, customSec];
    setSelected(next);
    triggerChange(next);
    setQuery("");
    setHighlighted(0);
  }, [query, selected, triggerChange]);
  const handleKeyDown = (e) => {
    if (!open) {
      if (e.key === "Enter" || e.key === " " || e.key === "ArrowDown") {
        setOpen(true);
      }
      return;
    }
    const showCustomOption = query.trim() && !CRIMINAL_SECTIONS.some(
      (s) => s.ipc.toLowerCase() === query.trim().toLowerCase() || s.bns && s.bns.toLowerCase() === query.trim().toLowerCase()
    );
    const maxIndex = filtered.length + (showCustomOption ? 1 : 0) - 1;
    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        setHighlighted((h) => Math.min(h + 1, maxIndex));
        break;
      case "ArrowUp":
        e.preventDefault();
        setHighlighted((h) => Math.max(h - 1, 0));
        break;
      case "Enter":
        e.preventDefault();
        if (highlighted < filtered.length) {
          if (filtered[highlighted]) handleToggle(filtered[highlighted]);
        } else if (showCustomOption) {
          handleAddCustom();
        }
        break;
      case "Escape":
        setOpen(false);
        setQuery("");
        break;
    }
  };
  const getDisplayLabel = (sec) => {
    if (sec.isCustom) return sec.ipc;
    if (sec.bns) return `IPC ${sec.ipc} (BNS ${sec.bns}) – ${sec.title}`;
    return `IPC ${sec.ipc} – ${sec.title}`;
  };
  const getChipLabel = (sec) => {
    if (sec.isCustom) return sec.ipc;
    return `IPC ${sec.ipc}`;
  };
  const borderClass = filled || selected.length > 0 ? "border-emerald-300 dark:border-emerald-700/50 bg-emerald-50/50 dark:bg-emerald-950/10" : "border-slate-200 dark:border-white/8 bg-white dark:bg-[#141E35]";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { ref: containerRef, className: "relative", onKeyDown: handleKeyDown, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        onClick: () => setOpen((o) => !o),
        className: `w-full min-h-[46px] flex flex-wrap items-center gap-1.5 border rounded-xl px-3.5 py-2.5 text-sm outline-none cursor-pointer transition-all ${open ? "ring-2 ring-indigo-500/20 border-indigo-500 bg-white dark:bg-[#1A2540]" : borderClass}`,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Scale, { size: 15, className: "text-slate-400 shrink-0 mr-1" }),
          selected.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-slate-400 select-none flex-1 truncate", children: placeholder }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1.5 flex-1 min-w-0", children: selected.map((sec) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "span",
            {
              className: "inline-flex items-center gap-1 pl-2 pr-1.5 py-0.5 bg-indigo-50 dark:bg-indigo-950/40 text-indigo-700 dark:text-indigo-300 rounded-lg text-xs font-black",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                  "✓ ",
                  getChipLabel(sec)
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: (e) => handleRemove(sec, e),
                    className: "p-0.5 hover:bg-indigo-150 dark:hover:bg-indigo-900/60 rounded-full shrink-0 transition-colors",
                    "aria-label": `Remove ${getChipLabel(sec)}`,
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 10, className: "text-indigo-600 dark:text-indigo-400" })
                  }
                )
              ]
            },
            sec.isCustom ? sec.ipc : sec.id
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            ChevronDown,
            {
              size: 15,
              className: `text-slate-400 shrink-0 ml-auto transition-transform duration-200 ${open ? "rotate-180" : ""}`
            }
          )
        ]
      }
    ),
    open && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "absolute z-[9999] left-0 right-0 mt-1.5 bg-white dark:bg-[#1A2540] border border-slate-200 dark:border-white/10 rounded-2xl shadow-2xl overflow-hidden",
        style: { maxHeight: "320px" },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 px-3 py-2.5 border-b border-slate-100 dark:border-white/5 sticky top-0 bg-white dark:bg-[#1A2540] z-10", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { size: 14, className: "text-slate-400 shrink-0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                ref: inputRef,
                type: "text",
                value: query,
                onChange: (e) => {
                  setQuery(e.target.value);
                  setHighlighted(0);
                },
                placeholder: "Search section number or name (e.g., 302, Theft)...",
                className: "flex-1 text-xs font-medium text-slate-800 dark:text-white bg-transparent border-none outline-none placeholder:text-slate-400"
              }
            ),
            query && /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: () => {
                  setQuery("");
                  setHighlighted(0);
                },
                className: "p-0.5 hover:bg-slate-100 dark:hover:bg-zinc-700 rounded-full",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 11, className: "text-slate-400" })
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              ref: listRef,
              className: "overflow-y-auto custom-scrollbar",
              style: { maxHeight: "230px" },
              children: [
                filtered.map((sec, idx) => {
                  const isSelected = selected.some((s) => s.isCustom ? s.ipc === sec.ipc : s.id === sec.id);
                  const isHovered = idx === highlighted;
                  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "button",
                    {
                      type: "button",
                      onClick: () => handleToggle(sec),
                      onMouseEnter: () => setHighlighted(idx),
                      className: `w-full flex items-center justify-between px-4 py-2.5 text-left transition-colors ${isSelected ? "bg-indigo-50/80 dark:bg-indigo-950/40 text-indigo-700 dark:text-indigo-300 font-bold" : isHovered ? "bg-slate-50 dark:bg-white/5 text-slate-800 dark:text-white" : "text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-white/5"}`,
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold flex-1 truncate pr-2", children: getDisplayLabel(sec) }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 shrink-0", children: [
                          isSelected && /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { size: 14, className: "text-indigo-600 dark:text-indigo-400" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `w-4 h-4 rounded-full border flex items-center justify-center transition-all ${isSelected ? "border-indigo-600 dark:border-indigo-400 bg-indigo-600 dark:bg-indigo-400" : "border-slate-300 dark:border-zinc-600 bg-transparent"}`, children: isSelected && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-1.5 h-1.5 rounded-full bg-white" }) })
                        ] })
                      ]
                    },
                    sec.id
                  );
                }),
                query.trim() && !CRIMINAL_SECTIONS.some(
                  (s) => s.ipc.toLowerCase() === query.trim().toLowerCase() || s.bns && s.bns.toLowerCase() === query.trim().toLowerCase()
                ) && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "button",
                  {
                    type: "button",
                    onClick: handleAddCustom,
                    onMouseEnter: () => setHighlighted(filtered.length),
                    className: `w-full flex items-center justify-between px-4 py-2.5 text-left transition-colors ${highlighted === filtered.length ? "bg-indigo-50/85 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 font-bold" : "text-indigo-600 dark:text-indigo-400 hover:bg-slate-50 dark:hover:bg-white/5"}`,
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs font-bold truncate flex-1 pr-2 flex items-center gap-1", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { size: 12 }),
                        ' Add Custom Section: "',
                        query.trim(),
                        '"'
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2 shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-4 h-4 rounded-full border border-dashed border-indigo-500 bg-transparent" }) })
                    ]
                  }
                ),
                filtered.length === 0 && !query.trim() && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center justify-center py-8 text-center", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Scale, { size: 24, className: "text-slate-300 dark:text-zinc-700 mb-2" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-bold text-slate-400", children: "No sections found. Type to add custom." })
                ] })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 py-2 border-t border-slate-100 dark:border-white/5 bg-slate-50/80 dark:bg-black/10 flex justify-between items-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[10px] text-slate-400 font-medium", children: [
              filtered.length,
              " of ",
              CRIMINAL_SECTIONS.length,
              " sections database"
            ] }),
            selected.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                onClick: (e) => {
                  e.stopPropagation();
                  setSelected([]);
                  triggerChange([]);
                },
                className: "text-[10px] text-indigo-500 hover:underline font-bold",
                children: [
                  "Clear All (",
                  selected.length,
                  ")"
                ]
              }
            )
          ] })
        ]
      }
    )
  ] });
};
const COUNTRY_FIELD = {
  key: "country",
  label: "Country",
  type: "country",
  required: true,
  placeholder: "Search and select country..."
};
const STATE_FIELD = {
  key: "state",
  label: "State / Province",
  type: "state",
  required: true,
  placeholder: "Search and select state / province..."
};
const DISTRICT_FIELD = {
  key: "district",
  label: "District",
  type: "district",
  required: true,
  placeholder: "Search and select district..."
};
const POLICE_STATION_FIELD = {
  key: "policeStation",
  label: "Police Station",
  type: "policeStation",
  required: true,
  placeholder: "Search and select police station..."
};
const buildEnrichedFields = (originalFields) => {
  const fields = originalFields.map((f) => f.key === "ipcSections" ? { ...f, type: "sections" } : f);
  const hasPoliceStation = fields.some((f) => {
    const k = f.key.toLowerCase();
    return k === "policestation" || k === "police_station" || k === "district";
  });
  const cleanedFields = fields.filter((f) => {
    const k = f.key.toLowerCase();
    return k !== "country" && k !== "state" && k !== "province" && k !== "district" && k !== "policestation" && k !== "police_station";
  });
  const result = [];
  let injected = false;
  let firstAddressIdx = -1;
  for (let i = 0; i < cleanedFields.length; i++) {
    const lk = cleanedFields[i].key.toLowerCase();
    if (lk.includes("address") || lk.includes("addr")) {
      firstAddressIdx = i;
      break;
    }
  }
  if (firstAddressIdx !== -1) {
    cleanedFields.forEach((field, idx) => {
      result.push(field);
      if (idx === firstAddressIdx) {
        result.push(COUNTRY_FIELD);
        result.push(STATE_FIELD);
        if (hasPoliceStation) {
          result.push(DISTRICT_FIELD);
          result.push(POLICE_STATION_FIELD);
        }
        injected = true;
      }
    });
  } else if (hasPoliceStation) {
    const originalPoliceStationIdx = fields.findIndex((f) => {
      const k = f.key.toLowerCase();
      return k === "policestation" || k === "police_station" || k === "district";
    });
    const insertIdx = originalPoliceStationIdx !== -1 ? originalPoliceStationIdx : 2;
    cleanedFields.forEach((field, idx) => {
      if (idx === insertIdx) {
        result.push(COUNTRY_FIELD);
        result.push(STATE_FIELD);
        result.push(DISTRICT_FIELD);
        result.push(POLICE_STATION_FIELD);
        injected = true;
      }
      result.push(field);
    });
    if (!injected) {
      result.push(COUNTRY_FIELD);
      result.push(STATE_FIELD);
      result.push(DISTRICT_FIELD);
      result.push(POLICE_STATION_FIELD);
      injected = true;
    }
  } else {
    cleanedFields.forEach((field, idx) => {
      result.push(field);
      if (idx === 1) {
        result.push(COUNTRY_FIELD);
        result.push(STATE_FIELD);
        injected = true;
      }
    });
    if (!injected) {
      result.push(COUNTRY_FIELD);
      result.push(STATE_FIELD);
    }
  }
  return result;
};
const CAT_ICONS = {
  "CRIMINAL LAW": /* @__PURE__ */ jsxRuntimeExports.jsx(Gavel, { size: 15, className: "text-red-500" }),
  "CIVIL LAW": /* @__PURE__ */ jsxRuntimeExports.jsx(Scale, { size: 15, className: "text-blue-500" }),
  "FAMILY LAW": /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { size: 15, className: "text-pink-500" }),
  "PROPERTY LAW": /* @__PURE__ */ jsxRuntimeExports.jsx(House, { size: 15, className: "text-amber-500" }),
  "CORPORATE LAW": /* @__PURE__ */ jsxRuntimeExports.jsx(Briefcase, { size: 15, className: "text-violet-500" }),
  "BANKING & FINANCE": /* @__PURE__ */ jsxRuntimeExports.jsx(Landmark, { size: 15, className: "text-emerald-500" }),
  "LABOUR LAW": /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { size: 15, className: "text-orange-500" }),
  "CONSUMER COURT": /* @__PURE__ */ jsxRuntimeExports.jsx(CreditCard, { size: 15, className: "text-cyan-500" }),
  "CYBER LAW": /* @__PURE__ */ jsxRuntimeExports.jsx(Laptop, { size: 15, className: "text-indigo-500" }),
  "TAX & GST": /* @__PURE__ */ jsxRuntimeExports.jsx(FileCheck, { size: 15, className: "text-lime-600" }),
  "INTELLECTUAL PROPERTY": /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { size: 15, className: "text-purple-500" }),
  "COURT & DOCUMENTS": /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { size: 15, className: "text-slate-500" }),
  "GENERAL": /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { size: 15, className: "text-slate-500" })
};
const CAT_COLORS = {
  "CRIMINAL LAW": "border-red-200 dark:border-red-900/30",
  "CIVIL LAW": "border-blue-200 dark:border-blue-900/30",
  "FAMILY LAW": "border-pink-200 dark:border-pink-900/30",
  "PROPERTY LAW": "border-amber-200 dark:border-amber-900/30",
  "CORPORATE LAW": "border-violet-200 dark:border-violet-900/30",
  "BANKING & FINANCE": "border-emerald-200 dark:border-emerald-900/30",
  "LABOUR LAW": "border-orange-200 dark:border-orange-900/30",
  "CONSUMER COURT": "border-cyan-200 dark:border-cyan-900/30",
  "CYBER LAW": "border-indigo-200 dark:border-indigo-900/30",
  "TAX & GST": "border-lime-200 dark:border-lime-900/30",
  "INTELLECTUAL PROPERTY": "border-purple-200 dark:border-purple-900/30",
  "COURT & DOCUMENTS": "border-slate-200 dark:border-slate-800"
};
const buildCategories = () => {
  const catMap = {};
  Object.entries(DRAFT_TEMPLATES).forEach(([draftType, tmpl]) => {
    const cat = tmpl.category;
    if (!catMap[cat]) catMap[cat] = [];
    catMap[cat].push(draftType);
  });
  return Object.entries(catMap).map(([title, items]) => ({ title, items }));
};
const ALL_CATEGORIES = buildCategories();
const FieldInput = ({ field, value, onChange, filled, country, state, district }) => {
  const base = `w-full border rounded-xl px-4 py-3 text-sm font-medium outline-none transition-all focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 ${filled ? "bg-emerald-50/50 dark:bg-emerald-950/10 border-emerald-300 dark:border-emerald-700/50 text-slate-800 dark:text-white" : "bg-white dark:bg-[#141E35] border-slate-200 dark:border-white/8 text-slate-800 dark:text-white"}`;
  if (field.type === "sections") {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      SectionSelect,
      {
        value: value || "",
        onChange,
        filled,
        placeholder: field.placeholder || "Search and select sections...",
        required: field.required
      }
    );
  }
  if (field.type === "country") {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      CountrySelect,
      {
        value: value || "",
        onChange,
        filled,
        placeholder: field.placeholder || "Search and select country...",
        required: field.required
      }
    );
  }
  if (field.type === "state") {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      StateSelect,
      {
        country,
        value: value || "",
        onChange,
        filled,
        placeholder: field.placeholder || "Search and select state / province...",
        required: field.required
      }
    );
  }
  if (field.type === "district") {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      DistrictSelect,
      {
        state,
        value: value || "",
        onChange,
        filled,
        placeholder: field.placeholder || "Search and select district...",
        required: field.required
      }
    );
  }
  if (field.type === "policeStation") {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      PoliceStationSelect,
      {
        district,
        value: value || "",
        onChange,
        filled,
        placeholder: field.placeholder || "Search and select police station...",
        required: field.required
      }
    );
  }
  if (field.type === "date") {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "input",
      {
        type: "date",
        value: value || "",
        onChange: (e) => onChange(e.target.value),
        className: base
      }
    );
  }
  if (field.type === "select" && field.options) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "select",
      {
        value: value || "",
        onChange: (e) => onChange(e.target.value),
        className: base,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("option", { value: "", children: [
            "— Select ",
            field.label,
            " —"
          ] }),
          field.options.map((opt) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: opt, children: opt }, opt))
        ]
      }
    );
  }
  if (field.type === "textarea") {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "textarea",
      {
        rows: 4,
        placeholder: field.placeholder || `Enter ${field.label}...`,
        value: value || "",
        onChange: (e) => onChange(e.target.value),
        className: `${base} resize-y min-h-[100px] leading-relaxed`
      }
    );
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "input",
    {
      type: "text",
      placeholder: field.placeholder || `Enter ${field.label}...`,
      value: value || "",
      onChange: (e) => onChange(e.target.value),
      className: base
    }
  );
};
const DraftMaker = ({ currentCase, onBack, theme, allProjects = [] }) => {
  var _a, _b, _c;
  const [step, setStep] = reactExports.useState("SELECT");
  const [selectedType, setSelectedType] = reactExports.useState(null);
  const [template, setTemplate] = reactExports.useState(null);
  const [formData, setFormData] = reactExports.useState({});
  const [errors, setErrors] = reactExports.useState({});
  const [linkedCaseId, setLinkedCaseId] = reactExports.useState((currentCase == null ? void 0 : currentCase._id) || "");
  const [prefillData, setPrefillData] = reactExports.useState(null);
  const [prefillBanner, setPrefillBanner] = reactExports.useState(false);
  const [filledFields, setFilledFields] = reactExports.useState(/* @__PURE__ */ new Set());
  const [generationMode, setGenerationMode] = reactExports.useState("standard");
  const [isGenerating, setIsGenerating] = reactExports.useState(false);
  const [generationStatus, setGenerationStatus] = reactExports.useState("");
  const [finalDraft, setFinalDraft] = reactExports.useState("");
  const [isEditing, setIsEditing] = reactExports.useState(false);
  const [draftVersion, setDraftVersion] = reactExports.useState(1);
  const [draftVersionHistory, setDraftVersionHistory] = reactExports.useState([]);
  const [savedDrafts, setSavedDrafts] = reactExports.useState([]);
  const [loadingDrafts, setLoadingDrafts] = reactExports.useState(false);
  const [savedNotice, setSavedNotice] = reactExports.useState(null);
  const [isAiSuggesting, setIsAiSuggesting] = reactExports.useState(false);
  const [exportHistory, setExportHistory] = reactExports.useState([]);
  const [generationTimestamp, setGenerationTimestamp] = reactExports.useState("");
  const {
    outputLang,
    setOutputLang,
    isTranslating: isDraftTranslating,
    setIsTranslating: setIsDraftTranslating,
    getDisplayText: getDraftDisplayText,
    translateText: translateDraftText
  } = useOutputLanguage("draft_maker", (currentCase == null ? void 0 : currentCase._id) || "global");
  const [draftDisplayText, setDraftDisplayText] = reactExports.useState("");
  const draftMountedRef = reactExports.useRef(true);
  reactExports.useEffect(() => {
    draftMountedRef.current = true;
    return () => {
      draftMountedRef.current = false;
    };
  }, []);
  reactExports.useEffect(() => {
    if (finalDraft) {
      if (outputLang === "en") {
        setDraftDisplayText(finalDraft);
      } else {
        handleDraftLangChange(outputLang);
      }
    } else {
      setDraftDisplayText("");
    }
  }, [finalDraft]);
  const handleDraftLangChange = reactExports.useCallback(async (newLang) => {
    setOutputLang(newLang);
    if (!finalDraft) return;
    if (newLang === "en") {
      setDraftDisplayText(finalDraft);
      return;
    }
    const cached = getDraftDisplayText(finalDraft);
    if (cached && cached !== finalDraft) {
      setDraftDisplayText(cached);
      return;
    }
    setIsDraftTranslating(true);
    try {
      const translated = await translateDraftText(finalDraft);
      if (draftMountedRef.current) setDraftDisplayText(translated);
    } catch {
      if (draftMountedRef.current) setDraftDisplayText(finalDraft);
    } finally {
      if (draftMountedRef.current) setIsDraftTranslating(false);
    }
  }, [finalDraft, getDraftDisplayText, setOutputLang, setIsDraftTranslating, translateDraftText]);
  const [searchQuery, setSearchQuery] = reactExports.useState("");
  const [activeCat, setActiveCat] = reactExports.useState("ALL");
  const [showVersionHistory, setShowVersionHistory] = reactExports.useState(false);
  const previewRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    var _a2, _b2;
    const intent = consumePrefillIntent("legal_draft_maker");
    if (intent == null ? void 0 : intent.caseData) {
      const mapped = mapCaseToForm(intent.caseData);
      setPrefillData(mapped);
      setPrefillBanner(true);
      const caseId = ((_a2 = intent.caseData) == null ? void 0 : _a2._id) || ((_b2 = intent.caseData) == null ? void 0 : _b2.id);
      if (caseId) setLinkedCaseId(caseId);
      zt.success(`✓ Case data ready — pick a template to auto-fill`, { icon: "💼", duration: 3500 });
    }
  }, []);
  const filteredCategories = reactExports.useMemo(() => {
    const q = searchQuery.toLowerCase();
    return ALL_CATEGORIES.map((cat) => ({
      ...cat,
      items: cat.items.filter(
        (item) => q === "" || item.toLowerCase().includes(q) || cat.title.toLowerCase().includes(q)
      )
    })).filter(
      (cat) => (activeCat === "ALL" || cat.title === activeCat) && cat.items.length > 0
    );
  }, [searchQuery, activeCat]);
  const applyPrefill = reactExports.useCallback((tmpl, mapped) => {
    if (!(tmpl == null ? void 0 : tmpl.fields) || !mapped) return {};
    const filled = {};
    const filledSet = /* @__PURE__ */ new Set();
    tmpl.fields.forEach((field) => {
      var _a2, _b2, _c2, _d, _e, _f, _g, _h;
      const k = field.key;
      const lk = k.toLowerCase();
      const ll = field.label.toLowerCase();
      let val = "";
      if (k === "country") {
        val = ((_a2 = mapped._raw) == null ? void 0 : _a2.country) || ((_b2 = mapped._raw) == null ? void 0 : _b2.jurisdiction) || "India";
      } else if (k === "state") {
        val = ((_c2 = mapped._raw) == null ? void 0 : _c2.state) || ((_d = mapped._raw) == null ? void 0 : _d.province) || "";
      } else if (k === "district") {
        val = ((_e = mapped._raw) == null ? void 0 : _e.district) || "";
      } else if (k === "policeStation") {
        val = ((_f = mapped._raw) == null ? void 0 : _f.policeStation) || ((_g = mapped._raw) == null ? void 0 : _g.police_station) || "";
      } else if (lk.includes("petitioner") || lk.includes("plaintiff") || lk.includes("complainant") || lk.includes("applicant") || lk.includes("claimant") || ll.includes("party 1") || lk.includes("creditor") || lk.includes("sender") || lk.includes("aggrieved") || lk.includes("borrower") || lk.includes("employee")) {
        val = mapped.petitioner || "";
      } else if (lk.includes("respondent") || lk.includes("defendant") || lk.includes("accused") || lk.includes("debtor") || lk.includes("receiver") || lk.includes("harasser") || lk.includes("employer") || ll.includes("party 2") || lk.includes("opposite")) {
        val = mapped.respondent || "";
      } else if (lk.includes("court") || lk.includes("jurisdiction") || lk.includes("forum") || lk.includes("tribunal")) {
        val = mapped.courtName || "";
      } else if (lk.includes("casefact") || lk.includes("facts") || lk.includes("incident") || lk.includes("description") || lk.includes("background") || lk.includes("detail") || lk.includes("scenario")) {
        val = mapped.caseFacts || "";
      } else if (lk.includes("casenumber") || lk.includes("case_no") || lk.includes("number") && lk.includes("case") || lk.includes("fir_no") || lk.includes("firnumber")) {
        val = mapped.caseNumber || "";
      } else if (lk.includes("casetype") || lk.includes("type") && lk.includes("case")) {
        val = mapped.caseType || "";
      } else if (lk.includes("advocate") || lk.includes("counsel") || lk.includes("lawyer")) {
        val = mapped.advocateName || "";
      } else if (lk.includes("section") || lk.includes("provision") || lk.includes("ipc") || lk.includes("act")) {
        val = mapped.provisions || "";
      } else if (lk.includes("evidence")) {
        val = mapped.evidenceSummary || "";
      } else if (lk.includes("title") || lk.includes("subject") || lk.includes("matter")) {
        val = mapped.caseTitle || "";
      } else if (lk.includes("address")) {
        if (lk.includes("applicant") || lk.includes("petitioner") || lk.includes("plaintiff") || lk.includes("complainant")) {
          val = ((_h = mapped._raw) == null ? void 0 : _h.clientAddress) || "";
        }
      }
      if (val) {
        filled[k] = val;
        filledSet.add(k);
      }
    });
    return { filled, filledSet };
  }, []);
  const handleSelectType = reactExports.useCallback((draftType) => {
    const tmpl = getTemplate(draftType);
    const enrichedFields = buildEnrichedFields(tmpl.fields);
    const enrichedTmpl = { ...tmpl, fields: enrichedFields };
    setSelectedType(draftType);
    setTemplate(enrichedTmpl);
    setErrors({});
    setFinalDraft("");
    setDraftVersion(1);
    setDraftVersionHistory([]);
    setIsEditing(false);
    setExportHistory([]);
    setGenerationTimestamp("");
    if (currentCase) {
      apiService.updateProject(currentCase._id, {
        ...currentCase,
        activeDraftWork: null
      }).then((res) => {
        if (onUpdateCase) onUpdateCase(res);
      }).catch((err) => console.error("Failed to clear active draft work in DB", err));
    }
    let initialData = {};
    let initialFilled = /* @__PURE__ */ new Set();
    if (prefillData) {
      const { filled, filledSet } = applyPrefill(enrichedTmpl, prefillData);
      if (!filled["country"]) {
        filled["country"] = "India";
        filledSet.add("country");
      }
      initialData = filled;
      initialFilled = filledSet;
      if (filledSet.size > 0) zt.success(`✓ ${filledSet.size} fields auto-filled`, { icon: "✨" });
    } else {
      initialData = { country: "India" };
    }
    setFormData(initialData);
    setFilledFields(initialFilled);
    setStep("FORM");
  }, [prefillData, applyPrefill]);
  const handleCaseSelect = reactExports.useCallback((caseId) => {
    setLinkedCaseId(caseId);
    if (caseId && template) {
      const selected = allProjects.find((c) => c._id === caseId);
      if (selected) {
        const mapped = mapCaseToForm(selected);
        const { filled, filledSet } = applyPrefill(template, mapped);
        if (!filled["country"]) filled["country"] = "India";
        filledSet.add("country");
        setFormData((prev) => ({ ...prev, ...filled }));
        setFilledFields((prev) => /* @__PURE__ */ new Set([...prev, ...filledSet]));
        zt.success(`✓ ${filledSet.size} fields filled from "${selected.name}"`);
      }
    }
  }, [template, allProjects, applyPrefill]);
  const validate = () => {
    var _a2;
    const errs = {};
    (_a2 = template == null ? void 0 : template.fields) == null ? void 0 : _a2.forEach((field) => {
      const val = formData[field.key];
      if (field.required && !(val == null ? void 0 : val.toString().trim())) {
        errs[field.key] = `${field.label} is required`;
      }
    });
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };
  const buildPrompt = (mode, tmpl, data, draftType, caseContext) => {
    var _a2;
    const fieldData = tmpl.fields.map((f) => `${f.label} (${f.key}): ${data[f.key] || "Not provided"}`).join("\n");
    let caseExtra = "";
    if (linkedCaseId) {
      const c = allProjects.find((p) => p._id === linkedCaseId);
      if (c) {
        caseExtra = `
[ACTIVE CASE DATABASE CONTEXT]:
Case Title/Name: ${c.title || c.name || ""}
Case Description/Facts: ${c.description || c.caseSummary || ""}
Client (Petitioner): ${c.clientName || "N/A"}
Opponent (Respondent): ${c.accused || c.opponentName || "N/A"}
Court Name: ${c.courtName || "N/A"}
Jurisdiction: ${c.jurisdiction || "N/A"}
Applicable Sections: ${c.sections || "N/A"}
Evidence/Documents Available: ${((_a2 = c.documents) == null ? void 0 : _a2.map((d) => d.name).join(", ")) || "None uploaded"}
---------------------------`;
      }
    }
    const courtHeader = tmpl.courtHeader || "IN THE HON'BLE COURT";
    let modeInstruction = "";
    if (mode === "standard") {
      modeInstruction = `
[GENERATION MODE: STANDARD DRAFT]
Generate a complete, professionally formatted legal draft.
Structure the document containing:
1. DRAFT CONTENT: The complete text of the ${draftType} incorporating all form fields.
2. CASE SUMMARY: A concise 1-paragraph summary of the case facts.
3. LEGAL FORMAT: A brief explanation of the legal drafting format and rules applied.
Ensure professional layout and correct terminology.`;
    } else if (mode === "enhanced") {
      modeInstruction = `
[GENERATION MODE: ENHANCED DRAFT]
Generate an advanced legal draft leveraging senior advocate-grade legal reasoning and stronger legal language.
You MUST explicitly incorporate:
- Detailed references to applicable laws and statutes.
- Specified IPC/BNS Sections: ${data.ipcSections || "None selected"}.
- Relevant landmark case laws, precedents, and citations of the Supreme Court or High Courts.
- Coherent, strong supporting legal arguments based on case facts.
- Context of the available evidence: ${data.evidenceAvailable || data.evidence || "None selected"}.
Draft the petition/document with a high level of sophistication, legal weight, and deep legal reasoning.`;
    } else if (mode === "court_ready") {
      modeInstruction = `
[GENERATION MODE: COURT-READY DRAFT]
Generate a final, official, filing-ready court petition.
It MUST strictly include the following sections in exact court layout:
1. COURT HEADING: "${courtHeader}" at the top.
2. CASE DETAILS: Case/FIR No. space and Year.
3. PARTIES LAYOUT: Proper Petitioner vs Respondent names, ages, and addresses.
4. FACTS OF THE MATTER: Detailed chronological narrative paragraphs.
5. LEGAL GROUNDS: Specific numbered grounds referencing legal principles.
6. APPLICABLE PROVISIONS: Detailed statutory sections and IPC/BNS sections invoked.
7. PRAYER CLAUSE: Formal, complete prayer seeking specific reliefs.
8. VERIFICATION BLOCK: The standard verification/affidavit clause confirming facts.
9. SIGNATURE BLOCKS: Designated placeholders for the Petitioner, Advocate, Date, and Place.
Must be 100% complete and ready for submission to a court of law.`;
    } else if (mode === "hindi") {
      modeInstruction = `
[GENERATION MODE: HINDI VERSION]
Generate the complete legal draft entirely in formal, professional legal Hindi (Devanagari script).
Requirements:
- Use standard court vocabulary (e.g., 'याचिकाकर्ता', 'प्रत्यर्थी', 'प्रार्थना', 'सत्यापन', 'अधिवक्ता').
- Maintain proper court-room formatting.
- Ensure natural, accurate legal translations and phrasing (no broken word-for-word machine translation).`;
    } else if (mode === "english") {
      modeInstruction = `
[GENERATION MODE: ENGLISH VERSION]
Generate the complete legal draft entirely in professional, advocate-grade legal English.
Requirements:
- Use sophisticated legal terms and active advocacy language.
- Format strictly according to high court standards.`;
    } else if (mode === "bilingual") {
      modeInstruction = `
[GENERATION MODE: BILINGUAL VERSION]
Generate both the English and Hindi versions of the complete legal draft in a single document.
Use the following strict layout:

[ENGLISH SECTION]
[Insert the complete legal draft in formal English here]

----------------

[HINDI SECTION]
[Insert the complete legal draft in formal Hindi (Devanagari script) here]

Ensure both sections are fully detailed and match each other's facts completely.`;
    }
    return `You are a Senior Advocate of the Supreme Court of India with 25+ years of litigation experience. 
Draft a complete, professionally formatted ${draftType} document.

${caseContext ? `[ACTIVE CASE CONTEXT: ${caseContext}]
` : ""}
${caseExtra}

FORM DATA PROVIDED:
${fieldData}

INSTRUCTIONS FOR GENERATION:
${modeInstruction}

ADDITIONAL RULES:
- Use formal legal style, no casual remarks, and format all currency amounts in Indian Rupees (₹).
- Output in clean, well-formatted Markdown with bold titles.
- Always output the complete text — never truncate or leave sections unfinished.

Generate the draft now:`;
  };
  const addToExportHistory = reactExports.useCallback((action) => {
    const now = /* @__PURE__ */ new Date();
    const timeStr = now.toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit", second: "2-digit" });
    const logStr = `${action} at ${timeStr}`;
    setExportHistory((prev) => [...prev, logStr]);
  }, []);
  const handleGenerate = async (mode = generationMode) => {
    if (!validate()) {
      zt.error("Please fill all required fields before generating");
      return;
    }
    setIsGenerating(true);
    setStep("GENERATING");
    const statusMessages = [
      "Analysing case facts...",
      "Applying legal framework...",
      "Drafting court format document...",
      "Adding legal provisions...",
      "Finalising prayer and verification..."
    ];
    let idx = 0;
    setGenerationStatus(statusMessages[0]);
    const interval = setInterval(() => {
      idx++;
      if (idx < statusMessages.length) setGenerationStatus(statusMessages[idx]);
    }, 2200);
    try {
      let caseCtx = "";
      if (linkedCaseId) {
        const c = allProjects.find((p) => p._id === linkedCaseId);
        if (c) caseCtx = `Case: ${c.name} | Client: ${c.clientName || "N/A"} | Court: ${c.courtName || "N/A"}`;
      }
      const systemPrompt = `${template.systemPrompt}
Always generate the complete document — never truncate. Use formal legal language. Include all sections.`;
      const prompt = buildPrompt(mode, template, formData, selectedType, caseCtx);
      const resp = await generateChatResponse([], prompt, systemPrompt, [], "English", null, "legal");
      const text = (resp == null ? void 0 : resp.reply) || resp || "";
      if (!text.trim()) throw new Error("Empty response");
      setDraftVersionHistory((prev) => [
        ...prev,
        { version: draftVersion, mode, content: finalDraft, timestamp: (/* @__PURE__ */ new Date()).toLocaleTimeString() }
      ].filter((v) => v.content));
      setFinalDraft(text);
      setDraftVersion((v) => v + 1);
      setGenerationMode(mode);
      const timestamp = (/* @__PURE__ */ new Date()).toLocaleString("en-IN", { dateStyle: "medium", timeStyle: "short" });
      setGenerationTimestamp(timestamp);
      setStep("PREVIEW");
      zt.success(`✓ ${selectedType} generated successfully!`, { icon: "⚖️" });
    } catch (err) {
      console.error(err);
      zt.error("Generation failed — please try again");
      setStep("FORM");
    } finally {
      clearInterval(interval);
      setIsGenerating(false);
    }
  };
  const handlePrint = () => {
    const textToPrint = draftDisplayText || finalDraft;
    const content = textToPrint.replace(/^### (.*$)/gim, "<h3>$1</h3>").replace(/^## (.*$)/gim, "<h2>$1</h2>").replace(/^# (.*$)/gim, "<h1>$1</h1>").replace(/\*\*(.*?)\*\*/gim, "<strong>$1</strong>").replace(/\*(.*?)\*/gim, "<em>$1</em>").replace(/\n/g, "<br/>");
    const html = `<!DOCTYPE html><html><head><meta charset="UTF-8">
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link href="https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,400;0,700;1,400&family=Noto+Sans+Devanagari:wght@400;700&display=swap" rel="stylesheet"/>
      <title>${selectedType || "Legal Draft"}</title>
      <style>
        body{font-family:'Noto Sans Devanagari','Noto Sans',Arial,sans-serif;padding:40px;line-height:1.9;font-size:13pt;color:#000;max-width:800px;margin:0 auto}
        h1{text-align:center;text-transform:uppercase;font-size:16pt;font-weight:bold;margin:20px 0;letter-spacing:1px}
        h2{font-size:14pt;font-weight:bold;margin:18px 0 10px;text-transform:uppercase}
        h3{font-size:13pt;font-weight:bold;margin:14px 0 8px}
        strong{font-weight:bold}
        .footer{margin-top:60px;border-top:2px solid #000;padding-top:15px;font-size:10pt;text-align:right}
        @media print{body{padding:20px}.footer{position:fixed;bottom:20px;right:20px;width:100%}}
      </style></head><body>
      ${content}
      <div class="footer">Generated by AISA Legal AI — ${(/* @__PURE__ */ new Date()).toLocaleDateString("en-IN")} | ${selectedType}</div>
      </body></html>`;
    const win = window.open("", "_blank");
    if (win) {
      win.document.write(html);
      win.document.close();
      win.focus();
      setTimeout(() => win.print(), 500);
    }
    addToExportHistory("Print Draft");
  };
  const handleExportPDF = () => {
    addToExportHistory("Export PDF");
    handlePrint();
  };
  const handleExportDOCX = () => {
    const textToExport = draftDisplayText || finalDraft;
    if (!textToExport) return;
    const content = textToExport.replace(/\n/g, '<p style="margin-top:0in;margin-right:0in;margin-bottom:6.0pt;margin-left:0in;line-height:150%"></p>').replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>").replace(/\*(.*?)\*/g, "<em>$1</em>");
    const html = `<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'>
      <head>
        <title>${selectedType || "Legal Draft"}</title>
        <!--[if gte mso 9]>
        <xml>
          <w:WordDocument>
            <w:View>Print</w:View>
            <w:Zoom>100</w:Zoom>
          </w:WordDocument>
        </xml>
        <![endif]-->
        <style>
          body { font-family: "Times New Roman", serif; font-size: 12pt; line-height: 1.5; padding: 1in; }
          p { margin: 0 0 6pt 0; text-align: justify; }
          h1 { text-align: center; text-transform: uppercase; font-size: 16pt; font-weight: bold; margin: 20px 0; }
          h2 { font-size: 14pt; font-weight: bold; margin: 18px 0 10px; text-transform: uppercase; }
          h3 { font-size: 12pt; font-weight: bold; margin: 14px 0 8px; }
        </style>
      </head>
      <body>
        ${content}
      </body>
    </html>`;
    const blob = new Blob(["\uFEFF" + html], { type: "application/msword" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${(selectedType || "Legal_Draft").replace(/[^a-z0-9]/gi, "_")}.doc`;
    a.click();
    URL.revokeObjectURL(url);
    addToExportHistory("Export DOCX");
    zt.success("Draft exported as Word DOC format");
  };
  const handleDownload = () => {
    const textToDownload = draftDisplayText || finalDraft;
    const blob = new Blob([textToDownload], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${(selectedType || "Legal_Draft").replace(/[^a-z0-9]/gi, "_")}_v${draftVersion}.txt`;
    a.click();
    URL.revokeObjectURL(url);
    addToExportHistory("Download TXT");
    zt.success("Draft downloaded");
  };
  const handleCopy = () => {
    const textToCopy = draftDisplayText || finalDraft;
    navigator.clipboard.writeText(textToCopy);
    addToExportHistory("Copy Text");
    zt.success("Draft copied to clipboard");
  };
  const handleShare = async () => {
    const textToShare = draftDisplayText || finalDraft;
    if (navigator.share) {
      try {
        await navigator.share({ title: selectedType || "Legal Draft", text: textToShare });
        addToExportHistory("Share Report");
      } catch (e) {
        handleCopy();
      }
    } else {
      handleCopy();
    }
  };
  const handleSave = async () => {
    const caseId = linkedCaseId || (currentCase == null ? void 0 : currentCase._id);
    if (!caseId) {
      zt.error("Please select or link a case first to save this draft");
      return;
    }
    const targetCase = allProjects.find((p) => p._id === caseId);
    if (!targetCase) {
      zt.error("Linked case not found");
      return;
    }
    const id = `DRAFT-${Math.random().toString(36).substring(2, 7).toUpperCase()}`;
    const now = /* @__PURE__ */ new Date();
    const newDraftItem = {
      id,
      type: selectedType || "Legal Draft",
      content: finalDraft,
      createdAt: now.toISOString(),
      mode: generationMode,
      formData,
      version: draftVersion,
      exportHistory,
      generationTimestamp: generationTimestamp || now.toLocaleString("en-IN"),
      lastModified: now.toISOString()
    };
    try {
      const existingDrafts = targetCase.drafts || [];
      const updatedDrafts = [newDraftItem, ...existingDrafts];
      const payload = {
        ...targetCase,
        drafts: updatedDrafts
      };
      const response = await apiService.updateProject(caseId, payload);
      if (onUpdateCase) onUpdateCase(response);
      setSavedNotice({ id, date: now.toLocaleDateString("en-IN"), time: now.toLocaleTimeString("en-IN") });
      addToExportHistory("Save Draft");
      zt.success("Draft saved to case!");
    } catch (e) {
      console.error("Failed to save draft", e);
      zt.error("Failed to save draft");
    }
  };
  const handleSaveToCase = async () => {
    if (!linkedCaseId) {
      zt.error("Link a case first to save draft to it");
      return;
    }
    try {
      const c = allProjects.find((p) => p._id === linkedCaseId);
      if (!c) return;
      const existingDrafts = c.drafts || [];
      const now = /* @__PURE__ */ new Date();
      const id = `DRAFT-${Math.random().toString(36).substring(2, 7).toUpperCase()}`;
      const newDraftItem = {
        id,
        type: selectedType,
        content: finalDraft,
        createdAt: now.toISOString(),
        mode: generationMode,
        formData,
        version: draftVersion,
        exportHistory,
        generationTimestamp: generationTimestamp || now.toLocaleString("en-IN"),
        lastModified: now.toISOString()
      };
      const payload = {
        ...c,
        drafts: [...existingDrafts, newDraftItem]
      };
      const response = await apiService.updateProject(linkedCaseId, payload);
      if (onUpdateCase) onUpdateCase(response);
      addToExportHistory("Save Draft to Case");
      zt.success("Draft saved to case!");
    } catch (e) {
      zt.error("Failed to save to case");
    }
  };
  const loadSavedDrafts = reactExports.useCallback(() => {
    setLoadingDrafts(true);
    try {
      const consolidated = [];
      allProjects.forEach((proj) => {
        if (Array.isArray(proj.drafts)) {
          proj.drafts.forEach((d) => {
            consolidated.push({
              id: d.id || `${proj._id}-${d.createdAt}`,
              title: d.type || d.title || "Legal Draft",
              content: d.content,
              mode: d.mode,
              formData: d.formData,
              linkedCaseId: proj._id,
              caseName: proj.name,
              date: d.lastModified || d.createdAt || proj.updatedAt || (/* @__PURE__ */ new Date()).toISOString(),
              version: d.version,
              exportHistory: d.exportHistory,
              generationTimestamp: d.generationTimestamp
            });
          });
        }
      });
      const localRaw = localStorage.getItem("@aisa_drafts");
      if (localRaw) {
        try {
          const localDrafts = JSON.parse(localRaw);
          if (Array.isArray(localDrafts) && localDrafts.length > 0) {
            if (currentCase) {
              const currentDrafts = currentCase.drafts || [];
              const draftsToMigrate = localDrafts.map((ld) => ({
                id: ld.id,
                type: ld.title,
                content: ld.content,
                createdAt: ld.date || (/* @__PURE__ */ new Date()).toISOString(),
                mode: ld.mode,
                formData: ld.formData,
                version: ld.version,
                exportHistory: ld.exportHistory,
                generationTimestamp: ld.generationTimestamp,
                lastModified: ld.date || (/* @__PURE__ */ new Date()).toISOString()
              }));
              const payload = {
                ...currentCase,
                drafts: [...currentDrafts, ...draftsToMigrate]
              };
              apiService.updateProject(currentCase._id, payload).then((res) => {
                if (onUpdateCase) onUpdateCase(res);
                localStorage.removeItem("@aisa_drafts");
              }).catch((err) => console.error("Failed to migrate local drafts to DB", err));
            } else {
              localDrafts.forEach((ld) => {
                if (!consolidated.some((c) => c.id === ld.id)) {
                  consolidated.push({
                    ...ld,
                    caseName: "Offline / Unlinked"
                  });
                }
              });
            }
          }
        } catch (e) {
          console.error("Failed to parse/migrate local drafts", e);
        }
      }
      consolidated.sort((a, b) => new Date(b.date) - new Date(a.date));
      setSavedDrafts(consolidated);
    } finally {
      setLoadingDrafts(false);
    }
  }, [allProjects, currentCase]);
  reactExports.useEffect(() => {
    if (step === "SAVED") loadSavedDrafts();
  }, [step, loadSavedDrafts]);
  reactExports.useEffect(() => {
    if (!currentCase || !currentCase._id) return;
    if (!selectedType || !finalDraft) return;
    const handler = setTimeout(async () => {
      try {
        const state = {
          selectedType,
          finalDraft,
          formData,
          generationMode,
          draftVersion,
          exportHistory,
          generationTimestamp,
          linkedCaseId
        };
        if (JSON.stringify(currentCase.activeDraftWork) === JSON.stringify(state)) {
          return;
        }
        const payload = {
          ...currentCase,
          activeDraftWork: state
        };
        const response = await apiService.updateProject(currentCase._id, payload);
        if (onUpdateCase) onUpdateCase(response);
      } catch (err) {
        console.error("Failed to auto-save active draft work to DB:", err);
      }
    }, 1e3);
    return () => {
      clearTimeout(handler);
    };
  }, [selectedType, finalDraft, formData, generationMode, draftVersion, exportHistory, generationTimestamp, linkedCaseId, currentCase == null ? void 0 : currentCase._id]);
  reactExports.useEffect(() => {
    if (currentCase) {
      if (currentCase.activeDraftWork && currentCase.activeDraftWork.selectedType) {
        const state = currentCase.activeDraftWork;
        setSelectedType(state.selectedType);
        setTemplate(getTemplate(state.selectedType));
        setFinalDraft(state.finalDraft);
        setFormData(state.formData || {});
        setGenerationMode(state.generationMode || "standard");
        setDraftVersion(state.draftVersion || 1);
        setExportHistory(state.exportHistory || []);
        setGenerationTimestamp(state.generationTimestamp || "");
        setLinkedCaseId(state.linkedCaseId || "");
        setStep("PREVIEW");
        return;
      }
      const raw = localStorage.getItem("@aisa_active_draft_work");
      if (raw) {
        try {
          const state = JSON.parse(raw);
          if (state.selectedType) {
            setSelectedType(state.selectedType);
            setTemplate(getTemplate(state.selectedType));
            setFinalDraft(state.finalDraft);
            setFormData(state.formData || {});
            setGenerationMode(state.generationMode || "standard");
            setDraftVersion(state.draftVersion || 1);
            setExportHistory(state.exportHistory || []);
            setGenerationTimestamp(state.generationTimestamp || "");
            setLinkedCaseId(state.linkedCaseId || "");
            setStep("PREVIEW");
            const payload = {
              ...currentCase,
              activeDraftWork: state
            };
            apiService.updateProject(currentCase._id, payload).then((res) => {
              if (onUpdateCase) onUpdateCase(res);
              localStorage.removeItem("@aisa_active_draft_work");
            }).catch((err) => console.error("Failed to migrate local active draft work to DB", err));
          }
        } catch (e) {
          console.warn("Failed to restore/migrate active draft work:", e);
        }
      }
    }
  }, [currentCase == null ? void 0 : currentCase._id]);
  const handleDeleteDraft = async (id) => {
    let foundCase = null;
    let updatedDrafts = [];
    for (const proj of allProjects) {
      if (proj.drafts && proj.drafts.some((d) => d.id === id || `${proj._id}-${d.createdAt}` === id)) {
        foundCase = proj;
        updatedDrafts = proj.drafts.filter((d) => d.id !== id && `${proj._id}-${d.createdAt}` !== id);
        break;
      }
    }
    if (!foundCase) {
      zt.error("Draft not found in any case");
      return;
    }
    try {
      const payload = {
        ...foundCase,
        drafts: updatedDrafts
      };
      const response = await apiService.updateProject(foundCase._id, payload);
      if (onUpdateCase) onUpdateCase(response);
      setSavedDrafts((prev) => prev.filter((d) => d.id !== id));
      zt.success("Draft deleted from case");
    } catch (e) {
      console.error("Failed to delete draft", e);
      zt.error("Failed to delete draft");
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 flex flex-col w-full h-full min-h-0 bg-slate-50 dark:bg-transparent overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between px-5 py-3.5 border-b border-slate-200 dark:border-white/5 bg-white/80 dark:bg-[#0B1020]/80 backdrop-blur-xl shrink-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: step === "SELECT" ? onBack : () => {
              if (step === "FORM") setStep("SELECT");
              else if (step === "PREVIEW") setStep("FORM");
              else setStep("SELECT");
            },
            className: "p-2 hover:bg-slate-100 dark:hover:bg-zinc-800 rounded-full transition-colors",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { size: 20, className: "text-slate-600 dark:text-slate-400" })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-base font-black text-slate-900 dark:text-white leading-none tracking-tight", children: step === "SELECT" ? "Drafting Suite" : step === "FORM" ? selectedType : step === "PREVIEW" ? "Document Preview" : "Saved Drafts" }),
            step === "FORM" && template && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] px-2 py-0.5 bg-indigo-100 dark:bg-indigo-950/30 text-indigo-600 dark:text-indigo-400 rounded-full font-black uppercase tracking-wider", children: template.category })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 mt-0.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] font-black text-green-500 uppercase tracking-widest", children: "AI ACTIVE" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
        step === "PREVIEW" && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: handlePrint, className: "p-2 hover:bg-slate-100 dark:hover:bg-zinc-800 rounded-lg", title: "Print/PDF", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Printer, { size: 16, className: "text-slate-500" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: handleCopy, className: "p-2 hover:bg-slate-100 dark:hover:bg-zinc-800 rounded-lg", title: "Copy", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Copy, { size: 16, className: "text-slate-500" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: handleShare, className: "p-2 hover:bg-slate-100 dark:hover:bg-zinc-800 rounded-lg", title: "Share", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Share2, { size: 16, className: "text-slate-500" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: handleDownload, className: "p-2 hover:bg-slate-100 dark:hover:bg-zinc-800 rounded-lg", title: "Download", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { size: 16, className: "text-slate-500" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: handleSave, className: "flex items-center gap-1.5 px-3 py-1.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-xs font-black uppercase tracking-wide", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Save, { size: 13 }),
            " Save"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: () => setStep("SAVED"),
            className: "flex items-center gap-1.5 px-3 py-1.5 bg-emerald-50 dark:bg-emerald-950/20 text-emerald-600 dark:text-emerald-400 border border-emerald-200/40 rounded-xl text-xs font-black uppercase tracking-wide",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Folder, { size: 13 }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline", children: "Saved" })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: () => setStep("SELECT"),
            className: "flex items-center gap-1.5 px-3 py-1.5 bg-indigo-50 dark:bg-indigo-950/20 text-indigo-600 dark:text-indigo-400 border border-indigo-200/40 rounded-xl text-xs font-black uppercase tracking-wide",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(PanelsTopLeft, { size: 13 }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline", children: "Templates" })
            ]
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 overflow-y-auto custom-scrollbar min-h-0", children: [
      step === "SELECT" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 py-6 space-y-5 w-full", children: [
        prefillBanner && prefillData && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 px-4 py-3 bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-950/20 dark:to-teal-950/10 border border-emerald-200 dark:border-emerald-900/30 rounded-2xl shadow-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-8 h-8 rounded-xl bg-emerald-500 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { size: 16, className: "text-white" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs font-black text-emerald-700 dark:text-emerald-400", children: [
              "Active Case Ready — ",
              prefillData.caseTitle || "Case data loaded"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-emerald-600/70 dark:text-emerald-500/60 font-medium mt-0.5", children: "Select any template — all matching fields will be auto-filled from your case" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setPrefillBanner(false), className: "p-1 hover:bg-emerald-100 dark:hover:bg-emerald-900/30 rounded-full text-emerald-500 shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 14 }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col sm:flex-row gap-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 flex items-center bg-white dark:bg-[#1A2540] border border-slate-200 dark:border-white/5 rounded-2xl px-4 py-3 shadow-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "text-slate-400 mr-3 shrink-0", size: 18 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "text",
              placeholder: "Search draft types (Bail, Divorce, NDA, RTI...)...",
              value: searchQuery,
              onChange: (e) => setSearchQuery(e.target.value),
              className: "w-full bg-transparent border-none p-0 focus:ring-0 text-sm font-bold text-slate-800 dark:text-white outline-none"
            }
          ),
          searchQuery && /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setSearchQuery(""), className: "p-1 hover:bg-slate-100 dark:hover:bg-zinc-800 rounded-full ml-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 14, className: "text-slate-400" }) })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 overflow-x-auto pb-1 no-scrollbar", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              onClick: () => setActiveCat("ALL"),
              className: `px-3 py-1.5 rounded-full text-[10px] font-black uppercase tracking-wider whitespace-nowrap transition-all shrink-0 ${activeCat === "ALL" ? "bg-indigo-600 text-white shadow-sm" : "bg-white dark:bg-[#1A2540] text-slate-500 hover:text-indigo-600 border border-slate-200 dark:border-white/5"}`,
              children: [
                "All (",
                Object.keys(DRAFT_TEMPLATES).length,
                ")"
              ]
            }
          ),
          ALL_CATEGORIES.map((cat) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              onClick: () => setActiveCat(cat.title),
              className: `flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] font-black uppercase tracking-wider whitespace-nowrap transition-all shrink-0 ${activeCat === cat.title ? "bg-indigo-600 text-white shadow-sm" : "bg-white dark:bg-[#1A2540] text-slate-500 hover:text-indigo-600 border border-slate-200 dark:border-white/5"}`,
              children: [
                CAT_ICONS[cat.title],
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: cat.title.replace(" LAW", "").replace(" & ", "/") })
              ]
            },
            cat.title
          ))
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 w-full pb-6", children: filteredCategories.map((cat) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: `bg-white dark:bg-[#1A2540] rounded-2xl shadow-sm border-l-4 ${CAT_COLORS[cat.title] || "border-slate-200"} overflow-hidden`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 px-4 py-3 border-b border-slate-100 dark:border-white/5", children: [
                CAT_ICONS[cat.title],
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-[10px] font-black tracking-widest text-slate-600 dark:text-slate-400 uppercase", children: cat.title }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-auto text-[9px] font-bold text-slate-400 dark:text-slate-600", children: cat.items.length })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-2 flex flex-col gap-1", children: cat.items.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  onClick: () => handleSelectType(item),
                  className: "flex items-center justify-between px-3 py-2.5 bg-slate-50 dark:bg-[#131C31] hover:bg-indigo-50 dark:hover:bg-indigo-950/20 hover:text-indigo-700 dark:hover:text-indigo-300 text-left rounded-xl transition-all group text-xs font-semibold text-slate-700 dark:text-slate-300",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "break-words pr-2 leading-snug", children: item }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { size: 13, className: "text-slate-300 dark:text-slate-600 group-hover:text-indigo-500 shrink-0 transition-colors" })
                  ]
                },
                item
              )) })
            ]
          },
          cat.title
        )) }),
        filteredCategories.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center justify-center py-20 text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { size: 40, className: "text-slate-300 dark:text-zinc-700 mb-3" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm font-black text-slate-400", children: [
            'No templates found for "',
            searchQuery,
            '"'
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => {
            setSearchQuery("");
            setActiveCat("ALL");
          }, className: "mt-3 text-xs text-indigo-600 font-bold underline", children: "Clear search" })
        ] })
      ] }),
      step === "FORM" && template && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl mx-auto px-4 sm:px-6 py-6 space-y-5 pb-10", children: [
        allProjects.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white dark:bg-[#1A2540] border border-slate-200 dark:border-white/5 rounded-2xl p-4 shadow-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-[9px] font-black uppercase tracking-widest text-indigo-600 dark:text-indigo-400 block mb-2", children: "🔗 Link to Case (Auto-Fill All Fields)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "select",
            {
              value: linkedCaseId,
              onChange: (e) => handleCaseSelect(e.target.value),
              className: "w-full bg-slate-50 dark:bg-black/20 border border-slate-200 dark:border-zinc-800 rounded-xl px-4 py-2.5 text-xs font-bold outline-none focus:ring-2 focus:ring-indigo-500/20 text-slate-800 dark:text-white",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "Manual Entry (No Auto-Fill)" }),
                allProjects.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: c._id, children: c.name }, c._id))
              ]
            }
          ),
          filledFields.size > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[10px] text-emerald-600 dark:text-emerald-400 font-bold mt-2 flex items-center gap-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { size: 11 }),
            " ",
            filledFields.size,
            " fields auto-filled"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white dark:bg-[#1A2540] border border-slate-200 dark:border-white/5 rounded-2xl p-5 shadow-sm space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 pb-3 border-b border-slate-100 dark:border-white/5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-2 bg-indigo-50 dark:bg-indigo-950/20 rounded-xl", children: CAT_ICONS[template.category] || /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { size: 15, className: "text-indigo-500" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-black text-slate-900 dark:text-white", children: selectedType }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[10px] text-slate-400 font-medium mt-0.5", children: [
                template.fields.filter((f) => f.required).length,
                " required fields • ",
                template.fields.length,
                " total (incl. Country)"
              ] })
            ] }),
            filledFields.size > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "ml-auto text-[9px] font-black px-2 py-0.5 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 rounded-full", children: [
              "✓ ",
              filledFields.size,
              " auto-filled"
            ] })
          ] }),
          template.fields.map((field, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex items-center gap-1.5 text-[10px] font-black uppercase tracking-widest text-slate-500 dark:text-slate-400", children: [
              field.label,
              field.required && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-red-500", children: "*" }),
              filledFields.has(field.key) && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-0.5 px-1.5 py-0.5 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 rounded text-[8px] font-bold normal-case tracking-normal", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { size: 8 }),
                " Auto Filled"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              FieldInput,
              {
                field,
                value: formData[field.key],
                onChange: (val) => {
                  setFormData((prev) => {
                    const next = { ...prev, [field.key]: val };
                    if (field.key === "country") {
                      next["state"] = "";
                      next["district"] = "";
                      next["policeStation"] = "";
                    } else if (field.key === "state") {
                      next["district"] = "";
                      next["policeStation"] = "";
                    } else if (field.key === "district") {
                      next["policeStation"] = "";
                    }
                    return next;
                  });
                  if (errors[field.key]) setErrors((prev) => {
                    const e = { ...prev };
                    delete e[field.key];
                    return e;
                  });
                },
                filled: filledFields.has(field.key),
                country: formData.country,
                state: formData.state,
                district: formData.district
              }
            ),
            errors[field.key] && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[10px] text-red-500 font-bold flex items-center gap-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { size: 10 }),
              " ",
              errors[field.key]
            ] })
          ] }, field.key))
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white dark:bg-[#1A2540] border border-slate-200 dark:border-white/5 rounded-2xl p-5 shadow-sm space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-[10px] font-black uppercase tracking-widest text-slate-500", children: "Select Generation Mode" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-3 gap-2", children: GENERATION_MODES.map((mode) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              onClick: () => setGenerationMode(mode.id),
              className: `flex flex-col items-start gap-1 p-3 rounded-xl border text-left transition-all ${generationMode === mode.id ? "border-indigo-500 bg-indigo-50 dark:bg-indigo-950/20" : "border-slate-200 dark:border-white/5 hover:border-indigo-300 dark:hover:border-indigo-700/50"}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-base", children: mode.icon }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-black text-slate-800 dark:text-white leading-tight", children: mode.label }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] text-slate-400 font-medium leading-tight", children: mode.description }),
                generationMode === mode.id && /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { size: 10, className: "text-indigo-600 mt-1" })
              ]
            },
            mode.id
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              onClick: () => handleGenerate(generationMode),
              className: "w-full py-4 bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 text-white rounded-2xl font-black text-sm uppercase tracking-wider hover:opacity-90 shadow-xl shadow-indigo-500/25 transition-all active:scale-[0.98] flex items-center justify-center gap-2",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { size: 18 }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                  "Generate ",
                  ((_a = GENERATION_MODES.find((m) => m.id === generationMode)) == null ? void 0 : _a.label) || "Draft"
                ] })
              ]
            }
          )
        ] })
      ] }),
      step === "GENERATING" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center justify-center h-full py-32 gap-6 max-w-md mx-auto text-center px-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-16 border-4 border-indigo-200 dark:border-indigo-900 rounded-full" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-16 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin absolute inset-0" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Gavel, { size: 20, className: "text-indigo-600" }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-black text-slate-900 dark:text-white", children: generationStatus }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-slate-400 font-medium", children: [
            "Generating court-ready ",
            selectedType
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center gap-1 mt-3", children: [0, 1, 2].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-2 h-2 rounded-full bg-indigo-600 animate-bounce", style: { animationDelay: `${i * 0.15}s` } }, i)) })
        ] })
      ] }),
      step === "PREVIEW" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col h-full min-h-0 max-w-5xl mx-auto w-full px-4 sm:px-6 py-4 gap-4 pb-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-2 bg-white dark:bg-[#1A2540] border border-slate-200 dark:border-white/5 rounded-2xl px-4 py-3 shadow-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              onClick: () => setIsEditing(!isEditing),
              className: `flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-black uppercase tracking-wide transition-all ${isEditing ? "bg-indigo-600 text-white" : "bg-slate-100 dark:bg-zinc-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200"}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(PenLine, { size: 13 }),
                " ",
                isEditing ? "Preview" : "Edit Draft"
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-1 ml-auto flex-wrap", children: GENERATION_MODES.map((mode) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              onClick: () => handleGenerate(mode.id),
              disabled: isGenerating,
              className: "flex items-center gap-1 px-2.5 py-1.5 bg-slate-100 dark:bg-zinc-800 hover:bg-indigo-50 dark:hover:bg-indigo-950/20 text-slate-600 dark:text-slate-300 hover:text-indigo-600 rounded-lg text-[10px] font-black uppercase tracking-wide transition-all disabled:opacity-50 whitespace-nowrap",
              title: mode.description,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: mode.icon }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline", children: mode.label })
              ]
            },
            mode.id
          )) })
        ] }),
        draftVersionHistory.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white dark:bg-[#1A2540] border border-slate-200 dark:border-white/5 rounded-xl px-4 py-2.5 shadow-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              onClick: () => setShowVersionHistory(!showVersionHistory),
              className: "flex items-center gap-2 text-xs font-black text-slate-600 dark:text-slate-400 uppercase tracking-wider",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(History, { size: 13 }),
                "Version History (",
                draftVersionHistory.length,
                ")",
                showVersionHistory ? /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronUp, { size: 13 }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { size: 13 })
              ]
            }
          ),
          showVersionHistory && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 flex gap-2 flex-wrap", children: draftVersionHistory.map((v, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              onClick: () => {
                setFinalDraft(v.content);
                setShowVersionHistory(false);
              },
              className: "px-3 py-1.5 bg-slate-50 dark:bg-zinc-800/50 hover:bg-indigo-50 dark:hover:bg-indigo-950/20 rounded-lg text-[10px] font-bold text-slate-600 dark:text-slate-400 hover:text-indigo-600",
              children: [
                "v",
                v.version,
                " · ",
                v.mode,
                " · ",
                v.timestamp
              ]
            },
            i
          )) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 bg-white dark:bg-[#121212] border border-slate-200 dark:border-zinc-800 rounded-2xl overflow-hidden shadow-xl flex flex-col min-h-[400px]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between px-5 py-3 bg-slate-50 dark:bg-zinc-900/50 border-b border-slate-200 dark:border-zinc-800 shrink-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { size: 15, className: "text-indigo-600" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-black text-slate-700 dark:text-slate-300 uppercase tracking-wider", children: selectedType }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[9px] px-2 py-0.5 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 rounded-full font-bold", children: [
                "v",
                draftVersion
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[9px] text-slate-400 font-medium", children: [
                finalDraft.length.toLocaleString(),
                " chars"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                LanguageToggle,
                {
                  lang: outputLang,
                  onChange: handleDraftLangChange,
                  isTranslating: isDraftTranslating
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                CopyOutputButton,
                {
                  text: draftDisplayText || finalDraft,
                  label: outputLang === "hi" ? "Draft Hindi mein copy karein" : "Copy draft"
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-x-4 gap-y-1.5 px-5 py-2.5 bg-slate-50/50 dark:bg-zinc-900/20 border-b border-slate-200/80 dark:border-zinc-800 text-[10px] text-slate-400 font-bold shrink-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
              "MODE: ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-indigo-600 dark:text-indigo-400 uppercase tracking-wider", children: ((_b = GENERATION_MODES.find((m) => m.id === generationMode)) == null ? void 0 : _b.label) || "Standard Draft" })
            ] }),
            generationTimestamp && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
              "GENERATED: ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-slate-600 dark:text-slate-300 uppercase tracking-wider", children: generationTimestamp })
            ] }),
            linkedCaseId && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
              "LINKED CASE: ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-violet-600 dark:text-violet-400 uppercase tracking-wider", children: ((_c = allProjects.find((p) => p._id === linkedCaseId)) == null ? void 0 : _c.name) || "Case" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 overflow-y-auto p-6 sm:p-8 custom-scrollbar", ref: previewRef, children: [
            isDraftTranslating && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 text-[10px] font-bold text-indigo-500 mb-3 animate-pulse", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-2.5 h-2.5 border-2 border-indigo-500 border-t-transparent rounded-full animate-spin" }),
              "अनुवाद हो रहा है..."
            ] }),
            isEditing ? /* @__PURE__ */ jsxRuntimeExports.jsx(
              "textarea",
              {
                value: finalDraft,
                onChange: (e) => setFinalDraft(e.target.value),
                className: "w-full h-full min-h-[500px] bg-transparent border-none text-slate-800 dark:text-slate-100 outline-none resize-none font-mono text-xs sm:text-sm leading-relaxed focus:ring-0"
              }
            ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `prose dark:prose-invert max-w-none font-serif leading-loose text-slate-800 dark:text-slate-200 text-sm sm:text-base whitespace-pre-wrap select-text transition-opacity duration-200 ${isDraftTranslating ? "opacity-50" : "opacity-100"}`, children: draftDisplayText || finalDraft })
          ] })
        ] }),
        exportHistory.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white dark:bg-[#1A2540] border border-slate-200 dark:border-white/5 rounded-2xl p-4 shadow-sm space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-[10px] font-black uppercase tracking-widest text-slate-400", children: "Export & Version History Log" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-h-[80px] overflow-y-auto custom-scrollbar text-[10px] font-bold text-slate-500 space-y-1", children: exportHistory.map((log, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: log })
          ] }, index)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 sm:grid-cols-6 gap-2 shrink-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: handleSave, className: "flex items-center justify-center gap-1.5 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-black text-xs uppercase tracking-wider transition-all shadow-md", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Save, { size: 14 }),
            " Save Draft"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: handleSaveToCase, className: "flex items-center justify-center gap-1.5 py-3 bg-violet-600 hover:bg-violet-700 text-white rounded-xl font-black text-xs uppercase tracking-wider transition-all shadow-md", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Folder, { size: 14 }),
            " Save to Case"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: handleExportPDF, className: "flex items-center justify-center gap-1.5 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-black text-xs uppercase tracking-wider transition-all shadow-md", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(FileDown, { size: 14 }),
            " Export PDF"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: handleExportDOCX, className: "flex items-center justify-center gap-1.5 py-3 bg-cyan-600 hover:bg-cyan-700 text-white rounded-xl font-black text-xs uppercase tracking-wider transition-all shadow-md", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(FileCheck, { size: 14 }),
            " Word DOCX"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: handleCopy, className: "flex items-center justify-center gap-1.5 py-3 bg-slate-600 hover:bg-slate-700 text-white rounded-xl font-black text-xs uppercase tracking-wider transition-all shadow-md", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Copy, { size: 14 }),
            " Copy Text"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: handleShare, className: "flex items-center justify-center gap-1.5 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-black text-xs uppercase tracking-wider transition-all shadow-md", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Share2, { size: 14 }),
            " Share Report"
          ] })
        ] })
      ] }),
      step === "SAVED" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl mx-auto px-4 sm:px-6 py-6 space-y-4 pb-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-black text-slate-900 dark:text-white tracking-tight", children: "Saved Drafts" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-slate-400 font-bold", children: [
            savedDrafts.length,
            " drafts"
          ] })
        ] }),
        loadingDrafts ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-8 h-8 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin" }) }) : savedDrafts.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center justify-center py-20 border-2 border-dashed border-slate-200 dark:border-zinc-800 rounded-3xl text-center bg-white dark:bg-zinc-900/30", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Folder, { size: 48, className: "text-slate-300 dark:text-zinc-700 mb-4" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-sm font-black text-slate-400 uppercase tracking-widest", children: "No Saved Drafts" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-slate-400 mt-1 font-medium", children: "Generate drafts and save them here" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setStep("SELECT"), className: "mt-4 px-4 py-2 bg-indigo-600 text-white rounded-xl text-xs font-black uppercase tracking-wider", children: "Browse Templates" })
        ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col gap-3", children: savedDrafts.map((draft) => {
          var _a2;
          return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-white dark:bg-[#1A2540] border border-slate-200 dark:border-white/5 rounded-2xl shadow-sm hover:shadow-md transition-all p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3 min-w-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-2.5 bg-indigo-50 dark:bg-indigo-950/20 rounded-xl shrink-0 mt-0.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { size: 18, className: "text-indigo-600 dark:text-indigo-400" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-sm font-black text-slate-900 dark:text-white truncate", children: draft.title }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-1", children: [
                  new Date(draft.date).toLocaleDateString("en-IN"),
                  " • ",
                  new Date(draft.date).toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[10px] text-slate-400 font-medium mt-1 truncate", children: [
                  (_a2 = draft.content) == null ? void 0 : _a2.substring(0, 80),
                  "..."
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 shrink-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  onClick: () => {
                    setFinalDraft(draft.content);
                    setSelectedType(draft.title);
                    setTemplate(getTemplate(draft.title));
                    if (draft.formData) setFormData(draft.formData);
                    if (draft.mode) setGenerationMode(draft.mode);
                    if (draft.version) setDraftVersion(draft.version);
                    if (draft.exportHistory) setExportHistory(draft.exportHistory);
                    if (draft.generationTimestamp) setGenerationTimestamp(draft.generationTimestamp);
                    else setGenerationTimestamp(new Date(draft.date).toLocaleString("en-IN"));
                    setStep("PREVIEW");
                  },
                  className: "px-3 py-1.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-[10px] font-black uppercase",
                  children: "Open"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  onClick: () => handleDeleteDraft(draft.id),
                  className: "p-1.5 hover:bg-red-50 dark:hover:bg-red-950/20 rounded-lg text-red-500",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 14 })
                }
              )
            ] })
          ] }) }, draft.id);
        }) })
      ] })
    ] }),
    savedNotice && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "fixed inset-0 z-[120000] flex items-center justify-center p-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-black/60 backdrop-blur-md", onClick: () => setSavedNotice(null) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-3xl p-6 max-w-sm w-full shadow-2xl flex flex-col items-center text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-14 h-14 bg-green-500 rounded-full flex items-center justify-center text-white mb-4 shadow-lg shadow-green-500/30", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { size: 28, strokeWidth: 3 }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-base font-black text-slate-900 dark:text-white", children: "Draft Saved!" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-slate-400 font-medium mt-1", children: "Your document is saved and available offline." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full mt-4 space-y-1.5 text-left bg-slate-50 dark:bg-zinc-800/50 p-3 rounded-xl text-xs", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-slate-400", children: "ID:" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold dark:text-white", children: savedNotice.id })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-slate-400", children: "Saved:" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-bold dark:text-white", children: [
              savedNotice.date,
              " • ",
              savedNotice.time
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 mt-4 w-full", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setSavedNotice(null), className: "flex-1 py-2.5 bg-slate-100 dark:bg-zinc-800 text-slate-700 dark:text-white rounded-xl text-xs font-black uppercase", children: "Close" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => {
            setSavedNotice(null);
            setStep("SAVED");
          }, className: "flex-1 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-black uppercase", children: "View All" })
        ] })
      ] })
    ] })
  ] });
};
export {
  DraftMaker as default
};
