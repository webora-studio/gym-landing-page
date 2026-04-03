import { FadeUp } from "@/components/landing/motion";
import { Section } from "@/components/landing/section";
import { Container } from "@/components/ui/container";

export function ProblemSection() {
  return (
    <Section className="pb-10">
      <Container>
        <FadeUp className="mx-auto max-w-[820px]">
          <p className="text-[11px] font-medium uppercase tracking-[0.24em] text-[#7A818C]">
            The problem
          </p>
          <div className="mt-6 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
            <div>
              <h2 className="text-4xl font-semibold tracking-[-0.05em] text-[#1C1F24] sm:text-[3rem] sm:leading-[1.04]">
                Businesses waste hours on repetitive digital work.
              </h2>
            </div>
            <div className="space-y-6 text-lg leading-8 text-[#606775]">
              <p>
                Manual emails, data entry, lead tracking, and follow-ups steal attention from
                the work that actually moves a business forward. Teams end up operating through
                copy-paste habits instead of systems.
              </p>
              <p>
                AI changes that when it is applied with structure. NeuraFlow gives teams a way
                to automate repetitive workflows without turning their day-to-day operations into
                a fragile tangle of scripts, tabs, and reminders.
              </p>
            </div>
          </div>
        </FadeUp>
      </Container>
    </Section>
  );
}
