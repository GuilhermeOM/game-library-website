interface AuthInputProps {
  type: 'text' | 'email' | 'password';
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function AuthInput({ type, value, onChange }: AuthInputProps) {
  return (
    <input
      className='p-4 bg-stone-900 rounded-sm outline-none border-none focus:ring-0 focus:ring-offset-0'
      type={type}
      value={value}
      onChange={onChange}
    />
  );
}
