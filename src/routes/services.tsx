import { createFileRoute } from "@tanstack/react-router";
import { ComingSoon } from "@/components/ComingSoon";
import { img } from "@/lib/site-data";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Coming Soon | TAMEER Construction & Interior" },
      {
        name: "description",
        content:
          "Comprehensive turnkey packages, grey structure rates, renovation breakdowns, and interior catalogs are coming soon. Contact TAMEER in Karachi for instant quotations.",
      },
      { property: "og:title", content: "Services — Coming Soon | TAMEER" },
      {
        property: "og:description",
        content:
          "Detailed construction, renovation, and interior design service catalogs coming soon.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <ComingSoon
      pageName="Services & Packages"
      category="Catalog Updating"
      description="Our 2026 service rate card, turnkey specifications, grey structure BOQ estimates, and interior packages are being updated. You can still request custom estimates and site assessments via WhatsApp."
      bgImage={img.spanishVilla}
    />
  );
}
