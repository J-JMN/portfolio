"use client";

import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import {
  Card,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: {
    id: number;
    title: string;
    description: string;
    image: string;
    sector: string;
    demoUrl: string;
  };
  index?: number;
  wide?: boolean;
}

export default function ProjectCard({
  project,
  index = 0,
  wide = false,
}: ProjectCardProps) {
  return (
    <motion.div
      className={cn("h-full", wide && "md:col-span-2")}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
    >
      <Card
        className={cn(
          "group flex h-full flex-col gap-0 overflow-hidden border-border/50 bg-card/50 py-0 backdrop-blur-sm transition-colors hover:border-primary/50",
          wide &&
            "md:grid md:grid-cols-[1.1fr_0.9fr] md:grid-rows-[1fr_auto]",
        )}
      >
        <div
          className={cn(
            "relative aspect-video w-full overflow-hidden bg-muted",
            wide && "md:row-span-2 md:aspect-auto md:h-full md:min-h-80",
          )}
        >
          {/* Placeholder for image if generation failed or loading */}
          <div className="absolute inset-0 flex items-center justify-center text-muted-foreground bg-secondary/30">
            <span className="text-sm">Project Screenshot</span>
          </div>
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            onError={(e) => {
              // Fallback if image fails to load
              e.currentTarget.style.display = "none";
            }}
          />
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <Button
              size="icon"
              variant="default"
              asChild
              className="rounded-full hover:scale-110 transition-transform"
            >
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit the ${project.title} live website`}
              >
                <ExternalLink className="w-5 h-5" />
              </a>
            </Button>
          </div>
        </div>

        <CardHeader
          className={cn(
            "grow py-6",
            wide && "md:self-end md:px-8 md:pb-5 md:pt-8",
          )}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#b7adff]">
            {project.sector}
          </p>
          <CardTitle className="text-xl transition-colors group-hover:text-primary">
            {project.title}
          </CardTitle>
          <CardDescription className="line-clamp-3 leading-relaxed">
            {project.description}
          </CardDescription>
        </CardHeader>

        <CardFooter
          className={cn("pb-6 pt-0", wide && "md:px-8 md:pb-8")}
        >
          <Button variant="ghost" className="w-full group/btn" asChild>
            <Link href={`/projects/${project.id}`}>
              View Case Study
              <span className="ml-2 transition-transform group-hover/btn:translate-x-1">
                →
              </span>
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
