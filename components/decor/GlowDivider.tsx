import { cn } from "@/lib/utils";

export default function GlowDivider({ className }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-x-0 top-0 h-px overflow-hidden bg-linear-to-r from-transparent via-[#7a6cff]/40 to-transparent",
        className,
      )}
    >
      <span className="glint absolute inset-y-0 left-0 w-48 bg-linear-to-r from-transparent via-[#c8c1ff] to-transparent" />
    </div>
  );
}
