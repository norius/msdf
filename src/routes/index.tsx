import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Calendar, Clock, MapPin, Phone, Mail, Instagram, ArrowRight, TrainFront } from "lucide-react";
import { toast } from "sonner";
import heroImg from "@/assets/hero.jpg";
import { days, schedule, disciplines, type Day } from "@/components/dance/data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MS Dance Factory | Scuola di Danza Urban — Corsi e Orari" },
      {
        name: "description",
        content:
          "MS Dance Factory: scuola di danza urban. Hip-Hop, Dancehall, Afro, Heels, Vogueing, Commerciale e Caraibico. Orari corsi dal lunedì al giovedì e lezioni di prova gratuite.",
      },
      { property: "og:title", content: "MS Dance Factory | Scuola di Danza Urban" },
      {
        property: "og:description",
        content:
          "Energia, ritmo e passione. Scopri corsi, insegnanti e l'orario settimanale della MS Dance Factory.",
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
        <div className="relative z-10 mx-auto w-full max-w-6xl px-5 pb-20">
          <div className="mb-6 space-y-1">
            <p className="text-xs sm:text-sm font-bold tracking-[0.28em] text-primary uppercase">
              DANCE SCHOOL • ACADEMY • PERFORMANCE
            </p>
            <p className="text-sm sm:text-base font-medium tracking-wide text-foreground/80">
              Una nuova realtà di danza urbana a Milano.
            </p>
          </div>

          <h1 className="display-title neon-text max-w-4xl text-3xl min-[400px]:text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] xl:text-8xl leading-[0.92] tracking-tight">
            <span className="block">DANCE FIRST.</span>
            <span className="block">THINK LATER.</span>
            <span className="block">IT’S THE NATURAL ORDER.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg leading-relaxed">
            A Rho, alle porte di Milano, uno spazio in cui passione, tecnica e personalità prendono forma. Corsi per ogni età e livello, insegnanti professionisti e percorsi che portano dalla sala al palcoscenico.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <button
              onClick={() => scrollToId("corsi")}
              className="neon-glow group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-4 text-sm font-bold tracking-widest text-primary-foreground uppercase transition-transform hover:scale-105 cursor-pointer"
            >
              Scopri i nostri corsi
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
            <button
              onClick={() => scrollToId("orari")}
              className="rounded-full border border-border px-7 py-4 text-sm font-bold tracking-widest uppercase transition-colors hover:bg-secondary cursor-pointer"
            >
              Orario corsi
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
                    alt={`Lezione di ${d.name} alla MS Dance Factory`}
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

      {/* Staff Preview Banner */}
      <section className="grain-fade border-t border-border py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-5">
          <div className="neon-border flex flex-col md:flex-row items-center justify-between gap-8 rounded-2xl bg-card/60 p-8 sm:p-12 backdrop-blur">
            <div className="max-w-xl">
              <span className="text-xs font-semibold tracking-[0.3em] text-primary uppercase">
                Corpo Docenti Ufficiale
              </span>
              <h2 className="display-title mt-2 text-3xl sm:text-4xl lg:text-5xl">
                I Nostri Insegnanti
              </h2>
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                Danzatori professionisti, coreografi televisivi e protagonisti della scena urban e accademica.
                Scopri tutti i docenti della scuola e del percorso di alta formazione professionale.
              </p>
            </div>
            <Link
              to="/about"
              hash="staff"
              className="neon-glow inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-xs font-bold tracking-widest text-primary-foreground uppercase transition-transform hover:scale-105 shrink-0"
            >
              Scopri il corpo docenti
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Contatti */}
      <section id="contatti" className="scroll-mt-24 border-t border-border py-20 sm:py-28">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 lg:grid-cols-2">
          <div>
            <h2 className="display-title font-bold text-4xl sm:text-5xl">CONTACT US</h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
              Non sai quale corso scegliere? Ti aiutiamo a trovare il percorso più adatto al tuo livello e ai tuoi
              obiettivi. Scrivici per informazioni su corsi, disponibilità e iscrizioni.
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
                  href="mailto:msdancefactory2021@gmail.com"
                  className="transition-colors hover:text-primary cursor-pointer"
                >
                  msdancefactory2021@gmail.com
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
              <li className="flex items-start gap-3 pt-2">
                <TrainFront className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <div>
                  <span className="font-semibold text-foreground">Come raggiungerci?</span>
                  <p className="mt-0.5 text-muted-foreground leading-relaxed">
                    Metropolitana M1 Rossa — Fermata Rho Fiera — Uscita in Via Risorgimento + 10min a piedi
                  </p>
                </div>
              </li>
            </ul>

            <div className="neon-border mt-8 rounded-lg bg-card/60 p-5">
              <p className="text-xs font-bold tracking-[0.25em] text-primary uppercase">Orari Direzione MSDF</p>
              <p className="mt-2 text-sm text-foreground/90">Dal Lunedì al Giovedì dalle 15:30 alle 20:00.</p>
              <p className="mt-1 text-xs text-muted-foreground">Venerdì, Sabato e Domenica chiuso.</p>
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
