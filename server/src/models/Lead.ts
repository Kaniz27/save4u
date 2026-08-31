import { Schema, model, type InferSchemaType } from "mongoose";

export const SERVICE_INTERESTS = [
  "payment-solution",
  "business-energy",
  "merchant-cash-advance",
  "digital-marketing",
  "general",
] as const;

export const LEAD_STATUSES = ["new", "contacted", "converted", "closed"] as const;

const noteSchema = new Schema(
  {
    text: { type: String, required: true, trim: true },
    author: { type: String, default: "Admin" },
    createdAt: { type: Date, default: Date.now },
  },
  { _id: true },
);

const statusHistorySchema = new Schema(
  {
    status: { type: String, enum: LEAD_STATUSES, required: true },
    changedAt: { type: Date, default: Date.now },
  },
  { _id: false },
);

const leadSchema = new Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, lowercase: true },
    phone: { type: String, trim: true },
    company: { type: String, trim: true },
    serviceInterest: {
      type: String,
      enum: SERVICE_INTERESTS,
      default: "general",
      required: true,
    },
    message: { type: String, required: true, trim: true },
    status: { type: String, enum: LEAD_STATUSES, default: "new", required: true },
    source: { type: String, default: "unknown" },
    notes: { type: [noteSchema], default: [] },
    statusHistory: { type: [statusHistorySchema], default: () => [{ status: "new" }] },
  },
  { timestamps: true },
);

leadSchema.index({ status: 1 });
leadSchema.index({ serviceInterest: 1 });
leadSchema.index({ createdAt: -1 });
leadSchema.index({ name: "text", email: "text", company: "text", message: "text" });

export type LeadDoc = InferSchemaType<typeof leadSchema>;
export const Lead = model("Lead", leadSchema);
