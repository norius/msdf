import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Calendar, Clock, MapPin, Phone, Mail, Instagram, ArrowRight, TrainFront, Navigation, ExternalLink, Footprints } from "lucide-react";
import { toast } from "sonner";
import heroImg from "@/assets/hero.jpg";
import { days, schedule, disciplines, type Day } from "@/components/dance/data";
import { submitContactForm } from "@/lib/actions";

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
  const [isSubmitting, setIsSubmitting] = useState(false);

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

      {/* Mappa Interattiva & Percorso a Piedi */}
      <div className="mx-auto mt-12 sm:mt-16 max-w-6xl px-5">
        <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-2xl">
          {/* Header del Percorso */}
          <div className="flex flex-col gap-5 border-b border-border bg-card/90 p-6 sm:p-8 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 border border-primary/20 px-3 py-1 text-xs font-bold tracking-widest text-primary uppercase">
                <TrainFront className="h-3.5 w-3.5" />
                Percorso Rapido dalla Metro
              </div>
              <h3 className="display-title text-2xl sm:text-3xl lg:text-4xl mt-3">
                A pochi minuti a piedi dalla M1 Rho Fiera
              </h3>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                Raggiungerci è facilissimo: prendi la metropolitana <span className="font-semibold text-primary">M1 Rossa</span> fino al capolinea <span className="font-semibold text-foreground">Rho Fiera</span>, prendi l'uscita pedonale più vicina <span className="font-semibold text-foreground">MIND Accesso OVEST (Ex Cargo 6)</span> e segui il percorso fino alla scuola.
              </p>
            </div>

            {/* Pulsante Navigatore */}
            <div className="shrink-0">
              <a
                href="https://www.google.com/maps/dir/?api=1&origin=45.522008737905146,9.08798205386315&destination=Via+Giuseppe+di+Vittorio+2b+Rho&travelmode=walking"
                target="_blank"
                rel="noopener noreferrer"
                className="neon-glow inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-xs font-bold tracking-widest text-primary-foreground uppercase transition-transform hover:scale-105 active:scale-95 shadow-lg"
              >
                <Navigation className="h-4 w-4" />
                Avvia navigatore a piedi
                <ExternalLink className="h-3.5 w-3.5 opacity-80" />
              </a>
            </div>
          </div>

          {/* Stepper informativo */}
          <div className="grid grid-cols-1 divide-y divide-border border-b border-border bg-secondary/20 text-xs sm:grid-cols-3 sm:divide-y-0 sm:divide-x">
            <div className="flex items-center gap-3.5 p-4 sm:p-5">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/20 text-primary">
                <TrainFront className="h-5 w-5" />
              </div>
              <div>
                <span className="font-bold uppercase tracking-wider text-foreground">1. Uscita Metro più vicina</span>
                <p className="mt-0.5 text-muted-foreground">MIND Accesso OVEST · Ex Cargo 6 (M1 Rho Fiera)</p>
              </div>
            </div>

            <div className="flex items-center gap-3.5 p-4 sm:p-5">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/20 text-primary">
                <Footprints className="h-5 w-5" />
              </div>
              <div>
                <span className="font-bold uppercase tracking-wider text-foreground">2. Tragitto Pedonale</span>
                <p className="mt-0.5 text-muted-foreground">Tragitto in piano · pochi minuti a piedi</p>
              </div>
            </div>

            <div className="flex items-center gap-3.5 p-4 sm:p-5">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/20 text-primary">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <span className="font-bold uppercase tracking-wider text-foreground">3. Arrivo in Sede</span>
                <p className="mt-0.5 text-muted-foreground">Via Giuseppe di Vittorio, 2/b, Rho (MI)</p>
              </div>
            </div>
          </div>

          {/* Iframe Google Maps con percorso evidenziato */}
          <div className="relative min-h-[420px] w-full bg-secondary/30">
            <iframe
              title="Percorso a piedi da MIND Accesso OVEST a MS Dance Factory"
              src="https://maps.google.com/maps?saddr=45.522008737905146,9.08798205386315&daddr=Via+Giuseppe+di+Vittorio+2b+Rho&dirflg=w&output=embed"
              width="100%"
              height="420"
              className="w-full border-0 grayscale contrast-125 opacity-90 transition-all duration-500 hover:grayscale-0 hover:opacity-100"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>

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
                    Metropolitana M1 Rossa — Fermata Rho Fiera — Uscita MIND Accesso OVEST (Ex Cargo 6) + pochi minuti a piedi
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
            onSubmit={async (e) => {
              e.preventDefault();
              setIsSubmitting(true);
              const form = e.currentTarget;
              const formData = new FormData(form);
              const data = {
                nome: (formData.get("nome") as string)?.trim() || "",
                email: (formData.get("email") as string)?.trim() || "",
                telefono: (formData.get("telefono") as string)?.trim() || undefined,
                corso: (formData.get("corso") as string)?.trim() || undefined,
                messaggio: (formData.get("messaggio") as string)?.trim() || "",
                bot_field: (formData.get("bot_field") as string)?.trim() || undefined,
                privacy: formData.get("privacy") === "on",
              };

              try {
                const res = await submitContactForm({ data });
                if (res.success) {
                  setSent(true);
                  toast.success("Richiesta inviata! Ti ricontattiamo entro 24 ore.");
                  form.reset();
                } else {
                  toast.error(res.error || "Errore durante l'invio della richiesta. Riprova più tardi.");
                }
              } catch (err: any) {
                toast.error(err?.message || "Si è verificato un errore di connessione. Riprova più tardi.");
              } finally {
                setIsSubmitting(false);
              }
            }}
            className="rounded-xl border border-border bg-card p-6 sm:p-8"
          >
            {/* Honeypot invisibile per bot */}
            <input
              type="text"
              name="bot_field"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              className="hidden pointer-events-none absolute -left-[9999px] opacity-0"
            />

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
                required
                name="messaggio"
                rows={4}
                placeholder="Il tuo messaggio"
                className="resize-none rounded-md border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary"
              />

              {/* Privacy Consent (GDPR Art. 13) */}
              <div className="flex items-start gap-2.5 pt-1">
                <input
                  type="checkbox"
                  id="contact-privacy"
                  required
                  name="privacy"
                  className="mt-0.5 h-4 w-4 rounded border-border text-primary focus:ring-primary cursor-pointer accent-primary shrink-0"
                />
                <label htmlFor="contact-privacy" className="text-xs text-muted-foreground leading-snug cursor-pointer select-none">
                  Ho letto e compreso l'
                  <Link to="/privacy" className="text-primary underline hover:text-primary/80 transition-colors mx-1 font-medium">
                    Informativa sulla Privacy
                  </Link>
                  e acconsento al trattamento dei miei dati per ricevere risposta alla richiesta.
                </label>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="neon-glow rounded-full bg-primary px-6 py-4 text-sm font-bold tracking-widest text-primary-foreground uppercase transition-transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer flex items-center justify-center gap-2 mt-2"
              >
                {isSubmitting ? (
                  <>
                    <span className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                    <span>Invio in corso...</span>
                  </>
                ) : (
                  "Invia richiesta"
                )}
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
