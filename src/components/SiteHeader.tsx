import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/industries", label: "Industries" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-ink/95 backdrop-blur supports-[backdrop-filter]:bg-ink/80 border-b border-white/5">
      <div className="mx-auto max-w-7xl px-6 flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5 group" onClick={() => setOpen(false)}>
          <div className="h-9 w-9 grid place-items-center bg-accent text-ink font-display font-black text-lg rounded-sm">K</div>
          <div className="flex flex-col leading-none">
            <span className="font-display font-extrabold text-white text-base tracking-tight">KRISHNA</span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-accent">Transport · Hosur</span>
          </div>
        </Link>
        <nav className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="px-3 py-2 text-sm text-white/70 hover:text-white transition-colors"
              activeProps={{ className: "px-3 py-2 text-sm text-accent font-medium" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="hidden md:flex items-center gap-3">
          <a href="tel:+919876543210" className="flex items-center gap-2 text-sm text-white/80 hover:text-accent">
            <Phone className="h-4 w-4" /> +91 97906 20811
          </a>
          <Link to="/contact" className="bg-accent text-ink font-semibold text-sm px-4 py-2 rounded-sm hover:brightness-110 transition">
            Get Quote
          </Link>
        </div>
        <button className="md:hidden text-white" onClick={() => setOpen((v) => !v)} aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-white/5 bg-ink">
          <div className="px-6 py-4 flex flex-col gap-1">
            {links.map((l) => (
              <Link key={l.to} to={l.to} onClick={() => setOpen(false)} className="py-2 text-white/80" activeProps={{ className: "py-2 text-accent font-medium" }} activeOptions={{ exact: l.to === "/" }}>
                {l.label}
              </Link>
            ))}
            <Link to="/contact" onClick={() => setOpen(false)} className="mt-2 bg-accent text-ink font-semibold text-sm px-4 py-2.5 rounded-sm text-center">
              Get Free Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
