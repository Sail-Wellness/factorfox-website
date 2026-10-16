"use client";

import { track } from "@/components/analytics";
import { MEET_FOX } from "@/lib/meet-fox";

/**
 * The Meet Fox banner at the top of the homepage, directly below the menu.
 * Built in HTML rather than as a flat image so the type stays sharp, the
 * buttons sit on the banner itself, and search engines read the words.
 * It follows the same clock as the announcement bar: invitations until the
 * webinar ends, a demonstration offer until midnight Eastern, then nothing.
 */
export function MeetFoxHome() {
  return (
    <section className="mfx-home" aria-labelledby="mfx-home-title">
      <div className="mfx-home-inner">
        <div className="mfx-home-copy">
          <p id="mfx-home-title" className="mfx-home-title">Meet Fox.</p>
          <p className="mfx-home-sub">Your AI operating partner for specialty finance.</p>
          <p className="mfx-home-event">
            FactorFox live demonstration on Microsoft Teams
            <span className="mfx-home-date">
              Thursday, November 19, 2026 <span className="whitespace-nowrap">at 1:00 PM ET</span>
            </span>
          </p>
        </div>
        <div className="mfx-home-cta">
          <div className="mfx-home-actions mfx-live">
            <a
              href={MEET_FOX.registrationUrl}
              target="_blank"
              rel="noopener"
              className="mfx-home-btn"
              onClick={() => track("meetfox_home_register_click")}
            >
              Register
              <span className="sr-only"> for the Meet Fox webinar (opens Microsoft Teams in a new tab)</span>
            </a>
            <a
              href="/meet-fox/"
              className="mfx-home-btn mfx-home-btn-ghost"
              onClick={() => track("meetfox_home_details_click")}
            >
              Details
              <span className="sr-only"> about the Meet Fox webinar</span>
            </a>
          </div>
          <div className="mfx-home-actions mfx-post">
            <a href="/demo/" className="mfx-home-btn" onClick={() => track("meetfox_home_post_demo_click")}>
              Request a demonstration
            </a>
          </div>
        </div>
        <div className="mfx-home-art" aria-hidden="true">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/media/meet-fox-fox-1100.jpg"
            srcSet="/media/meet-fox-fox-700.jpg 700w, /media/meet-fox-fox-1100.jpg 1100w"
            sizes="340px"
            width={1100}
            height={976}
            alt=""
            decoding="async"
          />
        </div>
      </div>
    </section>
  );
}
