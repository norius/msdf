import { createFileRoute } from "@tanstack/react-router";
import { useState, useCallback } from "react";
import { Calendar, Clock, MapPin, Phone, Mail, Instagram, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import { toast } from "sonner";
import heroImg from "@/assets/hero.jpg";
import { days, schedule, disciplines, staff, type Day } from "@/components/dance/data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dance Factory | Scuola di Danza Urban — Corsi e Orari" },
      {
        name: "description",
        content:
          "Dance Factory: scuola di danza urban. Hip-Hop, Dancehall, Afro, Heels, Vogueing, Commerciale e Caraibico. Orari corsi dal lunedì al giovedì e lezioni di prova gratuite.",
      },
      { property: "og:title", content: "Dance Factory | Scuola di Danza Urban" },
      {
        property: "og:description",
        content:
          "Energia, ritmo e passione. Scopri corsi, insegnanti e l'orario settimanale della Dance Factory.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function Index() {
  const [activeDay, setActiveDay] = useState<Day>("Lunedì");
  const [sent, setSent] = useState(false);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    containScroll: "trimSnaps",
    dragFree: true,
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <>

      {/* Hero */}
      <section className="relative flex min-h-[92vh] items-end overflow-hidden pt-24">
        <img
          src={heroImg}
          alt="Ballerini urban in movimento sotto luci al neon rosse"
          width={1600}
          height={1104}
          className="absolute inset-0 h-full w-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/30" />
        <div className="relative mx-auto w-full max-w-6xl px-5 pb-20">
          <p className="mb-5 text-xs font-semibold tracking-[0.35em] text-primary uppercase">
            Scuola di danza urban
          </p>
          <h1 className="display-title max-w-3xl text-5xl sm:text-7xl lg:text-8xl">
            Il ritmo è<br />
            <span className="neon-text">energia</span> pura
          </h1>
          <p className="mt-6 max-w-xl text-base text-muted-foreground sm:text-lg">
            Dance Factory è la fabbrica del movimento: sale attrezzate, insegnanti professionisti e sette
            discipline dall'hip-hop al caraibico. Qui la passione diventa tecnica.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <button
              onClick={() => scrollToId("orari")}
              className="neon-glow group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-4 text-sm font-bold tracking-widest text-primary-foreground uppercase transition-transform hover:scale-105"
            >
              Consulta l'Orario Corsi
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
            <button
              onClick={() => scrollToId("corsi")}
              className="rounded-full border border-border px-7 py-4 text-sm font-bold tracking-widest uppercase transition-colors hover:bg-secondary"
            >
              Le discipline
            </button>
          </div>

          <div className="neon-border mt-10 max-w-2xl rounded-lg bg-card/70 p-5 backdrop-blur">
            <p className="text-xs font-bold tracking-[0.25em] text-primary uppercase">Promo apertura</p>
            <p className="mt-2 text-sm leading-relaxed text-foreground/90">
              Lezioni di prova gratuite disponibili esclusivamente durante la prima settimana dell'anno
              accademico. Lezioni successive su prenotazione a pagamento.
            </p>
          </div>
        </div>
      </section>

      {/* Orari */}
      <section id="orari" className="grain-fade scroll-mt-24 border-t border-border py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-5">
          <div className="flex items-center gap-3 text-primary">
            <Calendar className="h-5 w-5" />
            <span className="text-xs font-semibold tracking-[0.3em] uppercase">Calendario settimanale</span>
          </div>
          <h2 className="display-title mt-4 text-4xl sm:text-5xl">Orari corsi</h2>
          <p className="mt-3 max-w-xl text-sm text-muted-foreground">
            Le lezioni si tengono dal lunedì al giovedì. Seleziona il giorno per vedere sala, orario e
            insegnante.
          </p>

          <div className="mt-8 flex flex-wrap gap-2">
            {days.map((day) => (
              <button
                key={day}
                onClick={() => setActiveDay(day)}
                className={
                  activeDay === day
                    ? "neon-glow rounded-full bg-primary px-6 py-3 text-xs font-bold tracking-widest text-primary-foreground uppercase"
                    : "rounded-full border border-border bg-card px-6 py-3 text-xs font-bold tracking-widest text-muted-foreground uppercase transition-colors hover:text-foreground"
                }
              >
                {day}
              </button>
            ))}
          </div>

          <div className="mt-8 grid gap-3">
            {schedule[activeDay].map((lesson) => (
              <article
                key={lesson.time + lesson.course}
                className="group grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 rounded-lg border border-border bg-card p-5 transition-colors hover:border-primary/60 sm:grid-cols-[9rem_minmax(0,1fr)_auto]"
              >
                <div className="flex items-center gap-2 text-sm font-bold text-primary">
                  <Clock className="h-4 w-4 shrink-0" />
                  <span className="truncate">{lesson.time}</span>
                </div>
                <div className="col-span-2 min-w-0 sm:col-span-1">
                  <h3 className="display-title truncate text-xl">{lesson.course}</h3>
                  <p className="mt-1 text-xs tracking-wide text-muted-foreground uppercase">
                    {lesson.room} · {lesson.teacher}
                  </p>
                </div>
                <span className="w-fit shrink-0 rounded-full border border-border px-3 py-1 text-[11px] font-semibold tracking-widest text-muted-foreground uppercase">
                  {lesson.level}
                </span>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Discipline */}
      <section id="corsi" className="scroll-mt-24 border-t border-border py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-5">
          <span className="text-xs font-semibold tracking-[0.3em] text-primary uppercase">Discipline</span>
          <h2 className="display-title mt-4 text-4xl sm:text-5xl">Sette modi di muoverti</h2>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {disciplines.map((d) => (
              <article
                key={d.name}
                className="group relative overflow-hidden rounded-xl border border-border bg-card transition-colors hover:border-primary/70"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={d.image}
                    alt={`Lezione di ${d.name} alla Dance Factory`}
                    width={800}
                    height={1000}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
                  <h3 className="display-title absolute bottom-3 left-5 text-3xl">{d.name}</h3>
                </div>
                <div className="p-5">
                  <p className="text-sm leading-relaxed text-muted-foreground">{d.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {d.levels.map((l) => (
                      <span
                        key={l}
                        className="rounded-full bg-secondary px-3 py-1 text-[11px] font-semibold tracking-widest text-foreground/80 uppercase"
                      >
                        {l}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Staff */}
      <section id="staff" className="grain-fade scroll-mt-24 border-t border-border py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-5">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="text-xs font-semibold tracking-[0.3em] text-primary uppercase">Staff</span>
              <h2 className="display-title mt-4 text-4xl sm:text-5xl">I nostri maestri</h2>
            </div>
            <div className="flex gap-2">
              <button
                onClick={scrollPrev}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition-all hover:border-primary/60 hover:text-foreground hover:scale-105 active:scale-95 cursor-pointer"
                aria-label="Insegnante precedente"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={scrollNext}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition-all hover:border-primary/60 hover:text-foreground hover:scale-105 active:scale-95 cursor-pointer"
                aria-label="Insegnante successivo"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>

          <div className="mt-10 overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
            <div className="flex gap-5">
              {staff.map((p) => (
                <div key={p.name} className="min-w-0 flex-[0_0_85%] sm:flex-[0_0_45%] md:flex-[0_0_30%] lg:flex-[0_0_23.5%]">
                  <article className="flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card transition-colors hover:border-primary/60">
                    <img
                      src={p.image}
                      alt={`Ritratto di ${p.name}, insegnante Dance Factory`}
                      width={700}
                      height={700}
                      loading="lazy"
                      className="aspect-square w-full object-cover"
                    />
                    <div className="flex flex-1 flex-col p-5">
                      <h3 className="display-title text-2xl">{p.name}</h3>
                      <p className="mt-1 text-xs font-semibold tracking-widest text-primary uppercase">
                        {p.styles}
                      </p>
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.bio}</p>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contatti */}
      <section id="contatti" className="scroll-mt-24 border-t border-border py-20 sm:py-28">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 lg:grid-cols-2">
          <div>
            <span className="text-xs font-semibold tracking-[0.3em] text-primary uppercase">Segreteria</span>
            <h2 className="display-title mt-4 text-4xl sm:text-5xl">Contatti & iscrizioni</h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
              Vuoi informazioni sui corsi o prenotare la prova della prima settimana? Scrivici, la segreteria
              risponde entro 24 ore.
            </p>

            <ul className="mt-8 space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <a
                  href="https://maps.app.goo.gl/yudyumBDX7iy22x68"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-primary cursor-pointer"
                >
                  Via Giuseppe di Vittorio, 2/b, 20017 Rho MI
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <a
                  href="tel:+393808676338"
                  className="transition-colors hover:text-primary cursor-pointer"
                >
                  +39 380 867 6338
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <a
                  href="mailto:info@dancefactory.it"
                  className="transition-colors hover:text-primary cursor-pointer"
                >
                  info@dancefactory.it
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Instagram className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <a
                  href="https://instagram.com/msdancefactory?utm_medium=copy_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-primary cursor-pointer"
                >
                  @msdancefactory
                </a>
              </li>
            </ul>

            <div className="neon-border mt-8 rounded-lg bg-card/60 p-5">
              <p className="text-xs font-bold tracking-[0.25em] text-primary uppercase">Orari segreteria</p>
              <p className="mt-2 text-sm text-foreground/90">Lunedì – Giovedì · 16:30 – 21:30</p>
              <p className="mt-1 text-xs text-muted-foreground">Venerdì, sabato e domenica chiuso.</p>
            </div>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
              toast.success("Richiesta inviata! Ti ricontattiamo entro 24 ore.");
              (e.target as HTMLFormElement).reset();
            }}
            className="rounded-xl border border-border bg-card p-6 sm:p-8"
          >
            <h3 className="display-title text-2xl">Richiedi informazioni</h3>
            <div className="mt-6 grid gap-4">
              <input
                required
                name="nome"
                placeholder="Nome e cognome"
                className="rounded-md border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary"
              />
              <input
                required
                type="email"
                name="email"
                placeholder="Email"
                className="rounded-md border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary"
              />
              <input
                name="telefono"
                placeholder="Telefono (opzionale)"
                className="rounded-md border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary"
              />
              <select
                name="corso"
                className="rounded-md border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary"
                defaultValue=""
              >
                <option value="" disabled>
                  Corso di interesse
                </option>
                {Array.from(
                  new Set(
                    Object.values(schedule)
                      .flat()
                      .map((l) => l.course.replace(/\s*\(\d+(?:-\d+|\+)?\)$/, ""))
                  )
                )
                  .sort()
                  .map((courseName) => (
                    <option key={courseName} value={courseName}>
                      {courseName}
                    </option>
                  ))}
                <option value="prova">Prima settimana di prova</option>
              </select>
              <textarea
                name="messaggio"
                rows={4}
                placeholder="Il tuo messaggio"
                className="resize-none rounded-md border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary"
              />
              <button
                type="submit"
                className="neon-glow rounded-full bg-primary px-6 py-4 text-sm font-bold tracking-widest text-primary-foreground uppercase transition-transform hover:scale-[1.02]"
              >
                Invia richiesta
              </button>
              {sent && (
                <p className="text-center text-xs text-muted-foreground">
                  Grazie! Abbiamo ricevuto la tua richiesta.
                </p>
              )}
            </div>
          </form>
        </div>
      </section>

    </>
  );
}
