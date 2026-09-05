import { Schema, model, type InferSchemaType } from "mongoose";

const siteSettingsSchema = new Schema(
  {
    contactEmail: { type: String, default: "support@save4u.co.uk" },
    contactPhone: { type: String, default: "+44 7350 320196" },
    address: {
      type: String,
      default: "Metloc Business Centre, Unit 15 & 16, 37 Victoria Road, Romford, London, RM1 2LH",
    },
    socialLinks: {
      facebook: { type: String, default: "" },
      linkedin: { type: String, default: "" },
      instagram: { type: String, default: "" },
      twitter: { type: String, default: "" },
    },
  },
  { timestamps: true },
);

export type SiteSettingsDoc = InferSchemaType<typeof siteSettingsSchema>;
export const SiteSettings = model("SiteSettings", siteSettingsSchema);
