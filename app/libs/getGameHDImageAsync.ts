export default async function getGameHDImageByGamesListAsync(games: Game[]) {
  const imagesList: GameHDImage[] = [];

  for (const game of games) {
    const result = (await fetch(
      `${process.env.IGDB_IMAGE_BASEURL}/igdb/image/upload/t_720p/${game.cover.image_id}.jpg`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'image/jpeg',
        },
      }
    )
      .then((response) =>
        response.status === 200 ? response.arrayBuffer() : null
      )
      .catch((exception) => {
        console.error(exception);
        return null;
      })) satisfies ArrayBuffer | null;

    if (result) {
      imagesList.push({
        game_id: game.id,
        image_base64: arrayBufferToBase64(result),
      });
    }
  }

  return imagesList;
}

function arrayBufferToBase64(arrayBuffer: ArrayBuffer) {
  const buffer = Buffer.from(arrayBuffer);
  return buffer.toString('base64');
}
