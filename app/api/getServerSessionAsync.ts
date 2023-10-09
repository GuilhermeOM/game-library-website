import { options } from '@/app/api/auth/[...nextauth]/options';
import { getServerSession } from 'next-auth';

interface GetServerSessionAsync {
  user: {
    id: string;
    name: string;
    email: string;
    image: string;
  };
  token: {
    provider: string;
    type: string;
    providerAccountId: string;
    access_token: string;
    expires_at: number;
    id_token: string;
    refresh_token: string;
    scope: string;
    token_type: string;
  };
}

interface ServerSessionProps {
  user: {
    id: string;
    name: string;
    email: string;
    image: string;
    provider: string;
    type: string;
    providerAccountId: string;
    access_token: string;
    expires_at: number;
    id_token: string;
    refresh_token: string;
    scope: string;
    token_type: string;
  };
}

export async function getServerSessionAsync(): Promise<GetServerSessionAsync> {
  const session = (await getServerSession(
    options
  )) as ServerSessionProps | null;
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
