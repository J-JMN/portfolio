export type RateLimitResult = {
  allowed: boolean;
  retryAfterSeconds: number;
};

type RateLimiterOptions = {
  limit: number;
  windowMs: number;
};

type RateLimitBucket = {
  count: number;
  resetAt: number;
};

export function createContactRateLimiter({
  limit,
  windowMs,
}: RateLimiterOptions) {
  const buckets = new Map<string, RateLimitBucket>();

  return (identifier: string, now = Date.now()): RateLimitResult => {
    if (buckets.size > 1000) {
      for (const [key, bucket] of buckets) {
        if (bucket.resetAt <= now) {
          buckets.delete(key);
        }
      }
    }

    const bucket = buckets.get(identifier);

    if (!bucket || bucket.resetAt <= now) {
      buckets.set(identifier, { count: 1, resetAt: now + windowMs });
      return { allowed: true, retryAfterSeconds: 0 };
    }

    if (bucket.count >= limit) {
      return {
        allowed: false,
        retryAfterSeconds: Math.max(
          1,
          Math.ceil((bucket.resetAt - now) / 1000),
        ),
      };
    }

    bucket.count += 1;
    return { allowed: true, retryAfterSeconds: 0 };
  };
}

export const consumeContactRateLimit = createContactRateLimiter({
  limit: 5,
  windowMs: 60 * 60 * 1000,
});
