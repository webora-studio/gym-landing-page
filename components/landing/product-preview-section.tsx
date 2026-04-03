import { DashboardPreview } from "@/components/landing/dashboard-preview";
import { FadeUp } from "@/components/landing/motion";
import { Section } from "@/components/landing/section";
import { Container } from "@/components/ui/container";

export function ProductPreviewSection() {
  return (
    <Section id="product" className="pt-12">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
          <FadeUp>
            <DashboardPreview compact className="max-w-[760px]" />
          </FadeUp>
          <FadeUp delay={0.06}>
            <div className="max-w-[480px]">
              <p className="text-[11px] font-medium uppercase tracking-[0.24em] text-[#7A818C]">
                Product preview
              </p>
              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.05em] text-[#1C1F24] sm:text-[3.2rem] sm:leading-[1.02]">
                AI workflow engine built for modern teams.
              </h2>
              <p className="mt-6 text-lg leading-8 text-[#606775]">
                Design automation flows that run continuously in the background. Build
                intelligent systems once, then let them keep operations moving without
                constant manual input.
              </p>
              <div className="mt-10 grid gap-4">
                {[
                  ["Workflow builder UI", "Branch logic, review gates, and reusable automation blocks"],
                  ["Analytics cards", "Track throughput, confidence, and intervention rates in real time"],
                  ["Automation logs", "Read every action, exception, and system handoff with context"],
                ].map(([title, description]) => (
                  <div key={title} className="rounded-[24px] border border-[#E6E8EB] bg-white p-5">
                    <p className="text-base font-semibold text-[#1C1F24]">{title}</p>
                    <p className="mt-2 text-sm leading-7 text-[#606775]">{description}</p>
                  </div>
                ))}
              </div>
            </div>
          </FadeUp>
        </div>
      </Container>
    </Section>
  );
}
