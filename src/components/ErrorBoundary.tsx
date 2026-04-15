import { Component, type ErrorInfo, type ReactNode } from 'react'

interface Props {
  children: ReactNode
}

interface State {
  hasError: boolean
}

class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false }

  static getDerivedStateFromError(): State {
    return { hasError: true }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // TODO: forward to Sentry / LogRocket / etc. when error tracking is set up
    console.error('ErrorBoundary caught an error:', error, errorInfo)
  }

  handleReload = () => {
    this.setState({ hasError: false })
    window.location.reload()
  }

  render() {
    if (this.state.hasError) {
      return (
        <section className="relative overflow-hidden bg-[var(--set1-bg)]">
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 min-h-[70vh] flex items-center justify-center py-24 md:py-32">
            <div className="flex flex-col items-center text-center gap-6 max-w-md">
              <h2 className="text-section-xl text-foreground">
                Something went wrong
              </h2>
              <p className="text-body-lg text-muted-foreground">
                An unexpected error occurred. Please refresh the page to
                continue — we&rsquo;ve been notified.
              </p>
              <button
                type="button"
                onClick={this.handleReload}
                className="btn-primary-lg mt-4"
              >
                Reload Page
              </button>
            </div>
          </div>
        </section>
      )
    }

    return this.props.children
  }
}

export { ErrorBoundary }
