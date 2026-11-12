"use client";

import { motion } from "framer-motion";
import BannerArt from "@/components/illustrations/BannerArt";
import { useLoop } from "@/components/illustrations/useLoop";

const CX = 1080;
const A = 160;
const B = 92;
const T = 16;

const levels = [
  { title: "Websites", sub: "Clarity & presence", cy: 420, top: "#17243B", accent: "#A99CFF", float: 3 },
  { title: "Applications", sub: "Tools & workflows", cy: 320, top: "#152A33", accent: "#8BE8CE", float: 5 },
  { title: "Support", sub: "Optional after launch", cy: 220, top: "#1F1E47", accent: "#A99CFF", float: 7 },
];

const xy = (cy: number, u: number, v: number) => [CX - A + A * (u + v), cy + B * (v - u)];
const quad = (cy: number, u: number, v: number, du: number, dv: number) =>
  [xy(cy, u, v), xy(cy, u + du, v), xy(cy, u + du, v + dv), xy(cy, u, v + dv)].map((p) => p.join(",")).join(" ");

function IsoLine({ from, to }: { from: number[]; to: number[] }) {
  return <line x1={from[0]} y1={from[1]} x2={to[0]} y2={to[1]} />;
}

function Plate({ cy, top, accent, index }: { cy: number; top: string; accent: string; index: number }) {
  return (
    <g>
      <polygon points={`${CX - A},${cy} ${CX},${cy + B} ${CX},${cy + B + T} ${CX - A},${cy + T}`} fill="#101A2B" stroke="#2B3A55" />
      <polygon points={`${CX},${cy + B} ${CX + A},${cy} ${CX + A},${cy + T} ${CX},${cy + B + T}`} fill="#0C1524" stroke="#2B3A55" />
      <polygon points={quad(cy, 0, 0, 1, 1)} fill={top} stroke={accent} strokeOpacity="0.45" />
      {index === 0 &&
        [0.25, 0.5, 0.75].map((k) => (
          <g key={k} stroke="#3A4A68" strokeOpacity="0.7">
            <IsoLine from={xy(cy, k, 0)} to={xy(cy, k, 1)} />
            <IsoLine from={xy(cy, 0, k)} to={xy(cy, 1, k)} />
          </g>
        ))}
      {index === 1 && (
        <>
          <polygon points={quad(cy, 0.12, 0.12, 0.34, 0.76)} fill="#8BE8CE" fillOpacity="0.22" />
          <polygon points={quad(cy, 0.54, 0.12, 0.34, 0.34)} fill="#A99CFF" fillOpacity="0.3" />
          <polygon points={quad(cy, 0.54, 0.54, 0.34, 0.34)} fill="#8BE8CE" fillOpacity="0.14" />
        </>
      )}
      {index === 2 && <polygon points={quad(cy, 0.2, 0.2, 0.6, 0.6)} fill="#7163FF" fillOpacity="0.28" />}
    </g>
  );
}

export default function ExpertiseArt() {
  const loop = useLoop();

  return (
    <BannerArt id="expertise">
      <defs>
        <linearGradient id="expertise-beam" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0" stopColor="#7163FF" stopOpacity="0" />
          <stop offset="0.5" stopColor="#A99CFF" stopOpacity="0.7" />
          <stop offset="1" stopColor="#E8E5FF" stopOpacity="0.9" />
        </linearGradient>
      </defs>

      <rect x={CX - 2} y="120" width="4" height="320" fill="url(#expertise-beam)" />
      {[CX - A, CX + A].map((x) => (
        <line key={x} x1={x} y1="228" x2={x} y2="428" stroke="#3A4A68" strokeDasharray="4 6" />
      ))}
      {[0, 1, 2, 3].map((i) => (
        <motion.circle
          key={i}
          cx={CX + (i % 2 ? 6 : -6)}
          cy="430"
          r="3"
          fill="#C8C1FF"
          initial={{ opacity: 0 }}
          {...loop({ y: [0, -300], opacity: [0, 1, 0] }, 4, i, "easeOut")}
        />
      ))}

      {levels.map((level, i) => (
        <motion.g key={level.title} {...loop({ y: [0, -level.float, 0] }, 5 + i, i * 0.7)}>
          <Plate cy={level.cy} top={level.top} accent={level.accent} index={i} />
          <line x1={CX + A + 10} y1={level.cy} x2={CX + A + 38} y2={level.cy} stroke={level.accent} strokeOpacity="0.6" />
          <circle cx={CX + A + 10} cy={level.cy} r="3" fill={level.accent} />
          <text x={CX + A + 48} y={level.cy - 2} fill="#F5F5F6" fontSize="19" fontWeight="700" className="font-heading">
            {level.title}
          </text>
          <text x={CX + A + 48} y={level.cy + 18} fill="#AEB8C8" fontSize="13" className="font-sans">
            {level.sub}
          </text>
        </motion.g>
      ))}

      <motion.g {...loop({ y: [0, -10, 0] }, 6)}>
        <image href="/brand/intavor-symbol-gradient.svg" x={CX - 46} y="150" width="92" height="47" />
      </motion.g>
    </BannerArt>
  );
}
