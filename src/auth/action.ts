'use server';

import { redirect } from 'next/navigation';

import { signIn, signOut } from '@/auth/config';

/** ログイン */
export const login = async (emailValue: string, passwordValue: string) => {
  try {
    await signIn('credentials', { email: emailValue, password: passwordValue });
  } catch (error) {
    console.log(error);
  }
  redirect('/');
};

/** ログアウト */
export const logout = async () => {
  await signOut();
};
