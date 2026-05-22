import { createFileRoute } from "@tanstack/react-router";
import { Section, Eyebrow, SectionHeading } from "@/components/site/primitives";
import { CTABand } from "@/components/site/CTABand";
import heroImg from "@/assets/service-wedding.jpg";
import { Star } from "lucide-react";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title: "Reviews — Cherish Photography, 4.9★ across 107 reviews" },
      { name: "description", content: "What couples and families across Bengaluru say about working with Cherish Photography." },
      { property: "og:title", content: "Reviews — Cherish Photography" },
      { property: "og:description", content: "4.9 stars across 107 Google reviews." },
      { property: "og:image", content: heroImg },
      { property: "og:url", content: "/reviews" },
    ],
    links: [{ rel: "canonical", href: "/reviews" }],
  }),
  component: ReviewsPage,
});

const reviews = [
  { q: "Loved their vibe, attention to detail, and how easy they were to work with.", n: "Sneha & Arjun", w: "Wedding · 2024" },
  { q: "Thank you for accommodating delivery of the album to our home. Beautifully made.", n: "Meera P.", w: "Wedding · 2024" },
  { q: "Our newborn shoot was the calmest two hours of those first weeks.", n: "Aditi & Karan", w: "Newborn · 2024" },
  { q: "Their patience with three generations of my family was unmatched.", n: "Ravi K.", w: "Family · 2023" },
  { q: "The maternity photographs are now framed in our bedroom. We look at them daily.", n: "Anjali R.", w: "Maternity · 2024" },
  { q: "Founders headshots that actually look like me. Rare.", n: "Karthik N.", w: "Corporate · 2024" },
  { q: "From planning call to album delivery, every step felt considered.", n: "Divya & Ish", w: "Wedding · 2023" },
  { q: "We have shot with them three times now. Always the same warm, professional team.", n: "The Mehta Family", w: "Family · 2024" },
];

function ReviewsPage() {
  return (
    <>
      <section className="pt-40 pb-16 lg:pt-52 lg:pb-24">
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-10">
          <Eyebrow>Reviews</Eyebrow>
          <h1 className="mt-6 max-w-4xl font-display text-5xl leading-[0.98] md:text-7xl">
            <em className="italic text-primary">4.9</em> stars, across <em className="italic">107</em> reviews.
          </h1>
          <div className="mt-12 flex flex-wrap items-center gap-8 border-y border-border py-8">
            <div className="flex items-center gap-2 text-primary">
              {Array.from({ length: 5 }).map((_, i) => <Star key={i} fill="currentColor" size={18} />)}
            </div>
            <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">Google · WeddingWire · Justdial</p>
          </div>
        </div>
      </section>

      <Section className="!pt-0">
        <div className="columns-1 gap-8 md:columns-2 lg:columns-3">
          {reviews.map((r, i) => (
            <figure key={i} className="mb-8 break-inside-avoid border border-border bg-card p-8">
              <Star size={16} className="text-primary" fill="currentColor" />
              <blockquote className="mt-5 font-display text-2xl italic leading-snug">"{r.q}"</blockquote>
              <figcaption className="mt-6 border-t border-border pt-4 text-sm">
                <span className="font-medium">{r.n}</span>
                <span className="ml-2 text-muted-foreground">{r.w}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </Section>

      <Section className="border-y border-border bg-ink text-ivory">
        <div className="mx-auto max-w-4xl">
          <Eyebrow className="!text-ivory/60">Featured story</Eyebrow>
          <blockquote className="mt-8 font-display text-3xl italic leading-[1.2] md:text-5xl">
            "We met them on a video call from London and trusted them with our entire
            three-day wedding in Bengaluru. The album landed in our flat in Hampstead
            three months later. We opened it together and cried."
          </blockquote>
          <p className="mt-8 text-sm uppercase tracking-[0.25em] opacity-70">— Rhea & Tom, 2023</p>
        </div>
      </Section>

      <Section>
        <p className="eyebrow text-center">As mentioned in</p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-16 gap-y-6 font-display text-2xl text-muted-foreground">
          <span>WedMeGood</span><span>·</span><span>Vogue Wedding</span><span>·</span>
          <span>BangaloreMirror</span><span>·</span><span>Conde Nast Traveller</span>
        </div>
      </Section>

      <CTABand title="Read our story, then come write yours." />
    </>
  );
}
