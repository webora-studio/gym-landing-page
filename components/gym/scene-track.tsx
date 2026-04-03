"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import { spaceGallery } from "@/data/gym";
import { SectionShell } from "@/components/gym/section-shell";

const story = [
  {
    label: "Scene one",
    title: "Editorial framing instead of a blocky section stack.",
    body: "Large images, sticky composition, and text timed to the scroll make the page feel directed rather than simply arranged.",
  },
  {
    label: "Scene two",
    title: "Spacing that breathes enough to feel expensive.",
    body: "The premium feeling comes from restraint as much as decoration. Larger vertical cadence and fewer competing boxes let the page hold tension.",
  },
  {
    label: "Scene three",
    title: "A photography-led layout that feels human made.",
    body: "The design now relies on image hierarchy, contrast, and pacing, which immediately gives it more realism and more client-facing value.",
  },
] as const;

export function SceneTrack() {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const yOne = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const yTwo = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);

  return (
    <SectionShell
      eyebrow="Scroll narrative"
      title="A scene-based section that makes the scroll feel intentional."
      intro="This is where the page shifts from nice-looking to presentation-worthy. The composition stays pinned while the story moves beside it."
    >
      <div ref={ref} className="grid gap-14 lg:grid-cols-[0.82fr_1.18fr]">
        <div className="space-y-24 lg:space-y-40">
          {story.map((item, index) => (
            <motion.article
              key={item.label}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.45 }}
              transition={{ duration: 0.8, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-[500px]"
            >
              <p className="eyebrow">{item.label}</p>
              <h3 className="mt-5 text-3xl font-semibold tracking-[-0.04em] text-foreground sm:text-[2.3rem]">
                {item.title}
              </h3>
              <p className="mt-5 text-base leading-8 text-muted-foreground">{item.body}</p>
            </motion.article>
          ))}
        </div>

        <div className="lg:sticky lg:top-24 lg:h-[78vh]">
          <div className="relative h-full min-h-[620px] overflow-hidden rounded-[40px] border border-white/8 bg-[#111110]">
            <motion.img
              style={{ y: yOne, scale }}
              src={spaceGallery[0]}
              alt="Premium training floor"
              className="absolute left-[6%] top-[8%] h-[42%] w-[52%] rounded-[28px] object-cover"
            />
            <motion.img
              style={{ y: yTwo }}
              src={spaceGallery[1]}
              alt="Focused personal training scene"
              className="absolute right-[6%] top-[14%] h-[34%] w-[32%] rounded-[28px] object-cover"
            />
            <motion.img
              style={{ y: yOne }}
              src={spaceGallery[2]}
              alt="Recovery and mobility session"
              className="absolute left-[10%] bottom-[10%] h-[32%] w-[30%] rounded-[28px] object-cover"
            />
            <motion.img
              style={{ y: yTwo }}
              src={spaceGallery[3]}
              alt="Premium gym atmosphere detail"
              className="absolute right-[8%] bottom-[8%] h-[40%] w-[46%] rounded-[28px] object-cover"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.02),transparent_25%,transparent_72%,rgba(220,161,96,0.06))]" />
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
