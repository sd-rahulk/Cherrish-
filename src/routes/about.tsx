import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/hero-about.jpg";
import studioImg from "@/assets/detail-studio.jpg";
import { Section, Eyebrow, SectionHeading } from "@/components/site/primitives";
import { CTABand } from "@/components/site/CTABand";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Cherish Photography, Bengaluru" },
      { name: "description", content: "The story, the people, and the philosophy behind Cherish Photography in HSR Layout, Bengaluru." },
      { property: "og:title", content: "About Cherish Photography" },
      { property: "og:description", content: "An editorial studio in HSR Layout, working slowly since 2014." },
      { property: "og:image", content: heroImg },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const timeline = [
  { y: "2014", t: "The studio opens", c: "A two-person studio above a bakery in Koramangala." },
  { y: "2017", t: "First destination wedding", c: "Goa. Three days. We never quite recovered." },
  { y: "2020", t: "HSR Layout", c: "We move into our current studio at Creative Environs." },
  { y: "2024", t: "Ten years in", c: "107 reviews, 4.9 stars, and counting." },
];

const team = [
  { name: "Ananya R.", role: "Founder & Lead Photographer" },
  { name: "Vikram S.", role: "Cinematographer" },
  { name: "Priya M.", role: "Studio Manager & Stylist" },
  { name: "Rohan K.", role: "Post Production Lead" },
];

function AboutPage() {
  return (
    <>
      <section className="relative h-[70vh] min-h-[520px] w-full overflow-hidden bg-ink text-ivory">
        <img src={heroImg} alt="Founder at work" className="absolute inset-0 h-full w-full object-cover opacity-75" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/30 to-ink/70" />
        <div className="relative z-10 mx-auto flex h-full w-full max-w-7xl flex-col justify-end px-6 pb-20 lg:px-10 lg:pb-28">
          <Eyebrow className="!text-ivory/80">About the studio</Eyebrow>
          <h1 className="mt-6 max-w-4xl font-display text-5xl leading-[0.98] md:text-7xl">
            A small studio, with a long memory.
          </h1>
        </div>
      </section>

      <Section>
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Eyebrow>Origin</Eyebrow>
            <h2 className="mt-4 font-display text-3xl leading-tight md:text-4xl">How Cherish began.</h2>
          </div>
          <div className="space-y-6 text-lg leading-relaxed text-foreground/80 lg:col-span-7 lg:col-start-6">
            <p>
              Cherish began in 2014 as a Sunday-only project &mdash; one camera, one bride, one
              wedding a month. We had a name we liked and not much else.
            </p>
            <p>
              Ten years on, the camera has multiplied, but the rest has not. We still
              photograph the way we did then: slowly, attentively, and with a deep
              suspicion of poses that look like poses.
            </p>
            <p>
              What changed is what surrounds the photographs &mdash; a quiet studio in HSR Layout,
              a team that genuinely likes each other, and an album-binding partner in Italy
              who has somehow become a friend.
            </p>
          </div>
        </div>
      </Section>

      <Section className="border-y border-border bg-card">
        <SectionHeading eyebrow="Timeline" title="A decade, in four moments." />
        <div className="mt-16 grid gap-12 md:grid-cols-4">
          {timeline.map((t) => (
            <div key={t.y} className="border-t border-foreground pt-6">
              <p className="font-display text-3xl text-primary">{t.y}</p>
              <h3 className="mt-3 font-display text-xl">{t.t}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{t.c}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="The team" title="Four people. One studio." />
        <div className="mt-16 grid gap-10 md:grid-cols-4">
          {team.map((m) => (
            <div key={m.name}>
              <div className="aspect-[3/4] w-full bg-muted" />
              <h3 className="mt-5 font-display text-2xl">{m.name}</h3>
              <p className="mt-1 text-sm uppercase tracking-[0.2em] text-muted-foreground">{m.role}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="border-t border-border bg-secondary">
        <div className="grid gap-16 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-6">
            <img src={studioImg} alt="Inside the studio" loading="lazy" className="aspect-[5/4] w-full object-cover" />
          </div>
          <div className="lg:col-span-5 lg:col-start-8">
            <Eyebrow>Philosophy</Eyebrow>
            <h2 className="mt-5 font-display text-4xl leading-tight md:text-5xl">
              A craft of patience, not a feed.
            </h2>
            <p className="mt-8 text-lg leading-relaxed text-muted-foreground">
              We believe photography is something you make, not something you produce. Our
              shoots are unhurried. Our edits are by hand. Our deliverables come on paper
              before they come on a screen.
            </p>
          </div>
        </div>
      </Section>

      <CTABand title="Come by the studio. Let's talk." />
    </>
  );
}
