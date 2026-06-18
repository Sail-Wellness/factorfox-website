import { SectionWrapper } from '@/components/SectionWrapper'
import { AnimatedSection } from '@/components/AnimatedSection'
import { CapitalHeading } from './CapitalHeading'

function CapitalNetwork() {
  return (
    <SectionWrapper id="about" className="scroll-mt-24 bg-[var(--set2-bg)]">
      <div className="mx-auto grid max-w-5xl items-start gap-10 md:grid-cols-[1fr_1.3fr] md:gap-14">
        <CapitalHeading
          align="left"
          size="display"
          titleClassName="text-section-lg"
          eyebrow="About / The network"
          title="Backed by the system of record you already run on."
        />

        <AnimatedSection delay={0.08} className="pt-1.5">
          <p className="text-body-lg text-muted-foreground">
            FactorFox Capital is the senior-lending arm of the FactorFox / FactorEvo
            network, the software freight-factoring companies run on. Because the
            lender and the system of record are the same machine, every advance is
            born in the data, every dollar of collections is seen, and the
            cross-network view that catches fraud is structural, not bolted on.
          </p>
        </AnimatedSection>
      </div>
    </SectionWrapper>
  )
}

export { CapitalNetwork }
