import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import FadeIn from "@/components/animations/FadeIn";
import { clientEngagements } from "@/lib/data";
import DotGrid from "@/components/decor/DotGrid";

export default function ClientPartnerships() {
  return (
    <section className="relative isolate py-16 md:py-20">
      <DotGrid className="left-0 top-4 h-56 w-96" />
      <div className="container mx-auto px-4 md:px-6">
        <FadeIn className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#b7adff]">
              Beyond delivery
            </p>
            <h2 className="text-3xl font-heading font-bold md:text-4xl">
              Built well. Trusted beyond launch.
            </h2>
            <p className="mt-3 max-w-2xl text-muted-foreground">
              For clients who want continuity, optional support plans keep
              INTAVOR-built websites current, dependable, and ready for what
              comes next.
            </p>
          </div>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#c8c1ff] hover:text-white"
          >
            Explore the work <ArrowUpRight className="h-4 w-4" />
          </Link>
        </FadeIn>

        <FadeIn>
          <ul className="divide-y divide-border/60 rounded-2xl border border-border/60 bg-card/30">
            {clientEngagements.map((engagement) => (
              <li
                key={engagement.id}
                className="grid gap-3 p-5 md:grid-cols-[14rem_1fr_auto] md:items-center md:gap-8 md:px-7"
              >
                <div>
                  <h3 className="font-heading font-semibold">{engagement.client}</h3>
                  <p className="mt-1 flex items-center gap-2 text-xs text-[#8be8ce]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#8be8ce]" />
                    {engagement.status}
                  </p>
                </div>
                <div>
                  <p className="text-sm font-medium">{engagement.service}</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {engagement.responsibilities.join(" · ")}
                  </p>
                </div>
                <Link
                  href={`/projects/${engagement.projectId}`}
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-[#c8c1ff] hover:text-white"
                  aria-label={`View the ${engagement.client} project`}
                >
                  View project <ArrowUpRight className="h-4 w-4" />
                </Link>
              </li>
            ))}
          </ul>
        </FadeIn>
      </div>
    </section>
  );
}
