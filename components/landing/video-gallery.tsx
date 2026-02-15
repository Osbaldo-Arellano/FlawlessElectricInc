"use client";

import { useState } from "react";
import { Play, X } from "lucide-react";

import { useBrand } from "@/contexts/brand-context";
import { AnimateOnScroll } from "@/components/animate-on-scroll";

export function VideoGallery() {
  const { brand } = useBrand();
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <>
      {/* Video Grid */}
      <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {brand.gallery.videos.map((item, index) => (
          <AnimateOnScroll key={index} animation="fade-up" delay={index * 75}>
            <div
              className="group relative overflow-hidden rounded-lg bg-background border border-border/50 hover:border-primary/50 transition-colors cursor-pointer"
              onClick={() => setActiveVideo(item.videoUrl)}
            >
              <div className="aspect-[9/13] relative bg-black">
                {/* Video thumbnail — first frame via muted autoplay-paused trick */}
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
            </div>
          </AnimateOnScroll>
        ))}
      </div>

      {/* Video Modal */}
      {activeVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={() => setActiveVideo(null)}
        >
          <div
            className="relative w-full max-w-4xl mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute -top-12 right-0 text-white hover:text-primary transition-colors"
            >
              <X className="w-8 h-8" />
              <span className="sr-only">Close video</span>
            </button>
            <div className="aspect-[9/13]">
              <video
                src={activeVideo}
                controls
                autoPlay
                playsInline
                className="w-full h-full rounded-lg bg-black"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
