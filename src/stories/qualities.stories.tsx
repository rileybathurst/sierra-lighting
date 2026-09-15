// this is the Name.stories.tsx file
import type { Meta, StoryObj } from '@storybook/react';
import { Qualities } from './qualities.tsx';

const meta = {
  component: Qualities,
  title: 'Organisms/Qualities',
  args: {},
} satisfies Meta<typeof Qualities>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};