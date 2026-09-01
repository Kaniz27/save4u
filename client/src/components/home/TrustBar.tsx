import { ArrowRight } from "lucide-react";
import { useCountUp } from "@/hooks/useCountUp";
import { Button } from "@/components/ui/Button";
import { classNames } from "@/lib/utils";

const STATS = [
  { end: 500, suffix: "+", label: "Businesses Helped", bg: "bg-brand-blue/10 border-brand-blue/20", text: "text-brand-blue-dark" },
  { end: 2500, suffix: "K+", label: "Saved For Clients (£)", bg: "bg-sky-50 border-brand-blue/30", text: "text-brand-blue-dark" },
  { end: 48, suffix: "hr", label: "Average Funding Turnaround", bg: "bg-slate-100 border-slate-200", text: "text-brand-navy" },
  { end: 98, suffix: "%", label: "Client Satisfaction", bg: "bg-brand-blue-dark/10 border-brand-blue-dark/20", text: "text-brand-blue-dark" },
];

function Stat({
  end,
  suffix,
  label,
  bg,
  text,
}: {
  end: number;
  suffix: string;
  label: string;
  bg: string;
  text: string;
}) {
  const ref = useCountUp<HTMLParagraphElement>(end, suffix);
  return (
    <div
      className={classNames(
        "rounded-2xl border p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg",
        bg,
      )}
    >
      <p ref={ref} className={classNames("font-heading text-3xl font-extrabold sm:text-4xl", text)}>
        0{suffix}
      </p>
      <p className="mt-2 text-sm font-medium text-slate-600">{label}</p>
    </div>
  );
}

export function TrustBar() {
  return (
    <section className="container-page py-16">
      <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
        {STATS.map((s) => (
          <Stat key={s.label} {...s} />
        ))}
      </div>
      <div className="mt-8 flex justify-center">
        <Button to="/contact-us" className="shadow-md">
          Get a Free Quote <ArrowRight size={16} />
        </Button>
      </div>
    </section>
  );
}
