import type { NextFunction, Request, Response } from "express";
import { ApiError } from "../utils/ApiError.js";

export function notFoundHandler(req: Request, res: Response): void {
  res.status(404).json({ success: false, message: `Route not found: ${req.originalUrl}` });
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function errorHandler(err: unknown, req: Request, res: Response, next: NextFunction): void {
  if (err instanceof ApiError) {
    res.status(err.statusCode).json({ success: false, message: err.message });
    return;
  }

  if (err && typeof err === "object" && "name" in err && (err as { name: string }).name === "ValidationError") {
    res.status(400).json({ success: false, message: (err as Error).message });
    return;
  }

  console.error(err);
  res.status(500).json({ success: false, message: "Internal server error" });
}
