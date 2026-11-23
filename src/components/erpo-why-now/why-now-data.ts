/** "Por que agora?" — approved copy. Edit texts here only. */
export type FactorId = "dados" | "custos" | "automacao" | "ia";

export interface Factor {
  id: FactorId;
  number: string;
  title: string;
  /** Leading word rendered in the institutional blue, when present */
  emphasis?: string;
  text: string;
}

export const WHY_NOW_CONTENT = {
  eyebrow: "Por que agora",
  title: "O cenário mudou",
  subtitle:
    "Novos desafios exigem novas soluções. Entenda os fatores que tornam a transformação da gestão da sua frota indispensável agora.",
} as const;

export const FACTORS: Factor[] = [
  {
    id: "dados",
    number: "01",
    title: "Mais dados",
    emphasis: "Mais",
    text: "As operações geram cada vez mais informações.",
  },
  {
    id: "custos",
    number: "02",
    title: "Mais pressão por custos",
    emphasis: "Mais",
    text: "Controlar despesas operacionais passou a ser prioridade estratégica.",
  },
  {
    id: "automacao",
    number: "03",
    title: "Mais automação",
    emphasis: "Mais",
    text: "Processos manuais consomem tempo e aumentam a taxa de erros.",
  },
  {
    id: "ia",
    number: "04",
    title: "Inteligência Artificial",
    text: "Os dados já podem antecipar riscos e apoiar decisões do dia a dia.",
  },
];
