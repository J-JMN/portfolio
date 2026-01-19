"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ProjectCard from "@/components/projects/ProjectCard";
import FadeIn from "@/components/animations/FadeIn";
import { projects } from "@/lib/data";

export default function FeaturedProjects() {
  const featuredProjects = projects.filter(p => p.featured).slice(0, 3);

  return (
    <section className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <FadeIn direction="right">
            <h2 className="text-3xl md:text-4xl font-heading font-bold">Featured Work</h2>
            <p className="text-muted-foreground mt-2 max-w-lg">
              A selection of my recent projects showcasing my expertise in modern web development.
            </p>
          </FadeIn>
          <FadeIn direction="left">
            <Button variant="outline" asChild className="group">
              <Link href="/projects">
                View All Projects
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
