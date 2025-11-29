import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

const Button = ({ variant = 'primary', children }: { variant?: 'primary' | 'ghost'; children: React.ReactNode }) => {
  const base =
    'inline-flex items-center justify-center gap-2 px-4 py-2 rounded-md font-semibold transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-900';
  const variants: Record<string, string> = {
    primary:
      'bg-[color:var(--br-color-accent-pink)] text-neutral-900 hover:bg-[color:var(--br-color-accent-electric)] shadow-glow',
    ghost:
      'border border-white/20 text-white hover:border-white/40 hover:bg-white/5',
  };
  return <button className={`${base} ${variants[variant]}`}>{children}</button>;
};

const meta: Meta<typeof Button> = {
  title: 'Buttons',
  component: Button,
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: { variant: 'primary', children: 'Launch Mission' },
};

export const Ghost: Story = {
  args: { variant: 'ghost', children: 'Secondary Action' },
};
