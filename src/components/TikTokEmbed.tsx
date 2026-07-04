"use client";

type TikTokEmbedProps = {
  videoId: string;
  title?: string;
};

export default function TikTokEmbed({
  videoId,
  title = "Video Trip",
}: TikTokEmbedProps) {
  const src = `https://www.tiktok.com/player/v1/${videoId}?autoplay=1&loop=1&music_info=0&description=0&volume_control=1&fullscreen_button=1&progress_bar=1&play_button=1&timestamp=0&closed_caption=0&rel=0`;

  return (
    <section>
      <div className="mb-6 text-center">
        <h2 className="text-xl font-extrabold uppercase tracking-tight text-[#111111] sm:text-2xl">
          {title}
        </h2>
        <p className="mx-auto mt-2 max-w-lg text-sm leading-relaxed text-[#6b7280] sm:text-base">
          Tonton video trip sebenar bersama peserta Nusatravel.
        </p>
      </div>

      <div className="mx-auto w-full max-w-[340px] overflow-hidden rounded-2xl border border-[#e5e7eb] bg-black sm:max-w-[380px]">
        <div className="relative aspect-[9/16] w-full">
          <iframe
            src={src}
            title={title}
            className="absolute inset-0 h-full w-full"
            allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
            allowFullScreen
            loading="eager"
          />
        </div>
      </div>
    </section>
  );
}
