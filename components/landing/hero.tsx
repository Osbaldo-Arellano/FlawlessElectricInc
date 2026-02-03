"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { useBrand } from "@/contexts/brand-context";

export function Hero() {
  const { brand } = useBrand();
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const [isDesktop, setIsDesktop] = useState(false);
  const scrollHintMobileRef = useRef<HTMLDivElement>(null);
  const scrollHintDesktopRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>(0);
  const progressRef = useRef(0);

  useEffect(() => {
    function checkDesktop() {
      setIsDesktop(window.innerWidth >= 1024);
    }

    function applyStyles(progress: number) {
      const section = sectionRef.current;
      const content = contentRef.current;
      const cta = ctaRef.current;
      if (!section || !content) return;

      const isMobile = window.innerWidth < 1024;
      const scale = isMobile ? 1 : 1 + (1 - progress) * 0.08;
      const tY = isMobile ? 0 : (1 - progress) * -20;
      const extraPad = isMobile ? (1 - progress) * 16 : (1 - progress) * 40;
      const minH = (1 - progress) * (window.innerHeight - 64);

      section.style.display = "flex";
      section.style.alignItems = "center";
      section.style.minHeight = `${minH}px`;
      section.style.paddingTop = `${extraPad + 16}px`;
      section.style.paddingBottom = `${extraPad + 16}px`;
      section.style.willChange = "min-height, padding";

      content.style.transform = `scale(${scale}) translateY(${tY}px)`;
      content.style.transformOrigin = "center center";
      content.style.width = "100%";
      content.style.willChange = "transform";

      [scrollHintMobileRef.current, scrollHintDesktopRef.current].forEach(
        (hint) => {
          if (hint) {
            hint.style.opacity = `${1 - progress * 3}`;
          }
        },
      );

      if (cta) {
        if (isMobile) {
          // Mobile: CTA moves with the hero as one unit, always visible
          cta.style.opacity = "1";
          cta.style.transform = "none";
        } else {
          // Desktop: CTA fades in on scroll
          cta.style.opacity = `${progress}`;
          cta.style.transform = `translateY(${(1 - progress) * 20}px)`;
          cta.style.willChange = "opacity, transform";
        }
      }
    }

    function handleScroll() {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        const scrollY = window.scrollY;
        const viewportH = window.innerHeight;
        const progress = Math.min(scrollY / (viewportH * 0.6), 1);
        progressRef.current = progress;
        applyStyles(progress);
      });
    }

    checkDesktop();
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", () => {
      checkDesktop();
      handleScroll();
    });
    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative overflow-hidden">
      <div ref={contentRef}>
        {/* Hero Image — full width on all screen sizes */}
        <div className="relative">
          <div className="relative overflow-hidden shadow-2xl min-h-[480px] sm:min-h-0 sm:aspect-[4/3] lg:aspect-[21/9]">
            {/* Background image */}
            <Image
              src={brand.assets.hero.image}
              alt={brand.assets.hero.imageAlt}
              fill
              className="object-cover"
              priority
            />
            {/* Slight darkening for text readability */}
            <div className="absolute inset-0 bg-black/20" />
            {/* Overlay content */}
            <div className="relative z-10 flex flex-col justify-between h-full min-h-[480px] sm:min-h-0 p-4 sm:p-6 lg:p-10 container mx-auto">
              {/* Headline - centered */}
              <div className="flex-1 flex items-center justify-start">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-white px-0 drop-shadow-lg max-w-3xl">
                  {brand.hero.headline}
                </h1>
              </div>
              {/* Bottom row: CTAs + Stats (left) | Card (right) */}
              <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
                {/* CTAs and Stats — desktop only inside overlay */}
                <div className="hidden lg:flex flex-col gap-6">
                  {/* CTA Buttons */}
                  <div className="flex gap-3">
                    <Button size="lg" variant="secondary" asChild>
                      <Link href={brand.hero.primaryCta.href}>
                        {brand.hero.primaryCta.label}
                      </Link>
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      className="bg-transparent border-white/30 text-white hover:bg-white/10 hover:text-white"
                      asChild
                    >
                      <Link href={brand.hero.secondaryCta.href}>
                        {brand.hero.secondaryCta.label}
                      </Link>
                    </Button>
                  </div>
                  {/* Stats */}
                  <div className="flex gap-8">
                    {brand.hero.stats.map((stat) => (
                      <div key={stat.label}>
                        <div className="text-2xl font-bold text-white drop-shadow-md">
                          {stat.value}
                        </div>
                        <div className="text-xs text-white/70 uppercase tracking-wide">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                {/* CTA card - bottom right */}
                <div className="self-end max-w-xs sm:max-w-sm lg:max-w-md">
                  <div className="bg-white/10 backdrop-blur-md border border-white/15 rounded-sm p-5 space-y-4">
                    {/* Eyebrow */}
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-white rounded-sm" />
                      <span className="text-xs font-semibold uppercase tracking-widest text-white/80">
                        {brand.hero.overlayCard.eyebrow}
                      </span>
                    </div>
                    {/* Description */}
                    <p className="text-sm text-white/85 leading-relaxed">
                      {brand.hero.overlayCard.description}
                    </p>
                    {/* Buttons */}
                    <div className="flex flex-wrap gap-2">
                      {brand.hero.overlayCard.buttons.map((btn) => (
                        <Link
                          key={btn.href}
                          href={btn.href}
                          className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium text-white border border-white/30 rounded-sm hover:bg-white/10 transition-colors"
                        >
                          {btn.label}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="10"
                            height="10"
                            viewBox="0 0 9 9"
                            fill="none"
                          >
                            <path
                              d="M8.036 1.464a.5.5 0 0 0-.5-.5H3.036a.5.5 0 0 0 0 1h4v4a.5.5 0 0 0 1 0V1.464ZM.818 8.89l7.071-7.071-.707-.708L.111 8.182l.707.707Z"
                              fill="currentColor"
                            />
                          </svg>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Decorative elements */}
          <div className="absolute -z-10 -top-4 -right-4 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute -z-10 -bottom-4 -left-4 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        </div>

        {/* CTAs and Stats below the image — mobile only */}
        <div ref={ctaRef} className="mt-8 space-y-8 lg:hidden relative">
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" asChild>
              <Link href={brand.hero.primaryCta.href}>
                {brand.hero.primaryCta.label}
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href={brand.hero.secondaryCta.href}>
                {brand.hero.secondaryCta.label}
              </Link>
            </Button>
          </div>

          <div className="flex flex-row flex-nowrap justify-between gap-4">
            {brand.hero.stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-xl font-bold">{stat.value}</div>
                <div className="text-xs text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Scroll hint arrow — inside CTA on medium, far right */}
          <div
            ref={scrollHintMobileRef}
            className="sm:absolute sm:right-0 sm:top-1/2 sm:-translate-y-1/2 flex items-center justify-center text-muted-foreground mt-4 sm:mt-0"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="animate-bounce"
            >
              <path d="M12 5v14" />
              <path d="m19 12-7 7-7-7" />
            </svg>
          </div>
        </div>

        {/* Scroll hint — desktop (below hero) */}
        <div
          ref={scrollHintDesktopRef}
          className="hidden lg:flex flex-col items-center justify-center gap-2 mt-8 w-full text-muted-foreground"
        >
          <span className="text-xs tracking-widest uppercase">
            {brand.hero.scrollHint}
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="animate-bounce"
          >
            <path d="M12 5v14" />
            <path d="m19 12-7 7-7-7" />
          </svg>
        </div>
      </div>
    </section>
  );
}
