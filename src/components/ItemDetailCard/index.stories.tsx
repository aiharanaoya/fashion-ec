import { Meta as _Meta, StoryObj } from '@storybook/react';

import { ItemDetailCard } from '.';

type Meta = _Meta<typeof ItemDetailCard>;
type Story = StoryObj<typeof ItemDetailCard>;

export default {
  component: ItemDetailCard,
  args: {
    image: {
      src: 'https://picsum.photos/1600/900',
      alt: ''
    },
    name: 'アイテム名アイテム名アイテム名',
    price: 5000,
    description:
      '説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文'
  }
} as Meta;

export const Default: Story = {
  args: {}
};
