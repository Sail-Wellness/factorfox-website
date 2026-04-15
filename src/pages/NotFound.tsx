import { Link } from 'react-router-dom'
import { SEO } from '@/components/SEO'
import { AnimatedSection } from '@/components/AnimatedSection'

function NotFound() {
  return (
    <>
      <SEO
        title="Page Not Found — FactorFox"
        description="The page you're looking for doesn't exist or has been moved."
        path="/404"
      />

      <main>
        <section className="relative overflow-hidden bg-[var(--set1-bg)]">
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 min-h-[70vh] flex items-center justify-center py-24 md:py-32">
            <AnimatedSection delay={0} className="flex flex-col items-center text-center gap-6 max-w-md">
              <h1 className="text-display text-primary leading-none">404</h1>
              <h2 className="text-section-xl text-foreground">
                Page Not Found
              </h2>
              <p className="text-body-lg text-muted-foreground">
                The page you&rsquo;re looking for doesn&rsquo;t exist or has been moved.
              </p>
              <Link to="/" className="btn-primary-lg mt-4">
                Back to Home
              </Link>
            </AnimatedSection>
          </div>
        </section>
      </main>
    </>
  )
}

export { NotFound }
