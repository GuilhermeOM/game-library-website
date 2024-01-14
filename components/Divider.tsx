interface DividerProps {
  position: 'horizontal' | 'vertical';
}

export default function Divider({ position }: DividerProps) {
  return (
    <div
      className={`bg-stone-900 rounded ${
        position === 'horizontal' ? `h-1 w-full my-2` : `w-1 h-full mx-2`
      }`}
    />
  );
}
