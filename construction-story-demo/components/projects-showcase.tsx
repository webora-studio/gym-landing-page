"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, X } from "lucide-react";
import { useEffect, useState } from "react";

import { ParallaxPanel, Reveal } from "@/components/motion";
import { projects } from "@/data/site";

export function ProjectsShowcase() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const activeProject = activeIndex === null ? null : projects[activeIndex];

  useEffect(() => {
    if (activeProject === null) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveIndex(null);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activeProject]);

  return (
    <>
      <section id="projects" className="bg-white py-24 md:py-32">
        <div className="section-shell">
          <div className="grid gap-12 lg:grid-cols-[0.72fr_1fr] lg:gap-20">
            <Reveal>
              <div className="lg:sticky lg:top-28">
                <p className="eyebrow">Projects showcase</p>
                <h2 className="display-title mt-6 text-[38px] leading-[1.02] md:text-[56px]">
                  A portfolio of spaces built to feel composed, exact, and unmistakably premium.
                </h2>
                <p className="mt-7 max-w-md text-[17px] leading-8 text-[#555555]">
                  Each project is presented like a chapter: context, material, program, and execution working together in one clear narrative.
                </p>
              </div>
            </Reveal>

            <div className="space-y-8">
              {projects.map((project, index) => (
                <Reveal key={project.title} delay={index * 0.06}>
                  <button
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    className="group grid w-full gap-6 rounded-[34px] border border-[#e5e5e5] bg-[#fafafa] p-5 text-left transition duration-300 hover:shadow-panel md:p-6 lg:grid-cols-[1.05fr_0.95fr]"
                  >
                    <ParallaxPanel src={project.image} alt={project.title} className="h-[280px] rounded-[26px] md:h-[360px]" />
                    <div className="flex flex-col justify-between gap-8 p-2 md:p-4">
                      <div>
                        <p className="eyebrow">{project.tag}</p>
                        <h3 className="mt-4 text-[32px] font-bold leading-[1.02] tracking-[-0.04em] text-[#111111]">
                          {project.title}
                        </h3>
                        <p className="mt-5 text-[17px] leading-8 text-[#555555]">{project.summary}</p>
                      </div>
                      <div className="flex items-center justify-between border-t border-[#e5e5e5] pt-5">
                        <div className="flex gap-8 text-sm text-[#555555]">
                          <span>{project.location}</span>
                          <span>{project.year}</span>
                        </div>
                        <span className="flex items-center gap-2 text-sm font-semibold text-[#111111]">
                          View details <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </span>
                      </div>
                    </div>
                  </button>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <AnimatePresence>
        {activeProject ? (
          <motion.div
            className="fixed inset-0 z-[90] flex items-end justify-center bg-black/55 p-4 md:items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveIndex(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 24, scale: 0.98 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              onClick={(event) => event.stopPropagation()}
              className="grid max-h-[92vh] w-full max-w-5xl overflow-hidden rounded-[34px] bg-white md:grid-cols-[1.04fr_0.96fr]"
            >
              <div className="relative min-h-[300px]">
                <img src={activeProject.image} alt={activeProject.title} className="absolute inset-0 h-full w-full object-cover" />
              </div>
              <div className="relative overflow-y-auto p-8 md:p-10">
                <button
                  type="button"
                  onClick={() => setActiveIndex(null)}
                  aria-label="Close"
                  className="absolute right-6 top-6 flex h-11 w-11 items-center justify-center rounded-full border border-[#e5e5e5] text-[#111111] transition hover:bg-[#f8f8f8]"
                >
                  <X className="h-5 w-5" />
                </button>
                <p className="eyebrow">{activeProject.tag}</p>
                <h3 className="mt-5 max-w-sm text-[36px] font-bold leading-[1.02] tracking-[-0.05em] text-[#111111]">
                  {activeProject.title}
                </h3>
                <p className="mt-5 text-[17px] leading-8 text-[#555555]">{activeProject.summary}</p>
                <div className="mt-8 grid gap-4 border-y border-[#e5e5e5] py-6 text-sm text-[#555555] sm:grid-cols-2">
                  <div>
                    <p className="eyebrow text-[#111111]">Location</p>
                    <p className="mt-2 text-base">{activeProject.location}</p>
                  </div>
                  <div>
                    <p className="eyebrow text-[#111111]">Year</p>
                    <p className="mt-2 text-base">{activeProject.year}</p>
                  </div>
                </div>
                <div className="mt-8 space-y-4">
                  {activeProject.details.map((detail) => (
                    <div key={detail} className="flex gap-3 text-[16px] leading-7 text-[#555555]">
                      <span className="mt-3 h-1.5 w-1.5 rounded-full bg-[#111111]" />
                      <p>{detail}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
