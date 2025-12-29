// this is the FooterList.tsx file
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from 'storybook/test';
import { FooterList } from './footer-list';

const meta = {
component: FooterList,
title: 'Molecules/FooterList',
args: { onClick: fn() },
} satisfies Meta<typeof FooterList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
args: {
primary: true,
},
};