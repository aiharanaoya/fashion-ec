import { Meta as _Meta, StoryObj } from '@storybook/react';

import { SignUpConfirm } from '.';

type Meta = _Meta<typeof SignUpConfirm>;
type Story = StoryObj<typeof SignUpConfirm>;

export default {
  component: SignUpConfirm,
  args: {
    name: 'name',
    postalCode: 'postalCode',
    address: 'address',
    tel: 'tel',
    email: 'email',
    password: 'password',
    setIsConfirm: () => {}
  }
} as Meta;

export const Default: Story = {
  args: {}
};
