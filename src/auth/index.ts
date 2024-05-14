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
        const matched = credentials?.email === 'email' && credentials?.password === 'password';

        if (!matched) {
          return null;
        }

        return {
          email: 'email',
          password: 'password'
        };
      }
    })
  ]
});
