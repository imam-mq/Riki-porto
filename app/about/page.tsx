import { Education } from "@/components/about/education";
import { Experience } from "@/components/about/experience";
import { PolaroidStrip } from "@/components/about/polaroid-strip";
import { Skills } from "@/components/about/skills";
import { Stack } from "@/components/about/stack";
import { Certificates } from "@/components/about/certificates";
import { ContactCard } from "@/components/contact/contact-card";
import { FadeIn } from "@/components/ui/motion-primitives";
import { createMetadata } from "@/lib/metadata";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";

const PORTRAIT_SRC = "/images/about.jpeg";

export const metadata: Metadata = createMetadata({
  title: "Tentang Saya",
  description:
    "Dwi Tri Rezeki — lulusan Ilmu Komunikasi UAD Yogyakarta konsentrasi Broadcasting. Fotografer, videografer, dan editor visual dengan pengalaman product photography, video konten brand, dan film dokumenter.",
  path: "/about",
});

export default function AboutPage(): ReactNode {
  return (
    <main id="main-content" className="flex flex-1 flex-col">
      <section className="mx-auto w-full max-w-312 pt-40 sm:pt-56">
        <PolaroidStrip />
      </section>

      <section className="mx-auto w-full max-w-4xl px-6 pt-20 pb-16 sm:px-10 sm:pt-28 sm:pb-24">
        <FadeIn delay={0.5}>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-start lg:gap-16">
            {/* Kiri: heading + paragraf */}
            <div>
              <div className="mb-8 flex items-center gap-4">
                <h1 className="font-serif text-2xl font-semibold tracking-tight text-foreground sm:text-[1.75rem]">
                  About Me
                </h1>
                <span aria-hidden="true" className="h-px flex-1 bg-foreground/20" />
              </div>

              <div className="space-y-6 text-[17px] leading-[1.7] tracking-tight text-foreground/75 sm:text-[18px]">
                <p>
                  Saya Dwi Tri Rezeki, lulusan{" "}
                  <strong className="font-semibold text-foreground">
                    Ilmu Komunikasi Universitas Ahmad Dahlan Yogyakarta
                  </strong>{" "}
                  dengan konsentrasi di bidang{" "}
                  <strong className="font-semibold text-foreground">Broadcasting</strong>.
                </p>
                <p>
                  Saya merupakan orang kreatif yang menyukai{" "}
                  <strong className="font-semibold text-foreground">fotografi</strong>,{" "}
                  <strong className="font-semibold text-foreground">sinematografi</strong>, dan{" "}
                  <strong className="font-semibold text-foreground">musik</strong>. Ketertarikan ini
                  membawa saya untuk terus mengasah kemampuan visual storytelling di berbagai
                  proyek.
                </p>
                <p>
                  Dibawah ini anda akan melihat{" "}
                  <strong className="font-semibold text-foreground">
                    pengalaman kerja dan project saya yang beragam
                  </strong>
                  , mulai dari product photography, video konten brand, hingga produksi film
                  dokumenter.
                </p>
              </div>
            </div>

            {/* Kanan: photo card */}
            <div className="mx-auto w-full max-w-70 overflow-hidden rounded-3xl border border-foreground/10 bg-foreground/3 shadow-sm lg:mx-0">
              <div className="relative aspect-[4/5] w-full overflow-hidden">
                <Image
                  src={PORTRAIT_SRC}
                  alt="Dwi Tri Rezeki"
                  fill
                  sizes="(max-width: 1024px) 280px, 320px"
                  className="object-cover"
                />
              </div>
              <div className="px-5 py-4">
                <p className="font-serif text-[15px] font-medium tracking-tight text-foreground">
                  Dwi Tri Rezeki
                </p>
                <p className="mt-0.5 text-sm text-foreground/50">Fotografer &amp; Videografer</p>
              </div>
            </div>
          </div>
        </FadeIn>
      </section>

      <section className="mx-auto w-full max-w-[40rem] px-6 pb-20 sm:px-10 sm:pb-28">
        <FadeIn delay={0.1}>
          <div className="flex flex-col gap-10">
            <Experience />
            <Education />
            <Skills />
            <Stack />
            <Certificates />
          </div>
        </FadeIn>
      </section>

      <ContactCard />
      <div className="h-12 sm:h-16" />
    </main>
  );
}