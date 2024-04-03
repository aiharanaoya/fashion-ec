import { Meta as _Meta, StoryObj } from '@storybook/react';

import { ItemDetailCard } from '.';

type Meta = _Meta<typeof ItemDetailCard>;
type Story = StoryObj<typeof ItemDetailCard>;

export default {
  component: ItemDetailCard,
  args: {
    text: 'テキスト'
  }
} as Meta;

export const Default: Story = {
  args: {}
};
