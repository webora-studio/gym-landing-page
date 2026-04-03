import Link from "next/link";

import { Reveal } from "@/components/motion";

export function CTASection() {
  return (
    <section className="bg-[#f8f8f8] py-24 md:py-32">
      <div className="section-shell">
        <Reveal>
          <div className="rounded-[38px] border border-[#e5e5e5] bg-white px-8 py-16 text-center shadow-panel md:px-16 md:py-24">
            <p className="eyebrow">Contact</p>
            <h2 className="display-title mx-auto mt-6 max-w-3xl text-[40px] leading-[1.02] md:text-[62px]">
              Let&apos;s build your next project together.
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-[17px] leading-8 text-[#555555]">
              Bring us a site, a concept, or a development ambition. We will shape the delivery path with clarity, quality, and confidence.
            </p>
            <Link href="/contact" className="mt-10 inline-flex rounded-full bg-[#111111] px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-[#2c2c2c]">
              Request a Quote
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
