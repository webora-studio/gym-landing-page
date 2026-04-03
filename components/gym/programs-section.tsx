"use client";

import { motion } from "framer-motion";

import { programs } from "@/data/gym";
import { FadeUp } from "@/components/gym/motion";
import { SectionShell } from "@/components/gym/section-shell";

export function ProgramsSection() {
  return (
    <SectionShell
      id="programs"
      eyebrow="Programs"
      title="Training tracks with clearer hierarchy and much better visual presence."
      intro="Each program is now treated like its own mini campaign surface instead of a simple card, which gives the section more premium weight."
    >
      <div className="space-y-8">
        {programs.map((program, index) => (
          <FadeUp key={program.name} delay={index * 0.04}>
            <motion.article
              whileHover={{ y: -6 }}
              transition={{ duration: 0.24 }}
              className={`grid overflow-hidden rounded-[36px] border border-white/8 bg-[#111110] ${
                index % 2 === 0 ? "lg:grid-cols-[1.15fr_0.85fr]" : "lg:grid-cols-[0.85fr_1.15fr]"
              }`}
            >
              <div className={index % 2 === 0 ? "" : "lg:order-2"}>
                <img src={program.image} alt={program.name} className="h-full min-h-[340px] w-full object-cover" />
              </div>
              <div className={`flex items-end p-8 sm:p-10 ${index % 2 === 0 ? "" : "lg:order-1"}`}>
                <div className="max-w-[520px]">
                  <p className="eyebrow">{program.detail}</p>
                  <h3 className="mt-5 text-3xl font-semibold tracking-[-0.05em] text-foreground sm:text-[2.35rem]">
                    {program.name}
                  </h3>
                  <p className="mt-6 text-lg leading-8 text-muted-foreground">{program.description}</p>
                </div>
              </div>
            </motion.article>
          </FadeUp>
        ))}
      </div>
    </SectionShell>
  );
}
