import { createFileRoute } from "@tanstack/react-router";
import { ComingSoon } from "@/components/ComingSoon";
import { img } from "@/lib/site-data";

export const Route = createFileRoute("/projects/")({
  head: () => ({
    meta: [
      { title: "Projects & Portfolio — Coming Soon | TAMEER Construction & Interior" },
      {
        name: "description",
        content:
          "High-definition walkthroughs, floor plans, and photography of luxury villas, renovations, and interiors across DHA, Clifton, and Bahria Town Karachi coming soon.",
      },
      { property: "og:title", content: "Projects — Coming Soon | TAMEER" },
      {
        property: "og:description",
        content: "Explore upcoming villa construction and renovation projects across Karachi.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  return (
    <ComingSoon
      pageName="Projects & Portfolio"
      category="Portfolio Updating"
      description="We are currently archiving and uploading full architectural galleries, 3D renderings, and completed site photos from our recent builds in DHA, Clifton, Bahria Town, and PECHS Karachi."
      bgImage={img.luxuryHouse}
    />
  );
}
