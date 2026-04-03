"use client";

import { motion } from "framer-motion";

import { experiencePanels } from "@/data/gym";
import { FadeUp } from "@/components/gym/motion";
import { SectionShell } from "@/components/gym/section-shell";

export function PhilosophySection() {
  return (
    <SectionShell
      id="experience"
      eyebrow="First impression"
      title="The premium feeling should be visible before anyone reads the copy."
      intro="This version leans into art direction, photography, and spatial rhythm so the landing page feels more like a designed brand world than a generic fitness build."
      className="pt-8"
    >
      <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <FadeUp>
          <div className="overflow-hidden rounded-[36px] border border-white/8 bg-[#111110]">
            <img
              src={experiencePanels[0].image}
              alt={experiencePanels[0].title}
              className="h-[560px] w-full object-cover"
            />
            <div className="p-8 sm:p-10">
              <p className="eyebrow">{experiencePanels[0].title}</p>
              <p className="mt-5 max-w-[520px] text-2xl leading-[1.6] tracking-[-0.03em] text-foreground sm:text-[2rem]">
                {experiencePanels[0].body}
              </p>
            </div>
          </div>
        </FadeUp>

        <div className="grid gap-6">
          {experiencePanels.slice(1).map((panel, index) => (
            <FadeUp key={panel.title} delay={index * 0.08}>
              <motion.article
                whileHover={{ y: -6 }}
                transition={{ duration: 0.26 }}
                className="grid overflow-hidden rounded-[32px] border border-white/8 bg-[#111110] sm:grid-cols-[0.9fr_1.1fr]"
              >
                <img src={panel.image} alt={panel.title} className="h-full min-h-[260px] w-full object-cover" />
                <div className="p-7 sm:p-8">
                  <p className="eyebrow">{panel.title}</p>
                  <p className="mt-5 text-lg leading-8 text-foreground">{panel.body}</p>
                </div>
              </motion.article>
            </FadeUp>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
