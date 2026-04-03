import { Reveal } from "@/components/motion";
import { testimonials } from "@/data/site";

export function TestimonialsSection() {
  return (
    <section className="bg-[#f8f8f8] py-24 md:py-32">
      <div className="section-shell">
        <Reveal>
          <div className="max-w-2xl">
            <p className="eyebrow">Testimonials</p>
            <h2 className="display-title mt-6 text-[38px] leading-[1.02] md:text-[56px]">
              Trusted by clients who expect calm execution and confident delivery.
            </h2>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Reveal key={testimonial.name} delay={index * 0.08}>
              <article className="h-full rounded-[30px] border border-[#e5e5e5] bg-white p-8 shadow-[0_18px_60px_rgba(17,17,17,0.04)]">
                <p className="text-[19px] leading-8 text-[#111111]">“{testimonial.quote}”</p>
                <div className="mt-8 border-t border-[#e5e5e5] pt-6">
                  <p className="font-semibold text-[#111111]">{testimonial.name}</p>
                  <p className="mt-2 text-sm text-[#555555]">{testimonial.role}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
