import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/container";

type SectionShellProps = {
  id?: string;
  eyebrow?: string;
  title?: string;
  intro?: string;
  className?: string;
  children: React.ReactNode;
};

export function SectionShell({
  id,
  eyebrow,
  title,
  intro,
  className,
  children,
}: SectionShellProps) {
  return (
    <section id={id} className={cn("relative py-24 sm:py-28 lg:py-32", className)}>
      <Container>
        {eyebrow || title || intro ? (
          <div className="mb-14 max-w-[780px] sm:mb-16">
            {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
            {title ? (
              <>
                <div className="mt-5 gold-line" />
                <h2 className="mt-6 text-balance text-4xl font-semibold tracking-[-0.05em] text-foreground sm:text-[3.25rem] sm:leading-[1.02]">
                  {title}
                </h2>
              </>
            ) : null}
            {intro ? (
              <p className="mt-6 max-w-[640px] text-lg leading-8 text-muted-foreground">{intro}</p>
            ) : null}
          </div>
        ) : null}
        {children}
      </Container>
    </section>
  );
}
