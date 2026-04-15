import { DraftingCompass, Bot, Shield } from 'lucide-react'
import { AnimatedSection } from '@/components/AnimatedSection'
import { SectionWrapper } from '@/components/SectionWrapper'

const MISSION_ITEMS = [
  {
    icon: DraftingCompass,
    title: 'Centralize Workflows',
    description:
      'Built by operators who have managed thousands of deals, not theorists working from the outside.',
  },
  {
    icon: Bot,
    title: 'Automate Operations',
    description:
      'Remove the 20 plus manual steps that slow capital deployment and bloat operational overhead.',
  },
  {
    icon: Shield,
    title: 'Eliminate Fraud',
    description:
      'Engineered to reduce risk at the system level, not just detect it after the fact.',
  },
]

function AboutMission() {
  return (
    <SectionWrapper className="relative overflow-hidden bg-[var(--set1-bg)]" innerClassName="relative">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* Left: heading */}
          <AnimatedSection delay={0} className="flex flex-col">
            <h2 className="text-section-xl text-foreground mb-6">
              Our Mission
            </h2>
            <p className="text-body-lg text-muted-foreground max-w-[440px]">
              Turn factoring from a fragmented, fraud-exposed operation into a
              scalable, trusted asset class.
            </p>
          </AnimatedSection>

          {/* Right: items */}
          <AnimatedSection delay={0.12} className="flex flex-col gap-10">
            {MISSION_ITEMS.map(({ icon: Icon, title, description }) => (
              <div key={title} className="flex gap-4">
                <Icon
                  className="h-7 w-7 text-primary flex-shrink-0 mt-0.5"
                  strokeWidth={2}
                />
                <div className="flex flex-col gap-2">
                  <h3 className="text-card-title text-foreground">
                    {title}
                  </h3>
                  <p className="text-body text-muted-foreground max-w-[440px]">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </AnimatedSection>

      </div>
    </SectionWrapper>
  )
}

export { AboutMission }
