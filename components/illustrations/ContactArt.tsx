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
      { times: [0, start, start + 0.06, 0.92, 1] },
    );

  return (
    <svg viewBox="0 0 560 250" className="h-auto w-full" role="img" aria-labelledby="contact-art-title">
      <title id="contact-art-title">A short conversation starting a new website project</title>
      <defs>
        <linearGradient id="ca-bubble" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#7A6CFF" />
          <stop offset="1" stopColor="#5446D6" />
        </linearGradient>
        <radialGradient id="ca-glow" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="#7163FF" stopOpacity="0.18" />
          <stop offset="1" stopColor="#7163FF" stopOpacity="0" />
        </radialGradient>
      </defs>
      <ellipse cx="280" cy="125" rx="280" ry="125" fill="url(#ca-glow)" />

      <motion.g {...reveal(0.02)}>
        <circle cx="30" cy="57" r="22" fill="#172337" stroke="#3A4A68" />
        <path d="M21 68 V50 L30 45 L39 50 V68 M26 55 H28 M32 55 H34 M26 61 H28 M32 61 H34" stroke="#AEB8C8" strokeWidth="2" strokeLinecap="round" fill="none" />
        <path d="M64 30 H380 A16 16 0 0 1 396 46 V68 A16 16 0 0 1 380 84 H72 L62 92 L64 80 A16 16 0 0 1 64 30 Z" fill="#172337" stroke="#2E3C56" />
        <text x="84" y="63" fill="#F5F5F6" fontSize="16" className="font-sans">We need a website that works for us.</text>
      </motion.g>

      <motion.g {...reveal(0.22)}>
        <path d="M180 108 H480 A16 16 0 0 1 496 124 V146 A16 16 0 0 1 488 160 L494 170 L478 162 H180 A16 16 0 0 1 164 146 V124 A16 16 0 0 1 180 108 Z" fill="url(#ca-bubble)" />
        <text x="186" y="141" fill="#fff" fontSize="16" fontWeight="600" className="font-sans">Great. Let&apos;s start with your goals.</text>
        <circle cx="530" cy="140" r="22" fill="#111C2E" stroke="#7163FF" strokeOpacity="0.6" />
        <image href="/brand/intavor-symbol-gradient.svg" x="514" y="132" width="32" height="17" />
      </motion.g>

      <motion.g {...reveal(0.42)}>
        <circle cx="30" cy="212" r="22" fill="#172337" stroke="#3A4A68" />
        <path d="M21 223 V205 L30 200 L39 205 V223 M26 210 H28 M32 210 H34 M26 216 H28 M32 216 H34" stroke="#AEB8C8" strokeWidth="2" strokeLinecap="round" fill="none" />
        <rect x="64" y="190" width="92" height="44" rx="22" fill="#172337" stroke="#2E3C56" />
        {[88, 110, 132].map((cx, i) => (
          <motion.circle key={cx} cx={cx} cy="212" r="5" fill="#AEB8C8" {...loop({ y: [0, -5, 0] }, 0.9, i * 0.15)} />
        ))}
      </motion.g>
    </svg>
  );
}
