// this is the Name.stories.tsx file
import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { Showcase } from './Showcase';

const meta = {
  component: Showcase,
  title: 'Pages/Showcase',
  args: { onClick: () => {} },
} satisfies Meta<typeof Showcase>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
  },
};