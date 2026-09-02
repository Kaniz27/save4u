import { Icon8 } from "@/components/ui/Icon8";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const BADGES = [
  { icon: "clock", title: "Fast Setup", text: "Live in days, not weeks" },
  { icon: "headphones", title: "5-Star Support", text: "UK-based team, always reachable" },
  { icon: "price-tag", title: "Simple, Fair Pricing", text: "No hidden fees, no surprises" },
  { icon: "group", title: "Never On Your Own", text: "One named specialist, start to finish" },
];

export function TrustBadges() {
  const ref = useScrollReveal<HTMLDivElement>({ selector: ".trust-badge" });

  return (
    <section className="border-y border-brand-border bg-white py-14">
      <div className="container-page">
        <div ref={ref} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {BADGES.map(({ icon, title, text }) => (
            <div
              key={title}
              className="trust-badge group flex cursor-default items-center gap-4 rounded-2xl border border-transparent bg-slate-50 p-5 transition-[transform,box-shadow,background-color,border-color] duration-300 hover:-translate-y-1.5 hover:border-brand-blue/20 hover:bg-brand-blue text-slate-900 hover:text-white hover:shadow-glow-blue active:scale-95"
            >
              <span className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-white shadow-sm transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110">
                <Icon8 slug={icon} alt={title} size={96} className="h-12 w-12" />
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
