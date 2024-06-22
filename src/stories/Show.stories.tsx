// this is the Name.stories.tsx file
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Show } from './Show';

const meta = {
  component: Show,
  title: 'Molecules/Show',
  args: { onClick: fn() },
} satisfies Meta<typeof Show>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
  },
};