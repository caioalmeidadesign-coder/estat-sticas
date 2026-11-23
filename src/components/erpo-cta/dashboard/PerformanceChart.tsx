import { PERFORMANCE } from "./dashboard-data";
import { PanelCard } from "./PanelCard";

const W = 320;
const H = 132;
const PAD_L = 24;
const PAD_B = 20;
const MIN = 70;
const MAX = 95;
const GRID = [70, 80, 90];

/** Monthly line chart (illustrative data). */
export function PerformanceChart({ className }: { className?: string | undefined }) {
  const step = (W - PAD_L - 8) / (PERFORMANCE.length - 1);
  const pts = PERFORMANCE.map((p, i) => ({
    ...p,
    x: PAD_L + i * step,
    y: 8 + (1 - (p.value - MIN) / (MAX - MIN)) * (H - PAD_B - 8),
  }));
  const line = pts.map((p, i) => `${i ? "L" : "M"}${p.x.toFixed(1)} ${p.y.toFixed(1)}`).join(" ");
  const area = `${line} L${pts.at(-1)!.x} ${H - PAD_B} L${pts[0]!.x} ${H - PAD_B} Z`;
  const last = pts.at(-1)!;
  const y = (v: number) => 8 + (1 - (v - MIN) / (MAX - MIN)) * (H - PAD_B - 8);

  return (
    <PanelCard
      title="Desempenho da frota"
      className={className}
      aside={<span className="text-[0.625rem] text-muted-foreground">Índice mensal</span>}
    >
      <svg viewBox={`0 0 ${W} ${H}`} className="h-auto w-full" role="img" aria-label="Gráfico ilustrativo de desempenho mensal da frota">
        {GRID.map((g) => (
          <g key={g}>
            <line x1={PAD_L} x2={W} y1={y(g)} y2={y(g)} className="stroke-hairline" strokeDasharray="2 3" />
            <text x={0} y={y(g) + 3} className="fill-muted-foreground text-[8px]">
              {g}
            </text>
          </g>
        ))}
        <path d={area} className="reveal fill-brand/10" style={{ ["--reveal-delay" as string]: "900ms" }} />
        <path
          d={line}
          pathLength={1}
          className="draw-line fill-none stroke-brand"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ ["--reveal-delay" as string]: "500ms" }}
        />
        <circle cx={last.x} cy={last.y} r={4} className="fill-card stroke-brand" strokeWidth={2} />
        {pts.map((p) => (
          <text key={p.month} x={p.x} y={H - 4} textAnchor="middle" className="fill-muted-foreground text-[8px]">
            {p.month}
          </text>
        ))}
      </svg>
    </PanelCard>
  );
}
