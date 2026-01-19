import { Github, Linkedin, Mail } from "lucide-react";

export const personalInfo = {
    name: "Joseph Mburu",
    role: "Fullstack Developer",
    bio: "I build scalable, high-performance web applications from frontend to backend. Specializing in React, Next.js, Node.js, and Python, I deliver end-to-end solutions that drive real business results.",
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
        { name: "Prisma" },
    ],
    tools: [
        { name: "Git" },
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
        technologies: ["Next.js", "JavaScript", "Laravel", "Bootstrap v5"],
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
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
        tags: ["Next.js", "JavaScript", "Tailwind CSS"],
        demoUrl: "https://chanzo.co.ke",
        githubUrl: "#",
        featured: true,
    },
    {
        id: 2,
        title: "Stratedge Solutions",
        description: "Professional website for a strategic consulting firm. My first client project, featuring a clean design with service showcases and contact functionality.",
        image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80",
        tags: ["React", "Vite", "Python", "CSS"],
        demoUrl: "https://stratedgesolutions.co.ke",
        githubUrl: "#",
        featured: true,
    },
    {
        id: 3,
        title: "Sun Rays Foundation",
        description: "Website for a charitable foundation, designed to showcase their mission, programs, and impact. Built with accessibility and user engagement in mind.",
        image: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=800&q=80",
        tags: ["Next.js", "TypeScript", "Tailwind CSS"],
        demoUrl: "https://sunraysfoundation.org",
        githubUrl: "#",
        featured: true,
    },
    {
        id: 4,
        title: "Tic Tac Toe Game",
        description: "An interactive web-based Tic Tac Toe game with a clean UI, score tracking, tutorial, Rewards, and the option to play against another player or an AI opponent.",
        image: "https://images.unsplash.com/photo-1611996575749-79a3a250f948?w=800&q=80",
        tags: ["Next.js", "JavaScript", "CSS", "Game Logic"],
        demoUrl: "https://tic-tac-toe-rho-two-61.vercel.app/",
        githubUrl: "#",
        featured: false,
    },
];

export const highlights = [
    { label: "Projects Delivered", value: "2+" },
    { label: "Happy Clients", value: "3+" },
    { label: "Technologies", value: "15+" },
];
