import { useEffect, useRef, useState } from "react";
import { gsap } from "@/lib/gsap";
import { Button } from "@/components/ui/Button";
import { classNames } from "@/lib/utils";

// Placeholder Unsplash imagery — swap for real Save4u photography.
const SLIDES = [
  {
    image: "https://images.unsplash.com/photo-1601597111158-2fceff292cdc?auto=format&fit=crop&w=1920&q=80",
    heading: "Smarter Payment Solutions",
    subtext: "Lower fees, faster settlement, and card machines that fit your business.",
    cta: { label: "Explore Payment Solutions", to: "/payment-solution" },
  },
  {
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1920&q=80",
    heading: "Cut Your Business Energy Costs",
    subtext: "We compare the market so you never overpay for gas and electricity again.",
    cta: { label: "Compare Energy Rates", to: "/business-energy" },
  },
  {
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=1920&q=80",
    heading: "Grow with Digital Marketing",
    subtext: "SEO, paid ads, and social media strategies built around your goals.",
    cta: { label: "Grow Your Business", to: "/digital-marketing" },
  },
];

const AUTOPLAY_MS = 6000;

export function HeroCarousel() {
  const [active, setActive] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    timerRef.current = setTimeout(() => setActive((prev) => (prev + 1) % SLIDES.length), AUTOPLAY_MS);
    return () => clearTimeout(timerRef.current);
  }, [active]);

  useEffect(() => {
    if (!contentRef.current) return;
    gsap.fromTo(
      contentRef.current.children,
      { opacity: 0, y: 24 },
      { opacity: 1, y: 0, duration: 0.7, stagger: 0.1, ease: "power2.out" },
    );
  }, [active]);

  const slide = SLIDES[active];

  return (
    <section className="relative h-[640px] w-full overflow-hidden md:h-[720px]">
      {SLIDES.map((s, i) => (
        <div
          key={s.heading}
          className={classNames(
            "absolute inset-0 bg-cover bg-center transition-opacity duration-1000",
            i === active ? "opacity-100" : "opacity-0",
          )}
          style={{ backgroundImage: `url(${s.image})` }}
          aria-hidden={i !== active}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/90 via-brand-navy/50 to-brand-navy/30" />

      <div className="container-page relative flex h-full items-center">
        <div ref={contentRef} key={slide.heading} className="max-w-2xl text-white">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-white/90 backdrop-blur-sm">
            Save4u
          </span>
          <h1 className="h1-hero mt-4 drop-shadow-[0_4px_24px_rgba(0,0,0,0.35)]">{slide.heading}</h1>
          <p className="mt-6 text-lg text-slate-200 drop-shadow-md">{slide.subtext}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button to={slide.cta.to}>{slide.cta.label}</Button>
            <Button to="/contact-us" variant="ghost">
              Contact Us
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 gap-3">
        {SLIDES.map((s, i) => (
          <button
            key={s.heading}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => setActive(i)}
            className={classNames(
              "h-2.5 rounded-full transition-all duration-300",
              i === active ? "w-8 bg-brand-blue" : "w-2.5 bg-white/50 hover:bg-white/80",
            )}
          />
        ))}
      </div>
    </section>
  );
}
