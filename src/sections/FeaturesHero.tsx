import { AnimatedSection } from '@/components/AnimatedSection'
import screenshotImg from '@/assets/images/intelligence.png'
import screenshotDarkImg from '@/assets/images/intelligence_dark.png'

function FeaturesHero() {
  return (
    <section className="relative overflow-hidden bg-[var(--set1-bg)]">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-24 md:pt-32 pb-16 md:pb-20">

        {/* Heading + subtitle */}
        <AnimatedSection delay={0} className="text-center mb-12 md:mb-16">
          <h1 className="text-display text-foreground mb-5">
            automate everything
          </h1>
          <p className="text-body-lg text-muted-foreground">
            Operate less. Increase returns. Focus on what matters.
          </p>
        </AnimatedSection>

        {/* Screenshot */}
        <AnimatedSection delay={0.12} className="relative max-w-5xl mx-auto">
          <div className="rounded-2xl overflow-hidden border border-border shadow-2xl">
            <img
              src={screenshotImg}
              alt="FactorFox dashboard"
              className="w-full h-auto block dark:hidden"
            />
            <img
              src={screenshotDarkImg}
              alt="FactorFox dashboard"
              className="w-full h-auto hidden dark:block"
            />
          </div>
        </AnimatedSection>

      </div>
    </section>
  )
}

export { FeaturesHero }
