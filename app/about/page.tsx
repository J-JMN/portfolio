import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AboutHero from "@/components/about/AboutHero";
import FadeIn from "@/components/animations/FadeIn";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import DotGrid from "@/components/decor/DotGrid";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <AboutHero />

      <section className="relative isolate pb-20 pt-8">
        <DotGrid className="-left-10 bottom-6 h-72 w-md" />
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <FadeIn direction="right">
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-muted">
                <Image
                  src="https://images.unsplash.com/photo-1612396555231-0211d42a46d1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8V2h5fGVufDB8MXwwfHx8Mg%3D%3D"
                  alt="Coding workspace"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-background/80 to-transparent" />
              </div>
            </FadeIn>

            <FadeIn direction="left">
              <h2 className="text-3xl font-heading font-bold mb-6">
                Why INTAVOR?
              </h2>
              <div className="space-y-4 text-foreground/90 leading-relaxed">
                <p className="text-lg">
                  INTAVOR means Intent + Endeavor: thoughtful decisions followed
                  by focused execution. Each project starts with what the
                  website needs to accomplish, then turns that direction into a
                  dependable digital product.
                </p>
                <p>
                  Work delivered for{" "}
                  <span className="text-primary font-medium">
                    Stratedge Solutions
                  </span>
                  ,
                  <span className="text-primary font-medium">
                    {" "}
                    Chanzo Technologies
                  </span>
                  ,
                  <span className="text-primary font-medium"> Nyota Roots</span>
                  , and{" "}
                  <span className="text-primary font-medium">
                    Sun Rays Foundation
                  </span>
                  . These relationships now extend into ongoing website
                  management and technical support.
                </p>
              </div>

              <div className="mt-6 space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                  <span className="text-foreground/80">
                    Clear scope and purposeful technical decisions
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                  <span className="text-foreground/80">
                    Responsive experiences built for real audiences
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                  <span className="text-foreground/80">
                    Full-stack features, CMS tools, and integrations
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                  <span className="text-foreground/80">
                    Ongoing website management after delivery
                  </span>
                </div>
              </div>

              <div className="mt-8">
                <Button className="gap-2 rounded-full" asChild>
                  <Link href="/contact">
                    Discuss Your Project
                    <ArrowRight className="w-4 h-4" />
                  </Link>
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
