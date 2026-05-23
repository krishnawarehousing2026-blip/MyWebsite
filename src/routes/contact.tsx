import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Krishna Transport — Free Warehousing Quote Hosur" },
      { name: "description", content: "Get a free quote for warehousing, transport and 3PL services in Hosur. Call +91 98765 43210 or send a message." },
      { property: "og:title", content: "Contact Krishna Transport — Hosur" },
      { property: "og:description", content: "Get a free warehousing and logistics quote in Hosur." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <>
      <section className="bg-ink text-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-xs uppercase tracking-[0.3em] text-accent">Contact</div>
          <h1 className="mt-4 font-display font-black text-5xl md:text-7xl max-w-4xl leading-[0.95]">Let's plan your <span className="text-accent">logistics</span>.</h1>
          <p className="mt-6 max-w-2xl text-white/70 text-lg">Tell us about your storage and transport needs — we'll send a tailored quote within 24 hours.</p>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-[1fr_1.2fr] gap-12">
          <div className="space-y-6">
            {[
              { i: Phone, t: "Call us", v: "+91 98765 43210", h: "tel:+919876543210" },
              { i: Mail, t: "Email", v: "hello@krishnatransport.in", h: "mailto:hello@krishnatransport.in" },
              { i: MapPin, t: "Visit", v: "Hosur, Tamil Nadu — 635109" },
              { i: Clock, t: "Hours", v: "Mon–Sat · 9:00 AM – 7:00 PM" },
            ].map((c) => (
              <a key={c.t} href={c.h} className="flex items-start gap-4 bg-surface border border-border p-6 hover:border-accent transition">
                <div className="h-12 w-12 grid place-items-center bg-ink text-accent shrink-0"><c.i className="h-5 w-5" /></div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">{c.t}</div>
                  <div className="mt-1 font-display font-bold text-ink">{c.v}</div>
                </div>
              </a>
            ))}
          </div>

          <form
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            className="bg-ink text-white p-8 md:p-10"
          >
            <h2 className="font-display font-extrabold text-3xl">Request a free quote</h2>
            <p className="text-white/60 mt-2 text-sm">Share a few details, and our team will get back to you.</p>
            <div className="mt-8 grid md:grid-cols-2 gap-4">
              <Field label="Full name" name="name" required />
              <Field label="Company" name="company" />
              <Field label="Email" name="email" type="email" required />
              <Field label="Phone" name="phone" type="tel" required />
              <div className="md:col-span-2">
                <label className="text-xs uppercase tracking-widest text-white/60">Service needed</label>
                <select className="mt-2 w-full bg-transparent border border-white/15 px-4 py-3 focus:border-accent outline-none text-white">
                  <option className="text-ink">Warehouse Services</option>
                  <option className="text-ink">Transportation</option>
                  <option className="text-ink">3PL Logistics</option>
                  <option className="text-ink">Inventory Management</option>
                </select>
              </div>
              <div className="md:col-span-2">
                <label className="text-xs uppercase tracking-widest text-white/60">Message</label>
                <textarea rows={4} className="mt-2 w-full bg-transparent border border-white/15 px-4 py-3 focus:border-accent outline-none text-white" placeholder="Tell us about your requirements..." />
              </div>
            </div>
            <button type="submit" className="mt-6 bg-accent text-ink font-semibold px-6 py-3.5 rounded-sm inline-flex items-center gap-2 hover:brightness-110">
              {sent ? "Thanks — we'll be in touch" : "Send request"} <Send className="h-4 w-4" />
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="text-xs uppercase tracking-widest text-white/60" htmlFor={name}>{label}{required && <span className="text-accent"> *</span>}</label>
      <input id={name} name={name} type={type} required={required} className="mt-2 w-full bg-transparent border border-white/15 px-4 py-3 focus:border-accent outline-none text-white" />
    </div>
  );
}