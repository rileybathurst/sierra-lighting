// this is the Name.stories.tsx file
import type { Meta, StoryObj } from '@storybook/react';
import { Masthead } from './masthead';

const meta = {
  component: Masthead,
  title: 'Organisms/Masthead',
  args: {},
} satisfies Meta<typeof Masthead>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};