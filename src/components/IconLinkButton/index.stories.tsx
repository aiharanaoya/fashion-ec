import { HeartIcon } from '@heroicons/react/24/outline';
import { Meta as _Meta, StoryObj } from '@storybook/react';

import { IconLinkButton } from '.';

type Meta = _Meta<typeof IconLinkButton>;
type Story = StoryObj<typeof IconLinkButton>;

export default {
  component: IconLinkButton,
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
