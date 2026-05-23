import { createFileRoute } from "@tanstack/react-router";
import { SectionHeader } from "@/components/SectionHeader";
import { CTABanner } from "@/components/CTABanner";
import { Factory, Car, ShoppingBag, Package } from "lucide-react";

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: [
      { title: "Industries We Serve | Krishna Transport Hosur" },
      { name: "description", content: "Krishna Transport supports manufacturing, automotive, FMCG, retail, e-commerce and industrial businesses across Hosur and South India." },
      { property: "og:title", content: "Industries We Serve — Krishna Transport" },
      { property: "og:description", content: "Warehousing and logistics for manufacturers, automotive, FMCG and e-commerce." },
    ],
  }),
  component: Industries,
});

const list = [
  { icon: Factory, t: "Manufacturing & Industrial", d: "Efficient raw material and finished goods storage for factories and industrial units." },
  { icon: Car, t: "Automotive & Engineering", d: "Reliable transport and warehouse support for automotive suppliers and engineering businesses." },
  { icon: ShoppingBag, t: "FMCG & Retail", d: "Fast-moving inventory management and regional distribution support." },
  { icon: Package, t: "E-commerce & D2C", d: "Storage and order fulfilment solutions for online brands and growing businesses." },
];

function Industries() {
  return (
    <>
      <section className="bg-ink text-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-xs uppercase tracking-[0.3em] text-accent">Industries</div>
          <h1 className="mt-4 font-display font-black text-5xl md:text-7xl max-w-4xl leading-[0.95]">Logistics tailored to your <span className="text-accent">industry</span>.</h1>
          <p className="mt-6 max-w-2xl text-white/70 text-lg">From factory floors to e-commerce fulfilment — we build warehouse and transport workflows around your operations.</p>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader eyebrow="Sectors" title="Industries we serve across Hosur." />
          <div className="mt-16 grid md:grid-cols-2 gap-px bg-border">
            {list.map((s) => (
              <div key={s.t} className="bg-background p-10 hover:bg-ink hover:text-white transition-colors group">
                <s.icon className="h-10 w-10 text-accent" />
                <h3 className="mt-6 font-display font-bold text-2xl">{s.t}</h3>
                <p className="mt-3 text-muted-foreground group-hover:text-white/70">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}