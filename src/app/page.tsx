import Link from "next/link";
import type { Metadata } from "next";
import Header from "@/components/Header";
export const metadata: Metadata = {
  title: {
    absolute: "Nusatravel Trip Gallery",
  },
  description:
    "Lihat gambar peserta, tempat lawatan dan suasana trip Nusatravel mengikut destinasi pilihan anda.",
};

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />

      <main className="flex flex-1 items-center justify-center px-4 py-12 sm:px-6 sm:py-20">
        <div className="mx-auto w-full max-w-xl text-center">
          <span className="inline-flex items-center rounded-full border border-[#e5e7eb] bg-white px-3 py-1 text-xs font-medium uppercase tracking-wide text-[#6b7280]">
            Trip Gallery
          </span>

          <h1 className="mt-5 text-3xl font-extrabold uppercase tracking-tight text-[#111111] sm:text-4xl lg:text-5xl">
            Nusatravel Trip Gallery
          </h1>

          <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-[#6b7280] sm:text-base">
            Lihat gambar peserta, tempat lawatan dan suasana trip Nusatravel
            mengikut destinasi pilihan anda.
          </p>

          <div className="mt-8">
            <Link
              href="/gallery"
              className="inline-flex items-center justify-center rounded-xl bg-[#111111] px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-black"
            >
              Lihat Senarai Pakej
            </Link>
          </div>
        </div>
      </main>

    </div>
  );
}
