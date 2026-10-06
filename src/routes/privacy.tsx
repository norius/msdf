import { createFileRoute, Link } from "@tanstack/react-router";
import { ShieldCheck, ArrowLeft, Mail, MapPin, Lock, FileText, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Informativa sulla Privacy & Cookie Policy | MS Dance Factory Rho" },
      {
        name: "description",
        content:
          "Informativa sul trattamento dei dati personali e utilizzo dei cookie per il sito MS Dance Factory ai sensi del Regolamento UE 2016/679 (GDPR) e della legge italiana.",
      },
      { property: "og:title", content: "Privacy & Cookie Policy | MS Dance Factory Rho" },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://www.msdancefactory.it/privacy" },
    ],
    links: [
      { rel: "canonical", href: "https://www.msdancefactory.it/privacy" },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  const lastUpdated = "Settembre 2026";

  return (
    <div className="py-28 sm:py-32">
      <div className="mx-auto max-w-4xl px-5">
        {/* Breadcrumb / Back button */}
        <div className="mb-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Torna alla Home
          </Link>
        </div>

        {/* Header */}
        <div className="border-b border-border/80 pb-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1 text-xs font-semibold text-primary uppercase tracking-widest">
            <ShieldCheck className="h-4 w-4 text-primary" />
            Compliance Legale & GDPR
          </div>
          <h1 className="display-title neon-text mt-4 text-4xl sm:text-5xl md:text-6xl tracking-tight">
            INFORMATIVA SULLA PRIVACY & COOKIE POLICY
          </h1>
          <p className="mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
            In questa pagina ti spieghiamo come tuteliamo i tuoi dati personali, quali informazioni raccogliamo tramite i nostri form e come esercitare i tuoi diritti in conformità al <strong>Regolamento UE 2016/679 (GDPR)</strong> e al <strong>D.Lgs. 196/2003</strong> (Codice Privacy italiano novellato dal D.Lgs. 101/2018).
          </p>
          <p className="mt-2 text-xs text-muted-foreground/70">
            Ultimo aggiornamento: <strong>{lastUpdated}</strong>
          </p>
        </div>

        {/* Content Sections */}
        <div className="mt-12 space-y-12 text-sm leading-relaxed text-foreground/90">
          {/* 1. Titolare del Trattamento */}
          <section className="space-y-4">
            <h2 className="display-title text-2xl sm:text-3xl text-foreground flex items-center gap-3">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/20 text-xs font-bold text-primary">
                1
              </span>
              Titolare del Trattamento dei Dati
            </h2>
            <div className="rounded-xl border border-border/80 bg-card/60 p-6 space-y-3">
              <p>
                Il Titolare del trattamento dei dati personali raccolti tramite questo sito web è:
              </p>
              <div className="grid gap-2 sm:grid-cols-2 pt-2 text-xs text-muted-foreground">
                <div className="flex items-center gap-2 text-foreground">
                  <span className="font-semibold text-primary">Ente / Ditta:</span>
                  <span>MS Dance Factory</span>
                </div>
                <div className="flex items-center gap-2 text-foreground">
                  <span className="font-semibold text-primary">Partita IVA / C.F.:</span>
                  <span className="font-mono">99999999999</span>
                </div>
                <div className="flex items-center gap-2 text-foreground sm:col-span-2">
                  <MapPin className="h-3.5 w-3.5 text-primary shrink-0" />
                  <span>Sede: Via Giuseppe Di Vittorio 2/B, 20017 Rho (Milano)</span>
                </div>
                <div className="flex items-center gap-2 text-foreground sm:col-span-2">
                  <Mail className="h-3.5 w-3.5 text-primary shrink-0" />
                  <span>Email di contatto privacy: </span>
                  <a href="mailto:msdancefactory2021@gmail.com" className="text-primary hover:underline font-mono">
                    msdancefactory2021@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* 2. Dati Raccolti */}
          <section className="space-y-4">
            <h2 className="display-title text-2xl sm:text-3xl text-foreground flex items-center gap-3">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/20 text-xs font-bold text-primary">
                2
              </span>
              Quali Dati Raccogliamo
            </h2>
            <p>
              Raccogliamo unicamente i dati necessari a gestire le tue richieste informative o di ammissione all'Accademia:
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-border/70 bg-card p-5 space-y-2">
                <h3 className="font-bold text-primary text-sm uppercase tracking-wider flex items-center gap-2">
                  <FileText className="h-4 w-4" /> Modulo Informazioni Corsi
                </h3>
                <ul className="list-disc list-inside text-xs text-muted-foreground space-y-1">
                  <li>Nome e Cognome</li>
                  <li>Indirizzo Email</li>
                  <li>Numero di Telefono (facoltativo)</li>
                  <li>Corso di danza d'interesse</li>
                  <li>Testo del messaggio inviato</li>
                </ul>
              </div>

              <div className="rounded-xl border border-border/70 bg-card p-5 space-y-2">
                <h3 className="font-bold text-primary text-sm uppercase tracking-wider flex items-center gap-2">
                  <FileText className="h-4 w-4" /> Modulo Casting Academy
                </h3>
                <ul className="list-disc list-inside text-xs text-muted-foreground space-y-1">
                  <li>Nome e Cognome del candidato</li>
                  <li>Indirizzo Email e Cellulare / WhatsApp</li>
                  <li>Background artistico ed esperienze pregresse</li>
                  <li>Recapito genitore/tutore se il candidato è minorenne</li>
                </ul>
              </div>
            </div>
          </section>

          {/* 3. Finalità e Base Giuridica */}
          <section className="space-y-4">
            <h2 className="display-title text-2xl sm:text-3xl text-foreground flex items-center gap-3">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/20 text-xs font-bold text-primary">
                3
              </span>
              Finalità e Base Giuridica del Trattamento
            </h2>
            <p>I tuoi dati personali sono trattati per le seguenti finalità legittime:</p>
            <div className="space-y-3">
              <div className="rounded-xl border border-border/60 bg-card/40 p-4">
                <p className="font-semibold text-foreground">
                  A. Risposta a richieste e prenotazione prove gratuite (Art. 6.1.b GDPR)
                </p>
                <p className="mt-1 text-xs text-muted-foreground">
                  Trattamento necessario all'esecuzione di misure precontrattuali adottate su richiesta dell'interessato. Non richiede un consenso separato in quanto finalizzato unicamente a ricontattarti per fornirti i chiarimenti richiesti.
                </p>
              </div>

              <div className="rounded-xl border border-border/60 bg-card/40 p-4">
                <p className="font-semibold text-foreground">
                  B. Gestione del casting e audizioni per MSDF Academy (Art. 6.1.b GDPR)
                </p>
                <p className="mt-1 text-xs text-muted-foreground">
                  I dati inviati per la candidatura casting vengono utilizzati dalla Direzione Artistica per fissare l'orario di audizione, inviare il bando ufficiale e verificare i requisiti di ammissione.
                </p>
              </div>

              <div className="rounded-xl border border-border/60 bg-card/40 p-4">
                <p className="font-semibold text-foreground">
                  C. Sicurezza del sito e prevenzione abusi/spam (Art. 6.1.f GDPR)
                </p>
                <p className="mt-1 text-xs text-muted-foreground">
                  Legittimo interesse del titolare a garantire l'integrità dei sistemi informatici, proteggendo i server e i form da attacchi bot, flooding e messaggi fraudolenti.
                </p>
              </div>
            </div>
          </section>

          {/* 4. Tutela dei Minori */}
          <section className="space-y-4">
            <h2 className="display-title text-2xl sm:text-3xl text-foreground flex items-center gap-3">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/20 text-xs font-bold text-primary">
                4
              </span>
              Tutela dei Minori
            </h2>
            <p>
              MS Dance Factory accoglie allievi di tutte le età. Qualora la richiesta o la candidatura al casting riguardi un soggetto di <strong>età inferiore a 18 anni</strong> (e in particolare sotto i 14 anni ai sensi dell'art. 2-quinquies del D.Lgs. 196/2003), l'invio della richiesta deve essere effettuato o espressamente autorizzato dall'esercente la responsabilità genitoriale o tutore legale.
            </p>
          </section>

          {/* 5. Conservazione dei Dati */}
          <section className="space-y-4">
            <h2 className="display-title text-2xl sm:text-3xl text-foreground flex items-center gap-3">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/20 text-xs font-bold text-primary">
                5
              </span>
              Tempi di Conservazione
            </h2>
            <p>
              I dati personali vengono conservati per il tempo strettamente necessario al conseguimento delle finalità per cui sono stati raccolti:
            </p>
            <ul className="list-disc list-inside space-y-1.5 text-xs text-muted-foreground">
              <li>
                <strong>Richieste informative generali:</strong> conservati per un massimo di 12 mesi dalla ricezione, dopodiché cancellati se non segue alcuna iscrizione.
              </li>
              <li>
                <strong>Candidature casting Academy:</strong> conservati per l'intera durata della sessione audizioni dell'anno accademico in corso (massimo 12 mesi).
              </li>
              <li>
                I dati non vengono ceduti a società esterne né utilizzati per finalità di profilazione commerciale invasiva.
              </li>
            </ul>
          </section>

          {/* 6. Cookie Policy e Tracciamento */}
          <section className="space-y-4">
            <h2 className="display-title text-2xl sm:text-3xl text-foreground flex items-center gap-3">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/20 text-xs font-bold text-primary">
                6
              </span>
              Cookie Policy e Tecnologie di Tracciamento
            </h2>
            <div className="rounded-xl border border-primary/30 bg-primary/5 p-5 space-y-3">
              <div className="flex items-center gap-2 text-foreground font-semibold">
                <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                <span>Nessun Cookie di Profilazione o Tracciamento Pubblicitario</span>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Questo sito web è progettato per rispettare al massimo la tua riservatezza:
              </p>
              <ul className="list-disc list-inside text-xs text-muted-foreground space-y-1">
                <li>
                  <strong>Zero cookie di profilazione:</strong> non utilizziamo cookie pubblicitari né cediamo dati a circuiti di advertising.
                </li>
                <li>
                  <strong>Cookie tecnici essenziali:</strong> il sito fa uso unicamente di variabili di sessione e cookie tecnici strettamente necessari al funzionamento dell'applicazione.
                </li>
                <li>
                  <strong>Font tipografici auto-ospitati:</strong> i caratteri (Google Fonts) sono caricati direttamente dai nostri server locali, garantendo che nessun indirizzo IP venga trasmesso a server esteri di terze parti.
                </li>
                <li>
                  <strong>Integrazione YouTube:</strong> i video presenti nella sezione "Chi Siamo" non rilasciano cookie di terze parti finché l'utente non decide di navigare sulla piattaforma esterna YouTube.
                </li>
              </ul>
              <p className="text-[11px] text-muted-foreground/80 italic pt-2">
                Ai sensi delle <em>Linee guida cookie e altri strumenti di tracciamento del Garante Privacy del 10 giugno 2021</em>, per l'installazione di soli cookie tecnici non è richiesto il preventivo consenso dell'utente né la visualizzazione di un banner invasivo.
              </p>
            </div>
          </section>

          {/* 7. Diritti dell'Interessato */}
          <section className="space-y-4">
            <h2 className="display-title text-2xl sm:text-3xl text-foreground flex items-center gap-3">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/20 text-xs font-bold text-primary">
                7
              </span>
              I Tuoi Diritti (Artt. 15-22 GDPR)
            </h2>
            <p>
              In ogni momento puoi esercitare i diritti previsti dal Regolamento Europeo GDPR nei confronti del Titolare del Trattamento:
            </p>
            <div className="grid gap-3 sm:grid-cols-2 text-xs">
              <div className="rounded-lg border border-border bg-card p-3">
                <strong className="text-foreground">Diritto di Accesso (Art. 15):</strong> Chiedere conferma che sia o meno in corso un trattamento di dati che ti riguardano.
              </div>
              <div className="rounded-lg border border-border bg-card p-3">
                <strong className="text-foreground">Diritto di Rettifica (Art. 16):</strong> Chiedere la correzione di dati inesatti o l'integrazione di quelli incompleti.
              </div>
              <div className="rounded-lg border border-border bg-card p-3">
                <strong className="text-foreground">Diritto alla Cancellazione (Art. 17):</strong> Richiedere l'oblio e la cancellazione definitiva dei tuoi dati personali dai nostri archivi.
              </div>
              <div className="rounded-lg border border-border bg-card p-3">
                <strong className="text-foreground">Diritto di Opposizione (Art. 21):</strong> Opporti in qualsiasi momento per motivi legittimi al trattamento dei tuoi dati.
              </div>
            </div>
            <div className="rounded-xl border border-border/80 bg-card p-5 mt-4 space-y-2">
              <p className="font-semibold text-foreground text-xs uppercase tracking-wider flex items-center gap-2">
                <Lock className="h-4 w-4 text-primary" /> Come esercitare i tuoi diritti
              </p>
              <p className="text-xs text-muted-foreground">
                Per esercitare qualsiasi diritto, è sufficiente inviare un'email a{" "}
                <a href="mailto:msdancefactory2021@gmail.com" className="text-primary hover:underline font-mono">
                  msdancefactory2021@gmail.com
                </a>{" "}
                con oggetto <em>"Richiesta Esercizio Diritti Privacy - [Nome Cognome]"</em>. Il Titolare risponderà entro 30 giorni come previsto dalla legge.
              </p>
              <p className="text-[11px] text-muted-foreground/70">
                Hai inoltre sempre il diritto di proporre reclamo all'Autorità Garante per la Protezione dei Dati Personali (
                <a href="https://www.garanteprivacy.it" target="_blank" rel="noopener noreferrer" className="underline hover:text-foreground">
                  www.garanteprivacy.it
                </a>
                ).
              </p>
            </div>
          </section>
        </div>

        {/* Footer Back */}
        <div className="mt-16 border-t border-border/80 pt-8 text-center">
          <Link
            to="/"
            className="neon-glow inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-xs font-bold tracking-widest text-primary-foreground uppercase transition-transform hover:scale-105"
          >
            <ArrowLeft className="h-4 w-4" />
            Torna alla Home
          </Link>
        </div>
      </div>
    </div>
  );
}
