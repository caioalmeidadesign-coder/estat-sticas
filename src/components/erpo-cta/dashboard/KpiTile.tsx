import { cn } from "@/lib/utils";
import { TONE_BG, type Tone } from "./dashboard-data";

export function KpiTile({ label, value, tone }: { label: string; value: string; tone: Tone }) {
  return (
    <div className="rounded-xl bg-surface px-4 py-3 xl:px-3">
      <p className="flex items-center gap-1.5 whitespace-nowrap text-[0.6875rem] font-medium text-muted-foreground">
        <span aria-hidden="true" className={cn("size-1.5 rounded-full", TONE_BG[tone])} />
        {label}
      </p>
      <p className="mt-1 font-display text-xl font-bold tracking-[-0.02em] text-navy tabular-nums md:text-[1.375rem]">
        {value}
      </p>
    </div>
  );
}
