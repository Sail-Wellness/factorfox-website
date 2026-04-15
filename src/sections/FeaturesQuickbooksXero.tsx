import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionWrapper } from "@/components/SectionWrapper";
import screenshotImg from "@/assets/images/qb_stream.svg";
import screenshotDarkImg from "@/assets/images/qb_stream_dark.svg";

function FeaturesQuickbooksXero() {
  return (
    <SectionWrapper className="relative overflow-hidden bg-[var(--set2-bg)]" innerClassName="relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: text */}
          <AnimatedSection delay={0} className="flex flex-col max-w-md">
            <h2 className="text-section-xl text-foreground mb-5">
              <span className="block">Quickbooks &amp;</span>
              <span className="block">Xero Integration</span>
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
    </SectionWrapper>
  );
}

export { FeaturesQuickbooksXero };
