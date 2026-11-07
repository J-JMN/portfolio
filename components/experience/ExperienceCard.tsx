"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, Building2, ChevronDown, CircleDot } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ExperienceCardProps {
  engagement: {
    id: number;
    client: string;
    service: string;
    status: string;
    summary: string;
    responsibilities: string[];
    technologies: string[];
    projectId: number;
  };
  index: number;
}

export default function ExperienceCard({
  engagement,
  index,
}: ExperienceCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const detailsId = `engagement-details-${engagement.id}`;

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
          "ml-12 w-[calc(100%-3rem)] md:ml-0 md:w-[calc(50%-2rem)]",
          index % 2 === 0 ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"
        )}>
          <Card className="border-primary/20 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300">
            <CardHeader className="pb-2">
              <div className="flex flex-col items-start justify-between gap-3 sm:flex-row">
                <div>
                  <h3 className="text-xl font-bold text-primary">
                    {engagement.service}
                  </h3>
                  <div className="flex items-center gap-2 text-muted-foreground mt-1">
                    <Building2 className="w-4 h-4" />
                    <span className="font-medium">{engagement.client}</span>
                  </div>
                </div>
                <Badge
                  variant="outline"
                  className="flex items-center gap-1 self-start"
                >
                  <CircleDot className="w-3 h-3 text-primary" />
                  {engagement.status}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className={cn(
                "text-muted-foreground transition-all duration-300",
                isExpanded ? "" : "line-clamp-2"
              )}>
                {engagement.summary}
              </p>
              
              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    id={detailsId}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-4"
                  >
                    <ul className="mb-4 space-y-2 text-sm text-muted-foreground">
                      {engagement.responsibilities.map((item) => (
                        <li key={item} className="flex gap-2">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2">
                      {engagement.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <Button
                      variant="link"
                      className="mt-3 h-auto px-0"
                      asChild
                    >
                      <Link href={`/projects/${engagement.projectId}`}>
                        View project
                        <ArrowUpRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </motion.div>
                )}
              </AnimatePresence>

              <Button
                variant="ghost"
                size="sm"
                className="mt-2 w-full hover:bg-primary/5"
                onClick={() => setIsExpanded(!isExpanded)}
                aria-expanded={isExpanded}
                aria-controls={detailsId}
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
