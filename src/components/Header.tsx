import Link from "next/link";
import { siteConfig } from "@/config/site";
import { generateWhatsAppLink } from "@/lib/whatsapp";

type HeaderProps = {
  whatsappText?: string;
};

export default function Header({
  whatsappText = "Hi Nusatravel, saya ingin tahu lebih lanjut tentang pakej trip.",
}: HeaderProps) {
  const whatsappHref = generateWhatsAppLink(
    siteConfig.whatsappNumber,
    whatsappText,
  );

  return (
    <header className="sticky top-0 z-40 border-b border-[#e5e7eb] bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex h-14 max-w-[1200px] items-center justify-between px-4 sm:h-16 sm:px-6">
        <Link href="/" className="flex items-center gap-1.5">
          <span className="text-base font-semibold tracking-tight text-[#111111] sm:text-lg">
            {siteConfig.brandName}
          </span>
          <span
            className="mt-0.5 h-1.5 w-1.5 rounded-full bg-[#dc2626]"
            aria-hidden="true"
          />
        </Link>

        <nav className="flex items-center gap-3 sm:gap-5">
          <Link
            href="/gallery"
            className="hidden text-sm font-medium text-[#6b7280] transition-colors hover:text-[#111111] sm:inline"
          >
            Gallery
          </Link>
          <a
            href={siteConfig.websiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden text-sm font-medium text-[#6b7280] transition-colors hover:text-[#111111] sm:inline"
          >
            Website
          </a>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-lg bg-[#111111] px-3 py-2 text-xs font-semibold text-white transition-colors hover:bg-black sm:px-4 sm:text-sm"
          >
            WhatsApp
          </a>
        </nav>
      </div>
    </header>
  );
}
