import { Meta as _Meta, StoryObj } from '@storybook/react';

import { SignUpForm } from '.';

type Meta = _Meta<typeof SignUpForm>;
type Story = StoryObj<typeof SignUpForm>;

export default {
  component: SignUpForm,
  args: {
    name: '',
    postalCode: '',
    address: '',
    tel: '',
    email: '',
    password: '',
    changeName: () => {},
    changePostalCode: () => {},
    changeAddress: () => {},
    changeTel: () => {},
    changeEmail: () => {},
    changePassword: () => {},
    setIsConfirm: () => {}
  }
} as Meta;

export const Default: Story = {
  args: {}
};
