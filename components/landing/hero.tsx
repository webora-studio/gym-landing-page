"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { DashboardPreview } from "@/components/landing/dashboard-preview";
import { FadeUp } from "@/components/landing/motion";
import { metrics } from "@/data/neura-flow";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/landing/section";

export function Hero() {
  return (
    <Section className="min-h-[90vh] pb-20 pt-32 sm:pt-36 lg:flex lg:items-center">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[580px] bg-[radial-gradient(circle_at_top_left,rgba(59,92,204,0.08),transparent_44%)]" />
      <Container className="relative">
        <div className="grid items-center gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(460px,0.92fr)]">
          <div className="max-w-[640px]">
            <FadeUp>
              <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-[#7A818C]">
                Intelligent workflow automation
              </p>
            </FadeUp>
            <FadeUp delay={0.06}>
              <h1 className="mt-6 text-balance text-5xl font-semibold tracking-[-0.07em] text-[#1C1F24] sm:text-6xl lg:text-[5.5rem] lg:leading-[0.96]">
                Automate work. Focus on growth.
              </h1>
            </FadeUp>
            <FadeUp delay={0.12}>
              <p className="mt-6 max-w-[560px] text-lg leading-8 text-[#606775]">
                Build intelligent workflows powered by AI to handle repetitive business
                tasks automatically.
              </p>
            </FadeUp>
            <FadeUp delay={0.18}>
              <div className="mt-9 flex flex-col items-start gap-4 sm:flex-row">
                <Link href="#contact">
                  <Button>Request Demo</Button>
                </Link>
                <Link href="#product">
                  <Button variant="secondary">View Product</Button>
                </Link>
              </div>
            </FadeUp>
            <FadeUp delay={0.24}>
              <div className="mt-12 grid gap-4 sm:grid-cols-3">
                {metrics.map((metric) => (
                  <div key={metric.label} className="rounded-[24px] border border-[#E6E8EB] bg-white/80 p-5 backdrop-blur">
                    <p className="text-xs uppercase tracking-[0.16em] text-[#7A818C]">{metric.label}</p>
                    <p className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-[#1C1F24]">
                      {metric.value}
                    </p>
                    <p className="mt-1 text-sm text-[#3B5CCC]">{metric.change}</p>
                  </div>
                ))}
              </div>
            </FadeUp>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.12 }}
            className="relative"
          >
            <motion.div
              animate={{ y: [-8, 8, -8] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -left-10 top-12 hidden rounded-[24px] border border-[#E6E8EB] bg-white px-4 py-3 shadow-[0_20px_60px_rgba(28,31,36,0.06)] lg:block"
            >
              <p className="text-xs uppercase tracking-[0.16em] text-[#7A818C]">Agent status</p>
              <p className="mt-2 text-sm text-[#1C1F24]">Lead triage running</p>
            </motion.div>
            <motion.div
              animate={{ y: [10, -6, 10] }}
              transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-4 bottom-16 hidden rounded-[24px] border border-[#E6E8EB] bg-white px-4 py-3 shadow-[0_20px_60px_rgba(28,31,36,0.06)] lg:block"
            >
              <p className="text-xs uppercase tracking-[0.16em] text-[#7A818C]">Tasks automated</p>
              <p className="mt-2 text-sm text-[#1C1F24]">14,620 this week</p>
            </motion.div>
            <DashboardPreview />
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
