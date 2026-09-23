import { Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  Building2,
  HardHat,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { site, img } from "@/lib/site-data";
import { Reveal } from "@/components/ui-bits";

interface ComingSoonProps {
  pageName: string;
  category?: string;
  description?: string;
  bgImage?: string;
}

export function ComingSoon({
  pageName,
  category = "Under Construction",
  description,
  bgImage = img.luxuryHouse,
}: ComingSoonProps) {
  const defaultDescription =
    description ||
    `We are actively preparing new content, detailed specifications, and project portfolios for the ${pageName} section. In the meantime, our Karachi engineering and design teams are fully operational on-site.`;

  return (
    <div className="relative min-h-[85vh] overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28">
      {/* Background with moody architectural backdrop and dark gradient */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <img
          src={bgImage}
          alt=""
          aria-hidden
          className="size-full object-cover object-center brightness-[0.22] filter saturate-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/80 to-background" />
        <div className="grid-backdrop absolute inset-0 opacity-40" />
      </div>

      <div className="relative mx-auto max-w-5xl px-5 sm:px-8">
        <Reveal>
          {/* Back to Home Link */}
          <div className="mb-8">
            <Link
              to="/"
              className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-card/60 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground backdrop-blur-md transition-colors hover:border-primary hover:text-primary"
            >
              <ArrowLeft className="size-3.5" /> Back to Homepage
            </Link>
          </div>

          {/* Central Coming Soon Card */}
          <div className="lit-panel relative overflow-hidden rounded-lg border border-border/70 bg-card/70 p-8 shadow-2xl backdrop-blur-xl sm:p-12 md:p-16">
            {/* Glowing Accent Orb */}
            <div className="pointer-events-none absolute -right-20 -top-20 size-72 rounded-full bg-primary/10 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-20 -left-20 size-72 rounded-full bg-primary/10 blur-3xl" />

            <div className="relative z-10 flex flex-col items-center text-center">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.25em] text-primary">
                <span className="relative flex size-2">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-75" />
                  <span className="relative inline-flex size-2 rounded-full bg-primary" />
                </span>
                <span>{category}</span>
              </div>

              {/* Main Title */}
              <h1 className="mt-6 text-3xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                {pageName} <span className="ember-text block sm:inline">Coming Soon</span>
              </h1>

              {/* Subheading / Description */}
              <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                {defaultDescription}
              </p>

              {/* Call to Actions */}
              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                <a
                  href={`https://wa.me/923342889533?text=${encodeURIComponent(
                    `Hello TAMEER, I am inquiring about your ${pageName} services and current projects in Karachi.`,
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="sheen-on-hover inline-flex items-center gap-2.5 rounded-sm bg-primary px-7 py-3.5 text-xs font-bold uppercase tracking-[0.16em] text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:bg-accent"
                >
                  <MessageCircle className="size-4" />
                  Discuss on WhatsApp
                </a>

                <a
                  href={`tel:${site.phoneTel}`}
                  className="inline-flex items-center gap-2.5 rounded-sm border border-border bg-secondary/60 px-6 py-3.5 text-xs font-bold uppercase tracking-[0.16em] text-foreground transition-all hover:border-primary hover:bg-secondary"
                >
                  <Phone className="size-4 text-primary" />
                  Call: {site.phone}
                </a>

                <Link
                  to="/"
                  className="inline-flex items-center gap-2 rounded-sm border border-border/60 bg-transparent px-6 py-3.5 text-xs font-bold uppercase tracking-[0.16em] text-muted-foreground transition-colors hover:text-foreground"
                >
                  View Homepage
                </Link>
              </div>

              {/* Status Info Strip */}
              <div className="mt-12 w-full border-t border-border/60 pt-10">
                <div className="grid grid-cols-1 gap-6 text-left sm:grid-cols-3">
                  <div className="rounded-md border border-border/50 bg-background/50 p-5 backdrop-blur-sm">
                    <div className="flex items-center gap-3">
                      <div className="flex size-9 items-center justify-center rounded-sm bg-primary/10 text-primary">
                        <HardHat className="size-5" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-foreground">On-Site Execution</h4>
                        <p className="text-xs text-muted-foreground">Active throughout Karachi</p>
                      </div>
                    </div>
                    <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                      Current projects in DHA, Clifton, Bahria Town & PECHS are running as
                      scheduled.
                    </p>
                  </div>

                  <div className="rounded-md border border-border/50 bg-background/50 p-5 backdrop-blur-sm">
                    <div className="flex items-center gap-3">
                      <div className="flex size-9 items-center justify-center rounded-sm bg-primary/10 text-primary">
                        <Building2 className="size-5" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-foreground">
                          Free Turnkey Estimates
                        </h4>
                        <p className="text-xs text-muted-foreground">Detailed BOQs & Scope</p>
                      </div>
                    </div>
                    <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                      Send your plot details or floor plans to receive transparent rates and
                      timelines.
                    </p>
                  </div>

                  <div className="rounded-md border border-border/50 bg-background/50 p-5 backdrop-blur-sm">
                    <div className="flex items-center gap-3">
                      <div className="flex size-9 items-center justify-center rounded-sm bg-primary/10 text-primary">
                        <ShieldCheck className="size-5" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-foreground">Direct Access</h4>
                        <p className="text-xs text-muted-foreground">Available Mon–Sat</p>
                      </div>
                    </div>
                    <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                      Our site supervisors, structural engineers, and designers are available for
                      direct calls.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
