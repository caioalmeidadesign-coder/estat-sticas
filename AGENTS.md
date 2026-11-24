<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.

## What Lovable manages

Rules outside this block are the project's own. Change the pieces below in
Lovable, not by hand. With the [Lovable MCP](https://mcp.lovable.dev)
connected, `send_message` asks Lovable to do it; otherwise ask the user to
use the editor.

- **Database.** Do not add or edit `supabase/migrations/` or `drizzle/`.
  Ask Lovable to change the schema.
- **Generated files.** Do not edit a file whose header says it is automatically
  generated.
- **AI gateway.** Keep model calls on Lovable's gateway, and keep
  `LOVABLE_API_KEY` out of browser code.
- **Connectors.** Lovable provides native connectors. `list_connectors` shows
  which are enabled; `add_connector` only returns the dashboard link. When a
  connector is enabled, calls go through the connector gateway and need
  `LOVABLE_API_KEY`. When Lovable does not provide one, users can bring their
  own key and store it in Secrets.
- **Secrets.** Lovable manages them. Do not put secret values in the repo.
<!-- LOVABLE:END -->

## Project rules
- ERPO stats section lives in `src/components/erpo-stats/`; every indicator's copy and value comes from `stats-data.ts` only, so figures stay editable in one place and are guarded by `src/test/erpo-stats.test.ts`.
- Charts in the stats section are unit charts whose mark counts derive from the published figures; never add data series, maps or metrics not in `stats-data.ts`, because the brief forbids invented data.
- Each indicator is one `StatModule` (tag → figure → label → visual) laid out on a CSS grid board, so the section can be rebuilt with native Elementor containers.
- Each homepage section is an independent folder under `src/components/` (`erpo-why-now`, `erpo-stats`, `erpo-cta`) with its copy in a local `*-data.ts`; new sections must not edit another section's files, so an approved section stays untouched.
- Cross-section UI pieces live in `src/components/erpo-shared/`, and new design tokens go in an appended block at the end of `src/styles.css`, so existing section styles never change.
- The CTA product dashboard uses fictional data from `dashboard-data.ts` only; it must never be presented as ERPO statistics.
