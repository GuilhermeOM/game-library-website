'use client';

import { useEffect, useState } from 'react';
import { Gif as Giphy } from '@giphy/react-components';
import { IGif } from '@giphy/js-types';
import { motion } from 'framer-motion';

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

  return gif ? (
    <Giphy
      gif={gif!}
      width={width}
      height={height}
      className={className}
      backgroundColor='#6d28d9'
      hideAttribution
      noLink
    />
  ) : (
    <div
      className='flex items-center justify-center bg-black rounded-md overflow-hidden'
      style={{ width: width, height: height }}
    >
      <motion.span
        className='w-12 h-4 bg-white rounded-full bg-gradient-to-r from-purple-500 via-red-500 to-yellow-500'
        initial={{
          x: 0,
        }}
        animate={{
          x: [0, 0, -40, 0, 40, 0],
        }}
        transition={{
          duration: 0.8,
          ease: 'linear',
          times: [0, 0.2, 0.5, 0.8, 1],
          repeat: Infinity,
          repeatDelay: 0.4,
        }}
      />
    </div>
  );
}
