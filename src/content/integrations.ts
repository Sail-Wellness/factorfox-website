import type { StatusKind } from "@/components/primitives";

/**
 * INTEGRATION REGISTER (public).
 *
 * Status vocabulary, and the rule for each one:
 *
 *   available   The integration works in the product today. Some require you to
 *               hold your own vendor credentials, which is stated per row.
 *   controlled  Built and proven against a deployed service, running with named
 *               customers, not yet generally released or listed in a marketplace.
 *   contract    The rail is built. It answers "not configured" until you hold a
 *               contract and keys with that vendor.
 *   planned     Named and designed. Not built. Never described as working.
 *   ecosystem   A sibling product in the FactorEvo network, not a connector.
 *
 * Nothing enters this file without a source in the platform repository, the
 * integration register, or a dated proof run. Marketing does not get to promote
 * a row. Engineering does.
 */

export type IntegrationCategory =
  | "microsoft"
  | "accounting"
  | "credit"
  | "banking"
  | "transportation"
  | "documents"
  | "identity"
  | "compliance";

export type Integration = {
  slug: string;
  name: string;
  category: IntegrationCategory;
  status: StatusKind;
  statusLabel?: string;
  /** One line, what it connects. */
  summary: string;
  /** What information moves, and in which direction. */
  moves: string;
  /** The operational problem it removes. */
  solves: string;
  /** Who feels it. */
  benefits: string[];
  /** What protects the information. */
  controls: string[];
  /** Set when the integration has its own indexable page. */
  page?: string;
  /** Requires the customer to hold their own vendor agreement. */
  requiresCredentials?: boolean;
};

export const CATEGORIES: { key: IntegrationCategory; title: string; blurb: string; page?: string }[] = [
  {
    key: "microsoft",
    title: "Microsoft 365",
    blurb: "Briefings, approvals, mail and calendar inside the environment your institution already runs on.",
    page: "/integrations/microsoft-365",
  },
  {
    key: "accounting",
    title: "Accounting",
    blurb: "Client ledgers synchronised into proposals, never posted to your book without a human.",
    page: "/integrations/quickbooks",
  },
  {
    key: "credit",
    title: "Credit and risk",
    blurb: "Commercial credit, network payment behaviour and lien position at the moment a party is created.",
    page: "/integrations/credit-and-risk",
  },
  {
    key: "banking",
    title: "Banking and payments",
    blurb: "Payment file generation for the rails your bank actually accepts, with release control in front of them.",
    page: "/integrations/banking-and-payments",
  },
  {
    key: "transportation",
    title: "Transportation",
    blurb: "Carrier and broker identity, and freight claim verification with provenance.",
    page: "/integrations/transportation",
  },
  {
    key: "documents",
    title: "Document intake",
    blurb: "Every door a document arrives through, held to the same evidence standard.",
  },
  {
    key: "identity",
    title: "Identity and access",
    blurb: "Your directory proves who someone is. FactorFox decides what they may do.",
  },
  {
    key: "compliance",
    title: "Compliance and reporting",
    blurb: "Registered interests, screening and the records an examiner asks for.",
  },
];

export const INTEGRATIONS: Integration[] = [
  /* ---------------------------------------------------------- Microsoft */
  {
    slug: "microsoft-teams",
    name: "Microsoft Teams",
    category: "microsoft",
    status: "controlled",
    page: "/integrations/microsoft-teams",
    summary: "Briefings, signals, assigned work and approvals delivered where your institution already decides.",
    moves:
      "Briefings and signal cards move out to Teams. Acknowledgements, approvals and questions move back in, and every one of them crosses the same application surface a browser click crosses.",
    solves:
      "Owners and officers stop being the bottleneck because they are away from a desk. The decision comes to them with its evidence attached, and the controls travel with it.",
    benefits: ["Owners and principals", "Credit officers", "Operations", "Anyone approving from a phone"],
    controls: [
      "The Teams door refuses any envelope Microsoft did not sign",
      "An unlinked Microsoft account is refused by name and nothing is created for it",
      "Four eyes still applies. A requester cannot approve their own release from Teams",
      "Cards are renderings. Permission and current state are re checked on the server at execution",
      "Every action is audited with origin recorded as Teams and the actor named",
    ],
  },
  {
    slug: "microsoft-outlook",
    name: "Microsoft Outlook and Graph mail",
    category: "microsoft",
    status: "controlled",
    page: "/integrations/microsoft-365",
    summary: "Remittances arrive in a shared mailbox and become proposals, not silent postings.",
    moves:
      "Inbound mail is classified, its attachments preserved as evidence, and a cash application proposal is raised. Outbound notices and demands leave through the same delivery wall as every other channel.",
    solves:
      "The remittance that used to be printed, keyed and lost now enters the ledger as a proposal with the original message attached to it.",
    benefits: ["Accounting", "Cash application", "Collections"],
    controls: [
      "Application permissions are least privilege and the capabilities screen shows exactly what the token carries",
      "The same message is never ingested twice",
      "No send escapes the delivery wall, including in sandbox",
      "Bank change content is classified as requiring verification, never applied",
    ],
  },
  {
    slug: "microsoft-calendar",
    name: "Microsoft Calendar",
    category: "microsoft",
    status: "controlled",
    page: "/integrations/microsoft-365",
    summary: "A collections case projects its next contact into the officer's own calendar.",
    moves: "FactorFox writes the follow up. The case remains the record of truth.",
    solves: "Follow ups stop living in two systems that disagree.",
    benefits: ["Collections", "Account executives"],
    controls: ["Deleting the calendar event does not close the case", "The projection ledger records what was written and when"],
  },
  {
    slug: "microsoft-bookings",
    name: "Microsoft Bookings",
    category: "microsoft",
    status: "available",
    page: "/integrations/microsoft-365",
    summary: "Demonstration and review scheduling against real availability.",
    moves: "Availability out, confirmed appointments back.",
    solves: "Scheduling without a third party calendar tool holding your data.",
    benefits: ["Sales", "Client success"],
    controls: ["Runs inside your own Microsoft tenant"],
  },
  {
    slug: "microsoft-entra",
    name: "Microsoft Entra ID",
    category: "identity",
    status: "available",
    page: "/integrations/microsoft-365",
    summary: "Federated sign in over OIDC and SAML, configured per tenant.",
    moves: "Identity assertions in. No directory data is copied into FactorFox.",
    solves: "One joiner and leaver process. Access ends when the directory says it ends.",
    benefits: ["IT and security", "Every user"],
    controls: [
      "Microsoft proves identity. FactorFox grants authority, and the two are never the same decision",
      "Identity linking is explicit and audited. Nobody is auto provisioned",
      "Federated sign in can be disabled per tenant without affecting local access",
    ],
  },

  /* ---------------------------------------------------------- Accounting */
  {
    slug: "quickbooks",
    name: "QuickBooks Online",
    category: "accounting",
    status: "available",
    page: "/integrations/quickbooks",
    requiresCredentials: true,
    summary: "Client receivables synchronised from QuickBooks into the intake rail.",
    moves:
      "Open invoices, customers, balances and dates move from the client's QuickBooks company into a normalised receivable. Nothing moves back into the client's books.",
    solves:
      "The schedule that used to be exported, reformatted and emailed now arrives structured, with external identifiers that make a second sync idempotent.",
    benefits: ["Operations", "Account executives", "Your clients"],
    controls: [
      "Tokens are encrypted at rest and never logged or returned",
      "A sync proposes through the intake rail. A human applies it",
      "Synced invoices still face every ingestion gate. A connector gets no side door onto the book",
      "Every surface degrades honestly when keys are missing, naming the exact configuration that is absent",
    ],
  },
  {
    slug: "xero",
    name: "Xero",
    category: "accounting",
    status: "available",
    page: "/integrations/xero",
    requiresCredentials: true,
    summary: "The same receivables rail for clients who run Xero.",
    moves: "Contacts and accounting transactions in, read only, on the client's consent.",
    solves: "One onboarding path whichever ledger the client keeps.",
    benefits: ["Operations", "Account executives", "Your clients"],
    controls: [
      "Read only scopes. FactorFox never writes to a client ledger",
      "Connection state is per client and revocable from either side",
      "Same proposal rail, same gates, same audit",
    ],
  },

  /* ---------------------------------------------------------- Credit */
  {
    slug: "probity-network",
    name: "Probity network",
    category: "credit",
    status: "available",
    page: "/integrations/credit-and-risk",
    summary: "Debtor payment behaviour drawn from the FactorFox network itself.",
    moves: "Nothing leaves your tenant. The network plane already knows what it knows about a debtor.",
    solves:
      "The question a credit bureau answers slowly and expensively, answered instantly and at no cost, from how that debtor has actually paid across the network.",
    benefits: ["Credit officers", "Underwriters", "Collections"],
    controls: [
      "No vendor, no contract, no per check charge",
      "Reads the same plane the debtor credit file reads, so two screens never disagree",
      "Tenant isolation is enforced at the database level",
    ],
  },
  {
    slug: "creditsafe",
    name: "Creditsafe",
    category: "credit",
    status: "contract",
    page: "/integrations/credit-and-risk",
    requiresCredentials: true,
    summary: "Commercial credit on debtors, run at the moment a debtor is created.",
    moves: "Company identity, score and payment rating in, attached to the debtor file as evidence.",
    solves: "The check that used to be a separate portal and a copied and pasted PDF.",
    benefits: ["Credit officers", "Underwriters"],
    controls: [
      "The rail is built and answers not configured until you hold a contract and keys",
      "An unconfigured check is shown to the operator, not hidden. A greyed row teaches. A hidden feature lies",
      "Results are captured at run time and never silently refreshed under a decision",
    ],
  },
  {
    slug: "dun-and-bradstreet",
    name: "Dun and Bradstreet",
    category: "credit",
    status: "contract",
    page: "/integrations/credit-and-risk",
    requiresCredentials: true,
    summary: "United States client credit at intake.",
    moves: "Business identity and credit in, attached to the client file.",
    solves: "Client side credit that matches the debtor side discipline.",
    benefits: ["Credit officers", "Underwriters"],
    controls: ["Same posture as every other bureau rail. No keys, no silent behaviour", "Offered only where the tenant country qualifies"],
  },
  {
    slug: "taxrock",
    name: "TaxRock",
    category: "credit",
    status: "available",
    page: "/integrations/credit-and-risk",
    summary: "Federal and state tax lien position on a prospective or existing client.",
    moves: "Lien records in, attached to the client file and to the underwriting run that used them.",
    solves:
      "The lien nobody searched for until the day it mattered. One computation serves both the intake drawer and the underwriting engine, so the two never disagree.",
    benefits: ["Underwriters", "Credit officers"],
    controls: ["Captured at run time and pinned to the decision", "Never re fetched underneath a completed underwriting run"],
  },
  {
    slug: "ficoso",
    name: "Ficoso",
    category: "credit",
    status: "available",
    page: "/integrations/credit-and-risk",
    summary: "Additional client side risk assessment offered at intake.",
    moves: "Assessment in, attached to the client file.",
    solves: "A second view on a client where one source is not enough.",
    benefits: ["Underwriters"],
    controls: ["Same run time capture and same evidence binding as every other check"],
  },

  /* ---------------------------------------------------------- Banking */
  {
    slug: "nacha-ach",
    name: "NACHA ACH",
    category: "banking",
    status: "available",
    page: "/integrations/banking-and-payments",
    summary: "PPD credit files generated for your originating bank.",
    moves: "A payment file out. Nothing about your bank relationship moves in.",
    solves: "The day ends with a file your bank accepts, produced from releases that already passed every gate.",
    benefits: ["Treasury", "Accounting"],
    controls: [
      "Ninety four character fixed records, blocked correctly",
      "Every originating bank certifies its own dialect. Send one file before you trust the rest",
      "The file is generated from released items only. Release control sits in front of it",
    ],
  },
  {
    slug: "apca-direct-entry",
    name: "APCA direct entry",
    category: "banking",
    status: "available",
    page: "/integrations/banking-and-payments",
    summary: "Australian ABA direct entry files, CS2 format.",
    moves: "A payment file out, in the format Australian banks accept.",
    solves: "Australian operations funded on the same rail discipline as United States operations.",
    benefits: ["Treasury"],
    controls: ["One hundred and twenty character records", "Same release control in front of it"],
  },
  {
    slug: "fedwire",
    name: "Fedwire",
    category: "banking",
    status: "available",
    page: "/integrations/banking-and-payments",
    summary: "Wire instruction export for same day movement.",
    moves: "Instructions out, formatted for your bank's upload.",
    solves: "Large single releases that should not wait for a batch.",
    benefits: ["Treasury"],
    controls: ["Bank account changes sit under a human only hold before any wire can reference them"],
  },
  {
    slug: "edi-remittance",
    name: "EDI 820 and 214",
    category: "banking",
    status: "available",
    page: "/integrations/banking-and-payments",
    summary: "Remittance advice and delivery status from trading partners.",
    moves: "Remittance detail and shipment status in.",
    solves: "Cash application against structured remittance instead of a scanned check stub.",
    benefits: ["Accounting", "Operations"],
    controls: ["Proposals, never silent postings", "Duplicates refused"],
  },
  {
    slug: "plaid",
    name: "Plaid",
    category: "banking",
    status: "planned",
    page: "/integrations/banking-and-payments",
    summary: "Bank feed for lockbox flow and client cash verification.",
    moves: "Not built. Declared in the underwriting engine as a source that is not wired.",
    solves:
      "Covenants that depend on controlled collection percentage currently report awaiting a live source rather than inventing a number. This is the source they are waiting for.",
    benefits: ["Credit officers", "Treasury"],
    controls: ["Named here because the platform names it on screen. Nothing about it is described as working"],
  },

  /* ---------------------------------------------------------- Transportation */
  {
    slug: "fmcsa",
    name: "FMCSA",
    category: "transportation",
    status: "available",
    page: "/integrations/transportation",
    summary: "Carrier and broker lookup on both the client and the debtor side.",
    moves: "Registration identity in, attached to the party file.",
    solves:
      "In transportation the client is the carrier and the debtor is usually the broker. Both need looking at, and offering the check on one side only throws away half of it.",
    benefits: ["Underwriters", "Credit officers", "Operations"],
    controls: [
      "Operating authority currency, insurance currency and safety scores are not asserted",
      "The gate that would assert them is explicitly forbidden from guessing, and says so on screen",
    ],
  },
  {
    slug: "tessera",
    name: "Tessera Network",
    category: "transportation",
    status: "available",
    page: "/integrations/transportation",
    summary: "Freight claim verification with provenance.",
    moves: "A claim goes out for verification. A verdict comes back with the provenance behind it.",
    solves: "Cross validation of the load against parties other than the one asking to be paid.",
    benefits: ["Underwriters", "Operations", "Fraud review"],
    controls: ["Verification runs capture evidence at run time and are never re fetched", "The verdict carries its provenance or it does not count"],
  },

  /* ---------------------------------------------------------- Documents */
  {
    slug: "document-intake",
    name: "Email, portal and SFTP intake",
    category: "documents",
    status: "available",
    summary: "Every door a document can arrive through, held to one evidence standard.",
    moves: "Documents in, with their original preserved and their classification recorded.",
    solves: "The submission channel stops determining how carefully a document is examined.",
    benefits: ["Operations", "Client success"],
    controls: [
      "Near duplicate detection blocks at verification",
      "Cross portfolio fingerprinting catches the same paper submitted under two clients",
      "The original is preserved. Extraction is a derivative, and the platform knows which is which",
    ],
  },
  {
    slug: "llm-parsers",
    name: "Language model extraction",
    category: "documents",
    status: "available",
    summary: "Model based parsing of invoices, bills of lading and rate confirmations.",
    moves: "Document text out to the configured endpoint, structured data back under a strict schema.",
    solves: "Extraction that handles the paper this industry actually receives rather than a clean template.",
    benefits: ["Operations"],
    controls: [
      "Every model output passes deterministic re validation before it touches the book",
      "Strict schema. A response that does not conform is rejected, not repaired",
      "The endpoint and model are configuration, per tenant",
    ],
  },

  /* ---------------------------------------------------------- Compliance */
  {
    slug: "ppsr",
    name: "PPSR",
    category: "compliance",
    status: "available",
    summary: "Australian registered security interests: search, registration and verification statements.",
    moves: "Search and registration out, verification statements and expiry watch back.",
    solves: "Priority position that is watched rather than remembered.",
    benefits: ["Credit officers", "Compliance"],
    controls: ["Priority and expiry are watched, not assumed"],
  },
  {
    slug: "aml-screening",
    name: "AML and sanctions screening",
    category: "compliance",
    status: "available",
    summary: "Screening at onboarding with daily rescreening thereafter.",
    moves: "Party identity out, match results back, attached to the party file.",
    solves: "A screen that was true on the day of onboarding and never checked again.",
    benefits: ["Compliance", "Credit officers"],
    controls: ["Results are evidence, versioned, and never overwritten"],
  },

  /* ---------------------------------------------------------- Ecosystem */
  {
    slug: "factorevo",
    name: "FactorEvo",
    category: "transportation",
    status: "ecosystem",
    summary: "The transportation specialty finance sibling, built on the same intelligence layer.",
    moves: "A shared intelligence layer, not a connector.",
    solves: "Transportation operations that need a dedicated freight management surface.",
    benefits: ["Transportation factors"],
    controls: ["Separate product, separate tenancy"],
  },
];

export function integrationsByCategory(cat: IntegrationCategory) {
  return INTEGRATIONS.filter((i) => i.category === cat);
}

export function getIntegration(slug: string) {
  return INTEGRATIONS.find((i) => i.slug === slug);
}

/** Rows the site is explicitly not allowed to claim, kept visible so they cannot creep back in. */
export const NOT_CLAIMED = [
  "NetSuite",
  "Sage",
  "Ansonia",
  "LoadConnex",
  "AtoB",
  "Fairlanes",
  "TriumphPay",
  "Decipher Credit",
];
