import { compare } from 'bcrypt';
import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { object, string } from 'zod';

import { fetchUserByEmail } from '@/actions/user';

/** ログインスキーマ */
const loginSchema = object({
  email: string({ required_error: 'メールアドレスは必須です' })
    .min(1, 'メールアドレスは必須です')
    .max(100, 'メールアドレスは100文字以下で入力してください')
    .email('メールアドレスの形式にしてください'),
  password: string({ required_error: 'パスワードは必須です' })
    .min(1, 'パスワードは必須です')
    .min(8, 'パスワードは8文字以上で入力してください')
    .max(100, 'パスワードは100文字以下で入力してください')
});

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {}
      },
      authorize: async (credentials) => {
        const parsedCredentials = loginSchema.safeParse(credentials);

        if (!parsedCredentials.success) {
          return null;
        }

        const { email, password } = parsedCredentials.data;

        const user = await fetchUserByEmail(email as string);

        if (!user) {
          return null;
        }

        const isMatch = await compare(password as string, user.password);

        if (!isMatch) {
          return null;
        }

        return user;
      }
    })
  ]
});
