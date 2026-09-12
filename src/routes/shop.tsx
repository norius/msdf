import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Sparkles, ShieldCheck, MapPin } from "lucide-react";
import hoodieImg from "@/assets/shop-hoodie.jpg";
import tshirtImg from "@/assets/shop-tshirt.jpg";
import bagImg from "@/assets/shop-bag.jpg";
import heroImg from "@/assets/hero.jpg";

export const Route = createFileRoute("/shop")({
  head: () => ({
    meta: [
      { title: "Shop Ufficiale | MS Dance Factory — Streetwear & Merch" },
      {
        name: "description",
        content:
          "Lo shop ufficiale di MS Dance Factory. Felpe oversize, t-shirt vintage, borsoni e accessori dance firmati Marco Stra. Disponibili per il ritiro a Rho (Milano).",
      },
      { property: "og:title", content: "Shop Ufficiale | MS Dance Factory" },
      {
        property: "og:description",
        content: "Streetwear e dance gear ufficiale per allievi e supporter della MS Dance Factory.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: ShopPage,
});

type Product = {
  id: string;
  name: string;
  category: "hoodies" | "tshirts" | "bags";
  price: string;
  tag?: string;
  description: string;
  image: string;
};

const products: Product[] = [
  {
    id: "hoodie-signature",
    name: "MSDF Signature Neon Hoodie",
    category: "hoodies",
    price: "€59.00",
    tag: "BEST SELLER",
    description:
      "Felpa oversize ultra-pesante (420 g/m²) in french terry nera. Logo frontale MS Dance Factory con grafica neon e claim iconico ricamato.",
    image: hoodieImg,
  },
  {
    id: "tee-natural-order",
    name: "T-Shirt 'Dance First. Think Later.'",
    category: "tshirts",
    price: "€35.00",
    tag: "NEW DROP",
    description:
      "T-shirt washed vintage black con taglio dropped-shoulder. Lettering neon frontale ad alta densità e fit boxy ideale per allenamenti e freestyle.",
    image: tshirtImg,
  },
  {
    id: "bag-urban-duffle",
    name: "MSDF Urban Dancer Duffle Bag (40L)",
    category: "bags",
    price: "€45.00",
    tag: "MUST-HAVE",
    description:
      "Borsone sportivo rinforzato resistente all'acqua. Scomparto dedicato e ventilato per sneakers, tasche multifunzione e tracolla ergonomica imbottita.",
    image: bagImg,
  },
];

function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <>
      {/* Hero Shop */}
      <section className="relative flex min-h-[60vh] items-end overflow-hidden pt-28 pb-16">
        <img
          src={heroImg}
          alt="Streetwear MS Dance Factory"
          width={1600}
          height={1104}
          className="absolute inset-0 h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/85 to-background/50" />

        <div className="relative z-10 mx-auto w-full max-w-6xl px-5">
          <div className="mb-4">
            <p className="text-xs sm:text-sm font-bold tracking-[0.3em] text-primary uppercase">
              OFFICIAL MERCHANDISE • STREETWEAR
            </p>
          </div>
          <h1 className="display-title neon-text max-w-4xl text-4xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.92] tracking-tight">
            MSDF APPAREL &<br />
            DANCE GEAR
          </h1>
          <p className="mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg leading-relaxed">
            Indossa l'energia e l'identità della nostra scuola. Capi dal taglio streetwear contemporaneo e accessori pensati per resistere alle sessioni più intense in sala.
          </p>
        </div>
      </section>

      {/* Info notice bar */}
      <section className="border-y border-border bg-card/50 py-4">
        <div className="mx-auto max-w-6xl px-5 flex flex-wrap items-center justify-between gap-4 text-xs sm:text-sm">
          <div className="flex items-center gap-2 text-foreground/90">
            <MapPin className="h-4 w-4 text-primary shrink-0" />
            <span>Ritiro immediato presso la <strong>Direzione MSDF</strong> a Rho</span>
          </div>
          <div className="flex items-center gap-2 text-foreground/90">
            <Sparkles className="h-4 w-4 text-primary shrink-0" />
            <span>Tessuti premium 100% cotone pesante e dettagli riflettenti</span>
          </div>
          <div className="flex items-center gap-2 text-foreground/90">
            <ShieldCheck className="h-4 w-4 text-primary shrink-0" />
            <span>Edizione limitata esclusiva per la stagione 2026/27</span>
          </div>
        </div>
      </section>

      {/* Catalog */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-5">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <span className="text-xs font-semibold tracking-[0.3em] text-primary uppercase">Catalogo Ufficiale</span>
              <h2 className="display-title mt-2 text-4xl sm:text-5xl">I Capi della Collezione</h2>
            </div>

            {/* Filter buttons */}
            <div className="flex flex-wrap gap-2">
              {[
                { id: "all", label: "Tutti" },
                { id: "hoodies", label: "Hoodies" },
                { id: "tshirts", label: "T-Shirts" },
                { id: "bags", label: "Bags & Accessori" },
              ].map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={
                    selectedCategory === cat.id
                      ? "neon-glow rounded-full bg-primary px-5 py-2.5 text-xs font-bold tracking-widest text-primary-foreground uppercase"
                      : "rounded-full border border-border bg-card px-5 py-2.5 text-xs font-bold tracking-widest text-muted-foreground uppercase transition-colors hover:text-foreground"
                  }
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Product grid */}
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProducts.map((p) => (
              <article
                key={p.id}
                className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all hover:border-primary/60 hover:shadow-2xl"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-secondary/30">
                  <img
                    src={p.image}
                    alt={p.name}
                    width={800}
                    height={600}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {p.tag && (
                    <span className="absolute top-4 left-4 rounded-full bg-primary px-3 py-1 text-[10px] font-bold tracking-widest text-primary-foreground uppercase shadow-lg">
                      {p.tag}
                    </span>
                  )}
                  <span className="display-title absolute bottom-3 right-4 text-2xl text-foreground drop-shadow-md">
                    {p.price}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="display-title text-2xl group-hover:text-primary transition-colors">{p.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {p.description}
                  </p>
                </div>
              </article>
            ))}
          </div>

          {/* How to purchase card */}
          <div className="neon-border mt-16 rounded-2xl bg-card/70 p-8 backdrop-blur">
            <div className="grid gap-6 md:grid-cols-3">
              <div>
                <span className="text-xs font-bold tracking-widest text-primary uppercase">01. Prova in sede</span>
                <h4 className="display-title text-xl mt-2">Campionario disponibile</h4>
                <p className="mt-2 text-sm text-muted-foreground">
                  Tutti i capi sono esposti nella hall della scuola per toccare con mano la qualità del tessuto e verificare la taglia esatta.
                </p>
              </div>

              <div>
                <span className="text-xs font-bold tracking-widest text-primary uppercase">02. Pagamento facile</span>
                <h4 className="display-title text-xl mt-2">In sede o digitale</h4>
                <p className="mt-2 text-sm text-muted-foreground">
                  Puoi acquistare direttamente alla Direzione MSDF con contanti, POS o riservare il tuo capo tramite bonifico / Satispay.
                </p>
              </div>

              <div>
                <span className="text-xs font-bold tracking-widest text-primary uppercase">03. Supporta le Crew</span>
                <h4 className="display-title text-xl mt-2">Progetto Dance Factory</h4>
                <p className="mt-2 text-sm text-muted-foreground">
                  Una parte dei proventi del merchandising ufficiale contribuisce a finanziare le trasferte e le iscrizioni delle nostre crew alle gare.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
