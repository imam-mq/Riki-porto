"use client";

import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { useRef, useSyncExternalStore, type ReactNode } from "react";
import Image from "next/image";

type MediaItem = {
  id: string;
  type: "image" | "video";
  src: string;
  rotate: number;
  alt?: string;
};

// Ganti/isi array ini dengan foto & video hasil karya kamu.
// Urutan bebas — boleh selang-seling image/video sesuai yang paling
// "menjual" untuk ditampilkan duluan.
const MEDIA: MediaItem[] = [
  { id: "a", type: "video", src: "/videos/projects/raga-enom.mp4", rotate: -8 },
  { id: "b", type: "image", src: "/images/projects/raga-enom-1.jpg", rotate: 6, alt: "Raga Enom — product shot" },
  { id: "c", type: "image", src: "/images/projects/raga-enom-1.jpg", rotate: -4, alt: "Project 2" },
  { id: "d", type: "video", src: "/videos/projects/raga-enom.mp4", rotate: 7 },
  { id: "e", type: "image", src: "/images/projects/raga-enom-1.jpg", rotate: -6, alt: "Project 4" },
  { id: "f", type: "video", src: "/videos/projects/raga-enom.mp4", rotate: 5, alt: "Project 5" },
];

const EASE = [0.22, 1, 0.36, 1] as const;

function MediaFill({ item }: { item: MediaItem }): ReactNode {
  if (item.type === "video") {
    return (
      <video
        src={item.src}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="h-full w-full object-cover"
      />
    );
  }

  return (
    <Image
      src={item.src}
      alt={item.alt ?? ""}
      fill
      sizes="(max-width: 640px) 40vw, 180px"
      className="object-cover"
    />
  );
}

function PolaroidCard({
  item,
  index,
}: {
  item: MediaItem;
  index: number;
}): ReactNode {
  const ref = useRef<HTMLDivElement | null>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 220, damping: 18, mass: 0.6 });
  const sy = useSpring(my, { stiffness: 220, damping: 18, mass: 0.6 });
  const tx = useTransform(sx, (v) => `${v}px`);
  const ty = useTransform(sy, (v) => `${v}px`);

  const handleMove = (e: React.PointerEvent<HTMLDivElement>): void => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = e.clientX - cx;
    const dy = e.clientY - cy;
    const max = 18;
    const k = 0.25;
    mx.set(Math.max(-max, Math.min(max, dx * k)));
    my.set(Math.max(-max, Math.min(max, dy * k)));
  };

  const handleLeave = (): void => {
    mx.set(0);
    my.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
      initial={{ opacity: 0, y: -120, filter: "blur(18px)", rotate: item.rotate }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)", rotate: item.rotate }}
      transition={{
        duration: 0.9,
        delay: 0.05 + index * 0.08,
        ease: EASE,
      }}
      style={{
        x: tx,
        y: ty,
        rotate: item.rotate,
      }}
      className="relative aspect-[3/4] w-[clamp(6rem,11vw,9rem)] shrink-0 overflow-hidden rounded-2xl border-6 border-neutral-300/40 bg-white p-1.5 dark:border-white/15 dark:bg-neutral-900"
    >
      <div className="relative h-full w-full overflow-hidden rounded-xl bg-neutral-100 dark:bg-neutral-800">
        <MediaFill item={item} />
        {item.type === "video" ? (
          <span
            aria-hidden="true"
            className="absolute bottom-1.5 right-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-sm"
          >
            <svg viewBox="0 0 24 24" className="h-2.5 w-2.5 fill-current">
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
        ) : null}
      </div>
    </motion.div>
  );
}

export function PolaroidStrip(): ReactNode {
  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );

  if (!mounted) {
    return <div aria-hidden="true" className="h-[clamp(8rem,15vw,12rem)] w-full" />;
  }

  return (
    <div className="flex flex-wrap w-full items-start justify-center gap-1 px-4 sm:gap-1.5 sm:px-8">
      {MEDIA.map((item, i) => (
        <PolaroidCard key={item.id} item={item} index={i} />
      ))}
    </div>
  );
}