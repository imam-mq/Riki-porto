"use client";

import {
  ArrowRight,
  Gem,
  Shirt,
  Footprints,
  Video,
  Film,
  ShoppingBag,
  Aperture,
} from "lucide-react";
import type { ComponentType, ReactNode } from "react";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { FadeIn } from "@/components/ui/motion-primitives";

type Project = {
  id: string;
  icon: ComponentType<{ className?: string }>;
  iconLabel: string;
  title: string;
  description: string;
  meta: string;
  tools: string[];
  driveUrl?: string;
  imageRatio: number;
  images: string[]; // bisa 1 atau lebih
  imageAlt: string;
};

const DRIVE_URL =
  "https://drive.google.com/file/d/1m--8uexowd9Enuj62-IyO4cmwyt_2Nah/view?usp=sharing";

const PROJECTS: Project[] = [
  {
    id: "sovia-jewelry",
    icon: Gem,
    iconLabel: "Sovia Jewelry",
    title:
      "Foto produk dan konten video untuk brand perhiasan cincin kustom dengan 15 cabang di Indonesia.",
    description:
      "Menangani product photography dan video konten sosial media untuk PT. Sovia Dwi Karya, termasuk konten promosi dan katalog produk.",
    meta: "Photographer & Videographer, 2025 - 2026",
    tools: ["Lightroom", "Photoshop", "Premiere Pro"],
    driveUrl: DRIVE_URL,
    imageRatio: 1024 / 768,
    images: [
      "/images/projects/sovia-jewelry-1.jpg",
      "/images/projects/sovia-jewelry-2.jpg",
    ],
    imageAlt: "Sovia Jewelry product photography",
  },
  {
    id: "batik-enom",
    icon: Shirt,
    iconLabel: "Batik Enom",
    title:
      "Product photography dan video konten untuk brand batik kontemporer yang berkolaborasi dengan pengrajin lokal Yogyakarta.",
    description:
      "Menghasilkan konten visual untuk kampanye 'Proud to Wear Batik', termasuk foto lifestyle dan video promosi di media sosial.",
    meta: "Photographer, Videographer & Editor, 2026 - Sekarang",
    tools: ["Lightroom", "Premiere Pro", "CapCut", "Canva"],
    driveUrl: DRIVE_URL,
    imageRatio: 1024 / 768,
    images: ["/images/projects/batik-enom.jpg"],
    imageAlt: "Batik Enom product photography",
  },
  {
    id: "raga-enom",
    icon: Footprints,
    iconLabel: "Raga Enom",
    title:
      "Dokumentasi visual merchandise dan event olahraga untuk brand apparel lari Raga Enom.",
    description:
      "Foto produk jersey dan aksesoris, serta liputan video event seperti Mandiri Jogja Marathon dengan konsep #movewithculture.",
    meta: "Photographer & Videographer, 2026",
    tools: ["Lightroom", "Premiere Pro", "CapCut"],
    driveUrl: DRIVE_URL,
    imageRatio: 1024 / 768,
    images: ["/images/projects/raga-enom.jpg"],
    imageAlt: "Raga Enom sportswear photography",
  },
  {
    id: "documentary-film",
    icon: Film,
    iconLabel: "Documentary Film",
    title:
      "Dua film dokumenter tentang isu sosial dan lingkungan: 'Nrimo Ing Pandum' dan 'Wedhi Obah'.",
    description:
      "Berperan sebagai cameraman dan editor dalam produksi film dokumenter independen yang mengangkat isu ekstraktif dan kehidupan masyarakat.",
    meta: "Cameraman & Editor, 2023 - 2024",
    tools: ["Premiere Pro", "DSLR Camera", "Boom Mic"],
    driveUrl: DRIVE_URL,
    imageRatio: 452 / 640,
    images: [
      "/images/projects/documentary-film-1.jpg",
      "/images/projects/documentary-film-2.jpg",
    ],
    imageAlt: "Documentary film poster",
  },
  {
    id: "game-show",
    icon: Video,
    iconLabel: "Game Show",
    title: "Dokumentasi produksi acara game show kampus.",
    description:
      "Bertugas sebagai cameraman dalam produksi acara game show, menangani pengambilan gambar multi-kamera.",
    meta: "Cameraman, 2023 - 2024",
    tools: ["DSLR Camera", "Tripod", "Multi-cam Setup"],
    driveUrl: DRIVE_URL,
    imageRatio: 1024 / 768,
    images: ["/images/projects/game-show.jpg"],
    imageAlt: "Game show production behind the scenes",
  },
  {
    id: "kicknovation",
    icon: ShoppingBag,
    iconLabel: "Kicknovation",
    title: "Foto produk sneakers untuk toko online multi-brand.",
    description:
      "Proyek freelance foto produk dan desain konten untuk katalog sepatu Nike, Adidas, dan Puma.",
    meta: "Freelance Product Photographer, 2023 - Sekarang",
    tools: ["Lightroom", "Photoshop", "Canva"],
    driveUrl: DRIVE_URL,
    imageRatio: 1024 / 768,
    images: ["/images/projects/kicknovation.jpg"],
    imageAlt: "Kicknovation sneaker product photography",
  },
  {
    id: "random-photo",
    icon: Aperture,
    iconLabel: "Random Photo",
    title: "Koleksi foto personal: nature, street, dan stage photography.",
    description:
      "Eksplorasi visual pribadi di luar proyek klien — dari lanskap alam, kehidupan jalanan pasar tradisional, hingga dokumentasi panggung musik.",
    meta: "Personal Work, 2023 - 2026",
    tools: ["Lightroom", "Photoshop"],
    driveUrl: DRIVE_URL,
    imageRatio: 1024 / 768,
    images: ["/images/projects/random-photo.jpg"],
    imageAlt: "Personal photography collection",
  },
];

export type ProjectsProps = {
  withHeadline?: boolean;
  viewMoreVisible?: boolean;
};

export function Projects({
  withHeadline = false,
  viewMoreVisible = false,
}: ProjectsProps): ReactNode {
  const items = viewMoreVisible ? PROJECTS.slice(0, 4) : PROJECTS;

  return (
    <section className="relative w-full">
      <div className="mx-auto w-full max-w-275 px-6 sm:px-10">
        {withHeadline ? (
          <FadeIn className="flex flex-col items-center gap-5 pt-12 pb-10 text-center sm:pt-20 sm:pb-14">
            <h2 className="font-serif text-[2.5rem] font-medium leading-[1.05] tracking-tight text-foreground md:text-[3rem] lg:text-[3.5rem]">
              My projects
            </h2>
            <p className="max-w-[33ch] text-[18px] leading-[1.45] tracking-tight text-foreground/65 sm:text-[20px]">
              Kumpulan karya terbaik dan proyek visual yang telah berhasil saya luncurkan dan banggakan.
            </p>
          </FadeIn>
        ) : null}

        <div className="columns-1 gap-6 md:columns-2 md:gap-7">
          {items.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {viewMoreVisible ? (
          <div className="mt-12 flex justify-center sm:mt-16">
            <Link
              href="/projects"
              className="border border-foreground/8 focus-ring group inline-flex cursor-pointer items-center gap-2 rounded-xl bg-background px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-foreground/5"
            >
              View all projects
              <ArrowRight
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </Link>
          </div>
        ) : null}
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}): ReactNode {
  const Icon = project.icon;
  const [activeImage, setActiveImage] = useState(0);
  const hasMultiple = project.images.length > 1;

  return (
    <FadeIn
      delay={Math.min(index * 0.06, 0.3)}
      className="mb-6 break-inside-avoid md:mb-7"
    >
      <article className="project-card flex flex-col gap-4 rounded-3xl border border-foreground/8 bg-background p-3 sm:p-3.5">
        <header className="flex items-center justify-between gap-2.5 px-1 pt-2">
          <div className="flex items-center gap-2.5">
            <span className="border-foreground/10 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border bg-background">
              <Icon className="h-3.5 w-3.5 text-foreground" aria-hidden="true" />
            </span>
            <span className="text-sm font-medium tracking-tight text-foreground">
              {project.iconLabel}
            </span>
          </div>

          {project.driveUrl ? (
            <Link
              href={project.driveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Buka folder Google Drive ${project.iconLabel}`}
              onClick={(e) => e.stopPropagation()}
              className="focus-ring border-foreground/10 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border bg-background transition-colors hover:bg-foreground/5"
            >
              <GoogleDriveIcon className="h-4 w-4" />
            </Link>
          ) : null}
        </header>

        <div
          className="project-card__image ring-foreground/5 relative w-full cursor-pointer overflow-hidden rounded-2xl bg-foreground/5 ring-1"
          style={{ aspectRatio: project.imageRatio }}
          onClick={() =>
            hasMultiple &&
            setActiveImage((prev) => (prev + 1) % project.images.length)
          }
        >
          <div className="project-card__image-inner">
            <Image
              src={project.images[activeImage] ?? project.images[0]}
              alt={project.imageAlt}
              fill
              sizes="(min-width: 1024px) 540px, (min-width: 768px) 45vw, 100vw"
              className="object-cover transition-opacity duration-300"
              priority={index < 2}
            />
          </div>

          {hasMultiple ? (
            <div className="absolute bottom-2.5 left-1/2 flex -translate-x-1/2 gap-1.5">
              {project.images.map((_, i) => (
                <span
                  key={i}
                  className={`h-1.5 w-1.5 rounded-full transition-colors ${
                    i === activeImage ? "bg-white" : "bg-white/40"
                  }`}
                />
              ))}
            </div>
          ) : null}
        </div>

        <div className="flex flex-col gap-2.5 px-1 pb-1">
          <h3 className="text-[20px] font-medium leading-[1.2] tracking-tight text-foreground sm:text-[22px]">
            {project.title}
          </h3>
          <p className="text-[14px] leading-normal tracking-tight text-foreground/65 sm:text-[15px]">
            {project.description}
          </p>
        </div>

        <div className="flex flex-wrap gap-1.5 px-1 pb-1">
          {project.tools.map((tool) => (
            <span
              key={tool}
              className="rounded-full border border-foreground/8 bg-foreground/3 px-2.5 py-1 text-[11px] font-medium tracking-tight text-foreground/70"
            >
              {tool}
            </span>
          ))}
        </div>

        <p className="px-1 pb-2 text-[12px] tracking-tight text-foreground/50">
          {project.meta}
        </p>
      </article>
    </FadeIn>
  );
}

function GoogleDriveIcon({ className }: { className?: string }): ReactNode {
  return (
    <svg viewBox="0 0 87.3 78" className={className} aria-hidden="true">
      <path
        d="M6.6 66.85l3.85 6.65c.8 1.4 1.95 2.5 3.3 3.3l13.75-23.8h-27.5c0 1.55.4 3.1 1.2 4.5z"
        fill="#0066da"
      />
      <path
        d="M43.65 25L29.9 1.2c-1.35.8-2.5 1.9-3.3 3.3L1.2 47.5c-.8 1.4-1.2 2.95-1.2 4.5h27.5z"
        fill="#00ac47"
      />
      <path
        d="M73.55 76.8c1.35-.8 2.5-1.9 3.3-3.3l1.6-2.75L86 57.5c.8-1.4 1.2-2.95 1.2-4.5H59.7l5.85 11.5z"
        fill="#ea4335"
      />
      <path
        d="M43.65 25L57.4 1.2c-1.35-.8-2.9-1.2-4.5-1.2H34.4c-1.6 0-3.15.4-4.5 1.2z"
        fill="#00832d"
      />
      <path
        d="M59.7 53H27.5l-13.75 23.8c1.35.8 2.9 1.2 4.5 1.2h50.7c1.6 0 3.15-.4 4.5-1.2z"
        fill="#2684fc"
      />
      <path
        d="M73.4 26.5L60.6 4.5c-.8-1.4-1.95-2.5-3.3-3.3L43.65 25 59.7 53h27.45c0-1.55-.4-3.1-1.2-4.5z"
        fill="#ffba00"
      />
    </svg>
  );
}