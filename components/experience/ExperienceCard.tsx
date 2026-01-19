"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Calendar, Building } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ExperienceCardProps {
  experience: {
    id: number;
    company: string;
    role: string;
    period: string;
    description: string;
    technologies: string[];
  };
  index: number;
}

export default function ExperienceCard({ experience, index }: ExperienceCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="relative mb-8 md:mb-12 last:mb-0"
    >
      <div className={cn(
        "flex flex-col md:flex-row items-center",
        index % 2 === 0 ? "md:flex-row-reverse" : ""
      )}>
        {/* Timeline Dot */}
        <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background z-10 -translate-x-1/2" />
        
        {/* Content Card */}
        <div className={cn(
          "w-full md:w-[calc(50%-2rem)] ml-12 md:ml-0",
          index % 2 === 0 ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"
        )}>
          <Card className="border-primary/20 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300">
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold text-primary">{experience.role}</h3>
                  <div className="flex items-center gap-2 text-muted-foreground mt-1">
                    <Building className="w-4 h-4" />
                    <span className="font-medium">{experience.company}</span>
                  </div>
                </div>
                <Badge variant="outline" className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  {experience.period}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className={cn(
                "text-muted-foreground transition-all duration-300",
                isExpanded ? "" : "line-clamp-2"
              )}>
                {experience.description}
              </p>
              
              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-4"
                  >
                    <div className="flex flex-wrap gap-2 mt-2">
                      {experience.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <Button
                variant="ghost"
                size="sm"
                className="mt-2 w-full hover:bg-primary/5"
                onClick={() => setIsExpanded(!isExpanded)}
              >
                {isExpanded ? "Show Less" : "Show More"}
                <ChevronDown className={cn(
                  "ml-2 w-4 h-4 transition-transform duration-200",
                  isExpanded ? "rotate-180" : ""
                )} />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </motion.div>
  );
}
