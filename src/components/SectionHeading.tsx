type SectionHeadingProps = {
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export default function SectionHeading({
  title,
  description,
  align = "left",
  className = "",
}: SectionHeadingProps) {
  return (
    <div
      className={`mb-6 ${align === "center" ? "text-center" : "text-left"} ${className}`}
    >
      <h2 className="text-xl font-semibold tracking-tight text-[#111111] sm:text-2xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-2 text-sm leading-relaxed text-[#6b7280] sm:text-base">
          {description}
        </p>
      ) : null}
    </div>
  );
}
