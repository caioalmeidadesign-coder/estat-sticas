import { cn } from "@/lib/utils";
import { COSTS, TONE_BG } from "./dashboard-data";
import { PanelCard } from "./PanelCard";

/** Cost share by category as one segmented bar + legend (illustrative). */
export function CostBreakdown({ className }: { className?: string | undefined }) {
  return (
    <PanelCard title="Custos por categoria" className={className}>
      <div className="grow-x flex h-2.5 gap-0.5 overflow-hidden rounded-full" style={{ ["--reveal-delay" as string]: "700ms" }}>
        {COSTS.map((c) => (
          <span key={c.id} className={cn("h-full", TONE_BG[c.tone])} style={{ width: `${c.share}%` }} />
        ))}
      </div>
      <ul className="mt-4 space-y-2.5">
        {COSTS.map((c) => (
          <li key={c.id} className="flex items-center justify-between text-[0.6875rem]">
            <span className="flex items-center gap-2 text-navy">
              <span aria-hidden="true" className={cn("size-2 rounded-sm", TONE_BG[c.tone])} />
              {c.label}
            </span>
            <span className="font-medium tabular-nums text-muted-foreground">{c.share}%</span>
          </li>
        ))}
      </ul>
    </PanelCard>
  );
}
