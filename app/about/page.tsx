import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AboutHero from "@/components/about/AboutHero";
import Highlights from "@/components/about/Highlights";
import FadeIn from "@/components/animations/FadeIn";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { personalInfo } from "@/lib/data";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <AboutHero />
      <Highlights />
      
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <FadeIn direction="right">
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-muted">
                 {/* Placeholder for About Image */}
                 <div className="absolute inset-0 flex items-center justify-center bg-secondary/30 text-muted-foreground">
                    <span className="text-lg font-medium">About Image Placeholder</span>
                 </div>
                 <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              </div>
            </FadeIn>
            
            <FadeIn direction="left">
              <h2 className="text-3xl font-heading font-bold mb-6">My Journey</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  My journey in tech started when I built my first website at the age of 15. 
                  Since then, I've been hooked on the endless possibilities of software development.
                </p>
                <p>
                  Over the years, I've had the privilege of working with diverse teams and clients, 
                  ranging from early-stage startups to established enterprises. I specialize in 
                  building accessible, performant, and scalable web applications using the latest 
                  technologies.
                </p>
                <p>
                  When I'm not coding, you can find me exploring new hiking trails, reading sci-fi novels, 
                  or experimenting with new cooking recipes.
                </p>
              </div>
              
              <div className="mt-8">
                <Button className="gap-2 rounded-full">
                  <Download className="w-4 h-4" />
                  Download Resume
                </Button>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}
