import { UnitLegend } from "./UnitLegend";

interface DotMatrixProps {
  /** Total number of dots — must equal the published figure */
  count: number;
  columns: number;
  legend: string;
}

/** Unit chart: one dot per unit (e.g. 161 dots = 161 empresas). */
export function DotMatrix({ count, columns, legend }: DotMatrixProps) {
  return (
    <figure className="mt-auto pt-10" aria-hidden="true">
      <div
        className="grid w-fit gap-1"
        style={{ gridTemplateColumns: `repeat(${columns}, 6px)` }}
      >
        {Array.from({ length: count }, (_, i) => (
          <span
            key={i}
            className="pop-dot size-1.5 rounded-full bg-brand transition-colors duration-500 group-hover/module:bg-navy"
            style={{ ["--reveal-delay" as string]: `${300 + (i % columns) * 28 + Math.floor(i / columns) * 18}ms` }}
          />
        ))}
      </div>
      <figcaption>
        <UnitLegend swatch={<span className="size-1.5 rounded-full bg-brand" />}>{legend}</UnitLegend>
      </figcaption>
    </figure>
  );
}
