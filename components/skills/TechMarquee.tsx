"use client";

import Image from "next/image";

interface Technology {
  name: string;
  icon: string;
}

const technologies: Technology[] = [
  // Frontend
  {
    name: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  },
  {
    name: "Next.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
  },
  {
    name: "TypeScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
  },
  {
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
  },
  {
    name: "Tailwind CSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
  },
  {
    name: "Bootstrap",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg",
  },
  {
    name: "CSS3",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
  },
  {
    name: "HTML5",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
  },
  // Backend
  {
    name: "Node.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "Express",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
  },
  {
    name: "Python",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
  },
  {
    name: "Django",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg",
  },
  {
    name: "FastAPI",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg",
  },
  {
    name: "Flask",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg",
  },
  {
    name: "Laravel",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg",
  },
  // Databases
  {
    name: "PostgreSQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
  },
  {
    name: "MongoDB",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
  },
  {
    name: "MySQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
  },
  {
    name: "Prisma",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg",
  },
  {
    name: "Docker",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
  },
];

function TechItem({ tech }: { tech: Technology }) {
  return (
    <div className="flex-shrink-0 flex flex-col items-center justify-center gap-3 px-6 md:px-8 group cursor-default">
      <div className="relative w-14 h-14 md:w-18 md:h-18 lg:w-20 lg:h-20 flex items-center justify-center rounded-2xl bg-card/80 backdrop-blur-sm border border-primary/10 shadow-lg group-hover:border-primary/40 group-hover:shadow-primary/20 group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
        <Image
          src={tech.icon}
          alt={tech.name}
          width={48}
          height={48}
          className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 object-contain filter group-hover:brightness-110 transition-all duration-300"
          unoptimized
        />
      </div>
      <span className="text-xs md:text-sm font-medium text-muted-foreground group-hover:text-primary transition-colors duration-300 whitespace-nowrap">
        {tech.name}
      </span>
    </div>
  );
}

function MarqueeRow({
  technologies,
  reverse = false,
  speed = 30,
}: {
  technologies: Technology[];
  reverse?: boolean;
  speed?: number;
}) {
  return (
    <div className="flex overflow-hidden group">
      <div
        className={`flex animate-marquee group-hover:[animation-play-state:paused] ${reverse ? "[animation-direction:reverse]" : ""}`}
        style={{ animationDuration: `${speed}s` }}
      >
        {technologies.map((tech, index) => (
          <TechItem key={`first-${tech.name}-${index}`} tech={tech} />
        ))}
      </div>
      <div
        className={`flex animate-marquee group-hover:[animation-play-state:paused] ${reverse ? "[animation-direction:reverse]" : ""}`}
        style={{ animationDuration: `${speed}s` }}
        aria-hidden="true"
      >
        {technologies.map((tech, index) => (
          <TechItem key={`second-${tech.name}-${index}`} tech={tech} />
        ))}
      </div>
    </div>
  );
}

export default function TechMarquee() {
  const firstRowTech = technologies.slice(0, 13);
  const secondRowTech = technologies.slice(13);

  return (
    <section className="py-16 overflow-hidden relative">
      {/* Background decorations */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl transform -translate-y-1/2" />
        <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl transform -translate-y-1/2" />
      </div>

      <div className="container mx-auto px-4 md:px-6 mb-12">
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-heading font-bold mb-3">
            Technologies I <span className="text-primary">Work With</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            A continuous journey through the tools and frameworks that power my
            development workflow
          </p>
        </div>
      </div>

      {/* Marquee container with gradient masks */}
      <div className="relative">
        {/* Left gradient mask */}
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-40 lg:w-56 bg-linear-to-r from-background via-background/80 to-transparent z-10 pointer-events-none" />
        {/* Right gradient mask */}
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-40 lg:w-56 bg-linear-to-l from-background via-background/80 to-transparent z-10 pointer-events-none" />

        {/* First row - scrolling left */}
        <div className="mb-6">
          <MarqueeRow technologies={firstRowTech} speed={40} />
        </div>

        {/* Second row - scrolling right */}
        <div>
          <MarqueeRow technologies={secondRowTech} reverse speed={30} />
        </div>
      </div>

      {/* Decorative line */}
      <div className="container mx-auto px-4 md:px-6 mt-14">
        <div className="h-px bg-linear-to-r from-transparent via-primary/30 to-transparent" />
      </div>
    </section>
  );
}
