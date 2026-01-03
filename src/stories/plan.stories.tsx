// this is the Plan.tsx file
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from 'storybook/test';
import { Plan } from './plan';

const meta = {
component: Plan,
title: 'Pages/Plan',
args: { onClick: fn() },
} satisfies Meta<typeof Plan>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
args: {
primary: true,
},
};