"use client";

import { motion } from "framer-motion";

import { FadeUp } from "@/components/landing/motion";
import { Section } from "@/components/landing/section";
import { Container } from "@/components/ui/container";

const timeline = [
  ["09:14", "Lead enrichment agent completed scoring"],
  ["09:18", "CRM owner assignment synced to Salesforce"],
  ["09:21", "Slack summary sent to revenue pod"],
  ["09:27", "Follow-up draft queued for approval"],
] as const;

export function DashboardShowcase() {
  return (
    <Section>
      <Container>
        <FadeUp className="rounded-[40px] border border-white/60 bg-white/65 p-6 shadow-[0_30px_100px_rgba(28,31,36,0.08)] backdrop-blur-xl sm:p-8 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[0.88fr_1.12fr] lg:items-end">
            <div className="max-w-[460px]">
              <p className="text-[11px] font-medium uppercase tracking-[0.24em] text-[#7A818C]">
                Dashboard showcase
              </p>
              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.05em] text-[#1C1F24] sm:text-[3rem] sm:leading-[1.04]">
                The system view for automation at scale.
              </h2>
              <p className="mt-6 text-lg leading-8 text-[#606775]">
                See automation timeline, performance metrics, and task logs in one
                high-signal surface built for operators, not just admins.
              </p>
            </div>

            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.24 }}
              className="rounded-[32px] border border-[#E6E8EB] bg-[linear-gradient(180deg,rgba(255,255,255,0.88),rgba(250,251,252,0.92))] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.7)]"
            >
              <div className="grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
                <div className="space-y-5">
                  <div className="rounded-[24px] border border-[#E6E8EB] bg-white p-5">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium text-[#1C1F24]">Automation timeline</p>
                      <span className="text-xs text-[#7A818C]">Today</span>
                    </div>
                    <div className="mt-5 space-y-4">
                      {timeline.map(([time, event]) => (
                        <div key={time} className="grid grid-cols-[54px_1fr] gap-4">
                          <div className="text-xs font-medium uppercase tracking-[0.16em] text-[#7A818C]">
                            {time}
                          </div>
                          <div className="rounded-[18px] border border-[#E6E8EB] bg-[#F8F9FB] px-4 py-3 text-sm text-[#1C1F24]">
                            {event}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    {[
                      ["Automation uptime", "99.94%"],
                      ["Manual touchpoints", "12%"],
                    ].map(([label, value]) => (
                      <div key={label} className="rounded-[22px] border border-[#E6E8EB] bg-white p-5">
                        <p className="text-xs uppercase tracking-[0.16em] text-[#7A818C]">{label}</p>
                        <p className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-[#1C1F24]">
                          {value}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-5">
                  <div className="rounded-[24px] border border-[#E6E8EB] bg-white p-5">
                    <p className="text-sm font-medium text-[#1C1F24]">Performance metrics</p>
                    <div className="mt-5 grid gap-4">
                      {[
                        ["Runs completed", "14.6k", 84],
                        ["Avg confidence", "96%", 71],
                        ["Approval latency", "4m 12s", 58],
                      ].map(([label, value, progress]) => (
                        <div key={label} className="space-y-2">
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-[#606775]">{label}</span>
                            <span className="font-medium text-[#1C1F24]">{value}</span>
                          </div>
                          <div className="h-2 rounded-full bg-[#EEF1F5]">
                            <div
                              className="h-2 rounded-full bg-[#3B5CCC]"
                              style={{ width: `${progress}%` }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="rounded-[24px] border border-[#E6E8EB] bg-white p-5">
                    <p className="text-sm font-medium text-[#1C1F24]">Task logs</p>
                    <div className="mt-4 space-y-3">
                      {[
                        "CRM sync completed for 42 accounts",
                        "Billing exception flagged for approval",
                        "Lead follow-up sequence updated",
                      ].map((item) => (
                        <div
                          key={item}
                          className="rounded-[16px] border border-[#E6E8EB] bg-[#F8F9FB] px-4 py-3 text-sm text-[#1C1F24]"
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </FadeUp>
      </Container>
    </Section>
  );
}
