import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AboutHero from "@/components/about/AboutHero";
import FadeIn from "@/components/animations/FadeIn";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import DotGrid from "@/components/decor/DotGrid";
import WhyIntavorArt from "@/components/illustrations/WhyIntavorArt";
import { brandInfo } from "@/lib/data";

export const metadata: Metadata = {
  title: "About",
  description:
    "Discover the intent behind INTAVOR and the considered approach used to design and build digital experiences.",
};

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
              <div className="relative w-full">
                <WhyIntavorArt />
              </div>
            </FadeIn>

            <FadeIn direction="left">
              <h2 className="text-3xl font-heading font-bold mb-6">
                Why INTAVOR?
              </h2>
              <div className="space-y-4 text-foreground/90 leading-relaxed">
                <p className="text-lg">
                  INTAVOR comes from Intent + Endeavor: knowing why the work
                  matters, then carrying it through with focus and care. Every
                  project begins by making the organisation&apos;s value clear
                  before deciding how the technology should take shape.
                </p>
                <p>
                  That principle has shaped work for{" "}
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
                  —each with a different audience, challenge, and measure of
                  success.
                </p>
              </div>

              <div className="mt-6 rounded-xl border border-primary/25 bg-primary/5 p-5">
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-primary">
                  Our purpose
                </p>
                <p className="text-base leading-relaxed text-foreground/90">
                  {brandInfo.purpose}
                </p>
              </div>

              <div className="mt-6 space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                  <span className="text-foreground/80">
                    Clear thinking before visual or technical decisions
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                  <span className="text-foreground/80">
                    Design shaped around your audience and message
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                  <span className="text-foreground/80">
                    Engineering that makes complex workflows feel simple
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                  <span className="text-foreground/80">
                    A dependable relationship from brief to launch—and beyond
                  </span>
                </div>
              </div>

              <div className="mt-8">
                <Button className="gap-2 rounded-full" asChild>
                  <Link href="/contact">
                    Start a Conversation
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
