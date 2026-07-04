import WhatsAppButton from "@/components/WhatsAppButton";

type StickyMobileCTAProps = {
  whatsappText: string;
};

export default function StickyMobileCTA({
  whatsappText,
}: StickyMobileCTAProps) {
  return (
    <div className="fixed inset-x-0 bottom-0 z-30 border-t border-[#e5e7eb] bg-white p-3 lg:hidden">
      <WhatsAppButton text={whatsappText} fullWidth />
    </div>
  );
}
