import type { Request, Response } from "express";
import { asyncHandler } from "../utils/asyncHandler.js";
import { Lead } from "../models/Lead.js";

export const getDashboardStats = asyncHandler(async (_req: Request, res: Response) => {
  const now = new Date();
  const weekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);

  const [total, newThisWeek, byService, byStatus, converted, recentLeads] = await Promise.all([
    Lead.countDocuments(),
    Lead.countDocuments({ createdAt: { $gte: weekAgo } }),
    Lead.aggregate([{ $group: { _id: "$serviceInterest", count: { $sum: 1 } } }]),
    Lead.aggregate([{ $group: { _id: "$status", count: { $sum: 1 } } }]),
    Lead.countDocuments({ status: "converted" }),
    Lead.find().sort({ createdAt: -1 }).limit(10),
  ]);

  const conversionRate = total > 0 ? Number(((converted / total) * 100).toFixed(1)) : 0;

  res.json({
    success: true,
    data: {
      totalLeads: total,
      newThisWeek,
      conversionRate,
      leadsByService: byService.map((b) => ({ service: b._id, count: b.count })),
      leadsByStatus: byStatus.map((b) => ({ status: b._id, count: b.count })),
      recentLeads,
    },
  });
});
