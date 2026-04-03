import Link from "next/link";

import { FadeUp } from "@/components/gym/motion";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export function CtaSection() {
  return (
    <section id="contact" className="relative py-24 sm:py-28 lg:py-32">
      <Container>
        <FadeUp className="overflow-hidden rounded-[42px] border border-white/10 bg-[linear-gradient(135deg,#171613,#0f0f0e)] px-8 py-14 shadow-[0_30px_120px_rgba(0,0,0,0.35)] sm:px-12 sm:py-16">
          <div className="grid items-end gap-10 lg:grid-cols-[0.9fr_0.65fr_0.45fr]">
            <div className="max-w-[700px]">
              <p className="eyebrow">Join Forge House</p>
              <h2 className="mt-5 text-balance text-4xl font-semibold tracking-[-0.05em] text-foreground sm:text-[3.5rem] sm:leading-[1.02]">
                Ready to train in a gym that feels as premium as the results it promises?
              </h2>
              <p className="mt-6 max-w-[560px] text-lg leading-8 text-muted-foreground">
                Book a private walkthrough, tour the club, meet the coaching team, and discover
                the membership that fits your routine, goals, and lifestyle.
              </p>
            </div>
            <div className="flex flex-col items-start gap-5 lg:items-end">
              <Link href="#">
                <Button className="px-7 py-3">Book a Visit</Button>
              </Link>
              <p className="max-w-[320px] text-sm leading-7 text-muted-foreground lg:text-right">
                Limited membership consultations each week. Enquire early to secure your preferred
                training slot.
              </p>
            </div>
            <div className="overflow-hidden rounded-[28px] border border-white/8">
              <img
                src="/gym/real-rowing.jpg"
                alt="Forge House recovery and club visual"
                className="h-[220px] w-full object-cover lg:h-[260px]"
              />
            </div>
          </div>
        </FadeUp>
      </Container>
    </section>
  );
}
