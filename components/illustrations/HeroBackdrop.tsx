const FX = 1050;
const FY = 400;
const starts = [70, 150, 215, 300, 360, 430, 470, 520, 580, 640, 700, 760, 110, 250];

const lines = starts.map((y0, i) => {
  const d = (i - (starts.length - 1) / 2) * 6;
  const bend = (i % 2 ? 1 : -1) * (60 + (i % 4) * 25);
  return `M -40 ${y0} C 320 ${y0 + bend}, 720 ${FY + d * 4}, ${FX} ${FY + d} S 1340 ${FY + d * 5}, 1480 ${FY + d * 6}`;
});

const svgProps = {
  viewBox: "0 0 1440 800",
  preserveAspectRatio: "xMidYMid slice",
  className: "absolute inset-0 h-full w-full will-change-transform",
  "aria-hidden": true,
} as const;

export default function HeroBackdrop() {
  return (
    <div className="absolute inset-0">
      <div className="absolute inset-0 will-change-transform bg-[linear-gradient(to_right,rgb(155_168_188/0.07)_1px,transparent_1px),linear-gradient(to_bottom,rgb(155_168_188/0.07)_1px,transparent_1px)] bg-size-[56px_56px] mask-[radial-gradient(60%_70%_at_72%_50%,#000,transparent)]" />
      <div className="absolute inset-0 will-change-transform bg-[radial-gradient(40%_50%_at_72%_50%,rgb(113_99_255/0.2),transparent)]" />
      <svg {...svgProps}>
        <defs>
          <linearGradient id="hero-line" x1="0" y1="0" x2="1440" y2="0" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#7163FF" stopOpacity="0.05" />
            <stop offset="0.45" stopColor="#8E82FF" stopOpacity="0.14" />
            <stop offset="0.72" stopColor="#A99CFF" stopOpacity="0.42" />
            <stop offset="1" stopColor="#7163FF" stopOpacity="0.1" />
          </linearGradient>
        </defs>
        {lines.map((d, i) => (
          <path key={i} d={d} fill="none" stroke="url(#hero-line)" strokeWidth="1.2" />
        ))}
      </svg>
      <svg {...svgProps}>
        {lines.map((d, i) =>
          i % 3 === 0 ? (
            <path
              key={i}
              d={d}
              pathLength={1000}
              fill="none"
              stroke="#C8C1FF"
              strokeOpacity="0.7"
              strokeWidth="1.8"
              strokeLinecap="round"
              className="dash-flow"
              style={{ animationDuration: `${7 + (i % 4)}s`, animationDelay: `${i * 0.9}s` }}
            />
          ) : null,
        )}
      </svg>
    </div>
  );
}
