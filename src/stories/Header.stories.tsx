// this is the Name.stories.tsx file
import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { Header } from './Header';

const meta = {
  component: Header,
  title: 'Organisms/Header',
  args: { onClick: () => {} },
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
  },
};