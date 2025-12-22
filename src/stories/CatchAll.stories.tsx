// this is the Name.stories.tsx file
import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { CatchAll } from './CatchAll';

const meta = {
  component: CatchAll,
  title: 'Pages/CatchAll',
  args: { onClick: () => {} },
} satisfies Meta<typeof CatchAll>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
  },
};