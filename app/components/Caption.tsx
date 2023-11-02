interface CaptionProps {
  children: string;
}

export default function Caption({ children }: CaptionProps) {
  return <p className='text-sm text-gray-400'>{children}</p>;
}
