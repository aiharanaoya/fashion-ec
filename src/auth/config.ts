import { compare } from 'bcrypt';
import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';

import { fetchUserByEmail } from '@/actions/user';

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {}
      },
      authorize: async (credentials) => {
        const { email, password } = credentials;

        const user = await fetchUserByEmail(email as string);

        if (!user) {
          return null;
        }

        const isMatch = await compare(password as string, user.password);

        if (!isMatch) {
          return null;
        }

        console.log('ログインに成功しました');

        return user;
      }
    })
  ]
});
