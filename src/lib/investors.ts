/**
 * Investor relations and strategic partnership inquiries.
 *
 * Each category carries a routeKey, never an address. The intake service maps
 * a routeKey to a mailbox in its own configuration, so routing changes without
 * a website release and no address is ever written into the page. Until that
 * map exists every routeKey may resolve to the one approved mailbox.
 *
 *   investor_relations     equity and general strategic inquiries
 *   capital_relationships  credit facilities, participations, Capital Network
 *   business_development   technology partnerships
 *   executive              mergers and acquisitions, restricted to executives
 */

export type InquiryCategoryId =
  | "equity"
  | "strategic_capital"
  | "credit"
  | "participations"
  | "technology"
  | "mergers_acquisitions"
  | "other";

export type RouteKey = "investor_relations" | "capital_relationships" | "business_development" | "executive";

export type InquiryCategory = {
  id: InquiryCategoryId;
  label: string;
  description: string;
  routeKey: RouteKey;
  /** Shown as a card in the relationship section. The Capital Network option is reached from its own section. */
  card: boolean;
};

export const INQUIRY_CATEGORIES: InquiryCategory[] = [
  {
    id: "equity",
    label: "Equity Investment",
    description:
      "Conversations with qualified institutional and strategic investors about the long term growth of FactorFox.",
    routeKey: "investor_relations",
    card: true,
  },
  {
    id: "credit",
    label: "Credit Facilities",
    description:
      "Discussions with banks, funds and other capital providers about credit relationships connected to specialty finance.",
    routeKey: "capital_relationships",
    card: true,
  },
  {
    id: "participations",
    label: "Receivables Participations",
    description:
      "Discussions about participation arrangements between factoring companies and capital providers, documented and governed by definitive agreements.",
    routeKey: "capital_relationships",
    card: true,
  },
  {
    id: "technology",
    label: "Technology Partnerships",
    description:
      "Integrations, platform alliances and channel relationships that serve factoring and specialty finance companies.",
    routeKey: "business_development",
    card: true,
  },
  {
    id: "mergers_acquisitions",
    label: "Mergers and Acquisitions",
    description:
      "Confidential conversations with principals about combinations, acquisitions or portfolio transitions in the industry.",
    routeKey: "executive",
    card: true,
  },
  {
    id: "other",
    label: "Other Strategic Inquiries",
    description: "Any other strategic relationship you would like to explore with the FactorFox leadership team.",
    routeKey: "investor_relations",
    card: true,
  },
  {
    id: "strategic_capital",
    label: "Strategic Capital Partnership",
    description: "Interest in the FactorFox Capital Network as a capital provider or as a factor seeking funding capacity.",
    routeKey: "capital_relationships",
    card: false,
  },
];

export function isCategoryId(v: string | null | undefined): v is InquiryCategoryId {
  return INQUIRY_CATEGORIES.some((c) => c.id === v);
}

/** The event a category link raises so the form can preselect without a page load. */
export const CATEGORY_EVENT = "ffx:investor-category";

/** Exact wording required by the directive of October 17, 2026. Counsel approves changes. */
export const INVESTOR_ACKNOWLEDGMENT =
  "I understand that submitting this form is an inquiry only and does not constitute an investment application, offer, or commitment. I agree to the processing of my information in accordance with the FactorFox Privacy Policy.";
export const INVESTOR_ACK_VERSION = "investor_ack_2026_10_17";

export const INVESTOR_CONFIRMATION =
  "Thank you for your interest in FactorFox. Your inquiry has been received and will be reviewed by the appropriate team. If there is a potential fit, we will contact you directly.";

export const INVESTOR_LEGAL_NOTICE =
  "Information on this page is provided for general corporate and strategic relationship purposes only. Nothing on this page constitutes an offer to sell or a solicitation of an offer to buy securities or financial products. Any potential transaction is subject to applicable law, eligibility requirements, due diligence, and definitive agreements.";
