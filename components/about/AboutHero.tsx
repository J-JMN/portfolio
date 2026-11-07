"use client";

import FadeIn from "@/components/animations/FadeIn";
import { motion } from "framer-motion";

export default function AboutHero() {
  return (
    <section className="pt-28 pb-12 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 blur-3xl -z-10 rounded-full" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/5 blur-3xl -z-10 rounded-full" />

      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm font-medium text-primary">
                Intent + Endeavor
              </span>
            </motion.div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 leading-tight">
              Intentional Technology,
              <span className="block text-primary">Built to Keep Working</span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-8">
              INTAVOR combines clear thinking with practical delivery, creating
              websites and applications that remain useful well beyond launch.
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-bold">4</span>
                </div>
                <span className="text-muted-foreground">Websites Managed</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-bold">5+</span>
                </div>
                <span className="text-muted-foreground">
                  Projects Delivered
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-bold">15+</span>
                </div>
                <span className="text-muted-foreground">Technologies Used</span>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
