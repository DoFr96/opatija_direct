import { FaInstagramSquare, FaTiktok, FaWhatsapp } from "react-icons/fa";
import React from "react";
import Link from "next/link";
const icons = [
  { href: "/", icon: <FaWhatsapp className="w-6 h-6" /> },
  { href: "/", icon: <FaInstagramSquare className="w-6 h-6" /> },
  { href: "/", icon: <FaTiktok className="w-6 h-6" /> },
];

const Contact = () => {
  return (
    <section className="w-full py-10 sm:px-8 px-4">
      <div className="max-w-[700px] mx-auto">
        <div className="flex items-center justify-center gap-4 text-sm sm:text-base">
          {/* CONTACT */}
          <p className="uppercase whitespace-nowrap font-semibold tracking-wider text-sm sm:text-lg ">
            Contact
          </p>

          {/* Line */}
          <div className="flex-1 border-b border-black/20"></div>

          {/* Phone */}
          <span className="whitespace-nowrap font-medium text-sm sm:text-lg text-black/70">
            00385915085318
          </span>

          {/* Line */}
          <div className="flex-1 border-b border-black/20"></div>

          {/* Email */}
          <span className="whitespace-nowrap font-medium text-sm sm:text-lg text-black/70">
            opatija.direct@gmail.com
          </span>
        </div>
        <div className="flex justify-between my-5 max-w-[500px] mx-auto ">
          <p className="text-black/60 text-base">
            Rijeka, Hrvatska · <span className="text-sm">PON-SUB 9–18h</span>
          </p>

          <ul className="flex flex-row">
            {icons.map((item, index) => {
              return (
                <li key={index} className="w-10 h-10">
                  <Link href={item.href}>{item.icon}</Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Contact;
