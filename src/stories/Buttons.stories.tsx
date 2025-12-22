// this is the Name.stories.tsx file
import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { Buttons } from './Buttons';

const meta = {
  component: Buttons,
  title: 'Atoms/Buttons',
  args: { onClick: () => {} },
} satisfies Meta<typeof Buttons>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
  },
};