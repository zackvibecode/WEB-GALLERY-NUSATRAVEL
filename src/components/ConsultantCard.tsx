import Image from "next/image";
import { siteConfig } from "@/config/site";
import WhatsAppButton from "@/components/WhatsAppButton";

type ConsultantCardProps = {
  whatsappText?: string;
};

export default function ConsultantCard({
  whatsappText = "Hi Nusatravel, saya ingin tahu lebih lanjut tentang pakej trip.",
}: ConsultantCardProps) {
  const { consultant, whatsappNumber } = siteConfig;

  return (
    <section className="rounded-[20px] border border-[#e5e7eb] bg-white p-5 sm:p-6">
      <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:text-left">
        <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-full border border-[#e5e7eb] sm:h-24 sm:w-24">
          <Image
            src={consultant.photoSrc}
            alt={consultant.displayName}
            fill
            sizes="96px"
            className="object-cover object-top"
          />
        </div>

        <div className="min-w-0 flex-1">
          <p className="text-xs font-medium uppercase tracking-wide text-[#9ca3af]">
            {consultant.title}
          </p>
          <h2 className="mt-1 text-lg font-semibold tracking-tight text-[#111111] sm:text-xl">
            {consultant.name}
          </h2>
          <p className="mt-1 text-sm text-[#6b7280]">
            {consultant.displayName}
          </p>
          <p className="mt-2 text-sm font-medium text-[#25D366]">
            +{whatsappNumber}
          </p>
        </div>

        <WhatsAppButton
          text={whatsappText}
          label="WhatsApp"
          fullWidth
          className="sm:w-auto"
        />
      </div>
    </section>
  );
}
