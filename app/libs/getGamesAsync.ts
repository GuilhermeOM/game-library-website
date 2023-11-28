import { getServerSessionAsync } from './getServerSessionAsync';

export default async function getGamesAsync(cursor?: string): Promise<Game[]> {
  const { token } = await getServerSessionAsync();

  const games = (await fetch(
    `${process.env.TWITCH_BASEURL}/games/top${
      cursor ? `?after=${cursor}` : ''
    }`,
    {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Client-ID': process.env.TWITCH_ID as string,
        Authorization: `Bearer ${token?.access_token}`,
      },
    }
  )
    .then((response) => (response.status === 200 ? response.json() : null))
    .catch((exception) => {
      console.error(exception);
      return null;
    })) satisfies GetTopGamesAsync | null as GetTopGamesAsync | null;

  return games !== null ? games.data.filter((game) => game.igdb_id !== '') : [];
}
