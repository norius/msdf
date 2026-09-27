import { Link } from "@tanstack/react-router";
import { MapPin, Mail, ShieldCheck } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border/80 bg-card/40 py-12 text-center text-xs text-muted-foreground">
      <div className="mx-auto max-w-6xl px-5 flex flex-col items-center gap-6">
        {/* Brand */}
        <Link to="/" className="hover:opacity-90 transition-opacity inline-flex flex-col items-center">
          <p className="display-title text-2xl text-foreground">MS DANCE FACTORY</p>
          <p className="neon-text font-signature text-lg italic -mt-1">Marco Stra</p>
        </Link>

        {/* Quick Links */}
        <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-medium">
          <Link to="/" className="hover:text-foreground transition-colors">
            Home
          </Link>
          <Link to="/about" className="hover:text-foreground transition-colors">
            Chi Siamo
          </Link>
          <Link to="/about" hash="staff" className="hover:text-foreground transition-colors">
            Docenti
          </Link>
          <Link to="/accademia" className="hover:text-foreground transition-colors">
            Academy Casting
          </Link>
          <Link to="/shop" className="hover:text-foreground transition-colors">
            Official Shop
          </Link>
          <Link
            to="/privacy"
            className="text-foreground/90 hover:text-primary transition-colors inline-flex items-center gap-1 font-semibold"
          >
            <ShieldCheck className="h-3.5 w-3.5 text-primary" />
            Privacy & Cookie Policy
          </Link>
        </nav>

        {/* Dati Fiscali e Sede Legale (Obbligo di legge italiana D.P.R. 633/1972) */}
        <div className="max-w-2xl space-y-1.5 border-t border-border/60 pt-6 text-[11px] leading-relaxed text-muted-foreground/80">
          <p className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1">
            <span className="font-semibold text-foreground/90">MS Dance Factory</span>
            <span>•</span>
            <span>Partita IVA: <strong className="font-mono text-foreground/90 tracking-wider">99999999999</strong></span>
            <span>•</span>
            <span>Codice Fiscale: <strong className="font-mono text-foreground/90 tracking-wider">99999999999</strong></span>
          </p>

          <p className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1">
            <span className="inline-flex items-center gap-1">
              <MapPin className="h-3 w-3 text-primary shrink-0" />
              Sede: Via Giuseppe Di Vittorio 2/B, 20017 Rho (Milano)
            </span>
            <span>•</span>
            <span className="inline-flex items-center gap-1">
              <Mail className="h-3 w-3 text-primary shrink-0" />
              <a href="mailto:msdancefactory2021@gmail.com" className="hover:underline text-foreground/80">
                msdancefactory2021@gmail.com
              </a>
            </span>
          </p>
        </div>

        {/* Copyright */}
        <p className="text-[11px] text-muted-foreground/60">
          © {new Date().getFullYear()} MS Dance Factory — Tutti i diritti riservati.
        </p>
      </div>
    </footer>
  );
}

