"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import { navItems } from "@/data/gym";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled && "border-b border-white/10 bg-background/70 backdrop-blur-xl",
      )}
    >
      <Container className="py-4">
        <div className="flex items-center justify-between gap-4 rounded-full border border-white/8 bg-black/10 px-4 py-3 backdrop-blur-md">
          <Link href="#" className="flex flex-col leading-none text-foreground">
            <span className="text-[0.68rem] uppercase tracking-[0.34em] text-muted-foreground">Elite Gym</span>
            <span className="mt-2 text-lg font-semibold tracking-[0.18em]">FORGE HOUSE GYM</span>
          </Link>
          <nav className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                {item.label}
              </Link>
            ))}
          </nav>
          <Link href="#contact">
            <Button className="px-6">Book a Visit</Button>
          </Link>
        </div>
      </Container>
    </motion.header>
  );
}
