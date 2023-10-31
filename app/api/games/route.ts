import getGameHDImageByGamesListAsync from '@/app/libs/getGameHDImageAsync';
import getGamesAsync from '@/app/libs/getGamesAsync';
import { NextApiRequest } from 'next';
import { NextResponse } from 'next/server';

export async function GET(req: NextApiRequest) {
  const { searchParams } = new URL(req.url as string);
  const offset = searchParams.get('offset');
  const limit = searchParams.get('limit');

  const games = await getGamesAsync(Number(offset), Number(limit));
  const highDefinitionCovers = await getGameHDImageByGamesListAsync(games);

  for (const game of games) {
    game.cover['hd'] = highDefinitionCovers.filter(
      (hd_image) => hd_image.game_id === game.id
    )[0];
  }

  return NextResponse.json({ games });
}
