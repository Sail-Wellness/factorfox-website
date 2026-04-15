import { AnimatedSection } from '@/components/AnimatedSection'
import { SectionWrapper } from '@/components/SectionWrapper'
import screenshotImg from '@/assets/images/intelligence.png'
import screenshotDarkImg from '@/assets/images/intelligence_dark.png'

function FeaturesHero() {
  return (
    <SectionWrapper
      className="relative overflow-hidden bg-[var(--set1-bg)] pt-24 md:pt-32 pb-16 md:pb-20"
      innerClassName="relative"
    >

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
          <div className="rounded-2xl overflow-hidden border border-[var(--set1-stroke)] shadow-2xl">
            <img
              src={screenshotImg}
              alt="FactorFox dashboard"
              loading="eager"
              className="w-full h-auto block dark:hidden"
            />
            <img
              src={screenshotDarkImg}
              alt="FactorFox dashboard"
              loading="eager"
              aria-hidden="true"
              className="w-full h-auto hidden dark:block"
            />
          </div>
        </AnimatedSection>

    </SectionWrapper>
  )
}

export { FeaturesHero }
