import { AnimatedSection } from '@/components/AnimatedSection'
import { SectionWrapper } from '@/components/SectionWrapper'
import screenshotImg from '@/assets/images/document_Intelligence.svg'
import screenshotDarkImg from '@/assets/images/document_Intelligence_dark.svg'

function FeaturesDocumentIntelligence() {
  return (
    <SectionWrapper className="relative overflow-hidden bg-[var(--set2-bg)]" innerClassName="relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left: text */}
          <AnimatedSection delay={0} className="flex flex-col max-w-lg">
            <h2 className="text-section-lg text-foreground mb-5">
Document Intelligence
            </h2>
            <p className="text-body text-muted-foreground">
              Extract, verify, and structure every document instantly. Our
              proprietary intelligence layer converts raw documents into
              structured, decision-ready data.
            </p>
          </AnimatedSection>

          {/* Right: screenshot */}
          <AnimatedSection delay={0.12} className="relative w-full">
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
          </AnimatedSection>

        </div>
    </SectionWrapper>
  )
}

export { FeaturesDocumentIntelligence }
