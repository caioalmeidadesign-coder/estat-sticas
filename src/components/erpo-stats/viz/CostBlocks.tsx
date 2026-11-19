/**
 * Proportional view of the average cost reduction:
 * 10 blocks = reference cost, the reduced share is shown in outline.
 */
export function CostBlocks({ reducedBlocks = 3, total = 10 }: { reducedBlocks?: number; total?: number }) {
  const kept = total - reducedBlocks;
  return (
    <figure className="mt-auto pt-12" aria-hidden="true">
      <div className="flex items-end gap-1.5 md:gap-2">
        {Array.from({ length: total }, (_, i) => {
          const reduced = i >= kept;
          return (
            <span
              key={i}
              className={
                reduced
                  ? "pop-dot h-14 flex-1 rounded-[3px] border border-dashed border-highlight/80 md:h-20 xl:h-32"
                  : "pop-dot h-14 flex-1 rounded-[3px] bg-navy-foreground/85 transition-colors duration-500 group-hover/module:bg-navy-foreground md:h-20 xl:h-32"
              }
              style={{ ["--reveal-delay" as string]: `${400 + i * 70}ms` }}
            />
          );
        })}
      </div>

      <div className="caption mt-3 flex gap-1.5 text-navy-muted md:gap-2">
        <span style={{ flex: kept }} className="border-t border-navy-line pt-2">
          Custo com a ERPO
        </span>
        <span style={{ flex: reducedBlocks }} className="border-t border-highlight pt-2 text-highlight">
          Redução média
        </span>
      </div>

      <figcaption className="caption mt-6 text-navy-muted">
        Representação proporcional · cada bloco = 10% do custo de referência
      </figcaption>
    </figure>
  );
}
