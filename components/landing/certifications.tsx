"use client";

import Image from "next/image";
import { AnimateOnScroll } from "@/components/animate-on-scroll";

const certifications = [
  {
    logo: "/certs/VBE-Large.png",
    title: "Veteran Business Enterprise",
    description:
      "Certified by the State of Oregon as a Veteran Business Enterprise, recognizing our veteran ownership and commitment to serving our community.",
    href: "https://www.oregon.gov/biz/programs/cobid/sdv/pages/default.aspx",
    linkLabel: "Learn more at oregon.gov",
    span: "lg:col-span-2",
    invert: false,
    solidBg: false,
  },
  {
    logo: "/certs/MBE-Large.png",
    title: "Minority Business Enterprise",
    description:
      "Certified by the State of Oregon as a Minority Business Enterprise, reflecting our diverse ownership and dedication to inclusive contracting.",
    href: "https://www.oregon.gov/biz/programs/cobid/mbe-wbe/pages/default.aspx",
    linkLabel: "Learn more at oregon.gov",
    span: "lg:col-span-1",
    invert: false,
    solidBg: false,
  },
  {
    logo: "/certs/nietc-logo-3.webp",
    title: "NIETC Certified",
    description:
      "Recognized by the National Institute of Electrical Testing Competency for adherence to industry standards and electrical testing excellence.",
    href: null,
    linkLabel: null,
    span: "lg:col-span-1",
    invert: false,
    solidBg: false,
  },
  {
    logo: "/certs/TALogo_black.png",
    title: "Trade Ally of Energy Trust of Oregon",
    description:
      "As an approved trade ally contractor of Energy Trust of Oregon, we are qualified to improve the energy efficiency and comfort of your home.",
    href: "https://www.energytrust.org/",
    linkLabel: "Visit energytrust.org",
    span: "lg:col-span-2",
    invert: false,
    solidBg: true,
  },
];

export function Certifications() {
  return (
    <section
      id="certifications"
      className="scroll-mt-28 relative overflow-hidden py-20 lg:py-28"
    >
      <div className="absolute -top-24 -left-24 w-80 h-80 bg-primary/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container relative mx-auto px-4">
        <AnimateOnScroll animation="fade-up" triggerOnce={false}>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">
              State of Oregon
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mb-4">
              Certified &amp; Recognized
            </h2>
            <p className="text-base lg:text-lg text-muted-foreground">
              Flawless Electric Inc holds official state certifications that
              reflect our ownership, values, and commitment to Oregon&apos;s
              contracting community.
            </p>
          </div>
        </AnimateOnScroll>

        {/* Bento grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {certifications.map((cert, index) => {
            const isHero = index === 0;
            const isFullWidth = cert.span === "lg:col-span-3" || (cert.span === "lg:col-span-2" && !isHero);
            const Wrapper = cert.href ? "a" : "div";
            const wrapperProps = cert.href
              ? {
                  href: cert.href,
                  target: "_blank",
                  rel: "noopener noreferrer",
                }
              : {};

            return (
              <AnimateOnScroll
                key={cert.title}
                animation="fade-up"
                delay={Math.min(index * 80, 240)}
                triggerOnce={false}
                className={`${cert.span} ${isFullWidth ? "sm:col-span-2" : ""}`}
              >
                <Wrapper
                  {...wrapperProps}
                  className={`group relative h-full flex overflow-hidden rounded-2xl border transition-all duration-300
                    shadow-sm hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1
                    ${
                      isHero
                        ? "flex-col gap-6 p-6 sm:p-8 lg:p-10 border-primary/25 bg-gradient-to-br from-primary/[0.09] via-primary/[0.04] to-transparent"
                        : isFullWidth
                          ? "flex-col sm:flex-row sm:items-center gap-5 sm:gap-8 p-6 sm:p-8 border-primary/15 bg-gradient-to-r from-primary/[0.06] via-primary/[0.02] to-transparent"
                          : "flex-col gap-5 p-5 sm:p-7 border-black/[0.08] dark:border-white/[0.08] bg-gradient-to-br from-white/[0.06] to-white/[0.02] dark:from-white/[0.04] dark:to-transparent"
                    }`}
                >
                  {/* Hover glow */}
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/[0.03] transition-colors duration-300 pointer-events-none" />

                  {/* Top accent line — non-hero */}
                  {!isHero && (
                    <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  )}

                  {/* Logo */}
                  <div className={`shrink-0 ${cert.solidBg ? "bg-white rounded-lg p-2 flex items-center" : ""}`}>
                    <div
                      className={`relative ${
                        isHero
                          ? "h-16 w-48"
                          : isFullWidth
                            ? "h-12 w-40"
                            : "h-12 w-32"
                      }`}
                    >
                      <Image
                        src={cert.logo}
                        alt={cert.title}
                        fill
                        className={`object-contain object-left transition-all duration-300 group-hover:scale-[1.03] ${
                          cert.invert
                            ? "brightness-0 dark:brightness-100 dark:invert-0 invert-0 dark:filter-none"
                            : ""
                        }`}
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div
                    className={`relative ${isFullWidth ? "flex-1 min-w-0" : "flex flex-col flex-1"}`}
                  >
                    <h3
                      className={`font-semibold mb-2 transition-colors duration-300 group-hover:text-primary ${
                        isHero ? "text-xl lg:text-2xl" : "text-lg"
                      }`}
                    >
                      {cert.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {cert.description}
                    </p>
                  </div>

                  {/* Oregon.gov link label */}
                  {cert.href && (
                    <p className="relative text-xs font-medium text-primary/70 group-hover:text-primary transition-colors duration-200 mt-auto shrink-0 self-start sm:self-auto">
                      {cert.linkLabel} →
                    </p>
                  )}

                  {/* Hero bottom accent line */}
                  {isHero && (
                    <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-primary/50 via-primary/20 to-transparent" />
                  )}
                </Wrapper>
              </AnimateOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
