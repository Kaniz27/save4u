import { Clock, HeadphonesIcon, Tag, Users } from "lucide-react";

const BADGES = [
  { icon: Clock, title: "Fast Setup", text: "Live in days, not weeks" },
  { icon: HeadphonesIcon, title: "5-Star Support", text: "UK-based team, always reachable" },
  { icon: Tag, title: "Simple, Fair Pricing", text: "No hidden fees, no surprises" },
  { icon: Users, title: "Never On Your Own", text: "One named specialist, start to finish" },
];

export function TrustBadges() {
  return (
    <section className="border-y border-slate-100 bg-white py-14">
      <div className="container-page">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {BADGES.map(({ icon: Icon, title, text }) => (
            <div key={title} className="flex items-center gap-4 rounded-2xl bg-slate-50 p-5">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-blue/10 text-brand-blue-dark">
                <Icon size={22} />
              </span>
              <div>
                <p className="font-heading text-sm font-bold text-slate-900">{title}</p>
                <p className="mt-0.5 text-xs text-slate-500">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
