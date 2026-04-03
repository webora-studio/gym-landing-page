import { FadeUp } from "@/components/landing/motion";
import { PricingCard } from "@/components/landing/pricing-card";
import { Section } from "@/components/landing/section";
import { pricing } from "@/data/neura-flow";
import { Container } from "@/components/ui/container";

export function PricingSection() {
  return (
    <Section id="pricing">
      <Container>
        <FadeUp className="max-w-[680px]">
          <p className="text-[11px] font-medium uppercase tracking-[0.24em] text-[#7A818C]">
            Pricing
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.05em] text-[#1C1F24] sm:text-[3rem] sm:leading-[1.04]">
            Clear plans for teams building smarter operations.
          </h2>
          <p className="mt-6 text-lg leading-8 text-[#606775]">
            Start small, scale across departments, and keep the buying path simple.
          </p>
        </FadeUp>
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {pricing.map((tier, index) => (
            <FadeUp key={tier.name} delay={index * 0.05}>
              <PricingCard {...tier} />
            </FadeUp>
          ))}
        </div>
      </Container>
    </Section>
  );
}
