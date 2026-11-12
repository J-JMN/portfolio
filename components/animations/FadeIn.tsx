interface FadeInProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  duration?: number;
  fullWidth?: boolean;
}

export default function FadeIn({
  children,
  className = "",
  direction = "up",
  fullWidth = false,
}: FadeInProps) {
  return (
    <div
      className={`reveal reveal-${direction} ${className}`}
      style={{ width: fullWidth ? "100%" : "auto" }}
    >
      {children}
    </div>
  );
}
