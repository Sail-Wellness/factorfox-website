import type { Metadata } from "next";
import { CompetitorPage, type VendorFact } from "@/components/competitor-page";
import { pageMeta } from "@/lib/seo";

/* Sources checked September 24, 2026. Every row cites a public page. Re check before relying on it. */

export const metadata: Metadata = pageMeta({
  title: "Cadence alternative: FactorFox compared",
  description:
    "Comparing Cadence, the Jack Henry commercial finance platform, with FactorFox: finance types, ledger, AI, deployment and pricing, with every source cited.",
  path: "/compare/cadence-alternative",
  intent: "comparison",
  target: "Cadence factoring software alternative",
});

const FACTS: VendorFact[] = [
  { topic: "Vendor", stated: "Built by Bayside Business Solutions, Birmingham, Alabama, founded 1998. Acquired by Jack Henry & Associates on July 1, 2015.", source: "https://www.prnewswire.com/news-releases/jack-henry--associates-acquires-bayside-business-solutions-300107664.html", sourceLabel: "PR Newswire, July 1, 2015" },
  { topic: "How it was described", stated: "A commercial portfolio management platform supporting factoring through asset based loans, including the solution formerly branded FactorSoft.", source: "https://www.prnewswire.com/news-releases/jack-henry--associates-acquires-bayside-business-solutions-300107664.html", sourceLabel: "PR Newswire, July 1, 2015" },
  { topic: "Who it is sold to", stated: "Banks and commercial lenders, for factoring, invoice discounting, asset based lending and other commercial finance.", source: "https://www.jackhenry.com/what-we-offer/commercial-banking/commercial-finance", sourceLabel: "Jack Henry, commercial finance" },
  { topic: "Scale", stated: "The FactorSoft Web Portal release in May 2021 cited more than 175 lenders nationwide.", source: "https://ir.jackhenry.com/news-releases/news-release-details/jack-henry-launches-web-based-accounts-receivable-factoring-tool", sourceLabel: "Jack Henry investor relations, May 12, 2021" },
  { topic: "AI", stated: "Describes FactorSoft Document AI, which adds artificial intelligence to optical character recognition for invoice processing.", source: "https://www.jackhenry.com/fintalk/eliminate-invoice-processing-issues-with-document-ai", sourceLabel: "Jack Henry blog, January 30, 2024" },
  { topic: "General ledger", stated: "A built in general ledger toolset with trial balance and accounting reports, and export to accounting systems.", source: "https://discover.jackhenry.com/hubfs/FY21_Jack%20Henry%20Lending%20Files/Product%20collateral/JHLPB_FactorSoft.pdf", sourceLabel: "Jack Henry FactorSoft product brief" },
  { topic: "Pricing", stated: "Not published.", source: "https://www.jackhenry.com/what-we-offer/commercial-banking/commercial-finance", sourceLabel: "Jack Henry, commercial finance" },
];

const DIFFERENCES = [
  { title: "Briefings rather than reports", body: "FactorFox starts each person's day with a briefing written from what they are responsible for, rather than a set of reports to go and read." },
  { title: "Evidence behind every conclusion", body: "Every conclusion opens onto the records, the policy that applied and the reason it was reached." },
  { title: "Continuous Underwriting", body: "A client is re underwritten when something material happens, and only a named person can release money the platform has stopped." },
  { title: "Model agnostic AI", body: "The model doing the work is a configuration decision, so FactorFox can adopt a better model when one ships." },
  { title: "Approvals in Microsoft Teams", body: "Releases, overrides and exceptions can be approved from a Teams card, in controlled release today." },
  { title: "Built for funders of any size", body: "The same platform serves independent factors, asset based lenders and purchase order funders, not only banks." },
];

const FAQS = [
  {
    q: "Is Cadence the same product as FactorSoft?",
    a: "Jack Henry's 2015 acquisition announcement describes CADENCE as a commercial portfolio management platform that includes the solution formerly branded FactorSoft. Jack Henry's current commercial finance pages present FactorSoft. Confirm the current product name and roadmap with Jack Henry directly.",
  },
  {
    q: "Does FactorFox replace the general ledger as well?",
    a: "Yes. FactorFox runs on a true double entry general ledger, built in, and connects to QuickBooks Online and Xero where you keep company books elsewhere.",
  },
  {
    q: "Can FactorFox serve a bank?",
    a: "FactorFox is built for institutions that fund, including asset based lenders operating within bank covenants. Bring your control requirements to the demonstration and we will show you how each one is met, and say plainly where one is not.",
  },
  {
    q: "How do we move our history?",
    a: "The migration guides set out what moves, what has to be rebuilt and how the reconciliation is proved. Start with the FactorSoft guide if that is the product you run today.",
  },
];

const LEDE = (
    <>
      <p>{"CADENCE was built by Bayside Business Solutions of Birmingham, Alabama, which Jack Henry & Associates acquired in 2015. Jack Henry’s commercial finance pages today present the product line as FactorSoft, sold to banks and commercial lenders."}</p>
      <p>{"This page sets out what Jack Henry says about it in public, and FactorFox on the same topics, so you can compare like with like."}</p>
    </>
);

const BETTER_FIT = (
    <>
      <p>{"A bank that already runs Jack Henry for core processing may value keeping commercial finance with the same vendor, under one relationship and one due diligence file. Jack Henry has sold factoring software to banks for many years, and a long installed base is a real consideration for an institution that prizes continuity."}</p>
      <p>{"If what you want is a briefing led, AI native operating system with the ledger, the monitoring and the approvals in one place, compare the two on your own book."}</p>
    </>
);

export default function CadenceAlternativePage() {
  return (
    <CompetitorPage
      vendor="Cadence"
      path="/compare/cadence-alternative"
      checked="September 24, 2026"
      lede={LEDE}
      facts={FACTS}
      differences={DIFFERENCES}
      betterFit={BETTER_FIT}
      faqs={FAQS}
      related={[
        { href: "/migrate/factorsoft", label: "Moving off FactorSoft", note: "The data model, the decisions and the export list." },
        { href: "/platform/ai-native", label: "AI native factoring software", note: "What the platform does, in nine parts." },
        { href: "/compare/how-to-choose", label: "How to choose", note: "The committee, the tests and the contract clauses." },
        { href: "/platform/security", label: "Security and controls", note: "Where we are, stated plainly." },
      ]}
    />
  );
}
