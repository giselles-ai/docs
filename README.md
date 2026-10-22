# Giselle Docs

Documentation site for [Giselle](https://giselles.ai), built with [Fumadocs](https://fumadocs.vercel.app) and [Next.js](https://nextjs.org).

## Development

Use Node.js **24.22.1** (pinned in `.node-version`) and pnpm **10.28.2**.
The supported runtime is Node.js 24.x starting at 24.22.1. Check
`node --version` before installing dependencies or starting the site.

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

## Runtime verification

CI verifies the Node.js version, formatting, production build, and TypeScript
checks. After deploying, verify the hosting provider's build and server runtime
versions as well; the repository settings alone do not prove that an existing
deployment has been updated.
