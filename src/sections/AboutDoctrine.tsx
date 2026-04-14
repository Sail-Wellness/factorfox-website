import { ArrowRight } from 'lucide-react'
import { AnimatedSection } from '@/components/AnimatedSection'
import bookCover from '@/assets/images/book_cover.svg'
import authorImg from '@/assets/images/author.svg'

function AboutDoctrine() {
  return (
    <section className="relative overflow-hidden bg-white dark:bg-[#0C121D]">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Left: text */}
          <AnimatedSection delay={0} className="flex flex-col">
            <h2
              className="font-black text-gray-900 dark:text-white leading-[1.05] mb-6"
              style={{ fontSize: 'clamp(36px, 4.5vw, 56px)' }}
            >
              The Doctrine for<br />Modern Factoring
            </h2>

            <p className="text-[16.5px] leading-relaxed text-gray-500 dark:text-gray-400 max-w-[460px] mb-8">
              25+ years of operator experience, distilled into a system for
              faster capital, lower risk, and higher returns.
            </p>

            {/* Author block */}
            <div className="flex items-center gap-3 mb-8">
              <img
                src={authorImg}
                alt="Roberto Vasquez"
                className="h-11 w-11 rounded-full object-cover flex-shrink-0"
              />
              <div className="flex flex-col">
                <span className="text-[14px] font-semibold text-gray-900 dark:text-white">
                  Written by Roberto Vasquez
                </span>
                <span className="text-[12px] text-gray-500 dark:text-gray-400">
                  Founder &amp; Architect of FactorFox
                </span>
              </div>
            </div>

            {/* CTA */}
            <a
              href="#"
              className="self-start inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-white font-semibold text-[15px] hover:bg-primary/90 transition-colors shadow-sm"
            >
              Get the Doctrine
              <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
            </a>
          </AnimatedSection>

          {/* Right: book cover */}
          <AnimatedSection delay={0.12} className="relative w-full flex justify-center lg:justify-end">
            <img
              src={bookCover}
              alt="Signals — The Doctrine of Transportation Factoring"
              className="w-full max-w-[340px] h-auto"
            />
          </AnimatedSection>

        </div>
      </div>
    </section>
  )
}

export { AboutDoctrine }
