import { describe, expect, it } from "vitest";
import { STATS, STATS_CONTENT, formatStat } from "@/components/erpo-stats/stats-data";

// The six official indicators must be published exactly as the brief states.
describe("ERPO official indicators", () => {
  it("has exactly six indicators", () => {
    expect(Object.keys(STATS)).toHaveLength(6);
  });
  it("161 empresas atendidas", () => {
    expect(formatStat(STATS.empresas)).toBe("161");
    expect(STATS.empresas.label).toBe("Empresas atendidas");
  });
  it("40.000 placas gerenciadas", () => {
    expect(formatStat(STATS.placas)).toBe("40.000");
    expect(STATS.placas.label).toBe("Placas gerenciadas");
  });
  it("+30% redução média de custos", () => {
    expect(formatStat(STATS.custos)).toBe("+30%");
    expect(STATS.custos.label).toBe("Redução média de custos");
  });
  it("+99% disponibilidade da plataforma", () => {
    expect(formatStat(STATS.disponibilidade)).toBe("+99%");
    expect(STATS.disponibilidade.label).toBe("Disponibilidade da plataforma");
  });
  it("+10 integrações", () => {
    expect(formatStat(STATS.integracoes)).toBe("+10");
    expect(STATS.integracoes.label).toBe("Integrações");
  });
  it("+500 mil eventos processados diariamente", () => {
    expect(formatStat(STATS.eventos)).toBe("+500 mil");
    expect(STATS.eventos.label).toBe("Eventos processados diariamente");
  });
  it("keeps the official title", () => {
    expect(STATS_CONTENT.title).toBe("Números que comprovam resultados");
  });
});
