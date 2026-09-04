import type { Service } from "@/types";

// Mirrors server/src/seed/seed.ts — used when the API is unreachable so
// service pages still render with real content instead of "not found".
export const FALLBACK_SERVICES: Service[] = [
  {
    _id: "fallback-payment-solution",
    slug: "payment-solution",
    name: "Payment Solution",
    tagline: "Smarter Payment Solutions for growing businesses",
    icon: "CreditCard",
    heroImage:
      "https://images.unsplash.com/photo-1742836531256-87aa58fd35a9?auto=format&fit=crop&w=1600&q=80",
    description:
      "Save4u helps UK businesses accept payments faster and cheaper, with transparent card processing rates, next-day settlement, and hardware that fits your business — from countertop terminals to fully integrated ecommerce checkouts.",
    features: [
      { icon: "Percent", image: "https://images.unsplash.com/photo-1768207450151-30c0bf8e8091?auto=format&fit=crop&w=200&h=200&q=80", title: "Lower Transaction Rates", description: "Competitive, transparent rates with no hidden fees or long lock-in contracts." },
      { icon: "Zap", image: "https://images.unsplash.com/photo-1580674287165-60059e9ac2aa?auto=format&fit=crop&w=200&h=200&q=80", title: "Fast Settlement", description: "Get paid into your account next working day, keeping cash flow moving." },
      { icon: "ShieldCheck", image: "https://images.unsplash.com/photo-1763568258239-d3b5c95019af?auto=format&fit=crop&w=200&h=200&q=80", title: "PCI-DSS Compliant", description: "Every transaction is processed on secure, fully compliant infrastructure." },
      { icon: "Smartphone", image: "https://images.unsplash.com/photo-1743004128683-67187a85c537?auto=format&fit=crop&w=200&h=200&q=80", title: "Card Machines & Online", description: "Countertop, portable, and online payment gateways in one account." },
    ],
    howItWorks: [
      { step: 1, title: "Free Consultation", description: "We review your current processing costs and business needs." },
      { step: 2, title: "Tailored Quote", description: "You get a transparent rate comparison with no obligation." },
      { step: 3, title: "Fast Setup", description: "Your terminal or gateway is configured and live within days." },
      { step: 4, title: "Ongoing Support", description: "UK-based support team on hand whenever you need us." },
    ],
    faqs: [
      { question: "How quickly can I start taking payments?", answer: "Most merchants are approved and live within 3-5 working days." },
      { question: "Are there long-term contracts?", answer: "We offer flexible terms, including rolling monthly contracts on most plans." },
      { question: "Can I accept payments online and in person?", answer: "Yes — card machines and online gateways are managed from a single account." },
    ],
    subServices: [
      {
        icon: "CreditCard",
        title: "Card Machines",
        image: "https://images.unsplash.com/photo-1556742031-c6961e8560b0?auto=format&fit=crop&w=900&q=80",
        description: "Fast, secure card machines for every business type — retail, hospitality, or on the move.",
        detail:
          "Choose from countertop, portable, or fully mobile card readers, set up to take chip-and-pin, contactless, and mobile wallet payments within days, with the same next-day settlement across every device.",
      },
      {
        icon: "Globe",
        title: "Online Payments",
        image: "https://images.unsplash.com/photo-1758686254082-0f91a27b3075?auto=format&fit=crop&w=900&q=80",
        description: "Accept secure online payments on your website or online store, any time of day.",
        detail:
          "A hosted payment gateway or embeddable checkout built to work with the ecommerce platforms you already use, so online and in-person sales settle into the same account.",
      },
      {
        icon: "Monitor",
        title: "ePOS System",
        image: "https://images.unsplash.com/photo-1742836531271-98fd8151d257?auto=format&fit=crop&w=900&q=80",
        description: "Streamline operations with an ePOS system that integrates directly with your card machines.",
        detail:
          "Manage stock, staff, and sales from one screen, with every transaction flowing straight through to your card processing — no manual reconciliation at the end of the day.",
      },
    ],
    highlights: [
      {
        icon: "Settings",
        title: "Custom Solutions for Every Business",
        description:
          "Whether you're a retail store, restaurant, or mobile service, we tailor your payment setup to how you actually take money — not a one-size-fits-all package.",
      },
      {
        icon: "Wallet",
        title: "Seamless Payment Options",
        description:
          "Accept chip-and-pin, contactless, mobile wallets, and online payments through one simple system, so however your customers want to pay, you're covered.",
      },
      {
        icon: "FileText",
        title: "Transparent, No-Surprise Pricing",
        description: "One clear rate, agreed upfront, with no long tie-in contracts or hidden charges buried in the small print.",
      },
    ],
    ctaImage: "https://images.unsplash.com/photo-1742836531239-1fe146bf7e3f?auto=format&fit=crop&w=1600&q=80",
    layoutVariant: "payment",
  },
  {
    _id: "fallback-business-energy",
    slug: "business-energy",
    name: "Business Energy",
    tagline: "Cut Your Business Energy Costs",
    icon: "Zap",
    heroImage: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1600&q=80",
    description:
      "We compare business gas and electricity rates across the UK's leading suppliers to find you a better deal, then manage renewals so you never get rolled onto an expensive default tariff again.",
    features: [
      { icon: "TrendingDown", image: "https://images.unsplash.com/photo-1728366403350-b893ccdc284d?auto=format&fit=crop&w=200&h=200&q=80", title: "Lower Bills", description: "We benchmark your rates against the whole of market to find real savings." },
      { icon: "RefreshCw", image: "https://images.unsplash.com/photo-1763729805496-b5dbf7f00c79?auto=format&fit=crop&w=200&h=200&q=80", title: "Renewal Management", description: "We track your contract end date and renegotiate before it expires." },
      { icon: "FileText", image: "https://images.unsplash.com/photo-1697301439916-169bd6844842?auto=format&fit=crop&w=200&h=200&q=80", title: "Bill Validation", description: "We check past bills for overcharges and help you claim refunds." },
      { icon: "Leaf", image: "https://images.unsplash.com/photo-1521618755572-156ae0cdd74d?auto=format&fit=crop&w=200&h=200&q=80", title: "Green Tariff Options", description: "Access to renewable energy tariffs at competitive rates." },
    ],
    howItWorks: [
      { step: 1, title: "Send Your Bill", description: "Upload a recent bill or meter details for a like-for-like comparison." },
      { step: 2, title: "Market Comparison", description: "We compare rates across our panel of trusted UK suppliers." },
      { step: 3, title: "You Choose", description: "Pick the deal that works for you — no obligation to switch." },
      { step: 4, title: "We Switch For You", description: "We handle the paperwork and the switch end-to-end." },
    ],
    faqs: [
      { question: "Is switching disruptive?", answer: "No — your supply is uninterrupted, only the billing supplier changes." },
      { question: "Do you charge for the comparison?", answer: "The comparison and switch service is completely free." },
      { question: "What if I'm mid-contract?", answer: "We can register your renewal date and come back to you ahead of time." },
    ],
    subServices: [
      {
        icon: "Zap",
        title: "Business Electricity",
        image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=900&q=80",
        description: "We compare electricity tariffs across our panel of UK suppliers to find a genuinely lower rate.",
        detail:
          "Send us a recent bill or your meter details and we'll benchmark your current rate against the whole market, with no obligation to switch if we can't beat it.",
      },
      {
        icon: "Flame",
        title: "Business Gas",
        image: "https://images.unsplash.com/photo-1518481852452-9415b262eba4?auto=format&fit=crop&w=900&q=80",
        description: "The same whole-of-market comparison for your gas supply, handled alongside your electricity.",
        detail:
          "Bundling gas and electricity through one comparison often unlocks better combined rates, and means one renewal date to track instead of two.",
      },
      {
        icon: "RefreshCw",
        title: "Renewal Management",
        image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=900&q=80",
        description: "We track your contract end date so you're never rolled onto an expensive default tariff.",
        detail:
          "Most businesses only think about their energy contract when the bill spikes. We flag your renewal window in advance and come back with fresh comparisons before it lapses.",
      },
    ],
    highlights: [
      {
        icon: "Lightbulb",
        title: "Turn Off What You Don't Need",
        description:
          "Equipment left in standby mode still draws power around the clock. Switching off non-essential devices at the end of the day is the simplest way to cut waste.",
      },
      {
        icon: "ClipboardList",
        title: "Get an Energy Audit",
        description:
          "You can't save on what you can't see. An audit shows exactly where your business is using — and wasting — energy, so savings efforts go where they matter.",
      },
      {
        icon: "Thermometer",
        title: "Keep Heating and Cooling Steady",
        description: "Frequent thermostat adjustments cost more than a steady, comfortable temperature. A consistent setting saves more over a year than constant tweaking.",
      },
    ],
    ctaImage: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1600&q=80",
    layoutVariant: "default",
  },
  {
    _id: "fallback-merchant-cash-advance",
    slug: "merchant-cash-advance",
    name: "Merchant Cash Advance",
    tagline: "Fast, Flexible Business Funding",
    icon: "Banknote",
    heroImage: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1600&q=80",
    description:
      "Access working capital against your future card sales — no fixed monthly repayments, no property security, and funds in your account in as little as 48 hours.",
    features: [
      { icon: "Clock", image: "https://images.unsplash.com/photo-1704265586142-db3e17d0dea0?auto=format&fit=crop&w=200&h=200&q=80", title: "Fast Approval", description: "Decisions in 24-48 hours, with funds released shortly after." },
      { icon: "Percent", image: "https://images.unsplash.com/photo-1633158829585-23ba8f7c8caf?auto=format&fit=crop&w=200&h=200&q=80", title: "Repay As You Earn", description: "Repayments flex with your card takings — no fixed monthly amount." },
      { icon: "Home", image: "https://images.unsplash.com/photo-1752159400890-d906038f1b35?auto=format&fit=crop&w=200&h=200&q=80", title: "No Security Required", description: "Unsecured funding with no property or personal guarantee needed." },
      { icon: "TrendingUp", image: "https://images.unsplash.com/photo-1772413438614-3d4582783392?auto=format&fit=crop&w=200&h=200&q=80", title: "Funding That Scales", description: "Access further advances as your business grows." },
    ],
    howItWorks: [
      { step: 1, title: "Quick Application", description: "Tell us about your business and recent card turnover." },
      { step: 2, title: "Same-Day Decision", description: "We assess your eligibility and provide an indicative offer." },
      { step: 3, title: "Funds Released", description: "Approved funds are paid directly into your business account." },
      { step: 4, title: "Flexible Repayment", description: "A small, agreed percentage of card sales repays the advance." },
    ],
    faqs: [
      { question: "Do I need to switch card machine provider?", answer: "In most cases no — we can work with your existing processor." },
      { question: "How much can I borrow?", answer: "Typically based on your average monthly card turnover, reviewed case by case." },
      { question: "Is this a loan?", answer: "No — it's an advance against future card sales, not a fixed-term loan." },
    ],
    subServices: [
      {
        icon: "Wallet",
        title: "Working Capital",
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=900&q=80",
        description: "Smooth out cash flow gaps and cover day-to-day costs without dipping into savings.",
        detail:
          "Ideal for bridging quiet periods, covering payroll, or restocking ahead of a busy season, with repayments that scale down automatically if trade slows.",
      },
      {
        icon: "ShoppingCart",
        title: "Stock & Equipment",
        image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&w=900&q=80",
        description: "Fund new stock or equipment upfront and repay as your card sales come in.",
        detail: "Get ahead of demand — buy in bulk, replace ageing equipment, or add a new product line — without waiting on cash flow to catch up first.",
      },
      {
        icon: "TrendingUp",
        title: "Refurbishment & Growth",
        image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=900&q=80",
        description: "Invest in a refit, a new location, or expansion, with repayments that flex around your trading.",
        detail:
          "Bigger projects don't have to mean bigger risk. Because repayments track your card turnover, a quieter month after a refit doesn't mean a fixed bill you can't cover.",
      },
    ],
    highlights: [
      {
        icon: "Lightbulb",
        title: "Fair, Upfront Pricing",
        description: "One clear cost agreed before you accept — no APR calculations and no surprise charges added later.",
      },
      {
        icon: "HeartHandshake",
        title: "No Restrictions on Spend",
        description: "Use the funds however your business needs them, with no hidden fees for how or where you spend it.",
      },
      {
        icon: "TrendingUp",
        title: "Support at Every Stage",
        description: "From a first-time advance to repeat funding as you grow, we structure each advance around where your business is right now.",
      },
    ],
    ctaImage: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1600&q=80",
    layoutVariant: "funding",
  },
  {
    _id: "fallback-digital-marketing",
    slug: "digital-marketing",
    name: "Digital Marketing",
    tagline: "Grow with Digital Marketing",
    icon: "Megaphone",
    heroImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=80",
    description:
      "From search visibility to paid campaigns and social media, our digital marketing team builds and runs growth strategies tailored to your business goals and budget.",
    features: [
      { icon: "Search", image: "https://images.unsplash.com/photo-1637606346315-d23ed32a6cfc?auto=format&fit=crop&w=200&h=200&q=80", title: "SEO", description: "Rank higher on Google with technical, content, and local SEO." },
      { icon: "Target", image: "https://images.unsplash.com/photo-1756363212224-dca8af2eac90?auto=format&fit=crop&w=200&h=200&q=80", title: "Paid Advertising", description: "Google & social ad campaigns managed for measurable ROI." },
      { icon: "Share2", image: "https://images.unsplash.com/photo-1690883794145-e96486fbe66b?auto=format&fit=crop&w=200&h=200&q=80", title: "Social Media", description: "Content and community management that builds your brand." },
      { icon: "BarChart3", image: "https://images.unsplash.com/photo-1772413438614-3d4582783392?auto=format&fit=crop&w=200&h=200&q=80", title: "Reporting", description: "Clear, regular reporting so you always know what's working." },
    ],
    howItWorks: [
      { step: 1, title: "Discovery", description: "We learn your business, audience, and growth goals." },
      { step: 2, title: "Strategy", description: "A tailored plan across the channels that matter most to you." },
      { step: 3, title: "Launch", description: "Campaigns and content go live, tracked from day one." },
      { step: 4, title: "Optimise", description: "Ongoing testing and reporting to improve performance." },
    ],
    faqs: [
      { question: "Do you work with small businesses?", answer: "Yes — we tailor packages for businesses of every size and budget." },
      { question: "How soon will I see results?", answer: "Paid campaigns can show results within days; SEO typically takes 3-6 months." },
      { question: "Do I need a new website?", answer: "Not necessarily — we can work with your existing site or recommend improvements." },
    ],
    subServices: [
      {
        icon: "Layout",
        title: "Website Design & Development",
        image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=900&q=80",
        description: "A wide range of website development services to get your business online quickly and effectively.",
        detail:
          "From a simple brochure site to a fully custom build, we design and develop around what your customers actually need to do — book, buy, or get in touch — not just how it looks.",
      },
      {
        icon: "Search",
        title: "SEO",
        image: "https://images.unsplash.com/photo-1571677246347-5040036b95cc?auto=format&fit=crop&w=900&q=80",
        description: "Rank higher in search results through keyword research, on-page and off-page SEO, and ongoing analysis.",
        detail:
          "We start with technical foundations, build out content around the terms your customers actually search, and track rankings monthly so you can see the trend, not just a snapshot.",
      },
      {
        icon: "Target",
        title: "Google Ads",
        image: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?auto=format&fit=crop&w=900&q=80",
        description: "Targeted Google ad campaigns, managed for measurable return on spend.",
        detail:
          "Campaigns are built around a clear goal — leads, bookings, or sales — with budget shifted toward whatever's actually converting, reported back to you in plain terms.",
      },
      {
        icon: "Share2",
        title: "Social Media Marketing",
        image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?auto=format&fit=crop&w=900&q=80",
        description: "Content and community management across the platforms your customers actually use.",
        detail:
          "From content calendars to paid social campaigns, we build a presence that builds trust — and turns followers into enquiries.",
      },
      {
        icon: "Users",
        title: "Lead Generation",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80",
        description: "Campaigns built to fill your pipeline with people ready to buy, not just visitors.",
        detail:
          "We target by location, interest and behaviour, so your budget reaches the people most likely to enquire — with every lead tracked back to the campaign that won it.",
      },
      {
        icon: "TrendingUp",
        title: "Conversion Optimisation",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80",
        description: "Turn more of your existing traffic into enquiries, without spending more on ads.",
        detail:
          "We test and refine your pages, forms and calls to action so the traffic you're already paying for converts at a higher rate.",
      },
    ],
    highlights: [
      {
        icon: "DollarSign",
        title: "Cost-Effective Reach",
        description: "Compared to traditional advertising, digital marketing typically costs less and is easier to track against actual return.",
      },
      {
        icon: "BarChart3",
        title: "Results You Can Measure",
        description: "Real-time tracking means you always know what's working, so budget goes where it performs — not where it feels like it should.",
      },
      {
        icon: "Users",
        title: "Reach the Right Audience",
        description: "Target by location, interest, and behaviour, so your budget reaches people actually likely to buy, not just anyone scrolling past.",
      },
    ],
    ctaImage: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?auto=format&fit=crop&w=1600&q=80",
    layoutVariant: "marketing",
  },

];

export function findFallbackService(slug: string): Service | undefined {
  return FALLBACK_SERVICES.find((s) => s.slug === slug);
}
