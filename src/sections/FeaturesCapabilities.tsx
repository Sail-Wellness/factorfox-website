import { Workflow, LayoutGrid, BellRing } from 'lucide-react'
import { AnimatedSection } from '@/components/AnimatedSection'

const capabilities = [
  {
    icon: Workflow,
    title: 'Workflow\nAutomation',
    description:
      'Automate decisions and routing with system logic. Improve operator capital load by 10x.',
  },
  {
    icon: LayoutGrid,
    title: 'Client Operating\nSystem',
    description:
      "Simplified visibility, uploads, and automation for your clients. A portal they'll actually enjoy using.",
  },
  {
    icon: BellRing,
    title: 'Collections\nEngine',
    description:
      'Automated outreach and escalation. Polite, firm, and fully integrated.',
  },
]

function FeaturesCapabilities() {
  return (
    <section className="relative overflow-hidden bg-[var(--set1-bg)]">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-12 md:gap-8">
          {capabilities.map(({ icon: Icon, title, description }, i) => (
            <AnimatedSection key={title} delay={i * 0.08} className="flex flex-col max-w-[260px]">
              <Icon
                className="h-8 w-8 text-primary mb-6"
                strokeWidth={2.25}
              />
              <h3 className="text-section-md text-foreground mb-4 whitespace-pre-line">
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

export { FeaturesCapabilities }
