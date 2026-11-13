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
  const replySubject = encodeURIComponent(`Re: ${submission.subject}`);

  return {
    from: { name: "INTAVOR", address: config.fromEmail },
    to: config.toEmail,
    replyTo: { name: submission.name, address: submission.email },
    subject: `🔔 New Inquiry: ${submission.subject}`,
    text: [
      "New website enquiry",
      "",
      `From: ${submission.name}`,
      `Email: ${submission.email}`,
      `Subject: ${submission.subject}`,
      "",
      submission.message,
    ].join("\n"),
    html: `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; background-color: #0B1220; font-family: Inter, 'Segoe UI', sans-serif;">
  <div style="max-width: 600px; margin: 0 auto; padding: 40px 20px;">

    <!-- Header -->
    <div style="background: linear-gradient(135deg, #7A6CFF 0%, #6555ED 100%); border-radius: 16px 16px 0 0; padding: 30px; text-align: center;">
      <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: 700;">📬 New Message Received</h1>
      <p style="color: rgba(255,255,255,0.8); margin: 10px 0 0; font-size: 14px;">Someone reached out through the INTAVOR website</p>
    </div>

    <!-- Content -->
    <div style="background-color: #1E2B3B; padding: 30px; border-radius: 0 0 16px 16px;">

      <!-- Sender Info -->
      <div style="background-color: #344157; border-radius: 12px; padding: 20px; margin-bottom: 20px;">
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 8px 0; color: #94a3b8; font-size: 13px; width: 80px;">From</td>
            <td style="padding: 8px 0; color: #f1f5f9; font-size: 15px; font-weight: 600;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #94a3b8; font-size: 13px;">Email</td>
            <td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #A99CFF; text-decoration: none; font-size: 15px;">${email}</a></td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #94a3b8; font-size: 13px;">Subject</td>
            <td style="padding: 8px 0; color: #f1f5f9; font-size: 15px;">${subject}</td>
          </tr>
        </table>
      </div>

      <!-- Message -->
      <div style="background-color: #0B1220; border-left: 4px solid #7A6CFF; border-radius: 8px; padding: 20px;">
        <h3 style="color: #e2e8f0; margin: 0 0 15px; font-size: 14px; text-transform: uppercase; letter-spacing: 1px;">Message</h3>
        <p style="color: #cbd5e1; line-height: 1.7; margin: 0; white-space: pre-wrap; font-size: 15px;">${message}</p>
      </div>

      <!-- Action Button -->
      <div style="text-align: center; margin-top: 25px;">
        <a href="mailto:${email}?subject=${replySubject}" style="display: inline-block; background: linear-gradient(135deg, #7A6CFF 0%, #6555ED 100%); color: #ffffff; text-decoration: none; padding: 14px 32px; border-radius: 8px; font-weight: 600; font-size: 14px;">↩️ Reply Now</a>
      </div>

    </div>

    <!-- Footer -->
    <p style="text-align: center; color: #64748b; font-size: 12px; margin-top: 20px;">Sent from the INTAVOR contact form</p>

  </div>
</body>
</html>`,
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
    subject: `✅ Got your message! - ${submission.subject}`,
    headers: {
      "Auto-Submitted": "auto-replied",
      "X-Auto-Response-Suppress": "All",
    },
    text: [
      `Hi ${submission.name},`,
      "",
      "Thank you for contacting INTAVOR. Your message has been received, and a response will follow within 24-48 hours.",
      "",
      `Subject: ${submission.subject}`,
      submission.message,
      "",
      "INTAVOR",
      "Tech built with intention.",
      config.fromEmail,
    ].join("\n"),
    html: `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; background-color: #0B1220; font-family: Inter, 'Segoe UI', sans-serif;">
  <div style="max-width: 600px; margin: 0 auto; padding: 40px 20px;">

    <!-- Header -->
    <div style="background: linear-gradient(135deg, #7A6CFF 0%, #6555ED 100%); border-radius: 16px 16px 0 0; padding: 30px; text-align: center;">
      <div style="width: 60px; height: 60px; background: rgba(255,255,255,0.2); border-radius: 50%; margin: 0 auto 15px; text-align: center; line-height: 60px; font-size: 28px;">✉️</div>
      <h1 style="color: #ffffff; margin: 0; font-size: 22px; font-weight: 700;">Message Received!</h1>
    </div>

    <!-- Content -->
    <div style="background-color: #1E2B3B; padding: 30px; border-radius: 0 0 16px 16px;">

      <p style="color: #e2e8f0; font-size: 16px; line-height: 1.6; margin: 0 0 20px;">Hi <strong>${name}</strong>,</p>

      <p style="color: #cbd5e1; font-size: 15px; line-height: 1.7; margin: 0 0 20px;">Thank you for contacting INTAVOR. Your message has been received and a response will follow within <strong style="color: #A99CFF;">24-48 hours</strong>.</p>

      <!-- Auto-reply notice -->
      <div style="background-color: #fef3c7; border-radius: 8px; padding: 12px 16px; margin-bottom: 20px;">
        <p style="color: #92400e; font-size: 13px; margin: 0;"><strong>This is an automated confirmation.</strong> I'll personally respond soon!</p>
      </div>

      <!-- Message Copy -->
      <div style="background-color: #344157; border-radius: 12px; padding: 20px; margin-bottom: 25px;">
        <h3 style="color: #94a3b8; margin: 0 0 15px; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Your Message</h3>
        <p style="color: #e2e8f0; font-size: 14px; margin: 0 0 10px;"><strong>Subject:</strong> ${subject}</p>
        <div style="background-color: #1E2B3B; border-radius: 8px; padding: 15px; margin-top: 10px;">
          <p style="color: #cbd5e1; line-height: 1.6; margin: 0; white-space: pre-wrap; font-size: 14px;">${message}</p>
        </div>
      </div>

      <!-- Signature -->
      <div style="margin-top: 25px; padding-top: 20px; border-top: 1px solid #344157; text-align: center;">
        <p style="color: #cbd5e1; font-size: 15px; margin: 0 0 15px;">Best regards,</p>
        <img src="https://intavor.co.ke/brand/intavor-logo-on-dark.png" alt="INTAVOR — Tech built with intention." width="170" height="41" style="display: block; margin: 0 auto; max-width: 170px; height: auto; border: 0;" />
      </div>

    </div>

    <!-- Footer -->
    <p style="text-align: center; color: #64748b; font-size: 11px; margin-top: 20px;">You're receiving this because you contacted INTAVOR through the website.<br/>Reply directly to this email if you have questions.</p>

  </div>
</body>
</html>`,
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
