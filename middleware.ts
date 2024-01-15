import { NextRequest, NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';

interface TokenType {
  name: string;
  email: string;
  picture: string;
  sub: string;
  access_token: string;
  expires_at: number;
  iat: number;
  exp: number;
  jti: string;
}

export { default } from 'next-auth/middleware';

export const config = { matcher: ['/'] };

export async function middleware(request: NextRequest) {
  const token = (await getToken({ req: request })) as TokenType | null;
  const currentTimestamp = new Date().getTime() / 1000;

  if (
    (token === null ||
      (token !== null && token.expires_at <= currentTimestamp)) &&
    process.env.NEXTAUTH_URL
  ) {
    return NextResponse.redirect(`${process.env.NEXTAUTH_URL}/auth/signin`);
  }

  return null;
}
