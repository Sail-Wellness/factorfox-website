/**
 * The page register.
 *
 * One row per indexable route, with the search intent it was built for and the
 * query it is written to answer. The sitemap is generated from this file and
 * `npm run verify:routes` fails the build if a row here has no route on disk,
 * or if a route on disk is missing from here.
 *
 * The site this replaced published a sitemap of seven URLs, six of which
 * returned 404. That cannot happen twice.
 */

export type Intent =
  | "product"
  | "category"
  | "integration"
  | "migration"
  | "comparison"
  | "informational"
  | "commercial"
  | "brand"
  | "conversion"
  | "legal";

export type PageEntry = {
  path: string;
  intent: Intent;
  /** The query this page is built to win. Empty for pages with no search job. */
  target: string;
  priority: number;
  changeFrequency: "daily" | "weekly" | "monthly" | "yearly";
  /** Excluded from the sitemap but still a real route. */
  noIndex?: boolean;
};

export const PAGES: PageEntry[] = [
  { path: "/", intent: "product", target: "factoring software", priority: 1.0, changeFrequency: "weekly" },

  /* platform */
  { path: "/platform", intent: "product", target: "factoring platform", priority: 0.9, changeFrequency: "monthly" },
  { path: "/platform/briefings", intent: "product", target: "role based operations briefing", priority: 0.9, changeFrequency: "monthly" },
  { path: "/platform/evidence", intent: "product", target: "explainable AI for lenders", priority: 0.9, changeFrequency: "monthly" },
  { path: "/platform/continuous-underwriting", intent: "product", target: "factoring underwriting software", priority: 0.9, changeFrequency: "monthly" },
  { path: "/platform/risk-monitoring", intent: "product", target: "debtor risk monitoring software", priority: 0.8, changeFrequency: "monthly" },
  { path: "/platform/covenant-monitoring", intent: "product", target: "covenant monitoring software", priority: 0.8, changeFrequency: "monthly" },
  { path: "/platform/borrowing-base", intent: "product", target: "borrowing base software", priority: 0.8, changeFrequency: "monthly" },
  { path: "/platform/document-intelligence", intent: "product", target: "invoice verification software", priority: 0.8, changeFrequency: "monthly" },
  { path: "/platform/fraud-detection", intent: "product", target: "factoring fraud detection", priority: 0.8, changeFrequency: "monthly" },
  { path: "/platform/collections", intent: "product", target: "factoring collections software", priority: 0.8, changeFrequency: "monthly" },
  { path: "/platform/client-onboarding", intent: "product", target: "client onboarding for factoring companies", priority: 0.7, changeFrequency: "monthly" },
  { path: "/platform/treasury", intent: "product", target: "factoring treasury software", priority: 0.7, changeFrequency: "monthly" },
  { path: "/platform/accounting", intent: "product", target: "factoring accounting software", priority: 0.7, changeFrequency: "monthly" },
  { path: "/platform/security", intent: "brand", target: "factoring software security", priority: 0.6, changeFrequency: "monthly" },
  { path: "/platform/pricing", intent: "commercial", target: "factoring software pricing", priority: 0.8, changeFrequency: "monthly" },

  /* solutions */
  { path: "/solutions", intent: "category", target: "specialty finance software", priority: 0.8, changeFrequency: "monthly" },
  { path: "/solutions/factoring", intent: "category", target: "invoice factoring software", priority: 0.95, changeFrequency: "monthly" },
  { path: "/solutions/asset-based-lending", intent: "category", target: "asset based lending software", priority: 0.95, changeFrequency: "monthly" },
  { path: "/solutions/purchase-order-funding", intent: "category", target: "purchase order funding software", priority: 0.9, changeFrequency: "monthly" },
  { path: "/solutions/reverse-factoring", intent: "category", target: "reverse factoring software", priority: 0.9, changeFrequency: "monthly" },
  { path: "/solutions/transportation", intent: "category", target: "transportation factoring software", priority: 0.9, changeFrequency: "monthly" },
  { path: "/solutions/healthcare", intent: "category", target: "medical factoring software", priority: 0.7, changeFrequency: "monthly" },
  { path: "/solutions/construction", intent: "category", target: "construction factoring software", priority: 0.7, changeFrequency: "monthly" },
  { path: "/solutions/staffing", intent: "category", target: "staffing factoring software", priority: 0.7, changeFrequency: "monthly" },
  { path: "/solutions/manufacturing", intent: "category", target: "manufacturing factoring software", priority: 0.7, changeFrequency: "monthly" },

  /* integrations */
  { path: "/integrations", intent: "integration", target: "factoring software integrations", priority: 0.85, changeFrequency: "monthly" },
  { path: "/partners", intent: "commercial", target: "factoring software partners", priority: 0.8, changeFrequency: "monthly" },
  { path: "/integrations/microsoft-teams", intent: "integration", target: "Microsoft Teams approvals for financial services", priority: 0.9, changeFrequency: "monthly" },
  { path: "/integrations/microsoft-365", intent: "integration", target: "Microsoft 365 lending integration", priority: 0.8, changeFrequency: "monthly" },
  { path: "/integrations/quickbooks", intent: "integration", target: "QuickBooks factoring integration", priority: 0.8, changeFrequency: "monthly" },
  { path: "/integrations/xero", intent: "integration", target: "Xero factoring integration", priority: 0.8, changeFrequency: "monthly" },
  { path: "/integrations/credit-and-risk", intent: "integration", target: "credit bureau integration for factoring", priority: 0.75, changeFrequency: "monthly" },
  { path: "/integrations/banking-and-payments", intent: "integration", target: "ACH NACHA file generation for factors", priority: 0.75, changeFrequency: "monthly" },
  { path: "/integrations/transportation", intent: "integration", target: "FMCSA integration for freight factoring", priority: 0.75, changeFrequency: "monthly" },

  /* migration and comparison */
  { path: "/migrate", intent: "migration", target: "factoring software migration", priority: 0.9, changeFrequency: "monthly" },
  { path: "/migrate/factorsoft", intent: "migration", target: "FactorSoft alternative", priority: 0.9, changeFrequency: "monthly" },
  { path: "/migrate/winfactor", intent: "migration", target: "WinFactor alternative", priority: 0.9, changeFrequency: "monthly" },
  { path: "/migrate/factorcloud", intent: "migration", target: "FactorCloud alternative", priority: 0.9, changeFrequency: "monthly" },
  { path: "/migrate/factorview", intent: "migration", target: "FactorView alternative", priority: 0.9, changeFrequency: "monthly" },
  { path: "/compare", intent: "comparison", target: "factoring software comparison", priority: 0.85, changeFrequency: "monthly" },
  { path: "/compare/how-to-choose", intent: "commercial", target: "how to choose factoring software", priority: 0.9, changeFrequency: "monthly" },

  /* resources */
  { path: "/resources", intent: "informational", target: "factoring operations writing", priority: 0.7, changeFrequency: "weekly" },
  { path: "/resources/glossary", intent: "informational", target: "factoring terms glossary", priority: 0.75, changeFrequency: "monthly" },

  /* company and conversion */
  { path: "/company", intent: "brand", target: "FactorFox company", priority: 0.6, changeFrequency: "monthly" },
  { path: "/demo", intent: "conversion", target: "", priority: 0.8, changeFrequency: "monthly" },

  /* legal */
  { path: "/legal/privacy", intent: "legal", target: "", priority: 0.3, changeFrequency: "yearly" },
  { path: "/legal/terms", intent: "legal", target: "", priority: 0.3, changeFrequency: "yearly" },
];

export const INDEXABLE = PAGES.filter((p) => !p.noIndex);
