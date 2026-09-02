import businessFinance365 from "@/assets/partners/365-business-finance.jpeg";
import youlend from "@/assets/partners/youlend.jpeg";
import cobanaEnergy from "@/assets/partners/cobana-energy.jpeg";
import teya from "@/assets/partners/teya.jpeg";
import gotCapital from "@/assets/partners/got-capital.jpeg";
import crystalUtilities from "@/assets/partners/crystal-utilities.jpeg";
import eposnow from "@/assets/partners/eposnow.jpeg";
import { SplitText } from "@/components/ui/SplitText";

const PARTNERS = [
  { src: businessFinance365, alt: "365 Business Finance" },
  { src: youlend, alt: "YouLend" },
  { src: cobanaEnergy, alt: "Cobana Energy" },
  { src: teya, alt: "Teya" },
  { src: gotCapital, alt: "Got Capital" },
  { src: crystalUtilities, alt: "Crystal Utilities" },
  { src: eposnow, alt: "EposNow" },
];

export function PartnersMarquee() {
  const track = [...PARTNERS, ...PARTNERS];

  return (
    <section className="bg-brand-bg py-20">
      <div className="container-page">
        <div className="mx-auto max-w-xl text-center">
          <span className="text-sm font-bold uppercase tracking-wide text-brand-blue-dark">Our Partners</span>
          <h2 className="mt-3 h2-section text-slate-900">
            <SplitText as="span" text="Trusted by Leading UK Providers" trigger="scroll" />
          </h2>
          <p className="mt-4 text-slate-600">
            We work alongside trusted funding, energy and payment providers to bring your business the best deals
            available.
          </p>
        </div>
      </div>

      <div
        className="relative mt-14 overflow-hidden"
        style={{ maskImage: "linear-gradient(90deg, transparent, black 8%, black 92%, transparent)", WebkitMaskImage: "linear-gradient(90deg, transparent, black 8%, black 92%, transparent)" }}
      >
        <div className="flex w-max animate-marquee items-center gap-6 hover:[animation-play-state:paused]">
          {track.map((partner, i) => (
            <div
              key={`${partner.alt}-${i}`}
              className="flex h-24 w-48 shrink-0 items-center justify-center rounded-2xl border border-brand-border bg-white p-5 shadow-sm"
            >
              <img src={partner.src} alt={partner.alt} className="max-h-full max-w-full object-contain" loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
