import { Meta as _Meta, StoryObj } from '@storybook/react';

import { FormText } from '.';

type Meta = _Meta<typeof FormText>;
type Story = StoryObj<typeof FormText>;

export default {
  component: FormText,
  args: {
    labelText: 'テキスト',
    required: false,
    type: 'text',
    id: 'input-text',
    name: 'input-text',
    placeholder: 'placeholder',
    onChange: () => {
      console.log('input text');
    }
  }
} as Meta;

export const Default: Story = {
  args: {}
};

export const Disabled: Story = {
  args: {
    value: 'disabled',
    disabled: true
  }
};

export const Required: Story = {
  args: {
    required: true
  }
};

export const Error: Story = {
  args: {
    errorText: 'エラーテキスト'
  }
};
