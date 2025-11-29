import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { tokens } from '../packages/brand-js/src';

const TypeScale = () => {
  const rows: Array<{ weight: number; label: string; copy: string }> = [
    { weight: 900, label: 'Hero', copy: 'Spiral Information Geometry' },
    { weight: 700, label: 'Title', copy: 'Context-aware navigation' },
    { weight: 400, label: 'Body', copy: 'Use Inter for paragraphs and UI labels.' },
  ];

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <div className="uppercase text-xs tracking-[0.3em] text-white/60">Display</div>
        <div className="text-4xl md:text-5xl font-bold" style={{ fontFamily: tokens.font.display }}>
          Spiral Information Geometry
        </div>
        <p className="text-white/70" style={{ fontFamily: tokens.font.body }}>
          Use Inter Tight for headlines and hero statements. Reserve Inter for legible body copy and interface labels.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {rows.map((row) => (
          <div key={row.label} className="p-4 rounded-xl bg-neutral-900/70 border border-white/10 shadow-lg">
            <div className="text-2xl" style={{ fontFamily: tokens.font.display, fontWeight: row.weight }}>
              {row.label}
            </div>
            <p className="text-sm text-white/70" style={{ fontFamily: tokens.font.body }}>
              {row.copy}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

const meta: Meta<typeof TypeScale> = {
  title: 'TypographyScale',
  component: TypeScale,
};

export default meta;

type Story = StoryObj<typeof TypeScale>;

export const Scale: Story = {
  render: () => <TypeScale />,
};
