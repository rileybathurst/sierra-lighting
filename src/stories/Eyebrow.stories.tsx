// this is the Name.stories.tsx file
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Eyebrow } from './Eyebrow';

const meta = {
  component: Eyebrow,
  title: 'Molecules/Eyebrow',
  args: { onClick: fn() },
} satisfies Meta<typeof Eyebrow>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
  },
};