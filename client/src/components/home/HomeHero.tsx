import { ArrowRight, ShieldCheck, Building2, Zap as ZapIcon, ReceiptText, Sparkles, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/Button";

const TRUST_INDICATORS = [
  { icon: ShieldCheck, label: "Secure & Reliable" },
  { icon: Building2, label: "UK Business Support" },
  { icon: ZapIcon, label: "Fast Setup" },
  { icon: ReceiptText, label: "Transparent Pricing" },
];

export function HomeHero() {
  return (
    <section className="relative overflow-hidden bg-brand-bg">
      <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-brand-blue/25 blur-3xl" />
      <div className="pointer-events-none absolute -right-16 bottom-0 h-80 w-80 rounded-full bg-brand-orange/15 blur-3xl" />

      <div className="container-page relative grid gap-12 py-20 lg:grid-cols-2 lg:items-center lg:py-28">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-blue/30 bg-white/70 px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-brand-blue-dark shadow-sm backdrop-blur-sm">
            <Sparkles size={14} />
            Helping UK Businesses Grow Smarter
          </span>

          <h1 className="h1-hero mt-6 text-brand-navy">
            Payments, Funding &amp; Marketing —<br className="hidden sm:block" /> All Working for Your Business
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-brand-text sm:text-lg">
            One trusted partner for smarter payments, flexible business funding and digital growth designed for modern UK businesses.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Button to="/contact-us" className="shadow-md">
              Get a Free Quote <ArrowRight size={16} />
            </Button>
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-brand-blue/40 bg-white px-6 py-3 text-sm font-semibold text-brand-blue-dark transition-all duration-200 hover:bg-brand-blue/10"
            >
              Explore Our Services
            </a>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {TRUST_INDICATORS.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-blue/10 text-brand-blue-dark">
                  <Icon size={16} />
                </span>
                <span className="text-xs font-semibold text-brand-navy sm:text-sm">{label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="relative overflow-hidden rounded-[2rem] border border-white bg-white p-6 shadow-xl">
            <div className="absolute -inset-4 -z-10 rounded-[2.5rem] bg-brand-gradient opacity-20 blur-2xl" />
            <img
              src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=900&q=80"
              alt="Card payment terminal and smartphone showing a business dashboard"
              className="mx-auto h-auto w-full rounded-2xl object-cover"
              loading="eager"
            />
          </div>

          <div className="glass-card absolute -left-6 top-6 flex items-center gap-3 p-4 sm:-left-10">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600">
              <TrendingUp size={18} />
            </span>
            <div>
              <p className="font-heading text-sm font-bold text-brand-navy">+128% Growth</p>
              <p className="text-xs text-brand-text">Marketing performance</p>
            </div>
          </div>

          <div className="glass-card absolute -right-4 bottom-8 flex items-center gap-3 p-4 sm:-right-10">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-orange/15 text-brand-orange">
              <Sparkles size={18} />
            </span>
            <div>
              <p className="font-heading text-sm font-bold text-brand-navy">Growth Focused</p>
              <p className="text-xs text-brand-text">Business-first support</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
