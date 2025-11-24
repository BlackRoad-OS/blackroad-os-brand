# Monetization and Sponsor Safety Guide

BlackRoad OS monetization is designed to be useful, respectful, and privacy-first. Ads and sponsor placements should feel like curated signals, not invasive trackers. This guide defines allowed sponsor types, safe layouts, registry requirements, and usage rules across all surfaces.

## Principles

- **Explicitly labeled**: Every placement is clearly marked as "Sponsored" or "Partner Signal". No stealth ads.
- **Non-intrusive**: No auto-play audio/video, no flashing animations, no pop-unders. Placements live in layout-friendly slots.
- **Privacy-first**: No unvetted third-party scripts or iframes. Creative is static (image + text). Any analytics must route through a BlackRoad-controlled proxy with opt-in.
- **Design-aligned**: Dark-first surfaces, neon gradients used sparingly, clean typography (JetBrains Mono for labels, Inter for body), and generous spacing from `/brand/spacing.md`.
- **Registry-backed**: Only sponsors in the Verified Partner Registry can appear. Surfaces must validate `allowed_placements` before rendering.

## Allowed vs Disallowed Sponsors

- **Welcome**: Infrastructure providers, developer tools, research orgs, security vendors, hardware partners, educational programs, community events, climate/energy tech aligned with BlackRoad values.
- **Avoid**: Surveillance capitalism, data brokers, predatory finance, health/medical claims, MLM/lottery/gambling, political campaigns, deceptive performance boosters.
- **Context fit**: Sponsors must match the adjacent content (e.g., infra partner in console status panes; research org in docs or papers).

## Verified Partner Registry (VPR)

All placements must resolve against the VPR to stay safe and consistent.

- **Data fields**
  - `id` (string, unique), `name`, `logo_url` (static image), `description` (concise, plain text), `cta_url` (https), `cta_label` (short verb), `allowed_placements` (array of placement ids), `tracking_policy` (enum: `none`, `proxy-pixel`, `proxy-click`), `brand_fit` (tags like `infra`, `dev-tools`, `research`), `updated_at` (ISO string).
- **Example entry**

```json
{
  "id": "ion-path",
  "name": "Ion Path Compute",
  "logo_url": "https://cdn.blackroad.os/partners/ion-path.svg",
  "description": "Low-latency edge compute tuned for BlackRoad OS workloads.",
  "cta_url": "https://ionpath.dev/blackroad",
  "cta_label": "View integration",
  "allowed_placements": ["brand-sponsor-panel", "brand-inline-ad"],
  "tracking_policy": "proxy-click",
  "brand_fit": ["infra", "performance"],
  "updated_at": "2024-06-18T12:00:00Z"
}
```
- **Rules**
  - Only render if the placement id is present in `allowed_placements`.
  - Reject creatives with remote scripts, SVG animation, or unscoped HTML; allow only static PNG/SVG.
  - If `tracking_policy` is `proxy-click`, clicks must go through a BlackRoad-controlled redirect; `proxy-pixel` uses a first-party image endpoint that counts events server-side.

## Placement Catalogue

> Each placement inherits brand tokens: base surfaces use `--br-surface`, borders `--br-accent-cyan` at 1px with 20% opacity, text in `Inter` with JetBrains Mono labels, and 4–8–12 spacing rhythm.

### BrandSponsorBadge (`brand-sponsor-badge`)
- **Use**: Inline with nav bars, footers, or console headers. Max width 160px.
- **Contents**: Logo + text label (`Sponsored` or `Partner`). Optional single-line blurb up to 80 characters.
- **Styling**: Pill radius (`8px`), subtle glow shadow, monochrome logo or single accent gradient (`--gradient-br-os`).
- **Surfaces**: Web nav/footer, Prism console header strip, docs sidebar footer.

### BrandSponsorPanel (`brand-sponsor-panel`)
- **Use**: Feature block within landing sections or console side panels.
- **Contents**: Logo, 1–2 line description, CTA button (ghost or bordered), optional stat or integration tag.
- **Layout**: 16–24px padding, column on mobile, grid split on desktop (logo/description left, CTA right). Limit one panel per major section.
- **Surfaces**: Web hero/section modules, console secondary panes, docs chapter intros.

### BrandInlineAd (`brand-inline-ad`)
- **Use**: Between content blocks (e.g., blog posts, docs chapters). Never interrupts paragraphs mid-sentence.
- **Contents**: Label (`Partner Signal`), logo, 1-line teaser, CTA text link.
- **Layout**: Full-bleed container with muted border, 12–16px padding, no autoplay media. Respect reading flow with generous top/bottom spacing.
- **Surfaces**: Docs pages, research posts, release notes.

### BrandFooterSponsors (`brand-footer-sponsors`)
- **Use**: Cluster of 3–6 sponsors in footers or console "About" screens.
- **Contents**: Logos only with accessible text labels. Optional single-line "Supported by" heading.
- **Layout**: Even grid, equal logo sizing, monochrome or duotone treatment. Avoid rotating carousels; prefer static.
- **Surfaces**: Marketing site footer, console about modal, PDF deck closing slide.

## Visual and Content Rules

- **Labeling**: Always include a visible label (`Sponsored`, `Partner Signal`, or `Supported by`).
- **Tone**: Precise, credible, technical. Avoid hype lines like "limited time"; focus on integration value.
- **Color**: Base backgrounds stay dark (#000–#0d0d0f). Use magenta/blue/cyan gradients as thin accents or dividers, not full fills.
- **Typography**: Labels in JetBrains Mono (uppercase optional), body in Inter. Keep body copy 14–16px with 1.4–1.6 line-height.
- **Logos**: Prefer monochrome or duotone aligned to BlackRoad palette. Maintain protection zones per `/guides/logo-protection-zones.md`.

## Privacy & Security Requirements

- **No third-party JS or iframes**. Creative assets must be static images served via trusted CDNs.
- **Data minimization**: No tracking pixels unless the product surface explicitly enables them and the VPR entry lists `proxy-pixel` or `proxy-click`.
- **CSP alignment**: Surfaces should restrict `img-src` to the partner asset host and BlackRoad domains; disallow inline script.
- **Accessibility**: All logos require `alt` text. CTA elements must be keyboard-focusable with visible focus rings.
- **Frequency & caps**: Default to one sponsor placement per major viewport segment (e.g., per hero, per footer). Avoid repeated impressions on the same scroll depth.

## Implementation Checklists

- **Web**: Map tokens to CSS variables or Tailwind config; enforce max widths; add `aria-label="Sponsored"`. Validate `allowed_placements` before rendering.
- **Prism Console**: Keep panels compact; disable flashing or animated terminal sequences in sponsor areas; ensure keyboard navigation in side panels.
- **Docs/Research**: Place inline units between sections; keep text-only variants for PDF/export; maintain high contrast for print.
- **Email**: Use static logos, 1x CTA link, and include "Sponsored" in preheader. No remote fonts if client blocks them; fall back to system sans/mono.

## Adoption Notes for Other Repos

- Import the VPR data or API client, filter sponsors by placement id, and render using these component patterns.
- If a surface needs a new placement, define it here first with size, tone, and privacy rules, then add to `allowed_placements` in the VPR.
- Keep changelog entries in `/guides/brand-changelog.md` if placements or policies change.
