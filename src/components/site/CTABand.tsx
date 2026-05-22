import { Link } from "@tanstack/react-router";
import { Phone } from "lucide-react";

export function CTABand({
  eyebrow = "Begin",
  title = "Let's make something worth keeping.",
  service,
}: {
  eyebrow?: string;
  title?: string;
  service?: string;
}) {
  return (
    <section className="border-t border-border bg-ink text-ivory">
      <div className="mx-auto grid w-full max-w-7xl gap-12 px-6 py-24 lg:grid-cols-12 lg:px-10 lg:py-32">
        <div className="lg:col-span-7">
          <p className="eyebrow !text-ivory/60">{eyebrow}</p>
          <h2 className="mt-6 font-display text-4xl leading-[1.05] md:text-6xl">{title}</h2>
        </div>
        <div className="flex flex-col items-start justify-end gap-5 lg:col-span-5 lg:items-end">
          <Link
            to="/book"
            search={service ? { service } : undefined}
            className="inline-flex items-center gap-3 bg-ivory px-8 py-4 text-xs uppercase tracking-[0.25em] text-ink transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            Book a session
          </Link>
          <a href="tel:+919880482555" className="inline-flex items-center gap-3 text-sm opacity-80 hover:opacity-100">
            <Phone size={16} /> +91 98804 82555
          </a>
        </div>
      </div>
    </section>
  );
}
