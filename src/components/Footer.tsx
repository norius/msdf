import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-2 px-5 text-center">
        <Link to="/" className="hover:opacity-90 transition-opacity">
          <p className="display-title text-2xl">Dance Factory</p>
          <p className="neon-text font-signature text-lg italic">marco stra</p>
        </Link>
        <p className="mt-2 text-xs text-muted-foreground">
          © {new Date().getFullYear()} Dance Factory — Tutti i diritti riservati.
        </p>
      </div>
    </footer>
  );
}
