import { Check } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SplitText } from "@/components/ui/SplitText";

interface PageHeroProps {
  heading: string | string[];
  bullets: string[];
  image: string;
  imageAlt: string;
  ctaLabel: string;
  ctaTo: string;
  imageFit?: "cover" | "contain";
}

export function PageHero({ heading, bullets, image, imageAlt, ctaLabel, ctaTo, imageFit = "cover" }: PageHeroProps) {
  const lines = Array.isArray(heading) ? heading : [heading];

  return (
    <section className="relative overflow-hidden bg-brand-bg">
      <div
        className={`absolute inset-y-0 right-0 hidden w-1/2 bg-right bg-no-repeat lg:block ${
          imageFit === "contain" ? "bg-contain" : "bg-cover bg-center"
        }`}
        style={{ backgroundImage: `url(${image})` }}
        role="img"
        aria-label={imageAlt}
      />

      <div className="container-page relative grid gap-0 lg:grid-cols-2">
        <div className="py-16 lg:max-w-xl lg:py-24">
          <h1 className="h1-hero text-slate-900">
            {lines.map((line, i) => (
              <SplitText key={i} as="span" text={line} className="block" delay={0.1 + i * 0.2} />
            ))}
          </h1>
          <ul className="mt-7 space-y-3.5">
            {bullets.map((bullet) => (
              <li key={bullet} className="flex items-center gap-3 text-base font-medium text-slate-700">
                <Check size={20} strokeWidth={3} className="shrink-0 text-brand-blue-dark" />
                {bullet}
              </li>
            ))}
          </ul>
          {ctaTo.startsWith("#") ? (
            <a
              href={ctaTo}
              className="mt-9 inline-flex items-center justify-center gap-2 rounded-full bg-brand-orange px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-brand-orange-dark hover:shadow-glow hover:scale-[1.03]"
            >
              {ctaLabel}
            </a>
          ) : (
            <Button to={ctaTo} className="mt-9">
              {ctaLabel}
            </Button>
          )}
        </div>
      </div>

      <img src={image} alt={imageAlt} className="h-56 w-full object-cover lg:hidden" loading="eager" />
    </section>
  );
}
