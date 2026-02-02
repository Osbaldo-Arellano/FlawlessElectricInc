"use client";

import { Target, Eye, Heart } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useBrand } from "@/contexts/brand-context";
import { AnimateOnScroll } from "@/components/animate-on-scroll";

const iconMap = [Target, Eye, Heart];

export function About() {
  const { brand } = useBrand();

  return (
    <section id="about" className="py-20 lg:py-32">
      <div className="container mx-auto px-4">
        {/* Header */}
        <AnimateOnScroll animation="fade-up">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              {brand.about.headline}
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              {brand.about.subheadline}
            </p>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {brand.about.description}
            </p>
          </div>
        </AnimateOnScroll>

        {/* Values Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {brand.about.values.map((value, index) => {
            const Icon = iconMap[index] || Target;
            return (
              <AnimateOnScroll key={value.title} animation="fade-up" delay={index * 100}>
                <Card className="text-center border-border/50 h-full">
                  <CardHeader>
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              </AnimateOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
