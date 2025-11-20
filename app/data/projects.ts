import fs from "fs";
import path from "path";

export type Project = {
  slug: string;
  name: string;
  location: string;
  size: string;
  rooms: number;
  baths: number;
  image: string;
  summary: string;
  description: string; // duži opis za detaljnu stranicu
  images?: string[];
  video?: string;
};

function loadImagesFromFolder(folder: string): string[] {
  const dir = path.join(process.cwd(), "public", "images", folder);

  if (!fs.existsSync(dir)) return [];

  const files = fs.readdirSync(dir);

  // vrati samo slike + dodaj im public path
  return files
    .filter((file) => /\.(jpg|jpeg|png|webp)$/i.test(file))
    .map((file) => `/images/${folder}/${file}`);
}

export const projects = [
  {
    slug: "villa-5",
    name: "Vila 5.",
    location: "Vodnjan",
    size: 215,
    rooms: 3,
    baths: 3,
    image: "/images/kuca5/1.1.webp",
    summary: "Nasa najveca osobna investicija do sada.",
    description: "",
    images: loadImagesFromFolder("kuca5"),
  },
  {
    slug: "villa-4",
    name: "Vila 4.",
    location: "Vodnjan",
    size: 200,
    rooms: 3,
    baths: 3,
    image: "/images/kuca4/kuca4cover.jpg",
    summary:
      "Rezidencija s velikim staklenim stijenama i terasom s pogledom na more.",
    description: "",
    video: "https://www.youtube.com/embed/DxU6GroMYRc?si=31douoBN235qP5j5",
  },
  {
    slug: "villa-6",
    name: "Vila 6.",
    location: "Svetvincenat",
    size: 105,
    rooms: 1,
    baths: 1,
    image: "/images/kuca6/kuca6cover.webp",
    summary: "Kuca za odmor koja je namijenjena parovima.",
    description:
      "Kuca za odmor koja je namijenjena parovima. 2 + 1 osobe koje mogu uzivati u unutarnjem wellnessu.",
    video: "https://www.youtube.com/embed/jpcXxg2OcCs?si=anl2nCn-8Tn776GP",
  },

  {
    slug: "villa-3",
    name: "Vila 3.",
    location: "Vodnjan",
    size: 180,
    rooms: 3,
    baths: 3,
    image: "/images/kuca3/3kucacover.webp",
    summary:
      "Kuća za odmor na brežuljku, idealna za najam tijekom cijele godine.",
    description: "",
    images: loadImagesFromFolder("kuca3"),
  },

  {
    slug: "villa-1",
    name: "Vila 1.",
    location: "Svetvincenat",
    size: 150,
    rooms: 3,
    baths: 2,
    image: "/images/kuca1/coverkucaglavna.webp",
    summary: "Kompaktna investicijska kuća s dvije terase i dvorištem.",
    description: "",
    images: loadImagesFromFolder("kuca1"),
  },
  {
    slug: "adaptacija-stana",
    name: "Adaptacija stana",
    location: "Rijeka",
    size: 90,
    rooms: 2,
    baths: 1,
    image: "/images/adaptacijastana.webp",
    summary: "Dva dvoetažna stana, idealna za prodaju zasebnim kupcima.",
    description: "",
    video: "https://www.youtube.com/embed/AnbZbjKO0nw?si=jca7IKJz9BAIzFRu",
  },

  {
    slug: "villa-buzet",
    name: "Vila Buzet",
    location: "Buzet",
    size: 230,
    rooms: 4,
    baths: 4,
    image: "/images/kucabuzet.webp",
    summary: "Prostrana vila na uzvisini s velikim dvorištem i privatnošću.",
    description: "",
    video: "https://www.youtube.com/embed/4JPR0zHcyKY?si=R1KIaQ026Tk7E6kh",
  },
  {
    slug: "villa-2",
    name: "Vila 2.",
    location: "Svetvincenat",
    image: "/images/kuca2/IMG_0013.webp",
    size: 140,
    rooms: 2,
    baths: 2,
    summary: "Moderna kuća za odmor s bazenom i pogledom na Kvarner.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam explicabo ad, id magnam sed officia voluptatibus consectetur provident quidem laborum!",

    images: loadImagesFromFolder("kuca2"),
  },
];
