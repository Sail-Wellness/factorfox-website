import { useState } from "react";
import { InlineWidget, useCalendlyEventListener } from "react-calendly";
import { SEO } from "@/components/SEO";
import { AnimatedSection } from "@/components/AnimatedSection";
import { useTheme } from "@/hooks/useTheme";

const CALENDLY_URL = "https://calendly.com/rob-sailwellness/factorfox-demo";

function ContactSales() {
  const [booked, setBooked] = useState(false);

  useCalendlyEventListener({
    onEventScheduled: () => setBooked(true),
  });

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

          {/* Right — scheduler ↔ confirmation */}
          <div className="bg-surface-soft flex items-center justify-center px-4 sm:px-6 lg:px-12 py-12 md:py-16">
            <AnimatedSection delay={0.12} className="w-full max-w-md">
              <div className="rounded-2xl border border-border bg-card shadow-[0_12px_40px_-12px_rgba(99,102,241,0.18)] dark:shadow-black/30 p-6 md:p-7">
                {booked ? <BookedConfirmation /> : <Scheduler />}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </main>
    </>
  );
}

function Scheduler() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <InlineWidget
      // Force remount when theme flips; Calendly reads pageSettings once at mount.
      key={theme}
      url={CALENDLY_URL}
      styles={{ height: "630px", width: "100%" }}
      pageSettings={{
        primaryColor: "0085ef",
        textColor: isDark ? "f8fafc" : "0f172a",
        backgroundColor: isDark ? "0c121d" : "ffffff",
        hideEventTypeDetails: true,
        hideGdprBanner: true,
        hideLandingPageDetails: true,
      }}
    />
  );
}

function BookedConfirmation() {
  return (
    <div role="status" aria-live="polite" className="flex flex-col gap-6">
      <div>
        <h2 className="text-section-md text-foreground whitespace-nowrap">
          Your Demo Is Booked.
        </h2>
        <p className="text-body text-muted-foreground mt-2">
          We&apos;ll show you exactly how your factoring firm can operate
          effortlessly.
        </p>
      </div>

      <div className="rounded-xl border border-primary/25 bg-primary/[0.06] p-4">
        <div className="text-eyebrow text-primary mb-2">
          What Happens Next?
        </div>
        <p className="text-body text-foreground">
          A calendar invite has been sent to your email with the meeting link.
        </p>
      </div>
    </div>
  );
}


export { ContactSales };
