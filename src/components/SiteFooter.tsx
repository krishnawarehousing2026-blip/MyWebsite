import { Link } from "@tanstack/react-router";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="bg-ink text-white/80">
      <div className="mx-auto max-w-7xl px-6 py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2 max-w-md">
          <div className="flex items-center gap-2.5 mb-5">
            <div className="h-9 w-9 grid place-items-center bg-accent text-ink font-display font-black rounded-sm">K</div>
            <span className="font-display font-extrabold text-white tracking-tight">KRISHNA TRANSPORT</span>
          </div>
          <p className="text-sm leading-relaxed text-white/60">
            Reliable warehousing, transport and 3PL logistics services in Hosur — supporting manufacturers, FMCG brands and growing enterprises across Tamil Nadu and Karnataka.
          </p>
        </div>
        <div>
          <h4 className="text-xs uppercase tracking-[0.2em] text-accent mb-4">Navigate</h4>
          <ul className="space-y-2 text-sm">
            {[
              { to: "/about", l: "About" },
              { to: "/services", l: "Services" },
              { to: "/industries", l: "Industries" },
              { to: "/contact", l: "Contact" },
            ].map((i) => (
              <li key={i.to}><Link to={i.to} className="hover:text-accent">{i.l}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-xs uppercase tracking-[0.2em] text-accent mb-4">Reach Us</h4>
          <ul className="space-y-3 text-sm text-white/70">
            <li className="flex gap-2"><MapPin className="h-4 w-4 mt-0.5 text-accent shrink-0"/>Hosur, Tamil Nadu — 635109</li>
            <li className="flex gap-2"><Phone className="h-4 w-4 mt-0.5 text-accent shrink-0"/>+91 97906 20811</li>
            <li className="flex gap-2"><Mail className="h-4 w-4 mt-0.5 text-accent shrink-0"/>info@krishnatrans.in</li>
            <li className="flex gap-2"><Clock className="h-4 w-4 mt-0.5 text-accent shrink-0"/>Mon–Sat · 9:00–19:00</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/5">
        <div className="mx-auto max-w-7xl px-6 py-5 flex flex-col md:flex-row gap-2 justify-between text-xs text-white/50">
          <span>© {new Date().getFullYear()} Krishna Transport. All rights reserved.</span>
          <span>Warehousing · Transport · 3PL · Hosur</span>
        </div>
      </div>
    </footer>
  );
}
