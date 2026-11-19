import { StatFigure } from "./StatFigure";
import { StatModule } from "./StatModule";
import { StatsHeader } from "./StatsHeader";
import { STATS } from "./stats-data";
import { CostBlocks } from "./viz/CostBlocks";
import { DotMatrix } from "./viz/DotMatrix";
import { EventScale } from "./viz/EventScale";
import { IntegrationHub } from "./viz/IntegrationHub";
import { PlateGrid } from "./viz/PlateGrid";
import { UptimeGrid } from "./viz/UptimeGrid";

const SECONDARY_SIZE = "text-[3.5rem] md:text-[4rem]";
const labelClass = "reveal stat-label mt-4 text-muted-foreground";

/**
 * ERPO statistics — "Unidades reais".
 * A hairline data board: big editorial figures, each paired with a unit chart
 * in which every mark stands for a real quantity of that indicator.
 *
 * Board (xl, 12 cols)            Tablet (6 cols)      Mobile (1 col)
 * ┌──────────┬─────┬─────┐       ┌─────┬─────┐        01 … 06 stacked
 * │ 03 −30%  │ 01  │ 02  │       │ 01  │ 02  │
 * │  (navy)  ├─────┼─────┤       ├─────┴─────┤
 * │          │ 04  │ 05  │       │ 03 navy   │
 * ├──────────┴─────┴─────┤       ├─────┬─────┤
 * │ 06 eventos / dia     │       │ 04  │ 05  │
 * └──────────────────────┘       ├─────┴─────┤
 *                                │ 06        │
 */
export function StatsSection() {
  const { empresas, placas, custos, disponibilidade, integracoes, eventos } = STATS;

  return (
    <section aria-labelledby="erpo-stats-title" className="bg-background py-20 md:py-28 xl:py-32">
      <div className="mx-auto max-w-[1280px] px-6 md:px-10 xl:px-0">
        <StatsHeader />

        <div className="grid grid-cols-1 gap-px border border-hairline bg-hairline md:grid-cols-6 xl:grid-cols-12">
          {/* 01 — Empresas */}
          <StatModule
            tag={empresas.group}
            index="01"
            className="bg-background md:col-span-3 xl:col-start-7 xl:row-start-1"
            delay={0}
          >
            <StatFigure stat={empresas} sizeClassName={SECONDARY_SIZE} className="reveal text-navy" />
            <p className={labelClass}>{empresas.label}</p>
            <DotMatrix count={161} columns={23} legend="Cada ponto = 1 empresa" />
          </StatModule>

          {/* 02 — Placas */}
          <StatModule
            tag={placas.group}
            index="02"
            className="bg-background md:col-span-3 xl:col-start-10 xl:row-start-1"
            delay={80}
          >
            <StatFigure stat={placas} sizeClassName={SECONDARY_SIZE} className="reveal text-navy" />
            <p className={labelClass}>{placas.label}</p>
            <PlateGrid count={40} columns={10} legend="Cada ícone = 1.000 placas" />
          </StatModule>

          {/* 03 — Custos (featured) */}
          <StatModule
            tag={custos.group}
            index="03"
            tone="navy"
            padding="lg"
            className="md:col-span-6 xl:col-span-6 xl:col-start-1 xl:row-span-2 xl:row-start-1"
            delay={0}
          >
            <StatFigure
              stat={custos}
              sizeClassName="text-[5.5rem] md:text-[9rem] xl:text-[11rem]"
              prefixClassName="text-highlight"
              className="reveal"
            />
            <p className="reveal stat-label mt-6 text-xl text-navy-foreground md:text-2xl">{custos.label}</p>
            <CostBlocks reducedBlocks={3} total={10} />
          </StatModule>

          {/* 04 — Disponibilidade */}
          <StatModule
            tag={disponibilidade.group}
            index="04"
            className="bg-background md:col-span-3 xl:col-start-7 xl:row-start-2"
            delay={120}
          >
            <StatFigure stat={disponibilidade} sizeClassName={SECONDARY_SIZE} className="reveal text-navy" />
            <p className={labelClass}>{disponibilidade.label}</p>
            <UptimeGrid filled={99} />
          </StatModule>

          {/* 05 — Integrações */}
          <StatModule
            tag={integracoes.group}
            index="05"
            className="bg-background md:col-span-3 xl:col-start-10 xl:row-start-2"
            delay={200}
          >
            <StatFigure stat={integracoes} sizeClassName={SECONDARY_SIZE} className="reveal text-navy" />
            <p className={labelClass}>{integracoes.label}</p>
            <IntegrationHub count={10} />
          </StatModule>

          {/* 06 — Eventos */}
          <StatModule
            tag={eventos.group}
            index="06"
            className="bg-background md:col-span-6 xl:col-span-12 xl:row-start-3"
            delay={0}
          >
            <div className="flex flex-col gap-10 xl:flex-row xl:items-end xl:gap-16">
              <div className="xl:w-5/12">
                <StatFigure
                  stat={eventos}
                  sizeClassName="text-[4rem] md:text-[5.5rem] xl:text-[6.5rem]"
                  className="reveal text-navy"
                />
                <p className={labelClass}>{eventos.label}</p>
              </div>
              <div className="xl:w-7/12">
                <EventScale />
              </div>
            </div>
          </StatModule>
        </div>
      </div>
    </section>
  );
}
