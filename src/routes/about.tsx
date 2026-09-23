import { createFileRoute } from "@tanstack/react-router";
import { ComingSoon } from "@/components/ComingSoon";
import { img } from "@/lib/site-data";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Coming Soon | TAMEER Construction & Interior" },
      {
        name: "description",
        content:
          "Our company profile, leadership story, and track record are currently being updated. TAMEER provides premium construction, renovation, and interior design across Karachi.",
      },
      { property: "og:title", content: "About Us — Coming Soon | TAMEER" },
      {
        property: "og:description",
        content: "Our company profile and journey in Karachi are coming soon.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <ComingSoon
      pageName="About Us"
      category="Under Refinement"
      description="We are currently compiling our updated firm profile, client testimonials, and engineering credentials. For any immediate enquiries or project planning, reach out directly to our team in Karachi."
      bgImage={img.courtyard}
    />
  );
}
