"use client";

import type { ReactNode } from "react";
import Image from "next/image";
import { HeroCtas } from "./hero-ctas";
import { TypeAnimation } from 'react-type-animation';
import { FadeIn, ScaleUnblur } from "@/components/ui/motion-primitives";

const PORTRAIT_SRC = "/images/dwi-portrait.jpg";

export function Hero(): ReactNode {
  return (
    <section className="relative w-full">
      <div className="mx-auto w-full max-w-275 px-6 pt-44 pb-24 sm:px-10 sm:pt-56 sm:pb-32">
        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-8">
          <FadeIn className="flex flex-col gap-4">
            <p className="text-[20px] leading-tight tracking-tight font-medium text-foreground">
              Hello
              <span aria-hidden="true" className="mx-0.5">
                👋
              </span>
              , I&rsquo;m Dwi
            </p>

            <h1 className="text-[2.75rem] font-medium leading-[1.05] tracking-tight text-foreground md:text-[2.5rem] lg:text-[3.65rem]">
              <span className="block whitespace-nowrap">
                Visual Storyteller &
              </span>
              <TypeAnimation
                sequence={[
                  'Video Editor',
                  2000, 
                  'Photo Editor',
                  2000,
                  'Content Creator',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                className="block whitespace-nowrap text-muted-foreground"
                repeat={Infinity}
              />
            </h1>

            <p className="max-w-[34ch] text-[22px] leading-[1.4] tracking-tight text-foreground/65">
              Bercerita melalui lensa dan suntingan visual yang tenang, matang, dan berkesan.
            </p>

            <HeroCtas />
          </FadeIn>

          <ScaleUnblur className="flex justify-stretch md:justify-end">
            <div className="relative aspect-[2/3] w-full max-w-80 md:max-w-90 overflow-hidden rounded-4xl border border-foreground/8 bg-background p-1.5 shadow-sm">
              <div className="relative h-full w-full overflow-hidden rounded-[1.6rem]">
                <Image
                  src={PORTRAIT_SRC}
                  alt="Dwi Tri Rezeki portrait"
                  fill
                  priority
                  sizes="(min-width: 768px) 360px, 100vw"
                  className="object-cover object-top"
                />
              </div>
            </div>
          </ScaleUnblur>
        </div>
      </div>
    </section>
  );
}