"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import { Reveal } from "@/components/motion";
import { cn } from "@/lib/utils";

type Chapter = {
  index?: string;
  title: string;
  text: string;
  image: string;
};

function ChapterVisual({
  chapter,
  progress,
  activeRange,
}: {
  chapter: Chapter;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
  activeRange: [number, number, number];
}) {
  const opacity = useTransform(progress, activeRange, [0, 1, 0]);
  const scale = useTransform(progress, activeRange, [1.12, 1, 0.96]);
  const y = useTransform(progress, activeRange, [80, 0, -40]);

  return (
    <motion.div
      style={{ opacity, scale, y }}
      className="absolute inset-0 overflow-hidden rounded-[34px]"
    >
      <img src={chapter.image} alt={chapter.title} className="h-full w-full object-cover" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(17,17,17,0.08),rgba(17,17,17,0.38))]" />
      <div className="absolute inset-x-0 bottom-0 p-6 text-white md:p-8">
        {chapter.index ? (
          <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-white/65">
            {chapter.index}
          </p>
        ) : null}
        <h3 className="mt-4 max-w-md text-[28px] font-bold leading-[1.02] tracking-[-0.04em] md:text-[36px]">
          {chapter.title}
        </h3>
      </div>
    </motion.div>
  );
}

function ChapterTextBlock({
  chapter,
  progress,
  activeRange,
  alignEnd = false,
}: {
  chapter: Chapter;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
  activeRange: [number, number, number];
  alignEnd?: boolean;
}) {
  const opacity = useTransform(progress, activeRange, [0.35, 1, 0.45]);
  const y = useTransform(progress, activeRange, [70, 0, -30]);

  return (
    <div
      className={cn(
        "flex min-h-[82vh] items-center",
        alignEnd ? "justify-end" : "justify-start",
      )}
    >
      <motion.article
        style={{ opacity, y }}
        className="max-w-xl rounded-[30px] border border-[#e5e5e5] bg-white/90 p-7 shadow-[0_22px_70px_rgba(17,17,17,0.06)] backdrop-blur-sm md:p-8"
      >
        {chapter.index ? <p className="eyebrow">{chapter.index}</p> : null}
        <h3 className="mt-5 text-[30px] font-bold leading-[1.04] tracking-[-0.04em] text-[#111111] md:text-[38px]">
          {chapter.title}
        </h3>
        <p className="mt-5 text-[17px] leading-8 text-[#555555]">{chapter.text}</p>
      </motion.article>
    </div>
  );
}

export function ChapterStack({
  eyebrow,
  heading,
  intro,
  chapters,
}: {
  eyebrow: string;
  heading: string;
  intro: string;
  chapters: readonly Chapter[];
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  return (
    <section ref={ref} className="bg-white py-24 md:py-32">
      <div className="section-shell">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow">{eyebrow}</p>
            <h2 className="display-title mt-6 text-[38px] leading-[1.02] md:text-[56px]">
              {heading}
            </h2>
            <p className="mx-auto mt-7 max-w-2xl text-[17px] leading-8 text-[#555555]">
              {intro}
            </p>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div className="relative hidden lg:block">
            <div className="sticky top-28">
              <div className="relative h-[72vh] overflow-hidden rounded-[38px] border border-[#e5e5e5] bg-[#f4f4f4] shadow-panel">
                <div className="absolute inset-x-0 top-0 z-20 flex items-center justify-between border-b border-white/12 px-7 py-5 text-white">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-white/68">
                    Scroll narrative
                  </p>
                  <p className="text-sm text-white/60">{chapters.length} chapters</p>
                </div>

                {chapters.map((chapter, index) => {
                  const start = Math.max(0, (index - 0.55) / chapters.length);
                  const middle = index / chapters.length + 0.12;
                  const end = Math.min(1, (index + 0.9) / chapters.length);

                  return (
                    <ChapterVisual
                      key={chapter.title}
                      chapter={chapter}
                      progress={scrollYProgress}
                      activeRange={[start, middle, end]}
                    />
                  );
                })}

                <div className="pointer-events-none absolute inset-y-0 left-0 w-[1px] bg-white/14" />
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute left-4 top-0 hidden h-full w-px bg-[#e6e6e6] lg:block" />
            {chapters.map((chapter, index) => {
              const start = Math.max(0, (index - 0.45) / chapters.length);
              const middle = index / chapters.length + 0.12;
              const end = Math.min(1, (index + 0.85) / chapters.length);

              return (
                <div key={chapter.title} className="relative lg:pl-12">
                  <div className="absolute left-0 top-1/2 hidden h-4 w-4 -translate-y-1/2 rounded-full border border-[#111111] bg-white lg:block" />
                  <ChapterTextBlock
                    chapter={chapter}
                    progress={scrollYProgress}
                    activeRange={[start, middle, end]}
                    alignEnd={index % 2 === 1}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
