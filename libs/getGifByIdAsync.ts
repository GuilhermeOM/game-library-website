import { GiphyFetch } from '@giphy/js-fetch-api';

export default async function getGifById(id: string) {
  const giphyFetch = new GiphyFetch(process.env.GIPHY_API_KEY as string);
  const { data } = await giphyFetch.gif(id);

  return data;
}
