// this is the Name.stories.tsx file
import type { Meta, StoryObj } from '@storybook/react';
import { AreaList } from './area-list';

const meta = {
  component: AreaList,
  title: 'Molecules/AreaList',
  args: {},
} satisfies Meta<typeof AreaList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
  },
};