import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ProjectGrid from "@/components/projects/ProjectGrid";
import FadeIn from "@/components/animations/FadeIn";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />

      <section className="pt-32 pb-8 relative overflow-hidden">
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/5 blur-3xl -z-10 rounded-full" />

        <div className="container mx-auto px-4 md:px-6 text-center">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
              Featured <span className="text-primary">Projects</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              A collection of projects that demonstrate my ability to solve
              complex problems and build intuitive user experiences.
            </p>
          </FadeIn>
        </div>
      </section>

      <ProjectGrid />

      <Footer />
    </main>
  );
}
