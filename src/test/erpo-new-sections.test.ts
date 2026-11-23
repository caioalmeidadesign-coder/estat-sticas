import { describe, expect, it } from "vitest";
import { CTA_BENEFITS, CTA_CONTENT } from "@/components/erpo-cta/cta-data";
import { DASHBOARD_KPIS } from "@/components/erpo-cta/dashboard/dashboard-data";
import { FACTORS, WHY_NOW_CONTENT } from "@/components/erpo-why-now/why-now-data";

// Approved copy must be published exactly as written in the brief.
describe("CTA final copy", () => {
  it("keeps eyebrow, title and text", () => {
    expect(CTA_CONTENT.eyebrow).toBe("CTA FINAL");
    expect(CTA_CONTENT.title).toBe("Quer entender como a ERPO pode se adaptar à sua operação?");
    expect(CTA_CONTENT.text).toBe(
      "Converse com um especialista, conheça a plataforma e veja quais recursos fazem sentido para a realidade da sua empresa.",
    );
  });
  it("keeps both call-to-action labels", () => {
    expect(CTA_CONTENT.primary.label).toBe("Agendar demonstração");
    expect(CTA_CONTENT.secondary.label).toBe("Falar com um especialista");
  });
  it("keeps the three benefits", () => {
    expect(CTA_BENEFITS.map((b) => [b.title, b.text])).toEqual([
      ["Solução completa", "Para todas as etapas da sua operação."],
      ["Suporte humano", "Especialistas prontos para te acompanhar."],
      ["Resultados reais", "Mais eficiência, menos custos e decisões melhores."],
    ]);
  });
  it("uses the given illustrative fleet numbers", () => {
    expect(DASHBOARD_KPIS.map((k) => [k.label, k.value])).toEqual([
      ["Veículos", "1.248"],
      ["Em operação", "1.102"],
      ["Disponíveis", "146"],
      ["Em manutenção", "28"],
    ]);
  });
});

describe("Por que agora copy", () => {
  it("keeps eyebrow, title and subtitle", () => {
    expect(WHY_NOW_CONTENT.eyebrow.toUpperCase()).toBe("POR QUE AGORA");
    expect(WHY_NOW_CONTENT.title).toBe("O cenário mudou");
    expect(WHY_NOW_CONTENT.subtitle).toBe(
      "Novos desafios exigem novas soluções. Entenda os fatores que tornam a transformação da gestão da sua frota indispensável agora.",
    );
  });
  it("keeps the four factors in order", () => {
    expect(FACTORS.map((f) => [f.number, f.title, f.text])).toEqual([
      ["01", "Mais dados", "As operações geram cada vez mais informações."],
      ["02", "Mais pressão por custos", "Controlar despesas operacionais passou a ser prioridade estratégica."],
      ["03", "Mais automação", "Processos manuais consomem tempo e aumentam a taxa de erros."],
      ["04", "Inteligência Artificial", "Os dados já podem antecipar riscos e apoiar decisões do dia a dia."],
    ]);
  });
});
