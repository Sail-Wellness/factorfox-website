/**
 * The November 19, 2026 webinar, in one place.
 *
 * Microsoft Teams owns registration. Its public registration page refuses to
 * be framed by any site outside Microsoft (frame-ancestors, read October 15,
 * 2026), so every call to action links out to it rather than embedding it.
 * The organizer's join link is never used as the public destination.
 */
export const MEET_FOX = {
  title: "First to the Cloud. First to AI Native. Meet Fox.",
  registrationUrl:
    "https://events.teams.microsoft.com/event/06aa566f-0a2e-4baf-8f1e-98d6115fb0be@13501f5b-e438-45d5-a9a8-4abc4bf2fa67?source=copyLinkOneEventsShareDialog",
  /** 1:00 PM to 2:00 PM Eastern; November 19 falls in standard time. */
  start: "2026-11-19T13:00:00-05:00",
  end: "2026-11-19T14:00:00-05:00",
  dateLabel: "Thursday, November 19, 2026",
  timeLabel: "1:00 PM to 2:00 PM Eastern",
  presenter: "Roberto Vasquez, Founder and CEO, FactorFox",
  banner: {
    src2000: "/media/meet-fox-banner-2000.jpg",
    src1200: "/media/meet-fox-banner-1200.jpg",
    src800: "/media/meet-fox-banner-800.jpg",
    width: 2000,
    height: 833,
    alt: "Meet Fox. Your AI operating partner for specialty finance. FactorFox live demonstration on Microsoft Teams, Thursday, November 19, 2026 at 1:00 PM ET.",
  },
  /**
   * Mailchimp's own signup endpoint for the main audience. A plain form post
   * to Mailchimp: no API key exists in the browser, Mailchimp records the opt
   * in time, address and source, runs its confirmation step, and refuses to
   * quietly resubscribe anyone who unsubscribed.
   */
  mailchimp: {
    action: "https://factorfox.us19.list-manage.com/subscribe/post",
    u: "a7011e614cbc5685906d06034",
    id: "16d3346c98",
  },
  consentText:
    "Yes, I'd like to receive FactorFox product updates, educational content, webinar invitations, and occasional marketing emails. I understand I can unsubscribe at any time.",
  consentVersion: "meet_fox_2026_10_15",
} as const;

export function webinarHasEnded(now: number = Date.now()) {
  return now >= Date.parse(MEET_FOX.end);
}

/**
 * The announcement bar above the header runs until midnight Eastern at the
 * start of November 20. Between the end of the webinar and then it thanks
 * attendees instead of inviting registrations.
 */
export const MEET_FOX_BAR_UNTIL = "2026-11-20T00:00:00-05:00";
