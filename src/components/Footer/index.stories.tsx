import { Meta as _Meta, StoryObj } from '@storybook/react';

import { Footer } from '.';

type Meta = _Meta<typeof Footer>;
type Story = StoryObj<typeof Footer>;

export default {
  component: Footer,
  args: {}
} as Meta;

export const Default: Story = {
  args: {}
};
