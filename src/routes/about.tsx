import { createFileRoute, Link } from "@tanstack/react-router";
import { SectionHeader } from "@/components/SectionHeader";
import { CTABanner } from "@/components/CTABanner";
import aerial from "@/assets/warehouse-aerial.jpg";
import { CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Krishna Transport — Hosur Logistics Partner" },
      { name: "description", content: "Krishna Transport is a trusted warehousing and logistics partner in Hosur, supporting FMCG, manufacturing, automotive and e-commerce businesses." },
      { property: "og:title", content: "About Krishna Transport — Hosur Logistics Partner" },
      { property: "og:description", content: "End-to-end transport, storage and distribution for businesses of all sizes." },
      { property: "og:image", content: aerial },
    ],
  }),
  component: About,
});

const industries = ["FMCG", "Manufacturing", "Automotive Components", "Retail & Distribution", "E-commerce & D2C", "Industrial Goods"];
const advantages = [
  "Proximity to Bengaluru",
  "Strong highway connectivity",
  "Vibrant industrial ecosystem",
  "Easy access to South Indian markets",
  "Rapidly growing manufacturing sector",
];

function About() {
  return (
    <>
      <section className="bg-ink text-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-xs uppercase tracking-[0.3em] text-accent">About</div>
          <h1 className="mt-4 font-display font-black text-5xl md:text-7xl max-w-4xl leading-[0.95]">A trusted logistics & warehousing partner in <span className="text-accent">Hosur</span>.</h1>
          <p className="mt-6 max-w-2xl text-white/70 text-lg">End-to-end transport, storage and distribution solutions designed for modern supply chains.</p>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-14 items-start">
          <div>
            <SectionHeader eyebrow="Who we are" title="Built for businesses that need dependable logistics."
              intro="Krishna Transport is a Hosur-based warehousing and transport partner offering flexible storage, regional transportation and 3PL solutions. Our mission is simple — help businesses simplify logistics while ensuring safe storage and timely delivery." />
            <div className="mt-8">
              <h3 className="font-display font-bold text-lg text-ink">Industries we serve</h3>
              <div className="mt-4 grid grid-cols-2 gap-2">
                {industries.map((i) => (
                  <div key={i} className="flex items-center gap-2 text-sm"><CheckCircle2 className="h-4 w-4 text-accent" />{i}</div>
                ))}
              </div>
            </div>
          </div>
          <img src={aerial} alt="Warehouse aerial" width={1600} height={1000} loading="lazy" className="w-full rounded-sm shadow-xl" />
        </div>
      </section>

      <section className="py-24 bg-surface">
        <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-14">
          <SectionHeader eyebrow="Why Hosur" title="Why Hosur is ideal for warehousing & logistics." />
          <ul className="space-y-4">
            {advantages.map((a) => (
              <li key={a} className="flex items-start gap-3 bg-background border-l-4 border-accent p-5">
                <CheckCircle2 className="h-5 w-5 text-accent mt-0.5" />
                <span className="text-ink font-medium">{a}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CTABanner />
    </>
  );
}