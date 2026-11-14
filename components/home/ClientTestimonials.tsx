import Link from "next/link";
import { ArrowUpRight, Quote } from "lucide-react";
import FadeIn from "@/components/animations/FadeIn";
import GlowDivider from "@/components/decor/GlowDivider";
import { clientTestimonials } from "@/lib/data";

export default function ClientTestimonials() {
  return (
    <section className="defer-render relative py-20">
      <GlowDivider />
      <div className="container mx-auto max-w-6xl px-4 md:px-6">
        <FadeIn className="mb-10 max-w-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#b7adff]">
            Client perspective
          </p>
          <h2 className="text-3xl font-heading font-bold md:text-4xl">
            Trusted with the work that comes next.
          </h2>
          <p className="mt-3 text-muted-foreground">
            Strong partnerships are built through careful work, clear
            communication, and dependable support beyond launch.
          </p>
        </FadeIn>

        <div className="grid gap-6 lg:grid-cols-2">
          {clientTestimonials.map((testimonial, index) => (
            <FadeIn key={testimonial.id} delay={index * 0.1}>
              <figure className="flex h-full flex-col rounded-2xl border border-border/60 bg-card/40 p-6 md:p-8">
                <div className="mb-5 flex items-center justify-between gap-4">
                  <Quote className="h-8 w-8 text-primary/70" />
                  <span className="rounded-full border border-[#8be8ce]/35 bg-[#8be8ce]/10 px-3 py-1.5 text-xs font-semibold tracking-wide text-[#a7f3df]">
                    {testimonial.relationship}
                  </span>
                </div>
                <blockquote className="grow text-lg leading-relaxed text-foreground/90">
                  “{testimonial.quote}”
                </blockquote>
                <figcaption className="mt-7 border-t border-border/60 pt-5">
                  <p className="font-heading font-semibold">
                    {testimonial.name}
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2">
                    {testimonial.projectLinks.map((project) => (
                      <Link
                        key={project.href}
                        href={project.href}
                        className="inline-flex items-center gap-1 text-sm font-medium text-[#c8c1ff] hover:text-white"
                      >
                        {project.label}
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </Link>
                    ))}
                  </div>
                </figcaption>
              </figure>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
