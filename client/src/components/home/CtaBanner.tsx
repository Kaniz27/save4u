import { Button } from "@/components/ui/Button";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { classNames } from "@/lib/utils";

interface CtaBannerProps {
  title?: string;
  subtitle?: string;
  image?: string;
  ctaLabel?: string;
  ctaTo?: string;
}

export function CtaBanner({
  title = "Ready to grow your business?",
  subtitle = "Talk to Save4u today and find out how much you could save across payments, energy, funding and marketing.",
  image,
  ctaLabel = "Contact Us",
  ctaTo = "/contact-us",
}: CtaBannerProps) {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <section
      ref={ref}
      className={classNames(
        "relative w-full overflow-hidden px-8 py-20 text-center sm:py-24",
        !image && "bg-cta-gradient",
      )}
      style={image ? { backgroundImage: `url(${image})`, backgroundSize: "cover", backgroundPosition: "center" } : undefined}
    >
      {image && <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/90 via-brand-navy/60 to-brand-blue-dark/50" />}
      <div className="container-page relative">
        <h2 className="h2-section text-white">{title}</h2>
        <p className="mx-auto mt-4 max-w-xl text-white/90">{subtitle}</p>
        <div className="mt-8">
          <Button to={ctaTo} variant="secondary">
            {ctaLabel}
          </Button>
        </div>
      </div>
    </section>
  );
}
