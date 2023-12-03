import { Meta as _Meta, StoryObj } from '@storybook/react';

import { H2 } from '.';

type Meta = _Meta<typeof H2>;
type Story = StoryObj<typeof H2>;

export default {
  component: H2,
  args: {
    text: '見出し'
  }
} as Meta;

export const Default: Story = {
  args: {}
};
