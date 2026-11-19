import { cn } from "@/lib/utils";
import { MAP_CONTENT } from "../stats-data";
import { BRAZIL_STATES, BRAZIL_VIEWBOX } from "./brazil-states";

interface BrazilMapProps {
  /** UF codes to highlight, e.g. ["SP", "MG"] */
  served: string[];
  className?: string;
}

/** Brazil by state; served states use the orange accent. Name shows on hover. */
export function BrazilMap({ served, className }: BrazilMapProps) {
  const servedSet = new Set(served.map((uf) => uf.toUpperCase()));
  const servedNames = BRAZIL_STATES.filter((s) => servedSet.has(s.uf)).map((s) => s.name);

  return (
    <figure className={cn("reveal flex flex-col", className)} style={{ ["--reveal-delay" as string]: "200ms" }}>
      <figcaption>
        <h3 className="text-xl font-bold text-navy md:text-2xl">{MAP_CONTENT.title}</h3>
        {servedSet.size > 0 && (
          <p className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
            <span aria-hidden="true" className="size-2.5 rounded-full bg-highlight" />
            {MAP_CONTENT.legend}
          </p>
        )}
      </figcaption>

      <svg
        viewBox={BRAZIL_VIEWBOX}
        role="img"
        aria-label={
          servedNames.length
            ? `Mapa do Brasil. ${MAP_CONTENT.legend}: ${servedNames.join(", ")}.`
            : "Mapa do Brasil por estado."
        }
        className="mx-auto mt-6 h-auto w-full max-w-[520px]"
      >
        {BRAZIL_STATES.map((state) => {
          const isServed = servedSet.has(state.uf);
          return (
            <path
              key={state.uf}
              d={state.d}
              className={cn(
                "stroke-card transition-[fill] duration-300",
                isServed ? "fill-highlight hover:fill-highlight-strong" : "fill-map-neutral hover:fill-map-neutral-strong",
              )}
              strokeWidth={1.25}
              strokeLinejoin="round"
            >
              <title>{state.name}</title>
            </path>
          );
        })}
      </svg>
    </figure>
  );
}
