type TestimonialSectionProps = {
  testimonials: string[];
};

const reviews = [
  {
    name: "~ Aina M.",
    phoneVisible: "+60 17-234 ",
    phoneBlur: "8891",
    initial: "A",
    nameColor: "text-[#FF8A80]",
    avatarColor: "bg-[#E57373]",
    time: "10:16 am",
  },
  {
    name: "~ Rizal H.",
    phoneVisible: "+60 12-445 ",
    phoneBlur: "7720",
    initial: "R",
    nameColor: "text-[#80CBC4]",
    avatarColor: "bg-[#26A69A]",
    time: "2:15 pm",
  },
  {
    name: "~ Kak Siti",
    phoneVisible: "+60 19-308 ",
    phoneBlur: "4412",
    initial: "S",
    nameColor: "text-[#CE93D8]",
    avatarColor: "bg-[#AB47BC]",
    time: "8:03 pm",
  },
];

export default function TestimonialSection({
  testimonials,
}: TestimonialSectionProps) {
  if (!testimonials.length) return null;

  return (
    <section>
      <div className="mb-6 text-center">
        <h2 className="text-xl font-extrabold uppercase tracking-tight text-[#111111] sm:text-2xl">
          Review peserta
        </h2>
        <p className="mx-auto mt-2 max-w-lg text-sm leading-relaxed text-[#6b7280] sm:text-base">
          Feedback sebenar daripada peserta melalui WhatsApp.
        </p>
      </div>

      <div className="space-y-4">
        {testimonials.map((testimonial, index) => {
          const review = reviews[index % reviews.length];

          return (
            <div
              key={testimonial}
              className="overflow-hidden rounded-2xl border border-[#2a2a2a]"
              style={{
                backgroundColor: "#0B141A",
                backgroundImage:
                  "radial-gradient(circle at 12% 18%, rgba(255,255,255,0.03) 0, transparent 28%), radial-gradient(circle at 88% 72%, rgba(255,255,255,0.025) 0, transparent 24%)",
              }}
            >
              <div className="flex items-start gap-2.5 p-3 sm:p-4">
                <div
                  className={`mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-semibold text-white ${review.avatarColor}`}
                >
                  {review.initial}
                </div>

                <div className="min-w-0 flex-1 rounded-2xl rounded-tl-md bg-[#1F2C34] px-3 py-2.5 shadow-sm">
                  <div className="mb-1 flex items-start justify-between gap-2">
                    <p
                      className={`text-[13px] font-semibold leading-tight ${review.nameColor}`}
                    >
                      {review.name}
                    </p>
                    <p className="shrink-0 text-[11px] text-[#8696A0]">
                      <span>{review.phoneVisible}</span>
                      <span className="inline-block select-none blur-[3px]">
                        {review.phoneBlur}
                      </span>
                    </p>
                  </div>

                  <p className="text-[14px] leading-relaxed text-[#E9EDEF]">
                    {testimonial}
                  </p>

                  <div className="mt-1 flex justify-end">
                    <span className="text-[11px] text-[#8696A0]">
                      {review.time}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
