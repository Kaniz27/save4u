import type { LucideIcon } from "lucide-react";
import { classNames } from "@/lib/utils";

type Tone = "blue" | "navy" | "blueDark";

const TONES: Record<Tone, string> = {
  blue: "bg-brand-blue/10 text-brand-blue-dark",
  navy: "bg-brand-navy/10 text-brand-navy",
  blueDark: "bg-brand-blue-dark/10 text-brand-blue-dark",
};

export function StatCard({
  label,
  value,
  icon: Icon,
  tone = "blue",
  className,
}: {
  label: string;
  value: string | number;
  icon?: LucideIcon;
  tone?: Tone;
  className?: string;
}) {
  return (
    <div className={classNames("glass-card p-5", className)}>
      <div className="flex items-center justify-between">
        <p className="text-sm font-medium text-slate-500">{label}</p>
        {Icon && (
          <span className={classNames("rounded-lg p-2", TONES[tone])}>
            <Icon size={18} />
          </span>
        )}
      </div>
      <p className="mt-2 font-heading text-3xl font-bold text-slate-900">{value}</p>
    </div>
  );
}
