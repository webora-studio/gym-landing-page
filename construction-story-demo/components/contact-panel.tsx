import { contactDetails } from "@/data/site";

import { Reveal } from "@/components/motion";

export function ContactPanel() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="section-shell grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <Reveal>
          <div>
            <p className="eyebrow">Contact details</p>
            <h2 className="display-title mt-6 max-w-md text-[38px] leading-[1.02] md:text-[56px]">
              Start with a brief. We will shape the path from there.
            </h2>
            <div className="mt-10 space-y-6">
              {contactDetails.map((item) => (
                <div key={item.label} className="border-b border-[#e5e5e5] pb-5">
                  <p className="eyebrow">{item.label}</p>
                  <p className="mt-3 text-[20px] text-[#111111]">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="rounded-[34px] border border-[#e5e5e5] bg-[#f8f8f8] p-6 shadow-panel md:p-8">
            <div className="grid gap-5 md:grid-cols-2">
              <label className="block">
                <span className="eyebrow">Name</span>
                <input className="mt-3 w-full rounded-[18px] border border-[#dcdcdc] bg-white px-5 py-4 text-[#111111] outline-none transition focus:border-[#111111]" placeholder="Your name" />
              </label>
              <label className="block">
                <span className="eyebrow">Email</span>
                <input className="mt-3 w-full rounded-[18px] border border-[#dcdcdc] bg-white px-5 py-4 text-[#111111] outline-none transition focus:border-[#111111]" placeholder="Email address" />
              </label>
            </div>
            <div className="mt-5 grid gap-5 md:grid-cols-2">
              <label className="block">
                <span className="eyebrow">Project type</span>
                <input className="mt-3 w-full rounded-[18px] border border-[#dcdcdc] bg-white px-5 py-4 text-[#111111] outline-none transition focus:border-[#111111]" placeholder="Residential, commercial, interior..." />
              </label>
              <label className="block">
                <span className="eyebrow">Budget</span>
                <input className="mt-3 w-full rounded-[18px] border border-[#dcdcdc] bg-white px-5 py-4 text-[#111111] outline-none transition focus:border-[#111111]" placeholder="Estimated budget" />
              </label>
            </div>
            <label className="mt-5 block">
              <span className="eyebrow">Project brief</span>
              <textarea className="mt-3 min-h-[180px] w-full rounded-[22px] border border-[#dcdcdc] bg-white px-5 py-4 text-[#111111] outline-none transition focus:border-[#111111]" placeholder="Tell us about the site, scope, timeline, and what success looks like." />
            </label>
            <button className="mt-6 rounded-full bg-[#111111] px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-[#2c2c2c]">
              Request a Quote
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
