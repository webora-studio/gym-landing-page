"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import { Reveal } from "@/components/motion";
import { processSteps } from "@/data/site";

export function ProcessTimeline() {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 70%", "end 60%"],
  });

  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section className="bg-[#f8f8f8] py-24 md:py-32">
      <div className="section-shell grid gap-14 lg:grid-cols-[0.7fr_1fr] lg:gap-20">
        <Reveal>
          <div className="lg:sticky lg:top-28">
            <p className="eyebrow">Process timeline</p>
            <h2 className="display-title mt-6 text-[38px] leading-[1.02] md:text-[56px]">
              A measured path from concept alignment to final delivery.
            </h2>
            <p className="mt-7 max-w-md text-[17px] leading-8 text-[#555555]">
              The process is intentionally paced. Each phase prepares the next, reducing surprises and protecting quality across the entire build.
            </p>
          </div>
        </Reveal>

        <div ref={ref} className="relative pl-8 md:pl-12">
          <div className="absolute left-0 top-0 h-full w-px bg-[#d7d7d7]" />
          <motion.div style={{ scaleY: lineScale }} className="absolute left-0 top-0 h-full w-px origin-top bg-[#111111]" />

          <div className="space-y-12">
            {processSteps.map((step, index) => (
              <Reveal key={step.id} delay={index * 0.08} className="relative rounded-[28px] border border-[#e5e5e5] bg-white p-7 shadow-[0_18px_50px_rgba(17,17,17,0.04)] md:p-8">
                <span className="absolute -left-[34px] top-10 h-4 w-4 rounded-full border border-[#111111] bg-white md:-left-[42px]" />
                <p className="eyebrow">{step.id}</p>
                <h3 className="mt-4 text-[30px] font-bold tracking-[-0.04em] text-[#111111]">{step.title}</h3>
                <p className="mt-4 text-[17px] leading-8 text-[#555555]">{step.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
