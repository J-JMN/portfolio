"use client";

import Link from "next/link";
import { ArrowRight, Download, Github, Linkedin, Mail, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import TextReveal from "@/components/animations/TextReveal";
import FadeIn from "@/components/animations/FadeIn";
import { personalInfo } from "@/lib/data";

export default function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden pt-16">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-30 animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl opacity-30 animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-4 md:px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="space-y-6 text-center lg:text-left order-2 lg:order-1">
          <FadeIn delay={0.1}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Available for work
            </div>
          </FadeIn>

          <div className="space-y-2">
            <FadeIn delay={0.2}>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold tracking-tight">
                Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500">{personalInfo.name}</span>
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

          <FadeIn delay={0.5} className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
            <Button size="lg" className="rounded-full group" asChild>
              <Link href="/projects">
                View My Work
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="rounded-full" asChild>
              <Link href="/contact">
                Contact Me
              </Link>
            </Button>
            <Button size="icon" variant="ghost" className="rounded-full" asChild>
              <a href={personalInfo.socials[0].url} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github className="w-5 h-5" />
              </a>
            </Button>
            <Button size="icon" variant="ghost" className="rounded-full" asChild>
              <a href={personalInfo.socials[1].url} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
            </Button>
          </FadeIn>
        </div>

        {/* Visual Content / Profile Image */}
        <div className="order-1 lg:order-2 flex justify-center">
          <FadeIn delay={0.3} direction="left" className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary to-blue-500 rounded-full opacity-20 blur-2xl animate-pulse" />
            <div className="relative w-full h-full rounded-full border-2 border-primary/20 bg-background/50 backdrop-blur-sm overflow-hidden flex items-center justify-center group">
              {/* Placeholder for Profile Image */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-blue-500/5 group-hover:scale-105 transition-transform duration-500" />
              <div className="text-center p-6">
                <span className="text-6xl mb-2 block">👨‍💻</span>
                <p className="text-sm text-muted-foreground font-medium">Profile Image</p>
                <p className="text-xs text-muted-foreground/60 mt-1">Add your photo here</p>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 p-4 bg-card rounded-xl border border-border shadow-lg animate-bounce delay-700">
              <span className="text-2xl"></span>
            </div>
            <div className="absolute -bottom-4 -left-4 p-4 bg-card rounded-xl border border-border shadow-lg animate-bounce delay-1000">
              <span className="text-2xl"></span>
            </div>
          </FadeIn>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground flex justify-center pt-2">
          <div className="w-1 h-2 bg-muted-foreground rounded-full animate-scroll" />
        </div>
      </div>
    </section>
  );
}
