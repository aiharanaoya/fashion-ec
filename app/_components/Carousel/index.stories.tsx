import { Meta as _Meta, StoryObj } from '@storybook/react';

import { Carousel } from '.';

type Meta = _Meta<typeof Carousel>;
type Story = StoryObj<typeof Carousel>;

export default {
  component: Carousel,
  args: {
    images: [
      {
        src: 'https://picsum.photos/1600/900',
        alt: ''
      },
      {
        src: 'https://picsum.photos/1600/900',
        alt: ''
      },
      {
        src: 'https://picsum.photos/1600/900',
        alt: ''
      }
    ]
  }
} as Meta;

export const Default: Story = {
  args: {}
};
