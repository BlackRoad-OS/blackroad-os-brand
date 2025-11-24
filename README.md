# Blackroad OS · Brand System

Living design-system package for logos, tokens, Storybook docs, and npm delivery.

## Quickstart

1. Install deps: `pnpm i`
2. Generate tokens & CSS vars: `pnpm run tokens`
3. Launch Storybook: `pnpm run storybook`
4. Build static docs: `pnpm run build:docs` (outputs to `.out`)

## What ships here
- **Tokens** in `/tokens/blackroad.tokens.json` → autogenerates `css/brand.css` + TypeScript maps.
- **Logos** in `/logo` including light/dark SVGs and `blackroad-spiral.lottie` motion reference.
- **Figma** drop in `/figma` plus REST hooks for automation.
- **Package** `@blackroad/brand` (see `/packages/brand-js`) exporting `tokens` + `applyTheme` helper.
- **Docs** via Storybook 8 + Tailwind; stories cover palette, typography, logo variants, and buttons.
- **CI** lints SVGs + tokens, builds Storybook, and deploys GitHub Pages preview; tags publish npm.

## Notes
- Fonts load from Google Fonts (Inter + Inter Tight variable weights).
- `scripts/postbuild.ts` stamps `public/sig.beacon.json` after builds.
