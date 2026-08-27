export type Role = {
  slug: string;
  title: string;
  scope: string;
  cadence: string;
  gets: string[];
};

/**
 * Briefing scope follows responsibility, not job title alone. A person who owns
 * forty clients is briefed on the forty, not the three hundred they may view.
 * Owners and directors carry book wide escalation scope.
 */
export const ROLES: Role[] = [
  {
    slug: "owner",
    title: "Owner and principal",
    scope: "Whole book",
    cadence: "Morning brief, exception alerts, end of day",
    gets: [
      "Where the book is exposed and what moved overnight",
      "Approvals that only you can give, and the ones you are blocked from giving because you asked for them",
      "Covenant headroom with days to breach on the current trajectory",
      "The same brief on a phone, in Teams, without opening the platform",
    ],
  },
  {
    slug: "executive",
    title: "President and executive",
    scope: "Whole book or division",
    cadence: "Morning brief, midday movement, end of day",
    gets: [
      "Portfolio movement stated as change, not as a static aging bucket",
      "Concentration migration across clients under a single debtor name",
      "Yield, dilution and turn compared against the book's own history",
      "What the credit team escalated and what it is still holding",
    ],
  },
  {
    slug: "credit-officer",
    title: "Credit officer",
    scope: "Assigned clients and debtors",
    cadence: "Continuous, gated by materiality",
    gets: [
      "Every re underwrite triggered by a material event, with the run versioned",
      "Confidence and coverage reported separately, never collapsed into one score",
      "Limit utilisation on both the client and the debtor side",
      "Second officer approvals waiting on you, with the requester named",
    ],
  },
  {
    slug: "underwriter",
    title: "Underwriter",
    scope: "Pipeline and assigned files",
    cadence: "On event",
    gets: [
      "New files with the checks already run and the gaps named",
      "Which sources answered, which are unconfigured, and what that leaves unproven",
      "Prior decisions on the same debtor across the portfolio",
      "The evidence packet already assembled for the credit memo",
    ],
  },
  {
    slug: "operations",
    title: "Operations",
    scope: "Queues and exceptions",
    cadence: "Throughout the day",
    gets: [
      "Schedules held at a gate, with the specific gate and the reason",
      "Documents that failed extraction or matched a near duplicate",
      "Verification exceptions and the override authority each one needs",
      "What is blocking today's funding, ordered by dollars",
    ],
  },
  {
    slug: "account-executive",
    title: "Account executive",
    scope: "Assigned clients",
    cadence: "Morning brief, client events",
    gets: [
      "Client behaviour that changed before the client calls you about it",
      "Availability by client, and what would free more of it",
      "Onboarding files stalled and the exact document missing",
      "Disputes and chargebacks against your accounts",
    ],
  },
  {
    slug: "collector",
    title: "Collections",
    scope: "Assigned debtors",
    cadence: "Morning worklist, promise events",
    gets: [
      "A worklist ordered by exposure and promise history, not by age alone",
      "Cases that reopened themselves, stamped with the reason",
      "Promises that lapsed overnight and who made them",
      "Contact history and the last verified balance in one place",
    ],
  },
  {
    slug: "treasury",
    title: "Treasury",
    scope: "Cash and rails",
    cadence: "Morning brief, release windows",
    gets: [
      "What can move safely today and what is clear of every gate",
      "Payment files ready to send, by rail and by bank",
      "Bank account changes inside the human only hold window",
      "Net availability with days to zero on current burn",
    ],
  },
  {
    slug: "accounting",
    title: "Accounting",
    scope: "Ledger and close",
    cadence: "Daily, and at close",
    gets: [
      "Cash applied, proposed and unapplied, with the proposal source",
      "Remittances that arrived as email and became proposals, never silent postings",
      "Reserve movement, fee accrual and the entries behind each one",
      "Audit packets sealed and ready for the examiner window",
    ],
  },
];
