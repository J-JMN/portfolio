import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Timeline from "@/components/experience/Timeline";
import FadeIn from "@/components/animations/FadeIn";
import { Code2, RefreshCcw, Settings2 } from "lucide-react";

const capabilities = [
  {
    title: "Build",
    description:
      "Responsive websites and web applications shaped around clear business and audience needs.",
    icon: Code2,
  },
  {
    title: "Manage",
    description:
      "Content, feature, and CMS updates that keep client platforms useful after launch.",
    icon: Settings2,
  },
  {
    title: "Improve",
    description:
      "Ongoing technical refinements across performance, usability, integrations, and deployment.",
    icon: RefreshCcw,
  },
];

export default function ExperiencePage() {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />

      <section className="pt-32 pb-8 relative overflow-hidden">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 blur-3xl -z-10 rounded-full" />

        <div className="container mx-auto px-4 md:px-6 text-center">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
              Client Work &amp;{" "}
              <span className="text-primary">Website Management</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Ongoing website management, platform improvements, and technical
              support for client organisations, backed by hands-on delivery of
              their digital platforms.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-6">
        <div className="container mx-auto grid grid-cols-1 gap-4 px-4 md:grid-cols-3 md:px-6">
          {capabilities.map((capability, index) => (
            <FadeIn key={capability.title} delay={index * 0.1}>
              <div className="h-full rounded-2xl border border-border/70 bg-card/60 p-6">
                <capability.icon className="mb-5 h-6 w-6 text-primary" />
                <h2 className="mb-2 text-lg font-semibold">
                  {capability.title}
                </h2>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {capability.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      <Timeline />

      <Footer />
    </main>
  );
}
