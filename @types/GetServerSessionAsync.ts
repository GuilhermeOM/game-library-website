export interface GetServerSessionAsync {
  user?: {
    id: string;
    name: string;
    email: string;
    image: string;
  };
  token?: {
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
