import { CalendarDays, MessageCircle } from "lucide-react";
import { ErpoButton } from "@/components/erpo-shared/ErpoButton";
import { useInView } from "@/components/erpo-stats/use-in-view";
import { CtaBenefits } from "./CtaBenefits";
import { CTA_CONTENT } from "./cta-data";
import { FleetDashboard } from "./dashboard/FleetDashboard";

function Title() {
  const { title, emphasis } = CTA_CONTENT;
  const i = title.indexOf(emphasis);
  if (i < 0) return <>{title}</>;
  return (
    <>
      {title.slice(0, i)}
      <span className="text-brand-light">{emphasis}</span>
      {title.slice(i + emphasis.length)}
    </>
  );
}

/**
 * CTA final — "produto em evidência".
 * Navy stage; message + actions on the left, the ERPO platform bleeding off the
 * right edge on a solid institutional-blue plane, with a live-looking alert toast.
 */
export function CtaFinalSection() {
  const { ref, inView } = useInView<HTMLElement>(0.15);

  return (
    <section
      ref={ref}
      data-inview={inView}
      aria-labelledby="cta-final-title"
      className="overflow-hidden bg-navy py-20 text-navy-foreground md:py-28 xl:py-32"
    >
      <div className="mx-auto grid max-w-[1280px] items-center gap-16 px-5 md:px-10 xl:grid-cols-12 xl:gap-8">
        <div className="xl:col-span-6 xl:pr-6">
          <p className="reveal eyebrow flex items-center gap-3 text-brand-light">
            <span aria-hidden="true" className="h-0.5 w-8 bg-highlight" />
            {CTA_CONTENT.eyebrow}
          </p>
          <h2
            id="cta-final-title"
            className="reveal mt-6 max-w-[18ch] text-[2.25rem] font-bold leading-[1.06] tracking-[-0.03em] md:text-[3.5rem] xl:text-[3.75rem]"
            style={{ ["--reveal-delay" as string]: "80ms" }}
          >
            <Title />
          </h2>
          <p
            className="reveal mt-6 max-w-[48ch] text-lg leading-relaxed text-navy-muted"
            style={{ ["--reveal-delay" as string]: "160ms" }}
          >
            {CTA_CONTENT.text}
          </p>

          <div
            className="reveal mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap"
            style={{ ["--reveal-delay" as string]: "260ms" }}
          >
            <ErpoButton href={CTA_CONTENT.primary.href} variant="accent" icon={<CalendarDays className="size-5" strokeWidth={1.75} />}>
              {CTA_CONTENT.primary.label}
            </ErpoButton>
            <ErpoButton
              href={CTA_CONTENT.secondary.href}
              variant="outlineLight"
              icon={<MessageCircle className="size-5" strokeWidth={1.75} />}
            >
              {CTA_CONTENT.secondary.label}
            </ErpoButton>
          </div>

          <div className="mt-14">
            <CtaBenefits />
          </div>
        </div>

        <FleetDashboard className="md:-mr-10 xl:col-span-6 xl:mr-0 xl:w-[calc(100%+48px)]" />
      </div>
    </section>
  );
}
