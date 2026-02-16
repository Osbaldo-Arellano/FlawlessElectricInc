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

  const swipeStartX = useRef(0);
  const swipeStartY = useRef(0);
  const swiping = useRef(false);
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

  useEffect(() => {
    if (prevIndex === null) return;
    const t = setTimeout(() => setPrevIndex(null), 300);
    return () => clearTimeout(t);
  }, [prevIndex]);

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

  useEffect(() => {
    const thumb = thumbRefs.current[index];
    if (!thumb || !thumbStripRef.current) return;
    thumb.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  }, [index]);

  useEffect(() => {
    if (!visible) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, [visible]);

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

  // Thumbnail strip height: 48px thumbs + 16px padding = 64px
  const thumbBarHeight = total > 1 ? 64 : 0;

  return (
    <div
      className={cn(
        "fixed inset-0 z-[60] bg-black/95 backdrop-blur-sm transition-opacity duration-300 ease-out touch-none",
        animateIn ? "opacity-100" : "opacity-0",
      )}
      style={{ height: "100dvh" }}
    >
      {/*
        CSS Grid with 2 rows:
          1fr  = image (fills all available space)
          auto = thumbnail strip (fixed intrinsic height)
        This guarantees both are always visible together.
      */}
      <div
        className="grid w-full overflow-hidden"
        style={{
          height: "100dvh",
          gridTemplateRows: total > 1 ? "1fr auto" : "1fr",
        }}
      >
        {/* ROW 1: Image + overlaid controls */}
        <div
          className="relative min-h-0 min-w-0 overflow-hidden"
          onPointerDown={handlePointerDown}
          onPointerUp={handlePointerUp}
        >
          {/* Close */}
          <button
            onClick={onClose}
            className="absolute top-3 right-3 z-30 rounded-full bg-black/50 hover:bg-black/70 border border-white/10 p-2 text-white transition-colors"
            aria-label="Close"
            title="Close (Esc)"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Counter */}
          {total > 1 && (
            <div className="absolute top-3.5 left-4 z-30 text-xs text-white/50 font-mono">
              {index + 1} / {total}
            </div>
          )}

          {/* Nav arrows */}
          {total > 1 && (
            <>
              <button
                onClick={prev}
                className="absolute left-2 top-1/2 -translate-y-1/2 z-30 rounded-full bg-black/40 hover:bg-black/70 border border-white/10 p-2 text-white transition-colors"
                aria-label="Previous"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={next}
                className="absolute right-2 top-1/2 -translate-y-1/2 z-30 rounded-full bg-black/40 hover:bg-black/70 border border-white/10 p-2 text-white transition-colors"
                aria-label="Next"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </>
          )}

          {/* Outgoing image (crossfade) */}
          {prevItem && (
            <div
              key={`prev-${prevIndex}`}
              className={cn(
                "absolute inset-0 transition-all duration-300 ease-out opacity-0",
                direction === "right" ? "-translate-x-4" : "translate-x-4",
              )}
            >
              <Image
                src={prevItem.image}
                alt={prevItem.title}
                fill
                className="object-contain p-2"
                sizes="100vw"
              />
            </div>
          )}

          {/* Current image */}
          <div
            key={`curr-${index}`}
            className={cn(
              "absolute inset-0 transition-all duration-300 ease-out",
              prevItem ? "animate-in fade-in" : "",
              prevItem && direction === "right" ? "slide-in-from-right-4" : "",
              prevItem && direction === "left" ? "slide-in-from-left-4" : "",
            )}
          >
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-contain p-2"
              sizes="100vw"
              priority
            />
          </div>

          {/* Caption overlay */}
          <div
            key={`caption-${index}`}
            className="absolute bottom-0 inset-x-0 z-20 bg-gradient-to-t from-black/80 via-black/40 to-transparent pt-12 pb-3 px-4 text-center animate-in fade-in duration-300"
          >
            <p className="text-sm font-medium text-white/90 truncate">
              {item.title}
            </p>
            {item.category && (
              <p className="text-xs text-white/50 mt-0.5">{item.category}</p>
            )}
          </div>
        </div>

        {/* ROW 2: Thumbnail strip */}
        {total > 1 && (
          <div className="bg-black/80 border-t border-white/5 px-2 py-2 overflow-hidden">
            <div
              ref={thumbStripRef}
              className="flex gap-1.5 overflow-x-auto sm:justify-center"
              style={{ scrollbarWidth: "none" }}
            >
              {items.map((thumbItem, i) => (
                <button
                  key={i}
                  ref={(el) => {
                    thumbRefs.current[i] = el;
                  }}
                  onClick={() => goTo(i)}
                  className={cn(
                    "relative shrink-0 w-11 h-11 sm:w-12 sm:h-12 rounded overflow-hidden transition-all duration-200",
                    "ring-2 ring-offset-1 ring-offset-black",
                    i === index
                      ? "ring-white opacity-100"
                      : "ring-transparent opacity-40 hover:opacity-70",
                  )}
                  aria-label={`View ${thumbItem.title}`}
                >
                  <Image
                    src={thumbItem.image}
                    alt={thumbItem.title}
                    fill
                    className="object-cover"
                    sizes="48px"
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
