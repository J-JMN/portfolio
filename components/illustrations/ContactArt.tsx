"use client";

import { motion } from "framer-motion";
import { useLoop } from "@/components/illustrations/useLoop";

const cycle = 9;

export default function ContactArt() {
  const loop = useLoop();
  const reveal = (start: number) =>
    loop(
      { opacity: [0, 0, 1, 1, 0], y: [10, 10, 0, 0, 0] },
      cycle,
      0,
      "easeOut",
      { times: [0, start, start + 0.06, 0.9, 1] },
    );

  return (
    <svg viewBox="0 0 620 285" className="h-auto w-full" role="img" aria-labelledby="contact-art-title contact-art-desc">
      <title id="contact-art-title">A conversation about a new website</title>
      <desc id="contact-art-desc">
        A client says they need a website that works for them. INTAVOR asks about the business and what they have in mind.
      </desc>
      <defs>
        <linearGradient id="ca-bubble" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#7568F5" />
          <stop offset="1" stopColor="#5043BD" />
        </linearGradient>
        <radialGradient id="ca-glow" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="#7163FF" stopOpacity="0.16" />
          <stop offset="1" stopColor="#7163FF" stopOpacity="0" />
        </radialGradient>
        <filter id="ca-shadow" x="-30%" y="-40%" width="160%" height="190%">
          <feDropShadow dx="0" dy="12" stdDeviation="12" floodColor="#02050B" floodOpacity="0.4" />
        </filter>
      </defs>
      <ellipse cx="310" cy="125" rx="300" ry="125" fill="url(#ca-glow)" />

      <motion.g {...reveal(0.02)}>
        <path
          d="M84 28 H448 A20 20 0 0 1 468 48 V91 A20 20 0 0 1 448 111 H103 L78 128 L84 108 A20 20 0 0 1 64 88 V48 A20 20 0 0 1 84 28 Z"
          fill="#131F32"
          stroke="#3B4B68"
          strokeWidth="1.5"
          filter="url(#ca-shadow)"
        />
        <circle cx="36" cy="69" r="24" fill="#101B2D" stroke="#53627B" strokeWidth="1.5" />
        <path d="M25 82 V61 L36 55 L47 61 V82 M31 68 H33 M39 68 H41 M31 75 H33 M39 75 H41" stroke="#B8C3D4" strokeWidth="2.2" strokeLinecap="round" fill="none" />
        <text x="94" y="77" fill="#F7F7FA" fontSize="20" fontWeight="500" className="font-sans">
          We need a website that works for us.
        </text>
      </motion.g>

      <motion.g {...reveal(0.28)}>
        <path
          d="M176 132 H526 A20 20 0 0 1 546 152 V244 A20 20 0 0 1 526 264 H516 L548 281 L540 259 A20 20 0 0 1 526 264 H176 A20 20 0 0 1 156 244 V152 A20 20 0 0 1 176 132 Z"
          fill="url(#ca-bubble)"
          filter="url(#ca-shadow)"
        />
        <text x="184" y="164" fill="#FFFFFF" fontSize="16.5" fontWeight="600" className="font-sans">
          <tspan x="184" dy="0">We&apos;d be glad to help with that.</tspan>
          <tspan x="184" dy="23">Tell us a little about your business and</tspan>
          <tspan x="184" dy="23">what you have in mind, and we&apos;ll take it</tspan>
          <tspan x="184" dy="23">from there.</tspan>
        </text>
        <circle cx="582" cy="198" r="25" fill="#101A2B" stroke="#8174FF" strokeWidth="1.5" />
        <image href="/brand/intavor-symbol-gradient.svg" x="564" y="188.5" width="36" height="19" />
      </motion.g>
    </svg>
  );
}
