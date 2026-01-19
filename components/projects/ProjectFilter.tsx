"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface ProjectFilterProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export default function ProjectFilter({
  categories,
  activeCategory,
  onCategoryChange,
}: ProjectFilterProps) {
  return (
    <div className="flex flex-wrap justify-center gap-2 mb-12">
      {categories.map((category) => (
        <Button
          key={category}
          variant={activeCategory === category ? "default" : "outline"}
          onClick={() => onCategoryChange(category)}
          className="rounded-full transition-all duration-300"
          size="sm"
        >
          {category}
          {activeCategory === category && (
            <motion.span
              layoutId="activeFilter"
              className="absolute inset-0 bg-primary/10 rounded-full -z-10"
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            />
          )}
        </Button>
      ))}
    </div>
  );
}
