"use client";

import { useState } from "react";
import Image from "next/image";

type GalleryProps = {
  images: string[]; // primamo array putanja
};

export default function Gallery({ images }: GalleryProps) {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const showImage = (i: number) => {
    setIndex(i);
    setOpen(true);
  };

  const next = () => setIndex((index + 1) % images.length);
  const prev = () => setIndex((index - 1 + images.length) % images.length);

  if (!images || images.length === 0) return null;

  return (
    <>
      {/* Thumbnails */}
      <div className="flex gap-4 flex-wrap justify-center">
        {images.map((src, i) => (
          <div key={i} onClick={() => showImage(i)}>
            <Image
              src={src}
              width={180}
              height={130}
              alt=""
              className="cursor-pointer  border"
            />
          </div>
        ))}
      </div>

      {/* Fullscreen Viewer */}
      {open && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50">
          <button
            onClick={() => setOpen(false)}
            className="absolute top-5 right-5 text-white text-4xl"
          >
            ✕
          </button>

          <button
            onClick={prev}
            className="absolute left-5 text-white text-5xl"
          >
            ‹
          </button>

          <Image
            src={images[index]}
            alt=""
            width={1000}
            height={700}
            className="max-h-[90vh] w-auto rounded-lg"
          />

          <button
            onClick={next}
            className="absolute right-5 text-white text-5xl"
          >
            ›
          </button>
        </div>
      )}
    </>
  );
}
