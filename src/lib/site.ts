export const SITE = {
  name: "FactorFox",
  legalName: "FactorFox Software LLC",
  url: "https://factorfox.com",
  founded: "2002",
  tagline: "The intelligence and operating platform for specialty finance.",
  appUrl: "https://nimbus.factorfox.net/",
  bookingUrl: "https://outlook.office.com/book/FactorFoxBookingPage@factorfox.com/",
  contactEmail: "sales@factorfox.com",
  /**
   * Owner confirmed, 28 August 2026. Published deliberately: two of the four
   * competitors a buyer shortlists against publish a number, and the person
   * choosing the system that will hold their whole receivables book wants to
   * know a human answers. phoneHref is the E.164 form for the tel: link and
   * for the Organization graph; phone is what a reader sees.
   */
  phone: "(800) 616-3897",
  phoneHref: "+18006163897",
  linkedin: "https://www.linkedin.com/company/factorfox-software-llc",
  ifaListing: "https://www.factoring.org/vendor_details.asp?ID=1321",
  /** Owner confirmed, 28 August 2026. */
  locality: "Winter Garden",
  region: "FL",
  country: "US",
  /**
   * Profiles that identify the same legal entity elsewhere. These are the
   * sameAs edges in the Organization graph, and they are how a search engine
   * decides that the FactorFox on this domain is the FactorFox in an industry
   * directory rather than a different company with a similar name. Only add a
   * URL here after confirming it resolves to FactorFox Software LLC.
   */
  profiles: [
    "https://www.linkedin.com/company/factorfox-software-llc",
    "https://www.factoring.org/vendor_details.asp?ID=1321",
    "https://www.crunchbase.com/organization/factorfox",
  ],
} as const;

export type NavChild = { href: string; label: string; note?: string };
export type NavGroup = { label: string; href?: string; children?: NavChild[] };

export const NAV: NavGroup[] = [
  {
    label: "Platform",
    href: "/platform",
    children: [
      { href: "/platform/briefings", label: "Briefings", note: "Six questions, answered for your responsibility" },
      { href: "/platform/evidence", label: "Intelligence with evidence", note: "Every conclusion opens onto what proves it" },
      { href: "/platform/continuous-underwriting", label: "Continuous underwriting", note: "Re underwrite on every material event" },
      { href: "/platform/risk-monitoring", label: "Risk monitoring", note: "Debtor behaviour, concentration, dilution" },
      { href: "/platform/covenant-monitoring", label: "Covenant monitoring", note: "See pressure before it is a breach" },
      { href: "/platform/borrowing-base", label: "Borrowing base", note: "Availability, ineligibles, reserves" },
      { href: "/platform/document-intelligence", label: "Document intelligence", note: "Extraction, verification, near duplicates" },
      { href: "/platform/fraud-detection", label: "Fraud detection", note: "Behavioural combinations, not single flags" },
      { href: "/platform/collections", label: "Collections", note: "Prioritised by exposure and promise history" },
      { href: "/platform/client-onboarding", label: "Client onboarding", note: "Intake, checks, gates, first funding" },
      { href: "/platform/treasury", label: "Treasury", note: "Payment files, release control, reconciliation" },
      { href: "/platform/accounting", label: "Accounting", note: "Cash application, ledger, audit packets" },
    ],
  },
  {
    label: "Solutions",
    href: "/solutions",
    children: [
      { href: "/solutions/factoring", label: "Factoring", note: "Recourse, non recourse, non notification" },
      { href: "/solutions/asset-based-lending", label: "Asset based lending", note: "Borrowing base, collateral, field exams" },
      { href: "/solutions/purchase-order-funding", label: "Purchase order funding", note: "For funders, not for procurement teams" },
      { href: "/solutions/reverse-factoring", label: "Reverse factoring", note: "Payables finance and confirming" },
      { href: "/solutions/transportation", label: "Transportation", note: "Carriers, brokers, rate confirmations" },
      { href: "/solutions/healthcare", label: "Healthcare" },
      { href: "/solutions/construction", label: "Construction" },
      { href: "/solutions/staffing", label: "Staffing and payroll funding" },
      { href: "/solutions/manufacturing", label: "Manufacturing and distribution" },
    ],
  },
  {
    label: "Integrations",
    href: "/integrations",
    children: [
      { href: "/integrations/microsoft-teams", label: "Microsoft Teams", note: "Briefings, signals and approvals where you already work" },
      { href: "/integrations/microsoft-365", label: "Microsoft 365", note: "Outlook, Calendar, Bookings, Entra ID" },
      { href: "/integrations/quickbooks", label: "QuickBooks Online" },
      { href: "/integrations/xero", label: "Xero" },
      { href: "/integrations/credit-and-risk", label: "Credit and risk sources" },
      { href: "/integrations/banking-and-payments", label: "Banking and payments" },
      { href: "/integrations/transportation", label: "Transportation sources" },
    ],
  },
  // A plain link rather than a group. The header renders any entry with no
  // children as a direct link, which is what this needs: a partner arriving
  // from an email should reach the page in one click, not open a menu.
  {
    label: "Partners",
    href: "/partners",
  },
  {
    label: "Switch",
    href: "/migrate",
    children: [
      // The per system conversion guides are deliberately absent from this menu.
      // They exist for somebody arriving from a search on the incumbent's name,
      // and they are linked from /migrate, from each other and from the sitemap,
      // which is everything a crawler needs. Putting them here would hand four
      // competitors a permanent slot in our own navigation for the benefit of
      // nobody who is browsing. Findable, not featured.
      { href: "/migrate", label: "Migrating to FactorFox", note: "What moves, what breaks, how long it takes" },
      { href: "/compare", label: "How we compare", note: "Recording systems against decision systems" },
      { href: "/compare/how-to-choose", label: "How to choose", note: "Running the selection, start to signature" },
      { href: "/platform/pricing", label: "Pricing", note: "What factoring software actually costs" },
    ],
  },
  {
    label: "Resources",
    href: "/resources",
    children: [
      { href: "/resources", label: "Writing", note: "For operators, credit officers and owners" },
      { href: "/resources/glossary", label: "Operator glossary", note: "Ineligibles, dilution, reserve release, and the rest" },
      { href: "/platform/security", label: "Security and controls" },
      { href: "/company", label: "Company" },
    ],
  },
];

export const FOOTER_COLUMNS: { title: string; links: NavChild[] }[] = [
  {
    title: "Platform",
    links: [
      { href: "/platform", label: "Overview" },
      { href: "/platform/briefings", label: "Briefings" },
      { href: "/platform/evidence", label: "Intelligence with evidence" },
      { href: "/platform/continuous-underwriting", label: "Continuous underwriting" },
      { href: "/platform/covenant-monitoring", label: "Covenant monitoring" },
      { href: "/platform/borrowing-base", label: "Borrowing base" },
      { href: "/platform/fraud-detection", label: "Fraud detection" },
      { href: "/platform/security", label: "Security and controls" },
      { href: "/platform/pricing", label: "Pricing" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { href: "/solutions/factoring", label: "Factoring" },
      { href: "/solutions/asset-based-lending", label: "Asset based lending" },
      { href: "/solutions/purchase-order-funding", label: "Purchase order funding" },
      { href: "/solutions/reverse-factoring", label: "Reverse factoring" },
      { href: "/solutions/transportation", label: "Transportation" },
      { href: "/solutions/healthcare", label: "Healthcare" },
      { href: "/solutions/construction", label: "Construction" },
      { href: "/solutions/staffing", label: "Staffing" },
      { href: "/solutions/manufacturing", label: "Manufacturing" },
    ],
  },
  {
    title: "Integrations",
    links: [
      { href: "/integrations", label: "Directory" },
      { href: "/integrations/microsoft-teams", label: "Microsoft Teams" },
      { href: "/integrations/microsoft-365", label: "Microsoft 365" },
      { href: "/integrations/quickbooks", label: "QuickBooks Online" },
      { href: "/integrations/xero", label: "Xero" },
      { href: "/integrations/credit-and-risk", label: "Credit and risk" },
      { href: "/integrations/banking-and-payments", label: "Banking and payments" },
      { href: "/integrations/transportation", label: "Transportation" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/company", label: "About FactorFox" },
      { href: "/partners", label: "Partners" },
      { href: "/resources", label: "Writing" },
      { href: "/resources/glossary", label: "Glossary" },
      { href: "/migrate", label: "Migration" },
      { href: "/compare", label: "How we compare" },
      { href: "/demo", label: "Request a demonstration" },
      { href: "/legal/privacy", label: "Privacy" },
      { href: "/legal/terms", label: "Terms" },
    ],
  },
];
