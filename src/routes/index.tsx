import { createFileRoute } from "@tanstack/react-router";
import { CtaFinalSection } from "@/components/erpo-cta/CtaFinalSection";
import { StatsSection } from "@/components/erpo-stats/StatsSection";
import { WhyNowSection } from "@/components/erpo-why-now/WhyNowSection";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ERPO — Gestão de frotas com tecnologia e inteligência" },
      {
        name: "description",
        content:
          "Entenda por que a gestão de frotas precisa evoluir, veja os números da ERPO e converse com um especialista.",
      },
      { property: "og:title", content: "ERPO — Gestão de frotas com tecnologia e inteligência" },
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
      <WhyNowSection />
      <StatsSection />
      <CtaFinalSection />
    </main>
  );
}
