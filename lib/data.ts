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
      "The digital face of an education technology startup on a mission to make tech skills accessible to everyone. I built a website that captures their energy — sleek animations that draw you in, clear messaging that explains their vision, and a design that looks stunning whether you're viewing on your phone or a big screen. This was my first real-world project, built during my internship.",
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
      "A complete digital platform for a business consultancy that helps companies form strategic partnerships. More than just a website — it's their entire online operation. Clients can book discovery calls through a guided step-by-step process, the team publishes insights on their blog, and every inquiry lands in an organized dashboard. The founder manages everything herself, no technical help needed.",
    image: "/images/stratedge-solutions-website.png",
    tags: ["React", "TypeScript", "Tailwind CSS", "Django", "MySQL"],
    demoUrl: "https://stratedgesolutions.co.ke",
    githubUrl: "https://github.com/J-JMN/STRATEDGE-SOLUTIONS",
    featured: true,
  },
  {
    id: 4,
    title: "Nyota Roots",
    description:
      "A welcoming digital home for a children's life skills program that operates in schools across Kenya. The website speaks to three different audiences — parents exploring enrichment options, schools looking to partner, and organizations seeking collaboration. It features course information, certification details, and easy ways to get in touch. This client came to me after seeing my work on Stratedge Solutions.",
    image: "/images/nyota-roots-website.png",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Education"],
    demoUrl: "https://nyotaroots.stratedgesolutions.co.ke/#home",
    githubUrl: "https://github.com/J-JMN/nyotaroots",
    featured: true,
  },
  {
    id: 6,
    title: "Sun Rays Foundation",
    description:
      "A powerful digital platform for an international non-profit transforming lives across East Africa. The website showcases their programs, shares inspiring impact stories, and connects them with donors, volunteers, and partners worldwide. Features an easy-to-use admin panel so the team can manage everything themselves — from blog posts to event galleries — without any technical knowledge.",
    image: "/images/sun-rays-foundation-website.png",
    tags: ["React", "TypeScript", "Tailwind CSS", "Django", "MySQL"],
    demoUrl: "https://sunraysfoundationafrica.org",
    githubUrl: "https://github.com/J-JMN/sun-rays-foundation",
    featured: true,
  },
  {
    id: 5,
    title: "Tic Tac Toe Game",
    description:
      "A beautifully crafted take on the classic game we all know and love. Challenge a friend or test your skills against a clever computer opponent. Features score tracking to settle debates, a helpful tutorial for newcomers, and fun rewards to keep you playing. Simple on the surface, addictive underneath.",
    image: "/images/tic-tac-toe-game-website.png",
    tags: ["Next.js", "JavaScript", "CSS", "Game Logic"],
    demoUrl: "https://tic-tac-toe-rho-two-61.vercel.app/",
    githubUrl: "https://github.com/J-JMN/TicTacToe",
    featured: false,
  },
];

export const highlights = [
  { label: "Projects Delivered", value: "5+" },
  { label: "Happy Clients", value: "4+" },
  { label: "Technologies", value: "15+" },
];
