import { FileText, Fuel, LayoutDashboard, Settings, Truck, Wrench } from "lucide-react";
import { cn } from "@/lib/utils";
import { ActivityList } from "./ActivityList";
import { AlertsPanel, ALERT_ICONS } from "./AlertsPanel";
import { CostBreakdown } from "./CostBreakdown";
import { ALERTS, DASHBOARD_KPIS } from "./dashboard-data";
import { KpiTile } from "./KpiTile";
import { PerformanceChart } from "./PerformanceChart";

const NAV = [LayoutDashboard, Truck, Wrench, Fuel, FileText, Settings];

/** Floating notification overlapping the panel edge (desktop only, decorative duplicate). */
function AlertToast() {
  const alert = ALERTS[0]!;
  const Icon = ALERT_ICONS[alert.id];
  return (
    <div
      aria-hidden="true"
      className="reveal absolute -top-7 left-[34%] z-20 hidden w-[264px] items-center gap-3 rounded-xl bg-card p-3.5 shadow-toast xl:flex"
      style={{ ["--reveal-delay" as string]: "1100ms" }}
    >
      <span className="relative flex size-9 shrink-0 items-center justify-center rounded-lg bg-highlight text-navy">
        <Icon className="size-4" strokeWidth={1.75} />
        <span className="pulse-dot absolute -right-0.5 -top-0.5 size-2.5 rounded-full border-2 border-card bg-highlight" />
      </span>
      <span className="min-w-0">
        <span className="block text-[0.75rem] font-semibold text-navy">{alert.title}</span>
        <span className="block text-[0.6875rem] text-muted-foreground">{alert.detail}</span>
      </span>
    </div>
  );
}

/**
 * Product depiction: ERPO fleet overview. Built from independent modules
 * (KPIs, chart, costs, alerts, activities) so it reads as a real, editable UI.
 */
export function FleetDashboard({ className }: { className?: string | undefined }) {
  return (
    <div className={cn("relative", className)}>
      {/* Solid institutional-blue plane behind the product: depth without gradients */}
      <div aria-hidden="true" className="absolute -top-6 bottom-[-24px] left-10 right-[-40%] rounded-3xl bg-brand md:-top-10 md:bottom-[-40px] md:left-20" />

      <AlertToast />

      <div
        className="reveal-x relative flex rounded-2xl bg-card shadow-float"
        style={{ ["--reveal-delay" as string]: "250ms" }}
        role="img"
        aria-label="Ilustração da plataforma ERPO: visão geral da frota com veículos, desempenho, custos, alertas e atividades"
      >
        <aside className="hidden w-16 shrink-0 flex-col items-center gap-2 rounded-l-2xl bg-navy-deep py-5 md:flex">
          <span className="mb-4 font-display text-[0.6875rem] font-bold tracking-[0.08em] text-navy-foreground">
            ERPO<span className="text-highlight">.</span>
          </span>
          {NAV.map((Icon, i) => (
            <span
              key={i}
              className={cn(
                "flex size-9 items-center justify-center rounded-lg",
                i === 0 ? "bg-navy-line text-navy-foreground" : "text-navy-muted/70",
              )}
            >
              <Icon className="size-4" strokeWidth={1.75} />
            </span>
          ))}
        </aside>

        <div className="min-w-0 flex-1 p-4 md:p-6">
          <div className="mb-4 flex items-center justify-between gap-3">
            <div>
              <p className="font-display text-sm font-bold text-navy md:text-base">Visão geral</p>
              <p className="text-[0.625rem] text-muted-foreground">Frota completa</p>
            </div>
            <span className="rounded-full bg-surface px-3 py-1 text-[0.625rem] font-medium text-muted-foreground">
              Últimos 6 meses
            </span>
          </div>

          <div className="grid grid-cols-2 gap-2.5 md:grid-cols-4 md:gap-3">
            {DASHBOARD_KPIS.map((k) => (
              <KpiTile key={k.id} label={k.label} value={k.value} tone={k.tone} />
            ))}
          </div>

          <div className="mt-2.5 grid gap-2.5 md:mt-3 md:grid-cols-5 md:gap-3">
            <PerformanceChart className="md:col-span-3" />
            <CostBreakdown className="hidden md:col-span-2 md:block" />
          </div>

          <div className="mt-2.5 grid gap-2.5 md:mt-3 md:grid-cols-2 md:gap-3">
            <AlertsPanel />
            <ActivityList className="hidden md:block" />
          </div>
        </div>
      </div>
    </div>
  );
}
