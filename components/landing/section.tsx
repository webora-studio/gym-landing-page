import { cn } from "@/lib/utils";

type SectionProps = {
  id?: string;
  className?: string;
  children: React.ReactNode;
};

export function Section({ id, className, children }: SectionProps) {
  return (
    <section id={id} className={cn("relative py-24 sm:py-28 lg:py-32", className)}>
      {children}
    </section>
  );
}
