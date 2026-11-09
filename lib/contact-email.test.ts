import { describe, expect, it } from "vitest";
import {
  buildAutoReplyEmail,
  buildNotificationEmail,
  readMailConfig,
} from "./contact-email";

const submission = {
  name: "Jane <script>alert(1)</script>",
  email: "jane@example.com",
  subject: "A new <website>",
  message: "Hello & welcome\n<script>alert(1)</script>",
};

const config = {
  smtpHost: "smtp.zoho.com",
  smtpPort: 465,
  smtpUser: "business@intavor.co.ke",
  smtpPassword: "secret",
  fromEmail: "contact@intavor.co.ke",
  toEmail: "contact@intavor.co.ke",
};

describe("contact email configuration", () => {
  it("uses Zoho and INTAVOR domain defaults", () => {
    expect(readMailConfig({ SMTP_PASSWORD: "secret" })).toEqual(config);
  });

  it("requires an SMTP password", () => {
    expect(() => readMailConfig({})).toThrow(
      "SMTP configuration is incomplete",
    );
  });
});

describe("contact email messages", () => {
  it("routes the notification to the domain mailbox with visitor reply-to", () => {
    const email = buildNotificationEmail(submission, config);

    expect(email.from).toEqual({
      name: "INTAVOR Website",
      address: "contact@intavor.co.ke",
    });
    expect(email.to).toBe("contact@intavor.co.ke");
    expect(email.replyTo).toEqual({
      name: submission.name,
      address: submission.email,
    });
    expect(email.html).toContain("Jane &lt;script&gt;alert(1)&lt;/script&gt;");
    expect(email.html).not.toContain("<script>alert(1)</script>");
  });

  it("sends the auto-reply from the domain mailbox", () => {
    const email = buildAutoReplyEmail(submission, config);

    expect(email.from).toEqual({
      name: "INTAVOR",
      address: "contact@intavor.co.ke",
    });
    expect(email.to).toBe(submission.email);
    expect(email.replyTo).toBe("contact@intavor.co.ke");
    expect(email.headers).toMatchObject({
      "Auto-Submitted": "auto-replied",
      "X-Auto-Response-Suppress": "All",
    });
    expect(email.html).toContain("A new &lt;website&gt;");
    expect(email.html).not.toContain("<script>alert(1)</script>");
  });
});
