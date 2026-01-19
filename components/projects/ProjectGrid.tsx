"use client";

import { useState } from "react";
import ProjectCard from "@/components/projects/ProjectCard";
import ProjectFilter from "@/components/projects/ProjectFilter";
import { projects } from "@/lib/data";
import { AnimatePresence, motion } from "framer-motion";

export default function ProjectGrid() {
  const [activeCategory, setActiveCategory] = useState("All");

  // Extract unique tags for filter categories
  const allTags = Array.from(new Set(projects.flatMap((p) => p.tags)));
  const categories = ["All", ...allTags.slice(0, 5)]; // Limit to top 5 tags for cleaner UI

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter((p) => p.tags.includes(activeCategory));

  return (
    <section className="py-12">
      <div className="container mx-auto px-4 md:px-6">
        <ProjectFilter
          categories={categories}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </AnimatePresence>
        </motion.div>
        
        {filteredProjects.length === 0 && (
          <div className="text-center py-20 text-muted-foreground">
            No projects found in this category.
          </div>
        )}
      </div>
    </section>
  );
}
