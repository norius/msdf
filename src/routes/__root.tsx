import type { ReactNode } from "react";
import { useEffect } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  useLocation,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import appCss from "../styles.css?url";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Toaster } from "../components/ui/sonner";
import { BackgroundLogo } from "../components/BackgroundLogo";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

const schemaJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["DanceSchool", "SportsActivityLocation", "EducationalOrganization"],
      "@id": "https://www.msdancefactory.it/#organization",
      "name": "MS Dance Factory",
      "alternateName": [
        "MSDF",
        "MS Dance Factory Rho",
        "Scuola di Danza MS Dance Factory",
        "MS Dance Factory Marco Stra",
        "Scuola Danza Rho"
      ],
      "url": "https://www.msdancefactory.it",
      "logo": "https://www.msdancefactory.it/favicon.ico",
      "description":
        "Scuola di danza urban e accademia professionale a Rho (Milano) diretta da Marco Stra. Corsi per ogni livello di Hip Hop, Heels, Dancehall, Afro, Vogueing, Danza Moderna e Academy triennale.",
      "telephone": "+39 347 000 0000",
      "email": "msdancefactory2021@gmail.com",
      "priceRange": "€€",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Via Giuseppe Di Vittorio 2/B",
        "addressLocality": "Rho",
        "addressRegion": "MI",
        "postalCode": "20017",
        "addressCountry": "IT"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 45.5298,
        "longitude": 9.0401
      },
      "areaServed": [
        { "@type": "City", "name": "Rho" },
        { "@type": "City", "name": "Milano" },
        { "@type": "City", "name": "Pero" },
        { "@type": "City", "name": "Lainate" },
        { "@type": "City", "name": "Arese" },
        { "@type": "City", "name": "Bollate" },
        { "@type": "City", "name": "Cornaredo" },
        { "@type": "City", "name": "Settimo Milanese" }
      ],
      "founder": {
        "@type": "Person",
        "@id": "https://www.msdancefactory.it/#marcostra",
        "name": "Marco Stra",
        "jobTitle": "Direttore Artistico & Coreografo",
        "sameAs": [
          "https://www.youtube.com/@marcostra7236",
          "https://www.instagram.com/marcostra_official/"
        ]
      },
      "sameAs": [
        "https://www.youtube.com/@marcostra7236",
        "https://www.instagram.com/msdancefactory_/"
      ],
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday"],
          "opens": "16:30",
          "closes": "22:30"
        }
      ]
    },
    {
      "@type": "Person",
      "@id": "https://www.msdancefactory.it/#marcostra",
      "name": "Marco Stra",
      "jobTitle": "Direttore Artistico & Coreografo",
      "description":
        "Ballerino professionista, performer televisivo e coreografo di spicco nella scena urban italiana. Fondatore e direttore artistico di MS Dance Factory e MSDF Academy a Rho (Milano).",
      "worksFor": { "@id": "https://www.msdancefactory.it/#organization" },
      "sameAs": [
        "https://www.youtube.com/@marcostra7236",
        "https://www.instagram.com/marcostra_official/"
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.msdancefactory.it/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Dove si trova la scuola di danza MS Dance Factory?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "MS Dance Factory si trova a Rho (Milano) in Via Giuseppe Di Vittorio 2/B, comodamente raggiungibile da Rho Fiera, dalla stazione FS di Rho e dalla tangenziale ovest di Milano."
          }
        },
        {
          "@type": "Question",
          "name": "Chi è Marco Stra?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "Marco Stra è ballerino, performer e coreografo. È il fondatore e direttore artistico di MS Dance Factory e di MSDF Academy a Rho (Milano)."
          }
        },
        {
          "@type": "Question",
          "name": "Quali corsi di danza si tengono a Rho presso MS Dance Factory?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "I corsi includono Hip Hop (tutti i livelli), Reggaeton Heels, Stiletto Heels, Dancehall, Afro Dance, Vogueing, Waacking, Commerciale, Danza Moderna, Baby Latin e l'Accademia Triennale di formazione professionale MSDF Academy."
          }
        },
        {
          "@type": "Question",
          "name": "Come fare una lezione di prova gratuita?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "MS Dance Factory offre una settimana di prova gratuita per tutti i nuovi iscritti. È possibile prenotarla compilando il modulo contatti sul sito web o via email."
          }
        }
      ]
    }
  ]
};

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "MS Dance Factory | Scuola di Danza a Rho (Milano) — Marco Stra" },
      {
        name: "description",
        content:
          "Scuola di danza urban MS Dance Factory a Rho (Milano), diretta da Marco Stra. Corsi di Hip Hop, Heels, Dancehall, Afro, Vogueing e Academy professionale.",
      },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "MS Dance Factory" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "geo.region", content: "IT-MI" },
      { name: "geo.placename", content: "Rho, Milano" },
      { name: "geo.position", content: "45.5298;9.0401" },
      { name: "ICBM", content: "45.5298, 9.0401" },
      { name: "author", content: "Marco Stra" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "canonical", href: "https://www.msdancefactory.it" },
    ],
  }),

  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="it">
      <head>
        <HeadContent />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemaJsonLd),
          }}
        />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) return;
    const hashId = location.hash.replace("#", "");
    const element = document.getElementById(hashId);
    if (!element) return;
    const timer = setTimeout(() => {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 150);
    return () => clearTimeout(timer);
  }, [location.hash, location.pathname]);

  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-background flex flex-col relative">
        <BackgroundLogo />
        <Header />
        <main className="flex-grow">
          {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
          <Outlet />
        </main>
        <Toaster />
        <Footer />
      </div>
    </QueryClientProvider>
  );
}
