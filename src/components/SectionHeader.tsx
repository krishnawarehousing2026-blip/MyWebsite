export function SectionHeader({ eyebrow, title, intro, align = "left" }: { eyebrow?: string; title: string; intro?: string; align?: "left" | "center" }) {
  return (
    <div className={align === "center" ? "text-center mx-auto max-w-2xl" : "max-w-2xl"}>
      {eyebrow && (
        <div className={`flex items-center gap-2 ${align === "center" ? "justify-center" : ""}`}>
          <span className="h-px w-8 bg-accent" />
          <span className="text-xs uppercase tracking-[0.25em] text-accent font-semibold">{eyebrow}</span>
        </div>
      )}
      <h2 className="mt-4 text-3xl md:text-5xl font-display font-extrabold text-ink leading-[1.05]">{title}</h2>
      {intro && <p className="mt-5 text-muted-foreground text-base md:text-lg leading-relaxed">{intro}</p>}
    </div>
  );
}