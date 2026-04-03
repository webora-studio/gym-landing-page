"use client";

import { motion } from "framer-motion";

import { membershipTiers } from "@/data/gym";
import { Button } from "@/components/ui/button";
import { FadeUp } from "@/components/gym/motion";
import { SectionShell } from "@/components/gym/section-shell";

export function MembershipSection() {
  return (
    <SectionShell
      id="membership"
      eyebrow="Membership"
      title="Choose the membership that gets you in the room."
      intro="Clear pricing and stronger value language help the page sell the next step instead of just presenting options."
    >
      <div className="mb-8 overflow-hidden rounded-[34px] border border-white/8 bg-[#111110] lg:grid lg:grid-cols-[1.05fr_0.95fr]">
        <img
          src="/gym/real-coaching.jpg"
          alt="Premium gym coaching visual"
          className="h-full min-h-[280px] w-full object-cover"
        />
        <div className="p-8 sm:p-10">
          <p className="eyebrow">Start here</p>
          <h3 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-foreground">
            Book a visit, meet a coach, and see the club before you decide.
          </h3>
          <p className="mt-5 max-w-[520px] text-base leading-8 text-muted-foreground">
            The goal is simple: help prospective members picture themselves training here. The
            easier the first step feels, the more likely they are to convert.
          </p>
        </div>
      </div>
      <div className="grid gap-6 lg:grid-cols-3">
        {membershipTiers.map((tier, index) => {
          const isFeatured = "featured" in tier && Boolean(tier.featured);

          return (
            <FadeUp key={tier.name} delay={index * 0.05}>
              <motion.article
                whileHover={{ y: -8 }}
                transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
                className={`surface-panel h-full p-7 ${
                  isFeatured ? "border-[rgba(200,139,74,0.4)] bg-[rgba(200,139,74,0.08)]" : ""
                }`}
              >
                <div className="flex items-center justify-between">
                  <p className="text-lg font-semibold text-foreground">{tier.name}</p>
                  {isFeatured ? (
                    <span className="rounded-full bg-[rgba(200,139,74,0.16)] px-3 py-1 text-xs text-foreground">
                      Most selected
                    </span>
                  ) : null}
                </div>
                <div className="mt-8 flex items-end gap-2">
                  <span className="text-5xl font-semibold tracking-[-0.06em] text-foreground">
                    {tier.price}
                  </span>
                  {tier.cadence ? (
                    <span className="pb-1 text-sm text-muted-foreground">{tier.cadence}</span>
                  ) : null}
                </div>
                <p className="mt-5 text-base leading-8 text-muted-foreground">{tier.description}</p>
                <ul className="mt-8 space-y-4">
                  {tier.points.map((point) => (
                    <li key={point} className="flex gap-3 text-sm leading-7 text-foreground">
                      <span className="mt-3 h-1.5 w-1.5 rounded-full bg-primary" aria-hidden="true" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-10">
                  <Button variant={isFeatured ? "primary" : "secondary"} className="w-full justify-center">
                    Enquire now
                  </Button>
                </div>
              </motion.article>
            </FadeUp>
          );
        })}
      </div>
    </SectionShell>
  );
}
