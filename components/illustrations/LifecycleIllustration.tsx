"use client";

import { motion } from "framer-motion";
import { useLoop } from "@/components/illustrations/useLoop";

const chips = [
  { title: "Websites", sub: "Clarity & presence", x: 16, y: 24, icon: "M-6 -5 L-11 0 L-6 5 M6 -5 L11 0 L6 5", color: "#A99CFF", line: "M100 86 C 100 126, 126 146, 150 158" },
  { title: "Applications", sub: "Tools & workflows", x: 454, y: 36, icon: "M7 -5 A9 9 0 1 0 9 3 M7 -11 V-5 H1", color: "#A99CFF", line: "M540 98 C 540 128, 516 142, 490 150" },
  { title: "Support", sub: "Optional care plan", x: 8, y: 404, icon: "M-9 -4 H9 M-9 4 H9 M-3 -8 V0 M3 0 V8", color: "#8BE8CE", line: "M92 404 C 92 366, 120 336, 150 326" },
];

export default function LifecycleIllustration() {
  const loop = useLoop();

  return (
    <svg viewBox="0 0 640 480" className="h-auto w-full" role="img" aria-labelledby="lifecycle-title">
      <title id="lifecycle-title">Website, web application, and optional after-launch support services</title>
      <defs>
        <radialGradient id="lc-glow" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="#7163FF" stopOpacity="0.22" />
          <stop offset="1" stopColor="#7163FF" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="lc-hero" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#7A6CFF" />
          <stop offset="1" stopColor="#4A3DBF" />
        </linearGradient>
      </defs>

      <circle cx="320" cy="250" r="250" fill="url(#lc-glow)" />

      {chips.map((chip, i) => (
        <g key={chip.title}>
          <path d={chip.line} fill="none" stroke="#4D5A72" strokeWidth="2" strokeDasharray="6 8" />
          <motion.path d={chip.line} fill="none" stroke={chip.color} strokeWidth="2" strokeDasharray="6 8" {...loop({ strokeDashoffset: [0, -28] }, 1.2, 0, "linear")} opacity="0.8" />
          <motion.g {...loop({ y: [0, -6, 0] }, 5 + i, i * 0.5)}>
            <rect x={chip.x} y={chip.y} width="176" height="64" rx="16" fill="#142034" stroke="#3A4A68" />
            <rect x={chip.x + 14} y={chip.y + 16} width="32" height="32" rx="9" fill={chip.color} fillOpacity="0.16" />
            <path d={chip.icon} transform={`translate(${chip.x + 30} ${chip.y + 32})`} stroke={chip.color} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            <text x={chip.x + 58} y={chip.y + 30} fill="#F5F5F6" fontSize="19" fontWeight="700" className="font-heading">{chip.title}</text>
            <text x={chip.x + 58} y={chip.y + 49} fill="#AEB8C8" fontSize="13" className="font-sans">{chip.sub}</text>
          </motion.g>
        </g>
      ))}

      <rect x="150" y="110" width="340" height="250" rx="18" fill="#0F1A2B" stroke="#4A5870" strokeWidth="1.5" />
      <path d="M150 128 A18 18 0 0 1 168 110 H472 A18 18 0 0 1 490 128 V144 H150 Z" fill="#162236" />
      <circle cx="170" cy="127" r="4.5" fill="#FF8F85" />
      <circle cx="186" cy="127" r="4.5" fill="#FFD378" />
      <circle cx="202" cy="127" r="4.5" fill="#67CBB0" />
      <rect x="220" y="119" width="170" height="17" rx="8.5" fill="#0B1423" />
      <motion.circle cx="424" cy="127" r="4" fill="#8BE8CE" stroke="#8BE8CE" {...loop({ r: [4, 9], opacity: [0.6, 0] }, 1.8, 0, "easeOut")} />
      <circle cx="424" cy="127" r="4" fill="#8BE8CE" />
      <text x="435" y="132" fill="#A7F3DB" fontSize="13" fontWeight="600" className="font-sans">Live</text>

      <rect x="168" y="160" width="304" height="100" rx="12" fill="url(#lc-hero)" />
      <circle cx="424" cy="210" r="30" fill="#fff" fillOpacity="0.12" />
      <path d="M408 218 L424 200 L440 218" stroke="#fff" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <rect x="186" y="180" width="140" height="12" rx="6" fill="#fff" />
      <rect x="186" y="202" width="190" height="7" rx="3.5" fill="#fff" fillOpacity="0.6" />
      <rect x="186" y="216" width="150" height="7" rx="3.5" fill="#fff" fillOpacity="0.4" />
      <rect x="186" y="232" width="72" height="17" rx="8.5" fill="#fff" />
      <motion.circle cx="222" cy="240" r="6" fill="none" stroke="#fff" strokeWidth="2" initial={{ opacity: 0 }} {...loop({ r: [6, 22], opacity: [0, 0, 0.8, 0] }, 5, 0, "easeOut", { times: [0, 0.38, 0.42, 0.6] })} />

      {[168, 272, 376].map((x, i) => (
        <motion.g key={x} {...loop({ opacity: [1, 0.55, 1] }, 4, i * 0.6)}>
          <rect x={x} y="274" width="96" height="70" rx="10" fill="#172337" stroke="#2E3C56" />
          <circle cx={x + 18} cy="294" r="9" fill={i === 1 ? "#67CBB0" : "#7163FF"} fillOpacity="0.3" />
          <rect x={x + 12} y="312" width="60" height="7" rx="3.5" fill="#F5F5F6" fillOpacity="0.8" />
          <rect x={x + 12} y="325" width="72" height="6" rx="3" fill="#8190A6" fillOpacity="0.5" />
        </motion.g>
      ))}

      <motion.g initial={{ x: 330, y: 320 }} {...loop({ x: [330, 214, 214, 330], y: [320, 236, 236, 320] }, 5, 0, "easeInOut", { times: [0, 0.38, 0.6, 1] })}>
        <path d="M0 0 L0 19 L5 14 L9 22 L12.5 20.5 L8.5 12.5 L15 12.5 Z" fill="#fff" stroke="#0B1220" strokeWidth="1.5" strokeLinejoin="round" />
      </motion.g>

      <motion.g {...loop({ y: [0, -8, 0] }, 6, 1)}>
        <rect x="474" y="230" width="118" height="222" rx="22" fill="#0A1321" stroke="#63718A" strokeWidth="1.5" />
        <rect x="483" y="242" width="100" height="198" rx="15" fill="#111D30" />
        <rect x="515" y="248" width="36" height="5" rx="2.5" fill="#344157" />
        <rect x="491" y="262" width="84" height="58" rx="9" fill="url(#lc-hero)" />
        <rect x="500" y="276" width="46" height="7" rx="3.5" fill="#fff" />
        <rect x="500" y="290" width="60" height="5" rx="2.5" fill="#fff" fillOpacity="0.6" />
        <rect x="500" y="302" width="30" height="10" rx="5" fill="#fff" />
        {[332, 368, 404].map((y, i) => (
          <g key={y}>
            <rect x="491" y={y} width="84" height="28" rx="8" fill="#172337" />
            <circle cx="504" cy={y + 14} r="5" fill={i === 1 ? "#67CBB0" : "#7163FF"} fillOpacity="0.7" />
            <rect x="515" y={y + 11} width="50" height="6" rx="3" fill="#F5F5F6" fillOpacity="0.7" />
          </g>
        ))}
      </motion.g>
    </svg>
  );
}
