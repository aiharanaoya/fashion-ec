import { Meta as _Meta, StoryObj } from '@storybook/react';

import { Button, BUTTON_TYPE } from '.';

type Meta = _Meta<typeof Button>;
type Story = StoryObj<typeof Button>;

export default {
  component: Button,
  args: {
    children: 'Button',
    type: BUTTON_TYPE.SUBMIT,
    onClick: () => {}
  }
} as Meta;

export const Default: Story = {
  args: {
    isDisabled: false
  }
};

export const Disabled: Story = {
  args: {
    isDisabled: true
  }
};
