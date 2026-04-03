import { ChapterStack } from "@/components/chapter-stack";
import { ContactPanel } from "@/components/contact-panel";
import { PageHero } from "@/components/page-hero";

const contactStory = [
  {
    title: "Bring us the ambition.",
    text: "A site, a concept, a redevelopment plan, or a fit-out brief is enough to begin a serious conversation.",
    image:
      "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "We will shape the route.",
    text: "From scope definition to sequencing and next-step clarity, we help transform a direction into a delivery plan.",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80",
  },
] as const;

export default function ContactPage() {
  return (
    <main>
      <PageHero
        eyebrow="Contact"
        title="Let&apos;s begin the next project with structure and intent."
        intro="Use this page as the final chapter in the story: a clear invitation to start building something substantial together."
        image="https://images.unsplash.com/photo-1523413651479-597eb2da0ad6?auto=format&fit=crop&w=1800&q=80"
      />
      <ChapterStack
        eyebrow="Conversation"
        heading="Every strong project begins with a clear brief and a readable next step."
        intro="The contact experience should feel as considered as the rest of the website, so the transition from inspiration to inquiry remains seamless."
        chapters={contactStory}
      />
      <ContactPanel />
    </main>
  );
}
