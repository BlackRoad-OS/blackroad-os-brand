import type { Preview } from '@storybook/react';
import { applyTheme, tokens } from '../packages/brand-js/src';
import '../src/styles/tailwind.css';
import './preview.css';

const preview: Preview = {
  parameters: {
    controls: {
      expanded: true,
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    options: {
      storySort: {
        method: 'alphabetical',
        order: ['Intro', 'ColorPalette', 'TypographyScale', 'LogoVariants', 'Buttons'],
      },
    },
    backgrounds: {
      default: 'noir',
      values: [
        { name: 'noir', value: '#0a0a0a' },
        { name: 'paper', value: '#fafafa' },
      ],
    },
  },
  decorators: [
    (Story) => {
      applyTheme(tokens, { dark: true });
      return Story();
    },
  ],
};

export default preview;
