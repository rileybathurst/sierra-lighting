// this is the FAQ.tsx file
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from 'storybook/test';
import { FAQ } from './faq';

const meta = {
component: FAQ,
title: 'Atoms/FAQ',
args: { onClick: fn() },
} satisfies Meta<typeof FAQ>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
args: {
primary: true,
},
};