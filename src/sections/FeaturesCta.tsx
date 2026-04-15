import { Link } from 'react-router-dom'
import { AnimatedSection } from '@/components/AnimatedSection'
import { SectionWrapper } from '@/components/SectionWrapper'

function FeaturesCta() {
  return (
    <SectionWrapper
      className="relative overflow-hidden bg-[var(--set2-bg)] py-24 md:py-32"
      innerClassName="relative"
    >
        <AnimatedSection delay={0} className="flex flex-col items-center text-center gap-5">
          <h2 className="text-section-xl text-foreground">
            Factoring Infrastructure for the AI Era
          </h2>

          <p className="text-body-lg text-muted-foreground">
            Join the institutions re-vitalizing their operations with FactorFox.
          </p>

          <Link to="/contact-sales" className="btn-primary-lg mt-6">
            Experience the Platform
          </Link>
        </AnimatedSection>
    </SectionWrapper>
  )
}

export { FeaturesCta }
