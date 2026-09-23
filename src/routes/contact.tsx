import { createFileRoute } from "@tanstack/react-router";
import { ComingSoon } from "@/components/ComingSoon";
import { img } from "@/lib/site-data";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — Coming Soon | TAMEER Construction & Interior" },
      {
        name: "description",
        content:
          "Our new online booking portal is coming soon. You can reach TAMEER directly via WhatsApp or phone at 0334 2889533 in Karachi.",
      },
      { property: "og:title", content: "Contact Us — Coming Soon | TAMEER" },
      {
        property: "og:description",
        content:
          "Our interactive consultation portal is coming soon. Direct phone and WhatsApp inquiries are active.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <ComingSoon
      pageName="Contact & Consultation"
      category="Portal In Development"
      description="Our automated project estimation and booking portal is launching soon. For instant assistance, site visits, or quotation requests, please call or message our Karachi team directly on WhatsApp."
      bgImage={img.luxuryVilla}
    />
  );
}
