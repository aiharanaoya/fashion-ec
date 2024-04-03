import { Meta as _Meta, StoryObj } from '@storybook/react';

import { ContentCard } from '.';

type Meta = _Meta<typeof ContentCard>;
type Story = StoryObj<typeof ContentCard>;

export default {
  component: ContentCard,
  args: {
    children: <div>children</div>
  }
} as Meta;

export const Default: Story = {
  args: {}
};
