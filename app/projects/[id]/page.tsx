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
      "Chanzo Technologies had a big vision — to make technology education accessible to everyone in Kenya. But without an online presence, they were invisible to the students, parents, and partners they wanted to reach. They needed a website that could establish instant credibility and clearly communicate why they're different in a crowded education market.",
    solution:
      "I created a website that feels alive. Smooth animations guide visitors through their story as they scroll. Each service is showcased with clear explanations and eye-catching visuals. The design adapts beautifully to any screen size, so whether someone discovers Chanzo on their phone during a commute or on a computer at home, they get the full experience.",
    impact:
      "The website became Chanzo's primary way of attracting new students and partners. It transformed them from 'that startup nobody's heard of' into a credible player in Kenya's education technology space. For me, it was the project that proved I could deliver real value for a real business.",
  },
  2: {
    challenge:
      "The founder of Stratedge Solutions was running her consultancy through scattered emails, phone calls, and manual scheduling. She needed a professional online home that could handle everything — showcasing her expertise, letting potential clients book calls, managing inquiries, and sharing business insights — all without needing to hire a tech person.",
    solution:
      "I built her a complete digital headquarters. Potential clients can browse her services, read helpful articles on the blog, and book discovery calls through a friendly step-by-step process that asks the right questions upfront. When someone reaches out, both she and the client get email confirmations instantly. Behind the scenes, she has a private dashboard where she can write blog posts, upload images, track who's contacted her, and see statistics on her site's activity — all through simple click-and-type interfaces.",
    impact:
      "This was my first freelance project, and it changed everything. A real business now runs on something I built. The founder uses her dashboard daily to manage her growing consultancy, and the polished online presence has helped her attract clients who take her seriously from the first click. It proved to me that I could deliver a complete, professional solution from start to finish.",
  },
  4: {
    challenge:
      "Nyota Roots teaches children essential life skills through school programs — but they had no way to reach the people who needed to know about them. Parents searching for enrichment programs, schools looking to add value for students, and organizations wanting to partner all needed different information, and there was nowhere to send them.",
    solution:
      "I designed a website that feels warm and inviting, just like their programs. Each audience finds their path immediately: parents can explore courses and see what their children will learn, schools can discover partnership opportunities, and organizations can understand collaboration options. The design uses friendly colors and imagery that reflect the joy of children learning and growing.",
    impact:
      "The website has become Nyota Roots' primary outreach tool. Schools now discover them online and reach out for partnerships. Parents feel confident enrolling their children after seeing the professional presentation of the programs. What's more, this client found me through my previous work — proof that quality work creates its own opportunities.",
  },
  5: {
    challenge:
      "Sometimes you just want to build something fun. I wanted to create a game that anyone could pick up and enjoy — something that would bring a smile to someone's face during a break, settle a friendly rivalry, or help pass the time. The classic Tic Tac Toe seemed perfect, but I wanted to make it special.",
    solution:
      "I reimagined the simple game we all played as kids. You can challenge a friend sitting next to you or play against a computer opponent that actually puts up a fight. The score keeps track across games so you can crown a true champion. New to the game? A friendly tutorial walks you through everything. And little rewards along the way make every victory feel satisfying.",
    impact:
      "This project shows a different side of what I can create. Beyond business websites and professional platforms, I can build experiences that are purely about joy and engagement. It's polished, it's fun, and it proves that good design and attention to detail matter in everything — even a game you've played a thousand times before.",
  },
  6: {
    challenge:
      "Sun Rays Foundation is on a mission to transform lives across Africa — but their incredible work was invisible online. With programs spanning education, healthcare, and community development across multiple countries, they needed more than a website. They needed a digital home that could tell their story, showcase their impact, and connect them with donors, volunteers, and partners who share their vision.",
    solution:
      "I created a complete digital platform that puts Sun Rays Foundation's mission front and center. Visitors can explore life-changing programs, read powerful impact stories, browse event galleries, and easily get in touch — whether they want to donate, volunteer, or partner. Behind the scenes, the team has full control: they can publish blog posts, update program details, manage events, and respond to inquiries — all without touching a single line of code. The site looks stunning on any device and loads fast, ensuring no one misses a chance to connect.",
    impact:
      "Sun Rays Foundation now has a professional digital presence that matches the scale of their ambition. The platform has become their primary tool for reaching supporters across borders, sharing success stories that inspire action, and managing the growing interest in their work. What started as 'we need a website' became a launchpad for expanding their reach and impact across East Africa.",
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
