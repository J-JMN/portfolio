"use client";

import { motion } from "framer-motion";
import BannerArt from "@/components/illustrations/BannerArt";
import { useLoop } from "@/components/illustrations/useLoop";

const nodes = [
  { x: 890, y: 126, label: "Enquiry", color: "#A99CFF" },
  { x: 1110, y: 126, label: "Workflow", color: "#8BE8CE" },
  { x: 890, y: 450, label: "Content", color: "#8BE8CE" },
  { x: 1110, y: 450, label: "Dashboard", color: "#A99CFF" },
];

export default function WebApplicationArt() {
  const loop = useLoop();

  return (
    <BannerArt id="web-application">
      <g>
        {nodes.map((node, index) => (
          <motion.g
            key={node.label}
            {...loop({ y: [0, -7, 0] }, 5 + index * 0.6, index * 0.35)}
          >
            <path
              d={`M${node.x + 66} ${node.y + 34} C 1030 ${node.y + 34}, 1030 320, 1015 320`}
              fill="none"
              stroke={node.color}
              strokeDasharray="6 8"
              strokeOpacity="0.5"
              strokeWidth="2"
            />
            <rect x={node.x} y={node.y} width="132" height="68" rx="16" fill="#142034" stroke="#3A4A68" />
            <circle cx={node.x + 24} cy={node.y + 34} r="9" fill={node.color} fillOpacity="0.28" />
            <circle cx={node.x + 24} cy={node.y + 34} r="4" fill={node.color} />
            <text x={node.x + 43} y={node.y + 40} fill="#F5F5F6" fontSize="15" fontWeight="700" className="font-heading">
              {node.label}
            </text>
          </motion.g>
        ))}

        <motion.g {...loop({ y: [0, -8, 0] }, 7)}>
          <rect x="760" y="196" width="530" height="290" rx="22" fill="#0F1A2B" stroke="#53617A" strokeWidth="2" />
          <path d="M760 218a22 22 0 0 1 22-22h486a22 22 0 0 1 22 22v32H760Z" fill="#162236" />
          <circle cx="784" cy="223" r="5" fill="#FF8F85" />
          <circle cx="803" cy="223" r="5" fill="#FFD378" />
          <circle cx="822" cy="223" r="5" fill="#67CBB0" />
          <rect x="778" y="267" width="104" height="199" rx="14" fill="#111D30" />
          {[292, 330, 368, 406].map((y, index) => (
            <g key={y}>
              <circle cx="800" cy={y} r="7" fill={index === 1 ? "#8BE8CE" : "#7163FF"} fillOpacity="0.65" />
              <rect x="817" y={y - 4} width="48" height="8" rx="4" fill="#AEB8C8" fillOpacity={index === 1 ? 0.9 : 0.5} />
            </g>
          ))}
          <rect x="902" y="267" width="172" height="82" rx="14" fill="#172337" />
          <text x="920" y="292" fill="#AEB8C8" fontSize="13" className="font-sans">Active workflows</text>
          <text x="920" y="329" fill="#F5F5F6" fontSize="30" fontWeight="700" className="font-heading">12</text>
          <motion.circle
            cx="1038"
            cy="310"
            r="13"
            fill="none"
            stroke="#8BE8CE"
            strokeWidth="3"
            {...loop({ r: [10, 22], opacity: [0.8, 0] }, 2.2, 0, "easeOut")}
          />
          <circle cx="1038" cy="310" r="7" fill="#8BE8CE" />
          <rect x="1092" y="267" width="180" height="82" rx="14" fill="#172337" />
          <text x="1110" y="292" fill="#AEB8C8" fontSize="13" className="font-sans">New enquiries</text>
          <text x="1110" y="329" fill="#F5F5F6" fontSize="30" fontWeight="700" className="font-heading">24</text>
          <rect x="902" y="368" width="370" height="98" rx="14" fill="#172337" />
          <path d="M922 442H1252" stroke="#2E3C56" />
          <motion.path
            d="M922 434 970 421 1018 427 1068 397 1118 409 1170 382 1252 391"
            fill="none"
            stroke="#A99CFF"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="4"
            initial={{ pathLength: 1 }}
            {...loop({ pathLength: [0, 1, 1] }, 5, 0, "easeOut", { times: [0, 0.7, 1] })}
          />
          <circle cx="1252" cy="391" r="5" fill="#A99CFF" />
        </motion.g>
      </g>
    </BannerArt>
  );
}
