import { Reveal } from "@/components/motion";
import { whyChooseUs } from "@/data/site";

export function WhyChooseUs() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="section-shell">
        <Reveal>
          <div className="max-w-2xl">
            <p className="eyebrow">Why choose us</p>
            <h2 className="display-title mt-6 text-[38px] leading-[1.02] md:text-[56px]">
              Strong systems, restrained design thinking, and the reliability serious projects need.
            </h2>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
          {whyChooseUs.map((item, index) => (
            <Reveal key={item} delay={index * 0.06}>
              <div className="h-full rounded-[28px] border border-[#e5e5e5] bg-[#f8f8f8] px-6 py-8">
                <p className="eyebrow">0{index + 1}</p>
                <h3 className="mt-5 text-[26px] font-bold leading-[1.08] tracking-[-0.04em] text-[#111111]">{item}</h3>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
