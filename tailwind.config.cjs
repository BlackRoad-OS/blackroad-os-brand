/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./stories/**/*.{js,ts,jsx,tsx,mdx}', './src/**/*.{js,ts,jsx,tsx,mdx}', './packages/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        accent: {
          pink: 'var(--br-color-accent-pink)',
          electric: 'var(--br-color-accent-electric)',
        },
        neutral: {
          50: 'var(--br-color-neutral-50)',
          900: 'var(--br-color-neutral-900)',
        },
      },
      fontFamily: {
        display: "var(--br-font-display)",
        body: "var(--br-font-body)",
      },
      borderRadius: {
        xs: 'var(--br-radius-xs)',
        md: 'var(--br-radius-md)',
        xl: 'var(--br-radius-xl)',
      },
      boxShadow: {
        glow: '0 10px 50px rgba(0, 255, 239, 0.25)',
      },
    },
  },
  plugins: [],
};
