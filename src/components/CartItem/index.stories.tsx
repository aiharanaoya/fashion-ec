import { Meta as _Meta, StoryObj } from '@storybook/react';

import { CartItem } from '.';

type Meta = _Meta<typeof CartItem>;
type Story = StoryObj<typeof CartItem>;

export default {
  component: CartItem,
  args: {
    image: {
      src: 'https://picsum.photos/1600/900',
      alt: ''
    },
    name: 'アイテム名アイテム名アイテム名',
    price: 5000,
    onClickDelete: () => {}
  }
} as Meta;

export const Default: Story = {
  args: {}
};
