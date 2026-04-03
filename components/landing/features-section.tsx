import { FeatureBlock } from "@/components/landing/feature-block";
import { FadeUp } from "@/components/landing/motion";
import { Section } from "@/components/landing/section";
import { features } from "@/data/neura-flow";
import { Container } from "@/components/ui/container";

export function FeaturesSection() {
  return (
    <Section id="features">
      <Container>
        <FadeUp className="max-w-[700px]">
          <p className="text-[11px] font-medium uppercase tracking-[0.24em] text-[#7A818C]">
            Feature set
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.05em] text-[#1C1F24] sm:text-[3.2rem] sm:leading-[1.02]">
            A premium operating layer for teams automating real work.
          </h2>
        </FadeUp>
        <div className="mt-16 space-y-24 lg:space-y-28">
          {features.map((feature, index) => (
            <FeatureBlock
              key={feature.id}
              eyebrow={feature.eyebrow}
              title={feature.title}
              description={feature.description}
              bullets={feature.bullets}
              preview={feature.preview}
              reverse={index % 2 === 1}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}
