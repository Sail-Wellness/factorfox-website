import { useEffect, useRef, useState } from 'react'
import { AnimatedSection } from '@/components/AnimatedSection'

interface TocItem {
  id: string
  num: string
  label: string
}

interface LegalLayoutProps {
  tocItems: TocItem[]
  children: React.ReactNode
}

function LegalLayout({ tocItems, children }: LegalLayoutProps) {
  const [activeId, setActiveId] = useState(tocItems[0]?.id ?? '')
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        }
      },
      { rootMargin: '-30% 0px -60% 0px', threshold: 0 }
    )

    const sections = tocItems
      .map((item) => document.getElementById(item.id))
      .filter(Boolean) as HTMLElement[]

    sections.forEach((el) => observerRef.current!.observe(el))

    return () => observerRef.current?.disconnect()
  }, [tocItems])

  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-20 md:pb-28">
      <div className="grid grid-cols-1 lg:grid-cols-[240px_1fr] gap-12 lg:gap-16">
        <AnimatedSection>
          <aside className="hidden lg:block">
            <nav className="sticky top-24">
              <p className="text-eyebrow text-muted-foreground mb-4">
                Contents
              </p>
              <ul className="space-y-1">
                {tocItems.map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => scrollTo(item.id)}
                      className={`flex items-center gap-3 w-full text-left px-3 py-2 rounded-lg text-body-sm transition-colors duration-200 ${
                        activeId === item.id
                          ? 'text-primary font-semibold bg-primary/5'
                          : 'text-muted-foreground hover:text-foreground hover:bg-[var(--muted)]/50'
                      }`}
                    >
                      <span className="text-eyebrow font-mono opacity-60">
                        {item.num}
                      </span>
                      <span>{item.label}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>
        </AnimatedSection>

        <article className="min-w-0">{children}</article>
      </div>
    </div>
  )
}

export { LegalLayout }
