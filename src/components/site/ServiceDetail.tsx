import type { Service } from "@/lib/services";
import { services } from "@/lib/services";
import { Link } from "@tanstack/react-router";
import { Section, Eyebrow, SectionHeading, FadeIn } from "./primitives";
import { CTABand } from "./CTABand";
import { ServiceCard } from "./ServiceCard";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Check, X, Camera } from "lucide-react";

export function ServiceDetail({ service }: { service: Service }) {
  const related = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="relative h-[88vh] min-h-[640px] w-full overflow-hidden bg-ink text-ivory">
        <img
          src={service.image}
          alt={service.name}
          className="absolute inset-0 h-full w-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-ink/20 to-ink/80" />
        <div className="relative z-10 mx-auto flex h-full w-full max-w-7xl flex-col justify-end px-6 pb-20 lg:px-10 lg:pb-28">
          <Eyebrow className="!text-ivory/80">Cherish · {service.priceFrom}</Eyebrow>
          <h1 className="mt-6 max-w-4xl font-display text-5xl leading-[0.98] md:text-7xl lg:text-[5.5rem]">
            {service.name}
          </h1>
          <p className="mt-6 max-w-xl text-lg opacity-85 md:text-xl">{service.tagline}</p>
          <div className="mt-10">
            <Link
              to="/book"
              search={{ service: service.slug }}
              className="inline-flex items-center gap-3 bg-ivory px-8 py-4 text-xs uppercase tracking-[0.25em] text-ink hover:bg-primary hover:text-primary-foreground"
            >
              Book this service
            </Link>
          </div>
        </div>
      </section>

      {/* Overview */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Eyebrow>The work</Eyebrow>
            <p className="mt-4 font-display text-3xl leading-tight md:text-4xl">An honest portrait of {service.name.toLowerCase()}.</p>
          </div>
          <div className="space-y-6 lg:col-span-7 lg:col-start-6">
            {service.overview.map((p, i) => (
              <FadeIn key={i} delay={i * 0.05}>
                <p className="text-lg leading-relaxed text-foreground/80">{p}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </Section>

      {/* Included + Pricing */}
      <Section className="border-y border-border bg-card">
        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <Eyebrow>What's included</Eyebrow>
            <h2 className="mt-4 font-display text-4xl leading-tight md:text-5xl">Every detail, considered.</h2>
            <ul className="mt-10 space-y-5">
              {service.included.map((item) => (
                <li key={item} className="flex items-start gap-4 border-b border-border pb-5">
                  <Camera className="mt-1 shrink-0 text-primary" size={18} />
                  <span className="text-base">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <Eyebrow>Pricing & duration</Eyebrow>
            <h2 className="mt-4 font-display text-4xl leading-tight md:text-5xl">Choose your session.</h2>
            <div className="mt-10 divide-y divide-border border-y border-border">
              {service.durations.map((d) => (
                <div key={d.label} className="flex items-baseline justify-between gap-6 py-6">
                  <span className="text-base">{d.label}</span>
                  <span className="font-display text-2xl text-primary">{d.price}</span>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm text-muted-foreground">
              All prices include GST. Custom packages available on request.
            </p>
          </div>
        </div>
      </Section>

      {/* Experience */}
      <Section>
        <SectionHeading
          eyebrow="The experience"
          title={<>From first hello to <em className="font-display italic text-primary">final print.</em></>}
          kicker="What it actually feels like to work with us."
        />
        <div className="mt-16 grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          {service.experience.map((step, i) => (
            <FadeIn key={step.step} delay={i * 0.06}>
              <div className="border-t border-foreground pt-6">
                <p className="eyebrow !text-muted-foreground">{step.step}</p>
                <h3 className="mt-3 font-display text-2xl leading-tight">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{step.copy}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* Benefits */}
      <Section className="bg-secondary">
        <SectionHeading eyebrow="Why couples choose us" title="What you actually take home." />
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {service.benefits.map((b) => (
            <div key={b.title} className="border border-border bg-background p-8">
              <h3 className="font-display text-2xl">{b.title}</h3>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">{b.copy}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* For / Not for */}
      <Section>
        <div className="grid gap-12 md:grid-cols-2">
          <div className="border-t border-foreground pt-8">
            <Eyebrow>This is for you if</Eyebrow>
            <ul className="mt-8 space-y-5">
              {service.forYou.map((it) => (
                <li key={it} className="flex items-start gap-3 text-lg">
                  <Check className="mt-1 shrink-0 text-primary" size={18} />
                  {it}
                </li>
              ))}
            </ul>
          </div>
          <div className="border-t border-border pt-8">
            <Eyebrow className="!text-muted-foreground">This is not for you if</Eyebrow>
            <ul className="mt-8 space-y-5">
              {service.notForYou.map((it) => (
                <li key={it} className="flex items-start gap-3 text-lg text-muted-foreground">
                  <X className="mt-1 shrink-0" size={18} />
                  {it}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section className="border-t border-border bg-card">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Eyebrow>FAQ</Eyebrow>
            <h2 className="mt-4 font-display text-4xl leading-tight md:text-5xl">Questions, answered.</h2>
            <p className="mt-6 text-muted-foreground">{service.forWho}</p>
          </div>
          <div className="lg:col-span-7 lg:col-start-6">
            <Accordion type="single" collapsible className="border-y border-border">
              {service.faqs.map((f, i) => (
                <AccordionItem key={i} value={`f-${i}`} className="border-b border-border">
                  <AccordionTrigger className="py-6 text-left font-display text-xl hover:no-underline">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="pb-6 text-base leading-relaxed text-muted-foreground">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </Section>

      {/* Related */}
      <Section>
        <div className="flex items-end justify-between">
          <SectionHeading eyebrow="Also from the studio" title="Related services" />
        </div>
        <div className="mt-14 grid gap-12 md:grid-cols-3">
          {related.map((s) => <ServiceCard key={s.slug} service={s} />)}
        </div>
      </Section>

      <CTABand
        eyebrow="Book"
        title={`Reserve your ${service.name.toLowerCase()} session.`}
        service={service.slug}
      />
    </>
  );
}
