import { useScrollReveal } from "@/hooks/useScrollReveal";

const BADGES = [
  {
    image: "https://images.unsplash.com/photo-1704265586142-db3e17d0dea0?auto=format&fit=crop&w=200&h=200&q=80",
    title: "Fast Setup",
    text: "Live in days, not weeks",
  },
  {
    image: "https://images.unsplash.com/photo-1702669010428-0063fa6eb5ed?auto=format&fit=crop&w=200&h=200&q=80",
    title: "5-Star Support",
    text: "UK-based team, always reachable",
  },
  {
    image: "https://images.unsplash.com/photo-1758686254082-0f91a27b3075?auto=format&fit=crop&w=200&h=200&q=80",
    title: "Simple, Fair Pricing",
    text: "No hidden fees, no surprises",
  },
  {
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=200&h=200&q=80",
    title: "Never On Your Own",
    text: "One named specialist, start to finish",
  },
];

export function TrustBadges() {
  const ref = useScrollReveal<HTMLDivElement>({ selector: ".trust-badge" });

  return (
    <section className="border-y border-brand-border bg-white py-14">
      <div className="container-page">
        <div ref={ref} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {BADGES.map(({ image, title, text }) => (
            <div
              key={title}
              className="trust-badge group flex cursor-default items-center gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-5 transition-[transform,box-shadow,background-color,border-color] duration-300 hover:-translate-y-1.5 hover:border-brand-blue/30 hover:bg-brand-blue text-slate-900 hover:text-white hover:shadow-glow-blue active:scale-95"
            >
              <span className="h-20 w-20 shrink-0 overflow-hidden rounded-2xl shadow-sm transition-transform duration-300 group-hover:scale-110">
                <img src={image} alt={title} className="h-full w-full object-cover" loading="lazy" />
              </span>
              <div>
                <p className="font-heading text-sm font-bold transition-colors duration-300">{title}</p>
                <p className="mt-0.5 text-xs text-slate-500 transition-colors duration-300 group-hover:text-white/80">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
