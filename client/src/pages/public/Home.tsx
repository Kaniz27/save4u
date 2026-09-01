import { HeroCarousel } from "@/components/home/HeroCarousel";
import { TrustBar } from "@/components/home/TrustBar";
import { AboutIntro } from "@/components/home/AboutIntro";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { TrustBadges } from "@/components/home/TrustBadges";
import { HighlightList } from "@/components/services/HighlightList";
import { WhyChooseUsHighlights } from "@/components/home/WhyChooseUsHighlights";
import { ReviewsCarousel } from "@/components/home/ReviewsCarousel";
import { CtaBanner } from "@/components/home/CtaBanner";
import { usePageMeta } from "@/hooks/usePageMeta";
import type { ServiceHighlight } from "@/types";

const HOME_HIGHLIGHTS: ServiceHighlight[] = [
  {
    icon: "Settings",
    title: "One partner, every essential",
    description:
      "Payments, energy, funding and marketing usually mean four different suppliers, four different points of contact, and four different bills to chase. Save4u brings them under one roof, with one team who already knows your business.",
  },
  {
    icon: "Wallet",
    title: "Savings you can actually measure",
    description:
      "Every recommendation we make is backed by a whole-of-market comparison, not a single preferred supplier. If switching won't genuinely save you money or time, we'll tell you — and we often do.",
  },
  {
    icon: "Headphones",
    title: "Real people, not a ticket queue",
    description:
      "No call centres. Every client gets a named specialist who understands their account, so when you call, you're speaking to someone who already knows the answer.",
  },
];

const HOME_HIGHLIGHT_IMAGES = [
  "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1000&q=80",
];

export default function Home() {
  usePageMeta(
    "Save4u | Payment, Energy, Funding & Marketing for UK Businesses",
    "Save4u helps UK businesses save money and grow with payment solutions, business energy switching, merchant cash advance, and digital marketing.",
  );

  return (
    <>
      <HeroCarousel />
      <TrustBar />
      <AboutIntro />
      <ServicesGrid />
      <TrustBadges />
      <HighlightList
        title="Built around your business, not ours"
        subtitle="A closer look at what makes working with Save4u different."
        highlights={HOME_HIGHLIGHTS}
        images={HOME_HIGHLIGHT_IMAGES}
      />
      <WhyChooseUsHighlights />
      <ReviewsCarousel />
      <CtaBanner image="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1600&q=80" />
    </>
  );
}
