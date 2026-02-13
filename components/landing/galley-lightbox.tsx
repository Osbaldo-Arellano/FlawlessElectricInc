"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

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

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(n, max));
}

export function GalleryLightbox({ open, items, startIndex, onClose }: Props) {
  const [index, setIndex] = useState(startIndex);
  const [dims, setDims] = useState<{ w: number; h: number } | null>(null);

  const total = items.length;

  const item = useMemo(
    () => items[clamp(index, 0, total - 1)],
    [items, index, total],
  );

  function prev() {
    setIndex((i) => (i - 1 + total) % total);
  }

  function next() {
    setIndex((i) => (i + 1) % total);
  }

  // sync index when opened
  useEffect(() => {
    if (open) setIndex(startIndex);
  }, [open, startIndex]);

  // lock scroll
  useEffect(() => {
    if (!open) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, [open]);

  // keyboard
  useEffect(() => {
    if (!open) return;

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open, total, onClose]);

  // load natural dimensions for "original size"
  useEffect(() => {
    if (!open || !item?.image) return;

    let canceled = false;
    setDims(null);

    const img = new window.Image();
    img.onload = () => {
      if (canceled) return;
      setDims({
        w: img.naturalWidth || img.width,
        h: img.naturalHeight || img.height,
      });
    };
    img.src = item.image;

    return () => {
      canceled = true;
    };
  }, [open, item?.image]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[60]">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/70" onClick={onClose} />

      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center p-4">
        <div
          className="relative"
          onClick={(e) => e.stopPropagation()}
          style={{
            // keep it within the viewport, but don't force a fake aspect ratio
            maxWidth: "min(92vw, 1200px)",
            maxHeight: "88vh",
          }}
        >
          {/* Close */}
          <button
            onClick={onClose}
            className="absolute -top-3 -right-3 rounded-full bg-black/70 border border-white/20 p-2 text-white hover:bg-black/90 transition"
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
                className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/60 border border-white/20 p-3 text-white hover:bg-black/90 transition"
                aria-label="Previous"
                title="Previous (←)"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={next}
                className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/60 border border-white/20 p-3 text-white hover:bg-black/90 transition"
                aria-label="Next"
                title="Next (→)"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </>
          )}

          {/* Image (intrinsic size, but constrained) */}
          <div className="rounded-xl overflow-hidden border border-white/15 bg-black shadow-2xl">
            {dims ? (
              <Image
                src={item.image}
                alt={item.title}
                width={dims.w}
                height={dims.h}
                className="block h-auto w-auto max-h-[88vh] max-w-[92vw] object-contain"
                // if these are remote images, make sure next.config has remotePatterns/domains
                priority
              />
            ) : (
              <div className="w-[70vw] max-w-[900px] h-[50vh] max-h-[70vh] grid place-items-center text-white/70">
                Loading…
              </div>
            )}
          </div>

          {/* Caption */}
          <div className="mt-3 text-center text-white/90">
            <div className="text-sm font-medium">{item.title}</div>
            {item.category ? (
              <div className="text-xs text-white/60 mt-0.5">
                {item.category}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
