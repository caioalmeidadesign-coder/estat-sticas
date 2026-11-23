import { ClipboardCheck, Fuel, Wrench, type LucideIcon } from "lucide-react";
import { ACTIVITIES, type ActivityKind } from "./dashboard-data";
import { PanelCard } from "./PanelCard";

const ICONS: Record<ActivityKind, LucideIcon> = {
  abastecimento: Fuel,
  manutencao: Wrench,
  checklist: ClipboardCheck,
};

export function ActivityList({ className }: { className?: string | undefined }) {
  return (
    <PanelCard title="Atividades" className={className}>
      <ul className="divide-y divide-hairline">
        {ACTIVITIES.map((a) => {
          const Icon = ICONS[a.id];
          return (
            <li key={a.id} className="flex items-center gap-3 py-2 first:pt-0 last:pb-0">
              <span aria-hidden="true" className="flex size-7 shrink-0 items-center justify-center rounded-md bg-brand-pale text-brand">
                <Icon className="size-3.5" strokeWidth={1.75} />
              </span>
              <span className="flex-1 text-[0.75rem] font-medium text-navy">{a.title}</span>
              <span className="text-[0.625rem] tabular-nums text-muted-foreground">{a.time}</span>
            </li>
          );
        })}
      </ul>
    </PanelCard>
  );
}
