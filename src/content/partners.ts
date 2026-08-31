/**
 * PARTNER REGISTER (public).
 *
 * Two different claims live in this file and they are kept apart on purpose.
 *
 *   relationship  A fact about two companies. Owner confirmed, 28 August 2026.
 *                 This is ours to assert.
 *
 *   connection    A fact about software. It is either built and evidenced or it
 *                 is not, and it takes its wording from the integration register
 *                 in ./integrations.ts, never from this file. Where the register
 *                 holds no row, the honest answer is that the connection is not
 *                 built yet, and that is what appears on the page.
 *
 * Every factual statement about a partner company below was taken from that
 * company's own website or from dated trade coverage, and the source is on the
 * row. Nothing here is inferred. Where a company does not publish something,
 * the field says so rather than carrying an estimate. Several of these partners
 * publish no founding year and no headcount at all, which is a finding rather
 * than a gap to fill.
 */

import { INTEGRATIONS } from "./integrations";

export type PartnerRole =
  | "credit"
  | "collateral"
  | "verification"
  | "payments"
  | "origination"
  | "compliance"
  | "distribution"
  | "carrier";

export type Partner = {
  slug: string;
  name: string;
  /** The name a reader may already know them by, where it differs. */
  alsoKnownAs?: string;
  role: PartnerRole;
  /** Search result title, 48 characters or fewer. */
  metaTitle: string;
  /** Search result description, 140 to 158 characters. */
  metaDescription: string;
  /** One line for the index card. */
  summary: string;
  /** What the company actually sells, in plain language, from their own site. */
  whatTheyDo: string[];
  /** Why a factoring operation should care. Written for the lender. */
  whyItMatters: string[];
  /** What would move between the two systems, and in which direction. */
  whatWouldFlow: string[];
  /**
   * The name this partner carries in the integration register, where it has a
   * row. The status word on the spotlight page is read from that row rather
   * than typed here, so this file cannot describe a connection the register
   * does not hold. Left unset means no row exists, which is itself the answer.
   */
  registerName?: string;
  /** Stated plainly, including what is not built. */
  connectionStatus: string;
  /** Facts we could not establish from public material. Published deliberately. */
  notEstablished: string;
  /** Where the facts came from. */
  sources: { label: string; href: string }[];
  linkedin: string;
};

export const ROLE_LABEL: Record<PartnerRole, string> = {
  credit: "Debtor credit",
  collateral: "Liens and collateral",
  verification: "Load and delivery verification",
  payments: "Carrier payments and fuel",
  origination: "Origination and onboarding",
  compliance: "Tax and compliance risk",
  distribution: "Freight distribution",
  carrier: "The carrier's own screen",
};

export const PARTNERS: Partner[] = [
  {
    slug: "creditsafe",
    metaTitle: "Creditsafe: the debtor credit question",
    metaDescription:
      "Business credit reports, recommended limits and monitoring alerts on the debtor who owes the invoice, and what that changes for a factoring operation.",
    name: "Creditsafe",
    role: "credit",
    summary:
      "Business credit reports, recommended limits and monitoring alerts on the debtor who owes the invoice.",
    whatTheyDo: [
      "Creditsafe sells business credit reports and company data by subscription and by API. A customer looks up a company and receives a credit score, a recommended credit limit, trade payment history and financials, and can register that company for monitoring alerts.",
      "It also sells anti money laundering and know your customer screening, which is the other place a funding business needs an outside opinion.",
      "Founded in Oslo in 1997, with a United States operation established in Allentown, Pennsylvania in 2012. Their own site states 27 offices across 14 countries and over 1000 staff, which makes them the most established company in this group by a wide margin.",
    ],
    whyItMatters: [
      "This addresses the single most central question in factoring. When you buy a receivable you are taking credit risk on the debtor, not on the client who sold it to you. A debtor score and a recommended limit are the core underwriting input, and everything downstream of the purchase decision assumes somebody formed a view on that obligor.",
      "Monitoring matters as much as the initial check. A debtor that deteriorates three months after you funded is a portfolio problem, not an underwriting one, and it only surfaces if something is watching.",
      "Their Bank Match product verifies bank account details for companies and individuals. On a freight book that is a fraud control rather than an administrative convenience, because payment redirection is a live attack in this industry.",
    ],
    whatWouldFlow: [
      "Outbound from the platform: a debtor name, identifier or registration number.",
      "Inbound: score, recommended limit, financials and trade payment behaviour, plus registration of that debtor for change alerts.",
      "Creditsafe publishes a full public API catalogue covering company search, credit reports, global monitoring, know your customer screening and bank match. Of every company on this page, they and Ficoso have the strongest published developer documentation.",
    ],
    registerName: "Creditsafe",
    connectionStatus:
      "Recorded in the integration register as contract required. The rail is built and it answers not configured until you hold your own contract and keys with Creditsafe. That is the honest description and it is deliberately not called available.",
    notEstablished:
      "Ownership and parent entity are not disclosed on the pages we read. Their database figures, such as the number of business reports held, are their own marketing claims rather than audited numbers, so we do not repeat them.",
    sources: [
      { label: "Creditsafe, our story", href: "https://www.creditsafe.com/us/en/more/about/our-story.html" },
      { label: "Creditsafe Connect API catalogue", href: "https://doc.creditsafe.com/connect-apis-catalog" },
    ],
    linkedin: "https://www.linkedin.com/company/creditsafe/",
  },
  {
    slug: "ficoso",
    metaTitle: "Ficoso: liens, UCC search and filing",
    metaDescription:
      "Nationwide UCC search, filing and monitoring keeps a security interest perfected. What Ficoso does, why it is existential for a factor, and what moves.",
    name: "Ficoso",
    alsoKnownAs: "First Corporate Solutions",
    role: "collateral",
    summary:
      "Nationwide UCC search, filing and monitoring. The service that keeps a security interest perfected.",
    whatTheyDo: [
      "Ficoso is a UCC and public records service bureau. Lenders search for existing liens on a prospective client, file their own UCC financing statements in any United States jurisdiction, and monitor a portfolio for new liens, tax liens, litigation and bankruptcy filings.",
      "Founded in 1987 as Bay Area Courthouse Services, renamed Pacific Corporate and Title Services in 1993 and First Corporate Solutions in 2005. Samuel Hon succeeded founder David Silverburg as chief executive in 2019.",
      "One thing worth knowing, because getting it backwards is the easiest mistake to make here: Ficoso is a 2026 rebrand of a thirty nine year old company, not a new business. Older material, including partner announcements from 2022, uses the First Corporate Solutions name.",
    ],
    whyItMatters: [
      "For a factor this is existential rather than administrative. You file a UCC financing statement to perfect your security interest in the receivables you buy, and you search first to confirm no prior lienholder has a superior claim to the same receivables. Getting that wrong does not cost you efficiency. It costs you the collateral.",
      "Monitoring covers the case nobody plans for, which is a competing lien filed after you funded.",
      "A search also surfaces double factoring, because a client already assigned to somebody else shows up as an existing filing. That is a fraud control that happens to fall out of a compliance process.",
      "They state they have been a preferred ally of the International Factoring Association for over fifteen years, which is the same association FactorFox holds designations with.",
    ],
    whatWouldFlow: [
      "Outbound: a client or debtor name for search, then a filing instruction on approval.",
      "Inbound: lien search results, filing confirmations, and monitoring alerts on UCC activity, business entity changes, bankruptcy and state court filings.",
      "They publish JSON REST APIs and a free sandbox with static real world California data. Their authentication model uses two credential sets, one identifying the integrating system and one for the billable entity, which is the shape a platform vendor needs rather than the shape a single lender needs.",
    ],
    registerName: "Ficoso",
    connectionStatus:
      "Recorded in the integration register as available. It works in the product today.",
    notEstablished: "Employee count, ownership and revenue are not published.",
    sources: [
      { label: "Ficoso, about", href: "https://ficoso.com/about/" },
      { label: "Ficoso for factoring", href: "https://ficoso.com/factoring/" },
      { label: "Ficoso developer resources", href: "https://ficoso.com/developer-resources/" },
    ],
    linkedin: "https://www.linkedin.com/company/first-corporate-solutions-ficoso/",
  },
  {
    slug: "taxrock",
    metaTitle: "TaxRock: watching a client's IRS account",
    metaDescription:
      "A federal tax lien can prime your position. TaxRock monitors client IRS account activity continuously, and the useful signal arrives before the filing.",
    name: "TaxRock",
    role: "compliance",
    summary:
      "Continuous monitoring of a client's IRS account activity, because a federal tax lien can prime your position.",
    whatTheyDo: [
      "TaxRock automates the monitoring of Internal Revenue Service account activity across a portfolio of taxpayers, replacing the manual transcript pull that most firms do periodically or not at all. It sells to tax professionals, lenders, factors and tax resolution firms, priced per monitored taxpayer.",
      "The current platform, described by the company as TaxRock 2.0, launched on 11 February 2026. Trade coverage refers to a prior generation of the platform, so the business predates that relaunch by an undisclosed period.",
      "Founded and led by Ron Jost. Based in Carlsbad, California.",
    ],
    whyItMatters: [
      "This is the only partner in the group addressing tax exposure, and it works on the client rather than the debtor, which makes it easy to misread. It is not debtor credit and it is not a UCC search. It watches your own client for the kind of Internal Revenue Service exposure that can end up in front of your security interest.",
      "A federal tax lien can prime a factor's position. By the time one is filed the useful window has usually closed, which is why their own framing is that exposure rarely starts with a lien.",
      "The specific signal worth understanding is missed federal payroll deposits. When the expected deposits stop appearing, something has gone wrong in a business well before it shows up in an aging report or a covenant test.",
    ],
    whatWouldFlow: [
      "Inbound to the platform: monitoring status, change signals and prioritised risk flags identifying which clients changed and why they were flagged.",
      "Outbound: the taxpayer roster and, critically, the taxpayer authorisation without which no transcript can be pulled. That authorisation is a real operational step rather than a configuration detail.",
      "They state they run an integration partner track and offer an API. It is worth noting plainly that no public API documentation exists at the time of writing, and that two pages linked from their own navigation return an error.",
    ],
    registerName: "TaxRock",
    connectionStatus:
      "Recorded in the integration register as available. It works in the product today.",
    notEstablished:
      "Founding year, headcount and funding are not published. A regional business publication headline implies a corporate relationship with an entity called Rockwater Associates, but the article is behind a paywall and we did not read it, so we do not repeat it.",
    sources: [
      { label: "TaxRock for factors", href: "https://taxrock.com/solutions/factors" },
      { label: "TaxRock partnerships", href: "https://www.taxrock.com/partnerships" },
    ],
    linkedin: "https://www.linkedin.com/company/taxrock/",
  },
  {
    slug: "decipher-credit",
    metaTitle: "Decipher Credit: origination and onboarding",
    metaDescription:
      "Origination software for commercial lenders with a product built for freight factoring. What Decipher Credit does, and where it sits next to a platform.",
    name: "Decipher Credit",
    alsoKnownAs: "Decipher Credit Solutions",
    role: "origination",
    summary:
      "Origination and onboarding software for commercial lenders, with a product built for freight factoring.",
    whatTheyDo: [
      "Decipher sells cloud software that runs a commercial lender's origination process end to end: application intake, underwriting, document generation with electronic signature, workflow and post close monitoring. Customers are commercial lenders, including asset based lenders and factors.",
      "They publish a product built specifically for this industry, described on their own site as designed exclusively for the freight factoring industry. Its documented capabilities include identity capture, motor carrier and department of transportation number verification, automated background search and, on higher tiers, automatic UCC filing.",
      "Founded in 2016, based in Bethesda, Maryland, led by chief executive Raul Velarde.",
    ],
    whyItMatters: [
      "Carrier onboarding is where a freight book accumulates most of its future problems, and it is the stage most often run on a spreadsheet and a folder of scanned documents.",
      "Motor carrier and department of transportation verification at intake is a trucking specific control. It establishes that the carrier in front of you holds the operating authority they claim, which is a different question from whether they are creditworthy.",
      "Their own published integration list already includes Creditsafe and First Corporate Solutions, which is to say two other partners on this page. That is a useful signal for a factor: these are companies that already fit together in production somewhere, rather than a set of unrelated logos.",
    ],
    whatWouldFlow: [
      "Decipher is a front end that other data flows into rather than a source a platform calls. In practice a factor either runs origination in Decipher and passes an approved client into the funding platform, or runs origination in the funding platform and does not need Decipher at all. Which of those is right depends on how much of your intake is already structured.",
      "Their documented connector list covers credit sources, banking data, accounting packages and customer relationship management.",
      "They publish no public developer documentation. Their integrations are productised connectors rather than an open API, and it is fairer to describe it that way than to imply endpoints exist.",
    ],
    connectionStatus:
      "A commercial relationship. No connection is recorded in the FactorFox integration register today, so nothing in the product currently connects to Decipher and this page does not suggest otherwise.",
    notEstablished:
      "Employee count, ownership and customer count are not published. The performance percentages on their site carry no published methodology, so we do not repeat them.",
    sources: [
      { label: "Decipher Credit", href: "https://deciphercredit.com/" },
      { label: "Decipher, about", href: "https://deciphercredit.com/about-us/" },
    ],
    linkedin: "https://www.linkedin.com/company/decipher-credit-solutions-llc/",
  },
  {
    slug: "farelanes",
    metaTitle: "Farelanes: lane rates as a fraud signal",
    metaDescription:
      "Lane rate benchmarks built from paid freight invoices flag an invoice priced unlike the market. What Farelanes tests, and what it deliberately does not.",
    name: "Farelanes",
    role: "verification",
    summary:
      "Lane rate benchmarks built from paid freight invoices, used to flag an invoice priced unlike the market.",
    whatTheyDo: [
      "Farelanes sells freight lane pricing data. It aggregates paid freight invoices sourced from factoring companies and financial institutions and sells the resulting per lane rate benchmarks by subscription to carriers, brokers, shippers and owner operators.",
      "Based in Fort Worth, Texas. Their chief executive and co founder is Neal Huffman.",
      "Worth stating plainly: their own about page publishes no founding year, no leadership and no headcount. The corporate facts a spotlight would normally open with are simply not public.",
    ],
    whyItMatters: [
      "A rate that sits far outside the market for that lane is one of the more informative fraud signals available on a freight book, and it is not visible from the invoice alone. It requires an outside view of what that lane actually pays.",
      "Note carefully what this validates and what it does not. It tests pricing. It does not establish that a delivery physically occurred, and treating a rate check as a delivery check is a mistake worth naming.",
      "There is a structural point a factor should understand. Factoring companies are Farelanes' data suppliers as well as its customers, since the benchmarks are built from paid invoices contributed by factors and financial institutions. If you contribute, ask what happens to your contributed data if you leave. That is the same question this site tells you to ask any vendor.",
    ],
    whatWouldFlow: [
      "Outbound: origin, destination, date and equipment type for a submitted load.",
      "Inbound: a benchmark rate for that lane, which the platform compares against the invoice amount and flags on variance.",
      "They publish a pricing API. We confirmed it exists and is documented, and we could not extract endpoints, parameters or authentication from the documentation site, so we describe the shape of the exchange rather than specific fields.",
    ],
    connectionStatus:
      "A commercial relationship. No connection is recorded in the FactorFox integration register today, so nothing in the product currently connects to Farelanes.",
    notEstablished:
      "Founding year, headcount, ownership, funding and any specific API field. This is the partner where the least is publicly established.",
    sources: [
      { label: "Farelanes, about", href: "https://farelanes.com/about/" },
      { label: "Farelanes", href: "https://farelanes.com/" },
    ],
    linkedin: "https://www.linkedin.com/company/farelanes/",
  },
  {
    slug: "atob",
    metaTitle: "AtoB: fuel cards and carrier payments",
    metaDescription:
      "Fuel cards, fast carrier payment and a white label programme a factor can brand as its own. What AtoB does, and why fuel is where a factor can compete.",
    name: "AtoB",
    role: "payments",
    summary:
      "Fuel cards and fast carrier payments, with a factoring partner programme and a white label option.",
    whatTheyDo: [
      "AtoB sells a fuel card and payments platform to trucking fleets. Fleets buy diesel at discount at truck stops and AtoB moves money to drivers and carriers by bank transfer, debit and consumer payment networks. They also sell a business expense card and a driver payroll card.",
      "Founded in 2019, based in San Francisco. In September 2024 they announced a 130 million dollar series C led by General Catalyst and Bloomberg Beta with Mastercard participating.",
      "They run an explicit factoring partner programme with published commercial terms, including revenue share on card spend and a payment processing fee the factor sets. That is unusually specific for this category and it means the factoring use case is documented rather than inferred.",
    ],
    whyItMatters: [
      "Fuel is the largest operating cost a carrier carries and the fuel advance is one of the few products where a factor competes on something other than rate. A card programme the factor brands as its own turns a commodity into a relationship.",
      "Payment speed is the other half. Their factoring page describes moving money in minutes, including nights, weekends and holidays, which matters because a freight book does not stop funding when the banking calendar does.",
      "The white label option is the strategic part. The carrier sees the factor's brand on the card and in the portal, which keeps the relationship where the factor wants it.",
    ],
    whatWouldFlow: [
      "Outbound: payment instructions and card issuance requests.",
      "Inbound: fuel transaction data and payment confirmations.",
      "They publish no public developer documentation. Their factoring page describes a commercial partner programme and a business integration rather than developer endpoints, and it would be misleading to present it as a public API.",
    ],
    connectionStatus:
      "A commercial relationship. No connection is recorded in the FactorFox integration register today, so nothing in the product currently connects to AtoB.",
    notEstablished:
      "Employee count, total capital raised, and whether a public developer API exists. Their fleet count is a self reported marketing figure rather than an audited one.",
    sources: [
      { label: "AtoB for factoring partners", href: "https://www.atob.com/become-a-factoring-partner" },
      { label: "AtoB, about", href: "https://www.atob.com/about-us" },
    ],
    linkedin: "https://www.linkedin.com/company/goatob/",
  },
  {
    slug: "tank-payments",
    metaTitle: "Tank Payments: instant carrier payment",
    metaDescription:
      "Payment rails that run outside banking hours, with reversibility built in. What Tank Payments does, and why they name FactorFox on their own homepage.",
    name: "Tank Payments",
    role: "payments",
    summary:
      "Instant carrier payment rails that run outside banking hours, with reversibility built in.",
    whatTheyDo: [
      "Tank Payments sells payment infrastructure for freight. It provides payables automation and instant payout rails to factors, brokers and platforms, and a financial account, driver pay and fuel card product to carriers.",
      "Founded in 2022 and part of the Y Combinator summer 2022 batch. Based in Austin, Texas. Founded by Dane Cook, Jad Rahbany and Matthew Rybak. Their card issuer and banking partners are named publicly on their own site, which is more disclosure than most payment companies offer.",
      "Of every company on this page, Tank Payments is the best documented on corporate facts.",
    ],
    whyItMatters: [
      "Funding outside banking hours is the practical difference between a carrier waiting until Monday and a carrier fuelling on Saturday. Their factoring page describes funding with no wire or automated clearing house cut off times.",
      "Reversibility is the feature an operator notices and a marketing page underplays. Being able to correct a disbursement after it has gone is worth a great deal in an operation that funds continuously, because continuous funding means more opportunities to send the wrong amount to the right carrier.",
      "They name FactorFox on their own homepage among the factoring platforms they integrate with, alongside FactorView, FactorSoft, FactorCloud and WinFactor. That is a partner asserting the relationship on their own property rather than us asserting it on ours.",
    ],
    whatWouldFlow: [
      "Outbound from the platform: invoice approval, payment authorisation and payee identity.",
      "Inbound: payment status, settlement confirmation and fuel transaction data.",
      "Onward to the carrier: instant funding into their account, reachable by card, bill pay or a message to the driver.",
      "They publish no public API documentation. Their help centre is written for end users rather than developers, so an integration here is a partner build rather than a self serve one.",
    ],
    connectionStatus:
      "A commercial relationship, and the one partner who names FactorFox publicly on their own site. No row exists in the FactorFox integration register today, so the register governs and this page does not describe it as available in the product.",
    notEstablished:
      "Total funding raised, a reliable headcount, transaction volume, and whether the factoring platform integrations they name are live in production or offered.",
    sources: [
      { label: "Tank Payments for factors", href: "https://www.tankpayments.com/for-factors" },
      { label: "Tank Payments on Y Combinator", href: "https://www.ycombinator.com/companies/tank-payments" },
    ],
    linkedin: "https://www.linkedin.com/company/tank-payments/",
  },
  {
    slug: "load-connex",
    metaTitle: "Load Connex: did the truck actually move",
    metaDescription:
      "Independent movement data lets a funding decision rest on where the vehicle was rather than on what the paperwork says. What Load Connex does, and why.",
    name: "Load Connex",
    role: "verification",
    summary:
      "Independent movement data, so a funding decision can rest on whether the truck moved rather than on paperwork.",
    whatTheyDo: [
      "Load Connex sells a bundled operating platform for trucking: fuel cards, dispatch software, a load marketplace and tracking. It sells to carriers directly and sells a white labelled version of the whole stack to factoring companies to offer their own carrier clients.",
      "Based in Burbank, California. Founded and led by Edwin Sahakian.",
      "Their fraud product verifies freight invoices against independent location data and scans documents for tampering, with proof of delivery collected automatically by message to the driver.",
    ],
    whyItMatters: [
      "This is the closest thing in the group to an answer for the oldest question in freight factoring, which is whether the load in front of you actually moved. Document intelligence can tell you a bill of lading is internally consistent and not a duplicate. It cannot tell you a truck went anywhere.",
      "Independent movement data changes the shape of that question. A funding decision that rests on where the vehicle was is a different kind of decision from one resting on what the paperwork says, and it is the harder one to defraud.",
      "The fuel programme is white labelled with the rebate split configurable, which makes it a revenue line for the factor rather than a cost.",
      "They also generate the data needed for interstate fuel tax reporting automatically, which is a real administrative burden on the carrier and therefore a retention argument for the factor.",
    ],
    whatWouldFlow: [
      "Outbound from the platform: payment instructions, virtual fuel card generation requests and load records.",
      "Inbound: load progress from electronic logging devices, pickup and delivery events, fuel transactions, proof of delivery documents, and the verification signal confirming the carrier hauled the load on its funding schedule.",
      "They publish an OpenAPI specification through a developer portal, which is the strongest published API commitment of the transportation partners here, although endpoint level documentation is gated behind partner access.",
    ],
    connectionStatus:
      "A commercial relationship. No connection is recorded in the FactorFox integration register today. Load Connex and FactorEvo announced an integration in April 2026, and that is a FactorEvo announcement rather than a FactorFox product claim, so it does not change what this register says.",
    notEstablished:
      "Founding year, funding and headcount. A third party listing shows a very small headcount which sits awkwardly against the operational scale claimed on their own site, so we publish neither figure.",
    sources: [
      { label: "Load Connex for factoring", href: "https://loadconnex.com/for-factoring" },
      { label: "Load Connex API", href: "https://loadconnex.com/blog/how-the-load-connex-api-turbocharges-your-factoring-platform" },
    ],
    linkedin: "https://www.linkedin.com/company/loadconnex/",
  },
  {
    slug: "loadboard-network",
    metaTitle: "LoadBoard Network: filling a carrier board",
    metaDescription:
      "One posting reaches many load boards. The partner furthest from a funding decision, and the honest account of what it does and does not do for a factor.",
    name: "LoadBoard Network",
    role: "distribution",
    summary:
      "One posting reaches many load boards, which is how a factor's private carrier board gets filled.",
    whatTheyDo: [
      "LoadBoard Network is a load posting aggregation service for freight brokers and shippers. It is deliberately not a load board itself. A broker enters a load once and it is distributed to many boards at once.",
      "Founded in 2022 by Mark Draeb, based in Hebron, North Dakota. Draeb previously co founded PostEverywhere, which was acquired by Truckstop in 2018 and retired in 2022, and LoadBoard Network was built as its successor.",
      "Pricing is published openly on their site, banded by broker revenue or shipment volume, with unlimited users on every plan. Published pricing is rare enough in this industry to be worth noting.",
    ],
    whyItMatters: [
      "This is the partner with the least direct connection to a funding decision, and it would be dishonest to dress it up as more. It does not assess credit, file liens, detect fraud or move money.",
      "Its relevance is distribution. A factor that operates a private load board for its own underwritten carriers has a supply problem, not a demand problem, and this is a pipe that fills it with brokered freight.",
      "The strategic reading is that a factor who can put freight in front of its own carriers is competing on something other than rate, which is the recurring theme across this entire partner group.",
    ],
    whatWouldFlow: [
      "One direction: load postings out from a transport management system, distributed across the board network.",
      "For a factor operating a carrier facing board, the plausible flow is inbound load postings into that board.",
      "They publish no public API documentation. Their documented integration pattern is with transport management systems using an integration key, so any connection here would be a partner negotiated build.",
    ],
    connectionStatus:
      "A commercial relationship. No connection is recorded in the FactorFox integration register today.",
    notEstablished:
      "Employee count, funding, revenue and ownership structure.",
    sources: [
      { label: "LoadBoard Network", href: "https://loadboardnetwork.com/" },
      { label: "LoadBoard Network, about", href: "https://loadboardnetwork.com/about/" },
    ],
    linkedin: "https://www.linkedin.com/company/loadboard-network/",
  },
  {
    slug: "trucker-copilot",
    metaTitle: "Trucker Copilot: the driver's own screen",
    metaDescription:
      "Documents captured in the cab and funding status sent back to the driver. What Trucker Copilot is, and why it is a sibling product rather than a vendor.",
    name: "Trucker Copilot",
    role: "carrier",
    summary:
      "The driver's screen. Documents captured in the cab, and the funding status sent back to the driver.",
    whatTheyDo: [
      "Trucker Copilot is a free mobile application for drivers. It captures load paperwork in the cab, including bills of lading, rate confirmations, proofs of delivery and invoices, routes it to a participating finance company, and shows the driver where the funding has got to.",
      "It is a product line of FactorEvo Group Holdings rather than an independent company, and it should be read that way. No separate leadership, headcount or funding is published for it, and the parent is the only named entity.",
      "The iOS application reached version 1.0 on 2 May 2025, which is the most reliable date available for how old the product is.",
    ],
    whyItMatters: [
      "Most of the delay between a load being delivered and a carrier being paid is not underwriting. It is the paperwork sitting in a cab, then in an inbox, then in a queue. Moving capture to the point of delivery removes the first two of those.",
      "It changes what arrives rather than only when. A document photographed at the delivery point carries a time and a place, which is a materially better input than the same document forwarded three days later.",
      "It is also a retention surface. A carrier who checks funding status in an application carrying your brand is harder to move than one who telephones your office to ask.",
    ],
    whatWouldFlow: [
      "Inbound to the finance company: scanned load documents, delivery confirmation events, verified load activity, broker information and payment history.",
      "Outbound to the driver: funding status through submission, review, approval and funding, plus broker and shipper credit visibility where the finance company provides it.",
      "There is no public API. The integration route is through the FactorEvo platform rather than through a Trucker Copilot interface, and that is a structural fact rather than a gap.",
    ],
    registerName: "FactorEvo",
    connectionStatus:
      "Part of the same group as FactorFox, under FactorEvo Group Holdings. It is not a third party integration and this page does not present it as one.",
    notEstablished:
      "Formation date of the entity, any leadership of its own, headcount, funding, and how many finance companies participate. Note also that the application store description promises load matching and route optimisation that the current website does not describe, so we take capability statements from the website.",
    sources: [
      { label: "Trucker Copilot", href: "https://truckercopilot.com/" },
    ],
    linkedin: "https://www.linkedin.com/company/trucker-copilot/",
  },
];

export function partnerBySlug(slug: string) {
  return PARTNERS.find((p) => p.slug === slug);
}

/** The register row for a partner, where one exists. The register governs. */
export function partnerIntegration(partner: Partner) {
  if (!partner.registerName) return undefined;
  return INTEGRATIONS.find((i) => i.name === partner.registerName);
}
