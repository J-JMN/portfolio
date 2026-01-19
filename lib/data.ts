import { Github, Linkedin, Mail, Twitter } from "lucide-react";

export const personalInfo = {
    name: "John Doe",
    role: "Software Engineer & Web Developer",
    bio: "I'm a passionate software engineer with a knack for building scalable, user-friendly web applications. With expertise in modern frontend frameworks and robust backend systems, I turn complex problems into elegant solutions.",
    email: "john.doe@example.com",
    location: "San Francisco, CA",
    availability: "Open to new opportunities",
    socials: [
        {
            name: "GitHub",
            url: "https://github.com",
            icon: Github,
        },
        {
            name: "LinkedIn",
            url: "https://linkedin.com",
            icon: Linkedin,
        },
        {
            name: "Twitter",
            url: "https://twitter.com",
            icon: Twitter,
        },
        {
            name: "Email",
            url: "mailto:john.doe@example.com",
            icon: Mail,
        },
    ],
};

export const skills = {
    frontend: [
        { name: "React", level: 95 },
        { name: "Next.js", level: 90 },
        { name: "TypeScript", level: 90 },
        { name: "Tailwind CSS", level: 95 },
        { name: "Framer Motion", level: 85 },
        { name: "Redux", level: 80 },
    ],
    backend: [
        { name: "Node.js", level: 85 },
        { name: "Express", level: 85 },
        { name: "PostgreSQL", level: 80 },
        { name: "MongoDB", level: 75 },
        { name: "GraphQL", level: 70 },
    ],
    tools: [
        { name: "Git", level: 90 },
        { name: "Docker", level: 75 },
        { name: "AWS", level: 70 },
        { name: "Figma", level: 80 },
        { name: "VS Code", level: 95 },
    ],
};

export const experience = [
    {
        id: 1,
        company: "Tech Solutions Inc.",
        role: "Senior Frontend Engineer",
        period: "2022 - Present",
        description: "Leading the frontend team in rebuilding the core product using Next.js and TypeScript. Improved performance by 40% and established a comprehensive design system.",
        technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Jest"],
    },
    {
        id: 2,
        company: "Digital Innovations",
        role: "Full Stack Developer",
        period: "2020 - 2022",
        description: "Developed and maintained multiple client projects. Implemented secure authentication systems and real-time features using WebSockets.",
        technologies: ["React", "Node.js", "PostgreSQL", "Socket.io"],
    },
    {
        id: 3,
        company: "Creative Agency",
        role: "Web Developer",
        period: "2018 - 2020",
        description: "Collaborated with designers to create pixel-perfect responsive websites. Optimized sites for SEO and accessibility.",
        technologies: ["HTML", "CSS", "JavaScript", "WordPress"],
    },
];

export const projects = [
    {
        id: 1,
        title: "E-Commerce Platform",
        description: "A full-featured e-commerce platform with product filtering, cart functionality, and secure checkout. Built with Next.js and Stripe.",
        image: "/images/project-1.png",
        tags: ["Next.js", "Stripe", "Tailwind CSS", "Zustand"],
        demoUrl: "#",
        githubUrl: "#",
        featured: true,
    },
    {
        id: 2,
        title: "Task Management App",
        description: "A collaborative task management tool with real-time updates, drag-and-drop interface, and team workspaces.",
        image: "/images/project-2.png",
        tags: ["React", "Firebase", "Beautiful DnD", "Material UI"],
        demoUrl: "#",
        githubUrl: "#",
        featured: true,
    },
    {
        id: 3,
        title: "Analytics Dashboard",
        description: "A comprehensive analytics dashboard for visualizing social media metrics. Features interactive charts and data export.",
        image: "/images/project-3.png",
        tags: ["Vue.js", "D3.js", "Node.js", "Express"],
        demoUrl: "#",
        githubUrl: "#",
        featured: false,
    },
    {
        id: 4,
        title: "AI Content Generator",
        description: "An AI-powered application that generates blog posts and social media captions using OpenAI API.",
        image: "/images/project-4.png",
        tags: ["Next.js", "OpenAI API", "Radix UI", "Vercel AI SDK"],
        demoUrl: "#",
        githubUrl: "#",
        featured: true,
    },
];

export const highlights = [
    { label: "Years Experience", value: "5+" },
    { label: "Projects Completed", value: "50+" },
    { label: "Happy Clients", value: "30+" },
];
