import Link from "next/link";

import { navItems } from "@/data/neura-flow";
import { Container } from "@/components/ui/container";

export function Footer() {
  return (
    <footer className="border-t border-[#E6E8EB] py-10">
      <Container>
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-lg font-semibold tracking-[-0.05em] text-[#1C1F24]">NeuraFlow AI</p>
            <p className="mt-3 max-w-[360px] text-sm leading-7 text-[#606775]">
              Intelligent workflow automation for teams that want cleaner systems, faster
              execution, and less manual overhead.
            </p>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-3">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="text-sm text-[#606775] hover:text-[#1C1F24]">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
