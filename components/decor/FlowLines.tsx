const paths = [
  "M0 90 C 360 20, 1080 170, 1440 80",
  "M0 150 C 420 90, 1020 230, 1440 150",
  "M0 230 C 380 300, 1060 120, 1440 220",
  "M0 290 C 460 340, 980 210, 1440 300",
];

export default function FlowLines() {
  return (
    <svg
      viewBox="0 0 1440 360"
      preserveAspectRatio="none"
      className="pointer-events-none absolute inset-0 -z-10 h-full w-full"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="flow-fade" x1="0" y1="0" x2="1440" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#A99CFF" stopOpacity="0.4" />
          <stop offset="0.3" stopColor="#A99CFF" stopOpacity="0.08" />
          <stop offset="0.7" stopColor="#A99CFF" stopOpacity="0.08" />
          <stop offset="1" stopColor="#A99CFF" stopOpacity="0.4" />
        </linearGradient>
      </defs>
      {paths.map((d) => (
        <path key={d} d={d} fill="none" stroke="url(#flow-fade)" strokeWidth="1.2" vectorEffect="non-scaling-stroke" />
      ))}
      {paths.map((d, i) => (
        <path
          key={`pulse-${d}`}
          d={d}
          pathLength={1000}
          fill="none"
          stroke="#C8C1FF"
          strokeOpacity="0.6"
          strokeWidth="1.6"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
          className="dash-flow"
          style={{
            animationDuration: `${10 + i * 2}s`,
            animationDelay: `${i * 1.3}s`,
            animationDirection: i % 2 ? "reverse" : "normal",
          }}
        />
      ))}
    </svg>
  );
}
