export const tokens = {
  "color": {
    "primary": "hsl(265 86% 62%)",
    "secondary": "hsl(195 82% 55%)",
    "accent": "hsl(45 96% 62%)",
    "positive": "hsl(150 65% 50%)",
    "negative": "hsl(6 78% 58%)",
    "neutral": {
      "100": "hsl(240 17% 12%)",
      "200": "hsl(240 16% 18%)",
      "300": "hsl(240 14% 26%)",
      "400": "hsl(240 12% 44%)",
      "500": "hsl(240 10% 62%)",
      "600": "hsl(240 8% 74%)"
    },
    "gradient": {
      "pulse": "linear-gradient(135deg, hsl(265 86% 62%), hsl(195 82% 55%))",
      "amber": "linear-gradient(135deg, hsl(12 86% 64%), hsl(45 96% 62%))",
      "noir": "linear-gradient(145deg, hsl(240 17% 12%), hsl(240 10% 32%))"
    }
  },
  "motion": {
    "duration": {
      "fast": "120ms",
      "base": "200ms",
      "slow": "320ms"
    },
    "easing": {
      "in": "cubic-bezier(0.44, 0, 1, 1)",
      "out": "cubic-bezier(0, 0, 0.2, 1)",
      "inOut": "cubic-bezier(0.45, 0, 0.55, 1)"
    }
  },
  "radius": {
    "sm": "0.25rem",
    "md": "0.5rem",
    "lg": "0.75rem",
    "xl": "1rem",
    "pill": "999px"
  },
  "spacing": {
    "0": "0rem",
    "2": "0.125rem",
    "4": "0.25rem",
    "8": "0.5rem",
    "12": "0.75rem",
    "16": "1rem",
    "20": "1.25rem",
    "24": "1.5rem",
    "32": "2rem",
    "40": "2.5rem",
    "48": "3rem",
    "56": "3.5rem",
    "64": "4rem",
    "72": "4.5rem",
    "80": "5rem",
    "96": "6rem"
  },
  "typography": {
    "font": {
      "sans": "'Inter Variable', 'Inter', system-ui, -apple-system, sans-serif",
      "mono": "'JetBrains Mono Variable', 'JetBrains Mono', 'SFMono-Regular', monospace"
    },
    "weight": {
      "regular": "400",
      "medium": "500",
      "semibold": "600",
      "bold": "700"
    },
    "size": {
      "xs": "0.75rem",
      "sm": "0.875rem",
      "md": "1rem",
      "lg": "1.25rem",
      "xl": "1.5rem",
      "2xl": "1.875rem",
      "3xl": "2.25rem"
    },
    "lineHeight": {
      "tight": "1.1",
      "snug": "1.3",
      "relaxed": "1.6"
    }
  }
} as const;

export type Tokens = typeof tokens;
