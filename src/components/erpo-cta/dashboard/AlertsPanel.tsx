import { FileWarning, Fuel, Wrench, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { ALERTS, type AlertKind } from "./dashboard-data";
import { PanelCard } from "./PanelCard";

export const ALERT_ICONS: Record<AlertKind, LucideIcon> = {
  manutencao: Wrench,
  documento: FileWarning,
  combustivel: Fuel,
};

export function AlertsPanel({ className }: { className?: string | undefined }) {
  return (
    <PanelCard
      title="Alertas recentes"
      className={className}
      aside={
        <span className="rounded-full bg-highlight-soft px-2 py-0.5 text-[0.625rem] font-semibold text-navy">
          {ALERTS.length} novos
        </span>
      }
    >
      <ul className="space-y-1">
        {ALERTS.map((a) => {
          const Icon = ALERT_ICONS[a.id];
          return (
            <li key={a.id} className="flex items-center gap-3 rounded-lg px-1 py-1.5">
              <span aria-hidden="true" className="flex size-7 shrink-0 items-center justify-center rounded-md bg-highlight-soft text-navy">
                <Icon className="size-3.5" strokeWidth={1.75} />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block truncate text-[0.75rem] font-medium text-navy">{a.title}</span>
                <span className="block truncate text-[0.625rem] text-muted-foreground">{a.detail}</span>
              </span>
              <span aria-hidden="true" className={cn("size-1.5 shrink-0 rounded-full bg-highlight")} />
            </li>
          );
        })}
      </ul>
    </PanelCard>
  );
}
