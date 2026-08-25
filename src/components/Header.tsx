import { Link, useLocation } from "@tanstack/react-router";

export function Header() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  const handleHomeClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNavClick = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-3">
        {isHome ? (
          <button onClick={handleHomeClick} className="min-w-0 hover:opacity-90 transition-opacity text-left cursor-pointer">
            <p className="display-title truncate text-xl leading-none sm:text-2xl">Dance Factory</p>
            <p className="neon-text font-signature -mt-0.5 text-base italic sm:text-lg">marco stra</p>
          </button>
        ) : (
          <Link to="/" className="min-w-0 hover:opacity-90 transition-opacity">
            <p className="display-title truncate text-xl leading-none sm:text-2xl">Dance Factory</p>
            <p className="neon-text font-signature -mt-0.5 text-base italic sm:text-lg">marco stra</p>
          </Link>
        )}
        <nav className="flex items-center gap-6 text-sm text-muted-foreground">
          {isHome ? (
            <>
              <button
                onClick={handleHomeClick}
                className="hidden transition-colors hover:text-foreground sm:block cursor-pointer"
              >
                Home
              </button>
              <button
                onClick={() => handleNavClick("orari")}
                className="hidden transition-colors hover:text-foreground sm:block cursor-pointer"
              >
                Orari
              </button>
              <button
                onClick={() => handleNavClick("corsi")}
                className="hidden transition-colors hover:text-foreground sm:block cursor-pointer"
              >
                Corsi
              </button>
              <button
                onClick={() => handleNavClick("staff")}
                className="hidden transition-colors hover:text-foreground md:block cursor-pointer"
              >
                Staff
              </button>
              <Link
                to="/accademia"
                className="hidden transition-colors hover:text-foreground sm:block"
              >
                Accademia
              </Link>
              <button
                onClick={() => handleNavClick("contatti")}
                className="neon-border shrink-0 rounded-full px-4 py-2 text-xs font-semibold tracking-widest text-foreground uppercase transition-transform hover:scale-105 cursor-pointer"
              >
                Iscriviti
              </button>
            </>
          ) : (
            <>
              <Link
                to="/"
                className="hidden transition-colors hover:text-foreground sm:block"
              >
                Home
              </Link>
              <Link
                to="/"
                hash="orari"
                className="hidden transition-colors hover:text-foreground sm:block"
              >
                Orari
              </Link>
              <Link
                to="/"
                hash="corsi"
                className="hidden transition-colors hover:text-foreground sm:block"
              >
                Corsi
              </Link>
              <Link
                to="/"
                hash="staff"
                className="hidden transition-colors hover:text-foreground md:block"
              >
                Staff
              </Link>
              <Link
                to="/accademia"
                className="hidden transition-colors hover:text-foreground sm:block text-primary font-medium"
              >
                Accademia
              </Link>
              <Link
                to="/"
                hash="contatti"
                className="neon-border shrink-0 rounded-full px-4 py-2 text-xs font-semibold tracking-widest text-foreground uppercase transition-transform hover:scale-105"
              >
                Iscriviti
              </Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}
