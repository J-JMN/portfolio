import { Github, Linkedin, Mail } from "lucide-react";

export const personalInfo = {
  name: "Joseph Mburu",
  role: "Fullstack Web-Developer",
  bio: "I help businesses bring their digital vision to life. From stunning websites to powerful web applications, I deliver solutions that engage users and drive growth.",
  email: "j.mburu.pro@gmail.com",
  location: "Nairobi, Kenya",
  availability: "Open to new opportunities",
  socials: [
    {
      name: "GitHub",
      url: "https://github.com/J-JMN",
      icon: Github,
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/joseph-mburu-n/",
      icon: Linkedin,
    },
    {
      name: "Email",
      url: "mailto:j.mburu.pro@gmail.com",
      icon: Mail,
    },
  ],
};

export const skills = {
  frontend: [
    { name: "React" },
    { name: "Next.js" },
    { name: "TypeScript" },
    { name: "Tailwind CSS" },
    { name: "Bootstrap v5" },
    { name: "CSS3" },
    { name: "JavaScript" },
  ],
  backend: [
    { name: "Node.js" },
    { name: "Express" },
    { name: "PostgreSQL" },
    { name: "MongoDB" },
    { name: "Python" },
    { name: "FastAPI" },
    { name: "Flask" },
    { name: "Django" },
    { name: "MySQL" },
    { name: "Laravel" },
    { name: "Prisma" },
  ],
  tools: [{ name: "Docker" }],
};

export const experience = [
  {
    id: 1,
    company: "Chanzo Technologies",
    role: "Junior Frontend Developer",
    period: "Jan 2026 - Present",
    description:
      "Contributing to both frontend and backend development of web applications. Building responsive user interfaces and developing server-side functionality to deliver complete solutions.",
    technologies: ["Next.js", "JavaScript", "Laravel", "Bootstrap v5", "MySQL"],
  },
  {
    id: 2,
    company: "Chanzo Technologies",
    role: "Software Development Intern",
    period: "Oct 2025 - Dec 2025",
    description:
      "Gained hands-on experience in fullstack development. Built the company website and contributed to internal projects while learning industry best practices.",
    technologies: ["React", "Next.js", "JavaScript", "Tailwind CSS"],
  },
];

export const projects = [
  {
    id: 1,
    title: "Chanzo Technologies",
    description:
      "Company website for an Edu-Tech startup, built during my internship. Features scroll-driven animations, service showcases, and a responsive design that reflects the brand's mission to make technology education accessible.",
    image: "/images/chanzo-website.png",
    tags: ["Next.js", "JavaScript", "Tailwind CSS"],
    demoUrl: "https://chanzo.co.ke",
    githubUrl: "https://github.com/edwardmuss/chanzo_website",
    featured: true,
  },
  {
    id: 2,
    title: "Stratedge Solutions",
    description:
      "Full-stack web platform for a strategic partnerships consultancy. Built with React 19 and a Django REST API backend — features a blog CMS with Cloudinary uploads, multi-step discovery call booking, contact management with dual email notifications, JWT-authenticated admin panel, and deployment on cPanel.",
    image: "/images/stratedge-solutions-website.png",
    tags: ["React", "TypeScript", "Tailwind CSS", "Django", "MySQL"],
    demoUrl: "https://stratedgesolutions.co.ke",
    githubUrl: "https://github.com/J-JMN/STRATEDGE-SOLUTIONS",
    featured: true,
  },
  {
    id: 3,
    title: "Sun Rays Foundation",
    description:
      "A design showcase inspired by the Sun Rays Foundation NGO — built to demonstrate my approach to impactful non-profit websites. Features modern design, accessibility-first principles, and engaging storytelling interfaces. Fully customizable and available as a template for charitable organizations.",
    image: "/images/sunrays-foundation-website.png",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    demoUrl: "https://sun-rays-foundation.vercel.app/",
    githubUrl: "https://github.com/J-JMN/sun-rays-foundation",
    featured: true,
  },
  {
    id: 4,
    title: "Nyota Roots",
    description:
      "Educational platform for a schools program offering life skills courses and certifications for children. Features course catalogs, school partnership tools, certification tracking, and a warm, approachable design aimed at parents and educators.",
    image: "/images/nyota-roots-website.png",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Education"],
    demoUrl: "https://nyotaroots.stratedgesolutions.co.ke/#home",
    githubUrl: "https://github.com/J-JMN/nyotaroots",
    featured: true,
  },
  {
    id: 5,
    title: "Tic Tac Toe Game",
    description:
      "An interactive web-based Tic Tac Toe game with a clean UI, score tracking, tutorial, Rewards, and the option to play against another player or an AI opponent.",
    image: "/images/tic-tac-toe-game-website.png",
    tags: ["Next.js", "JavaScript", "CSS", "Game Logic"],
    demoUrl: "https://tic-tac-toe-rho-two-61.vercel.app/",
    githubUrl: "https://github.com/J-JMN/TicTacToe",
    featured: false,
  },
  {
    id: 6,
    title: "Sun Rays Foundation (Official Site)",
    description:
      "Commissioned by the Sun Rays Foundation to modernize their existing website. Currently rebuilding the site from the ground up with a fresh, contemporary design — improving navigation, storytelling, and mobile experience. This is an ongoing engagement for continued maintenance and improvements.",
    image: "/images/realsunraysfoundation.png",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Website Redesign"],
    demoUrl: "https://sunraysfoundation.org",
    githubUrl: "https://github.com/J-JMN/sunraysfoundation.africa",
    featured: true,
  },
];

export const highlights = [
  { label: "Projects Delivered", value: "6+" },
  { label: "Happy Clients", value: "4+" },
  { label: "Technologies", value: "15+" },
];
