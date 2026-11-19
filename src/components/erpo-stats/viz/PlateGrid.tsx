import { UnitLegend } from "./UnitLegend";

/** Miniature licence plate: blue top band + white body. */
function Plate() {
  return (
    <span className="flex h-2.5 w-[18px] flex-col overflow-hidden rounded-[2px] border border-navy/40 bg-card">
      <span className="h-[3px] w-full bg-brand" />
    </span>
  );
}

interface PlateGridProps {
  /** Number of plate icons (published figure ÷ unit) */
  count: number;
  columns: number;
  legend: string;
}

/** Unit chart for managed plates: each icon stands for a fixed amount. */
export function PlateGrid({ count, columns, legend }: PlateGridProps) {
  return (
    <figure className="mt-auto pt-10" aria-hidden="true">
      <div className="grid w-fit gap-1" style={{ gridTemplateColumns: `repeat(${columns}, 18px)` }}>
        {Array.from({ length: count }, (_, i) => (
          <span
            key={i}
            className="pop-dot transition-transform duration-500 group-hover/module:-translate-y-px"
            style={{ ["--reveal-delay" as string]: `${300 + (i % columns) * 40 + Math.floor(i / columns) * 60}ms` }}
          >
            <Plate />
          </span>
        ))}
      </div>
      <figcaption>
        <UnitLegend swatch={<Plate />}>{legend}</UnitLegend>
      </figcaption>
    </figure>
  );
}
