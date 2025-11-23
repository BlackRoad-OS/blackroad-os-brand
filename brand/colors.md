# Color System

The BlackRoad OS color system is neon-forward and optimized for dark surfaces. Use these tokens as the single source of truth across products, docs, and marketing.

## Core Palette

| Token | Hex | Usage |
| --- | --- | --- |
| `--br-black` | `#000000` | Primary backdrop; anchors the visual identity of the Road. |
| `--br-surface` | `#0d0d0f` | Elevated surfaces and cards on dark UI. |
| `--br-white` | `#ffffff` | Text on dark backgrounds; subtle highlights. |
| `--br-accent-pink` | `#ff4fd8` | Primary neon accent, actions, and highlights. |
| `--br-accent-cyan` | `#4ffff2` | Secondary accent for balance and gradients. |
| `--br-accent-gold` | `#fcd34d` | Signal highlights, warnings, and premium moments. |
| `--br-accent-purple` | `#b44bff` | Depth accents, data visualizations, and SIG-inspired design language. |

## Application

- Favor dark canvases; neon accents should appear intentional and minimal.
- Avoid large fields of neon; use accents to outline paths, data, and navigation.
- Keep contrast high for readability (`WCAG 2.1 AA` minimum).
- For mixed-brand scenarios, keep non-BlackRoad colors desaturated so the neon geometry remains dominant.

## Accessibility & Contrast

- Use `--br-white` or `--br-accent-cyan` text on `--br-black`/`--br-surface` for maximum clarity.
- For gold or pink backgrounds, prefer dark text and provide a neutral outline for interactive states.
- Provide non-color affordances (icons, underline states, labels) whenever color communicates status.
