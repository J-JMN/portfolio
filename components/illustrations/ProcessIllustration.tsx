"use client";

import { motion } from "framer-motion";
import { useLoop } from "@/components/illustrations/useLoop";

const sweep = { times: [0, 0.45, 0.8, 1] };

function Layout({ finished }: { finished: boolean }) {
  const stroke = finished ? "none" : "#5B6880";
  const dash = finished ? undefined : "6 6";
  const solid = (color: string, opacity = 1) => (finished ? { fill: color, fillOpacity: opacity } : { fill: "none" });

  return (
    <g stroke={stroke} strokeDasharray={dash} strokeWidth="1.5">
      <rect x="60" y="124" width="480" height="112" rx="12" {...(finished ? { fill: "url(#pi-hero)" } : { fill: "none" })} />
      <rect x="82" y="150" width="180" height="14" rx="7" {...solid("#fff")} />
      <rect x="82" y="176" width="240" height="8" rx="4" {...solid("#fff", 0.6)} />
      <rect x="82" y="192" width="200" height="8" rx="4" {...solid("#fff", 0.4)} />
      <rect x="82" y="210" width="84" height="18" rx="9" {...solid("#fff")} />
      <rect x="412" y="140" width="108" height="80" rx="10" {...solid("#fff", 0.14)} />
      {finished ? (
        <path d="M444 190 L466 166 L488 190" stroke="#fff" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeDasharray="none" />
      ) : (
        <path d="M412 140 L520 220 M520 140 L412 220" fill="none" />
      )}
      {[60, 224, 388].map((x, i) => (
        <g key={x}>
          <rect x={x} y="252" width="152" height="112" rx="12" {...solid("#172337")} />
          <rect x={x + 16} y="268" width="30" height="30" rx="9" {...solid(i === 1 ? "#67CBB0" : "#7163FF", 0.35)} />
          <rect x={x + 16} y="312" width="96" height="9" rx="4.5" {...solid("#F5F5F6", 0.85)} />
          <rect x={x + 16} y="330" width="118" height="7" rx="3.5" {...solid("#8190A6", 0.55)} />
          <rect x={x + 16} y="344" width="80" height="7" rx="3.5" {...solid("#8190A6", 0.35)} />
        </g>
      ))}
    </g>
  );
}

export default function ProcessIllustration() {
  const loop = useLoop();

  return (
    <svg viewBox="0 0 600 470" className="h-auto w-full" role="img" aria-labelledby="process-title">
      <title id="process-title">A website wireframe being turned into a finished, live design</title>
      <defs>
        <radialGradient id="pi-glow" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="#7163FF" stopOpacity="0.2" />
          <stop offset="1" stopColor="#7163FF" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="pi-hero" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#7A6CFF" />
          <stop offset="1" stopColor="#4A3DBF" />
        </linearGradient>
        <clipPath id="pi-reveal">
          <motion.rect
            y="118"
            height="252"
            initial={{ x: 300, width: 240 }}
            {...loop(
              {
                x: [540, 60, 60, 540],
                width: [0, 480, 480, 0],
              },
              9,
              0,
              "easeInOut",
              sweep,
            )}
          />
        </clipPath>
      </defs>

      <circle cx="300" cy="240" r="240" fill="url(#pi-glow)" />

      <rect x="40" y="70" width="520" height="316" rx="18" fill="#0F1A2B" stroke="#4A5870" strokeWidth="1.5" />
      <path d="M40 88 A18 18 0 0 1 58 70 H542 A18 18 0 0 1 560 88 V106 H40 Z" fill="#162236" />
      <circle cx="62" cy="88" r="5" fill="#FF8F85" />
      <circle cx="80" cy="88" r="5" fill="#FFD378" />
      <circle cx="98" cy="88" r="5" fill="#67CBB0" />
      <rect x="120" y="79" width="220" height="18" rx="9" fill="#0B1423" />

      <Layout finished={false} />
      <g clipPath="url(#pi-reveal)">
        <rect x="60" y="118" width="480" height="252" fill="#0F1A2B" />
        <Layout finished />
      </g>
      <motion.g
        initial={{ x: 240 }}
        {...loop({ x: [480, 0, 0, 480] }, 9, 0, "easeInOut", sweep)}
      >
        <rect x="54" y="112" width="12" height="264" fill="#A99CFF" opacity="0.18" />
        <line x1="60" y1="112" x2="60" y2="376" stroke="#C8C1FF" strokeWidth="2" />
      </motion.g>

      <g>
        <rect x="24" y="16" width="134" height="36" rx="18" fill="#111C2E" stroke="#5B6880" strokeDasharray="5 5" />
        <text x="91" y="39" textAnchor="middle" fill="#C9D1DE" fontSize="14" fontWeight="600" className="font-sans">Wireframe</text>
        <rect x="462" y="16" width="114" height="36" rx="18" fill="#111C2E" stroke="#3A4A68" />
        <circle cx="486" cy="34" r="5" fill="#8BE8CE" />
        <text x="530" y="39" textAnchor="middle" fill="#A7F3DB" fontSize="14" fontWeight="600" className="font-sans">Live site</text>
      </g>

      <motion.g {...loop({ y: [0, -7, 0] }, 5.5)}>
        <rect x="8" y="372" width="206" height="78" rx="16" fill="#142034" stroke="#3A4A68" />
        <circle cx="46" cy="411" r="16" fill="none" stroke="#A99CFF" strokeWidth="2" />
        <circle cx="46" cy="411" r="8" fill="none" stroke="#A99CFF" strokeWidth="2" />
        <circle cx="46" cy="411" r="2.5" fill="#A99CFF" />
        <text x="74" y="406" fill="#F5F5F6" fontSize="16" fontWeight="700" className="font-heading">Goal defined</text>
        <text x="74" y="426" fill="#AEB8C8" fontSize="12.5" className="font-sans">Audience · Purpose</text>
      </motion.g>

      <motion.g {...loop({ y: [0, -7, 0] }, 6.5, 0.8)}>
        <rect x="374" y="360" width="218" height="96" rx="16" fill="#142034" stroke="#3A4A68" />
        <text x="392" y="386" fill="#F5F5F6" fontSize="15" fontWeight="700" className="font-heading">Refined with care</text>
        <path d="M392 438 H574" stroke="#2E3C56" />
        <motion.path
          d="M392 436 L428 426 L462 430 L498 414 L532 410 L572 396"
          stroke="#8BE8CE"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          initial={{ pathLength: 1 }}
          {...loop({ pathLength: [0, 1, 1] }, 4, 0, "easeOut", { times: [0, 0.6, 1] })}
        />
        <circle cx="572" cy="396" r="4.5" fill="#8BE8CE" />
      </motion.g>
    </svg>
  );
}
