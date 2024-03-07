import { Meta as _Meta, StoryObj } from '@storybook/react';

import { ItemSection } from '.';

type Meta = _Meta<typeof ItemSection>;
type Story = StoryObj<typeof ItemSection>;

export default {
  component: ItemSection,
  args: {
    headlineText: '新着アイテム',
    itemList: [
      {
        image: {
          src: 'https://picsum.photos/1600/900',
          alt: ''
        },
        name: 'アイテム名アイテム名アイテム名',
        price: 5000
      },
      {
        image: {
          src: 'https://picsum.photos/1600/900',
          alt: ''
        },
        name: 'アイテム名アイテム名アイテム名',
        price: 5000
      },
      {
        image: {
          src: 'https://picsum.photos/1600/900',
          alt: ''
        },
        name: 'アイテム名アイテム名アイテム名',
        price: 5000
      },
      {
        image: {
          src: 'https://picsum.photos/1600/900',
          alt: ''
        },
        name: 'アイテム名アイテム名アイテム名',
        price: 5000
      }
    ]
  }
} as Meta;

export const Default: Story = {
  args: {}
};
