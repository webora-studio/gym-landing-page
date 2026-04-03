"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import { heroImages, heroStats } from "@/data/gym";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export function Hero() {
  const ref = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 70]);

  return (
    <section ref={ref} className="relative min-h-[115svh] overflow-hidden">
      <motion.div style={{ y: imageY }} className="absolute inset-0">
        <img
          src={heroImages.primary}
          alt="Premium gym interior with focused athletic training"
          className="h-full w-full object-cover"
        />
      </motion.div>
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,10,10,0.45),rgba(10,10,10,0.65)_38%,rgba(10,10,10,0.92)_78%,#090909_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(220,161,96,0.18),transparent_30%)]" />

      <Container className="relative z-10 flex min-h-[115svh] flex-col justify-between pt-28 pb-12 sm:pt-32 sm:pb-16">
        <motion.div
          style={{ y: contentY }}
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-[760px]"
        >
          <p className="eyebrow text-white/70">Premium gym and recovery club</p>
          <div className="mt-6 gold-line" />
          <h1 className="mt-7 text-balance text-[4rem] font-semibold leading-[0.9] tracking-[-0.085em] text-white sm:text-[5.8rem] lg:text-[7.6rem]">
            <span className="luxury-title mr-3 inline-block text-[0.88em] text-[rgba(244,232,214,0.92)]">
              The club
            </span>
            people talk about after their first visit.
          </h1>
          <p className="mt-7 max-w-[620px] text-lg leading-8 text-white/72 sm:text-xl">
            Join a premium fitness club designed to help busy professionals get stronger, look
            better, and stay consistent with expert coaching, recovery spaces, and a member
            experience that feels worth coming back to.
          </p>
          <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row">
            <Link href="#contact">
              <Button>Book a Visit</Button>
            </Link>
            <Link href="#experience">
              <Button variant="secondary">Explore Membership</Button>
            </Link>
          </div>
        </motion.div>

        <div className="grid gap-6 xl:grid-cols-[0.9fr_1.1fr] xl:items-end">
          <div className="grid gap-4 sm:grid-cols-3">
            {heroStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.22 + index * 0.08, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                className="rounded-[28px] border border-white/12 bg-black/20 px-5 py-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-md"
              >
                <p className="text-3xl font-semibold tracking-[-0.06em] text-white">{stat.value}</p>
                <p className="mt-2 text-sm text-white/62">{stat.label}</p>
              </motion.div>
            ))}
          </div>

          <div className="grid gap-4 sm:grid-cols-[1.1fr_0.9fr]">
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
              className="overflow-hidden rounded-[30px] border border-white/10 bg-black/20 backdrop-blur-sm"
            >
              <img
                src={heroImages.secondary}
                alt="Focused personal training session"
                className="h-[240px] w-full object-cover"
              />
              <div className="p-5">
                <p className="eyebrow text-white/55">Coach-led sessions</p>
                <p className="mt-3 text-lg text-white">Small-group and private performance coaching.</p>
              </div>
            </motion.div>
            <motion.div
              animate={{ y: [10, -8, 10] }}
              transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
              className="overflow-hidden rounded-[30px] border border-white/10 bg-black/20 backdrop-blur-sm"
            >
              <img
                src={heroImages.tertiary}
                alt="Premium recovery and strength environment"
                className="h-[240px] w-full object-cover"
              />
              <div className="p-5">
                <p className="eyebrow text-white/55">Recovery-first</p>
                <p className="mt-3 text-lg text-white">Training, atmosphere, and recovery in one club rhythm.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}
