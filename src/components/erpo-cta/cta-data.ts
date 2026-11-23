/** "CTA final" — approved copy. Edit texts and links here only. */
export type BenefitId = "completa" | "suporte" | "resultados";

export const CTA_CONTENT = {
  eyebrow: "CTA FINAL",
  title: "Quer entender como a ERPO pode se adaptar à sua operação?",
  /** Part of the title shown in light blue */
  emphasis: "se adaptar",
  text: "Converse com um especialista, conheça a plataforma e veja quais recursos fazem sentido para a realidade da sua empresa.",
  primary: {
    label: "Agendar demonstração",
    /** Placeholder until the real destination is defined */
    href: "#agendar-demonstracao",
  },
  secondary: {
    label: "Falar com um especialista",
    /** Placeholder until the real destination is defined */
    href: "#falar-com-especialista",
  },
} as const;

export const CTA_BENEFITS: { id: BenefitId; title: string; text: string }[] = [
  { id: "completa", title: "Solução completa", text: "Para todas as etapas da sua operação." },
  { id: "suporte", title: "Suporte humano", text: "Especialistas prontos para te acompanhar." },
  { id: "resultados", title: "Resultados reais", text: "Mais eficiência, menos custos e decisões melhores." },
];
