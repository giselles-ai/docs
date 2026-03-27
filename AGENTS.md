# Giselle Docs

Official documentation site for Giselle (AI agent platform).

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Docs Framework**: Fumadocs (fumadocs-core, fumadocs-mdx, fumadocs-ui)
- **Language**: TypeScript 6
- **Styling**: Tailwind CSS v4
- **Linter/Formatter**: Biome 2 (`biome.json`)
- **Package Manager**: pnpm

## Project Structure

```
app/                        # Next.js App Router
  [lang]/                   # i18n dynamic segment (en | ja)
    [[...slug]]/page.tsx    # MDX doc page renderer
    layout.tsx              # Docs layout (DocsLayout)
  api/search/route.ts       # Search API
  llms.mdx/                 # LLM-friendly .mdx endpoint
  layout.tsx                # Root layout
  global.css                # Global styles (Tailwind v4)
content/docs/               # MDX content (fumadocs-mdx)
  en/                       # English docs
  ja/                       # Japanese docs
lib/
  i18n.ts                   # i18n config (en, ja)
  source.ts                 # Fumadocs source loader
  layout.shared.tsx         # Shared layout options (nav, links)
mdx-components.tsx          # Custom MDX components
source.config.ts            # fumadocs-mdx collection config
biome.json                  # Biome linter/formatter config
```

## i18n

- Supported languages: `en` (default), `ja`
- Content is organized by directory under `content/docs/{lang}/`
- Keep en and ja file structures in sync

## Commands

- `pnpm dev` — Start dev server
- `pnpm build` — Production build
- `pnpm format` — Format & lint fix via Biome (`biome check --write .`)
- `pnpm check-types` — TypeScript type check (`tsc --noEmit`)

## After Every Code Change

Run these commands in order:
1. `pnpm format` — Format code
2. `pnpm build` — Rebuild
3. `pnpm check-types` — Verify types

## MDX Content

- Custom components: `Steps`, `Step`, `Tabs`, `Tab`, `Accordions`, `Accordion`, `ImageZoom`
- When adding or editing content, always update both en and ja
