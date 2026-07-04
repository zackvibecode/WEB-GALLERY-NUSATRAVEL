import {
  galleries,
  type GalleryCategory,
  type GalleryImage,
  type GalleryPackage,
} from "@/data/galleries";

export function getAllGalleries(): GalleryPackage[] {
  return galleries;
}

export function getGalleryBySlug(slug: string): GalleryPackage | undefined {
  return galleries.find((gallery) => gallery.slug === slug);
}

export function getImagesByCategory(
  images: GalleryImage[],
): Record<GalleryCategory, GalleryImage[]> {
  const categories: GalleryCategory[] = [
    "Gambar Peserta",
    "Tempat Lawatan",
    "Makanan Halal",
    "Suasana Trip",
  ];

  return categories.reduce(
    (acc, category) => {
      acc[category] = images.filter((image) => image.category === category);
      return acc;
    },
    {} as Record<GalleryCategory, GalleryImage[]>,
  );
}

export const categoryDescriptions: Record<GalleryCategory, string> = {
  "Gambar Peserta": "Gambar sebenar peserta sepanjang perjalanan.",
  "Tempat Lawatan": "Antara destinasi dan tempat lawatan dalam itinerary.",
  "Makanan Halal": "Makanan yang disediakan mengikut pakej.",
  "Suasana Trip": "Suasana perjalanan bersama team dan peserta.",
};
