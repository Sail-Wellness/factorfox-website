/**
 * The six questions are the real briefing contract from the platform
 * (BriefingEndpoints.cs, W181). The answers below come from a seeded
 * demonstration book, and every surface that renders them says so.
 */

export type Severity = "critical" | "attention" | "info" | "none";

export type BriefEvidence = { kind: string; label: string };
export type BriefAction = { label: string; permission: string };

export type BriefItem = {
  headline: string;
  amount?: string;
  severity: Severity;
  why: string;
  evidence: BriefEvidence[];
  actions: BriefAction[];
};

export type BriefQuestion = {
  id: string;
  question: string;
  severity: Severity;
  answer: string;
  items?: BriefItem[];
};

export const BRIEF_QUESTIONS: BriefQuestion[] = [
  {
    id: "risk",
    question: "Where is risk and why?",
    severity: "critical",
    answer: "Concentration in one debtor moved from 43.2% to 95.5% of the book overnight.",
    items: [
      {
        headline: "Bluewater Foods now holds 95.5% of book exposure",
        amount: "$435,750",
        severity: "critical",
        why: "Share of the book rose 52.3 points since the last observation. Paper past 60 days against this debtor rose 96.4 points in the same window.",
        evidence: [
          { kind: "snapshot", label: "Risk observation, prior night" },
          { kind: "aging", label: "Aging movement by bucket" },
          { kind: "invoice", label: "14 open invoices" },
          { kind: "policy", label: "Concentration limit, 40%" },
        ],
        actions: [
          { label: "Hold further purchases", permission: "credit.hold" },
          { label: "Open the concentration file", permission: "debtors.read" },
        ],
      },
      {
        headline: "INV-88104 is 29.7x this client's median invoice",
        amount: "$420,000",
        severity: "attention",
        why: "Sunline Packaging normally submits at a median of $14,125. Confidence is 45% because the baseline holds few invoices. Submitted outside business hours.",
        evidence: [
          { kind: "invoice", label: "INV-88104" },
          { kind: "history", label: "Client submission history" },
          { kind: "timestamp", label: "Submission time, 02:41" },
        ],
        actions: [{ label: "Send to verification", permission: "verify.request" }],
      },
    ],
  },
  {
    id: "decisions",
    question: "Which decisions require me now?",
    severity: "attention",
    answer: "Three approvals are waiting on you. One is blocked because you requested it.",
  },
  {
    id: "changes",
    question: "What changed since the last brief?",
    severity: "critical",
    answer: "Four material movements. Two concentration, one aging, one submission pattern.",
  },
  {
    id: "cash",
    question: "Where is cash and what can move safely?",
    severity: "info",
    answer: "Net availability holds. Two releases are clear of every gate and can go today.",
  },
  {
    id: "next",
    question: "What is likely to happen next?",
    severity: "attention",
    answer: "Two promises lapse this week. One debtor's days to pay is drifting past its own history.",
  },
  {
    id: "covenant",
    question: "Am I within covenant?",
    severity: "attention",
    answer: "Within every threshold. Concentration reaches its limit in eleven days on current trajectory.",
  },
];

export const SEVERITY_META: Record<Severity, { label: string; color: string; bg: string }> = {
  critical: { label: "Critical", color: "var(--color-crit-600)", bg: "var(--color-crit-100)" },
  attention: { label: "Attention", color: "var(--color-warn-600)", bg: "var(--color-warn-100)" },
  info: { label: "Clear", color: "var(--color-ok-600)", bg: "var(--color-ok-100)" },
  none: { label: "Nothing", color: "var(--color-ink-500)", bg: "var(--color-ink-100)" },
};
