import { createFileRoute } from "@tanstack/react-router";
import { projects } from "@/lib/site";
import { ProjectCard } from "@/components/ProjectCard";
import { CtaBand, PageHero } from "@/components/PageBits";
import { Reveal, SectionHeading } from "@/components/ui-bits";
import { VideoGallery } from "@/components/VideoGallery";
import { PostsRail } from "@/components/PostsRail";
import { img } from "@/lib/site-data";

export const Route = createFileRoute("/projects/")({
  head: () => ({ meta: [
    { title: "Recent Construction Projects in Karachi | TAMEER" },
    { name: "description", content: "Explore TAMEER villa construction, bungalow renovation, interior and remodeling projects across DHA, Bahria Town, Clifton and PECHS Karachi." },
    { property: "og:title", content: "TAMEER Projects in Karachi" },
    { property: "og:description", content: "Recent villa, renovation, interior and remodeling work across Karachi." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ]}), component: ProjectsPage,
});

function ProjectsPage() {
  return <>
    <PageHero eyebrow="Portfolio" title="Our Recent Projects in Karachi" intro="Homes and spaces planned with care, built with quality and finished with precision." image={img.luxuryHouse} />
    <section className="py-20 lg:py-28"><div className="mx-auto max-w-7xl px-5 lg:px-8"><div className="grid gap-6 sm:grid-cols-2">{projects.map((project, index) => <Reveal key={project.slug} delay={index * 70}><ProjectCard project={project} /></Reveal>)}</div></div></section>
    <section className="overflow-hidden border-y border-border bg-card/30 py-20 lg:py-28"><div className="mx-auto max-w-7xl px-5 lg:px-8"><SectionHeading eyebrow="Project posts" title="More from our Karachi sites" intro="A selection from our construction, renovation and interior work." /></div><div className="mt-12"><PostsRail /></div></section>
    <section className="py-20 lg:py-28"><div className="mx-auto max-w-6xl px-5 lg:px-8"><SectionHeading eyebrow="Video gallery" title="See our work in motion" intro="Construction progress, walkthroughs and finished spaces." align="center" /><VideoGallery /></div></section>
    <CtaBand />
  </>;
}
