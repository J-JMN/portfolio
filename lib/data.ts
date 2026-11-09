import { Code2, Mail, RefreshCcw, Settings2 } from "lucide-react";

export const brandInfo = {
  name: "INTAVOR",
  tagline: "Tech built with intention.",
  meaning: "Intent gives the work direction. Endeavor carries it through.",
  purpose:
    "To turn clear intent into dependable digital products—and keep improving them as the organisations behind them grow.",
  role: "Web development and ongoing website support",
  bio: "INTAVOR builds and manages websites and web applications for businesses and organisations, from initial delivery to ongoing updates and technical support.",
  email: "contact@intavor.co.ke",
  location: "Nairobi, Kenya",
  availability: "Open for projects and website support",
  socials: [
    {
      name: "Email",
      url: "mailto:contact@intavor.co.ke",
      icon: Mail,
    },
  ],
};

export const services = [
  {
    title: "Build",
    summary:
      "Responsive websites and full-stack applications shaped around your audience and the work your organisation needs to do.",
    includes: ["Website delivery", "CMS", "Business workflows"],
    icon: Code2,
  },
  {
    title: "Manage",
    summary:
      "Content changes, CMS support, and technical maintenance that keep your platform useful after launch.",
    includes: ["Content updates", "Admin support", "Maintenance"],
    icon: Settings2,
  },
  {
    title: "Improve",
    summary:
      "Focused refinements to usability, performance, and features as your organisation's needs evolve.",
    includes: ["Responsive design", "Performance", "Integrations"],
    icon: RefreshCcw,
  },
];

export const clientEngagements = [
  {
    id: 1,
    client: "Sun Rays Foundation",
    service: "Platform management and CMS support",
    status: "Active retainer",
    summary:
      "Ongoing development and management for the foundation's digital platform, keeping its programmes, stories, events, and public information current and dependable.",
    responsibilities: [
      "CMS and content workflow improvements",
      "Programme, gallery, and blog updates",
      "Technical maintenance and platform iteration",
    ],
    projectId: 6,
  },
  {
    id: 2,
    client: "Stratedge Solutions",
    service: "Business platform management",
    status: "Active retainer",
    summary:
      "Continued support for a consultancy platform that brings together service content, discovery-call bookings, enquiries, publishing, and day-to-day administration.",
    responsibilities: [
      "Website and application updates",
      "Booking, email, and enquiry workflows",
      "CMS and admin dashboard support",
    ],
    projectId: 2,
  },
  {
    id: 3,
    client: "Nyota Roots",
    service: "Education website support",
    status: "Active retainer",
    summary:
      "Website management for an education programme serving parents, schools, and organisations, with clear pathways to courses, certification, and partnerships.",
    responsibilities: [
      "Programme and course content updates",
      "Responsive experience improvements",
      "Technical support for outreach pages",
    ],
    projectId: 4,
  },
  {
    id: 4,
    client: "Chanzo Technologies",
    service: "Company website support",
    status: "Ongoing support",
    summary:
      "Ongoing technical support for the company website after its initial delivery, helping keep service information, responsive layouts, and the public-facing experience effective.",
    responsibilities: [
      "Website content and service updates",
      "Responsive interface maintenance",
      "Performance and presentation refinements",
    ],
    projectId: 1,
  },
];

export const projects = [
  {
    id: 1,
    title: "Chanzo Technologies",
    description:
      "A responsive company website for an education technology business, designed to communicate its services clearly through purposeful motion, structured content, and a consistent experience across screen sizes. INTAVOR also provides ongoing website support.",
    image: "/images/chanzo-website.png",
    sector: "Education technology",
    demoUrl: "https://chanzo.co.ke",
    featured: true,
  },
  {
    id: 2,
    title: "Stratedge Solutions",
    description:
      "A full-stack consultancy platform combining service pages, a guided booking flow, transactional emails, publishing tools, and a private dashboard for managing enquiries and content. The platform remains under ongoing INTAVOR support.",
    image: "/images/stratedge-solutions-website.png",
    sector: "Business consultancy",
    demoUrl: "https://stratedgesolutions.co.ke",
    featured: true,
  },
  {
    id: 4,
    title: "Nyota Roots",
    description:
      "An education website with distinct journeys for parents, schools, and organisations. Course information, certification details, and partnership enquiries are organised around the needs of each audience, with continued website support from INTAVOR.",
    image: "/images/nyota-roots-website.png",
    sector: "Education",
    demoUrl: "https://nyotaroots.stratedgesolutions.co.ke/#home",
    featured: true,
  },
  {
    id: 6,
    title: "Sun Rays Foundation",
    description:
      "A digital platform for a non-profit working across Africa, with programme pages, impact stories, event galleries, and content-management tools. Ongoing platform development and CMS support keep the site useful for supporters, volunteers, and partners.",
    image: "/images/sun-rays-foundation-website.png",
    sector: "Non-profit",
    demoUrl: "https://sunraysfoundationafrica.org",
    featured: true,
  },
];

export const highlights = [
  { label: "Client Websites Managed", value: "4" },
  { label: "Projects Delivered", value: "5+" },
  { label: "Sectors Served", value: "3" },
];
