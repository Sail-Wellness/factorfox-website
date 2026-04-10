import { AnimatedSection } from '@/components/AnimatedSection'
import { SectionWrapper } from '@/components/SectionWrapper'

import tLogo from '@/assets/logos/t.svg'
import quickbooksLogo from '@/assets/logos/quickbooks.svg'
import xeroLogo from '@/assets/logos/xero.svg'
import creditsafeLogo from '@/assets/logos/creditsafe.svg'
import decipherLogo from '@/assets/logos/decipher.svg'
import ansoniaLogo from '@/assets/logos/ansonia.svg'
import loadconnexLogo from '@/assets/logos/loadconnex.svg'
import farelanesLogo from '@/assets/logos/farelanes.svg'
import atobLogo from '@/assets/logos/atob.svg'
import netsuitLogo from '@/assets/logos/netsuit.svg'

const row1 = [
  { src: tLogo,          alt: 'Transflo',   h: 48 },
  { src: quickbooksLogo, alt: 'QuickBooks',  h: 32 },
  { src: xeroLogo,       alt: 'Xero',        h: 40 },
  { src: creditsafeLogo, alt: 'CreditSafe',  h: 32 },
  { src: decipherLogo,   alt: 'Decipher',    h: 32 },
  { src: ansoniaLogo,    alt: 'Ansonia',     h: 40 },
]

const row2 = [
  { src: loadconnexLogo, alt: 'LoadConnex',  h: 36 },
  { src: farelanesLogo,  alt: 'Farelanes',   h: 40 },
  { src: atobLogo,       alt: 'AtoB',        h: 40 },
  { src: netsuitLogo,    alt: 'NetSuite',    h: 32 },
]

function LogoRow({ logos }: { logos: typeof row1 }) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16">
      {logos.map(({ src, alt, h }) => (
        <img
          key={alt}
          src={src}
          alt={alt}
          style={{ height: h }}
          className="w-auto object-contain"
        />
      ))}
    </div>
  )
}

function IntegrationsSection() {
  return (
    <SectionWrapper style={{ backgroundColor: '#f1f5f9' }}>
      {/* Label */}
      <AnimatedSection delay={0} className="text-center mb-12">
        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
          Unifying Systems Under 1 Workflow
        </p>
      </AnimatedSection>

      {/* Logo rows */}
      <AnimatedSection delay={0.08} className="flex flex-col gap-12">
        <LogoRow logos={row1} />
        <LogoRow logos={row2} />
      </AnimatedSection>
    </SectionWrapper>
  )
}

export { IntegrationsSection }
