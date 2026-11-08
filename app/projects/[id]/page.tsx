"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FadeIn from "@/components/animations/FadeIn";
import { Button } from "@/components/ui/button";
import { clientEngagements, projects } from "@/lib/data";

const projectOverviews: Record<
  number,
  { challenge: string; solution: string; impact: string }
> = {
  1: {
    challenge:
      "Chanzo Technologies needed a clear public website that could explain its technology education services to students, parents, and potential partners across different devices.",
    solution:
      "INTAVOR delivered a responsive company website with structured service content and purposeful motion that guides visitors through the organisation's story without getting in the way of the information.",
    impact:
      "The result is a consistent digital home for Chanzo's services and enquiries. Ongoing support now covers content changes, presentation refinements, and technical upkeep.",
  },
  2: {
    challenge:
      "Stratedge Solutions needed more than a brochure site: its consultancy content, discovery-call scheduling, enquiries, and publishing workflow all needed to work together in one manageable platform.",
    solution:
      "INTAVOR built the public experience, a guided booking flow, transactional email handling, blog tools, and a private dashboard for managing content and incoming enquiries.",
    impact:
      "The consultancy now has a single digital platform for presenting its work and handling key website workflows. Continued support keeps those workflows and the public site maintained.",
  },
  4: {
    challenge:
      "Nyota Roots serves parents, schools, and organisations, each with different questions about its children's life-skills programmes, courses, and partnership options.",
    solution:
      "INTAVOR organised the site around those three audience journeys, combining approachable visuals with direct routes to course information, certification details, and enquiries.",
    impact:
      "Nyota Roots has a focused online reference for programme outreach and partnership conversations, supported through ongoing content and technical updates.",
  },
  6: {
    challenge:
      "Sun Rays Foundation is on a mission to transform lives across Africa — but their incredible work was invisible online. With programs spanning education, healthcare, and community development across multiple countries, they needed more than a website. They needed a digital home that could tell their story, showcase their impact, and connect them with donors, volunteers, and partners who share their vision.",
    solution:
      "INTAVOR built a responsive platform with programme pages, impact storytelling, galleries, contact routes, and content-management workflows for non-technical updates.",
    impact:
      "The foundation now has a maintainable platform for sharing its work with supporters, volunteers, and partners. The active retainer covers continued development, CMS iteration, and website management.",
  },
};

export default function ProjectDetailPage() {
  const params = useParams();
  const projectId = Number(params.id);
  const project = projects.find((p) => p.id === projectId);
  const engagement = clientEngagements.find((e) => e.projectId === projectId);

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
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 blur-3xl -z-10 rounded-full" />

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

                <dl className="grid grid-cols-2 gap-4 rounded-2xl border border-border/60 bg-card/40 p-5">
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                      Sector
                    </dt>
                    <dd className="mt-1.5 font-medium">{project.sector}</dd>
                  </div>
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                      Engagement
                    </dt>
                    <dd className="mt-1.5 font-medium">
                      {engagement ? (
                        <span className="inline-flex items-center gap-2 text-[#8be8ce]">
                          <span className="h-1.5 w-1.5 rounded-full bg-[#8be8ce]" />
                          Delivered · {engagement.status}
                        </span>
                      ) : (
                        "Independent build"
                      )}
                    </dd>
                  </div>
                </dl>

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
                    The Approach
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
