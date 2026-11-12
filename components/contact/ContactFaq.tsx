import FadeIn from "@/components/animations/FadeIn";
import DotGrid from "@/components/decor/DotGrid";
import FaqAccordion from "@/components/ui/FaqAccordion";
import { generalFaqs } from "@/lib/faqs";

export default function ContactFaq() {
  return (
    <section id="faq" className="relative isolate scroll-mt-24 border-t border-border/60 py-16 md:py-20">
      <DotGrid className="right-0 top-8 h-64 w-96" />
      <div className="container mx-auto grid gap-10 px-4 md:px-6 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
        <FadeIn>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#b7adff]">
            Before we begin
          </p>
          <h2 className="text-3xl font-heading font-bold md:text-4xl">
            Questions worth answering early.
          </h2>
          <p className="mt-4 max-w-md leading-relaxed text-muted-foreground">
            A straightforward view of what INTAVOR develops, who we work with,
            and how a project gets moving.
          </p>
        </FadeIn>
        <FaqAccordion items={generalFaqs} />
      </div>
    </section>
  );
}
