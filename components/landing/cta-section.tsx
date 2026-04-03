import Link from "next/link";

import { FadeUp } from "@/components/landing/motion";
import { Section } from "@/components/landing/section";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export function CtaSection() {
  return (
    <Section id="contact" className="pb-28 pt-10">
      <Container>
        <FadeUp className="mx-auto max-w-[820px] rounded-[40px] border border-[#E6E8EB] bg-white px-8 py-14 text-center shadow-[0_24px_80px_rgba(28,31,36,0.06)] sm:px-12 sm:py-16">
          <p className="text-[11px] font-medium uppercase tracking-[0.24em] text-[#7A818C]">
            Final CTA
          </p>
          <h2 className="mt-5 text-4xl font-semibold tracking-[-0.05em] text-[#1C1F24] sm:text-[3.4rem] sm:leading-[1.02]">
            Build smarter workflows today.
          </h2>
          <p className="mx-auto mt-6 max-w-[620px] text-lg leading-8 text-[#606775]">
            Replace repetitive digital work with AI systems that keep operations moving in the
            background and let your team stay focused on growth.
          </p>
          <div className="mt-10">
            <Link href="#">
              <Button className="px-7 py-3">Request Demo</Button>
            </Link>
          </div>
        </FadeUp>
      </Container>
    </Section>
  );
}
