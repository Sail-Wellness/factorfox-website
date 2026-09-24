import type { Metadata } from "next";
import { CompetitorPage, type VendorFact } from "@/components/competitor-page";
import { pageMeta } from "@/lib/seo";

/* Sources checked September 24, 2026. Every row cites a public page. Re check before relying on it. */

export const metadata: Metadata = pageMeta({
  title: "XEN alternative: FactorFox compared",
  description:
    "Comparing XEN and FactorFox for factoring software: origination, servicing, pricing, AI, accounting and integrations, from each vendor's public statements.",
  path: "/compare/xen-alternative",
  intent: "comparison",
  target: "XEN factoring software alternative",
});

const FACTS: VendorFact[] = [
  { topic: "Vendor", stated: "Xen Inc., 600 Madison Avenue, New York.", source: "https://www.xenplatforms.com/", sourceLabel: "xenplatforms.com" },
  { topic: "Who it is sold to", stated: "Factors and commercial lenders, for origination, underwriting and servicing.", source: "https://www.xenplatforms.com/pricing", sourceLabel: "xenplatforms.com, pricing" },
  { topic: "Pricing model", stated: "A free tier and a Pro tier, with self sign up.", source: "https://www.xenplatforms.com/pricing", sourceLabel: "xenplatforms.com, pricing" },
  { topic: "AI", stated: "Describes AI powered analysis, including document data extraction.", source: "https://www.xenplatforms.com/", sourceLabel: "xenplatforms.com" },
  { topic: "White labeling", stated: "White labeled, with unlimited users.", source: "https://www.xenplatforms.com/", sourceLabel: "xenplatforms.com" },
  { topic: "Integrations", stated: "Names Plaid, Ocrolus, Alloy, Creditsafe, TransUnion, Salesforce, Dropbox Sign and QuickBooks among its partners.", source: "https://www.xenplatforms.com/", sourceLabel: "xenplatforms.com" },
  { topic: "Recent customer news", stated: "PRN Funding selected XEN as its end to end factoring platform.", source: "https://www.sfnet.com/home/industry-data-publications/the-secured-lender/tsl-express-daily-articles-news/tsl-express-daily-articles-news/2026/01/27/prn-funding-selects-xen-as-its-end-to-end-factoring-software-platform", sourceLabel: "SFNet, January 27, 2026" },
];

const DIFFERENCES = [
  { title: "AI native, with evidence", body: "FactorFox describes itself as AI native: every conclusion opens onto the records and the policy that applied." },
  { title: "A built in double entry ledger", body: "FactorFox runs on its own double entry general ledger, carrying the business since 2002." },
  { title: "Asset based lending and PO finance", body: "Borrowing base, covenant monitoring and purchase order finance on the same record as factoring." },
  { title: "Briefings rather than dashboards", body: "Each person starts the day with a briefing written from what they are responsible for." },
  { title: "Capital Network", body: "Participation and syndication between FactorFox factors, inside the ledger." },
  { title: "Over twenty years in factoring", body: "FactorFox launched in 2002 as the first cloud platform built specifically for factoring companies." },
];

const FAQS = [
  {
    q: "Does FactorFox have a free tier?",
    a: "No. FactorFox pricing is quoted on a call, because negotiated schedules exist and a public number would misstate them.",
  },
  {
    q: "Does FactorFox offer white labeling?",
    a: "Yes. The white label client portal puts your brand on the portal and app your clients use, set up from your website address.",
  },
  {
    q: "Does FactorFox connect to QuickBooks?",
    a: "Yes. QuickBooks Online and Xero are both recorded as available on the integration register.",
  },
  {
    q: "Can FactorFox handle onboarding and underwriting?",
    a: "Yes. Client onboarding and Continuous Underwriting are part of the platform, with re underwriting on every material event.",
  },
];

const LEDE = (
    <>
      <p>{"XEN is factoring and lending software from Xen Inc. of New York, covering origination, underwriting and servicing, with a free tier and a Pro tier."}</p>
      <p>{"Here is what XEN says in public, and FactorFox on the same topics."}</p>
    </>
);

const BETTER_FIT = (
    <>
      <p>{"XEN publishes a free tier with self sign up. FactorFox does not publish pricing and starts with a demonstration, so a new or very small factor that wants to try software on its own that afternoon may prefer XEN’s approach."}</p>
      <p>{"If you need asset based lending, purchase order finance, a built in ledger or covenant monitoring on the same record, compare the two on your own book."}</p>
    </>
);

export default function XenAlternativePage() {
  return (
    <CompetitorPage
      vendor="XEN"
      path="/compare/xen-alternative"
      checked="September 24, 2026"
      lede={LEDE}
      facts={FACTS}
      differences={DIFFERENCES}
      betterFit={BETTER_FIT}
      faqs={FAQS}
    />
  );
}
