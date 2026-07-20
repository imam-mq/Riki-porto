"use client";

import {  Download } from "lucide-react";
import { LayoutGroup, motion } from "motion/react";
import type { ReactNode } from "react";

import { ContactButton } from "@/components/contact/contact-button";

const EASE = [0.22, 1, 0.36, 1] as const;

export function HeroCtas(): ReactNode {
  return (
    <LayoutGroup>
      <motion.div
        layout
        transition={{ layout: { duration: 0.55, ease: EASE } }}
        className="mt-2 flex flex-wrap items-center gap-3"
      >
        <ContactButton />

        <motion.div
          layout
          transition={{ layout: { duration: 0.55, ease: EASE } }}
        >
          <a
            href="/resume.pdf"
            download="Resume_Portfolio.pdf"
            className="group inline-flex cursor-pointer items-center gap-2 rounded-xl bg-orange-600 px-5 py-2.5 text-sm font-medium text-white shadow-lg transition-colors hover:bg-orange-700"
          >
            Download Resume
            <Download
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5"
              aria-hidden="true"
            />
          </a>
        </motion.div>
      </motion.div>
    </LayoutGroup>
  );
}
