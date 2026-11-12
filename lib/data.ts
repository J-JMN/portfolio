import { Code2, Mail, RefreshCcw, Settings2 } from "lucide-react";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";

export const brandInfo = {
  name: "INTAVOR",
  tagline: "Tech built with intention.",
  meaning: "Intent gives the work direction. Endeavor carries it through.",
  purpose:
    "To turn clear intent into digital experiences that help organisations communicate with confidence, earn trust, and move forward.",
  role:
    "Based in Nairobi, working with businesses and organisations in Kenya and internationally",
  bio: "INTAVOR designs and builds thoughtful websites and web applications that help businesses and organisations communicate their value, earn trust, and make the next step clear.",
  email: "contact@intavor.co.ke",
  phone: "+254 111 235 767",
  whatsappUrl: "https://wa.me/254111235767",
  location: "Nairobi, Kenya",
  availability: "Available for new projects",
  socials: [
    {
      name: "Email",
      url: "mailto:contact@intavor.co.ke",
      icon: Mail,
    },
    {
      name: "WhatsApp",
      url: "https://wa.me/254111235767",
      icon: WhatsAppIcon,
    },
  ],
};

export const services = [
  {
    title: "Business Websites",
    summary:
      "Distinctive, responsive websites that position your organisation clearly and give the right people confidence to take the next step.",
    includes: ["Responsive design", "Clear user journeys", "CMS"],
    href: "/services/website-design",
    icon: Code2,
  },
  {
    title: "Web Applications",
    summary:
      "Purpose-built platforms that turn complex services and workflows into simple, useful digital experiences.",
    includes: ["Business workflows", "Integrations", "Admin tools"],
    href: "/services/web-application-development",
    icon: Settings2,
  },
  {
    title: "After-Launch Care",
    summary:
      "Optional support plans for websites built by INTAVOR, covering the updates, refinements, and technical care they need over time.",
    includes: ["Content updates", "Improvements", "Technical support"],
    href: "/experience#partnerships",
    icon: RefreshCcw,
  },
];

export const clientEngagements = [
  {
    id: 1,
    client: "Sun Rays Foundation",
    service: "Digital platform partnership",
    status: "Ongoing partnership",
    summary:
      "Continued development of the foundation's digital platform, keeping its programmes, stories, events, and public information current and dependable.",
    responsibilities: [
      "CMS and content workflows",
      "Programme, gallery, and story updates",
      "Platform refinements",
    ],
    projectId: 6,
  },
  {
    id: 2,
    client: "Stratedge Solutions",
    service: "Consultancy platform partnership",
    status: "Ongoing partnership",
    summary:
      "Continued care for a consultancy platform that brings together service content, discovery-call bookings, enquiries, publishing, and day-to-day administration.",
    responsibilities: [
      "Website and application refinements",
      "Booking, email, and enquiry workflows",
      "CMS and dashboard improvements",
    ],
    projectId: 2,
  },
  {
    id: 3,
    client: "Nyota Roots",
    service: "Education platform partnership",
    status: "Ongoing partnership",
    summary:
      "Continued care for an education platform serving parents, schools, and organisations, with clear pathways to courses, certification, and partnerships.",
    responsibilities: [
      "Programme and course content updates",
      "Audience journey refinements",
      "Outreach page improvements",
    ],
    projectId: 4,
  },
  {
    id: 4,
    client: "Chanzo Technologies",
    service: "Company website partnership",
    status: "Ongoing partnership",
    summary:
      "Continued care after delivery, keeping service information, responsive layouts, and the public-facing experience effective.",
    responsibilities: [
      "Website content and service updates",
      "Responsive interface refinements",
      "Performance and presentation refinements",
    ],
    projectId: 1,
  },
];

export const projects = [
  {
    id: 6,
    slug: "sun-rays-foundation",
    title: "Sun Rays Foundation",
    description:
      "A digital home that brings the foundation's work across Africa into view through programme stories, evidence of impact, event galleries, and clear ways to get involved.",
    image: "/images/sun-rays-foundation-website.png",
    sector: "Non-profit",
    serviceSlugs: ["website-design"],
    demoUrl: "https://sunraysfoundationafrica.org",
    featured: true,
  },
  {
    id: 2,
    slug: "stratedge-solutions",
    title: "Stratedge Solutions",
    description:
      "A unified consultancy platform that turns expertise into clear service journeys, then connects interest to discovery-call bookings, enquiries, and useful published insight.",
    image: "/images/stratedge-solutions-website.png",
    sector: "Business consultancy",
    serviceSlugs: ["website-design", "web-application-development"],
    demoUrl: "https://stratedgesolutions.co.ke",
    featured: true,
  },
  {
    id: 4,
    slug: "nyota-roots",
    title: "Nyota Roots",
    description:
      "An education website that gives parents, schools, and organisations a clear path to the programmes, certification details, and partnership opportunities relevant to them.",
    image: "/images/nyota-roots-website.png",
    sector: "Education",
    serviceSlugs: ["website-design"],
    demoUrl: "https://nyotaroots.stratedgesolutions.co.ke/#home",
    featured: true,
  },
  {
    id: 1,
    slug: "chanzo-technologies",
    title: "Chanzo Technologies",
    description:
      "A responsive company website that makes an education technology business easier to understand through structured content, purposeful motion, and a consistent experience on every screen.",
    image: "/images/chanzo-website.png",
    sector: "Education technology",
    serviceSlugs: ["website-design"],
    demoUrl: "https://chanzo.co.ke",
    featured: true,
  },
];

export const highlights = [
  { label: "Projects Delivered", value: "5+" },
  { label: "Ongoing Partnerships", value: "4" },
  { label: "Sectors Served", value: "3" },
];
