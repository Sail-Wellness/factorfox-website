import { SITE } from "@/lib/site";

/**
 * LEAD HANDOFF, the path a submission takes when there is no endpoint to post to.
 *
 * The site is a static export, so it has no server of its own. A lead endpoint
 * is configuration rather than code, and until one is set the earlier behaviour
 * was to accept eight fields and then tell the visitor it could not send them.
 * That is the wrong order. A person who has already done the work should not be
 * the one who discovers the plumbing is missing.
 *
 * So a submission never dead ends. It composes a mail draft carrying every
 * answer, addressed to the sales mailbox, and opens it. The visitor sends one
 * message and is done. Nothing is swallowed and nothing is lost, and it needs
 * no third party, no licence and no subprocessor.
 *
 * The same path catches a configured endpoint that fails, because an endpoint
 * that is down should cost a lead no more than an endpoint that is absent.
 */

export type HandoffField = [label: string, value: string | string[] | undefined];

/** Mail clients truncate long links, so the body is kept well inside the limit. */
const MAX_BODY = 1800;

export function buildMailto(subject: string, fields: HandoffField[]) {
  const lines: string[] = [];
  for (const [label, value] of fields) {
    const text = Array.isArray(value) ? value.join(", ") : (value ?? "").trim();
    if (!text) continue;
    lines.push(`${label}: ${text}`);
  }

  let body = lines.join("\n");
  if (body.length > MAX_BODY) body = `${body.slice(0, MAX_BODY)}\n\n(trimmed)`;

  const query = new URLSearchParams({ subject, body });
  return `mailto:${SITE.contactEmail}?${query.toString().replace(/\+/g, "%20")}`;
}

/**
 * Opens the draft. Returns the link so the caller can offer it again: a pop up
 * blocker or a machine with no mail client configured will swallow the first
 * attempt silently, and the visitor needs a visible way to retry.
 */
export function openMailto(href: string) {
  if (typeof window === "undefined") return href;
  try {
    window.location.href = href;
  } catch {
    // Nothing to do. The caller still shows the link.
  }
  return href;
}
