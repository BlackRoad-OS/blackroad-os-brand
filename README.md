# BlackRoad OS · Brand System 🎨🛣️

> Single source of truth for neon gradients, typography, motion, and icon assets across BlackRoad OS.

---

## 🎯 Mission

- Be the **single source of truth** for how BlackRoad looks, feels, and moves.
- Provide tokens, components, and templates that other repos reuse, not reinvent.
- Keep the neon road / fractal / quantum vibe **consistent everywhere**.

---

## 🚀 Quickstart

```bash
pnpm i
pnpm run tokens         # build Style Dictionary → css/brand.css + src/tokens.ts
pnpm run storybook      # http://localhost:6006
```

Build static docs:

```bash
pnpm run build:docs     # outputs to .out
```

---

## 🏗️ What This Repo Owns (✅)

### 🎨 Visual Identity
- **Color palette** (neons, neutrals, semantic status colors) 🌈
- **Typography stack** (JetBrains Mono, Inter, fallbacks) ✍️
- **Logo & wordmark rules** (BlackRoad OS, Lucida, etc.) 🛣️

### 🧬 Design Tokens
- **Color tokens** (primary, secondary, background, border, accent) 🎛️
- **Spacing + radius + shadow scales** 📏
- **Component tokens** (buttons, cards, toasts, tags) 🧩

### 📦 Assets & Templates
- **Logo files** (SVG/PNG) 🔰
- **Presentation templates** (slides) 📽️
- **Email/signature templates** 📧
- **Social/thumbnail templates** (YouTube, LinkedIn, etc.) 📱

### 📓 Guidelines
- Do/don't usage examples ✅🚫
- Layout principles (grids, margins, density) 📐
- Motion/animation vibe (if used) ✨

---

## 🚫 What This Repo Does NOT Own

| Area | Owner Repo |
|------|-----------|
| App logic or UI wiring 💻 | `blackroad-os-web`, `-core`, `-prism-console` |
| Docs content 📚 | `blackroad-os-docs` |
| Company handbook / policies 🏠 | `blackroad-os-home` |
| Infra configs ☁️ | `blackroad-os-infra` |
| Research/math 🧪 | `blackroad-os-research` |
| System logs / history 🧾 | `blackroad-os-archive` |

---

## 📦 What Ships Here

- **Tokens** in `/tokens` kept lightweight (<60 lines each) using HSL for dark/light pivoting.
- **Style Dictionary** config in `/build` generates CSS custom properties and TypeScript token maps.
- **CSS output** in `/css/brand.css` powers Storybook and any consuming surface.
- **Icons** live in `/src/icons/phosphor-sprite.svg` with a curated Phosphor subset.
- **Components** under `/src/components` keep previews small and composable for Storybook.
- **Docs** via Storybook 8 (see `/storybook` + `/stories`).
- **Fonts** self-hosted (`/fonts`) for Inter + JetBrains Mono variable faces.
- **CI** GitHub Actions builds tokens then Storybook static docs for future pages deploy.

---

## 🧪 Quality & Consistency

### Token Changes
Any change to core tokens must:
- ✅ Update token definitions (e.g., JSON/TS variables / CSS vars)
- ✅ Update preview examples / storybook-style pages 🧪
- ✅ Include before/after screenshots or explanation in PR description

### New Assets/Templates
Every new asset or template:
- 🧪 Lives in a clear folder with a short README
- 🧪 Mentions where it's meant to be used (docs, web, email, pitch, etc.)

---

## 🔐 Rights & Compliance

- Store **license info** for fonts, icons, third-party images 📜
- Avoid embedding stock assets that you can't redistribute 🚫
- For trademarks/wordmarks, reference official registration details ⚖️

---

## 📏 Design Principles

`blackroad-os-brand` = **"what it looks like,"** not where it's applied:
- 🎨 This repo defines tokens + guidelines.
- 🧩 Other repos import and apply them.

Every token/guideline should answer:
1. When do we use this vs alternatives?
2. How should it look in light/dark/OS modes?
3. How does this support the neon-road / quantum / OS aesthetic?

---

## 🧬 Local Emoji Legend

| Emoji | Meaning |
|-------|---------|
| 🎨 | Brand system / visual design |
| 🛣️ | BlackRoad road / fractal vibe |
| 🌈 | Color palette |
| ✍️ | Typography |
| 🧩 | Components / tokens |
| 📽️ | Slides / presentations |
| 📧 | Email templates |
| 📜 | Licenses / legal |

---

## 🎯 Success Criteria

If a new designer/dev/agent lands here, they should be able to:

1. ✅ See the **official colors, fonts, and logos** for BlackRoad OS.
2. ✅ Grab ready-to-use tokens/components for web/docs/console.
3. ✅ Spin up on-brand slides, emails, and assets without guessing.

---

## 📝 Notes & TODOs

- No secrets committed; `.brand.env.example` exists for future CDN buckets.
- `scripts/postbuild.ts` stamps `public/sig.beacon.json` after builds.
- // TODO(brand-next): hook up animated logo + PDF template kit export.
