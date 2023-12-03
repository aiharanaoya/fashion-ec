import { Meta as _Meta, StoryObj } from '@storybook/react';

import { H1 } from '.';

type Meta = _Meta<typeof H1>;
type Story = StoryObj<typeof H1>;

export default {
  component: H1,
  args: {
    text: '見出し'
  }
} as Meta;

export const Default: Story = {
  args: {}
};
