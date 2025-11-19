"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen((prev) => !prev);
  };

  useEffect(() => {
    const body = document.body;
    if (open) {
      body.classList.add("overflow-hidden");
    }
    if (!open) {
      body.classList.remove("overflow-hidden");
    }
  }, [open]);

  const navItems = [
    { label: "Usluge", href: "#usluge" },
    { label: "Projekti", href: "#projekti" },
    { label: "Contact", href: "#kontakt" },
  ];
  return (
    <header className=" w-full">
      <nav className="flex justify-between items-center py-2 px-5 md:px-8 lg:px-0 sm:py-4 max-w-[1000px] mx-auto">
        <Link className="sm:text-xl text-lg" href="/">
          Opatija Direct
        </Link>

        <ul className="sm:flex hidden flex-1 justify-end items-center gap-4">
          {navItems.map((item, key) => {
            return (
              <li key={key} className="text-xl  ">
                <Link
                  className="relative
      after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0
      after:bg-black after:transition-all after:duration-300
      hover:after:w-full
 "
                  href={item.href}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
        <div className="flex flex-1 justify-end sm:hidden">
          <button className="cursor-pointer" type="button">
            <Menu onClick={toggle} className=" w-5 h-5" />
          </button>
        </div>
        {open && (
          <div className="fixed inset-0 bg-white z-50  ">
            <ul className="flex flex-col items-center justify-center  min-h-screen gap-5 font-medium text-lg">
              {navItems.map((item, key) => {
                return (
                  <li key={key} className="text-2xl">
                    {" "}
                    <Link
                      href={item.href}
                      onClick={toggle}
                      className="relative
      after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0
      after:bg-black after:transition-all after:duration-300
      hover:after:w-full
"
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <div className="absolute top-0 right-0 py-2 px-5 md:px-8 lg:px-0 z-100">
              <button className="cursor-pointer" type="button">
                {" "}
                <X className="w-6 h-6 " onClick={toggle} />
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
