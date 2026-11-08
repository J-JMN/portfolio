import { cn } from "@/lib/utils";

export default function DotGrid({ className }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute -z-10 bg-[radial-gradient(#a99cff_1.2px,transparent_1.2px)] bg-size-[18px_18px] opacity-35 mask-[radial-gradient(closest-side,#000,transparent)]",
        className,
      )}
    />
  );
}
