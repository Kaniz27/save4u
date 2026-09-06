import type { Request, Response } from "express";
import bcrypt from "bcryptjs";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { Admin } from "../models/Admin.js";
import { signAdminToken } from "../services/jwt.js";
import { env } from "../config/env.js";

const COOKIE_NAME = "save4u_token";
const COOKIE_MAX_AGE_MS = 7 * 24 * 60 * 60 * 1000;

export const login = asyncHandler(async (req: Request, res: Response) => {
  const { email, password } = req.body as { email?: string; password?: string };

  if (!email || !password) {
    throw new ApiError(400, "Email and password are required");
  }

  const admin = await Admin.findOne({ email: email.toLowerCase().trim() });
  if (!admin) {
    throw new ApiError(401, "Invalid credentials");
  }

  const valid = await bcrypt.compare(password, admin.passwordHash);
  if (!valid) {
    throw new ApiError(401, "Invalid credentials");
  }

  const token = signAdminToken({ id: admin.id, email: admin.email, role: admin.role });

  res.cookie(COOKIE_NAME, token, {
    httpOnly: true,
    // Cross-site cookies (separate frontend/backend domains in production)
    // require SameSite=None, which in turn requires Secure.
    secure: env.nodeEnv === "production",
    sameSite: env.nodeEnv === "production" ? "none" : "lax",
    maxAge: COOKIE_MAX_AGE_MS,
  });

  res.json({ success: true, data: { id: admin.id, email: admin.email, role: admin.role } });
});

export const logout = asyncHandler(async (_req: Request, res: Response) => {
  res.clearCookie(COOKIE_NAME, {
    httpOnly: true,
    secure: env.nodeEnv === "production",
    sameSite: env.nodeEnv === "production" ? "none" : "lax",
  });
  res.json({ success: true, data: null });
});

export const me = asyncHandler(async (req: Request, res: Response) => {
  res.json({ success: true, data: req.admin });
});

// One-time bootstrap tool for creating/resetting an admin account when no
// other database access is available. Disabled (404) unless SETUP_ADMIN_KEY
// is set in the environment; remove that env var once it's no longer needed.
export const bootstrapAdmin = asyncHandler(async (req: Request, res: Response) => {
  if (!env.setupAdminKey || req.headers["x-setup-key"] !== env.setupAdminKey) {
    throw new ApiError(404, "Not found");
  }

  const { email, password } = req.body as { email?: string; password?: string };
  if (!email?.trim() || !password || password.length < 8) {
    throw new ApiError(400, "email and a password of at least 8 characters are required");
  }

  const passwordHash = await bcrypt.hash(password, 10);
  const admin = await Admin.findOneAndUpdate(
    { email: email.toLowerCase().trim() },
    { email: email.toLowerCase().trim(), passwordHash, role: "admin" },
    { upsert: true, new: true },
  );

  res.json({ success: true, data: { id: admin.id, email: admin.email } });
});
