/**
 * Illustrative (fictional) data used only to depict the ERPO platform.
 * Not company statistics — never reuse these figures as claims.
 */
export type Tone = "navy" | "brand" | "light" | "highlight";

export const DASHBOARD_KPIS: { id: string; label: string; value: string; tone: Tone }[] = [
  { id: "veiculos", label: "Veículos", value: "1.248", tone: "navy" },
  { id: "operacao", label: "Em operação", value: "1.102", tone: "brand" },
  { id: "disponiveis", label: "Disponíveis", value: "146", tone: "light" },
  { id: "manutencao", label: "Em manutenção", value: "28", tone: "highlight" },
];

/** Monthly fleet performance index (0–100), last six months */
export const PERFORMANCE = [
  { month: "Jun", value: 78 },
  { month: "Jul", value: 81 },
  { month: "Ago", value: 79 },
  { month: "Set", value: 84 },
  { month: "Out", value: 86 },
  { month: "Nov", value: 91 },
];

export const COSTS: { id: string; label: string; share: number; tone: Tone | "muted" }[] = [
  { id: "combustivel", label: "Combustível", share: 48, tone: "navy" },
  { id: "manutencao", label: "Manutenção", share: 26, tone: "brand" },
  { id: "pneus", label: "Pneus", share: 14, tone: "light" },
  { id: "outros", label: "Outros", share: 12, tone: "muted" },
];

export type AlertKind = "manutencao" | "documento" | "combustivel";
export const ALERTS: { id: AlertKind; title: string; detail: string }[] = [
  { id: "manutencao", title: "Manutenção preventiva", detail: "Vence em 5 dias" },
  { id: "documento", title: "Documento vencendo", detail: "CRLV · vence em 3 dias" },
  { id: "combustivel", title: "Alerta de combustível", detail: "Consumo acima do esperado" },
];

export type ActivityKind = "abastecimento" | "manutencao" | "checklist";
export const ACTIVITIES: { id: ActivityKind; title: string; time: string }[] = [
  { id: "abastecimento", title: "Abastecimento", time: "Hoje, 08:45" },
  { id: "manutencao", title: "Manutenção", time: "Hoje, 10:30" },
  { id: "checklist", title: "Checklist", time: "Hoje, 11:15" },
];

export const TONE_BG: Record<Tone | "muted", string> = {
  navy: "bg-navy",
  brand: "bg-brand",
  light: "bg-brand-light",
  highlight: "bg-highlight",
  muted: "bg-map-neutral-strong",
};
