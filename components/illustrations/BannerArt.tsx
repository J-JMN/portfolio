interface BannerArtProps {
  id: string;
  children: React.ReactNode;
}

export default function BannerArt({ id, children }: BannerArtProps) {
  return (
    <svg
      viewBox="0 0 1440 640"
      preserveAspectRatio="xMaxYMid slice"
      className="h-full w-full"
      aria-hidden="true"
    >
      <defs>
        <pattern id={`${id}-grid`} width="48" height="48" patternUnits="userSpaceOnUse">
          <path d="M48 0H0V48" fill="none" stroke="#9BA8BC" strokeOpacity="0.06" />
        </pattern>
        <radialGradient id={`${id}-glow`} cx="0.75" cy="0.5" r="0.45">
          <stop offset="0" stopColor="#7163FF" stopOpacity="0.24" />
          <stop offset="1" stopColor="#7163FF" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="1440" height="640" fill="#0B1220" />
      <rect width="1440" height="640" fill={`url(#${id}-grid)`} />
      <rect width="1440" height="640" fill={`url(#${id}-glow)`} />
      {children}
    </svg>
  );
}
