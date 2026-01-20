"use client";

import Image from "next/image";
import FadeIn from "@/components/animations/FadeIn";

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
    <div className="shrink-0 flex flex-col items-center justify-center gap-2 mx-4 md:mx-6 group cursor-default">
      <div className="relative w-14 h-14 md:w-16 md:h-16 lg:w-18 lg:h-18 flex items-center justify-center rounded-xl bg-card/60 backdrop-blur-sm border border-primary/10 shadow-md group-hover:border-primary/40 group-hover:shadow-primary/20 group-hover:shadow-lg transition-all duration-300 group-hover:scale-105">
        <Image
          src={tech.icon}
          alt={tech.name}
          width={40}
          height={40}
          className="w-7 h-7 md:w-8 md:h-8 lg:w-9 lg:h-9 object-contain filter group-hover:brightness-110 transition-all duration-300"
          unoptimized
        />
      </div>
      <span className="text-[10px] md:text-xs font-medium text-muted-foreground/80 group-hover:text-primary transition-colors duration-300 whitespace-nowrap">
        {tech.name}
      </span>
    </div>
  );
}

export default function TechMarquee() {
  const allTech = [...technologies];

  return (
    <section className="py-8 overflow-hidden relative">
      {/* Inline styles for the marquee animation */}
      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-100% - 0px));
          }
        }
        .marquee-container:hover .marquee-track {
          animation-play-state: paused;
        }
        .marquee-track {
          display: flex;
          flex-shrink: 0;
        }
      `}</style>

      <FadeIn>
        {/* Marquee container with gradient masks */}
        <div className="relative">
          {/* Left gradient mask */}
          <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 lg:w-48 bg-linear-to-r from-background via-background/90 to-transparent z-10 pointer-events-none" />
          {/* Right gradient mask */}
          <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 lg:w-48 bg-linear-to-l from-background via-background/90 to-transparent z-10 pointer-events-none" />

          {/* Single row infinite marquee */}
          <div className="marquee-container flex overflow-hidden py-4">
            <div
              className="marquee-track flex shrink-0"
              style={{ animation: "scroll 40s linear infinite" }}
            >
              {allTech.map((tech, index) => (
                <TechItem key={`first-${tech.name}-${index}`} tech={tech} />
              ))}
            </div>
            <div
              className="marquee-track flex shrink-0"
              style={{ animation: "scroll 40s linear infinite" }}
              aria-hidden="true"
            >
              {allTech.map((tech, index) => (
                <TechItem key={`second-${tech.name}-${index}`} tech={tech} />
              ))}
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
