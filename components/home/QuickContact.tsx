import Link from "next/link";
import { Mail, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import FadeIn from "@/components/animations/FadeIn";
import GlowDivider from "@/components/decor/GlowDivider";
import FlowLines from "@/components/decor/FlowLines";
import { brandInfo } from "@/lib/data";

export default function QuickContact() {
  return (
    <section className="defer-render relative isolate overflow-hidden py-16 md:py-20">
      <GlowDivider />
      <FlowLines />
      <div className="absolute inset-0 bg-primary/5 -z-10" />
      <div className="container mx-auto px-4 md:px-6 text-center">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
            Your website speaks before you do.
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Make sure it reflects the quality of your work, gives people a
            reason to trust you, and makes the next step feel obvious.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              className="rounded-full w-full sm:w-auto group"
              asChild
            >
              <Link href="/contact">
                Start a Project
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full w-full sm:w-auto"
              asChild
            >
              <a href={`mailto:${brandInfo.email}`}>
                <Mail className="mr-2 w-4 h-4" />
                Email INTAVOR
              </a>
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
