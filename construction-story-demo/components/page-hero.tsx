"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import { Reveal } from "@/components/motion";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  intro: string;
  image: string;
  stats?: Array<{ label: string; value: string }>;
};

export function PageHero({ eyebrow, title, intro, image, stats }: PageHeroProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 110]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -70]);

  return (
    <section ref={ref} className="relative min-h-[88svh] overflow-hidden bg-white">
      <motion.div className="absolute inset-0" style={{ scale: imageScale, y: imageY }}>
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${image})` }} />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(17,17,17,0.24),rgba(17,17,17,0.52))]" />
      </motion.div>
      <div className="absolute inset-0 story-grid opacity-20" />

      <div className="section-shell relative flex min-h-[88svh] items-end pb-16 pt-28 md:pt-32 lg:items-center lg:pb-0">
        <motion.div style={{ y: contentY }} className="grid w-full gap-12 lg:grid-cols-[1fr_0.55fr] lg:items-end">
          <div className="max-w-4xl text-white">
            <Reveal>
              <p className="eyebrow text-white/68">{eyebrow}</p>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="display-title mt-6 max-w-4xl text-[50px] leading-[0.94] text-white sm:text-[64px] lg:text-[86px]">
                {title}
              </h1>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-7 max-w-2xl text-[17px] leading-8 text-white/80 md:text-[18px]">{intro}</p>
            </Reveal>
          </div>

          {stats ? (
            <Reveal delay={0.24} className="hidden lg:block">
              <div className="rounded-[30px] border border-white/15 bg-white/10 p-6 text-white backdrop-blur-md">
                <div className="grid gap-6 sm:grid-cols-2">
                  {stats.map((stat) => (
                    <div key={stat.label}>
                      <p className="text-[11px] uppercase tracking-[0.28em] text-white/58">{stat.label}</p>
                      <p className="mt-2 text-[34px] font-bold tracking-[-0.05em]">{stat.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ) : null}
        </motion.div>
      </div>
    </section>
  );
}
