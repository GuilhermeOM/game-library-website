'use client';

import { useEffect, useState } from 'react';
import { Gif as Giphy } from '@giphy/react-components';
import { IGif } from '@giphy/js-types';

interface GifProps {
  className: string;
  gifId: string;
  width: number;
  height: number;
}

export default function Gif({ className, gifId, width, height }: GifProps) {
  const [gif, setGif] = useState<IGif | null>(null);

  useEffect(() => {
    getGifById(gifId);
  }, []);

  async function getGifById(id: string) {
    const result = await fetch(`api/giphy?id=${id}`).then((response) =>
      response.json()
    );

    setGif(result.gif);
  }

  return (
    gif && (
      <Giphy
        gif={gif}
        width={width}
        height={height}
        className={className}
        backgroundColor='#6d28d9'
      />
    )
  );
}
