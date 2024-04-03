import { Meta as _Meta, StoryObj } from '@storybook/react';

import { PageCard } from '.';

type Meta = _Meta<typeof PageCard>;
type Story = StoryObj<typeof PageCard>;

export default {
  component: PageCard,
  args: {
    children: <div>children</div>
  }
} as Meta;

export const Default: Story = {
  args: {}
};
