import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Sparkles, ShieldCheck, MapPin } from "lucide-react";
import felpaImg from "@/assets/felpa.jpeg";
import magliettaImg from "@/assets/maglietta.jpeg";
import pantaloneImg from "@/assets/pantalone.jpeg";
import topImg from "@/assets/top.jpeg";
import bagImg from "@/assets/shop-bag.jpeg";
import heroImg from "@/assets/hero.jpg";

export const Route = createFileRoute("/shop")({
  head: () => ({
    meta: [
      { title: "Shop Ufficiale | MS Dance Factory — Streetwear & Merch" },
      {
        name: "description",
        content:
          "Lo shop ufficiale di MS Dance Factory. Felpe oversize, t-shirt, top crop, pantaloni baggy e borsoni firmati Marco Stra. Disponibili per il ritiro a Rho (Milano).",
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

type ProductSize = {
  name: string;
  price: string;
  badge?: string;
};

type ProductColor = {
  name: string;
  colorClass: string;
  borderClass?: string;
};

type Product = {
  id: string;
  name: string;
  category: "hoodies" | "tshirts" | "tops" | "pants" | "bags";
  price: string;
  tag?: string;
  description: string;
  image: string;
  sizes?: ProductSize[];
  colors?: ProductColor[];
};

const products: Product[] = [
  {
    id: "hoodie-official-msdf",
    name: "MSDF Official Hoodie",
    category: "hoodies",
    price: "€55.00",
    tag: "BEST SELLER",
    description:
      "Felpa oversize con cappuccio in french terry nero premium. Logo centrale MS Dance Factory con accenti neon, tasca marsupio e claim iconico 'DANCE FIRST. THINK LATER.' serigrafato lungo la manica.",
    image: felpaImg,
    sizes: [
      { name: "S", price: "€55.00" },
      { name: "M", price: "€55.00" },
      { name: "L", price: "€55.00" },
      { name: "XL", price: "€55.00" },
    ],
    colors: [
      { name: "Nero", colorClass: "bg-neutral-900", borderClass: "border-neutral-600" },
    ],
  },
  {
    id: "tee-classic-msdf",
    name: "T-Shirt Classic Logo MSDF",
    category: "tshirts",
    price: "€30.00",
    tag: "ESSENTIAL",
    description:
      "T-shirt girocollo in 100% cotone pettinato pesante con fit contemporaneo. Logo ufficiale MS Dance Factory sul petto con dettagli in rosso fuoco.",
    image: magliettaImg,
    sizes: [
      { name: "S", price: "€30.00" },
      { name: "M", price: "€30.00" },
      { name: "L", price: "€30.00" },
      { name: "XL", price: "€30.00" },
    ],
    colors: [
      { name: "Nero", colorClass: "bg-neutral-900", borderClass: "border-neutral-600" },
    ],
  },
  {
    id: "top-crop-msdf",
    name: "MSDF Crop Top",
    category: "tops",
    price: "€25.00",
    tag: "MUST-HAVE",
    description:
      "Top crop sagomato con spalline sottili in tessuto tecnico elasticizzato traspirante e logo geometrico MSDF sul fondo. Perfetto per Heels, Commercial, Dancehall e workout.",
    image: topImg,
    sizes: [
      { name: "XS", price: "€25.00" },
      { name: "S", price: "€25.00" },
      { name: "M", price: "€25.00" },
      { name: "L", price: "€25.00" },
    ],
    colors: [
      { name: "Nero", colorClass: "bg-neutral-950", borderClass: "border-neutral-700" },
      { name: "Bianco", colorClass: "bg-neutral-100", borderClass: "border-neutral-300" },
    ],
  },
  {
    id: "pants-baggy-msdf",
    name: "MSDF Baggy Sweatpants",
    category: "pants",
    price: "€45.00",
    tag: "NEW DROP",
    description:
      "Pantalone tuta oversize dal fit baggy a gamba larga, con elastico arricciato in vita, coulisse regolabile e lettering MSDANCEFACTORY serigrafato a contrasto.",
    image: pantaloneImg,
    sizes: [
      { name: "S", price: "€45.00" },
      { name: "M", price: "€45.00" },
      { name: "L", price: "€45.00" },
      { name: "XL", price: "€45.00" },
    ],
    colors: [
      { name: "Nero", colorClass: "bg-neutral-900", borderClass: "border-neutral-600" },
    ],
  },
  {
    id: "bag-urban-duffle",
    name: "MSDF Urban Dancer Duffle Bag",
    category: "bags",
    price: "€20.00",
    tag: "ACCESSORI",
    description:
      "Borsone sportivo rinforzato con scomparto portascarpe ventilato, tasche multifunzione e tracolla ergonomica imbottita. Grafica ufficiale MSDF e claim 'Dance first. It's more than a dance here'. Disponibile in 2 dimensioni (Piccolo a 20€ e Grande a 25€) e 2 colori (Nero e Rosso).",
    image: bagImg,
    sizes: [
      { name: "Piccolo", price: "€20.00", badge: "20€" },
      { name: "Grande", price: "€25.00", badge: "25€" },
    ],
    colors: [
      { name: "Nero", colorClass: "bg-neutral-950", borderClass: "border-neutral-700" },
      { name: "Rosso", colorClass: "bg-red-600", borderClass: "border-red-500" },
    ],
  },
];

function ProductCard({ product }: { product: Product }) {
  const [selectedSize, setSelectedSize] = useState<ProductSize | null>(
    product.sizes?.[0] ?? null
  );
  const [selectedColor, setSelectedColor] = useState<ProductColor | null>(
    product.colors?.[0] ?? null
  );

  const currentPrice = selectedSize ? selectedSize.price : product.price;
  const hasVariablePricing =
    product.sizes &&
    product.sizes.length > 1 &&
    new Set(product.sizes.map((s) => s.price)).size > 1;

  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:border-primary/60 hover:shadow-2xl">
      <div className="relative aspect-[4/5] overflow-hidden bg-secondary/30">
        <img
          src={product.image}
          alt={product.name}
          width={800}
          height={1000}
          className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
        />
        {product.tag && (
          <span className="absolute top-4 left-4 rounded-full bg-primary px-3 py-1 text-[10px] font-bold tracking-widest text-primary-foreground uppercase shadow-lg">
            {product.tag}
          </span>
        )}
        <div className="absolute bottom-3 right-4 flex flex-col items-end">
          {hasVariablePricing && (
            <span className="text-[10px] font-bold tracking-wider text-primary uppercase drop-shadow">
              {selectedSize ? `Formato: ${selectedSize.name}` : "Da"}
            </span>
          )}
          <span className="display-title text-2xl sm:text-3xl text-foreground drop-shadow-md">
            {currentPrice}
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="display-title text-2xl group-hover:text-primary transition-colors">
          {product.name}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          {product.description}
        </p>

        {/* Options Section */}
        <div className="mt-5 space-y-4 border-t border-border/60 pt-4">
          {/* Color Selector */}
          {product.colors && product.colors.length > 0 && (
            <div>
              <div className="flex items-center justify-between text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                <span>Colore</span>
                <span className="text-foreground font-bold">{selectedColor?.name}</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {product.colors.map((c) => {
                  const isSelected = selectedColor?.name === c.name;
                  return (
                    <button
                      key={c.name}
                      type="button"
                      onClick={() => setSelectedColor(c)}
                      className={`inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-medium transition-all ${isSelected
                          ? "bg-primary/15 border-2 border-primary text-foreground font-semibold shadow-sm"
                          : "bg-secondary/40 border border-border text-muted-foreground hover:text-foreground hover:border-border/80"
                        }`}
                    >
                      <span
                        className={`h-3 w-3 rounded-full border ${c.colorClass} ${c.borderClass || "border-border"}`}
                      />
                      <span>{c.name}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Size / Dimension Selector */}
          {product.sizes && product.sizes.length > 0 && (
            <div>
              <div className="flex items-center justify-between text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                <span>{product.category === "bags" ? "Dimensione" : "Taglia"}</span>
                <span className="text-foreground font-bold">
                  {selectedSize?.name} {selectedSize?.price && `(${selectedSize.price})`}
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((s) => {
                  const isSelected = selectedSize?.name === s.name;
                  return (
                    <button
                      key={s.name}
                      type="button"
                      onClick={() => setSelectedSize(s)}
                      className={`rounded-lg px-3.5 py-1.5 text-xs font-bold tracking-wide transition-all ${isSelected
                          ? "bg-primary text-primary-foreground shadow-md shadow-primary/20 scale-102"
                          : "bg-secondary/50 border border-border text-muted-foreground hover:text-foreground hover:border-primary/40"
                        }`}
                    >
                      {s.name} {s.badge && <span className="ml-1 opacity-80">({s.badge})</span>}
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* Quick info / Desk notice */}
        <div className="mt-auto pt-6">
          <div className="flex items-center justify-between gap-2 rounded-xl bg-secondary/30 px-3.5 py-2.5 text-xs border border-border/50">
            <span className="text-muted-foreground">Disponibile al Desk MSDF</span>
            <a
              href="#info-acquisto"
              className="font-bold text-primary hover:underline hover:text-primary/80 transition-colors"
            >
              Info & Ritiro →
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}

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
                { id: "hoodies", label: "Felpe" },
                { id: "tshirts", label: "T-Shirt" },
                { id: "tops", label: "Top" },
                { id: "pants", label: "Pantaloni" },
                { id: "bags", label: "Borsoni" },
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
              <ProductCard key={p.id} product={p} />
            ))}
          </div>

          {/* How to purchase card */}
          <div id="info-acquisto" className="neon-border mt-16 rounded-2xl bg-card/70 p-8 backdrop-blur">
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
