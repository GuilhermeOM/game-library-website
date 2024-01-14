import { getServerSessionAsync } from './getServerSessionAsync';

export default async function getGameByIgdbIdAsync(id: string) {
  const { token } = await getServerSessionAsync();

  const game = (await fetch(`${process.env.IGDB_BASEURL}/games`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Client-ID': process.env.TWITCH_ID as string,
      Authorization: `Bearer ${token?.access_token}`,
    },
    body: `fields *; 
           fields genres.name; 
           fields themes.name; 
           fields platforms.abbreviation,platforms.alternative_name,platforms.name; 
           where id = ${id};`,
  })
    .then((response) => (response.status === 200 ? response.json() : []))
    .catch((exception) => {
      console.error(exception);
      return [];
    })) satisfies About[] as About[];

  return game;
}
