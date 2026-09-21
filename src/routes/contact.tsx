import { createFileRoute } from "@tanstack/react-router";
import { type FormEvent } from "react";
import { Clock3, Facebook, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { img, services, site } from "@/lib/site-data";
import { PageHero } from "@/components/PageBits";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export const Route = createFileRoute("/contact")({
  head: () => ({ meta: [
    { title: "Contact TAMEER Construction Karachi | 0334 2889533" },
    { name: "description", content: "Discuss your construction, renovation or interior project in Karachi. Call or WhatsApp TAMEER at 0334 2889533." },
    { property: "og:title", content: "Contact TAMEER Construction & Interior" },
    { property: "og:description", content: "Have a plot or want to renovate? Talk to TAMEER in Karachi." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ]}), component: ContactPage,
});

function ContactPage() {
  function submitEnquiry(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const text = [`Hello TAMEER, I would like to discuss a project.`, `Name: ${data.get("name")}`, `Phone: ${data.get("phone")}`, `Plot Size: ${data.get("plotSize")}`, `Service: ${data.get("service")}`, `Message: ${data.get("message")}`].join("\n");
    window.open(`https://wa.me/923342889533?text=${encodeURIComponent(text)}`, "_blank", "noopener,noreferrer");
  }

  const details = [
    { icon: MapPin, label: "Address", value: site.address, href: undefined },
    { icon: Phone, label: "Phone", value: site.phone, href: `tel:${site.phoneTel}` },
    { icon: MessageCircle, label: "WhatsApp", value: "+92 334 2889533", href: site.whatsapp },
    { icon: Facebook, label: "Facebook Messenger", value: "Tameerconstruction.pk", href: site.messenger },
    { icon: Mail, label: "Email", value: site.email, href: `mailto:${site.email}` },
    { icon: Clock3, label: "Business Hours", value: "Monday to Saturday, 9:00 AM – 8:00 PM", href: undefined },
  ];

  return <>
    <PageHero eyebrow="Contact us" title="Let’s Discuss Your Project" intro="Have a plot? Want to renovate? Let’s talk." image={img.luxuryVilla} />
    <section className="py-20 lg:py-28"><div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
      <div><h2 className="text-3xl font-bold">Visit, call or message us</h2><div className="mt-8 space-y-4">{details.map(({ icon: Icon, label, value, href }) => <div key={label} className="flex gap-4 border-b border-border pb-4"><Icon className="mt-1 size-5 shrink-0 text-primary" /><div><p className="text-[10px] font-bold uppercase tracking-[0.18em] text-primary">{label}</p>{href ? <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noopener noreferrer" : undefined} className="mt-1 block text-sm text-muted-foreground hover:text-primary">{value}</a> : <p className="mt-1 text-sm text-muted-foreground">{value}</p>}</div></div>)}</div><p className="mt-8 text-sm leading-relaxed text-muted-foreground"><strong className="text-foreground">Service Areas:</strong> DHA, Clifton, Bahria Town Karachi, PECHS, Gulshan and Scheme 33.</p></div>
      <form onSubmit={submitEnquiry} className="lit-panel bg-card p-6 sm:p-8"><h2 className="text-2xl font-bold">Book a free consultation</h2><div className="mt-7 grid gap-5 sm:grid-cols-2"><label className="text-xs font-semibold text-muted-foreground">Name<Input name="name" required className="mt-2" placeholder="Your name" /></label><label className="text-xs font-semibold text-muted-foreground">Phone<Input name="phone" required className="mt-2" placeholder="03XX XXXXXXX" /></label><label className="text-xs font-semibold text-muted-foreground">Plot Size<Input name="plotSize" className="mt-2" placeholder="e.g. 120 Sq. Yds" /></label><label className="text-xs font-semibold text-muted-foreground">Service<select name="service" required className="mt-2 flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm text-foreground outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50"><option value="" className="bg-card">Select a service</option>{services.map((service) => <option key={service.slug} value={service.title} className="bg-card">{service.title}</option>)}</select></label><label className="text-xs font-semibold text-muted-foreground sm:col-span-2">Message<Textarea name="message" required className="mt-2 min-h-32" placeholder="Tell us about your project" /></label></div><Button type="submit" className="mt-6 w-full uppercase tracking-[0.16em]">Submit on WhatsApp</Button></form>
    </div></section>
    <section className="border-y border-border bg-card/30"><iframe title="Map of Karachi, Sindh, Pakistan" src="https://www.google.com/maps?q=Karachi%2C%20Sindh%2C%20Pakistan&output=embed" className="h-[420px] w-full border-0" loading="lazy" referrerPolicy="no-referrer-when-downgrade" /></section>
  </>;
}
