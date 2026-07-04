import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { siteConfig } from "@/config/site";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Nusatravel Trip Gallery",
    template: "%s | Nusatravel",
  },
  description:
    "Lihat gambar peserta, tempat lawatan dan suasana trip Nusatravel mengikut destinasi pilihan anda.",
  openGraph: {
    title: "Nusatravel Trip Gallery",
    description:
      "Lihat gambar peserta, tempat lawatan dan suasana trip Nusatravel mengikut destinasi pilihan anda.",
    siteName: siteConfig.brandName,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ms" className={`${montserrat.variable} h-full antialiased`}>
      <body className="min-h-full bg-white font-sans text-[#111111]">
        {children}
      </body>
    </html>
  );
}
