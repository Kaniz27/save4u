import "dotenv/config";
import bcrypt from "bcryptjs";
import mongoose from "mongoose";
import { env } from "../config/env.js";
import { Admin } from "../models/Admin.js";

const email = process.argv[2];
const password = process.argv[3];

if (!email || !password) {
  console.error("Usage: tsx src/seed/addAdmin.ts <email> <password>");
  process.exit(1);
}

async function run() {
  await mongoose.connect(env.mongodbUri);
  const passwordHash = await bcrypt.hash(password, 10);
  const admin = await Admin.findOneAndUpdate(
    { email: email.toLowerCase().trim() },
    { email: email.toLowerCase().trim(), passwordHash, role: "admin" },
    { upsert: true, new: true },
  );
  console.log(`[addAdmin] admin account ready: ${admin.email}`);
  await mongoose.disconnect();
}

run().catch((err) => {
  console.error("[addAdmin] failed", err);
  process.exit(1);
});
