"use client";

import { useEffect, useRef, useState, useMemo, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  ChevronDown,
  Sparkles,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { useBrand } from "@/contexts/brand-context";

// Deterministic particle positions so they survive re-renders
function buildParticles(count: number) {
  const particles = [];
  // Use a simple seeded-ish approach (fixed positions)
  for (let i = 0; i < count; i++) {
    const seed = (i * 137.508) % 100; // golden angle spread
    particles.push({
      left: `${seed}%`,
      top: `${(i * 53.7) % 100}%`,
      size: 1 + (i % 3),
      duration: 3 + (i % 5),
      delay: (i % 7) * 0.5,
    });
  }
  return particles;
}

const PARTICLES = buildParticles(15);

export function Hero() {
  const { brand } = useBrand();
  const sectionRef = useRef<HTMLElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const mobileLogoRef = useRef<HTMLDivElement>(null);
  const scrollHintMobileRef = useRef<HTMLDivElement>(null);
  const scrollHintDesktopRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>(0);
  const imageRef = useRef<HTMLDivElement>(null);

  const [mounted, setMounted] = useState(false);
  const [textRevealed, setTextRevealed] = useState(false);

  // Entrance animation sequence
  useEffect(() => {
    setMounted(true);
    const timer = setTimeout(() => setTextRevealed(true), 300);
    return () => clearTimeout(timer);
  }, []);

  // Mouse-reactive parallax on the hero image (desktop only)
  const onMouseMove = useCallback((e: MouseEvent) => {
    if (window.innerWidth < 1024 || !imageRef.current) return;
    const x = (e.clientX / window.innerWidth - 0.5) * 20;
    const y = (e.clientY / window.innerHeight - 0.5) * 10;
    imageRef.current.style.transform = `translate(${x}px, ${y}px) scale(1.08)`;
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", onMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMouseMove);
  }, [onMouseMove]);

  // Scroll-linked hero animation (existing behaviour, preserved)
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

        const marginV = isMobile ? 0 : 40;
        const extraPad = isMobile ? (1 - progress) * 16 : (1 - progress) * 40;
        const sectionH = (1 - progress) * (vh - 64 - marginV);
        section.style.minHeight = `${sectionH}px`;
        section.style.paddingTop = isMobile ? "0px" : `${extraPad + 16}px`;
        section.style.paddingBottom = `${extraPad + 16}px`;
        section.style.justifyContent = isMobile ? "flex-start" : "center";

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

        // Keep logo + headline visible on desktop, only fade on mobile
        const logo = mobileLogoRef.current;
        if (logo) {
          if (isMobile) {
            logo.style.opacity = `${1 - progress * 2}`;
            logo.style.transform = `translateY(${progress * -10}px)`;
          } else {
            logo.style.opacity = "1";
            logo.style.transform = "none";
          }
        }

        [scrollHintMobileRef.current, scrollHintDesktopRef.current].forEach(
          (hint) => {
            if (hint) hint.style.opacity = `${1 - progress * 3}`;
          },
        );

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

  const headlineWords = useMemo(
    () => brand.hero.headline.split(" "),
    [brand.hero.headline],
  );

  return (
    <section
      ref={sectionRef}
      className="relative flex flex-col justify-center items-stretch lg:mx-20 lg:my-5"
    >
      {/* ─── Hero Card ─── */}
      <div
        ref={cardRef}
        className="relative lg:flex-1 lg:flex lg:flex-col shadow-2xl will-change-transform"
        style={{ transformOrigin: "center center" }}
      >
        <div className="relative aspect-[3/4] sm:aspect-[4/3] lg:aspect-auto lg:flex-1 overflow-hidden">
          {/* Background image — parallax-tracked on desktop */}
          <div
            ref={imageRef}
            className="absolute inset-[-20px] transition-transform duration-100 ease-out will-change-transform"
            style={{ transform: "scale(1.08)" }}
          >
            <Image
              src={brand.assets.hero.image}
              alt={brand.assets.hero.imageAlt}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* ── Cinematic gradient overlays ── */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/10" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent" />

          {/* ── Film-grain texture ── */}
          <div
            className="absolute inset-0 opacity-[0.035] mix-blend-overlay pointer-events-none"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
              backgroundSize: "128px 128px",
            }}
          />

          {/* ── Light sweep streaks ── */}
          {mounted && (
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="hero-light-sweep absolute -top-1/2 -left-1/4 w-1/2 h-[200%] bg-gradient-to-r from-transparent via-white/[0.03] to-transparent rotate-12" />
              <div className="hero-light-sweep-slow absolute -top-1/2 -right-1/4 w-1/3 h-[200%] bg-gradient-to-r from-transparent via-white/[0.02] to-transparent -rotate-12" />
            </div>
          )}

          {/* ── Floating particles ── */}
          {mounted && (
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {PARTICLES.map((p, i) => (
                <div
                  key={i}
                  className="hero-particle absolute rounded-full bg-white/30"
                  style={{
                    left: p.left,
                    top: p.top,
                    width: `${p.size}px`,
                    height: `${p.size}px`,
                    animationDuration: `${p.duration}s`,
                    animationDelay: `${p.delay}s`,
                  }}
                />
              ))}
            </div>
          )}

          {/* ── Overlay content ── */}
          <div className="relative z-10 flex flex-col justify-between h-full p-4 sm:p-6 lg:p-8 container mx-auto">
            {/* Logo + Headline */}
            <div
              ref={mobileLogoRef}
              className="flex-1 flex flex-col items-start justify-center gap-2 lg:gap-4"
            >
              {/* Logo entrance */}
              <div
                className="transition-all duration-1000 ease-out"
                style={{
                  opacity: mounted ? 1 : 0,
                  transform: mounted
                    ? "translateY(0) scale(1)"
                    : "translateY(20px) scale(0.95)",
                }}
              >
                <Image
                  src="/Artboard 3.svg"
                  alt={brand.company.name}
                  width={800}
                  height={800}
                  className="w-auto h-32 sm:h-36 lg:h-24 xl:h-32 drop-shadow-lg"
                  priority
                />
              </div>

              {/* ── Staggered word-by-word headline reveal ── */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-7xl font-bold tracking-tight text-white px-0 max-w-3xl [perspective:600px]">
                {headlineWords.map((word, i) => (
                  <span
                    key={i}
                    className="inline-block mr-[0.3em] transition-all duration-700 ease-out"
                    style={{
                      opacity: textRevealed ? 1 : 0,
                      transform: textRevealed
                        ? "translateY(0) rotateX(0)"
                        : "translateY(40px) rotateX(-20deg)",
                      transitionDelay: `${i * 120}ms`,
                      textShadow: "0 2px 30px rgba(0,0,0,0.4)",
                    }}
                  >
                    {word}
                  </span>
                ))}
              </h1>

              {/* ── Subheadline (was in data but never rendered!) ── */}
              <p
                className="hidden lg:block text-base lg:text-lg text-white/60 max-w-xl leading-relaxed transition-all duration-1000 ease-out"
                style={{
                  opacity: textRevealed ? 1 : 0,
                  transform: textRevealed
                    ? "translateY(0)"
                    : "translateY(20px)",
                  transitionDelay: `${headlineWords.length * 120 + 200}ms`,
                }}
              >
                {brand.hero.subheadline}
              </p>
            </div>

            {/* ── Bottom row: CTAs + Stats | Overlay Card ── */}
            <div className="flex flex-col lg:flex-row 2xl:flex-col lg:items-end 2xl:items-start lg:justify-between gap-6">
              {/* Desktop CTAs + Stats */}
              <div className="hidden lg:flex flex-col gap-6">
                {/* CTA Buttons */}
                <div
                  className="flex gap-3 transition-all duration-700 ease-out"
                  style={{
                    opacity: textRevealed ? 1 : 0,
                    transform: textRevealed
                      ? "translateY(0)"
                      : "translateY(30px)",
                    transitionDelay: `${headlineWords.length * 120 + 400}ms`,
                  }}
                >
                  <Button
                    size="lg"
                    variant="secondary"
                    className="group/btn relative overflow-hidden"
                    asChild
                  >
                    <Link href={brand.hero.primaryCta.href}>
                      <span className="relative z-10 flex items-center gap-2">
                        {brand.hero.primaryCta.label}
                        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                      </span>
                      {/* Shine sweep on hover */}
                      <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700 skew-x-12 pointer-events-none" />
                    </Link>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="bg-white/5 border-white/20 text-white hover:bg-white/10 hover:text-white hover:border-white/30 backdrop-blur-sm transition-all duration-300"
                    asChild
                  >
                    <Link href={brand.hero.secondaryCta.href}>
                      {brand.hero.secondaryCta.label}
                    </Link>
                  </Button>
                </div>

                {/* Stats with hover glass panes */}
                <div
                  className="flex gap-8 transition-all duration-700 ease-out"
                  style={{
                    opacity: textRevealed ? 1 : 0,
                    transform: textRevealed
                      ? "translateY(0)"
                      : "translateY(20px)",
                    transitionDelay: `${headlineWords.length * 120 + 600}ms`,
                  }}
                >
                  {brand.hero.stats.map((stat) => (
                    <div key={stat.label} className="relative group/stat">
                      <div className="absolute -inset-3 rounded-lg bg-white/0 group-hover/stat:bg-white/[0.06] backdrop-blur-none group-hover/stat:backdrop-blur-sm transition-all duration-300" />
                      <div className="relative">
                        <div className="text-2xl font-bold text-white drop-shadow-md">
                          {stat.value}
                        </div>
                        <div className="text-xs text-white/70 uppercase tracking-wide">
                          {stat.label}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* ── Overlay Card (glassmorphism upgrade) ── */}
              <div
                className="self-end 2xl:self-start max-w-xs sm:max-w-sm lg:max-w-md 2xl:max-w-2xl transition-all duration-1000 ease-out"
                style={{
                  opacity: mounted ? 1 : 0,
                  transform: mounted
                    ? "translateY(0) translateX(0)"
                    : "translateY(30px) translateX(20px)",
                  transitionDelay: "800ms",
                }}
              >
                <div className="relative bg-white/[0.07] backdrop-blur-xl border border-white/[0.1] rounded-xl p-5 2xl:p-7 space-y-4 overflow-hidden group/card hover:border-white/[0.18] transition-colors duration-500">
                  {/* Animated corner glow on hover */}
                  <div className="absolute -top-12 -right-12 w-24 h-24 bg-white/10 rounded-full blur-2xl opacity-0 group-hover/card:opacity-100 transition-opacity duration-700 pointer-events-none" />

                  {/* Eyebrow */}
                  <div className="flex items-center gap-2 relative">
                    <Sparkles className="w-3 h-3 text-white/50" />
                    <span className="text-xs font-semibold uppercase tracking-widest text-white/80">
                      {brand.hero.overlayCard.eyebrow}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-sm 2xl:text-base text-white/80 leading-relaxed relative">
                    {brand.hero.overlayCard.description}
                  </p>

                  {/* Buttons */}
                  <div className="flex flex-wrap gap-2 relative">
                    {brand.hero.overlayCard.buttons.map((btn) => (
                      <Link
                        key={btn.href}
                        href={btn.href}
                        className="group/link inline-flex items-center gap-1.5 px-4 2xl:px-5 py-2 2xl:py-2.5 text-xs 2xl:text-sm font-medium text-white border border-white/20 rounded-lg hover:bg-white/10 hover:border-white/30 transition-all duration-300"
                      >
                        {btn.label}
                        <ArrowRight className="w-3 h-3 transition-transform duration-300 group-hover/link:translate-x-0.5" />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ─── Mobile CTAs & Stats (below image) ─── */}
      <div ref={ctaRef} className="mt-5 space-y-5 lg:hidden relative px-1">
        <div className="flex flex-row gap-2.5">
          <Button
            size="sm"
            className="flex-1 rounded-full text-xs font-medium h-9 group/btn"
            asChild
          >
            <Link href={brand.hero.primaryCta.href}>
              <span className="flex items-center justify-center gap-1.5">
                {brand.hero.primaryCta.label}
                <ArrowRight className="w-3 h-3 transition-transform duration-300 group-hover/btn:translate-x-0.5" />
              </span>
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

        <div className="flex flex-row gap-4">
          {/* Stats — stacked as 3 rows */}
          <div className="flex flex-col gap-3 shrink-0">
            {brand.hero.stats.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-row items-center gap-2.5 rounded-lg border border-border bg-muted/50 px-3 py-1"
              >
                <div className="text-base font-bold leading-none">
                  {stat.value}
                </div>
                <div className="text-[10px] text-muted-foreground leading-none uppercase tracking-wide">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Contact card — fills remaining space */}
          <div className="flex-1 min-w-0 flex flex-col justify-between rounded-lg border border-border bg-muted/50 p-3 gap-3">
            <a
              href={`tel:${brand.company.phone.replace(/\s/g, "")}`}
              className="flex items-center gap-2 text-xs text-foreground hover:text-primary transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-muted-foreground shrink-0" />
              <span className="truncate">{brand.company.phone}</span>
            </a>
            <a
              href={`mailto:${brand.company.email}`}
              className="flex items-center gap-2 text-xs text-foreground hover:text-primary transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-muted-foreground shrink-0" />
              <span className="truncate">{brand.company.email}</span>
            </a>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <MapPin className="w-3.5 h-3.5 shrink-0" />
              <span className="truncate">{brand.company.address}</span>
            </div>
          </div>
        </div>

        <div
          ref={scrollHintMobileRef}
          className="flex items-center justify-center text-muted-foreground/50 pt-1"
        >
          <ChevronDown className="w-4 h-4 animate-bounce" />
        </div>
      </div>

      {/* ─── Desktop Scroll Hint ─── */}
      <div
        ref={scrollHintDesktopRef}
        className="hidden lg:flex flex-col items-center justify-center gap-2 mt-4 w-full shrink-0"
      >
        <span className="text-[11px] font-medium tracking-[0.25em] uppercase text-muted-foreground/70">
          {brand.hero.scrollHint}
        </span>
        <div className="w-[1px] h-8 bg-gradient-to-b from-muted-foreground/40 to-transparent" />
        <div className="w-8 h-8 rounded-full border border-muted-foreground/30 flex items-center justify-center animate-bounce">
          <ChevronDown className="w-3.5 h-3.5 text-muted-foreground/60" />
        </div>
      </div>
    </section>
  );
}
