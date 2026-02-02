"use client";

import Image from "next/image";

import { useBrand } from "@/contexts/brand-context";

export function Gallery() {
  const { brand } = useBrand();

  return (
    <section id="gallery" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            {brand.gallery.headline}
          </h2>
          <p className="text-lg text-muted-foreground">
            {brand.gallery.subheadline}
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {brand.gallery.items.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg bg-background border border-border/50 hover:border-primary/50 transition-colors"
            >
              <div className="aspect-[3/2] relative">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <span className="inline-block px-2 py-1 text-xs font-medium bg-primary text-primary-foreground rounded mb-2">
                    {item.category}
                  </span>
                  <h3 className="text-lg font-semibold text-white">
                    {item.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
