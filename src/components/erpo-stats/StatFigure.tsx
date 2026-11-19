import { cn } from "@/lib/utils";
import { formatStat, type StatItem } from "./stats-data";

interface StatFigureProps {
  stat: StatItem;
  /** Tailwind size classes for the number */
  sizeClassName?: string;
  className?: string;
}

/** The published figure: prefix + value + suffix, read as one phrase by screen readers. */
export function StatFigure({ stat, sizeClassName, className }: StatFigureProps) {
  const isPercent = stat.suffix === "%";
  return (
    <p className={cn("stat-number whitespace-nowrap", sizeClassName, className)}>
      <span className="sr-only">{formatStat(stat)}</span>
      <span aria-hidden="true">
        {stat.prefix}
        {stat.value}
        {stat.suffix && <span className={cn(!isPercent && "ml-[0.2em] text-[0.7em]")}>{stat.suffix}</span>}
      </span>
    </p>
  );
}
