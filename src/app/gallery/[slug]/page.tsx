import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import SafeImage from "@/components/SafeImage";
import WhatsAppButton from "@/components/WhatsAppButton";
import GalleryGrid from "@/components/GalleryGrid";
import TrustSection from "@/components/TrustSection";
import TestimonialSection from "@/components/TestimonialSection";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import ConsultantCard from "@/components/ConsultantCard";
import { getAllGalleries, getGalleryBySlug } from "@/lib/gallery";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllGalleries().map((gallery) => ({
    slug: gallery.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const gallery = getGalleryBySlug(slug);

  if (!gallery) {
    return {
      title: "Gallery Tidak Dijumpai",
    };
  }

  return {
    title: `${gallery.title} Gallery`,
    description: gallery.description,
  };
}

const trustBadges = [
  "Gambar peserta",
  "Tempat lawatan",
  "Makanan halal",
  "Suasana trip",
];

export default async function GalleryDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const gallery = getGalleryBySlug(slug);

  if (!gallery) {
    notFound();
  }

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header whatsappText={gallery.whatsappText} />

      <main className="flex-1 pb-24 lg:pb-0">
        {/* Hero */}
        <section className="border-b border-[#e5e7eb]">
          <div className="mx-auto grid max-w-[1200px] gap-8 px-4 py-8 sm:px-6 sm:py-12 lg:grid-cols-2 lg:items-center lg:gap-12 lg:py-16">
            <div className="order-2 lg:order-1">
              <span className="inline-flex items-center rounded-md bg-[#fef2f2] px-2.5 py-1 text-xs font-semibold tracking-wide text-[#dc2626]">
                {gallery.code}
              </span>

              <h1 className="mt-3 text-2xl font-semibold tracking-tight text-[#111111] sm:text-3xl lg:text-4xl">
                {gallery.title}
              </h1>

              <p className="mt-3 max-w-lg text-sm leading-relaxed text-[#6b7280] sm:text-base">
                {gallery.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {trustBadges.map((badge) => (
                  <span
                    key={badge}
                    className="inline-flex items-center rounded-full border border-[#e5e7eb] bg-white px-3 py-1 text-xs font-medium text-[#6b7280]"
                  >
                    {badge}
                  </span>
                ))}
              </div>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
                <WhatsAppButton
                  text={gallery.whatsappText}
                  fullWidth
                  className="sm:w-auto"
                />
                {gallery.pdfUrl ? (
                  <a
                    href={gallery.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full items-center justify-center rounded-xl border border-[#e5e7eb] bg-white px-5 py-3 text-sm font-semibold text-[#111111] transition-colors hover:bg-[#fafafa] sm:w-auto"
                  >
                    Download Itinerary PDF
                  </a>
                ) : null}
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-[#e5e7eb] bg-[#fafafa] sm:aspect-[16/10]">
                <SafeImage
                  src={gallery.coverImage}
                  alt={gallery.title}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 560px"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section className="mx-auto max-w-[1200px] px-4 py-10 sm:px-6 sm:py-14">
          <GalleryGrid images={gallery.images} />
        </section>

        {/* Trust */}
        <section className="mx-auto max-w-[1200px] px-4 pb-10 sm:px-6 sm:pb-14">
          <TrustSection />
        </section>

        {/* Testimonials */}
        {gallery.testimonials && gallery.testimonials.length > 0 ? (
          <section className="mx-auto max-w-[1200px] px-4 pb-10 sm:px-6 sm:pb-14">
            <TestimonialSection testimonials={gallery.testimonials} />
          </section>
        ) : null}

        {/* Travel Consultant */}
        <section className="mx-auto max-w-[1200px] px-4 pb-10 sm:px-6 sm:pb-16">
          <ConsultantCard whatsappText={gallery.whatsappText} />
        </section>
      </main>

      <StickyMobileCTA whatsappText={gallery.whatsappText} />
    </div>
  );
}
