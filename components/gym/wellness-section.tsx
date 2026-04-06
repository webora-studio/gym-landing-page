"use client";

import { motion } from "framer-motion";

import { experiencePanels, spaceGallery } from "@/data/gym";
import { FadeUp } from "@/components/gym/motion";
import { SectionShell } from "@/components/gym/section-shell";

export function WellnessSection() {
  return (
    <SectionShell
      id="spaces"
      eyebrow="Club Spaces"
      title="A space designed for those who demand more."
      intro="Beyond just a gym, Forge House is a hospitality-led experience where performance meets refined aesthetics."
    >
      <div className="grid gap-6 lg:grid-cols-[1.02fr_0.98fr]">
        <FadeUp>
          <motion.div
            whileHover={{ y: -6 }}
            transition={{ duration: 0.24 }}
            className="overflow-hidden rounded-[38px] border border-white/8 bg-[#111110]"
          >
            <img
              src={spaceGallery[0]}
              alt="Large premium gym interior"
              className="h-[620px] w-full object-cover"
            />
            <div className="grid gap-6 p-8 sm:grid-cols-2 sm:p-10">
              <div>
                <p className="eyebrow">Atmosphere</p>
                <p className="mt-4 text-2xl leading-[1.55] tracking-[-0.03em] text-foreground">
                  A hospitality-driven environment built for high performance.
                </p>
              </div>
              <p className="text-base leading-8 text-muted-foreground">
                Meticulously curated lighting, premium textures, and a calm, focused environment
                create a space where you can perform at your absolute peak without distraction.
              </p>
            </div>
          </motion.div>
        </FadeUp>

        <div className="grid gap-6">
          <FadeUp delay={0.05}>
            <div className="grid overflow-hidden rounded-[34px] border border-white/8 bg-[#111110] sm:grid-cols-[0.92fr_1.08fr]">
              <img
                src={experiencePanels[2].image}
                alt="Recovery lounge and wellness concept"
                className="h-full min-h-[290px] w-full object-cover"
              />
              <div className="p-7 sm:p-8">
                <p className="eyebrow">Elite Recovery Suite</p>
                <h3 className="mt-4 text-2xl font-semibold tracking-[-0.04em] text-foreground">
                  Recovery as a Performance Pillar
                </h3>
                <p className="mt-4 text-base leading-8 text-muted-foreground">
                  Our recovery facilities aren't an afterthought. They are a core pillar of your
                  training, ensuring you stay at the top of your game and recover faster between
                  sessions.
                </p>
              </div>
            </div>
          </FadeUp>
          <div className="grid gap-6 sm:grid-cols-2">
            {[spaceGallery[2], spaceGallery[3]].map((image, index) => (
              <FadeUp key={image} delay={0.08 + index * 0.06}>
                <div className="overflow-hidden rounded-[30px] border border-white/8 bg-[#111110]">
                  <img
                    src={image}
                    alt={index === 0 ? "Member workout detail" : "Premium club atmosphere"}
                    className="h-[250px] w-full object-cover"
                  />
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
