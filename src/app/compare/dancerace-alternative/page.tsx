import type { Metadata } from "next";
import { CompetitorPage, type VendorFact } from "@/components/competitor-page";
import { pageMeta } from "@/lib/seo";

/* Sources checked September 24, 2026. Every row cites a public page. Re check before relying on it. */

export const metadata: Metadata = pageMeta({
  title: "Dancerace alternative: FactorFox compared",
  description:
    "Comparing Dancerace and FactorFox for invoice finance and asset based lending: products, lending types, deployment, AI and certifications, with sources cited.",
  path: "/compare/dancerace-alternative",
  intent: "comparison",
  target: "Dancerace alternative",
});

const FACTS: VendorFact[] = [
  { topic: "Vendor", stated: "Dancerace, headquartered in Bath, England, in business since 1992.", source: "https://dancerace.com/systems-and-services/c3-backoffice-control", sourceLabel: "dancerace.com, c3" },
  { topic: "Products", stated: "Dancerace OS: c3 Backoffice Control, e3 Client Access, f3 Client Onboarding and r3 RiskOps.", source: "https://dancerace.com/", sourceLabel: "dancerace.com" },
  { topic: "Lending types", stated: "Loans, invoice discounting, spot invoice finance, factoring, construction finance, recruitment finance, reverse factoring and asset based lending.", source: "https://dancerace.com/types-of-lending", sourceLabel: "dancerace.com, types of lending" },
  { topic: "Deployment", stated: "Full cloud hosting.", source: "https://dancerace.com/systems-and-services/c3-backoffice-control", sourceLabel: "dancerace.com, c3" },
  { topic: "Automation and AI", stated: "Describes intelligent automation for everyday tasks.", source: "https://dancerace.com/systems-and-services/c3-backoffice-control", sourceLabel: "dancerace.com, c3" },
  { topic: "Accounting data", stated: "Takes client data from online and offline accounting systems through open accounting, and states an API.", source: "https://dancerace.com/", sourceLabel: "dancerace.com" },
  { topic: "Certifications", stated: "Shows SOC 1, SOC 2, ISO and FSQS marks on its company page.", source: "https://dancerace.com/company", sourceLabel: "dancerace.com, company" },
  { topic: "Geography", stated: "Offices in Europe and Asia Pacific, with teams in the UK and Australia.", source: "https://dancerace.com/company", sourceLabel: "dancerace.com, company" },
];

const DIFFERENCES = [
  { title: "AI native, not automation added", body: "FactorFox describes itself as AI native, with evidence behind every conclusion and a model agnostic design." },
  { title: "Briefings rather than dashboards", body: "Each person starts the day with a briefing written from what they are responsible for." },
  { title: "A built in double entry ledger", body: "FactorFox runs on its own double entry general ledger, and connects to QuickBooks Online and Xero." },
  { title: "Purchase order finance", body: "Purchase order finance runs beside factoring and asset based lending on one record." },
  { title: "Continuous Underwriting", body: "A client is re underwritten when something material happens, not once a year." },
  { title: "Approvals in Microsoft Teams", body: "Approvals from a Teams card, in controlled release today." },
];

const FAQS = [
  {
    q: "Does FactorFox work outside the United States?",
    a: "Yes. Customers run FactorFox across North America, Latin America, Europe, Australia and South Africa.",
  },
  {
    q: "Is FactorFox certified?",
    a: "Not yet. A SOC 2 program is in progress, and no certification is claimed until a report exists.",
  },
  {
    q: "Does FactorFox read client accounting data?",
    a: "FactorFox connects to QuickBooks Online and Xero, both recorded as available on the integration register, alongside its own double entry ledger.",
  },
  {
    q: "Can we see FactorFox on our own book?",
    a: "Yes. Send a slice of open receivables and we will show you the first briefing it produces, and the evidence behind every line.",
  },
];

const LEDE = (
    <>
      <p>{"Dancerace is an invoice finance and asset based lending software company based in Bath, England, in business since 1992. Its platform, Dancerace OS, is sold to banks and lenders."}</p>
      <p>{"Here is what Dancerace says in public, and FactorFox on the same topics."}</p>
    </>
);

const BETTER_FIT = (
    <>
      <p>{"Dancerace shows SOC 1, SOC 2 and ISO marks today. FactorFox’s SOC 2 program is in progress and we claim no certification until a report exists, so a lender that needs a report in hand now should weigh that."}</p>
      <p>{"Dancerace also lists recruitment finance, spot invoice finance and construction finance, and has long standing teams in the UK and Australia. A UK or Australian bank with those books should put it on the list."}</p>
    </>
);

export default function DanceraceAlternativePage() {
  return (
    <CompetitorPage
      vendor="Dancerace"
      path="/compare/dancerace-alternative"
      checked="September 24, 2026"
      lede={LEDE}
      facts={FACTS}
      differences={DIFFERENCES}
      betterFit={BETTER_FIT}
      faqs={FAQS}
    />
  );
}
