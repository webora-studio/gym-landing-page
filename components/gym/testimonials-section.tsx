import { testimonials } from "@/data/gym";
import { FadeUp } from "@/components/gym/motion";
import { SectionShell } from "@/components/gym/section-shell";

export function TestimonialsSection() {
  return (
    <SectionShell
      eyebrow="Member perspective"
      title="Why members stay once they walk through the door."
      intro="The strongest gym websites do not just show equipment. They sell confidence, consistency, and results people can feel in their daily life."
    >
      <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
        <FadeUp>
          <div className="overflow-hidden rounded-[34px] border border-white/8 bg-[#111110]">
            <img
              src="/gym/real-coaching.jpg"
              alt="Private coaching session visual"
              className="h-[320px] w-full object-cover"
            />
            <blockquote className="surface-panel h-full rounded-none border-0 bg-transparent p-8 shadow-none sm:p-10">
              <p className="text-3xl leading-[1.55] tracking-[-0.04em] text-foreground sm:text-[2.2rem]">
                “{testimonials[0].quote}”
              </p>
              <footer className="mt-10 border-t border-white/8 pt-5">
                <p className="text-sm font-semibold text-foreground">{testimonials[0].name}</p>
                <p className="mt-1 text-sm text-muted-foreground">{testimonials[0].role}</p>
              </footer>
            </blockquote>
          </div>
        </FadeUp>
        <div className="grid gap-6">
          {testimonials.slice(1).map((item, index) => (
            <FadeUp key={item.name} delay={index * 0.08}>
              <blockquote className="surface-panel overflow-hidden p-0">
                <img
                  src={index === 0 ? "/gym/real-hero.jpg" : "/gym/real-interior.jpg"}
                  alt={index === 0 ? "Premium strength floor visual" : "Premium gym interior visual"}
                  className="h-[180px] w-full object-cover"
                />
                <div className="p-7">
                <p className="text-xl leading-8 tracking-[-0.03em] text-foreground">“{item.quote}”</p>
                <footer className="mt-8 border-t border-white/8 pt-4">
                  <p className="text-sm font-semibold text-foreground">{item.name}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{item.role}</p>
                </footer>
                </div>
              </blockquote>
            </FadeUp>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
