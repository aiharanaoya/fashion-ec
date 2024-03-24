import { Meta as _Meta, StoryObj } from '@storybook/react';

import { LinkButton } from '.';

type Meta = _Meta<typeof LinkButton>;
type Story = StoryObj<typeof LinkButton>;

export default {
  component: LinkButton,
  args: {
    children: 'LinkButton',
    href: '/'
  }
} as Meta;

export const Default: Story = {
  args: {}
};

export const Primary: Story = {
  args: {
    isPrimary: true
  }
};
