import { Headset, Layers, TrendingUp, type LucideIcon } from "lucide-react";
import { CTA_BENEFITS, type BenefitId } from "./cta-data";

const ICONS: Record<BenefitId, LucideIcon> = {
  completa: Layers, // all stages of the operation
  suporte: Headset, // human support
  resultados: TrendingUp, // real results
};

export function CtaBenefits() {
  return (
    <ul className="grid gap-6 border-t border-navy-line pt-8 md:grid-cols-3 md:gap-8">
      {CTA_BENEFITS.map((b, i) => {
        const Icon = ICONS[b.id];
        return (
          <li
            key={b.id}
            className="reveal flex gap-4 md:flex-col md:gap-3"
            style={{ ["--reveal-delay" as string]: `${500 + i * 100}ms` }}
          >
            <Icon aria-hidden="true" className="mt-0.5 size-6 shrink-0 text-brand-light" strokeWidth={1.6} />
            <div>
              <h3 className="font-display text-base font-semibold text-navy-foreground">{b.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-navy-muted">{b.text}</p>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
