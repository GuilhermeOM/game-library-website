interface DividerProps {
  position: 'horizontal' | 'vertical';
  divisionLength: number;
}

export default function Divider({ position, divisionLength }: DividerProps) {
  return (
    <div
      className={`bg-stone-900 rounded ${
        position === 'horizontal'
          ? `h-1 w-full my-${divisionLength}`
          : `w-1 h-full mx-2`
      }`}
    />
  );
}
