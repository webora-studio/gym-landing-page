import Link from "next/link";

import { navItems } from "@/data/site";

export function Footer() {
  return (
    <footer className="bg-[#111111] py-16 text-white">
      <div className="section-shell grid gap-12 md:grid-cols-[1.15fr_0.85fr_0.9fr]">
        <div>
          <p className="eyebrow text-white/56">Axiom Construct</p>
          <h3 className="mt-5 max-w-sm text-[30px] font-bold leading-[1.04] tracking-[-0.05em]">
            Premium construction for spaces designed to endure.
          </h3>
        </div>

        <div>
          <p className="eyebrow text-white/56">Pages</p>
          <div className="mt-5 flex flex-col gap-3 text-white/78">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="eyebrow text-white/56">Contact</p>
          <div className="mt-5 space-y-3 text-white/78">
            <p>hello@axiomconstruct.com</p>
            <p>+91 98765 43210</p>
            <p>12 Richmond Road, Bengaluru</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
