import Link from "next/link";
import { ArrowRight } from "lucide-react";
import FadeIn from "@/components/animations/FadeIn";
import { services } from "@/lib/data";
import DotGrid from "@/components/decor/DotGrid";

export default function ServicesStrip() {
  return (
    <section className="relative isolate py-16 md:py-20">
      <DotGrid className="right-0 top-6 h-56 w-96" />
      <div className="container mx-auto px-4 md:px-6">
        <FadeIn className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#b7adff]">
              Our expertise
            </p>
            <h2 className="text-3xl font-heading font-bold md:text-4xl">
              Built to be understood. Designed to be remembered.
            </h2>
          </div>
          <Link
            href="/experience"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#c8c1ff] hover:text-white"
          >
            Explore our expertise <ArrowRight className="h-4 w-4" />
          </Link>
        </FadeIn>
        <div className="grid gap-4 md:grid-cols-3">
          {services.map((service, index) => (
            <FadeIn key={service.title} delay={index * 0.08} className="h-full">
              <Link
                href={service.href}
                className="group block h-full rounded-2xl border border-border/60 bg-card/40 p-6 transition-colors hover:border-primary/50"
              >
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-[#b7adff]">
                  <service.icon className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-heading font-semibold transition-colors group-hover:text-primary">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {service.summary}
                </p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-[#c8c1ff]">
                  Learn more
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
