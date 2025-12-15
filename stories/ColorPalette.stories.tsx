import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ColorSwatch } from '../src/components/ColorSwatch';
import { tokens } from '../packages/brand-js/src';

const swatches = [
  {
    name: 'Accent Pink',
    token: '--br-color-accent-pink',
    value: tokens.color.accent.pink,
    description: 'Electric accent hue for highlights and CTAs.',
  },
  {
    name: 'Accent Electric',
    token: '--br-color-accent-electric',
    value: tokens.color.accent.electric,
    description: 'Vibrant cyan used for focus states and interactive elements.',
  },
  {
    name: 'Neutral 900',
    token: '--br-color-neutral-900',
    value: tokens.color.neutral['900'],
    description: 'Primary surface background in dark mode.',
  },
  {
    name: 'Neutral 50',
    token: '--br-color-neutral-50',
    value: tokens.color.neutral['50'],
    description: 'Lightest neutral for inverse surfaces.',
  },
];

const Palette = () => {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
        gap: 'var(--br-spacing-16, 1rem)',
      }}
    >
      {swatches.map((swatch) => (
        <ColorSwatch
          key={swatch.name}
          name={swatch.name}
          value={swatch.value}
          description={swatch.description}
          token={swatch.token}
        />
      ))}
    </div>
  );
};

const meta: Meta<typeof Palette> = {
  title: 'ColorPalette',
  component: Palette,
};

export default meta;

type Story = StoryObj<typeof Palette>;

export const Swatches: Story = {
  render: () => <Palette />,
};
