"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import FadeIn from "@/components/animations/FadeIn";
import { brandInfo } from "@/lib/data";
import { motion } from "framer-motion";
import HeroBackdrop from "@/components/illustrations/HeroBackdrop";

export default function Hero() {
  return (
    <section className="relative isolate flex min-h-svh items-center overflow-hidden pb-10 pt-20">
      <div className="absolute inset-0 -z-10">
        <HeroBackdrop />
      </div>
      <div className="absolute inset-x-0 bottom-0 -z-10 h-32 bg-linear-to-t from-background to-transparent" />

      <div className="container mx-auto grid min-w-0 grid-cols-1 items-center gap-10 px-4 md:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        {/* Text Content */}
        <div className="order-2 min-w-0 space-y-6 text-center lg:order-1 lg:text-left [@media(max-height:760px)]:space-y-4">
          <FadeIn delay={0.1}>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/50 border border-border/50 text-primary text-sm font-medium mb-2 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              Websites &amp; web applications
            </div>
          </FadeIn>

          <div className="space-y-4">
            <FadeIn delay={0.2}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold tracking-tight leading-[1.08] [@media(max-height:760px)]:lg:text-5xl">
                Website design and web applications{" "}
                <span className="text-transparent bg-clip-text bg-linear-to-r from-white via-[#c4bcff] to-primary">
                  built around real goals.
                </span>
              </h1>
            </FadeIn>
            <FadeIn delay={0.3}>
              <h2 className="text-lg font-semibold leading-snug text-foreground/90 md:text-xl">
                {brandInfo.role}
              </h2>
            </FadeIn>
          </div>

          <FadeIn delay={0.4}>
            <p className="text-base text-muted-foreground max-w-lg mx-auto lg:mx-0 leading-relaxed md:text-lg">
              {brandInfo.bio}
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
                View Our Work
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full px-8 h-12 text-base hover:bg-secondary/50"
              asChild
            >
              <Link href="/contact">Start a Project</Link>
            </Button>
          </FadeIn>
        </div>

        {/* Visual Content */}
        <div className="relative order-1 flex min-w-0 justify-center overflow-hidden py-4 lg:order-2">
          <FadeIn delay={0.3} direction="left">
            <div className="relative flex h-60 w-60 items-center justify-center overflow-visible md:h-80 md:w-80 [@media(max-height:760px)]:md:h-64 [@media(max-height:760px)]:md:w-64">
              {/* Animated Floating Particles */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-primary/60 rounded-full"
                  style={{
                    top: `${20 + i * 15}%`,
                    left: i % 2 === 0 ? "5%" : "90%",
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

              <motion.div
                className="absolute -inset-8 bg-linear-to-tr from-primary/25 via-[#a99cff]/15 to-[#1e2b3b]/30 rounded-full blur-3xl"
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
                    "radial-gradient(circle, transparent 60%, rgb(122 108 255 / 0.15) 100%)",
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
                    "conic-gradient(from 0deg, transparent 0%, #7a6cff 20%, #a99cff 40%, transparent 60%)",
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
                    "0 0 0 0 rgb(122 108 255 / 0)",
                    "0 0 20px 2px rgb(122 108 255 / 0.3)",
                    "0 0 0 0 rgb(122 108 255 / 0)",
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* Brand mark */}
              <div className="absolute inset-3 rounded-full overflow-hidden shadow-2xl border-2 border-white/10 bg-background flex items-center justify-center">
                <motion.div
                  className="flex w-full flex-col items-center gap-4 px-8 text-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  <motion.div
                    className="w-full max-w-56"
                    animate={{
                      y: [0, -4, 0],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <Image
                      src="/brand/intavor-symbol-gradient.svg"
                      alt="INTAVOR"
                      width={720}
                      height={370}
                      priority
                      className="h-auto w-full"
                    />
                  </motion.div>
                  <span className="text-sm font-semibold tracking-[0.3em] text-foreground">
                    INTAVOR
                  </span>
                </motion.div>
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
