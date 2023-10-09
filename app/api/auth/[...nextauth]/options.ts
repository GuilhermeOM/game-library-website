import type { NextAuthOptions } from 'next-auth';
import TwitchProvider from 'next-auth/providers/twitch';

export const options: NextAuthOptions = {
  providers: [
    TwitchProvider({
      clientId: process.env.TWITCH_ID as string,
      clientSecret: process.env.TWITCH_SECRET as string,
    }),
  ],
  callbacks: {
    async jwt({ user, token, account }) {
      if (user) {
        token.user = { ...user, ...account };
      }
      return token;
    },
    async session({ session, token }) {
      if (token?.user) {
        session.user = token.user;
      }
      return session;
    },
  },
  session: {
    strategy: 'jwt',
  },
  pages: {
    signIn: '/auth/signin',
  },
};
