import type { Request, Response } from "express";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { Service } from "../models/Service.js";

export const listServices = asyncHandler(async (_req: Request, res: Response) => {
  const services = await Service.find().sort({ slug: 1 });
  res.json({ success: true, data: services });
});

export const getServiceBySlug = asyncHandler(async (req: Request, res: Response) => {
  const service = await Service.findOne({ slug: req.params.slug });
  if (!service) throw new ApiError(404, "Service not found");
  res.json({ success: true, data: service });
});

export const updateServiceBySlug = asyncHandler(async (req: Request, res: Response) => {
  const service = await Service.findOneAndUpdate({ slug: req.params.slug }, req.body, {
    new: true,
    runValidators: true,
    upsert: false,
  });
  if (!service) throw new ApiError(404, "Service not found");
  res.json({ success: true, data: service });
});
