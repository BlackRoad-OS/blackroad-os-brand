export const tokens = {
  "color": {
    "neon": {
      "sunrise": "#FF9D00",
      "warmOrange": "#FF6B00",
      "hotPink": "#FF0066",
      "electricMagenta": "#FF006B",
      "deepMagenta": "#D600AA",
      "vividPurple": "#7700FF",
      "cyberBlue": "#0066FF"
    },
    "neutral": {
      "black": "#000000",
      "deepBlack": "#050505",
      "charcoal": "#0D0D0D",
      "slate": "#141414",
      "white": "#FFFFFF"
    },
    "gradient": {
      "brand": "linear-gradient(180deg, #FF9D00 0%, #FF6B00 50%, #FF0066 100%)",
      "os": "linear-gradient(180deg, #FF0066 0%, #D600AA 33%, #7700FF 66%, #0066FF 100%)"
    },
    "semantic": {
      "action": "#FF9D00",
      "creativity": "#FF0066",
      "intelligence": "#7700FF",
      "trust": "#0066FF",
      "focus": "#FF006B",
      "depth": "#D600AA"
    }
  },
  "radius": {
    "xs": "2px",
    "sm": "4px",
    "md": "8px",
    "lg": "12px",
    "xl": "16px",
    "2xl": "24px",
    "full": "9999px"
  },
  "font": {
    "display": "'Inter Tight', sans-serif",
    "body": "'Inter', sans-serif",
    "mono": "'JetBrains Mono', monospace"
  },
  "shadow": {
    "glow": {
      "orange": "0 0 30px rgba(255, 157, 0, 0.4)",
      "pink": "0 0 30px rgba(255, 0, 102, 0.4)",
      "purple": "0 0 30px rgba(119, 0, 255, 0.4)",
      "blue": "0 0 30px rgba(0, 102, 255, 0.4)"
    }
  }
} as const;

export const cssVariables = {
  "--br-color-neon-sunrise": "#FF9D00",
  "--br-color-neon-warmOrange": "#FF6B00",
  "--br-color-neon-hotPink": "#FF0066",
  "--br-color-neon-electricMagenta": "#FF006B",
  "--br-color-neon-deepMagenta": "#D600AA",
  "--br-color-neon-vividPurple": "#7700FF",
  "--br-color-neon-cyberBlue": "#0066FF",
  "--br-color-neutral-black": "#000000",
  "--br-color-neutral-deepBlack": "#050505",
  "--br-color-neutral-charcoal": "#0D0D0D",
  "--br-color-neutral-slate": "#141414",
  "--br-color-neutral-white": "#FFFFFF",
  "--br-color-gradient-brand": "linear-gradient(180deg, #FF9D00 0%, #FF6B00 50%, #FF0066 100%)",
  "--br-color-gradient-os": "linear-gradient(180deg, #FF0066 0%, #D600AA 33%, #7700FF 66%, #0066FF 100%)",
  "--br-color-semantic-action": "#FF9D00",
  "--br-color-semantic-creativity": "#FF0066",
  "--br-color-semantic-intelligence": "#7700FF",
  "--br-color-semantic-trust": "#0066FF",
  "--br-color-semantic-focus": "#FF006B",
  "--br-color-semantic-depth": "#D600AA",
  "--br-radius-xs": "2px",
  "--br-radius-sm": "4px",
  "--br-radius-md": "8px",
  "--br-radius-lg": "12px",
  "--br-radius-xl": "16px",
  "--br-radius-2xl": "24px",
  "--br-radius-full": "9999px",
  "--br-font-display": "'Inter Tight', sans-serif",
  "--br-font-body": "'Inter', sans-serif",
  "--br-font-mono": "'JetBrains Mono', monospace",
  "--br-shadow-glow-orange": "0 0 30px rgba(255, 157, 0, 0.4)",
  "--br-shadow-glow-pink": "0 0 30px rgba(255, 0, 102, 0.4)",
  "--br-shadow-glow-purple": "0 0 30px rgba(119, 0, 255, 0.4)",
  "--br-shadow-glow-blue": "0 0 30px rgba(0, 102, 255, 0.4)"
} as const;

export type Tokens = typeof tokens;
