import { UnitLegend } from "./UnitLegend";

/** 100 cells = 100% of the time; filled cells show availability. */
export function UptimeGrid({ filled = 99, columns = 25 }: { filled?: number; columns?: number }) {
  return (
    <figure className="mt-auto pt-10" aria-hidden="true">
      <div className="grid w-fit gap-[3px]" style={{ gridTemplateColumns: `repeat(${columns}, 6px)` }}>
        {Array.from({ length: 100 }, (_, i) => (
          <span
            key={i}
            className={
              i < filled
                ? "pop-dot size-1.5 rounded-[1px] bg-brand transition-colors duration-500 group-hover/module:bg-navy"
                : "pop-dot size-1.5 rounded-[1px] border border-brand/50"
            }
            style={{ ["--reveal-delay" as string]: `${300 + i * 9}ms` }}
          />
        ))}
      </div>
      <figcaption>
        <UnitLegend swatch={<span className="size-1.5 rounded-[1px] bg-brand" />}>
          Cada célula = 1% do tempo
        </UnitLegend>
      </figcaption>
    </figure>
  );
}
