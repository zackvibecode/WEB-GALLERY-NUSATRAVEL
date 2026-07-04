import { siteConfig } from "@/config/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[#e5e7eb] bg-white">
      <div className="mx-auto flex max-w-[1200px] flex-col items-start justify-between gap-4 px-4 py-8 sm:flex-row sm:items-center sm:px-6">
        <div>
          <p className="text-sm font-semibold text-[#111111]">
            {siteConfig.brandName}
          </p>
          <p className="mt-1 text-sm text-[#6b7280]">{siteConfig.tagline}</p>
        </div>

        <div className="text-left sm:text-right">
          <a
            href={siteConfig.websiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-[#6b7280] transition-colors hover:text-[#111111]"
          >
            {siteConfig.websiteUrl.replace("https://", "")}
          </a>
          <p className="mt-1 text-xs text-[#9ca3af]">
            © {year} {siteConfig.brandName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
