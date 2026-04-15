import { ArrowRight } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionWrapper } from "@/components/SectionWrapper";
import bookCover from "@/assets/images/book_cover.svg";
import authorImg from "@/assets/images/author.svg";

function AboutDoctrine() {
  return (
    <SectionWrapper className="relative overflow-hidden bg-[var(--set2-bg)]" innerClassName="relative">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left: text */}
          <AnimatedSection delay={0} className="flex flex-col">
            <h2 className="text-section-xl text-foreground mb-6">
              The Doctrine for
              <br />
              Modern Factoring
            </h2>

            <p className="text-body-lg text-muted-foreground max-w-[460px] mb-8">
              25+ years of operator experience, distilled into a system for
              faster capital, lower risk, and higher returns.
            </p>

            {/* Author block */}
            <div className="flex items-center gap-3 mb-8">
              <img
                src={authorImg}
                alt="Roberto Vasquez"
                loading="lazy"
                className="h-11 w-11 rounded-full object-cover flex-shrink-0"
              />
              <div className="flex flex-col">
                <span className="text-[14px] font-semibold text-foreground">
                  Written by Roberto Vasquez
                </span>
                <span className="text-[12px] text-muted-foreground">
                  Founder &amp; Architect of FactorFox
                </span>
              </div>
            </div>

            {/* CTA — TODO: replace href with real PDF URL when available */}
            <a
              href="#"
              className="self-start inline-flex items-center gap-2 text-primary font-semibold text-[15px] hover:opacity-75 transition-opacity"
            >
              Get the Doctrine
              <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
            </a>
          </AnimatedSection>

          {/* Right: book cover */}
          <AnimatedSection
            delay={0.12}
            className="relative w-full flex justify-center lg:justify-end"
          >
            <img
              src={bookCover}
              alt="Signals — The Doctrine of Transportation Factoring"
              loading="lazy"
              className="w-full max-w-[340px] h-auto"
            />
          </AnimatedSection>
      </div>
    </SectionWrapper>
  );
}

export { AboutDoctrine };
