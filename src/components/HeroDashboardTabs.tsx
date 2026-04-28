import { useCallback, useEffect, useRef, useState } from 'react'
import intelligenceImg from '@/assets/images/intelligence.png'
import intelligenceDarkImg from '@/assets/images/intelligence_dark.png'
import controlImg from '@/assets/images/control.png'
import controlDarkImg from '@/assets/images/control_dark.png'
import recoveryImg from '@/assets/images/recovery.png'
import recoveryDarkImg from '@/assets/images/recovery_dark.png'
import certaintyImg from '@/assets/images/certainity.png'
import certaintyDarkImg from '@/assets/images/certainity_dark.png'

type TabConfig = {
  id: string
  label: string
  lightImg: string
  darkImg: string
  dotColor: string
}

const TABS: TabConfig[] = [
  { id: 'recovery',     label: 'Recovery',     lightImg: recoveryImg,     darkImg: recoveryDarkImg,     dotColor: 'bg-emerald-400' },
  { id: 'intelligence', label: 'Intelligence', lightImg: intelligenceImg, darkImg: intelligenceDarkImg, dotColor: 'bg-amber-400'   },
  { id: 'control',      label: 'Control',      lightImg: controlImg,      darkImg: controlDarkImg,      dotColor: 'bg-blue-400'    },
  { id: 'certainty',    label: 'Certainty',    lightImg: certaintyImg,      darkImg: certaintyDarkImg,      dotColor: 'bg-violet-400'  },
]

function HeroDashboardTabs() {
  const [activeIndex, setActiveIndex] = useState(0)
  const tablistRef = useRef<HTMLDivElement>(null)
  const hasInteractedRef = useRef(false)
  const intervalRef = useRef<number | null>(null)

  const stopRotation = useCallback(() => {
    if (intervalRef.current !== null) {
      window.clearInterval(intervalRef.current)
      intervalRef.current = null
    }
  }, [])

  const startRotation = useCallback(() => {
    if (hasInteractedRef.current) return
    if (intervalRef.current !== null) return
    intervalRef.current = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % TABS.length)
    }, 4000)
  }, [])

  useEffect(() => {
    startRotation()
    return stopRotation
  }, [startRotation, stopRotation])

  const handleTabClick = (index: number) => {
    hasInteractedRef.current = true
    stopRotation()
    setActiveIndex(index)
  }

  const handleMouseEnter = () => {
    if (hasInteractedRef.current) return
    stopRotation()
  }

  const handleMouseLeave = () => {
    if (hasInteractedRef.current) return
    startRotation()
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (!['ArrowRight', 'ArrowLeft', 'Home', 'End'].includes(e.key)) return
    e.preventDefault() // prevent page scroll on Home/End and stray arrow scroll

    const tabs = tablistRef.current?.querySelectorAll<HTMLButtonElement>('[role="tab"]')
    if (!tabs) return
    const count = tabs.length
    const currentIndex = [...tabs].findIndex((t) => t === document.activeElement)
    if (currentIndex === -1) return

    let nextIndex: number
    if (e.key === 'ArrowRight') nextIndex = (currentIndex + 1) % count
    else if (e.key === 'ArrowLeft') nextIndex = (currentIndex - 1 + count) % count
    else if (e.key === 'Home') nextIndex = 0
    else nextIndex = count - 1 // End

    handleTabClick(nextIndex)
    tabs[nextIndex].focus()
  }

  return (
    <div
      className="flex flex-col gap-4 w-full"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Tab bar */}
      <div
        ref={tablistRef}
        role="tablist"
        aria-label="Dashboard views"
        onKeyDown={handleKeyDown}
        className="flex gap-0.5 p-1 rounded-xl bg-muted border border-border"
      >
        {TABS.map((tab, index) => {
          const isActive = index === activeIndex
          return (
            <button
              key={tab.id}
              id={`hero-tab-${tab.id}`}
              role="tab"
              aria-selected={isActive}
              aria-controls={`hero-tabpanel-${tab.id}`}
              onClick={() => handleTabClick(index)}
              tabIndex={isActive ? 0 : -1}
              className={[
                'flex-1 flex items-center justify-center gap-1.5 rounded-lg px-2.5 py-1.5 text-[11px] sm:text-[12px] font-medium transition-all whitespace-nowrap',
                isActive
                  ? 'bg-background text-foreground shadow-sm border border-border dark:shadow-none'
                  : 'text-muted-foreground hover:text-foreground',
              ].join(' ')}
            >
              <span
                aria-hidden="true"
                className={`h-2 w-2 rounded-full shrink-0 ${tab.dotColor}`}
              />
              <span>{tab.label}</span>
            </button>
          )
        })}
      </div>

      {/* Screenshot area — all panels stacked so images preload */}
      <div className="relative">
        {TABS.map((tab, index) => {
          const isActive = index === activeIndex
          return (
            <div
              key={tab.id}
              role="tabpanel"
              id={`hero-tabpanel-${tab.id}`}
              aria-labelledby={`hero-tab-${tab.id}`}
              aria-hidden={!isActive}
              className={[
                'rounded-xl overflow-hidden shadow-2xl border border-border',
                isActive ? 'relative z-10' : 'absolute inset-0 invisible',
              ].join(' ')}
            >
              <img
                src={tab.lightImg}
                alt={`FactorFox ${tab.label} view`}
                loading={index === 0 ? 'eager' : 'lazy'}
                className="w-full h-auto block dark:hidden"
              />
              <img
                src={tab.darkImg}
                alt={`FactorFox ${tab.label} view`}
                loading={index === 0 ? 'eager' : 'lazy'}
                className="w-full h-auto block hidden dark:block"
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export { HeroDashboardTabs }
