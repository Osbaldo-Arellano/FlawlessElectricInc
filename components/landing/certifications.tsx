"use client";

import Image from "next/image";
import { AnimateOnScroll } from "@/components/animate-on-scroll";

const certifications = [
  {
    acronym: "VBE",
    title: "Veteran Business Enterprise",
    issuer: "State of Oregon",
    description:
      "Certified by the State of Oregon as a Veteran Business Enterprise, recognizing our veteran ownership and commitment to serving our community.",
    logo: "/certs/VBE-Large.png",
    href: "https://www.oregon.gov/biz/programs/cobid/sdv/pages/default.aspx",
  },
  {
    acronym: "MBE",
    title: "Minority Business Enterprise",
    issuer: "State of Oregon",
    description:
      "Certified by the State of Oregon as a Minority Business Enterprise, reflecting our diverse ownership and dedication to inclusive contracting.",
    logo: "/certs/MBE-Large.png",
    href: "https://www.oregon.gov/biz/programs/cobid/mbe-wbe/pages/default.aspx",
  },
];

export function Certifications() {
  return (
    <section
      id="certifications"
      className="scroll-mt-28 relative overflow-hidden py-20 lg:py-28"
    >
      {/* Decorative glows */}
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
              Flawless Electric Inc holds official state certifications that reflect
              our ownership, values, and commitment to Oregon&apos;s contracting community.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {certifications.map((cert, index) => (
            <AnimateOnScroll
              key={cert.acronym}
              animation="fade-up"
              delay={index * 120}
              triggerOnce={false}
            >
              <a
                href={cert.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex flex-col gap-5 rounded-2xl border border-black/[0.08] dark:border-white/10 bg-white/5 backdrop-blur-sm p-8 hover:border-primary/30 transition-colors duration-300 block"
              >
                {/* Subtle hover glow */}
                <div className="absolute inset-0 rounded-2xl bg-primary/0 group-hover:bg-primary/[0.03] transition-colors duration-300 pointer-events-none" />

                {/* Logo */}
                <div className="relative h-20 w-full">
                  <Image
                    src={cert.logo}
                    alt={`${cert.acronym} — ${cert.title} certification logo`}
                    fill
                    className="object-contain object-left"
                  />
                </div>

                {/* Text */}
                <div>
                  <h3 className="text-lg font-semibold mb-2">{cert.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {cert.description}
                  </p>
                </div>

                {/* "Learn more" indicator */}
                <p className="text-xs font-medium text-primary/70 group-hover:text-primary transition-colors duration-200 mt-auto">
                  Learn more at oregon.gov →
                </p>
              </a>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
