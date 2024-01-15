export interface GetServerSessionAsync {
  user: {
    name: string;
    email: string;
    image: string;
  };
  token: {
    access_token: string;
    expires_at: number;
    is_valid: boolean;
  };
}
