import SectionHeading from "@/components/SectionHeading";

const trustPoints = [
  "Trip dikendalikan oleh team berpengalaman",
  "Itinerary tersusun mengikut jadual",
  "Makanan halal disediakan mengikut pakej",
  "Sesuai untuk family, first timer dan warga emas",
  "Bantuan tour leader / guide sepanjang perjalanan",
];

export default function TrustSection() {
  return (
    <section className="rounded-[20px] border border-[#e5e7eb] bg-white p-5 sm:p-8">
      <SectionHeading title="Kenapa pelanggan pilih Nusatravel?" />

      <ul className="space-y-3.5">
        {trustPoints.map((point) => (
          <li key={point} className="flex items-start gap-3">
            <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-[#e5e7eb] bg-[#fafafa]">
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#111111"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M20 6L9 17l-5-5" />
              </svg>
            </span>
            <span className="text-sm leading-relaxed text-[#374151] sm:text-[15px]">
              {point}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
