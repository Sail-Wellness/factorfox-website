import type { Metadata } from "next";
import { CompetitorPage, type VendorFact } from "@/components/competitor-page";
import { pageMeta } from "@/lib/seo";

/* Sources checked September 24, 2026. Every row cites a public page. Re check before relying on it. */

export const metadata: Metadata = pageMeta({
  title: "SOFT4Factoring alternative: FactorFox compared",
  description:
    "Comparing SOFT4Factoring and FactorFox: platform base, finance types, pricing, AI, accounting and certifications, using each vendor's own public statements.",
  path: "/compare/soft4factoring-alternative",
  intent: "comparison",
  target: "SOFT4Factoring alternative",
});

const FACTS: VendorFact[] = [
  { topic: "Vendor", stated: "Softera Baltic, UAB, trading as SOFT4, Kaunas, Lithuania.", source: "https://soft4factoring.com/privacy-policy", sourceLabel: "soft4factoring.com, privacy policy" },
  { topic: "Platform base", stated: "Built on Microsoft Dynamics 365 Business Central, in Essential and Premium editions.", source: "https://soft4factoring.com/", sourceLabel: "soft4factoring.com" },
  { topic: "Who it is sold to", stated: "Small and medium sized factors, with over 200 clients stated.", source: "https://soft4factoring.com/", sourceLabel: "soft4factoring.com" },
  { topic: "Finance types", stated: "Recourse and non recourse factoring, and reverse factoring.", source: "https://soft4factoring.com/reverse-factoring", sourceLabel: "soft4factoring.com, reverse factoring" },
  { topic: "Pricing", stated: "Published per user pricing in euros, with setup and support fees.", source: "https://soft4factoring.com/pricing", sourceLabel: "soft4factoring.com, pricing" },
  { topic: "Accounting", stated: "Financial accounting through Business Central, included in the license.", source: "https://soft4factoring.com/pricing", sourceLabel: "soft4factoring.com, pricing" },
  { topic: "Automation and AI", stated: "Describes automation of key factoring processes, with invoice OCR.", source: "https://soft4factoring.com/", sourceLabel: "soft4factoring.com" },
  { topic: "Certifications", stated: "States ISO 27001 certified.", source: "https://soft4factoring.com/about-us", sourceLabel: "soft4factoring.com, about us" },
];

const DIFFERENCES = [
  { title: "AI native, not automation added", body: "FactorFox describes itself as AI native, with evidence behind every conclusion and a model agnostic design." },
  { title: "Purpose built, not built on an ERP", body: "FactorFox is its own operating system for specialty finance, with its own double entry ledger, rather than an extension of a general accounting product." },
  { title: "Asset based lending and PO finance", body: "Borrowing base, covenant monitoring and purchase order finance on the same record as factoring." },
  { title: "Briefings rather than dashboards", body: "Each person starts the day with a briefing written from what they are responsible for." },
  { title: "Continuous Underwriting", body: "A client is re underwritten when something material happens, not once a year." },
  { title: "Approvals in Microsoft Teams", body: "Approvals from a Teams card, in controlled release today." },
];

const FAQS = [
  {
    q: "Does FactorFox run on Business Central?",
    a: "No. FactorFox has its own double entry general ledger, and connects to QuickBooks Online and Xero where company books are kept elsewhere.",
  },
  {
    q: "Does FactorFox publish pricing?",
    a: "No. It is quoted on a call, because negotiated schedules exist and a public number would misstate them.",
  },
  {
    q: "Is FactorFox certified?",
    a: "Not yet. A SOC 2 program is in progress, and no certification is claimed until a report exists.",
  },
  {
    q: "Does FactorFox support reverse factoring?",
    a: "Yes. Reverse factoring runs on the same platform as invoice factoring, asset based lending and purchase order finance.",
  },
];

const LEDE = (
    <>
      <p>{"SOFT4Factoring is factoring software from Softera Baltic, UAB of Kaunas, Lithuania, built on Microsoft Dynamics 365 Business Central and sold to small and medium sized factors."}</p>
      <p>{"Here is what SOFT4 says in public, and FactorFox on the same topics."}</p>
    </>
);

const BETTER_FIT = (
    <>
      <p>{"SOFT4Factoring publishes its pricing and states ISO 27001 certification. A factor that has already standardized on Microsoft Dynamics 365 Business Central for its company accounting, and wants a published per user price, has good reasons to look at it."}</p>
      <p>{"FactorFox’s SOC 2 program is in progress and we claim no certification until a report exists. If you want an AI native platform built specifically for specialty finance, with asset based lending and purchase order finance on the same record, compare the two on your own book."}</p>
    </>
);

export default function Soft4FactoringAlternativePage() {
  return (
    <CompetitorPage
      vendor="SOFT4Factoring"
      path="/compare/soft4factoring-alternative"
      checked="September 24, 2026"
      lede={LEDE}
      facts={FACTS}
      differences={DIFFERENCES}
      betterFit={BETTER_FIT}
      faqs={FAQS}
    />
  );
}
