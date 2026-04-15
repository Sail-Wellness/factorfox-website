import { AnimatedSection } from '@/components/AnimatedSection'
import { SectionWrapper } from '@/components/SectionWrapper'
import screenshotImg from '@/assets/images/control.png'
import screenshotDarkImg from '@/assets/images/control_dark.png'

function FeaturesDocumentIntelligence() {
  return (
    <SectionWrapper className="relative overflow-hidden bg-[var(--set2-bg)]" innerClassName="relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left: text */}
          <AnimatedSection delay={0} className="flex flex-col max-w-md">
            <h2 className="text-section-xl text-foreground mb-6">
              <span className="block">Document</span>
              <span className="block">Intelligence</span>
            </h2>
            <p className="text-body text-muted-foreground">
              Extract, verify, and structure every document instantly. Our
              proprietary intelligence layer converts raw documents into
              structured, decision-ready data.
            </p>
          </AnimatedSection>

          {/* Right: screenshot */}
          <AnimatedSection delay={0.12} className="relative w-full">
            <div className="rounded-2xl overflow-hidden border border-[var(--set2-stroke)] shadow-2xl">
              <img
                src={screenshotImg}
                alt="Document Intelligence"
                loading="lazy"
                className="w-full h-auto block dark:hidden"
              />
              <img
                src={screenshotDarkImg}
                alt="Document Intelligence"
                loading="lazy"
                aria-hidden="true"
                className="w-full h-auto hidden dark:block"
              />
            </div>
          </AnimatedSection>

        </div>
    </SectionWrapper>
  )
}

export { FeaturesDocumentIntelligence }
