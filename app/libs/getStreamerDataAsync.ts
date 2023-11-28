import { getServerSessionAsync } from './getServerSessionAsync';

export default async function getStreamersDataByIdAsync(usersId: string[]) {
  const { token } = await getServerSessionAsync();

  const users = (await fetch(
    `${process.env.TWITCH_BASEURL}/users?${buildIdQueryParams(usersId)}`,
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
    })) satisfies getStreamersDataByIdAsync | null as getStreamersDataByIdAsync | null;

  return {
    success: users !== null,
    data: users ? users.data : [],
  };
}

function buildIdQueryParams(rawValue: string[]) {
  let queryParams = '';

  for (const value of rawValue) {
    queryParams += `id=${value}&`;
  }

  if (queryParams.length > 0) {
    queryParams = queryParams.slice(0, queryParams.length - 1);
  }

  return queryParams;
}
