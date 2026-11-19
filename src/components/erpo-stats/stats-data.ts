/**
 * Official ERPO indicators. Values and labels are fixed by the brief —
 * edit copy here, never inside the components.
 */
export type StatId = "empresas" | "placas" | "custos" | "disponibilidade" | "integracoes" | "eventos";

export interface StatItem {
  id: StatId;
  /** Optional prefix rendered with emphasis, e.g. "+" */
  prefix?: string;
  /** Main figure, exactly as published */
  value: string;
  /** Optional suffix, e.g. "%" or "mil" */
  suffix?: string;
  label: string;
  /** Group used to organise the board: scale, result, platform */
  group: "Escala" | "Resultado" | "Plataforma";
}

export const STATS_CONTENT = {
  eyebrow: "Estatísticas ERPO",
  title: "Números que comprovam resultados",
  description:
    "A ERPO conecta tecnologia, inteligência e eficiência para transformar a gestão de frotas.",
} as const;

export const STATS: Record<StatId, StatItem> = {
  empresas: { id: "empresas", value: "161", label: "Empresas atendidas", group: "Escala" },
  placas: { id: "placas", value: "40.000", label: "Placas gerenciadas", group: "Escala" },
  custos: {
    id: "custos",
    prefix: "+",
    value: "30",
    suffix: "%",
    label: "Redução média de custos",
    group: "Resultado",
  },
  disponibilidade: {
    id: "disponibilidade",
    prefix: "+",
    value: "99",
    suffix: "%",
    label: "Disponibilidade da plataforma",
    group: "Plataforma",
  },
  integracoes: {
    id: "integracoes",
    prefix: "+",
    value: "10",
    label: "Integrações",
    group: "Plataforma",
  },
  eventos: {
    id: "eventos",
    prefix: "+",
    value: "500",
    suffix: "mil",
    label: "Eventos processados diariamente",
    group: "Plataforma",
  },
};

/** Full published figure, e.g. "+500 mil" */
export function formatStat(stat: StatItem): string {
  const suffix = stat.suffix ? (stat.suffix === "%" ? "%" : ` ${stat.suffix}`) : "";
  return `${stat.prefix ?? ""}${stat.value}${suffix}`;
}
