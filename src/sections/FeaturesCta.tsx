import { Link } from 'react-router-dom'
import { AnimatedSection } from '@/components/AnimatedSection'

function FeaturesCta() {
  return (
    <section className="relative overflow-hidden bg-[var(--set2-bg)]">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <AnimatedSection delay={0} className="flex flex-col items-center text-center gap-5">
          <h2 className="text-section-xl text-foreground">
            Factoring Infrastructure for the AI Era
          </h2>

          <p className="text-body-lg text-muted-foreground">
            Join the institutions re-vitalizing their operations with FactorFox.
          </p>

          <Link
            to="/contact-sales"
            className="mt-6 px-10 py-4 text-[15px] font-bold rounded-full bg-primary text-white hover:bg-primary/90 transition-colors shadow-lg shadow-primary/30"
          >
            Experience the Platform
          </Link>
        </AnimatedSection>
      </div>
    </section>
  )
}

export { FeaturesCta }
