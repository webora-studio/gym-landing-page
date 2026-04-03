import { CtaSection } from "@/components/gym/cta-section";
import { Footer } from "@/components/gym/footer";
import { Hero } from "@/components/gym/hero";
import { MembershipSection } from "@/components/gym/membership-section";
import { Navbar } from "@/components/gym/navbar";
import { PhilosophySection } from "@/components/gym/philosophy-section";
import { ProgramsSection } from "@/components/gym/programs-section";
import { SceneTrack } from "@/components/gym/scene-track";
import { TestimonialsSection } from "@/components/gym/testimonials-section";
import { WellnessSection } from "@/components/gym/wellness-section";

export default function HomePage() {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <PhilosophySection />
        <SceneTrack />
        <ProgramsSection />
        <WellnessSection />
        <TestimonialsSection />
        <MembershipSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}
