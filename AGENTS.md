# Giselle Docs

Giselle（AI エージェントプラットフォーム）の公式ドキュメントサイト。

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

- 対応言語: `en`（デフォルト）, `ja`
- コンテンツは `content/docs/{lang}/` にディレクトリベースで配置
- en と ja のファイル構成は同一に保つこと

## Commands

- `pnpm dev` — 開発サーバー起動
- `pnpm build` — プロダクションビルド
- `pnpm format` — Biome によるフォーマット & lint 修正 (`biome check --write .`)
- `pnpm check-types` — TypeScript 型チェック (`tsc --noEmit`)

## Coding Style

- インデント: タブ
- 引用符: ダブルクォート
- Biome recommended ルールに準拠
- CSS で Tailwind v4 ディレクティブ (`@theme` 等) を使用可
- SVG 画像には `next/image` ではなく `<img>` を使用し、`biome-ignore` で抑制

## MDX Content

- カスタムコンポーネント: `Steps`, `Step`, `Tabs`, `Tab`, `Accordions`, `Accordion`, `ImageZoom`
- 画像は `<img>` / `![](...)` で記述すると自動的に `ImageZoom` に変換される
- コンテンツを追加・編集する際は en / ja 両方を更新すること
