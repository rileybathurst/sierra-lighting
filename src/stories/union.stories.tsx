// this is the Name.stories.tsx file
import type { Meta, StoryObj } from '@storybook/react';
import { Union } from './union';

const meta = {
  component: Union,
  title: 'Atoms/Union',
  args: {},
} satisfies Meta<typeof Union>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
  },
};