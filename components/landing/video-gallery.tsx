"use client";

import Link from "next/link";
import { Play } from "lucide-react";

import { useBrand } from "@/contexts/brand-context";
import { AnimateOnScroll } from "@/components/animate-on-scroll";

export function VideoGallery() {
  const { brand } = useBrand();

  return (
    <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6">
      {brand.gallery.videos.map((item, index) => (
        <AnimateOnScroll key={index} animation="fade-up" delay={index * 75}>
          <Link
            href={`/gallery/video?v=${index}`}
            className="group relative block overflow-hidden rounded-lg bg-background border border-border/50 hover:border-primary/50 transition-colors"
          >
            <div className="aspect-[9/13] relative bg-black">
              <video
                src={item.videoUrl}
                muted
                playsInline
                preload="metadata"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                  <Play className="w-8 h-8 text-primary-foreground ml-1" />
                </div>
              </div>
              {/* Gradient Overlay */}
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
          </Link>
        </AnimateOnScroll>
      ))}
    </div>
  );
}
