"use client";

import { motion } from "framer-motion";

import { FadeUp } from "@/components/landing/motion";
import { Section } from "@/components/landing/section";
import { Container } from "@/components/ui/container";

const steps = [
  {
    step: "01",
    title: "Connect tools",
    description: "Link the apps your team already uses and set the data sources each workflow can rely on.",
  },
  {
    step: "02",
    title: "Create workflow",
    description: "Define triggers, AI decisions, actions, and fallback rules inside a visual builder.",
  },
  {
    step: "03",
    title: "Run automation",
    description: "Launch workflows that execute continuously, escalate when needed, and log every decision.",
  },
] as const;

export function WorkflowSection() {
  return (
    <Section id="workflow">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <FadeUp>
            <div className="max-w-[500px]">
              <p className="text-[11px] font-medium uppercase tracking-[0.24em] text-[#7A818C]">
                Workflow
              </p>
              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.05em] text-[#1C1F24] sm:text-[3rem] sm:leading-[1.04]">
                Build once. Let the system keep the work moving.
              </h2>
              <p className="mt-6 text-lg leading-8 text-[#606775]">
                NeuraFlow turns scattered process knowledge into a visible, repeatable automation
                layer your team can trust and improve over time.
              </p>
            </div>
          </FadeUp>

          <FadeUp delay={0.08}>
            <div className="rounded-[34px] border border-[#E6E8EB] bg-white p-6 shadow-[0_24px_80px_rgba(28,31,36,0.06)] sm:p-8">
              <div className="grid gap-6 lg:grid-cols-[1fr_90px_1fr_90px_1fr] lg:items-center">
                {steps.map((step, index) => (
                  <div key={step.step} className="contents">
                    <motion.div
                      whileHover={{ y: -5 }}
                      transition={{ duration: 0.22 }}
                      className="rounded-[24px] border border-[#E6E8EB] bg-[#FAFBFC] p-5"
                    >
                      <p className="text-xs uppercase tracking-[0.16em] text-[#7A818C]">{step.step}</p>
                      <h3 className="mt-4 text-xl font-semibold tracking-[-0.03em] text-[#1C1F24]">
                        {step.title}
                      </h3>
                      <p className="mt-3 text-sm leading-7 text-[#606775]">{step.description}</p>
                    </motion.div>
                    {index < steps.length - 1 ? (
                      <div className="hidden items-center justify-center lg:flex" aria-hidden="true">
                        <div className="h-px w-full bg-[#D8DDE5]" />
                        <div className="-ml-3 h-2.5 w-2.5 rounded-full bg-[#3B5CCC]" />
                      </div>
                    ) : null}
                  </div>
                ))}
              </div>
            </div>
          </FadeUp>
        </div>
      </Container>
    </Section>
  );
}
