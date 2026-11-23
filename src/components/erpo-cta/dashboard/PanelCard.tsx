import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/** Small titled block inside the product UI. */
export function PanelCard({
  title,
  aside,
  children,
  className,
}: {
  title: string;
  aside?: ReactNode;
  children: ReactNode;
  className?: string | undefined;
}) {
  return (
    <div className={cn("rounded-xl bg-surface p-4", className)}>
      <div className="mb-3 flex items-center justify-between gap-2">
        <p className="font-display text-xs font-semibold text-navy">{title}</p>
        {aside}
      </div>
      {children}
    </div>
  );
}
