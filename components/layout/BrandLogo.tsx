import Image from "next/image";
import { cn } from "@/lib/utils";

interface BrandLogoProps {
  className?: string;
  full?: boolean;
  priority?: boolean;
}

export default function BrandLogo({
  className,
  full = false,
  priority = false,
}: BrandLogoProps) {
  if (full) {
    return (
      <Image
        src="/brand/intavor-logo-on-dark.png"
        alt="INTAVOR — Tech built with intention."
        width={1500}
        height={360}
        priority={priority}
        className={cn("h-auto w-full object-contain", className)}
      />
    );
  }

  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <Image
        src="/brand/intavor-symbol-gradient.svg"
        alt=""
        width={720}
        height={370}
        priority={priority}
        className="h-6 w-11 object-contain"
      />
      <span className="text-base font-semibold tracking-[0.22em] text-foreground">
        INTAVOR
      </span>
    </span>
  );
}
