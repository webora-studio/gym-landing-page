"use client";

import { motion } from "framer-motion";

type TestimonialCardProps = {
  quote: string;
  name: string;
  role: string;
  large?: boolean;
};

export function TestimonialCard({ quote, name, role, large = false }: TestimonialCardProps) {
  return (
    <motion.blockquote
      whileHover={{ y: -5 }}
      transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
      className={`rounded-[28px] border border-[#E6E8EB] bg-white shadow-[0_18px_60px_rgba(28,31,36,0.05)] ${
        large ? "p-8 sm:p-10" : "p-7"
      }`}
    >
      <p
        className={`tracking-[-0.02em] text-[#1C1F24] ${
          large ? "text-2xl leading-[1.55] sm:text-[1.85rem]" : "text-lg leading-8"
        }`}
      >
        “{quote}”
      </p>
      <footer className="mt-8 border-t border-[#E6E8EB] pt-5">
        <p className="text-sm font-semibold text-[#1C1F24]">{name}</p>
        <p className="mt-1 text-sm text-[#606775]">{role}</p>
      </footer>
    </motion.blockquote>
  );
}
