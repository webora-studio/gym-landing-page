import { Reveal } from "@/components/motion";
import { services } from "@/data/site";

export function ServicesGrid() {
  return (
    <section id="services" className="bg-[#f8f8f8] py-24 md:py-32">
      <div className="section-shell">
        <Reveal>
          <div className="max-w-2xl">
            <p className="eyebrow">Services</p>
            <h2 className="display-title mt-6 text-[38px] leading-[1.02] md:text-[56px]">
              Modern construction expertise with a minimal, highly controlled delivery model.
            </h2>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => (
            <Reveal key={service.title} delay={index * 0.06}>
              <article className="group h-full rounded-[30px] border border-[#e5e5e5] bg-white p-8 transition duration-300 hover:-translate-y-1.5 hover:shadow-panel">
                <p className="eyebrow">0{index + 1}</p>
                <h3 className="mt-5 text-[28px] font-bold leading-[1.08] tracking-[-0.04em] text-[#111111]">
                  {service.title}
                </h3>
                <p className="mt-5 text-[16px] leading-7 text-[#555555]">{service.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
