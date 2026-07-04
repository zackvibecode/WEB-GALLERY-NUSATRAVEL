import Link from "next/link";
import Header from "@/components/Header";
export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />

      <main className="flex flex-1 items-center justify-center px-4 py-16">
        <div className="mx-auto max-w-md text-center">
          <p className="text-sm font-medium text-[#9ca3af]">404</p>
          <h1 className="mt-2 text-2xl font-semibold tracking-tight text-[#111111]">
            Halaman tidak dijumpai
          </h1>
          <p className="mt-3 text-sm leading-relaxed text-[#6b7280]">
            Pakej atau halaman yang anda cari tidak wujud. Sila pilih pakej dari
            senarai gallery.
          </p>
          <Link
            href="/gallery"
            className="mt-6 inline-flex items-center justify-center rounded-xl bg-[#111111] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-black"
          >
            Lihat Senarai Pakej
          </Link>
        </div>
      </main>

    </div>
  );
}
