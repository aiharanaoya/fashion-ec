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
    phoneNumber: '',
    email: '',
    password: '',
    changeName: () => {},
    changePostalCode: () => {},
    changeAddress: () => {},
    changePhoneNumber: () => {},
    changeEmail: () => {},
    changePassword: () => {},
    setIsConfirm: () => {}
  }
} as Meta;

export const Default: Story = {
  args: {}
};
