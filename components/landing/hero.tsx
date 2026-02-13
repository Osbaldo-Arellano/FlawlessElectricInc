"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { useBrand } from "@/contexts/brand-context";

export function Hero() {
  const { brand } = useBrand();
  const sectionRef = useRef<HTMLElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const mobileLogoRef = useRef<HTMLDivElement>(null);
  const scrollHintMobileRef = useRef<HTMLDivElement>(null);
  const scrollHintDesktopRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    function applyScroll() {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        const section = sectionRef.current;
        const card = cardRef.current;
        const cta = ctaRef.current;
        if (!section || !card) return;

        const isMobile = window.innerWidth < 1024;
        const scrollY = window.scrollY;
        const vh = window.innerHeight;
        const progress = Math.min(scrollY / (vh * 0.6), 1);

        // Section: fills viewport, centers content
        const marginV = isMobile ? 0 : 40;
        const extraPad = isMobile ? (1 - progress) * 16 : (1 - progress) * 40;
        section.style.minHeight = `${(1 - progress) * (vh - 64 - marginV)}px`;
        section.style.paddingTop = isMobile ? "0px" : `${extraPad + 16}px`;
        section.style.paddingBottom = `${extraPad + 16}px`;
        section.style.justifyContent = isMobile ? "flex-start" : "center";

        // Card: scale + rounded corners + clipping all on the SAME element
        if (isMobile) {
          card.style.transform = "none";
          card.style.borderRadius = "0";
          card.style.overflow = "hidden";
        } else {
          const scale = 1 + (1 - progress) * 0.08;
          const tY = (1 - progress) * -20;
          card.style.transform = `scale(${scale}) translateY(${tY}px)`;
          card.style.borderRadius = "1rem";
          card.style.overflow = "hidden";
        }

        // Mobile logo fades out with scroll
        const logo = mobileLogoRef.current;
        if (logo) {
          logo.style.opacity = `${1 - progress * 2}`;
          logo.style.transform = `translateY(${progress * -10}px)`;
        }

        // Scroll hints fade out
        [scrollHintMobileRef.current, scrollHintDesktopRef.current].forEach(
          (hint) => {
            if (hint) hint.style.opacity = `${1 - progress * 3}`;
          },
        );

        // CTA behaviour
        if (cta) {
          if (isMobile) {
            cta.style.opacity = "1";
            cta.style.transform = "none";
          } else {
            cta.style.opacity = `${progress}`;
            cta.style.transform = `translateY(${(1 - progress) * 20}px)`;
          }
        }
      });
    }

    applyScroll();
    window.addEventListener("scroll", applyScroll, { passive: true });
    window.addEventListener("resize", applyScroll);
    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("scroll", applyScroll);
      window.removeEventListener("resize", applyScroll);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative flex flex-col justify-center items-stretch lg:mx-20 lg:my-5"
    >
      {/* Hero card — transform, border-radius, overflow all set via JS on this element */}
      <div
        ref={cardRef}
        className="relative shadow-2xl will-change-transform"
        style={{ transformOrigin: "center center" }}
      >
        <div className="relative aspect-[3/4] sm:aspect-[4/3] lg:aspect-[21/9]">
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
          <div className="relative z-10 flex flex-col justify-between h-full p-4 sm:p-6 lg:p-10 container mx-auto">
            {/* Logo + Headline */}
            <div
              ref={mobileLogoRef}
              className="flex-1 flex flex-col items-start justify-center gap-2 lg:gap-3"
            >
              <Image
                src="/Artboard 3.svg"
                alt={brand.company.name}
                width={800}
                height={800}
                className="w-auto h-20 sm:h-24 lg:h-28 xl:h-100 drop-shadow-lg"
                priority
              />
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-7xl font-bold tracking-tight text-white px-0 drop-shadow-lg max-w-3xl">
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
      </div>

      {/* CTAs and Stats below the image — mobile/tablet only */}
      <div ref={ctaRef} className="mt-5 space-y-5 lg:hidden relative px-1">
        {/* Buttons — compact pill style */}
        <div className="flex flex-row gap-2.5">
          <Button
            size="sm"
            className="flex-1 rounded-full text-xs font-medium h-9"
            asChild
          >
            <Link href={brand.hero.primaryCta.href}>
              {brand.hero.primaryCta.label}
            </Link>
          </Button>
          <Button
            size="sm"
            variant="outline"
            className="flex-1 rounded-full text-xs font-medium h-9"
            asChild
          >
            <Link href={brand.hero.secondaryCta.href}>
              {brand.hero.secondaryCta.label}
            </Link>
          </Button>
        </div>

        {/* Stats — compact row with dividers */}
        <div className="flex flex-row items-center justify-between">
          {brand.hero.stats.map((stat, i) => (
            <div key={stat.label} className="flex flex-row items-center gap-0">
              {i > 0 && <div className="w-px h-6 bg-border mr-3" />}
              <div className={i > 0 ? "pl-3" : ""}>
                <div className="text-sm font-bold leading-tight">
                  {stat.value}
                </div>
                <div className="text-[10px] text-muted-foreground leading-tight">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Scroll hint */}
        <div
          ref={scrollHintMobileRef}
          className="flex items-center justify-center text-muted-foreground/50 pt-1"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="animate-bounce"
          >
            <path d="m7 13 5 5 5-5" />
          </svg>
        </div>
      </div>

      {/* Scroll hint — desktop (below hero card) */}
      <div
        ref={scrollHintDesktopRef}
        className="hidden lg:flex flex-col items-center justify-center gap-3 mt-8 w-full"
      >
        <span className="text-[11px] font-medium tracking-[0.25em] uppercase text-muted-foreground/70">
          {brand.hero.scrollHint}
        </span>
        <div className="w-[1px] h-8 bg-gradient-to-b from-muted-foreground/40 to-transparent" />
        <div className="w-8 h-8 rounded-full border border-muted-foreground/30 flex items-center justify-center animate-bounce">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-muted-foreground/60"
          >
            <path d="m7 13 5 5 5-5" />
          </svg>
        </div>
      </div>
    </section>
  );
}
