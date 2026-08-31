import { Schema, model, type InferSchemaType } from "mongoose";
import { SERVICE_INTERESTS } from "./Lead.js";

const reviewSchema = new Schema(
  {
    clientName: { type: String, required: true, trim: true },
    companyName: { type: String, trim: true },
    rating: { type: Number, required: true, min: 1, max: 5 },
    quote: { type: String, required: true, trim: true },
    serviceUsed: {
      type: String,
      enum: SERVICE_INTERESTS.filter((s) => s !== "general"),
      required: false,
    },
    isPublished: { type: Boolean, default: false },
  },
  { timestamps: true },
);

reviewSchema.index({ isPublished: 1 });

export type ReviewDoc = InferSchemaType<typeof reviewSchema>;
export const Review = model("Review", reviewSchema);
