"use client";

import { motion } from "framer-motion";
import BannerArt from "@/components/illustrations/BannerArt";
import { useLoop } from "@/components/illustrations/useLoop";

export default function WebsiteDevelopmentArt() {
  const loop = useLoop();

  return (
    <BannerArt id="website-design">
      <g transform="translate(790 78)">
        <motion.g {...loop({ y: [0, -8, 0] }, 7)}>
          <rect width="500" height="390" rx="22" fill="#0F1A2B" stroke="#53617A" strokeWidth="2" />
          <path d="M0 22A22 22 0 0 1 22 0h456a22 22 0 0 1 22 22v34H0Z" fill="#162236" />
          <circle cx="24" cy="28" r="5" fill="#FF8F85" />
          <circle cx="43" cy="28" r="5" fill="#FFD378" />
          <circle cx="62" cy="28" r="5" fill="#67CBB0" />
          <rect x="88" y="18" width="252" height="20" rx="10" fill="#0A1321" />
          <rect x="24" y="78" width="452" height="154" rx="16" fill="url(#website-design-hero)" />
          <rect x="52" y="110" width="190" height="17" rx="8.5" fill="#fff" />
          <rect x="52" y="141" width="252" height="9" rx="4.5" fill="#fff" fillOpacity="0.64" />
          <rect x="52" y="160" width="218" height="9" rx="4.5" fill="#fff" fillOpacity="0.42" />
          <rect x="52" y="188" width="98" height="25" rx="12.5" fill="#fff" />
          <circle cx="394" cy="155" r="54" fill="#fff" fillOpacity="0.11" />
          <path d="M365 173 394 137l29 36" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="9" />
          {[24, 180, 336].map((x, index) => (
            <g key={x}>
              <rect x={x} y="252" width="140" height="112" rx="14" fill="#172337" stroke="#2E3C56" />
              <rect x={x + 18} y="270" width="34" height="34" rx="10" fill={index === 1 ? "#67CBB0" : "#7163FF"} fillOpacity="0.28" />
              <rect x={x + 18} y="320" width="84" height="9" rx="4.5" fill="#F5F5F6" fillOpacity="0.84" />
              <rect x={x + 18} y="340" width="106" height="7" rx="3.5" fill="#8190A6" fillOpacity="0.48" />
            </g>
          ))}
        </motion.g>

        <motion.g {...loop({ y: [0, -12, 0] }, 6, 0.8)}>
          <rect x="382" y="216" width="142" height="286" rx="28" fill="#09121F" stroke="#6D7A91" strokeWidth="2" />
          <rect x="394" y="231" width="118" height="254" rx="19" fill="#111D30" />
          <rect x="430" y="239" width="46" height="6" rx="3" fill="#344157" />
          <rect x="404" y="260" width="98" height="88" rx="12" fill="url(#website-design-hero)" />
          <rect x="416" y="278" width="54" height="8" rx="4" fill="#fff" />
          <rect x="416" y="294" width="68" height="5" rx="2.5" fill="#fff" fillOpacity="0.6" />
          <rect x="416" y="307" width="54" height="5" rx="2.5" fill="#fff" fillOpacity="0.42" />
          <rect x="416" y="326" width="38" height="12" rx="6" fill="#fff" />
          {[364, 402, 440].map((y, index) => (
            <g key={y}>
              <rect x="404" y={y} width="98" height="28" rx="8" fill="#172337" />
              <circle cx="418" cy={y + 14} r="5" fill={index === 1 ? "#67CBB0" : "#7163FF"} />
              <rect x="430" y={y + 11} width="60" height="6" rx="3" fill="#F5F5F6" fillOpacity="0.66" />
            </g>
          ))}
        </motion.g>

        <motion.g
          initial={{ x: 230, y: 330 }}
          {...loop(
            { x: [230, 320, 320, 230], y: [330, 210, 210, 330] },
            6,
            0,
            "easeInOut",
            { times: [0, 0.4, 0.65, 1] },
          )}
        >
          <path d="M0 0v25l7-7 8 15 6-3-8-15h10Z" fill="#fff" stroke="#0B1220" strokeLinejoin="round" strokeWidth="2" />
        </motion.g>
      </g>

      <defs>
        <linearGradient id="website-design-hero" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#7A6CFF" />
          <stop offset="1" stopColor="#4A3DBF" />
        </linearGradient>
      </defs>
    </BannerArt>
  );
}
