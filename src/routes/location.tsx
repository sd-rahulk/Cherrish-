import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/hero-location.jpg";
import { Section, Eyebrow, SectionHeading } from "@/components/site/primitives";
import { CTABand } from "@/components/site/CTABand";
import { MapPin, Phone, Mail, Car } from "lucide-react";

export const Route = createFileRoute("/location")({
  head: () => ({
    meta: [
      { title: "Visit — Cherish Photography Studio, HSR Layout" },
      { name: "description", content: "Find us at Creative Environs, 24th Main Rd, HSR Layout, Bengaluru. Open every day by appointment." },
      { property: "og:title", content: "Visit Cherish Photography, HSR Layout" },
      { property: "og:description", content: "Studio address, hours, parking and directions." },
      { property: "og:image", content: heroImg },
      { property: "og:url", content: "/location" },
    ],
    links: [{ rel: "canonical", href: "/location" }],
  }),
  component: LocationPage,
});

const hours = [
  ["Monday", "By appointment"],
  ["Tuesday", "10:00 — 19:00"],
  ["Wednesday", "10:00 — 19:00"],
  ["Thursday", "10:00 — 19:00"],
  ["Friday", "10:00 — 20:00"],
  ["Saturday", "09:00 — 20:00"],
  ["Sunday", "By appointment"],
];

function LocationPage() {
  return (
    <>
      <section className="relative h-[60vh] min-h-[460px] w-full overflow-hidden bg-ink text-ivory">
        <img src={heroImg} alt="Cherish studio at dusk" className="absolute inset-0 h-full w-full object-cover opacity-70" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/30 to-ink/80" />
        <div className="relative z-10 mx-auto flex h-full w-full max-w-7xl flex-col justify-end px-6 pb-20 lg:px-10 lg:pb-28">
          <Eyebrow className="!text-ivory/80">Visit</Eyebrow>
          <h1 className="mt-6 max-w-4xl font-display text-5xl leading-[0.98] md:text-7xl">
            The studio,<br /> HSR Layout.
          </h1>
        </div>
      </section>

      <Section>
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5 space-y-10">
            <div>
              <Eyebrow>Address</Eyebrow>
              <p className="mt-4 flex items-start gap-3 text-lg leading-relaxed">
                <MapPin className="mt-1 shrink-0 text-primary" size={18} />
                Creative Environs, 24th Main Rd<br />
                2nd Sector, ITI Layout, HSR Layout<br />
                Bengaluru, Karnataka 560102
              </p>
              <a
                className="mt-4 inline-flex border-b border-foreground pb-1 text-sm hover:border-primary hover:text-primary"
                href="https://maps.google.com/?q=Creative+Environs+24th+Main+HSR+Layout+Bengaluru"
                target="_blank" rel="noreferrer"
              >
                Open in Google Maps →
              </a>
            </div>
            <div>
              <Eyebrow>Get in touch</Eyebrow>
              <p className="mt-4 flex items-center gap-3 text-base"><Phone size={16} className="text-primary" /> +91 98804 82555</p>
              <p className="mt-2 flex items-center gap-3 text-base"><Mail size={16} className="text-primary" /> hello@cherishphotography.in</p>
            </div>
          </div>
          <div className="lg:col-span-7">
            <iframe
              title="Map to Cherish Photography"
              src="https://www.google.com/maps?q=Creative+Environs+24th+Main+HSR+Layout+Bengaluru&output=embed"
              className="aspect-[4/3] w-full border border-border grayscale"
              loading="lazy"
            />
          </div>
        </div>
      </Section>

      <Section className="border-y border-border bg-card">
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Eyebrow>Hours</Eyebrow>
            <h2 className="mt-4 font-display text-4xl leading-tight md:text-5xl">Open every day, by appointment.</h2>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <ul className="divide-y divide-border border-y border-border">
              {hours.map(([d, h]) => (
                <li key={d} className="flex items-baseline justify-between py-5">
                  <span className="font-display text-xl">{d}</span>
                  <span className="text-sm text-muted-foreground">{h}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section>
        <div className="grid gap-16 md:grid-cols-2">
          <div>
            <Eyebrow>Parking & transit</Eyebrow>
            <h3 className="mt-4 font-display text-3xl">Getting here.</h3>
            <ul className="mt-6 space-y-4 text-base text-muted-foreground">
              <li className="flex items-start gap-3"><Car size={18} className="mt-1 shrink-0 text-primary" /> Street parking along 24th Main, free after 19:00.</li>
              <li>Five minutes from HSR BDA Complex Metro stop (Yellow Line).</li>
              <li>Ola and Uber pickups directly outside the building.</li>
            </ul>
          </div>
          <div>
            <Eyebrow>On arrival</Eyebrow>
            <h3 className="mt-4 font-display text-3xl">Your first visit.</h3>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              Press the buzzer marked <em>Cherish</em>. We're on the third floor — there is a lift.
              You'll be greeted with chai or filter coffee, and we usually spend twenty
              minutes simply talking before any camera comes out.
            </p>
          </div>
        </div>
      </Section>

      <CTABand title="Come by. The kettle is on." />
    </>
  );
}
