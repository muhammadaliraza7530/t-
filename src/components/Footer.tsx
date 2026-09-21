import { Link } from "@tanstack/react-router";
import { Facebook, MapPin, MessageCircle, Phone } from "lucide-react";
import { site } from "@/lib/site-data";

const quickLinks = [{ to: "/about", label: "About" }, { to: "/services", label: "Services" }, { to: "/projects", label: "Projects" }, { to: "/contact", label: "Contact" }];
const footerServices = ["Grey Structure", "Turnkey", "Renovation", "Interior", "Materials"];

export function Footer() {
  return (
    <footer className="border-t border-border bg-card/40">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div className="md:col-span-2">
          <img src={site.logo} alt="TAMEER Construction & Interior logo" className="h-28 w-auto object-contain" />
          <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground">Transforming Blueprints into Reality. Your trusted construction partner and one-stop solution for renovation, interior and construction in Karachi.</p>
          <a href={site.facebook} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"><Facebook className="size-4 text-primary" />Tameerconstruction.pk</a>
        </div>
        <div>
          <h3 className="text-xs font-bold uppercase tracking-[0.28em] text-primary">Quick Links</h3>
          <ul className="mt-5 space-y-3">{quickLinks.map((link) => <li key={link.to}><Link to={link.to} className="text-sm text-muted-foreground transition-colors hover:text-primary">{link.label}</Link></li>)}</ul>
          <h3 className="mt-8 text-xs font-bold uppercase tracking-[0.28em] text-primary">Services</h3>
          <p className="mt-4 text-sm leading-7 text-muted-foreground">{footerServices.join(" · ")}</p>
        </div>
        <div>
          <h3 className="text-xs font-bold uppercase tracking-[0.28em] text-primary">Contact</h3>
          <ul className="mt-5 space-y-4 text-sm text-muted-foreground">
            <li><a href={`tel:${site.phoneTel}`} className="flex gap-3 hover:text-primary"><Phone className="mt-0.5 size-4 shrink-0 text-primary" />{site.phone}</a></li>
            <li><a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className="flex gap-3 hover:text-primary"><MessageCircle className="mt-0.5 size-4 shrink-0 text-primary" />+92 334 2889533</a></li>
            <li className="flex gap-3"><MapPin className="mt-0.5 size-4 shrink-0 text-primary" /><span>{site.address}</span></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border px-5 py-7 text-center text-xs leading-relaxed text-muted-foreground">
        <p className="mx-auto max-w-5xl">Tameer Construction is a construction company in Karachi, Pakistan, offering house construction, home renovation, interior design, grey structure, turnkey construction and building material supply across Karachi.</p>
        <p className="mt-4">© 2026 Tameer Construction & Interior. All Rights Reserved. | Designed with trust in Karachi.</p>
      </div>
    </footer>
  );
}
