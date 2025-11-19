import Link from "next/link";
import React from "react";
import Image from "next/image";
import { ArrowBigDown } from "lucide-react";
const Hero = () => {
  return (
    <section className="w-full ">
      <div className="border-b border-black/5 flex max-w-[1000px] mx-auto md:flex-row flex-col justify-between gap-8 items-center py-2 px-5 md:px-8 sm:py-10 ">
        <div className="flex-1">
          <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-4 py-1 text-xs uppercase tracking-[0.2em] text-black/70">
            <span className="h-1.5 w-1.5 rounded-full bg-[#FE2B2A]" />
            Opatija Direct · Holiday home development
          </div>
          <h1 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight">
            Gradimo kuće za odmor <br className="sm:block hidden" />
            za moderne investitore.
          </h1>
          <p className="mt-5">
            Opatija Direct vodi cijeli proces – od ideje i zemljišta, preko
            projekta i gradnje, do gotove kuće spremne za prodaju ili
            iznajmljivanje.
          </p>
          <div className="flex flex-wrap items-center gap-4 pt-2 mt-5">
            <Link
              href="#projects"
              className="rounded-full bg-black px-6 py-2 text-sm font-medium text-white hover:bg-black/80"
            >
              Pogledaj projekte
            </Link>
            <Link
              href="#contact"
              className="rounded-full border border-black/20 bg-white px-6 py-2 text-sm font-medium text-black hover:bg-black/5"
            >
              Dogovori sastanak
            </Link>
          </div>
        </div>
        <div className="flex-1 w-full   ">
          <div className="w-full relative md:aspect-[4/5] aspect-video bg-gray-300 rounded-3xl overflow-hidden">
            <Image
              src="/coverphoto01.jpg"
              alt="cover"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/30 text-black "></div>
            <div className="absolute top-4 left-4 bg-white/90 rounded-full px-4 py-1 text-sm font-medium">
              Zavrsenih projekta 7
            </div>
            <div className="absolute bottom-4 right-4 bg-black/85 rounded-2xl  text-white text-xs px-4 py-2">
              <p className="uppercase tracking-[0.2em]">Trenutni projekt</p>
              <p className="text-sm font-semibold"> Villa Aurora, Opatija </p>
              <p className="text-[11px] text-white/70">
                220 m² · bazen · pogled na more
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
