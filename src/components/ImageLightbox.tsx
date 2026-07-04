"use client";

import { useCallback, useEffect } from "react";
import type { GalleryImage } from "@/data/galleries";
import SafeImage from "@/components/SafeImage";

type ImageLightboxProps = {
  images: GalleryImage[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
};

export default function ImageLightbox({
  images,
  currentIndex,
  isOpen,
  onClose,
  onPrev,
  onNext,
}: ImageLightboxProps) {
  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (!isOpen) return;
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowLeft") onPrev();
      if (event.key === "ArrowRight") onNext();
    },
    [isOpen, onClose, onPrev, onNext],
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen || !images[currentIndex]) return null;

  const currentImage = images[currentIndex];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
      role="dialog"
      aria-modal="true"
      aria-label="Image lightbox"
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        className="absolute right-3 top-3 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#111111] transition-colors hover:bg-[#f3f4f6] sm:right-6 sm:top-6"
        aria-label="Tutup"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M18 6L6 18M6 6l12 12" />
        </svg>
      </button>

      <button
        type="button"
        onClick={(event) => {
          event.stopPropagation();
          onPrev();
        }}
        className="absolute left-2 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#111111] transition-colors hover:bg-[#f3f4f6] sm:left-6"
        aria-label="Gambar sebelumnya"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>

      <button
        type="button"
        onClick={(event) => {
          event.stopPropagation();
          onNext();
        }}
        className="absolute right-2 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#111111] transition-colors hover:bg-[#f3f4f6] sm:right-6"
        aria-label="Gambar seterusnya"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M9 18l6-6-6-6" />
        </svg>
      </button>

      <div
        className="flex w-full max-w-4xl flex-col items-center"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="relative w-full overflow-hidden rounded-xl bg-black">
          <div className="relative aspect-[4/3] w-full sm:aspect-[16/10]">
            <SafeImage
              src={currentImage.src}
              alt={currentImage.caption ?? "Gallery image"}
              fill
              sizes="(max-width: 1024px) 100vw, 896px"
            />
          </div>
        </div>

        <div className="mt-4 text-center">
          {currentImage.caption ? (
            <p className="text-sm text-white/90">{currentImage.caption}</p>
          ) : null}
          <p className="mt-1 text-xs text-white/50">
            {currentIndex + 1} / {images.length}
          </p>
        </div>
      </div>
    </div>
  );
}
