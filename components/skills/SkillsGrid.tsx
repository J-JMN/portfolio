"use client";

import SkillCategory from "@/components/skills/SkillCategory";
import { skills } from "@/lib/data";

export default function SkillsGrid() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <SkillCategory title="Frontend Development" skills={skills.frontend} delay={0.1} />
          <SkillCategory title="Backend Development" skills={skills.backend} delay={0.2} />
          <SkillCategory title="Tools & DevOps" skills={skills.tools} delay={0.3} />
        </div>
      </div>
    </section>
  );
}
