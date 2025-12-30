// this is the Start.tsx file
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from 'storybook/test';
import { Start } from './start';

const meta = {
component: Start,
title: 'Atoms/Start',
args: { onClick: fn() },
} satisfies Meta<typeof Start>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
args: {
primary: true,
},
};