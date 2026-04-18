// this is the Suite.tsx file
import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { fn } from 'storybook/test';
import { Suite } from './suite';

const meta = {
  component: Suite,
  title: 'Atoms/Suite',
  args: { onClick: fn() },
} satisfies Meta<typeof Suite>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
  },
};