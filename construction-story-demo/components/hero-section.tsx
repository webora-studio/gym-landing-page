"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";

import { Reveal } from "@/components/motion";

const heroImage =
  "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1800&q=80";
const sideImage =
  "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1000&q=80";

export function HeroSection() {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.14]);
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -90]);
  const asideY = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const fade = useTransform(scrollYProgress, [0, 0.85], [1, 0.25]);

  return (
    <section id="home" ref={ref} className="relative min-h-[115svh] overflow-hidden bg-white">
      <motion.div className="absolute inset-0" style={{ scale: heroScale, y: heroY }}>
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${heroImage})` }} />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(17,17,17,0.18),rgba(17,17,17,0.48))]" />
      </motion.div>

      <div className="absolute inset-0 story-grid opacity-25" />

      <div className="section-shell relative flex min-h-[115svh] items-end pb-20 pt-28 md:pt-32 lg:items-center lg:pb-0">
        <motion.div style={{ y: contentY, opacity: fade }} className="grid w-full gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
          <div className="max-w-4xl text-white">
            <Reveal>
              <p className="eyebrow text-white/72">Premium construction and architectural execution</p>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="display-title mt-6 max-w-4xl text-[52px] leading-[0.92] text-white sm:text-[68px] lg:text-[96px]">
                We build spaces that last generations.
              </h1>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-7 max-w-2xl text-[17px] leading-8 text-white/80 md:text-[18px]">
                Modern construction solutions with precision, trust, and a cinematic approach to form, material, and delivery.
              </p>
            </Reveal>
            <Reveal delay={0.24} className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link href="/projects" className="rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[#111111] transition hover:bg-[#f1f1f1]">
                View Projects
              </Link>
              <Link href="/contact" className="rounded-full border border-white/30 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/16">
                Get Quote
              </Link>
            </Reveal>
          </div>

          <motion.div style={{ y: asideY }} className="hidden lg:block">
            <Reveal delay={0.28}>
              <div className="ml-auto max-w-md rounded-[30px] border border-white/18 bg-white/10 p-5 backdrop-blur-md">
                <div className="overflow-hidden rounded-[22px]">
                  <img src={sideImage} alt="Architectural construction detail" className="h-[240px] w-full object-cover" />
                </div>
                <div className="mt-5 grid grid-cols-2 gap-4 text-white">
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.28em] text-white/58">Projects</p>
                    <p className="mt-2 text-3xl font-bold tracking-[-0.05em]">120+</p>
                  </div>
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.28em] text-white/58">Delivery</p>
                    <p className="mt-2 text-3xl font-bold tracking-[-0.05em]">98%</p>
                  </div>
                </div>
              </div>
            </Reveal>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
