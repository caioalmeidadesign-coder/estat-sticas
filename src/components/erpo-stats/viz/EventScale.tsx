const TICKS = 50; // 50 ticks × 10 mil = 500 mil
const MARKS = ["0", "100 mil", "200 mil", "300 mil", "400 mil", "500 mil"];

/** Cumulative scale: 50 ticks, each = 10 mil eventos. Every 10th tick marks 100 mil. */
export function EventScale() {
  return (
    <figure className="w-full" aria-hidden="true">
      <div className="grid h-12 items-end gap-[3px] md:h-16" style={{ gridTemplateColumns: `repeat(${TICKS}, minmax(0, 1fr))` }}>
        {Array.from({ length: TICKS }, (_, i) => {
          const major = (i + 1) % 10 === 0;
          return (
            <span
              key={i}
              className={
                major
                  ? "pop-dot h-full rounded-[1px] bg-brand"
                  : "pop-dot h-1/2 rounded-[1px] bg-navy/20 transition-[height,background-color] duration-500 group-hover/module:h-3/5 group-hover/module:bg-navy/30"
              }
              style={{ ["--reveal-delay" as string]: `${300 + i * 22}ms` }}
            />
          );
        })}
      </div>
      <div className="caption mt-3 flex justify-between tabular-nums text-muted-foreground">
        {MARKS.map((m) => (
          <span key={m}>{m}</span>
        ))}
      </div>
      <figcaption className="caption mt-4 flex items-center gap-2 text-muted-foreground">
        <span className="h-3 w-[3px] rounded-[1px] bg-navy/20" />
        Cada traço = 10 mil eventos por dia
      </figcaption>
    </figure>
  );
}
