import FadeIn from "@/components/animations/FadeIn";
import LifecycleIllustration from "@/components/illustrations/LifecycleIllustration";
import { services } from "@/lib/data";

export default function ServicesOverview() {
  return (
    <section id="services" className="scroll-mt-24 pb-16 pt-6 md:pb-20">
      <div className="container mx-auto grid min-w-0 items-center gap-8 px-4 md:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
        <FadeIn direction="right" className="order-2 min-w-0 lg:order-1">
          <LifecycleIllustration />
        </FadeIn>
        <div className="order-1 min-w-0 lg:order-2">
          <FadeIn>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#b7adff]">
              What we do
            </p>
            <h2 className="text-3xl font-heading font-bold md:text-4xl">
              What your audience sees. What your business needs.
            </h2>
            <p className="mt-3 text-muted-foreground">
              The best digital work does both: it earns attention while making
              something important easier to understand or do.
            </p>
          </FadeIn>
          <div className="mt-4 divide-y divide-border/60">
            {services.map((service, index) => (
              <FadeIn key={service.title} delay={index * 0.08}>
                <article className="flex gap-4 py-5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-[#b7adff]">
                    <service.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-heading font-semibold">{service.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                      {service.summary}
                    </p>
                    <p className="mt-2 text-xs font-medium text-[#b7adff]">
                      {service.includes.join(" · ")}
                    </p>
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
