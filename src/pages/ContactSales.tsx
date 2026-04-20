import { useState } from "react";
import { InlineWidget, useCalendlyEventListener } from "react-calendly";
import { Calendar, Clock, ShieldCheck, Sparkles } from "lucide-react";
import { SEO } from "@/components/SEO";
import { AnimatedSection } from "@/components/AnimatedSection";

const CALENDLY_URL = "https://calendly.com/rob-sailwellness/factorfox-demo";

interface BookingInfo {
  startTime?: string;
  endTime?: string;
}

function ContactSales() {
  const [booked, setBooked] = useState(false);
  const [info, setInfo] = useState<BookingInfo>({});

  useCalendlyEventListener({
    onDateAndTimeSelected: (e) => {
      // Calendly's payload shape varies; capture opportunistically.
      const payload = (
        e as unknown as { data?: { payload?: Record<string, unknown> } }
      ).data?.payload;
      const start =
        payload && typeof payload === "object"
          ? (payload as { event?: { start_time?: string } }).event?.start_time
          : undefined;
      if (typeof start === "string")
        setInfo((p) => ({ ...p, startTime: start }));
    },
    onEventScheduled: (e) => {
      const payload = (
        e as unknown as { data?: { payload?: Record<string, unknown> } }
      ).data?.payload;
      const ev =
        payload && typeof payload === "object"
          ? (payload as { event?: { start_time?: string; end_time?: string } })
              .event
          : undefined;
      if (ev?.start_time) setInfo((p) => ({ ...p, startTime: ev.start_time }));
      if (ev?.end_time) setInfo((p) => ({ ...p, endTime: ev.end_time }));
      setBooked(true);
    },
  });

  return (
    <>
      <SEO
        title="Contact Sales — FactorFox"
        description="Book a demo with FactorFox — the only platform that migrates factoring data in under 60 minutes. Join in minutes, not months."
        path="/contact-sales"
      />

      <main className="bg-[var(--set1-bg)]">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:min-h-[calc(100vh-4rem)]">
          {/* Left — brand messaging */}
          <div className="flex flex-col justify-center px-4 sm:px-6 lg:pl-[max(2rem,calc((100vw-80rem)/2+2rem))] lg:pr-12 py-16 md:py-20">
            <AnimatedSection delay={0} className="max-w-[560px]">
              <div className="mb-6 self-start inline-flex items-center gap-2 rounded-full border border-primary/25 dark:border-primary/30 bg-primary/5 dark:bg-primary/10 px-3 py-1">
                <ShieldCheck
                  className="h-3 w-3 text-primary"
                  strokeWidth={2.5}
                />
                <span className="text-[10px] font-bold uppercase tracking-[0.12em] text-primary">
                  Efficient Onboarding for Efficient Operators
                </span>
              </div>

              <h1 className="text-hero text-foreground mb-6">
                <span className="block">Join in Minutes</span>
                <span className="block">not Months.</span>
              </h1>

              <p className="text-body-lg text-muted-foreground max-w-[460px]">
                FactorFox is the only platform to migrate data in{" "}
                <span className="font-semibold text-foreground">
                  under 60 minutes
                </span>
                . Eclipsing the industry standard of{" "}
                <span className="font-semibold text-foreground">
                  6&ndash;12 months
                </span>
                .
              </p>
            </AnimatedSection>
          </div>

          {/* Right — scheduler ↔ confirmation */}
          <div className="bg-surface-soft flex items-center justify-center px-4 sm:px-6 lg:px-12 py-12 md:py-16">
            <AnimatedSection delay={0.12} className="w-full max-w-md">
              <div className="rounded-2xl border border-border bg-card shadow-[0_12px_40px_-12px_rgba(99,102,241,0.18)] dark:shadow-black/30 p-6 md:p-7">
                {booked ? <BookedConfirmation info={info} /> : <Scheduler />}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </main>
    </>
  );
}

function Scheduler() {
  return (
    <div>
      <h2 className="text-section-md text-foreground mb-4 px-1">
        Select a Date & Time
      </h2>
      <div className="-mx-2">
        <InlineWidget
          url={CALENDLY_URL}
          styles={{ height: "700px", width: "100%" }}
          pageSettings={{
            primaryColor: "0085ef",
            textColor: "0f172a",
            backgroundColor: "ffffff",
            hideEventTypeDetails: true,
            hideGdprBanner: true,
            hideLandingPageDetails: true,
          }}
        />
      </div>
    </div>
  );
}

function BookedConfirmation({ info }: { info: BookingInfo }) {
  const dateLabel = info.startTime ? formatDate(info.startTime) : null;
  const timeLabel =
    info.startTime && info.endTime
      ? formatTimeRange(info.startTime, info.endTime)
      : info.startTime
        ? formatTime(info.startTime)
        : null;

  return (
    <div role="status" aria-live="polite" className="flex flex-col gap-5">
      <div>
        <h2 className="text-section-md text-foreground">
          Your Demo Is Booked.
        </h2>
        <p className="text-body-sm text-muted-foreground mt-2">
          We&apos;ll show you exactly how your factoring firm can operate
          effortlessly.
        </p>
      </div>

      <div>
        <h3 className="text-[15px] font-semibold text-foreground mb-3">
          Meeting Details
        </h3>

        <DetailRow
          icon={<Calendar className="h-4 w-4 text-primary" strokeWidth={2} />}
          label="Date"
          value={dateLabel ?? "Confirmation sent to your email"}
        />
        <DetailRow
          icon={<Clock className="h-4 w-4 text-primary" strokeWidth={2} />}
          label="Time"
          value={timeLabel ?? "Confirmation sent to your email"}
        />
      </div>

      <div className="rounded-lg border border-primary/20 bg-primary/5 p-4">
        <div className="flex items-center gap-1.5 mb-1.5">
          <Sparkles className="h-3 w-3 text-primary" strokeWidth={2.5} />
          <span className="text-[10px] font-bold uppercase tracking-[0.12em] text-primary">
            What Happens Next
          </span>
        </div>
        <p className="text-body-sm text-foreground">
          A calendar invite has been sent to your email with the meeting link.
        </p>
      </div>

      {info.startTime && info.endTime && (
        <a
          href={googleCalendarUrl(info.startTime, info.endTime)}
          target="_blank"
          rel="noreferrer noopener"
          style={{
            background: "linear-gradient(180deg, #4ba6ff 0%, #0085ef 100%)",
          }}
          className="inline-flex items-center justify-center gap-2 w-full rounded-xl text-white font-semibold text-[15px] py-3.5 transition-opacity hover:opacity-95 shadow-md shadow-primary/20 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:ring-offset-2 focus:ring-offset-surface-soft"
        >
          <Calendar className="h-4 w-4" strokeWidth={2.5} />
          Add to Calendar
        </a>
      )}
    </div>
  );
}

function DetailRow({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="mb-2.5 flex items-center gap-3 rounded-lg bg-input-soft px-3.5 py-2.5">
      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-primary/10">
        {icon}
      </div>
      <div className="min-w-0">
        <div className="text-[10px] font-bold uppercase tracking-[0.12em] text-muted-foreground">
          {label}
        </div>
        <div className="text-[14px] font-semibold text-foreground truncate">
          {value}
        </div>
      </div>
    </div>
  );
}

function formatDate(iso: string): string {
  const d = new Date(iso);
  return d.toLocaleDateString(undefined, {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

function formatTime(iso: string): string {
  return new Date(iso).toLocaleTimeString(undefined, {
    hour: "numeric",
    minute: "2-digit",
    timeZoneName: "short",
  });
}

function formatTimeRange(startIso: string, endIso: string): string {
  const start = new Date(startIso).toLocaleTimeString(undefined, {
    hour: "numeric",
    minute: "2-digit",
  });
  const end = new Date(endIso).toLocaleTimeString(undefined, {
    hour: "numeric",
    minute: "2-digit",
    timeZoneName: "short",
  });
  return `${start} — ${end}`;
}

function googleCalendarUrl(startIso: string, endIso: string): string {
  const fmt = (iso: string) =>
    new Date(iso).toISOString().replace(/[-:]|\.\d{3}/g, "");
  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: "FactorFox Demo",
    dates: `${fmt(startIso)}/${fmt(endIso)}`,
    details:
      "Your FactorFox demo. See the calendar invite in your inbox for the meeting link.",
  });
  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}

export { ContactSales };
