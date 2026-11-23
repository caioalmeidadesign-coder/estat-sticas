import type { AnchorHTMLAttributes, ReactNode } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const erpoButton = cva(
  [
    "group/btn inline-flex h-14 items-center justify-center gap-3 rounded-lg px-6 font-display text-[0.9375rem] font-semibold",
    "transition-[background-color,border-color,color,transform] duration-200 active:scale-[0.98]",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-highlight focus-visible:ring-offset-2 focus-visible:ring-offset-navy",
  ],
  {
    variants: {
      variant: {
        /** Main conversion action — orange is reserved for this */
        accent: "bg-highlight text-navy hover:bg-highlight-strong",
        /** Secondary action on dark backgrounds */
        outlineLight:
          "border border-navy-line-strong text-navy-foreground hover:border-navy-foreground hover:bg-navy-line",
      },
    },
    defaultVariants: { variant: "accent" },
  },
);

interface ErpoButtonProps
  extends AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof erpoButton> {
  icon?: ReactNode;
}

/** Link-styled call to action with leading icon and moving arrow. */
export function ErpoButton({ variant, icon, children, className, ...props }: ErpoButtonProps) {
  return (
    <a className={cn(erpoButton({ variant }), className)} {...props}>
      {icon && <span aria-hidden="true" className="flex shrink-0">{icon}</span>}
      <span>{children}</span>
      <ArrowRight
        aria-hidden="true"
        className="size-4 shrink-0 transition-transform duration-200 group-hover/btn:translate-x-1"
      />
    </a>
  );
}
