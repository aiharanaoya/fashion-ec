import { Meta as _Meta, StoryObj } from '@storybook/react';

import { SignUpForm } from '.';

type Meta = _Meta<typeof SignUpForm>;
type Story = StoryObj<typeof SignUpForm>;

export default {
  component: SignUpForm,
  args: {
    name: '',
    zipCode: '',
    address: '',
    tel: '',
    mailAddress: '',
    password: '',
    changeName: () => {},
    changeZipCode: () => {},
    changeAddress: () => {},
    changeTel: () => {},
    changeMailAddress: () => {},
    changePassword: () => {},
    setIsConfirm: () => {}
  }
} as Meta;

export const Default: Story = {
  args: {}
};
