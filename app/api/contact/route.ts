import { NextRequest } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

const CONTACT_EMAIL = process.env.CONTACT_EMAIL || "o.arellano.dev@gmail.com";

export async function POST(req: NextRequest) {
  const { firstName, lastName, email, phone, services, message, source } =
    await req.json();

  if (!firstName || !email) {
    return new Response("Missing required fields", { status: 400 });
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT || 587),
    secure: process.env.SMTP_SECURE === "true",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const fullName = [firstName, lastName].filter(Boolean).join(" ");
  const servicesList =
    Array.isArray(services) && services.length > 0
      ? services.join(", ")
      : "Not specified";
  const label = source === "quote" ? "Quote Request" : "Contact Form";

  const text = [
    `New ${label} from ${fullName}`,
    "",
    `Name:     ${fullName}`,
    `Email:    ${email}`,
    `Phone:    ${phone || "Not provided"}`,
    `Services: ${servicesList}`,
    "",
    `Message:`,
    message || "(none)",
  ].join("\n");

  await transporter.sendMail({
    from: process.env.SMTP_FROM || process.env.SMTP_USER,
    to: CONTACT_EMAIL,
    replyTo: email,
    subject: `New ${label}: ${fullName}`,
    text,
  });

  return Response.json({ ok: true });
}
