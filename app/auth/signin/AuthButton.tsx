interface AuthButtonProps {
  value?: string;
  icon?: React.ReactNode;
  disabled?: boolean;
}

export default function AuthButton({
  value,
  icon,
  disabled = false,
}: AuthButtonProps) {
  return (
    <button
      className='mt-2 p-4 bg-violet-700 hover:bg-violet-800 rounded-sm min-w-full flex gap-2 justify-center items-center disabled:cursor-default disabled:bg-violet-800 transition ease-in-out delay-70'
      type='submit'
      disabled={disabled}
    >
      {value} {icon}
    </button>
  );
}
