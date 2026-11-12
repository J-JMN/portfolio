import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FadeIn from "@/components/animations/FadeIn";
import StructuredData from "@/components/seo/StructuredData";
import { Button } from "@/components/ui/button";
import { clientEngagements, projects } from "@/lib/data";
import { createBreadcrumbStructuredData } from "@/lib/structured-data";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

const serviceLinks = {
  "website-design": {
    label: "Website Design",
    href: "/services/website-design",
  },
  "web-application-development": {
    label: "Web Application Development",
    href: "/services/web-application-development",
  },
};

const projectOverviews: Record<
  number,
  { challenge: string; solution: string; impact: string }
> = {
  1: {
    challenge:
      "Chanzo Technologies needed to explain a broad education technology offer to students, parents, and potential partners without making the experience feel dense or difficult to navigate.",
    solution:
      "INTAVOR shaped the content into clear service journeys, then built a responsive company website with purposeful motion that guides attention without competing with the message.",
    impact:
      "Chanzo now has a coherent digital presence that makes its services easier to grasp and gives every audience a clear route to learn more or make an enquiry.",
  },
  2: {
    challenge:
      "Stratedge Solutions needed more than a brochure site. Its expertise, discovery-call scheduling, enquiries, publishing, and internal content management had to work as one credible experience.",
    solution:
      "INTAVOR designed and built the public experience, a guided booking flow, transactional email handling, publishing tools, and a private dashboard for content and incoming enquiries.",
    impact:
      "The consultancy now presents its value and handles key client-facing workflows through one connected platform, reducing friction between interest, enquiry, and conversation.",
  },
  4: {
    challenge:
      "Nyota Roots serves parents, schools, and organisations, each arriving with different questions about its children's life-skills programmes, courses, and partnership options.",
    solution:
      "INTAVOR organised the experience around those three audiences, pairing approachable visual design with direct routes to course information, certification details, and enquiries.",
    impact:
      "Nyota Roots now has a focused digital reference that makes programme outreach clearer and gives partnership conversations a stronger place to begin.",
  },
  6: {
    challenge:
      "Sun Rays Foundation works across education, healthcare, and community development, but its digital presence did not yet reveal the breadth of that work or give supporters a clear way to engage.",
    solution:
      "INTAVOR created a responsive digital home with programme pages, impact-led storytelling, event galleries, clear contact routes, and content tools the team can use without technical expertise.",
    impact:
      "The foundation can now bring its work into view with greater clarity and give supporters, volunteers, and partners a more direct path from understanding the mission to taking part.",
  },
};

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  const title = `${project.title} Website Project`;
  const description = `${project.description} Explore the website design and development approach used by INTAVOR.`;
  const path = `/projects/${project.slug}`;

  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title: `${title} | INTAVOR`,
      description,
      url: path,
      type: "article",
      images: [
        {
          url: project.image,
          alt: `${project.title} website designed and developed by INTAVOR`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | INTAVOR`,
      description,
      images: [project.image],
    },
  };
}

export default async function ProjectDetailPage({
  params,
}: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  const engagement = clientEngagements.find(
    (item) => item.projectId === project.id,
  );
  const breadcrumbData = createBreadcrumbStructuredData([
    { name: "Home", path: "/" },
    { name: "Work", path: "/projects" },
    { name: project.title, path: `/projects/${project.slug}` },
  ]);

  return (
    <>
      <StructuredData data={breadcrumbData} />
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
                  Back to Work
                </Link>
              </Button>
            </FadeIn>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <FadeIn direction="right">
                <div className="relative aspect-video rounded-2xl overflow-hidden bg-muted shadow-2xl">
                  <Image
                    src={project.image}
                    alt={`${project.title} website designed and developed by INTAVOR`}
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

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                      Related services
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {project.serviceSlugs.map((serviceSlug) => {
                        const service =
                          serviceLinks[
                            serviceSlug as keyof typeof serviceLinks
                          ];
                        return (
                          <Link
                            key={serviceSlug}
                            href={service.href}
                            className="rounded-full border border-primary/25 bg-primary/5 px-3 py-1.5 text-sm font-medium text-[#c8c1ff] transition-colors hover:border-primary/50 hover:text-white"
                          >
                            {service.label}
                          </Link>
                        );
                      })}
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
                          Visit Live Website
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
                      Back to All Work
                    </Link>
                  </Button>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
