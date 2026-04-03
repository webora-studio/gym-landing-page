"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

import { navItems } from "@/data/site";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 36);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 md:px-6">
        <motion.div
          initial={false}
          animate={{
            y: scrolled ? 0 : 4,
            scale: scrolled ? 0.985 : 1,
          }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className={cn(
            "mx-auto flex w-full max-w-7xl items-center justify-between rounded-[26px] border px-4 py-3 shadow-[0_18px_60px_rgba(17,17,17,0.06)] backdrop-blur-xl md:px-5",
            scrolled
              ? "border-black/10 bg-white/80"
              : "border-white/20 bg-white/12",
          )}
        >
          <Link href="/" className="flex items-center gap-3">
            <span
              className={cn(
                "flex h-11 w-11 items-center justify-center rounded-full border text-[12px] font-semibold uppercase tracking-[0.28em] transition",
                scrolled
                  ? "border-black/10 bg-black text-white"
                  : "border-white/28 bg-white/12 text-white",
              )}
            >
              AX
            </span>
            <div className="hidden sm:block">
              <p
                className={cn(
                  "text-[11px] font-semibold uppercase tracking-[0.34em] transition",
                  scrolled ? "text-[#555555]" : "text-white/62",
                )}
              >
                Premium Build Partner
              </p>
              <p
                className={cn(
                  "mt-1 text-sm font-semibold uppercase tracking-[0.28em] transition",
                  scrolled ? "text-[#111111]" : "text-white",
                )}
              >
                Axiom Construct
              </p>
            </div>
          </Link>

          <nav
            className={cn(
              "hidden items-center gap-1 rounded-full border px-2 py-2 md:flex",
              scrolled
                ? "border-black/8 bg-black/[0.035]"
                : "border-white/16 bg-white/10",
            )}
          >
            {navItems.map((item) => {
              const active = pathname === item.href;

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={cn(
                    "relative rounded-full px-4 py-2 text-sm font-medium transition",
                    active
                      ? scrolled
                        ? "text-[#111111]"
                        : "text-white"
                      : scrolled
                        ? "text-[#555555] hover:text-[#111111]"
                        : "text-white/72 hover:text-white",
                  )}
                >
                  {active ? (
                    <motion.span
                      layoutId="nav-active-pill"
                      className={cn(
                        "absolute inset-0 -z-10 rounded-full",
                        scrolled ? "bg-white shadow-[0_8px_20px_rgba(17,17,17,0.08)]" : "bg-white/16",
                      )}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    />
                  ) : null}
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <Link
              href="/contact"
              className={cn(
                "hidden rounded-full px-5 py-3 text-sm font-semibold transition md:inline-flex",
                scrolled
                  ? "bg-[#111111] text-white hover:bg-[#2c2c2c]"
                  : "bg-white text-[#111111] hover:bg-[#f2f2f2]",
              )}
            >
              Request Quote
            </Link>

            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((value) => !value)}
              className={cn(
                "flex h-11 w-11 items-center justify-center rounded-full border transition md:hidden",
                scrolled
                  ? "border-black/10 bg-white text-[#111111]"
                  : "border-white/22 bg-white/10 text-white",
              )}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </motion.div>
      </header>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-x-4 top-[84px] z-40 rounded-[28px] border border-black/10 bg-white/92 p-4 shadow-[0_24px_80px_rgba(17,17,17,0.12)] backdrop-blur-xl md:hidden"
          >
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => {
                const active = pathname === item.href;

                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={cn(
                      "rounded-[18px] px-4 py-3 text-base font-medium transition",
                      active
                        ? "bg-[#111111] text-white"
                        : "text-[#111111] hover:bg-[#f5f5f5]",
                    )}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <Link
                href="/contact"
                className="mt-2 rounded-[18px] bg-[#111111] px-4 py-3 text-base font-semibold text-white"
              >
                Request Quote
              </Link>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
