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
    slug: "villa-aurora-opatija",
    name: "Villa Aurora",
    location: "Opatija",
    image: "/images/kuca2/kuca2_pic1.jpg",
    size: 220,
    rooms: 4,
    baths: 3,
    summary: "Moderna kuća za odmor s bazenom i pogledom na Kvarner.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam explicabo ad, id magnam sed officia voluptatibus consectetur provident quidem laborum!",

    images: loadImagesFromFolder("kuca2"),
  },
  {
    slug: "holiday-house-moscenicka-draga",
    name: "Holiday House D64",
    location: "Mošćenička Draga",
    size: 180,
    rooms: 3,
    baths: 3,
    image: "/images/kuca3/kuca3cover.jpg",
    summary:
      "Kuća za odmor na brežuljku, idealna za najam tijekom cijele godine.",
    description: "",
    images: loadImagesFromFolder("kuca3"),
  },
  {
    slug: "urban-villa-matulji",
    name: "Urban Villa M",
    location: "Matulji",
    size: 210,
    rooms: 4,
    baths: 3,
    image: "/images/kuca5/kuca5cover.jpg",
    summary: "Obiteljska vila s odvojenim apartmanom za kratkoročni najam.",
    description: "",
    images: loadImagesFromFolder("kuca5"),
  },
  {
    slug: "sea-view-residence",
    name: "Sea View Residence",
    location: "Ičići",
    size: 195,
    rooms: 3,
    baths: 3,
    image: "/images/kuca4/kuca4cover.jpg",
    summary:
      "Rezidencija s velikim staklenim stijenama i terasom s pogledom na more.",
    description: "",
  },
  {
    slug: "terrace-house-opatija",
    name: "Terrace House",
    location: "Opatija",
    size: 160,
    rooms: 3,
    baths: 2,
    image: "/projects/terrace-house.jpg",
    summary: "Kompaktna investicijska kuća s dvije terase i dvorištem.",
    description: "",
  },
  {
    slug: "duplex-apartments",
    name: "Duplex Apartments",
    location: "Rijeka",
    size: 2 * 85,
    rooms: 2,
    baths: 2,
    image: "/projects/duplex-apartments.jpg",
    summary: "Dva dvoetažna stana, idealna za prodaju zasebnim kupcima.",
    description: "",
  },
  {
    slug: "hilltop-villa",
    name: "Hilltop Villa",
    location: "Kastav",
    size: 230,
    rooms: 5,
    baths: 4,
    image: "/projects/hilltop-villa.jpg",
    summary: "Prostrana vila na uzvisini s velikim dvorištem i privatnošću.",
    description: "",
  },
];
