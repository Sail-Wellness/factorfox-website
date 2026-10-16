"use client";

import { track } from "@/components/analytics";
import { MEET_FOX, MEET_FOX_BAR_UNTIL } from "@/lib/meet-fox";

/* Runs before the bar paints, so a visitor never sees the wrong state flash.
   It only sets an attribute on <html>; CSS shows the matching message. */
const STATE_SCRIPT = `(function(){try{var n=Date.now(),e=Date.parse("${MEET_FOX.end}"),g=Date.parse("${MEET_FOX_BAR_UNTIL}");document.documentElement.setAttribute("data-mfx",n>=g?"gone":n>=e?"post":"live")}catch(_){}})();`;

/**
 * The sitewide announcement for the November 19 webinar. Rendered into the
 * static HTML so it takes its space before first paint (no layout shift), and
 * not dismissible: it stays until the date passes.
 */
export function MeetFoxBar() {
  return (
    <>
      <script dangerouslySetInnerHTML={{ __html: STATE_SCRIPT }} />
      <aside className="mfx-bar" aria-label="Upcoming webinar">
        <p className="mfx-live">
          <span className="mfx-strong">Meet Fox.</span>
          <span className="mfx-long"> Live demonstration on Microsoft Teams, Thursday, November 19, 1:00 PM ET.</span>
          <span className="mfx-short"> Live on Teams, <span className="whitespace-nowrap">Nov 19, 1 PM ET.</span></span>
          <a
            href={MEET_FOX.registrationUrl}
            target="_blank"
            rel="noopener"
            className="mfx-link"
            onClick={() => track("meetfox_bar_register_click")}
          >
            Register<span aria-hidden="true"> &rsaquo;</span>
            <span className="sr-only"> for the Meet Fox webinar (opens Microsoft Teams in a new tab)</span>
          </a>
          <a href="/meet-fox/" className="mfx-link mfx-details" onClick={() => track("meetfox_bar_details_click")}>
            Details<span aria-hidden="true"> &rsaquo;</span>
          </a>
        </p>
        <p className="mfx-post">
          <span className="mfx-strong">Thank you for joining Meet Fox.</span>
          <span className="mfx-long"> See FactorFox AI on your own business next.</span>
          <a href="/demo/" className="mfx-link" onClick={() => track("meetfox_bar_post_demo_click")}>
            Request a demonstration<span aria-hidden="true"> &rsaquo;</span>
          </a>
        </p>
      </aside>
    </>
  );
}
