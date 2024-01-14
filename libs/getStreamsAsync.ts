import { getServerSessionAsync } from './getServerSessionAsync';

export default async function getStreamsAsync(cursor?: string) {
  const { token } = await getServerSessionAsync();

  const streams = (await fetch(
    `${process.env.TWITCH_BASEURL}/streams${cursor ? `?after=${cursor}` : ''}`,
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
    })) satisfies GetStreamsAsync | null as GetStreamsAsync | null;

  return {
    success: streams !== null,
    data: streams ? streams.data : [],
  };
}
