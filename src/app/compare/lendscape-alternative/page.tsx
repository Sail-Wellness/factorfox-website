import type { Metadata } from "next";
import { CompetitorPage, type VendorFact } from "@/components/competitor-page";
import { pageMeta } from "@/lib/seo";

/* Sources checked September 24, 2026. Every row cites a public page. Re check before relying on it. */

export const metadata: Metadata = pageMeta({
  title: "Lendscape alternative: FactorFox compared",
  description:
    "Comparing Lendscape and FactorFox for factoring and asset based lending: finance types, deployment, AI, certifications and markets, with every source cited.",
  path: "/compare/lendscape-alternative",
  intent: "comparison",
  target: "Lendscape alternative",
});

const FACTS: VendorFact[] = [
  { topic: "Vendor", stated: "Lendscape Limited, London, formerly HPD Lendscape.", source: "https://www.lendscape.com/", sourceLabel: "lendscape.com" },
  { topic: "Who it is sold to", stated: "Over 130 banks and financial institutions, in over 40 markets.", source: "https://www.lendscape.com/", sourceLabel: "lendscape.com" },
  { topic: "Finance types", stated: "Factoring, international factoring, invoice discounting, invoice level finance, asset based lending, syndication, supply chain finance, construction finance and asset finance, among others.", source: "https://www.lendscape.com/", sourceLabel: "lendscape.com" },
  { topic: "WinFactor", stated: "Acquired WinFactor, the North American factoring software company, in October 2025.", source: "https://www.abladvisor.com/news/41680/lendscape-acquires-winfactor", sourceLabel: "ABL Advisor, October 14, 2025" },
  { topic: "Deployment", stated: "Hosted cloud. A bank client's platforms are described as fully hosted externally by the vendor.", source: "https://thepaypers.com/fintech/news/aib-migrates-its-receivables-finance-operations-to-lendscapes-cloud-hosted-platform", sourceLabel: "The Paypers, November 17, 2020" },
  { topic: "AI", stated: "Describes its asset finance product as AI ready, and in June 2026 launched a connection from lenders’ systems to AI assistants for equipment finance.", source: "https://equipmentfinancenews.com/news/lender-operations/lendscape-launches-ai-platform-to-automate-equipment-finance/", sourceLabel: "Equipment Finance News, June 12, 2026" },
  { topic: "Certifications", stated: "States ISO 27001, SOC 1, SOC 2 and FSQS.", source: "https://www.lendscape.com/", sourceLabel: "lendscape.com" },
  { topic: "Pricing", stated: "Not published.", source: "https://www.lendscape.com/", sourceLabel: "lendscape.com" },
];

const DIFFERENCES = [
  { title: "AI native, not AI ready", body: "FactorFox describes itself as AI native: the intelligence is part of the operating system, and every conclusion carries its evidence." },
  { title: "Briefings rather than dashboards", body: "Each person starts the day with a briefing written from what they are responsible for." },
  { title: "Purchase order finance on the same record", body: "Purchase order finance runs beside factoring and asset based lending on one ledger." },
  { title: "Capital Network", body: "Participation and syndication between FactorFox factors, booked on both ledgers from one asset." },
  { title: "Approvals in Microsoft Teams", body: "Releases, overrides and exceptions approved from a Teams card, in controlled release today." },
  { title: "Built for independent funders too", body: "The same platform serves independent factors and specialty lenders, not only banks." },
];

const FAQS = [
  {
    q: "Does Lendscape now own WinFactor?",
    a: "Yes. ABL Advisor reported in October 2025 that Lendscape acquired WinFactor. If you run WinFactor today, ask Lendscape about the roadmap for your product, and read our WinFactor guide for what a move involves.",
  },
  {
    q: "Is FactorFox certified?",
    a: "Not yet. A SOC 2 program is in progress. No certification is claimed anywhere on this site until a report exists.",
  },
  {
    q: "Does FactorFox do syndication?",
    a: "Yes. The Capital Network handles participation and syndication between FactorFox factors, with listing, disclosure, documents and settlement inside the platform.",
  },
  {
    q: "Can FactorFox run asset based lending?",
    a: "Yes. Borrowing base availability is computed from live collateral, and covenants are monitored continuously against what you record.",
  },
];

const LEDE = (
    <>
      <p>{"Lendscape is a London based receivables finance and asset based lending software company, formerly HPD Lendscape, which says it is trusted by over 130 banks and financial institutions. In October 2025 it acquired WinFactor."}</p>
      <p>{"Here is what Lendscape says in public, and FactorFox on the same topics."}</p>
    </>
);

const BETTER_FIT = (
    <>
      <p>{"Lendscape states ISO 27001, SOC 1 and SOC 2 today. FactorFox’s SOC 2 program is in progress and we claim no certification until a report exists, so an institution whose vendor policy requires a report in hand now should weigh that plainly."}</p>
      <p>{"Lendscape also lists supply chain finance, international factoring and asset finance, and states a presence in over 40 markets. If those are central to your book, they belong on your comparison list."}</p>
    </>
);

export default function LendscapeAlternativePage() {
  return (
    <CompetitorPage
      vendor="Lendscape"
      path="/compare/lendscape-alternative"
      checked="September 24, 2026"
      lede={LEDE}
      facts={FACTS}
      differences={DIFFERENCES}
      betterFit={BETTER_FIT}
      faqs={FAQS}
      related={[
        { href: "/migrate/winfactor", label: "Moving off WinFactor", note: "What moves, what breaks, how long it takes." },
        { href: "/platform/capital-network", label: "Capital Network", note: "Participation and syndication between factors." },
        { href: "/platform/ai-native", label: "AI native factoring software", note: "What the platform does, in nine parts." },
        { href: "/platform/security", label: "Security and controls", note: "Where we are, stated plainly." },
      ]}
    />
  );
}
