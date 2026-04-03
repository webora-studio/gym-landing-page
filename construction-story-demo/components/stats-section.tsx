import { CountUp, Reveal } from "@/components/motion";
import { stats } from "@/data/site";

export function StatsSection() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="section-shell">
        <div className="rounded-[38px] bg-[#111111] px-8 py-14 text-white md:px-16 md:py-20">
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <p className="eyebrow text-white/56">Stats</p>
              <h2 className="mt-6 text-[38px] font-bold leading-[1.02] tracking-[-0.05em] md:text-[56px]">
                Built with consistency, measured through outcomes.
              </h2>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-10 text-center sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <Reveal key={stat.label} delay={index * 0.06}>
                <div>
                  <CountUp value={stat.value} suffix={stat.suffix} className="text-[56px] font-bold leading-none tracking-[-0.06em] md:text-[76px]" />
                  <p className="mt-4 text-[16px] text-white/68">{stat.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
