# BlackRoad OS · Brand System (Gen-0)

> Single source of truth for neon gradients, typography, motion, and icon assets across BlackRoad OS.

## Quickstart

```bash
pnpm i
pnpm run tokens         # build Style Dictionary → css/brand.css + src/tokens.ts
pnpm run storybook      # http://localhost:6006
```

Build static docs:

```bash
pnpm run build:docs     # outputs to .out
```

## What ships here
- **Tokens** in `/tokens` kept lightweight (<60 lines each) using HSL for dark/light pivoting.
- **Style Dictionary** config in `/build` generates CSS custom properties and TypeScript token maps.
- **CSS output** in `/css/brand.css` powers Storybook and any consuming surface.
- **Icons** live in `/src/icons/phosphor-sprite.svg` with a curated Phosphor subset.
- **Components** under `/src/components` keep previews small and composable for Storybook.
- **Docs** via Storybook 8 (see `/storybook` + `/stories`).
- **Fonts** self-hosted (`/fonts`) for Inter + JetBrains Mono variable faces.
- **CI** GitHub Actions builds tokens then Storybook static docs for future pages deploy.

## Notes & TODOs
- No secrets committed; `.brand.env.example` exists for future CDN buckets.
- `scripts/postbuild.ts` stamps `public/sig.beacon.json` after builds.
- // TODO(brand-next): hook up animated logo + PDF template kit export.
