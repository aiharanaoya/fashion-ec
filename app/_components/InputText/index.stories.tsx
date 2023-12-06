import { Meta as _Meta, StoryObj } from '@storybook/react';

import { InputText } from '.';

type Meta = _Meta<typeof InputText>;
type Story = StoryObj<typeof InputText>;

export default {
  component: InputText,
  args: {
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

export const Error: Story = {
  args: {
    isError: true
  }
};
