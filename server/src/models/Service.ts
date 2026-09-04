import { Schema, model, type InferSchemaType } from "mongoose";

export const SERVICE_SLUGS = [
  "payment-solution",
  "business-energy",
  "merchant-cash-advance",
  "digital-marketing",
] as const;

const featureSchema = new Schema(
  {
    icon: { type: String, required: true },
    image: { type: String, default: "" },
    title: { type: String, required: true },
    description: { type: String, required: true },
  },
  { _id: false },
);

const stepSchema = new Schema(
  {
    step: { type: Number, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
  },
  { _id: false },
);

const faqSchema = new Schema(
  {
    question: { type: String, required: true },
    answer: { type: String, required: true },
  },
  { _id: false },
);

const subServiceSchema = new Schema(
  {
    icon: { type: String, required: true },
    title: { type: String, required: true },
    image: { type: String, default: "" },
    description: { type: String, required: true },
    detail: { type: String, default: "" },
  },
  { _id: false },
);

const highlightSchema = new Schema(
  {
    icon: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
  },
  { _id: false },
);

const serviceSchema = new Schema(
  {
    slug: { type: String, enum: SERVICE_SLUGS, required: true, unique: true },
    name: { type: String, required: true },
    tagline: { type: String, required: true },
    icon: { type: String, required: true },
    heroImage: { type: String, required: true },
    description: { type: String, required: true },
    features: { type: [featureSchema], default: [] },
    howItWorks: { type: [stepSchema], default: [] },
    faqs: { type: [faqSchema], default: [] },
    subServices: { type: [subServiceSchema], default: [] },
    highlights: { type: [highlightSchema], default: [] },
    ctaImage: { type: String, default: "" },
    layoutVariant: { type: String, default: "default" },
  },
  { timestamps: true },
);

export type ServiceDoc = InferSchemaType<typeof serviceSchema>;
export const Service = model("Service", serviceSchema);
