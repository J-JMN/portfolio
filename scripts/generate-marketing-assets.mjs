import { mkdirSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const socialDir = path.join(projectRoot, "public", "brand", "social");
const reelsDir = path.join(socialDir, "reels");
const cardDir = path.join(projectRoot, "public", "brand", "business-card");

mkdirSync(socialDir, { recursive: true });
mkdirSync(reelsDir, { recursive: true });
mkdirSync(cardDir, { recursive: true });

const palette = {
  ink: "#0b1220",
  inkSoft: "#111d2e",
  panel: "#152132",
  panelLight: "#1e2b3b",
  purple: "#7a6cff",
  lilac: "#a99cff",
  pale: "#f5f5f6",
  muted: "#b5bfce",
  line: "#344157",
  green: "#62d99b",
};

const markPath =
  "M 0,338 L 304,19 Q 331,-8 359,20 L 599,248 L 599,52 Q 599,6 645,6 L 703,6 L 703,157 Q 703,180 684,202 L 540,339 Q 518,360 497,338 L 283,126 Q 256,100 236,124 Q 229,133 228,161 L 226,254 Q 220,338 135,338 Z";

function defs() {
  return `
    <defs>
      <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="${palette.ink}"/>
        <stop offset="0.58" stop-color="${palette.inkSoft}"/>
        <stop offset="1" stop-color="#17152e"/>
      </linearGradient>
      <linearGradient id="mark" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="#ffffff"/>
        <stop offset="0.35" stop-color="#f8f7ff"/>
        <stop offset="0.72" stop-color="${palette.lilac}"/>
        <stop offset="1" stop-color="${palette.purple}"/>
      </linearGradient>
      <linearGradient id="accent" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0" stop-color="${palette.lilac}"/>
        <stop offset="1" stop-color="${palette.purple}"/>
      </linearGradient>
      <radialGradient id="glow">
        <stop offset="0" stop-color="${palette.purple}" stop-opacity="0.38"/>
        <stop offset="1" stop-color="${palette.purple}" stop-opacity="0"/>
      </radialGradient>
      <filter id="shadow" x="-30%" y="-30%" width="160%" height="160%">
        <feDropShadow dx="0" dy="24" stdDeviation="24" flood-color="#000000" flood-opacity="0.38"/>
      </filter>
    </defs>`;
}

function documentSvg(width, height, title, body, background = true) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" role="img" aria-labelledby="title">
  <title id="title">${title}</title>
  ${defs()}
  ${background ? `<rect width="${width}" height="${height}" fill="url(#bg)"/>` : ""}
  ${body}
</svg>
`;
}

function mark(x, y, width, opacity = 1) {
  const scale = width / 703;
  return `<g transform="translate(${x} ${y}) scale(${scale})" opacity="${opacity}"><path d="${markPath}" fill="url(#mark)"/></g>`;
}

function brandLockup(x, y, scale = 1) {
  return `
    ${mark(x, y, 84 * scale)}
    <text x="${x + 105 * scale}" y="${y + 34 * scale}" fill="${palette.pale}" font-family="Arial, sans-serif" font-size="${28 * scale}" font-weight="700" letter-spacing="${7 * scale}">INTAVOR</text>`;
}

function topLabel(text, index = "") {
  return `
    <text x="82" y="98" fill="${palette.lilac}" font-family="Arial, sans-serif" font-size="24" font-weight="700" letter-spacing="5">${text.toUpperCase()}</text>
    ${index ? `<text x="998" y="98" text-anchor="end" fill="${palette.muted}" font-family="Arial, sans-serif" font-size="22" letter-spacing="3">${index}</text>` : ""}
    <line x1="82" y1="132" x2="998" y2="132" stroke="${palette.line}" stroke-width="2"/>`;
}

function footer() {
  return `
    <line x1="82" y1="1230" x2="998" y2="1230" stroke="${palette.line}" stroke-width="2"/>
    ${brandLockup(82, 1260, 0.72)}
    <text x="998" y="1295" text-anchor="end" fill="${palette.muted}" font-family="Arial, sans-serif" font-size="22">intavor.co.ke</text>`;
}

function write(relativePath, contents) {
  const output = path.join(projectRoot, "public", "brand", relativePath);
  writeFileSync(output, contents);
  return output;
}

function caseStudy({ number, client, sector, image, statement, accent }) {
  return documentSvg(
    1080,
    1350,
    `${client} selected work by INTAVOR`,
    `
      ${topLabel("Selected work", number)}
      <circle cx="920" cy="252" r="210" fill="url(#glow)"/>
      <text x="82" y="252" fill="${palette.pale}" font-family="Arial, sans-serif" font-size="76" font-weight="700">${client}</text>
      <text x="84" y="305" fill="${palette.muted}" font-family="Arial, sans-serif" font-size="25" letter-spacing="2">${sector.toUpperCase()}</text>
      <rect x="82" y="356" width="916" height="500" rx="28" fill="${palette.panel}" stroke="${palette.line}" stroke-width="2" filter="url(#shadow)"/>
      <clipPath id="screen"><rect x="102" y="376" width="876" height="460" rx="18"/></clipPath>
      <image href="../../images/${image}" x="102" y="376" width="876" height="460" preserveAspectRatio="xMidYMid slice" clip-path="url(#screen)"/>
      <rect x="102" y="376" width="876" height="460" rx="18" fill="none" stroke="${accent}" stroke-opacity="0.42" stroke-width="2"/>
      <circle cx="120" cy="346" r="6" fill="${accent}"/>
      <circle cx="140" cy="346" r="6" fill="${palette.line}"/>
      <circle cx="160" cy="346" r="6" fill="${palette.line}"/>
      <text x="82" y="944" fill="${palette.lilac}" font-family="Arial, sans-serif" font-size="22" font-weight="700" letter-spacing="4">THE WORK</text>
      <text x="82" y="1012" fill="${palette.pale}" font-family="Arial, sans-serif" font-size="38" font-weight="600">
        ${statement.map((line, index) => `<tspan x="82" dy="${index === 0 ? 0 : 50}">${line}</tspan>`).join("")}
      </text>
      ${footer()}
    `,
  );
}

write(
  "social/profile-avatar.svg",
  documentSvg(
    1080,
    1080,
    "INTAVOR social profile image",
    `
      <circle cx="540" cy="510" r="430" fill="url(#glow)"/>
      <circle cx="540" cy="510" r="370" fill="${palette.inkSoft}" stroke="${palette.line}" stroke-width="4"/>
      ${mark(220, 335, 640)}
      <text x="540" y="875" text-anchor="middle" fill="${palette.pale}" font-family="Arial, sans-serif" font-size="58" font-weight="700" letter-spacing="17">INTAVOR</text>
    `,
  ),
);

write(
  "social/facebook-cover.svg",
  documentSvg(
    1640,
    624,
    "INTAVOR Facebook cover",
    `
      <circle cx="1420" cy="40" r="470" fill="url(#glow)"/>
      <path d="M1050 0 C1220 170 1290 455 1640 540" fill="none" stroke="${palette.purple}" stroke-opacity="0.25" stroke-width="2"/>
      <path d="M990 0 C1180 210 1230 520 1580 624" fill="none" stroke="${palette.lilac}" stroke-opacity="0.12" stroke-width="2"/>
      ${mark(1060, 155, 500, 0.92)}
      ${brandLockup(118, 100, 1.05)}
      <text x="118" y="294" fill="${palette.pale}" font-family="Arial, sans-serif" font-size="67" font-weight="700">Tech built with intention.</text>
      <text x="120" y="360" fill="${palette.muted}" font-family="Arial, sans-serif" font-size="29">Web development + ongoing website support</text>
      <rect x="118" y="422" width="398" height="74" rx="37" fill="url(#accent)"/>
      <text x="317" y="469" text-anchor="middle" fill="#ffffff" font-family="Arial, sans-serif" font-size="25" font-weight="700">BUILD · MANAGE · IMPROVE</text>
      <text x="120" y="556" fill="${palette.muted}" font-family="Arial, sans-serif" font-size="23">Nairobi, Kenya  •  intavor.co.ke</text>
    `,
  ),
);

write(
  "social/x-cover.svg",
  documentSvg(
    1500,
    500,
    "INTAVOR X cover",
    `
      <circle cx="1290" cy="-20" r="430" fill="url(#glow)"/>
      ${mark(1050, 84, 400, 0.9)}
      <text x="92" y="176" fill="${palette.pale}" font-family="Arial, sans-serif" font-size="69" font-weight="700">Clear intent.</text>
      <text x="92" y="252" fill="${palette.pale}" font-family="Arial, sans-serif" font-size="69" font-weight="700">Dependable execution.</text>
      <text x="96" y="329" fill="${palette.lilac}" font-family="Arial, sans-serif" font-size="29">Websites built to keep working.</text>
      <text x="330" y="422" fill="${palette.muted}" font-family="Arial, sans-serif" font-size="23" letter-spacing="2">BUILD  ·  MANAGE  ·  IMPROVE     |     INTAVOR.CO.KE</text>
    `,
  ),
);

write(
  "social/01-brand-introduction.svg",
  documentSvg(
    1080,
    1350,
    "Introducing INTAVOR",
    `
      ${topLabel("Introducing INTAVOR", "01")}
      <circle cx="540" cy="530" r="360" fill="url(#glow)"/>
      ${mark(180, 308, 720)}
      <text x="540" y="815" text-anchor="middle" fill="${palette.pale}" font-family="Arial, sans-serif" font-size="72" font-weight="700" letter-spacing="17">INTAVOR</text>
      <text x="540" y="900" text-anchor="middle" fill="${palette.pale}" font-family="Arial, sans-serif" font-size="54" font-weight="600">Tech built with <tspan fill="${palette.lilac}">intention.</tspan></text>
      <text x="540" y="972" text-anchor="middle" fill="${palette.muted}" font-family="Arial, sans-serif" font-size="28">Web development + ongoing website support</text>
      ${footer()}
    `,
  ),
);

write(
  "social/02-name-story-intent.svg",
  documentSvg(
    1080,
    1350,
    "The INTAVOR name story: Intent",
    `
      ${topLabel("The name story", "01 / 03")}
      <text x="82" y="300" fill="${palette.muted}" font-family="Arial, sans-serif" font-size="29">EVERY USEFUL DIGITAL PRODUCT STARTS WITH</text>
      <text x="74" y="510" fill="${palette.pale}" font-family="Arial, sans-serif" font-size="158" font-weight="700" letter-spacing="-7">INTENT</text>
      <rect x="82" y="566" width="916" height="3" fill="url(#accent)"/>
      <text x="82" y="680" fill="${palette.pale}" font-family="Arial, sans-serif" font-size="47" font-weight="600">
        <tspan x="82">Clear goals.</tspan>
        <tspan x="82" dy="68">Thoughtful decisions.</tspan>
        <tspan x="82" dy="68">A reason behind every feature.</tspan>
      </text>
      <circle cx="884" cy="954" r="132" fill="none" stroke="${palette.purple}" stroke-width="3"/>
      <line x1="826" y1="954" x2="942" y2="954" stroke="${palette.lilac}" stroke-width="7" stroke-linecap="round"/>
      <line x1="884" y1="896" x2="884" y2="1012" stroke="${palette.lilac}" stroke-width="7" stroke-linecap="round"/>
      ${footer()}
    `,
  ),
);

write(
  "social/03-name-story-endeavor.svg",
  documentSvg(
    1080,
    1350,
    "The INTAVOR name story: Endeavor",
    `
      ${topLabel("The name story", "02 / 03")}
      <text x="82" y="300" fill="${palette.muted}" font-family="Arial, sans-serif" font-size="29">A GOOD IDEA ONLY BECOMES USEFUL THROUGH</text>
      <text x="74" y="510" fill="${palette.pale}" font-family="Arial, sans-serif" font-size="132" font-weight="700" letter-spacing="-7">ENDEAVOR</text>
      <rect x="82" y="566" width="916" height="3" fill="url(#accent)"/>
      <text x="82" y="680" fill="${palette.pale}" font-family="Arial, sans-serif" font-size="47" font-weight="600">
        <tspan x="82">Focused execution.</tspan>
        <tspan x="82" dy="68">Dependable delivery.</tspan>
        <tspan x="82" dy="68">Support beyond launch.</tspan>
      </text>
      <path d="M768 1018 C816 928 870 1000 918 874" fill="none" stroke="${palette.lilac}" stroke-width="8" stroke-linecap="round"/>
      <path d="M883 889 L923 866 L928 913" fill="none" stroke="${palette.lilac}" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>
      ${footer()}
    `,
  ),
);

write(
  "social/04-name-story-intavor.svg",
  documentSvg(
    1080,
    1350,
    "Intent plus Endeavor equals INTAVOR",
    `
      ${topLabel("The name story", "03 / 03")}
      <text x="540" y="300" text-anchor="middle" fill="${palette.muted}" font-family="Arial, sans-serif" font-size="31" font-weight="600" letter-spacing="5">INTENT</text>
      <text x="540" y="394" text-anchor="middle" fill="${palette.lilac}" font-family="Arial, sans-serif" font-size="70" font-weight="300">+</text>
      <text x="540" y="492" text-anchor="middle" fill="${palette.muted}" font-family="Arial, sans-serif" font-size="31" font-weight="600" letter-spacing="5">ENDEAVOR</text>
      <line x1="300" y1="552" x2="780" y2="552" stroke="${palette.line}" stroke-width="2"/>
      ${mark(240, 630, 600)}
      <text x="540" y="1005" text-anchor="middle" fill="${palette.pale}" font-family="Arial, sans-serif" font-size="84" font-weight="700" letter-spacing="18">INTAVOR</text>
      <text x="540" y="1074" text-anchor="middle" fill="${palette.lilac}" font-family="Arial, sans-serif" font-size="27">Intent gives the work direction.</text>
      <text x="540" y="1116" text-anchor="middle" fill="${palette.pale}" font-family="Arial, sans-serif" font-size="27">Endeavor carries it through.</text>
      ${footer()}
    `,
  ),
);

write(
  "social/05-build-manage-improve.svg",
  documentSvg(
    1080,
    1350,
    "INTAVOR build, manage, improve services",
    `
      ${topLabel("What we do", "03")}
      <text x="82" y="242" fill="${palette.pale}" font-family="Arial, sans-serif" font-size="67" font-weight="700">One digital partner.</text>
      <text x="82" y="312" fill="${palette.lilac}" font-family="Arial, sans-serif" font-size="67" font-weight="700">Three ways we help.</text>
      <g transform="translate(82 388)">
        <rect width="916" height="202" rx="24" fill="${palette.panel}" stroke="${palette.line}" stroke-width="2"/>
        <circle cx="76" cy="74" r="34" fill="${palette.purple}"/>
        <text x="76" y="85" text-anchor="middle" fill="#ffffff" font-family="Arial, sans-serif" font-size="30" font-weight="700">01</text>
        <text x="136" y="83" fill="${palette.pale}" font-family="Arial, sans-serif" font-size="44" font-weight="700">BUILD</text>
        <text x="136" y="132" fill="${palette.muted}" font-family="Arial, sans-serif" font-size="25">Websites, web apps, CMS and business workflows.</text>
      </g>
      <g transform="translate(82 618)">
        <rect width="916" height="202" rx="24" fill="${palette.panel}" stroke="${palette.line}" stroke-width="2"/>
        <circle cx="76" cy="74" r="34" fill="${palette.purple}"/>
        <text x="76" y="85" text-anchor="middle" fill="#ffffff" font-family="Arial, sans-serif" font-size="30" font-weight="700">02</text>
        <text x="136" y="83" fill="${palette.pale}" font-family="Arial, sans-serif" font-size="44" font-weight="700">MANAGE</text>
        <text x="136" y="132" fill="${palette.muted}" font-family="Arial, sans-serif" font-size="25">Content updates, admin support and maintenance.</text>
      </g>
      <g transform="translate(82 848)">
        <rect width="916" height="202" rx="24" fill="${palette.panel}" stroke="${palette.line}" stroke-width="2"/>
        <circle cx="76" cy="74" r="34" fill="${palette.purple}"/>
        <text x="76" y="85" text-anchor="middle" fill="#ffffff" font-family="Arial, sans-serif" font-size="30" font-weight="700">03</text>
        <text x="136" y="83" fill="${palette.pale}" font-family="Arial, sans-serif" font-size="44" font-weight="700">IMPROVE</text>
        <text x="136" y="132" fill="${palette.muted}" font-family="Arial, sans-serif" font-size="25">Usability, performance, features and integrations.</text>
      </g>
      ${footer()}
    `,
  ),
);

write(
  "social/06-beyond-launch.svg",
  documentSvg(
    1080,
    1350,
    "A website is not finished at launch",
    `
      ${topLabel("A better website mindset", "04")}
      <text x="82" y="272" fill="${palette.pale}" font-family="Arial, sans-serif" font-size="75" font-weight="700">
        <tspan x="82">A website is not</tspan>
        <tspan x="82" dy="82">finished at launch.</tspan>
      </text>
      <text x="82" y="487" fill="${palette.muted}" font-family="Arial, sans-serif" font-size="31">
        <tspan x="82">Your business changes. Your customers change.</tspan>
        <tspan x="82" dy="46">Your website should keep pace.</tspan>
      </text>
      <line x1="154" y1="710" x2="926" y2="710" stroke="${palette.line}" stroke-width="5" stroke-linecap="round"/>
      <g font-family="Arial, sans-serif">
        <circle cx="184" cy="710" r="34" fill="${palette.purple}"/>
        <text x="184" y="719" text-anchor="middle" fill="#ffffff" font-size="24" font-weight="700">01</text>
        <text x="184" y="784" text-anchor="middle" fill="${palette.pale}" font-size="25" font-weight="700">Launch</text>
        <circle cx="540" cy="710" r="34" fill="${palette.panelLight}" stroke="${palette.lilac}" stroke-width="3"/>
        <text x="540" y="719" text-anchor="middle" fill="${palette.pale}" font-size="24" font-weight="700">02</text>
        <text x="540" y="784" text-anchor="middle" fill="${palette.pale}" font-size="25" font-weight="700">Learn</text>
        <circle cx="896" cy="710" r="34" fill="${palette.panelLight}" stroke="${palette.lilac}" stroke-width="3"/>
        <text x="896" y="719" text-anchor="middle" fill="${palette.pale}" font-size="24" font-weight="700">03</text>
        <text x="896" y="784" text-anchor="middle" fill="${palette.pale}" font-size="25" font-weight="700">Improve</text>
      </g>
      <rect x="82" y="890" width="916" height="178" rx="26" fill="${palette.panel}" stroke="${palette.line}" stroke-width="2"/>
      <text x="122" y="955" fill="${palette.lilac}" font-family="Arial, sans-serif" font-size="21" font-weight="700" letter-spacing="4">INTAVOR SUPPORT</text>
      <text x="122" y="1011" fill="${palette.pale}" font-family="Arial, sans-serif" font-size="31" font-weight="600">Updates, maintenance and focused improvements.</text>
      ${footer()}
    `,
  ),
);

write(
  "social/07-stratedge-selected-work.svg",
  caseStudy({
    number: "05",
    client: "Stratedge Solutions",
    sector: "Business consultancy",
    image: "stratedge-solutions-website.png",
    statement: ["A full-stack platform connecting content,", "bookings, enquiries and administration."],
    accent: "#ff7a2f",
  }),
);

write(
  "social/08-chanzo-selected-work.svg",
  caseStudy({
    number: "06",
    client: "Chanzo Technologies",
    sector: "Education technology",
    image: "chanzo-website.png",
    statement: ["A responsive company website with clear", "service journeys and purposeful motion."],
    accent: "#36b7ff",
  }),
);

write(
  "social/09-nyota-roots-selected-work.svg",
  caseStudy({
    number: "07",
    client: "Nyota Roots",
    sector: "Education",
    image: "nyota-roots-website.png",
    statement: ["Distinct journeys for parents, schools", "and organisations—built around their needs."],
    accent: "#f1bf4a",
  }),
);

write(
  "social/10-sun-rays-selected-work.svg",
  caseStudy({
    number: "08",
    client: "Sun Rays Foundation",
    sector: "Non-profit",
    image: "sun-rays-foundation-website.png",
    statement: ["A dependable platform for programmes,", "impact stories, events and public outreach."],
    accent: "#8be000",
  }),
);

write(
  "social/11-project-cta.svg",
  documentSvg(
    1080,
    1350,
    "Start a project with INTAVOR",
    `
      ${topLabel("Your next step", "09")}
      <circle cx="882" cy="340" r="300" fill="url(#glow)"/>
      <text x="82" y="320" fill="${palette.pale}" font-family="Arial, sans-serif" font-size="78" font-weight="700">
        <tspan x="82">Is your website</tspan>
        <tspan x="82" dy="86">working as hard</tspan>
        <tspan x="82" dy="86">as your business?</tspan>
      </text>
      <text x="82" y="660" fill="${palette.muted}" font-family="Arial, sans-serif" font-size="31">
        <tspan x="82">Whether you need a new platform, reliable</tspan>
        <tspan x="82" dy="46">support or focused improvements—we can help.</tspan>
      </text>
      <rect x="82" y="810" width="594" height="104" rx="52" fill="url(#accent)"/>
      <text x="379" y="876" text-anchor="middle" fill="#ffffff" font-family="Arial, sans-serif" font-size="31" font-weight="700">DISCUSS YOUR WEBSITE  →</text>
      <text x="82" y="1002" fill="${palette.pale}" font-family="Arial, sans-serif" font-size="27">intavor.co.ke/contact</text>
      <text x="82" y="1052" fill="${palette.muted}" font-family="Arial, sans-serif" font-size="24">contact@intavor.co.ke</text>
      ${mark(750, 838, 250, 0.42)}
      ${footer()}
    `,
  ),
);

function reelCover(title, lines, number) {
  return documentSvg(
    1080,
    1920,
    title,
    `
      <circle cx="820" cy="480" r="520" fill="url(#glow)"/>
      ${brandLockup(76, 92, 0.86)}
      <text x="1000" y="122" text-anchor="end" fill="${palette.muted}" font-family="Arial, sans-serif" font-size="24" letter-spacing="3">${number}</text>
      <text x="76" y="560" fill="${palette.lilac}" font-family="Arial, sans-serif" font-size="25" font-weight="700" letter-spacing="5">WEBSITE NOTES</text>
      <text x="76" y="668" fill="${palette.pale}" font-family="Arial, sans-serif" font-size="82" font-weight="700">
        ${lines.map((line, index) => `<tspan x="76" dy="${index === 0 ? 0 : 94}">${line}</tspan>`).join("")}
      </text>
      <rect x="76" y="1190" width="370" height="74" rx="37" fill="${palette.panelLight}" stroke="${palette.purple}" stroke-width="2"/>
      <text x="261" y="1237" text-anchor="middle" fill="${palette.pale}" font-family="Arial, sans-serif" font-size="24" font-weight="700">SAVE FOR LATER</text>
      ${mark(558, 1324, 440, 0.45)}
      <line x1="76" y1="1762" x2="1004" y2="1762" stroke="${palette.line}" stroke-width="2"/>
      <text x="76" y="1822" fill="${palette.muted}" font-family="Arial, sans-serif" font-size="25">Tech built with intention.</text>
      <text x="1004" y="1822" text-anchor="end" fill="${palette.pale}" font-family="Arial, sans-serif" font-size="25">intavor.co.ke</text>
    `,
  );
}

write(
  "social/reels/01-three-signs-cover.svg",
  reelCover(
    "Three signs your business website needs an upgrade",
    ["3 signs your", "business website", "needs an upgrade"],
    "01",
  ),
);

write(
  "social/reels/02-after-launch-cover.svg",
  reelCover(
    "What happens after your website launches",
    ["What happens", "after your website", "launches?"],
    "02",
  ),
);

write(
  "social/reels/03-walkthrough-cover.svg",
  reelCover(
    "Website walkthrough: Stratedge Solutions",
    ["Website", "walkthrough:", "Stratedge Solutions"],
    "03",
  ),
);

write(
  "business-card/intavor-card-front.svg",
  documentSvg(
    1134,
    661,
    "INTAVOR business card front",
    `
      <circle cx="936" cy="-40" r="440" fill="url(#glow)"/>
      <path d="M790 0 C880 156 902 414 1134 508" fill="none" stroke="${palette.purple}" stroke-opacity="0.3" stroke-width="2"/>
      <path d="M720 0 C838 212 826 506 1090 661" fill="none" stroke="${palette.lilac}" stroke-opacity="0.14" stroke-width="2"/>
      ${mark(108, 164, 400)}
      <line x1="548" y1="150" x2="548" y2="492" stroke="${palette.purple}" stroke-width="3"/>
      <text x="612" y="275" fill="${palette.pale}" font-family="Arial, sans-serif" font-size="72" font-weight="600" letter-spacing="16">INTAVOR</text>
      <text x="616" y="350" fill="${palette.pale}" font-family="Arial, sans-serif" font-size="26" font-weight="700" letter-spacing="6">TECH BUILT WITH INTENTION.</text>
      <text x="616" y="420" fill="${palette.muted}" font-family="Arial, sans-serif" font-size="23">Build  ·  Manage  ·  Improve</text>
    `,
  ),
);

write(
  "business-card/intavor-card-back.svg",
  documentSvg(
    1134,
    661,
    "INTAVOR business card back",
    `
      <circle cx="70" cy="650" r="340" fill="url(#glow)"/>
      ${brandLockup(78, 72, 0.78)}
      <text x="78" y="232" fill="${palette.pale}" font-family="Arial, sans-serif" font-size="45" font-weight="700">Web development +</text>
      <text x="78" y="286" fill="${palette.pale}" font-family="Arial, sans-serif" font-size="45" font-weight="700">ongoing website support</text>
      <rect x="76" y="340" width="5" height="190" rx="2.5" fill="url(#accent)"/>
      <text x="112" y="386" fill="${palette.muted}" font-family="Arial, sans-serif" font-size="23" letter-spacing="2">WEB</text>
      <text x="112" y="426" fill="${palette.pale}" font-family="Arial, sans-serif" font-size="28">intavor.co.ke</text>
      <text x="112" y="480" fill="${palette.muted}" font-family="Arial, sans-serif" font-size="23" letter-spacing="2">EMAIL</text>
      <text x="112" y="520" fill="${palette.pale}" font-family="Arial, sans-serif" font-size="28">contact@intavor.co.ke</text>
      <rect x="736" y="78" width="320" height="500" rx="30" fill="${palette.panel}" stroke="${palette.line}" stroke-width="2"/>
      <text x="786" y="164" fill="${palette.lilac}" font-family="Arial, sans-serif" font-size="20" font-weight="700" letter-spacing="4">WHAT WE DO</text>
      <text x="786" y="245" fill="${palette.pale}" font-family="Arial, sans-serif" font-size="37" font-weight="700">BUILD</text>
      <line x1="786" y1="275" x2="1006" y2="275" stroke="${palette.line}" stroke-width="2"/>
      <text x="786" y="350" fill="${palette.pale}" font-family="Arial, sans-serif" font-size="37" font-weight="700">MANAGE</text>
      <line x1="786" y1="380" x2="1006" y2="380" stroke="${palette.line}" stroke-width="2"/>
      <text x="786" y="455" fill="${palette.pale}" font-family="Arial, sans-serif" font-size="37" font-weight="700">IMPROVE</text>
      <text x="786" y="526" fill="${palette.muted}" font-family="Arial, sans-serif" font-size="20">Nairobi, Kenya</text>
    `,
  ),
);

console.log("Generated 19 editable INTAVOR marketing assets.");
