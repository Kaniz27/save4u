export type ServiceInterest =
  | "payment-solution"
  | "business-energy"
  | "merchant-cash-advance"
  | "digital-marketing"
  | "general";

export type LeadStatus = "new" | "contacted" | "converted" | "closed";

export interface LeadNote {
  _id?: string;
  text: string;
  author: string;
  createdAt: string;
}

export interface LeadStatusChange {
  status: LeadStatus;
  changedAt: string;
}

export interface Lead {
  _id: string;
  name: string;
  email: string;
  phone?: string;
  company?: string;
  serviceInterest: ServiceInterest;
  message: string;
  status: LeadStatus;
  source: string;
  notes: LeadNote[];
  statusHistory: LeadStatusChange[];
  createdAt: string;
  updatedAt: string;
}

export interface Review {
  _id: string;
  clientName: string;
  companyName?: string;
  rating: number;
  quote: string;
  serviceUsed?: ServiceInterest;
  isPublished: boolean;
  createdAt: string;
}

export interface ServiceFeature {
  icon: string;
  image?: string;
  title: string;
  description: string;
}

export interface ServiceStep {
  step: number;
  title: string;
  description: string;
}

export interface ServiceFaq {
  question: string;
  answer: string;
}

export interface SubService {
  icon: string;
  title: string;
  image: string;
  description: string;
  detail: string;
}

export interface ServiceHighlight {
  icon: string;
  title: string;
  description: string;
}

export interface Service {
  _id: string;
  slug: string;
  name: string;
  tagline: string;
  icon: string;
  heroImage: string;
  description: string;
  features: ServiceFeature[];
  howItWorks: ServiceStep[];
  faqs: ServiceFaq[];
  subServices: SubService[];
  highlights: ServiceHighlight[];
  ctaImage: string;
  layoutVariant: string;
}

export interface SiteSettings {
  _id?: string;
  contactEmail: string;
  contactPhone: string;
  address: string;
  socialLinks: {
    facebook: string;
    linkedin: string;
    instagram: string;
    twitter: string;
  };
}

export interface AdminUser {
  id: string;
  email: string;
  role: string;
}

export interface DashboardStats {
  totalLeads: number;
  newThisWeek: number;
  conversionRate: number;
  leadsByService: { service: string; count: number }[];
  leadsByStatus: { status: string; count: number }[];
  recentLeads: Lead[];
}

export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
  meta?: { total: number; page: number; limit: number; pages: number };
}
