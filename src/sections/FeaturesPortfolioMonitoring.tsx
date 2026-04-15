import { CheckCircle2 } from 'lucide-react'
import { AnimatedSection } from '@/components/AnimatedSection'
import { SectionWrapper } from '@/components/SectionWrapper'
import screenshotImg from '@/assets/images/control.png'
import screenshotDarkImg from '@/assets/images/control_dark.png'

const checklist = [
  {
    title: 'Concentration Alerts',
    description: 'Prevent over-exposure to single debtors automatically.',
  },
  {
    title: 'Yield Analysis',
    description: 'Real-time IRR calculations on every asset in the portfolio.',
  },
]

function FeaturesPortfolioMonitoring() {
  return (
    <SectionWrapper className="relative overflow-hidden bg-[var(--set1-bg)]" innerClassName="relative">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left: screenshot */}
          <AnimatedSection delay={0} className="relative w-full order-2 lg:order-1">
            <div className="rounded-2xl overflow-hidden border border-[var(--set1-stroke)] shadow-2xl">
              <img
                src={screenshotImg}
                alt="Portfolio Monitoring"
                loading="lazy"
                className="w-full h-auto block dark:hidden"
              />
              <img
                src={screenshotDarkImg}
                alt="Portfolio Monitoring"
                loading="lazy"
                aria-hidden="true"
                className="w-full h-auto hidden dark:block"
              />
            </div>
          </AnimatedSection>

          {/* Right: text + checklist */}
          <AnimatedSection delay={0.12} className="flex flex-col max-w-md order-1 lg:order-2">
            <h2 className="text-section-xl text-foreground mb-6">
              Portfolio<br />Monitoring
            </h2>
            <p className="text-body text-muted-foreground mb-8">
              See performance and exposure in real time. FactorFox tracks
              concentration limits and late payments before they become defaults.
            </p>

            {/* Checklist */}
            <ul className="flex flex-col gap-5">
              {checklist.map(({ title, description }) => (
                <li key={title} className="flex gap-3">
                  <CheckCircle2
                    className="h-5 w-5 shrink-0 text-primary mt-0.5"
                    strokeWidth={2}
                  />
                  <div className="flex flex-col gap-1">
                    <h3 className="text-card-title-sm text-foreground">
                      {title}
                    </h3>
                    <p className="text-body-sm text-muted-foreground">
                      {description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </AnimatedSection>

      </div>
    </SectionWrapper>
  )
}

export { FeaturesPortfolioMonitoring }
