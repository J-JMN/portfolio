import nodemailer, { type SendMailOptions } from "nodemailer";
import { z } from "zod";
import type { ContactSubmission } from "./contact";

const domainEmail = "contact@intavor.co.ke";

const mailConfigSchema = z.object({
  SMTP_HOST: z.string().trim().min(1).default("smtp.zoho.com"),
  SMTP_PORT: z.coerce.number().int().min(1).max(65535).default(465),
  SMTP_USER: z
    .string()
    .trim()
    .email()
    .default("business@intavor.co.ke"),
  SMTP_PASSWORD: z.string().min(1),
  CONTACT_FROM_EMAIL: z.string().trim().email().default(domainEmail),
  CONTACT_TO_EMAIL: z.string().trim().email().default(domainEmail),
});

export type MailConfig = {
  smtpHost: string;
  smtpPort: number;
  smtpUser: string;
  smtpPassword: string;
  fromEmail: string;
  toEmail: string;
};

type ContactEmail = SendMailOptions & {
  html: string;
  text: string;
};

export function readMailConfig(
  environment: Record<string, string | undefined>,
): MailConfig {
  const result = mailConfigSchema.safeParse(environment);

  if (!result.success) {
    throw new Error("SMTP configuration is incomplete");
  }

  return {
    smtpHost: result.data.SMTP_HOST,
    smtpPort: result.data.SMTP_PORT,
    smtpUser: result.data.SMTP_USER,
    smtpPassword: result.data.SMTP_PASSWORD,
    fromEmail: result.data.CONTACT_FROM_EMAIL,
    toEmail: result.data.CONTACT_TO_EMAIL,
  };
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function withLineBreaks(value: string) {
  return escapeHtml(value).replaceAll("\n", "<br />");
}

export function buildNotificationEmail(
  submission: ContactSubmission,
  config: MailConfig,
): ContactEmail {
  const name = escapeHtml(submission.name);
  const email = escapeHtml(submission.email);
  const subject = escapeHtml(submission.subject);
  const message = withLineBreaks(submission.message);

  return {
    from: { name: "INTAVOR", address: config.fromEmail },
    to: config.toEmail,
    replyTo: { name: submission.name, address: submission.email },
    subject: `[INTAVOR] ${submission.subject}`,
    text: [
      "New website enquiry",
      "",
      `From: ${submission.name}`,
      `Email: ${submission.email}`,
      `Subject: ${submission.subject}`,
      "",
      submission.message,
    ].join("\n"),
    html: `
      <div style="margin:0;padding:32px 16px;background:#0b1220;font-family:Inter,Segoe UI,sans-serif;color:#e2e8f0">
        <div style="max-width:600px;margin:0 auto">
          <div style="padding:28px;border-radius:16px 16px 0 0;background:#6555ed;text-align:center">
            <h1 style="margin:0;color:#fff;font-size:24px">New website enquiry</h1>
          </div>
          <div style="padding:28px;border-radius:0 0 16px 16px;background:#1e2b3b">
            <div style="margin-bottom:20px;padding:20px;border-radius:12px;background:#344157">
              <p style="margin:0 0 8px"><strong>From:</strong> ${name}</p>
              <p style="margin:0 0 8px"><strong>Email:</strong> <a href="mailto:${email}" style="color:#b9b0ff">${email}</a></p>
              <p style="margin:0"><strong>Subject:</strong> ${subject}</p>
            </div>
            <div style="padding:20px;border-left:4px solid #7a6cff;border-radius:8px;background:#0b1220;line-height:1.7">
              ${message}
            </div>
          </div>
          <p style="margin:18px 0 0;color:#64748b;text-align:center;font-size:12px">Sent from the INTAVOR contact form</p>
        </div>
      </div>
    `,
    disableFileAccess: true,
    disableUrlAccess: true,
  };
}

export function buildAutoReplyEmail(
  submission: ContactSubmission,
  config: MailConfig,
): ContactEmail {
  const name = escapeHtml(submission.name);
  const subject = escapeHtml(submission.subject);
  const message = withLineBreaks(submission.message);

  return {
    from: { name: "INTAVOR", address: config.fromEmail },
    to: submission.email,
    replyTo: config.fromEmail,
    subject: `We received your message — ${submission.subject}`,
    headers: {
      "Auto-Submitted": "auto-replied",
      "X-Auto-Response-Suppress": "All",
    },
    text: [
      `Hi ${submission.name},`,
      "",
      "Thank you for contacting INTAVOR. Your message has been received, and a response will follow as soon as possible.",
      "",
      `Subject: ${submission.subject}`,
      submission.message,
      "",
      "INTAVOR",
      "Tech built with intention.",
      config.fromEmail,
    ].join("\n"),
    html: `
      <div style="margin:0;padding:32px 16px;background:#0b1220;font-family:Inter,Segoe UI,sans-serif;color:#e2e8f0">
        <div style="max-width:600px;margin:0 auto">
          <div style="padding:28px;border-radius:16px 16px 0 0;background:#6555ed;text-align:center">
            <h1 style="margin:0;color:#fff;font-size:24px">Message received</h1>
          </div>
          <div style="padding:28px;border-radius:0 0 16px 16px;background:#1e2b3b">
            <p style="margin:0 0 18px;line-height:1.7">Hi <strong>${name}</strong>,</p>
            <p style="margin:0 0 22px;line-height:1.7;color:#cbd5e1">Thank you for contacting INTAVOR. Your message has been received, and a response will follow as soon as possible.</p>
            <div style="padding:20px;border-radius:12px;background:#344157">
              <p style="margin:0 0 12px"><strong>Subject:</strong> ${subject}</p>
              <div style="padding:16px;border-radius:8px;background:#1e2b3b;line-height:1.7">${message}</div>
            </div>
            <div style="margin-top:24px;padding-top:22px;border-top:1px solid #344157;text-align:center">
              <p style="margin:0 0 14px;color:#cbd5e1">Best regards,</p>
              <img src="https://intavor.co.ke/brand/intavor-logo-on-dark.png" alt="INTAVOR — Tech built with intention." width="170" height="41" style="display:block;width:170px;height:auto;margin:0 auto;border:0" />
            </div>
          </div>
          <p style="margin:18px 0 0;color:#64748b;text-align:center;font-size:12px">You received this confirmation because this address was entered on the INTAVOR website.</p>
        </div>
      </div>
    `,
    disableFileAccess: true,
    disableUrlAccess: true,
  };
}

export async function sendContactEmails(submission: ContactSubmission) {
  const config = readMailConfig(process.env);
  const transporter = nodemailer.createTransport({
    host: config.smtpHost,
    port: config.smtpPort,
    secure: config.smtpPort === 465,
    requireTLS: config.smtpPort !== 465,
    auth: {
      user: config.smtpUser,
      pass: config.smtpPassword,
    },
    connectionTimeout: 10_000,
    greetingTimeout: 10_000,
    socketTimeout: 20_000,
    tls: {
      minVersion: "TLSv1.2",
    },
  });

  // Send the project enquiry to the configured mailbox.
  await transporter.sendMail(buildNotificationEmail(submission, config));

  // Send an auto-reply confirmation when a template is configured.
  try {
    await transporter.sendMail(buildAutoReplyEmail(submission, config));
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Unknown delivery error";
    console.error("Contact auto-reply delivery failed:", message);
  }
}
