import { Meta as _Meta, StoryObj } from '@storybook/react';

import { FormSearch } from '.';

type Meta = _Meta<typeof FormSearch>;
type Story = StoryObj<typeof FormSearch>;

export default {
  component: FormSearch,
  args: {
    value: '',
    onChangeForm: () => {
      console.log('input text');
    },
    onClickButton: () => {
      console.log('button click');
    }
  }
} as Meta;

export const Default: Story = {
  args: {}
};
