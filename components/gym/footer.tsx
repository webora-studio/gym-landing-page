import Link from "next/link";

import { navItems } from "@/data/gym";
import { Container } from "@/components/ui/container";

export function Footer() {
  return (
    <footer className="border-t border-white/8 py-10">
      <Container>
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-lg font-semibold tracking-[0.12em] text-foreground">FORGE HOUSE GYM</p>
            <p className="mt-3 max-w-[360px] text-sm leading-7 text-muted-foreground">
              Forge House is an elite performance and recovery club dedicated to helping
              professionals achieve their peak physical potential through expert coaching and
              tailored wellness protocols.
            </p>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-3">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
