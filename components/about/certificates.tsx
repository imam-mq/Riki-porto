"use client";

import Image from "next/image";
import { useState } from "react";
import type { ReactNode } from "react";
import { X } from "lucide-react";

type Certificate = {
  id: string;
  title: string;
  issuer: string;
  year: string;
  image: string;
};

const CERTIFICATES: Certificate[] = [
  {
    id: "walhi",
    title: "Sertifikat Program Magang",
    issuer: "WALHI Yogyakarta",
    year: "2023 - 2024",
    image: "/images/certificates/certificate-walhi.jpg",
  },
  {
    id: "bet",
    title: "Sertifikat Peserta BET",
    issuer: "WALHI Yogyakarta",
    year: "2023",
    image: "/images/certificates/certificate-bet.jpg",
  },
];

export function Certificates(): ReactNode {
  const [selected, setSelected] = useState<Certificate | null>(null);

  return (
    <div className="flex flex-col gap-5">
      <h2 className="font-serif text-[1.5rem] font-medium tracking-tight text-foreground sm:text-[1.75rem]">
        Certificates
      </h2>

      <div className="grid grid-cols-2 gap-4 sm:gap-5">
        {CERTIFICATES.map((cert) => (
          <button
            key={cert.id}
            type="button"
            onClick={() => setSelected(cert)}
            className="focus-ring group flex flex-col gap-3 rounded-2xl border border-foreground/8 bg-background p-3 text-left transition-colors hover:bg-foreground/3"
          >
            <div className="relative w-full overflow-hidden rounded-xl bg-foreground/5 ring-1 ring-foreground/5" style={{ aspectRatio: 800 / 565 }}>
              <Image
                src={cert.image}
                alt={cert.title}
                fill
                sizes="(min-width: 768px) 220px, 45vw"
                className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
              />
            </div>
            <div className="px-1 pb-1">
              <p className="text-[13px] font-medium tracking-tight text-foreground sm:text-[14px]">
                {cert.title}
              </p>
              <p className="text-[12px] tracking-tight text-foreground/55">
                {cert.issuer} &middot; {cert.year}
              </p>
            </div>
          </button>
        ))}
      </div>

      {selected ? (
        <div
          className="fixed inset-0 z-100 flex items-center justify-center bg-black/70 p-6 backdrop-blur-sm"
          onClick={() => setSelected(null)}
        >
          <div
            className="relative w-full max-w-2xl overflow-hidden rounded-2xl bg-background"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelected(null)}
              aria-label="Tutup"
              className="focus-ring absolute right-3 top-3 z-10 inline-flex h-8 w-8 items-center justify-center rounded-full bg-background/90 text-foreground shadow-sm"
            >
              <X className="h-4 w-4" />
            </button>
            <div className="relative w-full" style={{ aspectRatio: 800 / 565 }}>
              <Image
                src={selected.image}
                alt={selected.title}
                fill
                sizes="90vw"
                className="object-contain"
              />
            </div>
            <div className="px-5 py-4">
              <p className="text-[15px] font-medium tracking-tight text-foreground">
                {selected.title}
              </p>
              <p className="text-[13px] tracking-tight text-foreground/55">
                {selected.issuer} &middot; {selected.year}
              </p>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}