import { Mail } from "lucide-react";

export const brandInfo = {
  name: "INTAVOR",
  tagline: "Tech built with intention.",
  role: "Web development and ongoing website support",
  bio: "INTAVOR builds and manages websites and web applications for businesses and organisations, from initial delivery to ongoing updates and technical support.",
  email: "intavortech@gmail.com",
  location: "Nairobi, Kenya",
  availability: "Open for projects and website support",
  socials: [
    {
      name: "Email",
      url: "mailto:intavortech@gmail.com",
      icon: Mail,
    },
  ],
};

export const skills = {
  frontend: [
    { name: "React" },
    { name: "Next.js" },
    { name: "TypeScript" },
    { name: "JavaScript" },
    { name: "Tailwind CSS" },
    { name: "Bootstrap v5" },
    { name: "CSS3" },
  ],
  backend: [
    { name: "Django" },
    { name: "Python" },
    { name: "Laravel" },
    { name: "Node.js" },
    { name: "Express" },
    { name: "FastAPI" },
    { name: "Flask" },
    { name: "MySQL" },
    { name: "PostgreSQL" },
    { name: "MongoDB" },
    { name: "Prisma" },
  ],
  tools: [
    { name: "Git" },
    { name: "GitHub" },
    { name: "Docker" },
    { name: "Vercel" },
    { name: "cPanel" },
    { name: "Linux" },
  ],
};

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
    technologies: ["React", "TypeScript", "Django", "MySQL"],
    projectId: 6,
  },
  {
    id: 2,
    client: "Stratedge Solutions",
    service: "Business platform management",
    status: "Ongoing support",
    summary:
      "Continued support for a consultancy platform that brings together service content, discovery-call bookings, enquiries, publishing, and day-to-day administration.",
    responsibilities: [
      "Website and application updates",
      "Booking, email, and enquiry workflows",
      "CMS and admin dashboard support",
    ],
    technologies: ["React", "TypeScript", "Django", "MySQL"],
    projectId: 2,
  },
  {
    id: 3,
    client: "Nyota Roots",
    service: "Education website support",
    status: "Ongoing support",
    summary:
      "Website management for an education programme serving parents, schools, and organisations, with clear pathways to courses, certification, and partnerships.",
    responsibilities: [
      "Programme and course content updates",
      "Responsive experience improvements",
      "Technical support for outreach pages",
    ],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
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
    technologies: ["Next.js", "JavaScript", "Tailwind CSS"],
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
    tags: ["Next.js", "JavaScript", "Tailwind CSS"],
    demoUrl: "https://chanzo.co.ke",
    featured: true,
  },
  {
    id: 2,
    title: "Stratedge Solutions",
    description:
      "A full-stack consultancy platform combining service pages, a guided booking flow, transactional emails, publishing tools, and a private dashboard for managing enquiries and content. The platform remains under ongoing INTAVOR support.",
    image: "/images/stratedge-solutions-website.png",
    tags: ["React", "TypeScript", "Tailwind CSS", "Django", "MySQL"],
    demoUrl: "https://stratedgesolutions.co.ke",
    featured: true,
  },
  {
    id: 4,
    title: "Nyota Roots",
    description:
      "An education website with distinct journeys for parents, schools, and organisations. Course information, certification details, and partnership enquiries are organised around the needs of each audience, with continued website support from INTAVOR.",
    image: "/images/nyota-roots-website.png",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Education"],
    demoUrl: "https://nyotaroots.stratedgesolutions.co.ke/#home",
    featured: true,
  },
  {
    id: 6,
    title: "Sun Rays Foundation",
    description:
      "A digital platform for a non-profit working across Africa, with programme pages, impact stories, event galleries, and content-management tools. Ongoing platform development and CMS support keep the site useful for supporters, volunteers, and partners.",
    image: "/images/sun-rays-foundation-website.png",
    tags: ["React", "TypeScript", "Tailwind CSS", "Django", "MySQL"],
    demoUrl: "https://sunraysfoundationafrica.org",
    featured: true,
  },
  {
    id: 5,
    title: "Enhanced Tic Tac Toe",
    description:
      "A browser-based game experiment with computer opponents, persistent scoring, tutorials, rewards, and polished feedback. It demonstrates interaction design and custom game logic beyond client website work.",
    image: "/images/tic-tac-toe-game-website.png",
    tags: ["Next.js", "JavaScript", "CSS", "Game Logic"],
    demoUrl: "https://tic-tac-toe-rho-two-61.vercel.app/",
    featured: false,
  },
];

export const highlights = [
  { label: "Client Websites Managed", value: "4" },
  { label: "Projects Delivered", value: "5+" },
  { label: "Technologies in Practice", value: "15+" },
];
