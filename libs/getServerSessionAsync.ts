import { GetServerSessionAsync } from '@/@types/GetServerSessionAsync';
import { RawServerSession } from '@/@types/RawServerSession';
import { options } from '@/app/api/auth/[...nextauth]/options';
import { getServerSession } from 'next-auth';

export async function getServerSessionAsync(): Promise<GetServerSessionAsync> {
  const currentTimestamp = new Date().getTime() / 1000;
  const session = (await getServerSession(
    options
  )) satisfies RawServerSession | null;

  return {
    user: {
      name: session?.user?.name!,
      email: session?.user?.email!,
      image: session?.user?.image!,
    },
    token: {
      access_token: session?.access_token!,
      expires_at: session?.expires_at!,
      is_valid: session?.expires_at! >= currentTimestamp,
    },
  };
}
