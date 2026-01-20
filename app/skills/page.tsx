import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SkillsGrid from "@/components/skills/SkillsGrid";
import TechMarquee from "@/components/skills/TechMarquee";
import FadeIn from "@/components/animations/FadeIn";
import { Code2, Cpu, Layers, Pickaxe, Sparkles, ThumbsUp } from "lucide-react";

export default function SkillsPage() {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-12 relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 blur-3xl -z-10 rounded-full" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary/10 blur-3xl -z-10 rounded-full" />

        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
                <Pickaxe className="w-4 h-4" />
                <span>Crafted Through Experience</span>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 leading-tight">
                The Arsenal Behind
                <br />
                <span className="text-primary">Every Project</span>
              </h1>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-8">
                From concept to deployment, I leverage a diverse tech stack to
                build solutions that are not just functional, but{" "}
                <span className="text-foreground font-medium">
                  fast, scalable, and built to last
                </span>
                . Every tool in my toolkit has been battle-tested across
                real-world projects.
              </p>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Code2 className="w-5 h-5 text-primary" />
                  <span>Full-Stack Development</span>
                </div>
                <div className="flex items-center gap-2">
                  <Cpu className="w-5 h-5 text-primary" />
                  <span>Modern Frameworks</span>
                </div>
                <div className="flex items-center gap-2">
                  <ThumbsUp className="w-5 h-5 text-primary" />
                  <span>Best Practices</span>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Tech Marquee - flows directly into skills */}
      <TechMarquee />

      {/* Skills Grid - reduced top padding for tighter connection */}
      <SkillsGrid />

      <Footer />
    </main>
  );
}
