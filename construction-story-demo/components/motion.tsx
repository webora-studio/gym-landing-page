"use client";

import {
  animate,
  motion,
  useInView,
  useScroll,
  useTransform,
  type MotionProps,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

type RevealProps = MotionProps & {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  distance?: number;
  amount?: number;
};

export function Reveal({
  children,
  className,
  delay = 0,
  distance = 36,
  amount = 0.25,
  ...props
}: RevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: distance }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount }}
      transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay }}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.03, 1], [0, 1, 1]);

  return (
    <div className="pointer-events-none fixed inset-x-0 top-0 z-[80]">
      <motion.div
        style={{ scaleX, opacity }}
        className="h-[3px] origin-left bg-[linear-gradient(90deg,#111111_0%,#444444_55%,#111111_100%)] shadow-[0_0_24px_rgba(17,17,17,0.35)]"
      />
    </div>
  );
}

type ParallaxPanelProps = {
  src: string;
  alt: string;
  className?: string;
};

export function ParallaxPanel({ src, alt, className }: ParallaxPanelProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.08, 1.16]);

  return (
    <div ref={ref} className={cn("overflow-hidden", className)}>
      <motion.img
        src={src}
        alt={alt}
        className="h-full w-full object-cover"
        style={{ y, scale }}
      />
    </div>
  );
}

export function CountUp({
  value,
  suffix,
  className,
}: {
  value: number;
  suffix: string;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const isInView = useInView(ref, { once: true, amount: 0.7 });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!isInView) {
      return;
    }

    const controls = animate(0, value, {
      duration: 1.8,
      ease: [0.22, 1, 0.36, 1],
      onUpdate(latest) {
        setDisplayValue(Math.round(latest));
      },
    });

    return () => controls.stop();
  }, [isInView, value]);

  return (
    <span ref={ref} className={className}>
      {displayValue}
      {suffix}
    </span>
  );
}
