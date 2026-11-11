import {
  existsSync,
  mkdirSync,
  readFileSync,
  writeFileSync,
} from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";
import sharp from "sharp";
import { escapeXml } from "./svg-utils.mjs";

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const socialDir = path.join(projectRoot, "public", "brand", "social");
const brandFirstDir = path.join(socialDir, "brand-first");
const cardDir = path.join(projectRoot, "public", "brand", "business-card");

mkdirSync(socialDir, { recursive: true });
mkdirSync(brandFirstDir, { recursive: true });
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
  stone: "#8b97a6",
};

const markPath =
  "M 0,338 L 304,19 Q 331,-8 359,20 L 599,248 L 599,52 Q 599,6 645,6 L 703,6 L 703,157 Q 703,180 684,202 L 540,339 Q 518,360 497,338 L 283,126 Q 256,100 236,124 Q 229,133 228,161 L 226,254 Q 220,338 135,338 Z";

const staffTemplate = {
  name: escapeXml(process.env.INTAVOR_STAFF_NAME || "FULL NAME"),
  role: escapeXml(process.env.INTAVOR_STAFF_ROLE || "ROLE / DEPARTMENT"),
  phone: escapeXml(process.env.INTAVOR_STAFF_PHONE || "+254 7XX XXX XXX"),
  email: escapeXml(process.env.INTAVOR_STAFF_EMAIL || "name@intavor.co.ke"),
};

const companyDetails = {
  phone: "+254 111 235 767",
  email: "contact@intavor.co.ke",
  website: "intavor.co.ke",
  location: "Nairobi, Kenya",
};

const force = process.argv.includes("--force");
const generatedSvgs = [];
const pngsToRender = [];
let updatedSvgCount = 0;

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

/* ------------------------------------------------------------------ */
/*  Business card system: "Unbound"                                    */
/*  The INTAVOR mark bleeds off the card edges as one continuous       */
/*  object; depth comes from layered marks and soft colour fields —    */
/*  no lines, rules, panels, or visible card architecture.             */
/* ------------------------------------------------------------------ */

const CARD_W = 1134;
const CARD_H = 661;
const fontDisplay = "Ubuntu Sans, Sora, Inter, Arial, sans-serif";
const fontText = "Ubuntu, Inter, Arial, sans-serif";

function cardDefs() {
  return `
    <defs>
      <linearGradient id="cardMidnight" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="${palette.ink}"/>
        <stop offset="1" stop-color="${palette.inkSoft}"/>
      </linearGradient>
      <radialGradient id="echoAura">
        <stop offset="0" stop-color="${palette.purple}" stop-opacity="0.26"/>
        <stop offset="1" stop-color="${palette.purple}" stop-opacity="0"/>
      </radialGradient>
      <radialGradient id="panelAura">
        <stop offset="0" stop-color="${palette.panelLight}" stop-opacity="0.6"/>
        <stop offset="1" stop-color="${palette.panelLight}" stop-opacity="0"/>
      </radialGradient>
      <radialGradient id="lilacAura">
        <stop offset="0" stop-color="${palette.lilac}" stop-opacity="0.16"/>
        <stop offset="1" stop-color="${palette.lilac}" stop-opacity="0"/>
      </radialGradient>
    </defs>`;
}

function cardLockup(x, y, dark = false) {
  const textColor = dark ? palette.ink : palette.pale;
  const markArt = dark
    ? `<g transform="translate(${x} ${y}) scale(${58 / 703})"><path d="${markPath}" fill="${palette.ink}" fill-opacity="0.92"/></g>`
    : mark(x, y, 58);
  return `
    ${markArt}
    <text x="${x + 78}" y="${y + 27}" fill="${textColor}" font-family="${fontDisplay}" font-size="28" font-weight="600" letter-spacing="6">INTAVOR</text>`;
}

function debossMark(x, y, width, opacity = 1) {
  const scale = width / 703;
  return `
    <g transform="translate(${x} ${y}) scale(${scale})" opacity="${opacity}">
      <path d="${markPath}" transform="translate(12 16)" fill="#070b13" fill-opacity="0.9"/>
      <path d="${markPath}" transform="translate(-7 -9)" fill="${palette.line}" fill-opacity="0.75"/>
      <path d="${markPath}" fill="${palette.panel}"/>
    </g>`;
}

function brandFace(detail) {
  return `
    ${cardDefs()}
    <rect width="${CARD_W}" height="${CARD_H}" fill="url(#cardMidnight)"/>
    <ellipse cx="920" cy="120" rx="390" ry="280" fill="url(#echoAura)"/>
    <ellipse cx="0" cy="690" rx="410" ry="280" fill="url(#panelAura)"/>
    ${debossMark(-290, 410, 660, 0.5)}
    ${debossMark(600, -95, 790)}
    ${mark(74, 352, 46)}
    <text x="134" y="384" fill="${palette.pale}" font-family="${fontDisplay}" font-size="34" font-weight="500" letter-spacing="11">INTAVOR</text>
    <text x="74" y="90" fill="${palette.stone}" font-family="${fontText}" font-size="16" font-weight="700" letter-spacing="4.5">${detail}</text>
    <text x="76" y="436" fill="${palette.lilac}" font-family="${fontText}" font-size="17" font-weight="700" letter-spacing="4.5">TECH BUILT WITH INTENTION.</text>
    <text x="74" y="586" fill="${palette.muted}" font-family="${fontText}" font-size="15" font-weight="700" letter-spacing="4">BUILD · MANAGE · IMPROVE</text>
    <text x="1060" y="586" text-anchor="end" fill="${palette.stone}" font-family="${fontText}" font-size="15" font-weight="700" letter-spacing="4">intavor.co.ke</text>`;
}

function contactItem(x, y, label, value) {
  return `
    <text x="${x}" y="${y}" fill="${palette.lilac}" font-family="${fontText}" font-size="16" font-weight="700" letter-spacing="3">${label}</text>
    <text x="${x}" y="${y + 34}" fill="${palette.pale}" font-family="${fontText}" font-size="25" font-weight="500">${value}</text>`;
}

function infoFace(title, subtitle, cells) {
  return `
    ${cardDefs()}
    <rect width="${CARD_W}" height="${CARD_H}" fill="url(#cardMidnight)"/>
    <ellipse cx="150" cy="105" rx="370" ry="260" fill="url(#panelAura)"/>
    <ellipse cx="1020" cy="610" rx="390" ry="280" fill="url(#lilacAura)"/>
    <ellipse cx="880" cy="100" rx="280" ry="200" fill="url(#echoAura)"/>
    ${debossMark(760, 345, 640)}
    ${cardLockup(74, 64)}
    <text x="74" y="172" fill="${palette.lilac}" font-family="${fontText}" font-size="17" font-weight="700" letter-spacing="4">CONTACT</text>
    <text x="74" y="234" fill="${palette.pale}" font-family="${fontDisplay}" font-size="44" font-weight="600" letter-spacing="-0.5">${title}</text>
    <text x="76" y="274" fill="${palette.muted}" font-family="${fontText}" font-size="20" font-weight="500">${subtitle}</text>
    ${cells}`;
}

function write(relativePath, contents) {
  const output = path.join(projectRoot, "public", "brand", relativePath);
  const pngOutput = output.replace(/\.svg$/, ".png");
  const normalizedContents = relativePath.startsWith("business-card/")
    ? contents
        .split("\n")
        .map((line) => line.trimEnd())
        .join("\n")
        .replace(/\n+$/, "\n")
    : contents;
  const svgChanged =
    force ||
    !existsSync(output) ||
    readFileSync(output, "utf8") !== normalizedContents;

  if (svgChanged) {
    writeFileSync(output, normalizedContents);
    updatedSvgCount += 1;
  }

  if (svgChanged || !existsSync(pngOutput)) {
    pngsToRender.push([output, pngOutput]);
  }

  generatedSvgs.push(output);
  return output;
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
  "social/brand-first/01-tech-built-with-intention.svg",
  documentSvg(
    1080,
    1350,
    "INTAVOR tech built with intention",
    `
      ${topLabel("The INTAVOR standard", "01 / 12")}
      <circle cx="760" cy="460" r="390" fill="url(#glow)"/>
      ${mark(170, 266, 740)}
      <text x="82" y="780" fill="${palette.pale}" font-family="Arial, sans-serif" font-size="80" font-weight="700">
        <tspan x="82">Tech built with</tspan>
        <tspan x="82" dy="90" fill="${palette.lilac}">intention.</tspan>
      </text>
      <text x="84" y="970" fill="${palette.muted}" font-family="Arial, sans-serif" font-size="30">
        <tspan x="84">Clear thinking. Dependable execution.</tspan>
        <tspan x="84" dy="46">Digital products built to keep working.</tspan>
      </text>
      ${footer()}
    `,
  ),
);

write(
  "social/brand-first/02-intent-meets-endeavor.svg",
  documentSvg(
    1080,
    1350,
    "Intent meets endeavor at INTAVOR",
    `
      ${topLabel("Behind the name", "02 / 12")}
      <text x="82" y="302" fill="${palette.pale}" font-family="Arial, sans-serif" font-size="108" font-weight="700">INTENT</text>
      <text x="82" y="361" fill="${palette.muted}" font-family="Arial, sans-serif" font-size="27">Direction, purpose and thoughtful decisions.</text>
      <circle cx="540" cy="520" r="48" fill="${palette.panelLight}" stroke="${palette.purple}" stroke-width="3"/>
      <text x="540" y="541" text-anchor="middle" fill="${palette.lilac}" font-family="Arial, sans-serif" font-size="60" font-weight="300">+</text>
      <text x="998" y="705" text-anchor="end" fill="${palette.pale}" font-family="Arial, sans-serif" font-size="108" font-weight="700">ENDEAVOR</text>
      <text x="998" y="764" text-anchor="end" fill="${palette.muted}" font-family="Arial, sans-serif" font-size="27">Focused effort, delivery and follow-through.</text>
      <line x1="82" y1="874" x2="998" y2="874" stroke="url(#accent)" stroke-width="3"/>
      <text x="540" y="971" text-anchor="middle" fill="${palette.pale}" font-family="Arial, sans-serif" font-size="68" font-weight="700" letter-spacing="13">INTAVOR</text>
      <text x="540" y="1037" text-anchor="middle" fill="${palette.lilac}" font-family="Arial, sans-serif" font-size="28">Intent gives the work direction.</text>
      <text x="540" y="1081" text-anchor="middle" fill="${palette.pale}" font-family="Arial, sans-serif" font-size="28">Endeavor carries it through.</text>
      ${footer()}
    `,
  ),
);

write(
  "social/brand-first/03-build-manage-improve.svg",
  documentSvg(
    1080,
    1350,
    "INTAVOR builds manages and improves websites",
    `
      ${topLabel("One digital partner", "03 / 12")}
      <text x="82" y="252" fill="${palette.pale}" font-family="Arial, sans-serif" font-size="68" font-weight="700">From first build</text>
      <text x="82" y="326" fill="${palette.lilac}" font-family="Arial, sans-serif" font-size="68" font-weight="700">to what comes next.</text>
      <g transform="translate(82 422)">
        <rect width="916" height="178" rx="24" fill="${palette.panel}" stroke="${palette.line}" stroke-width="2"/>
        <text x="42" y="72" fill="${palette.lilac}" font-family="Arial, sans-serif" font-size="20" font-weight="700" letter-spacing="4">01</text>
        <text x="116" y="80" fill="${palette.pale}" font-family="Arial, sans-serif" font-size="46" font-weight="700">BUILD</text>
        <text x="116" y="130" fill="${palette.muted}" font-family="Arial, sans-serif" font-size="25">Websites and web applications shaped around real goals.</text>
      </g>
      <g transform="translate(82 630)">
        <rect width="916" height="178" rx="24" fill="${palette.panel}" stroke="${palette.line}" stroke-width="2"/>
        <text x="42" y="72" fill="${palette.lilac}" font-family="Arial, sans-serif" font-size="20" font-weight="700" letter-spacing="4">02</text>
        <text x="116" y="80" fill="${palette.pale}" font-family="Arial, sans-serif" font-size="46" font-weight="700">MANAGE</text>
        <text x="116" y="130" fill="${palette.muted}" font-family="Arial, sans-serif" font-size="25">Updates, technical care and reliable ongoing support.</text>
      </g>
      <g transform="translate(82 838)">
        <rect width="916" height="178" rx="24" fill="${palette.panel}" stroke="${palette.line}" stroke-width="2"/>
        <text x="42" y="72" fill="${palette.lilac}" font-family="Arial, sans-serif" font-size="20" font-weight="700" letter-spacing="4">03</text>
        <text x="116" y="80" fill="${palette.pale}" font-family="Arial, sans-serif" font-size="46" font-weight="700">IMPROVE</text>
        <text x="116" y="130" fill="${palette.muted}" font-family="Arial, sans-serif" font-size="25">Focused refinements as your organisation evolves.</text>
      </g>
      ${footer()}
    `,
  ),
);

write(
  "social/brand-first/04-digital-first-impression.svg",
  documentSvg(
    1080,
    1350,
    "Your website is often your first impression",
    `
      ${topLabel("A simple truth", "04 / 12")}
      <circle cx="850" cy="350" r="310" fill="url(#glow)"/>
      <text x="82" y="334" fill="${palette.pale}" font-family="Arial, sans-serif" font-size="82" font-weight="700">
        <tspan x="82">Your website is</tspan>
        <tspan x="82" dy="92">often your first</tspan>
        <tspan x="82" dy="92" fill="${palette.lilac}">impression.</tspan>
      </text>
      <rect x="82" y="690" width="916" height="270" rx="30" fill="${palette.panel}" stroke="${palette.line}" stroke-width="2"/>
      <text x="132" y="775" fill="${palette.muted}" font-family="Arial, sans-serif" font-size="26">BEFORE SOMEONE CALLS, EMAILS OR VISITS—</text>
      <text x="132" y="852" fill="${palette.pale}" font-family="Arial, sans-serif" font-size="38" font-weight="600">
        <tspan x="132">your website has already said something</tspan>
        <tspan x="132" dy="52">about your business.</tspan>
      </text>
      <text x="82" y="1066" fill="${palette.lilac}" font-family="Arial, sans-serif" font-size="28">Make that first impression intentional.</text>
      ${footer()}
    `,
  ),
);

write(
  "social/brand-first/05-three-things-clear.svg",
  documentSvg(
    1080,
    1350,
    "Three things a good business website should make clear",
    `
      ${topLabel("Website clarity", "05 / 12")}
      <text x="82" y="246" fill="${palette.pale}" font-family="Arial, sans-serif" font-size="64" font-weight="700">
        <tspan x="82">A good website makes</tspan>
        <tspan x="82" dy="72">three things clear.</tspan>
      </text>
      <g transform="translate(82 432)">
        <circle cx="62" cy="62" r="62" fill="${palette.purple}"/>
        <text x="62" y="78" text-anchor="middle" fill="#ffffff" font-family="Arial, sans-serif" font-size="42" font-weight="700">1</text>
        <text x="160" y="54" fill="${palette.pale}" font-family="Arial, sans-serif" font-size="40" font-weight="700">What you do</text>
        <text x="160" y="97" fill="${palette.muted}" font-family="Arial, sans-serif" font-size="25">Without making visitors search for the answer.</text>
      </g>
      <g transform="translate(82 648)">
        <circle cx="62" cy="62" r="62" fill="${palette.panelLight}" stroke="${palette.purple}" stroke-width="3"/>
        <text x="62" y="78" text-anchor="middle" fill="${palette.pale}" font-family="Arial, sans-serif" font-size="42" font-weight="700">2</text>
        <text x="160" y="54" fill="${palette.pale}" font-family="Arial, sans-serif" font-size="40" font-weight="700">Who it is for</text>
        <text x="160" y="97" fill="${palette.muted}" font-family="Arial, sans-serif" font-size="25">So the right audience knows they are in the right place.</text>
      </g>
      <g transform="translate(82 864)">
        <circle cx="62" cy="62" r="62" fill="${palette.panelLight}" stroke="${palette.purple}" stroke-width="3"/>
        <text x="62" y="78" text-anchor="middle" fill="${palette.pale}" font-family="Arial, sans-serif" font-size="42" font-weight="700">3</text>
        <text x="160" y="54" fill="${palette.pale}" font-family="Arial, sans-serif" font-size="40" font-weight="700">What to do next</text>
        <text x="160" y="97" fill="${palette.muted}" font-family="Arial, sans-serif" font-size="25">A clear path to enquire, book, buy or learn more.</text>
      </g>
      ${footer()}
    `,
  ),
);

write(
  "social/brand-first/06-rebuild-or-improve.svg",
  documentSvg(
    1080,
    1350,
    "A new website built around what comes next",
    `
      ${topLabel("Better decisions first", "06 / 12")}
      <text x="82" y="290" fill="${palette.pale}" font-family="Arial, sans-serif" font-size="76" font-weight="700">
        <tspan x="82">Ready for a website</tspan>
        <tspan x="82" dy="90" fill="${palette.lilac}">that fits today?</tspan>
      </text>
      <text x="82" y="530" fill="${palette.muted}" font-family="Arial, sans-serif" font-size="29">
        <tspan x="82">A new website can create:</tspan>
      </text>
      <g fill="${palette.pale}" font-family="Arial, sans-serif" font-size="31" font-weight="600">
        <text x="110" y="640">• clearer content</text>
        <text x="110" y="710">• a better mobile experience</text>
        <text x="110" y="780">• improved speed and usability</text>
        <text x="110" y="850">• a simpler enquiry journey</text>
      </g>
      <rect x="82" y="945" width="916" height="170" rx="28" fill="${palette.panel}" stroke="${palette.purple}" stroke-width="2"/>
      <text x="132" y="1000" fill="${palette.lilac}" font-family="Arial, sans-serif" font-size="21" font-weight="700" letter-spacing="3">BUILD FOR WHAT COMES NEXT</text>
      <text x="132" y="1058" fill="${palette.pale}" font-family="Arial, sans-serif" font-size="33" font-weight="600">
        <tspan x="132">Start with what the website</tspan>
        <tspan x="132" dy="44">now needs to accomplish.</tspan>
      </text>
      ${footer()}
    `,
  ),
);

write(
  "social/brand-first/07-after-launch.svg",
  documentSvg(
    1080,
    1350,
    "Launch is the beginning of a useful website",
    `
      ${topLabel("Beyond launch", "07 / 12")}
      <text x="82" y="280" fill="${palette.pale}" font-family="Arial, sans-serif" font-size="76" font-weight="700">
        <tspan x="82">Launch is a milestone.</tspan>
        <tspan x="82" dy="88" fill="${palette.lilac}">Not the finish line.</tspan>
      </text>
      <line x1="170" y1="626" x2="910" y2="626" stroke="${palette.line}" stroke-width="5" stroke-linecap="round"/>
      <g font-family="Arial, sans-serif">
        <circle cx="190" cy="626" r="42" fill="${palette.purple}"/>
        <text x="190" y="637" text-anchor="middle" fill="#ffffff" font-size="25" font-weight="700">01</text>
        <text x="190" y="714" text-anchor="middle" fill="${palette.pale}" font-size="28" font-weight="700">Launch</text>
        <circle cx="430" cy="626" r="42" fill="${palette.panelLight}" stroke="${palette.lilac}" stroke-width="3"/>
        <text x="430" y="637" text-anchor="middle" fill="${palette.pale}" font-size="25" font-weight="700">02</text>
        <text x="430" y="714" text-anchor="middle" fill="${palette.pale}" font-size="28" font-weight="700">Learn</text>
        <circle cx="670" cy="626" r="42" fill="${palette.panelLight}" stroke="${palette.lilac}" stroke-width="3"/>
        <text x="670" y="637" text-anchor="middle" fill="${palette.pale}" font-size="25" font-weight="700">03</text>
        <text x="670" y="714" text-anchor="middle" fill="${palette.pale}" font-size="28" font-weight="700">Update</text>
        <circle cx="910" cy="626" r="42" fill="${palette.panelLight}" stroke="${palette.lilac}" stroke-width="3"/>
        <text x="910" y="637" text-anchor="middle" fill="${palette.pale}" font-size="25" font-weight="700">04</text>
        <text x="910" y="714" text-anchor="middle" fill="${palette.pale}" font-size="28" font-weight="700">Improve</text>
      </g>
      <rect x="82" y="838" width="916" height="220" rx="28" fill="${palette.panel}" stroke="${palette.line}" stroke-width="2"/>
      <text x="132" y="918" fill="${palette.lilac}" font-family="Arial, sans-serif" font-size="22" font-weight="700" letter-spacing="4">A WEBSITE SHOULD EVOLVE</text>
      <text x="132" y="984" fill="${palette.pale}" font-family="Arial, sans-serif" font-size="34" font-weight="600">
        <tspan x="132">as the organisation behind it changes,</tspan>
        <tspan x="132" dy="48">learns and grows.</tspan>
      </text>
      ${footer()}
    `,
  ),
);

write(
  "social/brand-first/08-underperforming-signs.svg",
  documentSvg(
    1080,
    1350,
    "Three signs a website may be underperforming",
    `
      ${topLabel("Website check", "08 / 12")}
      <text x="82" y="252" fill="${palette.pale}" font-family="Arial, sans-serif" font-size="67" font-weight="700">
        <tspan x="82">Three signs your website</tspan>
        <tspan x="82" dy="76" fill="${palette.lilac}">may be underperforming.</tspan>
      </text>
      <g transform="translate(82 434)">
        <rect width="916" height="174" rx="24" fill="${palette.panel}" stroke="${palette.line}" stroke-width="2"/>
        <text x="42" y="77" fill="${palette.lilac}" font-family="Arial, sans-serif" font-size="56" font-weight="700">01</text>
        <text x="146" y="70" fill="${palette.pale}" font-family="Arial, sans-serif" font-size="35" font-weight="700">Your offer is difficult to understand.</text>
        <text x="146" y="119" fill="${palette.muted}" font-family="Arial, sans-serif" font-size="24">Visitors should not have to decode what you do.</text>
      </g>
      <g transform="translate(82 640)">
        <rect width="916" height="174" rx="24" fill="${palette.panel}" stroke="${palette.line}" stroke-width="2"/>
        <text x="42" y="77" fill="${palette.lilac}" font-family="Arial, sans-serif" font-size="56" font-weight="700">02</text>
        <text x="146" y="70" fill="${palette.pale}" font-family="Arial, sans-serif" font-size="35" font-weight="700">Mobile visitors struggle to use it.</text>
        <text x="146" y="119" fill="${palette.muted}" font-family="Arial, sans-serif" font-size="24">Small screens should never feel like an afterthought.</text>
      </g>
      <g transform="translate(82 846)">
        <rect width="916" height="174" rx="24" fill="${palette.panel}" stroke="${palette.line}" stroke-width="2"/>
        <text x="42" y="77" fill="${palette.lilac}" font-family="Arial, sans-serif" font-size="56" font-weight="700">03</text>
        <text x="146" y="70" fill="${palette.pale}" font-family="Arial, sans-serif" font-size="35" font-weight="700">Enquiries are hard to complete.</text>
        <text x="146" y="119" fill="${palette.muted}" font-family="Arial, sans-serif" font-size="24">Every unnecessary step creates another exit point.</text>
      </g>
      ${footer()}
    `,
  ),
);

write(
  "social/brand-first/09-built-around-business.svg",
  documentSvg(
    1080,
    1350,
    "Technology should fit the business",
    `
      ${topLabel("Intentional by design", "09 / 12")}
      <circle cx="810" cy="444" r="380" fill="url(#glow)"/>
      <text x="82" y="322" fill="${palette.pale}" font-family="Arial, sans-serif" font-size="80" font-weight="700">
        <tspan x="82">Your business should</tspan>
        <tspan x="82" dy="92">not have to fit</tspan>
        <tspan x="82" dy="92">the technology.</tspan>
      </text>
      <text x="82" y="665" fill="${palette.lilac}" font-family="Arial, sans-serif" font-size="55" font-weight="700">
        The technology should fit you.
      </text>
      <rect x="82" y="790" width="916" height="268" rx="30" fill="${palette.panel}" stroke="${palette.line}" stroke-width="2"/>
      <text x="132" y="870" fill="${palette.muted}" font-family="Arial, sans-serif" font-size="25" letter-spacing="2">THAT MEANS UNDERSTANDING</text>
      <text x="132" y="945" fill="${palette.pale}" font-family="Arial, sans-serif" font-size="34" font-weight="600">
        <tspan x="132">your audience, your workflows and what</tspan>
        <tspan x="132" dy="50">the website genuinely needs to achieve.</tspan>
      </text>
      ${footer()}
    `,
  ),
);

write(
  "social/brand-first/10-support-matters.svg",
  documentSvg(
    1080,
    1350,
    "Why ongoing website support matters",
    `
      ${topLabel("Reliable after launch", "10 / 12")}
      <text x="82" y="262" fill="${palette.pale}" font-family="Arial, sans-serif" font-size="69" font-weight="700">
        <tspan x="82">A dependable website</tspan>
        <tspan x="82" dy="78">needs dependable</tspan>
        <tspan x="82" dy="78" fill="${palette.lilac}">support.</tspan>
      </text>
      <g font-family="Arial, sans-serif">
        <rect x="82" y="572" width="438" height="210" rx="26" fill="${palette.panel}" stroke="${palette.line}" stroke-width="2"/>
        <text x="124" y="640" fill="${palette.lilac}" font-size="23" font-weight="700" letter-spacing="3">STAY CURRENT</text>
        <text x="124" y="705" fill="${palette.pale}" font-size="30" font-weight="600">Content and services</text>
        <text x="124" y="746" fill="${palette.muted}" font-size="24">change over time.</text>
        <rect x="560" y="572" width="438" height="210" rx="26" fill="${palette.panel}" stroke="${palette.line}" stroke-width="2"/>
        <text x="602" y="640" fill="${palette.lilac}" font-size="23" font-weight="700" letter-spacing="3">STAY USEFUL</text>
        <text x="602" y="705" fill="${palette.pale}" font-size="30" font-weight="600">Fix friction before</text>
        <text x="602" y="746" fill="${palette.muted}" font-size="24">it becomes a problem.</text>
        <rect x="82" y="822" width="438" height="210" rx="26" fill="${palette.panel}" stroke="${palette.line}" stroke-width="2"/>
        <text x="124" y="890" fill="${palette.lilac}" font-size="23" font-weight="700" letter-spacing="3">STAY SECURE</text>
        <text x="124" y="955" fill="${palette.pale}" font-size="30" font-weight="600">Maintain the platform</text>
        <text x="124" y="996" fill="${palette.muted}" font-size="24">and its dependencies.</text>
        <rect x="560" y="822" width="438" height="210" rx="26" fill="${palette.panel}" stroke="${palette.line}" stroke-width="2"/>
        <text x="602" y="890" fill="${palette.lilac}" font-size="23" font-weight="700" letter-spacing="3">KEEP GROWING</text>
        <text x="602" y="955" fill="${palette.pale}" font-size="30" font-weight="600">Add improvements as</text>
        <text x="602" y="996" fill="${palette.muted}" font-size="24">new needs emerge.</text>
      </g>
      ${footer()}
    `,
  ),
);

write(
  "social/brand-first/11-how-we-work.svg",
  documentSvg(
    1080,
    1350,
    "How INTAVOR works",
    `
      ${topLabel("How we work", "11 / 12")}
      <text x="82" y="262" fill="${palette.pale}" font-family="Arial, sans-serif" font-size="71" font-weight="700">Clear at every stage.</text>
      <text x="82" y="324" fill="${palette.muted}" font-family="Arial, sans-serif" font-size="28">No unnecessary complexity. No disappearing after launch.</text>
      <line x1="174" y1="518" x2="174" y2="1012" stroke="${palette.line}" stroke-width="5" stroke-linecap="round"/>
      <g font-family="Arial, sans-serif">
        <circle cx="174" cy="548" r="52" fill="${palette.purple}"/>
        <text x="174" y="560" text-anchor="middle" fill="#ffffff" font-size="27" font-weight="700">01</text>
        <text x="270" y="542" fill="${palette.pale}" font-size="43" font-weight="700">Understand</text>
        <text x="270" y="591" fill="${palette.muted}" font-size="25">Goals, audience, content and practical needs.</text>
        <circle cx="174" cy="762" r="52" fill="${palette.panelLight}" stroke="${palette.lilac}" stroke-width="3"/>
        <text x="174" y="774" text-anchor="middle" fill="${palette.pale}" font-size="27" font-weight="700">02</text>
        <text x="270" y="756" fill="${palette.pale}" font-size="43" font-weight="700">Build with purpose</text>
        <text x="270" y="805" fill="${palette.muted}" font-size="25">Every decision supports the intended outcome.</text>
        <circle cx="174" cy="976" r="52" fill="${palette.panelLight}" stroke="${palette.lilac}" stroke-width="3"/>
        <text x="174" y="988" text-anchor="middle" fill="${palette.pale}" font-size="27" font-weight="700">03</text>
        <text x="270" y="970" fill="${palette.pale}" font-size="43" font-weight="700">Keep it working</text>
        <text x="270" y="1019" fill="${palette.muted}" font-size="25">Manage, support and improve beyond delivery.</text>
      </g>
      ${footer()}
    `,
  ),
);

write(
  "social/brand-first/12-discuss-your-website.svg",
  documentSvg(
    1080,
    1350,
    "Discuss your website with INTAVOR",
    `
      ${topLabel("Start with a conversation", "12 / 12")}
      <circle cx="864" cy="330" r="330" fill="url(#glow)"/>
      <text x="82" y="322" fill="${palette.pale}" font-family="Arial, sans-serif" font-size="82" font-weight="700">
        <tspan x="82">What should your</tspan>
        <tspan x="82" dy="92">website be doing</tspan>
        <tspan x="82" dy="92" fill="${palette.lilac}">better?</tspan>
      </text>
      <text x="82" y="675" fill="${palette.muted}" font-family="Arial, sans-serif" font-size="31">
        <tspan x="82">Your first website. Or a better one.</tspan>
        <tspan x="82" dy="47">Dependable support after delivery.</tspan>
      </text>
      <rect x="82" y="842" width="620" height="104" rx="52" fill="url(#accent)"/>
      <text x="392" y="908" text-anchor="middle" fill="#ffffff" font-family="Arial, sans-serif" font-size="31" font-weight="700">DISCUSS YOUR WEBSITE  →</text>
      <text x="82" y="1032" fill="${palette.pale}" font-family="Arial, sans-serif" font-size="29">intavor.co.ke/contact</text>
      <text x="82" y="1082" fill="${palette.muted}" font-family="Arial, sans-serif" font-size="25">contact@intavor.co.ke</text>
      ${mark(770, 820, 230, 0.38)}
      ${footer()}
    `,
  ),
);

write(
  "business-card/intavor-card-front.svg",
  documentSvg(
    CARD_W,
    CARD_H,
    "INTAVOR company business card front",
    brandFace("WEB DEVELOPMENT + SUPPORT"),
  ),
);

write(
  "business-card/intavor-card-back.svg",
  documentSvg(
    CARD_W,
    CARD_H,
    "INTAVOR company business card back",
    infoFace(
      "Start a conversation.",
      "A new website. Dependable support after delivery.",
      `
      ${contactItem(74, 352, "EMAIL", companyDetails.email)}
      ${contactItem(520, 352, "WHATSAPP", companyDetails.phone)}
      ${contactItem(74, 500, "WEB", companyDetails.website)}
      ${contactItem(520, 500, "BASED IN", companyDetails.location)}`,
    ),
  ),
);

write(
  "business-card/intavor-staff-card-front.svg",
  documentSvg(
    CARD_W,
    CARD_H,
    "INTAVOR editable staff business card front",
    infoFace(
      staffTemplate.name,
      staffTemplate.role,
      `
      ${contactItem(74, 352, "EMAIL", staffTemplate.email)}
      ${contactItem(520, 352, "WHATSAPP", staffTemplate.phone)}
      ${contactItem(74, 500, "WEB", companyDetails.website)}
      ${contactItem(520, 500, "BASED IN", companyDetails.location)}`,
    ),
  ),
);

write(
  "business-card/intavor-staff-card-back.svg",
  documentSvg(
    CARD_W,
    CARD_H,
    "INTAVOR editable staff business card back",
    brandFace(staffTemplate.role),
  ),
);

await Promise.all(
  pngsToRender.map(([svgPath, pngPath]) => sharp(svgPath).png().toFile(pngPath)),
);

console.log(
  `Checked ${generatedSvgs.length} asset pairs: updated ${updatedSvgCount} SVG and ${pngsToRender.length} PNG file(s); left ${generatedSvgs.length - pngsToRender.length} unchanged.`,
);
