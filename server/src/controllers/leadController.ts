import type { Request, Response } from "express";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { Lead, LEAD_STATUSES, SERVICE_INTERESTS } from "../models/Lead.js";
import { sendLeadNotificationEmail } from "../services/emailService.js";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const createLead = asyncHandler(async (req: Request, res: Response) => {
  const { name, email, phone, company, serviceInterest, message, source } = req.body as Record<string, string>;

  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    throw new ApiError(400, "Name, email and message are required");
  }
  if (!EMAIL_RE.test(email.trim())) {
    throw new ApiError(400, "Please provide a valid email address");
  }
  if (serviceInterest && !SERVICE_INTERESTS.includes(serviceInterest as (typeof SERVICE_INTERESTS)[number])) {
    throw new ApiError(400, "Invalid service interest");
  }

  const lead = await Lead.create({
    name: name.trim(),
    email: email.trim(),
    phone: phone?.trim(),
    company: company?.trim(),
    serviceInterest: serviceInterest || "general",
    message: message.trim(),
    source: source || "unknown",
  });

  res.status(201).json({ success: true, data: lead });

  // Fire-and-forget — a slow or misconfigured mail server should never delay
  // or fail the lead submission response.
  void sendLeadNotificationEmail(lead);
});

export const listLeads = asyncHandler(async (req: Request, res: Response) => {
  const { status, serviceInterest, q, from, to, page = "1", limit = "20" } = req.query as Record<string, string>;

  const filter: Record<string, unknown> = {};
  if (status) filter.status = status;
  if (serviceInterest) filter.serviceInterest = serviceInterest;
  if (from || to) {
    filter.createdAt = {
      ...(from ? { $gte: new Date(from) } : {}),
      ...(to ? { $lte: new Date(to) } : {}),
    };
  }
  if (q) filter.$text = { $search: q };

  const pageNum = Math.max(1, Number(page) || 1);
  const limitNum = Math.min(100, Math.max(1, Number(limit) || 20));

  const [leads, total] = await Promise.all([
    Lead.find(filter)
      .sort({ createdAt: -1 })
      .skip((pageNum - 1) * limitNum)
      .limit(limitNum),
    Lead.countDocuments(filter),
  ]);

  res.json({
    success: true,
    data: leads,
    meta: { total, page: pageNum, limit: limitNum, pages: Math.ceil(total / limitNum) },
  });
});

export const getLead = asyncHandler(async (req: Request, res: Response) => {
  const lead = await Lead.findById(req.params.id);
  if (!lead) throw new ApiError(404, "Lead not found");
  res.json({ success: true, data: lead });
});

export const updateLead = asyncHandler(async (req: Request, res: Response) => {
  const { status, note } = req.body as { status?: string; note?: string };
  const lead = await Lead.findById(req.params.id);
  if (!lead) throw new ApiError(404, "Lead not found");

  if (status) {
    if (!LEAD_STATUSES.includes(status as (typeof LEAD_STATUSES)[number])) {
      throw new ApiError(400, "Invalid status");
    }
    if (status !== lead.status) {
      lead.status = status as (typeof LEAD_STATUSES)[number];
      lead.statusHistory.push({ status: status as (typeof LEAD_STATUSES)[number], changedAt: new Date() });
    }
  }

  if (note?.trim()) {
    lead.notes.push({ text: note.trim(), author: req.admin?.email ?? "Admin", createdAt: new Date() });
  }

  await lead.save();
  res.json({ success: true, data: lead });
});
