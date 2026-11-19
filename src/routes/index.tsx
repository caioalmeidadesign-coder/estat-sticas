import { createFileRoute } from "@tanstack/react-router";
import { StatsSection } from "@/components/erpo-stats/StatsSection";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Estatísticas ERPO — Números que comprovam resultados" },
      {
        name: "description",
        content:
          "161 empresas, 40.000 placas, +30% de redução de custos e +500 mil eventos por dia: os números da ERPO em gestão de frotas.",
      },
      { property: "og:title", content: "Estatísticas ERPO — Números que comprovam resultados" },
      {
        property: "og:description",
        content: "A ERPO conecta tecnologia, inteligência e eficiência para transformar a gestão de frotas.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-background">
      <StatsSection />
    </main>
  );
}
