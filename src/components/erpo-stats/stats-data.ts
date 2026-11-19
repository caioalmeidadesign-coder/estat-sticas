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
  /** Short supporting line under the label */
  description: string;
}

export const STATS_CONTENT = {
  eyebrow: "Estatísticas ERPO",
  title: "Números que comprovam resultados",
  description:
    "A ERPO conecta tecnologia, inteligência e eficiência para transformar a gestão de frotas.",
  ctaTitle: "Dados que geram valor para o seu negócio",
  ctaText:
    "Transformamos informação em inteligência para que sua empresa tome decisões melhores, reduza custos e cresça com eficiência.",
  ctaLabel: "Falar com um especialista",
  /** Placeholder until the real destination is defined */
  ctaHref: "#contato",
} as const;

/**
 * Brazilian states (UF codes) with units served — highlighted on the map.
 * Fill with the official list only; empty shows a neutral map.
 */
export const SERVED_STATES: string[] = ["SP","MG","PR","GO"];

export const MAP_CONTENT = {
  title: "Presença no Brasil",
  legend: "Estados com unidades atendidas",
} as const;

/** Display order of the cards (3 × 2 on desktop) */
export const STATS_ORDER = ["empresas", "placas", "custos", "eventos", "disponibilidade", "integracoes"] as const;

export const STATS: Record<StatId, StatItem> = {
  empresas: { id: "empresas", value: "161", label: "Empresas atendidas", description: "Empresas que confiam na ERPO" },
  placas: { id: "placas", value: "40.000", label: "Placas gerenciadas", description: "Gestão completa de frotas" },
  custos: {
    id: "custos",
    prefix: "+",
    value: "30",
    suffix: "%",
    label: "Redução média de custos",
    description: "Com processos automatizados e dados integrados",
  },
  disponibilidade: {
    id: "disponibilidade",
    prefix: "+",
    value: "99",
    suffix: "%",
    label: "Disponibilidade da plataforma",
    description: "Alta performance e estabilidade para sua operação",
  },
  integracoes: {
    id: "integracoes",
    prefix: "+",
    value: "10",
    label: "Integrações",
    description: "Conectando a ERPO aos sistemas da sua operação",
  },
  eventos: {
    id: "eventos",
    prefix: "+",
    value: "500",
    suffix: "mil",
    label: "Eventos processados diariamente",
    description: "Monitoramento contínuo da operação",
  },
};

/** Full published figure, e.g. "+500 mil" */
export function formatStat(stat: StatItem): string {
  const suffix = stat.suffix ? (stat.suffix === "%" ? "%" : ` ${stat.suffix}`) : "";
  return `${stat.prefix ?? ""}${stat.value}${suffix}`;
}
