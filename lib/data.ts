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

export const founderInfo = {
  name: "Joseph Mburu",
  role: "Founder & Developer",
};

export const clientTestimonials = [
  {
    id: 1,
    quote:
      "INTAVOR took time to understand the work of Sun Rays Foundation and translated it into a website that is clear, engaging, and easy for our team to manage. Joseph has remained dependable after launch, helping us keep the platform current as our work grows. I would confidently recommend INTAVOR to organisations looking for thoughtful, reliable digital work, and I look forward to continuing our partnership on future projects.",
    name: "Mr. Simon Mikanipare",
    role: "Director and President, Sun Rays Foundation",
    relationship: "Ongoing partnership",
    projectIds: [6],
    projectLinks: [
      {
        label: "Sun Rays Foundation",
        href: "/projects/sun-rays-foundation",
      },
    ],
  },
  {
    id: 2,
    quote:
      "Working with INTAVOR on Stratedge Solutions showed me the level of thought and care Joseph brings to a project. He built more than a polished website; he created a platform around how the business actually works. The quality of that work gave me the confidence to bring him into Nyota Roots and continue with INTAVOR for ongoing support after launch. I would gladly recommend Joseph and look forward to working with INTAVOR on future projects.",
    name: "Catherine Njeri",
    role: "Founder, Stratedge Solutions",
    relationship: "Repeat client · Ongoing partner",
    projectIds: [2, 4],
    projectLinks: [
      {
        label: "Stratedge Solutions",
        href: "/projects/stratedge-solutions",
      },
      {
        label: "Nyota Roots",
        href: "/projects/nyota-roots",
      },
    ],
  },
];

export const services = [
  {
    label: "Website Design & Development",
    title: "A digital presence that earns trust.",
    summary:
      "Distinctive, responsive websites that position your organisation clearly and give the right people confidence to take the next step.",
    includes: ["Responsive design", "Clear user journeys", "CMS"],
    href: "/services/website-development",
    icon: Code2,
  },
  {
    label: "Web Application Development",
    title: "Purpose-built tools that make complex work feel simple.",
    summary:
      "Purpose-built platforms that turn complex services and workflows into simple, useful digital experiences.",
    includes: ["Business workflows", "Integrations", "Admin tools"],
    href: "/services/web-application-development",
    icon: Settings2,
  },
  {
    label: "After-Launch Care",
    title: "Care that keeps good work working.",
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
    serviceSlugs: ["website-development"],
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
    serviceSlugs: ["website-development", "web-application-development"],
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
    serviceSlugs: ["website-development"],
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
    serviceSlugs: ["website-development"],
    demoUrl: "https://chanzo.co.ke",
    featured: true,
  },
];

export const highlights = [
  { label: "Projects Delivered", value: "5+" },
  { label: "Ongoing Partnerships", value: "4" },
  { label: "Sectors Served", value: "3" },
];
