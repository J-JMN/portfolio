import { contactFormSchema, type ContactSubmission } from "./contact";
import type { RateLimitResult } from "./contact-rate-limit";

type ContactHandlerDependencies = {
  deliver: (submission: ContactSubmission) => Promise<void>;
  rateLimit: (identifier: string) => RateLimitResult;
  onError: (error: unknown) => void;
};

const maximumBodySize = 12_000;

function jsonResponse(
  body: Record<string, string | boolean>,
  status: number,
  headers?: HeadersInit,
) {
  return Response.json(body, { status, headers });
}

function isSameOrigin(request: Request) {
  const origin = request.headers.get("origin");

  if (!origin) {
    return false;
  }

  try {
    return new URL(origin).origin === new URL(request.url).origin;
  } catch {
    return false;
  }
}

function getClientIdentifier(request: Request) {
  const forwardedFor = request.headers.get("x-forwarded-for");
  const address = forwardedFor?.split(",")[0]?.trim();

  if (address) {
    return address;
  }

  return `unknown:${request.headers.get("user-agent")?.slice(0, 120) ?? ""}`;
}

export function createContactHandler({
  deliver,
  rateLimit,
  onError,
}: ContactHandlerDependencies) {
  return async (request: Request) => {
    if (!isSameOrigin(request)) {
      return jsonResponse({ error: "Request origin is not allowed." }, 403);
    }

    if (!request.headers.get("content-type")?.includes("application/json")) {
      return jsonResponse({ error: "Request must use JSON." }, 415);
    }

    const contentLength = Number(request.headers.get("content-length"));

    if (Number.isFinite(contentLength) && contentLength > maximumBodySize) {
      return jsonResponse({ error: "Message is too large." }, 413);
    }

    let body: unknown;

    try {
      body = await request.json();
    } catch {
      return jsonResponse({ error: "Request body is invalid." }, 400);
    }

    const parsed = contactFormSchema.safeParse(body);

    if (!parsed.success) {
      return jsonResponse(
        { error: "Please check the form fields and try again." },
        400,
      );
    }

    const { honeypot, ...submission } = parsed.data;

    if (honeypot) {
      return jsonResponse({ ok: true }, 200);
    }

    const rateLimitResult = rateLimit(getClientIdentifier(request));

    if (!rateLimitResult.allowed) {
      return jsonResponse(
        { error: "Too many messages. Please try again later." },
        429,
        { "Retry-After": String(rateLimitResult.retryAfterSeconds) },
      );
    }

    try {
      await deliver(submission);
      return jsonResponse({ ok: true }, 200);
    } catch (error) {
      onError(error);
      return jsonResponse(
        {
          error:
            "Message delivery is temporarily unavailable. Please try again.",
        },
        503,
      );
    }
  };
}
