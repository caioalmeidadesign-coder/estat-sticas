import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/** "1 unit = X" legend shown under every unit chart. */
export function UnitLegend({ swatch, children, onNavy }: { swatch: ReactNode; children: ReactNode; onNavy?: boolean }) {
  return (
    <p className={cn("caption mt-4 flex items-center gap-2", onNavy ? "text-navy-muted" : "text-muted-foreground")}>
      <span aria-hidden="true" className="inline-flex shrink-0 items-center">
        {swatch}
      </span>
      <span>{children}</span>
    </p>
  );
}
