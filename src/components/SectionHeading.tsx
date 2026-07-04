type SectionHeadingProps = {
  title: string;
  description?: string;
  className?: string;
};

export default function SectionHeading({
  title,
  description,
  className = "",
}: SectionHeadingProps) {
  return (
    <div className={`mb-6 text-center ${className}`}>
      <h2 className="text-xl font-extrabold uppercase tracking-tight text-[#111111] sm:text-2xl">
        {title}
      </h2>
      {description ? (
        <p className="mx-auto mt-2 max-w-lg text-sm leading-relaxed text-[#6b7280] sm:text-base">
          {description}
        </p>
      ) : null}
    </div>
  );
}
