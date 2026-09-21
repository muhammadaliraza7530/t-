import { createFileRoute } from "@tanstack/react-router";
import { img, services } from "@/lib/site-data";
import { CtaBand, PageHero } from "@/components/PageBits";
import { Reveal, SectionHeading } from "@/components/ui-bits";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Construction, Renovation & Interior Services in Karachi | TAMEER" },
      {
        name: "description",
        content:
          "Grey structure, turnkey construction, home renovation, interior design, building materials and architectural design in Karachi.",
      },
      { property: "og:title", content: "TAMEER Construction Services in Karachi" },
      {
        property: "og:description",
        content: "Complete construction, renovation, interiors and material supply under one roof.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our services"
        title="Construction solutions for every stage"
        intro="From excavation and RCC to the last light fitting, TAMEER plans and executes your Karachi project."
        image={img.spanishVilla}
      />
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading
            eyebrow="What we do"
            title="Quality construction, without guesswork"
            intro="One responsible team, transparent scope and materials selected for lasting performance."
          />
          <div className="mt-12 space-y-6">
            {services.map((service, index) => (
              <Reveal key={service.slug} delay={index * 60}>
                <article
                  id={service.slug}
                  className="lit-panel grid scroll-mt-40 overflow-hidden bg-card md:grid-cols-[0.8fr_1.2fr]"
                >
                  <img
                    src={service.image}
                    alt={`${service.title} in Karachi`}
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    className="h-full min-h-64 w-full object-cover"
                  />
                  <div className="p-7 sm:p-10">
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
                      Service {String(index + 1).padStart(2, "0")}
                    </p>
                    <h2 className="mt-3 text-2xl font-bold sm:text-3xl">{service.title}</h2>
                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                      {service.body}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <CtaBand
        title="Tell us about your project"
        body="Share your space, needs and budget. We will prepare a clear plan and quotation."
      />
    </>
  );
}
