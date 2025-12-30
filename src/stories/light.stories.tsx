// this is the Light.tsx file
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from 'storybook/test';
import { Light } from './light';

const meta = {
component: Light,
title: 'Pages/Light',
args: { onClick: fn() },
} satisfies Meta<typeof Light>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
args: {
primary: true,
},
};