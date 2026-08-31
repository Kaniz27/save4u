import type { Request, Response } from "express";
import { asyncHandler } from "../utils/asyncHandler.js";
import { SiteSettings } from "../models/SiteSettings.js";

async function getOrCreateSettings() {
  let settings = await SiteSettings.findOne();
  if (!settings) {
    settings = await SiteSettings.create({});
  }
  return settings;
}

export const getSettings = asyncHandler(async (_req: Request, res: Response) => {
  const settings = await getOrCreateSettings();
  res.json({ success: true, data: settings });
});

export const updateSettings = asyncHandler(async (req: Request, res: Response) => {
  const settings = await getOrCreateSettings();
  Object.assign(settings, req.body);
  await settings.save();
  res.json({ success: true, data: settings });
});
