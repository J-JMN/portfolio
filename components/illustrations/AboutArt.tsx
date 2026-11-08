"use client";

import { motion } from "framer-motion";
import BannerArt from "@/components/illustrations/BannerArt";
import { useLoop } from "@/components/illustrations/useLoop";

const BASE = 520;

const towers = [
  { x: 770, w: 44, h: 96 },
  { x: 818, w: 58, h: 158 },
  { x: 880, w: 40, h: 118 },
  { x: 924, w: 64, h: 206 },
  { x: 992, w: 46, h: 146 },
  { x: 1042, w: 52, h: 262 },
  { x: 1168, w: 48, h: 176 },
  { x: 1310, w: 52, h: 168 },
  { x: 1366, w: 74, h: 124 },
];

const distant = Array.from({ length: 30 }, (_, i) => ({
  x: i * 50,
  w: 34 + ((i * 7) % 14),
  h: 36 + ((i * 37) % 60),
}));

const stars = [
  [860, 170], [962, 132], [1046, 196], [1236, 118], [1312, 158], [1392, 214], [1120, 110],
];

const links = [
  [0, 1], [1, 2], [1, 6], [6, 3], [3, 4], [4, 5],
];

function windows(x: number, w: number, h: number, seed: number) {
  const cells: { x: number; y: number; lit: boolean; twinkle: boolean }[] = [];
  const cols = Math.max(2, Math.floor((w - 12) / 12));
  const rows = Math.floor((h - 24) / 16);
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const n = (r * 31 + c * 17 + seed * 13) % 11;
      cells.push({
        x: x + 8 + c * 12,
        y: BASE - h + 16 + r * 16,
        lit: n < 4,
        twinkle: n === 0,
      });
    }
  }
  return cells;
}

export default function AboutArt() {
  const loop = useLoop();

  return (
    <BannerArt id="about">
      <defs>
        <radialGradient id="about-moon" cx="0.4" cy="0.35" r="0.7">
          <stop offset="0" stopColor="#E8E5FF" />
          <stop offset="0.55" stopColor="#A99CFF" />
          <stop offset="1" stopColor="#7163FF" />
        </radialGradient>
        <radialGradient id="about-halo" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="#8E82FF" stopOpacity="0.35" />
          <stop offset="1" stopColor="#8E82FF" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="about-tower" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#1C2A44" />
          <stop offset="1" stopColor="#0E1727" />
        </linearGradient>
      </defs>

      <motion.circle cx="1180" cy="270" r="210" fill="url(#about-halo)" {...loop({ opacity: [0.7, 1, 0.7] }, 6)} />
      <circle cx="1180" cy="270" r="92" fill="url(#about-moon)" opacity="0.9" />

      {links.map(([a, b]) => (
        <line key={`${a}-${b}`} x1={stars[a][0]} y1={stars[a][1]} x2={stars[b][0]} y2={stars[b][1]} stroke="#A99CFF" strokeOpacity="0.22" />
      ))}
      {stars.map(([cx, cy], i) => (
        <motion.circle key={i} cx={cx} cy={cy} r="3" fill="#C8C1FF" {...loop({ opacity: [0.3, 1, 0.3] }, 3 + (i % 3), i * 0.4)} />
      ))}

      {distant.map((b, i) => (
        <rect key={i} x={b.x} y={BASE - b.h - 30} width={b.w} height={b.h + 30} fill="#141F33" opacity="0.55" />
      ))}

      {towers.map((t, i) => (
        <g key={t.x}>
          <rect x={t.x} y={BASE - t.h} width={t.w} height={t.h} fill="url(#about-tower)" stroke="#2B3A55" />
          {windows(t.x, t.w, t.h, i).map((win) =>
            win.twinkle ? (
              <motion.rect key={`${win.x}-${win.y}`} x={win.x} y={win.y} width="5" height="7" rx="1" fill="#C8C1FF" {...loop({ opacity: [0.15, 0.9, 0.15] }, 4 + (i % 3), i * 0.3)} />
            ) : (
              <rect key={`${win.x}-${win.y}`} x={win.x} y={win.y} width="5" height="7" rx="1" fill={win.lit ? "#A99CFF" : "#26344D"} opacity={win.lit ? 0.6 : 1} />
            ),
          )}
        </g>
      ))}

      <rect x="1102" y="312" width="58" height="208" fill="url(#about-tower)" stroke="#2B3A55" />
      <rect x="1110" y="300" width="42" height="12" fill="#1C2A44" stroke="#2B3A55" />
      {windows(1102, 58, 208, 9).map((win) => (
        <rect key={`k-${win.x}-${win.y}`} x={win.x} y={win.y} width="5" height="7" rx="1" fill={win.lit ? "#A99CFF" : "#26344D"} opacity={win.lit ? 0.6 : 1} />
      ))}

      <path d="M1222 520 L1222 262 L1256 206 L1294 262 L1294 520 Z" fill="url(#about-tower)" stroke="#2B3A55" />
      <line x1="1256" y1="206" x2="1256" y2="164" stroke="#3A4A68" strokeWidth="2" />
      <motion.circle cx="1256" cy="162" r="4" fill="#8BE8CE" {...loop({ opacity: [1, 0.2, 1] }, 2)} />
      {windows(1226, 64, 250, 11).map((win) => (
        <rect key={`b-${win.x}-${win.y}`} x={win.x} y={win.y} width="5" height="7" rx="1" fill={win.lit ? "#A99CFF" : "#26344D"} opacity={win.lit ? 0.6 : 1} />
      ))}
      <line x1="1068" y1={BASE - 262} x2="1068" y2={BASE - 296} stroke="#3A4A68" strokeWidth="2" />

      <rect y={BASE} width="1440" height="120" fill="#0D1626" />
      {Array.from({ length: 36 }, (_, i) => (
        <circle key={i} cx={10 + i * 40} cy={BASE + 6} r={14 + (i % 3) * 4} fill="#101D2C" />
      ))}
      <path d="M0 586 C 420 548, 900 600, 1440 560" stroke="#1E2B3B" strokeWidth="14" fill="none" />
      <motion.path
        d="M0 586 C 420 548, 900 600, 1440 560"
        stroke="#A99CFF"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeDasharray="60 240"
        fill="none"
        {...loop({ strokeDashoffset: [0, -600] }, 5, 0, "linear")}
      />
      <motion.path
        d="M0 586 C 420 548, 900 600, 1440 560"
        stroke="#8BE8CE"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeDasharray="40 260"
        fill="none"
        {...loop({ strokeDashoffset: [-150, 450] }, 6, 0, "linear")}
      />
    </BannerArt>
  );
}
