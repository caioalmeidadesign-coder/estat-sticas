import { cn } from "@/lib/utils";
import { formatStat, type StatItem } from "./stats-data";

interface StatFigureProps {
  stat: StatItem;
  /** Tailwind size classes for the number */
  sizeClassName?: string;
  /** Class for the prefix (e.g. orange accent on dark modules) */
  prefixClassName?: string;
  className?: string;
}

/** The published figure: prefix + value + suffix, read as one phrase by screen readers. */
export function StatFigure({ stat, sizeClassName, prefixClassName, className }: StatFigureProps) {
  const isPercent = stat.suffix === "%";
  return (
    <p className={cn("stat-number whitespace-nowrap", sizeClassName, className)}>
      <span className="sr-only">{formatStat(stat)}</span>
      <span aria-hidden="true">
        {stat.prefix && <span className={cn("mr-[0.02em] text-brand", prefixClassName)}>{stat.prefix}</span>}
        {stat.value}
        {stat.suffix && (
          <span className={cn(isPercent ? "ml-[0.02em]" : "ml-[0.18em] text-[0.5em] tracking-[-0.02em]")}>
            {stat.suffix}
          </span>
        )}
      </span>
    </p>
  );
}
