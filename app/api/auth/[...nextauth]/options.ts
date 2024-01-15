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
    async jwt({ token, account }) {
      if (account) {
        token = Object.assign({}, token, {
          access_token: account.access_token,
          expires_at: account.expires_at,
        });
      }

      return token;
    },
    async session({ session, token }) {
      if (session) {
        session = Object.assign({}, session, {
          access_token: token.access_token,
          expires_at: token.expires_at,
        });
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
