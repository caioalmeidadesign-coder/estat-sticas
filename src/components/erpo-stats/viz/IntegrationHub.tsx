import { UnitLegend } from "./UnitLegend";

const W = 232;
const H = 112;
const CX = W / 2;
const CY = H / 2;
const RX = 100;
const RY = 46;

/** One node per integration, all wired to the ERPO core. Nodes are intentionally unlabeled. */
export function IntegrationHub({ count = 10 }: { count?: number }) {
  const nodes = Array.from({ length: count }, (_, i) => {
    const a = (i / count) * Math.PI * 2 - Math.PI / 2;
    const x = CX + RX * Math.cos(a);
    const y = CY + RY * Math.sin(a);
    return { x, y, length: Math.hypot(x - CX, y - CY) };
  });

  return (
    <figure className="mt-auto pt-10" aria-hidden="true">
      <svg viewBox={`0 0 ${W} ${H}`} className="h-auto w-full max-w-[232px] overflow-visible">
        {nodes.map((n, i) => (
          <line
            key={`l${i}`}
            x1={CX}
            y1={CY}
            x2={n.x}
            y2={n.y}
            className="draw-stroke stroke-hairline transition-colors duration-500 group-hover/module:stroke-brand/40"
            strokeWidth={1}
            strokeDasharray={n.length}
            style={{ ["--dash-length" as string]: n.length, ["--reveal-delay" as string]: `${300 + i * 60}ms` }}
          />
        ))}
        {nodes.map((n, i) => (
          <circle
            key={`n${i}`}
            cx={n.x}
            cy={n.y}
            r={4.5}
            className="pop-dot fill-card stroke-brand"
            strokeWidth={1.5}
            style={{
              transformBox: "fill-box",
              transformOrigin: "center",
              ["--reveal-delay" as string]: `${700 + i * 60}ms`,
            }}
          />
        ))}
        <rect x={CX - 26} y={CY - 12} width={52} height={24} rx={4} className="fill-navy" />
        <text
          x={CX}
          y={CY + 4}
          textAnchor="middle"
          className="fill-navy-foreground font-display text-[11px] font-bold tracking-[0.12em]"
        >
          ERPO
        </text>
      </svg>
      <figcaption>
        <UnitLegend swatch={<span className="size-2 rounded-full border-[1.5px] border-brand bg-card" />}>
          Cada nó = 1 integração
        </UnitLegend>
      </figcaption>
    </figure>
  );
}
