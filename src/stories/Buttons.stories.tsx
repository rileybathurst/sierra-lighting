// this is the Name.stories.tsx file
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Buttons } from './Buttons';

const meta = {
  component: Buttons,
  title: 'Uncategorized/Buttons',
  args: { onClick: fn() },
} satisfies Meta<typeof Buttons>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
  },
};