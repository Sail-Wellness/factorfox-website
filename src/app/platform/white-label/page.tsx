import type { Metadata } from "next";
import {
  PageHero,
  ProblemSolution,
  FeatureGrid,
  StepList,
  FaqBlock,
  RelatedPages,
  CtaBand,
} from "@/components/page-parts";
import { JsonLd } from "@/components/primitives";
import { pageMeta, softwareSchema } from "@/lib/seo";

/*
  Owner confirmed, 23 September 2026: white labeling is live in production. Mechanics are from
  BrandStudio.cs and the Client Experience scope of work; the owner's own line for marketing is
  "setup is your website address". Nothing here claims a named client assistant, because the
  naming directive for it is still unsettled between two owner instructions.
*/

export const metadata: Metadata = pageMeta({
  title: "White label client portal for factors",
  description:
    "Give your clients a portal and mobile app under your own brand and address. Enter your website, review the proposed theme, publish. No developer required.",
  path: "/platform/white-label",
  intent: "product",
  target: "white label client portal for factoring companies",
});

const FAQS = [
  {
    q: "Do we need a developer or a designer?",
    a: "No. You type your website address, FactorFox proposes the theme, and you adjust anything you want to in the same editor a person would use to set it by hand. The only technical step is pointing your own address at the portal, and we help with that.",
  },
  {
    q: "Can the portal live on our own address?",
    a: "Yes. You choose the address, for example app.yourfactor.com, and FactorFox helps you with the DNS record that points it at your portal.",
  },
  {
    q: "What happens when we redesign our website?",
    a: "Nothing breaks. The logo you approved is stored in your profile and served by FactorFox, so a reorganized website cannot blank every client's portal at once. When you want the portal to follow the new look, run the Brand Studio again and publish the new draft.",
  },
  {
    q: "Is it safe to point FactorFox at our website?",
    a: "It reads presentation only: colors, typeface, logo and name. It never imports a script or a stylesheet and never copies markup, and every value it proposes is checked again on the way in, so it can only ever propose what a person could have typed. It will only fetch a public https address, which keeps a typed website from becoming a way into anyone's internal network.",
  },
  {
    q: "Will it publish anything without us?",
    a: "Never. A proposal lands in your draft, beside the preview and the Publish button, and it does not even save until you do.",
  },
];

export default function WhiteLabelPage() {
  return (
    <>
      <JsonLd
        data={softwareSchema({
          name: "FactorFox white label client portal",
          description:
            "A client portal and installable mobile app under the factor's own brand and address, themed from the factor's website by the Brand Studio and published by the factor.",
          path: "/platform/white-label",
        })}
      />

      <PageHero
        trail={[
          { name: "Platform", path: "/platform" },
          { name: "White label client portal", path: "/platform/white-label" },
        ]}
        eyebrow="White label client portal"
        title="Your clients see your brand. Setup is your website address."
        lede={
          <>
            <p>
              For the factor whose clients sign in under somebody else's logo. Type your website and
              FactorFox proposes your client portal from it: your colors, your typeface, your logo and your
              name. You review it in a draft, change what you like, and publish.
            </p>
            <p>
              Your clients get the portal and the app under your brand, on the address you choose.
            </p>
          </>
        }
        primaryCta={{ href: "/demo", label: "See it on your own website" }}
        secondaryCta={{ href: "/platform/studio", label: "About FactorFox Studio" }}
      />

      <ProblemSolution
        eyebrow="Why this exists"
        title="A client portal is the one part of your operation your clients use every week."
        lede="Most factors hand it to a software vendor's logo, or pay for a custom build they then have to maintain."
        rows={[
          {
            problem:
              "Your client signs in to a portal that carries your software vendor's name, and wonders who they actually do business with.",
            response:
              "The portal carries your name, colors and logo, on your own address. Your client sees your firm.",
          },
          {
            problem:
              "Branding a portal means a designer, a developer and a project that goes stale the day your website changes.",
            response:
              "Setup is your website address. FactorFox reads the look from your site and proposes it as a draft you can adjust and publish yourself.",
          },
          {
            problem:
              "Separate portals for separate products, each branded and maintained on its own.",
            response:
              "One client environment across your products, configured rather than rebuilt, so a client sees the products it actually has with you.",
          },
        ]}
        problemHeading="What happens today"
        responseHeading="What FactorFox does instead"
      />

      <StepList
        eyebrow="How it works"
        title="Four steps, and one of them is typing an address"
        steps={[
          {
            label: "01",
            title: "Type your website",
            body: "The Brand Studio reads the page's presentation, your colors, typeface, logo and portal name, and nothing executable.",
          },
          {
            label: "02",
            title: "Review the draft",
            body: "The proposal lands in your draft beside a preview. Change anything by hand in the same editor. Nothing is published for you.",
          },
          {
            label: "03",
            title: "Publish",
            body: "Press Publish when it looks right. Your approved logo is stored and served by FactorFox from then on.",
          },
          {
            label: "04",
            title: "Point your address",
            body: "Choose the address you want, such as app.yourfactor.com, and FactorFox helps you set the DNS record.",
          },
        ]}
      />

      <FeatureGrid
        eyebrow="What your clients get"
        title="Your firm, on their phone"
        columns={3}
        items={[
          {
            title: "Portal and app under your brand",
            body: "The same environment in the browser and as an app installed on a phone, carrying your name and look, built mobile first.",
          },
          {
            title: "Only what they have with you",
            body: "What a client can do is resolved on the server from the facilities it actually holds. Hiding a button is never how access is controlled.",
          },
          {
            title: "Stable through your redesigns",
            body: "Because the approved logo is held by FactorFox, reorganizing your website never blanks a client's portal.",
          },
        ]}
      />

      <FaqBlock items={FAQS} title="What a factor asks before switching it on" />

      <RelatedPages
        links={[
          { href: "/platform/studio", label: "FactorFox Studio", note: "The Brand Studio is one part of it, beside reports and templates." },
          { href: "/platform/client-onboarding", label: "Client onboarding", note: "What happens between a signed agreement and a first funding." },
          { href: "/platform/security", label: "Security", note: "Tenant isolation and what we do and do not claim." },
        ]}
      />

      <CtaBand
        title="Bring your website address."
        body="We will put your brand on a client portal in front of you, from nothing but the address, and show you what your clients would see."
        primary={{ href: "/demo", label: "Request a FactorFox AI demonstration" }}
        secondary={{ href: "/platform", label: "Tour the platform" }}
      />
    </>
  );
}
