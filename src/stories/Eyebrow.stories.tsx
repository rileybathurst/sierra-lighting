// this is the Name.stories.tsx file
import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { Eyebrow } from './Eyebrow';

const meta = {
  component: Eyebrow,
  title: 'Molecules/Eyebrow',
  args: { onClick: () => {} },
} satisfies Meta<typeof Eyebrow>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
  },
};