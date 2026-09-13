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
    { time: "21:00 - 22:00", course: "Hip Hop Choreography (14+)", room: "Sala 2", teacher: "Kumo", level: "Open" },
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
    description: "Groove, freestyle e coreografia con Marco Stra e Kumo. Include lezioni di Streetdance.",
    levels: ["Kids", "Open", "Avanzato"],
  },
];

export type StaffRole = "Scuola" | "Accademia";

export type StaffMember = {
  name: string;
  image: string;
  styles: string;
  bio: string;
  tags: StaffRole[];
};

export const staff: StaffMember[] = [
  {
    name: "Marco Stra",
    image: teacher1,
    styles: "Commercial · Hip-Hop",
    bio: "Fondatore e direttore artistico di MS Dance Factory e MSDF Academy. Coreografo e performer di riferimento nel settore.",
    tags: ["Scuola", "Accademia"],
  },
  {
    name: "Teresa Ferrari",
    image: teacher3,
    styles: "Heels Technique",
    bio: "Docente d'eccellenza per lo studio della tecnica pura, dell'allineamento posturale e dell'impostazione sui tacchi per performer.",
    tags: ["Accademia"],
  },
  {
    name: "Kumo",
    image: teacher4,
    styles: "Contaminazione",
    bio: "Coreografo e ballerino urban di successo. Focalizzato su musicalità ad alta definizione, groove.",
    tags: ["Scuola", "Accademia"],
  },
  {
    name: "Sofia Ventrella",
    image: teacher3,
    styles: "Coreografico · Heels Stiletto",
    bio: "Insegnante e ballerina heels e classica. Unisce la disciplina del ballet all'attitudine e alla sensualità sui tacchi a spillo.",
    tags: ["Scuola", "Accademia"],
  },
  {
    name: "Cristina Brambilla",
    image: teacher2,
    styles: "Ballet · Baby Ballet",
    bio: "Docente di tecnica accademica pura e propedeutica al perfezionamento tecnico per ballerini professionisti.",
    tags: ["Scuola", "Accademia"],
  },
  {
    name: "Francesco Vanella",
    image: teacher1,
    styles: "Hip Hop",
    bio: "Ballerino professionista e formatore Hip Hop. Cura foundation, isolazioni, groove profondo e attitudine da palcoscenico.",
    tags: ["Accademia"],
  },
  {
    name: "Teddy Fonzarelli",
    image: teacher2,
    styles: "House",
    bio: "Pioniere della House Dance. Insegna footwork, jacking, lofting e la complessa ritmica della musica elettronica e clubbing.",
    tags: ["Accademia"],
  },
  {
    name: "Carolina Bianco",
    image: teacher1,
    styles: "Modern · Contemporary",
    bio: "Insegnante di Modern Contemporary. Lavora sulla fluidità cinetica, sul floorwork e sulla profonda consapevolezza espressiva.",
    tags: ["Scuola", "Accademia"],
  },
  {
    name: "Emy Codebò",
    image: teacher4,
    styles: "Caraibico · Heels · Ladystyle",
    bio: "Docente certificata di Heels e danze caraibiche. Specialista in portamento scenico, coordinazione ritmica ed eleganza performativa.",
    tags: ["Scuola", "Accademia"],
  },
  {
    name: "Francesca",
    image: teacher2,
    styles: "Preparazione atletica & estetica · Pilates",
    bio: "Preparatrice atletica specifica per danzatori e ballerina dancehall. Sviluppa potenza muscolare, flessibilità e tenuta scenica.",
    tags: ["Scuola", "Accademia"],
  },
  {
    name: "Ronald Guzman",
    image: teacher3,
    styles: "Reggaeton",
    bio: "Performer ed esperto di sonorità urbane latine e caraibiche. Trasmette energia pura, dinamica di movimento e ritmo travolgente.",
    tags: ["Scuola", "Accademia"],
  },
  {
    name: "Sofia Derivi",
    image: teacher3,
    styles: "Afroyoung",
    bio: "Ballerina professionista ed ex concorrente televisiva. Specializzata in danze africane, unisce tecnica moderna a groove tradizionale.",
    tags: ["Scuola"],
  },
  {
    name: "Edoardo Bottigelli",
    image: teacher1,
    styles: "Commercial Beginners",
    bio: "Ballerino professionista per produzioni video e live. Le sue lezioni uniscono precisione tecnica ed espressività da videoclip.",
    tags: ["Scuola"],
  },
  {
    name: "Nady",
    image: teacher1,
    styles: "Afro",
    bio: "Esperta di danze tradizionali africane ed afrobeats. Un viaggio intenso e liberatorio nel ritmo e nella cultura afro.",
    tags: ["Scuola", "Accademia"],
  },
  {
    name: "Gloria",
    image: teacher3,
    styles: "Ballet Young",
    bio: "Insegnante diplomata in danza classica. Cura la formazione propedeutica e accademica dei più giovani con rigore e dolcezza.",
    tags: ["Scuola"],
  },
  {
    name: "Eliana",
    image: teacher4,
    styles: "Latin Baby",
    bio: "Specializzata nelle danze caraibiche per bambini. Introduce i piccoli allievi ai ritmi latini attraverso il gioco e la coordinazione.",
    tags: ["Scuola"],
  },
  {
    name: "Simone",
    image: teacher2,
    styles: "Caraibici · Salsa & Bachata",
    bio: "Insegnante di balli caraibici di coppia. Insegna dinamiche di guida, intesa, portamento maschile e sincronia di sala.",
    tags: ["Scuola", "Accademia"],
  },
  {
    name: "Silvia",
    image: teacher4,
    styles: "Country",
    bio: "Insegnante qualificata di danza country western. Conduce le lezioni di Country Line Dance con ritmo, energia e socializzazione.",
    tags: ["Scuola"],
  },
];

export const academyTeachers = staff.filter((t) => t.tags.includes("Accademia"));


export const accademiaYears = ["Primo Anno", "Secondo Anno"] as const;
export type AccademiaYear = (typeof accademiaYears)[number];

export const accademiaDays = ["Lunedì", "Martedì", "Mercoledì", "Giovedì"] as const;
export type AccademiaDay = (typeof accademiaDays)[number];

export type AccademiaLesson = {
  time: string;
  subject: string;
  room?: string;
  teacher: string;
  optional?: boolean;
};

export const accademiaSchedule: Record<AccademiaYear, Partial<Record<AccademiaDay, AccademiaLesson[]>>> = {
  "Primo Anno": {
    "Martedì": [
      { time: "15:30 - 16:30", subject: "HOUSE", teacher: "Claudia" },
      { time: "16:30 - 17:30", subject: "DANCEHALL", teacher: "Alice La Scotti" },
      { time: "17:30 - 18:30", subject: "pausa", teacher: "" },
      { time: "18:30 - 19:30", subject: "GUEST CLASS", teacher: "" },
      { time: "19:30 - 20:30", subject: "COMMERCIAL", teacher: "Marco Stra" },
    ],
    "Mercoledì": [
      { time: "15:30 - 16:30", subject: "BALLET", teacher: "Cristina" },
      { time: "16:30 - 17:30", subject: "AFRO", teacher: "Nady" },
      { time: "17:30 - 18:30", subject: "pausa", teacher: "" },
      { time: "18:30 - 19:30", subject: "HEELS TECHNIQUE 👠", teacher: "Teresa Ferrari" },
      { time: "19:30 - 20:30", subject: "COMMERCIAL", teacher: "Marco Stra" },
    ],
    "Giovedì": [
      { time: "15:30 - 16:30", subject: "VOGUEING", teacher: "Spedix" },
      { time: "16:30 - 17:30", subject: "HIP HOP", teacher: "Nicola" },
      { time: "17:30 - 18:30", subject: "HEELS 👠", teacher: "Sofia Ventrella" },
      { time: "18:30 - 19:30", subject: "pausa", teacher: "" },
      { time: "19:30 - 20:30", subject: "MODERN", teacher: "Carolina", optional: true },
      { time: "20:30 - 21:30", subject: "LATIN 👥", teacher: "Emy & Simone", optional: true },
      { time: "21:30 - 22:30", subject: "LADYSTYLE 👠", teacher: "Emy", optional: true },
    ],
  },
  "Secondo Anno": {
    "Lunedì": [
      { time: "16:30 - 17:30", subject: "HEELS 👠", teacher: "Sofia Ventrella" },
      { time: "17:30 - 18:30", subject: "HOUSE", teacher: "Teddy" },
      { time: "18:30 - 19:30", subject: "VOGUEING", teacher: "Spedix" },
      { time: "20:00 - 21:00", subject: "REGGAETON", teacher: "Ronald", optional: true },
      { time: "21:00 - 22:00", subject: "HIP HOP CONTAMINATO", teacher: "Kumo", optional: true },
    ],
    "Martedì": [
      { time: "16:15 - 17:15", subject: "HIP HOP FOUNDATION", teacher: "Nicola" },
      { time: "17:30 - 18:30", subject: "DANCEHALL", teacher: "Alice La Scotti" },
      { time: "18:30 - 19:30", subject: "GUEST CLASS", teacher: "" },
      { time: "19:30 - 20:30", subject: "COMMERCIAL", teacher: "Marco Stra" },
    ],
    "Mercoledì": [
      { time: "16:30 - 17:30", subject: "BALLET", teacher: "Cry" },
      { time: "17:30 - 18:30", subject: "AFRO", teacher: "Nady" },
      { time: "18:30 - 19:30", subject: "pausa", teacher: "" },
      { time: "19:30 - 20:30", subject: "COMMERCIAL", teacher: "Marco Stra" },
      { time: "20:30 - 22:00", subject: "HEELS 👠", teacher: "Teresa Ferrari" },
    ],
    "Giovedì": [
      { time: "19:30 - 20:30", subject: "MODERN", teacher: "Carolina", optional: true },
      { time: "20:30 - 21:30", subject: "LATIN 👥", teacher: "Emy & Simone", optional: true },
      { time: "21:30 - 22:30", subject: "LADYSTYLE 👠", teacher: "Emy", optional: true },
    ],
  },
};