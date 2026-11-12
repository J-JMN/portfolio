import FadeIn from "@/components/animations/FadeIn";
import DotGrid from "@/components/decor/DotGrid";

const questions = [
  {
    question: "What does INTAVOR build?",
    answer:
      "INTAVOR designs and develops business websites and custom web applications shaped around clear organisational goals, audience needs, and practical workflows.",
  },
  {
    question: "Who does INTAVOR work with?",
    answer:
      "INTAVOR works with businesses and organisations that need a clearer, more credible, or more capable digital presence. Existing work spans consultancy, education, technology, and non-profit organisations.",
  },
  {
    question: "Do you work with clients outside Nairobi?",
    answer:
      "Yes. INTAVOR is based in Nairobi and works with businesses and organisations in Kenya and internationally.",
  },
  {
    question: "Can you build custom website functionality?",
    answer:
      "Yes. Projects can include content management, booking and enquiry workflows, integrations, administrative tools, and other functionality required by the organisation.",
  },
  {
    question: "What happens after a website is launched?",
    answer:
      "Optional after-launch care is available for websites built by INTAVOR, including content updates, refinements, and technical support.",
  },
  {
    question: "How does a project begin?",
    answer:
      "Every project starts with a conversation about what the organisation needs people to understand, trust, or do online. That goal informs the structure, design, and technical direction.",
  },
];

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
            What to know about INTAVOR&apos;s website design, web development,
            and after-launch support.
          </p>
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
  );
}
