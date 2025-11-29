export const tokens = {
  "color": {
    "accent": {
      "pink": "#ff4fd8",
      "electric": "#00ffef"
    },
    "neutral": {
      "50": "#fafafa",
      "900": "#0a0a0a"
    }
  },
  "radius": {
    "xs": "2px",
    "md": "6px",
    "xl": "16px"
  },
  "font": {
    "display": "'Inter Tight', sans-serif",
    "body": "'Inter', sans-serif"
  }
} as const;

export const cssVariables = {
  "--br-color-accent-pink": "#ff4fd8",
  "--br-color-accent-electric": "#00ffef",
  "--br-color-neutral-50": "#fafafa",
  "--br-color-neutral-900": "#0a0a0a",
  "--br-radius-xs": "2px",
  "--br-radius-md": "6px",
  "--br-radius-xl": "16px",
  "--br-font-display": "'Inter Tight', sans-serif",
  "--br-font-body": "'Inter', sans-serif"
} as const;

export type Tokens = typeof tokens;
