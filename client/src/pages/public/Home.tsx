import { HomeHero } from "@/components/home/HomeHero";
import { HomeServicesGrid } from "@/components/home/HomeServicesGrid";
import { WhyUsAccordion } from "@/components/home/WhyUsAccordion";
import { HomeFaqSection } from "@/components/home/HomeFaqSection";
import { CtaBanner } from "@/components/home/CtaBanner";
import { usePageMeta } from "@/hooks/usePageMeta";
import type { ServiceFaq } from "@/types";

const HOME_FAQS: ServiceFaq[] = [
  { question: "How quickly can I get set up?", answer: "Most businesses are fully set up and taking payments within 3 working days of approval, with our team guiding you through every step." },
  { question: "How fast will I receive my funds?", answer: "Card transactions are settled to your account the next working day, so you're never left waiting on your own money." },
  { question: "Are there any long-term contracts?", answer: "No long tie-ins — we offer flexible terms, including rolling monthly contracts on most plans, so you're never locked into a deal that no longer suits your business." },
  { question: "Can I get funding alongside my card machine?", answer: "Yes. Through our merchant cash advance service, eligible businesses can access flexible funding with a fast decision and repayments that flex with your card sales." },
  { question: "Do you offer support after setup?", answer: "Our UK-based support team is available Monday to Friday to help with anything from technical issues to general account questions." },
];

export default function Home() {
  usePageMeta(
    "Payment, Funding & Marketing for UK Businesses",
    "Save4u helps UK businesses save money and grow with payment solutions, business energy switching, merchant cash advance, and digital marketing.",
  );

  return (
    <>
      <HomeHero />
      <HomeServicesGrid />
      <WhyUsAccordion />
      <HomeFaqSection faqs={HOME_FAQS} />
      <CtaBanner
        title="Ready to Grow Your Business?"
        subtitle="Get a free, no-obligation quote from our team today."
        ctaLabel="Get a Free Quote"
        image="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1600&q=80"
      />
    </>
  );
}
