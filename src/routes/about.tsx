import { createFileRoute } from "@tanstack/react-router";
import { company } from "@/lib/site";
import { img, registrations, stats } from "@/lib/site-data";
import { CtaBand, PageHero, Prose } from "@/components/PageBits";
import { Counter, Reveal, SectionHeading } from "@/components/ui-bits";

export const Route = createFileRoute("/about")({
  head: () => ({ meta: [
    { title: "About TAMEER Construction & Interior | Karachi" },
    { name: "description", content: "Meet TAMEER, a Karachi construction and interior company built on quality, honest pricing, proper planning and expert execution." },
    { property: "og:title", content: "About TAMEER Construction & Interior" },
    { property: "og:description", content: "Quality construction without compromise, delivered by an expert Karachi team." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ]}), component: AboutPage,
});

function AboutPage() {
  return <>
    <PageHero eyebrow="About us" title={company.since} intro="Construction is not just about bricks. It is about building trust." image={img.courtyard} />
    <section className="py-20 lg:py-28"><div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[1.15fr_1fr] lg:px-8">
      <div><SectionHeading eyebrow="Our story" title="Honest construction for every homeowner" /><div className="mt-8"><Prose>
        <p>Based in Karachi, Sindh, TAMEER started with a simple goal: to provide honest, quality construction to every homeowner. Today, with 1.1K followers, 32+ posts and completed projects, we are becoming one of Karachi’s trusted names.</p>
        <p>Unlike others, we plan before we build. We discuss your space, requirements and budget properly, so there is no guesswork and no hidden charges.</p>
        <p><strong className="text-foreground">Our Mission:</strong> To deliver quality construction without compromise.</p>
        <p><strong className="text-foreground">Our Vision:</strong> To be Pakistan’s most reliable construction and interior brand.</p>
      </Prose></div></div>
      <Reveal><div className="lit-panel overflow-hidden bg-card"><img src={img.luxuryVilla} alt="Completed luxury villa by TAMEER in Karachi" loading="lazy" className="aspect-4/5 w-full object-cover" /></div></Reveal>
    </div></section>
    <section className="border-y border-border bg-card/30 py-14"><div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-5 text-center sm:grid-cols-4 lg:px-8">{stats.map((stat) => <Reveal key={stat.label}><Counter value={stat.value} className="ember-text text-3xl font-extrabold sm:text-5xl" /><p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">{stat.label}</p></Reveal>)}</div></section>
    <section className="py-20 lg:py-28"><div className="mx-auto max-w-7xl px-5 lg:px-8"><SectionHeading eyebrow="Why TAMEER is different" title="We plan before we build" intro="Your space, needs and budget are agreed properly before work begins." /><div className="mt-12 grid gap-6 md:grid-cols-3">{registrations.map((item, index) => <Reveal key={item} delay={index * 90}><div className="lit-panel h-full bg-card p-8 text-center"><h3 className="text-xl font-bold">{item}</h3></div></Reveal>)}</div></div></section>
    <CtaBand />
  </>;
}
