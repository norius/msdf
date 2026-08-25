import { useState } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";

export function Header() {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const [isOpen, setIsOpen] = useState(false);

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

          {/* Mobile menu sheet trigger (sm:hidden) */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <button className="flex h-10 w-10 items-center justify-center rounded-md border border-border bg-background text-muted-foreground transition-colors hover:text-foreground sm:hidden cursor-pointer">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Menu</span>
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] border-l border-border/60 bg-background/95 backdrop-blur-xl p-6 flex flex-col">
              <SheetHeader className="text-left">
                <SheetTitle>
                  <div className="min-w-0">
                    <p className="display-title truncate text-2xl leading-none">Dance Factory</p>
                    <p className="neon-text font-signature -mt-0.5 text-lg italic">marco stra</p>
                  </div>
                </SheetTitle>
              </SheetHeader>
              <div className="mt-8 flex flex-col gap-6 text-base text-muted-foreground">
                {isHome ? (
                  <>
                    <button
                      onClick={() => {
                        handleHomeClick();
                        setIsOpen(false);
                      }}
                      className="text-left transition-colors hover:text-foreground cursor-pointer text-lg font-semibold uppercase tracking-wider"
                    >
                      Home
                    </button>
                    <button
                      onClick={() => {
                        handleNavClick("orari");
                        setIsOpen(false);
                      }}
                      className="text-left transition-colors hover:text-foreground cursor-pointer text-lg font-semibold uppercase tracking-wider"
                    >
                      Orari
                    </button>
                    <button
                      onClick={() => {
                        handleNavClick("corsi");
                        setIsOpen(false);
                      }}
                      className="text-left transition-colors hover:text-foreground cursor-pointer text-lg font-semibold uppercase tracking-wider"
                    >
                      Corsi
                    </button>
                    <button
                      onClick={() => {
                        handleNavClick("staff");
                        setIsOpen(false);
                      }}
                      className="text-left transition-colors hover:text-foreground cursor-pointer text-lg font-semibold uppercase tracking-wider"
                    >
                      Staff
                    </button>
                    <Link
                      to="/accademia"
                      onClick={() => setIsOpen(false)}
                      className="transition-colors hover:text-foreground text-lg font-semibold uppercase tracking-wider"
                    >
                      Accademia
                    </Link>
                    <button
                      onClick={() => {
                        handleNavClick("contatti");
                        setIsOpen(false);
                      }}
                      className="neon-border rounded-full px-4 py-3 text-center text-xs font-semibold tracking-widest text-foreground uppercase transition-transform hover:scale-105 cursor-pointer mt-4"
                    >
                      Iscriviti
                    </button>
                  </>
                ) : (
                  <>
                    <Link
                      to="/"
                      onClick={() => setIsOpen(false)}
                      className="transition-colors hover:text-foreground text-lg font-semibold uppercase tracking-wider"
                    >
                      Home
                    </Link>
                    <Link
                      to="/"
                      hash="orari"
                      onClick={() => setIsOpen(false)}
                      className="transition-colors hover:text-foreground text-lg font-semibold uppercase tracking-wider"
                    >
                      Orari
                    </Link>
                    <Link
                      to="/"
                      hash="corsi"
                      onClick={() => setIsOpen(false)}
                      className="transition-colors hover:text-foreground text-lg font-semibold uppercase tracking-wider"
                    >
                      Corsi
                    </Link>
                    <Link
                      to="/"
                      hash="staff"
                      onClick={() => setIsOpen(false)}
                      className="transition-colors hover:text-foreground text-lg font-semibold uppercase tracking-wider"
                    >
                      Staff
                    </Link>
                    <Link
                      to="/accademia"
                      onClick={() => setIsOpen(false)}
                      className="transition-colors hover:text-foreground text-lg font-semibold uppercase tracking-wider text-primary font-medium"
                    >
                      Accademia
                    </Link>
                    <Link
                      to="/"
                      hash="contatti"
                      onClick={() => setIsOpen(false)}
                      className="neon-border rounded-full px-4 py-3 text-center text-xs font-semibold tracking-widest text-foreground uppercase transition-transform hover:scale-105 mt-4"
                    >
                      Iscriviti
                    </Link>
                  </>
                )}
              </div>
            </SheetContent>
          </Sheet>
        </nav>
      </div>
    </header>
  );
}
