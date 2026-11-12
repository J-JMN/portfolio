"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ProjectCard from "@/components/projects/ProjectCard";
import FadeIn from "@/components/animations/FadeIn";
import { projects } from "@/lib/data";
import GlowDivider from "@/components/decor/GlowDivider";
import { cn } from "@/lib/utils";

export default function FeaturedProjects() {
  const featuredProjects = projects.filter((project) => project.featured).slice(0, 2);

  return (
    <section className="relative py-20 bg-secondary/20">
      <GlowDivider />
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <FadeIn direction="right">
            <h2 className="text-3xl md:text-4xl font-heading font-bold">Featured Work</h2>
            <p className="text-muted-foreground mt-2 max-w-lg">
              Every project turns a real organisational need into a digital
              experience that feels clear, credible, and easy to act on.
            </p>
          </FadeIn>
          <FadeIn direction="left">
            <Button variant="outline" asChild className="group">
              <Link href="/projects">
                View All Work
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </FadeIn>
        </div>

        <div
          className={cn(
            "grid grid-cols-1 gap-8",
            featuredProjects.length === 1 && "mx-auto max-w-xl",
            featuredProjects.length === 2 &&
              "mx-auto max-w-4xl md:grid-cols-2",
            featuredProjects.length === 3 &&
              "md:grid-cols-2 lg:grid-cols-3",
            featuredProjects.length >= 4 &&
              "mx-auto max-w-6xl md:grid-cols-2",
          )}
        >
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
