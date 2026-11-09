import { describe, expect, it } from "vitest";
import { contactFormSchema } from "./contact";

const validSubmission = {
  name: "Jane Doe",
  email: "jane@example.com",
  subject: "Website support",
  message: "I would like help maintaining our website.",
  honeypot: "",
};

describe("contactFormSchema", () => {
  it("trims and normalizes a valid submission", () => {
    const result = contactFormSchema.parse({
      ...validSubmission,
      name: "  Jane Doe  ",
      email: "  JANE@EXAMPLE.COM  ",
      subject: "  Website support  ",
      message: "  I would like help maintaining our website.  ",
    });

    expect(result).toEqual(validSubmission);
  });

  it("rejects header line breaks and oversized fields", () => {
    const result = contactFormSchema.safeParse({
      ...validSubmission,
      subject: "Website support\nBcc: victim@example.com",
      message: "x".repeat(5001),
    });

    expect(result.success).toBe(false);
  });

  it("rejects unknown fields", () => {
    const result = contactFormSchema.safeParse({
      ...validSubmission,
      recipient: "attacker@example.com",
    });

    expect(result.success).toBe(false);
  });
});
