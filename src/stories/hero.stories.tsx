// this is the Hero.tsx file
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from 'storybook/test';
import { Hero } from './hero';

const meta = {
component: Hero,
title: 'Atoms/Hero',
args: { onClick: fn() },
} satisfies Meta<typeof Hero>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
args: {
primary: true,
},
};