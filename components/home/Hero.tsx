"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import TextReveal from "@/components/animations/TextReveal";
import FadeIn from "@/components/animations/FadeIn";
import { personalInfo } from "@/lib/data";
import { motion } from "framer-motion";

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
                Hi, I'm{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">
                  {personalInfo.name}
                </span>
              </h1>
            </FadeIn>
            <FadeIn delay={0.3}>
              <h2 className="text-2xl md:text-3xl text-foreground font-medium">
                <TextReveal text={personalInfo.role} delay={0.5} />
              </h2>
            </FadeIn>
          </div>

          <FadeIn delay={0.4}>
            <p className="text-lg text-foreground/90 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              {personalInfo.bio}
            </p>
          </FadeIn>

          <FadeIn
            delay={0.5}
            className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2"
          >
            <Button
              size="lg"
              className="rounded-full px-8 h-12 text-base shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all"
              asChild
            >
              <Link href="/projects">
                View My Work
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full px-8 h-12 text-base hover:bg-secondary/50"
              asChild
            >
              <Link href="/contact">Contact Me</Link>
            </Button>

            <div className="flex items-center gap-2 ml-2 border-l border-border/50 pl-6">
              <Button
                size="icon"
                variant="ghost"
                className="rounded-full hover:bg-secondary/50 hover:text-primary"
                asChild
              >
                <a
                  href={personalInfo.socials[0].url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
              </Button>
              <Button
                size="icon"
                variant="ghost"
                className="rounded-full hover:bg-secondary/50 hover:text-primary"
                asChild
              >
                <a
                  href={personalInfo.socials[1].url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </Button>
            </div>
          </FadeIn>
        </div>

        {/* Visual Content / Profile Image */}
        <div className="order-1 lg:order-2 flex justify-center relative">
          <FadeIn delay={0.3} direction="left">
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              {/* Animated Floating Particles */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-primary/60 rounded-full"
                  style={{
                    top: `${20 + i * 15}%`,
                    left: i % 2 === 0 ? "-10%" : "105%",
                  }}
                  animate={{
                    y: [0, -20, 0],
                    opacity: [0.3, 0.8, 0.3],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 3 + i * 0.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.3,
                  }}
                />
              ))}

              {/* Outer Glow Pulse */}
              <motion.div
                className="absolute -inset-8 bg-gradient-to-tr from-primary/20 via-blue-500/20 to-purple-500/20 rounded-full blur-3xl"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* Secondary Glow Ring */}
              <motion.div
                className="absolute -inset-4 rounded-full"
                style={{
                  background:
                    "radial-gradient(circle, transparent 60%, hsl(var(--primary) / 0.15) 100%)",
                }}
                animate={{
                  scale: [1, 1.05, 1],
                  rotate: [0, 180, 360],
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              />

              {/* Primary Animated Gradient Ring */}
              <motion.div
                className="absolute inset-0 rounded-full p-1"
                style={{
                  background:
                    "conic-gradient(from 0deg, transparent 0%, hsl(var(--primary)) 20%, hsl(217 91% 60%) 40%, transparent 60%)",
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
              >
                <div className="w-full h-full rounded-full bg-background" />
              </motion.div>

              {/* Inner Highlight Ring */}
              <motion.div
                className="absolute inset-1 rounded-full border border-primary/30"
                animate={{
                  boxShadow: [
                    "0 0 0 0 hsl(var(--primary) / 0)",
                    "0 0 20px 2px hsl(var(--primary) / 0.3)",
                    "0 0 0 0 hsl(var(--primary) / 0)",
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* Profile Image */}
              <div className="absolute inset-3 rounded-full overflow-hidden shadow-2xl border-2 border-white/10">
                <Image
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
                  alt="Joseph Mburu"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>

              {/* Decorative Corner Accents */}
              <motion.div
                className="absolute -top-2 -right-2 w-4 h-4 border-t-2 border-r-2 border-primary rounded-tr-lg"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute -bottom-2 -left-2 w-4 h-4 border-b-2 border-l-2 border-primary rounded-bl-lg"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
              />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
