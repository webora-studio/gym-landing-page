import { ChapterStack } from "@/components/chapter-stack";
import { CTASection } from "@/components/cta-section";
import { HeroSection } from "@/components/hero-section";
import { ProcessTimeline } from "@/components/process-timeline";
import { ProjectsShowcase } from "@/components/projects-showcase";
import { ServicesGrid } from "@/components/services-grid";
import { StatsSection } from "@/components/stats-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { WhyChooseUs } from "@/components/why-choose-us";
import { homeChapters } from "@/data/site";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <ChapterStack
        eyebrow="Story"
        heading="A homepage shaped like a build sequence, not a template."
        intro="The experience moves from vision to system to delivery, so visitors feel the company’s discipline before they ever reach a contact form."
        chapters={homeChapters}
      />
      <ServicesGrid />
      <ProjectsShowcase />
      <ProcessTimeline />
      <WhyChooseUs />
      <StatsSection />
      <TestimonialsSection />
      <CTASection />
    </main>
  );
}
