import { Meta as _Meta, StoryObj } from '@storybook/react';

import { ItemCard } from '.';

type Meta = _Meta<typeof ItemCard>;
type Story = StoryObj<typeof ItemCard>;

export default {
  component: ItemCard,
  args: {
    image: {
      src: 'https://picsum.photos/1600/900',
      alt: ''
    },
    name: 'アイテム名',
    price: 5000
  }
} as Meta;

export const Default: Story = {
  args: {}
};
