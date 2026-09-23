import { createFileRoute } from "@tanstack/react-router";
import { ComingSoon } from "@/components/ComingSoon";
import { img } from "@/lib/site-data";

export const Route = createFileRoute("/projects/$slug")({
  head: () => ({
    meta: [
      { title: "Project Details — Coming Soon | TAMEER Construction & Interior" },
      {
        name: "description",
        content:
          "Detailed project specs, floor layouts, material breakdown, and high-res galleries are coming soon.",
      },
      { property: "og:title", content: "Project Details — Coming Soon | TAMEER" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ProjectDetailPage,
});

function ProjectDetailPage() {
  return (
    <ComingSoon
      pageName="Project Details"
      category="Case Study In Progress"
      description="Individual project breakdowns, before/after transformations, floor plans, and material catalogs are being prepared for public display. Connect with us on WhatsApp for private site visits and client references."
      bgImage={img.turnkeyVilla}
    />
  );
}
