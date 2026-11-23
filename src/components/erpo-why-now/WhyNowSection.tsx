import { BrainCircuit, CircleDollarSign, Database, Workflow, type LucideIcon } from "lucide-react";
import { useInView } from "@/components/erpo-stats/use-in-view";
import { FactorRow } from "./FactorRow";
import { FACTORS, WHY_NOW_CONTENT, type FactorId } from "./why-now-data";

const ICONS: Record<FactorId, LucideIcon> = {
  dados: Database, // dados e informações
  custos: CircleDollarSign, // custos e eficiência financeira
  automacao: Workflow, // automação de processos
  ia: BrainCircuit, // IA e análise preditiva
};

/**
 * "Por que agora?" — editorial split.
 * Left: oversized statement (sticky on desktop). Right: a timeline where three
 * growing pressures ("Mais…") lead to the turning point, Inteligência Artificial.
 */
export function WhyNowSection() {
  const { ref, inView } = useInView<HTMLElement>(0.1);

  return (
    <section
      ref={ref}
      data-inview={inView}
      aria-labelledby="why-now-title"
      className="bg-card py-20 md:py-28 xl:py-32"
    >
      <div className="mx-auto grid max-w-[1280px] gap-14 px-5 md:px-10 xl:grid-cols-12 xl:gap-8">
        <header className="xl:sticky xl:top-24 xl:col-span-5 xl:self-start">
          <p className="reveal eyebrow flex items-center gap-3 text-brand">
            <span aria-hidden="true" className="h-0.5 w-8 bg-highlight" />
            {WHY_NOW_CONTENT.eyebrow}
          </p>
          <h2
            id="why-now-title"
            className="reveal mt-6 max-w-[8ch] text-[3.25rem] font-bold leading-[0.95] tracking-[-0.045em] text-navy md:text-[5rem] xl:text-[5.75rem]"
            style={{ ["--reveal-delay" as string]: "80ms" }}
          >
            {WHY_NOW_CONTENT.title}
          </h2>
          <p
            className="reveal mt-8 max-w-[42ch] text-lg leading-relaxed text-muted-foreground md:text-xl"
            style={{ ["--reveal-delay" as string]: "160ms" }}
          >
            {WHY_NOW_CONTENT.subtitle}
          </p>
        </header>

        <ol className="xl:col-span-7 xl:col-start-6" aria-label="Fatores de mudança">
          {FACTORS.map((factor, i) => (
            <FactorRow
              key={factor.id}
              factor={factor}
              icon={ICONS[factor.id]}
              featured={factor.id === "ia"}
              isLast={i === FACTORS.length - 1}
              delay={200 + i * 120}
            />
          ))}
        </ol>
      </div>
    </section>
  );
}
