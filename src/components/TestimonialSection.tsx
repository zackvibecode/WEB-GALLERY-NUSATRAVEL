import SectionHeading from "@/components/SectionHeading";

type TestimonialSectionProps = {
  testimonials: string[];
};

export default function TestimonialSection({
  testimonials,
}: TestimonialSectionProps) {
  if (!testimonials.length) return null;

  return (
    <section>
      <SectionHeading
        title="Apa kata peserta"
        description="Feedback ringkas daripada peserta yang pernah join trip."
      />

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((testimonial) => (
          <blockquote
            key={testimonial}
            className="rounded-2xl border border-[#e5e7eb] bg-white p-5"
          >
            <p className="text-sm leading-relaxed text-[#6b7280]">
              &ldquo;{testimonial}&rdquo;
            </p>
          </blockquote>
        ))}
      </div>
    </section>
  );
}
