import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { tokens } from '../packages/brand-js/src';

const Palette = () => {
  const swatches = [
    { name: 'Sunrise', token: '--br-color-neon-sunrise', value: tokens.color.neon.sunrise },
    { name: 'Hot Pink', token: '--br-color-neon-hotPink', value: tokens.color.neon.hotPink },
    { name: 'Electric Magenta', token: '--br-color-neon-electricMagenta', value: tokens.color.neon.electricMagenta },
    { name: 'Vivid Purple', token: '--br-color-neon-vividPurple', value: tokens.color.neon.vividPurple },
    { name: 'Cyber Blue', token: '--br-color-neon-cyberBlue', value: tokens.color.neon.cyberBlue },
    { name: 'Charcoal', token: '--br-color-neutral-charcoal', value: tokens.color.neutral.charcoal },
    { name: 'Slate', token: '--br-color-neutral-slate', value: tokens.color.neutral.slate },
    { name: 'White', token: '--br-color-neutral-white', value: tokens.color.neutral.white },
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
