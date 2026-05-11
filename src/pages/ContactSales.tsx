import { SEO } from "@/components/SEO";
import { AnimatedSection } from "@/components/AnimatedSection";

const BOOKING_URL =
  "https://outlook.office.com/book/FactorFoxBookingPage@factorfox.com/";

function ContactSales() {
  return (
    <>
      <SEO
        title="Contact Sales — FactorFox"
        description="Book a demo with FactorFox — the only platform that migrates factoring data in under 60 minutes. Join in minutes, not months."
        path="/contact-sales"
      />

      <main className="bg-[var(--set1-bg)]">
        <div className="grid grid-cols-1 lg:grid-cols-[7fr_5fr] lg:min-h-[calc(100vh-4rem)]">
          {/* Left — brand messaging */}
          <div className="flex flex-col justify-center px-4 sm:px-6 lg:pl-[max(2rem,calc((100vw-80rem)/2+2rem))] lg:pr-12 py-16 md:py-20">
            <AnimatedSection delay={0} className="max-w-[720px]">
              <h1 className="text-hero text-foreground mb-6">
                <span className="block">Join in Minutes</span>
                <span className="block">not Months.</span>
              </h1>

              <p className="text-body-lg text-muted-foreground max-w-[620px]">
                FactorFox is the only platform to migrate data in{" "}
                <span className="font-semibold text-foreground">
                  under 60 minutes
                </span>
                . Eclipsing the industry standard of{" "}
                <span className="font-semibold text-foreground">
                  6&ndash;12 months
                </span>
                .
              </p>
            </AnimatedSection>
          </div>

          {/* Right — booking card */}
          <div className="bg-surface-soft flex items-center justify-center px-4 sm:px-6 lg:px-12 py-12 md:py-16">
            <AnimatedSection delay={0.12} className="w-full max-w-md">
              <div className="rounded-2xl border border-border bg-card shadow-[0_12px_40px_-12px_rgba(99,102,241,0.18)] dark:shadow-black/30 p-6 md:p-7 flex flex-col items-center text-center">
                <span className="inline-flex h-20 w-20 items-center justify-center rounded-full border border-border bg-primary/[0.06] text-lg font-semibold leading-none text-foreground">
                  <span>
                    30
                    <br />
                    min
                  </span>
                </span>

                <h2 className="text-section-md text-foreground mt-6">
                  Pick a time that works.
                </h2>

                <p className="text-body text-muted-foreground mt-3 max-w-sm">
                  Open the calendar, choose 30&nbsp;minutes, and we&apos;ll walk
                  you through a live demo of FactorFox on your data.
                </p>

                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-primary px-8 font-semibold text-primary-foreground transition hover:bg-primary/90"
                >
                  Schedule my demo
                </a>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </main>
    </>
  );
}


export { ContactSales };
