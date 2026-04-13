# Hero Tabbed Dashboard Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the static screenshot on the right side of the Hero section with a four-tab auto-rotating dashboard component (Intelligence, Control, Recovery, Certainty).

**Architecture:** Self-contained `HeroDashboardTabs` React component that owns active-tab state, a rotation timer, and an interaction ref. Renders a pill-style tab bar above a crossfading screenshot area. All four tabs use the existing `intelligence.png` / `intelligence_dark.png` placeholder images; per-tab screenshots are swapped later by changing a single config array.

**Tech Stack:** React 19, TypeScript, Tailwind CSS v4, Vite. No new dependencies. No automated tests (project has none and none are in scope for this change — verification is manual via the dev server, type-check, and lint).

**Spec:** `docs/superpowers/specs/2026-04-13-hero-tabbed-dashboard-design.md`

---

## File Structure

**Create**
- `src/components/HeroDashboardTabs.tsx` — owns all tab state, rotation timer, renders the tab bar and crossfading screenshot area

**Modify**
- `src/sections/Hero.tsx` — replace the `<img>` block inside the right-column `AnimatedSection` with `<HeroDashboardTabs />`

**Unchanged**
- `src/assets/images/intelligence.png` and `intelligence_dark.png` — reused as placeholder for all four tabs
- Everything else in the Hero (left column text/CTAs, background gradients)

---

## Task 1: Create `HeroDashboardTabs` component with static tabs (no rotation)

Get the visual shell right before adding any behavior. This task produces a working click-to-switch tabbed dashboard with no auto-rotation and no hover logic.

**Files:**
- Create: `src/components/HeroDashboardTabs.tsx`

- [ ] **Step 1: Create the component file with imports and tab config**

Create `src/components/HeroDashboardTabs.tsx` with the following content:

```tsx
import { useState } from 'react'
import intelligenceImg from '@/assets/images/intelligence.png'
import intelligenceDarkImg from '@/assets/images/intelligence_dark.png'

type TabConfig = {
  id: string
  label: string
  lightImg: string
  darkImg: string
}

const TABS: TabConfig[] = [
  { id: 'intelligence', label: 'Intelligence', lightImg: intelligenceImg, darkImg: intelligenceDarkImg },
  { id: 'control',      label: 'Control',      lightImg: intelligenceImg, darkImg: intelligenceDarkImg },
  { id: 'recovery',     label: 'Recovery',     lightImg: intelligenceImg, darkImg: intelligenceDarkImg },
  { id: 'certainty',    label: 'Certainty',    lightImg: intelligenceImg, darkImg: intelligenceDarkImg },
]

function HeroDashboardTabs() {
  const [activeIndex, setActiveIndex] = useState(0)

  const handleTabClick = (index: number) => {
    setActiveIndex(index)
  }

  return (
    <div className="flex flex-col gap-4 w-full">
      {/* Tab bar */}
      <div
        role="tablist"
        aria-label="Dashboard views"
        className="flex gap-1 p-1.5 rounded-xl bg-muted border border-border dark:bg-white/5 dark:border-white/10"
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
              className={[
                'flex-1 flex items-center justify-center gap-2 rounded-lg px-3 py-2 text-[13px] font-medium transition-colors',
                isActive
                  ? 'bg-card text-foreground shadow-sm dark:bg-white/10 dark:shadow-none'
                  : 'text-muted-foreground hover:text-foreground',
              ].join(' ')}
            >
              <span
                aria-hidden="true"
                className={[
                  'h-2 w-2 rounded-full',
                  isActive ? 'bg-primary' : 'bg-muted-foreground/50',
                ].join(' ')}
              />
              <span>{tab.label}</span>
            </button>
          )
        })}
      </div>

      {/* Screenshot area */}
      <div
        role="tabpanel"
        id={`hero-tabpanel-${TABS[activeIndex].id}`}
        aria-labelledby={`hero-tab-${TABS[activeIndex].id}`}
        className="relative w-full aspect-[16/10] rounded-xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-800"
      >
        {/* Light mode images */}
        <div className="absolute inset-0 dark:hidden">
          {TABS.map((tab, index) => (
            <img
              key={`light-${tab.id}`}
              src={tab.lightImg}
              alt={`FactorFox ${tab.label} view`}
              className={[
                'absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ease-out',
                index === activeIndex ? 'opacity-100' : 'opacity-0',
              ].join(' ')}
            />
          ))}
        </div>
        {/* Dark mode images */}
        <div className="absolute inset-0 hidden dark:block">
          {TABS.map((tab, index) => (
            <img
              key={`dark-${tab.id}`}
              src={tab.darkImg}
              alt={`FactorFox ${tab.label} view`}
              className={[
                'absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ease-out',
                index === activeIndex ? 'opacity-100' : 'opacity-0',
              ].join(' ')}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export { HeroDashboardTabs }
```

- [ ] **Step 2: Temporarily render the component in Hero for visual check**

Edit `src/sections/Hero.tsx`. At the top of the file, add the import after the existing `intelligenceDarkImg` import:

```tsx
import { HeroDashboardTabs } from '@/components/HeroDashboardTabs'
```

Then replace lines 72-83 (the entire right-column `AnimatedSection` block containing both `<img>` elements) with:

```tsx
          {/* Right: dashboard screenshot */}
          <AnimatedSection delay={0.12} className="relative w-full">
            <HeroDashboardTabs />
          </AnimatedSection>
```

- [ ] **Step 3: Run type-check**

Run: `npx tsc -b`
Expected: exit code 0, no output. If errors, fix them before proceeding.

- [ ] **Step 4: Run lint**

Run: `npm run lint`
Expected: exit code 0. If errors, fix them before proceeding.

- [ ] **Step 5: Visual verification in dev server**

Run: `npm run dev`

In the browser at the dev server URL:
- Confirm the tab bar appears above the screenshot on the right side of the hero
- Confirm all four tab labels are visible: Intelligence, Control, Recovery, Certainty
- Confirm Intelligence is active on initial load (solid pill background, blue dot, darker text)
- Click Control → confirm it becomes active (pill moves, blue dot moves) and the image crossfades (all 4 tabs currently show the same image, so the crossfade is subtle but should still be visible during transition)
- Click Recovery → same check
- Click Certainty → same check
- Toggle dark mode using the existing theme toggle → confirm tab bar background inverts (lighter-on-dark), text colors invert, active pill still readable
- Resize browser to ~375px wide → confirm the tab bar does not overflow horribly; labels may shrink but should remain readable. If labels overflow visibly, note it but do not fix yet (Task 4 addresses mobile).

Stop the dev server (Ctrl+C) before committing.

- [ ] **Step 6: Commit**

```bash
git add src/components/HeroDashboardTabs.tsx src/sections/Hero.tsx
git commit -m "feat: add HeroDashboardTabs component with click-to-switch tabs"
```

---

## Task 2: Add auto-rotate behavior

Add a 4-second interval that advances the active tab. No stop-on-click yet — that comes in Task 3.

**Files:**
- Modify: `src/components/HeroDashboardTabs.tsx`

- [ ] **Step 1: Update imports**

In `src/components/HeroDashboardTabs.tsx`, change the React import line:

```tsx
import { useEffect, useState } from 'react'
```

- [ ] **Step 2: Add the rotation useEffect**

Inside the `HeroDashboardTabs` function, directly after the `useState` line and before `handleTabClick`, add:

```tsx
  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % TABS.length)
    }, 4000)

    return () => {
      window.clearInterval(intervalId)
    }
  }, [])
```

- [ ] **Step 3: Run type-check**

Run: `npx tsc -b`
Expected: exit code 0.

- [ ] **Step 4: Run lint**

Run: `npm run lint`
Expected: exit code 0.

- [ ] **Step 5: Visual verification**

Run: `npm run dev`

In the browser:
- Load the page and do not touch anything
- Watch the tab bar for ~20 seconds
- Confirm: Intelligence → Control → Recovery → Certainty → Intelligence, advancing every ~4 seconds
- Confirm the rotation loops indefinitely
- Click any tab → for now, clicking works but rotation continues (this is expected at this point; Task 3 fixes it)

Stop the dev server.

- [ ] **Step 6: Commit**

```bash
git add src/components/HeroDashboardTabs.tsx
git commit -m "feat: auto-rotate hero dashboard tabs every 4 seconds"
```

---

## Task 3: Stop on first click and pause on hover

Add a `hasInteracted` ref that permanently stops the rotation the first time any tab is clicked. Add hover-pause that works only before the first click.

**Files:**
- Modify: `src/components/HeroDashboardTabs.tsx`

- [ ] **Step 1: Update imports**

Change the React import line to include `useRef`:

```tsx
import { useEffect, useRef, useState } from 'react'
```

- [ ] **Step 2: Replace the state + effect + click handler block with the interactive version**

In `src/components/HeroDashboardTabs.tsx`, locate this block (the current body of `HeroDashboardTabs` before `return (`):

```tsx
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % TABS.length)
    }, 4000)

    return () => {
      window.clearInterval(intervalId)
    }
  }, [])

  const handleTabClick = (index: number) => {
    setActiveIndex(index)
  }
```

Replace it with:

```tsx
  const [activeIndex, setActiveIndex] = useState(0)
  const hasInteractedRef = useRef(false)
  const intervalRef = useRef<number | null>(null)

  const startRotation = () => {
    if (hasInteractedRef.current) return
    if (intervalRef.current !== null) return
    intervalRef.current = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % TABS.length)
    }, 4000)
  }

  const stopRotation = () => {
    if (intervalRef.current !== null) {
      window.clearInterval(intervalRef.current)
      intervalRef.current = null
    }
  }

  useEffect(() => {
    startRotation()
    return stopRotation
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

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
```

- [ ] **Step 3: Attach mouse handlers to the wrapper**

In the same file, find the outermost returned `<div>`:

```tsx
    <div className="flex flex-col gap-4 w-full">
```

Replace it with:

```tsx
    <div
      className="flex flex-col gap-4 w-full"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
```

- [ ] **Step 4: Run type-check**

Run: `npx tsc -b`
Expected: exit code 0.

- [ ] **Step 5: Run lint**

Run: `npm run lint`
Expected: exit code 0. If the `eslint-disable-next-line` comment triggers a different rule, remove it and accept the exhaustive-deps warning for this specific line (the effect intentionally runs once).

- [ ] **Step 6: Visual verification — auto-rotate still works**

Run: `npm run dev`

In the browser, load the page fresh (hard refresh to be safe):
- Do not touch anything for ~15 seconds
- Confirm tabs still rotate: Intelligence → Control → Recovery → Certainty → Intelligence

- [ ] **Step 7: Visual verification — hover pauses**

Move mouse over the dashboard area:
- Confirm rotation stops within ~1 second (current tab stays active)
- Wait ~6 seconds while hovering — confirm no rotation occurs
- Move mouse off the dashboard
- Wait ~5 seconds — confirm rotation resumes

- [ ] **Step 8: Visual verification — click stops permanently**

Hard refresh the page.
- Wait for one or two rotations (~4-8 seconds)
- Click any tab (e.g., Recovery) — confirm it becomes active immediately
- Do not move the mouse off the dashboard. Wait ~10 seconds.
- Confirm rotation does NOT resume — Recovery stays active
- Move the mouse off the dashboard. Wait another ~10 seconds.
- Confirm rotation still does NOT resume
- Click another tab (e.g., Certainty) — confirm it switches immediately
- Confirm no rotation starts after that either

Stop the dev server.

- [ ] **Step 9: Commit**

```bash
git add src/components/HeroDashboardTabs.tsx
git commit -m "feat: stop hero tab rotation on first click, pause on hover"
```

---

## Task 4: Mobile polish and final review

Verify the component works on narrow viewports. Fix tab label crowding if needed. Final visual pass in both modes.

**Files:**
- Modify: `src/components/HeroDashboardTabs.tsx` (only if mobile needs a fix)

- [ ] **Step 1: Visual check on narrow viewport**

Run: `npm run dev`

Open the browser dev tools, switch to mobile device emulation (e.g., iPhone SE / 375px width). Load the home page.

Check:
- Are all four tab labels visible without horizontal scrolling?
- Do the labels wrap or get truncated?
- Is the screenshot below still readable?

- [ ] **Step 2: Apply responsive tweak if needed**

**Only do this step if Step 1 found the tab bar overflows or labels crowd.**

In `src/components/HeroDashboardTabs.tsx`, locate the tab bar className line:

```tsx
        className="flex gap-1 p-1.5 rounded-xl bg-muted border border-border dark:bg-white/5 dark:border-white/10"
```

Change to:

```tsx
        className="flex gap-1 p-1 sm:p-1.5 rounded-xl bg-muted border border-border dark:bg-white/5 dark:border-white/10"
```

And the button className line:

```tsx
                'flex-1 flex items-center justify-center gap-2 rounded-lg px-3 py-2 text-[13px] font-medium transition-colors',
```

Change to:

```tsx
                'flex-1 flex items-center justify-center gap-1.5 sm:gap-2 rounded-lg px-2 sm:px-3 py-1.5 sm:py-2 text-[11px] sm:text-[13px] font-medium transition-colors whitespace-nowrap',
```

Reload the mobile viewport and confirm the labels now fit without overflow.

If they still overflow even with the tighter spacing, wrap the tab bar container with horizontal scroll as a final fallback — change:

```tsx
      <div
        role="tablist"
        aria-label="Dashboard views"
        className="flex gap-1 p-1 sm:p-1.5 rounded-xl bg-muted border border-border dark:bg-white/5 dark:border-white/10"
      >
```

to:

```tsx
      <div
        role="tablist"
        aria-label="Dashboard views"
        className="flex gap-1 p-1 sm:p-1.5 rounded-xl bg-muted border border-border dark:bg-white/5 dark:border-white/10 overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
      >
```

- [ ] **Step 3: Run type-check and lint (only if Step 2 made changes)**

Run: `npx tsc -b && npm run lint`
Expected: both exit 0.

- [ ] **Step 4: Final desktop verification — light mode**

Back in the dev server, at full desktop width, in light mode:
- Confirm tab bar renders correctly
- Confirm auto-rotation works (wait ~12 seconds, watch 3 transitions)
- Confirm hover-pause works
- Confirm click-to-stop works
- Confirm crossfade transition is smooth (no hard cuts)

- [ ] **Step 5: Final desktop verification — dark mode**

Toggle dark mode via the site's theme toggle:
- Confirm tab bar background inverts (translucent white on dark)
- Confirm active pill is visible
- Confirm dark-mode screenshot variant loads
- Confirm all behaviors still work (rotate, pause, click-to-stop)

- [ ] **Step 6: Final mobile verification — both modes**

Switch back to mobile emulation (~375px):
- Confirm tab bar is usable in light mode
- Confirm tab bar is usable in dark mode
- Confirm tapping a tab works (rotation stops permanently, tab switches)

Stop the dev server.

- [ ] **Step 7: Commit (only if Task 4 made code changes)**

If Step 2 modified the component:

```bash
git add src/components/HeroDashboardTabs.tsx
git commit -m "feat: tighten hero tab bar spacing for mobile"
```

If Step 2 did not modify anything, skip the commit — Task 4 is verification only.

---

## Out of Scope / Follow-ups

- **Real per-tab screenshots.** All four tabs currently show `intelligence.png`. When the real screenshots land, replace the `lightImg` / `darkImg` fields in the `TABS` array (one line per tab) and add imports at the top of the file. No other changes needed.
- **Automated tests.** The project has no test harness. Adding one for this component is out of scope per the spec.
- **Analytics.** Tracking which tab the user clicks is not in the spec.

---

## Self-Review Notes

**Spec coverage:**
- Four tabs with correct labels ✓ (Task 1 Step 1 TABS array)
- Tab bar visual design (container bg, border, rounded-xl, padding) ✓ (Task 1 Step 1)
- Active/inactive tab states (pill bg, dot color, text color) ✓ (Task 1 Step 1)
- Screenshot crossfade with stacked absolute images ✓ (Task 1 Step 1)
- Light + dark mode images both rendered, toggled via `dark:hidden` / `hidden dark:block` ✓ (Task 1 Step 1)
- Auto-rotate every 4000ms in order, looping ✓ (Task 2 Step 2)
- Stop permanently on first click via `hasInteractedRef` ✓ (Task 3 Step 2)
- Hover pause / resume only pre-click ✓ (Task 3 Steps 2-3)
- ARIA roles (`tablist`, `tab`, `tabpanel`, `aria-selected`, `aria-labelledby`) ✓ (Task 1 Step 1)
- `Hero.tsx` modification (replace right-column `<img>` block) ✓ (Task 1 Step 2)
- Mobile responsiveness ✓ (Task 4)
- Manual verification (type-check, lint, dev server) ✓ (every task)

**Placeholder scan:** No TBD / TODO / "implement appropriate" / generic "add error handling" anywhere. All code blocks contain real code.

**Type consistency:** `TabConfig`, `TABS`, `activeIndex`, `hasInteractedRef`, `intervalRef`, `startRotation`, `stopRotation`, `handleTabClick`, `handleMouseEnter`, `handleMouseLeave` — names consistent across Tasks 1-3.
