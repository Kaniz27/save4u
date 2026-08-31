import nodemailer from "nodemailer";
import { env } from "../config/env.js";
import type { LeadDoc } from "../models/Lead.js";

let transporter: ReturnType<typeof nodemailer.createTransport> | null = null;
let transporterChecked = false;

function getTransporter() {
  if (transporterChecked) return transporter;
  transporterChecked = true;

  if (!env.smtpHost || !env.smtpUser || !env.smtpPass) {
    console.warn(
      "[email] SMTP not configured (set SMTP_HOST, SMTP_USER, SMTP_PASS in server/.env) — lead notification emails will be skipped.",
    );
    return null;
  }

  transporter = nodemailer.createTransport({
    host: env.smtpHost,
    port: env.smtpPort,
    secure: env.smtpPort === 465,
    auth: { user: env.smtpUser, pass: env.smtpPass },
  });
  return transporter;
}

const SERVICE_LABELS: Record<string, string> = {
  "payment-solution": "Payment Solution",
  "business-energy": "Business Energy",
  "merchant-cash-advance": "Merchant Cash Advance",
  "digital-marketing": "Digital Marketing",
  general: "General Enquiry",
};

export async function sendLeadNotificationEmail(lead: LeadDoc & { _id: unknown }): Promise<void> {
  const transport = getTransporter();
  if (!transport) return;

  const to = env.notifyEmail || env.smtpUser;

  try {
    await transport.sendMail({
      from: env.smtpFrom || env.smtpUser,
      to,
      replyTo: lead.email,
      subject: `New enquiry: ${lead.name} — ${SERVICE_LABELS[lead.serviceInterest] ?? lead.serviceInterest}`,
      html: `
        <h2>New website enquiry</h2>
        <p><strong>Name:</strong> ${lead.name}</p>
        <p><strong>Email:</strong> ${lead.email}</p>
        <p><strong>Phone:</strong> ${lead.phone || "—"}</p>
        <p><strong>Company:</strong> ${lead.company || "—"}</p>
        <p><strong>Service interested in:</strong> ${SERVICE_LABELS[lead.serviceInterest] ?? lead.serviceInterest}</p>
        <p><strong>Source page:</strong> ${lead.source}</p>
        <p><strong>Message:</strong></p>
        <p>${lead.message.replace(/\n/g, "<br/>")}</p>
        <hr/>
        <p style="color:#888;font-size:12px;">View and manage this lead in the Save4u admin dashboard.</p>
      `,
    });
  } catch (err) {
    console.error("[email] Failed to send lead notification email:", err);
  }
}
