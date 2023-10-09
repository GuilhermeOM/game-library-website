interface AuthCaptionProps {
  value: string;
}

export default function AuthCaption({ value }: AuthCaptionProps) {
  return (
    <p className='text-sm text-gray-400'>
      {value}
    </p>
  );
}
