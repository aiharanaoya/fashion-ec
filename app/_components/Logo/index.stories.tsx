import { Meta as _Meta, StoryObj } from '@storybook/react';

import { Logo } from '.';

type Meta = _Meta<typeof Logo>;
type Story = StoryObj<typeof Logo>;

export default {
  component: Logo,
  args: {}
} as Meta;

export const Default: Story = {
  args: {}
};
