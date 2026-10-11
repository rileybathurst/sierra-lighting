// this is the Name.stories.tsx file
import type { Meta, StoryObj } from '@storybook/react';
import { Triptych } from './triptych';

const meta = {
  component: Triptych,
  title: 'Organisms/Triptych',
  args: {},
} satisfies Meta<typeof Triptych>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
  },
};