"use client";

import SkillCategory from "@/components/skills/SkillCategory";
import FadeIn from "@/components/animations/FadeIn";
import { skills } from "@/lib/data";

export default function SkillsGrid() {
  return (
    <section className="pt-4 pb-16">
      <div className="container mx-auto px-4 md:px-6">
        <FadeIn>
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-heading font-bold mb-3">
              Skill <span className="text-primary">Breakdown</span>
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              Organized by domain, here&apos;s where my expertise lies
            </p>
          </div>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <SkillCategory
            title="Frontend Development"
            skills={skills.frontend}
            delay={0.1}
          />
          <SkillCategory
            title="Backend Development"
            skills={skills.backend}
            delay={0.2}
          />
          <SkillCategory
            title="Tools & DevOps"
            skills={skills.tools}
            delay={0.3}
          />
        </div>
      </div>
    </section>
  );
}
