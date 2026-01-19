"use client";

import ExperienceCard from "@/components/experience/ExperienceCard";
import { experience } from "@/lib/data";

export default function Timeline() {
  return (
    <section className="py-12 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2" />
          
          <div className="relative z-10">
            {experience.map((item, index) => (
              <ExperienceCard key={item.id} experience={item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
