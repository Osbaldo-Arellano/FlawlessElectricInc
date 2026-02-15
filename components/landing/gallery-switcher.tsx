"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { ImageIcon, Video, ChevronLeft, ChevronRight, Search } from "lucide-react";

import { useBrand } from "@/contexts/brand-context";
import { VideoGallery } from "./video-gallery";
import { AnimateOnScroll } from "@/components/animate-on-scroll";
import { cn } from "@/lib/utils";
import { GalleryLightbox, type GalleryItem } from "./galley-lightbox";

type GalleryTab = "photos" | "videos";

const PER_PAGE = 6;

type PaginationProps = {
  page: number;
  totalPages: number;
  goTo: (p: number) => void;
};

function Pagination({ page, totalPages, goTo }: PaginationProps) {
  if (totalPages <= 1) return null;

  return (
    <div className="flex items-center justify-center gap-3">
      <button
        onClick={() => goTo(page - 1)}
        disabled={page === 0}
        className="p-2 rounded-lg border border-border hover:bg-muted disabled:opacity-30 disabled:pointer-events-none transition-colors"
        aria-label="Previous page"
      >
        <ChevronLeft className="w-4 h-4" />
      </button>

      <div className="flex items-center gap-1.5">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={cn(
              "w-8 h-8 rounded-lg text-sm font-medium transition-all",
              i === page
                ? "bg-primary text-primary-foreground"
                : "hover:bg-muted text-muted-foreground",
            )}
            aria-label={`Go to page ${i + 1}`}
          >
            {i + 1}
          </button>
        ))}
      </div>

      <button
        onClick={() => goTo(page + 1)}
        disabled={page === totalPages - 1}
        className="p-2 rounded-lg border border-border hover:bg-muted disabled:opacity-30 disabled:pointer-events-none transition-colors"
        aria-label="Next page"
      >
        <ChevronRight className="w-4 h-4" />
      </button>
    </div>
  );
}

export function GallerySwitcher() {
  const { brand } = useBrand();

  const [activeTab, setActiveTab] = useState<GalleryTab>("photos");
  const [page, setPage] = useState(0);

  // Lightbox state
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const hasVideos = (brand.gallery.videos?.length ?? 0) > 0;

  const items: GalleryItem[] = useMemo(
    () =>
      (brand.gallery.items ?? []).map((it) => ({
        image: it.image,
        title: it.title,
        category: it.category,
      })),
    [brand.gallery.items],
  );

  const totalItems = items.length;
  const totalPages = Math.ceil(totalItems / PER_PAGE);

  const pagedItems = items.slice(page * PER_PAGE, page * PER_PAGE + PER_PAGE);

  function goTo(p: number) {
    const nextPage = Math.max(0, Math.min(p, totalPages - 1));
    setPage(nextPage);
  }

  function openLightboxFromPaged(pagedIdx: number) {
    const globalIdx = page * PER_PAGE + pagedIdx;
    setLightboxIndex(globalIdx);
    setLightboxOpen(true);
  }

  // --- Mobile swipe between pages (whole photo section) ---
  const swipeRef = useRef<HTMLDivElement | null>(null);
  const startXRef = useRef(0);
  const startYRef = useRef(0);
  const trackingRef = useRef(false);

  useEffect(() => {
    const el = swipeRef.current;
    if (!el) return;

    function isMobile() {
      return window.matchMedia("(max-width: 767px)").matches;
    }

    function onPointerDown(e: PointerEvent) {
      // only on mobile + only when photos tab visible + don't swipe if lightbox open
      if (!isMobile()) return;
      if (!(activeTab === "photos" || !hasVideos)) return;
      if (lightboxOpen) return;

      trackingRef.current = true;
      startXRef.current = e.clientX;
      startYRef.current = e.clientY;
    }

    function onPointerUp(e: PointerEvent) {
      if (!trackingRef.current) return;
      trackingRef.current = false;

      const dx = e.clientX - startXRef.current;
      const dy = e.clientY - startYRef.current;

      // require a confident horizontal gesture
      if (Math.abs(dx) < 60) return;
      if (Math.abs(dx) <= Math.abs(dy) * 1.2) return;

      // swipe left = next page, swipe right = prev page
      if (dx < 0) goTo(page + 1);
      else goTo(page - 1);
    }

    el.addEventListener("pointerdown", onPointerDown, { passive: true });
    el.addEventListener("pointerup", onPointerUp, { passive: true });

    return () => {
      el.removeEventListener("pointerdown", onPointerDown);
      el.removeEventListener("pointerup", onPointerUp);
    };
  }, [activeTab, hasVideos, lightboxOpen, page, totalPages]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <div id="gallery" className="scroll-mt-65 md:scroll-mt-100" />

      <section className="py-20 lg:py-32 bg-muted/30">
        <div className="container mx-auto px-4">
          {/* Header */}
          <AnimateOnScroll animation="fade-up">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                {brand.gallery.headline}
              </h2>
              <p className="text-lg text-muted-foreground">
                {brand.gallery.subheadline}
              </p>
            </div>
          </AnimateOnScroll>

          {/* Tab Switcher */}
          {hasVideos && (
            <div className="flex justify-center mb-12">
              <div className="inline-flex rounded-lg bg-muted p-1">
                <button
                  onClick={() => {
                    setActiveTab("photos");
                    setPage(0);
                  }}
                  className={cn(
                    "inline-flex items-center gap-2 px-6 py-2.5 rounded-md text-sm font-medium transition-all",
                    activeTab === "photos"
                      ? "bg-background text-foreground shadow-sm"
                      : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  <ImageIcon className="w-4 h-4" />
                  {brand.gallery.tabs.photos}
                </button>

                <button
                  onClick={() => {
                    setActiveTab("videos");
                    setPage(0);
                  }}
                  className={cn(
                    "inline-flex items-center gap-2 px-6 py-2.5 rounded-md text-sm font-medium transition-all",
                    activeTab === "videos"
                      ? "bg-background text-foreground shadow-sm"
                      : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  <Video className="w-4 h-4" />
                  {brand.gallery.tabs.videos}
                </button>
              </div>
            </div>
          )}

          {/* Gallery Content */}
          {activeTab === "photos" || !hasVideos ? (
            // Wrap photo section with swipe container (mobile only behavior)
            <div ref={swipeRef} className="touch-pan-y">
              {/* Pagination (mobile: top) */}
              <div className="mb-6 md:hidden">
                <Pagination page={page} totalPages={totalPages} goTo={goTo} />
              </div>

              {/* Photo Grid — 6 per page */}
              <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                {pagedItems.map((item, index) => (
                  <AnimateOnScroll
                    key={`${page}-${index}`}
                    animation="fade-up"
                    delay={index * 75}
                  >
                    <button
                      type="button"
                      onClick={() => openLightboxFromPaged(index)}
                      className={cn(
                        "group relative block w-full overflow-hidden rounded-lg bg-background border border-border/50 hover:border-primary/50 transition-colors text-left",
                        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                      )}
                      aria-label={`Open image: ${item.title}`}
                    >
                      <div className="aspect-[3/2] relative w-full">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                        />

                        {/* Hover overlay */}
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />

                        {/* Magnifying glass */}
                        <div className="absolute top-3 right-3 rounded-full bg-black/50 p-2 text-white opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-300">
                          <Search className="w-4 h-4" />
                        </div>
                      </div>

                      {/* Info bar */}
                      <div className="px-3 py-2.5">
                        <h3 className="text-sm font-medium truncate">
                          {item.title}
                        </h3>
                        {item.category ? (
                          <span className="text-xs text-muted-foreground">
                            {item.category}
                          </span>
                        ) : null}
                      </div>
                    </button>
                  </AnimateOnScroll>
                ))}
              </div>

              {/* Pagination (md+: bottom) */}
              <div className="hidden md:flex items-center justify-center mt-10">
                <Pagination page={page} totalPages={totalPages} goTo={goTo} />
              </div>

              {/* Lightbox Overlay */}
              <GalleryLightbox
                open={lightboxOpen}
                items={items}
                startIndex={lightboxIndex}
                onClose={() => setLightboxOpen(false)}
              />
            </div>
          ) : (
            <VideoGallery />
          )}
        </div>
      </section>
    </>
  );
}
