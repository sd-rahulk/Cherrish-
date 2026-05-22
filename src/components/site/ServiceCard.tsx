import { Link } from "@tanstack/react-router";
import type { Service } from "@/lib/services";
import { ArrowUpRight } from "lucide-react";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      to="/services/$slug"
      params={{ slug: service.slug }}
      className="group block"
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-muted">
        <img
          src={service.image}
          alt={service.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
        />
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-ink/60 to-transparent" />
      </div>
      <div className="mt-5 flex items-start justify-between gap-6">
        <div>
          <p className="eyebrow text-muted-foreground !text-[0.65rem]">{service.priceFrom}</p>
          <h3 className="mt-2 font-display text-2xl leading-tight">{service.name}</h3>
          <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted-foreground">{service.tagline}</p>
        </div>
        <ArrowUpRight
          size={22}
          className="mt-2 shrink-0 text-primary transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1"
        />
      </div>
    </Link>
  );
}
