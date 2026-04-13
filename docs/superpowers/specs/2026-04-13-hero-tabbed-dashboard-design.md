# Hero Tabbed Dashboard — Design Spec

**Date:** 2026-04-13
**Topic:** Replace the static screenshot in the Hero section with a tabbed dashboard component that auto-rotates through four product views.

## Goal

Transform the right side of the Hero section from a single static screenshot into an interactive tab bar with four tabs, each showing a different FactorFox product view. The tab bar auto-rotates on load and stops permanently the first time the user clicks a tab.

## Scope

**In scope**
- New `HeroDashboardTabs` component with tab bar + screenshot area
- Four tabs: Intelligence, Control, Recovery, Certainty
- Auto-rotate timer (4s), stops permanently on first user click
- Pause-on-hover (until first click)
- Crossfade transition between screenshots
- Light/dark mode support using the existing project color scheme
- Responsive behavior on narrow viewports
- `Hero.tsx` updated to render the new component

**Out of scope**
- Unique screenshots per tab. All four tabs use the existing `intelligence.png` / `intelligence_dark.png` as placeholders. Per-tab images will be swapped in a future task once real screenshots are ready.
- Any change to the left side of the Hero (heading, subtitle, CTA buttons)
- Any change outside the Hero section

## Tab Definitions

| Tab ID         | Label          | Purpose (for reference, not shown in UI) |
|----------------|----------------|------------------------------------------|
| `intelligence` | Intelligence   | Invoices pulled from QuickBooks with approved / other statuses |
| `control`      | Control        | Verification page with debtor client details |
| `recovery`     | Recovery       | Collections page with signals |
| `certainty`    | Certainty      | Reconciliation subsidiary ledgers |

Rotation order: Intelligence → Control → Recovery → Certainty → (loop).

## Visual Design

### Tab bar container
- Sits directly above the screenshot, inside the same right-column grid cell as the existing image
- Width: `w-full` (matches screenshot width below it)
- Light mode: `bg-muted` (`#f1f5f9`), `border border-border`, `rounded-xl`
- Dark mode: `bg-white/5`, `border border-white/10`, `rounded-xl`
- Padding: `p-1.5`
- Layout: flex row, `gap-1`, tabs distributed with `flex-1` so each tab takes equal width

### Individual tab (button)
- Shape: `rounded-lg`, `px-3 py-2`, flex row with `gap-2`, centered content
- Contents: colored dot (8px circle) + label text
- Label font: `text-[13px] font-medium`

**Active state**
- Background: `bg-card` in light / `bg-white/10` in dark
- Text color: `text-foreground` (`#0f172a` light / `#f8fafc` dark)
- Dot color: brand blue (`#0090ff`)
- Subtle shadow: `shadow-sm` in light mode only

**Inactive state**
- Background: transparent
- Text color: `text-muted-foreground` (`#64748b` light / `#94a3b8` dark)
- Dot color: `bg-muted-foreground/50`
- Hover: `text-foreground`, dot brightens to `bg-muted-foreground`

### Screenshot area
- Same position and styling as the current `<img>` in `Hero.tsx`: rounded-xl, shadow-2xl, border, full width
- Structure: a relatively-positioned wrapper containing all four images as absolutely-positioned siblings
- Only the active image has `opacity: 1`; the rest have `opacity: 0`
- Transition: `transition-opacity duration-300 ease-out`
- Light and dark mode images are both rendered; `dark:hidden` / `hidden dark:block` controls which pair is active, matching the current pattern

### Spacing
- Gap between tab bar and screenshot: `mb-4` (or `gap-4` on a flex-col wrapper)

## Behavior

### Auto-rotate
- On mount, start a `setInterval` that advances the active tab every **4000ms** in rotation order
- Cleared on unmount via `useEffect` cleanup

### Stop on first click
- A `hasInteracted` ref (not state — no re-render needed) tracks whether the user has clicked any tab
- On first click: clear the interval, set `hasInteracted.current = true`, and set the active tab to the clicked one
- Subsequent clicks: just update the active tab. No interval ever starts again in this component lifecycle.

### Pause on hover
- Only applies while `hasInteracted.current === false`
- `onMouseEnter` on the wrapper: clear the interval (but don't set `hasInteracted`)
- `onMouseLeave` on the wrapper: if still not interacted, restart the interval
- After first click, hover does nothing (interval is already permanently cleared)

### Keyboard accessibility
- Tabs are `<button>` elements
- `aria-selected` reflects active state
- Tab bar has `role="tablist"`, each button has `role="tab"`
- Screenshot wrapper has `role="tabpanel"` with `aria-labelledby` pointing to the active tab button id

## Component Structure

```
src/components/HeroDashboardTabs.tsx
  └─ HeroDashboardTabs (default export)
       ├─ TABS array (local const)
       ├─ useState: activeIndex
       ├─ useRef: hasInteracted, intervalRef
       ├─ useEffect: start interval on mount, cleanup on unmount
       ├─ handleTabClick(index): stop interval, mark interacted, set active
       ├─ handleMouseEnter / handleMouseLeave: conditional pause/resume
       └─ render:
            <div onMouseEnter onMouseLeave className="flex flex-col gap-4">
              <div role="tablist" className="tab-bar-container">
                {TABS.map -> <button role="tab" />}
              </div>
              <div role="tabpanel" className="screenshot-wrapper relative">
                {TABS.map -> <img className="absolute inset-0 transition-opacity" />}
                {/* Rendered twice: once for light, once for dark */}
              </div>
            </div>
```

## Files to Change

**Create**
- `src/components/HeroDashboardTabs.tsx` — ~120 lines

**Modify**
- `src/sections/Hero.tsx` — replace lines 72-83 (the `<img>` block and its wrapper `AnimatedSection`) with `<HeroDashboardTabs />`. The `AnimatedSection` wrapper stays; only its child changes.

**Unchanged**
- `src/assets/images/intelligence.png` and `intelligence_dark.png` — reused as placeholder for all four tabs

## Dependencies

No new npm packages. Uses existing React, Tailwind, and the existing image assets.

## Testing / Verification

This is a visual-only change. Verification is manual:
1. Run the dev server
2. Load the home page in light mode — confirm tab bar renders, auto-rotates every 4s, loops correctly
3. Hover over the dashboard — confirm rotation pauses
4. Move mouse away — confirm rotation resumes
5. Click a tab — confirm it switches immediately and auto-rotation stops permanently (wait 10s to verify it does not restart)
6. Click another tab — confirm manual switching still works
7. Toggle dark mode — confirm colors invert correctly and behavior is unchanged
8. Resize to mobile width — confirm tab bar remains usable (labels readable, no overflow)
9. Keyboard: tab into the tab bar, confirm focus ring visible, Enter/Space triggers tab switch

No automated tests — the project does not currently have a test setup for visual components, and adding one for this change is out of scope.

## Risks & Open Questions

- **Mobile tab labels may crowd at very narrow widths.** Mitigation: reduce label size and padding on small screens. If still tight, fall back to `overflow-x-auto` with hidden scrollbar. Will verify during implementation.
- **Placeholder images across all tabs.** Intentional. The user will provide real per-tab screenshots in a follow-up and the `TABS` array is designed to make that a one-line change per tab.
- **Auto-rotate could feel pushy if the user is reading the left-column copy.** Hover-pause mitigates this when the user moves over the dashboard, but reading the left copy does not pause. Acceptable for now; revisit if feedback comes in.
