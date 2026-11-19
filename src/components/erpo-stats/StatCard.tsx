import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { StatFigure } from "./StatFigure";
import type { StatItem } from "./stats-data";

interface StatCardProps {
  stat: StatItem;
  icon: LucideIcon;
  /** Entrance delay in ms (staggered reveal) */
  delay?: number;
  className?: string;
}

/**
 * One indicator card: icon → figure → label → description.
 * Mobile: horizontal (icon left). Tablet/desktop: stacked and centered.
 */
export function StatCard({ stat, icon: Icon, delay = 0, className }: StatCardProps) {
  return (
    <article
      className={cn(
        "reveal group flex items-start gap-5 rounded-2xl border border-hairline bg-card p-6 shadow-card",
        "transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1 hover:border-brand/25 hover:shadow-card-hover",
        "md:flex-col md:items-center md:gap-0 md:px-5 md:py-8 md:text-center",
        className,
      )}
      style={{ ["--reveal-delay" as string]: `${delay}ms` }}
    >
      <span
        aria-hidden="true"
        className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-brand-soft text-brand transition-colors duration-300 group-hover:bg-brand group-hover:text-primary-foreground md:size-14"
      >
        <Icon className="size-6 md:size-7" strokeWidth={1.75} />
      </span>
      <div className="min-w-0 md:mt-6">
        <StatFigure stat={stat} sizeClassName="text-[2.5rem] md:text-[3rem] xl:text-[2.75rem]" className="text-brand" />
        <h3 className="mt-2 text-base font-semibold text-navy md:mt-4 md:text-lg xl:text-base">{stat.label}</h3>
        <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground md:mx-auto md:max-w-[24ch]">
          {stat.description}
        </p>
      </div>
    </article>
  );
}
