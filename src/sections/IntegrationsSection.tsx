import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionWrapper } from "@/components/SectionWrapper";

import tLogo from "@/assets/logos/t.svg";
import quickbooksLogo from "@/assets/logos/quickbooks.svg";
import qbDarkLogo from "@/assets/logos/qb_dark.svg";
import xeroLogo from "@/assets/logos/xero.svg";
import creditsafeLogo from "@/assets/logos/creditsafe.svg";
import decipherLogo from "@/assets/logos/decipher.svg";
import ansoniaLogo from "@/assets/logos/ansonia.svg";
import loadconnexLogo from "@/assets/logos/loadconnex.svg";
import farelanesLogo from "@/assets/logos/farelanes.svg";
import farelanesDarkLogo from "@/assets/logos/farelanes_dark.svg";
import atobLogo from "@/assets/logos/atob.svg";
import atobDarkLogo from "@/assets/logos/atob_dark.svg";
import netsuitLogo from "@/assets/logos/netsuit.svg";
import netsuitDarkLogo from "@/assets/logos/netsuite_dark.svg";

interface Logo {
  src: string;
  darkSrc?: string;
  alt: string;
  h: number;
}

// Light mode: 5 + 5
const lightRow1: Logo[] = [
  { src: tLogo, alt: "Transflo", h: 64 },
  { src: creditsafeLogo, alt: "CreditSafe", h: 44 },
  { src: quickbooksLogo, alt: "QuickBooks", h: 76 },
  { src: loadconnexLogo, alt: "LoadConnex", h: 48 },
  { src: farelanesLogo, alt: "Farelanes", h: 60 },
];
const lightRow2: Logo[] = [
  { src: netsuitLogo, alt: "NetSuite", h: 64 },
  { src: decipherLogo, alt: "Decipher", h: 44 },
  { src: xeroLogo, alt: "Xero", h: 56 },
  { src: ansoniaLogo, alt: "Ansonia", h: 52 },
  { src: atobLogo, alt: "AtoB", h: 48 },
];

// Dark mode: 5 + 5
const darkRow1: Logo[] = [
  { src: tLogo, alt: "Transflo", h: 64 },
  { src: creditsafeLogo, alt: "CreditSafe", h: 44 },
  { src: quickbooksLogo, darkSrc: qbDarkLogo, alt: "QuickBooks", h: 44 },
  { src: loadconnexLogo, alt: "LoadConnex", h: 48 },
  { src: farelanesLogo, darkSrc: farelanesDarkLogo, alt: "Farelanes", h: 60 },
];
const darkRow2: Logo[] = [
  { src: netsuitLogo, darkSrc: netsuitDarkLogo, alt: "NetSuite", h: 64 },
  { src: decipherLogo, alt: "Decipher", h: 44 },
  { src: xeroLogo, alt: "Xero", h: 56 },
  { src: ansoniaLogo, alt: "Ansonia", h: 52 },
  { src: atobLogo, darkSrc: atobDarkLogo, alt: "AtoB", h: 56 },
];

function LogoRow({ logos }: { logos: Logo[] }) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16">
      {logos.map(({ src, darkSrc, alt, h }) => (
        <span key={alt} className="inline-flex items-center">
          <img
            src={src}
            alt={alt}
            style={{ height: h }}
            className={`w-auto object-contain ${darkSrc ? "dark:hidden" : ""}`}
          />
          {darkSrc && (
            <img
              src={darkSrc}
              alt={alt}
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
        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
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
