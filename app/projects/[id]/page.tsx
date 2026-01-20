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

const projectOverviews: Record<
  number,
  { challenge: string; solution: string; impact: string }
> = {
  1: {
    challenge:
      "Chanzo Technologies needed a professional digital presence that would establish credibility in the competitive Edu-Tech space while effectively communicating their innovative approach to technology education.",
    solution:
      "I designed and developed a sleek, modern website with smooth scroll animations and an intuitive navigation structure. The site features dynamic service showcases, beautiful dynamic background and a responsive layout that adapts seamlessly across all devices.",
    impact:
      "The new website has significantly enhanced Chanzo's brand perception, providing a polished platform that effectively converts visitors into leads and establishes trust with potential clients and partners.",
  },
  2: {
    challenge:
      "As my first client project, Stratedge Solutions required a website that would convey their expertise in strategic consulting while maintaining a clean, professional aesthetic that appeals to corporate clients.",
    solution:
      "I built a streamlined React application with Vite, featuring a minimalist design that puts their services front and center. The backend integration with Python ensures reliable contact form functionality and data handling.",
    impact:
      "This project marked a significant milestone in my freelance journey, delivering a fully functional website that the client uses daily to attract and engage potential consulting clients.",
  },
  3: {
    challenge:
      "Sun Rays Foundation needed a heartfelt digital platform that would effectively communicate their charitable mission while making it easy for supporters to learn about their programs and get involved.",
    solution:
      "I crafted an accessible, emotionally engaging website using Next.js and TypeScript. Special attention was paid to storytelling elements, program showcases, and clear calls-to-action that guide visitors toward supporting the foundation.",
    impact:
      "The website serves as the foundation's would have been primary outreach tool, helping them share their impact stories and connect with donors and volunteers who believe in their cause but in a more modern look.",
  },
  4: {
    challenge:
      "Nyota Roots required a comprehensive website to promote their educational program",
    solution:
      "I developed a feature-rich website with a clean and intuitive design. The design puts the focus on the program,the students, parents and the school partners.",
    impact:
      "The website now serves as a lead generation platform for Nyota Roots, helping them attract more students and partners. The website is also used to raise funds for the program, create partnership opportunities too through the communication functionality in the website.",
  },
  5: {
    challenge:
      "I wanted to create a fun, interactive project that would showcase my ability to implement game logic while providing an enjoyable experience for users of all ages.",
    solution:
      "I built a polished Tic Tac Toe game featuring two play modes: player vs player and player vs AI. The game includes score tracking, a helpful tutorial for new players, and a reward system to keep players engaged.",
    impact:
      "This project demonstrates my versatility as a developer, showing that I can create entertaining, interactive experiences beyond traditional business websites, with clean code and thoughtful UX throughout.",
  },
};

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
              The project you&apos;re looking for doesn&apos;t exist.
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
    <main className="min-h-screen bg-background overflow-x-hidden">
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
              {projectOverviews[project.id] ? (
                <>
                  <h2 className="text-2xl font-heading font-bold mb-6">
                    The Challenge
                  </h2>
                  <p className="text-foreground/80 leading-relaxed text-lg mb-8">
                    {projectOverviews[project.id].challenge}
                  </p>

                  <h2 className="text-2xl font-heading font-bold mb-6">
                    My Approach
                  </h2>
                  <p className="text-foreground/80 leading-relaxed text-lg mb-8">
                    {projectOverviews[project.id].solution}
                  </p>

                  <h2 className="text-2xl font-heading font-bold mb-6">
                    The Result
                  </h2>
                  <p className="text-foreground/80 leading-relaxed text-lg">
                    {projectOverviews[project.id].impact}
                  </p>
                </>
              ) : (
                <>
                  <h2 className="text-2xl font-heading font-bold mb-6">
                    Project Overview
                  </h2>
                  <p className="text-foreground/80 leading-relaxed text-lg">
                    {project.description}
                  </p>
                </>
              )}

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
