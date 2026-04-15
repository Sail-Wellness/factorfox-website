import { Brain, Gauge, Layers } from 'lucide-react'
import { AnimatedSection } from '@/components/AnimatedSection'

const PILLARS = [
  {
    icon: Brain,
    title: 'Intelligence',
    description:
      'Predictive risk modeling that learns from decades of transaction data to spot anomalies before they manifest.',
  },
  {
    icon: Gauge,
    title: 'Speed',
    description:
      'Sub-second processing of documentation and automated funding triggers that operate at the speed of thought.',
  },
  {
    icon: Layers,
    title: 'Scale',
    description:
      'Global-ready architecture designed to handle massive volume increases without adding headcount to your team.',
  },
]

function AboutPillars() {
  return (
    <section className="relative overflow-hidden bg-[var(--set1-bg)]">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28">

        <AnimatedSection delay={0} className="flex flex-col mb-14 md:mb-16">
          <h2 className="text-section-xl text-foreground mb-5">
            Now Rebuilt for an AI World
          </h2>
          <p className="text-body-lg text-muted-foreground max-w-[560px]">
            The three pillars of our next-generation core infrastructure.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PILLARS.map(({ icon: Icon, title, description }, i) => (
            <AnimatedSection
              key={title}
              delay={0.1 + i * 0.08}
              className="rounded-2xl border border-[var(--set1-stroke)] bg-[var(--set1-box)] p-8 flex flex-col"
            >
              <Icon
                className="h-7 w-7 text-primary mb-8"
                strokeWidth={2}
              />
              <h3 className="text-section-md text-foreground mb-4">
                {title}
              </h3>
              <p className="text-body text-muted-foreground">
                {description}
              </p>
            </AnimatedSection>
          ))}
        </div>

      </div>
    </section>
  )
}

export { AboutPillars }
