import { getServerSessionAsync } from './api/getServerSessionAsync';

export default async function Home() {
  const session = await getServerSessionAsync();

  return (
    <main>
      <h1>{JSON.stringify(session)}</h1>
    </main>
  );
}
