import { Meta as _Meta, StoryObj } from '@storybook/react';

import { Header } from '.';

type Meta = _Meta<typeof Header>;
type Story = StoryObj<typeof Header>;

export default {
  component: Header,
  args: {}
} as Meta;

export const Default: Story = {
  args: {}
};
