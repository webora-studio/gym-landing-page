import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-full border border-transparent px-5 py-2.5 text-sm font-medium tracking-[0.02em] transition duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-35",
  {
    variants: {
      variant: {
        primary:
          "bg-primary text-primary-foreground shadow-[0_14px_44px_rgba(200,139,74,0.24)] hover:bg-[hsl(var(--primary)/0.94)] active:scale-[0.98]",
        secondary:
          "border border-white/10 bg-white/[0.03] text-foreground hover:border-[rgba(212,156,98,0.35)] hover:bg-white/[0.07]",
        ghost:
          "px-0 py-0 text-primary hover:opacity-80",
      },
      size: {
        default: "",
        icon: "size-10 rounded-full p-0",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
      />
    );
  },
);

Button.displayName = "Button";

export { buttonVariants };
