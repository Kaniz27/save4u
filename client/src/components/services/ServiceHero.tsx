import type { ReactNode } from "react";
import { ArrowRight, Check, Search, Users, TrendingUp, Sparkles } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { Button } from "@/components/ui/Button";
import { SplitText } from "@/components/ui/SplitText";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import type { Service } from "@/types";

const HEADINGS: Record<string, string> = {
  payment: "Take Payments Anywhere Your Customers Are",
  funding: "Funding That Helps Your Business Move Forward",
  marketing: "Turn Your Online Presence Into a Growth Engine",
};

const SUBTEXT: Record<string, string> = {
  funding: "Access flexible business funding to invest in stock, equipment, marketing and expansion.",
  marketing:
    "Powerful digital marketing strategies that help UK businesses attract more traffic, generate leads and increase revenue.",
};

const BADGES: Record<string, string> = {
  payment: "Payment Solutions",
  funding: "Business Funding",
  marketing: "Digital Growth",
};

const PAYMENT_FEATURES = [
  { image: "https://images.unsplash.com/photo-1556742031-c6961e8560b0?auto=format&fit=crop&w=200&h=200&q=80", label: "Card Machines" },
  { image: "https://images.unsplash.com/photo-1758686254082-0f91a27b3075?auto=format&fit=crop&w=200&h=200&q=80", label: "Online Payments" },
  { image: "https://images.unsplash.com/photo-1742836531271-98fd8151d257?auto=format&fit=crop&w=200&h=200&q=80", label: "EPOS" },
  { image: "https://images.unsplash.com/photo-1742836531239-1fe146bf7e3f?auto=format&fit=crop&w=200&h=200&q=80", label: "Contactless" },
  { image: "https://images.unsplash.com/photo-1485206542366-16d53f333d1c?auto=format&fit=crop&w=200&h=200&q=80", label: "Apple Pay" },
  { image: "https://images.unsplash.com/photo-1681825984459-47ee999da245?auto=format&fit=crop&w=200&h=200&q=80", label: "Google Pay" },
  { image: "https://images.unsplash.com/photo-1635602739175-bab409a6e94c?auto=format&fit=crop&w=200&h=200&q=80", label: "Secure Checkout" },
  { image: "https://images.unsplash.com/photo-1650821414390-276561abd95a?auto=format&fit=crop&w=200&h=200&q=80", label: "Next-Day Settlement" },
];

const FUNDING_STEPS = [
  { step: "01", title: "Apply", text: "Tell us about your business in minutes." },
  { step: "02", title: "Get Approved", text: "A fast, same-day funding decision." },
  { step: "03", title: "Grow Your Business", text: "Funds land, flexibly repaid as you trade." },
];

function Badge({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-brand-blue/30 bg-white/70 px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-brand-blue-dark shadow-sm backdrop-blur-sm">
      <Sparkles size={14} />
      {label}
    </span>
  );
}

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="mt-7 space-y-3.5">
      {items.map((bullet) => (
        <li key={bullet} className="flex items-center gap-3 text-base font-medium text-slate-700">
          <Check size={20} strokeWidth={3} className="shrink-0 text-brand-blue-dark" />
          {bullet}
        </li>
      ))}
    </ul>
  );
}

function EnquiryCta({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <a
      href="#enquiry"
      className={`inline-flex items-center justify-center gap-2 rounded-full bg-brand-orange px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-brand-orange-dark hover:shadow-glow hover:scale-[1.03] ${className}`}
    >
      {children}
    </a>
  );
}

function PaymentHero({ service }: { service: Service }) {
  const bullets = service.features.slice(0, 3).map((f) => f.title);
  const ref = useScrollReveal<HTMLDivElement>({ selector: ".payment-feature" });
  return (
    <section className="relative overflow-hidden bg-brand-bg">
      <div className="pointer-events-none absolute -left-20 top-16 h-72 w-72 rounded-full bg-brand-blue/25 blur-3xl" />
      <div className="pointer-events-none absolute -right-16 bottom-0 h-64 w-64 rounded-full bg-brand-orange/20 blur-3xl" />

      <div className="container-page relative grid gap-12 py-20 lg:grid-cols-2 lg:items-center lg:py-24">
        <div>
          <Badge label={BADGES.payment} />
          <h1 className="h1-hero mt-6 text-brand-navy">
            <SplitText as="span" text={HEADINGS.payment} />
          </h1>
          <p className="mt-5 max-w-xl text-slate-600">{service.description}</p>
          <Bullets items={bullets} />
          <EnquiryCta className="mt-9 shadow-md">
            Get a Free Quote <ArrowRight size={16} />
          </EnquiryCta>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="relative overflow-hidden rounded-[2rem] border border-white bg-white p-8 shadow-xl">
            <div className="absolute -inset-4 -z-10 rounded-[2.5rem] bg-brand-gradient opacity-20 blur-2xl" />
            <img
              src="https://images.unsplash.com/photo-1726057403601-c099f03e7b3e?auto=format&fit=crop&w=900&q=80"
              alt="Person holding a credit card ready to pay"
              className="mx-auto h-auto w-full rounded-2xl object-cover"
              loading="eager"
            />
          </div>
        </div>
      </div>

      <div className="container-page pb-16">
        <div ref={ref} className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-8">
          {PAYMENT_FEATURES.map(({ image, label }) => (
            <div
              key={label}
              className="payment-feature group flex cursor-default flex-col items-center gap-2 rounded-2xl border border-brand-border bg-white/70 p-4 text-center transition-[transform,box-shadow,background-color,border-color] duration-300 hover:-translate-y-1.5 hover:border-brand-blue/40 hover:bg-brand-blue hover:shadow-glow-blue active:scale-95"
            >
              <span className="block h-16 w-16 overflow-hidden rounded-xl transition-transform duration-300 group-hover:scale-110">
                <img src={image} alt={label} className="h-full w-full object-cover" loading="lazy" />
              </span>
              <span className="text-xs font-semibold text-brand-navy transition-colors duration-300 group-hover:text-white">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FundingHero({ service }: { service: Service }) {
  const bullets = service.features.slice(0, 3).map((f) => f.title);
  return (
    <section className="relative overflow-hidden bg-brand-bg">
      <div className="pointer-events-none absolute -right-24 top-10 h-80 w-80 rounded-full bg-brand-orange/20 blur-3xl" />
      <div className="pointer-events-none absolute -left-16 bottom-10 h-64 w-64 rounded-full bg-brand-blue/20 blur-3xl" />

      <div className="container-page relative grid gap-12 py-20 lg:grid-cols-2 lg:items-center lg:py-24">
        <div>
          <Badge label={BADGES.funding} />
          <h1 className="h1-hero mt-6 text-brand-navy">
            <SplitText as="span" text={HEADINGS.funding} />
          </h1>
          <p className="mt-5 max-w-xl text-slate-600">{SUBTEXT.funding}</p>
          <Bullets items={bullets} />
          <div className="mt-9 flex flex-wrap gap-4">
            <EnquiryCta className="shadow-md">
              Get Funding <ArrowRight size={16} />
            </EnquiryCta>
            <a
              href="#how-it-works"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-brand-blue/40 bg-white px-6 py-3 text-sm font-semibold text-brand-blue-dark transition-all duration-200 hover:bg-brand-blue/10"
            >
              See How It Works
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="relative overflow-hidden rounded-[2rem] border border-white bg-white p-8 shadow-xl">
            <div className="absolute -inset-4 -z-10 rounded-[2.5rem] bg-cta-gradient opacity-25 blur-2xl" />
            <img
              src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=900&q=80"
              alt="Business funding and financial growth visualisation"
              className="mx-auto h-auto w-full rounded-2xl object-cover"
              loading="eager"
            />
          </div>
        </div>
      </div>

      <div className="container-page pb-16">
        <div className="grid gap-4 sm:grid-cols-3">
          {FUNDING_STEPS.map(({ step, title, text }) => (
            <div key={step} className="flex items-start gap-4 rounded-2xl border border-brand-border bg-white/70 p-5">
              <span className="font-heading text-2xl font-extrabold text-brand-orange">{step}</span>
              <div>
                <p className="font-heading text-sm font-bold text-brand-navy">{title}</p>
                <p className="mt-1 text-xs text-slate-600">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function MarketingHero({ service }: { service: Service }) {
  const bullets = service.features.slice(0, 3).map((f) => f.title);
  return (
    <section className="relative overflow-hidden bg-brand-bg">
      <div className="pointer-events-none absolute -left-16 top-0 h-72 w-72 rounded-full bg-brand-blue/25 blur-3xl" />
      <div className="pointer-events-none absolute right-0 bottom-0 h-72 w-72 rounded-full bg-brand-orange/15 blur-3xl" />

      <div className="container-page relative grid gap-12 py-20 lg:grid-cols-2 lg:items-center lg:py-24">
        <div>
          <Badge label={BADGES.marketing} />
          <h1 className="h1-hero mt-6 text-brand-navy">
            <SplitText as="span" text={HEADINGS.marketing} />
          </h1>
          <p className="mt-5 max-w-xl text-slate-600">{SUBTEXT.marketing}</p>
          <Bullets items={bullets} />
          <div className="mt-9 flex flex-wrap gap-4">
            <EnquiryCta className="shadow-md">
              Grow My Business <ArrowRight size={16} />
            </EnquiryCta>
            <Button to="/contact-us" variant="secondary">
              Talk to a Marketing Specialist
            </Button>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="relative overflow-hidden rounded-[2rem] border border-white bg-white p-8 shadow-xl">
            <div className="absolute -inset-4 -z-10 rounded-[2.5rem] bg-brand-gradient opacity-20 blur-2xl" />
            <img
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80"
              alt="Digital marketing growth and analytics visualisation"
              className="mx-auto h-auto w-full rounded-2xl object-cover"
              loading="eager"
            />
          </div>

          <div className="glass-card absolute -left-6 top-4 flex items-center gap-3 p-3.5 sm:-left-10">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600">
              <TrendingUp size={16} />
            </span>
            <div>
              <p className="font-heading text-xs font-bold text-brand-navy">Traffic +82%</p>
            </div>
          </div>

          <div className="glass-card absolute -right-4 top-1/2 flex items-center gap-3 p-3.5 sm:-right-8">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-blue/15 text-brand-blue-dark">
              <Search size={16} />
            </span>
            <div>
              <p className="font-heading text-xs font-bold text-brand-navy">Search Growth</p>
            </div>
          </div>

          <div className="glass-card absolute -bottom-4 left-8 flex items-center gap-3 p-3.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-orange/15 text-brand-orange">
              <Users size={16} />
            </span>
            <div>
              <p className="font-heading text-xs font-bold text-brand-navy">+64 Leads</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ServiceHero({ service }: { service: Service }) {
  if (service.layoutVariant === "payment") return <PaymentHero service={service} />;
  if (service.layoutVariant === "funding") return <FundingHero service={service} />;
  if (service.layoutVariant === "marketing") return <MarketingHero service={service} />;

  const bullets = service.features.slice(0, 3).map((f) => f.title);
  return (
    <PageHero
      heading={service.name}
      bullets={bullets}
      image={service.heroImage}
      imageAlt={service.name}
      ctaLabel="Get a Quote"
      ctaTo="#enquiry"
      imageFit="cover"
    />
  );
}
