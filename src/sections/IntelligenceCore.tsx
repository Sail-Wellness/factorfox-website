import { ScanText, ShieldAlert, GitFork, Sparkles, CheckCircle2, Zap } from 'lucide-react'
import { AnimatedSection } from '@/components/AnimatedSection'
import { SectionWrapper } from '@/components/SectionWrapper'

const activities = [
  { icon: ScanText,    bg: 'bg-primary', text: 'Reading incoming documents...',      offset: '' },
  { icon: ShieldAlert, bg: 'bg-red-500', text: 'Verifying against fraud signals...', offset: 'ml-8' },
  { icon: GitFork,     bg: 'bg-primary', text: 'Turning data into decisions...',     offset: '' },
]

const features = [
  {
    icon: Sparkles,
    title: 'AI Extraction',
    description:
      'Industry-leading LLM-powered extraction for BOLs, Invoices, and Rate Conforms with 99.9% accuracy.',
  },
  {
    icon: CheckCircle2,
    title: 'Real-time Validation',
    description:
      'Instantly cross-reference documents against external databases to ensure data integrity before human review.',
  },
  {
    icon: Zap,
    title: 'Event-Based Decisioning',
    description:
      'Configure complex workflow triggers that react to risk signals or operational events in milliseconds.',
  },
]

function IntelligenceCore() {
  return (
    <SectionWrapper className="relative overflow-hidden bg-white dark:bg-[#0d0d0f]">
      <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* Left: activity feed card */}
        <AnimatedSection delay={0}>
          <div className="relative rounded-3xl p-8 flex flex-col gap-4 bg-white dark:bg-[#0f1520] border border-gray-100 dark:border-gray-800 shadow-sm overflow-hidden">
            {/* Gradient centered on card */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 dark:hidden"
              style={{
                background:
                  'radial-gradient(ellipse 90% 90% at 50% 50%, rgba(147, 197, 253, 0.5) 0%, rgba(255,255,255,0) 70%)',
              }}
            />
            {activities.map(({ icon: Icon, bg, text, offset }) => (
              <div
                key={text}
                className={`relative flex items-center gap-4 rounded-2xl bg-white dark:bg-[#1a2235] px-5 py-4 shadow-sm border border-gray-100 dark:border-gray-800 ${offset}`}
              >
                <div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${bg}`}>
                  <Icon className="h-4 w-4 text-white" strokeWidth={2} />
                </div>
                <span className="text-[14px] text-gray-600 dark:text-gray-300">{text}</span>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Right: heading + features */}
        <AnimatedSection delay={0.1} className="flex flex-col">
          <h2
            className="font-bold text-gray-900 dark:text-white leading-[1.1] mb-8"
            style={{ fontSize: 'clamp(28px, 3.2vw, 44px)' }}
          >
            The FactorFox Intelligence Core
          </h2>

          <div className="flex flex-col gap-7">
            {features.map(({ icon: Icon, title, description }) => (
              <div key={title} className="flex gap-4">
                <div className="shrink-0 mt-0.5">
                  <Icon className="h-5 w-5 text-primary" strokeWidth={1.75} />
                </div>
                <div>
                  <p className="text-[15px] font-semibold text-gray-900 dark:text-white mb-1">{title}</p>
                  <p className="text-[14px] leading-relaxed text-gray-500 dark:text-gray-400">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>

      </div>
    </SectionWrapper>
  )
}

export { IntelligenceCore }
