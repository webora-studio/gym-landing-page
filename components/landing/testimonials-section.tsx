import { FadeUp } from "@/components/landing/motion";
import { Section } from "@/components/landing/section";
import { TestimonialCard } from "@/components/landing/testimonial-card";
import { testimonials } from "@/data/neura-flow";
import { Container } from "@/components/ui/container";

export function TestimonialsSection() {
  return (
    <Section>
      <Container>
        <FadeUp className="max-w-[680px]">
          <p className="text-[11px] font-medium uppercase tracking-[0.24em] text-[#7A818C]">
            Testimonials
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.05em] text-[#1C1F24] sm:text-[3rem] sm:leading-[1.04]">
            Teams adopt NeuraFlow because it feels powerful without becoming fragile.
          </h2>
        </FadeUp>
        <div className="mt-14 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <FadeUp>
            <TestimonialCard {...testimonials[0]} large />
          </FadeUp>
          <div className="grid gap-6">
            <FadeUp delay={0.05}>
              <TestimonialCard {...testimonials[1]} />
            </FadeUp>
            <FadeUp delay={0.1}>
              <TestimonialCard {...testimonials[2]} />
            </FadeUp>
          </div>
        </div>
      </Container>
    </Section>
  );
}
