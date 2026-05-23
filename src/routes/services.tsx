import { createFileRoute } from "@tanstack/react-router";
import { SectionHeader } from "@/components/SectionHeader";
import { CTABanner } from "@/components/CTABanner";
import { Warehouse, Truck, Boxes, ShieldCheck, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Warehousing, Transport & 3PL in Hosur | Krishna Transport" },
      { name: "description", content: "Warehouse services, transportation, 3PL logistics and inventory management in Hosur — designed for industrial and commercial businesses." },
      { property: "og:title", content: "Services — Krishna Transport Hosur" },
      { property: "og:description", content: "Warehouse, transport, 3PL and inventory services in Hosur." },
    ],
  }),
  component: Services,
});

const services = [
  {
    icon: Warehouse,
    t: "Warehouse Services",
    d: "Professionally managed warehouse facilities designed for efficient storage, inventory handling and fast goods movement.",
    features: ["Organised storage systems", "Palletised inventory handling", "Loading & unloading support", "Bulk inventory storage", "Industrial goods storage"],
  },
  {
    icon: Truck,
    t: "Transportation Services",
    d: "Reliable inbound and outbound transportation across Tamil Nadu, Karnataka and nearby regions.",
    features: ["Full truck load (FTL)", "Part load transport", "Industrial transportation", "Intercity logistics", "Distribution support"],
  },
  {
    icon: Boxes,
    t: "3PL Logistics",
    d: "Third-party logistics solutions to outsource warehousing and distribution operations efficiently.",
    features: ["Inventory management", "Order processing", "Pick & pack services", "Dispatch coordination", "Reverse logistics support"],
  },
  {
    icon: ShieldCheck,
    t: "Inventory Management",
    d: "Accurate stock tracking and organised warehouse processes to improve visibility and operational control.",
    features: ["Better stock accuracy", "Faster order processing", "Reduced operational delays", "Efficient storage utilisation"],
  },
];

function Services() {
  return (
    <>
      <section className="bg-ink text-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-xs uppercase tracking-[0.3em] text-accent">Services</div>
          <h1 className="mt-4 font-display font-black text-5xl md:text-7xl max-w-4xl leading-[0.95]">Warehousing, transport & <span className="text-accent">3PL</span> solutions.</h1>
          <p className="mt-6 max-w-2xl text-white/70 text-lg">A complete logistics partner for Hosur businesses — from storage to dispatch.</p>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="mx-auto max-w-7xl px-6 space-y-24">
          {services.map((s, i) => (
            <div key={s.t} className={`grid lg:grid-cols-2 gap-10 items-start ${i % 2 ? "lg:[&>*:first-child]:order-2" : ""}`}>
              <div>
                <div className="inline-flex items-center gap-3 bg-accent/10 border border-accent text-ink px-4 py-2 text-xs font-semibold uppercase tracking-widest">
                  0{i + 1} · {s.t}
                </div>
                <h2 className="mt-5 font-display font-extrabold text-3xl md:text-4xl text-ink leading-tight">{s.t}</h2>
                <p className="mt-4 text-muted-foreground text-lg leading-relaxed">{s.d}</p>
              </div>
              <div className="bg-surface border border-border p-8">
                <s.icon className="h-12 w-12 text-accent" />
                <h3 className="mt-5 font-display font-bold text-lg text-ink">What's included</h3>
                <ul className="mt-4 space-y-3">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-ink">
                      <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <FAQ />
      <CTABanner />
    </>
  );
}

const faqs = [
  ["What warehouse services do you provide in Hosur?", "We offer warehouse storage, inventory handling, transport support and 3PL logistics solutions."],
  ["Do you provide transportation services?", "Yes, Krishna Transport provides regional and intercity transportation for industrial and commercial businesses."],
  ["Is your warehouse secure?", "Yes, our facilities include CCTV monitoring and controlled access systems."],
  ["Can warehouse space be scaled later?", "Yes, businesses can increase storage capacity as operational needs grow."],
  ["Which industries do you serve?", "FMCG, manufacturing, automotive, retail, industrial and e-commerce businesses."],
  ["Do you provide logistics support outside Hosur?", "Yes, we support logistics across Tamil Nadu, Karnataka and nearby regions."],
];

function FAQ() {
  return (
    <section className="py-24 bg-surface">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeader eyebrow="FAQ" title="Frequently asked questions." align="center" />
        <div className="mt-12 divide-y divide-border bg-background border border-border">
          {faqs.map(([q, a]) => (
            <details key={q} className="group p-6 open:bg-surface">
              <summary className="cursor-pointer list-none flex justify-between items-center gap-4 font-display font-bold text-ink">
                {q}
                <span className="text-accent text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="mt-3 text-muted-foreground">{a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}