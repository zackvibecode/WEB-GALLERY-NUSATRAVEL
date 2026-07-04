"use client";

import Image from "next/image";
import { useState } from "react";

type SafeImageProps = {
  src: string;
  alt: string;
  fill?: boolean;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  sizes?: string;
};

function Placeholder({
  alt,
  fill,
  className,
}: {
  alt: string;
  fill: boolean;
  className: string;
}) {
  return (
    <div
      className={`${fill ? "absolute inset-0" : "flex aspect-[4/3] w-full"} flex items-center justify-center border border-[#e5e7eb] bg-[#fafafa] ${className}`}
      role="img"
      aria-label={alt}
    >
      <span className="px-3 text-center text-xs font-medium text-[#9ca3af] sm:text-sm">
        Gambar akan dikemaskini
      </span>
    </div>
  );
}

export default function SafeImage({
  src,
  alt,
  fill = false,
  width,
  height,
  className = "",
  priority = false,
  sizes,
}: SafeImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return <Placeholder alt={alt} fill={fill} className={className} />;
  }

  if (fill) {
    return (
      <Image
        src={src}
        alt={alt}
        fill
        className={`object-cover ${className}`}
        priority={priority}
        sizes={sizes}
        onError={() => setHasError(true)}
      />
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={width ?? 800}
      height={height ?? 600}
      className={`h-auto w-full object-cover ${className}`}
      priority={priority}
      sizes={sizes}
      onError={() => setHasError(true)}
    />
  );
}
