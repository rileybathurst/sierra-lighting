// this is the Name.stories.tsx file
import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { fn } from 'storybook/test';
import { HomeServices } from './HomeServices';

const meta = {
  component: HomeServices,
  title: 'Organisms/HomeServices',
  args: { onClick: fn() },
} satisfies Meta<typeof HomeServices>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
  },
};