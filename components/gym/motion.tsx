"use client";

import { motion, type MotionProps } from "framer-motion";

import { cn } from "@/lib/utils";

type FadeUpProps = MotionProps & {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  distance?: number;
};

export function FadeUp({
  children,
  className,
  delay = 0,
  distance = 30,
  ...props
}: FadeUpProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: distance }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay }}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}
