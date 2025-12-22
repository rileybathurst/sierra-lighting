// this is the Name.stories.tsx file
import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { Neutrals } from './Neutrals';

const meta = {
  component: Neutrals,
  title: 'Atoms/Neutrals',
  args: { onClick: () => {} },
} satisfies Meta<typeof Neutrals>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
  },
};