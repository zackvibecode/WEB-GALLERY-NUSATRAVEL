import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PackageListCard from "@/components/PackageListCard";
import { getAllGalleries } from "@/lib/gallery";

export const metadata: Metadata = {
  title: "Senarai Pakej Gallery",
  description:
    "Pilih destinasi untuk melihat gambar peserta, tempat lawatan, makanan dan suasana trip bersama Nusatravel.",
};

export default function GalleryListPage() {
  const galleries = getAllGalleries();

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />

      <main className="flex-1 px-4 py-8 sm:px-6 sm:py-12">
        <div className="mx-auto w-full max-w-[900px]">
          <div className="mb-8 text-center sm:mb-10">
            <h1 className="text-2xl font-semibold tracking-tight text-[#111111] sm:text-3xl">
              Sila Pilih Pakej Pilihan Anda 👇
            </h1>
            <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-[#6b7280] sm:text-base">
              Pilih destinasi untuk melihat gambar peserta, tempat lawatan,
              makanan dan suasana trip bersama Nusatravel.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            {galleries.map((gallery) => (
              <PackageListCard key={gallery.slug} packageData={gallery} />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
