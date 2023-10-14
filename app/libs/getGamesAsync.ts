export default async function getGamesAsync(
  token: string,
  offset: number,
  limit: number = 10
): Promise<Game[]> {
  const games = (await fetch(`${process.env.IGDB_BASEURL}/games`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Client-ID': process.env.TWITCH_ID as string,
      Authorization: `Bearer ${token}`,
    },
    body: `fields *; 
           fields cover.image_id,cover.animated,cover.height,cover.width,cover.url; 
           fields genres.name; 
           fields themes.name; 
           fields platforms.abbreviation,platforms.alternative_name,platforms.name; 
           offset ${offset}; 
           limit ${limit}; 
           sort created_at desc; 
           where rating != null;`,
  })
    .then((response) => (response.status === 200 ? response.json() : []))
    .catch((exception) => {
      console.error(exception);
      return [];
    })) satisfies Game[];

  return games;
}
