import getGifById from '@/app/libs/getGifByIdAsync';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');

  if (id) {
    const gif = await getGifById(id);
    return Response.json({ gif });
  }

  return new Response('Gif id not specified.', {
    status: 400,
  });
}
