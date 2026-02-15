"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export type GalleryItem = {
  image: string;
  title: string;
  category?: string;
};

type Props = {
  open: boolean;
  items: GalleryItem[];
  startIndex: number;
  onClose: () => void;
};

export function GalleryLightbox({ open, items, startIndex, onClose }: Props) {
  const [index, setIndex] = useState(startIndex);
  const [visible, setVisible] = useState(false);
  const [animateIn, setAnimateIn] = useState(false);
  const [prevIndex, setPrevIndex] = useState<number | null>(null);
  const [direction, setDirection] = useState<"left" | "right">("right");

  const total = items.length;
  const item = items[Math.max(0, Math.min(index, total - 1))];
  const prevItem =
    prevIndex !== null
      ? items[Math.max(0, Math.min(prevIndex, total - 1))]
      : null;

  // swipe refs (for main image area)
  const swipeStartX = useRef(0);
  const swipeStartY = useRef(0);
  const swiping = useRef(false);

  // thumbnail strip ref for auto-scroll
  const thumbStripRef = useRef<HTMLDivElement>(null);
  const thumbRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const goTo = useCallback(
    (target: number) => {
      const clamped = Math.max(0, Math.min(target, total - 1));
      if (clamped === index) return;
      setDirection(clamped > index ? "right" : "left");
      setPrevIndex(index);
      setIndex(clamped);
    },
    [index, total],
  );

  const prev = useCallback(() => {
    setDirection("left");
    setPrevIndex(index);
    setIndex((i) => (i - 1 + total) % total);
  }, [index, total]);

  const next = useCallback(() => {
    setDirection("right");
    setPrevIndex(index);
    setIndex((i) => (i + 1) % total);
  }, [index, total]);

  // clear prev after crossfade
  useEffect(() => {
    if (prevIndex === null) return;
    const t = setTimeout(() => setPrevIndex(null), 300);
    return () => clearTimeout(t);
  }, [prevIndex]);

  // open animation
  useEffect(() => {
    if (open) {
      setIndex(startIndex);
      setPrevIndex(null);
      setVisible(true);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setAnimateIn(true));
      });
    } else {
      setAnimateIn(false);
      const t = setTimeout(() => setVisible(false), 250);
      return () => clearTimeout(t);
    }
  }, [open, startIndex]);

  // auto-scroll active thumbnail into view
  useEffect(() => {
    const thumb = thumbRefs.current[index];
    if (!thumb || !thumbStripRef.current) return;
    thumb.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  }, [index]);

  // lock scroll
  useEffect(() => {
    if (!visible) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [visible]);

  // keyboard
  useEffect(() => {
    if (!visible) return;
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [visible, onClose, prev, next]);

  if (!visible) return null;

  function handlePointerDown(e: React.PointerEvent) {
    swiping.current = true;
    swipeStartX.current = e.clientX;
    swipeStartY.current = e.clientY;
  }

  function handlePointerUp(e: React.PointerEvent) {
    if (!swiping.current) return;
    swiping.current = false;
    const dx = e.clientX - swipeStartX.current;
    const dy = e.clientY - swipeStartY.current;
    if (Math.abs(dx) < 50 || Math.abs(dx) <= Math.abs(dy) * 1.2) return;
    if (dx < 0) next();
    else prev();
  }

  return (
    <div className="fixed inset-0 z-[60]">
      {/* Backdrop */}
      <div
        className={cn(
          "absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity duration-300 ease-out",
          animateIn ? "opacity-100" : "opacity-0",
        )}
        onClick={onClose}
      />

      {/* Content — full-height flex column */}
      <div
        className={cn(
          "absolute inset-0 flex flex-col items-center justify-center p-2 sm:p-3 transition-all duration-300 ease-out",
          animateIn ? "opacity-100 scale-100" : "opacity-0 scale-95",
        )}
      >
        {/* Main image area */}
        <div
          className="relative flex-1 min-h-0 w-full flex items-center justify-center"
          onClick={(e) => e.stopPropagation()}
          onPointerDown={handlePointerDown}
          onPointerUp={handlePointerUp}
        >
          <div
            className="relative"
            style={{
              maxWidth: "min(96vw, 1600px)",
              maxHeight: "calc(94vh - 100px)",
            }}
          >
            {/* Close */}
            <button
              onClick={onClose}
              className="absolute -top-3 -right-3 z-10 rounded-full bg-black/70 border border-white/20 p-2 text-white hover:bg-black/90 transition"
              aria-label="Close"
              title="Close (Esc)"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Prev/Next */}
            {total > 1 && (
              <>
                <button
                  onClick={prev}
                  className="absolute left-2 top-1/2 -translate-y-1/2 z-10 rounded-full bg-black/60 border border-white/20 p-3 text-white hover:bg-black/90 transition"
                  aria-label="Previous"
                  title="Previous"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={next}
                  className="absolute right-2 top-1/2 -translate-y-1/2 z-10 rounded-full bg-black/60 border border-white/20 p-3 text-white hover:bg-black/90 transition"
                  aria-label="Next"
                  title="Next"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </>
            )}

            {/* Image container with crossfade */}
            <div className="rounded-xl overflow-hidden border border-white/15 bg-black shadow-2xl relative">
              {/* Outgoing image */}
              {prevItem && (
                <div
                  key={`prev-${prevIndex}`}
                  className={cn(
                    "absolute inset-0 transition-all duration-300 ease-out opacity-0",
                    direction === "right"
                      ? "-translate-x-4"
                      : "translate-x-4",
                  )}
                >
                  <Image
                    src={prevItem.image}
                    alt={prevItem.title}
                    fill
                    className="object-contain"
                    sizes="96vw"
                  />
                </div>
              )}

              {/* Current image */}
              <div
                key={`curr-${index}`}
                className={cn(
                  "relative w-[min(96vw,1600px)] aspect-[9/13] transition-all duration-300 ease-out",
                  prevItem ? "animate-in fade-in" : "",
                  prevItem && direction === "right"
                    ? "slide-in-from-right-4"
                    : "",
                  prevItem && direction === "left"
                    ? "slide-in-from-left-4"
                    : "",
                )}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-contain"
                  sizes="96vw"
                  priority
                />
              </div>
            </div>

            {/* Caption */}
            <div
              key={`caption-${index}`}
              className="mt-2 text-center text-white/90 animate-in fade-in duration-300"
            >
              <div className="text-sm font-medium">{item.title}</div>
              {item.category ? (
                <div className="text-xs text-white/60 mt-0.5">
                  {item.category}
                </div>
              ) : null}
            </div>
          </div>
        </div>

        {/* Thumbnail strip */}
        {total > 1 && (
          <div
            className="w-full shrink-0 mt-2"
            onClick={(e) => e.stopPropagation()}
          >
            <div
              ref={thumbStripRef}
              className="flex gap-1.5 overflow-x-auto px-4 py-2 scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent"
              style={{
                scrollbarWidth: "thin",
                msOverflowStyle: "none",
              }}
            >
              {items.map((thumbItem, i) => (
                <button
                  key={i}
                  ref={(el) => {
                    thumbRefs.current[i] = el;
                  }}
                  onClick={() => goTo(i)}
                  className={cn(
                    "relative shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-lg overflow-hidden transition-all duration-200",
                    "border-2 hover:border-white/60",
                    i === index
                      ? "border-white ring-1 ring-white/30 scale-105"
                      : "border-transparent opacity-50 hover:opacity-80",
                  )}
                  aria-label={`View ${thumbItem.title}`}
                >
                  <Image
                    src={thumbItem.image}
                    alt={thumbItem.title}
                    fill
                    className="object-cover"
                    sizes="80px"
                  />
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
