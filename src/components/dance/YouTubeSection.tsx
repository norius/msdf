import { Play, ExternalLink, Youtube, Sparkles } from "lucide-react";
import type { YouTubeVideo } from "@/lib/youtube";
import { YOUTUBE_CHANNEL_URL } from "@/lib/youtube";

interface YouTubeSectionProps {
  videos: YouTubeVideo[];
}

function formatPublishDate(dateStr: string): string {
  if (!dateStr) return "";
  try {
    const date = new Date(dateStr);
    return new Intl.DateTimeFormat("it-IT", {
      day: "numeric",
      month: "short",
      year: "numeric",
    }).format(date);
  } catch {
    return "";
  }
}

export function YouTubeSection({ videos }: YouTubeSectionProps) {
  // Mostra i primi 6 video per una griglia bilanciata
  const displayedVideos = videos.slice(0, 6);

  return (
    <section id="video" className="scroll-mt-24 border-t border-border py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5">
        {/* Header Sezione */}
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary uppercase tracking-widest">
              <Youtube className="h-3.5 w-3.5 fill-current text-primary" />
              Canale YouTube
            </div>
            <h2 className="display-title mt-3 text-4xl sm:text-5xl">
              Le Nostre Classi in Azione
            </h2>
            <p className="mt-3 max-w-2xl text-sm sm:text-base text-muted-foreground leading-relaxed">
              Dalle masterclass con ballerini televisivi alle classi settimanali di Heels, Hip Hop,
              Vogueing e Caraibico: guarda le coreografie e i progressi degli allievi della MS Dance Factory.
            </p>
          </div>

          <a
            href={YOUTUBE_CHANNEL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-2 self-start rounded-full border border-border bg-card px-5 py-2.5 text-xs font-bold tracking-widest text-foreground uppercase transition-all hover:border-primary/80 hover:bg-primary hover:text-primary-foreground hover:shadow-[0_0_20px_rgba(225,29,72,0.4)] cursor-pointer"
          >
            <Youtube className="h-4 w-4 fill-current text-red-500 group-hover:text-primary-foreground" />
            Visita il Canale
            <ExternalLink className="h-3.5 w-3.5 opacity-70" />
          </a>
        </div>

        {/* Video Grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {displayedVideos.map((video) => {
            const dateFormatted = formatPublishDate(video.published);

            return (
              <a
                key={video.id}
                href={video.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Guarda su YouTube: ${video.title}`}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-border/80 bg-card transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/70 hover:shadow-[0_12px_32px_rgba(225,29,72,0.22)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                {/* Thumbnail Container */}
                <div className="relative aspect-video w-full overflow-hidden bg-black/60">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  />

                  {/* Gradient & Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  {/* Top Badge */}
                  <div className="absolute top-3 left-3 flex items-center gap-1.5 rounded-full bg-black/80 backdrop-blur-xs px-2.5 py-1 text-[11px] font-semibold text-white/90 border border-white/10">
                    <span className="h-1.5 w-1.5 rounded-full bg-red-500 animate-pulse" />
                    Video
                  </div>

                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-2xl transition-all duration-300 group-hover:scale-115 group-hover:shadow-[0_0_24px_rgba(225,29,72,0.7)]">
                      <Play className="h-5 w-5 fill-current translate-x-0.5" />
                    </div>
                  </div>

                  {/* Data pubblicazione sulla miniatura */}
                  {dateFormatted && (
                    <span className="absolute bottom-2.5 right-3 text-[11px] font-medium text-white/80 drop-shadow-md">
                      {dateFormatted}
                    </span>
                  )}
                </div>

                {/* Card Content */}
                <div className="flex flex-1 flex-col justify-between p-5">
                  <h3 className="line-clamp-2 text-sm sm:text-base font-bold text-foreground leading-snug transition-colors group-hover:text-primary">
                    {video.title}
                  </h3>

                  <div className="mt-4 flex items-center justify-between border-t border-border/60 pt-3 text-xs font-semibold text-muted-foreground">
                    <span className="inline-flex items-center gap-1.5 group-hover:text-primary transition-colors">
                      Guarda su YouTube
                      <ExternalLink className="h-3 w-3" />
                    </span>
                    <span className="text-[11px] text-muted-foreground/70">
                      MS Dance Factory
                    </span>
                  </div>
                </div>
              </a>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 rounded-2xl border border-border/80 bg-gradient-to-r from-card via-card/90 to-card p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="hidden sm:flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary border border-primary/20">
              <Sparkles className="h-6 w-6 text-primary" />
            </div>
            <div>
              <p className="text-sm sm:text-base font-bold text-foreground">
                Vuoi restare sempre aggiornato su coreografie e novità?
              </p>
              <p className="mt-1 text-xs sm:text-sm text-muted-foreground">
                Iscriviti al canale ufficiale di Marco Stra per seguire backstage, saggi ed esibizioni.
              </p>
            </div>
          </div>

          <a
            href={YOUTUBE_CHANNEL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="neon-glow inline-flex shrink-0 items-center gap-2 rounded-full bg-primary px-6 py-3 text-xs font-bold tracking-widest text-primary-foreground uppercase transition-transform hover:scale-105 cursor-pointer"
          >
            <Youtube className="h-4 w-4 fill-current" />
            Iscriviti al Canale
          </a>
        </div>
      </div>
    </section>
  );
}
