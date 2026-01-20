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
    tools: [
        { name: "Docker" },
    ],
};

export const experience = [
    {
        id: 1,
        company: "Chanzo Technologies",
        role: "Junior Frontend Developer",
        period: "Jan 2026 - Present",
        description: "Contributing to both frontend and backend development of web applications. Building responsive user interfaces and developing server-side functionality to deliver complete solutions.",
        technologies: ["Next.js", "JavaScript", "Laravel", "Bootstrap v5", "MySQL"],
    },
    {
        id: 2,
        company: "Chanzo Technologies",
        role: "Software Development Intern",
        period: "Oct 2025 - Dec 2025",
        description: "Gained hands-on experience in fullstack development. Built the company website and contributed to internal projects while learning industry best practices.",
        technologies: ["React", "Next.js", "JavaScript", "Tailwind CSS"],
    },
];

export const projects = [
    {
        id: 1,
        title: "Chanzo Technologies",
        description: "Professional website for an Edu-Tech company showcasing their services. Built during my internship with modern design and smooth animations.",
        image: "/images/chanzo-website.png",
        tags: ["Next.js", "JavaScript", "Tailwind CSS"],
        demoUrl: "https://chanzo.co.ke",
        githubUrl: "#",
        featured: true,
    },
    {
        id: 2,
        title: "Stratedge Solutions",
        description: "Professional website for a strategic consulting firm. My first client project, featuring a clean design with service showcases and contact functionality.",
        image: "/images/stratedge-solutions-website.png",
        tags: ["React", "Vite", "Python", "CSS"],
        demoUrl: "https://stratedgesolutions.co.ke",
        githubUrl: "#",
        featured: true,
    },
    {
        id: 3,
        title: "Sun Rays Foundation",
        description: "A mock-up website design inspired by the Sunrays Foundation NGO, crafted to demonstrate my approach to creating impactful digital experiences for charitable organizations. This showcase piece highlights modern design principles, accessibility standards, and engaging user interfaces tailored for non-profit storytelling. Available for purchase and fully customizable to align with your organization's unique mission, branding, and requirements.",
        image: "/images/sunrays-foundation-website.png",
        tags: ["Next.js", "TypeScript", "Tailwind CSS"],
        demoUrl: "https://sun-rays-foundation.vercel.app/",
        githubUrl: "#",
        featured: true,
    },
    {
        id: 4,
        title: "Nyota Roots",
        description: "Educational platform for a schools program company offering life skills courses and certifications for children. Features course management, school collaboration tools, and certification tracking.",
        image: "/images/nyota-roots-website.png",
        tags: ["Next.js", "TypeScript", "Tailwind CSS", "Education"],
        demoUrl: "https://stratedgesolutions.co.ke/nyotaroots/#home",
        githubUrl: "#",
        featured: true,
    },
    {
        id: 5,
        title: "Tic Tac Toe Game",
        description: "An interactive web-based Tic Tac Toe game with a clean UI, score tracking, tutorial, Rewards, and the option to play against another player or an AI opponent.",
        image: "/images/tic-tac-toe-game-website.png",
        tags: ["Next.js", "JavaScript", "CSS", "Game Logic"],
        demoUrl: "https://tic-tac-toe-rho-two-61.vercel.app/",
        githubUrl: "#",
        featured: false,
    },
];

export const highlights = [
    { label: "Projects Delivered", value: "5+" },
    { label: "Happy Clients", value: "3+" },
    { label: "Technologies", value: "15+" },
];
