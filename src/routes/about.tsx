import { createFileRoute, Link } from "@tanstack/react-router";
import { Sparkles, Users, Award, Flame, Heart, ArrowRight, CheckCircle2 } from "lucide-react";
import heroImg from "@/assets/hero.jpg";
import teacher1 from "@/assets/teacher1.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us | MS Dance Factory — Scuola di Danza Urban a Milano" },
      {
        name: "description",
        content:
          "Scopri la storia, i valori e la visione di MS Dance Factory a Rho (Milano). Fondata da Marco Stra: passione, tecnica urban, inclusività e percorsi accademici.",
      },
      { property: "og:title", content: "About Us | MS Dance Factory" },
      {
        property: "og:description",
        content:
          "Dall'energia dell'hip-hop al palcoscenico: la nostra storia, i maestri e la nostra visione della danza urbana.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      {/* Hero About */}
      <section className="relative flex min-h-[70vh] items-end overflow-hidden pt-28 pb-16">
        <img
          src={heroImg}
          alt="Ballerini in movimento alla MS Dance Factory"
          width={1600}
          height={1104}
          className="absolute inset-0 h-full w-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/40" />

        <div className="relative z-10 mx-auto w-full max-w-6xl px-5">
          <div className="mb-4">
            <p className="text-xs sm:text-sm font-bold tracking-[0.3em] text-primary uppercase">
              MS DANCE FACTORY • CHI SIAMO
            </p>
          </div>
          <h1 className="display-title neon-text max-w-4xl text-4xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.92] tracking-tight">
            IL MOVIMENTO È<br />
            LA NOSTRA VOCE.
          </h1>
          <p className="mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg leading-relaxed">
            Una casa per chi vive la musica nel corpo. A Rho, alle porte di Milano, abbiamo creato uno
            spazio libero, vibrante e professionale dove l'energia dell'hip-hop e delle danze urbane diventa arte.
          </p>
        </div>
      </section>

      {/* Philosophy Banner */}
      <section className="border-y border-border/80 bg-card/40 py-12">
        <div className="mx-auto max-w-6xl px-5 text-center">
          <p className="text-xs font-bold tracking-[0.35em] text-primary uppercase">La nostra filosofia</p>
          <p className="display-title neon-text mt-3 text-3xl sm:text-5xl md:text-6xl tracking-wide">
            "DANCE FIRST. THINK LATER. IT’S THE NATURAL ORDER."
          </p>
          <p className="font-signature text-xl sm:text-2xl text-primary mt-3">Marco Stra</p>
        </div>
      </section>

      {/* Story & Vision */}
      <section className="grain-fade py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-5">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="text-xs font-semibold tracking-[0.3em] text-primary uppercase">La nostra storia</span>
              <h2 className="display-title mt-4 text-4xl sm:text-5xl">Dalla passione alla realtà</h2>
              <div className="mt-6 space-y-4 text-base text-muted-foreground leading-relaxed">
                <p>
                  MS Dance Factory nasce dal sogno e dalla dedizione di <strong>Marco Stra</strong>: dare alla danza urbana
                  uno spazio autentico che unisse la qualità tecnica delle migliori accademie alla pura vibrazione
                  della strada e della cultura street.
                </p>
                <p>
                  Partiti con un nucleo affiatato di allievi e docenti appassionati, oggi siamo una realtà di riferimento
                  a Milano e nell'hinterland, punto d'incontro per ballerini di ogni età e livello — da chi muove i primi
                  passi fino ai componenti delle nostre crew competitive.
                </p>
                <p>
                  Ogni giorno nelle nostre sale respiriamo rispetto, dedizione, sudore e tanta musica. Qui nessuno è un
                  semplice numero: ogni allievo trova la propria identità espressiva.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-border pt-8">
                <div>
                  <p className="display-title text-3xl sm:text-4xl text-primary">500+</p>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mt-1">Allievi formati</p>
                </div>
                <div>
                  <p className="display-title text-3xl sm:text-4xl text-primary">7+</p>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mt-1">Discipline</p>
                </div>
                <div>
                  <p className="display-title text-3xl sm:text-4xl text-primary">4</p>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mt-1">Crew Agonistiche</p>
                </div>
                <div>
                  <p className="display-title text-3xl sm:text-4xl text-primary">2</p>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mt-1">Sale attrezzate</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="overflow-hidden rounded-2xl border border-border bg-card">
                <img
                  src={teacher1}
                  alt="Marco Stra, Fondatore e Direttore Artistico MS Dance Factory"
                  width={800}
                  height={900}
                  className="w-full object-cover aspect-[4/5]"
                />
                <div className="p-6 bg-gradient-to-t from-card via-card/90 to-card/60">
                  <p className="text-xs font-bold tracking-widest text-primary uppercase">Direzione Artistica</p>
                  <h3 className="display-title text-2xl sm:text-3xl mt-1">Marco Stra</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    Coreografo, performer e mentore. Con anni di esperienza nel mondo dello spettacolo e delle competizioni
                    internazionali, guida le crew della scuola e il programma accademico con rigore e visione.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="border-t border-border py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-5">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-semibold tracking-[0.3em] text-primary uppercase">I nostri pilastri</span>
            <h2 className="display-title mt-4 text-4xl sm:text-5xl">Cosa ci guida ogni giorno</h2>
            <p className="mt-4 text-sm sm:text-base text-muted-foreground">
              Non insegniamo solo sequenze di passi. Costruiamo consapevolezza, forza mentale e senso di comunità.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/60">
              <Flame className="h-8 w-8 text-primary" />
              <h3 className="display-title text-2xl mt-4">Passione Pura</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                L'amore viscerale per il ritmo e il freestyle. Ballare senza filtri, tirando fuori la propria verità interiore.
              </p>
            </div>

            <div className="rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/60">
              <Award className="h-8 w-8 text-primary" />
              <h3 className="display-title text-2xl mt-4">Tecnica Rigorosa</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Dallo studio del peso corporeo alle isolazioni e al timing musicale: la libertà sul palco nasce dal controllo tecnico.
              </p>
            </div>

            <div className="rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/60">
              <Users className="h-8 w-8 text-primary" />
              <h3 className="display-title text-2xl mt-4">Community & Crew</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Una seconda famiglia. Sostegno reciproco, condivisione e crescita insieme dentro e fuori la sala prove.
              </p>
            </div>

            <div className="rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/60">
              <Sparkles className="h-8 w-8 text-primary" />
              <h3 className="display-title text-2xl mt-4">Palco & Opportunità</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Showcase, contest, videoclip ed eventi dal vivo: percorsi reali che collegano l'allenamento al mondo professionale.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Join Us */}
      <section className="border-t border-border py-20">
        <div className="mx-auto max-w-4xl px-5 text-center">
          <h2 className="display-title text-4xl sm:text-5xl md:text-6xl">
            Pronto a entrare nella nostra <span className="neon-text">Factory</span>?
          </h2>
          <p className="mt-6 text-base text-muted-foreground sm:text-lg max-w-xl mx-auto">
            Vieni a conoscerci di persona nella nostra sede a Rho. Scopri i corsi attivi, il percorso accademico o fissa un colloquio conoscitivo.
          </p>
          <div className="mt-9 flex flex-wrap justify-center items-center gap-4">
            <Link
              to="/"
              hash="corsi"
              className="neon-glow inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-bold tracking-widest text-primary-foreground uppercase transition-transform hover:scale-105"
            >
              Scopri i corsi
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/"
              hash="contatti"
              className="rounded-full border border-border px-8 py-4 text-sm font-bold tracking-widest uppercase transition-colors hover:bg-secondary"
            >
              Contattaci
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
