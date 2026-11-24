import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Factor } from "./why-now-data";

interface FactorRowProps {
  factor: Factor;
  icon: LucideIcon;
  /** The closing factor: the turning point, shown on navy */
  featured?: boolean;
  isLast?: boolean;
  delay?: number;
}

function FactorTitle({ factor }: { factor: Factor }) {
  const { title, emphasis } = factor;
  if (emphasis && title.startsWith(emphasis)) {
    return (
      <>
        <span className="text-brand">{emphasis}</span>
        {title.slice(emphasis.length)}
      </>
    );
  }
  return <>{title}</>;
}

function FactorIcon({ icon: Icon, featured, className }: { icon: LucideIcon; featured?: boolean | undefined; className?: string | undefined }) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "flex shrink-0 items-center justify-center rounded-full transition-colors duration-300",
        featured
          ? "bg-highlight text-navy"
          : "border border-hairline text-brand group-hover:border-brand group-hover:bg-brand group-hover:text-primary-foreground",
        className,
      )}
    >
      <Icon className="size-[55%]" strokeWidth={1.6} />
    </span>
  );
}

/**
 * One factor on the timeline: rail marker | number + title + text | icon.
 * The rail links the factors and turns orange as it reaches the featured one.
 */
export function FactorRow({ factor, icon, featured, isLast, delay = 0 }: FactorRowProps) {
  return (
    <li
      className="reveal group relative grid grid-cols-[32px_1fr] gap-x-4 md:grid-cols-[64px_1fr] md:gap-x-6"
      style={{ ["--reveal-delay" as string]: `${delay}ms` }}
    >
      <div aria-hidden="true" className="relative flex justify-center">
        <span
          className={cn(
            "absolute top-0 w-px",
            isLast ? "h-[42px] md:h-[50px]" : "h-full",
            featured ? "bg-highlight" : "bg-hairline",
          )}
        />
        <span
          className={cn(
            "relative z-10 size-4 rounded-full border-2 transition-colors duration-300",
            featured
              ? "mt-[34px] border-highlight bg-highlight md:mt-[42px]"
              : "mt-[34px] border-brand bg-card group-hover:bg-brand",
          )}
        />
      </div>

      <div className="pb-8 md:pb-10">
        <div
          className={cn(
            "flex items-start gap-8",
            featured ? "rounded-2xl bg-navy p-6 md:p-10" : "pt-6 md:pt-8",
          )}
        >
          <div className="min-w-0 flex-1">
            <div className="flex h-9 items-center gap-3 md:h-5">
              <FactorIcon icon={icon} featured={featured} className="size-9 md:hidden" />
              <p
                className={cn(
                  "font-display text-sm font-bold tracking-[0.12em] tabular-nums",
                  featured ? "text-highlight" : "text-brand",
                )}
              >
                {factor.number}
              </p>
            </div>
            <h3
              className={cn(
                "mt-4 text-[1.625rem] font-semibold leading-[1.15] tracking-[-0.02em] md:mt-3 md:text-[2.125rem]",
                featured ? "text-navy-foreground" : "text-navy",
              )}
            >
              {featured ? factor.title : <FactorTitle factor={factor} />}
            </h3>
            <p
              className={cn(
                "mt-3 max-w-[46ch] text-base leading-relaxed md:text-lg",
                featured ? "text-navy-muted" : "text-muted-foreground",
              )}
            >
              {factor.text}
            </p>
          </div>
          <FactorIcon icon={icon} featured={featured} className="hidden size-16 md:flex" />
        </div>
      </div>
    </li>
  );
}
