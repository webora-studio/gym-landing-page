"use client";

import { motion } from "framer-motion";

import { FadeUp } from "@/components/landing/motion";

type FeatureBlockProps = {
  eyebrow: string;
  title: string;
  description: string;
  bullets: readonly string[];
  preview: {
    label: string;
    items: readonly string[];
  };
  reverse?: boolean;
};

export function FeatureBlock({
  eyebrow,
  title,
  description,
  bullets,
  preview,
  reverse = false,
}: FeatureBlockProps) {
  return (
    <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
      <FadeUp className={reverse ? "lg:order-2" : ""}>
        <div className="max-w-[520px]">
          <p className="text-[11px] font-medium uppercase tracking-[0.24em] text-[#7A818C]">
            {eyebrow}
          </p>
          <h3 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-[#1C1F24] sm:text-[2.35rem]">
            {title}
          </h3>
          <p className="mt-5 text-base leading-8 text-[#606775]">{description}</p>
          <ul className="mt-8 space-y-4">
            {bullets.map((bullet) => (
              <li key={bullet} className="flex gap-3 text-sm leading-7 text-[#1C1F24]">
                <span className="mt-3 h-1.5 w-1.5 rounded-full bg-[#3B5CCC]" aria-hidden="true" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        </div>
      </FadeUp>

      <FadeUp className={reverse ? "lg:order-1" : ""} delay={0.08}>
        <motion.div
          whileHover={{ y: -6 }}
          transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-[30px] border border-[#E6E8EB] bg-white p-5 shadow-[0_20px_70px_rgba(28,31,36,0.06)]"
        >
          <div className="rounded-[24px] border border-[#E6E8EB] bg-[#FAFBFC] p-5">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-[#1C1F24]">{preview.label}</p>
              <span className="text-xs text-[#7A818C]">Preview</span>
            </div>
            <div className="mt-5 space-y-3">
              {preview.items.map((item, index) => (
                <div
                  key={item}
                  className="grid grid-cols-[36px_1fr] items-center gap-3 rounded-[18px] border border-[#E6E8EB] bg-white px-3 py-3"
                >
                  <div className="text-sm font-semibold text-[#3B5CCC]">{`0${index + 1}`}</div>
                  <div className="text-sm text-[#1C1F24]">{item}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </FadeUp>
    </div>
  );
}
