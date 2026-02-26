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
      "Chanzo Technologies, an Edu-Tech startup, needed a website that would establish credibility in a crowded market and clearly communicate what makes their approach to technology education different.",
    solution:
      "During my internship, I built a modern Next.js site with scroll-driven animations, dynamic service showcases, and a responsive layout that works seamlessly across devices. The design mirrors the brand's energy — clean, forward-thinking, and approachable.",
    impact:
      "The website became Chanzo's primary lead generation tool, helping them attract clients and partners. It also gave me my first real taste of shipping production code for a business with real users.",
  },
  2: {
    challenge:
      "Stratedge Solutions, a strategic partnerships consultancy, needed a complete digital presence from scratch — not just a marketing site, but a platform to manage blog content, handle discovery call bookings, and process client inquiries, all with an admin panel the founder could use independently.",
    solution:
      "I built a full-stack application: React 19 with TypeScript on the frontend and a Django REST API backend with JWT authentication. The platform includes a blog CMS with Cloudinary image uploads, a multi-step booking wizard with email notifications to both admin and client, contact management with read/unread tracking, and a dashboard with real-time stats. Deployed on cPanel with Passenger WSGI.",
    impact:
      "This was my first freelance client project and it launched a real business online. The founder manages all content, bookings, and inquiries through the admin panel daily. It proved I could deliver a production-grade full-stack application end to end.",
  },
  3: {
    challenge:
      "I wanted to build a showcase piece demonstrating how I'd approach a non-profit website — one that balances emotional storytelling with clear calls to action, accessibility, and modern design.",
    solution:
      "Using Next.js and TypeScript, I designed a template inspired by the Sun Rays Foundation NGO. The site prioritizes storytelling through program showcases, impact statistics, and volunteer/donor pathways — all built with accessibility-first principles and a warm visual language.",
    impact:
      "This design showcase led directly to the Sun Rays Foundation commissioning me to rebuild their actual website. It demonstrated that thoughtful design work can open real client doors.",
  },
  4: {
    challenge:
      "Nyota Roots runs life skills programs in schools and needed a website that could speak to three different audiences: parents looking for enrichment programs, schools seeking partnerships, and organizations interested in collaboration.",
    solution:
      "I built a Next.js platform with dedicated pathways for each audience. Course catalogs with certification details, school partnership information, and clear contact channels — all wrapped in a warm, approachable design that reflects the program's focus on children's development.",
    impact:
      "The site serves as Nyota Roots' primary outreach and lead generation tool, helping them onboard new school partners and communicate program value to parents. The contact functionality has opened doors for new partnership opportunities.",
  },
  5: {
    challenge:
      "I wanted to create a fun, interactive project that would showcase my ability to implement game logic while providing an enjoyable experience for users of all ages.",
    solution:
      "I built a polished Tic Tac Toe game featuring two play modes: player vs player and player vs AI. The game includes score tracking, a helpful tutorial for new players, and a reward system to keep players engaged.",
    impact:
      "This project demonstrates my versatility as a developer, showing that I can create entertaining, interactive experiences beyond traditional business websites, with clean code and thoughtful UX throughout.",
  },
  6: {
    challenge:
      "The Sun Rays Foundation reached out after seeing my design showcase and commissioned me to modernize their existing website. Their current site needed a complete visual and structural overhaul to better represent their mission and improve the user experience across devices.",
    solution:
      "I'm rebuilding the site from the ground up with Next.js and TypeScript — a fresh contemporary design with improved navigation, stronger storytelling, and a fully responsive mobile experience. This is an ongoing engagement that includes continued maintenance and iterative improvements.",
    impact:
      "Work in progress. The redesign is actively underway, and this project represents my first ongoing client retainer — a relationship that grew directly from a showcase piece into a real commissioned engagement.",
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
