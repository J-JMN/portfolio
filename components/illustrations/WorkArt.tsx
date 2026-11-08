"use client";

import { motion } from "framer-motion";
import BannerArt from "@/components/illustrations/BannerArt";
import { useLoop } from "@/components/illustrations/useLoop";

const accents = ["#7163FF", "#F5A524", "#67CBB0", "#8BD12E", "#A99CFF", "#F28C38"];
const W = 190;
const H = 150;
const GAP = 22;

function SiteCard({ x, y, accent, variant }: { x: number; y: number; accent: string; variant: number }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <rect width={W} height={H} rx="14" fill="#131E31" stroke="#2E3C56" />
      <circle cx="14" cy="13" r="3" fill="#FF8F85" />
      <circle cx="25" cy="13" r="3" fill="#FFD378" />
      <circle cx="36" cy="13" r="3" fill="#67CBB0" />
      <rect x="10" y="26" width={W - 20} height="62" rx="8" fill={accent} fillOpacity="0.85" />
      <rect x="20" y={variant % 2 ? 40 : 46} width="84" height="8" rx="4" fill="#fff" fillOpacity="0.95" />
      <rect x="20" y={variant % 2 ? 54 : 60} width="112" height="5" rx="2.5" fill="#fff" fillOpacity="0.6" />
      <rect x="20" y={variant % 2 ? 66 : 70} width="40" height="11" rx="5.5" fill="#fff" />
      {variant % 3 === 0 ? (
        <>
          <rect x="10" y="98" width="52" height="40" rx="6" fill="#1D2A40" />
          <rect x="69" y="98" width="52" height="40" rx="6" fill="#1D2A40" />
          <rect x="128" y="98" width="52" height="40" rx="6" fill="#1D2A40" />
        </>
      ) : (
        <>
          <rect x="10" y="102" width="120" height="7" rx="3.5" fill="#8190A6" fillOpacity="0.6" />
          <rect x="10" y="116" width="150" height="7" rx="3.5" fill="#8190A6" fillOpacity="0.4" />
          <rect x="10" y="130" width="90" height="7" rx="3.5" fill="#8190A6" fillOpacity="0.3" />
        </>
      )}
    </g>
  );
}

export default function WorkArt() {
  const loop = useLoop();
  const columns = [0, 1, 2];

  return (
    <BannerArt id="work">
      <g transform="translate(830 -40) rotate(-12 300 360)">
        {columns.map((col) => (
          <motion.g key={col} {...loop({ y: col % 2 ? [0, -60, 0] : [-60, 0, -60] }, 14 + col * 2)}>
            {Array.from({ length: 5 }, (_, row) => {
              const i = col * 5 + row;
              return (
                <SiteCard
                  key={row}
                  x={col * (W + GAP)}
                  y={row * (H + GAP) + (col % 2 ? 60 : 0)}
                  accent={accents[(i * 5) % accents.length]}
                  variant={i}
                />
              );
            })}
          </motion.g>
        ))}
      </g>
    </BannerArt>
  );
}
