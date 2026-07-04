import Link from "next/link";
import type { GalleryPackage } from "@/data/galleries";
import SafeImage from "@/components/SafeImage";

type PackageListCardProps = {
  packageData: GalleryPackage;
};

export default function PackageListCard({ packageData }: PackageListCardProps) {
  const photoCount = packageData.images.length;

  return (
    <Link
      href={`/gallery/${packageData.slug}`}
      className="group flex w-full items-center gap-3 rounded-2xl border border-[#e5e7eb] bg-white p-3.5 transition-all hover:border-[#d1d5db] hover:shadow-[0_2px_8px_rgba(0,0,0,0.04)] sm:gap-4 sm:p-4"
    >
      <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-xl border border-[#e5e7eb] sm:h-20 sm:w-20">
        <SafeImage
          src={packageData.coverImage}
          alt={packageData.title}
          fill
          sizes="80px"
        />
      </div>

      <div className="min-w-0 flex-1">
        <div className="mb-1 flex items-center gap-2">
          <span className="inline-flex items-center rounded-md bg-[#fef2f2] px-2 py-0.5 text-[11px] font-semibold tracking-wide text-[#dc2626]">
            {packageData.code}
          </span>
          <span className="text-xs text-[#9ca3af]">{photoCount} foto</span>
        </div>

        <h2 className="truncate text-[15px] font-semibold text-[#111111] sm:text-base">
          {packageData.title}
        </h2>

        <p className="mt-0.5 line-clamp-2 text-xs leading-relaxed text-[#6b7280] sm:text-sm">
          {packageData.description}
        </p>
      </div>

      <div className="shrink-0 text-[#9ca3af] transition-colors group-hover:text-[#111111]">
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M9 18l6-6-6-6" />
        </svg>
      </div>
    </Link>
  );
}
