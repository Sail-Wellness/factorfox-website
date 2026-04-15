import { ErrorBoundary as ReactErrorBoundary, type FallbackProps } from 'react-error-boundary'
import { useLocation } from 'react-router-dom'
import type { ReactNode } from 'react'

function Fallback({ resetErrorBoundary }: FallbackProps) {
  return (
    <section className="relative overflow-hidden bg-[var(--set1-bg)]">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 min-h-[70vh] flex items-center justify-center py-24 md:py-32">
        <div className="flex flex-col items-center text-center gap-6 max-w-md">
          <h2 className="text-section-xl text-foreground">
            Something went wrong
          </h2>
          <p className="text-body-lg text-muted-foreground">
            An unexpected error occurred. Try again, or reload the page if the
            issue persists.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 mt-4">
            <button
              type="button"
              onClick={resetErrorBoundary}
              className="btn-primary-lg"
            >
              Try Again
            </button>
            <button
              type="button"
              onClick={() => window.location.reload()}
              className="btn-secondary-lg"
            >
              Reload Page
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

function logError(error: Error, info: { componentStack?: string | null }) {
  // TODO: forward to Sentry / LogRocket / etc. when error tracking is set up
  console.error('ErrorBoundary caught an error:', error, info.componentStack)
}

interface Props {
  children: ReactNode
}

function ErrorBoundary({ children }: Props) {
  const location = useLocation()
  // Reset error state automatically when the user navigates to a new route,
  // so a broken page doesn't stay "stuck" after they click Home.
  return (
    <ReactErrorBoundary
      FallbackComponent={Fallback}
      onError={logError}
      resetKeys={[location.pathname]}
    >
      {children}
    </ReactErrorBoundary>
  )
}

export { ErrorBoundary }
