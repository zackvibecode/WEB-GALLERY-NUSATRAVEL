"use client";

import { useMemo, useState } from "react";
import type { GalleryCategory, GalleryImage } from "@/data/galleries";
import {
  categoryDescriptions,
  getImagesByCategory,
} from "@/lib/gallery";
import SafeImage from "@/components/SafeImage";
import ImageLightbox from "@/components/ImageLightbox";
import SectionHeading from "@/components/SectionHeading";

type GalleryGridProps = {
  images: GalleryImage[];
};

const categoryOrder: GalleryCategory[] = [
  "Gambar Peserta",
  "Tempat Lawatan",
  "Makanan Halal",
  "Suasana Trip",
];

export default function GalleryGrid({ images }: GalleryGridProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const imagesByCategory = useMemo(
    () => getImagesByCategory(images),
    [images],
  );

  const openLightbox = (image: GalleryImage) => {
    const index = images.findIndex((item) => item.src === image.src);
    setCurrentIndex(index >= 0 ? index : 0);
    setIsOpen(true);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <>
      <div className="space-y-12">
        {categoryOrder.map((category) => {
          const categoryImages = imagesByCategory[category];
          if (!categoryImages.length) return null;

          return (
            <section key={category}>
              <SectionHeading
                title={category}
                description={categoryDescriptions[category]}
              />

              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
                {categoryImages.map((image) => (
                  <button
                    key={image.src}
                    type="button"
                    onClick={() => openLightbox(image)}
                    className="group overflow-hidden rounded-[14px] border border-[#e5e7eb] bg-white text-left transition-all hover:border-[#d1d5db]"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <SafeImage
                        src={image.src}
                        alt={image.caption ?? category}
                        fill
                        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                        className="transition-transform duration-300 group-hover:scale-[1.03]"
                      />
                    </div>
                    {image.caption ? (
                      <p className="line-clamp-2 px-2.5 py-2 text-[11px] leading-relaxed text-[#6b7280] sm:px-3 sm:text-xs">
                        {image.caption}
                      </p>
                    ) : null}
                  </button>
                ))}
              </div>
            </section>
          );
        })}
      </div>

      <ImageLightbox
        images={images}
        currentIndex={currentIndex}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </>
  );
}
