# BlackRoad OS Brand

The official brand system for the BlackRoad ecosystem. This repository is the single source of truth for colors, gradients, typography, logos, iconography, spacing, and template guidance.

## Contents

- `/brand` — canonical tokens (colors, gradients, typography, spacing) and references for implementation.
- `/guides` — brand rules, protection zones, UI guidance, monetization safety, and philosophy.
- `/brand-kit` — asset directory structure for logos, palettes, fonts, and icon sets.
- `/assets` — imagery and downloadable resources aligned to the neon geometry of the Road.
- `/templates` — presentation and email templates with usage notes.
- `/public` — health endpoints for deployment monitoring.

## Usage

1. Start with `/brand/tokens.json` to pull color, gradient, typography, and spacing values into apps and decks.
2. Import `/brand/blackroad.css` for a single, ready-to-use set of CSS variables covering colors, gradients, typography scales, spacing, and layout radii.
3. Follow `/guides/brand-guide.md` and `/guides/usage-rules.md` to keep visual language consistent; use `/guides/monetization-and-ads.md` to keep sponsor placements safe and on-brand.
4. Use vector assets from `/brand-kit` and `/assets` as-is; never recreate or recolor logos.
5. Keep implementations dark-first, neon-accented, and minimal to maintain the BlackRoad OS feel.

## Contribution Guidelines

- Maintain token-driven definitions; avoid hard-coded, one-off values.
- Keep documentation concise and actionable for designers, engineers, and marketing teams.
- Avoid application logic; this repo defines identity only.
