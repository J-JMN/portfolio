"use client";

import Link from "next/link";
import { Mail, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import FadeIn from "@/components/animations/FadeIn";

export default function QuickContact() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-primary/5 -z-10" />
      <div className="container mx-auto px-4 md:px-6 text-center">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
            Ready to start your next project?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            I'm currently available for freelance work and open to new opportunities. 
            Let's discuss how I can help you achieve your goals.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="rounded-full w-full sm:w-auto group" asChild>
              <Link href="/contact">
                Get in Touch
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="rounded-full w-full sm:w-auto" asChild>
              <a href="mailto:john.doe@example.com">
                <Mail className="mr-2 w-4 h-4" />
                Send Email
              </a>
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
