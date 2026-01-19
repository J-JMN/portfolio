import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SkillsGrid from "@/components/skills/SkillsGrid";
import FadeIn from "@/components/animations/FadeIn";

export default function SkillsPage() {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />

      <section className="pt-32 pb-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 blur-3xl -z-10 rounded-full" />

        <div className="container mx-auto px-4 md:px-6 text-center">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
              Technical <span className="text-primary">Skills</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              I&apos;ve spent years refining my skills in various technologies.
              Here&apos;s a breakdown of the tools and frameworks I use to bring
              ideas to life.
            </p>
          </FadeIn>
        </div>
      </section>

      <SkillsGrid />

      <Footer />
    </main>
  );
}
