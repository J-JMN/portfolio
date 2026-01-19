"use client";

import FadeIn from "@/components/animations/FadeIn";
import { personalInfo } from "@/lib/data";

export default function AboutHero() {
  return (
    <section className="pt-32 pb-16 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-96 bg-primary/5 blur-3xl -z-10 rounded-full" />
      
      <div className="container mx-auto px-4 md:px-6 text-center">
        <FadeIn>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
            About <span className="text-primary">Me</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            I'm {personalInfo.name}, a {personalInfo.role} based in {personalInfo.location}.
            I'm passionate about building digital products that make a difference.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
