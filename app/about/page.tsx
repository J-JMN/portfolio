import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AboutHero from "@/components/about/AboutHero";
import Highlights from "@/components/about/Highlights";
import FadeIn from "@/components/animations/FadeIn";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

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
                <Image
                  src="https://images.unsplash.com/photo-1549692520-acc6669e2f0c?w=600&h=600&fit=crop"
                  alt="Coding workspace"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-background/80 to-transparent" />
              </div>
            </FadeIn>

            <FadeIn direction="left">
              <h2 className="text-3xl font-heading font-bold mb-6">
                My Journey
              </h2>
              <div className="space-y-4 text-foreground/90 leading-relaxed">
                <p>
                  My journey in tech began with curiosity and quickly evolved
                  into a passion for building digital solutions that solve
                  real-world problems.
                </p>
                <p>
                  I started my professional career as an intern at Chanzo
                  Technologies in October 2025, where I quickly proved my
                  capabilities and transitioned into a Junior Frontend Developer
                  role in January 2026. While my title says frontend, I actively
                  contribute to both frontend and backend development.
                </p>
                <p>
                  Alongside my role at Chanzo, I&apos;ve successfully delivered
                  websites for clients including Stratedge Solutions, Chanzo
                  Technologies, and Sun Rays Foundation. Each project has
                  strengthened my ability to understand client needs and deliver
                  quality solutions.
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
