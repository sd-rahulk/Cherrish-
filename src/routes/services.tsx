import { createFileRoute } from "@tanstack/react-router";
import { services } from "@/lib/services";
import { Section, Eyebrow, SectionHeading, FadeIn } from "@/components/site/primitives";
import { ServiceCard } from "@/components/site/ServiceCard";
import { CTABand } from "@/components/site/CTABand";
import heroImg from "@/assets/hero-home.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Cherish Photography, Bengaluru" },
      { name: "description", content: "Wedding, pre-wedding, maternity, newborn, family and corporate photography in HSR Layout, Bengaluru." },
      { property: "og:title", content: "Photography Services — Cherish, Bengaluru" },
      { property: "og:description", content: "Editorial photography across weddings, portraits and brands." },
      { property: "og:image", content: heroImg },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <section className="pt-40 pb-20 lg:pt-52 lg:pb-28">
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-10">
          <Eyebrow>The catalogue</Eyebrow>
          <h1 className="mt-6 max-w-5xl font-display text-5xl leading-[0.98] md:text-7xl lg:text-[6rem]">
            Six services. <em className="italic text-primary">One studio.</em><br />
            All quietly considered.
          </h1>
          <p className="mt-10 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Whether you're planning a three-day wedding or a thirty-minute headshot,
            our process is the same — pay attention, make it beautiful, deliver it well.
          </p>
        </div>
      </section>

      <Section className="border-t border-border">
        <div className="grid gap-x-10 gap-y-20 md:grid-cols-2 lg:gap-y-28">
          {services.map((s, i) => (
            <FadeIn key={s.slug} delay={(i % 2) * 0.08} className={i % 2 === 1 ? "md:mt-24" : ""}>
              <ServiceCard service={s} />
            </FadeIn>
          ))}
        </div>
      </Section>

      <Section className="border-t border-border bg-secondary">
        <SectionHeading eyebrow="What to expect" title="A simple, three-part process." />
        <div className="mt-16 grid gap-10 md:grid-cols-3">
          {[
            { n: "01", t: "Conversation", c: "We meet, in person or over a call, and listen to what you actually need." },
            { n: "02", t: "Creation", c: "We make pictures slowly, in soft light, with as little fuss as possible." },
            { n: "03", t: "Keepsake", c: "You receive a hand-curated gallery, prints, or a hand-bound album." },
          ].map((s) => (
            <div key={s.n} className="border-t border-foreground pt-8">
              <p className="eyebrow !text-muted-foreground">{s.n}</p>
              <h3 className="mt-3 font-display text-3xl">{s.t}</h3>
              <p className="mt-3 text-base text-muted-foreground">{s.c}</p>
            </div>
          ))}
        </div>
      </Section>

      <CTABand />
    </>
  );
}
