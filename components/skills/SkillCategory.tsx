"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import FadeIn from "@/components/animations/FadeIn";

interface Skill {
  name: string;
  level: number;
}

interface SkillCategoryProps {
  title: string;
  skills: Skill[];
  delay?: number;
}

export default function SkillCategory({ title, skills, delay = 0 }: SkillCategoryProps) {
  return (
    <FadeIn delay={delay}>
      <Card className="h-full border-primary/20 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-colors">
        <CardHeader>
          <CardTitle className="text-xl font-heading text-primary">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, index) => (
              <div key={skill.name} className="group relative">
                <Badge 
                  variant="secondary" 
                  className="px-3 py-1.5 text-sm hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                >
                  {skill.name}
                </Badge>
                {/* Tooltip-like proficiency indicator */}
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-24 bg-popover text-popover-foreground text-xs rounded py-1 px-2 text-center opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-lg border border-border">
                  {skill.level}% Proficiency
                  <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-popover" />
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </FadeIn>
  );
}
