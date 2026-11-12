import FadeIn from "@/components/animations/FadeIn";
import DotGrid from "@/components/decor/DotGrid";
import FaqAccordion from "@/components/ui/FaqAccordion";
import { generalFaqs } from "@/lib/faqs";

export default function FaqSection() {
  return (
    <section className="relative isolate border-b border-border/60 py-16 md:py-20">
      <DotGrid className="-left-10 bottom-6 h-64 w-96" />
      <div className="container mx-auto grid gap-10 px-4 md:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <FadeIn>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#b7adff]">
            Frequently asked questions
          </p>
          <h2 className="text-3xl font-heading font-bold md:text-4xl">
            A clearer starting point.
          </h2>
          <p className="mt-4 max-w-md leading-relaxed text-muted-foreground">
            What to know about INTAVOR&apos;s website development, web
            applications, and after-launch care.
          </p>
        </FadeIn>

        <FaqAccordion items={generalFaqs} />
      </div>
    </section>
  );
}
