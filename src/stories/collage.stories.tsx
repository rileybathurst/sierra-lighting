// this is the Collage.tsx file
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from 'storybook/test';
import { Collage } from './collage';

const meta = {
    component: Collage,
    title: 'Organisms/Collage',
    args: { onClick: fn() },
} satisfies Meta<typeof Collage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        primary: true,
    },
};