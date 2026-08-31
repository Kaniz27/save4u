import type { Request, Response } from "express";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { publicUrlFor } from "../services/uploadService.js";

export const handleUpload = asyncHandler(async (req: Request, res: Response) => {
  if (!req.file) {
    throw new ApiError(400, "No file uploaded");
  }
  res.status(201).json({ success: true, data: { url: publicUrlFor(req.file.filename) } });
});
