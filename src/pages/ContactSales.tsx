import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { ShieldCheck, Zap, CheckCircle2 } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";

const VOLUME_OPTIONS = [
  "Less than $1M / month",
  "$1M – $5M / month",
  "$5M – $20M / month",
  "$20M – $50M / month",
  "More than $50M / month",
];

interface FormState {
  fullName: string;
  workEmail: string;
  companyName: string;
  monthlyVolume: string;
  website: string; // honeypot — hidden from users
}

const initialForm: FormState = {
  fullName: "",
  workEmail: "",
  companyName: "",
  monthlyVolume: "",
  website: "",
};

function ContactSales() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <Helmet>
        <title>Contact Sales — FactorFox</title>
        <meta
          name="description"
          content="Request access to FactorFox — the only platform that migrates factoring data in under 60 minutes."
        />
      </Helmet>

      <main className="bg-[var(--set1-bg)]">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:min-h-[calc(100vh-4rem)]">
          {/* Left half — white, content aligned to where max-w-7xl px-8 starts */}
          <div className="flex flex-col justify-center px-4 sm:px-6 lg:pl-[max(2rem,calc((100vw-80rem)/2+2rem))] lg:pr-12 py-16 md:py-20">
            <AnimatedSection delay={0} className="max-w-[560px]">
              {/* <div className="mb-6 self-start inline-flex items-center gap-2 rounded-full border border-primary/25 dark:border-primary/30 bg-primary/5 dark:bg-primary/10 px-3 py-1">
                <ShieldCheck
                  className="h-3 w-3 text-primary"
                  strokeWidth={2.5}
                />
                <span className="text-[10px] font-bold uppercase tracking-[0.12em] text-primary">
                  Efficient Onboarding for Efficient Operators
                </span>
              </div> */}

              <h1
                className="font-black text-foreground leading-[0.95] mb-6"
                style={{ fontSize: "clamp(52px, 6.5vw, 80px)" }}
              >
                Join in Minutes
                <br />
                not Months.
              </h1>

              <p className="text-[16.5px] leading-relaxed text-muted-foreground max-w-[460px]">
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

          {/* Right half — soft bg, extends to viewport right edge */}
          <div className="bg-surface-soft flex items-center justify-center px-4 sm:px-6 lg:px-12 py-12 md:py-16">
            <AnimatedSection delay={0.12} className="w-full max-w-md">
              <div className="rounded-2xl border border-border bg-card shadow-[0_12px_40px_-12px_rgba(99,102,241,0.18)] dark:shadow-black/30 p-7 md:p-8">
                {submitted ? (
                  <div
                    role="status"
                    aria-live="polite"
                    className="flex flex-col items-center text-center gap-4 py-8"
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                      <CheckCircle2
                        className="h-7 w-7 text-primary"
                        strokeWidth={2}
                      />
                    </div>
                    <h2 className="text-[22px] font-bold text-foreground">
                      Request received
                    </h2>
                    <p className="text-[14px] text-muted-foreground max-w-[280px]">
                      Thanks
                      {form.fullName.trim()
                        ? `, ${form.fullName.trim().split(" ")[0]}`
                        : ""}
                      . Our team will reach out within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      if (form.website) return; // bot caught by honeypot
                      // TODO: wire to backend / CRM endpoint
                      // eslint-disable-next-line no-console
                      console.log("[Request Access]", {
                        fullName: form.fullName,
                        workEmail: form.workEmail,
                        companyName: form.companyName,
                        monthlyVolume: form.monthlyVolume,
                      });
                      setSubmitted(true);
                    }}
                  >
                    <h2 className="text-[24px] font-bold text-foreground mb-1">
                      Initialize Account
                    </h2>
                    <p className="text-[14px] text-muted-foreground mb-6">
                      Fill in the details below to request platform access.
                    </p>

                    <Field
                      label="Full Name"
                      name="fullName"
                      type="text"
                      placeholder="e.g. Marcus Aurelius"
                      value={form.fullName}
                      onChange={handleChange}
                      autoComplete="name"
                    />
                    <Field
                      label="Work Email"
                      name="workEmail"
                      type="email"
                      placeholder="m.aurelius@firm.com"
                      value={form.workEmail}
                      onChange={handleChange}
                      autoComplete="email"
                    />
                    <Field
                      label="Company Name"
                      name="companyName"
                      type="text"
                      placeholder="Capital Partners Inc."
                      value={form.companyName}
                      onChange={handleChange}
                      autoComplete="organization"
                    />

                    <div className="mb-5">
                      <label
                        htmlFor="monthlyVolume"
                        className="text-label mb-1.5 block text-muted-foreground"
                      >
                        Monthly Volume
                      </label>
                      <select
                        id="monthlyVolume"
                        name="monthlyVolume"
                        value={form.monthlyVolume}
                        onChange={handleChange}
                        required
                        className="w-full appearance-none rounded-lg border border-border bg-input-soft px-3.5 py-2.5 text-[14px] text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30 transition bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2024%2024%22%20fill=%22none%22%20stroke=%22%2394a3b8%22%20stroke-width=%222%22%20stroke-linecap=%22round%22%20stroke-linejoin=%22round%22%3E%3Cpolyline%20points=%226%209%2012%2015%2018%209%22/%3E%3C/svg%3E')] bg-no-repeat bg-[length:16px_16px] bg-[right_12px_center] pr-10"
                      >
                        <option value="" disabled>
                          Select volume range
                        </option>
                        {VOLUME_OPTIONS.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Honeypot — hidden from users, filled by bots */}
                    <div
                      className="absolute left-[-9999px] top-[-9999px]"
                      aria-hidden="true"
                    >
                      <label htmlFor="website">Website</label>
                      <input
                        id="website"
                        name="website"
                        type="text"
                        value={form.website}
                        onChange={handleChange}
                        tabIndex={-1}
                        autoComplete="off"
                      />
                    </div>

                    <button
                      type="submit"
                      style={{
                        background:
                          "linear-gradient(180deg, #4ba6ff 0%, #0085ef 100%)",
                      }}
                      className="mt-2 w-full rounded-xl text-white font-semibold text-[15px] py-3.5 transition-opacity hover:opacity-95 shadow-md shadow-primary/20 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:ring-offset-2 focus:ring-offset-surface-soft"
                    >
                      Request Access
                    </button>

                    <div className="mt-4 flex items-center justify-center gap-1.5 text-[12px] text-muted-foreground">
                      <Zap
                        className="h-3 w-3 text-primary"
                        strokeWidth={2.5}
                        fill="currentColor"
                      />
                      <span>We&apos;ll reach out within 24 hours</span>
                    </div>
                  </form>
                )}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </main>
    </>
  );
}

interface FieldProps {
  label: string;
  name: keyof FormState;
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  autoComplete?: string;
}

function Field({
  label,
  name,
  type,
  placeholder,
  value,
  onChange,
  autoComplete,
}: FieldProps) {
  return (
    <div className="mb-5">
      <label
        htmlFor={name}
        className="text-label mb-1.5 block text-muted-foreground"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required
        autoComplete={autoComplete}
        className="w-full rounded-lg border border-border bg-input-soft px-3.5 py-2.5 text-[14px] text-foreground placeholder:text-muted-foreground/70 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30 transition"
      />
    </div>
  );
}

export { ContactSales };
