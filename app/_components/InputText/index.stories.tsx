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

export const Number: Story = {
  args: {
    type: 'number'
  }
};

export const EMail: Story = {
  args: {
    type: 'email'
  }
};

export const Tel: Story = {
  args: {
    type: 'tel'
  }
};

export const Password: Story = {
  args: {
    type: 'tel'
  }
};

export const Disabled: Story = {
  args: {
    value: 'disabled',
    disabled: true
  }
};