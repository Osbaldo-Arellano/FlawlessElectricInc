"use client";

import Link from "next/link";

import { Button } from "@/components/ui/button";
import { useBrand } from "@/contexts/brand-context";

export function CTASection() {
  const { brand } = useBrand();

  return (
    <section className="py-20 lg:py-32 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            {brand.cta.headline}
          </h2>
          <p className="text-lg opacity-90 mb-8">
            {brand.cta.subheadline}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
              asChild
            >
              <Link href={brand.cta.primaryCta.href}>{brand.cta.primaryCta.label}</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-primary-foreground/30 hover:bg-primary-foreground/10"
              asChild
            >
              <Link href={brand.cta.secondaryCta.href}>{brand.cta.secondaryCta.label}</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
