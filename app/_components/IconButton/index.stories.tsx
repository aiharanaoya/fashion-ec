import { HeartIcon } from '@heroicons/react/24/outline';
import { Meta as _Meta, StoryObj } from '@storybook/react';

import { IconButton } from '.';

type Meta = _Meta<typeof IconButton>;
type Story = StoryObj<typeof IconButton>;

export default {
  component: IconButton,
  args: {
    children: <HeartIcon className="w-6" />,
    onClick: () => {
      console.log('button click');
    }
  }
} as Meta;

export const Default: Story = {
  args: {}
};
