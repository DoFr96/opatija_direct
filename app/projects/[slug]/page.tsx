import Gallery from "@/app/components/Gallery";
import Gallery1 from "@/app/components/Gallery1";
import VideoPlayer from "@/app/components/VideoPlayer";
import { projects } from "@/app/data/projects";
import Image from "next/image";

type ProjectPageProps = {
  // OVDJE je bitno: params je PROMISE
  params: Promise<{ slug: string }>;
};

export default async function ProjectPage({ params }: ProjectPageProps) {
  // prvo "raspakiramo" params
  const { slug } = await params;

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <section className="px-4 py-10 sm:px-8">
        <div className="mx-auto max-w-[800px]">
          <p>Projekt nije pronađen.</p>
        </div>
      </section>
    );
  }

  const {
    name,
    location,
    size,
    rooms,
    baths,
    images = [],
    description,
    image,
    video,
  } = project;

  return (
    <section className="px-4 py-10 sm:px-8">
      <div className="mx-auto max-w-[1000px] space-y-6">
        <h1 className="text-3xl font-semibold">{name}</h1>
        <p className="text-sm uppercase tracking-[0.12em] text-black/60">
          {location} • {size} • {rooms} sobe • {baths} kupaonice
        </p>
        <p className="text-lg leading-relaxed text-black/80">{description}</p>
        <Gallery1 images={images} />
        <VideoPlayer video={video} />
      </div>
    </section>
  );
}
