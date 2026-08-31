import type { Request, Response } from "express";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { Review } from "../models/Review.js";

export const listPublishedReviews = asyncHandler(async (_req: Request, res: Response) => {
  const reviews = await Review.find({ isPublished: true }).sort({ createdAt: -1 });
  res.json({ success: true, data: reviews });
});

export const listAllReviews = asyncHandler(async (_req: Request, res: Response) => {
  const reviews = await Review.find().sort({ createdAt: -1 });
  res.json({ success: true, data: reviews });
});

export const createReview = asyncHandler(async (req: Request, res: Response) => {
  const { clientName, companyName, rating, quote, serviceUsed, isPublished } = req.body as Record<string, unknown>;

  if (!clientName || !quote || !rating) {
    throw new ApiError(400, "Client name, quote and rating are required");
  }

  const review = await Review.create({
    clientName,
    companyName,
    rating,
    quote,
    serviceUsed: serviceUsed || undefined,
    isPublished: Boolean(isPublished),
  });

  res.status(201).json({ success: true, data: review });
});

export const updateReview = asyncHandler(async (req: Request, res: Response) => {
  const review = await Review.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
  if (!review) throw new ApiError(404, "Review not found");
  res.json({ success: true, data: review });
});

export const deleteReview = asyncHandler(async (req: Request, res: Response) => {
  const review = await Review.findByIdAndDelete(req.params.id);
  if (!review) throw new ApiError(404, "Review not found");
  res.json({ success: true, data: null });
});

export const togglePublish = asyncHandler(async (req: Request, res: Response) => {
  const review = await Review.findById(req.params.id);
  if (!review) throw new ApiError(404, "Review not found");
  review.isPublished = !review.isPublished;
  await review.save();
  res.json({ success: true, data: review });
});
