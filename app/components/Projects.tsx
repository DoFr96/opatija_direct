import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { projects } from "../data/projects";

const Projects = () => {
  return (
    <section className="py-10 sm:px-8 px-4">
      <div className="max-w-[1000px] mx-auto">
        <div className="mb-10">
          <p className="uppercase text-sm text-black/70">Nasi projekti</p>
          <h2 className=" text-2xl uppercase font-semibold">
            Kuce i stanovi koje smo gradili
          </h2>
        </div>
        <ul className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
          {projects.map((item, index) => {
            const { slug, name, location, size, rooms, baths, image, summary } =
              item;
            return (
              <li
                key={index}
                className="group flex flex-col h-full overflow-hidden border border-black/10 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <Link href={`/projects/${slug}`}>
                  <div className="relative w-full aspect-[4/3] md:aspect-[3/2]">
                    <Image
                      src={image}
                      alt={name}
                      fill
                      className="object-cover "
                    />
                  </div>
                  <div className="p-4 sm:p-5 flex flex-1 flex-col justify-between">
                    <div className="flex flex-col space-y-2">
                      <h3 className="text-base font-semibold">{name}</h3>
                      <p className="text-[11px] font-medium uppercase tracking-[0.12em] text-black/60 ">
                        {location} - {size} - {rooms} sobe - {baths} kupaonice
                      </p>
                      <p className="text-sm text-black/80">{summary}</p>
                    </div>

                    <p className="mt-4 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-black/70 transition group-hover:text-black">
                      Vidi projekt{" "}
                      <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                    </p>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Projects;
