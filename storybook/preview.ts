import type { Preview } from '@storybook/react';
import '../css/brand.css';
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
        order: ['Palette', 'Typography', 'IconGrid'],
      },
    },
    backgrounds: {
      default: 'noir',
      values: [
        { name: 'noir', value: 'hsl(240 17% 12%)' },
        { name: 'paper', value: '#0c0c15' },
      ],
    },
  },
};

export default preview;
