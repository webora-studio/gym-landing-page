"use client";

import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";

type PricingCardProps = {
  name: string;
  price: string;
  suffix: string;
  description: string;
  points: readonly string[];
  featured?: boolean;
};

export function PricingCard({
  name,
  price,
  suffix,
  description,
  points,
  featured = false,
}: PricingCardProps) {
  return (
    <motion.article
      whileHover={{ y: -6, scale: 1.01 }}
      transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
      className={`rounded-[30px] border p-7 ${
        featured
          ? "border-[#3B5CCC] bg-white shadow-[0_26px_90px_rgba(59,92,204,0.12)]"
          : "border-[#E6E8EB] bg-white shadow-[0_18px_60px_rgba(28,31,36,0.05)]"
      }`}
    >
      <div className="flex items-center justify-between">
        <p className="text-sm font-semibold text-[#1C1F24]">{name}</p>
        {featured ? (
          <span className="rounded-full bg-[#EDF2FF] px-3 py-1 text-xs text-[#3B5CCC]">
            Popular
          </span>
        ) : null}
      </div>
      <div className="mt-6 flex items-end gap-2">
        <span className="text-4xl font-semibold tracking-[-0.05em] text-[#1C1F24]">{price}</span>
        {suffix ? <span className="pb-1 text-sm text-[#606775]">{suffix}</span> : null}
      </div>
      <p className="mt-4 text-sm leading-7 text-[#606775]">{description}</p>
      <ul className="mt-7 space-y-3">
        {points.map((point) => (
          <li key={point} className="flex gap-3 text-sm leading-7 text-[#1C1F24]">
            <span className="mt-3 h-1.5 w-1.5 rounded-full bg-[#3B5CCC]" aria-hidden="true" />
            <span>{point}</span>
          </li>
        ))}
      </ul>
      <div className="mt-8">
        <Button variant={featured ? "primary" : "secondary"} className="w-full justify-center">
          Request Demo
        </Button>
      </div>
    </motion.article>
  );
}
