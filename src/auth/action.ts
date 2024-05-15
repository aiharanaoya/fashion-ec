'use server';

import { signIn } from '@/auth/config';

/** ログイン */
export const login = async (emailValue: string, passwordValue: string) => {
  await signIn('credentials', { email: emailValue, password: passwordValue });
};
