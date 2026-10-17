/**
 * Published news, shared by /news and /investors.
 *
 * Only items that are already public belong here. Headlines are the publishers'
 * own, with hyphens set as spaces to match the site's house style, and dates are
 * the publication dates shown on each story.
 *
 * The October 2026 customer onboarding announcement goes into ANNOUNCEMENTS on
 * the day it is published, with its real date and the URL of the published
 * release. It is not drafted here in advance.
 */

export type Story = {
  outlet: string;
  outletUrl: string;
  headline: string;
  url: string;
  date: string; // ISO
  display: string;
  author?: string;
  summary: string;
  type: "NewsArticle" | "Article";
};

export const STORIES: Story[] = [
  {
    outlet: "ABF Journal",
    outletUrl: "https://www.abfjournal.com/",
    headline: "FactorFox Unveils Next Generation AI Native Finance Platform",
    url: "https://www.abfjournal.com/factorfox-unveils-next-generation-ai-native-finance-platform/",
    date: "2026-09-22",
    display: "September 22, 2026",
    author: "Rita Garwood",
    summary:
      "ABF Journal reports on the relaunch of FactorFox as an AI native operating system for specialty finance, built from more than twenty years of industry experience, model agnostic by design and running on a real double entry general ledger.",
    type: "NewsArticle",
  },
  {
    outlet: "IFA Commercial Factor",
    outletUrl: "https://magazine.factoring.org/",
    headline: "FactorFox Introduces the Next Generation of Its AI Native Specialty Finance Platform",
    url: "https://magazine.factoring.org/news/factorfox-introduces-the-next-generation-of-its-ai-native-specialty-finance-platform",
    date: "2026-09-21",
    display: "September 21, 2026",
    author: "William Bounds",
    summary:
      "The International Factoring Association's magazine covers Actionable Intelligence, agreement reading, covenant monitoring, role based briefings and the rule that the AI recommends while authorized people approve.",
    type: "NewsArticle",
  },
  {
    outlet: "PR.com",
    outletUrl: "https://www.pr.com/",
    headline: "FactorFox Introduces an AI Native Operating System Built for the Next Era of Specialty Finance",
    url: "https://www.pr.com/press-release/979437",
    date: "2026-09-22",
    display: "September 22, 2026",
    summary:
      "The launch announcement: an AI native operating system for factoring companies, asset based lenders and purchase order funders, with evidence behind every answer and human authorization on every movement of money.",
    type: "Article",
  },
];

export type Announcement = {
  headline: string;
  date: string; // ISO
  display: string;
  summary: string;
  url: string;
  linkLabel: string;
  external: boolean;
};

export const ANNOUNCEMENTS: Announcement[] = [
  {
    headline: "FactorFox AI is on Microsoft Marketplace",
    date: "2026-09-29",
    display: "September 29, 2026",
    summary:
      "FactorFox AI, the AI native operating system for factoring, asset based lending and purchase order finance, is listed on Microsoft Marketplace as a SaaS offer, with plans and list prices public there.",
    url: "https://marketplace.microsoft.com/en-us/product/factorfoxsoftware.factorfox",
    linkLabel: "See FactorFox AI on Microsoft Marketplace",
    external: true,
  },
];
