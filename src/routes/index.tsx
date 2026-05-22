import { createFileRoute, Link } from "@tanstack/react-router";
import heroImg from "@/assets/hero-home.jpg";
import studioImg from "@/assets/detail-studio.jpg";
import { services } from "@/lib/services";
import { Section, Eyebrow, SectionHeading, FadeIn } from "@/components/site/primitives";
import { ServiceCard } from "@/components/site/ServiceCard";
import { CTABand } from "@/components/site/CTABand";
import { ArrowDown, MapPin, Clock } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Cherish Photography — Editorial photography in Bengaluru" },
      { name: "description", content: "Weddings, maternity, newborn and portrait photography from a studio in HSR Layout, Bengaluru. Rated 4.9 across 107 reviews." },
      { property: "og:title", content: "Cherish Photography — Editorial photography in Bengaluru" },
      { property: "og:description", content: "Heirloom-quality photography from an HSR Layout studio." },
      { property: "og:image", content: heroImg },
      { property: "og:url", content: "/" },
      { name: "twitter:image", content: heroImg },
    ],
  }),
  component: HomePage,
});

const signature = services.slice(0, 3);

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative h-[100svh] min-h-[640px] w-full overflow-hidden bg-ink text-ivory">
        <img
          src={heroImg}
          alt="Bride at golden hour, Cherish Photography"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/30 via-ink/10 to-ink/70" />
        <div className="relative z-10 mx-auto flex h-full w-full max-w-7xl flex-col justify-end px-6 pb-24 lg:px-10 lg:pb-32">
          <FadeIn>
            <p className="eyebrow !text-ivory/80">Bengaluru · Est. 2014</p>
            <h1 className="mt-6 max-w-4xl font-display text-[3.4rem] leading-[0.95] tracking-tight md:text-[5.5rem] lg:text-[7rem]">
              Pictures you<br />
              <em className="italic">keep</em>, not<br />
              pictures you scroll.
            </h1>
            <p className="mt-8 max-w-md text-lg leading-relaxed opacity-85">
              An editorial photography studio in HSR Layout. Weddings, portraits, and the
              quiet moments in between.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                to="/book"
                className="inline-flex items-center gap-3 bg-ivory px-8 py-4 text-xs uppercase tracking-[0.25em] text-ink transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                Book a session
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-3 border border-ivory/60 px-8 py-4 text-xs uppercase tracking-[0.25em] hover:border-ivory hover:bg-ivory hover:text-ink"
              >
                Explore services
              </Link>
            </div>
          </FadeIn>
        </div>
        <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-ivory/70">
          <ArrowDown size={18} className="animate-bounce" />
        </div>
      </section>

      {/* MISSION */}
      <Section className="py-28 lg:py-40">
        <div className="grid gap-16 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <Eyebrow>Our work</Eyebrow>
            <h2 className="mt-6 font-display text-4xl leading-[1.05] md:text-6xl lg:text-7xl">
              We photograph the in-between &mdash; the moments most cameras miss.
            </h2>
          </div>
          <div className="space-y-6 text-lg leading-relaxed text-foreground/80 lg:col-span-4 lg:col-start-9">
            <p>
              For over a decade we have made pictures for couples, families, and founders
              across Bengaluru. Our work is quiet, considered, and built to outlast the
              algorithm.
            </p>
            <p>
              We believe photography is a craft of patience &mdash; not a feed.
            </p>
            <Link to="/about" className="inline-flex border-b border-foreground pb-1 text-sm tracking-wide hover:border-primary hover:text-primary">
              The story behind the studio →
            </Link>
          </div>
        </div>
      </Section>

      {/* SIGNATURE SERVICES */}
      <Section className="border-t border-border bg-secondary">
        <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Signature work"
            title={<>Three things we do <em className="italic text-primary">very well.</em></>}
          />
          <Link to="/services" className="text-sm uppercase tracking-[0.25em] hover:text-primary">
            View all services →
          </Link>
        </div>
        <div className="mt-16 grid gap-12 md:grid-cols-3">
          {signature.map((s) => (
            <FadeIn key={s.slug}><ServiceCard service={s} /></FadeIn>
          ))}
        </div>
      </Section>

      {/* PHILOSOPHY */}
      <Section className="py-28 lg:py-40">
        <div className="grid gap-16 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-6">
            <img src={studioImg} alt="Inside the Cherish studio" loading="lazy" className="aspect-[5/4] w-full object-cover" />
          </div>
          <div className="lg:col-span-5 lg:col-start-8">
            <Eyebrow>Philosophy</Eyebrow>
            <h2 className="mt-5 font-display text-4xl leading-tight md:text-5xl">Slow, on purpose.</h2>
            <div className="mt-10 space-y-8 border-l border-border pl-8">
              {[
                { t: "Presence over performance", c: "We watch first. Photograph second." },
                { t: "Craft over volume", c: "Fewer, better frames — hand-edited, never algorithmic." },
                { t: "Heirloom over feed", c: "Printed albums you'll still open in twenty years." },
              ].map((v) => (
                <div key={v.t}>
                  <p className="font-display text-xl">{v.t}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.c}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* TESTIMONIAL */}
      <Section className="border-y border-border bg-ink text-ivory">
        <div className="mx-auto max-w-4xl text-center">
          <Eyebrow className="!text-ivory/60">★ ★ ★ ★ ★ &nbsp; 4.9 · 107 reviews</Eyebrow>
          <blockquote className="mt-10 font-display text-3xl italic leading-[1.2] md:text-5xl lg:text-6xl">
            "Loved their vibe, attention to detail, and how easy they were to work with."
          </blockquote>
          <p className="mt-10 text-sm uppercase tracking-[0.25em] opacity-70">
            — A bride, December 2024
          </p>
        </div>
      </Section>

      {/* VISIT */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-6">
            <Eyebrow>Visit the studio</Eyebrow>
            <h2 className="mt-6 font-display text-4xl leading-tight md:text-6xl">
              HSR Layout,<br /> Bengaluru.
            </h2>
            <div className="mt-10 space-y-5 text-base">
              <p className="flex items-start gap-4">
                <MapPin size={18} className="mt-1 shrink-0 text-primary" />
                Creative Environs, 24th Main Rd, 2nd Sector, ITI Layout,<br />
                HSR Layout, Bengaluru, Karnataka 560102
              </p>
              <p className="flex items-start gap-4">
                <Clock size={18} className="mt-1 shrink-0 text-primary" />
                Open every day · By appointment
              </p>
            </div>
            <Link to="/location" className="mt-10 inline-flex border-b border-foreground pb-1 text-sm tracking-wide hover:border-primary hover:text-primary">
              Directions & hours →
            </Link>
          </div>
          <div className="lg:col-span-6">
            <iframe
              title="Cherish Photography map"
              src="https://www.google.com/maps?q=Creative+Environs+24th+Main+HSR+Layout+Bengaluru&output=embed"
              className="aspect-[4/3] w-full border border-border grayscale"
              loading="lazy"
            />
          </div>
        </div>
      </Section>

      <CTABand title="Let's make a picture you'll keep." />
    </>
  );
}
