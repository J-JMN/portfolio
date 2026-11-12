import FadeIn from "@/components/animations/FadeIn";
import ProcessIllustration from "@/components/illustrations/ProcessIllustration";
import GlowDivider from "@/components/decor/GlowDivider";

const steps = [
  {
    title: "Discover",
    description: "Find the real goal, the audience that matters, and what may be standing in their way.",
  },
  {
    title: "Define",
    description: "Shape the message, structure, and technical direction before the build begins.",
  },
  {
    title: "Create",
    description: "Design and develop the experience with clarity, consistency, and care.",
  },
  {
    title: "Refine",
    description: "Test the details, sharpen the journey, and launch with confidence.",
  },
];

export default function WorkingProcess() {
  return (
    <section className="relative border-b border-border/60 bg-secondary/15 py-16 md:py-20">
      <GlowDivider />
      <div className="container mx-auto grid min-w-0 items-center gap-10 px-4 md:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
        <div className="min-w-0">
          <FadeIn>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#b7adff]">
              How we work
            </p>
            <h2 className="text-3xl font-heading font-bold md:text-4xl">
              Good work starts before the first screen.
            </h2>
          </FadeIn>
          <ol className="mt-8 grid auto-rows-fr gap-4 sm:grid-cols-2">
            {steps.map((step, index) => (
              <li key={step.title}>
                <FadeIn delay={index * 0.08} className="h-full rounded-2xl border border-border/60 bg-card/40 p-5">
                  <span className="text-sm font-semibold text-[#b7adff]">0{index + 1}</span>
                  <h3 className="mt-2 text-lg font-heading font-semibold">{step.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </FadeIn>
              </li>
            ))}
          </ol>
        </div>
        <FadeIn direction="left" className="min-w-0">
          <ProcessIllustration />
        </FadeIn>
      </div>
    </section>
  );
}
