"use client";

import { motion } from "framer-motion";
import { useLoop } from "@/components/illustrations/useLoop";

const CX = 320;
const CY = 340;
const RX = 190;
const RY = 95;
const CYCLE = 12;

const LOOP_PATH = `M186 273 A${RX} ${RY} 0 0 1 454 273 A${RX} ${RY} 0 0 1 454 407 A${RX} ${RY} 0 0 1 186 407 A${RX} ${RY} 0 0 1 186 273`;
const FULL_ELLIPSE = `M${CX - RX} ${CY} A${RX} ${RY} 0 1 1 ${CX + RX} ${CY} A${RX} ${RY} 0 1 1 ${CX - RX} ${CY}`;

const stations = [
  { x: 186, y: 273, top: true, number: "01", title: "UNDERSTAND", reason: "Goals before code", color: "#A99CFF", glyph: "target", at: 0 },
  { x: 454, y: 273, top: true, number: "02", title: "BUILD", reason: "Built with purpose", color: "#C8C1FF", glyph: "code", at: 0.3 },
  { x: 454, y: 407, top: false, number: "03", title: "LAUNCH", reason: "Tested and live", color: "#8BE8CE", glyph: "check", at: 0.44 },
  { x: 186, y: 407, top: false, number: "04", title: "IMPROVE", reason: "Support that stays", color: "#8BE8CE", glyph: "bars", at: 0.68 },
] as const;

const chevrons = [
  { x: CX, y: CY - RY, rotate: 0 },
  { x: CX + RX, y: CY, rotate: 90 },
  { x: CX, y: CY + RY, rotate: 180 },
  { x: CX - RX, y: CY, rotate: 270 },
];

function box(x: number, y: number, a: number, b: number, h: number) {
  const p = (pts: number[][]) => pts.map((pt) => pt.join(",")).join(" ");
  return {
    top: p([[x, y - h - b], [x + a, y - h], [x, y - h + b], [x - a, y - h]]),
    left: p([[x - a, y - h], [x, y - h + b], [x, y + b], [x - a, y]]),
    right: p([[x, y - h + b], [x + a, y - h], [x + a, y], [x, y + b]]),
  };
}

function Glyph({ type, color }: { type: string; color: string }) {
  const common = { fill: "none", stroke: color, strokeWidth: 2.6, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  if (type === "target")
    return (
      <g {...common}>
        <circle r="13" />
        <circle r="6.5" />
        <circle r="2" fill={color} />
      </g>
    );
  if (type === "code") return <path d="M-6 -9 L-15 0 L-6 9 M6 -9 L15 0 L6 9 M3 -12 L-3 12" {...common} />;
  if (type === "check")
    return (
      <g {...common}>
        <circle r="13" />
        <path d="M-6 0 L-2 5 L7 -6" />
      </g>
    );
  return (
    <g fill={color}>
      <rect x="-13" y="2" width="6" height="9" rx="1.5" />
      <rect x="-3" y="-4" width="6" height="15" rx="1.5" />
      <rect x="7" y="-11" width="6" height="22" rx="1.5" />
    </g>
  );
}

export default function WhyIntavorArt() {
  const loop = useLoop();
  const plinth = box(CX, 372, 62, 31, 28);
  const draw = (extra = {}) =>
    loop(
      { pathLength: [0, 0, 1, 1, 1], opacity: [1, 1, 1, 1, 0], ...extra },
      CYCLE,
      0,
      "linear",
      { times: [0, 0.06, 0.82, 0.94, 1] },
    );
  const reveal = (at: number) =>
    loop(
      { opacity: [0, 0, 1, 1, 0], scale: [0.85, 0.85, 1, 1, 1] },
      CYCLE,
      0,
      "easeOut",
      { times: [0, at, at + 0.04, 0.94, 1] },
    );

  return (
    <svg viewBox="40 0 560 570" className="h-auto w-full" role="img" aria-labelledby="why-loop-title why-loop-desc">
      <title id="why-loop-title">The INTAVOR loop: understand, build, launch, improve</title>
      <desc id="why-loop-desc">
        Starting from understanding the goal, a line draws through building, launching and improving, then
        returns to the start, showing that INTAVOR keeps working on a website instead of handing it off at launch.
      </desc>

      <defs>
        <radialGradient id="wl-field" cx="0.5" cy="0.56" r="0.55">
          <stop offset="0" stopColor="#7163FF" stopOpacity="0.26" />
          <stop offset="0.6" stopColor="#5145B8" stopOpacity="0.08" />
          <stop offset="1" stopColor="#0B1220" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="wl-track" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#1A2640" />
          <stop offset="1" stopColor="#131C30" />
        </linearGradient>
        <linearGradient id="wl-line" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#A99CFF" />
          <stop offset="0.5" stopColor="#E8E5FF" />
          <stop offset="1" stopColor="#8BE8CE" />
        </linearGradient>
        <linearGradient id="wl-plinth" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#2C2866" />
          <stop offset="1" stopColor="#18223C" />
        </linearGradient>
        <filter id="wl-blur" x="-80%" y="-80%" width="260%" height="260%">
          <feGaussianBlur stdDeviation="10" />
        </filter>
        <filter id="wl-shadow" x="-60%" y="-60%" width="220%" height="240%">
          <feDropShadow dx="0" dy="12" stdDeviation="10" floodColor="#02050B" floodOpacity="0.7" />
        </filter>
      </defs>

      <circle cx={CX} cy={CY} r="300" fill="url(#wl-field)" />

      <text x={CX} y="30" textAnchor="middle" fill="#A99CFF" fontSize="14" fontWeight="700" letterSpacing="4" className="font-sans">
        WHY INTAVOR
      </text>
      <text x={CX} y="70" textAnchor="middle" fill="#F5F5F6" fontSize="34" fontWeight="700" className="font-heading">
        A loop, not a handoff.
      </text>

      <ellipse cx={CX} cy={CY + 26} rx="215" ry="105" fill="#02050B" fillOpacity="0.55" filter="url(#wl-blur)" />
      <path d={FULL_ELLIPSE} transform="translate(0 12)" fill="none" stroke="#0A1220" strokeWidth="34" />
      <path d={FULL_ELLIPSE} fill="none" stroke="url(#wl-track)" strokeWidth="34" />
      <ellipse cx={CX} cy={CY} rx={RX + 17} ry={RY + 17} fill="none" stroke="#4A5870" strokeOpacity="0.6" />
      <ellipse cx={CX} cy={CY} rx={RX - 17} ry={RY - 17} fill="none" stroke="#4A5870" strokeOpacity="0.45" />
      <path d={FULL_ELLIPSE} fill="none" stroke="#A99CFF" strokeOpacity="0.16" strokeWidth="2" strokeDasharray="5 9" />

      <motion.path
        d={LOOP_PATH}
        fill="none"
        stroke="#A99CFF"
        strokeOpacity="0.55"
        strokeWidth="12"
        strokeLinecap="round"
        filter="url(#wl-blur)"
        {...draw()}
      />
      <motion.path d={LOOP_PATH} fill="none" stroke="url(#wl-line)" strokeWidth="4" strokeLinecap="round" {...draw()} />

      {chevrons.map((c) => (
        <path
          key={c.rotate}
          d="M-6 -6 L2 0 L-6 6"
          transform={`translate(${c.x} ${c.y}) rotate(${c.rotate})`}
          fill="none"
          stroke="#C8C1FF"
          strokeOpacity="0.75"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      ))}

      <motion.circle
        cx={CX}
        cy="310"
        r="80"
        fill="#7163FF"
        fillOpacity="0.3"
        filter="url(#wl-blur)"
        {...loop({ opacity: [0.4, 0.4, 1, 0.4] }, CYCLE, 0, "easeInOut", { times: [0, 0.8, 0.88, 1] })}
      />
      <g filter="url(#wl-shadow)">
        <polygon points={plinth.left} fill="#141B36" stroke="#2E3C56" />
        <polygon points={plinth.right} fill="#0B1724" stroke="#2E3C56" />
        <polygon points={plinth.top} fill="url(#wl-plinth)" stroke="#A99CFF" strokeOpacity="0.55" strokeWidth="1.5" />
      </g>
      <motion.g {...loop({ y: [0, -7, 0] }, 5.5)}>
        <image href="/brand/intavor-symbol-gradient.svg" x={CX - 46} y="276" width="92" height="47" />
      </motion.g>

      {stations.map((s, i) => {
        const b = box(s.x, s.y, 34, 17, 22);
        const glyphY = s.y - 22 - 46;
        const labelY = s.top ? glyphY - 58 : s.y + 52;
        return (
          <motion.g key={s.title} style={{ transformOrigin: `${s.x}px ${s.y}px` }} {...reveal(s.at)}>
            {i === 0 && (
              <>
                <motion.ellipse
                  cx={s.x}
                  cy={s.y}
                  rx="44"
                  ry="22"
                  fill="none"
                  stroke="#8BE8CE"
                  strokeWidth="2"
                  {...loop({ rx: [40, 62], ry: [20, 31], opacity: [0.8, 0] }, 2, 0, "easeOut")}
                />
                <rect x={s.x - 30} y={labelY - 52} width="60" height="22" rx="11" fill="#112B2A" stroke="#8BE8CE" strokeOpacity="0.7" />
                <text x={s.x} y={labelY - 36} textAnchor="middle" fill="#B7F8E6" fontSize="11" fontWeight="700" letterSpacing="2" className="font-sans">
                  START
                </text>
              </>
            )}
            <g filter="url(#wl-shadow)">
              <polygon points={b.left} fill="#131C30" stroke="#2E3C56" />
              <polygon points={b.right} fill="#0C1524" stroke="#2E3C56" />
              <polygon points={b.top} fill="#1C2A44" stroke={s.color} strokeOpacity="0.7" strokeWidth="1.5" />
            </g>
            <line x1={s.x} y1={s.y - 22} x2={s.x} y2={glyphY + 23} stroke={s.color} strokeOpacity="0.45" strokeDasharray="3 4" />
            <circle cx={s.x} cy={glyphY} r="28" fill={s.color} fillOpacity="0.16" filter="url(#wl-blur)" />
            <circle cx={s.x} cy={glyphY} r="23" fill="#111C30" stroke={s.color} strokeOpacity="0.75" strokeWidth="1.5" />
            <g transform={`translate(${s.x} ${glyphY})`}>
              <Glyph type={s.glyph} color={s.color} />
            </g>
            <text x={s.x} y={labelY} textAnchor="middle" fill={s.color} fontSize="18" fontWeight="700" letterSpacing="1.2" className="font-sans">
              {s.number} · {s.title}
            </text>
            <text x={s.x} y={labelY + 22} textAnchor="middle" fill="#C9D1DE" fontSize="15.5" className="font-sans">
              {s.reason}
            </text>
          </motion.g>
        );
      })}

      <text x={CX} y="540" textAnchor="middle" fill="#C9D1DE" fontSize="17" className="font-sans">
        Most projects stop at launch. <tspan fill="#8BE8CE" fontWeight="700">Ours keep improving.</tspan>
      </text>
    </svg>
  );
}
