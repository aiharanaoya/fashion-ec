import { Meta as _Meta, StoryObj } from '@storybook/react';

import { FormSearch } from '.';

type Meta = _Meta<typeof FormSearch>;
type Story = StoryObj<typeof FormSearch>;

export default {
  component: FormSearch,
  args: {
    href: '',
    value: '',
    onChangeForm: () => {
      console.log('input text');
    }
  }
} as Meta;

export const Default: Story = {
  args: {}
};
