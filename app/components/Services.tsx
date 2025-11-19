import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const Services = () => {
  const services = [
    {
      title: "Vođenje projekta ključ u ruke",
      description:
        "Preuzimamo cijeli proces – od ideje, dozvola i projektiranja do gradnje i predaje gotove kuće spremne za prodaju ili najam.",
    },
    {
      title: "Razvoj i prodaja kuća za odmor",
      description:
        "Pomažemo investitorima razviti atraktivne kuće za odmor na kvalitetnim lokacijama, s naglaskom na dizajn i isplativost.",
    },
    {
      title: "Podrška privatnim investitorima",
      description:
        "Analiza ulaganja, savjetovanje oko zemljišta, budžeta i strategije prodaje vlastitih kuća i stanova.",
    },
  ];
  return (
    <section className="w-full my-20 px-4 sm:px-8">
      <div className="max-w-[1000px] mx-auto">
        {/*Gornja strana services*/}
        <div className="flex md:flex-row flex-col gap-8 justify-between md:items-center items-start">
          <div className="flex-initial  ">
            <span className="uppercase text-sm text-black/70">Nase usluge</span>
            <h1 className="uppercase font-semibold text-2xl">
              Sto nudimo investitorima
            </h1>
          </div>
          <p className="text-sm flex-1 text-black/70 max-w-[500px]  ">
            Radimo s investitorima koji razvijaju i prodaju vlastite kuće i
            stanove. Preuzimamo vođenje projekta, kako bi proces od prve ideje
            do gotove nekretnine bio jasan i kontroliran
          </p>
          <Link
            className="text-white md:inline-flex hidden whitespace-nowrap bg-black rounded-4xl px-3 py-1"
            href="/"
          >
            Sve usluge
          </Link>
        </div>

        <div className="my-10 max-w-[1000px] mx-auto">
          <ul className=" flex md:flex-row flex-col items-stretch justify-between gap-4">
            {services.map((item, index) => {
              return (
                <li key={index} className="flex flex-1 group">
                  <div
                    className={`px-3 py-6 flex justify-between  h-full w-full flex-col border border-black/30  ${
                      index == 0
                        ? "bg-black text-white"
                        : "bg-white text-black  hover:bg-black group-hover:text-white transition-colors duration-200 "
                    }`}
                  >
                    <div className="space-y-3">
                      <h2 className="uppercase font-semibold ">{item.title}</h2>
                      <p
                        className={`text-sm ${
                          index == 0
                            ? " text-white/70"
                            : " text-black/70 group-hover:text-white/70 transition-colors duration-200 "
                        }`}
                      >
                        {item.description}
                      </p>
                    </div>

                    <span className="flex justify-start items-center mt-3  text-sm ">
                      VISE <ArrowRight className="h-5 w-5" />{" "}
                    </span>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Services;
