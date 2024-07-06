// this is the Name.stories.tsx file
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Testimonials } from './Testimonials';

const meta = {
  component: Testimonials,
  title: 'Organisms/Testimonials',
  args: { onClick: fn() },
} satisfies Meta<typeof Testimonials>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
  },
};