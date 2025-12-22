// this is the Name.stories.tsx file
import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { Breadcrumbs } from "./Breadcrumbs";

const meta = {
  component: Breadcrumbs,
  title: "Molecules/Breadcrumbs",
  args: { onClick: () => {} },
} satisfies Meta<typeof Breadcrumbs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
  },
};
