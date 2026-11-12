import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import FadeIn from "@/components/animations/FadeIn";
import DotGrid from "@/components/decor/DotGrid";
import GlowDivider from "@/components/decor/GlowDivider";
import QuickContact from "@/components/home/QuickContact";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import PageBanner from "@/components/layout/PageBanner";
import ProjectCard from "@/components/projects/ProjectCard";
import { Button } from "@/components/ui/button";
import { projects } from "@/lib/data";

type Project = (typeof projects)[number];

type ServicePageProps = {
  eyebrow: string;
  title: React.ReactNode;
  description: string;
  visual: React.ReactNode;
  introduction: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
  };
  capabilities: {
    title: string;
    description: string;
  }[];
  includes: {
    eyebrow: string;
    title: string;
    description: string;
    items: string[];
  };
  process: {
    title: string;
    description: string;
  }[];
  relatedProjects: Project[];
  questions: {
    question: string;
    answer: string;
  }[];
};

export default function ServicePage({
  eyebrow,
  title,
  description,
  visual,
  introduction,
  capabilities,
  includes,
  process,
  relatedProjects,
  questions,
}: ServicePageProps) {
  return (
    <main className="min-h-screen overflow-x-hidden bg-background">
      <Navbar />
      <PageBanner
        eyebrow={eyebrow}
        title={title}
        description={description}
        visual={visual}
        actions={
          <>
            <Button size="lg" className="h-12 rounded-full px-6" asChild>
              <Link href="/contact">
                Start a project <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-12 rounded-full bg-background/50 px-6"
              asChild
            >
              <Link href="#service-details">Explore the service</Link>
            </Button>
          </>
        }
      />

      <section
        id="service-details"
        className="relative isolate scroll-mt-24 py-16 md:py-20"
      >
        <DotGrid className="-left-12 bottom-4 h-64 w-96" />
        <div className="container mx-auto grid gap-12 px-4 md:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <FadeIn>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#b7adff]">
              {introduction.eyebrow}
            </p>
            <h2 className="text-3xl font-heading font-bold md:text-4xl">
              {introduction.title}
            </h2>
            <div className="mt-5 space-y-4 leading-relaxed text-muted-foreground">
              {introduction.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </FadeIn>

          <div className="grid gap-4 sm:grid-cols-2">
            {capabilities.map((capability, index) => (
              <FadeIn
                key={capability.title}
                delay={index * 0.08}
                className="h-full"
              >
                <article className="h-full rounded-2xl border border-border/60 bg-card/40 p-6">
                  <span className="text-sm font-semibold text-[#b7adff]">
                    0{index + 1}
                  </span>
                  <h3 className="mt-3 text-xl font-heading font-semibold">
                    {capability.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {capability.description}
                  </p>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="relative border-y border-border/60 bg-secondary/15 py-16 md:py-20">
        <GlowDivider />
        <div className="container mx-auto grid items-start gap-10 px-4 md:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <FadeIn direction="right">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#b7adff]">
              {includes.eyebrow}
            </p>
            <h2 className="text-3xl font-heading font-bold md:text-4xl">
              {includes.title}
            </h2>
            <p className="mt-4 max-w-xl leading-relaxed text-muted-foreground">
              {includes.description}
            </p>
          </FadeIn>
          <FadeIn direction="left">
            <ul className="grid gap-3 sm:grid-cols-2">
              {includes.items.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 rounded-xl border border-border/60 bg-card/40 p-4"
                >
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-[#8be8ce]" />
                  <span className="text-sm font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <FadeIn className="mx-auto max-w-2xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#b7adff]">
              How the work moves forward
            </p>
            <h2 className="text-3xl font-heading font-bold md:text-4xl">
              Clear decisions at every stage.
            </h2>
          </FadeIn>
          <ol className="mx-auto mt-10 grid max-w-6xl gap-4 md:grid-cols-4">
            {process.map((step, index) => (
              <li key={step.title}>
                <FadeIn
                  delay={index * 0.08}
                  className="h-full rounded-2xl border border-border/60 bg-card/40 p-5"
                >
                  <span className="text-sm font-semibold text-[#b7adff]">
                    0{index + 1}
                  </span>
                  <h3 className="mt-3 text-lg font-heading font-semibold">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </FadeIn>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="relative border-y border-border/60 bg-secondary/15 py-16 md:py-20">
        <GlowDivider />
        <div className="container mx-auto px-4 md:px-6">
          <FadeIn className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#b7adff]">
                Related work
              </p>
              <h2 className="text-3xl font-heading font-bold md:text-4xl">
                The service in practice.
              </h2>
            </div>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-sm font-medium text-[#c8c1ff] hover:text-white"
            >
              View all work <ArrowRight className="h-4 w-4" />
            </Link>
          </FadeIn>
          <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
            {relatedProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                wide={relatedProjects.length === 1}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="relative isolate py-16 md:py-20">
        <DotGrid className="right-0 top-8 h-60 w-96" />
        <div className="container mx-auto grid gap-10 px-4 md:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <FadeIn>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#b7adff]">
              Service questions
            </p>
            <h2 className="text-3xl font-heading font-bold md:text-4xl">
              Useful things to know.
            </h2>
          </FadeIn>
          <div className="divide-y divide-border/60 border-y border-border/60">
            {questions.map((item, index) => (
              <FadeIn key={item.question} delay={index * 0.05}>
                <details className="group py-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-heading text-lg font-semibold">
                    {item.question}
                    <span
                      aria-hidden="true"
                      className="text-2xl font-normal text-[#b7adff] transition-transform group-open:rotate-45"
                    >
                      +
                    </span>
                  </summary>
                  <p className="max-w-2xl pt-3 leading-relaxed text-muted-foreground">
                    {item.answer}
                  </p>
                </details>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <QuickContact />
      <Footer />
    </main>
  );
}
