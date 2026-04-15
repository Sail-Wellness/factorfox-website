import { LogIn, Brain, FilterX, Shield, Stamp, Banknote, ArrowRight } from 'lucide-react'
import { AnimatedSection } from '@/components/AnimatedSection'
import { SectionWrapper } from '@/components/SectionWrapper'

const steps = [
  { icon: LogIn,    title: 'Intake',      description: 'Multi-channel ingestion' },
  { icon: Brain,    title: 'Extraction',  description: 'AI OCR & Parsing' },
  { icon: FilterX,  title: 'Validation',  description: 'Consistency checking' },
  { icon: Shield,   title: 'Risk',        description: 'Fraud scoring' },
  { icon: Stamp,    title: 'Decision',    description: 'Policy enforcement' },
  { icon: Banknote, title: 'Action',      description: 'Instant funding' },
]

function DocumentsToDecisions() {
  return (
    <SectionWrapper className="bg-[var(--set1-bg)]">
      {/* Heading */}
      <AnimatedSection delay={0} className="text-center mb-16">
        <h2
          className="font-black text-gray-900 dark:text-white leading-[1.05] mb-4 whitespace-nowrap"
          style={{ fontSize: 'clamp(22px, 3.8vw, 52px)' }}
        >
          From Documents to Decisions—Automatically
        </h2>
        <p className="text-[16.5px] text-gray-400 max-w-xl mx-auto">
          The end-to-end pipeline that powers high-velocity factoring operations.
        </p>
      </AnimatedSection>

      {/* Steps row */}
      <div className="flex flex-wrap items-start justify-center gap-y-10">
        {steps.map(({ icon: Icon, title, description }, i) => (
          <AnimatedSection key={title} delay={i * 0.07} className="flex items-start">
            {/* Step */}
            <div className="flex flex-col items-center text-center w-28 sm:w-32">
              <div className={`flex h-14 w-14 items-center justify-center rounded-3xl mb-4 ${
                title === 'Action'
                  ? 'bg-blue-50 dark:bg-primary'
                  : 'bg-slate-100 dark:bg-[var(--set1-box)]'
              }`}>
                <Icon
                  className={`h-6 w-6 ${
                    title === 'Action'
                      ? 'text-primary dark:text-white'
                      : 'text-gray-800 dark:text-white'
                  }`}
                  strokeWidth={1.5}
                />
              </div>
              <p className="text-[15px] font-bold text-gray-900 dark:text-white mb-1">{title}</p>
              <p className="text-[13px] text-gray-400 leading-snug">{description}</p>
            </div>

            {/* Arrow between steps */}
            {i < steps.length - 1 && (
              <div className="flex items-center mt-7 mx-1 sm:mx-2 text-gray-300 dark:text-gray-700">
                <ArrowRight className="h-4 w-4" />
              </div>
            )}
          </AnimatedSection>
        ))}
      </div>
    </SectionWrapper>
  )
}

export { DocumentsToDecisions }
