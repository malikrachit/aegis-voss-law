import {
  Scale,
  Building2,
  ShieldCheck,
  BriefcaseBusiness,
  Landmark,
  Gavel,
  FileText,
  Globe2,
  Trophy,
  LockKeyhole,
  Banknote,
  Handshake,
  SearchCheck,
  ScrollText,
  Siren,
  Network,
  LandmarkIcon,
  Factory,
  Cpu,
  Plane,
  HeartHandshake,
  CircleDollarSign,
  Newspaper,
  ClipboardCheck,
  BookOpenCheck,
  Users,
  ShieldAlert,
  Home,
} from "lucide-react";

export const firm = {
  name: "Aegis & Voss",
  descriptor: "Litigation • Arbitration • Strategic Counsel",
  phone: "+91 90000 00000",
  email: "counsel@aegisvoss.law",
  address: "21 Lex Avenue, Nariman Point, Mumbai",
};

export const navLinks = [
  { label: "Practice", href: "/practice-areas" },
  { label: "Attorneys", href: "/attorneys" },
  { label: "Cases", href: "/cases" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
];

export const images = {
  court: "https://images.unsplash.com/photo-1589994965851-a8f479c573a9?auto=format&fit=crop&w=1800&q=85",
  lawDesk: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1800&q=85",
  boardroom: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1800&q=85",
  city: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1800&q=85",
  gavel: "https://images.unsplash.com/photo-1604156507049-780fdc9988c8?auto=format&fit=crop&w=1800&q=85",
  library: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1800&q=85",
};

export const stats = [
  { value: "24/7", label: "urgent matter desk" },
  { value: "38+", label: "cross-border jurisdictions" },
  { value: "12", label: "focused practice groups" },
  { value: "4", label: "matter command teams" },
];

export const tickerItems = [
  "Commercial Litigation",
  "International Arbitration",
  "Corporate Disputes",
  "White-Collar Defence",
  "Regulatory Risk",
  "Reputation Law",
  "Technology Disputes",
  "Strategic Resolution",
];

export const practiceAreas = [
  {
    icon: Gavel,
    title: "Commercial Litigation",
    tagline: "Trial-ready representation for business-critical disputes.",
    description:
      "Civil and commercial disputes involving contracts, recovery, injunctions, specific performance, tortious liability, shareholder conflict and enforcement proceedings.",
    points: ["Injunctions", "Recovery suits", "Contract disputes", "Civil trials"],
  },
  {
    icon: BriefcaseBusiness,
    title: "Corporate & Founder Disputes",
    tagline: "Control, equity, exits and governance.",
    description:
      "Boardroom conflict, founder separation, deadlock, minority oppression, dilution risk, fiduciary issues and promoter disputes requiring fast strategic control.",
    points: ["Shareholder actions", "Founder exits", "Board disputes", "Governance risk"],
  },
  {
    icon: Globe2,
    title: "Arbitration & Enforcement",
    tagline: "Structured advocacy across jurisdictions.",
    description:
      "Domestic and international arbitration, emergency relief, interim measures, award enforcement and cross-border dispute coordination.",
    points: ["Emergency arbitration", "Award enforcement", "Interim measures", "Cross-border claims"],
  },
  {
    icon: ShieldAlert,
    title: "White-Collar & Investigations",
    tagline: "Measured defence for sensitive allegations.",
    description:
      "Internal investigations, whistleblower complaints, fraud claims, anti-corruption risk, executive interviews, regulatory response and privilege-sensitive review.",
    points: ["Internal inquiries", "Fraud defence", "Privilege strategy", "Board reporting"],
  },
  {
    icon: Landmark,
    title: "Regulatory & Public Law",
    tagline: "Strategic response to statutory and government action.",
    description:
      "Licensing disputes, show-cause notices, policy submissions, administrative challenges, statutory appeals and sector-specific compliance strategy.",
    points: ["Show-cause notices", "Licensing", "Statutory appeals", "Policy advisory"],
  },
  {
    icon: LockKeyhole,
    title: "Reputation & Media Law",
    tagline: "Protection when legal risk becomes public.",
    description:
      "Defamation, takedown strategy, platform escalation, privacy protection, media notices, crisis advisory and reputation-sensitive negotiation.",
    points: ["Defamation", "Takedowns", "Media notices", "Privacy protection"],
  },
];

export const quickServices = [
  "Interim relief",
  "Injunction strategy",
  "Shareholder disputes",
  "Breach of contract",
  "Specific performance",
  "Emergency arbitration",
  "Fraud investigation",
  "Regulatory proceedings",
  "Director liability",
  "Defamation defence",
  "Data breach response",
  "Debt recovery",
  "Real estate disputes",
  "Employment litigation",
  "Mediation",
  "Enforcement proceedings",
];

export const process = [
  {
    step: "01",
    title: "Privileged Intake",
    text: "Parties, conflicts, documents, exposure, limitation issues, deadlines and immediate risks are mapped before any aggressive step is taken.",
  },
  {
    step: "02",
    title: "Evidence Command",
    text: "Chronologies, document maps, witness issues, contradictions and relief options are structured into one clear matter file.",
  },
  {
    step: "03",
    title: "Strategic Action",
    text: "The right path is chosen: notice, injunction, arbitration, mediation, investigation, regulatory response or settlement architecture.",
  },
  {
    step: "04",
    title: "Execution",
    text: "Drafting, hearings, negotiation windows, reporting and settlement terms are managed with disciplined senior oversight.",
  },
];

export const commandRoom = [
  { icon: SearchCheck, title: "Conflict Scan", text: "Parties, directors, subsidiaries and relationships reviewed before sensitive details are assessed." },
  { icon: ScrollText, title: "Document Hold", text: "Contracts, notices, board records, emails, financial documents and digital evidence preserved early." },
  { icon: Siren, title: "Urgent Relief", text: "Interim measures, injunctions, emergency notices and hearing strategy prepared under time pressure." },
  { icon: Network, title: "Stakeholder Map", text: "Court, counterparty, regulator, investor, media and board-level risks aligned into one response plan." },
];

export const cases = [
  {
    icon: Trophy,
    title: "Founder-Control Dispute",
    category: "Corporate Litigation",
    result: "Interim protection secured within 72 hours",
    description:
      "Urgent pleadings, evidence chronology and hearing strategy prepared to restrain dilution and preserve control during a board-level conflict.",
    tags: ["Injunction", "Founder dispute", "Board control"],
  },
  {
    icon: Scale,
    title: "Supply Chain Arbitration",
    category: "International Arbitration",
    result: "Multi-jurisdictional exposure contained",
    description:
      "Damages theory, document review and enforcement planning structured for a high-value manufacturing and distribution dispute.",
    tags: ["Arbitration", "Enforcement", "Commercial claims"],
  },
  {
    icon: Building2,
    title: "Board Investigation",
    category: "White-Collar Defence",
    result: "Investigation protocol and remediation roadmap delivered",
    description:
      "Privilege protocol, interview planning, evidence review and board reporting prepared for allegations involving procurement irregularities.",
    tags: ["Investigation", "Board advisory", "Fraud risk"],
  },
  {
    icon: FileText,
    title: "Media Crisis Response",
    category: "Reputation Law",
    result: "Takedown and correction strategy executed",
    description:
      "Legal notices, platform escalation and negotiated correction language coordinated during a reputation-sensitive news cycle.",
    tags: ["Defamation", "Media law", "Crisis"],
  },
  {
    icon: Banknote,
    title: "Debt Recovery Mandate",
    category: "Commercial Recovery",
    result: "Security-focused recovery plan activated",
    description:
      "Demand strategy, asset preservation, interim protection and settlement leverage combined to protect recovery prospects.",
    tags: ["Recovery", "Asset protection", "Settlement"],
  },
  {
    icon: LandmarkIcon,
    title: "Regulatory Show-Cause Defence",
    category: "Regulatory Proceedings",
    result: "Response aligned with business continuity",
    description:
      "Statutory response, factual record, compliance note and hearing brief prepared for a licensing-sensitive matter.",
    tags: ["Regulatory", "Licensing", "Compliance"],
  },
];

export const industries = [
  { icon: Home, title: "Real Estate", text: "Title risk, redevelopment conflict, leasing disputes, possession claims and injunction-led property strategy." },
  { icon: CircleDollarSign, title: "Finance & Capital", text: "Investor disputes, lending claims, fund-side conflict, recovery strategy and portfolio risk." },
  { icon: Cpu, title: "Technology", text: "Data breach response, SaaS contracts, platform liability, digital evidence and vendor disputes." },
  { icon: Factory, title: "Manufacturing", text: "Supplier defaults, warranty claims, distribution conflict, project delay and arbitration strategy." },
  { icon: HeartHandshake, title: "Private Clients", text: "Promoter disputes, succession-linked conflict, confidential settlement and reputation-sensitive matters." },
  { icon: Plane, title: "Global Trade", text: "Cross-border contracts, shipping disputes, enforcement planning and jurisdiction strategy." },
];

export const attorneys = [
  {
    name: "Arjun Voss",
    role: "Managing Partner",
    focus: "Trial Strategy & Commercial Litigation",
    level: "High-stakes disputes",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=900&q=85",
    bio:
      "Arjun leads commercial trials, injunctions and founder-control disputes where speed, sequencing and courtroom judgement are decisive.",
    credentials: ["Commercial trials", "Emergency injunctions", "Founder-control matters"],
  },
  {
    name: "Mira Aegis",
    role: "Senior Partner",
    focus: "White-Collar Defence & Investigations",
    level: "Sensitive matters",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=900&q=85",
    bio:
      "Mira advises boards, founders and executives through investigations, whistleblower complaints, fraud allegations and regulator-facing risk.",
    credentials: ["Board investigations", "Fraud response", "Privilege strategy"],
  },
  {
    name: "Kabir Sen",
    role: "Partner",
    focus: "Arbitration & Cross-Border Disputes",
    level: "Complex claims",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=900&q=85",
    bio:
      "Kabir handles domestic and international arbitration with focus on enforcement planning, damages theory and multi-jurisdictional coordination.",
    credentials: ["Emergency arbitration", "Award enforcement", "Cross-border disputes"],
  },
  {
    name: "Naina Mehra",
    role: "Counsel",
    focus: "Technology, Data & Platform Risk",
    level: "Digital disputes",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=900&q=85",
    bio:
      "Naina works on data breach response, SaaS disputes, platform liability, digital evidence and technology contract enforcement.",
    credentials: ["Data response", "SaaS disputes", "Digital evidence"],
  },
  {
    name: "Raghav Khanna",
    role: "Counsel",
    focus: "Real Estate & Infrastructure Disputes",
    level: "Project risk",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=900&q=85",
    bio:
      "Raghav advises on redevelopment conflict, land title issues, construction delay, EPC claims and infrastructure-linked litigation.",
    credentials: ["Title disputes", "Construction claims", "Project delay"],
  },
  {
    name: "Zoya Merchant",
    role: "Principal Associate",
    focus: "Employment, Policy & Internal Complaints",
    level: "Workplace risk",
    image: "https://images.unsplash.com/photo-1573496358961-3c82861ab8f4?auto=format&fit=crop&w=900&q=85",
    bio:
      "Zoya supports employers and leadership teams on internal complaints, executive separation, workplace investigations and policy advisory.",
    credentials: ["Internal complaints", "Executive separation", "Workplace policy"],
  },
];

export const insights = [
  {
    title: "Emergency Injunctions: What Businesses Must Prepare Before Moving Court",
    category: "Litigation Strategy",
    excerpt:
      "Urgent relief is built through clean facts, immediate evidence preservation, strong balance-of-convenience arguments and precise relief drafting.",
    read: "5 min read",
  },
  {
    title: "Founder Disputes: The Documents That Decide Control Battles",
    category: "Corporate Governance",
    excerpt:
      "Shareholding records, board minutes, reserved matters and communication trails often decide whether a founder dispute becomes manageable or destructive.",
    read: "7 min read",
  },
  {
    title: "The First 48 Hours of a White-Collar Crisis",
    category: "Investigations",
    excerpt:
      "Companies must control privilege, document access, internal communication, regulator interface and executive interviews before escalation.",
    read: "6 min read",
  },
  {
    title: "Arbitration Clauses: Small Drafting Errors, Expensive Consequences",
    category: "Arbitration",
    excerpt:
      "Seat, venue, governing law, institution, emergency relief and consolidation language can determine the strength of a dispute strategy.",
    read: "8 min read",
  },
  {
    title: "Defamation and Digital Takedowns in High-Velocity News Cycles",
    category: "Reputation Law",
    excerpt:
      "A response must be legally strong, reputationally intelligent and fast enough to prevent repetition, amplification and platform spread.",
    read: "4 min read",
  },
  {
    title: "Regulatory Show-Cause Notices: Building a Strong First Response",
    category: "Regulatory Risk",
    excerpt:
      "A strong response should combine factual clarity, statutory position, compliance evidence and a business-continuity approach.",
    read: "6 min read",
  },
];

export const testimonials = [
  {
    quote:
      "The team brought order to a complex dispute and made every strategic choice clear before we acted.",
    name: "General Counsel",
    company: "Technology Platform",
  },
  {
    quote:
      "Their evidence preparation changed the pressure dynamic before the first hearing.",
    name: "Founder",
    company: "Growth-stage company",
  },
  {
    quote:
      "Precise, discreet and commercially aware during a sensitive board investigation.",
    name: "Board Member",
    company: "Private Group",
  },
];

export const faqs = [
  {
    q: "When should a matter be escalated urgently?",
    a: "Immediate review is useful where there is asset movement, reputation risk, regulatory deadlines, shareholder action, data exposure, contract termination or possible injunction proceedings.",
  },
  {
    q: "How does the first consultation work?",
    a: "The first step is a confidential intake, conflict check, document overview, deadline mapping and strategic assessment of immediate options.",
  },
  {
    q: "Does the firm handle both small and large matters?",
    a: "Yes. Matters are staffed according to urgency, complexity and value so clients receive the right level of seniority and cost discipline.",
  },
  {
    q: "Can the firm support cross-border disputes?",
    a: "Yes. The team coordinates arbitration, enforcement planning, jurisdiction strategy and evidence review across jurisdictions where required.",
  },
];
