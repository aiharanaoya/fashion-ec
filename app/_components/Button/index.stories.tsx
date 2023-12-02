import { Meta as _Meta, StoryObj } from '@storybook/react';

import { Button } from '.';

type Meta = _Meta<typeof Button>;
type Story = StoryObj<typeof Button>;

export default {
  component: Button,
  args: {
    children: 'Button',
    disabled: false,
    onClick: () => {
      console.log('button click');
    }
  }
} as Meta;

export const Default: Story = {
  args: {}
};

export const Disabled: Story = {
  args: {
    disabled: true
  }
};
