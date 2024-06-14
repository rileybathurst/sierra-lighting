// this is the Name.stories.tsx file
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Neutrals } from './Neutrals';

const meta = {
  component: Neutrals,
  title: 'Uncategorized/Neutrals',
  args: { onClick: fn() },
} satisfies Meta<typeof Neutrals>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
  },
};