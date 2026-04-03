import { ParallaxPanel, Reveal } from "@/components/motion";

const passageImages = [
  "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1200&q=80",
];

const passages = [
  {
    title: "Built on trust. Driven by precision.",
    text: "We believe construction is more than building structures. We create spaces that support businesses, neighborhoods, and long-term value.",
  },
  {
    title: "Every material choice carries a story.",
    text: "From structural logic to the final finish, our process is shaped around restraint, durability, and a professional standard clients can feel immediately.",
  },
] as const;

export function StorySection() {
  return (
    <section id="about" className="bg-white py-24 md:py-32">
      <div className="section-shell grid gap-20 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
        <Reveal>
          <div className="lg:sticky lg:top-28">
            <p className="eyebrow">About</p>
            <h2 className="display-title mt-6 max-w-lg text-[38px] leading-[1.01] md:text-[56px]">
              A construction narrative shaped through discipline, detail, and quiet confidence.
            </h2>
            <p className="mt-7 max-w-md text-[17px] leading-8 text-[#555555]">
              We approach each commission like a long-term asset, not a short-term handover. The result is work that feels ordered, modern, and built to endure.
            </p>
          </div>
        </Reveal>

        <div className="space-y-14">
          {passages.map((passage, index) => (
            <div key={passage.title} className="grid gap-8 rounded-[34px] border border-[#e5e5e5] bg-[#fafafa] p-6 shadow-panel md:p-8 lg:grid-cols-[0.88fr_1.12fr] lg:items-center">
              <Reveal delay={index * 0.08}>
                <div>
                  <p className="eyebrow">0{index + 1}</p>
                  <h3 className="mt-5 text-[30px] font-bold leading-[1.05] tracking-[-0.04em] text-[#111111] md:text-[38px]">
                    {passage.title}
                  </h3>
                  <p className="mt-5 text-[17px] leading-8 text-[#555555]">{passage.text}</p>
                </div>
              </Reveal>
              <Reveal delay={0.12 + index * 0.08}>
                <ParallaxPanel
                  src={passageImages[index]}
                  alt={passage.title}
                  className="h-[300px] rounded-[28px] md:h-[420px]"
                />
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
