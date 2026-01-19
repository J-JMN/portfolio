"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import FadeIn from "@/components/animations/FadeIn";

interface Skill {
  name: string;
}

interface SkillCategoryProps {
  title: string;
  skills: Skill[];
  delay?: number;
}

export default function SkillCategory({
  title,
  skills,
  delay = 0,
}: SkillCategoryProps) {
  return (
    <FadeIn delay={delay}>
      <Card className="h-full border-primary/20 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-colors">
        <CardHeader>
          <CardTitle className="text-xl font-heading text-primary">
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <Badge
                key={skill.name}
                variant="secondary"
                className="px-3 py-1.5 text-sm hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
              >
                {skill.name}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </FadeIn>
  );
}
