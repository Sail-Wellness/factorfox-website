import { useEffect, useRef, useState } from 'react'

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
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 md:pt-24 pb-20 md:pb-28">
      <div className="grid grid-cols-1 lg:grid-cols-[240px_1fr] gap-12 lg:gap-16">
        <aside className="hidden lg:block">
          <nav className="sticky top-24">
            <p className="text-eyebrow text-primary/70 mb-4">
              Contents
            </p>
            <ul className="space-y-0 border-l border-[var(--set1-stroke)]">
              {tocItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollTo(item.id)}
                    className={`flex items-baseline gap-3 w-full text-left py-2.5 pl-5 -ml-px border-l-2 text-body-sm transition-colors duration-200 ${
                      activeId === item.id
                        ? 'text-foreground font-semibold border-l-primary'
                        : 'text-muted-foreground border-l-transparent hover:text-foreground'
                    }`}
                  >
                    <span className="text-eyebrow font-mono opacity-60 w-6 shrink-0">
                      {item.num}
                    </span>
                    <span>{item.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        <article className="min-w-0">{children}</article>
      </div>
    </div>
  )
}

export { LegalLayout }
