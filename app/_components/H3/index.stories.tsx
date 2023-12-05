import { Meta as _Meta, StoryObj } from '@storybook/react';

import { H3 } from '.';

type Meta = _Meta<typeof H3>;
type Story = StoryObj<typeof H3>;

export default {
  component: H3,
  args: {
    text: '見出し3'
  }
} as Meta;

export const Default: Story = {
  args: {}
};
