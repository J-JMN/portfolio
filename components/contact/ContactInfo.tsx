"use client";

import { Mail, MapPin, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import FadeIn from "@/components/animations/FadeIn";
import { personalInfo } from "@/lib/data";

export default function ContactInfo() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
      <FadeIn delay={0.1}>
        <Card className="h-full border-primary/20 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-colors text-center">
          <CardContent className="pt-6 flex flex-col items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
              <Mail className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold mb-1">Email</h3>
              <a href={`mailto:${personalInfo.email}`} className="text-muted-foreground hover:text-primary transition-colors">
                {personalInfo.email}
              </a>
            </div>
          </CardContent>
        </Card>
      </FadeIn>

      <FadeIn delay={0.2}>
        <Card className="h-full border-primary/20 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-colors text-center">
          <CardContent className="pt-6 flex flex-col items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold mb-1">Location</h3>
              <p className="text-muted-foreground">
                {personalInfo.location}
              </p>
            </div>
          </CardContent>
        </Card>
      </FadeIn>

      <FadeIn delay={0.3}>
        <Card className="h-full border-primary/20 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-colors text-center">
          <CardContent className="pt-6 flex flex-col items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold mb-1">Availability</h3>
              <p className="text-green-500 font-medium flex items-center gap-2 justify-center">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                {personalInfo.availability}
              </p>
            </div>
          </CardContent>
        </Card>
      </FadeIn>
    </div>
  );
}
