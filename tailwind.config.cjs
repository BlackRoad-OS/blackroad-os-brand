/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./stories/**/*.{js,ts,jsx,tsx,mdx}', './src/**/*.{js,ts,jsx,tsx,mdx}', './packages/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        // Surfaces
        'br-bg': 'var(--br-bg)',
        'br-surface': 'var(--br-surface)',
        'br-surface-2': 'var(--br-surface-2)',
        'br-border': 'var(--br-border)',
        // Text
        'br-text': 'var(--br-text)',
        'br-text-muted': 'var(--br-text-muted)',
        // Brand palette
        'br-sunrise-orange': 'var(--br-sunrise-orange)',
        'br-warm-orange': 'var(--br-warm-orange)',
        'br-hot-pink': 'var(--br-hot-pink)',
        'br-electric-magenta': 'var(--br-electric-magenta)',
        'br-deep-magenta': 'var(--br-deep-magenta)',
        'br-vivid-purple': 'var(--br-vivid-purple)',
        'br-cyber-blue': 'var(--br-cyber-blue)',
        // Legacy aliases
        accent: {
          pink: 'var(--br-hot-pink)',
          electric: 'var(--br-cyber-blue)',
        },
        neutral: {
          50: 'var(--br-text)',
          900: 'var(--br-bg)',
        },
      },
      fontFamily: {
        display: 'var(--br-font-display)',
        body: 'var(--br-font-body)',
        mono: 'var(--br-font-mono)',
      },
      borderRadius: {
        xs: 'var(--br-radius-xs)',
        md: 'var(--br-radius-md)',
        lg: 'var(--br-radius-lg)',
        xl: 'var(--br-radius-xl)',
        '2xl': 'var(--br-radius-2xl)',
        full: 'var(--br-radius-full)',
      },
      boxShadow: {
        'glow-pink': 'var(--br-shadow-glow-pink)',
        'glow-purple': 'var(--br-shadow-glow-purple)',
        'glow-blue': 'var(--br-shadow-glow-blue)',
        card: 'var(--br-shadow-card)',
        // Legacy
        glow: '0 0 24px rgba(255, 0, 102, 0.45)',
      },
    },
  },
  plugins: [],
};
