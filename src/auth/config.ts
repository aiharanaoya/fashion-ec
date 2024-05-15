import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {}
      },
      authorize: async (credentials) => {
        const matched =
          credentials.email === 'xxxx@xxxx.com' && credentials.password === 'xxxxxxxx';

        if (!matched) {
          return null;
        }

        console.log('ログインに成功しました');

        return {
          email: 'xxxx@xxxx.com',
          password: 'xxxxxxxx'
        };
      }
    })
  ]
});
