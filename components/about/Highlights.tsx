"use client";

import { Card, CardContent } from "@/components/ui/card";
import FadeIn from "@/components/animations/FadeIn";
import { highlights } from "@/lib/data";

export default function Highlights() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {highlights.map((item, index) => (
            <FadeIn key={item.label} delay={index * 0.1}>
              <Card className="border-primary/20 bg-primary/5 backdrop-blur-sm hover:bg-primary/10 transition-colors">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                    {item.value}
                  </div>
                  <div className="text-muted-foreground font-medium">
                    {item.label}
                  </div>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
