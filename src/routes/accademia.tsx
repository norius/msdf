import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  Calendar,
  Clock,
  MapPin,
  Phone,
  Mail,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  GraduationCap,
  BookOpen,
  Users,
} from "lucide-react";
import { toast } from "sonner";
import heroImg from "@/assets/hero.jpg";
import { accademiaYears, accademiaSchedule, type AccademiaYear, type AccademiaDay } from "@/components/dance/data";

export const Route = createFileRoute("/accademia")({
  head: () => ({
    meta: [
      { title: "Accademia Dance Factory | Percorso Professionale di Danza" },
      {
        name: "description",
        content:
          "Percorso accademico Dance Factory: formazione professionale intensiva in Hip-Hop, Dancehall, Afro e altro. Primo e Secondo anno, ammissioni e audizioni.",
      },
      { property: "og:title", content: "Accademia Dance Factory | Percorso Professionale di Danza" },
      {
        property: "og:description",
        content:
          "Formazione intensiva e completa per ballerini che vogliono trasformare la passione in professione.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Accademia,
});

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function Accademia() {
  const [activeYear, setActiveYear] = useState<AccademiaYear>("Primo Anno");
  const [activeDay, setActiveDay] = useState<AccademiaDay>("Martedì");
  const [sent, setSent] = useState(false);

  const availableDays: AccademiaDay[] = activeYear === "Primo Anno"
    ? ["Martedì", "Mercoledì", "Giovedì"]
    : ["Lunedì", "Martedì", "Mercoledì", "Giovedì"];

  const handleYearChange = (year: AccademiaYear) => {
    setActiveYear(year);
    setActiveDay(year === "Primo Anno" ? "Martedì" : "Lunedì");
  };

  return (
    <>
      {/* Hero Accademia */}
      <section className="relative flex min-h-[92vh] items-end overflow-hidden pt-24">
        <img
          src={heroImg}
          alt="Ballerini accademici in allenamento in sala con luci al neon rosse"
          width={1600}
          height={1104}
          className="absolute inset-0 h-full w-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/40" />
        <div className="relative mx-auto w-full max-w-6xl px-5 pb-20">
          <p className="mb-5 text-xs font-semibold tracking-[0.35em] text-primary uppercase">
            Percorso professionale
          </p>
          <h1 className="display-title max-w-4xl text-5xl sm:text-7xl lg:text-8xl">
            Percorso<br />
            <span className="neon-text">Accademico</span>
          </h1>
          <p className="mt-6 max-w-xl text-base text-muted-foreground sm:text-lg">
            Un programma triennale intensivo per chi sogna la danza come professione. Tecnica, performance,
            teorica e palco: tutto ciò che serve per diventare un artista completo.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <button
              onClick={() => scrollToId("candidature")}
              className="neon-glow group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-4 text-sm font-bold tracking-widest text-primary-foreground uppercase transition-transform hover:scale-105"
            >
              Candidati ora
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
            <button
              onClick={() => scrollToId("programma")}
              className="rounded-full border border-border px-7 py-4 text-sm font-bold tracking-widest uppercase transition-colors hover:bg-secondary"
            >
              Scopri il programma
            </button>
          </div>

          <div className="neon-border mt-10 max-w-2xl rounded-lg bg-card/70 p-5 backdrop-blur">
            <p className="text-xs font-bold tracking-[0.25em] text-primary uppercase">Audizioni 2026/27</p>
            <p className="mt-2 text-sm leading-relaxed text-foreground/90">
              Le selezioni per il Primo Anno si terranno a settembre. Prenota il tuo colloquio conoscitivo
              entro il 31 Agosto per ricevere il bando completo.
            </p>
          </div>
        </div>
      </section>

      {/* Programma Didattico */}
      <section id="programma" className="grain-fade scroll-mt-24 border-t border-border py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-5">
          <div className="flex items-center gap-3 text-primary">
            <Calendar className="h-5 w-5" />
            <span className="text-xs font-semibold tracking-[0.3em] uppercase">Calendario accademico</span>
          </div>
          <h2 className="display-title mt-4 text-4xl sm:text-5xl">Programma e orari</h2>
          <p className="mt-3 max-w-xl text-sm text-muted-foreground">
            Seleziona l'anno accademico e il giorno della settimana per visualizzare il piano delle lezioni.
            Il primo anno si svolge da martedì a giovedì, il secondo anno da lunedì a giovedì.
          </p>

          {/* Selezione Anno */}
          <div className="mt-8 flex flex-col gap-2">
            <span className="text-[10px] font-bold tracking-widest text-muted-foreground uppercase">Anno di Corso</span>
            <div className="flex flex-wrap gap-2">
              {accademiaYears.map((year) => (
                <button
                  key={year}
                  onClick={() => handleYearChange(year)}
                  className={
                    activeYear === year
                      ? "neon-glow rounded-full bg-primary px-6 py-3 text-xs font-bold tracking-widest text-primary-foreground uppercase"
                      : "rounded-full border border-border bg-card px-6 py-3 text-xs font-bold tracking-widest text-muted-foreground uppercase transition-colors hover:text-foreground hover:bg-secondary/40"
                  }
                >
                  {year}
                </button>
              ))}
            </div>
          </div>

          {/* Selezione Giorno */}
          <div className="mt-6 flex flex-col gap-2">
            <span className="text-[10px] font-bold tracking-widest text-muted-foreground uppercase">Giorno della Settimana</span>
            <div className="flex flex-wrap gap-2">
              {availableDays.map((day) => (
                <button
                  key={day}
                  onClick={() => setActiveDay(day)}
                  className={
                    activeDay === day
                      ? "neon-glow rounded-full bg-primary px-6 py-3 text-xs font-bold tracking-widest text-primary-foreground uppercase"
                      : "rounded-full border border-border bg-card px-6 py-3 text-xs font-bold tracking-widest text-muted-foreground uppercase transition-colors hover:text-foreground hover:bg-secondary/40"
                  }
                >
                  {day}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-8 grid gap-3">
            {(accademiaSchedule[activeYear][activeDay] || []).map((lesson) => {
              const isBreak = lesson.subject.toLowerCase() === "pausa";
              return (
                <article
                  key={lesson.time + lesson.subject}
                  className={`group grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 rounded-lg border p-5 transition-all sm:grid-cols-[9rem_minmax(0,1fr)_auto] ${
                    isBreak
                      ? "border-dashed border-border/60 bg-muted/20 opacity-60"
                      : "border-border bg-card hover:border-primary/60 hover:shadow-lg hover:shadow-primary/5"
                  }`}
                >
                  <div className={`flex items-center gap-2 text-sm font-bold ${isBreak ? "text-muted-foreground" : "text-primary"}`}>
                    <Clock className="h-4 w-4 shrink-0" />
                    <span className="truncate">{lesson.time}</span>
                  </div>
                  <div className="col-span-2 min-w-0 sm:col-span-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className={`display-title truncate text-xl ${isBreak ? "text-muted-foreground italic" : ""}`}>
                        {lesson.subject}
                      </h3>
                      {lesson.optional && (
                        <span className="rounded bg-primary/10 border border-primary/20 px-1.5 py-0.5 text-[9px] font-bold tracking-wider text-primary uppercase">
                          Facoltativo
                        </span>
                      )}
                    </div>
                    {!isBreak && (lesson.room || lesson.teacher) && (
                      <p className="mt-1 text-xs tracking-wide text-muted-foreground uppercase">
                        {lesson.room ? `${lesson.room} · ` : ""}{lesson.teacher}
                      </p>
                    )}
                  </div>
                  <span className={`shrink-0 rounded-full border px-3 py-1 text-[11px] font-semibold tracking-widest uppercase ${
                    isBreak ? "border-border/40 text-muted-foreground/60" : "border-border text-muted-foreground"
                  }`}>
                    {activeYear === "Primo Anno" ? "Anno 1" : "Anno 2"}
                  </span>
                </article>
              );
            })}
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            <div className="rounded-xl border border-border bg-card p-5">
              <BookOpen className="h-5 w-5 text-primary" />
              <h3 className="display-title mt-3 text-lg">Teoria</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Anatomia, storia della danza urban, musicalità e analisi del movimento.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-card p-5">
              <Users className="h-5 w-5 text-primary" />
              <h3 className="display-title mt-3 text-lg">Laboratori</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Coreografia di gruppo, improvvisazione, costruzione di spettacolo e video dance.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-card p-5">
              <GraduationCap className="h-5 w-5 text-primary" />
              <h3 className="display-title mt-3 text-lg">Stage</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Incontri con ospiti nazionali e internazionali, showcase e audizioni finali.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Info & Candidature */}
      <section id="candidature" className="scroll-mt-24 border-t border-border py-20 sm:py-28">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 lg:grid-cols-2">
          <div>
            <span className="text-xs font-semibold tracking-[0.3em] text-primary uppercase">Ammissioni</span>
            <h2 className="display-title mt-4 text-4xl sm:text-5xl">Info & candidature</h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
              L'Accademia Dance Factory è a numero chiuso. Per accedere al corso biennale è necessario
              superare un colloquio conoscitivo e una prova pratica.
            </p>

            <ul className="mt-8 space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span>Età minima 16 anni; non è richiesta esperienza professionale pregressa.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span>Colloquio conoscitivo e prova pratica di gruppo di massimo 60 minuti.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span>Frequenza obbligatoria minima del 75% per accedere agli esami.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span>Attestato di frequenza e certificazione finale al superamento del Secondo Anno.</span>
              </li>
            </ul>

            <div className="neon-border mt-8 rounded-lg bg-card/60 p-5">
              <p className="text-xs font-bold tracking-[0.25em] text-primary uppercase">Segreteria Accademia</p>
              <p className="mt-2 text-sm text-foreground/90">Lunedì – Venerdì · 10:00 – 13:00 / 15:00 – 18:00</p>
              <p className="mt-2 text-sm text-foreground/90">accademia@dancefactory.it</p>
              <p className="text-sm text-foreground/90">+39 06 1234 5678</p>
            </div>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
              toast.success("Richiesta inviata! Ti invieremo il bando completo entro 24 ore.");
              (e.target as HTMLFormElement).reset();
            }}
            className="rounded-xl border border-border bg-card p-6 sm:p-8"
          >
            <h3 className="display-title text-2xl">Richiedi il bando</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Lascia i tuoi dati e ricevi il bando 2026/27 con calendario audizioni e quote.
            </p>
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
                name="anno"
                className="rounded-md border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary"
                defaultValue=""
              >
                <option value="" disabled>
                  Anno di interesse
                </option>
                {accademiaYears.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
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
                {sent ? "Richiesta inoltrata" : "Invia richiesta"}
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

      {/* Torna alla home */}
      <section className="border-t border-border py-12">
        <div className="mx-auto max-w-6xl px-5">
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-bold tracking-widest uppercase text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Torna alla Home
          </Link>
        </div>
      </section>

    </>
  );
}
