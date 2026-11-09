import { beforeEach, describe, expect, it, vi } from "vitest";
import { createContactHandler } from "./contact-handler";
import { createContactRateLimiter } from "./contact-rate-limit";

const validSubmission = {
  name: "Jane Doe",
  email: "jane@example.com",
  subject: "Website support",
  message: "I would like help maintaining our website.",
  honeypot: "",
};

function createRequest(
  body: unknown,
  headers: Record<string, string> = {},
) {
  return new Request("https://intavor.co.ke/api/contact", {
    method: "POST",
    headers: {
      "content-type": "application/json",
      origin: "https://intavor.co.ke",
      "x-forwarded-for": "203.0.113.10",
      ...headers,
    },
    body: JSON.stringify(body),
  });
}

describe("contact handler", () => {
  const deliver = vi.fn();
  const rateLimit = vi.fn();
  const onError = vi.fn();
  const handler = createContactHandler({ deliver, rateLimit, onError });

  beforeEach(() => {
    deliver.mockReset().mockResolvedValue(undefined);
    rateLimit
      .mockReset()
      .mockReturnValue({ allowed: true, retryAfterSeconds: 0 });
    onError.mockReset();
  });

  it("delivers a valid same-origin submission", async () => {
    const response = await handler(createRequest(validSubmission));

    expect(response.status).toBe(200);
    expect(deliver).toHaveBeenCalledWith({
      name: validSubmission.name,
      email: validSubmission.email,
      subject: validSubmission.subject,
      message: validSubmission.message,
    });
    expect(rateLimit).toHaveBeenCalledWith("203.0.113.10");
  });

  it("rejects cross-origin requests", async () => {
    const response = await handler(
      createRequest(validSubmission, { origin: "https://example.com" }),
    );

    expect(response.status).toBe(403);
    expect(deliver).not.toHaveBeenCalled();
  });

  it("rejects invalid submissions", async () => {
    const response = await handler(
      createRequest({ ...validSubmission, email: "not-an-email" }),
    );

    expect(response.status).toBe(400);
    expect(deliver).not.toHaveBeenCalled();
  });

  it("silently accepts honeypot submissions without sending", async () => {
    const response = await handler(
      createRequest({ ...validSubmission, honeypot: "https://spam.test" }),
    );

    expect(response.status).toBe(200);
    expect(rateLimit).not.toHaveBeenCalled();
    expect(deliver).not.toHaveBeenCalled();
  });

  it("returns a retry interval when rate limited", async () => {
    rateLimit.mockReturnValue({
      allowed: false,
      retryAfterSeconds: 120,
    });

    const response = await handler(createRequest(validSubmission));

    expect(response.status).toBe(429);
    expect(response.headers.get("retry-after")).toBe("120");
    expect(deliver).not.toHaveBeenCalled();
  });

  it("does not expose delivery errors", async () => {
    const error = new Error("SMTP authentication failed");
    deliver.mockRejectedValue(error);

    const response = await handler(createRequest(validSubmission));
    const body = await response.json();

    expect(response.status).toBe(503);
    expect(body).toEqual({
      error: "Message delivery is temporarily unavailable. Please try again.",
    });
    expect(JSON.stringify(body)).not.toContain(error.message);
    expect(onError).toHaveBeenCalledWith(error);
  });
});

describe("contact rate limiter", () => {
  it("limits repeated submissions and resets after the window", () => {
    const rateLimit = createContactRateLimiter({
      limit: 2,
      windowMs: 60_000,
    });

    expect(rateLimit("203.0.113.10", 1_000).allowed).toBe(true);
    expect(rateLimit("203.0.113.10", 2_000).allowed).toBe(true);
    expect(rateLimit("203.0.113.10", 3_000)).toEqual({
      allowed: false,
      retryAfterSeconds: 58,
    });
    expect(rateLimit("203.0.113.10", 61_001).allowed).toBe(true);
  });
});
