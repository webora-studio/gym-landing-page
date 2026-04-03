"use client";

import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

const activity = [
  { name: "Lead routing", detail: "Assigned enterprise demo to West region", time: "2m ago" },
  { name: "Invoice review", detail: "Mismatch escalated to finance approval queue", time: "9m ago" },
  { name: "Support triage", detail: "Refund request labeled and sent to billing", time: "14m ago" },
] as const;

type DashboardPreviewProps = {
  className?: string;
  compact?: boolean;
};

export function DashboardPreview({ className, compact = false }: DashboardPreviewProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "relative overflow-hidden rounded-[32px] border border-white/70 bg-white/80 p-4 shadow-[0_20px_80px_rgba(28,31,36,0.08)] backdrop-blur-xl sm:p-5",
        className,
      )}
    >
      <div className="absolute inset-x-0 top-0 h-24 bg-[linear-gradient(180deg,rgba(59,92,204,0.08),transparent)]" />
      <div className="relative rounded-[26px] border border-[#E6E8EB] bg-[#FCFCFD] p-4 sm:p-5">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#E6E8EB] pb-4">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.24em] text-[#7A818C]">
              NeuraFlow Control
            </p>
            <h3 className="mt-2 text-lg font-semibold tracking-[-0.03em] text-[#1C1F24]">
              Automation cockpit
            </h3>
          </div>
          <div className="flex items-center gap-2">
            <span className="rounded-full bg-[#F1F3F7] px-3 py-1 text-xs text-[#606775]">Live</span>
            <span className="rounded-full bg-[#E9EEFf] px-3 py-1 text-xs text-[#3B5CCC]">
              27 active runs
            </span>
          </div>
        </div>

        <div className={cn("mt-5 grid gap-4", compact ? "lg:grid-cols-1" : "lg:grid-cols-[1.25fr_0.9fr]")}>
          <div className="space-y-4">
            <div className="rounded-[22px] border border-[#E6E8EB] bg-white p-4">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-[#1C1F24]">Workflow builder</p>
                <p className="text-xs text-[#7A818C]">Revenue routing v3.2</p>
              </div>
              <div className="mt-4 grid gap-3">
                {[
                  ["Trigger", "New inbound form submitted", "01"],
                  ["Agent", "Classify company size and intent", "02"],
                  ["Action", "Create CRM task and notify owner", "03"],
                ].map(([label, text, step]) => (
                  <motion.div
                    key={step}
                    whileHover={{ scale: 1.01, y: -2 }}
                    transition={{ duration: 0.2 }}
                    className="grid grid-cols-[42px_1fr] gap-3 rounded-[18px] border border-[#E6E8EB] bg-[#F8F9FB] p-3"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white text-xs font-semibold text-[#3B5CCC]">
                      {step}
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.16em] text-[#7A818C]">{label}</p>
                      <p className="mt-1 text-sm text-[#1C1F24]">{text}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {[
                ["Runs today", "1,284"],
                ["Avg. accuracy", "97.4%"],
                ["Escalations", "18"],
              ].map(([label, value]) => (
                <motion.div
                  key={label}
                  whileHover={{ y: -3 }}
                  transition={{ duration: 0.2 }}
                  className="rounded-[18px] border border-[#E6E8EB] bg-white p-4"
                >
                  <p className="text-xs uppercase tracking-[0.16em] text-[#7A818C]">{label}</p>
                  <p className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-[#1C1F24]">
                    {value}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <div className="rounded-[22px] border border-[#E6E8EB] bg-white p-4">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-[#1C1F24]">Automation logs</p>
                <p className="text-xs text-[#7A818C]">Today</p>
              </div>
              <div className="mt-4 space-y-3">
                {activity.map((item) => (
                  <div key={item.name} className="rounded-[18px] border border-[#E6E8EB] bg-[#F8F9FB] p-3">
                    <div className="flex items-center justify-between gap-3">
                      <p className="text-sm font-medium text-[#1C1F24]">{item.name}</p>
                      <span className="text-xs text-[#7A818C]">{item.time}</span>
                    </div>
                    <p className="mt-2 text-sm leading-6 text-[#606775]">{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[22px] border border-[#E6E8EB] bg-[#F8F9FB] p-4">
              <div className="flex items-end justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.16em] text-[#7A818C]">
                    Throughput trend
                  </p>
                  <p className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-[#1C1F24]">
                    +36%
                  </p>
                </div>
                <div className="flex h-16 items-end gap-2">
                  {[28, 42, 36, 58, 72, 64, 78].map((height, index) => (
                    <div
                      key={index}
                      className="w-5 rounded-t-full bg-[#DCE3F7]"
                      style={{ height }}
                    >
                      {index === 6 ? (
                        <div className="h-full rounded-t-full bg-[#3B5CCC]" />
                      ) : null}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
