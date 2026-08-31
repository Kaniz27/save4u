import { Schema, model, type InferSchemaType } from "mongoose";

const adminSchema = new Schema(
  {
    email: { type: String, required: true, unique: true, trim: true, lowercase: true },
    passwordHash: { type: String, required: true },
    role: { type: String, default: "admin" },
  },
  { timestamps: true },
);

export type AdminDoc = InferSchemaType<typeof adminSchema>;
export const Admin = model("Admin", adminSchema);
