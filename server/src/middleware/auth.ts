import type { NextFunction, Request, Response } from "express";
import { ApiError } from "../utils/ApiError.js";
import { verifyAdminToken, type AdminTokenPayload } from "../services/jwt.js";

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Express {
    interface Request {
      admin?: AdminTokenPayload;
    }
  }
}

export function requireAdmin(req: Request, _res: Response, next: NextFunction): void {
  const token = req.cookies?.save4u_token as string | undefined;

  if (!token) {
    next(new ApiError(401, "Not authenticated"));
    return;
  }

  try {
    req.admin = verifyAdminToken(token);
    next();
  } catch {
    next(new ApiError(401, "Invalid or expired session"));
  }
}
