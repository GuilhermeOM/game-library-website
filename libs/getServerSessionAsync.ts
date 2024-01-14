import { GetServerSessionAsync } from '@/@types/GetServerSessionAsync';
import { RawServerSession } from '@/@types/RawServerSession';
import { options } from '@/app/api/auth/[...nextauth]/options';
import { getServerSession } from 'next-auth';

export async function getServerSessionAsync(): Promise<GetServerSessionAsync> {
  const session = (await getServerSession(
    options
  )) satisfies RawServerSession | null;

  return {
    user: {
      id: session?.user?.id!,
      name: session?.user?.name!,
      email: session?.user?.email!,
      image: session?.user?.image!,
    },
    token: {
      provider: session?.user?.provider!,
      type: session?.user?.type!,
      providerAccountId: session?.user.providerAccountId!,
      access_token: session?.user?.access_token!,
      expires_at: session?.user?.expires_at!,
      id_token: session?.user?.id_token!,
      refresh_token: session?.user?.refresh_token!,
      scope: session?.user?.scope!,
      token_type: session?.user?.token_type!,
    },
  };
}
