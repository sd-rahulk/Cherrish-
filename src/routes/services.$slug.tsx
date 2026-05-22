import { createFileRoute, notFound } from "@tanstack/react-router";
import { getService, services } from "@/lib/services";
import { ServiceDetail } from "@/components/site/ServiceDetail";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const s = getService(params.slug);
    if (!s) throw notFound();
    return s;
  },
  head: ({ loaderData }) => {
    const s = loaderData;
    if (!s) return { meta: [{ title: "Service — Cherish Photography" }] };
    return {
      meta: [
        { title: `${s.name} — Cherish Photography, Bengaluru` },
        { name: "description", content: s.tagline },
        { property: "og:title", content: `${s.name} — Cherish Photography` },
        { property: "og:description", content: s.tagline },
        { property: "og:image", content: s.image },
        { property: "og:url", content: `/services/${s.slug}` },
        { property: "og:type", content: "product" },
        { name: "twitter:image", content: s.image },
      ],
      links: [{ rel: "canonical", href: `/services/${s.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: s.name,
            description: s.tagline,
            provider: { "@type": "LocalBusiness", name: "Cherish Photography" },
            areaServed: "Bengaluru, India",
          }),
        },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="flex min-h-screen items-center justify-center">
      <p className="font-display text-3xl">Service not found.</p>
    </div>
  ),
  component: ServicePage,
});

// Pre-generate so the router knows about every slug at build (cosmetic).
void services;

function ServicePage() {
  const service = Route.useLoaderData();
  return <ServiceDetail service={service} />;
}
