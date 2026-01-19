"use client";

import Link from "next/link";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import TextReveal from "@/components/animations/TextReveal";
import FadeIn from "@/components/animations/FadeIn";
import { personalInfo } from "@/lib/data";

export default function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden pt-16 pb-20">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40rem] h-[40rem] bg-primary/5 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40rem] h-[40rem] bg-blue-500/5 rounded-full blur-3xl opacity-50" />
      </div>

      <div className="container mx-auto px-4 md:px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Text Content */}
        <div className="space-y-8 text-center lg:text-left order-2 lg:order-1">
          <FadeIn delay={0.1}>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/50 border border-border/50 text-primary text-sm font-medium mb-2 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              Available for new opportunities
            </div>
          </FadeIn>

          <div className="space-y-4">
            <FadeIn delay={0.2}>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold tracking-tight leading-[1.1]">
                Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">{personalInfo.name}</span>
              </h1>
            </FadeIn>
            <FadeIn delay={0.3}>
              <h2 className="text-2xl md:text-3xl text-muted-foreground font-medium">
                <TextReveal text={personalInfo.role} delay={0.5} />
              </h2>
            </FadeIn>
          </div>

          <FadeIn delay={0.4}>
            <p className="text-lg text-muted-foreground max-w-lg mx-auto lg:mx-0 leading-relaxed">
              {personalInfo.bio}
            </p>
          </FadeIn>

          <FadeIn delay={0.5} className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
            <Button size="lg" className="rounded-full px-8 h-12 text-base shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all" asChild>
              <Link href="/projects">
                View My Work
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-8 h-12 text-base hover:bg-secondary/50" asChild>
              <Link href="/contact">
                Contact Me
              </Link>
            </Button>
            
            <div className="flex items-center gap-2 ml-2 border-l border-border/50 pl-6">
              <Button size="icon" variant="ghost" className="rounded-full hover:bg-secondary/50 hover:text-primary" asChild>
                <a href={personalInfo.socials[0].url} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <Github className="w-5 h-5" />
                </a>
              </Button>
              <Button size="icon" variant="ghost" className="rounded-full hover:bg-secondary/50 hover:text-primary" asChild>
                <a href={personalInfo.socials[1].url} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Linkedin className="w-5 h-5" />
                </a>
              </Button>
            </div>
          </FadeIn>
        </div>

        {/* Visual Content / Profile Image */}
        <div className="order-1 lg:order-2 flex justify-center relative">
          <FadeIn delay={0.3} direction="left" className="relative w-72 h-72 md:w-96 md:h-96">
            {/* Subtle Glow Behind */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-blue-500/20 rounded-full blur-3xl transform scale-110" />
            
            <div className="relative w-full h-full rounded-full border border-border/50 bg-background/30 backdrop-blur-sm overflow-hidden flex items-center justify-center shadow-2xl">
              {/* Placeholder for Profile Image */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-blue-500/5" />
              <div className="text-center p-8 relative z-10">
                <span className="text-7xl mb-4 block filter drop-shadow-lg">👨‍💻</span>
                <p className="text-sm text-muted-foreground font-medium uppercase tracking-widest">Profile Image</p>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-6 -right-6 p-4 bg-card/80 backdrop-blur-md rounded-2xl border border-border/50 shadow-xl animate-bounce delay-1000">
              <span className="text-2xl">🚀</span>
            </div>
            <div className="absolute -bottom-6 -left-6 p-4 bg-card/80 backdrop-blur-md rounded-2xl border border-border/50 shadow-xl animate-bounce delay-700">
              <span className="text-2xl">💻</span>
            </div>
          </FadeIn>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce hidden md:flex flex-col items-center gap-2 opacity-50">
        <span className="text-[10px] uppercase tracking-widest text-muted-foreground">Scroll</span>
        <div className="w-[1px] h-8 bg-gradient-to-b from-muted-foreground to-transparent" />
      </div>
    </section>
  );
}
