import { AnimatedSection } from '@/components/AnimatedSection'
import screenshotImg from '@/assets/images/control.png'
import screenshotDarkImg from '@/assets/images/control_dark.png'

function FeaturesDocumentIntelligence() {
  return (
    <section className="relative overflow-hidden bg-[var(--set2-bg)]">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left: text */}
          <AnimatedSection delay={0} className="flex flex-col max-w-md">
            <h2 className="text-section-xl text-foreground mb-6">
              Document<br />Intelligence
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
      </div>
    </section>
  )
}

export { FeaturesDocumentIntelligence }
