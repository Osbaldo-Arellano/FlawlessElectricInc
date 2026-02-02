"use client";

import Image from "next/image";

import { useBrand } from "@/contexts/brand-context";
import { AnimateOnScroll } from "@/components/animate-on-scroll";

export function TrustBar() {
  const { brand } = useBrand();

  const LogoItem = ({ logo }: { logo: { name: string; url: string } }) => (
    <div className="flex-shrink-0 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all px-4 lg:px-0">
      <Image
        src={logo.url}
        alt={logo.name}
        width={0}
        height={0}
        sizes="100vw"
        className="w-auto h-auto"
      />
    </div>
  );

  return (
    <section className="py-12 border-y border-border/40 bg-muted/30">
      <div className="container mx-auto px-4">
        <AnimateOnScroll animation="fade">
          <p className="text-center text-lg text-muted-foreground mb-8">
            {brand.trustBar.headline}
          </p>
        </AnimateOnScroll>

        {/* Desktop: centered flex wrap */}
        <AnimateOnScroll animation="fade-up" delay={100}>
          <div className="hidden lg:flex flex-wrap items-center justify-center gap-8 lg:gap-12">
            {brand.assets.partnerLogos.map((logo) => (
              <LogoItem key={logo.name} logo={logo} />
            ))}
          </div>
        </AnimateOnScroll>

        {/* Mobile: infinite horizontal scroll */}
        <div className="lg:hidden overflow-hidden">
          <div
            className="flex items-center gap-12"
            style={{
              width: "max-content",
              animation: "marquee 20s linear infinite",
            }}
          >
            {/* Duplicate logos for seamless loop */}
            {[...brand.assets.partnerLogos, ...brand.assets.partnerLogos].map(
              (logo, index) => (
                <div
                  key={`${logo.name}-${index}`}
                  className="flex-shrink-0 grayscale opacity-60 relative"
                  style={{ width: "100px", height: "200px" }}
                >
                  <Image
                    src={logo.url}
                    alt={logo.name}
                    fill
                    className="object-contain"
                  />
                </div>
              )
            )}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}
