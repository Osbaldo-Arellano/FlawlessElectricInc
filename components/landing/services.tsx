"use client";

import {
  Briefcase,
  Palette,
  Code,
  TrendingUp,
  Camera,
  Headphones,
  type LucideIcon,
} from "lucide-react";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useBrand } from "@/contexts/brand-context";
import { AnimateOnScroll } from "@/components/animate-on-scroll";

const iconMap: Record<string, LucideIcon> = {
  Briefcase,
  Palette,
  Code,
  TrendingUp,
  Camera,
  Headphones,
};

export function Services() {
  const { brand } = useBrand();

  return (
    <section id="services" className="py-20 lg:py-32">
      <div className="container mx-auto px-4">
        {/* Header */}
        <AnimateOnScroll animation="fade-up">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              {brand.services.headline}
            </h2>
            <p className="text-lg text-muted-foreground">
              {brand.services.subheadline}
            </p>
          </div>
        </AnimateOnScroll>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {brand.services.items.map((service, index) => {
            const Icon = iconMap[service.icon] || Briefcase;
            return (
              <AnimateOnScroll key={service.title} animation="fade-up" delay={index * 75}>
                <Card className="border-border/50 hover:border-primary/50 transition-colors h-full">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {service.description}
                    </CardDescription>
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
