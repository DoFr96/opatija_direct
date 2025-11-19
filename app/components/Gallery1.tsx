"use client";

import React, { useState } from "react";
import Image from "next/image";

type GalleryProps = {
  images: string[]; // primamo array putanja
};

export default function Gallery1({ images }: GalleryProps) {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  // za swipe
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchEndX, setTouchEndX] = useState<number | null>(null);

  const showImage = (i: number) => {
    setIndex(i);
    setOpen(true);
  };

  const next = () => setIndex((prev) => (prev + 1) % images.length);
  const prev = () =>
    setIndex((prev) => (prev - 1 + images.length) % images.length);

  if (!images || images.length === 0) return null;

  // HANDLERS ZA SWIPE
  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchStartX(e.touches[0].clientX);
    setTouchEndX(null); // reset
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchEndX(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStartX === null || touchEndX === null) return;

    const distance = touchStartX - touchEndX;
    const swipeThreshold = 50; // minimalni pomak u px

    if (Math.abs(distance) < swipeThreshold) {
      // premalo pomaknuto → ne radi ništa
      return;
    }

    if (distance > 0) {
      // swipe lijevo → sljedeća slika
      next();
    } else {
      // swipe desno → prethodna slika
      prev();
    }

    setTouchStartX(null);
    setTouchEndX(null);
  };

  return (
    <>
      {/* Thumbnails */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
        {images.map((src, i) => (
          <div
            key={i}
            onClick={() => showImage(i)}
            className="relative w-full aspect-square group"
          >
            <Image
              src={src}
              fill
              alt=""
              className="cursor-pointer border object-cover"
            />
            <div className="cursor-pointer absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        ))}
      </div>

      {/* Fullscreen Viewer */}
      {open && (
        <div
          className=" fixed inset-0 bg-black/90 flex items-center justify-center z-50"
          onClick={() => setOpen(false)} // ← CLICK OUTSIDE CLOSE
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <button
            onClick={(e) => {
              e.stopPropagation();
              setOpen(false);
            }}
            className="absolute top-5 right-5 text-white text-4xl cursor-pointer 
           transition-all duration-150 
            active:scale-90 
           hover:opacity-90 active:opacity-70"
          >
            ✕
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            className="absolute left-5 text-white text-5xl cursor-pointer transition-all duration-150 
            active:scale-90 
           hover:opacity-90 active:opacity-70"
          >
            ‹
          </button>
          <div onClick={(e) => e.stopPropagation()}>
            <Image
              src={images[index]}
              alt=""
              width={1000}
              height={700}
              className="max-h-[90vh] w-auto "
            />
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            className="absolute right-5 text-white text-5xl cursor-pointer transition-all duration-150 active:scale-90 
           hover:opacity-90 active:opacity-70"
          >
            ›
          </button>
        </div>
      )}
    </>
  );
}
