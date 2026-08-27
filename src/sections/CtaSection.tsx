import { Link } from 'react-router-dom'
import { AnimatedSection } from '@/components/AnimatedSection'
import { SectionWrapper } from '@/components/SectionWrapper'

function CtaSection() {
  return (
    <SectionWrapper className="bg-[var(--set2-bg)]">
      <AnimatedSection delay={0} className="flex flex-col items-center text-center gap-6">
        <h2 className="text-section-xl text-foreground">
          See FactorFox in Action
        </h2>

        <p className="text-body-lg text-muted-foreground max-w-md">
          Join the factors and asset based lenders running their operation on FactorFox.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 mt-2">
          <Link to="/contact-sales" className="btn-primary-lg">
            Request Demo
          </Link>
          <Link to="/features" className="btn-secondary-lg">
            View Platform
          </Link>
        </div>
      </AnimatedSection>
    </SectionWrapper>
  )
}

export { CtaSection }
