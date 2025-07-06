// this is the Name.stories.tsx file
import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { fn } from 'storybook/test';
import { CatchAll } from './CatchAll';

const meta = {
  component: CatchAll,
  title: 'Pages/CatchAll',
  args: { onClick: fn() },
} satisfies Meta<typeof CatchAll>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
  },
};