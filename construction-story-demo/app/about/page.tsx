import { ChapterStack } from "@/components/chapter-stack";
import { CTASection } from "@/components/cta-section";
import { PageHero } from "@/components/page-hero";
import { StatsSection } from "@/components/stats-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { aboutValues } from "@/data/site";

export default function AboutPage() {
  return (
    <main>
      <PageHero
        eyebrow="About"
        title="A construction team built around quiet confidence and measurable execution."
        intro="We combine modern site systems with an architectural mindset so projects feel both controlled and elevated from planning to handover."
        image="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1800&q=80"
      />
      <ChapterStack
        eyebrow="Values"
        heading="What clients feel as premium is usually process made visible."
        intro="Our story is not just aesthetic. It is operational. These values shape the rhythm, clarity, and trust behind every project we deliver."
        chapters={aboutValues}
      />
      <StatsSection />
      <TestimonialsSection />
      <CTASection />
    </main>
  );
}
