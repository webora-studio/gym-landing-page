import { CTASection } from "@/components/cta-section";
import { PageHero } from "@/components/page-hero";
import { ProjectsShowcase } from "@/components/projects-showcase";
import { ChapterStack } from "@/components/chapter-stack";

const projectNarrative = [
  {
    title: "Residential work that feels deliberate, not decorative.",
    text: "Our residential projects are driven by structural calm, daylight strategy, and material choices that feel better with time.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Commercial spaces built around movement and clarity.",
    text: "Offices and mixed-use environments demand circulation, flexibility, and operational intelligence from the first plan onward.",
    image:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Execution quality that carries through to handover.",
    text: "The strongest project photography comes after the strongest site control, not before it. That is where we focus most.",
    image:
      "https://images.unsplash.com/photo-1512403754473-27835f7b9984?auto=format&fit=crop&w=1200&q=80",
  },
] as const;

export default function ProjectsPage() {
  return (
    <main>
      <PageHero
        eyebrow="Projects"
        title="A portfolio of construction shaped through architectural discipline."
        intro="Residential, commercial, retail, and industrial work presented as lived environments, not just finished surfaces."
        image="https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1800&q=80"
        stats={[
          { label: "Projects", value: "120+" },
          { label: "Cities", value: "08" },
          { label: "Years", value: "10+" },
          { label: "Satisfaction", value: "98%" },
        ]}
      />
      <ChapterStack
        eyebrow="Narrative"
        heading="Each project is a chapter in how we build trust through space."
        intro="We want the work to feel clear even before the viewer reads a line of copy, so the storytelling uses sequence, imagery, and rhythm to do part of the speaking."
        chapters={projectNarrative}
      />
      <ProjectsShowcase />
      <CTASection />
    </main>
  );
}
