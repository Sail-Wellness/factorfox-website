import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionWrapper } from "@/components/SectionWrapper";

import quickbooksLogo from "@/assets/logos/quickbooks.svg";
import qbDarkLogo from "@/assets/logos/qb_dark.svg";
import xeroLogo from "@/assets/logos/xero.svg";
import creditsafeLogo from "@/assets/logos/creditsafe.svg";
interface Logo {
  src: string;
  darkSrc?: string;
  alt: string;
  h: number;
}

// Only what the platform repository actually supports. Six other logos were
// removed here because no code behind them could be found. They go back the day
// the integration is real, and not a day earlier.
const lightRow1: Logo[] = [
  { src: quickbooksLogo, alt: "QuickBooks Online", h: 68 },
  { src: xeroLogo, alt: "Xero", h: 56 },
  { src: creditsafeLogo, alt: "Creditsafe", h: 44 },
];
const lightRow2: Logo[] = [];

const darkRow1: Logo[] = [
  { src: quickbooksLogo, darkSrc: qbDarkLogo, alt: "QuickBooks Online", h: 44 },
  { src: xeroLogo, alt: "Xero", h: 56 },
  { src: creditsafeLogo, alt: "Creditsafe", h: 44 },
];
const darkRow2: Logo[] = [];

function LogoRow({ logos }: { logos: Logo[] }) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16">
      {logos.map(({ src, darkSrc, alt, h }) => (
        <span key={alt} className="inline-flex items-center">
          <img
            src={src}
            alt={alt}
            loading="lazy"
            style={{ height: h }}
            className={`w-auto object-contain ${darkSrc ? "dark:hidden" : ""}`}
          />
          {darkSrc && (
            <img
              src={darkSrc}
              alt={alt}
              loading="lazy"
              aria-hidden="true"
              style={{ height: h }}
              className="w-auto object-contain hidden dark:block"
            />
          )}
        </span>
      ))}
    </div>
  );
}

function IntegrationsSection() {
  return (
    <SectionWrapper className="bg-[var(--set2-bg)]">
      {/* Label */}
      <AnimatedSection delay={0} className="text-center mb-12">
        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
          Unifying Systems Under 1 Workflow
        </p>
      </AnimatedSection>

      {/* Light mode: 5 + 5 */}
      <AnimatedSection
        delay={0.08}
        className="flex flex-col gap-12 dark:hidden"
      >
        <LogoRow logos={lightRow1} />
        <LogoRow logos={lightRow2} />
      </AnimatedSection>

      {/* Dark mode: 5 + 5 */}
      <AnimatedSection
        delay={0.08}
        className="hidden dark:flex flex-col gap-12"
      >
        <LogoRow logos={darkRow1} />
        <LogoRow logos={darkRow2} />
      </AnimatedSection>
    </SectionWrapper>
  );
}

export { IntegrationsSection };
