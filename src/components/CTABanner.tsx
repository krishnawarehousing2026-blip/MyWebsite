import { Link } from "@tanstack/react-router";
import { ArrowRight, Phone } from "lucide-react";

export function CTABanner() {
  return (
    <section className="bg-ink text-white relative overflow-hidden">
      <div className="absolute inset-0 grid-lines opacity-30" />
      <div className="relative mx-auto max-w-7xl px-6 py-20 md:py-28 grid md:grid-cols-[1.4fr_1fr] gap-10 items-end">
        <div>
          <span className="text-xs uppercase tracking-[0.25em] text-accent font-semibold">Ready when you are</span>
          <h2 className="mt-4 font-display font-extrabold text-4xl md:text-6xl leading-[1.02]">
            Looking for reliable warehousing &amp; transport in Hosur?
          </h2>
          <p className="mt-5 text-white/70 max-w-xl">
            Krishna Transport provides dependable storage, transportation and logistics solutions designed to support business growth and operational efficiency.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <Link to="/contact" className="group bg-accent text-ink font-semibold px-6 py-4 rounded-sm flex items-center justify-between hover:brightness-110">
            Get a Free Quote <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition" />
          </Link>
          <a href="tel:+919790620811" className="border border-white/20 text-white px-6 py-4 rounded-sm flex items-center justify-between hover:border-accent hover:text-accent">
            Call +91 97906 20811 <Phone className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
