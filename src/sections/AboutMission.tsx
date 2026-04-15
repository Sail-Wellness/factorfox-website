import { DraftingCompass, Bot, Shield } from 'lucide-react'
import { AnimatedSection } from '@/components/AnimatedSection'

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
    <section className="relative overflow-hidden bg-[var(--set1-bg)]">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* Left: heading */}
          <AnimatedSection delay={0} className="flex flex-col">
            <h2
              className="font-black text-foreground leading-[1.05] mb-6"
              style={{ fontSize: 'clamp(40px, 5vw, 64px)' }}
            >
              Our Mission
            </h2>
            <p className="text-[16.5px] leading-relaxed text-muted-foreground max-w-[440px]">
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
                  <h3 className="text-[18px] font-bold text-foreground">
                    {title}
                  </h3>
                  <p className="text-[15px] leading-relaxed text-muted-foreground max-w-[440px]">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </AnimatedSection>

        </div>
      </div>
    </section>
  )
}

export { AboutMission }
