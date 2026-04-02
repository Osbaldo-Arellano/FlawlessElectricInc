"use client";

import {
  Briefcase,
  Palette,
  Code,
  TrendingUp,
  Camera,
  Headphones,
  Zap,
  Home,
  Lightbulb,
  Shield,
  Battery,
  Wrench,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";

import { useBrand } from "@/contexts/brand-context";
import { AnimateOnScroll } from "@/components/animate-on-scroll";

const iconMap: Record<string, LucideIcon> = {
  Briefcase,
  Palette,
  Code,
  TrendingUp,
  Camera,
  Headphones,
  Zap,
  Home,
  Lightbulb,
  Shield,
  Battery,
  Wrench,
};

const colSpans = [
  "lg:col-span-2", // 0 — hero
  "lg:col-span-1", // 1
  "lg:col-span-1", // 2
  "lg:col-span-2", // 3
  "lg:col-span-1", // 4
  "lg:col-span-2", // 5 — wide closer
];

export function Services() {
  const { brand } = useBrand();
  const items = brand.services.items;

  return (
    <section
      id="services"
      className="scroll-mt-28 relative overflow-hidden py-20 lg:py-32"
    >
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container relative mx-auto px-4">
        {/* Header */}
        <AnimateOnScroll animation="fade-up" triggerOnce={false}>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-5xl tracking-tight font-bold mb-4">
              {brand.services.headline}
            </h2>
            <p className="text-lg lg:text-2xl text-muted-foreground">
              {brand.services.subheadline}
            </p>
          </div>
        </AnimateOnScroll>

        {/* Bento grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {items.map((service, index) => {
            const Icon = iconMap[service.icon] || Briefcase;
            const isHero = index === 0;
            const isFullWidth = index === items.length - 1 && colSpans[index] === "lg:col-span-2";
            const span = colSpans[index] ?? "lg:col-span-1";

            return (
              <AnimateOnScroll
                key={service.title}
                animation="fade-up"
                delay={Math.min(index * 80, 240)}
                triggerOnce={false}
                className={`${span} ${isFullWidth ? "sm:col-span-2" : ""}`}
              >
                <div
                  className={`group relative h-full flex overflow-hidden rounded-2xl border transition-all duration-300
                    shadow-sm hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1
                    ${isHero
                      ? "flex-col gap-6 p-6 sm:p-8 lg:p-10 border-primary/25 bg-gradient-to-br from-primary/[0.09] via-primary/[0.04] to-transparent"
                      : isFullWidth
                        ? "flex-col sm:flex-row sm:items-center gap-5 sm:gap-8 p-6 sm:p-8 border-primary/15 bg-gradient-to-r from-primary/[0.06] via-primary/[0.02] to-transparent"
                        : "flex-col gap-5 p-5 sm:p-7 border-black/[0.08] dark:border-white/[0.08] bg-gradient-to-br from-white/[0.06] to-white/[0.02] dark:from-white/[0.04] dark:to-transparent"
                    }`}
                >
                  {/* Ghost watermark icon — all cards */}
                  <Icon
                    className={`absolute pointer-events-none select-none text-primary transition-opacity duration-300
                      ${isHero
                        ? "-right-5 -bottom-5 w-44 h-44 rotate-12 opacity-[0.06]"
                        : isFullWidth
                          ? "-right-4 -bottom-4 w-36 h-36 -rotate-6 opacity-[0.05]"
                          : "-right-3 -bottom-3 w-24 h-24 rotate-6 opacity-[0.04] group-hover:opacity-[0.07]"
                      }`}
                    strokeWidth={1}
                  />

                  {/* Hover glow overlay */}
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/[0.03] transition-colors duration-300 pointer-events-none" />

                  {/* Icon */}
                  <div className={`relative shrink-0 ${isFullWidth ? "" : "self-start"}`}>
                    {/* Outer ring — visible on hover */}
                    <div
                      className={`absolute inset-0 rounded-xl ring-1 ring-primary/0 group-hover:ring-primary/25 transition-all duration-300 scale-110`}
                    />
                    <div
                      className={`relative flex items-center justify-center rounded-xl transition-all duration-300
                        bg-gradient-to-br from-primary/25 to-primary/5 group-hover:from-primary/35 group-hover:to-primary/10
                        ${isHero ? "w-16 h-16" : isFullWidth ? "w-14 h-14" : "w-12 h-12"}`}
                    >
                      <Icon
                        className={`text-primary drop-shadow-[0_0_8px_hsl(var(--primary)/0.4)] transition-transform duration-300 group-hover:scale-110 ${
                          isHero ? "w-8 h-8" : "w-6 h-6"
                        }`}
                        strokeWidth={1.5}
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`relative ${isFullWidth ? "flex-1 min-w-0" : "flex flex-col flex-1"}`}>
                    <h3
                      className={`font-semibold mb-2 transition-colors duration-300 group-hover:text-primary ${
                        isHero ? "text-xl lg:text-2xl" : "text-lg"
                      }`}
                    >
                      {service.title}
                    </h3>
                    <p
                      className={`text-muted-foreground leading-relaxed ${
                        isHero ? "text-base" : "text-sm"
                      }`}
                    >
                      {service.description}
                    </p>
                  </div>

                  {/* Full-width card CTA */}
                  {isFullWidth && (
                    <a
                      href="#contact"
                      className="relative self-start sm:self-auto shrink-0 flex items-center gap-2 text-sm font-semibold text-primary/70 hover:text-primary transition-colors duration-200 group/cta"
                    >
                      Get a free estimate
                      <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover/cta:translate-x-1" />
                    </a>
                  )}

                  {/* Hero bottom gradient line */}
                  {isHero && (
                    <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-primary/50 via-primary/20 to-transparent" />
                  )}
                </div>
              </AnimateOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
