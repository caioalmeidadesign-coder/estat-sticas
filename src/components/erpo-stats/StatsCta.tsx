import { ArrowRight, ShieldCheck } from "lucide-react";
import { STATS_CONTENT } from "./stats-data";

/** Closing band: title + supporting text + outline button. */
export function StatsCta() {
  return (
    <aside className="reveal mt-8 flex flex-col gap-6 rounded-2xl border border-hairline bg-surface-strong p-6 md:mt-10 md:p-8 xl:flex-row xl:items-center xl:gap-10 xl:px-10">
      <div className="flex items-center gap-4 xl:w-[36%] xl:shrink-0">
        <span aria-hidden="true" className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-brand text-primary-foreground">
          <ShieldCheck className="size-6" strokeWidth={1.75} />
        </span>
        <h3 className="text-lg font-bold leading-snug text-navy md:text-xl">{STATS_CONTENT.ctaTitle}</h3>
      </div>
      <p className="text-sm leading-relaxed text-muted-foreground md:text-base xl:flex-1">{STATS_CONTENT.ctaText}</p>
      <a
        href={STATS_CONTENT.ctaHref}
        className="inline-flex h-12 shrink-0 items-center justify-center gap-2 self-start rounded-lg border border-brand px-6 font-display text-sm font-semibold text-brand transition-colors duration-200 hover:bg-brand hover:text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 xl:self-auto"
      >
        {STATS_CONTENT.ctaLabel}
        <ArrowRight className="size-4" aria-hidden="true" />
      </a>
    </aside>
  );
}
