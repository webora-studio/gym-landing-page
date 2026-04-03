"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import { navItems } from "@/data/neura-flow";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled && "border-b border-[#E6E8EB]/80 bg-white/75 backdrop-blur-xl",
      )}
    >
      <Container className="py-4">
        <div className="flex items-center justify-between gap-4 rounded-full border border-transparent px-2">
          <Link href="#" className="text-lg font-semibold tracking-[-0.05em] text-[#1C1F24]">
            NeuraFlow AI
          </Link>
          <nav className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-[#606775] transition-colors hover:text-[#1C1F24]"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <Link href="#contact">
            <Button>Request Demo</Button>
          </Link>
        </div>
      </Container>
    </motion.header>
  );
}
