# Giselle Docs

Documentation site for [Giselle](https://giselles.ai), built with [Fumadocs](https://fumadocs.vercel.app) and [Next.js](https://nextjs.org).

## Development

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build

```bash
pnpm build
pnpm start
```

## Content Structure

Documentation content lives in `content/docs/` with localized directories:

- `content/docs/en/` - English documentation
- `content/docs/ja/` - Japanese documentation

Static assets (images, logos) are in `public/`.

Navigation structure is defined via `meta.json` files in each content directory.
