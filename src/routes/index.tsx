import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ShieldCheck, Truck, Warehouse, Boxes, Map, Users, CheckCircle2, Quote } from "lucide-react";
import heroImg from "@/assets/hero-warehouse.jpg";
import fleetImg from "@/assets/transport-fleet.jpg";
import aerialImg from "@/assets/warehouse-aerial.jpg";
import { SectionHeader } from "@/components/SectionHeader";
import { CTABanner } from "@/components/CTABanner";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Krishna Transport — Warehousing & Logistics in Hosur" },
      { name: "description", content: "Secure warehousing, transport and 3PL logistics in Hosur for manufacturers, FMCG and growing enterprises across Tamil Nadu & Karnataka." },
      { property: "og:title", content: "Krishna Transport — Warehousing & Logistics in Hosur" },
      { property: "og:description", content: "Reliable warehousing & transport solutions in Hosur." },
      { property: "og:image", content: heroImg },
    ],
  }),
  component: Home,
});

const stats = [
  { k: "10+", v: "Years in Hosur" },
  { k: "1.2L+", v: "Sq.ft warehouse" },
  { k: "24/7", v: "Operations" },
  { k: "2 states", v: "TN · Karnataka" },
];

const reasons = [
  { icon: Map, t: "Strategic Hosur Location", d: "Excellent connectivity to Bengaluru, Chennai and key South India highway corridors." },
  { icon: ShieldCheck, t: "Secure Infrastructure", d: "CCTV surveillance, controlled access, organised layouts and safe loading zones." },
  { icon: Boxes, t: "Flexible Storage", d: "Short-term, long-term, shared or dedicated warehouse space — scale on demand." },
  { icon: Truck, t: "Integrated Logistics", d: "Warehousing and transport in one streamlined solution to remove coordination gaps." },
  { icon: Users, t: "Experienced Team", d: "Operations professionals who understand industrial supply chains end-to-end." },
  { icon: CheckCircle2, t: "Reliable Daily Ops", d: "Accurate inventory, timely dispatch and consistent service across every shift." },
];

const services = [
  { icon: Warehouse, t: "Warehouse Services", d: "Organised storage, palletised handling, bulk and industrial goods storage with full loading support." },
  { icon: Truck, t: "Transportation", d: "FTL, part load, intercity and distribution support across Tamil Nadu and Karnataka." },
  { icon: Boxes, t: "3PL Logistics", d: "Inventory management, order processing, pick-pack, dispatch and reverse logistics." },
  { icon: ShieldCheck, t: "Inventory Management", d: "Accurate stock tracking, faster order processing and efficient storage utilisation." },
];

const testimonials = [
  { q: "Krishna Transport helped us streamline our warehouse and distribution operations in Hosur. The team is reliable and highly professional.", a: "Manufacturing Client", r: "Hosur" },
  { q: "Their transport coordination and storage flexibility helped us reduce operational delays significantly.", a: "FMCG Distributor", r: "Bengaluru" },
  { q: "Excellent warehouse management and smooth logistics support for our industrial materials.", a: "Industrial Supplier", r: "Tamil Nadu" },
];

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative bg-ink text-white overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Krishna Transport warehouse in Hosur" width={1920} height={1080} className="h-full w-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/90 to-ink/40" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 pt-24 pb-28 md:pt-32 md:pb-40">
          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-accent">
            <span className="h-px w-10 bg-accent" /> Hosur · Tamil Nadu
          </div>
          <h1 className="mt-6 font-display font-black text-5xl md:text-7xl lg:text-[5.5rem] leading-[0.95] max-w-4xl">
            Reliable warehousing<br/>
            <span className="text-accent">&amp; logistics</span> in Hosur.
          </h1>
          <p className="mt-7 text-white/70 max-w-xl text-lg leading-relaxed">
            Krishna Transport delivers secure, scalable and professionally managed warehousing and transport solutions for manufacturers, FMCG brands, distributors and growing enterprises across Tamil Nadu and Karnataka.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link to="/contact" className="group bg-accent text-ink font-semibold px-6 py-3.5 rounded-sm flex items-center gap-2 hover:brightness-110">
              Get a Free Quote <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition" />
            </Link>
            <a href="tel:+919876543210" className="border border-white/20 text-white px-6 py-3.5 rounded-sm hover:border-accent hover:text-accent">
              Call Now · +91 98765 43210
            </a>
          </div>
        </div>
        <div className="relative border-t border-white/10">
          <div className="mx-auto max-w-7xl px-6 grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
            {stats.map((s) => (
              <div key={s.v} className="py-6 px-4 first:pl-0">
                <div className="font-display font-extrabold text-accent text-3xl md:text-4xl">{s.k}</div>
                <div className="text-xs uppercase tracking-widest text-white/60 mt-1">{s.v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-24 md:py-32 bg-background">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <img src={aerialImg} alt="Aerial view of warehouse complex" width={1600} height={1000} loading="lazy" className="w-full rounded-sm shadow-2xl" />
            <div className="absolute -bottom-6 -right-6 bg-accent text-ink p-6 max-w-xs hidden md:block">
              <div className="font-display font-black text-3xl">Hosur</div>
              <div className="text-xs uppercase tracking-widest mt-1">Strategic logistics hub</div>
            </div>
          </div>
          <div>
            <SectionHeader eyebrow="About Krishna Transport" title="A trusted logistics & warehousing partner in Hosur." intro="We offer end-to-end transport, storage and distribution solutions for businesses of all sizes — flexible warehouse space, reliable transportation and efficient inventory handling." />
            <div className="mt-8 grid grid-cols-2 gap-3">
              {["FMCG", "Manufacturing", "Automotive", "Retail & Distribution", "E-commerce & D2C", "Industrial Goods"].map((i) => (
                <div key={i} className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-accent" /> {i}
                </div>
              ))}
            </div>
            <Link to="/about" className="mt-8 inline-flex items-center gap-2 text-ink font-semibold border-b-2 border-accent pb-1 hover:gap-3 transition-all">
              Read more about us <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="py-24 md:py-32 bg-surface relative">
        <div className="absolute inset-0 grid-lines opacity-50 pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-6">
          <SectionHeader eyebrow="Why choose us" title="Built for industrial supply chains." intro="From Hosur's strategic location to a dependable operations team — every layer is designed to reduce delays and help you scale." />
          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {reasons.map((r) => (
              <div key={r.t} className="bg-background p-8 group hover:bg-ink hover:text-white transition-colors">
                <r.icon className="h-8 w-8 text-accent" />
                <h3 className="mt-5 font-display font-bold text-xl">{r.t}</h3>
                <p className="mt-3 text-sm text-muted-foreground group-hover:text-white/70">{r.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24 md:py-32 bg-background">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <SectionHeader eyebrow="Our services" title="Warehousing, transport & 3PL — under one roof." />
            <Link to="/services" className="inline-flex items-center gap-2 text-ink font-semibold border-b-2 border-accent pb-1">
              All services <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s, i) => (
              <div key={s.t} className="border border-border bg-card p-7 hover:border-accent transition-colors group relative">
                <div className="text-xs font-mono text-muted-foreground">0{i + 1}</div>
                <s.icon className="mt-4 h-10 w-10 text-ink group-hover:text-accent transition" />
                <h3 className="mt-5 font-display font-bold text-xl text-ink">{s.t}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRANSPORT BANNER */}
      <section className="relative h-[420px] overflow-hidden">
        <img src={fleetImg} alt="Krishna Transport fleet" width={1600} height={1000} loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink to-transparent" />
        <div className="relative mx-auto max-w-7xl px-6 h-full flex items-center">
          <div className="text-white max-w-lg">
            <span className="text-xs uppercase tracking-[0.25em] text-accent font-semibold">Transport network</span>
            <h3 className="mt-4 font-display font-extrabold text-4xl md:text-5xl">Inbound & outbound across two states.</h3>
            <p className="mt-4 text-white/70">FTL, part load and distribution support across Tamil Nadu, Karnataka and nearby regions.</p>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-24 md:py-32 bg-ink text-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-center gap-2">
            <span className="h-px w-8 bg-accent" />
            <span className="text-xs uppercase tracking-[0.25em] text-accent font-semibold">How it works</span>
          </div>
          <h2 className="mt-4 font-display font-extrabold text-4xl md:text-5xl max-w-2xl">From requirement to scalable operations in five steps.</h2>
          <div className="mt-16 grid md:grid-cols-5 gap-px bg-white/10">
            {[
              ["Requirement Analysis", "We understand storage, transport and operational needs."],
              ["Warehouse Planning", "Right warehouse & transport setup recommended for you."],
              ["Setup & Onboarding", "Storage space, workflows and inventory processes go live."],
              ["Daily Operations", "Inventory, transport and dispatch coordination handled by us."],
              ["Scalable Growth", "We scale alongside your business as you grow."],
            ].map(([t, d], i) => (
              <div key={t} className="bg-ink p-7">
                <div className="font-display font-black text-accent text-5xl">{String(i + 1).padStart(2, "0")}</div>
                <h4 className="mt-4 font-display font-bold text-lg">{t}</h4>
                <p className="mt-2 text-sm text-white/60">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 md:py-32 bg-surface">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader eyebrow="Client voices" title="Trusted by manufacturers, distributors & industrial suppliers." align="center" />
          <div className="mt-16 grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <figure key={t.a} className="bg-background border border-border p-8 relative">
                <Quote className="h-8 w-8 text-accent" />
                <blockquote className="mt-4 text-ink leading-relaxed">"{t.q}"</blockquote>
                <figcaption className="mt-6 pt-4 border-t border-border">
                  <div className="font-semibold text-ink">{t.a}</div>
                  <div className="text-xs text-muted-foreground">{t.r}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}