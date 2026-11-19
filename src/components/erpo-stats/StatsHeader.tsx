import { STATS_CONTENT } from "./stats-data";

export function StatsHeader() {
  return (
    <header className="reveal mx-auto max-w-3xl text-center">
      <p className="eyebrow text-brand">{STATS_CONTENT.eyebrow}</p>
      <h2
        id="erpo-stats-title"
        className="mt-4 text-[2rem] font-bold leading-[1.1] tracking-[-0.02em] text-navy md:text-[2.75rem] xl:text-[3.25rem]"
      >
        {STATS_CONTENT.title}
      </h2>
      <p className="mx-auto mt-4 max-w-[52ch] text-base leading-relaxed text-muted-foreground md:text-lg">
        {STATS_CONTENT.description}
      </p>
    </header>
  );
}
