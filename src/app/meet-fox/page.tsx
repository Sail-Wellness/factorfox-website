import type { Metadata } from "next";
import { Container, Section, Eyebrow, JsonLd, CTA } from "@/components/primitives";
import { MeetFoxBanner, RegisterLink, MarketingOptIn } from "@/components/meet-fox";
import { pageMeta, breadcrumbSchema } from "@/lib/seo";
import { MEET_FOX } from "@/lib/meet-fox";
import { SITE } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title: "Meet Fox: live FactorFox AI webinar, Nov 19",
  description:
    "Watch a factoring company begin migrating to FactorFox AI from its own A/R aging, policies and agreements. Live on Microsoft Teams, November 19, 1:00 PM ET.",
  path: "/meet-fox",
  intent: "conversion",
  ogImage: new URL("/media/meet-fox-og.png", SITE.url).toString(),
});

const HIGHLIGHTS: [string, string][] = [
  ["Intelligent A/R migration", "An A/R aging report goes in, and Fox identifies the clients, debtors, invoices and outstanding balances inside it."],
  ["Document ingestion and operational configuration", "Client agreements, operating policies and bank financing documents become the terms, fees and controls the operation runs under."],
  ["Policy intelligence and enforceable funding gates", "Operating policies turned into gates that hold money until the conditions behind them are met."],
  ["Invoice processing, schedules, fees and funding", "Invoices followed through ingestion, verification, scheduling, fee calculation and funding."],
  ["Proactive operational intelligence", "Fox finds an exception and brings it to the officer responsible for it."],
  ["AI Reporting Studio", "Financial reports created by asking for them in plain English."],
  ["Microsoft Teams and branded client portals", "The operation inside Microsoft Teams, and a client portal under the factor's own brand."],
];

function eventSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Event",
    name: MEET_FOX.title,
    description:
      "A live demonstration of Fox, the intelligent operating assistant in FactorFox AI, migrating an existing factoring company from another platform using its A/R aging report, operating policies, client agreements and bank financing documents.",
    startDate: MEET_FOX.start,
    endDate: MEET_FOX.end,
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OnlineEventAttendanceMode",
    location: { "@type": "VirtualLocation", url: MEET_FOX.registrationUrl },
    image: [new URL("/media/meet-fox-banner-1200.jpg", SITE.url).toString()],
    isAccessibleForFree: true,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      url: MEET_FOX.registrationUrl,
      validFrom: "2026-10-15T00:00:00-04:00",
    },
    organizer: { "@type": "Organization", name: SITE.legalName, url: SITE.url },
    performer: { "@type": "Person", name: "Roberto Vasquez", jobTitle: "Founder and CEO", worksFor: { "@type": "Organization", name: SITE.legalName } },
  };
}

export default function MeetFoxPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "FactorFox", path: "/" },
            { name: "Meet Fox webinar", path: "/meet-fox" },
          ]),
          eventSchema(),
        ]}
      />

      <section className="bg-black">
        <div className="mx-auto max-w-[1600px]">
          <MeetFoxBanner priority sizes="(max-width: 1600px) 100vw, 1600px" />
        </div>
      </section>

      <Section className="!pt-14 !pb-10">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,1fr)] lg:gap-16">
            <div>
              <Eyebrow tone="signal">Live webinar on Microsoft Teams</Eyebrow>
              <h1 className="mt-4 text-[clamp(2rem,4vw,3.1rem)] leading-[1.08]">{MEET_FOX.title}</h1>
              <p className="mt-5 text-[clamp(1.2rem,2vw,1.5rem)] font-semibold leading-[1.3] text-[var(--fg)]">
                Bring Your A/R. Watch Your Business Come to Life.
              </p>
              <div className="mt-6 space-y-4 text-[1.0625rem] leading-[1.7] text-[var(--fg-muted)]">
                <p>
                  FactorFox AI is an entirely new AI native operating system built specifically for factoring and
                  specialty finance.
                </p>
                <p>Join us November 19 for a live demonstration of Fox, our intelligent operating assistant.</p>
                <p>
                  Watch an existing factoring company begin migrating from another software platform using its A/R
                  aging report, operating policies, client agreements, and bank financing documents.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
                <RegisterLink placement="landing_hero" />
                <CTA href="/platform" variant="quiet">Explore FactorFox AI</CTA>
              </div>
            </div>

            <aside className="self-start border border-[var(--line)] bg-[var(--bg-sunken)] p-6 sm:p-8">
              <Eyebrow>The webinar</Eyebrow>
              <dl className="mt-4">
                {[
                  ["Date", MEET_FOX.dateLabel],
                  ["Time", MEET_FOX.timeLabel],
                  ["Where", "Online, on Microsoft Teams"],
                  ["Presenter", MEET_FOX.presenter],
                  ["Cost", "Free. Registration takes about a minute."],
                ].map(([t, d]) => (
                  <div key={t} className="grid gap-1 border-t border-[var(--line)] py-3.5 sm:grid-cols-[6.5rem_1fr] sm:gap-4">
                    <dt className="u-eyebrow pt-0.5">{t}</dt>
                    <dd className="m-0 text-[0.9375rem] leading-[1.55] text-[var(--fg)]">{d}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-4 text-[0.8125rem] leading-[1.55] text-[var(--fg-subtle)]">
                Registration opens on Microsoft Teams in a new tab. Teams sends your confirmation and the link to
                join.
              </p>
            </aside>
          </div>
        </Container>
      </Section>

      <Section className="!pt-6">
        <Container>
          <Eyebrow>Demonstration highlights</Eyebrow>
          <h2 className="mt-3 max-w-[30ch] text-[clamp(1.6rem,2.6vw,2.1rem)] leading-[1.15]">
            One hour, one factoring company, its own documents.
          </h2>
          <ol className="mt-10 grid gap-x-10 sm:grid-cols-2">
            {HIGHLIGHTS.map(([t, d], i) => (
              <li key={t} className="grid grid-cols-[2.25rem_1fr] gap-3 border-t border-[var(--line)] py-5">
                <span className="u-eyebrow pt-1 tabular-nums">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className="text-[1.0625rem] leading-[1.35]">{t}.</h3>
                  <p className="mt-1.5 text-[0.9375rem] leading-[1.6] text-[var(--fg-muted)]">{d}</p>
                </div>
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      <Section className="!pt-4">
        <Container>
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="border border-[var(--line)] p-6 sm:p-8">
              <Eyebrow tone="signal">Trial offer</Eyebrow>
              <ul className="mt-4 space-y-3 text-[1rem] leading-[1.6] text-[var(--fg)]">
                <li>Complimentary 30 day SANDBOX access for eligible IFA members.</li>
                <li>Complimentary 14 day SANDBOX access for other qualified factoring companies.</li>
              </ul>
              <p className="mt-4 text-[0.875rem] leading-[1.6] text-[var(--fg-muted)]">
                Ask during the webinar, or{" "}
                <a href="/demo/" className="font-semibold text-[var(--accent)] underline-offset-4 hover:underline">
                  request your trial here
                </a>
                .
              </p>
            </div>
            <div className="border border-[var(--line)] p-6 sm:p-8">
              <Eyebrow>Keep your records private</Eyebrow>
              <p className="mt-4 text-[0.9375rem] leading-[1.65] text-[var(--fg-muted)]">
                Do not send A/R reports, client records or any customer financial information through this page or
                the registration form. Registration asks only for your contact and company details. If you want to
                follow along with your own aging report, keep it on your own screen. A private, isolated
                demonstration on your own data is available separately through a{" "}
                <a href="/demo/" className="font-semibold text-[var(--accent)] underline-offset-4 hover:underline">
                  demonstration request
                </a>
                .
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="!pt-4">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-center lg:gap-16">
            <div>
              <Eyebrow>Stay informed</Eyebrow>
              <h2 className="mt-3 text-[clamp(1.5rem,2.4vw,1.9rem)] leading-[1.2]">
                Product updates and future webinars, only if you want them.
              </h2>
              <p className="mt-4 text-[0.9375rem] leading-[1.65] text-[var(--fg-muted)]">
                Registering for the webinar does not sign you up for marketing email. If you would like FactorFox
                updates as well, subscribe here. You can unsubscribe at any time.
              </p>
            </div>
            <MarketingOptIn source="meet_fox_landing" />
          </div>
        </Container>
      </Section>

      <Section className="!pt-4 !pb-24">
        <Container>
          <div className="flex flex-col items-start gap-5 border-t border-[var(--line)] pt-10 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-[clamp(1.3rem,2.2vw,1.7rem)] font-semibold leading-[1.25]">
              Thursday, November 19, 2026. 1:00 PM Eastern.
            </p>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
              <RegisterLink placement="landing_footer" />
              <CTA href="/platform" variant="quiet">Explore FactorFox AI</CTA>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
