import { Activity, CircleCheckBig, Plug, TrendingDown, Truck, Users, type LucideIcon } from "lucide-react";
import { BrazilMap } from "./map/BrazilMap";
import { StatCard } from "./StatCard";
import { StatsCta } from "./StatsCta";
import { StatsHeader } from "./StatsHeader";
import { SERVED_STATES, STATS, STATS_ORDER, type StatId } from "./stats-data";
import { useInView } from "./use-in-view";

const ICONS: Record<StatId, LucideIcon> = {
  empresas: Users,
  placas: Truck,
  custos: TrendingDown,
  eventos: Activity,
  disponibilidade: CircleCheckBig,
  integracoes: Plug,
};

/**
 * ERPO statistics: centered header · 3 × 2 indicator cards + Brazil map · closing CTA band.
 * Desktop: cards (7 cols) beside map (5 cols) · tablet: 2-col cards, map below · mobile: stacked.
 */
export function StatsSection() {
  const { ref, inView } = useInView<HTMLElement>(0.1);

  return (
    <section
      ref={ref}
      data-inview={inView}
      aria-labelledby="erpo-stats-title"
      className="bg-background py-16 md:py-24 xl:py-28"
    >
      <div className="mx-auto max-w-[1280px] px-5 md:px-10">
        <StatsHeader />

        <div className="mt-10 grid grid-cols-1 gap-12 md:mt-14 xl:grid-cols-12 xl:items-center xl:gap-10">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:col-span-7 xl:grid-cols-3 xl:gap-5">
            {STATS_ORDER.map((id, i) => (
              <StatCard key={id} stat={STATS[id]} icon={ICONS[id]} delay={120 + i * 80} />
            ))}
          </div>

          <BrazilMap served={SERVED_STATES} className="xl:col-span-5" />
        </div>

        <StatsCta />
      </div>
    </section>
  );
}
