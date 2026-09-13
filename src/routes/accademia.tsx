import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  Calendar,
  Clock,
  MapPin,
  Mail,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  GraduationCap,
  Sparkles,
  Flame,
  Trophy,
  Award,
  Tv,
  Check,
  ShieldCheck,
  Zap,
} from "lucide-react";
import { toast } from "sonner";
import heroImg from "@/assets/hero.jpg";
import {
  accademiaYears,
  accademiaSchedule,
  type AccademiaYear,
  type AccademiaDay,
} from "@/components/dance/data";

export const Route = createFileRoute("/accademia")({
  head: () => ({
    meta: [
      { title: "MSDF Academy | Professional Dance Program 2026/2027 — Rho Fiera" },
      {
        name: "description",
        content:
          "MSDF Academy: percorso triennale di alta formazione professionale per ballerini e performer. Diploma riconosciuto a livello europeo, docenti internazionali, produzioni live e casting a Rho Fiera.",
      },
      { property: "og:title", content: "MSDF Academy | Professional Dance Program 2026/2027" },
      {
        property: "og:description",
        content:
          "We don't create dancers. We create performers. Percorso triennale diretto da Marco Stra.",
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

const academyDisciplines = [
  "Commercial",
  "Hip Hop",
  "House",
  "Afro",
  "Voguing",
  "Waacking",
  "Heels",
  "Ballet",
  "Modern",
  "Contemporary",
  "Fusion",
  "Preparazione atletica",
  "Latino",
  "Reggaeton",
];

const creditsList = [
  { event: "Irama", detail: "Concerto Stadio San Siro (Milano)" },
  { event: "Clara", detail: "Tour Live & Videoclip musicali" },
  { event: "Benji e Fede", detail: "Videoclip musicali ufficiali" },
  { event: "Opening Act Star Internazionali", detail: "El Alfa, Beele, Nicky Jam, Gente de Zona, Anuel" },
  { event: "RTL 102.5 Summer Hits", detail: "Arena di Verona" },
  { event: "Produzioni Sky & Mediaset", detail: "Show televisivi e corpi di ballo" },
];

function Accademia() {
  const [activeYear, setActiveYear] = useState<AccademiaYear>("Primo Anno");
  const [activeDay, setActiveDay] = useState<AccademiaDay>("Martedì");
  const [sent, setSent] = useState(false);

  const availableDays: AccademiaDay[] =
    activeYear === "Primo Anno"
      ? ["Martedì", "Mercoledì", "Giovedì"]
      : ["Lunedì", "Martedì", "Mercoledì", "Giovedì"];

  const handleYearChange = (year: AccademiaYear) => {
    setActiveYear(year);
    setActiveDay(year === "Primo Anno" ? "Martedì" : "Lunedì");
  };

  return (
    <>
      {/* Hero Accademia */}
      <section className="relative flex min-h-[92vh] items-end overflow-hidden pt-28 pb-16">
        <img
          src={heroImg}
          alt="Ballerini accademici in sala prove con luci neon rosse"
          width={1600}
          height={1104}
          className="absolute inset-0 h-full w-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/85 to-background/40" />

        <div className="relative z-10 mx-auto w-full max-w-6xl px-5">
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-primary/20 border border-primary/40 px-3.5 py-1 text-[11px] font-bold tracking-[0.25em] text-primary uppercase">
              MSDF ACADEMY • 2026 / 2027
            </span>
            <span className="text-xs font-semibold tracking-widest text-muted-foreground uppercase hidden sm:inline">
              DISCIPLINE | PASSION | EXCELLENCE
            </span>
          </div>

          <h1 className="display-title neon-text mt-4 max-w-4xl text-4xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.92] tracking-tight">
            WE DON'T CREATE DANCERS.<br />
            WE CREATE PERFORMERS.
          </h1>

          <p className="font-signature text-2xl sm:text-3xl text-primary mt-3">
            Train. Perform. Become.
          </p>

          <p className="mt-5 max-w-2xl text-base text-muted-foreground sm:text-lg leading-relaxed">
            Ogni grande carriera inizia con una scelta. La tua potrebbe iniziare qui.
            Il percorso triennale di alta formazione professionale ideato e diretto da <strong>Marco Stra</strong> per
            formare artisti completi, pronti ad affrontare le sfide del mondo dello spettacolo e della danza europea.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <button
              onClick={() => scrollToId("casting")}
              className="neon-glow group inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-xs font-bold tracking-widest text-primary-foreground uppercase transition-transform hover:scale-105 cursor-pointer"
            >
              Prenota il tuo casting
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
            <button
              onClick={() => scrollToId("programma")}
              className="rounded-full border border-border bg-card/60 px-8 py-4 text-xs font-bold tracking-widest uppercase transition-colors hover:bg-secondary cursor-pointer"
            >
              Piano di Studi & Orari
            </button>
            <button
              onClick={() => scrollToId("quote")}
              className="rounded-full border border-primary/50 text-primary px-6 py-4 text-xs font-bold tracking-widest uppercase transition-colors hover:bg-primary/10 cursor-pointer"
            >
              Costi & Rate
            </button>
          </div>

          {/* Banner Casting Notice */}
          <div className="neon-border mt-10 max-w-3xl rounded-xl bg-card/80 p-5 backdrop-blur">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <p className="text-xs font-bold tracking-[0.25em] text-primary uppercase">
                  Ammissioni Stagione 2026/27
                </p>
                <p className="mt-1 text-sm text-foreground/90">
                  L'Academy è a numero chiuso e seleziona ballerini in base a merito, dedizione e potenziale.
                </p>
              </div>
              <button
                onClick={() => scrollToId("casting")}
                className="shrink-0 text-xs font-bold text-primary hover:underline uppercase tracking-wider"
              >
                Invia candidatura →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Cos'è MSDF Academy & Mission */}
      <section className="border-t border-border py-20 sm:py-28 grain-fade">
        <div className="mx-auto max-w-6xl px-5">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="text-xs font-semibold tracking-[0.3em] text-primary uppercase">Cos'è MSDF Academy</span>
              <h2 className="display-title mt-2 text-4xl sm:text-5xl">
                Formare Artisti Completi.
              </h2>
              <div className="mt-6 space-y-4 text-base text-muted-foreground leading-relaxed">
                <p>
                  <strong>MSDF Academy</strong> è il percorso di alta formazione di MS Dance Factory, dedicato a ballerine e ballerini
                  che vogliono trasformare la danza in una professione concreta e duratura.
                </p>
                <p>
                  Ideata e diretta da <strong>Marco Stra</strong>, nasce con un obiettivo preciso: formare performer versatili e
                  preparati non solo a ballare, ma a <em>lavorare</em>.
                </p>
                <p>
                  Il percorso combina: <strong>tecnica d'élite</strong>, <strong>performance sul palco</strong>, <strong>preparazione atletica</strong>,
                  <strong>mentalità professionale</strong> e una <strong>visione internazionale</strong> del mercato dello spettacolo.
                </p>
                <div className="rounded-xl border border-primary/30 bg-primary/10 p-5 mt-6">
                  <p className="text-xs font-bold tracking-widest text-primary uppercase">La nostra mission</p>
                  <p className="display-title neon-text mt-2 text-2xl sm:text-3xl">
                    "TALENT OPENS THE DOOR. DISCIPLINE KEEPS IT OPEN."
                  </p>
                  <p className="mt-2 text-sm text-foreground/90">
                    Non insegniamo semplicemente coreografie: coltiviamo ballerini consapevoli, versatili e pronti ad affrontare ogni set, audizione e palcoscenico.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { title: "Tecnica", desc: "Rigore posturale, isolazioni e controllo anatomico impeccabile." },
                { title: "Musicalità", desc: "Comprensione ritmica profonda, timing e dinamiche espressive." },
                { title: "Presenza Scenica", desc: "Carisma, proiezione e dominio dello spazio teatrale e televisivo." },
                { title: "Versatilità", desc: "Padronanza trasversale dall'Urban alle radici classiche e modern." },
                { title: "Personalità Artistica", desc: "Identità unica, capacità di improvvisazione e freestyle." },
                { title: "Professionalità", desc: "Etica del lavoro, gestione del set, casting e contrattualistica." },
              ].map((pillar) => (
                <div key={pillar.title} className="rounded-xl border border-border bg-card p-5 hover:border-primary/50 transition-colors">
                  <Sparkles className="h-5 w-5 text-primary" />
                  <h3 className="display-title text-xl mt-3">{pillar.title}</h3>
                  <p className="mt-1 text-xs text-muted-foreground leading-relaxed">{pillar.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Lo Studio & Spazi */}
      <section className="border-t border-border bg-card/40 py-20">
        <div className="mx-auto max-w-6xl px-5">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-semibold tracking-[0.3em] text-primary uppercase">Spazi & Dotazioni</span>
            <h2 className="display-title mt-2 text-4xl sm:text-5xl">Professional. Spacious. Inspiring.</h2>
            <p className="mt-3 text-sm text-muted-foreground">
              Uno studio pensato per offrire le migliori condizioni di allenamento e produzione, a pochi minuti da Milano.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-xl border border-border bg-card p-6">
              <p className="display-title text-4xl text-primary">296 MQ</p>
              <h3 className="display-title text-xl mt-2">Spazio Totale</h3>
              <p className="mt-2 text-xs text-muted-foreground">
                Sale ampie fino a 240 mq, con altezze e metrature ideali per coreografie di gruppo e produzioni video.
              </p>
            </div>

            <div className="rounded-xl border border-border bg-card p-6">
              <Award className="h-8 w-8 text-primary" />
              <h3 className="display-title text-xl mt-3">Parquet Professionale</h3>
              <p className="mt-2 text-xs text-muted-foreground">
                Pavimentazione ammortizzata specifica per la danza, studiata per preservare articolazioni e muscoli.
              </p>
            </div>

            <div className="rounded-xl border border-border bg-card p-6">
              <Zap className="h-8 w-8 text-primary" />
              <h3 className="display-title text-xl mt-3">Luci RGB & Audio Pro</h3>
              <p className="mt-2 text-xs text-muted-foreground">
                Impianto audio professionale ad alta fedeltà e luci ad effetto RGB scenico per riprese video e show.
              </p>
            </div>

            <div className="rounded-xl border border-border bg-card p-6">
              <MapPin className="h-8 w-8 text-primary" />
              <h3 className="display-title text-xl mt-3">Rho Fiera (Milano)</h3>
              <p className="mt-2 text-xs text-muted-foreground">
                Via Giuseppe Di Vittorio 2/B. Ambiente climatizzato, specchi a parete continui e reception dedicata.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Il Percorso Triennale & Diploma Europeo */}
      <section id="percorso" className="scroll-mt-24 border-t border-border py-20 sm:py-28 grain-fade">
        <div className="mx-auto max-w-6xl px-5">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-semibold tracking-[0.3em] text-primary uppercase">Struttura Didattica</span>
            <h2 className="display-title mt-2 text-4xl sm:text-5xl">Il Percorso Triennale</h2>
            <p className="mt-3 text-sm text-muted-foreground">
              Un percorso progressivo che accompagna la crescita tecnica, artistica e professionale dello studente.
            </p>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            <div className="rounded-2xl border border-border bg-card p-7 relative flex flex-col hover:border-primary/50 transition-colors">
              <span className="text-xs font-bold tracking-widest text-primary uppercase">Anno 1</span>
              <h3 className="display-title text-3xl mt-2">Fonda le basi tecniche</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed flex-1">
                Costruzione dell'assetto corporeo, allineamento posturale, potenziamento fisico, studio delle foundation urban e ballet technique.
              </p>
              <ul className="mt-6 space-y-2 border-t border-border pt-4 text-xs text-foreground/90">
                <li className="flex items-center gap-2"><Check className="h-3.5 w-3.5 text-primary" /> Tecnica e allineamento</li>
                <li className="flex items-center gap-2"><Check className="h-3.5 w-3.5 text-primary" /> Preparazione atletica</li>
                <li className="flex items-center gap-2"><Check className="h-3.5 w-3.5 text-primary" /> Musicalità di base</li>
              </ul>
            </div>

            <div className="rounded-2xl border-2 border-primary/70 bg-card p-7 relative flex flex-col shadow-xl shadow-primary/5">
              <span className="rounded-full bg-primary px-3 py-1 text-[10px] font-bold tracking-widest text-primary-foreground uppercase self-start mb-2">
                Fase Centrale
              </span>
              <span className="text-xs font-bold tracking-widest text-primary uppercase">Anno 2</span>
              <h3 className="display-title text-3xl mt-2">Sviluppa il tuo stile</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed flex-1">
                Approfondimento coreografico, contaminazione tra stili (House, Vogueing, Heels, Modern), improvvisazione e ricerca dell'identità artistica individuale.
              </p>
              <ul className="mt-6 space-y-2 border-t border-border pt-4 text-xs text-foreground/90">
                <li className="flex items-center gap-2"><Check className="h-3.5 w-3.5 text-primary" /> Laboratori coreografici</li>
                <li className="flex items-center gap-2"><Check className="h-3.5 w-3.5 text-primary" /> Presenza scenica e acting</li>
                <li className="flex items-center gap-2"><Check className="h-3.5 w-3.5 text-primary" /> Masterclass con ospiti</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-border bg-card p-7 relative flex flex-col hover:border-primary/50 transition-colors">
              <span className="text-xs font-bold tracking-widest text-primary uppercase">Anno 3</span>
              <h3 className="display-title text-3xl mt-2">Preparati al mondo del lavoro</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed flex-1">
                Simulazione di audizioni professionali, produzioni video e musicali, live performance, contrattualistica e preparazione del portfolio/showreel personale.
              </p>
              <ul className="mt-6 space-y-2 border-t border-border pt-4 text-xs text-foreground/90">
                <li className="flex items-center gap-2"><Check className="h-3.5 w-3.5 text-primary" /> Mock Auditions & Casting reali</li>
                <li className="flex items-center gap-2"><Check className="h-3.5 w-3.5 text-primary" /> Produzioni artistiche live</li>
                <li className="flex items-center gap-2"><Check className="h-3.5 w-3.5 text-primary" /> Showreel professionale</li>
              </ul>
            </div>
          </div>

          {/* Diploma Europeo Banner */}
          <div className="neon-border mt-12 rounded-2xl bg-card/80 p-8 sm:p-10 backdrop-blur">
            <div className="grid gap-6 md:grid-cols-[auto_1fr] items-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/20 text-primary border border-primary/40 shrink-0">
                <GraduationCap className="h-9 w-9" />
              </div>
              <div>
                <span className="text-xs font-bold tracking-widest text-primary uppercase">Titolo Ufficiale</span>
                <h3 className="display-title text-2xl sm:text-3xl mt-1">
                  Diploma Riconosciuto a Livello Europeo
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Al termine del percorso triennale, gli allievi conseguiranno il <strong>Diploma di Formazione Professionale</strong>,
                  un titolo ufficiale che certifica le competenze tecniche, artistiche e professionali acquisite. Un valore concreto per lavorare
                  in Italia e in Europa come <strong>insegnanti, coreografi, performer, membri di compagnie di danza e professionisti in grandi produzioni</strong>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Esperienze Professionali & Crediti */}
      <section className="border-t border-border py-20 bg-card/30">
        <div className="mx-auto max-w-6xl px-5">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="text-xs font-semibold tracking-[0.3em] text-primary uppercase">
                Esperienze Professionali
              </span>
              <h2 className="display-title mt-2 text-4xl sm:text-5xl">
                Esperienze che hanno segnato il percorso
              </h2>
              <p className="mt-3 max-w-xl text-sm text-muted-foreground">
                Durante l'anno gli allievi partecipano attivamente a produzioni e progetti reali al fianco di star e produzioni nazionali e internazionali.
                Perché il meglio non si studia solo a lezione, ma si diventa vivendolo.
              </p>
            </div>
            <div className="flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-xs text-muted-foreground">
              <Tv className="h-4 w-4 text-primary" />
              <span>TV • Live Show • Videoclip • Arena</span>
            </div>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {creditsList.map((item) => (
              <div
                key={item.event}
                className="group rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/60 hover:shadow-lg"
              >
                <Trophy className="h-5 w-5 text-primary" />
                <h3 className="display-title text-2xl mt-3 group-hover:text-primary transition-colors">
                  {item.event}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>

          {/* Final Show Highlight */}
          <div className="mt-10 rounded-2xl border border-border bg-gradient-to-r from-card via-card/90 to-primary/10 p-8">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div>
                <span className="text-xs font-bold tracking-widest text-primary uppercase">Appuntamento Annuale</span>
                <h3 className="display-title text-3xl mt-1">Final Show Professionale</h3>
                <p className="mt-2 text-sm text-muted-foreground max-w-2xl">
                  Ogni anno gli allievi salgono sul palco per una grande produzione teatrale con scenografie, luci, regia audio di livello assoluto
                  davanti a migliaia di spettatori. Un traguardo indimenticabile che celebra il talento e segna l'avvio della carriera.
                </p>
              </div>
              <span className="rounded-full bg-primary/20 border border-primary/40 px-5 py-2 text-xs font-bold text-primary uppercase tracking-widest shrink-0">
                Live on Stage
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Le 14 Discipline */}
      <section className="border-t border-border py-20 grain-fade">
        <div className="mx-auto max-w-6xl px-5">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-semibold tracking-[0.3em] text-primary uppercase">Piano Formativo</span>
            <h2 className="display-title mt-2 text-4xl sm:text-5xl">Le 14 Discipline</h2>
            <p className="mt-3 text-sm text-muted-foreground">
              Un curriculum completo studiato per rendere il ballerino versatile ed estremamente competitivo sul mercato.
            </p>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-3">
            {academyDisciplines.map((disc) => (
              <div
                key={disc}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-3 text-xs font-bold tracking-wide uppercase transition-all hover:border-primary/70 hover:scale-105 hover:bg-secondary/60"
              >
                <span className="h-2 w-2 rounded-full bg-primary" />
                <span>{disc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programma e Orari Didattici */}
      <section id="programma" className="scroll-mt-24 border-t border-border py-20 sm:py-28 grain-fade">
        <div className="mx-auto max-w-6xl px-5">
          <div className="flex items-center gap-3 text-primary">
            <Calendar className="h-5 w-5" />
            <span className="text-xs font-semibold tracking-[0.3em] uppercase">Calendario & Orari</span>
          </div>
          <h2 className="display-title mt-4 text-4xl sm:text-5xl">Schedule Settimanale</h2>
          <p className="mt-3 max-w-2xl text-sm text-muted-foreground leading-relaxed">
            Oltre 11-12 lezioni settimanali distribuite dal martedì al giovedì, a partire dalle 15:00 fino alle 21:00/22:00.
            Seleziona l'anno e il giorno per visualizzare la scansione oraria completa delle sale.
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
                      ? "neon-glow rounded-full bg-primary px-6 py-3 text-xs font-bold tracking-widest text-primary-foreground uppercase cursor-pointer"
                      : "rounded-full border border-border bg-card px-6 py-3 text-xs font-bold tracking-widest text-muted-foreground uppercase transition-colors hover:text-foreground hover:bg-secondary/40 cursor-pointer"
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
                      ? "neon-glow rounded-full bg-primary px-6 py-3 text-xs font-bold tracking-widest text-primary-foreground uppercase cursor-pointer"
                      : "rounded-full border border-border bg-card px-6 py-3 text-xs font-bold tracking-widest text-muted-foreground uppercase transition-colors hover:text-foreground hover:bg-secondary/40 cursor-pointer"
                  }
                >
                  {day}
                </button>
              ))}
            </div>
          </div>

          {/* Orari Lezioni */}
          <div className="mt-8 grid gap-3">
            {(accademiaSchedule[activeYear][activeDay] || []).map((lesson) => {
              const isBreak = lesson.subject.toLowerCase() === "pausa";
              return (
                <article
                  key={lesson.time + lesson.subject}
                  className={`group grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 rounded-xl border p-5 transition-all sm:grid-cols-[10rem_minmax(0,1fr)_auto] ${
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
                        {lesson.room ? `${lesson.room} · ` : ""}
                        <strong className="text-foreground/90">{lesson.teacher}</strong>
                      </p>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quote & Modalità di Pagamento */}
      <section id="quote" className="scroll-mt-24 border-t border-border py-20 sm:py-28 bg-card/20">
        <div className="mx-auto max-w-6xl px-5">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-semibold tracking-[0.3em] text-primary uppercase">Costo & Investimento</span>
            <h2 className="display-title mt-2 text-4xl sm:text-5xl">Piani di Partecipazione</h2>
            <p className="mt-3 text-sm text-muted-foreground">
              Master di Formazione triennale MSDF Academy. 3 modalità trasparenti pensate per supportare il tuo percorso.
            </p>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {/* Opzione 1 */}
            <div className="neon-border relative flex flex-col rounded-2xl bg-card p-8 shadow-xl">
              <span className="rounded-full bg-primary px-3 py-1 text-[10px] font-bold tracking-widest text-primary-foreground uppercase self-start mb-4">
                Risparmi €500
              </span>
              <span className="text-xs font-bold tracking-widest text-muted-foreground uppercase">Opzione 1</span>
              <h3 className="display-title text-2xl mt-1">Pagamento Unico</h3>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="display-title text-5xl text-primary">€ 2.600</span>
              </div>
              <p className="mt-2 text-xs text-muted-foreground">
                Soluzione a saldo unico alla firma del contratto con massimo risparmio economico.
              </p>

              <ul className="mt-6 space-y-3 border-t border-border pt-6 text-xs text-foreground/90 flex-1">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                  <span>Nessun costo di gestione rateale</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                  <span>Accesso prioritario a workshop esclusivi</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                  <span>Include kit merchandising ufficiale</span>
                </li>
              </ul>

              <button
                onClick={() => scrollToId("casting")}
                className="neon-glow mt-8 w-full rounded-full bg-primary py-3.5 text-xs font-bold tracking-widest text-primary-foreground uppercase transition-transform hover:scale-102 cursor-pointer"
              >
                Seleziona questa opzione
              </button>
            </div>

            {/* Opzione 2 */}
            <div className="relative flex flex-col rounded-2xl border border-border bg-card p-8 hover:border-primary/50 transition-colors">
              <span className="rounded-full bg-secondary px-3 py-1 text-[10px] font-bold tracking-widest text-foreground/80 uppercase self-start mb-4">
                Formula Flessibile
              </span>
              <span className="text-xs font-bold tracking-widest text-muted-foreground uppercase">Opzione 2</span>
              <h3 className="display-title text-2xl mt-1">Pagamento Rateale</h3>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="display-title text-4xl text-foreground">€ 500</span>
                <span className="text-xs text-muted-foreground">+ 3 rate da €700</span>
              </div>
              <p className="mt-2 text-xs text-muted-foreground">
                Acconto alla firma del contratto, poi 3 rate cadenzate durante l'anno accademico.
              </p>

              <ul className="mt-6 space-y-3 border-t border-border pt-6 text-xs text-foreground/90 flex-1">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                  <span><strong>€500</strong> alla firma (entro fine settembre)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                  <span><strong>€700</strong> entro il 30 Novembre</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                  <span><strong>€700</strong> entro il 30 Gennaio</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                  <span><strong>€700</strong> entro il 30 Marzo</span>
                </li>
              </ul>

              <button
                onClick={() => scrollToId("casting")}
                className="mt-8 w-full rounded-full border border-border bg-secondary/50 py-3.5 text-xs font-bold tracking-widest text-foreground uppercase transition-colors hover:bg-primary hover:text-primary-foreground cursor-pointer"
              >
                Richiedi piano rateale
              </button>
            </div>

            {/* Opzione 3 */}
            <div className="relative flex flex-col rounded-2xl border border-border bg-card p-8 hover:border-primary/50 transition-colors">
              <span className="rounded-full bg-secondary px-3 py-1 text-[10px] font-bold tracking-widest text-foreground/80 uppercase self-start mb-4">
                Formula Mensile
              </span>
              <span className="text-xs font-bold tracking-widest text-muted-foreground uppercase">Opzione 3</span>
              <h3 className="display-title text-2xl mt-1">Pagamento Mensile</h3>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="display-title text-4xl text-foreground">€ 350</span>
                <span className="text-xs text-muted-foreground">/ mese</span>
              </div>
              <p className="mt-2 text-xs text-muted-foreground">
                Acconto di €300 alla firma, poi 8 quote mensili dal 15 ottobre al 15 maggio.
              </p>

              <ul className="mt-6 space-y-3 border-t border-border pt-6 text-xs text-foreground/90 flex-1">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                  <span><strong>€300</strong> alla firma (entro fine settembre)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                  <span><strong>€350 / mese</strong> dal 15 Ottobre al 15 Maggio</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                  <span>Scadenza entro il giorno 15 di ogni mese</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                  <span>Saldo finale entro il 15 Maggio</span>
                </li>
              </ul>

              <button
                onClick={() => scrollToId("casting")}
                className="mt-8 w-full rounded-full border border-border bg-secondary/50 py-3.5 text-xs font-bold tracking-widest text-foreground uppercase transition-colors hover:bg-primary hover:text-primary-foreground cursor-pointer"
              >
                Richiedi piano mensile
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Come Partecipare & Form Candidatura Casting */}
      <section id="casting" className="scroll-mt-24 border-t border-border py-20 sm:py-28 grain-fade">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 lg:grid-cols-2">
          <div>
            <span className="text-xs font-semibold tracking-[0.3em] text-primary uppercase">Casting & Ammissioni</span>
            <h2 className="display-title mt-2 text-4xl sm:text-5xl">Come Partecipare</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              L'Academy è selettiva e crede nel merito, nella dedizione e nel potenziale di ogni danzatore.
              Il tuo futuro inizia qui: sei pronto a scrivere il tuo prossimo capitolo?
            </p>

            {/* 3 Steps */}
            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-4 rounded-xl border border-border bg-card p-4">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground shrink-0">
                  1
                </span>
                <div>
                  <h4 className="display-title text-lg">Invia la tua candidatura</h4>
                  <p className="text-xs text-muted-foreground mt-1">
                    Compila il form con i tuoi dati e il tuo percorso di studi nella danza.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-xl border border-border bg-card p-4">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground shrink-0">
                  2
                </span>
                <div>
                  <h4 className="display-title text-lg">Partecipa al casting</h4>
                  <p className="text-xs text-muted-foreground mt-1">
                    Audizione pratica e colloquio conoscitivo individuale con la direzione artistica di Marco Stra.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-xl border border-border bg-card p-4">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground shrink-0">
                  3
                </span>
                <div>
                  <h4 className="display-title text-lg">Entra in Academy</h4>
                  <p className="text-xs text-muted-foreground mt-1">
                    Firma del contratto, formalizzazione del piano di pagamento e inizio del percorso a settembre.
                  </p>
                </div>
              </div>
            </div>

            <div className="neon-border mt-8 rounded-xl bg-card/60 p-5 space-y-2">
              <p className="text-xs font-bold tracking-[0.25em] text-primary uppercase">Direzione MSDF Academy</p>
              <div className="flex items-center gap-2 text-xs text-foreground/90">
                <MapPin className="h-4 w-4 text-primary shrink-0" />
                <span>Via Giuseppe Di Vittorio 2/B – Rho Fiera (Milano)</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-foreground/90">
                <Mail className="h-4 w-4 text-primary shrink-0" />
                <span>msdancefactory2021@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Form Candidatura */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
              toast.success("Candidatura inviata con successo! Riceverai i dettagli del casting via email entro 24 ore.");
              (e.target as HTMLFormElement).reset();
            }}
            className="rounded-2xl border border-border bg-card p-6 sm:p-8 flex flex-col justify-between shadow-2xl"
          >
            <div>
              <span className="text-xs font-bold tracking-widest text-primary uppercase">Prenotazione Audizione</span>
              <h3 className="display-title text-3xl mt-1">Candidati per il Casting</h3>
              <p className="mt-2 text-xs text-muted-foreground">
                Inserisci i tuoi contatti per ricevere la data ufficiale di casting e il bando completo 2026/27.
              </p>

              <div className="mt-6 grid gap-4">
                <input
                  required
                  name="nome"
                  placeholder="Nome e cognome"
                  className="rounded-lg border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary transition-colors"
                />
                <div className="grid gap-4 sm:grid-cols-2">
                  <input
                    required
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="rounded-lg border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary transition-colors"
                  />
                  <input
                    required
                    type="tel"
                    name="telefono"
                    placeholder="Cellulare / WhatsApp"
                    className="rounded-lg border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary transition-colors"
                  />
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <select
                    name="anno"
                    className="rounded-lg border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary transition-colors"
                    defaultValue="Primo Anno"
                  >
                    <option value="Primo Anno">Primo Anno (2026/27)</option>
                    <option value="Secondo Anno">Secondo Anno (Trasferimenti)</option>
                  </select>

                  <select
                    name="pianoPagamento"
                    className="rounded-lg border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary transition-colors"
                    defaultValue="Opzione 1 — Unico (€2.600)"
                  >
                    <option value="Opzione 1 — Unico (€2.600)">Opzione 1 — Unico (€2.600)</option>
                    <option value="Opzione 2 — Rateale (€500 + 3x€700)">Opzione 2 — Rateale (€500 + 3x€700)</option>
                    <option value="Opzione 3 — Mensile (€300 + €350/m)">Opzione 3 — Mensile (€300 + €350/m)</option>
                  </select>
                </div>

                <textarea
                  name="esperienze"
                  rows={3}
                  placeholder="Descrivi brevemente il tuo percorso di danza o background (stili praticati, anni di studio)"
                  className="resize-none rounded-lg border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary transition-colors"
                />
              </div>
            </div>

            <div className="mt-8">
              <button
                type="submit"
                className="neon-glow w-full rounded-full bg-primary py-4 text-xs font-bold tracking-widest text-primary-foreground uppercase transition-transform hover:scale-[1.01] cursor-pointer"
              >
                {sent ? "Candidatura Ricevuta!" : "Invia candidatura casting"}
              </button>
              {sent && (
                <p className="mt-3 text-center text-xs text-primary font-semibold">
                  Grazie! La segreteria ti contatterà al più presto con il calendario delle audizioni.
                </p>
              )}
            </div>
          </form>
        </div>
      </section>

      {/* Ritorno */}
      <section className="border-t border-border py-12">
        <div className="mx-auto max-w-6xl px-5 flex flex-wrap items-center justify-between gap-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-xs font-bold tracking-widest uppercase text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Torna alla Home
          </Link>
          <Link
            to="/about"
            hash="staff"
            className="text-xs font-bold tracking-widest text-primary uppercase hover:underline"
          >
            Scopri tutti i docenti della scuola →
          </Link>
        </div>
      </section>
    </>
  );
}
