// this is the Sheet.tsx file
import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { fn } from 'storybook/test';
import { Sheet } from './sheet';

const meta = {
component: Sheet,
title: 'Molecules/Sheet',
args: { onClick: fn() },
} satisfies Meta<typeof Sheet>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
args: {
primary: true,
},
};