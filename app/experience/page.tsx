import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Timeline from "@/components/experience/Timeline";
import FadeIn from "@/components/animations/FadeIn";

export default function ExperiencePage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      <section className="pt-32 pb-8 relative overflow-hidden">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 blur-3xl -z-10 rounded-full" />
        
        <div className="container mx-auto px-4 md:px-6 text-center">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
              Work <span className="text-primary">Experience</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              My professional journey and the companies I've had the pleasure of working with.
            </p>
          </FadeIn>
        </div>
      </section>

      <Timeline />
      
      <Footer />
    </main>
  );
}
