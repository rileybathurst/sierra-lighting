// this is the Slider.tsx file
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from 'storybook/test';
import { Slider } from './slider';

const meta = {
  component: Slider,
  title: 'Organisms/Slider',
  args: { onClick: fn() },
} satisfies Meta<typeof Slider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
  },
};