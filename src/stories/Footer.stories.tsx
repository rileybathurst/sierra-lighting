// this is the Name.stories.tsx file
import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { Footer } from './Footer';

const meta = {
  component: Footer,
  title: 'Organisms/Footer',
  args: { onClick: () => {} },
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
  },
};