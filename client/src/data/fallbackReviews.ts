import type { Review } from "@/types";

// Mirrors server/src/seed/seed.ts — used when the API is unreachable.
export const FALLBACK_REVIEWS: Review[] = [
  {
    _id: "fallback-review-1",
    clientName: "James Carter",
    companyName: "Carter & Co Retail",
    rating: 5,
    quote: "Switching our card machine through Save4u cut our processing fees noticeably within the first month.",
    serviceUsed: "payment-solution",
    isPublished: true,
    createdAt: new Date().toISOString(),
  },
  {
    _id: "fallback-review-2",
    clientName: "Priya Shah",
    companyName: "Shah Dental Practice",
    rating: 5,
    quote: "The energy switch was completely hassle-free and saved us a genuine amount on our annual bill.",
    serviceUsed: "business-energy",
    isPublished: true,
    createdAt: new Date().toISOString(),
  },
  {
    _id: "fallback-review-3",
    clientName: "Marcus Webb",
    companyName: "Webb's Coffee House",
    rating: 4,
    quote: "The cash advance gave us the funds to refit the shop without touching our savings. Repayments flex with trade which really helps.",
    serviceUsed: "merchant-cash-advance",
    isPublished: true,
    createdAt: new Date().toISOString(),
  },
  {
    _id: "fallback-review-4",
    clientName: "Olivia Bennett",
    companyName: "Bennett Interiors",
    rating: 5,
    quote: "Our enquiries have grown steadily since Save4u took over our SEO and social media.",
    serviceUsed: "digital-marketing",
    isPublished: true,
    createdAt: new Date().toISOString(),
  },
];
