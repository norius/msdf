import afro from "@/assets/afro.jpg";
import dancehall from "@/assets/dancehall.jpg";
import commerciale from "@/assets/commerciale.jpg";
import caraibico from "@/assets/caraibico.jpg";
import vogueing from "@/assets/vogueing.jpg";
import heels from "@/assets/heels.jpg";
import hiphop from "@/assets/hiphop.jpg";
import teacher1 from "@/assets/teacher1.jpg";
import teacher2 from "@/assets/teacher2.jpg";
import teacher3 from "@/assets/teacher3.jpg";
import teacher4 from "@/assets/teacher4.jpg";

export type Lesson = {
  time: string;
  course: string;
  room: string;
  teacher: string;
  level: string;
};

export const days = ["Lunedì", "Martedì", "Mercoledì", "Giovedì"] as const;
export type Day = (typeof days)[number];

export const schedule: Record<Day, Lesson[]> = {
  Lunedì: [
    { time: "16:15 - 17:00", course: "Baby Ballet (3-5)", room: "Sala 1", teacher: "Cri", level: "Principianti" },
    { time: "17:00 - 18:00", course: "Commercial Baby (8-11)", room: "Sala 1", teacher: "Marco Stra", level: "USA Crew" },
    { time: "18:00 - 19:00", course: "Streetdance (10+)", room: "Sala 1", teacher: "Marco Stra", level: "Top Crew" },
    { time: "19:00 - 20:00", course: "Open Class", room: "Sala 1", teacher: "Guest Teacher", level: "Open" },
    { time: "20:00 - 21:00", course: "Vogueing (14+)", room: "Sala 1", teacher: "Spedix", level: "Open" },
    { time: "20:00 - 21:00", course: "Reggaeton (14+)", room: "Sala 2", teacher: "Ronald", level: "Principianti" },
    { time: "21:00 - 22:00", course: "Donne Alla Riscossa (18+)", room: "Sala 1", teacher: "Marco Stra", level: "Open" },
    { time: "21:00 - 22:00", course: "Hip Hop Choreography (14+)", room: "Sala 2", teacher: "Kuma", level: "Open" },
  ],
  Martedì: [
    { time: "17:30 - 18:30", course: "Afro Young (8+)", room: "Sala 1", teacher: "Sofia Derivi", level: "Open" },
    { time: "18:30 - 19:30", course: "Commercial Avanzato (14+)", room: "Sala 1", teacher: "Marco Stra", level: "Queen Crew" },
    { time: "19:30 - 20:30", course: "Commercial (16+)", room: "Sala 1", teacher: "Marco Stra", level: "Royal Crew" },
    { time: "19:30 - 20:30", course: "Commercial (14+)", room: "Sala 2", teacher: "Edoardo", level: "Principianti" },
    { time: "20:30 - 21:30", course: "Dancehall (14+)", room: "Sala 1", teacher: "Ale La Scotti", level: "Open" },
    { time: "20:30 - 21:30", course: "Heels Stiletto (14+)", room: "Sala 2", teacher: "Sofia Ventrella", level: "Open" },
    { time: "21:30 - 22:30", course: "Commercial Avanzato (17+)", room: "Sala 1", teacher: "Marco Stra", level: "Wild Mama's" },
    { time: "21:30 - 22:30", course: "Country (16+)", room: "Sala 2", teacher: "Silvia", level: "Open" },
  ],
  Mercoledì: [
    { time: "17:30 - 18:30", course: "Commercial (12-15)", room: "Sala 1", teacher: "Marco Stra", level: "Urban Lions" },
    { time: "18:30 - 19:30", course: "Afro (14+)", room: "Sala 1", teacher: "Nady", level: "Open" },
    { time: "19:30 - 20:30", course: "Commercial (16+)", room: "Sala 1", teacher: "Marco Stra", level: "Superior" },
    { time: "19:30 - 20:30", course: "Pilates", room: "Sala 2", teacher: "Francesca", level: "Open" },
    { time: "20:30 - 21:30", course: "Commercial (18+)", room: "Sala 1", teacher: "Marco Stra", level: "BG Power" },
  ],
  Giovedì: [
    { time: "17:30 - 18:30", course: "Ballet (6-12)", room: "Sala 1", teacher: "Gloria", level: "Principianti" },
    { time: "18:30 - 19:30", course: "Commercial (14+)", room: "Sala 1", teacher: "Marco Stra", level: "Queen Crew" },
    { time: "18:30 - 19:30", course: "Latin Baby (6-12)", room: "Sala 2", teacher: "Eliana", level: "Principianti" },
    { time: "19:30 - 20:30", course: "Heels (14+)", room: "Sala 1", teacher: "Emy", level: "Open" },
    { time: "19:30 - 20:30", course: "Modern (14+)", room: "Sala 2", teacher: "Carolina", level: "Open" },
    { time: "20:30 - 21:30", course: "Latin Dance (18+)", room: "Sala 1", teacher: "Marco Stra", level: "Choreography" },
    { time: "20:30 - 21:30", course: "Salsa & Bachata (18+)", room: "Sala 2", teacher: "Emy & Simone", level: "Open" },
    { time: "21:30 - 22:30", course: "Commercial Avanzato (17+)", room: "Sala 1", teacher: "Marco Stra", level: "Wild Mama's" },
    { time: "21:30 - 22:30", course: "Ladystyle (14+)", room: "Sala 2", teacher: "Emy", level: "Open" },
  ],
};

export const disciplines = [
  {
    name: "Afro",
    image: afro,
    description: "Groove, ritmo e percussioni con Nady e Sofia Derivi. Classi open e Afro Young per i più giovani.",
    levels: ["Open", "Kids"],
  },
  {
    name: "Dancehall",
    image: dancehall,
    description: "Energia giamaicana pura, steps iconici e attitude da party con Ale La Scotti.",
    levels: ["Open"],
  },
  {
    name: "Commerciale",
    image: commerciale,
    description: "Coreografie da videoclip, tecnica e presenza scenica con Marco Stra ed Edoardo. Sede delle crew USA Crew, Queen Crew, Royal Crew e Urban Lions.",
    levels: ["Kids", "Principianti", "Avanzato"],
  },
  {
    name: "Caraibico",
    image: caraibico,
    description: "Salsa, Bachata e portamento con Emy & Simone. Include il corso Latin Baby con Eliana.",
    levels: ["Open", "Kids"],
  },
  {
    name: "Vogueing",
    image: vogueing,
    description: "Ballroom culture: hands performance, catwalk e duckwalk con Spedix, Mother della House of Dipstars.",
    levels: ["Open"],
  },
  {
    name: "Heels",
    image: heels,
    description: "Femminilità, carattere e tecnica sui tacchi con Emy e Sofia Ventrella. Include Heels Stiletto e Ladystyle.",
    levels: ["Open"],
  },
  {
    name: "Hip-Hop",
    image: hiphop,
    description: "Groove, freestyle e coreografia con Marco Stra e Kuma. Include lezioni di Streetdance.",
    levels: ["Kids", "Open", "Avanzato"],
  },
];

export const staff = [
  {
    name: "Marco Stra",
    image: teacher1,
    styles: "Hip-Hop · Commerciale",
    bio: "Fondatore e direttore artistico di MS Dance Factory. Coreografo di successo, guida le crew della scuola nei contest nazionali e internazionali.",
  },
  {
    name: "Spedix",
    image: teacher2,
    styles: "Vogueing · Waacking",
    bio: "Padre fondatore della Kiki House of Dipstars e icona della ballroom scene italiana. Porta in sala l'autentica cultura e attitudine del voguing.",
  },
  {
    name: "Sofia Derivi",
    image: teacher3,
    styles: "Afro · Afrobeats",
    bio: "Ballerina professionista ed ex concorrente televisiva. Specializzata in danze africane, unisce tecnica moderna a groove tradizionale.",
  },
  {
    name: "Emy Codebò",
    image: teacher4,
    styles: "Heels · Caraibici · Ladystyle",
    bio: "Insegnante certificata di Heels e danze caraibiche. Specialista in portamento femminile, unisce sensualità e precisione tecnica.",
  },
  {
    name: "Kry Brambilla",
    image: teacher1,
    styles: "Baby Ballet · Propedeutica",
    bio: "Specializzata nell'insegnamento infantile. Coniuga gioco e basi della danza classica per avvicinare i piccolissimi (3-5 anni) al movimento.",
  },
  {
    name: "Guest Teacher",
    image: teacher2,
    styles: "Workshop · Open Class",
    bio: "Insegnanti esterni e coreografi ospiti di fama nazionale e internazionale per lezioni speciali e laboratori di alto livello.",
  },
  {
    name: "Ronald",
    image: teacher3,
    styles: "Reggaeton",
    bio: "Esperto di danze caraibiche e reggaeton. Le sue classi uniscono ritmo, energia urbana e tanto divertimento.",
  },
  {
    name: "Kuma",
    image: teacher4,
    styles: "Hip-Hop Choreography",
    bio: "Coreografo e ballerino di urban dance. Focalizzato sullo studio della musicalità, dell'espressività corporea e sul groove.",
  },
  {
    name: "Edoardo Bottigelli",
    image: teacher1,
    styles: "Commerciale",
    bio: "Ballerino professionista per produzioni video e live. Le sue lezioni uniscono precisione tecnica ed espressività da videoclip.",
  },
  {
    name: "Ale La Scotti",
    image: teacher2,
    styles: "Dancehall",
    bio: "Insegnante e ballerina specializzata nella cultura dancehall giamaicana. Porta in sala groove, attitudine e passi della street-culture.",
  },
  {
    name: "Sofia Ventrella",
    image: teacher3,
    styles: "Heels Stiletto",
    bio: "Insegnante e ballerina heels. Focalizzata sullo studio del portamento sui tacchi a spillo, sulla postura e sulla sensualità coreografica.",
  },
  {
    name: "Silvia",
    image: teacher4,
    styles: "Country Line Dance",
    bio: "Insegnante qualificata di danza country western. Conduce le lezioni di Country Line Dance con entusiasmo, ritmo e socializzazione.",
  },
  {
    name: "Nady",
    image: teacher1,
    styles: "Afro",
    bio: "Esperta di danze tradizionali africane ed afrobeats. Le sue lezioni sono un viaggio intenso e liberatorio nel ritmo e nella cultura afro.",
  },
  {
    name: "Francesca Tammaro",
    image: teacher2,
    styles: "Pilates",
    bio: "Insegnante certificata di Pilates e ginnastica posturale. Focalizzata sul rinforzo profondo del core, sulla flessibilità e sulla postura.",
  },
  {
    name: "Gloria Di Vito",
    image: teacher3,
    styles: "Ballet (Danza Classica)",
    bio: "Insegnante diplomata in danza classica. Cura la formazione accademica degli allievi unendo tecnica rigorosa a passione artistica.",
  },
  {
    name: "Eliana Reale",
    image: teacher4,
    styles: "Latin Baby",
    bio: "Specializzata nelle danze caraibiche per bambini. Introduce i piccoli allievi ai ritmi latini attraverso il gioco e la coordinazione.",
  },
  {
    name: "Carolina Bianco",
    image: teacher1,
    styles: "Modern",
    bio: "Insegnante di Modern Contemporary. Le sue lezioni lavorano sulla fluidità, sul floorwork e sullo sviluppo dell'espressività scenica.",
  },
  {
    name: "Simone",
    image: teacher2,
    styles: "Caraibici · Salsa & Bachata",
    bio: "Insegnante di balli di coppia caraibici. Collabora in sala con Emy per insegnare dinamiche di guida, intesa e portamento maschile.",
  },
];
