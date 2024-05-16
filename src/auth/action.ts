'use server';

import { signIn, signOut } from '@/auth/config';

/** ログイン */
export const login = async (emailValue: string, passwordValue: string) => {
  await signIn('credentials', { email: emailValue, password: passwordValue });
};

/** ログアウト */
export const logout = async () => {
  await signOut();
};
