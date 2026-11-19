import { STATS_CONTENT } from "./stats-data";
import { useInView } from "./use-in-view";

export function StatsHeader() {
  const { ref, inView } = useInView<HTMLDivElement>(0.4);
  return (
    <div
      ref={ref}
      data-inview={inView}
      className="grid gap-8 pb-12 md:pb-16 xl:grid-cols-12 xl:items-end xl:gap-8"
    >
      <div className="xl:col-span-7">
        <p className="reveal eyebrow flex items-center gap-3 text-brand">
          <span aria-hidden="true" className="size-2 bg-highlight" />
          {STATS_CONTENT.eyebrow}
        </p>
        <h2
          id="erpo-stats-title"
          className="reveal mt-6 max-w-[14ch] text-[2.5rem] font-bold leading-[1.02] tracking-[-0.035em] text-navy md:text-[3.5rem] xl:text-[4.25rem]"
          style={{ ["--reveal-delay" as string]: "80ms" }}
        >
          {STATS_CONTENT.title}
        </h2>
      </div>
      <div className="reveal xl:col-span-4 xl:col-start-9" style={{ ["--reveal-delay" as string]: "160ms" }}>
        <p className="max-w-[44ch] text-lg leading-relaxed text-muted-foreground">{STATS_CONTENT.description}</p>
        <p className="caption mt-6 flex items-center gap-2 text-muted-foreground">
          <span aria-hidden="true" className="flex gap-[3px]">
            <span className="size-1.5 rounded-full bg-brand" />
            <span className="size-1.5 rounded-full bg-brand" />
            <span className="size-1.5 rounded-full bg-brand/40" />
          </span>
          Cada marca gráfica representa uma unidade real do indicador.
        </p>
      </div>
    </div>
  );
}
