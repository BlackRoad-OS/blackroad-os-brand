import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { tokens } from '../packages/brand-js/src';

const Palette = () => {
  const swatches = [
    { name: 'Accent Pink', token: '--br-color-accent-pink', value: tokens.color.accent.pink },
    { name: 'Accent Electric', token: '--br-color-accent-electric', value: tokens.color.accent.electric },
    { name: 'Neutral 900', token: '--br-color-neutral-900', value: tokens.color.neutral['900'] },
    { name: 'Neutral 50', token: '--br-color-neutral-50', value: tokens.color.neutral['50'] },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {swatches.map((swatch) => (
        <div key={swatch.name} className="rounded-xl border border-white/10 overflow-hidden shadow-lg">
          <div className="h-24" style={{ background: swatch.value }} />
          <div className="p-3 bg-neutral-900/60 text-white text-sm space-y-1">
            <div className="font-semibold">{swatch.name}</div>
            <div className="text-xs text-white/80 font-mono">{swatch.token}</div>
            <div className="text-xs text-white/60">{swatch.value}</div>
          </div>
        </div>
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
