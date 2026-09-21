import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";
import { Reveal } from "@/components/ui-bits";

export function PageHero({ eyebrow, title, intro, image }: { eyebrow: string; title: string; intro: string; image: string }) {
  return <section className="relative flex min-h-[62vh] items-center overflow-hidden pb-16 pt-40 sm:min-h-[70vh] sm:pt-48"><img src={image} alt="" aria-hidden fetchPriority="high" decoding="async" className="absolute inset-0 size-full scale-105 object-cover" /><div className="absolute inset-0 bg-background/70" /><div className="absolute inset-0 bg-linear-to-t from-background via-background/50 to-background/60" /><div className="relative mx-auto w-full max-w-4xl px-5 text-center lg:px-8"><Reveal><p className="text-[10px] font-bold uppercase tracking-[0.35em] text-primary sm:text-xs">{eyebrow}</p><h1 className="mt-4 text-3xl font-extrabold leading-[1.1] sm:text-5xl lg:text-6xl">{title}</h1><p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-foreground/75 sm:text-base">{intro}</p></Reveal></div></section>;
}

export function CtaBand({ title = "DON’T START RENOVATION WITHOUT A PLAN", body = "Discuss your space, needs and scope with TAMEER." }: { title?: string; body?: string }) {
  return <section className="relative overflow-hidden border-t border-border bg-card/40 py-20 lg:py-28"><div className="grid-backdrop pointer-events-none absolute inset-0 opacity-50" /><div className="relative mx-auto max-w-3xl px-5 text-center lg:px-8"><Reveal><h2 className="text-2xl leading-tight sm:text-4xl">{title}</h2><p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">{body}</p><Link to="/contact" className="btn-shake sheen-on-hover mt-8 inline-flex items-center gap-2 rounded-sm bg-primary px-8 py-4 text-xs font-bold uppercase tracking-[0.18em] text-primary-foreground transition-colors hover:bg-accent">Book Your Consultation <ArrowRight className="size-4" /></Link></Reveal></div></section>;
}

export function Prose({ children }: { children: ReactNode }) { return <div className="space-y-5 text-sm leading-relaxed text-muted-foreground sm:text-base">{children}</div>; }
