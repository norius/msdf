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
    { time: "17:30 – 18:30", course: "Hip-Hop Kids", room: "Sala A", teacher: "Marco Stra", level: "Principianti" },
    { time: "18:30 – 19:45", course: "Dancehall", room: "Sala B", teacher: "Nadia Rossi", level: "Open" },
    { time: "19:45 – 21:00", course: "Commerciale", room: "Sala A", teacher: "Marco Stra", level: "Intermedio" },
    { time: "21:00 – 22:15", course: "Caraibico", room: "Sala B", teacher: "Elena Costa", level: "Open" },
  ],
  Martedì: [
    { time: "17:30 – 18:45", course: "Afro", room: "Sala B", teacher: "Kevin Osei", level: "Principianti" },
    { time: "18:45 – 20:00", course: "Vogueing", room: "Sala A", teacher: "Nadia Rossi", level: "Open" },
    { time: "20:00 – 21:15", course: "Heels", room: "Sala B", teacher: "Elena Costa", level: "Intermedio" },
    { time: "21:15 – 22:30", course: "Hip-Hop", room: "Sala A", teacher: "Kevin Osei", level: "Avanzato" },
  ],
  Mercoledì: [
    { time: "17:30 – 18:30", course: "Commerciale Kids", room: "Sala A", teacher: "Elena Costa", level: "Principianti" },
    { time: "18:30 – 19:45", course: "Afro", room: "Sala B", teacher: "Kevin Osei", level: "Intermedio" },
    { time: "19:45 – 21:00", course: "Dancehall", room: "Sala A", teacher: "Nadia Rossi", level: "Avanzato" },
    { time: "21:00 – 22:15", course: "Heels", room: "Sala B", teacher: "Nadia Rossi", level: "Open" },
  ],
  Giovedì: [
    { time: "17:30 – 18:45", course: "Hip-Hop", room: "Sala B", teacher: "Marco Stra", level: "Intermedio" },
    { time: "18:45 – 20:00", course: "Vogueing", room: "Sala A", teacher: "Nadia Rossi", level: "Intermedio" },
    { time: "20:00 – 21:15", course: "Caraibico", room: "Sala B", teacher: "Elena Costa", level: "Principianti" },
    { time: "21:15 – 22:30", course: "Commerciale", room: "Sala A", teacher: "Marco Stra", level: "Avanzato" },
  ],
};

export const disciplines = [
  {
    name: "Afro",
    image: afro,
    description: "Radici, groove e percussione: il corpo diventa tamburo tra tradizione e afrobeats.",
    levels: ["Principianti", "Intermedio"],
  },
  {
    name: "Dancehall",
    image: dancehall,
    description: "Energia jamaicana pura, steps iconici e attitude da party senza freni.",
    levels: ["Open", "Avanzato"],
  },
  {
    name: "Commerciale",
    image: commerciale,
    description: "Coreografie da videoclip: pulizia, presenza scenica e performance.",
    levels: ["Principianti", "Intermedio", "Avanzato"],
  },
  {
    name: "Caraibico",
    image: caraibico,
    description: "Salsa, bachata e son: coppia, ritmo e connessione sulla pista.",
    levels: ["Principianti", "Open"],
  },
  {
    name: "Vogueing",
    image: vogueing,
    description: "Ballroom culture: hands performance, duckwalk e attitudine da runway.",
    levels: ["Open", "Intermedio"],
  },
  {
    name: "Heels",
    image: heels,
    description: "Tacco, forza e sensualità controllata. Tecnica e carattere sopra i 10 cm.",
    levels: ["Open", "Intermedio"],
  },
  {
    name: "Hip-Hop",
    image: hiphop,
    description: "Foundation, freestyle e groove street: la base di tutta la cultura urban.",
    levels: ["Kids", "Principianti", "Avanzato"],
  },
];

export const staff = [
  {
    name: "Marco Stra",
    image: teacher1,
    styles: "Hip-Hop · Commerciale",
    bio: "Fondatore e direttore artistico. 15 anni di palchi, tour e contest internazionali.",
  },
  {
    name: "Nadia Rossi",
    image: teacher2,
    styles: "Dancehall · Vogueing · Heels",
    bio: "Formata tra Kingston e Parigi, porta in sala energia e cultura ballroom.",
  },
  {
    name: "Kevin Osei",
    image: teacher3,
    styles: "Afro · Hip-Hop",
    bio: "Specialista di afrobeats e foundation, insegnante in workshop in tutta Europa.",
  },
  {
    name: "Elena Costa",
    image: teacher4,
    styles: "Caraibico · Commerciale",
    bio: "Maestra federale di balli caraibici, coreografa per eventi e gala.",
  },
];
