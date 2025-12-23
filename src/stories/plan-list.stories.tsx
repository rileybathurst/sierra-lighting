// this is the PlanList.tsx file
import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { PlanList } from './plan-list';

const meta = {
component: PlanList,
title: 'Pages/PlanList',
args: { onClick: () => {} },
} satisfies Meta<typeof PlanList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        primary: true,
    },
};