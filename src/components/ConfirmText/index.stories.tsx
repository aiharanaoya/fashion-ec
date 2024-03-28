import { Meta as _Meta, StoryObj } from '@storybook/react';

import { ConfirmText } from '.';

type Meta = _Meta<typeof ConfirmText>;
type Story = StoryObj<typeof ConfirmText>;

export default {
  component: ConfirmText,
  args: {
    labelText: 'labelText',
    valueText: 'valueText'
  }
} as Meta;

export const Default: Story = {
  args: {}
};
