import type { ReactNode } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { useInView } from "./use-in-view";

const moduleVariants = cva(
  "group/module relative flex flex-col overflow-hidden transition-colors duration-500",
  {
    variants: {
      tone: {
        plain: "bg-transparent text-foreground hover:bg-card",
        navy: "bg-navy text-navy-foreground",
      },
      padding: {
        md: "p-6 md:p-8",
        lg: "p-8 md:p-10 lg:p-12",
      },
    },
    defaultVariants: { tone: "plain", padding: "md" },
  },
);

interface StatModuleProps extends VariantProps<typeof moduleVariants> {
  /** Small group tag shown on top: Escala / Resultado / Plataforma */
  tag: string;
  /** Index shown next to the tag, e.g. "01" */
  index: string;
  children: ReactNode;
  className?: string;
  delay?: number;
}

/**
 * One board cell. Equivalent to one Elementor container:
 * tag row → figure → label → optional visual.
 */
export function StatModule({ tag, index, tone, padding, children, className, delay = 0 }: StatModuleProps) {
  const { ref, inView } = useInView<HTMLElement>();
  const onNavy = tone === "navy";

  return (
    <article
      ref={ref}
      data-inview={inView}
      className={cn(moduleVariants({ tone, padding }), className)}
      style={{ ["--reveal-delay" as string]: `${delay}ms` }}
    >
      <header
        className={cn(
          "reveal caption mb-8 flex items-center gap-3 font-medium uppercase tracking-[0.14em] md:mb-10",
          onNavy ? "text-navy-muted" : "text-muted-foreground",
        )}
      >
        <span className={cn("tabular-nums", onNavy ? "text-highlight" : "text-brand")}>{index}</span>
        <span aria-hidden="true" className={cn("h-px w-6", onNavy ? "bg-navy-line" : "bg-hairline")} />
        <span>{tag}</span>
      </header>
      {children}
    </article>
  );
}
