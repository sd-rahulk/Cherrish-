import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { services } from "@/lib/services";
import { Eyebrow } from "@/components/site/primitives";
import { Toaster, toast } from "sonner";
import { z } from "zod";

const searchSchema = z.object({ service: z.string().optional() });

export const Route = createFileRoute("/book")({
  validateSearch: searchSchema,
  head: () => ({
    meta: [
      { title: "Book a Session — Cherish Photography, Bengaluru" },
      { name: "description", content: "Reserve a photography session with Cherish in HSR Layout. Weddings, maternity, newborn, family and corporate." },
      { property: "og:title", content: "Book a Session — Cherish Photography" },
      { property: "og:description", content: "Tell us about your story and we'll be in touch within 24 hours." },
      { property: "og:url", content: "/book" },
    ],
    links: [{ rel: "canonical", href: "/book" }],
  }),
  component: BookPage,
});

function BookPage() {
  const { service: pre } = Route.useSearch();
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <Toaster position="bottom-right" richColors />
      <section className="pt-40 pb-12 lg:pt-52">
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-10">
          <Eyebrow>Begin</Eyebrow>
          <h1 className="mt-6 max-w-4xl font-display text-5xl leading-[0.98] md:text-7xl">
            Tell us about<br /> your story.
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Fill in a few details and we'll be back to you within 24 hours with availability,
            a tentative quote, and next steps. No bots, no autoresponders.
          </p>
        </div>
      </section>

      <section className="pb-32">
        <div className="mx-auto grid w-full max-w-7xl gap-16 px-6 lg:grid-cols-12 lg:px-10">
          <form
            className="lg:col-span-7 space-y-6 border-t border-border pt-12"
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
              toast.success("Thank you. We'll be in touch within 24 hours.");
            }}
          >
            <div className="grid gap-6 md:grid-cols-2">
              <Field label="Full name" name="name" required />
              <Field label="Email" name="email" type="email" required />
              <Field label="Phone" name="phone" type="tel" required />
              <Field label="Number of guests" name="guests" type="number" />
            </div>
            <div>
              <label className="eyebrow block">Service</label>
              <select
                name="service"
                defaultValue={pre ?? ""}
                className="mt-2 w-full border-0 border-b border-border bg-transparent py-3 text-base outline-none focus:border-primary"
              >
                <option value="">Select a service…</option>
                {services.map((s) => (
                  <option key={s.slug} value={s.slug}>{s.name}</option>
                ))}
              </select>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              <Field label="Preferred date" name="date" type="date" />
              <div>
                <label className="eyebrow block">Time of day</label>
                <select className="mt-2 w-full border-0 border-b border-border bg-transparent py-3 text-base outline-none focus:border-primary">
                  <option>Morning</option><option>Afternoon</option>
                  <option>Golden hour</option><option>Evening / indoor</option>
                </select>
              </div>
            </div>
            <div>
              <label className="eyebrow block">Anything we should know</label>
              <textarea
                name="notes"
                rows={5}
                className="mt-2 w-full border-0 border-b border-border bg-transparent py-3 text-base outline-none focus:border-primary"
                placeholder="Locations you have in mind, dates, mood, anything."
              />
            </div>
            <button
              type="submit"
              disabled={submitted}
              className="mt-6 inline-flex items-center bg-foreground px-10 py-4 text-xs uppercase tracking-[0.25em] text-background transition-colors hover:bg-primary disabled:opacity-50"
            >
              {submitted ? "Sent" : "Send enquiry"}
            </button>
          </form>

          <aside className="lg:col-span-4 lg:col-start-9 space-y-10 border-t border-border pt-12">
            <div>
              <Eyebrow>Prefer to call</Eyebrow>
              <p className="mt-3 font-display text-3xl">+91 98804 82555</p>
              <p className="mt-2 text-sm text-muted-foreground">Most days, 10am to 8pm.</p>
            </div>
            <div>
              <Eyebrow>Studio hours</Eyebrow>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Tue–Fri · 10:00 — 19:00<br />
                Saturday · 09:00 — 20:00<br />
                Sun & Mon · By appointment
              </p>
            </div>
            <div>
              <Eyebrow>What to bring</Eyebrow>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Yourself, your people, an open afternoon. We provide the rest — wardrobe
                suggestions, locations, and tea.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="eyebrow block">{label}{required && " *"}</label>
      <input
        name={name}
        type={type}
        required={required}
        className="mt-2 w-full border-0 border-b border-border bg-transparent py-3 text-base outline-none focus:border-primary"
      />
    </div>
  );
}
