import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Clock3, MapPin, Menu, MessageCircle, Phone, X } from "lucide-react";
import { navLinks, site } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={cn("fixed inset-x-0 top-0 z-50 transition-all duration-500", scrolled ? "border-b border-border bg-background/90 backdrop-blur-xl" : "bg-background/70 backdrop-blur-md")}>
      <div className="hidden border-b border-border/70 bg-card/70 md:block">
        <div className="mx-auto flex h-9 max-w-7xl items-center justify-center gap-5 px-5 text-[10px] text-muted-foreground lg:justify-between lg:px-8">
          <a href={`tel:${site.phoneTel}`} className="flex items-center gap-1.5 hover:text-primary"><Phone className="size-3 text-primary" />Call Us: {site.phone}</a>
          <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-primary"><MessageCircle className="size-3 text-primary" />WhatsApp: +92 334 2889533</a>
          <span className="hidden items-center gap-1.5 lg:flex"><MapPin className="size-3 text-primary" />{site.address}</span>
          <span className="hidden items-center gap-1.5 lg:flex"><Clock3 className="size-3 text-primary" />Mon–Sat 9AM–8PM</span>
        </div>
      </div>
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
        <Link to="/" className="group flex items-center" onClick={() => setOpen(false)}>
          <img src={site.logo} alt="TAMEER Construction & Interior logo" className="h-14 w-auto object-contain transition-transform duration-500 group-hover:scale-105" />
        </Link>
        <nav className="hidden items-center gap-5 xl:flex">
          {navLinks.map((link) => (
            <Link key={`${link.to}-${link.label}`} to={link.to} activeProps={{ className: "text-primary" }} className="text-[10px] font-semibold uppercase tracking-[0.12em] text-muted-foreground transition-colors hover:text-primary">{link.label}</Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Link to="/contact" className="sheen-on-hover hidden rounded-sm bg-primary px-5 py-3 text-[10px] font-bold uppercase tracking-[0.16em] text-primary-foreground transition-colors hover:bg-accent sm:inline-flex">Get Quote</Link>
          <button type="button" aria-label="Toggle menu" onClick={() => setOpen((value) => !value)} className="grid size-10 place-items-center rounded-md border border-border xl:hidden">{open ? <X className="size-5" /> : <Menu className="size-5" />}</button>
        </div>
      </div>
      {open && (
        <div className="border-t border-border bg-background/95 backdrop-blur-xl xl:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-5 py-4">
            {navLinks.map((link) => <Link key={`${link.to}-${link.label}`} to={link.to} onClick={() => setOpen(false)} activeProps={{ className: "text-primary" }} className="border-b border-border/60 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-muted-foreground">{link.label}</Link>)}
            <Link to="/contact" onClick={() => setOpen(false)} className="mt-4 inline-flex justify-center rounded-sm bg-primary px-5 py-3 text-xs font-bold uppercase tracking-[0.16em] text-primary-foreground">Get Quote</Link>
          </nav>
        </div>
      )}
    </header>
  );
}
