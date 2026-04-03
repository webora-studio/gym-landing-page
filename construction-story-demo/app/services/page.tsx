import { ChapterStack } from "@/components/chapter-stack";
import { CTASection } from "@/components/cta-section";
import { PageHero } from "@/components/page-hero";
import { ProcessTimeline } from "@/components/process-timeline";
import { ServicesGrid } from "@/components/services-grid";
import { serviceStories } from "@/data/site";

export default function ServicesPage() {
  return (
    <main>
      <PageHero
        eyebrow="Services"
        title="Construction services designed to feel coordinated from the first decision."
        intro="Our service model combines planning, design understanding, execution control, and handover quality into one premium delivery system."
        image="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1800&q=80"
      />
      <ServicesGrid />
      <ChapterStack
        eyebrow="How we work"
        heading="A service experience built around visibility, sequencing, and finish quality."
        intro="The point is not just to offer capabilities. It is to make each capability feel integrated into one professional client experience."
        chapters={serviceStories}
      />
      <ProcessTimeline />
      <CTASection />
    </main>
  );
}
