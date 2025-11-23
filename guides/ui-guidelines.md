# UI Guidelines

These rules keep product surfaces aligned to the BlackRoad OS design language.

## Components

- **Cards & panels**: `--br-surface` backgrounds with 8–12px corner radii.
- **Borders**: 1px outlines using `rgba(255, 255, 255, 0.08)`; brighten to `0.16` on hover.
- **Shadows/Glow**: Subtle outer glow using `--gradient-br-os` at 6–12px blur for emphasis; avoid drop shadows on neon surfaces.
- **Inputs & controls**: High-contrast focus rings in `--br-accent-cyan`; avoid double glows.

## Interactions

- Hover: Light up edges using `--br-accent-pink` or `--br-accent-cyan`; maintain motion under 200ms.
- Active: Compress spacing by 1–2px and dim glow to keep feedback tactile.
- Disabled: Reduce opacity to 40–50% without changing layout.

## Layout

- Respect the 4px spacing scale; never drift off-grid.
- Constrain max content width to 1200px on wide screens; center within generous margins.
- Keep at least 24px padding around neon gradients to prevent bleed into adjacent components.

## Data & Visualization

- Use `--br-accent-cyan` for primary data lines, `--br-accent-purple` for secondary, and `--br-accent-gold` for alerts.
- Keep backgrounds dark with thin white gridlines at 8–12% opacity.
- Favor line charts and precise geometry over heavy fills to keep the fractal-road motif crisp.
