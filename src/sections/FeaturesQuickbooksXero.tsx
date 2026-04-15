import { AnimatedSection } from "@/components/AnimatedSection";
import screenshotImg from "@/assets/images/qb_stream.svg";
import screenshotDarkImg from "@/assets/images/qb_stream_dark.svg";

function FeaturesQuickbooksXero() {
  return (
    <section className="relative overflow-hidden bg-[var(--set2-bg)]">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: text */}
          <AnimatedSection delay={0} className="flex flex-col max-w-md">
            <h2 className="text-section-sm text-foreground mb-5">
              Quickbooks &amp; Xero Integration
            </h2>
            <p className="text-body text-muted-foreground">
              Full visibility across your entire book. Every invoice, update,
              and risk signal is live, unified, and instantly accessible.
            </p>
          </AnimatedSection>

          {/* Right: screenshot */}
          <AnimatedSection delay={0.12} className="relative w-full">
            <img
              src={screenshotImg}
              alt="QuickBooks &amp; Xero integration"
              loading="lazy"
              className="w-full h-auto block dark:hidden"
            />
            <img
              src={screenshotDarkImg}
              alt="QuickBooks &amp; Xero integration"
              loading="lazy"
              aria-hidden="true"
              className="w-full h-auto hidden dark:block"
            />
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

export { FeaturesQuickbooksXero };
