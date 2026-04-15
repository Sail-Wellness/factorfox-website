import { AnimatedSection } from '@/components/AnimatedSection'
import screenshotImg from '@/assets/images/intelligence.png'
import screenshotDarkImg from '@/assets/images/intelligence_dark.png'

function FeaturesLiveRiskEngine() {
  return (
    <section className="relative overflow-hidden bg-[var(--set1-bg)]">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left: screenshot */}
          <AnimatedSection delay={0} className="relative w-full order-2 lg:order-1">
            <div className="rounded-2xl overflow-hidden border border-border shadow-2xl">
              <img
                src={screenshotImg}
                alt="Live Risk Engine"
                className="w-full h-auto block dark:hidden"
              />
              <img
                src={screenshotDarkImg}
                alt="Live Risk Engine"
                className="w-full h-auto hidden dark:block"
              />
            </div>
          </AnimatedSection>

          {/* Right: text */}
          <AnimatedSection delay={0.12} className="flex flex-col max-w-md order-1 lg:order-2">
            <h2 className="text-section-sm text-foreground mb-5">
              Live Risk Engine
            </h2>
            <p className="text-body text-muted-foreground">
              Every transaction is continuously monitored and risk-scored in
              real time. Fraud, dilution, concentration, and payment risks are
              detected instantly and surfaced the moment they appear.
            </p>
          </AnimatedSection>

        </div>
      </div>
    </section>
  )
}

export { FeaturesLiveRiskEngine }
