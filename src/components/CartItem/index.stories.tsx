import { Meta as _Meta, StoryObj } from '@storybook/react';

import { CartItem } from '.';

type Meta = _Meta<typeof CartItem>;
type Story = StoryObj<typeof CartItem>;

export default {
  component: CartItem,
  args: {
    text: 'テキスト'
  }
} as Meta;

export const Default: Story = {
  args: {}
};
