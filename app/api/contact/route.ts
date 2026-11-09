import { sendContactEmails } from "@/lib/contact-email";
import { createContactHandler } from "@/lib/contact-handler";
import { consumeContactRateLimit } from "@/lib/contact-rate-limit";

export const runtime = "nodejs";
export const maxDuration = 30;

export const POST = createContactHandler({
  deliver: sendContactEmails,
  rateLimit: consumeContactRateLimit,
  onError: (error) => {
    const message =
      error instanceof Error ? error.message : "Unknown delivery error";
    console.error("Contact email delivery failed:", message);
  },
});