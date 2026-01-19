"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FadeIn from "@/components/animations/FadeIn";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/lib/data";

export default function ProjectDetailPage() {
  const params = useParams();
  const projectId = Number(params.id);
  const project = projects.find((p) => p.id === projectId);

  if (!project) {
    return (
      <main className="min-h-screen bg-background">
        <Navbar />
        <section className="pt-32 pb-16">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h1 className="text-4xl font-heading font-bold mb-4">
              Project Not Found
            </h1>
            <p className="text-muted-foreground mb-8">
              The project you're looking for doesn't exist.
            </p>
            <Button asChild>
              <Link href="/projects">
                <ArrowLeft className="mr-2 w-4 h-4" />
                Back to Projects
              </Link>
            </Button>
          </div>
        </section>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-32 pb-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 blur-3xl -z-10 rounded-full" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 blur-3xl -z-10 rounded-full" />

        <div className="container mx-auto px-4 md:px-6">
          <FadeIn>
            <Button variant="ghost" asChild className="mb-8 -ml-4">
              <Link href="/projects">
                <ArrowLeft className="mr-2 w-4 h-4" />
                Back to Projects
              </Link>
            </Button>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <FadeIn direction="right">
              <div className="relative aspect-video rounded-2xl overflow-hidden bg-muted shadow-2xl">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </FadeIn>

            <FadeIn direction="left">
              <div className="space-y-6">
                <div>
                  <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
                    {project.title}
                  </h1>
                  <p className="text-lg text-foreground/80 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                    Technologies Used
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="px-3 py-1"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 pt-4">
                  {project.demoUrl && project.demoUrl !== "#" && (
                    <Button size="lg" className="rounded-full" asChild>
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="mr-2 w-4 h-4" />
                        View Live Site
                      </a>
                    </Button>
                  )}
                  {project.githubUrl && project.githubUrl !== "#" && (
                    <Button
                      size="lg"
                      variant="outline"
                      className="rounded-full"
                      asChild
                    >
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="mr-2 w-4 h-4" />
                        View Source
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <FadeIn>
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-heading font-bold mb-6">
                Project Overview
              </h2>
              <div className="prose prose-invert max-w-none">
                <p className="text-foreground/80 leading-relaxed text-lg">
                  {project.description}
                </p>
                <p className="text-foreground/80 leading-relaxed mt-4">
                  This project was built using modern web technologies including{" "}
                  {project.tags.slice(0, 3).join(", ")}
                  {project.tags.length > 3
                    ? ` and ${project.tags.length - 3} more technologies`
                    : ""}
                  . The focus was on delivering a high-quality, performant
                  solution that meets the client's needs while providing an
                  excellent user experience.
                </p>
              </div>

              {/* Back to Projects Button at Bottom */}
              <div className="mt-12 pt-8 border-t border-border">
                <Button variant="outline" asChild className="rounded-full">
                  <Link href="/projects">
                    <ArrowLeft className="mr-2 w-4 h-4" />
                    Back to All Projects
                  </Link>
                </Button>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </main>
  );
}
